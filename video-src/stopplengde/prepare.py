"""Lager samlet fortellerlyd og tidsplan for «Stopplengde – reaksjonslengde og bremselengde».

Opptakene (ElevenLabs) brukes uendret. Ligger bare MP3 i lyd/mp3/, lages WAV (24 kHz mono)
med stillheten før og etter talen fjernet. Det legges bare inn stillhet før og etter hvert kapittel,
og eventuelt en ekstra pause i en eksisterende stillhet mellom to setninger (PAUSES).
Setningsstartene er målt med ffmpeg silencedetect (-38 dB / 0,2 s).

Kjør:  python -I prepare.py
       python -I prepare.py --anslag   (uten lyd: anslått tidsplan fra ordtelling, bare til utvikling)
"""
import json, wave, pathlib, subprocess, sys

ROOT = pathlib.Path(__file__).resolve().parent
RATE = 24000
END_CARD = 4.0

# Ekstra stillhet i eksisterende pauser mellom setninger, der bildet trenger tid (tider i opptaket).
# kap 1: etter «så bremser du» (bilen skal rekke å stoppe før neste setning);
# kap 5: før «Er bremselengden oppgitt» (begge bilene står, så bytter regnemåten).
PAUSES = {1: [(7.65, 1.0)], 5: [(9.95, 1.5)]}

# Setningene i manuset, brukt til anslaget og til å sjekke at antallet setningsstarter stemmer.
TEXT = {
    1: ['Fra du oppdager en fare til bilen står stille, kjører du et godt stykke.', 'Først reagerer du, så bremser du.',
        'Reaksjonslengden og bremselengden blir til sammen stopplengden.'],
    2: ['Mens du reagerer, bremser ikke bilen.', 'Den kjører videre i samme fart.', 'Del farten på 3,6, så får du meter per sekund.',
        '40 kilometer i timen er omtrent 11 meter i sekundet.', 'Med ett sekunds reaksjonstid blir reaksjonslengden altså omtrent 11 meter.'],
    3: ['Er du trøtt eller uoppmerksom, kan reaksjonstiden bli to sekunder.', 'Da blir reaksjonslengden dobbelt så lang, omtrent 22 meter.',
        'Ikke fire ganger så lang, for farten er den samme.'],
    4: ['En vanlig huskeregel for full bremsing på tørr asfalt er:', 'Del farten på 10, gang tallet med seg selv, og del på 2.',
        'I 40 kilometer i timen blir det 4 ganger 4, som er 16.', 'Delt på 2 blir det 8 meter.', 'På vått føre eller is blir bremselengden mye lengre.'],
    5: ['I 80 kilometer i timen blir det 8 ganger 8, som er 64.', 'Delt på 2 blir det 32 meter, altså fire ganger så langt.',
        'Er bremselengden oppgitt i oppgaven, kan du regne med forholdet mellom fartene:', '80 delt på 40 er 2.', '2 ganger 2 er 4.',
        '8 meter ganger 4 er 32 meter.'],
    6: ['Legg sammen de to delene.', 'I 40 kilometer i timen er stopplengden omtrent 19 meter.', 'I 80 kilometer i timen er den omtrent 54 meter.',
        'Det er nesten tre ganger så langt.'],
    7: ['Reaksjonslengden følger farten og reaksjonstiden.', 'Bremselengden blir fire ganger så lang når farten dobles.',
        'Stopplengden er de to lagt sammen.'],
}

CHAPTERS = [
    # nr, tittel, lead, tail, setningsstarter i opptaket (None til de er målt)
    (1, 'Tre deler av stoppet', 1.5, 1.5, [0, 5.00, 9.15]),  # etter pausen
    (2, 'Reaksjonslengde', 0.6, 2.0, [0, 2.81, 5.28, 9.82, 14.04]),
    (3, 'Dobbel reaksjonstid', 0.6, 2.0, [0, 4.90, 9.78]),
    (4, 'Slik regner du bremselengden', 0.6, 1.5, [0, 4.33, 9.27, 14.07, 17.08]),
    (5, 'Dobbel fart', 0.6, 2.0, [0, 5.09, 11.86, 16.46, 18.87, 20.91]),  # etter pausen
    (6, 'Stopplengde', 0.6, 3.0, [0, 2.15, 6.91, 11.27]),  # pause etter siste setning
    (7, 'Husk dette', 0.6, 1.0, [0, 3.80, 7.83]),
]


def wav_for(nr):
    wav = ROOT / 'lyd' / f'TT Kap {nr}.wav'; mp3 = ROOT / 'lyd' / 'mp3' / f'TT Kap {nr}.mp3'
    if not wav.exists() and mp3.exists():
        trim = 'silenceremove=start_periods=1:start_threshold=-50dB'
        subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', str(mp3), '-af', f'{trim},areverse,{trim},areverse',
                        '-ar', str(RATE), '-ac', '1', '-sample_fmt', 's16', str(wav)], check=True)
    return wav if wav.exists() else None


def read(path):
    with wave.open(str(path)) as w:
        assert w.getframerate() == RATE and w.getnchannels() == 1 and w.getsampwidth() == 2, path
        return w.readframes(w.getnframes())


def estimate(nr):
    """Anslått lengde per setning: 2,7 ord i sekundet og 0,45 s pause mellom setningene."""
    starts, t = [], 0.0
    for s in TEXT[nr]:
        starts.append(round(t, 2)); t += len(s.split()) / 2.7 + .45
    return starts, t - .45


anslag = '--anslag' in sys.argv
only = int(sys.argv[sys.argv.index('--kapitler') + 1]) if '--kapitler' in sys.argv else 99
out = bytearray(); plan = []; t = 0.0
for nr, title, lead, tail, sentences in CHAPTERS[:only]:
    if anslag:
        sentences, audio = estimate(nr); pcm = None
    else:
        wav = wav_for(nr)
        if wav is None or sentences is None:
            print(f'Kapittel {nr}: venter på lyd eller setningsstarter, tas ikke med ennå'); break
        assert len(sentences) == len(TEXT[nr]), f'kapittel {nr}: {len(sentences)} setningsstarter, manuset har {len(TEXT[nr])}'
        pcm = read(wav)
        for at, sec in sorted(PAUSES.get(nr, []), reverse=True): i = round(at * RATE) * 2; pcm = pcm[:i] + bytes(round(sec * RATE) * 2) + pcm[i:]
        audio = len(pcm) / 2 / RATE
    start = t; speech = start + lead
    if pcm is not None: out += bytes(max(0, round(speech * RATE) * 2 - len(out))); out += pcm
    dur = lead + audio + tail
    plan.append({'chapter': nr, 'title': title, 'start': round(start, 4), 'speech': round(speech, 4),
                 'audio': round(audio, 4), 'end': round(start + dur, 4), 'sentences': sentences})
    t = start + dur
total = t + END_CARD
if not anslag:
    out += bytes(round(total * RATE) * 2 - len(out))
    with wave.open(str(ROOT / 'fortelling.wav'), 'wb') as w:
        w.setnchannels(1); w.setsampwidth(2); w.setframerate(RATE); w.writeframes(bytes(out))
    subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', str(ROOT / 'fortelling.wav'), '-ac', '1', '-b:a', '64k', str(ROOT / 'fortelling.mp3')], check=True)
json.dump({'duration': round(total, 4), 'end_card': END_CARD, 'rate': RATE, 'estimate': anslag, 'chapters': plan},
          open(ROOT / 'timing.json', 'w', encoding='utf-8', newline='\n'), ensure_ascii=False, indent=1)
print(f'Samlet varighet {total:.2f} s' + (' (anslag)' if anslag else ''))
for c in plan: print(c['chapter'], c['title'], c['start'], '→', c['end'], c['sentences'])

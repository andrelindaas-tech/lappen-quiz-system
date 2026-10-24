"""Lager samlet fortellerlyd og tidsplan for «Rundkjøring – vikeplikt, feltvalg og blinklys».

Opptakene (ElevenLabs, Mia) brukes uendret. Ligger bare MP3 i lyd/mp3/, lages WAV (24 kHz mono)
med stillheten før og etter talen fjernet. Det legges bare inn stillhet før og etter hvert kapittel,
og eventuelt en ekstra pause i en eksisterende stillhet mellom to setninger (PAUSES).
Setningsstartene er målt med ffmpeg silencedetect (-38 dB / 0,2 s).

Kjør:  python -I prepare.py
"""
import json, wave, pathlib, subprocess, sys

ROOT = pathlib.Path(__file__).resolve().parent
RATE = 24000
END_CARD = 4.0

# Ekstra stillhet i eksisterende pauser mellom setninger, der bildet trenger tid (tider i opptaket):
# kap 2: før «Har rundkjøringen to felt» (bildet bytter fra ett til to felt);
# kap 3: før «Skal du lenger rundt» og før «Å blinke til venstre» (bilen kjører inn og rundt).
PAUSES = {2: [(10.94, 2.0)], 3: [(6.19, 2.5), (12.27, 2.5)]}

CHAPTERS = [
    # nr, tittel, lead, tail, setningsstarter i opptaket
    (1, 'Inn: vikeplikt', 1.5, 1.0, [0, 2.20, 8.62, 13.14, 19.67, 22.31, 26.18, 30.87]),
    (2, 'Inn: felt og plassering', 0.6, 2.0, [0, 4.51, 8.01, 13.44, 17.87, 21.15, 24.45, 28.67]),  # etter pausen
    (3, 'Blinklys inn og ut', 0.6, 2.0, [0, 9.04, 17.69]),  # etter pausene
    (4, 'Inne: feltskifte', 0.6, 4.5, [0, 5.74, 7.65]),  # lang hale: en runde til
    (5, 'Ut: gangfelt', 0.6, 3.5, [0, 3.86, 6.98, 12.11]),
    (6, 'Husk dette', 0.6, 1.0, [0, 4.94, 9.57]),
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


# --kapitler 1 gir bare de første kapitlene (pilot).
only = int(sys.argv[sys.argv.index('--kapitler') + 1]) if '--kapitler' in sys.argv else 99
out = bytearray(); plan = []; t = 0.0
for nr, title, lead, tail, sentences in CHAPTERS[:only]:
    wav = wav_for(nr)
    if wav is None or sentences is None:
        print(f'Kapittel {nr}: venter på lyd eller setningsstarter, tas ikke med ennå'); break
    pcm = read(wav)
    for at, sec in sorted(PAUSES.get(nr, []), reverse=True): i = round(at * RATE) * 2; pcm = pcm[:i] + bytes(round(sec * RATE) * 2) + pcm[i:]
    audio = len(pcm) / 2 / RATE
    start = t; speech = start + lead
    out += bytes(max(0, round(speech * RATE) * 2 - len(out))); out += pcm
    dur = lead + audio + tail
    plan.append({'chapter': nr, 'title': title, 'start': round(start, 4), 'speech': round(speech, 4),
                 'audio': round(audio, 4), 'end': round(start + dur, 4), 'sentences': sentences})
    t = start + dur
total = t + END_CARD
out += bytes(round(total * RATE) * 2 - len(out))
with wave.open(str(ROOT / 'fortelling.wav'), 'wb') as w:
    w.setnchannels(1); w.setsampwidth(2); w.setframerate(RATE); w.writeframes(bytes(out))
subprocess.run(['ffmpeg', '-y', '-loglevel', 'error', '-i', str(ROOT / 'fortelling.wav'), '-ac', '1', '-b:a', '64k', str(ROOT / 'fortelling.mp3')], check=True)
json.dump({'duration': round(total, 4), 'end_card': END_CARD, 'rate': RATE, 'chapters': plan},
          open(ROOT / 'timing.json', 'w', encoding='utf-8', newline='\n'), ensure_ascii=False, indent=1)
print(f'Samlet varighet {total:.2f} s')
for c in plan: print(c['chapter'], c['title'], c['start'], '→', c['end'])

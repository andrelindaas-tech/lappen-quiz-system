"""Lager samlet fortellerlyd og tidsplan for «Vikeplikt – hvem kjører først?».

Opptakene (ElevenLabs, Mia) brukes uendret. Det legges bare inn stillhet før og etter
hvert kapittel, og i kapittel 5 en ekstra pause på 2 s i stillheten før siste setning
(innsnevringen får mer tid i bildet). Setningsstartene er målt med ffmpeg silencedetect (-38 dB / 0,2 s).

Kjør:  python -I prepare.py
"""
import json, wave, pathlib

ROOT = pathlib.Path(__file__).resolve().parent
RATE = 24000
END_CARD = 4.0

PAUSES = {5: (10.25, 2.0)}  # kapittel: (tid i opptaket, sekunder stillhet som settes inn)

CHAPTERS = [
    # nr, tittel, lead, tail, setningsstarter i opptaket (ElevenLabs, Mia)
    (1, 'Hvem bestemmer?', 1.5, 1.0, [0, 1.61, 4.29, 8.03, 12.22, 15.40]),
    (2, 'Høyreregelen', 0.6, 2.4, [0, 5.36, 7.68, 10.46]),
    (3, 'Skilt går foran', 0.6, 2.2, [0, 3.56, 9.82]),
    (4, 'Ut fra en parkeringsplass', 0.6, 1.6, [0, 3.81, 6.23, 16.85]),
    (5, 'Smal veg og hindring', 0.6, 3.4, [0, 6.82, 12.72]),
    (6, 'Buss fra holdeplass', 0.6, 2.6, [0, 3.37, 9.20, 12.43, 15.34]),
    (7, 'Husk dette', 0.6, 1.0, [0, 4.24, 9.47]),
]


def read(path):
    with wave.open(str(path)) as w:
        assert w.getframerate() == RATE and w.getnchannels() == 1 and w.getsampwidth() == 2, path
        return w.readframes(w.getnframes())


out = bytearray(); plan = []; t = 0.0
for nr, title, lead, tail, sentences in CHAPTERS:
    pcm = read(ROOT / 'lyd' / f'TT Kap {nr}.wav')
    if nr in PAUSES: at, sec = PAUSES[nr]; i = round(at * RATE) * 2; pcm = pcm[:i] + bytes(round(sec * RATE) * 2) + pcm[i:]
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
json.dump({'duration': round(total, 4), 'end_card': END_CARD, 'rate': RATE, 'chapters': plan},
          open(ROOT / 'timing.json', 'w', encoding='utf-8', newline='\n'), ensure_ascii=False, indent=1)
print(f'Samlet varighet {total:.2f} s')
for c in plan: print(c['chapter'], c['title'], c['start'], '→', c['end'])

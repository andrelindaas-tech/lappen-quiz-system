"""Lager samlet fortellerlyd og tidsplan for «Trafikkuhell – sikre, varsle, hjelpe».

Opptakene (ElevenLabs, Mia) brukes uendret. Det legges bare inn stillhet før og etter
hvert kapittel. Setningsstartene er målt med ffmpeg silencedetect (-38 dB / 0,2 s).

Kjør:  python -I prepare.py
"""
import json, wave, pathlib

ROOT = pathlib.Path(__file__).resolve().parent
RATE = 24000
END_CARD = 4.0

CHAPTERS = [
    # nr, tittel, lead, tail, setningsstarter i opptaket
    (1, 'Stans', 1.5, 1.0, [0, 3.51, 6.45, 11.67]),
    (2, 'Sikre deg selv', 0.6, 1.2, [0, 1.75, 4.78]),
    (3, 'Sikre stedet', 1.0, 1.5, [0, 2.19, 7.17, 12.12, 21.43]),
    (4, 'Varsle', 0.6, 1.0, [0, 3.15, 7.53]),
    (5, 'Hjelp', 0.6, 1.2, [0, 2.90, 6.77, 14.38, 16.11]),
    (6, 'Bli på stedet', 0.6, 1.0, [0, 4.40, 8.79]),
]


def read(path):
    with wave.open(str(path)) as w:
        assert w.getframerate() == RATE and w.getnchannels() == 1 and w.getsampwidth() == 2, path
        return w.readframes(w.getnframes())


out = bytearray(); plan = []; t = 0.0
for nr, title, lead, tail, sentences in CHAPTERS:
    pcm = read(ROOT / 'lyd' / f'TT Kap {nr}.wav'); audio = len(pcm) / 2 / RATE
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

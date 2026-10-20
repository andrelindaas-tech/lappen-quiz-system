"""Lager samlet fortellerlyd og tidsplan for hele filmen.

Hver kapittelfil fra Azure brukes uendret. Det legges bare inn stillhet
FØR og ETTER hvert kapittel (lead/tail), aldri inne i en setning.
Setningenes starttider er målt med pausedeteksjon (ffmpeg silencedetect)
og står i SENTENCES nedenfor, relativt til starten av hvert opptak.

Kjør:  python -I prepare.py
"""
import json, wave, pathlib, array

ROOT = pathlib.Path(__file__).resolve().parent
RATE = 24000
END_CARD = 3.0

CHAPTERS = [
    # nr, tittel, lead (s stillhet før tale), setningsstarter i opptaket
    (1, 'Farger', 0.0, [0, 3.6, 7.2, 11.1, 13.8, 17.35, 20.85, 24.45]),
    (2, 'Kjørefeltlinje', 0.5, [0, 2.76, 5.79, 10.07]),
    (3, 'Varsellinje', 0.5, [0, 3.60, 6.34, 11.15, 14.64]),
    (4, 'Sperrelinje', 0.5, [0, 3.94, 6.71, 9.74, 13.29]),
    (5, 'Kombinerte linjer', 1.5, [0, 4.44, 7.14, 11.96, 16.15]),
    (6, 'Sperreområde', 0.5, [0, 2.58, 6.91, 9.39]),
    (7, 'Kjørefeltpiler', 0.5, [0, 3.77, 7.30]),
    (8, 'Skillelinje', 0.5, [0, 6.30, 10.43]),
    (9, 'Kantlinje', 0.5, [0, 3.12, 6.45, 10.22, 12.69]),
]
TAIL = 0.5


def read(path):
    with wave.open(str(path)) as w:
        assert w.getframerate() == RATE and w.getnchannels() == 1 and w.getsampwidth() == 2, path
        return w.readframes(w.getnframes())


out = bytearray()
plan = []
t = 0.0
for nr, title, lead, sentences in CHAPTERS:
    pcm = read(ROOT / 'lyd' / f'TT Kap {nr}.wav')
    audio = len(pcm) / 2 / RATE
    start = t
    speech = start + lead
    # Stillhet frem til talen starter (prøvenøyaktig plassering).
    pad = round(speech * RATE) * 2 - len(out)
    out += bytes(max(0, pad))
    out += pcm
    dur = lead + audio + TAIL
    plan.append({'chapter': nr, 'title': title, 'start': round(start, 4), 'speech': round(speech, 4),
                 'audio': round(audio, 4), 'end': round(start + dur, 4), 'sentences': sentences})
    t = start + dur

total = t + END_CARD
out += bytes(round(total * RATE) * 2 - len(out))
with wave.open(str(ROOT / 'fortelling.wav'), 'wb') as w:
    w.setnchannels(1); w.setsampwidth(2); w.setframerate(RATE); w.writeframes(bytes(out))

json.dump({'duration': round(total, 4), 'end_card': END_CARD, 'rate': RATE,
           'note': 'Azure-opptakene er uendret; kun stillhet før/etter hvert kapittel.',
           'chapters': plan}, open(ROOT / 'timing.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
print(f'Samlet varighet {total:.2f} s')
for c in plan:
    print(c['chapter'], c['title'], c['start'], '→', c['end'])

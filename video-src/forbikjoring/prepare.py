"""Lager samlet fortellerlyd og tidsplan for «Forbikjøring – hvor mye vei trenger du?».

Hver kapittelfil fra Azure brukes uendret. Det legges bare inn stillhet
FØR og ETTER hvert kapittel (lead/tail), aldri inne i en setning.
Setningsstartene er målt med pausedeteksjon (ffmpeg silencedetect, -32 dB / 0,12 s)
og står i CHAPTERS, relativt til starten av hvert opptak.

Kapittel 2 har lang hale: forbikjøringen vises i sanntid (24,5 s) og er ferdig
først etter at talen er slutt. Tidtakeren teller ferdig i stillheten.

Kjør:  python -I prepare.py
"""
import json, wave, pathlib

ROOT = pathlib.Path(__file__).resolve().parent
RATE = 24000
END_CARD = 4.0

CHAPTERS = [
    # nr, tittel, lead (s stillhet før tale), tail (s stillhet etter), setningsstarter i opptaket
    # Stemme: ElevenLabs «Mia Starset – Clear and Friendly» (Azure/Pernille-opptakene ligger i lyd-azure/).
    (1, 'Før du kjører forbi', 1.5, 0.5, [0, 3.43, 6.38, 9.54, 12.33]),
    (2, 'Så lang tid tar det', 1.0, 12.37, [0, 4.37, 7.60, 11.58, 14.35, 17.52]),
    (3, 'Fartsgrensen', 0.5, 0.8, [0, 3.20]),
    (4, 'Forbikjøring forbudt', 2.5, 0.6, [0, 5.39, 12.97, 17.05]),
    (5, 'Når du blir forbikjørt', 0.5, 0.6, [0, 5.81, 10.67]),
    (6, 'Husk dette', 0.5, 2.0, [0, 3.05, 5.15]),
]


def read(path):
    with wave.open(str(path)) as w:
        assert w.getframerate() == RATE and w.getnchannels() == 1 and w.getsampwidth() == 2, path
        return w.readframes(w.getnframes())


out = bytearray()
plan = []
t = 0.0
for nr, title, lead, tail, sentences in CHAPTERS:
    pcm = read(ROOT / 'lyd' / f'TT Kap {nr}.wav')
    audio = len(pcm) / 2 / RATE
    start = t
    speech = start + lead
    pad = round(speech * RATE) * 2 - len(out)
    out += bytes(max(0, pad))
    out += pcm
    dur = lead + audio + tail
    plan.append({'chapter': nr, 'title': title, 'start': round(start, 4), 'speech': round(speech, 4),
                 'audio': round(audio, 4), 'end': round(start + dur, 4), 'sentences': sentences})
    t = start + dur

total = t + END_CARD
out += bytes(round(total * RATE) * 2 - len(out))
with wave.open(str(ROOT / 'fortelling.wav'), 'wb') as w:
    w.setnchannels(1); w.setsampwidth(2); w.setframerate(RATE); w.writeframes(bytes(out))

json.dump({'duration': round(total, 4), 'end_card': END_CARD, 'rate': RATE,
           'note': 'Azure-opptakene er uendret; kun stillhet før/etter hvert kapittel.',
           'chapters': plan}, open(ROOT / 'timing.json', 'w', encoding='utf-8', newline='\n'), ensure_ascii=False, indent=1)
print(f'Samlet varighet {total:.2f} s')
for c in plan:
    print(c['chapter'], c['title'], c['start'], '→', c['end'])

// Storyboard for «Stopplengde – reaksjonslengde og bremselengde» (manus: 6-stopplengde.md).
// Regneeksempel: 40 og 80 km/t, 1 s reaksjonstid, full bremsing på tørr asfalt.
// 40 km/t: 11,1 + 8 = 19,1 m. 80 km/t: 22,2 + 32 = 54,2 m. Fronten på bilen står på streken (x = 0) når faren oppdages.
export const CHAPTERS = [
  { title: 'Tre deler av stoppet', sec: 16 },
  { title: 'Reaksjonslengde', sec: 26 },
  { title: 'Dobbel reaksjonstid', sec: 16 },
  { title: 'Slik regner du bremselengden', sec: 24 },
  { title: 'Dobbel fart', sec: 28 },
  { title: 'Stopplengde', sec: 22 },
  { title: 'Husk dette', sec: 14 },
];
export const POSTER = ['Stopplengde:', 'reaksjon og bremsing'];
// Faktisk lengde fra timing.json (2:14).
export const DURATION_EST = 134.36;
export const SUMMARY_TITLE = 'HUSK DETTE';
export const SUMMARY_ROWS = [['40 km/t', '11,1 m', '8 m', '19,1 m'], ['80 km/t', '22,2 m', '32 m', '54,2 m']];

export function SHOTS({ C, ORANGE }) {
  const T = C.tealLight, v40 = 40 / 3.6, r40 = v40, r80 = 80 / 3.6, b40 = 8, b80 = 32;
  const one = { cx: 10, span: 34 }, two = { cx: 27, span: 80, lz: 12 };
  const S = [];
  const O = ORANGE;
  // Kapittel 1
  S.push({ id: 'k1a', chapter: 1, at: .15, text: ['Først reagerer du,', 'så bremser du'], cam: one, ruler: [0, 25],
    cars: [['near', 0]], ball: [22, -1.2], pills: [{ x: 0, text: 'Faren oppdages', y: 1.6, dy: -60 }] });
  S.push({ id: 'k1b', chapter: 1, at: .8, text: ['Reaksjonslengde + bremselengde', '= stopplengde'], cam: one, ruler: [0, 25],
    cars: [['near', r40 + b40, true]], ball: [24, 1.2], strips: [['near', 0, r40, T], ['near', r40, r40 + b40, O]],
    bars: [{ segs: [[0, r40, T, 'Reaksjon'], [r40, r40 + b40, O, 'Bremsing']] }], brackets: [[0, r40 + b40, 'Stopplengde']] });
  // Kapittel 2
  S.push({ id: 'k2a', chapter: 2, at: .45, text: ['Del farten på 3,6:', '40 km/t ≈ 11 m/s'], cam: one, ruler: [0, 25],
    cars: [['near', v40 * .6]], strips: [['near', 0, v40 * .6, T]], pills: [{ x: v40 * .6 - 2, text: '0,6 s', dot: T, y: 1.8 }],
    bars: [{ segs: [[0, v40 * .6, T, '']] }], note: { lines: ['40 ÷ 3,6 = 11,1 m/s'] } });
  S.push({ id: 'k2b', chapter: 2, at: .85, text: ['Ett sekund reaksjonstid:', 'ca. 11 meter'], cam: one, ruler: [0, 25],
    cars: [['near', r40, true]], strips: [['near', 0, r40, T]], pills: [{ x: r40 - 2, text: '1,0 s', dot: T, y: 1.8 }],
    bars: [{ segs: [[0, r40, T, '11,1 m']] }], note: { lines: ['40 ÷ 3,6 = 11,1 m/s', '11,1 m/s × 1 s = 11,1 m'] } });
  // Kapittel 3
  S.push({ id: 'k3a', chapter: 3, at: .6, text: ['To sekunder: dobbelt så lang,', 'ca. 22 meter'], cam: { cx: 11, span: 40 }, ruler: [0, 25],
    cars: [['far', r40, true], ['near', 2 * r40, true]], strips: [['far', 0, r40, T], ['near', 0, 2 * r40, T]],
    bars: [{ label: '1 s', segs: [[0, r40, T, '11,1 m']] }, { label: '2 s', segs: [[0, 2 * r40, T, '22,2 m']] }],
    note: { lines: ['11,1 m/s × 1 s = 11,1 m', '11,1 m/s × 2 s = 22,2 m'] } });
  // Kapittel 4
  S.push({ id: 'k4a', chapter: 4, at: .7, text: ['Del på 10, gang med seg selv', 'og del på 2'], cam: one, ruler: [0, 25],
    cars: [['near', r40 + b40, true]], strips: [['near', 0, r40, T], ['near', r40, r40 + b40, O]],
    bars: [{ segs: [[0, r40, T, ''], [r40, r40 + b40, O, '8 m']] }], note: { title: 'Tørr asfalt, 40 km/t', lines: ['40 ÷ 10 = 4', '4 × 4 = 16', '16 ÷ 2 = 8 m'] } });
  // Kapittel 5: begge begynner å bremse på samme strek.
  S.push({ id: 'k5a', chapter: 5, at: .7, text: ['Dobbel fart: fire ganger', 'så lang bremselengde'], cam: { cx: 16, span: 52 }, ruler: [0, 35],
    cars: [['far', b40, true], ['near', b80, true]], strips: [['far', 0, b40, O], ['near', 0, b80, O]],
    bars: [{ label: '40 km/t', segs: [[0, b40, O, '8 m']] }, { label: '80 km/t', segs: [[0, b80, O, '32 m']] }],
    note: { title: 'To måter, samme svar', w: 600, lines: ['8 × 8 = 64, 64 ÷ 2 = 32 m', '80 ÷ 40 = 2, 2 × 2 = 4', '8 m × 4 = 32 m'] } });
  // Kapittel 6
  const full = { cam: two, ruler: [0, 55], ball: [30, 0], markers: [[30, 'Ballen, 30 m']],
    cars: [['far', r40 + b40, true], ['near', r80 + b80, true]],
    strips: [['far', 0, r40, T], ['far', r40, r40 + b40, O], ['near', 0, r80, T], ['near', r80, r80 + b80, O]],
    bars: [{ label: '40 km/t', segs: [[0, r40, T, ''], [r40, r40 + b40, O, '']], end: '19,1 m' }, { label: '80 km/t', segs: [[0, r80, T, ''], [r80, r80 + b80, O, '']], end: '54,2 m' }] };
  S.push({ id: 'k6a', chapter: 6, at: .7, text: ['40 km/t: ca. 19 m', '80 km/t: ca. 54 m'], ...full });
  // Kapittel 7
  S.push({ id: 'k7a', chapter: 7, at: .5, text: ['Reaksjon + bremsing', '= stopplengde'], ...full, markers: [], summary: true });
  S.push({ id: 'plakat', chapter: 1, at: 0, poster: true, ...full });
  return S;
}

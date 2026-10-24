// Storyboard for «Rundkjøring – vikeplikt, feltvalg og blinklys» (manus: 5-rundkjoring.md).
// Rundkjøring A har ett felt og samme mål som den interaktive demoen. B har to felt.
// Blå bil er «deg» og kommer alltid fra sør (armen S).
export const CHAPTERS = [
  { title: 'Inn: vikeplikt', sec: 30 },
  { title: 'Inn: felt og plassering', sec: 30 },
  { title: 'Blinklys inn og ut', sec: 26 },
  { title: 'Inne: feltskifte', sec: 18 },
  { title: 'Ut: gangfelt', sec: 20 },
  { title: 'Husk dette', sec: 14 },
];
export const SUMMARY_TITLE = 'HUSK DETTE';
export const SUMMARY = ['Inn: vik og velg felt', 'Inne: hold feltet', 'Ut: blink og se etter gående'];
export const POSTER = ['Rundkjøring:', 'vikeplikt, felt og blinklys'];
// Plakatens lengde: faktisk lengde fra timing.json (149,85 s). Filmen bruker timing.json direkte.
export const DURATION_EST = 149.85;

export function SHOTS({ WORLDS, ARMS, armPt, route, pathFrom, dWhere, dNear, V, C }) {
  const A = WORLDS.A, B = WORLDS.B, PI = Math.PI;
  const along = (w, arm, p) => (p.x - w.ox) * Math.cos(ARMS[arm]) - (p.z - w.oz) * Math.sin(ARMS[arm]);
  const P = (w, th, r) => [w.ox + r * Math.cos(th), w.oz - r * Math.sin(th)];
  const cam = (fx, fy, fz, tx, ty, tz, fov) => ({ from: V(fx, fy, fz), to: V(tx, ty, tz), fov });
  // Kamera bak et kjøretøy: back meter bak, h meter opp, ser ahead meter frem langs kjøreveien.
  const chase = (path, d, back = 9, h = 3.4, ahead = 14, side = 0, ly = .8) => { const a = path.at(d - back), b = path.at(d + ahead);
    return { from: V(a.x + Math.cos(a.yaw) * side, h, a.z - Math.sin(a.yaw) * side), to: V(b.x, ly, b.z) }; };
  // Kamera langs en arm: fra (a, s, h) mot (a2, s2, ly).
  const armCam = (w, arm, a, s, h, a2, s2, ly = .5, fov) => { const [x, z] = armPt(w, arm, a, s), [x2, z2] = armPt(w, arm, a2, s2); return { from: V(x, h, z), to: V(x2, ly, z2), fov }; };
  const FRONT = 2.25;
  const stopAt = (path, arm, w, a) => dWhere(path, p => along(w, arm, p) <= a + FRONT);
  const blueDot = '#1689c9', redDot = '#c4473b';

  // Kjøreveier i A (ett felt).
  const A_SN = route(A, 'S', 'N', { offIn: A.lanesIn.right, rc: A.circ.right });
  const A_SE = route(A, 'S', 'E', { offIn: A.lanesIn.right, rc: A.circ.right });
  const A_SW = route(A, 'S', 'W', { offIn: A.lanesIn.left, rc: A.circ.left, a0: .6, a1: .9 });
  const A_WE = route(A, 'W', 'E', { offIn: 3.3, rc: A.circ.right });
  const A_NS = route(A, 'N', 'S', { offIn: 3.3, rc: A.circ.right });
  const A_ES = route(A, 'E', 'S', { offIn: 3.3, rc: A.circ.right });
  const vlA = stopAt(A_SN, 'S', A, A.vl);
  // Kjøreveier i B (to felt).
  const B_SE = route(B, 'S', 'E', { offIn: B.lanesIn.right, rc: B.circ.right });
  const B_SN = route(B, 'S', 'N', { offIn: B.lanesIn.right, rc: B.circ.right });
  const B_SW = route(B, 'S', 'W', { offIn: B.lanesIn.left, rc: B.circ.left, rc2: B.circ.right, change: [.68, .95] });
  const B_SW2 = route(B, 'S', 'W', { offIn: B.lanesIn.left, rc: B.circ.left, rc2: B.circ.right, change: [.83, .97], laps: 1 });
  const B_NS = route(B, 'N', 'S', { offIn: B.lanesIn.right, rc: B.circ.right });
  const dB = (path, w, th, r) => dNear(path, ...P(w, th, r));

  // Fasene i A: inn (S), inne (sirkelen), ut (E).
  const armPoly = (w, arm, a0, a1, s0, s1) => [armPt(w, arm, a0, s0), armPt(w, arm, a1, s0), armPt(w, arm, a1, s1), armPt(w, arm, a0, s1)];
  const zIn = armPoly(A, 'S', A.vl, 40, 1.1, A.hwIn - .1), zOut = armPoly(A, 'E', A.ro + .3, 34, -A.hwOut + .1, -1.1);
  const mk = (w, arm, a, s, y = 0) => { const [x, z] = armPt(w, arm, a, s); return [x, y, z]; };

  const S = [];
  // ---------- Kapittel 1 ----------
  { const dBl = 32, dR = dB(A_NS, A, PI * 1.05, A.circ.right);
    S.push({ id: 'k1a', chapter: 1, at: .1, text: ['En rundkjøring er et kryss.', 'Del den i tre: inn, inne, ut'],
      cam: cam(-26, 58, 52, 2, 0, -2), actors: [['blue', A_SN, vlA - 5], ['red', A_NS, dR]],
      overlay: [{ zone: { pts: zIn } }, { zone: { annulus: [A, A.isl + .2, A.ro - .2] } }, { zone: { pts: zOut } },
        { badge: { p: mk(A, 'S', 31, -9, .5), text: '1  Før du kjører inn', dot: C.teal } },
        { badge: { p: [A.ox - 4, .5, A.oz - 13.5], text: '2  Mens du er inne', dot: C.teal } },
        { badge: { p: mk(A, 'E', 30, -3.3, .5), text: '3  Når du skal ut', dot: C.teal, dx: -60 } }] }); }
  { const dR = dB(A_WE, A, PI * 1.5 - .7, A.circ.right);
    S.push({ id: 'k1b', chapter: 1, at: .45, text: ['Vik for alle som', 'allerede er inne'],
      cam: armCam(A, 'S', 38, 2.4, 5, 9, -1.5, .5), actors: [['blue', A_SN, vlA], ['red', A_WE, dR]],
      overlay: [{ sign: 'AS202' }, { ring: 'blue' }, { arrow: [A_WE, dR + 2.4, dR + 13] },
        { badge: { actor: 'red', text: 'Inne i rundkjøringen', dot: redDot } }, { badge: { actor: 'blue', text: 'Du', dot: blueDot } }] }); }
  { const d = vlA - 30, dR = dB(A_WE, A, PI * 1.5 - 1.0, A.circ.right), dG = dB(A_ES, A, PI * .9, A.circ.right);
    S.push({ id: 'k1c', chapter: 1, at: .85, text: ['Senk farten i god tid.', 'Da får du oversikt'],
      cam: armCam(A, 'S', 64, 2.6, 4.2, 10, 0, .3), actors: [['blue', A_SN, d], ['red', A_WE, dR], ['grey', A_ES, dG]],
      overlay: [{ badge: { actor: 'blue', text: 'Senk farten', dot: blueDot } }] }); }

  // ---------- Kapittel 2 ----------
  { const d = vlA - 9;
    S.push({ id: 'k2a', chapter: 2, at: .15, text: ['Ett felt, skal til høyre:', 'hold deg til høyre i feltet'],
      cam: armCam(A, 'S', 44, 1, 10, 6, 4, 0), actors: [['blue', A_SE, d, { signal: 1 }]],
      overlay: [{ zone: { pts: armPoly(A, 'S', A.vl + .8, 40, 3.3, A.hwIn - .15) } }, { dashed: [A_SE, d + 3, d + 34, C.tealLight] }, { badge: { actor: 'blue', text: 'Skal til høyre', dot: blueDot } }] }); }
  { const d = stopAt(A_SW, 'S', A, A.vl) - 9;
    S.push({ id: 'k2b', chapter: 2, at: .35, text: ['Ett felt, skal til venstre:', 'legg deg mot midten'],
      cam: armCam(A, 'S', 44, 1, 10, 6, 0, 0), actors: [['blue', A_SW, d]],
      overlay: [{ zone: { pts: armPoly(A, 'S', A.vl + .8, 40, 1.15, 3.3) } }, { dashed: [A_SW, d + 3, d + 64, C.tealLight] }, { badge: { actor: 'blue', text: 'Skal til venstre', dot: blueDot } }] }); }
  { const ds = stopAt(B_SN, 'S', B, B.vl);
    S.push({ id: 'k2c', chapter: 2, at: .75, text: ['To felt: velg felt', 'før du kjører inn'],
      cam: cam(B.ox + 6, 70, 68, B.ox, 0, 9), actors: [],
      overlay: [{ dashed: [B_SE, ds - 20, ds + 34, '#ffffff', 6, .9] }, { dashed: [B_SN, ds - 20, ds + 60, C.tealLight, 6, -.7] }, { dashed: [B_SW, stopAt(B_SW, 'S', B, B.vl) - 20, stopAt(B_SW, 'S', B, B.vl) + 82, '#f2c230', 6] },
        { badge: { p: mk(B, 'E', 33, -3.3, 1), text: 'Til høyre', dot: '#ffffff', dx: -40 } }, { badge: { p: mk(B, 'N', 30, -3.3, 1), text: 'Rett frem', dot: C.tealLight } },
        { badge: { p: mk(B, 'W', 33, -3.3, 1), text: 'Til venstre', dot: '#f2c230', dx: 40 } },
        { badge: { p: mk(B, 'S', 40, B.lanesIn.right, 1), text: 'Høyre felt', dot: C.muted, dx: 120 } }, { badge: { p: mk(B, 'S', 40, B.lanesIn.left, 1), text: 'Venstre felt', dot: C.muted, dx: -120 } }] }); }

  // ---------- Kapittel 3 ----------
  { const d = stopAt(A_SE, 'S', A, A.vl) - .3;
    S.push({ id: 'k3a', chapter: 3, at: .15, text: ['Første utkjøring: blink til', 'høyre før du kjører inn'],
      cam: armCam(A, 'S', 33, 1.2, 3.3, 10, 6, .6), actors: [['blue', A_SE, d, { signal: 1 }]],
      overlay: [{ dashed: [A_SE, d + 3, d + 30, C.tealLight] }, { badge: { actor: 'blue', text: 'Blinker til høyre', dot: '#ffa31a' } }] }); }
  { const d = stopAt(A_SW, 'S', A, A.vl) - .3;
    S.push({ id: 'k3b', chapter: 3, at: .5, text: ['Venstreblink inn er frivillig,', 'men hjelper andre'],
      cam: armCam(A, 'S', 31, 5.6, 3.0, 10, -2, .6), actors: [['blue', A_SW, d, { signal: -1 }]],
      overlay: [{ badge: { actor: 'blue', text: 'Venstreblink: frivillig', dot: '#ffa31a' } }] }); }
  { const d = dB(A_SW, A, PI / 2 - .12, A.circ.left);
    S.push({ id: 'k3c', chapter: 3, at: .82, text: ['Blink til høyre ved', 'utkjøringen før din'],
      cam: cam(A.ox + 4, 19, A.oz + 6, A.ox - 5, 0, A.oz - 15), actors: [['blue', A_SW, d, { signal: 1 }]],
      overlay: [{ dashed: [A_SW, d + 3, d + 22, C.tealLight] }, { zone: { pts: armPoly(A, 'N', A.ro + .3, 30, -A.hwOut + .1, -1.1) } },
        { badge: { p: mk(A, 'N', 36, -3.3, .5), text: 'Utkjøringen før', dot: C.teal } }, { badge: { actor: 'blue', text: 'Blink til høyre nå', dot: '#ffa31a', dx: 150, dy: -1.2, dy2: 20 } }] }); }

  // ---------- Kapittel 4 ----------
  { const d = dB(B_SW, B, PI * .62, B.circ.left), dW = dB(B_NS, B, PI * .62, B.circ.right) + 1.0;
    S.push({ id: 'k4a', chapter: 4, at: .3, text: ['Skifter du felt, har du', 'vikeplikt. Det er ikke fletting'],
      cam: chase(B_SW, d, 13, 7.5, 12, -1.5, 0), actors: [['blue', B_SW, d, { signal: 1 }], ['white', B_NS, dW]],
      overlay: [{ ring: 'blue' }, { arrow: [B_NS, dW + 2.6, dW + 12] }, { badge: { actor: 'white', text: 'I høyre felt', dot: C.muted } }, { badge: { actor: 'blue', text: 'Vil ut', dot: blueDot } }] }); }
  { const d = dB(B_SW2, B, PI * .7, B.circ.left), dW = dB(B_NS, B, PI * .8, B.circ.right);
    S.push({ id: 'k4b', chapter: 4, at: .8, text: ['Kommer du ikke trygt over,', 'kjør en runde til'],
      cam: cam(B.ox - 4, 52, B.oz + 40, B.ox - 2, 0, B.oz), actors: [['blue', B_SW2, d], ['white', B_NS, dW]],
      overlay: [{ dashed: [B_SW2, d + 3, B_SW2.len - 62, C.tealLight, 6] }, { badge: { actor: 'blue', text: 'En runde til', dot: blueDot } }] }); }

  // ---------- Kapittel 5 ----------
  { const d = dB(A_SN, A, PI / 2 - .55, A.circ.right);
    S.push({ id: 'k5a', chapter: 5, at: .2, text: ['Sjekk speil og blindsone', 'før du svinger ut'],
      cam: chase(A_SN, d, 8, 3.2, 12, 1.2), actors: [['blue', A_SN, d, { signal: 1 }]],
      overlay: [{ badge: { actor: 'blue', text: 'Speil og blindsone', dot: blueDot } }] }); }
  { const stop = dWhere(A_SN, p => along(A, 'N', p) >= A.gs[0] - 1.2 - 2.25, A_SN.len / 2), cross = (A.gs[0] + A.gs[1]) / 2;
    const [px, pz] = armPt(A, 'N', cross, -4.6), bikeP = pathFrom(Array.from({ length: 20 }, (_, i) => P(A, .45 + i * .06, cross))), dK = dNear(bikeP, ...P(A, 1.12, cross));
    S.push({ id: 'k5b', chapter: 5, at: .7, text: ['Vik for gående', 'i gangfeltet'],
      cam: chase(A_SN, stop, 13, 5.2, 9, 0, .4), actors: [['blue', A_SN, stop, { signal: 1 }], ['bike', bikeP, dK]], figs: [['ped', px, pz, -PI / 2, 'walk', .3]],
      overlay: [{ ring: 'blue' }, { sign: 'AN516ut' }, { arrow: [pathFrom([armPt(A, 'N', cross, -4.6), armPt(A, 'N', cross, 6)]), .6, 6.5, .7] },
        { badge: { actor: 'ped', text: 'Gående', dot: C.muted } }, { badge: { actor: 'bike', text: 'Syklist', dot: C.muted } }] }); }

  // ---------- Kapittel 6 ----------
  S.push({ id: 'k6a', chapter: 6, at: .5, text: ['Prøv den interaktive', 'rundkjøringen på teori-test.no'], summary: true,
    cam: cam(-26, 58, 52, 2, 0, -2), actors: [['blue', A_SW, dB(A_SW, A, PI * .2, A.circ.left)]] });
  // Plakat.
  { const dR = dB(A_WE, A, PI * 1.5 - .7, A.circ.right);
    S.push({ id: 'plakat', chapter: 1, at: 0, poster: true, cam: armCam(A, 'S', 38, 2.4, 5, 9, -1.5, .5), actors: [['blue', A_SN, vlA], ['red', A_WE, dR]],
      overlay: [{ ring: 'blue' }, { arrow: [A_WE, dR + 2.4, dR + 13] }] }); }
  // Kontrollbilder ovenfra (ikke del av storyboardet).
  const all = { A: [A_SN, A_SE, A_SW, A_WE, A_NS, A_ES], B: [B_SE, B_SN, B_SW, B_NS] };
  for (const [k, w] of [['A', A], ['B', B]]) S.push({ id: 'dbg' + k, chapter: 1, at: 0, text: ['Kontroll', k], cam: cam(w.ox, 75, w.oz + .01, w.ox, 0, w.oz, 50),
    overlay: all[k].map((p, i) => ({ dashed: [p, 50, p.len - 50, ['#fff', '#14b8a6', '#f2c230', '#c4473b', '#1689c9', '#000'][i], 4] })) });
  return S;
}

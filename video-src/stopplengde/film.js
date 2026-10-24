// Filmen: hvert kapittel er en ren funksjon av tiden (u = tid siden kapittelstart, a = tid siden talestart).
// Fysikk: konstant fart i reaksjonstiden, så jevn retardasjon som gir nøyaktig bremselengden i manuset.
// Alle lengder måles fra fronten på bilen. Streken der faren oppdages ligger på x = 0.
// Tallene regnes med eksakte verdier (40 / 3,6 = 11,111 m/s) og rundes bare av i det som vises.
export function FILM({ C, ORANGE, ease, clamp, CHS, wide }) {
  const T = C.tealLight, O = ORANGE;
  const v40 = 40 / 3.6, v80 = 80 / 3.6, B40 = 8, B80 = 32;          // m/s og meter (huskeregelen: (fart/10)² / 2)
  const r40 = v40 * 1, r40x2 = v40 * 2, r80 = v80 * 1;                // reaksjonslengder (m)
  const win = (a, t0, t1, f = .3) => clamp((a - t0) / f) * clamp((t1 - a) / f);
  const fmt = (x, d = 1) => x.toFixed(d).replace('.', ',');
  const lerpCam = (P, Q, k) => ({ cx: P.cx + (Q.cx - P.cx) * k, span: P.span + (Q.span - P.span) * k, elev: (P.elev ?? 20) + ((Q.elev ?? 20) - (P.elev ?? 20)) * k, lz: (P.lz ?? P.span * .26) + ((Q.lz ?? Q.span * .26) - (P.lz ?? P.span * .26)) * k });

  // Bevegelse etter at faren oppdages (tau = 0). v i m/s, tr = reaksjonstid i s, b = bremselengde i m.
  // Før tau = 0 kjører bilen med konstant fart mot streken. Returnerer front (m), om bremselysene er på og farten.
  function motion(tau, v, tr, b) {
    const a = v * v / (2 * b), tb = v / a;
    if (tau < tr) return { x: v * tau, braking: false, v, phase: tau < 0 ? 'inn' : 'reaksjon' };
    const q = Math.min(tau - tr, tb);
    return { x: v * tr + v * q - a * q * q / 2, braking: true, v: v - a * q, phase: q >= tb ? 'stopp' : 'brems', stopTime: tr + tb };
  }
  const stopDur = (v, tr, b) => tr + 2 * b / v;

  // Striper på vegen og stolper under vegen for én bil: turkis reaksjon, oransje bremsing. De vokser med fronten.
  const stripsFor = (lane, m, rx, showBrake = true, alpha = 1) => {
    const x = Math.max(0, m.x), out = [[lane, 0, Math.min(x, rx), T, alpha]];
    if (showBrake && x > rx) out.push([lane, rx, x, O, alpha]); return out; };
  const segsFor = (m, rx, total, labels = {}, showBrake = true) => {
    const x = Math.max(0, m.x), done = m.phase === 'stopp';
    const s = [[0, Math.min(x, rx), T, x >= rx - 1e-6 ? (labels.r ?? '') : '']];
    if (showBrake && rx < total) s.push([rx, Math.max(rx, Math.min(x, total)), O, done ? (labels.b ?? '') : '']); return s; };
  const clock = (lane, m, tau, tr, alpha = 1, y = 2.5) => ({ x: Math.min(Math.max(m.x, 0), tr * v40) - 2.2, lane, y, text: `${fmt(clamp(tau, 0, tr))} s`, dot: T, alpha: alpha * clamp((tau + .3) / .3) });

  const CAM = [
    { cx: 10, span: 34 },             // 1
    { cx: 10, span: 34 },             // 2
    { cx: 11, span: 40, elev: 46 },   // 3 (brattere kamera, så de to feltene skilles)
    { cx: 10, span: 34 },             // 4
    { cx: 16, span: 52, elev: 30 },   // 5
    { cx: 27, span: 80, lz: 12, elev: 26 }, // 6
    { cx: 27, span: 80, lz: 12, elev: 26 }, // 7
  ];
  const RULER = [[0, 25], [0, 25], [0, 25], [0, 25], [0, 35], [0, 55], [0, 55]];
  // Myk zoom fra forrige kapittels kamera de første 1,4 sekundene.
  // Bredformat viser mindre i høyden ved samme bredde. Der vises et bredere utsnitt, så vegen, stolpene og bakgrunnen får plass.
  const fit = c => wide() ? { ...c, span: c.span * 1.5, lz: (c.lz ?? c.span * .26) * .55 } : c;
  // I kapittel 7 i bredformat flyttes utsnittet, så stolpene havner til venstre for oppsummeringskortet.
  const camFor = (i, u) => { const c = fit(i === 0 ? CAM[0] : lerpCam(CAM[i - 1], CAM[i], ease(u / 1.4)));
    if (!wide()) return c;
    if (i === 6) return { ...c, cx: c.cx + 22 * ease(u / 1.4) };
    if (i === 4) return { ...c, cx: c.cx + 8 * ease(u / 1.4) };   // kap 5: linjalen klar av notisarket
    if (i === 5) return { ...c, cx: c.cx + 8 * (1 - ease(u / 1.4)) };
    return c; };
  const audioEnd = i => CHS[i].audio;

  function chapterState(i, u, a) {
    const S = CHS[i].sentences, cam = camFor(i, u), ruler = RULER[i];
    const base = { cam, ruler, lineAlpha: 1 };

    if (i === 0) {
      // 1 Tre deler av stoppet: ballen triller ut, streken tennes, turkis under reaksjonen, oransje under bremsingen, klammen til slutt.
      const h = S[1] + .5, tau = a - h, m = motion(tau, v40, 1, B40);   // bremsingen starter når «så bremser du» sies
      const bz = Math.min(1.0, -7 + 3.6 * Math.max(0, a - (h - 2.3))), bx = 22;
      return { ...base, lineAlpha: clamp((tau + .05) / .25),
        cars: [['near', m.x, m.braking]], ball: [bx, bz, (bz + 7) / .35],
        strips: stripsFor('near', m, r40),
        bars: [{ segs: segsFor(m, r40, r40 + B40, { r: 'Reaksjon', b: 'Bremsing' }), alpha: clamp((tau + .1) / .3) }],
        brackets: [[0, r40 + B40, 'Stopplengde', C.text, clamp((a - S[2] - .1) / .4)]],
        pills: [{ x: 0, text: 'Faren oppdages', y: 1.6, dy: -60, alpha: win(a, h - .05, S[2] + .2) }],
        log: { tau, front: m.x, phase: m.phase } };
    }

    if (i === 1) {
      // 2 Reaksjonslengde. Første gjennomkjøring under «Mens du reagerer … samme fart». Etter 1,0 s tennes bremselysene,
      // og bilen tones ut mens den bremser (bremsingen er ikke tema her). Andre gjennomkjøring under siste setning,
      // slik at stripen er 11,1 m når «11 meter» sies. Notisarket bygges opp i takt med talen.
      const h1 = S[0] + .9, tReplay = S[4] - .5, h2 = Math.max(S[4] + .6, audioEnd(1) - 1.7);
      const second = a >= tReplay, h = second ? h2 : h1, tau = a - h, m = motion(tau, v40, 1, B40);
      const fadeCar = 1 - clamp((tau - 1) / .6);
      const old = second ? 1 : 1 - clamp((a - (tReplay - .6)) / .5);   // første stripe tones ut før andre gjennomkjøring
      const show = second ? 1 : old;
      const lines = ['40 ÷ 3,6 = 11,1 m/s', '11,1 m/s × 1 s = 11,1 m'];
      const n2 = a >= h2 + 1;
      return { ...base,
        cars: [['near', m.x, m.braking, fadeCar]],
        strips: stripsFor('near', m, r40, false, show),
        bars: [{ segs: segsFor(m, r40, r40, { r: '11,1 m' }, false), alpha: show * clamp((tau + .1) / .3) }],
        pills: [clock('near', m, tau, 1, show)],
        note: a >= S[2] + .2 ? { lines: n2 ? lines : lines.slice(0, 1), alpha: clamp((a - S[2] - .2) / .3), lineAlpha: [1, clamp((a - h2 - 1) / .3)] } : null,
        log: { tau, front: m.x, phase: m.phase, run: second ? 2 : 1 } };
    }

    if (i === 2) {
      // 3 Dobbel reaksjonstid: to biler i samme fart. Øverst 1 s, nederst 2 s. Bare reaksjonslengdene vises.
      const h = S[1] + .8, tau = a - h, mf = motion(tau, v40, 1, B40), mn = motion(tau, v40, 2, B40);
      const ff = 1 - clamp((tau - 1) / .6), fn = 1 - clamp((tau - 2) / .6);
      const lines = ['11,1 m/s × 1 s = 11,1 m', '11,1 m/s × 2 s = 22,2 m'];
      return { ...base,
        cars: [['far', mf.x, mf.braking, ff], ['near', mn.x, mn.braking, fn]],
        strips: [...stripsFor('far', mf, r40, false), ...stripsFor('near', mn, r40x2, false)],
        // Klokkene teller i radetikettene foran stolpene (0,0 → 1,0 s og 0,0 → 2,0 s).
        bars: [{ label: `${fmt(clamp(tau, 0, 1))} s`, segs: segsFor(mf, r40, r40, { r: '11,1 m' }, false), alpha: clamp((tau + .4) / .3) },
          { label: `${fmt(clamp(tau, 0, 2))} s`, segs: segsFor(mn, r40x2, r40x2, { r: '22,2 m' }, false), alpha: clamp((tau + .4) / .3) }],
        note: tau >= 1 ? { lines: tau >= 2 ? lines : lines.slice(0, 1), alpha: clamp((tau - 1) / .3), lineAlpha: [1, clamp((tau - 2) / .3)] } : null,
        log: { tau, far: mf.x, near: mn.x } };
    }

    if (i === 3) {
      // 4 Slik regner du bremselengden: huskeregelen først, så bremser bilen i 40 km/t og den oransje stripen ender på 8 m
      // når «8 meter» sies. Notisarket bygger opp de tre trinnene.
      // Bilen bremser fra streken (bare bremselengden, som i manuset). Første gang mens huskeregelen forklares,
      // andre gang slik at den oransje stripen når 8 m når «8 meter» sies.
      const tEnd = Math.min(S[4] - .3, S[3] + 1.9), tReplay = S[2] - .3, second = a >= tReplay;
      const hb = second ? tEnd - stopDur(v40, 0, B40) : S[0] + 1.6, tau = a - hb, m = motion(tau, v40, 0, B40);
      const show = second ? 1 : 1 - clamp((a - (tReplay - .7)) / .5);
      const tStep2 = S[2] + (S[3] - S[2]) * .62;   // «4 ganger 4, som er 16»
      const rule = a < S[2] - .2;
      const note = rule ? { title: 'Huskeregel, tørr asfalt', lines: ['(fart ÷ 10) × (fart ÷ 10) ÷ 2'], alpha: clamp((a - S[1] + .2) / .4) }
        : { title: 'Tørr asfalt, 40 km/t', lines: ['40 ÷ 10 = 4', '4 × 4 = 16', '16 ÷ 2 = 8 m'].slice(0, a >= S[3] + .1 ? 3 : a >= tStep2 ? 2 : 1), alpha: clamp((a - S[2] + .2) / .3) };
      return { ...base, lineAlpha: 1,
        cars: [['near', m.x, m.braking, show]],
        strips: [['near', 0, Math.max(0, m.x), O, show]],
        bars: [{ segs: [[0, Math.max(0, Math.min(m.x, B40)), O, m.phase === 'stopp' ? '8 m' : '']], alpha: show * clamp((tau + .1) / .3) }],
        note, log: { tau, front: m.x, phase: m.phase, run: second ? 2 : 1 } };
    }

    if (i === 4) {
      // 5 Dobbel fart: 40 og 80 km/t begynner å bremse på samme strek (ingen reaksjonslengde her).
      // 80-bilen stopper på 32 m når «32 meter» sies. Notisarket: først 8 × 8, så forholdsmetoden.
      const tEnd = S[1] + 2.2, hb = tEnd - stopDur(v80, 0, B80), tau = a - hb;
      const ms = motion(tau, v40, 0, B40), mq = motion(tau, v80, 0, B80);
      const L1 = a >= S[1] + .1 ? '8 × 8 = 64, 64 ÷ 2 = 32 m' : '8 × 8 = 64';
      const L2 = a >= S[4] - .1 ? '80 ÷ 40 = 2, 2 × 2 = 4' : '80 ÷ 40 = 2';
      const lines = [L1]; let active = 0;
      if (a >= S[3] - .1) { lines.push(L2); active = 1; }
      if (a >= S[5] - .1) { lines.push('8 m × 4 = 32 m'); active = 2; }
      const segs = (m, b, lab) => [[0, Math.max(0, Math.min(m.x, b)), O, m.phase === 'stopp' ? lab : '']];
      return { ...base,
        cars: [['far', ms.x, ms.braking], ['near', mq.x, mq.braking]],
        strips: [['far', 0, Math.max(0, ms.x), O], ['near', 0, Math.max(0, mq.x), O]],
        bars: [{ label: '40 km/t', segs: segs(ms, B40, '8 m') }, { label: '80 km/t', segs: segs(mq, B80, '32 m') }],
        note: a >= S[0] + .2 ? { title: 'To måter, samme svar', w: 600, lines, active, alpha: clamp((a - S[0] - .2) / .3) } : null,
        log: { tau, near: mq.x, far: ms.x } };
    }

    if (i === 5 || i === 6) {
      // 6 Stopplengde: begge kjører hele stoppet fra samme strek. Ballen ligger ved 30 m mellom feltene.
      // 7 Husk dette: sluttbildet fra kapittel 6 og oppsummeringstabellen.
      const h = i === 5 ? S[1] + 1.0 : 99, tau = i === 5 ? a - h : 99;
      const ms = motion(tau, v40, 1, B40), mq = motion(tau, v80, 1, B80);
      const row = (m, rx, b, lab, label) => ({ label, segs: [[0, Math.max(0, Math.min(m.x, rx)), T, ''], [rx, Math.max(rx, Math.min(m.x, rx + b)), O, '']], end: lab, endAlpha: m.phase === 'stopp' ? 1 : 0, alpha: clamp((tau + .1) / .3) });
      return { ...base,
        ball: [30, 0, 0], markers: i === 5 ? [[30, 'Ballen, 30 m']] : [],
        cars: [['far', ms.x, ms.braking], ['near', mq.x, mq.braking]],
        strips: [...stripsFor('far', ms, r40), ...stripsFor('near', mq, r80)],
        bars: [row(ms, r40, B40, '19,1 m', '40 km/t'), row(mq, r80, B80, '54,2 m', '80 km/t')],
        summary: i === 6 ? clamp((a + .2) / .6) : 0,
        log: { tau, far: ms.x, near: mq.x } };
    }
  }
  return { chapterState, motion, consts: { v40, v80, B40, B80, r40, r80 } };
}

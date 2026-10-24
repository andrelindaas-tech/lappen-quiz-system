// Filmen: hvert kapittel er en ren funksjon av tiden (u = tid siden kapittelstart, a = tid siden talestart).
// Bevegelsene starter og slutter i de godkjente nøkkelbildene (shots.js).
export function FILM(api) {
  const { WORLDS, ARMS, armPt, route, pathFrom, dWhere, dNear, thetaOf, V, C, ease, win, stopGo, goFrom, profile, CHS } = api;
  const A = WORLDS.A, B = WORLDS.B, PI = Math.PI;
  const along = (w, arm, p) => (p.x - w.ox) * Math.cos(ARMS[arm]) - (p.z - w.oz) * Math.sin(ARMS[arm]);
  const P = (w, th, r) => [w.ox + r * Math.cos(th), w.oz - r * Math.sin(th)];
  const cam = (fx, fy, fz, tx, ty, tz, fov) => ({ from: V(fx, fy, fz), to: V(tx, ty, tz), fov });
  const armCam = (w, arm, a, s, h, a2, s2, ly = .5, fov) => { const [x, z] = armPt(w, arm, a, s), [x2, z2] = armPt(w, arm, a2, s2); return { from: V(x, h, z), to: V(x2, ly, z2), fov }; };
  const lerpCam = (Q, R, k) => ({ from: Q.from.clone().lerp(R.from, k), to: Q.to.clone().lerp(R.to, k), fov: Q.fov == null && R.fov == null ? undefined : (Q.fov ?? R.fov) + ((R.fov ?? Q.fov) - (Q.fov ?? R.fov)) * k });
  // Kamera bak et kjøretøy: back meter bak, h meter opp, ser ahead meter frem langs kjøreveien.
  const chase = (path, d, back = 9, h = 3.4, ahead = 14, side = 0, ly = .8, fov) => { const a = path.at(d - back), b = path.at(d + ahead);
    return { from: V(a.x + Math.cos(a.yaw) * side, h, a.z - Math.sin(a.yaw) * side), to: V(b.x, ly, b.z), fov }; };
  // Kamera i rundkjøringen: fra et punkt ved vinkelen θ + dθ (radius r, høyde h) mot et punkt look meter frem langs kjøreveien.
  const circCam = (w, path, d, dth, r, h, look = 4, ly = .4, fov) => { const p = path.at(d), q = path.at(d + look), th = thetaOf(w, p), [x, z] = P(w, th + dth, r); return { from: V(x, h, z), to: V(q.x, ly, q.z), fov }; };
  const clamp01 = v => Math.max(0, Math.min(1, v)), thetaPos = (w, p) => { let t = thetaOf(w, p); while (t < PI / 2) t += 2 * PI; while (t > PI / 2 + 2 * PI) t -= 2 * PI; return t; };
  const FRONT = 2.25;
  const stopAt = (path, arm, w, a) => dWhere(path, p => along(w, arm, p) <= a + FRONT);
  const dB = (path, w, th, r) => dNear(path, ...P(w, th, r));
  const armPoly = (w, arm, a0, a1, s0, s1) => [armPt(w, arm, a0, s0), armPt(w, arm, a1, s0), armPt(w, arm, a1, s1), armPt(w, arm, a0, s1)];
  const mk = (w, arm, a, s, y = 0) => { const [x, z] = armPt(w, arm, a, s); return [x, y, z]; };
  const blueDot = '#1689c9', redDot = '#c4473b', greyDot = '#8d969b', R2 = '#7dd3fc', R3 = '#c4b5fd'; // rute 2 og 3 i kapittel 2
  const wide = () => api.wide();
  const FA = { blue: 2.4, red: 2.4, white: 2.4, grey: 2.4, green: 2.4, bike: 1.1 };
  const ahead = (n, path, d, len = 11, w = 1.1) => [path, d + FA[n], d + FA[n] + len, w];

  // Kjøreveier i A (ett felt), samme som i storyboardet.
  const A_SN = route(A, 'S', 'N', { offIn: A.lanesIn.right, rc: A.circ.right });
  const A_SE = route(A, 'S', 'E', { offIn: A.lanesIn.right, rc: A.circ.right });
  const A_SW = route(A, 'S', 'W', { offIn: A.lanesIn.left, rc: A.circ.left, a0: .6, a1: .9 });
  // Kjøreveier i B (to felt).
  const A_SE2 = route(A, 'S', 'E', { offIn: 4.35, rc: A.circ.right }), A_SW2 = route(A, 'S', 'W', { offIn: 2.3, rc: A.circ.left, a0: .6, a1: .9 });
  const B_SE = route(B, 'S', 'E', { offIn: B.lanesIn.right, rc: B.circ.right });
  const B_SN = route(B, 'S', 'N', { offIn: B.lanesIn.right, rc: B.circ.right });
  const B_SW = route(B, 'S', 'W', { offIn: B.lanesIn.left, rc: B.circ.left, rc2: B.circ.right, change: [.82, .97] });
  const B_SW2 = route(B, 'S', 'W', { offIn: B.lanesIn.left, rc: B.circ.left, rc2: B.circ.right, change: [.9, .985], laps: 1 });
  const B_NS = route(B, 'N', 'S', { offIn: B.lanesIn.right, rc: B.circ.right });
  const A_WE = route(A, 'W', 'E', { offIn: 3.3, rc: A.circ.right });
  const A_NS = route(A, 'N', 'S', { offIn: 3.3, rc: A.circ.right });
  const A_NE = route(A, 'N', 'E', { offIn: 3.3, rc: A.circ.right });
  const vlA = stopAt(A_SN, 'S', A, A.vl);
  const zIn = armPoly(A, 'S', A.vl, 40, 1.1, A.hwIn - .1), zOut = armPoly(A, 'E', A.ro + .3, 34, -A.hwOut + .1, -1.1);
  const zVl = armPoly(A, 'S', A.vl - .35, A.vl + .95, 1.15, A.hwIn - .15);
  // Der den røde (A_WE) passerer foran blå bil: punktet på sirkelen rett foran innkjøringen i sør.
  const dCrossWE = dB(A_WE, A, 3 * PI / 2 + .12, A.circ.right), dCrossNE = dB(A_NE, A, 3 * PI / 2 + .12, A.circ.right);

  // Bildeskift inne i kapitler (taletid a).
  const vlSE = stopAt(A_SE, 'S', A, A.vl), vlSW = stopAt(A_SW, 'S', A, A.vl);
  // Kapittel 3 og 6: punktene der blinklyset skifter (forbi østre utkjøring, ved nordre utkjøring) og der bilen er ute.
  const dSW_E = dB(A_SW, A, .25, A.circ.left), dSW_N = dB(A_SW, A, PI / 2 - .12, A.circ.left);
  const outOf = (path, arm, w, extra = 7) => dWhere(path, p => along(w, arm, p) >= w.ro + extra, path.len * .4);
  const dSE_out = outOf(A_SE, 'E', A), dSW_out = outOf(A_SW, 'W', A);
  const zOutN = armPoly(A, 'N', A.ro + .3, 30, -A.hwOut + .1, -1.1), zOutW = armPoly(A, 'W', A.ro + .3, 34, -A.hwOut + .1, -1.1);
  // Kapittel 4: blå bil i venstre felt ved siden av hvit bil i høyre felt, rett før vestre utkjøring.
  const d4 = dB(B_SW2, B, PI * .62, B.circ.left), dW4 = dB(B_NS, B, PI * .62 + .05, B.circ.right);
  // Kapittel 5: stopp foran gangfeltet ved nordre utkjøring, gående og syklist i gangfeltet.
  const stop5 = dWhere(A_SN, p => along(A, 'N', p) >= A.gs[0] - 2.0 - FRONT, A_SN.len / 2);
  const P5 = pathFrom([armPt(A, 'N', A.gs[0] + .8, -9), armPt(A, 'N', A.gs[0] + .8, 9.5)]);
  const rB = A.gs[1] - .5, aB = A.gs[1] - .4, BIKE5 = pathFrom([...[-.2, .15, .5, .8].map(t => P(A, t, rB)), ...[-12, -7, -3, 0, 3, 7, 12].map(sv => armPt(A, 'N', aB, sv)), ...[2.35, 2.65, 3.0].map(t => P(A, t, rB))]), dK5 = dNear(BIKE5, ...armPt(A, 'N', aB, 0));
  const zCross5 = armPoly(A, 'N', A.gs[0] - .1, A.gs[1] + .1, -A.hwOut + .1, A.hwIn - .1);

  const inner = { 0: [CHS[0].sentences[2] - .2, CHS[0].sentences[5] - .2], 1: [CHS[1].sentences[2] - .2, CHS[1].sentences[3] - .2],
    2: [CHS[2].sentences[1] - .2, CHS[2].sentences[2] - .2], 3: [CHS[3].sentences[2] - .2] };
  const sub = (i, a) => (inner[i] || []).filter(t => a >= t).length;

  function chapterState(i, u, a) {
    const S = CHS[i].sentences;
    if (i === 0) {
      const k = sub(0, a);
      if (k === 0) {
        // Oversikt ovenfra. De tre fasene tennes etter tur: inn, inne, ut.
        const c = lerpCam(cam(-30, 66, 64, 2, 0, 4), cam(-26, 58, 56, 2, 0, 3), ease((a + 1.5) / 9));
        const dBl = vlA - 23.5 + 2 * (a + 1.5), dR = dB(A_NS, A, PI * .55, A.circ.right) + 6 * (a + 1.5);
        const T = [3.68, 5.16, 6.54];
        return { cam: c, actors: [['blue', A_SN, dBl], ['red', A_NS, dR]], overlay: [
          { zone: { pts: zIn }, alpha: win(a, T[0] - .15, 99) }, { zone: { annulus: [A, A.isl + .2, A.ro - .2] }, alpha: win(a, T[1] - .15, 99) }, { zone: { pts: zOut }, alpha: win(a, T[2] - .15, 99) },
          { badge: { p: mk(A, 'S', 31, -9, .5), text: '1  Før du kjører inn', dot: C.teal }, alpha: win(a, T[0], 99) },
          { badge: { p: [A.ox - 4, .5, A.oz - 13.5], text: '2  Mens du er inne', dot: C.teal }, alpha: win(a, T[1], 99) },
          { badge: { p: mk(A, 'E', 30, -3.3, .5), text: '3  Når du skal ut', dot: C.teal, dx: -60 }, alpha: win(a, T[2], 99) }] };
      }
      if (k === 1) {
        // Førerhøyde: skilt 202 og vikelinjen. Rød bil kommer fra venstre inne i rundkjøringen. Blå bil stopper og venter.
        const q = a, tGo = 21.0, dBl = q < tGo ? profile(q, [[8.2, 2], [11.8, 0]], vlA) : vlA + goFrom(q, tGo, 4.5, 3);
        const dR = dCrossWE + 6 * (q - 18.6);
        const c = lerpCam(armCam(A, 'S', 40, 2.6, 5.2, 9, -1.5, .5), armCam(A, 'S', 37, 2.4, 5, 9, -1.5, .5), ease((q - 8.4) / 8));
        return { cam: c, actors: [['blue', A_SN, dBl], ['red', A_WE, dR]], overlay: [
          { sign: 'AS202', alpha: win(q, 8.75, 13.2) }, { zone: { pts: zVl }, alpha: win(q, 9.6, 13.2) },
          { ring: 'blue', alpha: win(q, 13.4, tGo - .1) },
          { arrow: ahead('red', A_WE, dR, 7), alpha: win(q, 16.0, 17.8) },
          { badge: { actor: 'red', text: 'Inne i rundkjøringen', dot: redDot }, alpha: win(q, 16.0, 17.3) },
          { badge: { actor: 'red', text: 'Fra venstre', dot: redDot }, alpha: win(q, 17.5, 19.8) },
          { badge: { actor: 'blue', text: 'Du', dot: blueDot }, alpha: win(q, 8.9, 13.0) }] };
      }
      // Tilnærmingen med lav fart. Til slutt stanser blå bil fordi en grå bil kommer inne i rundkjøringen.
      const dBl = profile(a, [[S[5] - .2, 7], [S[5] + 3.2, 3], [S[7] - 1.2, 3], [S[7] + .6, 0]], vlA);
      const dG = dCrossNE + 6 * (a - (S[7] + 1.7));
      const c = lerpCam(armCam(A, 'S', 64, 2.6, 4.2, 10, 0, .3), armCam(A, 'S', 46, 2.4, 4.6, 6, -.5, .3), ease((a - S[5]) / 9));
      return { cam: c, actors: [['blue', A_SN, dBl], ['red', A_WE, dCrossWE + 6 * (a - S[5] - 1.2)], ['grey', A_NE, dG]], overlay: [
        { badge: { actor: 'blue', text: 'Senk farten', dot: blueDot }, alpha: win(a, S[5], S[7] - .3) },
        { ring: 'blue', alpha: win(a, S[7] + .1, 99) }, { arrow: ahead('grey', A_NE, dG, 8), alpha: win(a, S[7] + .3, 99) }] };
    }
    if (i === 1) {
      const k = sub(1, a);
      if (k === 0) {
        // Ett felt, skal til høyre: blå bil holder seg til høyre i feltet. Ruten til høyre stiples.
        const vl2 = stopAt(A_SE2, 'S', A, A.vl), d = profile(a, [[-.6, 2.6], [5, 1.4], [S[2] - .8, 0]], vl2, S[2] - .8);
        const c = armCam(A, 'S', 44, 2.5, 10, 6, 2.5, 0);
        return { cam: c, actors: [['blue', A_SE2, d, { signal: 1 }]], overlay: [
          { zone: { pts: armPoly(A, 'S', Math.max(A.vl + .8, along(A, 'S', A_SE2.at(d)) + 2.6), 40, 3.3, A.hwIn - .15) }, alpha: win(a, S[1] - .2, 99) },
          { dashed: [A_SE2, d + 4.6, d + 4.6 + 30 * ease((a - S[1] + .2) / 1.4), C.tealLight], alpha: win(a, S[1] - .1, 99) },
          { badge: { actor: 'blue', text: 'Skal til høyre', dot: blueDot }, alpha: win(a, S[1], 99) }] };
      }
      if (k === 1) {
        // Ett felt, skal til venstre: blå bil legger seg mot midten. Ruten til venstre stiples.
        const vl2 = stopAt(A_SW2, 'S', A, A.vl), d = profile(a, [[S[2] - .2, 2.4], [S[3] - .6, 0]], vl2, S[3] - .6);
        return { cam: armCam(A, 'S', 44, 2.5, 10, 6, 2.5, 0), actors: [['blue', A_SW2, d]], overlay: [
          { zone: { pts: armPoly(A, 'S', Math.max(A.vl + .8, along(A, 'S', A_SW2.at(d)) + 2.6), 40, 1.15, 3.3) }, alpha: win(a, S[2], 99) },
          { dashed: [A_SW2, d + 4.6, d + 4.6 + 60 * ease((a - S[2]) / 2), C.tealLight], alpha: win(a, S[2] + .1, 99) },
          { badge: { actor: 'blue', text: 'Skal til venstre', dot: blueDot }, alpha: win(a, S[2] + .2, 99) }] };
      }
      // To felt, sett ovenfra: rutene tegnes etter tur, i takt med talen (høyre, rett frem, venstre). Feltpilene synes på vegen.
      const ds = stopAt(B_SN, 'S', B, B.vl), dsW = stopAt(B_SW, 'S', B, B.vl), grow = (t0, len) => len * ease((a - t0) / 1.8);
      const c = wide() ? lerpCam(cam(B.ox + 8, 116, 62, B.ox, 0, 9), cam(B.ox + 6, 110, 58, B.ox, 0, 8), ease((a - S[3]) / 10)) : lerpCam(cam(B.ox + 8, 76, 74, B.ox, 0, 10), cam(B.ox + 6, 70, 68, B.ox, 0, 9), ease((a - S[3]) / 10));
      return { cam: c, actors: [], overlay: [
        { badge: { p: mk(B, 'S', 34, B.lanesIn.right, 1), text: 'Høyre felt', dot: C.muted, dx: 130 }, alpha: win(a, S[3] + .3, 99) },
        { badge: { p: mk(B, 'S', 34, B.lanesIn.left, 1), text: 'Venstre felt', dot: C.muted, dx: -130 }, alpha: win(a, S[3] + .3, 99) },
        { dashed: [B_SE, ds - 20, ds - 20 + grow(S[4] - .1, 54), C.tealLight, 6, .9], alpha: win(a, S[4] - .1, 99) },
        { badge: { p: mk(B, 'E', 33, -3.3, 1), text: 'Til høyre', dot: C.tealLight, dx: -40 }, alpha: win(a, S[4] + 1.2, 99) },
        { dashed: [B_SN, ds - 20, ds - 20 + grow(S[5] - .1, 80), R2, 6, -.7], alpha: win(a, S[5] - .1, 99) },
        { badge: { p: mk(B, 'N', 30, -3.3, 1), text: 'Rett frem', dot: R2 }, alpha: win(a, S[5] + 1.2, 99) },
        { dashed: [B_SW, dsW - 20, dsW - 20 + grow(S[6] - .1, 102), R3, 6, -.3], alpha: win(a, S[6] - .1, 99) },
        { badge: { p: mk(B, 'W', 42, 3.5, 1), text: 'Til venstre', dot: R3, dx: 40 }, alpha: win(a, S[6] + 1.4, 99) },
        // Piler og skilt: feltpilene på vegen markeres.
        { zone: { pts: armPoly(B, 'S', 31.6, 36.4, .8, B.hwIn - .3) }, alpha: win(a, S[7] - .1, 99) },
        ] };
    }
    if (i === 2) {
      const k = sub(2, a);
      if (k === 0) {
        // Første utkjøring: høyreblink før innkjøringen og helt til bilen er ute.
        const d = profile(a, [[-.6, 3], [2.6, 2], [4.2, 3.4], [S[1], 6]], vlSE, 2.6);
        const c = lerpCam(armCam(A, 'S', 38, 1.2, 3.8, 10, 6, .6), chase(A_SE, d, 12.5, 6, 12, 1.5, .6), ease((a - 1.8) / 3.5));
        return { cam: c, actors: [['blue', A_SE, d, { signal: d < dSE_out ? 1 : 0 }]], overlay: [
          { dashed: [A_SE, d + 3, Math.max(d + 6, dSE_out + 4), C.tealLight], alpha: win(a, -.3, 99) },
          { badge: { actor: 'blue', text: 'Blinker til høyre', dot: '#ffa31a' }, alpha: win(a, .2, S[1] - .7) }] };
      }
      if (k === 1) {
        // Lenger rundt: blå bil kjører mot vest. Høyreblinken slås på når bilen passerer utkjøringen mot nord.
        const d = dSW_N - 1.5 - 6.5 * 3.0 + 6.5 * (a - S[1]); // inne i rundkjøringen; høyreblinken slås på ved utkjøringen mot nord ca. 3 s ut i setningen
        const sig = d >= dSW_N - 1.5 && d < dSW_out ? 1 : 0;
        const c = lerpCam(cam(A.ox + 3, 34, A.oz + 46, A.ox, 0, A.oz + 4), cam(A.ox - 7, 27, A.oz + 17, A.ox - 18, 0, A.oz - 6), ease((a - S[1] - 1.2) / 6.5));
        return { cam: c, actors: [['blue', A_SW, d, { signal: sig }]], overlay: [
          { dashed: [A_SW, d + 3, Math.max(d + 6, dSW_out + 4), C.tealLight], alpha: win(a, S[1] - .1, 99) },
          { zone: { pts: zOutN }, alpha: win(a, S[1] + 2.4, 99) },
          { badge: { p: mk(A, 'N', 36, -3.3, .5), text: 'Utkjøringen før din', dot: C.teal }, alpha: win(a, S[1] + 2.6, 99) },
          { badge: { actor: 'blue', text: 'Blink til høyre nå', dot: '#ffa31a', dy: 1.6 }, alpha: d >= dSW_N - 1.5 ? win(a, -9, 99) : 0 }] };
      }
      // Venstreblink inn er frivillig, men hjelper andre.
      const d = profile(a, [[S[2] - .2, 2.4], [S[2] + 2.4, 1.4], [S[2] + 4.5, 2.6], [S[2] + 9, 3.6]], vlSW - .3, S[2] + 2.4);
      return { cam: armCam(A, 'S', 31, 4.4, 3.0, 10, -3, .6), actors: [['blue', A_SW, d, { signal: -1 }]], overlay: [
        { badge: { actor: 'blue', text: 'Venstreblink: frivillig', dot: '#ffa31a' }, alpha: win(a, S[2] + .3, 99) }] };
    }
    if (i === 3) {
      const k = sub(3, a), v = 7, d = d4 + v * (a + .4), dW = dW4 + v * B.circ.right / B.circ.left * (a + .4);
      if (k === 0) {
        // Blå bil i venstre felt vil ut, men hvit bil ligger i høyre felt ved siden av. Blå bil har vikeplikt og skifter ikke felt.
        const pB = B_SW2.at(d), pW = B_NS.at(dW), wIn = clamp01((3 * PI / 2 - .35 - thetaPos(B, pW)) / .5), mx = pB.x + (pW.x - pB.x) * .5 * wIn, mz = pB.z + (pW.z - pB.z) * .5 * wIn, thm = thetaOf(B, { x: mx, z: mz }), [cx, cz] = P(B, thm - .62, 3);
        return { cam: { from: V(cx, 12.5, cz), to: V(mx, .3, mz) }, actors: [['blue', B_SW2, d, { signal: 1 }], ['white', B_NS, dW]], overlay: [
          { ring: 'blue', alpha: win(a, .4, S[2] - .5) }, { arrow: ahead('white', B_NS, dW, 12), alpha: win(a, .4, S[2] - .5) * wIn },
          { badge: { actor: 'white', text: 'I høyre felt', dot: C.muted, dx: 120, dy: 1.6 }, alpha: win(a, .3, S[2] - .5) * wIn },
          { badge: { actor: 'blue', text: 'Vil ut', dot: blueDot, dx: -170, dy: .6 }, alpha: win(a, .3, S[1] - .2) },
          { badge: { actor: 'blue', text: 'Ikke fletting', dot: C.amber, dx: -170, dy: .6 }, alpha: win(a, S[1], S[2] - .5) }] };
      }
      // En runde til: blå bil fortsetter rundt, skifter felt når det er ledig, og kjører ut.
      const sig = d > B_SW2.len - 62 && d < B_SW2.len - 50 ? 1 : 0;
      return { cam: lerpCam(cam(B.ox - 4, 56, B.oz + 44, B.ox - 2, 0, B.oz), cam(B.ox - 4, 52, B.oz + 40, B.ox - 2, 0, B.oz), ease((a - S[2]) / 8)),
        actors: [['blue', B_SW2, d, { signal: sig }], ['white', B_NS, dW]], overlay: [
          { dashed: [B_SW2, d + 3, B_SW2.len - 52, C.tealLight, 6], alpha: win(a, S[2], 99) },
          { badge: { p: [B.ox, 1.2, B.oz + 2.5], text: 'En runde til', dot: blueDot }, alpha: win(a, S[2] + .4, 99) }] };
    }
    if (i === 4) {
      // Ut: speil og blindsone, gangfeltet, en gående på vei ut og en syklist. Blå bil stopper før gangfeltet og venter.
      const tGo = 14.9, d = a < tGo ? profile(a, [[-.6, 6], [3.2, 4.5], [7.6, 0]], stop5) : stop5 + goFrom(a, tGo, 4.5, 3);
      const dP = Math.max(0, 1.4 * (a - 4.6)), dK = dK5 + 4.6 * (a - 13.6), pp = P5.at(dP);
      const k = ease((a - 2.5) / 4.5), dc = Math.min(d, stop5), c = lerpCam(circCam(A, A_SN, dc, -.62, 3.5, 7.5, 1.5), (() => { const [fx, fz] = armPt(A, 'N', 6, 1.5), [tx, tz] = armPt(A, 'N', A.gs[0] + 1.5, -2.2); return { from: V(fx, 7.5, fz), to: V(tx, 0, tz) }; })(), k);
      return { cam: c, actors: [['blue', A_SN, d, { signal: d < stop5 - 3 || a < S[1] ? 1 : 0 }], ['bike', BIKE5, dK]], figs: [['ped', pp.x, pp.z, pp.yaw, dP > 0 && dP < P5.len ? 'walk' : 'stand', dP / 1.5]], overlay: [
        { badge: { actor: 'blue', text: 'Speil og blindsone', dot: blueDot }, alpha: win(a, .1, S[1] - .3) },
        { zone: { pts: zCross5 }, alpha: win(a, S[1], S[2] + .4) }, { sign: 'AN516ut', alpha: win(a, S[1] + .3, S[2] + 1) },
        { ring: 'blue', alpha: win(a, S[2], tGo - .1) },
        { arrow: [P5, dP + .6, dP + 3.6, .6], alpha: win(a, S[2], 12.6) }, { badge: { actor: 'ped', text: 'Gående', dot: C.muted }, alpha: win(a, S[2] + .2, 13.2) },
        { arrow: ahead('bike', BIKE5, dK, 4, .6), alpha: win(a, S[3] - .4, 12.7) }, { badge: { actor: 'bike', text: 'Syklist', dot: C.muted }, alpha: win(a, S[3], 14.6) }] };
    }
    // i === 5: Husk dette. Kjøringen fra kapittel 3 sett ovenfra, med de tre fasene.
    const d = profile(a, [[-.6, 5], [2.6, 3.6], [4.2, 6], [16, 6]], vlSW, 2.6), sig = d >= dSW_N - 1.5 && d < dSW_out ? 1 : 0;
    const c6 = lerpCam(cam(-30, 64, 58, 2, 0, -2), cam(-26, 58, 52, 2, 0, -2), ease((a + .6) / 9));
    return { cam: lerpCam(c6, cam(-40, 30, 26, -16, 0, -2), ease((a - S[2] + .2) / 2.5)), actors: [['blue', A_SW, d, { signal: sig }]], overlay: [
      { zone: { pts: zIn }, alpha: win(a, -.2, S[1] - .3) }, { badge: { p: mk(A, 'S', 31, -9, .5), text: 'Vik og velg felt', dot: C.teal }, alpha: win(a, 0, S[1] - .3) },
      { zone: { annulus: [A, A.isl + .2, A.ro - .2] }, alpha: win(a, S[1] - .1, S[2] - .3) }, { badge: { p: [A.ox - 4, .5, A.oz - 13.5], text: 'Hold feltet', dot: C.teal }, alpha: win(a, S[1], S[2] - .3) },
      { zone: { pts: zOutW }, alpha: win(a, S[2] - .1, 99) }, { badge: { p: mk(A, 'W', 30, -3.3, 4), text: 'Blink og se etter gående', dot: C.teal, dy2: -40 }, alpha: win(a, S[2], 99) }] };
  }
  return { chapterState, inner, dbg: { vlSW, dSW_E, dSW_N, dSW_out, vlSE, dSE_out, stop5 } };
}

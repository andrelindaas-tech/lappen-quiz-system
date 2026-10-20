// Storyboard for «Forbikjøring – hvor mye vei trenger du?».
// Avstander i meter langs vegen (s). Høyre felt = +1.75, venstre/motgående = -1.75.
export const CHAPTERS = [
  { title: 'Før du kjører forbi', sec: 22 },
  { title: 'Så lang tid tar det', sec: 30 },
  { title: 'Fartsgrensen', sec: 12 },
  { title: 'Her skal du ikke', sec: 24 },
  { title: 'Når du blir forbikjørt', sec: 18 },
  { title: 'Husk dette', sec: 14 },
];
const R = 1.75, Lf = -1.75, rev = { reverse: true };
const chase = (s, look, h = 3.4, x = 1.0, fov = 36) => ({ s, look, h, x, ly: 1.2, fov });
const oblique = (s, look, h = 13, x = -9) => ({ s, look, h, x, lx: 1, ly: 0, fov: 40 });

export const SHOTS = [
  { id: 'k1a', chapter: 1, at: .2, world: 'straight', text: ['Før du kjører forbi:', 'sjekk fire ting'],
    actors: [['truck', 120, R], ['blue', 92, R]], cam: oblique(52, 150, 10, -7),
    overlay: [{ zone: [134, 330, Lf, 3.3, '#14b8a6', 'rgba(20,184,166,.22)'] }] },
  { id: 'k1b', chapter: 1, at: .8, world: 'straight', text: ['Fri vei, ingen foran blinker,', 'ingen bak, plass til å gå inn'],
    actors: [['truck', 120, R], ['blue', 92, R], ['silver', 72, R]], cam: oblique(36, 140, 11, -7),
    overlay: [{ marker: { n: 1, s: 230, off: Lf, y: .5 } }, { marker: { n: 2, s: 111, off: -.2, y: 2.4, dx: -46 } }, { marker: { n: 3, s: 72, off: R, y: 2.8 } }, { marker: { n: 4, s: 143, off: R, y: .5, dx: 50, dy2: -10 } }] },

  { id: 'k2a', chapter: 2, at: .3, world: 'straight', text: ['80 forbi 70:', 'det tar lang tid'],
    actors: [['truck', 300, R], ['blue', 299, Lf], ['red', 430, Lf, rev]], cam: { s: 276, look: 420, h: 7, x: -3, ly: 1.5, fov: 36 },
    overlay: [{ corner: { text: '12 s', dot: '#0d9488', row: 0 } }, { corner: { text: '270 m', dot: '#1689c9', row: 1 } }, { badge: { actor: 'red', text: 'Møtende', dot: '#c4473b', dy: 4 } }] },
  { id: 'k2b', chapter: 2, at: .85, world: 'straight', fog: [700, 1900], noMountains: true, text: ['Regneeksempel: 80 forbi 70', '≈ 25 s og over 1 km fri vei'],
    actors: [['truck', 618, R], ['blue', 646, .6, { turn: .05 }], ['red', 700, Lf, rev]], cam: { s: -260, look: 700, h: 380, x: -300, ly: 0, sunAt: 650, fov: 40 },
    overlay: [{ zone: [100, 644, Lf, 12, '#0d9488', 'rgba(20,184,166,.55)'] }, { zone: [644, 1188, Lf, 12, '#dc2626', 'rgba(220,38,38,.45)'] },
      { measure: [100, 1188, -60, 'over 1 km fri vei'] },
      { dot: { actor: 'blue', color: '#1689c9' } }, { dot: { actor: 'red', color: '#c4473b' } },
      { badge: { s: 260, off: 40, y: 0, text: 'Du: 544 m', dot: '#0d9488' } }, { badge: { s: 960, off: 30, y: 0, text: 'Møtende: 544 m', dot: '#dc2626' } }],
    note: 'Forutsetning: 25 m før og etter, lastebil 18 m' },

  { id: 'k3a', chapter: 3, at: .5, world: 'straight', text: ['Fartsgrensen gjelder', 'også når du kjører forbi'],
    actors: [['truck', 200, R], ['blue', 163, R]], cam: chase(150, 260, 3.2, 1.6),
    overlay: [{ badge: { actor: 'blue', text: '80 km/t', dot: '#0d9488', dy: 1.2, dx: -230 } }, { badge: { actor: 'truck', text: '70 km/t', dot: '#64748b', dy: 5.2 } }] },

  { id: 'k4a', chapter: 4, at: .2, world: 'hill', text: ['Bakketopp: du ser ikke', 'hva som kommer'],
    actors: [['truck', 212, R], ['blue', 186, R]], actors2: [['red', 268, Lf, rev]], cam: { s: 172, look: 250, h: 2.4, x: -.4, ly: 11, fov: 38 },
    profile: { from: 130, to: 350, you: 186, other: 300, crest: 240 },
    overlay: [{ zone: [236, 246, 0, 7.4, '#14b8a6', 'rgba(20,184,166,.18)'] }] },
  { id: 'k4b', chapter: 4, at: .55, world: 'junction', text: ['Ikke rett før eller i kryss', '– unntak: forkjørsvei og lys'],
    actors: [['truck', 172, R], ['blue', 140, R, { signal: -1, t: .1 }], ['silver', 191.6, 3.5 + 10, { turn: Math.PI * 1.5 }]], cam: { s: 108, look: 190, h: 17, x: -12, lx: 3, ly: 0, fov: 40 },
    overlay: [{ zone: [180, 200, 0, 7.4, '#14b8a6', 'rgba(20,184,166,.22)'] }] },
  { id: 'k4c', chapter: 4, at: .85, world: 'town', text: ['Ikke forbi en bil som', 'skjuler et gangfelt'],
    actors: [['silver', 135.4, R], ['blue', 122, R]], ghosts: [['walker', 142.2, 2.0]], cam: { s: 106, look: 150, h: 3.1, x: .2, ly: 1.2 },
    overlay: [{ zone: [140, 144, 0, 7, '#14b8a6', 'rgba(20,184,166,.0)'] }, { badge: { s: 142, off: 2, y: 3.4, text: 'Skjult fotgjenger', dot: '#14b8a6' } }] },

  { id: 'k5a', chapter: 5, at: .5, world: 'straight', text: ['Blir du forbikjørt: hold', 'til høyre, ikke øk farten'],
    actors: [['blue', 400, 2.1], ['white2', 403, Lf]], cam: { s: 386, look: 440, h: 5, x: 3.5, ly: .5, fov: 38 },
    overlay: [{ badge: { actor: 'blue', text: '80 km/t', dot: '#0d9488', dy: 2.4 } }] },

  { id: 'k6a', chapter: 6, at: .5, world: 'straight', text: ['Er du i tvil –', 'la være'],
    actors: [['truck', 900, R], ['blue', 906, Lf]], cam: { s: 872, look: 1000, h: 8, x: -4, ly: 0, fov: 38 } },

  { id: 'plakat', chapter: 2, at: .85, world: 'straight', fog: [700, 1900], noMountains: true, text: [], play: ['Forbikjøring –', 'hvor mye vei trenger du?'],
    actors: [['truck', 618, R], ['blue', 646, .6, { turn: .05 }], ['red', 700, Lf, rev]], cam: { s: -260, look: 700, h: 380, x: -300, ly: 0, sunAt: 650, fov: 40 },
    overlay: [{ zone: [100, 644, Lf, 12, '#0d9488', 'rgba(20,184,166,.55)'] }, { zone: [644, 1188, Lf, 12, '#dc2626', 'rgba(220,38,38,.45)'] },
      { measure: [100, 1188, -60, 'over 1 km fri vei'] },
      { dot: { actor: 'blue', color: '#1689c9' } }, { dot: { actor: 'red', color: '#c4473b' } },
      { badge: { s: 260, off: 40, y: 0, text: 'Du: 544 m', dot: '#0d9488' } }, { badge: { s: 960, off: 30, y: 0, text: 'Møtende: 544 m', dot: '#dc2626' } }], },
];
// Notatet i k2b vises nede til høyre i scenen.
SHOTS.forEach(s => { if (s.note) (s.overlay ||= []).push({ note: s.note }); });

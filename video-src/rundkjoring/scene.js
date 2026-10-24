import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { assets } from './assets-data.js';
import { C, FONT, LAYOUT, infoPanel, pill, marker, rr } from './style.js';
import { CHAPTERS, SHOTS, SUMMARY, SUMMARY_TITLE, POSTER, DURATION_EST } from './shots.js';
import { FILM } from './film.js';
import { POINTS, END_LINES } from './information.js';
import timing from './timing.json';

// Storyboard for «Rundkjøring – vikeplikt, feltvalg og blinklys».
// Samme motor som vikepliktsfilmen. Ett bilde bestemmes bare av tilstanden det får inn.
// x mot øst, z mot sør. Vinkel θ måles mot klokka sett ovenfra (øst = 0, nord = π/2), så
// trafikken i rundkjøringen går med økende θ. Punkt: (ox + r cos θ, oz − r sin θ).
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const ease = v => { v = clamp(v); return v * v * v * (v * (v * 6 - 15) + 10); };
const win = (a, t0, t1, f = .35) => ease((a - t0) / f) * (1 - ease((a - t1) / f)); // inn ved t0, ut ved t1
// Fart: kjør med v0, brems jevnt til stopp ved dStop (ferdig ved tStop), vent, og kjør igjen ved tGo.
function goFrom(u, tGo, v, Ta = 3) { const q = u - tGo; if (q <= 0) return 0; return q < Ta ? v * q * q / (2 * Ta) : v * Ta / 2 + v * (q - Ta); }
function stopGo(u, { dStop, v0, tStop, T = 3, tGo = Infinity, v1 = v0, Ta = 3 }) {
  const tb = tStop - T, back = v0 * T / 2;
  if (u < tb) return dStop - back - v0 * (tb - u);
  if (u < tStop) { const q = u - tb; return dStop - back + v0 * q - v0 * q * q / (2 * T); }
  return dStop + goFrom(u, tGo, v1, Ta);
}
// Fartsprofil: fart (m/s) lineært mellom nøkkeltider [t, v]. Posisjonen er dEnd ved tiden tAt (standard: siste nøkkeltid).
function profile(t, keys, dEnd, tAt = keys[keys.length - 1][0]) {
  const I = t => { const [t0, v0] = keys[0]; if (t <= t0) return -(t0 - t) * v0; let s = 0;
    for (let i = 0; i < keys.length - 1; i++) { const [ta, va] = keys[i], [tb, vb] = keys[i + 1]; if (t <= ta) break; const te = Math.min(t, tb), vt = va + (vb - va) * (te - ta) / (tb - ta); s += (va + vt) / 2 * (te - ta); }
    const [tl, vl] = keys[keys.length - 1]; if (t > tl) s += vl * (t - tl); return s; };
  return dEnd - I(tAt) + I(t);
}
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const std = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: .92, ...extra });
const basic = color => new THREE.MeshBasicMaterial({ color, toneMapped: false, side: THREE.DoubleSide });
let L = LAYOUT.mobile;

function noiseTexture(size, base, spread, specks, seed) {
  const c = document.createElement('canvas'); c.width = c.height = size; const k = c.getContext('2d'), img = k.createImageData(size, size); let r = seed;
  const rnd = () => { r = (Math.imul(r, 1664525) + 1013904223) >>> 0; return r / 4294967296; };
  for (let i = 0; i < size * size; i++) { let v = base + (rnd() - .5) * spread; if (rnd() < specks) v += (rnd() < .5 ? -1 : 1) * spread * 1.6; v = clamp(v, 0, 255); img.data.set([v, v, v, 255], i * 4); }
  k.putImageData(img, 0, 0); const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
function rng(seed) { let r = seed >>> 0; return () => { r = (Math.imul(r, 1664525) + 1013904223) >>> 0; return r / 4294967296; }; }
function imageTexture(src) { const img = new Image(); const t = new THREE.Texture(img); img.onload = () => { t.needsUpdate = true; }; img.src = src; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return { t, img }; }

const asphalt = std('#626a70', { map: noiseTexture(256, 205, 38, .06, 7) });

// Rundkjøringene. A = ett felt (samme mål som den interaktive demoen), B = to felt.
// Arm-koordinater: a = avstand ut fra sentrum langs armen, s = sideveis, positiv mot høyre for den som kjører inn.
// Innkjøringen ligger på s > 0, utkjøringen på s < 0, trafikkøya på |s| < 1.
export const WORLDS = {
  A: { ox: 0, oz: 0, grass: 8.4, isl: 10, ro: 16.6, hwIn: 5.6, hwOut: 5.6, vl: 17.6, gs: [22.4, 25.8], split: [[18.0, 22.0], [26.2, 48]],
       lanesIn: { right: 3.7, left: 2.5 }, circ: { right: 14.7, left: 11.7 }, exitOff: 3.3, seed: 11 },
  B: { ox: 600, oz: 0, grass: 8.4, isl: 10, ro: 19, laneLine: 14.5, hwIn: 8, hwOut: 5.6, entryDiv: 4.5, vl: 20, gs: [25, 28.4], split: [[20.4, 24.6], [28.8, 50]],
       lanesIn: { right: 6.25, left: 2.75 }, circ: { right: 16.75, left: 12.25 }, exitOff: 3.3, seed: 23 },
};
export const ARMS = { E: 0, N: Math.PI / 2, W: Math.PI, S: 3 * Math.PI / 2 };
const armFrame = phi => ({ u: [Math.cos(phi), -Math.sin(phi)], r: [-Math.sin(phi), -Math.cos(phi)] });
export const armPt = (w, arm, a, s) => { const { u, r } = armFrame(ARMS[arm]); return [w.ox + u[0] * a + r[0] * s, w.oz + u[1] * a + r[1] * s]; };

async function init() {
  const ff = new FontFace('IBM Plex Sans', `url(${assets.font})`, { weight: '100 700' }); await ff.load(); document.fonts.add(ff);
  const signs = Object.fromEntries(Object.entries(assets.signs).map(([k, v]) => [k, imageTexture(v)]));
  await Promise.all(Object.values(signs).map(s => s.img.decode()));
  Object.values(signs).forEach(s => s.t.needsUpdate = true);

  const canvas = document.getElementById('film');
  const ctx = canvas.getContext('2d', { alpha: false, willReadFrequently: true });
  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(1); renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const scene = new THREE.Scene();
  { const c = document.createElement('canvas'); c.width = 4; c.height = 256; const k = c.getContext('2d'), g = k.createLinearGradient(0, 0, 0, 256);
    g.addColorStop(0, '#5f9bd0'); g.addColorStop(.5, '#a6cbe6'); g.addColorStop(.8, '#d6e6ea'); g.addColorStop(1, '#e9efe9'); k.fillStyle = g; k.fillRect(0, 0, 4, 256);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; scene.background = t; }
  scene.fog = new THREE.Fog('#dfe9ec', 150, 520);
  const camera = new THREE.PerspectiveCamera(40, 1, .2, 4000);
  scene.add(new THREE.HemisphereLight('#dcecff', '#5d7647', 1.45));
  const sun = new THREE.DirectionalLight('#ffe6c2', 3.2); sun.castShadow = true; sun.shadow.mapSize.set(4096, 4096);
  Object.assign(sun.shadow.camera, { left: -60, right: 60, top: 60, bottom: -60, near: 1, far: 220 }); sun.shadow.bias = -.0004; sun.shadow.normalBias = .03;
  scene.add(sun, sun.target);

  const mesh = (g, m, parent, shadow = false) => { const o = new THREE.Mesh(g, m); o.receiveShadow = true; o.castShadow = shadow; parent.add(o); return o; };
  const town = new THREE.Group(); scene.add(town);
  let rnd = rng(4242);
  const tile = (mat, rx, ry) => { if (!mat.map) return mat; const m = mat.clone(); m.map = mat.map.clone(); m.map.repeat.set(rx, ry); m.map.needsUpdate = true; return m; };
  const M = {
    grass: std('#86ad5c', { map: noiseTexture(128, 205, 40, .1, 5) }), lawn: std('#9cc06b', { map: noiseTexture(128, 210, 30, .06, 9) }),
    walk: std('#a9adae', { map: noiseTexture(128, 205, 30, .08, 13) }), hedge: std('#4f7a46', { flatShading: true }), pole: std('#8c9498', { metalness: .4, roughness: .5 }),
    dark: std('#2a2e33'), roof: std('#41454b'), island: std('#d9d6cc'), curb: std('#c9c6bc'), stripe: basic('#f2c230'), white: basic('#f7f5ec'),
    leaf: std('#5f8a52', { flatShading: true }), leaf2: std('#6f9a55', { flatShading: true }), trunk: std('#6f6449'), cobble: std('#b7aa95', { map: noiseTexture(128, 200, 70, .2, 31) }),
    islandGrass: std('#8fb862', { map: noiseTexture(128, 210, 40, .1, 17) }), shrub: std('#5b8547', { flatShading: true }),
  };
  function rect(x0, z0, x1, z1, y, mat, parent = town) { const w = Math.abs(x1 - x0), d = Math.abs(z1 - z0), g = new THREE.PlaneGeometry(w, d); g.rotateX(-Math.PI / 2);
    const m = mesh(g, tile(mat, Math.max(1, w / 6), Math.max(1, d / 6)), parent); m.position.set((x0 + x1) / 2, y, (z0 + z1) / 2); return m; }
  function block(cx, cy, cz, w, h, d, mat, rotY = 0, shadow = true, parent = town) { const m = mesh(new THREE.BoxGeometry(w, h, d), mat, parent, shadow); m.position.set(cx, cy, cz); m.rotation.y = rotY; return m; }
  // Flate i arm-koordinater (a0..a1, s0..s1), y over bakken.
  function armRect(w, arm, a0, a1, s0, s1, y, mat) { const [x, z] = armPt(w, arm, (a0 + a1) / 2, (s0 + s1) / 2), g = new THREE.PlaneGeometry(s1 - s0, a1 - a0); g.rotateX(-Math.PI / 2);
    const m = mesh(g, tile(mat, Math.max(1, (s1 - s0) / 6), Math.max(1, (a1 - a0) / 6)), town); m.position.set(x, y, z); const { u } = armFrame(ARMS[arm]); m.rotation.y = Math.atan2(u[0], u[1]); return m; }

  rect(-400, -400, 1000, 400, -.01, M.grass);

  // ---------- Bakkeplan: vei, gang- og sykkelveg og oppmerking tegnes i et stort lerret ----------
  const E = 64, N = 4096, K = N / (2 * E);
  const AS = '#4f5559', GSV = '#7b8083', GR = '#6b8b4a', CURBC = '#bcb8ad', WH = '#f1f0e8', YE = '#e3b62a';
  function groundCanvas(w) {
    const c = document.createElement('canvas'); c.width = c.height = N; const k = c.getContext('2d');
    const world = () => k.setTransform(K, 0, 0, K, E * K, E * K); // (x, z) relativt til sentrum
    const local = (arm, mirror = false) => { const { u, r } = armFrame(ARMS[arm]), m = mirror ? -1 : 1; k.setTransform(u[0] * K, u[1] * K, r[0] * K * m, r[1] * K * m, E * K, E * K); };
    world(); k.fillStyle = GR; k.fillRect(-E, -E, 2 * E, 2 * E);
    // Gang- og sykkelveg rundt rundkjøringen og langs armene.
    k.fillStyle = GSV; k.beginPath(); k.arc(0, 0, w.gs[1], 0, 7); k.arc(0, 0, w.gs[0], 7, 0, true); k.fill('evenodd');
    for (const arm of Object.keys(ARMS)) { local(arm); k.fillStyle = GSV; k.fillRect(w.gs[0] + 1, w.hwIn + 1.6, E * 2, 3.2); k.fillRect(w.gs[0] + 1, -w.hwOut - 4.8, E * 2, 3.2); }
    // Vegen: sirkel, armer og avrundede hjørner. Først kantstein (strek), så asfalt.
    const Rf = 8;
    const fillet = hw => { const sc = hw + Rf, ac = Math.sqrt((w.ro + Rf) ** 2 - sc * sc), a0 = Math.sqrt(w.ro ** 2 - hw * hw), t2 = Math.atan2(sc, ac);
      k.moveTo(ac, hw); k.lineTo(a0, hw); k.arc(0, 0, w.ro, Math.atan2(hw, a0), t2, false); k.arc(ac, sc, Rf, Math.atan2(-sc, -ac), -Math.PI / 2, false); k.closePath(); };
    const shapes = [];
    for (const arm of Object.keys(ARMS)) { shapes.push(() => { local(arm); k.beginPath(); k.rect(0, -w.hwOut, E * 2, w.hwOut + w.hwIn); });
      shapes.push(() => { local(arm); k.beginPath(); fillet(w.hwIn); }); shapes.push(() => { local(arm, true); k.beginPath(); fillet(w.hwOut); }); }
    shapes.push(() => { world(); k.beginPath(); k.arc(0, 0, w.ro, 0, 7); });
    for (const sh of shapes) { sh(); k.lineWidth = .5; k.strokeStyle = CURBC; k.lineJoin = 'round'; k.stroke(); }
    for (const sh of shapes) { sh(); k.fillStyle = AS; k.fill(); }
    // Kjørbar midtøykant (kupper) og midtøy (3D over).
    world(); k.fillStyle = '#a99d89'; k.beginPath(); k.arc(0, 0, w.isl, 0, 7); k.fill();
    // Støy over alt, så flatene ikke blir helt glatte.
    { k.setTransform(1, 0, 0, 1, 0, 0); const img = k.getImageData(0, 0, N, N), d = img.data, rr2 = rng(w.seed);
      for (let i = 0; i < d.length; i += 4) { const f = .9 + rr2() * .2 + (rr2() < .04 ? (rr2() - .5) * .3 : 0); d[i] *= f; d[i + 1] *= f; d[i + 2] *= f; } k.putImageData(img, 0, 0); }
    // Oppmerking.
    world(); k.fillStyle = WH; k.strokeStyle = WH;
    if (w.laneLine) { k.lineWidth = .15; k.setLineDash([3, 3]); k.beginPath(); k.arc(0, 0, w.laneLine, 0, 7); k.stroke(); k.setLineDash([]); }
    for (const arm of Object.keys(ARMS)) {
      local(arm); k.fillStyle = WH;
      // Vikelinje (haitenner): spissen peker mot den som har vikeplikt (utover langs armen).
      for (let s = 1.35; s < w.hwIn - .2; s += .75) { k.beginPath(); k.moveTo(w.vl, s - .25); k.lineTo(w.vl, s + .25); k.lineTo(w.vl + .6, s); k.closePath(); k.fill(); }
      // Gangfelt: striper langs kjøreretningen, ikke over trafikkøya.
      for (let s = -w.hwOut + .45; s < w.hwIn - .3; s += 1.0) { if (Math.abs(s + .25) < 1.3) continue; k.fillRect(w.gs[0] + .1, s, w.gs[1] - w.gs[0] - .2, .5); }
      // Gul midtlinje etter trafikkøya.
      k.fillStyle = YE; for (let a = w.split[1][1] + 3; a < E * 1.5; a += 12) k.fillRect(a, -.06, 3, .12);
      // To felt inn: feltlinje og piler.
      if (w.entryDiv) { k.fillStyle = WH; for (let a = w.vl + 3; a < E * 1.5; a += 6) k.fillRect(a, w.entryDiv - .07, 3, .14);
        for (const a0 of [33, 47]) { laneArrow(k, a0, w.lanesIn.right, ['S', 'R']); laneArrow(k, a0, w.lanesIn.left, ['L']); } }
    }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 16; t.generateMipmaps = true; return t;
  }
  // Kjørefeltpil på vegen. Pila peker innover (mot −a); høyre for den som kjører inn er +s.
  function laneArrow(k, a0, s, kinds) {
    k.save(); k.fillStyle = WH; k.strokeStyle = WH; k.lineWidth = .3; k.lineCap = 'butt';
    const head = (x, y, dx, dy) => { const l = Math.hypot(dx, dy), ux = dx / l, uy = dy / l; k.beginPath(); k.moveTo(x + ux * 1.1, y + uy * 1.1); k.lineTo(x - uy * .55, y + ux * .55); k.lineTo(x + uy * .55, y - ux * .55); k.closePath(); k.fill(); };
    if (kinds.includes('S')) { k.beginPath(); k.moveTo(a0 + 2.6, s); k.lineTo(a0 - 1.4, s); k.stroke(); head(a0 - 1.4, s, -1, 0); }
    else { k.beginPath(); k.moveTo(a0 + 2.6, s); k.lineTo(a0 + .2, s); k.stroke(); }
    for (const [kd, sg] of [['R', 1], ['L', -1]]) if (kinds.includes(kd)) { k.beginPath(); k.moveTo(a0 + .6, s); k.quadraticCurveTo(a0 - .3, s, a0 - .6, s + sg * .9); k.stroke(); head(a0 - .75, s + sg * 1.25, -.35, sg * .9); }
    k.restore();
  }

  // ---------- Bygg verdenene ----------
  const SIGN = {};
  const silhouette = img => { const c = document.createElement('canvas'); c.width = img.width; c.height = img.height; const k = c.getContext('2d'); k.drawImage(img, 0, 0); k.globalCompositeOperation = 'source-in'; k.fillStyle = '#9aa3a6'; k.fillRect(0, 0, c.width, c.height); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; };
  function sign(key, tex, x, z, rotY = 0, w = .9) {
    const img = signs[tex].img, h = w * img.height / img.width, y = 2.1 + h / 2;
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rotY; town.add(g);
    mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: signs[tex].t, transparent: true, alphaTest: .4, toneMapped: false }), g).position.set(0, y, .03);
    const back = mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: silhouette(img), transparent: true, alphaTest: .4 }), g); back.position.set(0, y, .01); back.rotation.y = Math.PI;
    mesh(new THREE.CylinderGeometry(.045, .045, y + h / 2 - .1, 8), M.pole, g, true).position.set(0, (y + h / 2 - .1) / 2, -.02);
    SIGN[key] = { x, z, y, w, h, rotY }; return g;
  }
  function facade(rows, cols) { const c = document.createElement('canvas'); c.width = 256; c.height = 256; const k = c.getContext('2d'); k.fillStyle = '#fff'; k.fillRect(0, 0, 256, 256);
    const cw = 256 / cols, rh = 256 / rows; for (let r = 0; r < rows; r++) for (let q = 0; q < cols; q++) { const x = q * cw + cw * .26, y = r * rh + rh * .22;
      k.fillStyle = '#f4f2ea'; k.fillRect(x - 5, y - 5, cw * .48 + 10, rh * .5 + 10); k.fillStyle = '#4d6f7d'; k.fillRect(x, y, cw * .48, rh * .5); k.fillStyle = 'rgba(255,255,255,.25)'; k.fillRect(x, y, cw * .2, rh * .5); }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; return t; }
  const HOUSE_TEX = facade(2, 3), HOUSE_TEX2 = facade(2, 2), FLAT_TEX = facade(1, 1);
  const cols = ['#eeeae0', '#e8d9a8', '#c9d8d6', '#e9e4dc', '#d8c3a5', '#b9c9b2', '#e2d2c8', '#c7b39a'];
  const houseMats = cols.map(c => new THREE.MeshStandardMaterial({ color: c, map: HOUSE_TEX, roughness: .9 }));
  const houseMats2 = cols.map(c => new THREE.MeshStandardMaterial({ color: c, map: HOUSE_TEX2, roughness: .9 }));
  const roofMats = ['#41454b', '#8a3b2e', '#5a4636', '#2f3b45', '#6b2f2a'].map(c => std(c));
  function house(x, z, rotY) {
    const w = 8 + rnd() * 3.5, d = 7.5 + rnd() * 2, h = rnd() < .4 ? 3.4 : rnd() < .6 ? 5.2 : 6.4, pitch = 2.2 + rnd() * 1.4, gableFront = rnd() < .35;
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rotY; town.add(g);
    mesh(new THREE.BoxGeometry(w, h, d), (rnd() < .5 ? houseMats : houseMats2)[Math.floor(rnd() * houseMats.length)], g, true).position.y = h / 2;
    const rm = roofMats[Math.floor(rnd() * roofMats.length)];
    if (gableFront) { const rg = new THREE.ExtrudeGeometry(new THREE.Shape([new THREE.Vector2(-w / 2 - .5, 0), new THREE.Vector2(w / 2 + .5, 0), new THREE.Vector2(0, pitch)]), { depth: d + .6, bevelEnabled: false }); rg.translate(0, 0, -(d + .6) / 2); mesh(rg, rm, g, true).position.y = h; }
    else { const rg = new THREE.ExtrudeGeometry(new THREE.Shape([new THREE.Vector2(-d / 2 - .5, 0), new THREE.Vector2(d / 2 + .5, 0), new THREE.Vector2(0, pitch)]), { depth: w + .6, bevelEnabled: false }); rg.translate(0, 0, -(w + .6) / 2); rg.rotateY(Math.PI / 2); mesh(rg, rm, g, true).position.y = h; }
    if (rnd() < .6) block(w * (rnd() - .5) * .5, h + pitch * .6, -d * .15, .6, pitch * 1.1, .6, std('#6d6a66'), 0, true, g);
    mesh(new THREE.PlaneGeometry(1.0, 2.1), M.dark, g).position.set(-w * .3, 1.05, d / 2 + .02);
  }
  function flats(x, z, rotY, len) {
    const fl = 3 + Math.floor(rnd() * 3), h = fl * 3.1 + .6, d = 12, g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rotY; town.add(g);
    const tex = FLAT_TEX.clone(); tex.repeat.set(Math.round(len / 3.4), fl); tex.needsUpdate = true;
    mesh(new THREE.BoxGeometry(len, h, d), new THREE.MeshStandardMaterial({ color: cols[Math.floor(rnd() * cols.length)], map: tex, roughness: .9 }), g, true).position.y = h / 2;
    mesh(new THREE.BoxGeometry(len + .4, .5, d + .4), M.roof, g, true).position.y = h + .25;
  }
  const tree = (x, z, h) => { block(x, h * .25, z, .3, h * .5, .3, M.trunk, 0, true); const c = mesh(new THREE.IcosahedronGeometry(h * .3, 1), rnd() < .5 ? M.leaf : M.leaf2, town, true); c.position.set(x, h * .66, z); };
  const shrub = (x, z, s) => { const c = mesh(new THREE.IcosahedronGeometry(s, 1), M.shrub, town, true); c.position.set(x, s * .55 + .2, z); c.scale.y = .6; };
  const extrudeXZ = (pts, h, mat) => { const sh = new THREE.Shape(pts.map(([x, z]) => new THREE.Vector2(x, -z))); const g = new THREE.ExtrudeGeometry(sh, { depth: h, bevelEnabled: false, curveSegments: 24 }); g.rotateX(-Math.PI / 2); return mesh(g, mat, town, true); };

  for (const [key, w] of Object.entries(WORLDS)) {
    rnd = rng(w.seed * 97);
    const plane = new THREE.PlaneGeometry(2 * E, 2 * E); plane.rotateX(-Math.PI / 2);
    const gm = new THREE.MeshStandardMaterial({ map: groundCanvas(w), roughness: .95 }); mesh(plane, gm, town).position.set(w.ox, .005, w.oz);
    // Armene utenfor bakkeplanet.
    for (const arm of Object.keys(ARMS)) {
      armRect(w, arm, E - .5, 260, -w.hwOut, w.hwIn, .004, asphalt);
      armRect(w, arm, E - .5, 260, w.hwIn + 1.6, w.hwIn + 4.8, .004, M.walk); armRect(w, arm, E - .5, 260, -w.hwOut - 4.8, -w.hwOut - 1.6, .004, M.walk);
      for (let a = w.split[1][1] + 3; a < 260; a += 12) if (a + 3 > E) armRect(w, arm, Math.max(a, E), a + 3, -.06, .06, .03, M.stripe);
      // Trafikkøyer (hevet, med avrundede ender).
      for (const [a0, a1] of w.split) { const pts = []; for (let i = 0; i <= 12; i++) { const q = -Math.PI / 2 + Math.PI * i / 12; pts.push(armPt(w, arm, a1 - 1 + Math.cos(q) * 1, Math.sin(q) * 1)); }
        for (let i = 0; i <= 12; i++) { const q = Math.PI / 2 + Math.PI * i / 12; pts.push(armPt(w, arm, a0 + .8 + Math.cos(q) * .8, Math.sin(q) * .8 * 1.25)); }
        extrudeXZ(pts, .15, M.island); }
      // Skilt: vikeplikt (202) til høyre før innkjøringen, gangfelt (516) ved gangfeltet i begge retninger.
      const { u } = armFrame(ARMS[arm]), face = Math.atan2(u[0], u[1]);
      { const [x, z] = armPt(w, arm, w.ro + 2.6, w.hwIn + 1.9); sign(key + arm + '202', 's202', x, z, face, 1.0); }
      { const [x, z] = armPt(w, arm, w.gs[1] + .9, w.hwIn + 1.0); sign(key + arm + '516in', 's516', x, z, face, .75); }
      { const [x, z] = armPt(w, arm, w.gs[0] - .9, -w.hwOut - 1.0); sign(key + arm + '516ut', 's516', x, z, face + Math.PI, .75); }
      // Hus og trær langs armene, lyktestolper.
      for (const side of [-1, 1]) {
        const off = side > 0 ? w.hwIn + 17 : -(w.hwOut + 17);
        for (let a = 46 + rnd() * 6; a < 200; a += 15 + rnd() * 4) { const [x, z] = armPt(w, arm, a, off); house(x, z, face + (side > 0 ? -Math.PI / 2 : Math.PI / 2) + Math.PI); }
        for (let a = 34; a < 160; a += 14) if (rnd() < .7) { const [x, z] = armPt(w, arm, a + rnd() * 4, side > 0 ? w.hwIn + 6.6 + rnd() * 2 : -(w.hwOut + 6.6 + rnd() * 2)); tree(x, z, 4.8 + rnd() * 2.4); }
        for (let a = 30; a < 200; a += 30) { const [x, z] = armPt(w, arm, a, side > 0 ? w.hwIn + .9 : -w.hwOut - .9); block(x, 3, z, .12, 6, .12, M.pole, 0, true); }
      }
    }
    // Hjørnene: bygårder og trær på diagonalene, lave busker på grøntarealet nær vegen.
    for (let q = 0; q < 4; q++) { const th = Math.PI / 4 + q * Math.PI / 2, x = w.ox + Math.cos(th) * 52, z = w.oz - Math.sin(th) * 52; flats(x, z, -th + Math.PI / 2, 20);
      for (let k = 0; k < 4; k++) { const t2 = th + (rnd() - .5) * .5, r = 33 + rnd() * 6; tree(w.ox + Math.cos(t2) * r, w.oz - Math.sin(t2) * r, 5 + rnd() * 2); }
      for (let k = 0; k < 3; k++) { const t2 = th + (k - 1) * .22, r = (w.ro + w.gs[0]) / 2 + .3; shrub(w.ox + Math.cos(t2) * r, w.oz - Math.sin(t2) * r, .6 + rnd() * .3); }
      const rl = w.gs[0] - 1.2; block(w.ox + Math.cos(th) * rl, 3.5, w.oz - Math.sin(th) * rl, .14, 7, .14, M.pole, 0, true); }
    // Midtøya: hevet, gress, lave busker og ett lite tre.
    { const g = new THREE.CylinderGeometry(w.grass, w.grass, .22, 64); const top = mesh(g, [M.curb, M.islandGrass, M.curb], town, true); top.position.set(w.ox, .11, w.oz);
      for (let k = 0; k < 9; k++) { const t2 = k / 9 * Math.PI * 2 + .3, r = 4.5 + (k % 2) * 1.5; shrub(w.ox + Math.cos(t2) * r, w.oz - Math.sin(t2) * r, .7 + rnd() * .3); }
      tree(w.ox, w.oz, 6.5); }
    w.surface = (x, z) => { const r = Math.hypot(x - w.ox, z - w.oz); return r < w.grass ? .22 : 0; };
  }
  const surfaceAt = (x, z) => { for (const w of Object.values(WORLDS)) if (Math.abs(x - w.ox) < 200) return w.surface(x, z); return 0; };

  // ---------- Kjøretøy og personer ----------
  const parse = b64 => new GLTFLoader().parseAsync(Uint8Array.from(atob(b64), c => c.charCodeAt(0)).buffer, '');
  const [carGltf, bikeGltf, personGltf] = await Promise.all([parse(assets.car), parse(assets.bike), parse(assets.person)]);
  const glowMat = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const k = c.getContext('2d'), g = k.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,190,60,1)'); g.addColorStop(.35, 'rgba(255,160,30,.55)'); g.addColorStop(1, 'rgba(255,140,0,0)'); k.fillStyle = g; k.fillRect(0, 0, 64, 64);
    const t = new THREE.CanvasTexture(c); return new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }); })();
  const lamp = (o, x, y, z, size = .6, w = .16) => { const g = new THREE.Group(); g.position.set(x, y, z); g.add(new THREE.Mesh(new THREE.BoxGeometry(w, .12, .05), basic('#ffa31a'))); const s = new THREE.Sprite(glowMat); s.scale.set(size, size, 1); g.add(s); g.visible = false; o.add(g); return g; };
  function makeCar(color, parent = scene) {
    const o = carGltf.scene.clone(true), wheels = [];
    o.traverse(m => { if (m.name.startsWith('Hjul_')) wheels.push(m); if (m.isMesh) { m.castShadow = m.receiveShadow = true; m.material = m.material.clone(); if (m.material.name === 'Lakk') m.material.color.set(color); } });
    const signals = []; for (const side of [-1, 1]) for (const z of [-2.065, 2.055]) signals.push({ l: lamp(o, side * .79, .72, z, .9), side });
    parent.add(o); return { o, wheels, signals, box: [.95, 1.45, 2.15], len: 4.2 };
  }
  function makeFigure({ shirt = '#5b7a99', pants = '#2c3440', hair = '#4a3a2c' } = {}, parent = scene) {
    const o = new THREE.Group(), body = personGltf.scene.clone(true); o.add(body); parent.add(o);
    const J = {}; body.traverse(n => { J[n.name] = n; if (n.isMesh) { n.castShadow = n.receiveShadow = true; n.material = n.material.clone(); n.material.flatShading = true;
      if (n.material.name === 'Shirt') n.material.color.set(shirt); if (n.material.name === 'Pants') n.material.color.set(pants); if (n.material.name === 'Hair') n.material.color.set(hair); } });
    if (J.Vest) J.Vest.visible = false;
    const joints = ['Pelvis', 'Torso', 'Neck', 'ShoulderL', 'ElbowL', 'ShoulderR', 'ElbowR', 'HipL', 'KneeL', 'HipR', 'KneeR'];
    const base = Object.fromEntries(joints.map(k => [k, J[k].position.clone()]));
    o.visible = false; return { o, body, J, joints, base, box: [.35, 1.8, .35] };
  }
  function setPose(f, kind, phase = 0) {
    const J = f.J; for (const k of f.joints) { J[k].rotation.set(0, 0, 0); J[k].position.copy(f.base[k]); } f.body.position.set(0, 0, 0);
    const R = (k, x = 0, y = 0, z = 0) => J[k].rotation.set(x, y, z), sw = Math.sin(phase * Math.PI * 2);
    R('ShoulderL', 0, 0, -.06); R('ShoulderR', 0, 0, .06); R('ElbowL', -.12); R('ElbowR', -.12);
    if (kind === 'walk') { R('HipL', -.42 * sw); R('HipR', .42 * sw); R('KneeL', .5 * Math.max(0, sw)); R('KneeR', .5 * Math.max(0, -sw)); R('ShoulderL', .32 * sw, 0, -.06); R('ShoulderR', -.32 * sw, 0, .06); R('ElbowL', -.3); R('ElbowR', -.3); f.body.position.y = -.025 * Math.abs(Math.cos(phase * Math.PI * 2)); }
    if (kind === 'ride') { J.Pelvis.position.y = .97; R('Torso', .6); R('Neck', -.45); R('ShoulderL', -1.3, 0, -.08); R('ShoulderR', -1.3, 0, .08); R('ElbowL', -.25); R('ElbowR', -.25);
      R('HipL', -1.13 - .28 * sw); R('KneeL', 1.51 + .3 * sw); R('HipR', -1.13 + .28 * sw); R('KneeR', 1.51 - .3 * sw); }
  }
  function makeBike(shirt) {
    const o = new THREE.Group(), m = bikeGltf.scene.clone(true); o.add(m); m.traverse(n => { if (n.isMesh) n.castShadow = n.receiveShadow = true; });
    const rider = makeFigure({ shirt, pants: '#30353d' }, o); rider.o.position.set(0, 0, -.28); rider.o.visible = true;
    const helmet = mesh(new THREE.SphereGeometry(.14, 12, 8, 0, Math.PI * 2, 0, Math.PI / 2), std('#e8473a', { roughness: .5 }), rider.J.Head, true); helmet.position.y = .2; helmet.scale.set(1, .9, 1.15);
    scene.add(o); return { o, rider, wheels: [], signals: [], box: [.35, 1.75, .95], len: 1.8 };
  }
  const actors = { blue: makeCar('#1689c9'), red: makeCar('#c4473b'), white: makeCar('#e6e9e8'), grey: makeCar('#8d969b'), green: makeCar('#4f7a5a'), bike: makeBike('#2f8f6a') };
  const figures = { ped: makeFigure({ shirt: '#b5654a', pants: '#3a3f4a' }), ped2: makeFigure({ shirt: '#5b7a99' }) };

  const _v = V();
  function groundGap(o) { o.updateMatrixWorld(true); let pen = -1e9; o.traverse(m => { if (!m.isMesh) return; for (let q = m; q; q = q.parent) if (!q.visible) return;
      const p = m.geometry.attributes.position, st = Math.max(1, Math.floor(p.count / 160)); for (let i = 0; i < p.count; i += st) { _v.fromBufferAttribute(p, i).applyMatrix4(m.matrixWorld); const d = surfaceAt(_v.x, _v.z) - _v.y; if (d > pen) pen = d; } });
    return pen; }
  const snap = o => { o.position.y += groundGap(o) + .004; };

  // ---------- Kjøreveier ----------
  const dirOf = y => [Math.sin(y), Math.cos(y)];
  // Glatt kjørevei gjennom punkter, med jevn avstand (meter). Utenfor endene fortsetter den rett.
  function pathFrom(pts) {
    const curve = new THREE.CatmullRomCurve3(pts.map(([x, z]) => V(x, 0, z)), false, 'centripetal'); curve.arcLengthDivisions = 4000; const len = curve.getLength();
    const at = d => { const u = clamp(d / len), p = curve.getPointAt(u), t = curve.getTangentAt(u), k = d < 0 ? d : d > len ? d - len : 0;
      return { x: p.x + t.x * k, z: p.z + t.z * k, yaw: Math.atan2(t.x, t.z) }; };
    return { at, len };
  }
  // Rute gjennom rundkjøringen: inn på armen `from` (sideveis offIn), rundt på radius rc (eller fra rc til rc2), ut på armen `to`.
  // Rute gjennom rundkjøringen med jevn kurvatur: rett inn langs armen `from` (sideveis offIn), en innkjøringsbue (radius Rf)
  // som tangerer både armen og sirkelen, rundt på radius rc (eventuelt over til rc2 = feltskifte), en utkjøringsbue og rett ut på armen `to`.
  // Alle overganger er tangentielle, så bilen svinger mykt og vrikker ikke.
  function route(w, from, to, { offIn, rc, rc2 = rc, change = [.6, .9], offOut = w.exitOff, laps = 0, r0 = 90, r1 = 90, RfIn = 9, RfOut = 6 }) {
    const pts = [], step = .5, P = (th, r) => [w.ox + r * Math.cos(th), w.oz - r * Math.sin(th)], ang = ([x, z]) => Math.atan2(-(z - w.oz), x - w.ox);
    const arc = (cx, cz, R, t0, t1) => { const n = Math.max(2, Math.ceil(Math.abs(t1 - t0) * R / step)); for (let i = 1; i <= n; i++) { const t = t0 + (t1 - t0) * i / n; pts.push([cx + R * Math.cos(t), cz - R * Math.sin(t)]); } };
    const wrapTo = (t, ref) => { while (t - ref > Math.PI) t -= 2 * Math.PI; while (t - ref < -Math.PI) t += 2 * Math.PI; return t; };
    // Innkjøring: buesenter på armen med avstand rc + Rf fra sentrum.
    const Rf = RfIn, sIn = offIn + Rf, aIn = Math.sqrt(Math.max(0, (rc + Rf) ** 2 - sIn ** 2));
    for (let a = r0; a > aIn; a -= step) pts.push(armPt(w, from, a, offIn));
    const [cxI, czI] = armPt(w, from, aIn, sIn), thI = ang([cxI, czI]), RI = Rf; // sirkelpunktet ligger på linjen sentrum–buesenter
    { const L = armPt(w, from, aIn, offIn);
      const a0 = Math.atan2(-(L[1] - czI), L[0] - cxI); let a1 = wrapTo(thI + Math.PI, a0); arc(cxI, czI, RI, a0, a1); }
    // Utkjøring: buesenter på armen `to`, på venstre side for den som kjører ut (s < 0).
    const RO = RfOut, sOut = offOut + RO, aOut = Math.sqrt(Math.max(0, (rc2 + RO) ** 2 - sOut ** 2));
    const [cxO, czO] = armPt(w, to, aOut, -sOut); let thO = ang([cxO, czO]);
    while (thO < thI + .3) thO += 2 * Math.PI; thO += laps * 2 * Math.PI;
    { const n = Math.ceil((thO - thI) * Math.max(rc, rc2) / step); for (let i = 1; i <= n; i++) { const f = i / n, q = clamp((f - change[0]) / (change[1] - change[0])), sm = q * q * (3 - 2 * q); pts.push(P(thI + (thO - thI) * f, rc + (rc2 - rc) * sm)); } }
    { const L = armPt(w, to, aOut, -offOut), a0 = wrapTo(thO + Math.PI, 0), a1 = wrapTo(Math.atan2(-(L[1] - czO), L[0] - cxO), a0); arc(cxO, czO, RO, a0, a1); }
    for (let a = aOut + step; a <= r1; a += step) pts.push(armPt(w, to, a, -offOut));
    // Glatting (glidende snitt over ca. ±3 m, to ganger): overgangene mellom rett strekning, bue og sirkel får gradvis rattutslag,
    // slik en bil faktisk svinger, i stedet for et brått rykk.
    let q = pts; for (let pass = 0; pass < 2; pass++) { const n = q.length, h = 6, out = q.map(p => p.slice());
      for (let i = h; i < n - h; i++) { let sx = 0, sz = 0; for (let k = -h; k <= h; k++) { sx += q[i + k][0]; sz += q[i + k][1]; } out[i] = [sx / (2 * h + 1), sz / (2 * h + 1)]; } q = out; }
    return pathFrom(q);
  }
  // Første avstand d der betingelsen er oppfylt (skann med 0,1 m).
  function dWhere(path, fn, from = 0) { for (let d = from; d < path.len; d += .1) if (fn(path.at(d))) return d; return path.len; }
  const radius = (w, p) => Math.hypot(p.x - w.ox, p.z - w.oz);
  const thetaOf = (w, p) => Math.atan2(-(p.z - w.oz), p.x - w.ox);
  const dNear = (path, x, z) => { let best = 0, bd = 1e9; for (let d = 0; d < path.len; d += .2) { const p = path.at(d), q = Math.hypot(p.x - x, p.z - z); if (q < bd) { bd = q; best = d; } } return best; };

  function put(v, path, d, { signal = 0 } = {}, t = null) {
    const p = path.at(d); v.o.visible = true; v.o.position.set(p.x, 0, p.z); v.o.rotation.set(0, p.yaw, 0);
    v.wheels.forEach(w => w.rotation.x = d / .34);
    const blink = t == null || (t * 1.5) % 1 < .55; // i filmen blinker lyset 1,5 ganger i sekundet
    v.signals.forEach(({ l, side }) => l.visible = blink && signal !== 0 && (signal === 2 || side === -signal));
    if (v.rider) setPose(v.rider, 'ride', d / 2.1);
    snap(v.o);
  }
  function walkFig(f, x, z, yaw, kind = 'walk', phase = 0) { f.o.visible = true; f.o.position.set(x, 0, z); f.o.rotation.set(0, yaw, 0); setPose(f, kind, phase); f.o.position.y = surfaceAt(x, z); snap(f.o); }

  // ---------- 2D-grafikk over scenen ----------
  const projV = v => { const p = v.clone().project(camera); return [(p.x + 1) * L.W / 2, (1 - p.y) * L.sceneH / 2, p.z]; };
  const objOf = n => actors[n] || figures[n];
  function ring(n) {
    const a = objOf(n); if (!a || !a.o.visible) return; a.o.updateMatrixWorld(true); const [bx, by, bz] = a.box;
    const pts = []; for (const x of [-bx, bx]) for (const y of [0, by]) for (const z of [-bz, bz]) pts.push(projV(V(x, y, z).applyMatrix4(a.o.matrixWorld)));
    if (pts.some(p => p[2] > 1)) return;
    const x0 = Math.min(...pts.map(p => p[0])), x1 = Math.max(...pts.map(p => p[0])), y0 = Math.min(...pts.map(p => p[1])), y1 = Math.max(...pts.map(p => p[1]));
    const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2, rx = (x1 - x0) / 2 * 1.08 + 10, ry = (y1 - y0) / 2 * 1.12 + 10;
    ctx.save(); ctx.lineWidth = 17; ctx.strokeStyle = 'rgba(255,255,255,.97)'; ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, 7); ctx.stroke();
    ctx.lineWidth = 6; ctx.strokeStyle = C.amber; ctx.stroke(); ctx.restore();
  }
  function dashed(path, d0, d1, color = '#ffffff', width = 5, off = 0) { const pts = []; for (let d = d0; d <= d1; d += .7) { const p = path.at(d), [lx, lz] = dirOf(p.yaw - Math.PI / 2); pts.push(projV(V(p.x + lx * off, .06, p.z + lz * off))); } if (pts.length < 2 || pts.some(p => p[2] > 1)) return;
    ctx.save(); ctx.setLineDash([18, 14]); ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.lineWidth = width + 4; ctx.strokeStyle = 'rgba(15,23,42,.35)'; ctx.beginPath(); pts.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke();
    ctx.lineWidth = width; ctx.strokeStyle = color; ctx.stroke();
    // Pilspiss i enden.
    const [xa, ya] = pts[pts.length - 2] || pts[0], [xb, yb] = pts[pts.length - 1], ang = Math.atan2(yb - ya, xb - xa), hs = width * 3.4; ctx.setLineDash([]);
    ctx.beginPath(); ctx.moveTo(xb + Math.cos(ang) * hs, yb + Math.sin(ang) * hs); ctx.lineTo(xb + Math.cos(ang + 2.3) * hs, yb + Math.sin(ang + 2.3) * hs); ctx.lineTo(xb + Math.cos(ang - 2.3) * hs, yb + Math.sin(ang - 2.3) * hs); ctx.closePath();
    ctx.lineWidth = 4; ctx.strokeStyle = 'rgba(15,23,42,.35)'; ctx.stroke(); ctx.fillStyle = color; ctx.fill(); ctx.restore(); }
  function signBox(key) { const s = SIGN[key], [fx, fz] = dirOf(s.rotY + Math.PI / 2), m = .16;
    const c = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([a, b]) => projV(V(s.x + fx * a * (s.w / 2 + m), s.y + b * (s.h / 2 + m), s.z + fz * a * (s.w / 2 + m))));
    if (c.some(q => q[2] > 1)) return; ctx.save(); ctx.beginPath(); c.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.closePath(); ctx.lineJoin = 'round';
    ctx.lineWidth = 10; ctx.strokeStyle = 'rgba(255,255,255,.95)'; ctx.stroke(); ctx.lineWidth = 5; ctx.strokeStyle = C.tealLight; ctx.stroke(); ctx.restore(); }
  // Turkis pil på vegen (3D), som i vikepliktsfilmen.
  const arrowPool = [0, 1, 2, 3].map(() => { const mk = (c, o) => new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: o, depthWrite: false, toneMapped: false, polygonOffset: true, polygonOffsetFactor: -4, side: THREE.DoubleSide });
    const wM = mk('#ffffff', .95), tM = mk(C.tealLight, 1), w = new THREE.Mesh(new THREE.BufferGeometry(), wM), t = new THREE.Mesh(new THREE.BufferGeometry(), tM); w.renderOrder = 1; t.renderOrder = 2; w.visible = t.visible = false; scene.add(w, t); return { w, t, wM, tM }; });
  function ribbon(path, d0, d1, w, y, head, headW) { const pos = [], P = (d, off) => { const p = path.at(d), [lx, lz] = dirOf(p.yaw + Math.PI / 2); return [p.x + lx * off, y, p.z + lz * off]; };
    const dm = d1 - head, n = Math.max(1, Math.ceil((dm - d0) / .5));
    for (let i = 0; i < n; i++) { const a = d0 + (dm - d0) * i / n, b = d0 + (dm - d0) * (i + 1) / n, A = P(a, w / 2), B = P(a, -w / 2), C2 = P(b, w / 2), D = P(b, -w / 2); pos.push(...A, ...B, ...C2, ...B, ...D, ...C2); }
    pos.push(...P(dm, headW / 2), ...P(dm, -headW / 2), ...P(d1, 0)); const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); return g; }
  function setArrows(list) { arrowPool.forEach((a, k) => { const o = list[k]; a.w.visible = a.t.visible = !!o; if (!o) return; const [path, d0, d1, w = 1.1] = o.arrow, al = o.alpha ?? 1, head = Math.min(2.6, (d1 - d0) * .4);
    a.w.geometry.dispose(); a.t.geometry.dispose(); a.w.geometry = ribbon(path, d0 - .18, d1 + .3, w + .32, .061, head + .2, w * 2.3 + .55); a.t.geometry = ribbon(path, d0, d1, w, .066, head, w * 2.3); a.wM.opacity = .95 * al; a.tM.opacity = al; }); }
  // Flate på bakken (2D over scenen): liste med punkter, eller ring (r0..r1). Brukes for de tre fasene og gangfeltet.
  // Flater på bakken tegnes i 3D, så biler og personer som står på dem dekker dem naturlig (ikke omvendt).
  const zonePool = Array.from({ length: 5 }, () => { const mk = (c, o, f) => new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: o, depthWrite: false, toneMapped: false, polygonOffset: true, polygonOffsetFactor: f, side: THREE.DoubleSide });
    const fM = mk(C.tealLight, .22, -2), wM = mk('#ffffff', .9, -3), tM = mk(C.tealLight, 1, -4);
    const f = new THREE.Mesh(new THREE.BufferGeometry(), fM), w = new THREE.Mesh(new THREE.BufferGeometry(), wM), t = new THREE.Mesh(new THREE.BufferGeometry(), tM);
    f.renderOrder = 0; w.renderOrder = 1; t.renderOrder = 2; [f, w, t].forEach(m => { m.visible = false; scene.add(m); }); return { f, w, t, fM, wM, tM }; });
  // Polygon (liste med [x, z]) eller ring (annulus) → fyll og kantlinje som flate trekanter.
  function zoneGeo(z) {
    const loops = z.annulus ? (() => { const [w, r0, r1] = z.annulus, c = r => Array.from({ length: 96 }, (_, i) => { const q = i / 96 * Math.PI * 2; return [w.ox + Math.cos(q) * r, w.oz - Math.sin(q) * r]; }); return [c(r1), c(r0)]; })() : [z.pts];
    const fill = [], y = .045;
    if (z.annulus) { const [o, i2] = loops; for (let k = 0; k < o.length; k++) { const k2 = (k + 1) % o.length; fill.push(o[k][0], y, o[k][1], o[k2][0], y, o[k2][1], i2[k][0], y, i2[k][1], o[k2][0], y, o[k2][1], i2[k2][0], y, i2[k2][1], i2[k][0], y, i2[k][1]); } }
    else { const P0 = z.pts; for (let k = 1; k < P0.length - 1; k++) fill.push(P0[0][0], y, P0[0][1], P0[k][0], y, P0[k][1], P0[k + 1][0], y, P0[k + 1][1]); }
    const edge = width => { const out = []; for (const L2 of loops) for (let k = 0; k < L2.length; k++) { const [x1, z1] = L2[k], [x2, z2] = L2[(k + 1) % L2.length], len = Math.hypot(x2 - x1, z2 - z1) || 1, nx = -(z2 - z1) / len * width / 2, nz = (x2 - x1) / len * width / 2, ex = (x2 - x1) / len * width / 2, ez = (z2 - z1) / len * width / 2;
      const a = [x1 - ex + nx, x1 - ex - nx, x2 + ex + nx, x2 + ex - nx], b = [z1 - ez + nz, z1 - ez - nz, z2 + ez + nz, z2 + ez - nz]; out.push(a[0], y, b[0], a[1], y, b[1], a[2], y, b[2], a[1], y, b[1], a[3], y, b[3], a[2], y, b[2]); } return out; };
    const g = arr => { const q = new THREE.BufferGeometry(); q.setAttribute('position', new THREE.Float32BufferAttribute(arr, 3)); return q; };
    return [g(fill), g(edge(.34)), g(edge(.16))];
  }
  function setZones(list) { zonePool.forEach((Z, k) => { const o = list[k]; [Z.f, Z.w, Z.t].forEach(m => m.visible = !!o); if (!o) return; const al = o.alpha ?? 1, [gf, gw, gt] = zoneGeo(o.zone);
    [Z.f, Z.w, Z.t].forEach(m => m.geometry.dispose()); Z.f.geometry = gf; Z.w.geometry = gw; Z.t.geometry = gt; Z.fM.opacity = .22 * al; Z.wM.opacity = .9 * al; Z.tM.opacity = al; }); }
  function zone(z) { const poly = pts => pts.map(([x, zz]) => projV(V(x, .06, zz)));
    ctx.save(); ctx.beginPath();
    const add = P => { if (P.some(q => q[2] > 1)) return false; P.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.closePath(); return true; };
    if (z.annulus) { const [w, r0, r1] = z.annulus, circ = r => Array.from({ length: 96 }, (_, i) => { const t = i / 96 * Math.PI * 2; return [w.ox + Math.cos(t) * r, w.oz - Math.sin(t) * r]; });
      add(poly(circ(r1))); add(poly(circ(r0).reverse())); }
    else add(poly(z.pts));
    ctx.fillStyle = z.fill || 'rgba(20,184,166,.2)'; ctx.fill('evenodd'); ctx.lineJoin = 'round'; ctx.lineWidth = 8; ctx.strokeStyle = 'rgba(255,255,255,.9)'; ctx.stroke(); ctx.lineWidth = 4; ctx.strokeStyle = z.stroke || C.tealLight; ctx.stroke(); ctx.restore(); }
  function badge(b) {
    let p; if (b.actor) { const a = objOf(b.actor); if (!a.o.visible) return; p = a.o.position.clone().add(V(0, a.box[1] + (b.dy ?? .9), 0)); }
    else if (b.sign) { const s = SIGN[b.sign]; p = V(s.x, s.y + s.h / 2 + (b.dy ?? .8), s.z); } else p = V(...b.p);
    const [x, y, z] = projV(p); if (z > 1) return; if (b.actor && (x < 40 || x > L.W - 40 || y < 20 || y > L.sceneH - 20)) return; // bilen er utenfor bildet
    pill(ctx, clamp(x + (b.dx ?? 0), 210, L.W - 210), y + (b.dy2 ?? 0), b.text, { dot: b.dot ?? C.tealLight, size: b.size ?? 30 });
  }
  function summaryCard(alpha) {
    const mob = L.H > L.W, cw = mob ? 960 : 1080, lh = mob ? 80 : 74, ch = 120 + SUMMARY.length * lh, cx = (L.W - cw) / 2, cy = (L.sceneH - ch) / 2;
    ctx.save(); ctx.globalAlpha = alpha; ctx.fillStyle = 'rgba(15,23,42,.35)'; ctx.fillRect(0, 0, L.W, L.sceneH);
    ctx.shadowColor = 'rgba(15,23,42,.35)'; ctx.shadowBlur = 30; ctx.shadowOffsetY = 8; ctx.fillStyle = C.white; rr(ctx, cx, cy, cw, ch, 24); ctx.fill(); ctx.shadowColor = 'transparent';
    ctx.font = `600 30px ${FONT}`; ctx.fillStyle = C.teal; ctx.textBaseline = 'alphabetic'; ctx.textAlign = 'left'; ctx.fillText(SUMMARY_TITLE, cx + 48, cy + 74);
    SUMMARY.forEach((txt, i) => { const y = cy + 140 + i * lh; ctx.fillStyle = C.teal; ctx.beginPath(); ctx.arc(cx + 66, y - 13, 17, 0, 7); ctx.fill();
      ctx.fillStyle = C.white; ctx.font = `700 22px ${FONT}`; ctx.textAlign = 'center'; ctx.fillText(String(i + 1), cx + 66, y - 5); ctx.textAlign = 'left';
      ctx.fillStyle = C.text; ctx.font = `500 36px ${FONT}`; ctx.fillText(txt, cx + 104, y); });
    ctx.restore();
  }
  function posterPanel(lines, total) {
    const { W, H, sceneH, pad } = L; ctx.save(); ctx.fillStyle = C.white; ctx.fillRect(0, sceneH, W, H - sceneH); ctx.fillStyle = C.border; ctx.fillRect(0, sceneH, W, 2);
    ctx.font = `600 ${L.label}px ${FONT}`; ctx.fillStyle = C.teal; ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic'; ctx.fillText(`FORKLARINGSFILM · ${Math.floor(total / 60)}:${String(Math.floor(total % 60)).padStart(2, "0")}`, pad, sceneH + 74);
    ctx.textAlign = 'right'; ctx.fillStyle = C.text; ctx.font = `700 ${L.label}px ${FONT}`; ctx.fillText('teori-test.no', W - pad, sceneH + 74);
    ctx.textAlign = 'left'; ctx.font = `700 ${L.font}px ${FONT}`; lines.forEach((t, i) => ctx.fillText(t, pad, sceneH + 74 + 34 + L.font + i * L.line));
    const cx = W - pad - 70, cy = sceneH + 74 + 34 + L.font * .6 + L.line * .5; ctx.shadowColor = 'rgba(13,148,136,.45)'; ctx.shadowBlur = 24; ctx.fillStyle = C.teal; ctx.beginPath(); ctx.arc(cx, cy, 70, 0, 7); ctx.fill();
    ctx.shadowColor = 'transparent'; ctx.fillStyle = C.white; ctx.beginPath(); ctx.moveTo(cx - 20, cy - 32); ctx.lineTo(cx + 36, cy); ctx.lineTo(cx - 20, cy + 32); ctx.closePath(); ctx.fill(); ctx.restore();
  }

  window.setFormat = f => { L = LAYOUT[f]; canvas.width = L.W; canvas.height = L.H; renderer.setSize(L.W, L.sceneH); camera.aspect = L.W / L.sceneH; camera.updateProjectionMatrix(); window.filmFormat = f; };
  window.setFormat('mobile');
  const fovD = () => L.H > L.W ? 46 : 34;

  function drawScene(sh, t = null) {
    Object.values(actors).forEach(a => a.o.visible = false); Object.values(figures).forEach(f => f.o.visible = false);
    for (const [name, path, d, opt] of (sh.actors || [])) put(actors[name], path, d, opt || {}, t);
    for (const [name, x, z, yaw, kind, phase] of (sh.figs || [])) walkFig(figures[name], x, z, yaw, kind, phase);
    setArrows((sh.overlay || []).filter(o => o.arrow && (o.alpha ?? 1) > .001));
    setZones(t == null ? [] : (sh.overlay || []).filter(o => o.zone && (o.alpha ?? 1) > .001));
    const c = sh.cam; camera.position.copy(c.from); camera.lookAt(c.to); camera.fov = c.fov ?? fovD(); camera.updateProjectionMatrix();
    const focus = c.to.clone(); focus.y = 0; sun.position.copy(focus).add(V(-40, 70, 32)); sun.target.position.copy(focus);
    const big = c.from.y > 30; Object.assign(sun.shadow.camera, big ? { left: -110, right: 110, top: 110, bottom: -110, far: 300 } : { left: -60, right: 60, top: 60, bottom: -60, far: 220 }); sun.shadow.camera.updateProjectionMatrix();
    camera.updateMatrixWorld(); renderer.render(scene, camera);
    ctx.reset(); ctx.drawImage(renderer.domElement, 0, 0, L.W, L.sceneH);
    { const g = ctx.createRadialGradient(L.W / 2, L.sceneH * .5, Math.min(L.W, L.sceneH) * .5, L.W / 2, L.sceneH * .5, Math.max(L.W, L.sceneH) * .9); g.addColorStop(0, 'rgba(15,23,42,0)'); g.addColorStop(1, 'rgba(15,23,42,.14)'); ctx.fillStyle = g; ctx.fillRect(0, 0, L.W, L.sceneH); }
    const rank = o => o.zone ? 0 : o.dashed ? 1 : o.ring ? 3 : o.sign ? 4 : o.marker ? 5 : 6;
    for (const o of [...(sh.overlay || [])].sort((p, q) => rank(p) - rank(q))) {
      const al = o.alpha ?? 1; if (al <= .001 || o.arrow) continue; ctx.save(); ctx.globalAlpha = al;
      if (o.zone && t == null) zone(o.zone); // i filmen tegnes flatene i 3D (setZones)
      if (o.dashed) dashed(...o.dashed);
      if (o.ring) ring(o.ring);
      if (o.sign) signBox(o.sign);
      if (o.marker) { const [x, y, z] = projV(V(...o.marker.p)); if (z < 1) marker(ctx, x, y, o.marker.n, true); }
      if (o.badge) badge(o.badge);
      if (o.tag) pill(ctx, 32, 32 + 29, o.tag, { size: 32, dot: C.tealLight, align: 'left' });
      ctx.restore();
    }
  }

  // ---------- Bildene ----------
  const api = { WORLDS, ARMS, armPt, route, pathFrom, dWhere, dNear, radius, thetaOf, V, C };
  const shots = SHOTS(api);
  const total = CHAPTERS.reduce((s, c) => s + c.sec, 0), starts = CHAPTERS.map((_, i) => CHAPTERS.slice(0, i).reduce((s, c) => s + c.sec, 0));
  const marks = starts.slice(1).map(s => s / total);
  window.shotIds = shots.map(s => s.id);
  window.renderShot = function (id) {
    const sh = shots.find(x => x.id === id); if (!sh) throw Error('Ukjent bilde ' + id);
    drawScene(sh);
    if (sh.summary) summaryCard(1);
    if (sh.poster) { posterPanel(POSTER, DURATION_EST); window.infoBounds = []; return canvas; }
    const i = sh.chapter - 1, ch = CHAPTERS[i];
    const b = infoPanel(ctx, L, { chapter: sh.chapter, total: CHAPTERS.length, title: ch.title, lines: sh.text, progress: (starts[i] + ch.sec * sh.at) / total, chapterMarks: marks });
    ctx.save(); ctx.font = `600 ${L.label}px ${FONT}`; const lw = ctx.measureText(`KAPITTEL ${sh.chapter} · ${ch.title.toUpperCase()}`).width; ctx.restore();
    window.infoBounds = [...b.map(x => ({ t: x.t, x: x.x, w: x.w })), { t: 'overskrift', x: L.pad, w: lw + 240 }];
    return canvas;
  };

  // ---------- Filmen ----------
  const DURATION = timing.duration, CHS = timing.chapters, endStart = CHS[CHS.length - 1].end;
  const film = FILM({ ...api, ease, win, stopGo, goFrom, profile, CHS, wide: () => L.W > L.H });
  const cuts = []; CHS.forEach((c, i) => { if (i) cuts.push({ t: c.start, prev: [i - 1, c.start - 1e-3], fade: .5 }); (film.inner[i] || []).forEach(n => { const t = c.speech + n; cuts.push({ t, prev: [i, t - 1e-3], fade: .5 }); }); });
  const chapterOf = t => { let i = 0; while (i < CHS.length - 1 && t >= CHS[i + 1].start) i++; return i; };
  const stateAt = (i, t) => { const ch = CHS[i]; t = Math.min(t, ch.end); return film.chapterState(i, t - ch.start, t - ch.speech); };
  const fmarks = CHS.slice(1).map(c => c.start / DURATION);
  const buffer = document.createElement('canvas'), bctx = buffer.getContext('2d');
  window.__film = film; window.__route = route; window.__W = WORLDS; window.__stateAt = stateAt; window.__CHS = CHS;
  // Kontroll: står et stillestående kjøretøy på et gangfelt? Gir [t, navn] for hvert funn.
  window.auditCrosswalk = function (t0 = 0, t1 = DURATION, dt = .25) { const out = [], pos = {};
    for (let t = t0; t < t1; t += dt) { window.renderFrame(t);
      for (const [n, a] of Object.entries(actors)) { if (!a.o.visible || n === 'bike') { delete pos[n]; continue; } const P0 = a.o.position, prev = pos[n]; pos[n] = [P0.x, P0.z];
        if (!prev || Math.hypot(P0.x - prev[0], P0.z - prev[1]) > .02) continue; // i bevegelse
        const [bx, , bz] = a.box, y = a.o.rotation.y, c = Math.cos(y), s2 = Math.sin(y);
        const pts = [[-bx, -bz], [bx, -bz], [bx, bz], [-bx, bz], [0, -bz], [0, bz]].map(([x, z]) => [P0.x + x * c + z * s2, P0.z - x * s2 + z * c]);
        for (const w of Object.values(WORLDS)) for (const arm of Object.keys(ARMS)) { const { u, r } = armFrame(ARMS[arm]);
          if (pts.some(([x, z]) => { const dx = x - w.ox, dz = z - w.oz, aa = dx * u[0] + dz * u[1], ss = dx * r[0] + dz * r[1]; return aa > w.gs[0] && aa < w.gs[1] && ss > -w.hwOut && ss < w.hwIn; })) out.push([+t.toFixed(2), n, arm]); } } }
    return out; };
  window.setFilmFormat = f => { window.setFormat(f); return { width: L.W, height: L.H }; };
  window.chapterTimes = CHS.map(c => ({ chapter: c.chapter, title: c.title, start: c.start }));
  window.filmDuration = DURATION;
  window.renderFrame = function (seconds) {
    const t = clamp(Number(seconds) || 0, 0, DURATION), end = t >= endStart;
    const i = chapterOf(Math.min(t, endStart - 1e-3)), ch = CHS[i], u = t - ch.start, a = t - ch.speech;
    const cut = cuts.find(c => t >= c.t && t < c.t + c.fade);
    if (cut) { const [pi, pt] = cut.prev; drawScene(stateAt(pi, pt), pt); buffer.width = L.W; buffer.height = L.sceneH; bctx.drawImage(canvas, 0, 0); }
    const st = stateAt(i, t); drawScene(st, t);
    if (cut) { ctx.save(); ctx.globalAlpha = 1 - ease((t - cut.t) / cut.fade); ctx.drawImage(buffer, 0, 0); ctx.restore(); }
    if (end) summaryCard(ease((t - endStart - .2) / .6));
    const S = ch.sentences; let k = 0; S.forEach((s, j) => { if (a >= s - .15) k = j; });
    const lines = end ? END_LINES : POINTS[i][k], since = end ? t - endStart : k === 0 ? u : a - (S[k] - .15);
    const b = infoPanel(ctx, L, { chapter: i + 1, total: CHAPTERS.length, title: ch.title, lines, progress: t / DURATION, chapterMarks: fmarks, alpha: clamp(since / .25, 0, 1) });
    window.infoLayout = { bounds: b.map(x => ({ text: x.t, x: x.x, y: x.y, width: x.w, height: x.h })), width: L.W, sceneHeight: L.sceneH };
    const bl = actors.blue.o; window.frameInfo = { t, chapter: i + 1, title: ch.title, speechTime: a, endCard: end, point: lines.join(' '), duration: DURATION, blue: bl.visible ? [+bl.position.x.toFixed(2), +bl.position.z.toFixed(2)] : null };
    return canvas;
  };
  // Kontroll: hvor langt over/under bakken står kjøretøy og personer (meter), og om kjøretøy overlapper.
  window.auditGround = function (t) { window.renderFrame(t); const out = [];
    const check = (name, o) => { if (!o.visible) return; const pen = groundGap(o); out.push({ name, under: +pen.toFixed(3), over: +(-pen).toFixed(3) }); };
    Object.entries(actors).forEach(([k, a]) => check(k, a.o)); Object.entries(figures).forEach(([k, f]) => check(k, f.o));
    const vis = Object.entries(actors).filter(([, a]) => a.o.visible);
    const corners = a => { const [bx, , bz] = a.box, y = a.o.rotation.y, c = Math.cos(y), s2 = Math.sin(y), P0 = a.o.position; return [[-bx, -bz], [bx, -bz], [bx, bz], [-bx, bz]].map(([x, z]) => [P0.x + x * c + z * s2, P0.z - x * s2 + z * c]); };
    const sep = (A2, B2) => { for (const poly of [A2, B2]) for (let i = 0; i < 4; i++) { const [x1, z1] = poly[i], [x2, z2] = poly[(i + 1) % 4], nx = z1 - z2, nz = x2 - x1;
        const pa = A2.map(([x, z]) => x * nx + z * nz), pb = B2.map(([x, z]) => x * nx + z * nz); if (Math.max(...pa) < Math.min(...pb) || Math.max(...pb) < Math.min(...pa)) return true; } return false; };
    for (let p = 0; p < vis.length; p++) for (let q = p + 1; q < vis.length; q++) if (!sep(corners(vis[p][1]), corners(vis[q][1]))) out.push({ name: vis[p][0] + '×' + vis[q][0], overlap: true });
    // Personer mot kjøretøy (gående mot bil og sykkel).
    for (const [fn, f] of Object.entries(figures)) if (f.o.visible) for (const [an, a] of vis) { const P1 = f.o.position, cs = corners(a); const fc = [[P1.x - .3, P1.z - .3], [P1.x + .3, P1.z - .3], [P1.x + .3, P1.z + .3], [P1.x - .3, P1.z + .3]]; if (!sep(cs, fc)) out.push({ name: fn + '×' + an, overlap: true }); }
    return out; };
  // Plakaten i filmen bruker faktisk lengde.
  window.renderShot = (orig => id => { const c = orig(id); if (id === 'plakat') posterPanel(POSTER, DURATION); return c; })(window.renderShot);
  window.renderFrame(.5);
  window.ready = true; window.animationReady = true;
}
init().catch(e => { window.initError = String(e && e.stack || e); console.error(e); });

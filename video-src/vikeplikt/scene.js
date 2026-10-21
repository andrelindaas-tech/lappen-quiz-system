import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { assets } from './assets-data.js';
import { C, FONT, LAYOUT, infoPanel, chapterChip, pill, marker, rr } from './style.js';

import { POINTS, END_LINES, SUMMARY, SUMMARY_TITLE, PYRAMID, PYRAMID_BASE, POSTER } from './information.js';
import timing from './timing.json';

// Film: «Vikeplikt – hvem kjører først?». Samme prinsipp som veimerkingsfilmen:
// ett bilde bestemmes bare av tilstanden det får inn, ingen akkumulert bevegelse.
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const ease = v => { v = clamp(v); return v * v * v * (v * (v * 6 - 15) + 10); };
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

const yellow = basic('#f2c230'), white = basic('#f7f5ec');
const asphalt = std('#626a70', { map: noiseTexture(256, 205, 38, .06, 7) });
const shoulderMat = std('#bdb9a6', { map: noiseTexture(128, 200, 60, .14, 11) });

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
  scene.fog = new THREE.Fog('#dfe9ec', 140, 520);
  const camera = new THREE.PerspectiveCamera(40, 1, .2, 4000);
  scene.add(new THREE.HemisphereLight('#dcecff', '#5d7647', 1.45));
  const sun = new THREE.DirectionalLight('#ffe6c2', 3.2); sun.castShadow = true; sun.shadow.mapSize.set(4096, 4096);
  Object.assign(sun.shadow.camera, { left: -60, right: 60, top: 60, bottom: -60, near: 1, far: 220 }); sun.shadow.bias = -.0004; sun.shadow.normalBias = .03;
  scene.add(sun, sun.target);

  const mesh = (g, m, parent, shadow = false) => { const o = new THREE.Mesh(g, m); o.receiveShadow = true; o.castShadow = shadow; parent.add(o); return o; };



  // ---------- Byen ----------
  // x mot øst, z mot sør. Hovedgata går nord–sør langs x = 0 (6,4 m bred); s = -z er avstanden nordover.
  // Blå bil («deg») kjører nordover i høyre felt (x = +1,6). Alt er flatt: veg 0,02 m, fortau 0,13 m.
  const RW = 3.2, SW = 2.0, CURB = .13, ROAD = .02;
  const X1 = 60, X2 = 190, PARK = 300, PINCH = [592, 608], BUS50 = 718, BUS70 = 1240, TOWN_END = 1000; // byen slutter ved s = 1000, så landevei
  const BAY = s => [s - 18, s + 17], bays = [BAY(BUS50), BAY(BUS70)], inBay = s => bays.some(([a, c]) => s > a && s < c);
  const town = new THREE.Group(); scene.add(town);
  const rnd = rng(4242);
  const tile = (mat, rx, ry) => { if (!mat.map) return mat; const m = mat.clone(); m.map = mat.map.clone(); m.map.repeat.set(rx, ry); m.map.needsUpdate = true; return m; };
  const M = {
    grass: std('#86ad5c', { map: noiseTexture(128, 205, 40, .1, 5) }), lawn: std('#9cc06b', { map: noiseTexture(128, 210, 30, .06, 9) }),
    walk: std('#cbc8bf', { map: noiseTexture(128, 205, 30, .08, 13) }), hedge: std('#4f7a46', { flatShading: true }), pole: std('#8c9498', { metalness: .4, roughness: .5 }),
    dark: std('#2a2e33'), roof: std('#41454b'), island: std('#d9d6cc'), black: std('#25282b'), stripe: basic('#f2c230'), white: basic('#f7f5ec'),
    leaf: std('#5f8a52', { flatShading: true }), leaf2: std('#6f9a55', { flatShading: true }), trunk: std('#6f6449'), lot: std('#6a7277'),
  };
  function rect(x0, z0, x1, z1, y, mat, parent = town) { const w = Math.abs(x1 - x0), d = Math.abs(z1 - z0), g = new THREE.PlaneGeometry(w, d); g.rotateX(-Math.PI / 2);
    const m = mesh(g, tile(mat, Math.max(1, w / 6), Math.max(1, d / 6)), parent); m.position.set((x0 + x1) / 2, y, (z0 + z1) / 2); return m; }
  function block(cx, cy, cz, w, h, d, mat, rotY = 0, shadow = true, parent = town) { const m = mesh(new THREE.BoxGeometry(w, h, d), mat, parent, shadow); m.position.set(cx, cy, cz); m.rotation.y = rotY; return m; }
  // Bakken, gatene, avkjørselen, parkeringsplassen og busslommene.
  rect(-420, 220, 420, -1900, -.01, M.grass);
  rect(-RW, 90, RW, -1800, ROAD, asphalt);
  for (const s of [X1, X2]) for (const xs of [-1, 1]) rect(xs * RW, -s + RW, xs * 260, -s - RW, ROAD, asphalt);
  rect(RW, -PARK + RW, 14, -PARK - RW, ROAD, asphalt); rect(14, -PARK + 16, 46, -PARK - 16, ROAD, M.lot);
  for (const [a, c] of bays) rect(RW, -a, RW + 3, -c, ROAD, asphalt);
  // Fortau langs hovedgata. Åpent i kryssene, senket over avkjørselen og flyttet ut ved busslommene.
  const crossings = [X1, X2].map(X => [X - RW - SW, X + RW + SW]), lowered = [[PARK - RW, PARK + RW]];
  for (const side of [-1, 1]) {
    const pts = [-80, TOWN_END, ...crossings.flat(), ...(side > 0 ? [...lowered.flat(), ...bays.flat()] : [])].sort((a, b) => a - b);
    for (let k = 0; k < pts.length - 1; k++) { const a = pts[k], b = pts[k + 1], m = (a + b) / 2; if (b - a < .05 || crossings.some(([p, q]) => m > p && m < q)) continue;
      const x0 = side > 0 && inBay(m) ? RW + 3 : RW, low = side > 0 && lowered.some(([p, q]) => m > p && m < q), h = low ? .04 : CURB;
      block(side * (x0 + SW / 2), h / 2, -m, SW, h, b - a, M.walk, 0, false); }
  }
  // Landevegen utenfor byen: grusskulder, hvite kantlinjer og en enkel plattform ved busslomma.
  { const [a, c] = BAY(BUS70); for (const xs of [-1, 1]) { if (xs > 0) { rect(RW, -TOWN_END, RW + 1.2, -a, .012, shoulderMat); rect(RW, -c, RW + 1.2, -1800, .012, shoulderMat); } else rect(-RW - 1.2, -TOWN_END, -RW, -1800, .012, shoulderMat); }
    block(RW + 3 + SW / 2, CURB / 2, -(a + c) / 2, SW, CURB, c - a, M.walk, 0, false);
    for (const xs of [-1, 1]) { const x = xs * (RW - .2); if (xs > 0) { dash(x, -TOWN_END, x, -a, M.white, .15); dash(x, -c, x, -1800, M.white, .15); } else dash(x, -TOWN_END, x, -1800, M.white, .15); } }
  // Fortau langs sidegatene (fra hovedgata og ut).
  for (const X of [X1, X2]) for (const zs of [-1, 1]) for (const xs of [-1, 1]) block(xs * (RW + 260) / 2, CURB / 2, -X + zs * (RW + SW / 2), 260 - RW, CURB, SW, M.walk, 0, false);
  // Oppmerking: gul midtlinje i Storgata (X2) og i sentrum.
  function dash(x0, z0, x1, z1, mat = M.stripe, w = .12) { const len = Math.hypot(x1 - x0, z1 - z0), g = new THREE.PlaneGeometry(w, len); g.rotateX(-Math.PI / 2);
    const m = mesh(g, mat, town); m.position.set((x0 + x1) / 2, .028, (z0 + z1) / 2); m.rotation.y = Math.atan2(x1 - x0, z1 - z0); return m; }
  for (let x = -252; x < 252; x += 12) if (Math.abs(x) > RW + 1 && Math.abs(x + 3) > RW + 1) dash(x, -X2, x + 3, -X2);
  for (let s = 632; s < 1790; s += 12) dash(0, -s, 0, -s - 3);
  // Parkeringsplass: hvite oppstillingslinjer.
  for (let z = -PARK - 15; z <= -PARK + 15.1; z += 2.6) if (Math.abs(z + PARK) > 3.6) dash(30, z, 45.5, z, M.white, .1);
  // Haitenner foran Storgata i begge retninger av hovedgata. Spissen peker mot den som har vikeplikt.
  const TEETH = -X2 + RW + .4;
  function sharkTeeth(z, x0, x1, toSouth) { for (let x = x0 + .4; x < x1 - .2; x += .72) { const sh = new THREE.Shape([new THREE.Vector2(-.24, 0), new THREE.Vector2(.24, 0), new THREE.Vector2(0, .6)]);
      const g = new THREE.ShapeGeometry(sh); g.rotateX(-Math.PI / 2); const m = mesh(g, M.white, town); m.position.set(x, .028, z); m.rotation.y = toSouth ? Math.PI : 0; } }
  sharkTeeth(TEETH - .6, 0, RW, true); sharkTeeth(-X2 - RW - .4 + .6, -RW, 0, false);
  // Innsnevring: trafikkøyer på begge sider med gul/svart pullert i hver ende.
  for (const xs of [-1, 1]) { block(xs * (RW - .72), .09, -(PINCH[0] + PINCH[1]) / 2, 1.45, .18, PINCH[1] - PINCH[0], M.island);
    for (const s of PINCH) { block(xs * (RW - .72), .55, -s, .22, 1.0, .22, M.black); for (let k = 0; k < 3; k++) block(xs * (RW - .72), .3 + k * .3, -s, .24, .12, .24, M.stripe, 0, false); } }
  // Skilt (offisielle skiltfiler). Platen vender mot +z når rotY = 0; baksiden er grå i skiltets omriss.
  const silhouette = img => { const c = document.createElement('canvas'); c.width = img.width; c.height = img.height; const k = c.getContext('2d'); k.drawImage(img, 0, 0); k.globalCompositeOperation = 'source-in'; k.fillStyle = '#9aa3a6'; k.fillRect(0, 0, c.width, c.height); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; };
  const SIGN = {};
  function sign(key, tex, x, z, rotY = 0, w = .9) {
    const img = signs[tex].img, h = w * img.height / img.width, y = CURB + 2.1 + h / 2;
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rotY; town.add(g);
    mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: signs[tex].t, transparent: true, alphaTest: .4, toneMapped: false }), g).position.set(0, y, .03);
    const back = mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshStandardMaterial({ map: silhouette(img), transparent: true, alphaTest: .4 }), g); back.position.set(0, y, .01); back.rotation.y = Math.PI;
    mesh(new THREE.CylinderGeometry(.045, .045, y + h / 2 - .1, 8), M.pole, g, true).position.set(0, (y + h / 2 - .1) / 2, -.02);
    SIGN[key] = { x, z, y, w, h, rotY }; return g;
  }
  sign('s202', 's202', 4.1, -(X2 - RW - 1.0), 0, 1.0); sign('s202b', 's202', -4.1, -(X2 + RW + 1.0), Math.PI, 1.0);
  sign('s552', 's552', 4.2, -(PARK - 6), 0, .7);
  sign('s212', 's212', 4.2, -(PINCH[0] - 14), 0); sign('s214', 's214', -4.2, -(PINCH[1] + 12), Math.PI);
  sign('s50', 's50', 4.2, -680, 0); sign('s70', 's70', 4.6, -(BUS70 - 26), 0);
  sign('s512a', 's512', RW + 3.7, -(BAY(BUS50)[1] - 1.5), 0, .8); sign('s512b', 's512', RW + 3.7, -(BAY(BUS70)[1] - 1.5), 0, .8);
  // Leskur ved holdeplassene.
  for (const b of [BUS50, BUS70]) { const z = -(b + 4); block(RW + 3 + SW - .25, 1.25 + CURB, z, .08, 2.3, 3.4, std('#9fb7c0', { transparent: true, opacity: .55 })); block(RW + 3 + SW - .9, 2.45 + CURB, z, 1.5, .1, 3.6, M.dark); }
  // Fasader: vinduer som tekstur, så bygningene er billige å tegne.
  function facade(rows, cols, door) { const c = document.createElement('canvas'); c.width = 256; c.height = 256; const k = c.getContext('2d'); k.fillStyle = '#fff'; k.fillRect(0, 0, 256, 256);
    const cw = 256 / cols, rh = 256 / rows; for (let r = 0; r < rows; r++) for (let q = 0; q < cols; q++) { const x = q * cw + cw * .26, y = r * rh + rh * .22;
      k.fillStyle = '#f4f2ea'; k.fillRect(x - 5, y - 5, cw * .48 + 10, rh * .5 + 10); k.fillStyle = '#4d6f7d'; k.fillRect(x, y, cw * .48, rh * .5); k.fillStyle = 'rgba(255,255,255,.25)'; k.fillRect(x, y, cw * .2, rh * .5); }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.anisotropy = 8; return t; }
  const HOUSE_TEX = facade(2, 3), FLAT_TEX = facade(1, 1);
  const cols = ['#eeeae0', '#e8d9a8', '#c9d8d6', '#e9e4dc', '#d8c3a5', '#b9c9b2', '#e2d2c8', '#c7b39a'];
  const houseMats = cols.map(c => new THREE.MeshStandardMaterial({ color: c, map: HOUSE_TEX, roughness: .9 }));
  // Småhus i flere varianter: bredde, etasjer, takfarge, takvinkel, møne langs eller på tvers av gata, pipe og karnapp.
  const roofMats = ['#41454b', '#8a3b2e', '#5a4636', '#2f3b45', '#6b2f2a'].map(c => std(c)), HOUSE_TEX2 = facade(2, 2);
  const houseMats2 = cols.map(c => new THREE.MeshStandardMaterial({ color: c, map: HOUSE_TEX2, roughness: .9 }));
  function house(x, z, rotY) { // fasaden vender mot lokal +z
    const w = 8 + rnd() * 3.5, d = 7.5 + rnd() * 2, h = rnd() < .4 ? 3.4 : rnd() < .6 ? 5.2 : 6.4, pitch = 2.2 + rnd() * 1.4, gableFront = rnd() < .35;
    const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rotY; town.add(g);
    mesh(new THREE.BoxGeometry(w, h, d), (rnd() < .5 ? houseMats : houseMats2)[Math.floor(rnd() * houseMats.length)], g, true).position.y = h / 2;
    const rm = roofMats[Math.floor(rnd() * roofMats.length)];
    if (gableFront) { const rg = new THREE.ExtrudeGeometry(new THREE.Shape([new THREE.Vector2(-w / 2 - .5, 0), new THREE.Vector2(w / 2 + .5, 0), new THREE.Vector2(0, pitch)]), { depth: d + .6, bevelEnabled: false }); rg.translate(0, 0, -(d + .6) / 2); mesh(rg, rm, g, true).position.y = h; }
    else { const rg = new THREE.ExtrudeGeometry(new THREE.Shape([new THREE.Vector2(-d / 2 - .5, 0), new THREE.Vector2(d / 2 + .5, 0), new THREE.Vector2(0, pitch)]), { depth: w + .6, bevelEnabled: false }); rg.translate(0, 0, -(w + .6) / 2); rg.rotateY(Math.PI / 2); mesh(rg, rm, g, true).position.y = h; }
    if (rnd() < .6) block(w * (rnd() - .5) * .5, h + pitch * .6, -d * .15, .6, pitch * 1.1, .6, std('#6d6a66'), 0, true, g);
    if (rnd() < .3) { const ew = 2.6, eh = Math.min(h, 3.2); block(w * .22, eh / 2, d / 2 + .7, ew, eh, 1.4, houseMats[Math.floor(rnd() * houseMats.length)], 0, true, g); block(w * .22, eh + .08, d / 2 + .7, ew + .3, .16, 1.7, rm, 0, true, g); }
    mesh(new THREE.PlaneGeometry(1.0, 2.1), M.dark, g).position.set(-w * .3, 1.05, d / 2 + .02);
  }
  function flats(x, z, rotY, len) {
    const fl = 3 + Math.floor(rnd() * 3), h = fl * 3.1 + .6, d = 12, g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rotY; town.add(g);
    const tex = FLAT_TEX.clone(); tex.repeat.set(Math.round(len / 3.4), fl); tex.needsUpdate = true;
    mesh(new THREE.BoxGeometry(len, h, d), new THREE.MeshStandardMaterial({ color: cols[Math.floor(rnd() * cols.length)], map: tex, roughness: .9 }), g, true).position.y = h / 2;
    mesh(new THREE.BoxGeometry(len + .4, .5, d + .4), M.roof, g, true).position.y = h + .25;
  }
  // Boligstrøket: småhus med plen og hekk langs hovedgata og sidegatene. Sentrum: bygårder.
  const nearX = (s, r) => [X1, X2].some(X => Math.abs(s - X) < r);
  for (let s = -64; s < 560; s += 15) for (const side of [-1, 1]) {
    if (nearX(s, 13) || (side > 0 && Math.abs(s - PARK) < 22) || (s > PINCH[0] - 30)) continue;
    rect(side * (RW + SW), -s + 7, side * (RW + SW + 14), -s - 7, .004, M.lawn);
    block(side * (RW + SW + .45), .5, -s, .6, 1.0, 12.6, M.hedge, 0, true);
    house(side * (RW + SW + 10.5), -s, side > 0 ? -Math.PI / 2 : Math.PI / 2);
  }
  for (const X of [X1, X2]) for (let x = 20; x < 150; x += 15) for (const xs of [-1, 1]) for (const zs of [-1, 1]) {
    if (xs > 0 && X === X2 && x < 30) continue;
    house(xs * x, -X + zs * (RW + SW + 9.5), zs > 0 ? Math.PI : 0); }
  for (let s = 628; s < TOWN_END - 15; s += 25) for (const side of [-1, 1]) { const out = side > 0 && [BUS50, BUS70].some(b => s > b - 32 && s < b + 30) ? 3 : 0; flats(side * (RW + SW + 6.5 + out), -s, side > 0 ? -Math.PI / 2 : Math.PI / 2, 22); }
  // Trær mellom husene og langs sidegatene, og lyktestolper.
  const tree = (x, z, h) => { block(x, h * .25, z, .3, h * .5, .3, M.trunk, 0, true); const c = mesh(new THREE.IcosahedronGeometry(h * .3, 1), rnd() < .5 ? M.leaf : M.leaf2, town, true); c.position.set(x, h * .66, z); };
  for (let s = -56; s < 560; s += 15) for (const side of [-1, 1]) { if (nearX(s, 12) || (side > 0 && Math.abs(s - PARK) < 25) || s > PINCH[0] - 30 || rnd() < .35) continue; tree(side * (RW + SW + 9 + rnd() * 6), -s, 4.5 + rnd() * 2.5); }
  for (const X of [X1, X2]) for (let x = 27; x < 150; x += 15) for (const xs of [-1, 1]) for (const zs of [-1, 1]) if (rnd() < .6) tree(xs * x, -X + zs * (RW + SW + 2.2), 4.5 + rnd() * 2);
  for (let s = -40; s < TOWN_END; s += 30) for (const side of [-1, 1]) { if (nearX(s, 8) || (side > 0 && (inBay(s) || Math.abs(s - PARK) < 6)) || (side < 0 && s > 268 && s < 292)) continue; const x = side * (RW + SW - .35); block(x, 3 + CURB, -s, .12, 6, .12, M.pole, 0, true); block(x - side * .45, 6 + CURB, -s, .9, .1, .2, M.pole); }
  // Landskapet utenfor byen: jorder, gjerder, et par gårder, trerekker og skog i bakgrunnen.
  { const fieldCols = [std('#c9b56a', { map: noiseTexture(128, 210, 40, .1, 21) }), std('#7fa552', { map: noiseTexture(128, 205, 40, .1, 22) }), std('#8a6f4e', { map: noiseTexture(128, 200, 50, .12, 23) }), std('#a3bd62', { map: noiseTexture(128, 210, 30, .08, 24) })];
    for (const xs of [-1, 1]) { let s0 = TOWN_END + 12; while (s0 < 1760) { const len = 50 + rnd() * 50; rect(xs * (RW + 5), -s0, xs * 150, -(s0 + len - 4), .003, fieldCols[Math.floor(rnd() * fieldCols.length)]); s0 += len; } }
    const wood = std('#8b7355'), [ba, bc] = BAY(BUS70);
    for (const xs of [-1, 1]) for (let s0 = TOWN_END + 10; s0 < 1760; s0 += 40) { if (xs > 0 && s0 + 40 > ba - 6 && s0 < bc + 6) continue; const x = xs * (RW + 4.2);
      for (let k = 0; k <= 10; k++) block(x, .55, -(s0 + k * 4), .12, 1.1, .12, wood, 0, true);
      for (const y of [.5, .9]) block(x, y, -(s0 + 20), .05, .08, 40, wood, 0, false); }
    const red = std('#9b3328'), whiteWall = std('#efece4'), barnRoof = std('#3b3e43');
    const farm = (x, z, rotY, w, d, h, wall) => { const g = new THREE.Group(); g.position.set(x, 0, z); g.rotation.y = rotY; town.add(g); mesh(new THREE.BoxGeometry(w, h, d), wall, g, true).position.y = h / 2;
      const r = new THREE.ExtrudeGeometry(new THREE.Shape([new THREE.Vector2(-d / 2 - .5, 0), new THREE.Vector2(d / 2 + .5, 0), new THREE.Vector2(0, d * .38)]), { depth: w + .6, bevelEnabled: false }); r.translate(0, 0, -(w + .6) / 2); r.rotateY(Math.PI / 2); mesh(r, barnRoof, g, true).position.y = h; };
    farm(46, -1330, .1, 22, 12, 6, red); farm(30, -1312, .1, 10, 8, 5, whiteWall); farm(-58, -1150, -.2, 18, 11, 5.5, red); farm(-42, -1168, -.2, 9, 8, 5, std('#d9c08a'));
    const pine = std('#3f6b45', { flatShading: true }), pine2 = std('#4a7a4e', { flatShading: true });
    const cone = (x, z, h) => { block(x, h * .1, z, .3, h * .2, .3, M.trunk, 0, false); const c = mesh(new THREE.ConeGeometry(h * .28, h * .85, 7), rnd() < .5 ? pine : pine2, town, true); c.position.set(x, h * .2 + h * .42, z); };
    for (let i = 0; i < 220; i++) { const xs = rnd() < .5 ? -1 : 1, x = xs * (150 + rnd() * 60), z = -(TOWN_END + 40 + rnd() * 760); cone(x, z, 9 + rnd() * 7); }
    for (let i = 0; i < 140; i++) cone(-160 + rnd() * 320, -(1780 + rnd() * 70), 10 + rnd() * 6);
    for (const [x, z] of [[18, -1180], [24, -1186], [-22, -1270], [-28, -1262], [-16, -1400], [60, -1420], [64, -1410], [-70, -1340]]) tree(x, z, 6 + rnd() * 3); }
  // Bakkehøyden under et punkt: veg, fortau (senket ved avkjørselen), busslomme eller gress.
  function surfaceAt(x, z) { const s = -z, ax = Math.abs(x);
    if (ax <= RW) return ROAD;
    for (const X of [X1, X2]) { const d = Math.abs(s - X); if (d <= RW) return ROAD; if (d <= RW + SW) return CURB; }
    if (x > 0) { if (inBay(s)) return x <= RW + 3 ? ROAD : x <= RW + 3 + SW ? CURB : -.01;
      if (Math.abs(s - PARK) <= RW) return x <= RW + SW ? .04 : x <= 46 ? ROAD : -.01;
      if (x >= 14 && x <= 46 && Math.abs(s - PARK) <= 16) return ROAD; }
    if (s > TOWN_END) return ax <= RW + 1.2 ? .012 : -.01;
    return ax <= RW + SW ? CURB : -.01; }

  // ---------- Kjøretøy og personer ----------
  const parse = b64 => new GLTFLoader().parseAsync(Uint8Array.from(atob(b64), c => c.charCodeAt(0)).buffer, '');
  const [carGltf, busGltf, bikeGltf, personGltf] = await Promise.all([parse(assets.car), parse(assets.bus), parse(assets.bike), parse(assets.person)]);
  const glowMat = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const k = c.getContext('2d'), g = k.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,190,60,1)'); g.addColorStop(.35, 'rgba(255,160,30,.55)'); g.addColorStop(1, 'rgba(255,140,0,0)'); k.fillStyle = g; k.fillRect(0, 0, 64, 64);
    const t = new THREE.CanvasTexture(c); return new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }); })();
  const lamp = (o, x, y, z, size = .6, w = .16) => { const g = new THREE.Group(); g.position.set(x, y, z); g.add(new THREE.Mesh(new THREE.BoxGeometry(w, .12, .05), basic('#ffa31a'))); const s = new THREE.Sprite(glowMat); s.scale.set(size, size, 1); g.add(s); g.visible = false; o.add(g); return g; };
  function makeCar(color, parent = scene) {
    const o = carGltf.scene.clone(true), wheels = [];
    o.traverse(m => { if (m.name.startsWith('Hjul_')) wheels.push(m); if (m.isMesh) { m.castShadow = m.receiveShadow = true; m.material = m.material.clone(); if (m.material.name === 'Lakk') m.material.color.set(color); } });
    const signals = []; for (const side of [-1, 1]) for (const z of [-2.065, 2.055]) signals.push({ l: lamp(o, side * .79, .72, z), side });
    parent.add(o); return { o, wheels, signals, box: [.95, 1.45, 2.15], len: 4.2 };
  }
  function makeBus() {
    const o = new THREE.Group(), m = busGltf.scene.clone(true); o.add(m); m.traverse(n => { if (n.isMesh) n.castShadow = n.receiveShadow = true; });
    const signals = []; for (const side of [-1, 1]) { signals.push({ l: lamp(o, side * 1.08, .95, 6.1, .8, .22), side }, { l: lamp(o, side * 1.08, 1.35, -6.1, .8, .22), side }, { l: lamp(o, side * 1.3, 1.15, 3.9, .7, .05), side }); }
    scene.add(o); return { o, wheels: [], signals, box: [1.3, 3.15, 6.1], len: 12 };
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
  // Stilling: stand, walk eller ride (på sykkel). phase styrer skrittene / tråkkingen.
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
  const actors = { blue: makeCar('#1689c9'), red: makeCar('#c4473b'), white: makeCar('#e6e9e8'), grey: makeCar('#8d969b'), bus: makeBus(), bike: makeBike('#2f8f6a') };
  const figures = { ped: makeFigure({ shirt: '#b5654a', pants: '#3a3f4a' }), ped2: makeFigure({ shirt: '#5b7a99' }) };
  // Parkerte biler (står fast i byen).
  const parked = (color, x, z, yaw) => { const c = makeCar(color, town); c.o.position.set(x, ROAD, z); c.o.rotation.y = yaw; return c; };
  const NARROW = [455, 461.5, 468];
  NARROW.forEach((s, k) => parked(['#6b7d4f', '#d8d2c4', '#4a5866'][k], 2.15, -s, Math.PI));
  [[34, -PARK - 10.4, '#a8423a'], [34, -PARK - 7.8, '#cfd4d6'], [40, -PARK + 5.2, '#3d5a73'], [34, -PARK + 10.4, '#d9c08a'], [40, -PARK - 13, '#56606a']].forEach(([x, z, c]) => parked(c, x, z, -Math.PI / 2));

  // Bakkekontakt: største inntrengning (positiv = under bakken) og høyde over bakken for et objekt.
  const _v = V();
  function groundGap(o) { o.updateMatrixWorld(true); let pen = -1e9; o.traverse(m => { if (!m.isMesh) return; for (let q = m; q; q = q.parent) if (!q.visible) return;
      const p = m.geometry.attributes.position, st = Math.max(1, Math.floor(p.count / 160)); for (let i = 0; i < p.count; i += st) { _v.fromBufferAttribute(p, i).applyMatrix4(m.matrixWorld); const d = surfaceAt(_v.x, _v.z) - _v.y; if (d > pen) pen = d; } });
    return pen; }
  const snap = o => { o.position.y += groundGap(o) + .004; };

  // ---------- Kjøreveier ----------
  // En kjørevei er linjer (L), buer (A, + = venstre) og feltskift (S, sideveis forskyvning, + = mot venstre).
  // dirOf(yaw) = (sin, cos): yaw = π er nordover, π/2 østover, −π/2 vestover, 0 sørover.
  const dirOf = y => [Math.sin(y), Math.cos(y)];
  function makePath(x, z, yaw, ops) {
    const segs = []; let p = { x, z, yaw }, d = 0;
    for (const op of ops) {
      const [fx, fz] = dirOf(p.yaw), [lx, lz] = dirOf(p.yaw + Math.PI / 2);
      if (op[0] === 'L') { segs.push({ t: 'L', d0: d, len: op[1], ...p }); p = { x: p.x + fx * op[1], z: p.z + fz * op[1], yaw: p.yaw }; d += op[1]; }
      if (op[0] === 'S') { const [, len, dx] = op; segs.push({ t: 'S', d0: d, len, dx, ...p }); p = { x: p.x + fx * len + lx * dx, z: p.z + fz * len + lz * dx, yaw: p.yaw }; d += len; }
      if (op[0] === 'A') { const [, R, ang] = op, sg = Math.sign(ang), len = R * Math.abs(ang), cx = p.x + sg * R * lx, cz = p.z + sg * R * lz; segs.push({ t: 'A', d0: d, len, cx, cz, R, sg, yaw: p.yaw });
        const y2 = p.yaw + ang, [ax, az] = dirOf(y2 + Math.PI / 2); p = { x: cx - sg * R * ax, z: cz - sg * R * az, yaw: y2 }; d += len; }
    }
    segs.push({ t: 'L', d0: d, len: 1e6, ...p });
    const at = dd => { let g = segs[segs.length - 1]; for (const s of segs) if (dd <= s.d0 + s.len) { g = s; break; } const k = dd - g.d0;
      const [fx, fz] = dirOf(g.yaw), [lx, lz] = dirOf(g.yaw + Math.PI / 2);
      if (g.t === 'L') return { x: g.x + fx * k, z: g.z + fz * k, yaw: g.yaw };
      if (g.t === 'S') { const q = clamp(k / g.len), sm = q * q * (3 - 2 * q), dsm = 6 * q * (1 - q) / g.len; return { x: g.x + fx * k + lx * g.dx * sm, z: g.z + fz * k + lz * g.dx * sm, yaw: g.yaw + Math.atan(g.dx * dsm) }; }
      const y = g.yaw + g.sg * k / g.R, [ax, az] = dirOf(y + Math.PI / 2); return { x: g.cx - g.sg * g.R * ax, z: g.cz - g.sg * g.R * az, yaw: y }; };
    return { at, len: d };
  }
  // Fart: kjør med v0, brems jevnt til stopp ved dStop (ferdig ved tStop), vent, og kjør igjen ved tGo.
  function stopGo(u, { dStop, v0, tStop, T = 3, tGo = Infinity, v1 = v0, Ta = 3 }) {
    const tb = tStop - T, back = v0 * T / 2;
    if (u < tb) return dStop - back - v0 * (tb - u);
    if (u < tStop) { const q = u - tb; return dStop - back + v0 * q - v0 * q * q / (2 * T); }
    return dStop + goFrom(u, tGo, v1, Ta);
  }
  function goFrom(u, tGo, v, Ta = 3) { const q = u - tGo; if (q <= 0) return 0; return q < Ta ? v * q * q / (2 * Ta) : v * Ta / 2 + v * (q - Ta); }
  // Plasser et kjøretøy på kjøreveien. signal: −1 venstre, 1 høyre, 2 nødblink.
  function put(v, path, d, t, { signal = 0 } = {}) {
    const p = path.at(d); v.o.visible = true; v.o.position.set(p.x, ROAD, p.z); v.o.rotation.set(0, p.yaw, 0);
    v.wheels.forEach(w => w.rotation.x = d / .34);
    v.signals.forEach(({ l, side }) => l.visible = signal !== 0 && (signal === 2 || side === -signal) && (t * 1.5) % 1 < .55);
    if (v.rider) setPose(v.rider, 'ride', d / 2.1);
    snap(v.o);
  }
  function walkFig(f, x, z, yaw, kind = 'walk', phase = 0) { f.o.visible = true; f.o.position.set(x, 0, z); f.o.rotation.set(0, yaw, 0); setPose(f, kind, phase); f.o.position.y = surfaceAt(x, z); snap(f.o); }

  // ---------- 2D-grafikk over scenen ----------
  const projV = v => { const p = v.clone().project(camera); return [(p.x + 1) * L.W / 2, (1 - p.y) * L.sceneH / 2, p.z]; };
  const objOf = n => actors[n] || figures[n];
  // Gul ring (vikeplikt) rundt kjøretøyet eller personen, tegnet rundt det som synes på skjermen.
  function ring(n) {
    const a = objOf(n); if (!a || !a.o.visible) return; a.o.updateMatrixWorld(true); const [bx, by, bz] = a.box;
    const pts = []; for (const x of [-bx, bx]) for (const y of [0, by]) for (const z of [-bz, bz]) pts.push(projV(V(x, y, z).applyMatrix4(a.o.matrixWorld)));
    if (pts.some(p => p[2] > 1)) return;
    const x0 = Math.min(...pts.map(p => p[0])), x1 = Math.max(...pts.map(p => p[0])), y0 = Math.min(...pts.map(p => p[1])), y1 = Math.max(...pts.map(p => p[1]));
    const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2, rx = (x1 - x0) / 2 * 1.08 + 10, ry = (y1 - y0) / 2 * 1.12 + 10;
    // Bred hvit kant først: den lager en luke i pila, så pila ser ut til å gå under ringen.
    ctx.save(); ctx.lineWidth = 17; ctx.strokeStyle = 'rgba(255,255,255,.97)'; ctx.beginPath(); ctx.ellipse(cx, cy, rx, ry, 0, 0, 7); ctx.stroke();
    ctx.lineWidth = 6; ctx.strokeStyle = C.amber; ctx.stroke(); ctx.restore();
  }
  // Turkis pil på bakken langs kjøreveien til den som kjører først.
  function arrow(path, d0, d1, w = 1.1) {
    { const near = d => { const p = path.at(d); return Math.hypot(p.x - camera.position.x, p.z - camera.position.z, camera.position.y) < 17; }; if (near(d0)) return; for (let d = d0; d <= d1; d += .5) if (near(d)) { d1 = d - .5; break; } }
    if (d1 - d0 < 1.5) return; const head = Math.min(2.8, (d1 - d0) * .6), dm = d1 - head, L2 = [], R2 = [];
    const pt = (d, off) => { const p = path.at(d), [lx, lz] = dirOf(p.yaw + Math.PI / 2); return projV(V(p.x + lx * off, .06, p.z + lz * off)); };
    for (let d = d0; d < dm; d += 1) { L2.push(pt(d, w / 2)); R2.push(pt(d, -w / 2)); } L2.push(pt(dm, w / 2)); R2.push(pt(dm, -w / 2));
    const poly = [...L2, pt(dm, w * 1.15), pt(d1, 0), pt(dm, -w * 1.15), ...R2.reverse()];
    if (poly.some(p => p[2] > 1)) return;
    ctx.save(); ctx.beginPath(); poly.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.closePath(); ctx.lineJoin = 'round';
    ctx.lineWidth = 7; ctx.strokeStyle = 'rgba(255,255,255,.95)'; ctx.stroke(); ctx.fillStyle = C.tealLight; ctx.fill(); ctx.restore();
  }
  // Stiplet linje langs en planlagt kjørevei (blå bils sving).
  function dashed(path, d0, d1) { const pts = []; for (let d = d0; d <= d1; d += .7) { const p = path.at(d); pts.push(projV(V(p.x, .06, p.z))); } if (pts.some(p => p[2] > 1)) return;
    ctx.save(); ctx.setLineDash([18, 14]); ctx.lineCap = 'round'; ctx.lineWidth = 9; ctx.strokeStyle = 'rgba(15,23,42,.35)'; ctx.beginPath(); pts.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.stroke();
    ctx.lineWidth = 5; ctx.strokeStyle = '#ffffff'; ctx.stroke(); ctx.restore(); }
  // Turkis ramme rundt et skilt, og rundt et felt på bakken (haitennene).
  function signBox(key) { const s = SIGN[key], [fx, fz] = dirOf(s.rotY + Math.PI / 2), m = .16;
    const c = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([a, b]) => projV(V(s.x + fx * a * (s.w / 2 + m), s.y + b * (s.h / 2 + m), s.z + fz * a * (s.w / 2 + m))));
    if (c.some(q => q[2] > 1)) return; ctx.save(); ctx.beginPath(); c.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.closePath(); ctx.lineJoin = 'round';
    ctx.lineWidth = 10; ctx.strokeStyle = 'rgba(255,255,255,.95)'; ctx.stroke(); ctx.lineWidth = 5; ctx.strokeStyle = C.tealLight; ctx.stroke(); ctx.restore(); }
  // Turkis pil som flat 3D-markering på vegen: bilene står foran den, og den følger kjøreveien jevnt.
  const arrowPool = [0, 1, 2, 3].map(() => { const mk = (c, o) => new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: o, depthWrite: false, toneMapped: false, polygonOffset: true, polygonOffsetFactor: -4, side: THREE.DoubleSide });
    const wM = mk('#ffffff', .95), tM = mk(C.tealLight, 1), w = new THREE.Mesh(new THREE.BufferGeometry(), wM), t = new THREE.Mesh(new THREE.BufferGeometry(), tM); w.renderOrder = 1; t.renderOrder = 2; w.visible = t.visible = false; scene.add(w, t); return { w, t, wM, tM }; });
  function ribbon(path, d0, d1, w, y, head, headW) { const pos = [], P = (d, off) => { const p = path.at(d), [lx, lz] = dirOf(p.yaw + Math.PI / 2); return [p.x + lx * off, y, p.z + lz * off]; };
    const dm = d1 - head, n = Math.max(1, Math.ceil((dm - d0) / .5));
    for (let i = 0; i < n; i++) { const a = d0 + (dm - d0) * i / n, b = d0 + (dm - d0) * (i + 1) / n, A = P(a, w / 2), B = P(a, -w / 2), C2 = P(b, w / 2), D = P(b, -w / 2); pos.push(...A, ...B, ...C2, ...B, ...D, ...C2); }
    pos.push(...P(dm, headW / 2), ...P(dm, -headW / 2), ...P(d1, 0)); const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); return g; }
  function setArrows(list) { arrowPool.forEach((a, k) => { const o = list[k]; a.w.visible = a.t.visible = !!o; if (!o) return; const [path, d0, d1, w = 1.1] = o.arrow, al = o.alpha ?? 1, head = Math.min(2.6, (d1 - d0) * .4);
    a.w.geometry.dispose(); a.t.geometry.dispose(); a.w.geometry = ribbon(path, d0 - .18, d1 + .3, w + .32, .041, head + .2, w * 2.3 + .55); a.t.geometry = ribbon(path, d0, d1, w, .046, head, w * 2.3); a.wM.opacity = .95 * al; a.tM.opacity = al; }); }
  // Markering på bakken som 3D-flate, så biler foran den dekker den naturlig.
  const hl = (() => { const g = new THREE.Group(); g.visible = false; scene.add(g); const mk = (c, op) => new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: op, depthWrite: false, toneMapped: false, polygonOffset: true, polygonOffsetFactor: -2 });
    const fill = mk(C.tealLight, .3), edgeW = mk('#ffffff', .95), edgeT = mk(C.tealLight, 1), parts = [];
    const strip = (m, y) => { const o = new THREE.Mesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), m); o.position.y = y; g.add(o); return o; };
    const f = strip(fill, .034); for (let k = 0; k < 4; k++) parts.push([strip(edgeW, .036), strip(edgeT, .038)]);
    return { g, set(x0, z0, x1, z1, al) { g.visible = al > .001; fill.opacity = .3 * al; edgeW.opacity = .95 * al; edgeT.opacity = al; const cx = (x0 + x1) / 2, cz = (z0 + z1) / 2, w = x1 - x0, d = z1 - z0;
      f.position.set(cx, .034, cz); f.scale.set(w, 1, d);
      [[cx, z0, w, 0], [cx, z1, w, 0], [x0, cz, 0, d], [x1, cz, 0, d]].forEach(([x, z, sw, sd], k) => { const [a, b] = parts[k]; a.position.set(x, .036, z); a.scale.set(sw || .2, 1, sd || .2); b.position.set(x, .038, z); b.scale.set(sw ? sw - .05 : .1, 1, sd ? sd - .05 : .1); }); } };
  })();
  function groundBox(x0, z0, x1, z1) { const c = [[x0, z0], [x1, z0], [x1, z1], [x0, z1]].map(([x, z]) => projV(V(x, .06, z))); if (c.some(q => q[2] > 1)) return;
    ctx.save(); ctx.beginPath(); c.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.closePath(); ctx.fillStyle = C.tealSoft; ctx.fill(); ctx.lineJoin = 'round';
    ctx.lineWidth = 8; ctx.strokeStyle = 'rgba(255,255,255,.95)'; ctx.stroke(); ctx.lineWidth = 4; ctx.strokeStyle = C.tealLight; ctx.stroke(); ctx.restore(); }
  // Etikett over et kjøretøy, en person, et skilt eller et punkt.
  function badge(b) {
    let p; if (b.actor) { const a = objOf(b.actor); if (!a.o.visible) return; p = a.o.position.clone().add(V(0, a.box[1] + (b.dy ?? .9), 0)); }
    else if (b.sign) { const s = SIGN[b.sign]; p = V(s.x, s.y + s.h / 2 + (b.dy ?? .8), s.z); } else p = V(...b.p);
    const [x, y, z] = projV(p); if (z > 1) return; pill(ctx, clamp(x + (b.dx ?? 0), 200, L.W - 200), y, b.text, { dot: b.dot ?? C.tealLight, size: b.size ?? 30 });
  }
  // Skiltforklaring med skiltfilene (kapittel 5, innsnevring).
  function legend(rows, alpha) { const mob = L.H > L.W, s = mob ? 78 : 72, x0 = 32, y0 = 32; ctx.save(); ctx.globalAlpha = alpha; ctx.font = `600 ${mob ? 30 : 29}px ${FONT}`; ctx.textBaseline = 'middle';
    const tw = Math.max(...rows.map(r => ctx.measureText(r.text).width)), w = s + 60 + tw, h = rows.length * (s + 18) + 22;
    ctx.shadowColor = 'rgba(15,23,42,.25)'; ctx.shadowBlur = 20; ctx.shadowOffsetY = 4; ctx.fillStyle = 'rgba(255,255,255,.96)'; rr(ctx, x0, y0, w, h, 20); ctx.fill(); ctx.shadowColor = 'transparent';
    rows.forEach((r, k) => { const y = y0 + 20 + k * (s + 18); ctx.globalAlpha = alpha * (r.dim ? .45 : 1); ctx.drawImage(signs[r.sign].img, x0 + 18, y, s, s); ctx.fillStyle = C.text; ctx.fillText(r.text, x0 + 36 + s, y + s / 2 + 1); });
    ctx.restore(); }
  // Myndighetspyramiden (samme oppbygning som illustrasjonen i artikkelen). Nederste trinn kan deles i to.
  const PYR = [[[250, 15], [198, 85], [302, 85]], [[191, 95], [140, 165], [360, 165], [309, 95]], [[133, 175], [82, 245], [418, 245], [367, 175]], [[75, 255], [10, 345], [490, 345], [425, 255]]];
  function pyramid(q) {
    const mob = L.H > L.W, k = mob ? .92 : .84, pw = 500 * k + 36, ph = 360 * k + 30, x0 = L.W - 32 - pw, y0 = 32;
    ctx.save(); ctx.globalAlpha = q.alpha ?? 1; ctx.shadowColor = 'rgba(15,23,42,.25)'; ctx.shadowBlur = 22; ctx.shadowOffsetY = 5; ctx.fillStyle = 'rgba(255,255,255,.95)'; rr(ctx, x0, y0, pw, ph, 22); ctx.fill(); ctx.shadowColor = 'transparent';
    ctx.translate(x0 + 18, y0 + 12); ctx.scale(k, k); ctx.lineJoin = 'round'; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    const poly = (pts, fill) => { ctx.beginPath(); pts.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.closePath(); ctx.fillStyle = fill; ctx.fill(); ctx.lineWidth = 5; ctx.strokeStyle = C.text; ctx.stroke(); };
    const label = (t, x, y, on, size = 24) => { ctx.font = `800 ${size}px ${FONT}`; ctx.fillStyle = on ? C.white : C.text; ctx.fillText(t, x, y); };
    const act = q.active || [], ys = [70, 135, 215];
    PYR.forEach((pts, i) => { const b = clamp((q.build ?? 1) * 4 - i); if (b <= 0) return; ctx.save(); ctx.globalAlpha *= b; ctx.translate(0, 14 * (1 - b));
      if (i < 3) { const on = act.includes(i); poly(pts, on ? C.teal : C.white); label(PYRAMID[i].toUpperCase(), 250, ys[i], on, i === 0 ? 17 : 24); }
      else { const sp = q.split ?? 0, on = act.includes(3);
        if (sp <= 0) { poly(pts, on ? C.teal : C.white); label(PYRAMID[3].toUpperCase(), 250, 300, on); }
        else { const L0 = [[75, 255], [10, 345], [250, 345], [250, 255]], R0 = [[250, 255], [250, 345], [490, 345], [425, 255]];
          poly(L0, act.includes(4) ? C.teal : C.white); poly(R0, act.includes(5) ? C.teal : C.white);
          ctx.save(); ctx.globalAlpha *= sp; const lo = act.includes(4), ro = act.includes(5);
          label('SPESIELLE', 150, 286, lo, 22); label('SITUASJONER', 150, 314, lo, 22); label('HØYRE-', 352, 286, ro, 22); label('REGELEN', 352, 314, ro, 22); ctx.restore();
          ctx.save(); ctx.globalAlpha *= 1 - sp; label(PYRAMID[3].toUpperCase(), 250, 300, on); ctx.restore(); } }
      ctx.restore(); });
    ctx.restore();
  }
  function summaryCard(alpha) {
    const mob = L.H > L.W, cw = mob ? 960 : 1080, lh = mob ? 80 : 74, ch = 120 + SUMMARY.length * lh, cx = (L.W - cw) / 2, cy = (L.sceneH - ch) / 2;
    ctx.save(); ctx.globalAlpha = alpha; ctx.fillStyle = 'rgba(15,23,42,.35)'; ctx.fillRect(0, 0, L.W, L.sceneH);
    ctx.shadowColor = 'rgba(15,23,42,.35)'; ctx.shadowBlur = 30; ctx.shadowOffsetY = 8; ctx.fillStyle = C.white; rr(ctx, cx, cy, cw, ch, 24); ctx.fill(); ctx.shadowColor = 'transparent';
    ctx.font = `600 30px ${FONT}`; ctx.fillStyle = C.teal; ctx.textBaseline = 'alphabetic'; ctx.textAlign = 'left'; ctx.fillText(SUMMARY_TITLE, cx + 48, cy + 74);
    SUMMARY.forEach((txt, i) => { const y = cy + 140 + i * lh; ctx.fillStyle = C.teal; ctx.beginPath(); ctx.arc(cx + 66, y - 13, 17, 0, 7); ctx.fill();
      ctx.fillStyle = C.white; ctx.font = `700 22px ${FONT}`; ctx.textAlign = 'center'; ctx.fillText(String(i + 1), cx + 66, y - 5); ctx.textAlign = 'left';
      ctx.fillStyle = C.text; ctx.font = `500 ${mob ? 36 : 36}px ${FONT}`; ctx.fillText(txt, cx + 104, y); });
    ctx.restore();
  }

  window.setFormat = f => { L = LAYOUT[f]; canvas.width = L.W; canvas.height = L.H; renderer.setSize(L.W, L.sceneH); camera.aspect = L.W / L.sceneH; camera.updateProjectionMatrix(); window.filmFormat = f; };
  window.setFormat('mobile');
  const fovD = () => L.H > L.W ? 46 : 34;
  const buffer = document.createElement('canvas'), bctx = buffer.getContext('2d');

  // Tegn scenen (3D + markeringer) for en tilstand.
  function drawScene(sh, t) {
    Object.values(actors).forEach(a => a.o.visible = false); Object.values(figures).forEach(f => f.o.visible = false);
    for (const [name, path, d, opt] of sh.actors) put(actors[name], path, d, t, opt || {});
    for (const [name, x, z, yaw, kind, phase] of (sh.figs || [])) walkFig(figures[name], x, z, yaw, kind, phase);
    setArrows((sh.overlay || []).filter(o => o.arrow && (o.alpha ?? 1) > .001));
    { const gr = (sh.overlay || []).find(o => o.ground); if (gr) hl.set(...gr.ground, gr.alpha ?? 1); else hl.g.visible = false; }
    const c = sh.cam; camera.position.copy(c.from); camera.lookAt(c.to); camera.fov = c.fov ?? fovD(); camera.updateProjectionMatrix();
    const focus = c.to.clone(); focus.y = 0; sun.position.copy(focus).add(V(-40, 70, 32)); sun.target.position.copy(focus);
    const big = c.from.y > 40; Object.assign(sun.shadow.camera, big ? { left: -150, right: 150, top: 150, bottom: -150, far: 400 } : { left: -60, right: 60, top: 60, bottom: -60, far: 220 }); sun.shadow.camera.updateProjectionMatrix();
    camera.updateMatrixWorld(); renderer.render(scene, camera);
    ctx.reset(); ctx.drawImage(renderer.domElement, 0, 0, L.W, L.sceneH);
    { const g = ctx.createRadialGradient(L.W / 2, L.sceneH * .5, Math.min(L.W, L.sceneH) * .5, L.W / 2, L.sceneH * .5, Math.max(L.W, L.sceneH) * .9); g.addColorStop(0, 'rgba(15,23,42,0)'); g.addColorStop(1, 'rgba(15,23,42,.14)'); ctx.fillStyle = g; ctx.fillRect(0, 0, L.W, L.sceneH); }
    // Rekkefølge: markering på bakken, piler, ringer, skilt, etiketter.
    const rank = o => o.ground ? 0 : o.dashed ? 1 : o.arrow ? 2 : o.ring ? 3 : o.sign ? 4 : 5;
    for (const o of [...(sh.overlay || [])].sort((p, q) => rank(p) - rank(q))) { const al = o.alpha ?? 1; if (al <= .001) continue; ctx.save(); ctx.globalAlpha = al;
      if (o.dashed) dashed(...o.dashed); // o.ground tegnes i 3D (hl)
      if (o.ring) ring(o.ring);
      if (o.sign) signBox(o.sign);
      if (o.badge) badge(o.badge);
      if (o.tag) pill(ctx, 32, 32 + 29, o.tag, { size: 32, dot: C.tealLight, align: 'left' });
      ctx.restore(); }
    if (sh.legend) legend(sh.legend.rows, sh.legend.alpha);
    if (sh.pyr) pyramid(sh.pyr);
  }

  // ---------- Film: tidsplan og bevegelse ----------
  const DURATION = timing.duration, CHS = timing.chapters, endStart = CHS.at(-1).end, PI = Math.PI;
  const cam = (fx, fy, fz, tx, ty, tz, fov) => ({ from: V(fx, fy, fz), to: V(tx, ty, tz), fov });
  const lerpCam = (A, B, k) => ({ from: A.from.clone().lerp(B.from, k), to: A.to.clone().lerp(B.to, k), fov: (A.fov ?? fovD()) + ((B.fov ?? fovD()) - (A.fov ?? fovD())) * k });
  const win = (a, t0, t1, f = .35) => ease((a - t0) / f) * (1 - ease((a - t1) / f)); // inn ved t0, ut ved t1
  const FRONT = { blue: 2.6, red: 2.6, white: 2.6, grey: 2.6, bus: 6.6, bike: 1.2 };
  const ahead = (n, path, d, len = 11, w = 1.1) => [path, d + FRONT[n], d + FRONT[n] + len, w];
  // Kjøreveier (se byen over).
  const MAIN = makePath(1.6, 30, PI, [['L', 2000]]), mainD = s => s + 30;               // blå bil nordover i hovedgata
  const K2_RED = makePath(60, -(X1 + 1.6), -PI / 2, [['L', 400]]);                         // fra høyre, vestover
  const K2_TURN = makePath(1.6, -30, PI, [['L', X1 - RW - 30], ['A', 4.8, PI / 2], ['L', 300]]); // blå bil til venstre
  const K2_ONC = makePath(-1.6, -110, 0, [['L', 400]]);                                    // møtende, sørover
  const K3_L = makePath(-90, -(X2 - 1.6), PI / 2, [['L', 400]]), K3_R = makePath(90, -(X2 + 1.6), -PI / 2, [['L', 400]]);
  const K4_GREY = makePath(9.0, -(PARK + 1.4), -PI / 2, [['L', 3.4], ['A', 4, -PI / 2], ['L', 300]]);
  const K4_BIKE = makePath(3.8, -(PARK - 7.2), PI, [['L', 60]]), K4_PED = makePath(4.8, -(PARK + 4.76), 0, [['L', 60]]);
  const K5_BLUE = makePath(1.6, -420, PI, [['L', 23], ['S', 8, 1.9], ['L', 22], ['S', 8, -1.9], ['L', 400]]), K5_ONC = makePath(-1.6, -520, 0, [['L', 400]]);
  const K5_BLUE2 = makePath(1.6, -560, PI, [['L', 26], ['S', 6, 1.6], ['L', 20], ['S', 6, -1.6], ['L', 300]]);
  const K5_ONC2 = makePath(-1.6, -660, 0, [['L', 34], ['S', 10, 1.6], ['L', 22], ['S', 10, -1.6], ['L', 300]]);
  const K6_BUS = makePath(RW + 1.5, -BUS50, PI, [['L', 3], ['S', 16, 3.1], ['L', 400]]), K6_BUS2 = makePath(RW + 1.5, -BUS70, PI, [['L', 400]]);

  // Bildeskift inne i kapitler (taletid a).
  const inner = { 1: [7.48], 3: [16.65], 4: [12.52], 5: [15.14], 6: [6.5, 7.45, 8.5, 9.6] };
  const sub = (i, a) => (inner[i] || []).filter(t => a >= t).length;
  const cuts = []; CHS.forEach((c, i) => { if (i) cuts.push({ t: c.start, prev: [i - 1, c.start - 1e-3], fade: .5 }); (inner[i] || []).forEach(n => { const t = c.speech + n; cuts.push({ t, prev: [i, t - 1e-3], fade: i === 6 ? .3 : .5 }); }); });

  function chapterState(i, u, a) {
    const S = CHS[i].sentences;
    if (i === 0) {
      // Hvem bestemmer? Kameraet senker seg over boligstrøket; pyramiden bygges opp oppe til høyre.
      const k = ease((a + 1.5) / 19.5), c = lerpCam(cam(-48, 62, 6, 0, 0, -78), cam(1, 21, -24, 0, 0, -63), k);
      const dB = stopGo(a, { dStop: mainD(X1 - RW - 2.6), v0: 4, tStop: 19, T: 4 });
      const act = a < 4.29 ? [] : a < 8.6 ? [0] : a < 10.15 ? [1] : a < 13.7 ? [2] : a < 16.2 ? [3] : a < 18.75 ? [4] : [5];
      return { cam: c, actors: [['blue', MAIN, dB]], figs: [['ped', -4.2, -(30 + .9 * (a + 1.5)), PI, 'walk', (a + 1.5) * .6]],
        pyr: { build: (a - 1.4) / 1.4, active: act, split: ease((a - 15.4) / .8), alpha: ease((a - 1.3) / .4) } };
    }
    if (i === 1) {
      const k = sub(1, a);
      if (k === 0) {
        // Høyreregelen: rød bil fra høyre. Blå bil stopper mykt og slipper den.
        const dB = stopGo(a, { dStop: mainD(X1 - RW - 2.4), v0: 5, tStop: 2.6, T: 3, tGo: 5.6 }), dR = 60 + 6 * (a - 4.2);
        return { cam: cam(-7, 9.5, -34, 4, 0, -62), actors: [['blue', MAIN, dB], ['red', K2_RED, dR]], overlay: [
          { badge: { actor: 'blue', text: 'Du', dot: '#1689c9' }, alpha: win(a, -.6, 1.6) },
          { badge: { actor: 'red', text: 'Fra høyre', dot: '#c4473b' }, alpha: win(a, .4, 4.4) },
          { ring: 'blue', alpha: win(a, 1.0, 5.4) }, { arrow: ahead('red', K2_RED, dR, 12), alpha: win(a, 1.0, 4.4) }] };
      }
      // Venstresving: møtende bil er på høyre side under svingen. Blå bil venter og svinger etterpå.
      const q = a - inner[1][0], dB = stopGo(q, { dStop: X1 - RW - 30, v0: 5, tStop: 3.2, T: 3, tGo: 6.4, v1: 4.5 }), dW = 53.2 + 6.5 * (q - 5.0);
      return { cam: cam(7, 8.5, -37, -2.5, 0, -63), actors: [['blue', K2_TURN, dB, { signal: -1 }], ['white', K2_ONC, dW]], overlay: [
        { badge: { actor: 'blue', text: 'Skal til venstre', dot: '#1689c9' }, alpha: win(q, .2, 2.6) },
        { dashed: [K2_TURN, dB + 2.4, dB + 15], alpha: win(q, 2.8, 6.2) },
        { badge: { actor: 'white', text: 'Møtende', dot: C.muted }, alpha: win(q, 2.7, 5.3) },
        { ring: 'blue', alpha: win(q, .6, 6.2) }, { arrow: ahead('white', K2_ONC, dW, 8), alpha: win(q, 2.7, 5.3) }] };
    }
    if (i === 2) {
      // Skilt går foran: vikepliktskilt og haitenner. Biler fra begge retninger; blå bil venter til begge har passert.
      const dB = stopGo(a, { dStop: mainD(X2 - RW - 2.6 - 2.2), v0: 5, tStop: 3.0, T: 3.2, tGo: 11.8 }), dL = 90 + 6 * (a - 7.0), dR = 90 + 6 * (a - 10.2);
      return { cam: cam(4.5, 12.5, -170, -1.5, 0, -192), actors: [['blue', MAIN, dB], ['white', K3_L, dL], ['red', K3_R, dR]], overlay: [
        { sign: 's202', alpha: win(a, -.2, 9.6) }, { ground: [.15, TEETH - .75, RW - .15, TEETH + .15], alpha: win(a, 3.5, 9.6) },
        { ring: 'blue', alpha: win(a, 3.8, 11.6) },
        { arrow: ahead('white', K3_L, dL, 12), alpha: win(a, 4.0, 7.6) }, { badge: { actor: 'white', text: 'Fra venstre', dot: C.muted }, alpha: win(a, 4.2, 7.6) },
        { arrow: ahead('red', K3_R, dR, 12), alpha: win(a, 4.0, 10.8) }, { badge: { actor: 'red', text: 'Fra høyre', dot: '#c4473b' }, alpha: win(a, 4.2, 10.8) }] };
    }
    if (i === 3) {
      const k = sub(3, a);
      if (k === 0) {
        // Ut fra parkeringsplass: grå bil fra høyre har vikeplikt for alle. Blå bil og en hvit bil kjører forbi.
        const dB = mainD(PARK + 5 * (a - 5.5)), dW = mainD(PARK + 5.5 * (a - 11)), dG = goFrom(a, 14.0, 4.5);
        const c = lerpCam(cam(-9.5, 7.5, -280, 5, 0, -302), cam(-9, 7.5, -286, 4, 0, -306), ease((a - 10) / 6));
        return { cam: c, actors: [['blue', MAIN, dB], ['white', MAIN, dW], ['grey', K4_GREY, dG, { signal: 1 }]], overlay: [
          { sign: 's552', alpha: win(a, .1, 3.4) },
          { ring: 'grey', alpha: win(a, .3, 13.9) },
          { badge: { actor: 'grey', text: 'Fra parkeringsplass', dot: C.muted }, alpha: win(a, .2, 3.6) },
          { badge: { actor: 'grey', text: 'Høyreregelen gjelder ikke', dot: C.amber }, alpha: win(a, 3.8, 6.1) },
          { badge: { actor: 'grey', text: 'Vikeplikt for alle', dot: C.amber }, alpha: win(a, 6.3, 13.8) },
          { arrow: ahead('blue', MAIN, dB, 11), alpha: win(a, 2.6, 6.2) }, { arrow: ahead('white', MAIN, dW, 11), alpha: win(a, 7.0, 11.6) }] };
      }
      // Også syklister og gående: grå bil venter.
      const q = a - inner[3][0], dK = 4.5 * q, dP = 1.4 * q;
      return { cam: cam(-3, 3.4, -287, 6, .6, -301), actors: [['grey', K4_GREY, 0, { signal: 1 }], ['bike', K4_BIKE, dK]],
        figs: [['ped', ...(p => [p.x, p.z, p.yaw])(K4_PED.at(dP)), 'walk', dP / 1.45]], overlay: [
        { ring: 'grey', alpha: win(q, .2, 9) },
        { arrow: ahead('bike', K4_BIKE, dK, 6, .7), alpha: win(q, .3, 2.6) }, { badge: { actor: 'bike', text: 'Syklist', dot: C.muted }, alpha: win(q, .2, 1.9) },
        { arrow: [K4_PED, dP + .5, dP + 4.5, .55], alpha: win(q, 2.2, 4.4) }, { badge: { actor: 'ped', text: 'Gående', dot: C.muted }, alpha: win(q, 2.0, 9) }] };
    }
    if (i === 4) {
      const k = sub(4, a);
      if (k === 0) {
        // Hindring på din side: blå bil stopper før de parkerte bilene og slipper møtende først.
        const dB = stopGo(a, { dStop: 23, v0: 5, tStop: 2.8, T: 3, tGo: 9.0, v1: 4.5 }), dO = 77 + 7 * (a - 8.0);
        return { cam: cam(2.5, 9, -425, -2.2, 0, -468), actors: [['blue', K5_BLUE, dB], ['red', K5_ONC, dO]], overlay: [
          { badge: { p: [2.15, 2.4, -461.5], text: 'Hindring på din side', dot: C.amber }, alpha: win(a, .6, 3.6) },
          { ring: 'blue', alpha: win(a, 1.6, 8.8) }, { arrow: ahead('red', K5_ONC, dO, 7), alpha: win(a, 1.6, 8.2) },
          { badge: { actor: 'red', text: 'Møtende', dot: '#c4473b' }, alpha: win(a, 3.8, 8.0) }] };
      }
      // Innsnevring med skilt 212 og 214: skiltet bestemmer.
      const q = a - inner[4][0], dB = stopGo(q, { dStop: 24, v0: 3, tStop: .8, T: 2, tGo: 4.4, v1: 4.5, Ta: 2.5 }), dO = 60 + 7 * (q - 2.8);
      return { cam: cam(-2.5, 7.5, -562, 1.5, 0, -604), actors: [['blue', K5_BLUE2, dB], ['white', K5_ONC2, dO]], overlay: [
        { sign: 's212', alpha: win(q, .2, 9) }, { ring: 'blue', alpha: win(q, .4, 4.5) }, { arrow: ahead('white', K5_ONC2, dO, 7), alpha: win(q, .4, 4.2) }],
        legend: { rows: [{ sign: 's212', text: 'Du har vikeplikt for møtende' }, { sign: 's214', text: 'Møtende har vikeplikt' }], alpha: ease((q - .2) / .4) } };
    }
    if (i === 5) {
      const k = sub(5, a);
      if (k === 0) {
        // Buss fra holdeplass i 50-sone: blå bil senker farten og slipper bussen ut.
        const dB = stopGo(a, { dStop: mainD(BUS50 - 18), v0: 6, tStop: 10, T: 5, tGo: 11.6, v1: 5, Ta: 4 }), dBus = goFrom(a, 8.0, 6, 4);
        const c = lerpCam(cam(-2.6, 6, -664, 2.5, .5, -716), cam(-2.6, 6.5, -680, 2, 0, -728), ease((a - 7.5) / 6));
        return { cam: c, actors: [['blue', MAIN, dB], ['bus', K6_BUS, dBus, { signal: a < 13.5 ? -1 : 0 }]], overlay: [
          { badge: { actor: 'bus', text: 'Blinker ut', dot: '#ffa31a' }, alpha: win(a, .2, 3.3) },
          { sign: 's50', alpha: win(a, 3.4, 9.0) }, { badge: { sign: 's50', text: '50 km/t', dot: '#d62828', dy: .6 }, alpha: win(a, 3.6, 9.0) },
          { ring: 'blue', alpha: win(a, 4.0, 11.5) }, { arrow: ahead('bus', K6_BUS, dBus, 16, 1.4), alpha: win(a, 4.0, 12.6) },
          { badge: { actor: 'blue', text: 'Senk farten', dot: '#1689c9' }, alpha: win(a, 9.3, 12.2) },
          { badge: { actor: 'bus', text: 'Skal unngå fare', dot: C.tealLight }, alpha: win(a, 12.5, 15.2) }] };
      }
      // 70-sone: regelen gjelder ikke. Bussen venter.
      const q = a - inner[5][0], dB = mainD(BUS70 - 38 + 8 * q);
      return { cam: cam(-13, 12, -(BUS70 - 46), 3, 0, -(BUS70 - 6)), actors: [['blue', MAIN, dB], ['bus', K6_BUS2, 0, { signal: -1 }]], overlay: [
        { sign: 's70', alpha: win(q, .1, 9) }, { badge: { sign: 's70', text: '70 km/t', dot: '#d62828', dy: .6 }, alpha: win(q, .3, 9) },
        { ring: 'bus', alpha: win(q, .5, 9) }, { badge: { actor: 'bus', text: 'Venter', dot: C.amber }, alpha: win(q, 1.0, 9) },
        { arrow: ahead('blue', MAIN, dB, 14), alpha: win(q, .5, 9) }] };
    }
    // i === 6: Husk dette. Oversikt med pyramiden, så ett bilde fra hver spesielle situasjon og til slutt høyreregelen.
    const k = sub(6, a);
    if (k === 0) {
      const c = lerpCam(cam(-55, 70, -5, 0, 0, -120), cam(-42, 58, -40, 0, 0, -140), ease((a + .6) / 7));
      const act = a < 1.54 ? [] : a < 2.35 ? [0] : a < 3.0 ? [0, 1] : a < 4.3 ? [0, 1, 2] : [4];
      return { cam: c, actors: [['blue', MAIN, mainD(120 + 5 * a)]], pyr: { active: act, split: 1 } };
    }
    const from = [[3, 9.0], [4, 5.5], [5, 9.3], [1, 3.0]][k - 1], st = chapterState(from[0], from[1] + CHS[from[0]].speech - CHS[from[0]].start, from[1] + (a - inner[6][k - 1]) * .8);
    const tag = ['Parkering', 'Hindring', 'Buss', 'Høyreregelen'][k - 1];
    return { ...st, legend: null, overlay: [...(st.overlay || []).filter(o => o.ring || o.arrow || o.sign), { tag }], pyr: { active: [k < 4 ? 4 : 5], split: 1 } };
  }

  const chapterOf = t => { let i = 0; while (i < CHS.length - 1 && t >= CHS[i + 1].start) i++; return i; };
  const stateAt = (i, t) => { const ch = CHS[i]; return chapterState(i, Math.min(t, ch.end) - ch.start, Math.min(t, ch.end) - ch.speech); };
  const marks = CHS.slice(1).map(c => c.start / DURATION);
  window.setFilmFormat = f => { window.setFormat(f); return { width: L.W, height: L.H }; };
  window.chapterTimes = CHS.map(c => ({ chapter: c.chapter, title: c.title, start: c.start }));
  window.filmDuration = DURATION;

  function posterPanel(lines) {
    const { W, H, sceneH, pad } = L; ctx.save(); ctx.fillStyle = C.white; ctx.fillRect(0, sceneH, W, H - sceneH); ctx.fillStyle = C.border; ctx.fillRect(0, sceneH, W, 2);
    ctx.font = `600 ${L.label}px ${FONT}`; ctx.fillStyle = C.teal; ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic'; ctx.fillText(`FORKLARINGSFILM · ${Math.floor(DURATION / 60)}:${String(Math.round(DURATION % 60)).padStart(2, '0')}`, pad, sceneH + 74);
    ctx.textAlign = 'right'; ctx.fillStyle = C.text; ctx.font = `700 ${L.label}px ${FONT}`; ctx.fillText('teori-test.no', W - pad, sceneH + 74);
    ctx.textAlign = 'left'; ctx.font = `700 ${L.font}px ${FONT}`; lines.forEach((t, i) => ctx.fillText(t, pad, sceneH + 74 + 34 + L.font + i * L.line));
    const cx = W - pad - 70, cy = sceneH + 74 + 34 + L.font * .6 + L.line * .5; ctx.shadowColor = 'rgba(13,148,136,.45)'; ctx.shadowBlur = 24; ctx.fillStyle = C.teal; ctx.beginPath(); ctx.arc(cx, cy, 70, 0, 7); ctx.fill();
    ctx.shadowColor = 'transparent'; ctx.fillStyle = C.white; ctx.beginPath(); ctx.moveTo(cx - 20, cy - 32); ctx.lineTo(cx + 36, cy); ctx.lineTo(cx - 20, cy + 32); ctx.closePath(); ctx.fill(); ctx.restore();
  }
  // Plakat: høyreregelen i krysset (rød bil fra høyre, gul ring på blå bil).
  window.renderShot = function () { const t = CHS[1].speech + 3.2; drawScene(stateAt(1, t), t); posterPanel(POSTER); window.infoBounds = []; return canvas; };
  window.shotIds = ['plakat'];

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
    const bounds = infoPanel(ctx, L, { chapter: i + 1, total: CHS.length, title: ch.title, lines, progress: t / DURATION, chapterMarks: marks, alpha: clamp(since / .25, 0, 1) });
    window.infoLayout = { bounds: bounds.map(b => ({ text: b.t, x: b.x, y: b.y, width: b.w, height: b.h, fontSize: L.font })), sceneHeight: L.sceneH, width: L.W, height: L.H, point: lines.join(' ') };
    const bl = actors.blue.o; window.frameInfo = { t, chapter: i + 1, title: ch.title, speechTime: a, endCard: end, point: lines.join(' '), duration: DURATION, blue: bl.visible ? [+bl.position.x.toFixed(2), +(-bl.position.z).toFixed(2)] : null };
    return canvas;
  };
  // Kontroll: hvor langt over/under bakken står kjøretøy og personer (meter), og avstand mellom kjøretøy.
  window.auditGround = function (t) { window.renderFrame(t); const out = [];
    const check = (name, o) => { if (!o.visible) return; const pen = groundGap(o); out.push({ name, under: +pen.toFixed(3), over: +(-pen).toFixed(3) }); };
    Object.entries(actors).forEach(([k, a]) => check(k, a.o)); Object.entries(figures).forEach(([k, f]) => check(k, f.o));
    const vis = Object.entries(actors).filter(([, a]) => a.o.visible), _b = new THREE.Box3(), _c = new THREE.Box3();
    for (let p = 0; p < vis.length; p++) for (let q = p + 1; q < vis.length; q++) { _b.setFromObject(vis[p][1].o); _c.setFromObject(vis[q][1].o); if (_b.intersectsBox(_c)) out.push({ name: vis[p][0] + '×' + vis[q][0], overlap: true }); }
    return out; };
  window.renderFrame(.5);
  window.ready = true; window.animationReady = true;
}
init().catch(e => { window.initError = window.animationError = String(e && e.stack || e); console.error(e); });

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { assets } from './assets-data.js';
import { C, FONT, LAYOUT, infoPanel, chapterChip, pill, marker, rr } from './style.js';
import { SHOTS, CHAPTERS } from './shots.js';
import { POINTS, END_LINES, SUMMARY, SUMMARY_TITLE, STEPS, POSTER } from './information.js';
import timing from './timing.json';

// Film: «Trafikkuhell – sikre, varsle, hjelpe». Samme prinsipp som veimerkingsfilmen:
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
  scene.fog = new THREE.Fog('#dbe7e8', 160, 620);
  const camera = new THREE.PerspectiveCamera(40, 1, .2, 4000);
  scene.add(new THREE.HemisphereLight('#dcecff', '#5d7647', 1.45));
  const sun = new THREE.DirectionalLight('#ffe6c2', 3.2); sun.castShadow = true; sun.shadow.mapSize.set(4096, 4096);
  Object.assign(sun.shadow.camera, { left: -60, right: 60, top: 60, bottom: -60, near: 1, far: 220 }); sun.shadow.bias = -.0004; sun.shadow.normalBias = .03;
  scene.add(sun, sun.target);

  const mesh = (g, m, parent, shadow = false) => { const o = new THREE.Mesh(g, m); o.receiveShadow = true; o.castShadow = shadow; parent.add(o); return o; };

  // ---------- Verdener ----------
  function world(name, { length = 900, elev = () => 0, center = () => 0, junction = null, town = false, centerline = s => 'dash', seed = 1, span = 200, ditch = null, keepOut = () => false, pad = null } = {}) {
    const root = new THREE.Group(); root.visible = false; scene.add(root);
    const rnd = rng(seed * 7919 + 13);
    const slope = s => (center(s + .02) - center(s - .02)) / .04;
    const road = (s, off = 0, y = .06) => { const d = slope(s), q = Math.hypot(1, d); return V(center(s) + off / q, elev(s) + y, -s + off * d / q); };
    const half = 3.5;
    function strip(a, b, off, w, mat, parent = root, y = .061) {
      const n = Math.max(1, Math.ceil((b - a) / 1.5)), p = [], ix = [], uv = [];
      for (let i = 0; i <= n; i++) { const s = a + (b - a) * i / n, o = typeof off === 'function' ? off(s) : off, ww = typeof w === 'function' ? w(s) : w;
        for (const side of [-1, 1]) { const v = road(s, o + side * ww / 2, y); p.push(v.x, v.y, v.z); uv.push((o + side * ww / 2) / 3, s / 3); }
        if (i < n) { const k = i * 2; ix.push(k, k + 1, k + 2, k + 1, k + 3, k + 2); } }
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(p, 3)); g.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2)); g.setIndex(ix); g.computeVertexNormals(); return mesh(g, mat, parent);
    }
    const S0 = -80, S1 = length;
    strip(S0, S1, 0, half * 2 + 1.4, shoulderMat, root, .015); strip(S0, S1, 0, half * 2, asphalt, root, .035);
    for (const side of [-1, 1]) {
      if (junction && side === 1) { strip(S0, junction.s - 9, half - .3, .15, white); strip(junction.s + 9, S1, half - .3, .15, white); }
      else strip(S0, S1, side * (half - .3), .15, white);
    }
    // Midtlinje: kjørefeltlinje (3 m strek, 9 m mellomrom), varsellinje (9 m/3 m) eller sperrelinje.
    for (let s = S0; s < S1;) { const t = centerline(s);
      if (t === 'solid') { strip(s, s + 3, 0, .15, yellow); s += 3; }
      else if (t === 'warning') { strip(s, s + 9, 0, .15, yellow); s += 12; }
      else { strip(s, s + 3, 0, .15, yellow); s += 12; } }
    if (town) {
      // Gangfelt med skilt 516 på begge sider.
      for (let x = -3.1; x < 3.2; x += 1) strip(town.crossing, town.crossing + 4, x, .5, white, root, .064);
      for (const side of [-1, 1]) strip(S0, S1, side * (half + 1.6), 2.2, std('#cfccc2'), root, .16);
    }
    // Terreng som følger veien, med flat korridor rundt vegbanen.
    const rawGround = (x, s) => { const off = x - center(s), flat = ease((Math.abs(off) - 6.5) / 14);
      // Grøft langs høyre side der ulykken er (bunn ca. 1 m under vegbanen, 7 m fra midtlinjen).
      const dz = ditch ? ease((s - ditch.s0) / 20) * (1 - ease((s - ditch.s1 + 20) / 20)) * Math.exp(-(((off - 7.2) / 1.6) ** 2)) * 1.05 : 0;
      return elev(s) - .1 + flat * (.6 + .9 * Math.sin(s * .021 + x * .017) + .5 * Math.sin(x * .05 - s * .011)) - (town ? flat * .5 : 0) - dz; };
    // Flat, slått plen der den skadde ligger (pad): terrenget glattes ut til én høyde, med myk overgang.
    const padX = pad ? center(pad.s) + pad.off : 0, padH = pad ? rawGround(padX, pad.s) : 0;
    const groundAt = (x, s) => { const h = rawGround(x, s); if (!pad) return h; const d = Math.hypot(x - padX, s - pad.s), k = 1 - ease((d - pad.r) / 3); return h + (padH - h) * k; };
    const pos = [], col = [], cell = 4, TS0 = S0 - 40;
    // Høyden på de flate terrengtrekantene som faktisk tegnes (ikke den glatte funksjonen).
    const terrainAt = (x, s) => { const gx = (x + span) / cell, gs = (s - TS0) / cell, i = Math.floor(gx), j = Math.floor(gs), fx = gx - i, fs = gs - j;
      const X = -span + i * cell, Sx = TS0 + j * cell, h00 = groundAt(X, Sx), h10 = groundAt(X + cell, Sx), h01 = groundAt(X, Sx + cell);
      if (fx + fs <= 1) return h00 + fx * (h10 - h00) + fs * (h01 - h00);
      const h11 = groundAt(X + cell, Sx + cell); return h11 + (1 - fx) * (h01 - h11) + (1 - fs) * (h10 - h11); };
    for (let s = TS0; s < S1 + 60; s += cell) for (let x = -span; x < span; x += cell) {
      for (const tri of [[[x, s], [x + cell, s], [x, s + cell]], [[x + cell, s], [x + cell, s + cell], [x, s + cell]]]) {
        const [cx, cs] = tri[0], n = .5 * Math.sin(cx * .03 + cs * .011) + .5 * Math.sin(cs * .027 - cx * .019), dist = Math.abs(cx - center(cs));
        // Enger, kornåker og mørkere skogbunn i store flater.
        // Jorder i tydelig ulike farger (eng, slått høy, beite, skogbunn), lagt i rektangulære teiger.
        let rgb = [1, 1, 1];
        if (dist > 16) {
          const fx = Math.floor((cx + 2000) / 64), fs = Math.floor((cs + 2000) / 92), hsh = (Math.imul(fx, 73856093) ^ Math.imul(fs, 19349663)) >>> 0, k = hsh % 6, b = .94 + (hsh >>> 8) % 13 / 100;
          rgb = [[1, 1, 1], [1.24, 1.1, .7], [.86, 1.08, .78], [.68, .82, .68], [1.1, 1.12, .84], [1.32, 1.14, .62]][k].map(v => v * b);
          if (n < -.55) rgb = [.66, .8, .68];
        }
        if (dist > 6 && dist < 8.5) rgb = [rgb[0] * .88, rgb[1] * .92, rgb[2] * .86];
        const sh = .95 + rnd() * .1;
        for (const [xx, ss] of tri) { pos.push(xx, groundAt(xx, ss), -ss); col.push(sh * rgb[0], sh * rgb[1], sh * rgb[2]); } } }
    const tg = new THREE.BufferGeometry(); tg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); tg.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); tg.computeVertexNormals();
    mesh(tg, std('#8fae62', { flatShading: true, vertexColors: true }), root);
    const dummy = new THREE.Object3D();
    // Gran og løvtrær i klynger, holdt unna vegen og sidevegen.
    const free = (x, s) => Math.abs(x - center(s)) > 11 && !keepOut(x - center(s), s) && !(junction && x > 0 && Math.abs(s - junction.s) < 16) && !(town && Math.abs(x - center(s)) < 22);
    const spruce = std('#3a6242', { flatShading: true }), leaf = std('#5f8a52', { flatShading: true }), trunk = std('#6f6449');
    const N = Math.round((S1 - S0) * .55), cones = new THREE.InstancedMesh(new THREE.ConeGeometry(1, 1, 7), spruce, N * 2), stems = new THREE.InstancedMesh(new THREE.CylinderGeometry(.14, .2, 1, 5), trunk, N * 2), crowns = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(1, 1), leaf, N);
    let ci = 0, si = 0, li = 0;
    for (let i = 0; i < N; i++) {
      const cluster = Math.floor(rnd() * 9), s = S0 + rnd() * (S1 - S0 + 40), side = rnd() < .5 ? -1 : 1, x = center(s) + side * (13 + Math.pow(rnd(), 1.4) * 150 + cluster * 2);
      if (!free(x, s)) continue; const y = groundAt(x, s), h = 5 + rnd() * 9;
      if (rnd() < .7) {
        dummy.rotation.set(0, rnd() * 6, 0);
        dummy.position.set(x, y + h * .1, -s); dummy.scale.set(1, h * .2, 1); dummy.updateMatrix(); stems.setMatrixAt(si++, dummy.matrix);
        dummy.position.set(x, y + h * .42, -s); dummy.scale.set(h * .27, h * .62, h * .27); dummy.updateMatrix(); cones.setMatrixAt(ci, dummy.matrix);
        const c = new THREE.Color().setHSL(.37 + rnd() * .04, .3 + rnd() * .1, .2 + rnd() * .08); cones.setColorAt(ci++, c);
        dummy.position.set(x, y + h * .74, -s); dummy.scale.set(h * .18, h * .4, h * .18); dummy.updateMatrix(); cones.setMatrixAt(ci, dummy.matrix); cones.setColorAt(ci++, c);
      } else {
        dummy.position.set(x, y + h * .2, -s); dummy.scale.set(1, h * .4, 1); dummy.updateMatrix(); stems.setMatrixAt(si++, dummy.matrix);
        dummy.position.set(x, y + h * .6, -s); dummy.scale.set(h * .3, h * .3, h * .3); dummy.rotation.set(rnd(), rnd() * 6, 0); dummy.updateMatrix(); crowns.setMatrixAt(li, dummy.matrix);
        crowns.setColorAt(li++, new THREE.Color().setHSL(.23 + rnd() * .05, .32 + rnd() * .1, .34 + rnd() * .1));
      }
    }
    cones.count = ci; stems.count = si; crowns.count = li; cones.castShadow = stems.castShadow = crowns.castShadow = true; root.add(cones, stems, crowns); const props = [cones, stems, crowns];
    // Gårder: røde låver og hvite hus, typisk norsk kulturlandskap.
    const roofMat = std('#3d3f44'), barn = std('#a8322b'), house = std('#eeeae0'), trim = std('#f7f5ef');
    for (let i = 0; i < Math.round((S1 - S0) / 160); i++) {
      const s = S0 + 60 + i * 160 + rnd() * 60, side = i % 2 ? 1 : -1, x = center(s) + side * (34 + rnd() * 50);
      if (!free(x, s)) continue; const y = groundAt(x, s), isBarn = rnd() < .5, w = isBarn ? 10 : 7, d = isBarn ? 16 : 9, h = isBarn ? 6 : 5;
      const g = new THREE.Group(); g.position.set(x, y, -s); g.rotation.y = rnd() * .4 - .2 + (side > 0 ? 0 : Math.PI); root.add(g);
      const b = mesh(new THREE.BoxGeometry(w, h, d), isBarn ? barn : house, g, true); b.position.y = h / 2;
      const roof = new THREE.Shape([new THREE.Vector2(-w / 2 - .4, 0), new THREE.Vector2(w / 2 + .4, 0), new THREE.Vector2(0, h * .55)]);
      const rg = new THREE.ExtrudeGeometry(roof, { depth: d + .6, bevelEnabled: false }); rg.translate(0, 0, -(d + .6) / 2);
      const r = mesh(rg, roofMat, g, true); r.position.y = h;
      for (const z of [-d / 2 - .01, d / 2 + .01]) { const tw = mesh(new THREE.PlaneGeometry(1.3, 1.6), trim, g); tw.position.set(0, h * .5, z); if (z < 0) tw.rotation.y = Math.PI; }
    }
    if (town) {
      // Småhus langs gata.
      const cols = ['#eeeae0', '#e8d9a8', '#c9d8d6', '#e9e4dc'];
      for (let s = S0 + 10; s < S1; s += 19) for (const side of [-1, 1]) { if (Math.abs(s - town.crossing) < 14) continue;
        const x = center(s) + side * (half + 11 + rnd() * 4), y = groundAt(x, s), w = 8, d = 10, h = 5 + rnd() * 3;
        const g = new THREE.Group(); g.position.set(x, y, -s); g.rotation.y = side > 0 ? -Math.PI / 2 : Math.PI / 2; root.add(g);
        const b = mesh(new THREE.BoxGeometry(d, h, w), std(cols[Math.floor(rnd() * 4)]), g, true); b.position.y = h / 2;
        const roof = new THREE.Shape([new THREE.Vector2(-w / 2 - .4, 0), new THREE.Vector2(w / 2 + .4, 0), new THREE.Vector2(0, 2.6)]);
        const rg = new THREE.ExtrudeGeometry(roof, { depth: d + .5, bevelEnabled: false }); rg.translate(0, 0, -(d + .5) / 2); rg.rotateY(Math.PI / 2);
        mesh(rg, roofMat, g, true).position.y = h;
        for (let k = -3; k <= 3; k += 3) for (let yy = 1.4; yy < h - 1; yy += 2.4) { const win = mesh(new THREE.PlaneGeometry(1.1, 1.2), std('#4c6f7c', { roughness: .3 }), g); win.position.set(k, yy, w / 2 + .02); }
      }
    }
    // Rundballer i hvit plast på jordene.
    const bale = new THREE.InstancedMesh(new THREE.CylinderGeometry(.75, .75, 1.2, 14), std('#f1f1ec', { roughness: .5 }), 60); let bi = 0;
    for (let i = 0; i < 60; i++) { const s = S0 + rnd() * (S1 - S0), x = center(s) + (rnd() < .5 ? -1 : 1) * (20 + rnd() * 40); if (!free(x, s)) continue;
      dummy.rotation.set(Math.PI / 2, 0, rnd() * 3); dummy.scale.set(1, 1, 1); dummy.position.set(x, groundAt(x, s) + .7, -s); dummy.updateMatrix(); bale.setMatrixAt(bi++, dummy.matrix); }
    bale.count = bi; bale.castShadow = true; root.add(bale);
    // Skigard langs jordene (typisk norsk tregjerde), i lange strekk.
    { const fp = []; for (const side of [-1, 1]) for (let s = S0 + 20; s < S1; s += 2.4) { const seg = Math.floor((s + side * 37) / 140) % 3; if (seg !== 0) continue; const x = center(s) + side * 15; if (!free(x, s) && !town) continue; if (town) continue; fp.push([x, s]); }
      const im = new THREE.InstancedMesh(new THREE.BoxGeometry(.08, .08, 3.2), std('#8a7a5e'), fp.length * 3), st2 = new THREE.InstancedMesh(new THREE.CylinderGeometry(.05, .05, 1.5, 5), std('#7a6b52'), fp.length);
      fp.forEach(([x, s], i) => { const y = groundAt(x, s); dummy.scale.set(1, 1, 1); dummy.rotation.set(.6, 0, 0); for (let k = 0; k < 3; k++) { dummy.position.set(x, y + .45 + k * .28, -s); dummy.updateMatrix(); im.setMatrixAt(i * 3 + k, dummy.matrix); }
        dummy.rotation.set(0, 0, 0); dummy.position.set(x, y + .7, -s); dummy.updateMatrix(); st2.setMatrixAt(i, dummy.matrix); });
      im.castShadow = st2.castShadow = true; root.add(im, st2); }
    // Kantstolper med refleks, hver 50. meter på begge sider.
    const posts = []; for (let s = S0; s < S1; s += 50) for (const side of [-1, 1]) if (!(junction && side === 1 && Math.abs(s - junction.s) < 12)) posts.push(road(s, side * (half + .9), 0));
    const pm = new THREE.InstancedMesh(new THREE.BoxGeometry(.12, 1.05, .12), std('#f4f4ee'), posts.length), bm = new THREE.InstancedMesh(new THREE.BoxGeometry(.13, .24, .13), std('#1d2224'), posts.length);
    posts.forEach((p, i) => { dummy.rotation.set(0, 0, 0); dummy.scale.set(1, 1, 1); dummy.position.set(p.x, p.y + .5, p.z); dummy.updateMatrix(); pm.setMatrixAt(i, dummy.matrix); dummy.position.set(p.x, p.y + .9, p.z); dummy.updateMatrix(); bm.setMatrixAt(i, dummy.matrix); });
    pm.castShadow = true; root.add(pm, bm);
    // Strømstolper i tre langs venstre side.
    const poles = []; for (let s = S0; s < S1; s += 55) poles.push(road(s, -(half + 7), 0));
    const plm = new THREE.InstancedMesh(new THREE.CylinderGeometry(.13, .16, 9, 6), std('#6b5a43'), poles.length);
    poles.forEach((p, i) => { dummy.rotation.set(0, 0, 0); dummy.position.set(p.x, groundAt(p.x, -p.z) + 4.5, p.z); dummy.updateMatrix(); plm.setMatrixAt(i, dummy.matrix); });
    plm.castShadow = true; root.add(plm);
    { const pts = []; for (let i = 0; i < poles.length - 1; i++) for (const dx of [-.5, .5]) { const a = poles[i], b = poles[i + 1], ya = groundAt(a.x, -a.z) + 8.7, yb = groundAt(b.x, -b.z) + 8.7;
        for (let k = 0; k < 8; k++) { const t0 = k / 8, t1 = (k + 1) / 8, sag = t => -1.1 * 4 * t * (1 - t); pts.push(a.x + dx + (b.x - a.x) * t0, ya + (yb - ya) * t0 + sag(t0), a.z + (b.z - a.z) * t0, a.x + dx + (b.x - a.x) * t1, ya + (yb - ya) * t1 + sag(t1), a.z + (b.z - a.z) * t1); } }
      const lg = new THREE.BufferGeometry(); lg.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3)); root.add(new THREE.LineSegments(lg, new THREE.LineBasicMaterial({ color: '#33383b' }))); }
    // Fjell med snø i horisonten.
    const mountains = [];
    // Norsk fjellandskap: skogkledde åser foran, avrundede fjell med snøflekker bak. Myke former, ingen spisse tinder.
    function range(z0, z1, maxH, seedR, kind) {
      const r2 = rng(seedR), bumps = []; for (let i = 0; i < 26; i++) bumps.push([-1700 + r2() * 3400, z0 + r2() * (z1 - z0), (.45 + r2() * .55) * maxH, 120 + r2() * 260]);
      const step = kind === 'aas' ? 30 : 45, P = [], Cc = [], I = [], nx = Math.ceil(3400 / step) + 1, nz = Math.ceil((z1 - z0) / step) + 1;
      for (let j = 0; j < nz; j++) for (let i = 0; i < nx; i++) {
        const x = -1700 + i * step, z = z0 + j * step; let h = 0;
        for (const [bx, bz, bh, br] of bumps) h = Math.max(h, bh * Math.exp(-(((x - bx) ** 2 + ((z - bz) * 1.6) ** 2) / (br * br))));
        h += maxH * .06 * Math.sin(x * .013 + z * .01) + maxH * .04 * Math.sin(x * .031 - z * .02);
        const edge = Math.min(1, j / 3, (nz - 1 - j) / 3); h = h * edge - 6;
        P.push(x, h, -z); const c = new THREE.Color();
        if (kind === 'aas') c.setHSL(.36 + r2() * .03, .32, .2 + r2() * .05 + Math.max(0, h) / maxH * .05);
        else if (h > maxH * .8 + r2() * maxH * .08) c.set('#eef3f5');
        else if (h > maxH * .38) c.setHSL(.58, .1, .5 + r2() * .06);
        else c.setHSL(.38, .25, .26 + r2() * .05);
        Cc.push(c.r, c.g, c.b);
        if (i < nx - 1 && j < nz - 1) { const k = j * nx + i; I.push(k, k + nx, k + 1, k + 1, k + nx, k + nx + 1); }
      }
      const g = new THREE.BufferGeometry(); g.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.setAttribute('color', new THREE.Float32BufferAttribute(Cc, 3)); g.setIndex(I); g.computeVertexNormals();
      const m = mesh(g, std('#ffffff', { vertexColors: true, roughness: 1 }), root); mountains.push(m); return m;
    }
    range(S1 + 120, S1 + 420, 70, seed * 3 + 1, 'aas');
    range(S1 + 450, S1 + 1100, 300, seed * 5 + 2, 'fjell');
    // Sideveg med vikepliktskilt (202).
    if (junction) {
      const js = junction.s, jw = 6;
      const poly = (pts, mat, y) => { const sh = new THREE.Shape(pts.map(([x, s]) => new THREE.Vector2(x, s))); const g = new THREE.ShapeGeometry(sh); g.rotateX(-Math.PI / 2); const m = mesh(g, mat, root); m.position.y = y; return m; };
      const y0 = elev(js);
      poly([[half - .2, js - jw], [half + 6, js - 3], [170, js - 3], [170, js + 3], [half + 6, js + 3], [half - .2, js + jw]], asphalt, y0 + .036);
      poly([[half + .5, js - jw - 1], [half + 6, js - 4], [170, js - 4], [170, js + 4], [half + 6, js + 4], [half + .5, js + jw + 1]], shoulderMat, y0 + .012);
      // Vikepliktlinje (haitenner) over sidevegens felt mot hovedvegen. Spissen peker mot den som har vikeplikt.
      for (let k = .2; k <= 2.8; k += .65) poly([[half + 6.4, js + k - .25], [half + 6.4, js + k + .25], [half + 7.2, js + k]], white, y0 + .07);
      for (let s2 = half + 12; s2 < 170; s2 += 12) poly([[s2, js - .075], [s2 + 3, js - .075], [s2 + 3, js + .075], [s2, js + .075]], yellow, y0 + .07);
      sign(signs.s202.t, half + 7.4, js + 4.4, 1.0, 1.0 * 525 / 600, 0, true, Math.PI / 2);
    }
    if (town) { sign(signs.s516.t, half + 1.4, town.crossing - 1, .9, .9); sign(signs.s516.t, -(half + 1.4), town.crossing + 5, .9, .9, 0, false, Math.PI); }
    function sign(tex, x, s, w, h, y0 = 0, faceSide = false, rotY = 0) {
      const g = new THREE.Group(); const p = road(s, x, 0); g.position.copy(p); g.rotation.y = rotY; root.add(g);
      const plate = mesh(new THREE.PlaneGeometry(w, h), new THREE.MeshBasicMaterial({ map: tex, transparent: true, alphaTest: .4, toneMapped: false, side: THREE.DoubleSide }), g); plate.position.y = 2.3 + y0;
      const back = mesh(new THREE.CircleGeometry(w * .48, 24), std('#9aa3a6'), g); back.position.set(0, 2.3 + y0, -.02); back.rotation.y = Math.PI;
      const pole = mesh(new THREE.CylinderGeometry(.045, .045, 2.6, 8), std('#9aa3a6', { metalness: .4, roughness: .5 }), g, true); pole.position.set(0, 1.25, -.04);
      return g;
    }
    return { name, root, road, slope, elev, groundAt, terrainAt, half, sign, center, mountains, props, heading: s => Math.atan(slope(s)) };
  }

  // Vegen: rett strekning, så en slak venstresving (s 60–170). Ulykken ligger rett etter svingen, på høyre side.
  const CURVE = (() => { const a = -300, b = 1000, st = .5, xs = []; let x = 0; const sm = v => { v = clamp(v); return v * v * (3 - 2 * v); };
    for (let s = a; s <= b; s += st) { xs.push(x); x += -.42 * sm((s - 60) / 110) * st; }
    return s => { const f = (clamp(s, a, b) - a) / st, i = Math.floor(f), k = f - i; return xs[Math.min(i, xs.length - 1)] * (1 - k) + xs[Math.min(i + 1, xs.length - 1)] * k; }; })();
  const ACC = 232; // ulykkesstedet (s)
  const worlds = {
    curve: world('Landevei med sving', { length: 760, seed: 21, span: 520, center: CURVE, ditch: { s0: 205, s1: 275 }, pad: { s: 237.5, off: 14, r: 4.5 },
      keepOut: (off, s) => (off > 0 && s > 170 && s < 280 && off < 30) || (off > 0 && s > 20 && s < 60 && off < 16),
      centerline: s => s > -20 && s < 250 ? 'warning' : 'dash', elev: s => .8 * Math.sin(s * .006) }),
  };
  worlds.curve.sign(signs.s362.t, 4.4, -60, 1.0, 1.0);

  // Inne i bilen (modellert i Blender, interior.glb): dashbord, ratt, midtkonsoll med knapp for nødblink,
  // førerdøra med vesten brettet i dørlomma, og førersetet. Fremover = -z, føreren sitter på venstre side.
  const interiorGltf = await new GLTFLoader().parseAsync(Uint8Array.from(atob(assets.interior), c => c.charCodeAt(0)).buffer, '');
  const interior = (() => {
    const root = new THREE.Group(); root.visible = false; scene.add(root); root.position.set(0, 0, 4000);
    const model = interiorGltf.scene; model.rotation.y = Math.PI; root.add(model);
    model.traverse(m => { if (m.isMesh) { m.castShadow = m.receiveShadow = true; m.material.side = THREE.DoubleSide; } });
    // Knappen for nødblink: rød med hvit trekant. Lyser i takt med blinklysene.
    const bt = (() => { const c = document.createElement('canvas'); c.width = c.height = 128; const k = c.getContext('2d'); k.fillStyle = '#b3122a'; rr(k, 4, 4, 120, 120, 20); k.fill();
      k.strokeStyle = '#fff'; k.lineWidth = 9; k.lineJoin = 'round'; k.beginPath(); k.moveTo(64, 26); k.lineTo(104, 96); k.lineTo(24, 96); k.closePath(); k.stroke();
      k.lineWidth = 6; k.beginPath(); k.moveTo(64, 50); k.lineTo(84, 84); k.lineTo(44, 84); k.closePath(); k.stroke(); const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t; })();
    const BTN = V(0, .943, -.424);
    const button = mesh(new THREE.PlaneGeometry(.06, .06), new THREE.MeshBasicMaterial({ map: bt, toneMapped: false }), root); button.position.copy(BTN); button.rotation.x = -.26;
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const k = c.getContext('2d'), g = k.createRadialGradient(32, 32, 0, 32, 32, 32); g.addColorStop(0, 'rgba(255,90,60,.9)'); g.addColorStop(1, 'rgba(255,60,40,0)'); k.fillStyle = g; k.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })(), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending }));
    glow.scale.set(.18, .18, 1); glow.position.copy(BTN).add(V(0, 0, .02)); root.add(glow);
    // Utsikt gjennom frontruta: landevei og terreng, og lys inne i kupeen.
    const ground = mesh(new THREE.PlaneGeometry(400, 400), std('#8fae62'), root); ground.rotation.x = -Math.PI / 2; ground.position.set(0, -.3, -150);
    const road = mesh(new THREE.PlaneGeometry(7, 400), asphalt, root); road.rotation.x = -Math.PI / 2; road.position.set(-1.3, -.29, -150);
    // Panseret foran frontruta (blå, som bilen).
    const hood = mesh(new THREE.BoxGeometry(1.75, .06, 1.5), std('#1689c9', { roughness: .4 }), root, true); hood.position.set(0, .92, -1.8); hood.rotation.x = .08;
    const lamp = new THREE.PointLight('#fff4e6', 5, 4, 1.2); lamp.position.set(-.2, 1.5, .3); root.add(lamp);
    const lamp2 = new THREE.PointLight('#e8f0ff', 3, 3, 1.2); lamp2.position.set(-.4, .7, .5); root.add(lamp2);
    return { name: 'Inne i bilen', root, mountains: [], road: (s, off = 0, y = 0) => V(off, y, s).add(root.position), groundAt: () => 0, elev: () => 0, slope: () => 0, glow, button,
      at: (x, y, z) => V(x, y, z).add(root.position), BTN, VEST: V(-.865, .5, .03) };
  })();
  worlds.interior = interior;

  // ---------- Kjøretøy og personer ----------
  const gltf = await new GLTFLoader().parseAsync(Uint8Array.from(atob(assets.car), c => c.charCodeAt(0)).buffer, '');
  const glowMat = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const k = c.getContext('2d'), g = k.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,190,60,1)'); g.addColorStop(.35, 'rgba(255,160,30,.55)'); g.addColorStop(1, 'rgba(255,140,0,0)'); k.fillStyle = g; k.fillRect(0, 0, 64, 64);
    const t = new THREE.CanvasTexture(c); return new THREE.SpriteMaterial({ map: t, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }); })();
  function makeCar(color) {
    const o = gltf.scene.clone(true), wheels = [];
    o.traverse(m => { if (m.name.startsWith('Hjul_')) wheels.push(m); if (m.isMesh) { m.castShadow = m.receiveShadow = true; m.material = m.material.clone(); if (m.material.name === 'Lakk') m.material.color.set(color); } });
    // Blinklys: tydelig oransje lykt i hvert hjørne + en myk glorie, så blinkingen synes også på mobil.
    // Blinklys i hjørnene på karosseriet (karosseriet er 1,76 m bredt; speilene stikker lenger ut og telles ikke med).
    const signals = [];
    for (const side of [-1, 1]) for (const z of [-2.065, 2.055]) {
      const g = new THREE.Group(); g.position.set(side * .79, .72, z);
      g.add(new THREE.Mesh(new THREE.BoxGeometry(.16, .12, .04), basic('#ffa31a')));
      const glow = new THREE.Sprite(glowMat); glow.scale.set(.6, .6, 1); g.add(glow); g.visible = false; o.add(g); signals.push({ l: g, side });
    }
    scene.add(o); return { o, wheels, signals, len: 4.4 };
  }
  function makeTruck() {
    // Semitrailer ca. 18 m: trekkvogn med kupé foran og hvit tilhenger. Fronten peker mot +z lokalt, som bilmodellen.
    const o = new THREE.Group(), wheels = [], blue = std('#2a5b84', { roughness: .45, metalness: .2 }), dark = std('#22272b'), glass = std('#1f2e38', { roughness: .15, metalness: .5 }), trailerMat = std('#f2f2ee', { roughness: .6 }), stripe = std(C.teal);
    const cab = mesh(new THREE.BoxGeometry(2.5, 2.7, 2.3), blue, o, true); cab.position.set(0, 2.25, 7.75);
    const ws = mesh(new THREE.BoxGeometry(2.3, 1.05, .05), glass, o); ws.position.set(0, 2.85, 8.92);
    for (const sx of [-1.26, 1.26]) { const sw = mesh(new THREE.BoxGeometry(.05, .8, 1.1), glass, o); sw.position.set(sx, 2.85, 8.2); }
    const bumper = mesh(new THREE.BoxGeometry(2.5, .5, .25), dark, o, true); bumper.position.set(0, .75, 8.9);
    const grille = mesh(new THREE.BoxGeometry(1.6, .7, .05), dark, o); grille.position.set(0, 1.4, 8.92);
    for (const sx of [-.95, .95]) { const hl = mesh(new THREE.BoxGeometry(.38, .18, .05), basic('#fff6d8'), o); hl.position.set(sx, 1.0, 9.03); }
    const chassis = mesh(new THREE.BoxGeometry(1.2, .45, 6.5), dark, o, true); chassis.position.set(0, .8, 5.4);
    const trailer = mesh(new THREE.BoxGeometry(2.55, 2.9, 13.6), trailerMat, o, true); trailer.position.set(0, 2.75, -1.6);
    for (const sx of [-1.285, 1.285]) { const st = mesh(new THREE.BoxGeometry(.02, .35, 13.2), stripe, o); st.position.set(sx, 1.65, -1.6); }
    const under = mesh(new THREE.BoxGeometry(2.3, .35, 13), dark, o, true); under.position.set(0, 1.15, -1.6);
    const wheelGeo = new THREE.CylinderGeometry(.52, .52, .42, 16); wheelGeo.rotateZ(Math.PI / 2);
    for (const z of [8.1, 5.0, 3.6, -6.1, -7.4, -8.7]) for (const sx of [-1.1, 1.1]) { const w = mesh(wheelGeo, dark, o, true); w.position.set(sx, .52, z); wheels.push(w); }
    for (const sx of [-1.05, 1.05]) { const tl = mesh(new THREE.BoxGeometry(.4, .2, .05), basic('#d63b30'), o); tl.position.set(sx, 1.25, -8.43); }
    const signals = []; for (const side of [-1, 1]) for (const z of [9.0, -8.45]) { const l = new THREE.Group(); l.position.set(side * 1.0, z > 0 ? 1.25 : 1.5, z + (z > 0 ? .04 : -.04)); l.add(new THREE.Mesh(new THREE.BoxGeometry(.24, .14, .04), basic('#ffa31a'))); const gl = new THREE.Sprite(glowMat); gl.scale.set(.75, .75, 1); l.add(gl); l.visible = false; o.add(l); signals.push({ l, side }); }
    scene.add(o); return { o, wheels, signals, len: 18 };
  }
  // Personer: lavpoly figur fra Blender (person.glb) med ledd i hofter, knær, skuldre, albuer og nakke.
  // Ingen detaljer om skader. Valgfri refleksvest.
  const personGltf = await new GLTFLoader().parseAsync(Uint8Array.from(atob(assets.person), c => c.charCodeAt(0)).buffer, '');
  function makeFigure({ shirt = '#5b7a99', pants = '#2c3440', vest = false, hair = '#4a3a2c' } = {}) {
    const o = new THREE.Group(), body = personGltf.scene.clone(true); o.add(body); scene.add(o);
    const J = {}; body.traverse(n => { J[n.name] = n; if (n.isMesh) { n.castShadow = n.receiveShadow = true; n.material = n.material.clone(); n.material.flatShading = true;
      if (n.material.name === 'Shirt') n.material.color.set(shirt); if (n.material.name === 'Pants') n.material.color.set(pants); if (n.material.name === 'Hair') n.material.color.set(hair); } });
    J.Vest.visible = vest;
    const joints = ['Pelvis', 'Torso', 'Neck', 'ShoulderL', 'ElbowL', 'ShoulderR', 'ElbowR', 'HipL', 'KneeL', 'HipR', 'KneeR'];
    const base = Object.fromEntries(joints.map(k => [k, { p: J[k].position.clone() }]));
    o.visible = false; return { o, body, J, joints, base };
  }
  // Stilling: stand, walk, carry (trekanten foran deg), phone, reach, hold, kneel, lie. phase styrer skrittene.
  function pose(f, w, s, off, heading, kind = 'stand', phase = 0) {
    f.o.visible = true; if (s && s.isVector3) { f.o.position.copy(s); s = -s.z; } else f.o.position.copy(w.road(s, off, 0)); f.o.position.y = (w.terrainAt ? surfaceAt(w, f.o.position.x, f.o.position.z) : w.groundAt(f.o.position.x, s)) + .03;
    f.o.rotation.set(0, heading, 0); f.body.rotation.set(0, 0, 0); f.body.position.set(0, 0, 0);
    const J = f.J; for (const k of f.joints) { J[k].rotation.set(0, 0, 0); J[k].position.copy(f.base[k].p); }
    const R = (k, x = 0, y = 0, z = 0) => J[k].rotation.set(x, y, z);
    R('ShoulderL', 0, 0, -.06); R('ShoulderR', 0, 0, .06); R('ElbowL', -.12); R('ElbowR', -.12);
    const sw = Math.sin(phase * Math.PI * 2), bob = .025 * Math.abs(Math.cos(phase * Math.PI * 2));
    if (kind === 'walk' || kind === 'carry') { R('HipL', -.42 * sw); R('HipR', .42 * sw); R('KneeL', .5 * Math.max(0, sw)); R('KneeR', .5 * Math.max(0, -sw)); f.body.position.y = -bob; }
    if (kind === 'walk') { R('ShoulderL', .32 * sw, 0, -.06); R('ShoulderR', -.32 * sw, 0, .06); R('ElbowL', -.3); R('ElbowR', -.3); }
    if (kind === 'carry') { R('ShoulderL', -.75, 0, .2); R('ShoulderR', -.75, 0, -.2); R('ElbowL', -.85); R('ElbowR', -.85); }
    if (kind === 'phone') { R('ShoulderR', -.55, 0, -.25); R('ElbowR', -1.6); R('ShoulderL', -.1, 0, -.06); R('Neck', .25); }
    if (kind === 'reach') { R('Torso', .45); R('ShoulderR', -1.5, 0, .05); R('ElbowR', -.2); R('ShoulderL', -.6); R('ElbowL', -.6); R('HipL', -.2); R('KneeL', .3); }
    if (kind === 'hold') { R('ShoulderR', -.25, 0, .1); R('ElbowR', -1.2); R('ShoulderL', -.15, 0, -.1); R('ElbowL', -.5); R('Neck', .15, .25); R('Torso', .05); }
    if (kind === 'kneel') { // venstre kne i bakken, høyre fot fremme; lener seg over den skadde
      J.Pelvis.position.y = .43; R('HipR', -1.45); R('KneeR', 1.7); R('HipL', .15); R('KneeL', 1.75); R('Torso', 1.18); R('Neck', -.4);
      R('ShoulderL', -1.3, 0, -.1); R('ShoulderR', -1.3, 0, .1); R('ElbowL', -.05); R('ElbowR', -.05); }
    if (kind === 'lie') { f.body.rotation.x = -Math.PI / 2; f.body.position.set(0, .13, -.9); R('ShoulderL', 0, 0, -.18); R('ShoulderR', 0, 0, .18); R('HipL', 0, 0, -.05); R('HipR', 0, 0, .05); }
    // Bakkekontakt: laveste punkt på figuren (sko, kne eller kropp) settes på bakken under det punktet.
    snapToGround(f.o, w);
  }
  const _v = V();
  // Bakkehøyde under et punkt: vegbanen (inkl. skulder) eller terrenget.
  const surfaceAt = (w, x, z) => { const s0 = -z, off = Math.abs(x - w.center(s0)), t = w.terrainAt(x, s0); return off < 3.5 ? Math.max(w.elev(s0) + .035, t) : off < 4.2 ? Math.max(w.elev(s0) + .015, t) : t; };
  // Største inntrengning (positiv = under bakken) og laveste avstand over bakken for et objekt.
  function groundGap(o, w) { o.updateMatrixWorld(true); let pen = -1e9, lift = 1e9; o.traverse(m => { if (!m.isMesh || !m.visible) return; let vis = true; for (let q = m; q; q = q.parent) if (!q.visible) { vis = false; break; } if (!vis) return;
      const p = m.geometry.attributes.position, st = Math.max(1, Math.floor(p.count / 160)); for (let i = 0; i < p.count; i += st) { _v.fromBufferAttribute(p, i).applyMatrix4(m.matrixWorld); const d = surfaceAt(w, _v.x, _v.z) - _v.y; if (d > pen) pen = d; if (-d < lift) lift = -d; } });
    return { pen, lift }; }
  // Sett objektet ned på bakken: ingen del under bakken, og laveste del rører bakken.
  function snapToGround(o, w) { if (!w.center || w === interior) return; const { pen } = groundGap(o, w); o.position.y += pen + .004; }
  // Håndposisjon i verden (for trekanten og telefonen).
  const handPos = (f, side = 'R') => { const v = V(); f.o.updateMatrixWorld(true); f.J['Hand' + side].getWorldPosition(v); return v; };
  // Varseltrekant: rød ramme med refleks, smale bein.
  const triangle = (() => { const o = new THREE.Group(), sh = new THREE.Shape(), hole = new THREE.Path(), a = .44, b = .3;
    sh.moveTo(-a, 0); sh.lineTo(a, 0); sh.lineTo(0, a * 1.73); sh.closePath(); hole.moveTo(-b, .07); hole.lineTo(b, .07); hole.lineTo(0, .07 + b * 1.73); hole.closePath(); sh.holes.push(hole);
    const m = mesh(new THREE.ExtrudeGeometry(sh, { depth: .03, bevelEnabled: false }), new THREE.MeshStandardMaterial({ color: '#e0242c', emissive: '#7a0a0e', roughness: .35 }), o, true); m.position.y = .1;
    for (const x of [-.3, .3]) { const l = mesh(new THREE.BoxGeometry(.03, .03, .4), std('#202428'), o); l.position.set(x, .02, -.12); }
    scene.add(o); o.visible = false; return { o }; })();
  // Telefon og teppe.
  const phone = (() => { const o = mesh(new THREE.BoxGeometry(.08, .15, .012), std('#14181c', { roughness: .3 }), scene); o.visible = false; return { o }; })();
  // Teppe formet over en liggende person (modellert i Blender, teppe.glb). Hodeenden peker mot -z.
  const blanketGltf = await new GLTFLoader().parseAsync(Uint8Array.from(atob(assets.blanket), c => c.charCodeAt(0)).buffer, '');
  const blanket = (() => { const o = new THREE.Group(); o.add(blanketGltf.scene); blanketGltf.scene.traverse(m => { if (m.isMesh) { m.castShadow = m.receiveShadow = true; m.material.side = THREE.DoubleSide; } }); scene.add(o); o.visible = false; return { o }; })();
  // Ambulanse: hvit kassebil med gul/grønn rutemerking og blålys.
  // Ambulanse (modellert i Blender, ambulanse.glb): hvit kassebil med gul/grønt rutemønster og blålys. Front mot +z.
  const ambGltf = await new GLTFLoader().parseAsync(Uint8Array.from(atob(assets.ambulance), c => c.charCodeAt(0)).buffer, '');
  function makeAmbulance() {
    const o = new THREE.Group(), m = ambGltf.scene.clone(true); o.add(m); const wheels = [], blues = [];
    m.traverse(n => { if (n.isMesh) { n.castShadow = n.receiveShadow = true; if (n.material.name === 'Blalys') { n.material = n.material.clone(); blues.push(n); } if (n.material.name === 'AmbDekk') wheels.push(n); } });
    scene.add(o); o.visible = false; return { o, wheels: [], blues, signals: [], len: 6.2 };
  }
  const blue = makeCar('#1689c9'), crash = makeCar('#9b3b34'), silver = makeCar('#b9c2c6'), ambulance = makeAmbulance(), truck = makeTruck(), walker = makeFigure();
  const driver = makeFigure({ shirt: '#3b4a5c', vest: true }), victim = makeFigure({ shirt: '#8a5a44', pants: '#3a3f4a' }), talker = makeFigure({ shirt: '#4f7a5a', pants: '#2f3540' }), helper2 = makeFigure({ shirt: '#6b6f8a', vest: true });
  const figures = { driver, victim, talker, helper2 };
  const props = { triangle, phone, blanket };
  const ghostMat = new THREE.MeshBasicMaterial({ color: C.tealLight, transparent: true, opacity: .55, depthTest: false, toneMapped: false });
  const ghosts = {};
  const actors = { blue, crash, silver, ambulance, truck };
  function place(v, w, s, lane, { reverse = false, signal = 0, t = 0, turn = 0, roll = 0, pitch: tilt = 0, ground = false, sirens = false } = {}) {
    v.o.visible = true; const p = w.road(s, lane, .02); v.o.position.copy(p);
    // Lange kjøretøy: stigning mellom for- og bakaksel, så ingen hjul henger i lufta.
    const half = v.len > 10 ? 7.8 : 1.3, ef = w.elev(s + half), eb = w.elev(s - half), pitch = Math.atan((ef - eb) / (2 * half));
    if (v.len > 10) v.o.position.y = Math.min(ef, eb) + (Math.max(ef, eb) - Math.min(ef, eb)) * .5 + .02 - Math.max(0, (ef + eb) / 2 - w.elev(s)) * 0;
    v.o.rotation.set(0, 0, 0); v.o.rotation.order = 'YXZ'; v.o.rotation.y = (reverse ? 0 : Math.PI) - Math.atan(w.slope(s)) - turn; v.o.rotation.x = reverse ? pitch : -pitch;
    (v.wheels || []).forEach(o => o.rotation.x = s / .34);
    (v.signals || []).forEach(({ l, side }) => l.visible = signal !== 0 && (signal === 2 || side === -signal) && (t * 1.5) % 1 < .55);
    if (ground) { // står på bakken: høyden under alle fire hjul gir høyde, stigning og krenging
      const yaw = v.o.rotation.y, c = Math.cos(yaw), sn = Math.sin(yaw), P = v.o.position;
      const h = ([x, z]) => { const wx = P.x + x * c + z * sn, wz = P.z - x * sn + z * c; return surfaceAt(w, wx, wz); };
      const fl = h([.8, 1.3]), fr = h([-.8, 1.3]), bl = h([.8, -1.3]), br = h([-.8, -1.3]);
      P.y = Math.max((fl + fr + bl + br) / 4, Math.min(fl, fr, bl, br) + .05) + .02;
      v.o.rotation.x = Math.atan(((bl + br) - (fl + fr)) / 2 / 2.6) + tilt; v.o.rotation.z = Math.atan(((fl + bl) - (fr + br)) / 2 / 1.6) + roll; snapToGround(v.o, w); }
    (v.blues || []).forEach((b, k) => { const on = sirens && ((t * 2.6 + k * .5) % 1) < .5; b.material.color.set(on ? '#5d95ff' : '#1b2f66'); b.material.emissive = b.material.emissive || new THREE.Color(); b.material.emissive.set(on ? '#2f6dff' : '#000000'); });
  }

  // ---------- 2D-grafikk over scenen ----------
  const proj = (w, s, off, y = .1) => { const p = w.road(s, off, y).project(camera); return [(p.x + 1) * L.W / 2, (1 - p.y) * L.sceneH / 2, p.z]; };
  const projV = v => { const p = v.clone().project(camera); return [(p.x + 1) * L.W / 2, (1 - p.y) * L.sceneH / 2, p.z]; };
  function zone(w, a, b, off, width, color, fill) {
    if (b - a < .5) return;
    const pts = []; const n = Math.max(2, Math.ceil((b - a) / 4));
    for (let i = 0; i <= n; i++) pts.push(proj(w, a + (b - a) * i / n, off - width / 2));
    for (let i = n; i >= 0; i--) pts.push(proj(w, a + (b - a) * i / n, off + width / 2));
    if (pts.some(p => p[2] > 1)) return;
    ctx.save(); ctx.beginPath(); pts.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.closePath();
    ctx.fillStyle = fill; ctx.fill(); ctx.lineWidth = 5; ctx.lineJoin = 'round'; ctx.strokeStyle = 'rgba(255,255,255,.9)'; ctx.stroke(); ctx.lineWidth = 3; ctx.strokeStyle = color; ctx.stroke(); ctx.restore();
  }
  function measure(w, a, b, off, label, at = .5, color = C.text) {
    const A = proj(w, a, off, .3), B = proj(w, b, off, .3); if (A[2] > 1 || B[2] > 1) return;
    ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = 'rgba(255,255,255,.95)'; ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(A[0], A[1]); ctx.lineTo(B[0], B[1]); ctx.stroke();
    ctx.strokeStyle = color; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(A[0], A[1]); ctx.lineTo(B[0], B[1]); ctx.stroke();
    const ang = Math.atan2(B[1] - A[1], B[0] - A[0]) + Math.PI / 2;
    for (const P of [A, B]) { ctx.beginPath(); ctx.moveTo(P[0] - 16 * Math.cos(ang), P[1] - 16 * Math.sin(ang)); ctx.lineTo(P[0] + 16 * Math.cos(ang), P[1] + 16 * Math.sin(ang)); ctx.stroke(); }
    ctx.restore(); pill(ctx, A[0] + (B[0] - A[0]) * at, A[1] + (B[1] - A[1]) * at, label, { size: 32 });
  }
  // Turkis omriss rundt et skilt (skiltplaten står 2,3 m over bakken).
  function signBox(w, s, x) {
    const p = w.road(s, x, 0), c = [[-.78, 1.5], [.78, 1.5], [.78, 3.1], [-.78, 3.1]].map(([dx, dy]) => projV(V(p.x + dx, p.y + dy, p.z)));
    if (c.some(q => q[2] > 1)) return;
    ctx.save(); ctx.beginPath(); c.forEach(([x2, y2], i) => i ? ctx.lineTo(x2, y2) : ctx.moveTo(x2, y2)); ctx.closePath(); ctx.lineJoin = 'round';
    ctx.lineWidth = 9; ctx.strokeStyle = 'rgba(255,255,255,.95)'; ctx.stroke(); ctx.lineWidth = 5; ctx.strokeStyle = C.tealLight; ctx.stroke(); ctx.restore();
  }
  // Ring rundt en (skjult) person eller et kjøretøy.
  function ring(v, r = 46, dy = 1) {
    const [x, y, z] = projV(v.position.clone().add(V(0, dy, 0))); if (z > 1) return;
    ctx.save(); ctx.lineWidth = 9; ctx.strokeStyle = 'rgba(255,255,255,.95)'; ctx.beginPath(); ctx.ellipse(x, y, r, r * 1.35, 0, 0, 7); ctx.stroke();
    ctx.lineWidth = 5; ctx.strokeStyle = C.tealLight; ctx.stroke(); ctx.restore();
  }
  // Fremhev en pille (tidtaker/meterteller) med turkis ramme.
  function highlightBox(b) { ctx.save(); ctx.lineWidth = 5; ctx.strokeStyle = C.tealLight; rr(ctx, b.x - 7, b.y - 7, b.w + 14, b.h + 14, (b.h + 14) / 2); ctx.stroke(); ctx.restore(); }

  window.setFormat = f => { L = LAYOUT[f]; canvas.width = L.W; canvas.height = L.H; renderer.setSize(L.W, L.sceneH); camera.aspect = L.W / L.sceneH; camera.fov = f === 'mobile' ? 46 : 34; camera.updateProjectionMatrix(); window.filmFormat = f; };
  window.setFormat('mobile');
  const fovDefault = () => L.H > L.W ? 46 : 34;
  const sky = scene.background, haze = new THREE.Color('#dbe7e8');
  const buffer = document.createElement('canvas'), bctx = buffer.getContext('2d');

  // Kamera fra vegkoordinater: fra (s, x, høyde) mot (look, lx, ly).
  const roadCam = (w, c) => ({ from: w.road(c.s, c.x ?? 0, c.h), to: w.road(c.look, c.lx ?? 0, c.ly ?? .5), fov: c.fov });
  const lerpCam = (A, B, k) => ({ from: A.from.clone().lerp(B.from, k), to: A.to.clone().lerp(B.to, k), fov: (A.fov ?? fovDefault()) + ((B.fov ?? fovDefault()) - (A.fov ?? fovDefault())) * k });

  // Bilde-i-bilde: et eget kamera nær et kjøretøy (brukes for møtende bil i kapittel 2).
  function inset(w, o) {
    const iw = L.H > L.W ? 430 : 440, ih = Math.round(iw * .6), ix = 32, iy = 32;
    const v = actors[o.actor].o, cam2 = new THREE.PerspectiveCamera(30, iw / ih, .2, 1500);
    const a = w.road(o.s - 15, -5.2, 2.4), b = w.road(o.s - 1, -1.2, .9); cam2.position.copy(a); cam2.lookAt(b); cam2.updateMatrixWorld();
    const keep = sun.position.clone(), keepT = sun.target.position.clone();
    sun.position.copy(v.position).add(V(-45, 70, 30)); sun.target.position.copy(v.position);
    renderer.setScissorTest(true); renderer.setViewport(0, 0, iw, ih); renderer.setScissor(0, 0, iw, ih); renderer.render(scene, cam2);
    renderer.setScissorTest(false); renderer.setViewport(0, 0, L.W, L.sceneH);
    sun.position.copy(keep); sun.target.position.copy(keepT);
    ctx.save(); ctx.globalAlpha = o.alpha ?? 1;
    ctx.shadowColor = 'rgba(15,23,42,.3)'; ctx.shadowBlur = 22; ctx.shadowOffsetY = 5; ctx.fillStyle = C.white; rr(ctx, ix - 8, iy - 8, iw + 16, ih + 94, 20); ctx.fill(); ctx.shadowColor = 'transparent';
    ctx.save(); rr(ctx, ix, iy, iw, ih, 14); ctx.clip(); ctx.drawImage(renderer.domElement, 0, L.sceneH - ih, iw, ih, ix, iy, iw, ih); ctx.restore();
    ctx.fillStyle = C.red; ctx.beginPath(); ctx.arc(ix + 16, iy + ih + 30, 8, 0, 7); ctx.fill();
    ctx.font = `600 27px ${FONT}`; ctx.fillStyle = C.text; ctx.textBaseline = 'middle'; ctx.fillText(o.label, ix + 34, iy + ih + 31);
    ctx.font = `500 25px ${FONT}`; ctx.fillStyle = C.muted; ctx.fillText(o.sub, ix + 34, iy + ih + 64);
    ctx.restore();
  }

  // «Sett fra siden»: skjematisk profil av bakketoppen med de to bilene og siktlinjen.
  function profile(w, q) {
    const iw = L.H > L.W ? 500 : 600, ih = Math.round(iw * .5), ix = L.W - iw - 32, iy = 32;
    const sx = s2 => ix + 24 + (s2 - q.from) / (q.to - q.from) * (iw - 48), ymax = 13, sy = h => iy + ih - 34 - h / ymax * (ih - 150);
    ctx.save(); ctx.globalAlpha = q.alpha ?? 1; ctx.shadowColor = 'rgba(15,23,42,.28)'; ctx.shadowBlur = 22; ctx.shadowOffsetY = 5; ctx.fillStyle = C.white; rr(ctx, ix, iy, iw, ih, 20); ctx.fill(); ctx.shadowColor = 'transparent';
    ctx.font = `600 24px ${FONT}`; ctx.fillStyle = C.muted; ctx.fillText('Sett fra siden', ix + 22, iy + 36);
    ctx.beginPath(); ctx.moveTo(sx(q.from), iy + ih - 18); for (let s2 = q.from; s2 <= q.to; s2 += 2) ctx.lineTo(sx(s2), sy(w.elev(s2))); ctx.lineTo(sx(q.to), iy + ih - 18); ctx.closePath();
    ctx.fillStyle = '#9dbb74'; ctx.fill(); ctx.beginPath(); for (let s2 = q.from; s2 <= q.to; s2 += 2) ctx[s2 === q.from ? 'moveTo' : 'lineTo'](sx(s2), sy(w.elev(s2))); ctx.lineWidth = 7; ctx.strokeStyle = '#4b5258'; ctx.stroke();
    const car = (s2, col, dir) => { const x = sx(s2), y = sy(w.elev(s2)), a = Math.atan2(sy(w.elev(s2 + 2)) - sy(w.elev(s2 - 2)), sx(s2 + 2) - sx(s2 - 2)); ctx.save(); ctx.translate(x, y); ctx.rotate(a); ctx.fillStyle = col; rr(ctx, -20, -20, 40, 15, 5); ctx.fill(); rr(ctx, -11 * dir - 3, -30, 20, 12, 4); ctx.fill(); ctx.restore(); return [x, y]; };
    const ex = sx(q.you), ey = sy(w.elev(q.you) + 1.2), cx = sx(q.crest), cy = sy(w.elev(q.crest)) - 2;
    const k = (cy - ey) / (cx - ex), xEnd = ix + iw - 20;
    ctx.fillStyle = C.redSoft; ctx.beginPath(); ctx.moveTo(cx, cy + 2); ctx.lineTo(xEnd, ey + k * (xEnd - ex)); ctx.lineTo(xEnd, iy + ih - 18); ctx.lineTo(sx(q.to), sy(w.elev(q.to))); for (let s2 = q.to; s2 >= q.crest; s2 -= 2) ctx.lineTo(sx(s2), sy(w.elev(s2))); ctx.closePath(); ctx.fill();
    ctx.setLineDash([12, 9]); ctx.lineWidth = 4; ctx.strokeStyle = C.teal; ctx.beginPath(); ctx.moveTo(ex, ey); ctx.lineTo(xEnd, ey + k * (xEnd - ex)); ctx.stroke(); ctx.setLineDash([]);
    const [bx, by] = car(q.you, '#1689c9', 1), [rx, ry] = car(q.other, '#c4473b', -1);
    ctx.font = `600 22px ${FONT}`; ctx.fillStyle = C.teal; ctx.textAlign = 'right'; ctx.fillText('Siktlinjen din', ix + iw - 22, iy + 36);
    ctx.fillStyle = C.red; ctx.textAlign = 'center'; ctx.fillText('Du ser ikke hit', Math.min(ix + iw - 110, (cx + ix + iw) / 2 + 30), iy + ih - 70);
    ctx.restore();
    ctx.save(); ctx.globalAlpha = q.alpha ?? 1; pill(ctx, bx, by - 58, 'Du', { size: 22, dot: '#1689c9' }); pill(ctx, rx, ry - 58, 'Møtende', { size: 22, dot: '#c4473b' }); ctx.restore();
  }

  // «Sett ovenfra»: skjematisk kart over hele strekningen med blå bil, lastebil og møtende bil.
  // Tid og meter vises her, ett sted, i stedet for egne tellere i hjørnet.
  function topView(q) {
    const mob = L.H > L.W, x0 = 32, y0 = 24, w0 = mob ? L.W - 64 : 1000, h0 = 236, c = y0 + 122, S0 = 50, S1 = 1400;
    const X = s2 => x0 + 28 + (s2 - S0) / (S1 - S0) * (w0 - 56), Y = off => c + off / 1.75 * 13;
    ctx.save(); ctx.shadowColor = 'rgba(15,23,42,.25)'; ctx.shadowBlur = 20; ctx.shadowOffsetY = 4; ctx.fillStyle = 'rgba(255,255,255,.96)'; rr(ctx, x0, y0, w0, h0, 20); ctx.fill(); ctx.shadowColor = 'transparent';
    ctx.textBaseline = 'alphabetic'; ctx.font = `600 24px ${FONT}`; ctx.fillStyle = C.muted; ctx.fillText('Sett ovenfra', x0 + 24, y0 + 40);
    ctx.font = `700 34px ${FONT}`; ctx.textAlign = 'right'; ctx.fillStyle = C.text; const tt = `${Math.floor(q.tp)} s`; ctx.fillText(tt, x0 + w0 - 24, y0 + 44);
    const tw = ctx.measureText(tt).width; ctx.font = `600 24px ${FONT}`; ctx.fillStyle = C.muted; ctx.fillText('Tid', x0 + w0 - 34 - tw, y0 + 42);
    if (q.hl === 'time') { ctx.lineWidth = 4; ctx.strokeStyle = C.tealLight; rr(ctx, x0 + w0 - 34 - tw - 52, y0 + 8, tw + 72, 50, 25); ctx.stroke(); }
    ctx.textAlign = 'left';
    ctx.fillStyle = '#5b6268'; ctx.fillRect(X(S0) - 10, c - 26, X(S1) - X(S0) + 20, 52);
    ctx.fillStyle = '#f7f5ec'; ctx.fillRect(X(S0) - 10, c - 25, X(S1) - X(S0) + 20, 2); ctx.fillRect(X(S0) - 10, c + 23, X(S1) - X(S0) + 20, 2);
    ctx.fillStyle = '#f2c230'; for (let s2 = S0; s2 < S1; s2 += 24) ctx.fillRect(X(s2), c - 1.5, 7, 3);
    const bar = (a2, b2, y, col) => { if (b2 - a2 < .5) return; ctx.fillStyle = col; rr(ctx, X(a2), y, X(b2) - X(a2), 10, 5); ctx.fill(); };
    const bEnd = clamp(q.sB, 100, END), rEnd = clamp(q.sR, MEET, ONC); // strekningene stopper når forbikjøringen er ferdig
    bar(100, bEnd, c + 34, C.teal); bar(rEnd, ONC, c - 44, C.red);
    // Etikett ved enden av hver strekning: blå til høyre for enden, møtende til venstre for enden.
    const lab = (txt, x, y, col, side, hl) => { ctx.font = `600 26px ${FONT}`; const w2 = ctx.measureText(txt).width; let lx = side > 0 ? x + 12 : x - 12 - w2; lx = clamp(lx, x0 + 16, x0 + w0 - 16 - w2); ctx.fillStyle = col; ctx.fillText(txt, lx, y);
      if (hl) { ctx.lineWidth = 4; ctx.strokeStyle = C.tealLight; rr(ctx, lx - 14, y - 29, w2 + 28, 40, 20); ctx.stroke(); } };
    lab(`Du: ${fmtM(Math.round(V80 * q.tp / 10) * 10)} m`, X(bEnd), c + 48, C.teal, 1, q.hl === 'du');
    if (q.sR < ONC - 2) lab(`Møtende: ${fmtM(Math.round((ONC - rEnd) / 10) * 10)} m`, X(rEnd), c - 30, C.red, -1, q.hl === 'red');
    const car = (s2, off, col, len, wid) => { ctx.fillStyle = col; rr(ctx, X(s2) - len / 2, Y(off) - wid / 2, len, wid, 5); ctx.fill(); ctx.lineWidth = 2; ctx.strokeStyle = 'rgba(15,23,42,.6)'; ctx.stroke(); };
    // Ikonene er større enn i målestokk. Derfor festes de i den enden som vender mot den andre bilen,
    // så luken mellom blå bil og lastebil blir riktig og ikonene aldri overlapper (bak: blå front / lastebil bak; foran: motsatt).
    const k = ease((q.sB - q.sT + 16) / 32), bw = 28, tw2 = 40;
    const bx = mixv(X(q.sB + 2.2) - bw / 2, X(q.sB - 2.2) + bw / 2, k), tx = mixv(X(q.sT - 9) + tw2 / 2, X(q.sT + 9) - tw2 / 2, k);
    const icon = (x, off, col, len, wid) => { ctx.fillStyle = col; rr(ctx, x - len / 2, Y(off) - wid / 2, len, wid, 5); ctx.fill(); ctx.lineWidth = 2; ctx.strokeStyle = 'rgba(15,23,42,.6)'; ctx.stroke(); };
    icon(tx, 1.75, '#eef0ec', tw2, 17); car(q.sR, -1.75, '#c4473b', 28, 15); icon(bx, q.lane, '#1689c9', bw, 15);
    if (q.tp >= PASS - .05) { const a2 = X(END), b2 = X(MEET); ctx.fillStyle = 'rgba(20,184,166,.18)'; ctx.fillRect(a2, c - 26, b2 - a2, 52); ctx.font = `700 24px ${FONT}`; const mt = 'luft', mw2 = ctx.measureText(mt).width; ctx.fillStyle = '#ffffff'; if (q.sR > MEET - 10) ctx.fillText(mt, (a2 + b2) / 2 - mw2 / 2, c + 9); }
    if (q.measure) { const y = c + 84, A2 = X(100), B2 = X(ONC); ctx.strokeStyle = C.text; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(A2, y); ctx.lineTo(B2, y); ctx.moveTo(A2, y - 9); ctx.lineTo(A2, y + 9); ctx.moveTo(B2, y - 9); ctx.lineTo(B2, y + 9); ctx.stroke();
      ctx.font = `700 26px ${FONT}`; const m = 'over 1 km fri vei', mw = ctx.measureText(m).width; ctx.fillStyle = '#ffffff'; ctx.fillRect((A2 + B2) / 2 - mw / 2 - 12, y - 18, mw + 24, 34); ctx.fillStyle = C.text; ctx.fillText(m, (A2 + B2) / 2 - mw / 2, y + 9); }
    ctx.restore();
  }

  // Sluttkort i scenen: fire punkter å huske.
  function summaryCard(alpha) {
    const mob = L.H > L.W, cw = mob ? 900 : 1040, lh = mob ? 84 : 78, ch = 120 + SUMMARY.length * lh, cx = (L.W - cw) / 2, cy = (L.sceneH - ch) / 2;
    ctx.save(); ctx.globalAlpha = alpha; ctx.fillStyle = 'rgba(15,23,42,.35)'; ctx.fillRect(0, 0, L.W, L.sceneH);
    ctx.shadowColor = 'rgba(15,23,42,.35)'; ctx.shadowBlur = 30; ctx.shadowOffsetY = 8; ctx.fillStyle = C.white; rr(ctx, cx, cy, cw, ch, 24); ctx.fill(); ctx.shadowColor = 'transparent';
    ctx.font = `600 30px ${FONT}`; ctx.fillStyle = C.teal; ctx.textBaseline = 'alphabetic'; ctx.fillText(SUMMARY_TITLE, cx + 48, cy + 74);
    SUMMARY.forEach((txt, i) => { const y = cy + 140 + i * lh; ctx.fillStyle = C.teal; ctx.beginPath(); ctx.arc(cx + 66, y - 13, 17, 0, 7); ctx.fill();
      ctx.fillStyle = C.white; ctx.font = `700 22px ${FONT}`; ctx.textAlign = 'center'; ctx.fillText(String(i + 1), cx + 66, y - 5); ctx.textAlign = 'left';
      ctx.fillStyle = C.text; ctx.font = `500 ${mob ? 40 : 38}px ${FONT}`; ctx.fillText(txt, cx + 104, y); });
    ctx.restore();
  }

  // Tegn scenen (3D + markeringer) for en tilstand. Samme beskrivelse som storyboard-«shots».
  function drawScene(sh, t = .2, target = ctx) {
    const w = worlds[sh.world]; Object.values(worlds).forEach(v => v.root.visible = false); w.root.visible = true;
    Object.values(actors).forEach(a => a.o.visible = false); Object.values(ghosts).forEach(g => g.visible = false);
    window.__carried = !!sh.carried; Object.values(figures).forEach(f => f.o.visible = false); Object.values(props).forEach(p => p.o.visible = false);
    for (const [name, s, off, heading, kind, phase] of (sh.figures || [])) pose(figures[name], w, s, off, heading, kind, phase);
    for (const [name, fn] of (sh.props || [])) { const p = props[name]; p.o.visible = true; p.o.rotation.set(0, 0, 0); p.o.scale.set(1, 1, 1); fn(p.o, w); }
    if (w === interior) { const on = sh.hazard && (t * 1.5) % 1 < .55; interior.glow.visible = on; interior.button.material.color.set(on ? '#ffffff' : '#a8a8a8'); }
    w.mountains.forEach(m => m.visible = !sh.noMountains);
    scene.background = sh.noMountains ? haze : sky;
    scene.fog.near = sh.fog?.[0] ?? 160; scene.fog.far = sh.fog?.[1] ?? 620;
    for (const [name, s, lane, opt] of sh.actors) place(actors[name], w, s, lane, { t, ...(opt || {}) });
    for (const [name, s, lane, opt] of (sh.ghosts || [])) { const g = ghosts[name]; place({ o: g }, w, s, lane, opt || {}); g.visible = true; }
    const c = sh.cam.from ? sh.cam : roadCam(w, sh.cam);
    camera.position.copy(c.from); camera.lookAt(c.to); camera.fov = c.fov ?? fovDefault(); camera.updateProjectionMatrix();
    const focus = sh.sunAt ?? c.to.clone(); focus.y = 0; sun.position.copy(focus).add(V(-45, 70, 30)); sun.target.position.copy(focus);
    const big = c.from.y > 60; Object.assign(sun.shadow.camera, big ? { left: -260, right: 260, top: 260, bottom: -260, far: 600 } : { left: -60, right: 60, top: 60, bottom: -60, far: 220 }); sun.shadow.camera.updateProjectionMatrix();
    camera.updateMatrixWorld(); renderer.render(scene, camera);
    ctx.reset(); ctx.drawImage(renderer.domElement, 0, 0, L.W, L.sceneH);
    { const g = ctx.createRadialGradient(L.W / 2, L.sceneH * .5, Math.min(L.W, L.sceneH) * .5, L.W / 2, L.sceneH * .5, Math.max(L.W, L.sceneH) * .9); g.addColorStop(0, 'rgba(15,23,42,0)'); g.addColorStop(1, 'rgba(15,23,42,.14)'); ctx.fillStyle = g; ctx.fillRect(0, 0, L.W, L.sceneH); }
    for (const o of (sh.overlay || [])) {
      ctx.save(); ctx.globalAlpha = o.alpha ?? 1;
      if (o.zone) zone(w, ...o.zone);
      if (o.measure) measure(w, ...o.measure);
      if (o.signBox) signBox(w, ...o.signBox);
      if (o.ring) ring(o.ring.p ? { position: o.ring.p } : o.ring.fig ? figures[o.ring.fig].o : actors[o.ring.actor].o, o.ring.r, o.ring.dy);
      if (o.icons) icons(o.icons);
      if (o.marker) { const [x, y] = o.marker.actor ? projV(actors[o.marker.actor].o.position.clone().add(V(0, o.marker.dy ?? 3, 0))) : proj(w, o.marker.s, o.marker.off, o.marker.y ?? 1.5); marker(ctx, x + (o.marker.dx ?? 0), y + (o.marker.dy2 ?? 0), o.marker.n, o.marker.on !== false); }
      if (o.badge) { const a = o.badge.p ? o.badge.p.clone() : o.badge.fig ? figures[o.badge.fig].o.position.clone().add(V(0, o.badge.dy ?? 2.3, 0)) : o.badge.actor ? actors[o.badge.actor].o.position.clone().add(V(0, o.badge.dy ?? 3.2, 0)) : w.road(o.badge.s, o.badge.off, o.badge.y ?? 2); const [x, y, z] = projV(a); if (z < 1) pill(ctx, x + (o.badge.dx ?? 0), y + (o.badge.dy2 ?? 0), o.badge.text, { dot: o.badge.dot, size: o.badge.size ?? 30 }); }
      if (o.corner) { const b = pill(ctx, L.W - 32, 32 + 29 + (o.corner.row ?? 0) * 78, o.corner.text, { size: 32, dot: o.corner.dot, align: 'right' }); if (o.corner.hl) highlightBox(b); }
      if (o.dot) { const [x0, y] = projV(actors[o.dot.actor].o.position), x = x0 + (o.dot.dx ?? 0); ctx.fillStyle = C.white; ctx.beginPath(); ctx.arc(x, y, 17, 0, 7); ctx.fill(); ctx.fillStyle = o.dot.color; ctx.beginPath(); ctx.arc(x, y, 11, 0, 7); ctx.fill(); }
      if (o.note) { ctx.font = `500 24px ${FONT}`; const tw = ctx.measureText(o.note).width; ctx.fillStyle = 'rgba(255,255,255,.9)'; rr(ctx, L.W - 32 - tw - 32, L.sceneH - 66, tw + 32, 42, 21); ctx.fill(); ctx.fillStyle = C.muted; ctx.textAlign = 'right'; ctx.textBaseline = 'middle'; ctx.fillText(o.note, L.W - 48, L.sceneH - 44); }
      if (o.inset) inset(w, o.inset);
      if (o.top) topView(o.top);
      ctx.restore();
    }
    if (sh.profile) profile(w, sh.profile);
    return w;
  }

  // ---------- Stegrekka og ikoner ----------
  // Fem steg nederst i scenen. Steget som gjelder, lyser turkis. Ferdige steg får turkis kant.
  function stepsBar(active, alpha = 1) {
    const mob = L.H > L.W, fs = mob ? 29 : 28, h = 54, gap = mob ? 8 : 14, y = L.sceneH - h - (mob ? 24 : 24);
    ctx.save(); ctx.globalAlpha = alpha; ctx.font = `600 ${fs}px ${FONT}`; ctx.textBaseline = 'middle';
    const ws = STEPS.map(t => ctx.measureText(t).width + (mob ? 28 : 44)), tot = ws.reduce((a, b) => a + b, 0) + gap * (STEPS.length - 1);
    let x = (L.W - tot) / 2;
    STEPS.forEach((t, k) => { const on = active === 'all' || k === active, done = active !== 'all' && k < active;
      ctx.shadowColor = 'rgba(15,23,42,.18)'; ctx.shadowBlur = 10; ctx.shadowOffsetY = 2;
      ctx.fillStyle = on ? C.teal : 'rgba(255,255,255,.92)'; rr(ctx, x, y, ws[k], h, h / 2); ctx.fill(); ctx.shadowColor = 'transparent';
      if (done) { ctx.lineWidth = 3; ctx.strokeStyle = C.teal; ctx.stroke(); }
      ctx.fillStyle = on ? C.white : done ? C.teal : C.muted; ctx.textAlign = 'center'; ctx.fillText(t, x + ws[k] / 2, y + h / 2 + 1); x += ws[k] + gap; });
    ctx.restore();
  }
  // Tre ikoner for 113-samtalen: hvor, hva, hvor mange. Tegnes som enkle symboler i hvite sirkler.
  function icons(list) {
    const mob = L.H > L.W, r = mob ? 58 : 54, gap = mob ? 250 : 260, y = mob ? 150 : 130, x0 = L.W / 2 - gap;
    list.forEach(({ kind, label, alpha }, k) => { if (alpha <= 0) return; const x = x0 + k * gap;
      ctx.save(); ctx.globalAlpha = alpha; ctx.translate(0, 18 * (1 - alpha));
      ctx.shadowColor = 'rgba(15,23,42,.25)'; ctx.shadowBlur = 16; ctx.shadowOffsetY = 4; ctx.fillStyle = C.white; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill(); ctx.shadowColor = 'transparent';
      ctx.fillStyle = C.teal; ctx.strokeStyle = C.teal; ctx.lineWidth = 6; ctx.lineJoin = ctx.lineCap = 'round';
      if (kind === 'pin') { ctx.beginPath(); ctx.arc(x, y - 10, 20, Math.PI * .85, Math.PI * .15); ctx.lineTo(x, y + 28); ctx.closePath(); ctx.fill(); ctx.fillStyle = C.white; ctx.beginPath(); ctx.arc(x, y - 10, 8, 0, 7); ctx.fill(); }
      if (kind === 'crash') { ctx.beginPath(); ctx.moveTo(x, y - 28); ctx.lineTo(x + 28, y + 22); ctx.lineTo(x - 28, y + 22); ctx.closePath(); ctx.stroke(); ctx.fillRect(x - 3, y - 10, 6, 18); ctx.beginPath(); ctx.arc(x, y + 14, 3.5, 0, 7); ctx.fill(); }
      if (kind === 'people') for (const [dx, sc] of [[-14, 1], [14, .85]]) { ctx.beginPath(); ctx.arc(x + dx, y - 14 * sc, 9 * sc, 0, 7); ctx.fill(); ctx.beginPath(); ctx.ellipse(x + dx, y + 16 * sc, 15 * sc, 17 * sc, 0, Math.PI, 0); ctx.fill(); }
      if (kind === 'speaker') { ctx.beginPath(); ctx.moveTo(x - 24, y - 9); ctx.lineTo(x - 12, y - 9); ctx.lineTo(x + 2, y - 22); ctx.lineTo(x + 2, y + 22); ctx.lineTo(x - 12, y + 9); ctx.lineTo(x - 24, y + 9); ctx.closePath(); ctx.fill(); ctx.lineWidth = 5; for (const rr2 of [12, 22]) { ctx.beginPath(); ctx.arc(x + 4, y, rr2, -.8, .8); ctx.stroke(); } }
      ctx.font = `600 ${mob ? 30 : 30}px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
      const tw = ctx.measureText(label).width; ctx.fillStyle = 'rgba(255,255,255,.95)'; rr(ctx, x - tw / 2 - 16, y + r + 12, tw + 32, 46, 23); ctx.fill(); ctx.fillStyle = C.text; ctx.fillText(label, x, y + r + 36);
      ctx.restore(); });
  }

  // ---------- Film: tidsplan og bevegelse ----------
  const DURATION = timing.duration, CHS = timing.chapters, endStart = CHS.at(-1).end;
  const R = 1.75, mixv = (a, b, k) => a + (b - a) * k, sm = v => { v = clamp(v); return v * v * (3 - 2 * v); };
  function cruiseStop(u, d0, v, uStop, T) { const ub = uStop - T; if (u <= ub) return d0 + v * u; const tau = Math.min(u - ub, T); return d0 + v * ub + v * tau - v * tau * tau / (2 * T); }
  // Bremser fra v0 til v1 over T sekunder fra uB, holder så v1.
  function slowTo(u, d0, v0, v1, uB, T) { if (u <= uB) return d0 + v0 * u; const tau = Math.min(u - uB, T), a = (v1 - v0) / T; return d0 + v0 * uB + v0 * tau + a * tau * tau / 2 + v1 * Math.max(0, u - uB - T); }
  const steer = (laneF, sF, x, e = .01) => Math.atan((laneF(x + e) - laneF(x - e)) / Math.max(.01, sF(x + e) - sF(x - e)));
  const W0 = worlds.curve, hd = s => -W0.heading(s); // retning langs vegen (for personer)
  const STOP = 194, SPACE = [199, 226], TRI = 40, BLUE_LANE = 2.95;
  const crashActor = ['crash', ACC, 7.1, { turn: -.55, roll: 0, pitch: 0, ground: true }];
  // Kap 1–3: ingen personer ute ved bilen i grøfta (du vet ikke hvor mange som er skadd før stedet er sikret).
  const calm = () => [];
  const VS = ACC + 5.5, VOFF = 14, VH = hd(ACC) + 1.4; // den skadde ligger på flat plen ved siden av bilen
  const people = (tp = null, th = hd(ACC) - 2.4) => [['victim', VS, VOFF, VH, 'lie', 0], tp ? ['talker', tp, null, th, 'hold', 0] : ['talker', ACC + 1.5, 12.2, hd(ACC) - 2.0, 'hold', 0]];
  const blueParked = (t, sig = 2) => ['blue', STOP, BLUE_LANE, { signal: sig }];
  const camRoad = (s, off, h, s2, off2, h2, fov) => ({ from: W0.road(s, off, h), to: W0.road(s2, off2, h2), fov });
  const fovD = () => L.H > L.W ? 46 : 34;
  // Bildeskift inne i kapitler: kap 2 ved setning 2 og 3, kap 3 ved setning 3 og 5.
  const inner = { 1: [1, 2], 2: [2, 4] };
  const sub = (i, a) => { const S = CHS[i].sentences, list = inner[i] || []; let k = 0; list.forEach((n, j) => { if (a >= S[n] - .2) k = j + 1; }); return k; };
  const subStart = (i, k) => k === 0 ? -(CHS[i].speech - CHS[i].start) : CHS[i].sentences[inner[i][k - 1]] - .2;
  const cuts = []; CHS.forEach((c, i) => { if (i) cuts.push({ t: c.start, prev: [i - 1, c.start - 1e-3] }); (inner[i] || []).forEach(n => { const t = c.speech + c.sentences[n] - .2; cuts.push({ t, prev: [i, t - 1e-3] }); }); });
  const FADE = .5;

  // Punkter på den liggende personen, målt fra modellen: munn, bryst, skuldre, knær og kroppens akse (mot hodet).
  const _b3 = new THREE.Box3();
  function victimPoints() {
    const f = figures.victim; pose(f, W0, VS, VOFF, VH, 'lie', 0); f.o.updateMatrixWorld(true);
    const P = n => f.J[n].getWorldPosition(V()), head = _b3.setFromObject(f.J.Hode).getCenter(V());
    const sh = P('ShoulderL').add(P('ShoulderR')).multiplyScalar(.5), kn = P('KneeL').add(P('KneeR')).multiplyScalar(.5), hip = P('HipL').add(P('HipR')).multiplyScalar(.5);
    const axis = sh.clone().sub(hip).setY(0).normalize(), top = _b3.setFromObject(f.J.Kropp).max.y;
    const chest = sh.clone().lerp(hip, .28); chest.y = top; const mouth = head.clone(); mouth.y = _b3.setFromObject(f.J.Hode).max.y - .03;
    return { mouth, chest, sh, kn, hip, axis, top, ground: surfaceAt(W0, chest.x, chest.z) };
  }
  // Plasser hjelperen på kne slik at midten mellom hendene havner på brystet.
  function kneelAt(p0, heading, chest) {
    const f = figures.driver; pose(f, W0, p0.clone(), null, heading, 'kneel', 0);
    const hm = handPos(f, 'L').add(handPos(f, 'R')).multiplyScalar(.5), d = chest.clone().sub(hm); d.y = 0;
    return p0.clone().add(d);
  }
  // Teppet (teppe.glb) legges over kroppen fra skuldrene til knærne; hodet er fritt. k: 0 = løftet, 1 = på plass.
  function placeBlanket(o, b, k) {
    const c = b.sh.clone().lerp(b.kn, .5); c.y = b.ground + (1 - k) * .9; o.position.copy(c);
    o.lookAt(c.clone().sub(b.axis)); o.scale.set(1.05, Math.max(.7, (b.top - b.ground + .06) / .2), Math.max(.85, b.sh.distanceTo(b.kn) / .98));
  }

  function chapterState(i, u, a) {
    const S = CHS[i].sentences, inS = k => a >= S[k] - .15 && (k + 1 >= S.length || a < S[k + 1] - .15), from = k => a >= S[k] - .15;
    const mob = L.H > L.W;
    if (i === 0) {
      // Stans: blå bil kommer rundt svingen, ser bilen i grøfta og bremser jevnt ned på skulderen før ulykkesstedet.
      const uStop = CHS[0].speech - CHS[0].start + S[3] + .3, sB = cruiseStop(u, STOP - 18 * (uStop - 5) - 45, 18, uStop, 5), lane = R + (BLUE_LANE - R) * sm((sB - 150) / 40);
      const chase = camRoad(sB - 15, -.8, 5.2, sB + 34, 1.2, .8, fovD());
      const end = camRoad(STOP - 24, -3.5, 9.5, ACC - 12, 3.2, 0, fovD());
      const cam = lerpCam(chase, end, ease((a - S[3] + 1.2) / 2.6));
      const ov = [];
      if (from(3)) ov.push({ zone: [SPACE[0], SPACE[1], 2.4, 3.4, C.tealLight, C.tealSoft], alpha: ease((a - S[3] - .4) / .5) }, { badge: { s: (SPACE[0] + SPACE[1]) / 2, off: 2.4, y: .4, text: 'Plass til ambulansen', dot: C.tealLight }, alpha: ease((a - S[3] - .7) / .5) });
      return { world: 'curve', actors: [['blue', sB, lane, { turn: steer(q => R + (BLUE_LANE - R) * sm((cruiseStop(q, STOP - 18 * (uStop - 5) - 45, 18, uStop, 5) - 150) / 40), q => cruiseStop(q, STOP - 18 * (uStop - 5) - 45, 18, uStop, 5), u) }], crashActor],
        figures: calm(u), cam, overlay: ov, step: 0 };
    }
    if (i === 1) {
      const k = sub(1, a), tau = a - subStart(1, k);
      if (k === 0) {
        // Inne i bilen: knappen for nødblink.
        const B = interior.BTN, cam = { from: interior.at(-.38, 1.33, .38 - .06 * ease(tau / 4)), to: interior.at(B.x - .05, B.y - .02, B.z), fov: mob ? 46 : 40 };
        return { world: 'interior', actors: [], cam, hazard: a > .2, overlay: [{ ring: { p: interior.at(B.x, B.y, B.z + .01), r: 56, dy: 0 }, alpha: ease((a - .2) / .4) }, { badge: { p: interior.at(B.x, B.y + .1, B.z), text: 'Nødblink', dot: C.tealLight }, alpha: ease((a - .3) / .4) }], step: 1 };
      }
      if (k === 1) {
        // Ute: alle blinklys blinker i takt. Føreren går ut med vesten på og går rundt fronten til skulderen.
        const q = sm((tau - .3) / 2.6), ds = mixv(STOP - 1, STOP + 3.2, q), doff = mixv(1.55, 4.6, sm((tau - 1.2) / 2.2));
        const cam = camRoad(STOP - 13, .2, 3.4, STOP + 6, 2.6, .9, fovD());
        return { world: 'curve', actors: [blueParked(tau + 10), crashActor], figures: [['driver', ds, doff, hd(ds) + (doff < 2.5 ? -1.2 : 0), 'walk', tau * 1.1], ...calm(u)], cam, overlay: [{ badge: { fig: 'driver', text: 'Refleksvest', dot: C.tealLight, dy: 2.3 }, alpha: ease((tau - .4) / .4) }], step: 1 };
      }
      // Inne i bilen: vesten i dørlomma.
      const Vv = interior.VEST, cam = { from: interior.at(-.2 - .05 * ease(tau / 4), 1.25, .55), to: interior.at(Vv.x + .05, Vv.y + .05, Vv.z - .05), fov: mob ? 50 : 42 };
      return { world: 'interior', actors: [], cam, hazard: true, overlay: [{ ring: { p: interior.at(Vv.x, Vv.y, Vv.z), r: 90, dy: 0 }, alpha: ease((tau - .2) / .4) }, { badge: { p: interior.at(Vv.x + .05, Vv.y + .3, Vv.z), text: 'Vesten i dørlomma', dot: C.tealLight }, alpha: ease((tau - .3) / .4) }], step: 1 };
    }
    if (i === 2) {
      const k = sub(2, a), tau = a - subStart(2, k);
      if (k === 0) {
        // Personen går bakover langs skulderen, mot trafikken, med trekanten holdt foran seg.
        const ps = STOP - 2 - 1.5 * Math.max(0, tau - .3), heading = hd(ps) + Math.PI;
        const cam = camRoad(ps - 8.5, 4.6, 1.9, ps + 2, 3.8, 1.1, mob ? 44 : 34);
        const tp = W0.road(ps - .45, 4.1, 0);
        return { world: 'curve', actors: [blueParked(tau + 20), crashActor], figures: [['driver', ps, 4.1, heading, 'carry', ps / 1.4], ...calm(u)],
          carried: true, props: [['triangle', (o, w) => { const a = handPos(figures.driver, 'L'), b = handPos(figures.driver, 'R'); o.position.copy(a).add(b).multiplyScalar(.5); o.position.y -= .42; o.rotation.y = heading + Math.PI; }]], cam,
          overlay: [{ badge: { fig: 'driver', text: 'Trekanten foran deg', dot: C.tealLight, dy: 2.4 }, alpha: ease((tau - 1.0) / .4) * (1 - ease((tau - 4.4) / .4)) }, { badge: { fig: 'driver', text: 'Gå mot trafikken', dot: C.tealLight, dy: 2.4 }, alpha: ease((tau - 4.6) / .4) }], step: 2 };
      }
      if (k === 1) {
        // Oversikt: trekanten står før svingen, i høyre hjulspor. En bil kommer og bremser i god tid.
        const ps = TRI + 3 + 1.2 * Math.max(0, tau - 2.5), back = tau > 2.5;
        const cam = mob ? camRoad(-75, 40, 48, 125, -8, 0, 46) : camRoad(-40, 70, 45, 120, -10, 0, 36);
        const uC = Math.max(0, a - S[3] + .3), sC = slowTo(uC, -70, 20, 5, .8, 4.5);
        const acts = [blueParked(tau + 30), crashActor]; if (a > S[3] - .3) acts.push(['silver', sC, R, { signal: 0 }]);
        return { world: 'curve', fog: [260, 900], actors: acts, figures: [['driver', back ? ps : TRI + 2.5, back ? 5.2 : 3.9, hd(TRI) + (back ? 0 : Math.PI), back ? 'walk' : 'stand', ps / 1.4], ...calm(u)],
          props: [['triangle', (o, w) => { const p = w.road(TRI, 2.55, 0); o.position.copy(p); o.rotation.y = hd(TRI) + Math.PI; o.scale.setScalar(3); snapToGround(o, w); }]], cam,
          overlay: [{ measure: [TRI, ACC, -14, 'ca. 190 m', .5, C.text], alpha: ease((tau - .6) / .5) }, { ring: { p: W0.road(TRI, 2.55, .8), r: 34, dy: 0 }, alpha: ease((tau - .3) / .4) }, { badge: { s: TRI, off: 2.55, y: 6, text: 'Trekanten', dot: '#e0242c' }, alpha: ease((tau - .3) / .4) },
            { badge: { s: ACC, off: 7, y: 4, text: 'Ulykken', dot: C.muted }, alpha: ease((tau - .3) / .4) }, ...(a > S[3] ? [{ badge: { actor: 'silver', text: 'Bremser i god tid', dot: C.tealLight, dy: 4 }, alpha: ease((a - S[3] - 1.5) / .4) }] : [])], step: 2 };
      }
      // Slå av tenningen: personen ved bilen i grøfta.
      const cam = camRoad(ACC - 9, 12.5, 3.0, ACC + 1, 7, .9, mob ? 42 : 32);
      return { world: 'curve', actors: [blueParked(tau + 40), crashActor], figures: [['driver', ACC - 1.6, 9.0, hd(ACC) - 1.9, 'reach', 0], ...calm(u)], cam,
        overlay: [{ badge: { fig: 'driver', text: 'Tenningen av', dot: C.tealLight, dy: 2.3 }, alpha: ease((tau - .4) / .4) }], step: 2 };
    }
    if (i === 3) {
      // Varsle: personen ringer 113 med telefonen på høyttaler.
      const ds = ACC - 8, doff = 9.6, heading = hd(ds) - 2.4;
      const cam = mob ? camRoad(ds - 5.5 - .15 * u, 6.2, 2.3, ACC + 2, 12.2, .8, 46) : camRoad(ds - 6.5 - .15 * u, 5.6, 2.3, ACC + 1, 12, .8, 36);
      const C2 = [S[1], 4.39, 5.47];
      const ic = [{ kind: 'pin', label: 'Hvor?', alpha: ease((a - C2[0] + .2) / .35) }, { kind: 'crash', label: 'Hva?', alpha: ease((a - C2[1] + .2) / .35) }, { kind: 'people', label: 'Hvor mange?', alpha: ease((a - C2[2] + .2) / .35) }];
      const ov = [];
      if (a < S[2] - .15) ov.push({ icons: ic }); else ov.push({ icons: [{ kind: 'speaker', label: 'Høyttaler', alpha: ease((a - S[2] + .15) / .35) }].map((x, k) => ({ ...x })) });
      ov.push({ badge: { fig: 'driver', text: '113', dot: '#dc2626', dy: 2.3 }, alpha: ease((a + .3) / .4) });
      return { world: 'curve', actors: [blueParked(u + 50), crashActor], figures: [['driver', ds, doff, heading, 'phone', 0], ...people()],
        props: [['phone', (o, w) => { o.position.copy(handPos(figures.driver, 'R')); o.rotation.set(-.6, heading, 0); }]], cam, overlay: ov, step: 3 };
    }
    if (i === 4) {
      // Hjelp: den stille først. Luftveier og pust. Teppe over. Ingen skader vises.
      const vs = VS, voff = VOFF, vh = VH;
      // Mål opp den skadde i samme stilling som tegnes: hode, bryst (ikke magen), skuldre og knær.
      const bodyPts = victimPoints(), hp = bodyPts.mouth, cp = bodyPts.chest;
      const axis = bodyPts.axis, side = V(axis.z, 0, -axis.x), kHead = Math.atan2(-side.x, -side.z);
      // Hjelperen kneler ved brystet, med hendene midt på brystet.
      const kp = kneelAt(cp.clone().add(side.clone().multiplyScalar(.55)), kHead, cp);
      const head = W0.road(vs, voff, 0), vy = surfaceAt(W0, head.x, head.z);
      const near = { from: cp.clone().add(side.clone().multiplyScalar(-3.6)).add(axis.clone().multiplyScalar(-1.2)).add(V(0, 1.9, 0)), to: cp.clone().add(V(0, -.1, 0)).add(side.clone().multiplyScalar(.3)), fov: mob ? 46 : 34 };
      const tpos = cp.clone().add(side.clone().multiplyScalar(2.6)).add(axis.clone().multiplyScalar(-3.0));
      const wide = { from: cp.clone().add(side.clone().multiplyScalar(-6.8)).add(axis.clone().multiplyScalar(-2.4)).add(V(0, 3.0, 0)), to: cp.clone().lerp(tpos, .45).add(V(0, .5, 0)), fov: mob ? 46 : 34 };
      // Først vidt bilde med begge de skadde, så inn til den stille.
      const kz = ease((a - S[1] + .9) / 1.4), cam = lerpCam(wide, near, kz);
      const ov = [];
      if (inS(0)) ov.push({ ring: { p: cp.clone().add(axis.clone().multiplyScalar(-.45)), r: 120, dy: 0 }, alpha: ease((a + .1) / .4) }, { badge: { p: cp.clone().add(V(0, 1.0, 0)), text: 'Gir ikke lyd', dot: C.tealLight }, alpha: ease((a - .2) / .4) }, { badge: { fig: 'talker', text: 'Snakker', dot: C.muted, dy: 2.2 }, alpha: ease((a + .2) / .4) * (1 - ease((kz - .2) / .15)) });
      if (inS(1)) ov.push({ ring: { p: hp, r: 34, dy: 0 } }, { badge: { p: hp.clone().add(V(0, .6, 0)), text: 'Luftveier', dot: C.tealLight } }, { ring: { p: cp, r: 40, dy: 0 } }, { badge: { p: cp.clone().add(axis.clone().multiplyScalar(-.55)).add(V(0, -.1, 0)), text: 'Pust', dot: C.tealLight } });
      if (inS(2)) ov.push({ ring: { p: cp, r: 46, dy: 0 } }, { badge: { p: cp.clone().add(V(0, 1.1, 0)), text: '30 trykk · 2 innblåsinger', dot: C.tealLight } });
      if (inS(4)) ov.push({ badge: { p: cp.clone().add(V(0, 1.0, 0)), text: 'Flytt bare ved fare', dot: C.tealLight }, alpha: ease((a - S[4]) / .4) });
      const bk = sm((a - S[3] + .2) / 1.4);
      const pr = from(3) ? [['blanket', (o, w) => placeBlanket(o, bodyPts, bk)]] : [];
      return { world: 'curve', actors: [blueParked(u + 60), crashActor], figures: [...people(tpos, Math.atan2(cp.x - tpos.x, cp.z - tpos.z)).filter(f => f[0] !== 'talker' || kz < .35), ['driver', kp, null, kHead, 'kneel', 0]],
        props: pr, cam, overlay: ov, step: 4 };
    }
    // i === 5: Bli på stedet. Ambulansen kommer og bruker plassen. Navn, adresse og bilnummer. Bilder.
    const uA = u - .5, sAf = q => cruiseStop(q, 64, 20, 10, 5), sA = sAf(uA), lA = q => { const s2 = sAf(q); return R - 1.6 * sm((s2 - 160) / 18) * (1 - sm((s2 - 196) / 16)) + .6 * sm((s2 - 196) / 16); };
    const rise = ease(u / 6);
    const cam = mob ? camRoad(ACC - 30 - 4 * rise, -6.5, 4.5 + 2 * rise, ACC - 2, 6.5, .5, 44) : camRoad(ACC - 32 - 4 * rise, -8, 4.5 + 2 * rise, ACC - 4, 6.5, .5, 34);
    const ov = [];
    if (inS(1)) ov.push({ badge: { fig: 'talker', text: 'Navn · adresse · bilnummer', dot: C.tealLight, dy: 2.4 }, alpha: ease((a - S[1] + .1) / .4) });
    if (from(2)) ov.push({ badge: { actor: 'crash', text: 'Bilder · skademelding', dot: C.tealLight, dy: 2.6 }, alpha: ease((a - S[2] + .1) / .4) });
    return { world: 'curve', actors: [blueParked(u + 70), crashActor, ['ambulance', sA, lA(uA), { turn: steer(lA, sAf, uA), sirens: true }]],
      figures: [['victim', VS, VOFF, VH, 'lie', 0], ['talker', ACC - 1.5, 12.2, hd(ACC) + 1.6, 'stand', 0], ['driver', ACC - 1.0, 11.2, hd(ACC) - 1.5, 'stand', 0]],
      props: [['blanket', (o, w) => placeBlanket(o, victimPoints(), 1)]], cam, overlay: ov, step: 'all' };
  }

  const chapterOf = t => { let i = 0; while (i < CHS.length - 1 && t >= CHS[i + 1].start) i++; return i; };
  const stateAt = (i, t) => { const ch = CHS[i]; return chapterState(i, t - ch.start, t - ch.speech); };
  const marks = CHS.slice(1).map(c => c.start / DURATION);
  window.setFilmFormat = f => { window.setFormat(f); return { width: L.W, height: L.H }; };
  window.chapterTimes = CHS.map(c => ({ chapter: c.chapter, title: c.title, start: c.start }));
  window.filmDuration = DURATION;

  function posterPanel(lines) {
    const { W, H, sceneH, pad } = L; const len = DURATION; ctx.save(); ctx.fillStyle = C.white; ctx.fillRect(0, sceneH, W, H - sceneH); ctx.fillStyle = C.border; ctx.fillRect(0, sceneH, W, 2);
    ctx.font = `600 ${L.label}px ${FONT}`; ctx.fillStyle = C.teal; ctx.textAlign = 'left'; ctx.fillText(`FORKLARINGSFILM · ${Math.floor(len / 60)}:${String(Math.round(len % 60)).padStart(2, '0')}`, pad, sceneH + 74);
    ctx.textAlign = 'right'; ctx.fillStyle = C.text; ctx.font = `700 ${L.label}px ${FONT}`; ctx.fillText('teori-test.no', W - pad, sceneH + 74);
    ctx.textAlign = 'left'; ctx.font = `700 ${L.font}px ${FONT}`; lines.forEach((t, i) => ctx.fillText(t, pad, sceneH + 74 + 34 + L.font + i * L.line));
    const cx = W - pad - 70, cy = sceneH + 74 + 34 + L.font * .6 + L.line * .5; ctx.shadowColor = 'rgba(13,148,136,.45)'; ctx.shadowBlur = 24; ctx.fillStyle = C.teal; ctx.beginPath(); ctx.arc(cx, cy, 70, 0, 7); ctx.fill();
    ctx.shadowColor = 'transparent'; ctx.fillStyle = C.white; ctx.beginPath(); ctx.moveTo(cx - 20, cy - 32); ctx.lineTo(cx + 36, cy); ctx.lineTo(cx - 20, cy + 32); ctx.closePath(); ctx.fill(); ctx.restore();
  }
  // Plakat: oversikten fra kapittel 3 (trekanten før svingen) med tittelen i infofeltet.
  window.renderShot = function () { const t = CHS[2].speech + CHS[2].sentences[3] - .4; drawScene(stateAt(2, t), t); stepsBar(2); posterPanel(POSTER); window.infoBounds = []; return canvas; };
  window.shotIds = ['plakat'];

  window.renderFrame = function (seconds) {
    const t = clamp(Number(seconds) || 0, 0, DURATION), end = t >= endStart;
    const i = chapterOf(Math.min(t, endStart - 1e-3)), ch = CHS[i], u = t - ch.start, a = t - ch.speech;
    const cut = cuts.find(c => t >= c.t && t < c.t + FADE);
    if (cut) { const [pi, pt] = cut.prev; drawScene(stateAt(pi, pt), pt); buffer.width = L.W; buffer.height = L.sceneH; bctx.drawImage(canvas, 0, 0); }
    const st = chapterState(i, Math.min(u, ch.end - ch.start), Math.min(a, ch.end - ch.speech)), w = drawScene(st, t);
    if (cut) { ctx.save(); ctx.globalAlpha = 1 - ease((t - cut.t) / FADE); ctx.drawImage(buffer, 0, 0); ctx.restore(); }
    stepsBar(st.step);
    if (end) summaryCard(ease((t - endStart - .2) / .6));
    const S = ch.sentences; let k = 0; S.forEach((s, j) => { if (a >= s - .15) k = j; });
    const lines = end ? END_LINES : POINTS[i][k], since = end ? t - endStart : k === 0 ? u : a - (S[k] - .15);
    const bounds = infoPanel(ctx, L, { chapter: i + 1, total: CHS.length, title: ch.title, lines, progress: t / DURATION, chapterMarks: marks, alpha: clamp(since / .25, 0, 1) });
    window.infoLayout = { bounds: bounds.map(b => ({ text: b.t, x: b.x, y: b.y, width: b.w, height: b.h, fontSize: L.font })), sceneHeight: L.sceneH, width: L.W, height: L.H, point: lines.join(' ') };
    const scr = v => { const p = v.position.clone().add(V(0, .75, 0)).project(camera); return [(p.x + 1) * L.W / 2, (1 - p.y) * L.sceneH / 2]; };
    window.frameInfo = { t, chapter: i + 1, title: ch.title, speechTime: a, environment: w.name, endCard: end, point: lines.join(' '), duration: DURATION,
      blueScreen: actors.blue.o.visible ? scr(actors.blue.o) : null, blueS: (st.actors.find(x => x[0] === 'blue') || [])[1] ?? null };
    return canvas;
  };
  // Kontroll: hvor langt over/under bakken står personer, biler og trekanten (meter).
  window.auditGround = function (t) { window.renderFrame(t); const out = []; const w = Object.values(worlds).find(v => v.root.visible); if (!w || w === interior) return out;
    const check = (name, o, kind) => { if (!o.visible) return; const { pen, lift } = groundGap(o, w); out.push({ name, kind, under: +pen.toFixed(3), over: +(-pen).toFixed(3) }); };
    Object.entries(figures).forEach(([k, f]) => check(k, f.o, 'person')); Object.entries(actors).forEach(([k, a]) => check(k, a.o, 'kjøretøy')); if (!window.__carried) check('trekant', triangle.o, 'trekant'); return out; };
  window.renderFrame(.5);
  window.ready = true; window.animationReady = true;
}
init().catch(e => { window.initError = window.animationError = String(e && e.stack || e); console.error(e); });

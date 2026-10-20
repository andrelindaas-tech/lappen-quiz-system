import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { assets } from './assets-data.js';
import { C, FONT, LAYOUT, infoPanel, chapterChip, pill, marker, rr } from './style.js';
import { SHOTS, CHAPTERS } from './shots.js';

// Storyboard-motor for «Forbikjøring». Samme prinsipp som veimerkingsfilmen:
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
  function world(name, { length = 900, elev = () => 0, center = () => 0, junction = null, town = false, centerline = s => 'dash', seed = 1, span = 200 } = {}) {
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
    const groundAt = (x, s) => { const off = x - center(s), flat = ease((Math.abs(off) - 6.5) / 14);
      return elev(s) - .1 + flat * (.6 + .9 * Math.sin(s * .021 + x * .017) + .5 * Math.sin(x * .05 - s * .011)) - (town ? flat * .5 : 0); };
    const pos = [], col = [], cell = 4;
    for (let s = S0 - 40; s < S1 + 60; s += cell) for (let x = -span; x < span; x += cell) {
      for (const tri of [[[x, s], [x + cell, s], [x, s + cell]], [[x + cell, s], [x + cell, s + cell], [x, s + cell]]]) {
        const [cx, cs] = tri[0], n = .5 * Math.sin(cx * .03 + cs * .011) + .5 * Math.sin(cs * .027 - cx * .019), dist = Math.abs(cx - center(cs));
        // Enger, kornåker og mørkere skogbunn i store flater.
        let rgb = n > .45 && dist > 18 ? [1.16, 1.06, .74] : n < -.45 && dist > 16 ? [.78, .88, .78] : [1, 1, 1];
        if (dist > 6 && dist < 8.5) rgb = [rgb[0] * .88, rgb[1] * .92, rgb[2] * .86];
        const sh = .95 + rnd() * .1;
        for (const [xx, ss] of tri) { pos.push(xx, groundAt(xx, ss), -ss); col.push(sh * rgb[0], sh * rgb[1], sh * rgb[2]); } } }
    const tg = new THREE.BufferGeometry(); tg.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3)); tg.setAttribute('color', new THREE.Float32BufferAttribute(col, 3)); tg.computeVertexNormals();
    mesh(tg, std('#8fae62', { flatShading: true, vertexColors: true }), root);
    const dummy = new THREE.Object3D();
    // Gran og løvtrær i klynger, holdt unna vegen og sidevegen.
    const free = (x, s) => Math.abs(x - center(s)) > 11 && !(junction && x > 0 && Math.abs(s - junction.s) < 16) && !(town && Math.abs(x - center(s)) < 22);
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
    for (let i = 0; i < 7; i++) { const cx = -620 + i * 210 + rnd() * 80, cz = -(S1 + 300 + rnd() * 260);
      for (let k = 0; k < 4; k++) { const h = 70 + rnd() * (k ? 120 : 200), r = 80 + rnd() * 110, x = cx + (rnd() - .5) * 260, z = cz - rnd() * 140, tone = new THREE.Color().setHSL(.56 + rnd() * .04, .14 + rnd() * .08, .5 + rnd() * .1);
        const g = new THREE.ConeGeometry(r, h, 6 + Math.floor(rnd() * 3)); g.rotateY(rnd() * 3); g.scale(1 + rnd() * .3, 1, 1 + rnd() * .3);
        const m = mesh(g, std(tone, { flatShading: true }), root); m.position.set(x, h / 2 - 14, z); mountains.push(m);
        if (h > 160) { const cap = mesh(new THREE.ConeGeometry(r * .3, h * .28, 6), std('#f1f5f6', { flatShading: true }), root); cap.scale.copy(m.scale); cap.geometry.rotateY(rnd() * 3); cap.position.set(x, h - 14 - h * .14 + .4, z); mountains.push(cap); } } }
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
    return { name, root, road, slope, elev, groundAt, half, sign, center, mountains, props };
  }

  const worlds = {
    straight: world('Lang rett strekning', { length: 1700, seed: 3, span: 820, elev: s => 1.2 * Math.sin(s * .004) }),
    hill: world('Bakketopp', { length: 700, seed: 5, elev: s => 13 * Math.exp(-(((s - 240) / 70) ** 2)), centerline: s => s > 150 && s < 300 ? 'solid' : 'dash' }),
    junction: world('Kryss', { length: 700, seed: 9, junction: { s: 190 }, centerline: s => s > 120 && s < 215 ? 'warning' : 'dash' }),
    town: world('Gangfelt', { length: 500, seed: 11, town: { crossing: 140 } }),
  };
  worlds.straight.sign(signs.s362.t, 4.4, 30, 1.0, 1.0);

  // ---------- Kjøretøy og personer ----------
  const gltf = await new GLTFLoader().parseAsync(Uint8Array.from(atob(assets.car), c => c.charCodeAt(0)).buffer, '');
  function makeCar(color) {
    const o = gltf.scene.clone(true), wheels = [];
    o.traverse(m => { if (m.name.startsWith('Hjul_')) wheels.push(m); if (m.isMesh) { m.castShadow = m.receiveShadow = true; m.material = m.material.clone(); if (m.material.name === 'Lakk') m.material.color.set(color); } });
    const signals = []; for (const side of [-1, 1]) for (const z of [-1.85, 1.85]) { const l = new THREE.Mesh(new THREE.BoxGeometry(.2, .13, .06), basic('#ffb629')); l.position.set(side * .8, .66, z); o.add(l); signals.push({ l, side }); }
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
    const signals = []; for (const side of [-1, 1]) for (const z of [9.0, -8.45]) { const l = mesh(new THREE.BoxGeometry(.22, .16, .06), basic('#ffb629'), o); l.position.set(side * 1.0, z > 0 ? 1.25 : 1.5, z); signals.push({ l, side }); }
    scene.add(o); return { o, wheels, signals, len: 18 };
  }
  function makePerson(color) {
    const g = new THREE.Group(); const body = mesh(new THREE.CapsuleGeometry(.23, .75, 4, 10), std(color), g, true); body.position.y = 1.05;
    const legs = mesh(new THREE.CapsuleGeometry(.14, .55, 4, 8), std('#2c3440'), g, true); legs.position.y = .45; legs.scale.x = 1.6;
    const head = mesh(new THREE.SphereGeometry(.16, 14, 10), std('#e8c4a2'), g, true); head.position.y = 1.68; scene.add(g); return { o: g };
  }
  const blue = makeCar('#1689c9'), red = makeCar('#c4473b'), silver = makeCar('#b9c2c6'), white2 = makeCar('#e9ecec'), truck = makeTruck(), walker = makePerson('#e07a2f');
  const ghostMat = new THREE.MeshBasicMaterial({ color: C.tealLight, transparent: true, opacity: .55, depthTest: false, toneMapped: false });
  function ghostOf(v) { const g = v.o.clone(true); g.traverse(m => { if (m.isMesh) { m.material = ghostMat; m.renderOrder = 999; m.castShadow = false; } }); g.visible = false; scene.add(g); return g; }
  const ghosts = { red: ghostOf(red), walker: ghostOf(walker), silver: ghostOf(silver) };
  const actors = { blue, red, silver, white2, truck, walker };

  function place(v, w, s, lane, { reverse = false, signal = 0, t = 0, turn = 0 } = {}) {
    v.o.visible = true; const p = w.road(s, lane, .02); v.o.position.copy(p);
    const pitch = Math.atan((w.elev(s + 1) - w.elev(s - 1)) / 2);
    v.o.rotation.set(0, 0, 0); v.o.rotation.order = 'YXZ'; v.o.rotation.y = (reverse ? 0 : Math.PI) - Math.atan(w.slope(s)) - turn; v.o.rotation.x = reverse ? pitch : -pitch;
    (v.wheels || []).forEach(o => o.rotation.x = s / .34);
    (v.signals || []).forEach(({ l, side }) => l.visible = signal !== 0 && side === -signal && Math.floor(t * 2.4) % 2 === 0);
  }

  // ---------- 2D-grafikk over scenen ----------
  const proj = (w, s, off, y = .1) => { const p = w.road(s, off, y).project(camera); return [(p.x + 1) * L.W / 2, (1 - p.y) * L.sceneH / 2, p.z]; };
  const projV = v => { const p = v.clone().project(camera); return [(p.x + 1) * L.W / 2, (1 - p.y) * L.sceneH / 2, p.z]; };
  function zone(w, a, b, off, width, color, fill) {
    const pts = []; const n = Math.max(2, Math.ceil((b - a) / 4));
    for (let i = 0; i <= n; i++) pts.push(proj(w, a + (b - a) * i / n, off - width / 2));
    for (let i = n; i >= 0; i--) pts.push(proj(w, a + (b - a) * i / n, off + width / 2));
    if (pts.some(p => p[2] > 1)) return;
    ctx.save(); ctx.beginPath(); pts.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y)); ctx.closePath();
    ctx.fillStyle = fill; ctx.fill(); ctx.lineWidth = 5; ctx.lineJoin = 'round'; ctx.strokeStyle = 'rgba(255,255,255,.9)'; ctx.stroke(); ctx.lineWidth = 3; ctx.strokeStyle = color; ctx.stroke(); ctx.restore();
  }
  function measure(w, a, b, off, label, color = C.text) {
    const A = proj(w, a, off, .3), B = proj(w, b, off, .3); if (A[2] > 1 || B[2] > 1) return;
    ctx.save(); ctx.lineCap = 'round'; ctx.strokeStyle = 'rgba(255,255,255,.95)'; ctx.lineWidth = 9; ctx.beginPath(); ctx.moveTo(A[0], A[1]); ctx.lineTo(B[0], B[1]); ctx.stroke();
    ctx.strokeStyle = color; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(A[0], A[1]); ctx.lineTo(B[0], B[1]); ctx.stroke();
    const ang = Math.atan2(B[1] - A[1], B[0] - A[0]) + Math.PI / 2;
    for (const P of [A, B]) { ctx.beginPath(); ctx.moveTo(P[0] - 16 * Math.cos(ang), P[1] - 16 * Math.sin(ang)); ctx.lineTo(P[0] + 16 * Math.cos(ang), P[1] + 16 * Math.sin(ang)); ctx.stroke(); }
    ctx.restore(); pill(ctx, (A[0] + B[0]) / 2, (A[1] + B[1]) / 2, label, { size: 32 });
  }
  function outlineBox(w, s0, s1, off, width, color = C.tealLight) { zone(w, s0, s1, off, width, color, 'rgba(20,184,166,.0)'); }

  window.setFormat = f => { L = LAYOUT[f]; canvas.width = L.W; canvas.height = L.H; renderer.setSize(L.W, L.sceneH); camera.aspect = L.W / L.sceneH; camera.fov = f === 'mobile' ? 46 : 34; camera.updateProjectionMatrix(); };
  window.setFormat('mobile');

  // Tegn ett storyboardbilde ut fra en «shot»-beskrivelse.
  window.renderShot = function (id) {
    const sh = SHOTS.find(x => x.id === id); if (!sh) throw Error('Ukjent shot ' + id);
    const w = worlds[sh.world]; Object.values(worlds).forEach(v => v.root.visible = false); w.root.visible = true;
    Object.values(actors).forEach(a => a.o.visible = false); Object.values(ghosts).forEach(g => g.visible = false);
    w.mountains.forEach(m => m.visible = !sh.noMountains);
    if (!window.__sky) window.__sky = scene.background; scene.background = sh.noMountains ? new THREE.Color('#dbe7e8') : window.__sky;
    scene.fog.near = sh.fog?.[0] ?? 160; scene.fog.far = sh.fog?.[1] ?? 620;
    for (const [name, s, lane, opt] of sh.actors) place(actors[name], w, s, lane, { t: 0.2, ...(opt || {}) });
    for (const [name, s, lane, opt] of (sh.ghosts || [])) { const g = ghosts[name]; place({ o: g }, w, s, lane, opt || {}); g.visible = true; }
    const c = sh.cam; const from = w.road(c.s, c.x ?? 0, c.h), to = w.road(c.look, c.lx ?? 0, c.ly ?? .5); camera.position.copy(from); camera.lookAt(to);
    camera.fov = c.fov ?? (L.H > L.W ? 46 : 34); camera.updateProjectionMatrix();
    const focus = w.road(c.sunAt ?? c.look, 0, 0); sun.position.copy(focus).add(V(-45, 70, 30)); sun.target.position.copy(focus);
    const big = c.h > 60; Object.assign(sun.shadow.camera, big ? { left: -260, right: 260, top: 260, bottom: -260, far: 600 } : { left: -60, right: 60, top: 60, bottom: -60, far: 220 }); sun.shadow.camera.updateProjectionMatrix();
    camera.updateMatrixWorld(); renderer.render(scene, camera);
    ctx.reset(); ctx.drawImage(renderer.domElement, 0, 0, L.W, L.sceneH);
    { const g = ctx.createRadialGradient(L.W / 2, L.sceneH * .5, Math.min(L.W, L.sceneH) * .5, L.W / 2, L.sceneH * .5, Math.max(L.W, L.sceneH) * .9); g.addColorStop(0, 'rgba(15,23,42,0)'); g.addColorStop(1, 'rgba(15,23,42,.14)'); ctx.fillStyle = g; ctx.fillRect(0, 0, L.W, L.sceneH); }
    for (const o of (sh.overlay || [])) {
      if (o.zone) zone(w, ...o.zone);
      if (o.measure) measure(w, ...o.measure);
      if (o.marker) { const [x, y] = o.marker.actor ? projV(actors[o.marker.actor].o.position.clone().add(V(0, o.marker.dy ?? 3, 0))) : proj(w, o.marker.s, o.marker.off, o.marker.y ?? 1.5); marker(ctx, x + (o.marker.dx ?? 0), y + (o.marker.dy2 ?? 0), o.marker.n, o.marker.on !== false); }
      if (o.badge) { const a = o.badge.actor ? actors[o.badge.actor].o.position.clone().add(V(0, o.badge.dy ?? 3.2, 0)) : w.road(o.badge.s, o.badge.off, o.badge.y ?? 2); const [x, y] = projV(a); pill(ctx, x + (o.badge.dx ?? 0), y, o.badge.text, { dot: o.badge.dot, size: o.badge.size ?? 30 }); }
      if (o.corner) { const p = pill(ctx, L.W - 32, 32 + 29 + (o.corner.row ?? 0) * 78, o.corner.text, { size: 32, dot: o.corner.dot, align: 'right' }); }
      if (o.dot) { const [x, y] = projV(actors[o.dot.actor].o.position); ctx.save(); ctx.fillStyle = C.white; ctx.beginPath(); ctx.arc(x, y, 17, 0, 7); ctx.fill(); ctx.fillStyle = o.dot.color; ctx.beginPath(); ctx.arc(x, y, 11, 0, 7); ctx.fill(); ctx.restore(); }
      if (o.note) { ctx.save(); ctx.font = `500 24px ${FONT}`; ctx.fillStyle = 'rgba(255,255,255,.92)'; ctx.textAlign = 'right'; ctx.shadowColor = 'rgba(0,0,0,.4)'; ctx.shadowBlur = 6; ctx.fillText(o.note, L.W - 32, L.sceneH - 26); ctx.restore(); }
    }
    const ch = CHAPTERS[sh.chapter - 1];
    if (sh.profile) {
      // Skjematisk profil «sett fra siden»: bakketopp, de to bilene og siktlinjen.
      const q = sh.profile, iw = L.H > L.W ? 500 : 600, ih = Math.round(iw * .5), ix = L.W - iw - 32, iy = 32;
      const sx = s2 => ix + 24 + (s2 - q.from) / (q.to - q.from) * (iw - 48), ymax = 13, sy = h => iy + ih - 34 - h / ymax * (ih - 150);
      ctx.save(); ctx.shadowColor = 'rgba(15,23,42,.28)'; ctx.shadowBlur = 22; ctx.shadowOffsetY = 5; ctx.fillStyle = C.white; rr(ctx, ix, iy, iw, ih, 20); ctx.fill(); ctx.shadowColor = 'transparent';
      ctx.font = `600 24px ${FONT}`; ctx.fillStyle = C.muted; ctx.fillText('Sett fra siden', ix + 22, iy + 36);
      ctx.beginPath(); ctx.moveTo(sx(q.from), iy + ih - 18); for (let s2 = q.from; s2 <= q.to; s2 += 2) ctx.lineTo(sx(s2), sy(w.elev(s2))); ctx.lineTo(sx(q.to), iy + ih - 18); ctx.closePath();
      ctx.fillStyle = '#9dbb74'; ctx.fill(); ctx.beginPath(); for (let s2 = q.from; s2 <= q.to; s2 += 2) ctx[s2 === q.from ? 'moveTo' : 'lineTo'](sx(s2), sy(w.elev(s2))); ctx.lineWidth = 7; ctx.strokeStyle = '#4b5258'; ctx.stroke();
      const car = (s2, col, dir) => { const x = sx(s2), y = sy(w.elev(s2)), a = Math.atan2(sy(w.elev(s2 + 2)) - sy(w.elev(s2 - 2)), sx(s2 + 2) - sx(s2 - 2)); ctx.save(); ctx.translate(x, y); ctx.rotate(a); ctx.fillStyle = col; rr(ctx, -20, -20, 40, 15, 5); ctx.fill(); rr(ctx, -11 * dir - 3, -30, 20, 12, 4); ctx.fill(); ctx.restore(); return [x, y]; };
      const eyeS = q.you, crestS = q.crest, ex = sx(eyeS), ey = sy(w.elev(eyeS) + 1.2), cx = sx(crestS), cy = sy(w.elev(crestS)) - 2;
      const k = (cy - ey) / (cx - ex), xEnd = ix + iw - 20;
      ctx.setLineDash([12, 9]); ctx.lineWidth = 4; ctx.strokeStyle = C.teal; ctx.beginPath(); ctx.moveTo(ex, ey); ctx.lineTo(xEnd, ey + k * (xEnd - ex)); ctx.stroke(); ctx.setLineDash([]);
      const [bx, by] = car(q.you, '#1689c9', 1), [rx, ry] = car(q.other, '#c4473b', -1);
      ctx.globalAlpha = .9; ctx.fillStyle = C.redSoft; ctx.beginPath(); ctx.moveTo(cx, cy + 2); ctx.lineTo(xEnd, ey + k * (xEnd - ex)); ctx.lineTo(xEnd, iy + ih - 18); ctx.lineTo(sx(q.to), sy(w.elev(q.to))); for (let s2 = q.to; s2 >= crestS; s2 -= 2) ctx.lineTo(sx(s2), sy(w.elev(s2))); ctx.closePath(); ctx.fill(); ctx.globalAlpha = 1;
      ctx.restore();
      pill(ctx, bx, by - 58, 'Du', { size: 22, dot: '#1689c9' }); pill(ctx, rx, ry - 58, 'Møtende', { size: 22, dot: '#c4473b' });
      ctx.save(); ctx.font = `600 22px ${FONT}`; ctx.fillStyle = C.teal; ctx.textAlign = 'right'; ctx.fillText('Siktlinjen din', ix + iw - 22, iy + 36); ctx.fillStyle = C.red; ctx.textAlign = 'center'; ctx.fillText('Du ser ikke hit', (cx + ix + iw) / 2 + 30, iy + ih - 70); ctx.restore();
    }
    if (!sh.play) chapterChip(ctx, L, sh.chapter, CHAPTERS.length, ch.title);
    const marks = []; let acc = 0; const tot = CHAPTERS.reduce((a, c) => a + c.sec, 0); for (const c of CHAPTERS.slice(0, -1)) { acc += c.sec; marks.push(acc / tot); }
    const before = CHAPTERS.slice(0, sh.chapter - 1).reduce((a, c) => a + c.sec, 0);
    if (sh.play) {
      // Plakat: tittel og avspillingsknapp i infofeltet, aldri oppå motivet.
      const { W, H, sceneH, pad } = L; ctx.save(); ctx.fillStyle = C.white; ctx.fillRect(0, sceneH, W, H - sceneH); ctx.fillStyle = C.border; ctx.fillRect(0, sceneH, W, 2);
      ctx.font = `600 ${L.label}px ${FONT}`; ctx.fillStyle = C.teal; ctx.textAlign = 'left'; ctx.fillText('FORKLARINGSFILM · 1:45', pad, sceneH + 74);
      ctx.textAlign = 'right'; ctx.fillStyle = C.text; ctx.font = `700 ${L.label}px ${FONT}`; ctx.fillText('teori-test.no', W - pad, sceneH + 74);
      ctx.textAlign = 'left'; ctx.font = `700 ${L.font}px ${FONT}`; sh.play.forEach((t, i) => ctx.fillText(t, pad, sceneH + 74 + 34 + L.font + i * L.line));
      const cx = W - pad - 70, cy = sceneH + 74 + 34 + L.font * .6 + L.line * .5; ctx.shadowColor = 'rgba(13,148,136,.45)'; ctx.shadowBlur = 24; ctx.fillStyle = C.teal; ctx.beginPath(); ctx.arc(cx, cy, 70, 0, 7); ctx.fill();
      ctx.shadowColor = 'transparent'; ctx.fillStyle = C.white; ctx.beginPath(); ctx.moveTo(cx - 20, cy - 32); ctx.lineTo(cx + 36, cy); ctx.lineTo(cx - 20, cy + 32); ctx.closePath(); ctx.fill(); ctx.restore();
      window.infoBounds = [];
    } else window.infoBounds = infoPanel(ctx, L, { chapter: sh.chapter, total: CHAPTERS.length, title: ch.title, lines: sh.text, progress: (before + ch.sec * (sh.at ?? .5)) / tot, chapterMarks: marks });
    return canvas;
  };
  window.shotIds = SHOTS.map(s => s.id);
  window.ready = true;
}
init().catch(e => { window.initError = String(e && e.stack || e); console.error(e); });

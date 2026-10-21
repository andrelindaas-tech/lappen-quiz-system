import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { assets } from './assets-data.js';
import { C, FONT, LAYOUT, infoPanel, chapterChip, pill, marker, rr } from './style.js';
import { SHOTS, CHAPTERS } from './shots.js';
import { POINTS, END_LINES, SUMMARY, MIRROR_LINES, CLOSE_LINES } from './information.js';
import timing from './timing.json';

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
    return { name, root, road, slope, elev, groundAt, half, sign, center, mountains, props };
  }

  const worlds = {
    straight: world('Lang rett strekning', { length: 1700, seed: 3, span: 820, centerline: s => s >= 1300 && s < 1520 ? 'solid' : s >= 1216 && s < 1300 ? 'warning' : 'dash', elev: s => 1.2 * Math.sin(s * .004) }),
    hill: world('Bakketopp', { length: 700, seed: 5, elev: s => 13 * Math.exp(-(((s - 240) / 70) ** 2)), centerline: s => s > 150 && s < 300 ? 'solid' : s > 96 && s <= 150 ? 'warning' : 'dash' }),
    junction: world('Kryss', { length: 700, seed: 9, junction: { s: 190 }, centerline: s => s > 120 && s < 215 ? 'warning' : 'dash' }),
    town: world('Gangfelt', { length: 500, seed: 11, town: { crossing: 140 } }),
  };
  worlds.straight.sign(signs.s362.t, 4.4, 30, 1.0, 1.0);
  worlds.straight.sign(signs.s334.t, 4.4, 1296, 1.0, 1.0);
  worlds.straight.sign(signs.s362.t, 4.4, 742, 1.0, 1.0);

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
  function makePerson(color) {
    const g = new THREE.Group(); const body = mesh(new THREE.CapsuleGeometry(.23, .75, 4, 10), std(color), g, true); body.position.y = 1.05;
    const legs = mesh(new THREE.CapsuleGeometry(.14, .55, 4, 8), std('#2c3440'), g, true); legs.position.y = .45; legs.scale.x = 1.6;
    const head = mesh(new THREE.SphereGeometry(.16, 14, 10), std('#e8c4a2'), g, true); head.position.y = 1.68; scene.add(g); return { o: g };
  }
  const blue = makeCar('#1689c9'), red = makeCar('#c4473b'), silver = makeCar('#b9c2c6'), white2 = makeCar('#e9ecec'), truck = makeTruck(), walker = makePerson('#e07a2f');
  const ghostMat = new THREE.MeshBasicMaterial({ color: C.tealLight, transparent: true, opacity: .55, depthTest: false, toneMapped: false });
  const ghostStrong = new THREE.MeshBasicMaterial({ color: '#0fb5a3', transparent: true, opacity: .92, depthTest: false, toneMapped: false });
  function ghostOf(v, mat = ghostMat) { const g = v.o.clone(true); g.traverse(m => { if (m.isMesh) { m.material = mat; m.renderOrder = 999; m.castShadow = false; } }); g.visible = false; scene.add(g); return g; }
  const ghosts = { red: ghostOf(red), walker: ghostOf(walker, ghostStrong), silver: ghostOf(silver) };
  const actors = { blue, red, silver, white2, truck, walker };

  function place(v, w, s, lane, { reverse = false, signal = 0, t = 0, turn = 0 } = {}) {
    v.o.visible = true; const p = w.road(s, lane, .02); v.o.position.copy(p);
    // Lange kjøretøy: stigning mellom for- og bakaksel, så ingen hjul henger i lufta.
    const half = v.len > 10 ? 7.8 : 1.3, ef = w.elev(s + half), eb = w.elev(s - half), pitch = Math.atan((ef - eb) / (2 * half));
    if (v.len > 10) v.o.position.y = Math.min(ef, eb) + (Math.max(ef, eb) - Math.min(ef, eb)) * .5 + .02 - Math.max(0, (ef + eb) / 2 - w.elev(s)) * 0;
    v.o.rotation.set(0, 0, 0); v.o.rotation.order = 'YXZ'; v.o.rotation.y = (reverse ? 0 : Math.PI) - Math.atan(w.slope(s)) - turn; v.o.rotation.x = reverse ? pitch : -pitch;
    (v.wheels || []).forEach(o => o.rotation.x = s / .34);
    (v.signals || []).forEach(({ l, side }) => l.visible = signal !== 0 && side === -signal && (t * 1.5) % 1 < .55);
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
    ctx.font = `600 30px ${FONT}`; ctx.fillStyle = C.teal; ctx.textBaseline = 'alphabetic'; ctx.fillText('HUSK DETTE', cx + 48, cy + 74);
    SUMMARY.forEach((txt, i) => { const y = cy + 140 + i * lh; ctx.fillStyle = C.teal; ctx.beginPath(); ctx.arc(cx + 66, y - 13, 17, 0, 7); ctx.fill();
      ctx.strokeStyle = C.white; ctx.lineWidth = 4; ctx.lineCap = 'round'; ctx.beginPath(); ctx.moveTo(cx + 58, y - 13); ctx.lineTo(cx + 64, y - 6); ctx.lineTo(cx + 75, y - 20); ctx.stroke();
      ctx.fillStyle = C.text; ctx.font = `500 ${mob ? 40 : 38}px ${FONT}`; ctx.fillText(txt, cx + 104, y); });
    ctx.restore();
  }

  // Tegn scenen (3D + markeringer) for en tilstand. Samme beskrivelse som storyboard-«shots».
  function drawScene(sh, t = .2, target = ctx) {
    const w = worlds[sh.world]; Object.values(worlds).forEach(v => v.root.visible = false); w.root.visible = true;
    Object.values(actors).forEach(a => a.o.visible = false); Object.values(ghosts).forEach(g => g.visible = false);
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
      if (o.ring) ring(o.ring.ghost ? ghosts[o.ring.ghost] : actors[o.ring.actor].o, o.ring.r, o.ring.dy);
      if (o.marker) { const [x, y] = o.marker.actor ? projV(actors[o.marker.actor].o.position.clone().add(V(0, o.marker.dy ?? 3, 0))) : proj(w, o.marker.s, o.marker.off, o.marker.y ?? 1.5); marker(ctx, x + (o.marker.dx ?? 0), y + (o.marker.dy2 ?? 0), o.marker.n, o.marker.on !== false); }
      if (o.badge) { const a = o.badge.actor ? actors[o.badge.actor].o.position.clone().add(V(0, o.badge.dy ?? 3.2, 0)) : o.badge.ghost ? ghosts[o.badge.ghost].position.clone().add(V(0, o.badge.dy ?? 2.6, 0)) : w.road(o.badge.s, o.badge.off, o.badge.y ?? 2); const [x, y, z] = projV(a); if (z < 1) pill(ctx, x + (o.badge.dx ?? 0), y + (o.badge.dy2 ?? 0), o.badge.text, { dot: o.badge.dot, size: o.badge.size ?? 30 }); }
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

  // ---------- Storyboard (nøkkelbilder i shots.js) ----------
  window.renderShot = function (id) {
    const sh = SHOTS.find(x => x.id === id); if (!sh) throw Error('Ukjent shot ' + id);
    drawScene(sh);
    const ch = CHAPTERS[sh.chapter - 1];
    if (!sh.play) chapterChip(ctx, L, sh.chapter, CHAPTERS.length, ch.title);
    const marks = []; let acc = 0; const tot = CHAPTERS.reduce((a, c) => a + c.sec, 0); for (const c of CHAPTERS.slice(0, -1)) { acc += c.sec; marks.push(acc / tot); }
    const before = CHAPTERS.slice(0, sh.chapter - 1).reduce((a, c) => a + c.sec, 0);
    if (sh.play) { posterPanel(sh.play); window.infoBounds = []; }
    else window.infoBounds = infoPanel(ctx, L, { chapter: sh.chapter, total: CHAPTERS.length, title: ch.title, lines: sh.text, progress: (before + ch.sec * (sh.at ?? .5)) / tot, chapterMarks: marks });
    return canvas;
  };
  window.shotIds = SHOTS.map(s => s.id);
  // Plakat: tittel og avspillingsknapp i infofeltet, aldri oppå motivet.
  function posterPanel(lines) {
    const { W, H, sceneH, pad } = L; const len = DURATION; ctx.save(); ctx.fillStyle = C.white; ctx.fillRect(0, sceneH, W, H - sceneH); ctx.fillStyle = C.border; ctx.fillRect(0, sceneH, W, 2);
    ctx.font = `600 ${L.label}px ${FONT}`; ctx.fillStyle = C.teal; ctx.textAlign = 'left'; ctx.fillText(`FORKLARINGSFILM · ${Math.floor(len / 60)}:${String(Math.round(len % 60)).padStart(2, '0')}`, pad, sceneH + 74);
    ctx.textAlign = 'right'; ctx.fillStyle = C.text; ctx.font = `700 ${L.label}px ${FONT}`; ctx.fillText('teori-test.no', W - pad, sceneH + 74);
    ctx.textAlign = 'left'; ctx.font = `700 ${L.font}px ${FONT}`; lines.forEach((t, i) => ctx.fillText(t, pad, sceneH + 74 + 34 + L.font + i * L.line));
    const cx = W - pad - 70, cy = sceneH + 74 + 34 + L.font * .6 + L.line * .5; ctx.shadowColor = 'rgba(13,148,136,.45)'; ctx.shadowBlur = 24; ctx.fillStyle = C.teal; ctx.beginPath(); ctx.arc(cx, cy, 70, 0, 7); ctx.fill();
    ctx.shadowColor = 'transparent'; ctx.fillStyle = C.white; ctx.beginPath(); ctx.moveTo(cx - 20, cy - 32); ctx.lineTo(cx + 36, cy); ctx.lineTo(cx - 20, cy + 32); ctx.closePath(); ctx.fill(); ctx.restore();
  }

  // ---------- Film: tidsplan og bevegelse ----------
  const DURATION = timing.duration, CHS = timing.chapters, endStart = CHS.at(-1).end;
  const V80 = 80 / 3.6, V70 = 70 / 3.6, R = 1.75, Lf = -1.75, rev = { reverse: true };
  // Forbikjøringen: 25 m luke bak lastebilen når du legger deg ut. Du legger deg inn igjen når lastebilen synes
  // i speilet (ca. 10 m luke foran). Feltskiftet inn tar 3 s. Med 10 km/t fartsforskjell blir det ca. 24 s og over 500 m.
  // Møtende bil starter så langt unna at det er ca. 200 m (ca. 4–5 s) luft igjen når du er inne i feltet ditt igjen.
  const P0 = .3, GAIN = (2.2 + 25 + 9) + (9 + 10 + 2.2), MERGE = GAIN / (V80 - V70), PASS = MERGE + 3, END = 100 + V80 * PASS, ONC = 1350, MEET = ONC - V80 * PASS, LIFT = P0 + PASS + (MEET - END) / (2 * V80) + .4; // kameraet holdes til møtende bil har passert
  const fmt1 = v => v.toFixed(1).replace('.', ',');
  const fmtM = v => String(Math.round(v)).replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  const mixv = (a, b, k) => a + (b - a) * k;
  function cruiseStop(u, d0, v, uStop, T) { const ub = uStop - T; if (u <= ub) return d0 + v * u; const tau = Math.min(u - ub, T); return d0 + v * ub + v * tau - v * tau * tau / (2 * T); }
  // Feltbytte: sideveis posisjon og retning (vinkel) ut fra posisjonen som funksjon av tid.
  const steer = (laneF, sF, x, e = .01) => Math.atan((laneF(x + e) - laneF(x - e)) / Math.max(.01, sF(x + e) - sF(x - e)));
  // Bildeskift inne i kapittel 4 (sekunder fra talestart, litt før ordet).
  const sub4 = a => { const S = CHS[3].sentences; return a < S[1] - .2 ? 0 : a < S[2] - .2 ? 1 : a < S[3] - .2 ? 2 : 3; };
  const cuts = []; CHS.forEach((c, i) => { if (i) cuts.push({ t: c.start, prev: [i - 1, c.start - 1e-3] }); });
  CHS[3].sentences.slice(1).forEach(s => { const t = CHS[3].speech + s - .2; cuts.push({ t, prev: [3, t - 1e-3] }); });
  const FADE = .5, MIRROR_AT = P0 + MERGE - 1.6;

  function chapterState(i, u, a) {
    const S = CHS[i].sentences, inS = k => a >= S[k] - .15 && (k + 1 >= S.length || a < S[k + 1] - .15), from = k => a >= S[k] - .15;
    const w = worlds.straight;
    if (i === 0) {
      // Før du kjører forbi: blå bil bak lastebilen, en bil bak. Fire sjekkpunkter tennes ett og ett.
      const sT = 330 + V70 * u, sB = sT - 40, sS = sB - 24;
      const G = { from: w.road(sB - 15, -2.4, 6.4), to: w.road(sT + 22, .6, 0), fov: L.H > L.W ? 44 : 34 };
      const far = { from: w.road(sB - 150, -40, 60), to: w.road(sT + 120, 0, 0) };
      const back = L.H > L.W ? { from: w.road(sB - 44, -3.5, 13), to: w.road(sB + 14, .8, 0), fov: 46 } : { from: w.road(sB - 50, -3.5, 17), to: w.road(sB + 2, .8, 0), fov: 36 };
      let cam = lerpCam(far, G, ease((u - .2) / 3.4));
      const high = L.H > L.W ? { from: w.road(sB - 24, -13, 19), to: w.road(sT + 4, 1.2, 0), fov: 46 } : { from: w.road(sB - 36, -12, 19), to: w.road(sT - 8, 1.2, 0), fov: 36 };
      cam = lerpCam(cam, back, ease((a - S[3] + .9) / 1.6)); cam = lerpCam(cam, high, ease((a - S[4] + .7) / 1.8));
      const ov = [], k = [1, 2, 3, 4].filter(n => from(n));
      const cur = k.at(-1);
      if (cur === 1) ov.push({ zone: [sT + 12, sT + 260, Lf, 3.3, C.tealLight, C.tealSoft] });
      if (cur === 4) ov.push({ zone: [sT + 10.5, sT + 34, R, 3.3, C.tealLight, C.tealSoft] });
      if (cur === 3) ov.push({ ring: { actor: 'silver', r: 70, dy: .8 } });
      if (cur === 2) ov.push({ ring: { actor: 'truck', r: 60, dy: 1.6 } });
      const pos = { 1: { s: sT + 150, off: Lf, y: .5 }, 2: { s: sT - 9, off: R - 1.3, y: 2.6, dx: -40 }, 3: { s: sS, off: R, y: 2.8 }, 4: { s: sT + 22, off: R, y: .5, dx: 46 } };
      k.forEach(n => ov.push({ marker: { n, ...pos[n], on: n === cur } }));
      return { world: 'straight', actors: [['truck', sT, R], ['blue', sB, R], ['silver', sS, R]], cam, overlay: ov };
    }
    if (i === 1) {
      // Så lang tid tar det: forbikjøringen i sanntid, sett fra blå bil hele veien. 80 forbi 70, møtende bil i 80.
      const p = a - P0, sBf = q => 100 + V80 * q, laneF = q => R - 3.5 * ease(q / 3) + 3.5 * ease((q - MERGE) / 3);
      const sB = sBf(p), sT = 136.2 + V70 * p, sR = ONC - V80 * p, lane = laneF(p), turn = steer(laneF, sBf, p);
      const signal = p > -1.6 && p < 2.6 ? -1 : p > MERGE - 1.4 && p < PASS - .2 ? 1 : 0;
      const mob = L.H > L.W;
      const A = { from: w.road(sB - (mob ? 17 : 21) + 2 * ease((a + 1) / 6), -.6, (mob ? 4.6 : 5.6) + 1.4 * ease((a + 1) / 6)), to: w.road(sB + 50, -.9, mob ? 1.0 : .2), fov: mob ? 44 : 34 };
      const B = { from: w.road(sB - 15, -6.5, 5.6), to: w.road(sB + 30, .2, 1.0), fov: mob ? 46 : 36 };
      const Cc = { from: w.road(sB + 20, -8.6, 3.2), to: w.road(sB - 4, -.4, 1.0), fov: mob ? 46 : 36 };
      const E = { from: w.road(sB - 26, -.8, 10), to: w.road(sB + 50, -.6, 0), fov: mob ? 44 : 34 };
      const D = mob ? { from: w.road(-300, -320, 410), to: w.road(760, 0, 0), fov: 40 } : { from: w.road(600, -700, 470), to: w.road(720, 40, 0), fov: 40 };
      const k3 = ease((a - LIFT) / 2.6);
      // Fra «foran til venstre, ser bakover» til «bak, høyt»: kameraet går i bue rundt blå bil, så bilen hele tiden er i bildet.
      const ke = ease((a - 16.2) / 3.2), yaw = mixv(2.77, -.1, ke), dist = mixv(21.8, 44, ke), hh = mixv(3.2, 15, ke), look = mixv(-5, 34, ke * ke * ke);
      const orbit = { from: w.road(sB - dist * Math.cos(yaw), lane - dist * Math.sin(yaw), hh), to: w.road(sB + look, lane * .5, mixv(1.2, 0, ke)), fov: mob ? mixv(46, 44, ke) : mixv(36, 34, ke) };
      let cam = lerpCam(A, B, ease((a - 5.4) / 2.4)); cam = lerpCam(cam, Cc, ease((a - 10.4) / 2.6)); if (a > 16.2) cam = orbit; cam = lerpCam(cam, D, k3);
      const top = k3 > .55, ov = [], tp = clamp(p, 0, PASS);
      if (a < S[2] - .15) ov.push({ badge: { actor: 'blue', text: '80 km/t', dot: C.teal, dy: 2.3 } }, { badge: { actor: 'truck', text: '70 km/t', dot: C.muted, dy: 5.4 } });
      if (top) {
        const al = ease((k3 - .55) / .3);
        ov.push({ zone: [100, Math.max(100, sB), Lf, 12, '#0d9488', 'rgba(20,184,166,.55)'], alpha: al }, { zone: [Math.min(ONC, sR), ONC, Lf, 12, '#dc2626', 'rgba(220,38,38,.45)'], alpha: al });
        ov.push({ dot: { actor: 'blue', color: '#1689c9', dx: 9 }, alpha: al }, { dot: { actor: 'red', color: '#c4473b', dx: -9 }, alpha: al });
        ov.push({ measure: [100, ONC, -120, 'over 1 km fri vei', .28], alpha: al });
        ov.push({ zone: [END, MEET, Lf, 12, C.tealLight, 'rgba(255,255,255,.35)'], alpha: al }, { badge: { s: (END + MEET) / 2, off: -40, y: 0, text: 'Luft: ca. 200 m', dot: C.tealLight }, alpha: al });
        ov.push({ badge: { s: 260, off: 40, y: 0, text: 'Du: ca. 500 m', dot: '#0d9488' }, alpha: al }, { badge: { s: 930, off: 30, y: 0, text: 'Møtende: ca. 500 m', dot: '#dc2626' }, alpha: al });
      }
      if (p > MERGE - .6 && p < PASS + 1.5) ov.push({ badge: { actor: 'blue', text: 'Lastebilen synes i speilet', dot: C.teal, dy: 2.4 }, alpha: ease((p - MERGE + .6) / .4) * (1 - ease((p - PASS - 1) / .5)) });
      ov.push({ top: { sB, sT, sR, lane, tp, measure: from(5), hl: inS(2) ? 'time' : inS(3) ? 'du' : inS(4) ? 'red' : null }, alpha: ease((u - .1) / .5) * (1 - ease((a - LIFT) / .6)) });
      return { world: 'straight', actors: [['truck', sT, R], ['blue', sB, lane, { turn, signal }], ['red', sR, Lf, rev]], cam, overlay: ov,
        fog: [mixv(160, 700, ease(k3 * 2.2)), mixv(620, 1900, ease(k3 * 2.2))], noMountains: k3 > .18, sunAt: k3 > .5 ? w.road(650, 0, 0) : null };
    }
    if (i === 2) {
      // Fartsgrensen: ingen ekstra fart. Blå bil legger seg tilbake bak lastebilen.
      // Blå bil slipper rolig av på gassen (laveste fart ca. 58 km/t) og legger seg på god avstand bak.
      const sm = x => { x = clamp(x); return x * x * (3 - 2 * x); }, bk = q => sm((q - S[1] + 1.5) / 6.4);
      const sT = 690 + V70 * u, back = bk(a), d = 30 + 14 * back, sB = sT - d, lane = 1.25 + .5 * back;
      const cam = { from: w.road(sB - 13 - 5 * back, 1.2 - .6 * back, 3.2 + 1.4 * ease(u / 8) + 4.5 * back), to: w.road(sB + (L.H > L.W ? 90 - 40 * back : 70 - 38 * back), .5, 1.3 - (L.H > L.W ? 1.3 : 2.6) * back), fov: L.H > L.W ? 44 : 34 };
      const ov = [];
      if (!from(1)) ov.push({ badge: { actor: 'blue', text: 'Maks 80 km/t', dot: C.teal, dy: 1.9, dx: L.H > L.W ? -120 : -200 } }, { badge: { actor: 'truck', text: '70 km/t', dot: C.muted, dy: 5.2 } }, { signBox: [742, 4.4], alpha: ease((a + .2) / .4) * (1 - ease((u - 5) / .5)) });
      else { ov.push({ badge: { actor: 'blue', text: '70 km/t', dot: C.teal, dy: 1.9, dx: L.H > L.W ? -100 : -170 }, alpha: 1 - ease((back - .4) / .2) }, { badge: { actor: 'truck', text: '70 km/t', dot: C.muted, dy: 5.2 } });
        if (back > .45) ov.push({ zone: [sB + 6, sT - 9.6, R, 3.1, C.tealLight, C.tealSoft], alpha: ease((back - .45) / .3) }, { badge: { s: (sB + sT) / 2 - 3, off: R, y: .3, text: 'God avstand', dot: C.tealLight }, alpha: ease((back - .55) / .3) }); }
      const off = q => 1.25 + .5 * bk(q), pos = q => 690 + V70 * (q + CHS[2].speech - CHS[2].start) - 30 - 14 * bk(q);
      return { world: 'straight', actors: [['truck', sT, R], ['blue', sB, lane, { turn: steer(off, pos, a) }]], cam, overlay: ov };
    }
    if (i === 3) {
      const k = sub4(a), t0 = [-(CHS[3].speech - CHS[3].start), S[1] - .2, S[2] - .2, S[3] - .2][k], tau = a - t0;
      if (k === 0) {
        // Bakketopp: møtende bil skjult bak toppen.
        const sB = 152 + 7 * tau, sT = sB + 26, sR = 296 - 4 * tau; // rolig fart: blå bil når ikke toppen, møtende er skjult hele tiden
        const cam = { from: worlds.hill.road(sB - 15, -.4, 2.5), to: worlds.hill.road(250, 0, 11 - .02 * tau), fov: L.H > L.W ? 40 : 36 };
        return { world: 'hill', actors: [['truck', sT, R], ['blue', sB, R], ['red', sR, Lf, rev]], cam,
          profile: { from: 130, to: 350, you: sB, other: sR, crest: 240, alpha: ease((tau - .3) / .5) },
          overlay: [{ zone: [236, 246, 0, 7.4, '#14b8a6', 'rgba(20,184,166,.18)'], alpha: ease((tau - .8) / .5) }] };
      }
      if (k === 1) {
        // Kryss: bil står klar til å kjøre ut fra sidevegen.
        // Blå bil blir liggende bak lastebilen. Krysset er markert, og bilen i sidevegen kan kjøre ut foran deg.
        const sB = 126 + 7 * tau, sT = sB + 30, wj = worlds.junction, mob = L.H > L.W;
        const cam = { from: wj.road(sB - 13, -3.2, 6.2), to: wj.road(sB + (mob ? 48 : 44), 2.6, 0), fov: mob ? 46 : 36 };
        const al = ease((tau - .3) / .4), al2 = ease((tau - 1.2) / .4);
        return { world: 'junction', actors: [['truck', sT, R], ['blue', sB, R], ['silver', 191.6, 3.5 + 9, { turn: Math.PI * 1.5 }]], cam,
          overlay: [{ zone: [180, 200, 0, 7.4, '#14b8a6', 'rgba(20,184,166,.22)'], alpha: al }, { badge: { s: 188, off: -1.6, y: .3, text: 'Ikke forbi her', dot: C.tealLight }, alpha: al },
            { ring: { actor: 'silver', r: 46, dy: .8 }, alpha: al2 }, { badge: { actor: 'silver', text: 'Skal ut i vegen', dot: C.muted, dy: 2.4 }, alpha: al2 }] };
      }
      if (k === 2) {
        // Gangfelt: bilen foran stopper og skjuler en fotgjenger.
        const wt = worlds.town, sS = cruiseStop(tau, 124.9, 6, 3.0, 2.5), sB = cruiseStop(tau, 112, 6, 3.4, 2.8), wx = 4.6 - 9.2 * ease((tau - .2) / 3.4);
        const cam = { from: wt.road(sB - 12.5, .3, 3.2), to: wt.road(sB + 24, .3, 1.0), fov: L.H > L.W ? 36 : 28 };
        return { world: 'town', actors: [['silver', sS, R], ['blue', sB, R]], ghosts: [['walker', 142.2, wx, { turn: Math.PI / 2 }]], cam,
          overlay: [{ zone: [140, 144, 0, 7, '#14b8a6', 'rgba(20,184,166,0)'] }, { ring: { ghost: 'walker', r: 40, dy: .95 } }, { badge: { ghost: 'walker', text: 'Skjult fotgjenger', dot: '#14b8a6', dy: 2.7 } }] };
      }
      // Sperrelinje og skilt 334.
      const sB = 1238 + 9 * tau, sT = sB + 34;
      const cam = { from: w.road(sB - 22, .6, 3.6 + .3 * tau), to: w.road(sB + 96, 0, 1) };
      return { world: 'straight', actors: [['truck', sT, R], ['blue', sB, R]], cam,
        overlay: [{ zone: [1300, 1420, 0, .9, '#14b8a6', 'rgba(20,184,166,0)'], alpha: ease((tau - .2) / .4) }, { signBox: [1296, 4.4], alpha: ease((tau - .4) / .4) }, { badge: { s: 1296, off: 4.4, y: 3.8, text: 'Skilt 334', dot: '#dc2626' }, alpha: ease((tau - .4) / .4) }] };
    }
    if (i === 4) {
      // Når du blir forbikjørt: hold til høyre, ikke øk farten.
      // Kantlinjen ligger 3,125 m fra midtlinjen, karosseriet er 0,88 m fra senter: 1,90 gir 0,35 m luft, 2,10 gir 0,15 m.
      const lead = CHS[4].speech - CHS[4].start, sBf = q => 500 + V70 * q, laneB = q => R + .15 * ease((q - lead - .4) / 2.5) + .2 * ease((q - lead - S[2] + .2) / 2);
      const sB = sBf(u), lane = laneB(u), sWf = q => sBf(q) - 16 + (V80 - V70) * q, laneW = q => Lf + 3.5 * ease((q - 10.8) / 2.4);
      const sW = sWf(u), lw = laneW(u);
      const cam = { from: w.road(sB - 15, 3.6, 5 + 1.4 * ease(u / 12)), to: w.road(sB + 40, -.4, .5), fov: L.H > L.W ? 44 : 36 };
      const ov = [{ badge: { actor: 'blue', text: '70 km/t', dot: C.teal, dy: 2.3 } }, { badge: { actor: 'white2', text: '80 km/t', dot: C.muted, dy: 2.3 } }];
      if (inS(0)) ov.push({ zone: [sB + 5, sB + 30, lane + .88 + .25, .5, C.tealLight, C.tealSoft], alpha: ease((a - .4) / .4) * (1 - ease((a - S[1] + .4) / .3)) });
      return { world: 'straight', actors: [['blue', sB, lane, { turn: steer(laneB, sBf, u) }], ['white2', sW, lw, { turn: steer(laneW, sWf, u), signal: u > 10 && u < 13 ? 1 : 0 }]], cam, overlay: ov };
    }
    // i === 5: Husk dette. Trygg forbikjøring på lang, oversiktlig strekning uten møtende: blinklys, rolig ut, bestemt forbi, inn igjen.
    // Lastebilen holder 50 km/t her (tungt kjøretøy), så hele forbikjøringen rekker å bli ferdig før sluttkortet.
    const VT = 50 / 3.6, q0 = .4, pq = u - q0, M6 = GAIN / (V80 - VT);
    const sTf = q => 880 + VT * (q + q0), sBf = q => 880 + VT * q0 - 36.2 + V80 * q, laneB = q => R - 3.5 * ease(q / 3) + 3.5 * ease((q - M6) / 3);
    const sT = sTf(pq), sB = sBf(pq), lane = laneB(pq), rise = ease((a - S[2] + .4) / 3);
    const sig = pq > -1.2 && pq < 2.6 ? -1 : pq > M6 - 1.4 && pq < M6 + 2.8 ? 1 : 0;
    const cam = { from: w.road(sB - 22 - 14 * rise, -4 - 2 * rise, 7 + 8 * rise), to: w.road(sB + 55 + 45 * rise, -.5, 0), fov: L.H > L.W ? 44 : 34 };
    const ov = []; if (a < S[1] - .15) ov.push({ zone: [sB + 12, sB + 420, Lf, 3.3, C.tealLight, C.tealSoft], alpha: ease((a + .2) / .4) * (1 - ease((a - S[1] + .45) / .3)) });
    return { world: 'straight', actors: [['truck', sT, R], ['blue', sB, lane, { turn: steer(laneB, sBf, pq), signal: sig }]], cam, overlay: ov };
  }

  const chapterOf = t => { let i = 0; while (i < CHS.length - 1 && t >= CHS[i + 1].start) i++; return i; };
  const stateAt = (i, t) => { const ch = CHS[i]; return chapterState(i, t - ch.start, t - ch.speech); };
  const marks = CHS.slice(1).map(c => c.start / DURATION);

  window.setFilmFormat = f => { window.setFormat(f); return { width: L.W, height: L.H }; };
  window.chapterTimes = CHS.map(c => ({ chapter: c.chapter, title: c.title, start: c.start }));
  window.filmDuration = DURATION;

  window.renderFrame = function (seconds) {
    const t = clamp(Number(seconds) || 0, 0, DURATION), end = t >= endStart;
    const i = chapterOf(Math.min(t, endStart - 1e-3)), ch = CHS[i], u = t - ch.start, a = t - ch.speech;
    // Myk overgang: forrige bilde (fryst) tones ut over det nye.
    const cut = cuts.find(c => t >= c.t && t < c.t + FADE);
    if (cut) { const [pi, pt] = cut.prev; drawScene(stateAt(pi, pt), pt); buffer.width = L.W; buffer.height = L.sceneH; bctx.drawImage(canvas, 0, 0); }
    const st = chapterState(i, u, a), w = drawScene(st, t);
    if (cut) { ctx.save(); ctx.globalAlpha = 1 - ease((t - cut.t) / FADE); ctx.drawImage(buffer, 0, 0); ctx.restore(); }
    if (end) summaryCard(ease((t - endStart - .2) / .6));
    const S = ch.sentences; let k = 0; S.forEach((s, j) => { if (a >= s - .15) k = j; });
    let lines = end ? END_LINES : POINTS[i][k], since = end ? t - endStart : k === 0 ? u : a - (S[k] - .15);
    // Speilrådet vises i stillheten etter talen i kapittel 2, mens blå bil legger seg inn igjen.
    if (i === 1 && a >= MIRROR_AT && a < P0 + PASS + 1.5) { lines = MIRROR_LINES; since = a - MIRROR_AT; }
    else if (i === 1 && a >= P0 + PASS + 1.5 && a < LIFT + .4) { lines = CLOSE_LINES; since = a - P0 - PASS - 1.5; }
    else if (i === 1 && a >= LIFT + .4) since = a - LIFT - .4;
    const alpha = clamp(since / .25, .0, 1);
    const bounds = infoPanel(ctx, L, { chapter: i + 1, total: CHS.length, title: ch.title, lines, progress: t / DURATION, chapterMarks: marks, alpha });
    window.infoLayout = { bounds: bounds.map(b => ({ text: b.t, x: b.x, y: b.y, width: b.w, height: b.h, fontSize: L.font })), sceneHeight: L.sceneH, width: L.W, height: L.H, point: lines.join(' ') };
    const scr = v => { const p = v.position.clone().add(V(0, .75, 0)).project(camera); return [(p.x + 1) * L.W / 2, (1 - p.y) * L.sceneH / 2]; };
    window.frameInfo = { t, chapter: i + 1, title: ch.title, speechTime: a, environment: w.name, endCard: end, point: lines.join(' '), duration: DURATION,
      blueScreen: actors.blue.o.visible ? scr(actors.blue.o) : null, blueS: st.actors.find(x => x[0] === 'blue')?.[1] ?? null,
      redS: st.actors.find(x => x[0] === 'red')?.[1] ?? null, truckS: st.actors.find(x => x[0] === 'truck')?.[1] ?? null };
    return canvas;
  };
  window.renderFrame(.5);
  window.ready = true; window.animationReady = true;
}
init().catch(e => { window.initError = window.animationError = String(e && e.stack || e); console.error(e); });

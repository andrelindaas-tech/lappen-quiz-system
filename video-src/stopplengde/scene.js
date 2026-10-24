import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { assets } from './assets-data.js';
import { C, FONT, LAYOUT, infoPanel, pill, rr } from './style.js';
import { CHAPTERS, SHOTS, POSTER, DURATION_EST, SUMMARY_TITLE, SUMMARY_ROWS } from './shots.js';
import { POINTS, END_LINES } from './information.js';
import { FILM } from './film.js';
import timing from './timing.json';

// Storyboard for «Stopplengde – reaksjonslengde og bremselengde».
// Rett veg langs x (kjøreretning +x). To felt i samme retning: nært felt z = +1,75, fjernt felt z = −1,75.
// Streken der faren oppdages ligger på x = 0. Lengder måles fra fronten på bilen.
const clamp = (v, a = 0, b = 1) => Math.max(a, Math.min(b, v));
const V = (x, y, z) => new THREE.Vector3(x, y, z);
const std = (color, extra = {}) => new THREE.MeshStandardMaterial({ color, roughness: .92, ...extra });
const basic = (color, extra = {}) => new THREE.MeshBasicMaterial({ color, toneMapped: false, side: THREE.DoubleSide, ...extra });
let L = LAYOUT.mobile;
export const LANE = { near: 1.75, far: -1.75 };
export const FRONT = 2.1;
const ORANGE = '#f59e0b';

function noiseTexture(size, base, spread, specks, seed) {
  const c = document.createElement('canvas'); c.width = c.height = size; const k = c.getContext('2d'), img = k.createImageData(size, size); let r = seed;
  const rnd = () => { r = (Math.imul(r, 1664525) + 1013904223) >>> 0; return r / 4294967296; };
  for (let i = 0; i < size * size; i++) { let v = base + (rnd() - .5) * spread; if (rnd() < specks) v += (rnd() < .5 ? -1 : 1) * spread * 1.6; v = clamp(v, 0, 255); img.data.set([v, v, v, 255], i * 4); }
  k.putImageData(img, 0, 0); const t = new THREE.CanvasTexture(c); t.wrapS = t.wrapT = THREE.RepeatWrapping; t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}
function rng(seed) { let r = seed >>> 0; return () => { r = (Math.imul(r, 1664525) + 1013904223) >>> 0; return r / 4294967296; }; }

async function init() {
  const ff = new FontFace('IBM Plex Sans', `url(${assets.font})`, { weight: '100 700' }); await ff.load(); document.fonts.add(ff);
  const canvas = document.getElementById('film');
  const ctx = canvas.getContext('2d', { alpha: false, willReadFrequently: true });
  const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
  renderer.setPixelRatio(1); renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const scene = new THREE.Scene();
  { const c = document.createElement('canvas'); c.width = 4; c.height = 256; const k = c.getContext('2d'), g = k.createLinearGradient(0, 0, 0, 256);
    g.addColorStop(0, '#6aa3d4'); g.addColorStop(.6, '#b3d2e8'); g.addColorStop(1, '#e6eeea'); k.fillStyle = g; k.fillRect(0, 0, 4, 256);
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; scene.background = t; }
  scene.fog = new THREE.Fog('#e3ebe8', 260, 900);
  const camera = new THREE.PerspectiveCamera(30, 1, 1, 4000);
  scene.add(new THREE.HemisphereLight('#dcecff', '#5d7647', 1.5));
  const sun = new THREE.DirectionalLight('#ffe6c2', 3.0); sun.castShadow = true; sun.shadow.mapSize.set(4096, 4096);
  Object.assign(sun.shadow.camera, { left: -90, right: 90, top: 60, bottom: -60, near: 1, far: 300 }); sun.shadow.bias = -.0004; sun.shadow.normalBias = .03;
  sun.position.set(0, 80, 50); sun.target.position.set(30, 0, 0); scene.add(sun, sun.target);
  const mesh = (g, m, parent = scene, shadow = false) => { const o = new THREE.Mesh(g, m); o.receiveShadow = true; o.castShadow = shadow; parent.add(o); return o; };
  const tile = (mat, rx, ry) => { const m = mat.clone(); m.map = mat.map.clone(); m.map.repeat.set(rx, ry); m.map.needsUpdate = true; return m; };
  const flat = (x0, x1, z0, z1, y, mat) => { const g = new THREE.PlaneGeometry(x1 - x0, z1 - z0); g.rotateX(-Math.PI / 2); const m = mesh(g, mat); m.position.set((x0 + x1) / 2, y, (z0 + z1) / 2); return m; };
  const rnd = rng(77);

  // ---------- Vegen og omgivelsene ----------
  const grass = std('#86ad5c', { map: noiseTexture(128, 205, 40, .1, 5) }), asphalt = std('#626a70', { map: noiseTexture(256, 205, 38, .06, 7) });
  flat(-400, 600, -300, 120, -.01, tile(grass, 160, 70));
  flat(-400, 600, -3.6, 3.6, .01, tile(asphalt, 160, 1.2));
  const W = basic('#f4f2ea');
  flat(-400, 600, 3.3, 3.45, .02, W); flat(-400, 600, -3.45, -3.3, .02, W);
  for (let x = -400; x < 600; x += 12) flat(x, x + 3, -.07, .07, .02, W);
  // Gang- og sykkelveg og hekk på den fjerne siden, trær og hus bak.
  flat(-400, 600, -8.5, -5.5, .012, tile(std('#a9adae', { map: noiseTexture(128, 205, 30, .08, 13) }), 160, 1));
  const leaf = std('#5f8a52', { flatShading: true }), leaf2 = std('#6f9a55', { flatShading: true }), trunk = std('#6f6449');
  const tree = (x, z, h) => { const t = mesh(new THREE.BoxGeometry(.3, h * .5, .3), trunk, scene, true); t.position.set(x, h * .25, z); const c = mesh(new THREE.IcosahedronGeometry(h * .3, 1), rnd() < .5 ? leaf : leaf2, scene, true); c.position.set(x, h * .66, z); };
  for (let x = -60; x < 160; x += 9 + rnd() * 6) tree(x, -11 - rnd() * 4, 5 + rnd() * 2.5);
  const cols = ['#eeeae0', '#e8d9a8', '#c9d8d6', '#e9e4dc', '#d8c3a5', '#b9c9b2'], roofs = ['#41454b', '#8a3b2e', '#5a4636', '#2f3b45'];
  for (let x = -70; x < 170; x += 16 + rnd() * 6) { const w = 9 + rnd() * 3, h = 4 + rnd() * 3, d = 8; const b = mesh(new THREE.BoxGeometry(w, h, d), std(cols[Math.floor(rnd() * cols.length)]), scene, true); b.position.set(x, h / 2, -26 - rnd() * 6);
    const rg = new THREE.ExtrudeGeometry(new THREE.Shape([new THREE.Vector2(-d / 2 - .4, 0), new THREE.Vector2(d / 2 + .4, 0), new THREE.Vector2(0, 2.6)]), { depth: w + .4, bevelEnabled: false }); rg.translate(0, 0, -(w + .4) / 2); rg.rotateY(Math.PI / 2);
    const r = mesh(rg, std(roofs[Math.floor(rnd() * roofs.length)]), scene, true); r.position.set(b.position.x, h, b.position.z); }

  // ---------- Bil og ball ----------
  const parse = b64 => new GLTFLoader().parseAsync(Uint8Array.from(atob(b64), c => c.charCodeAt(0)).buffer, '');
  const [carGltf] = await Promise.all([parse(assets.car)]);
  const glow = color => { const c = document.createElement('canvas'); c.width = c.height = 64; const k = c.getContext('2d'), g = k.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, color); g.addColorStop(.4, color.replace('1)', '.5)')); g.addColorStop(1, color.replace('1)', '0)')); k.fillStyle = g; k.fillRect(0, 0, 64, 64);
    return new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(c), transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, toneMapped: false }); };
  const redGlow = glow('rgba(255,40,30,1)');
  function makeCar(color) {
    const o = carGltf.scene.clone(true), wheels = [], mats = [];
    o.traverse(m => { if (m.name.startsWith('Hjul_')) wheels.push(m); if (m.isMesh) { m.castShadow = m.receiveShadow = true; m.material = m.material.clone(); mats.push(m.material); if (m.material.name === 'Lakk') m.material.color.set(color); } });
    const brake = []; for (const s of [-1, 1]) { const g = new THREE.Group(); g.position.set(s * .62, .82, -2.08); g.add(new THREE.Mesh(new THREE.BoxGeometry(.32, .14, .04), basic('#ff2a1f'))); const sp = new THREE.Sprite(redGlow); sp.scale.set(1.4, 1.4, 1); g.add(sp); g.visible = false; o.add(g); brake.push(g); }
    scene.add(o); return { o, brake, wheels, mats };
  }
  const cars = { near: makeCar('#1689c9'), far: makeCar('#1689c9') };
  const ball = (() => { const c = document.createElement('canvas'); c.width = 128; c.height = 64; const k = c.getContext('2d'); for (let i = 0; i < 8; i++) { k.fillStyle = i % 2 ? '#ffffff' : '#e8473a'; k.fillRect(i * 16, 0, 16, 64); }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return mesh(new THREE.SphereGeometry(.35, 24, 16), new THREE.MeshStandardMaterial({ map: t, roughness: .5 }), scene, true); })();
  // Fronten på bilen står på x = front.
  // alpha < 1 toner bilen ut (brukes når bremsingen ikke skal vises). Hjulene ruller med fronten.
  function placeCar(lane, front, braking, alpha = 1) { const c = cars[lane]; c.o.visible = alpha > .01; c.o.position.set(front - FRONT, 0, LANE[lane]); c.o.rotation.set(0, Math.PI / 2, 0);
    c.brake.forEach(b => { b.visible = !!braking; b.children.forEach(k => { k.material.transparent = true; k.material.opacity = alpha; }); });
    c.wheels.forEach(w => w.rotation.x = front / .34);
    c.mats.forEach(m => { m.transparent = alpha < 1; m.opacity = alpha; m.depthWrite = alpha >= 1; }); c.o.traverse(m => { if (m.isMesh) m.castShadow = alpha > .5; }); }

  // ---------- Striper på vegen (3D, bilene står over dem) ----------
  const stripMat = c => new THREE.MeshBasicMaterial({ color: c, transparent: true, opacity: .92, depthWrite: false, toneMapped: false, polygonOffset: true, polygonOffsetFactor: -4 });
  const pool = Array.from({ length: 8 }, () => { const m = mesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), stripMat('#ffffff')); m.renderOrder = 2; m.visible = false; return m; });
  const lineMesh = mesh(new THREE.PlaneGeometry(1, 1).rotateX(-Math.PI / 2), basic('#ffffff', { polygonOffset: true, polygonOffsetFactor: -6 })); lineMesh.renderOrder = 3;
  function setStrips(list) { pool.forEach((m, i) => { const s = list[i]; m.visible = !!s; if (!s) return; const [lane, x0, x1, color] = s, w = 2.0;
    m.visible = x1 - x0 > .005 && (s[4] ?? 1) > .01; m.material.color.set(color); m.material.opacity = .92 * (s[4] ?? 1); m.position.set((x0 + x1) / 2, .03, LANE[lane]); m.scale.set(Math.max(.01, x1 - x0), 1, w); }); }

  // ---------- 2D over scenen ----------
  const projV = v => { const p = v.clone().project(camera); return [(p.x + 1) * L.W / 2, (1 - p.y) * L.sceneH / 2, p.z]; };
  const at = (x, lane, y = 0, dz = 0) => projV(V(x, y, (typeof lane === 'string' ? LANE[lane] : lane) + dz));
  // Avstandsstolper under vegen: samme x-målestokk som vegen. Hver rad er én bil.
  const px = x => at(x, 3.6)[0];
  function bars(rows, y0) { const bh = 56, gap = 16; let y = y0;
    for (const r of rows) { ctx.save(); ctx.globalAlpha = r.alpha ?? 1;
      if (r.label) { ctx.save(); ctx.font = `700 28px ${FONT}`; ctx.fillStyle = C.text; ctx.textBaseline = 'middle'; ctx.textAlign = 'right'; const x = px(0) - 14; ctx.fillText(r.label, x, y + bh / 2); ctx.restore(); }
      for (const [x0, x1, color, text] of r.segs) { if (x1 - x0 < .01) continue; const a = px(x0), b = px(x1); ctx.save(); ctx.shadowColor = 'rgba(15,23,42,.18)'; ctx.shadowBlur = 8; ctx.fillStyle = color; rr(ctx, a, y, Math.max(2, b - a), bh, 6); ctx.fill(); ctx.shadowColor = 'transparent';
        ctx.lineWidth = 2; ctx.strokeStyle = 'rgba(255,255,255,.9)'; ctx.stroke();
        if (text) { ctx.font = `700 30px ${FONT}`; ctx.textBaseline = 'middle'; const tw = ctx.measureText(text).width; ctx.fillStyle = C.white; ctx.textAlign = 'center';
          if (tw + 16 < b - a) ctx.fillText(text, (a + b) / 2, y + bh / 2 + 1); else { ctx.fillStyle = C.text; ctx.textAlign = 'left'; ctx.fillText(text, b + 10, y + bh / 2 + 1); } }
        ctx.restore(); }
      if (r.end) { const b = px(r.segs[r.segs.length - 1][1]); ctx.save(); ctx.font = `700 28px ${FONT}`; ctx.fillStyle = C.text; ctx.textBaseline = 'middle'; ctx.globalAlpha *= r.endAlpha ?? 1; ctx.fillText(r.end, b + 12, y + bh / 2 + 1); ctx.restore(); }
      ctx.restore(); y += bh + gap; }
    return y; }
  function ruler(x0, x1, y) { ctx.save(); ctx.strokeStyle = 'rgba(15,23,42,.55)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.moveTo(px(x0), y); ctx.lineTo(px(x1), y); ctx.stroke();
    ctx.font = `600 22px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'top'; ctx.fillStyle = 'rgba(15,23,42,.75)';
    for (let x = x0; x <= x1 + .01; x += 5) { const p = px(x), big = x % 10 === 0; ctx.beginPath(); ctx.moveTo(p, y); ctx.lineTo(p, y + (big ? 14 : 8)); ctx.stroke(); if (big) ctx.fillText(`${x} m`, p, y + 18); }
    ctx.restore(); return y + 50; }
  function bracket(x0, x1, text, y, color = C.text, alpha = 1) { const a = px(x0), b = px(x1);
    ctx.save(); ctx.globalAlpha = alpha; ctx.lineCap = 'round'; const path = () => { ctx.beginPath(); ctx.moveTo(a, y); ctx.lineTo(a, y + 14); ctx.lineTo(b, y + 14); ctx.lineTo(b, y); };
    ctx.strokeStyle = color; ctx.lineWidth = 4; path(); ctx.stroke(); ctx.restore();
    ctx.restore(); ctx.save(); ctx.globalAlpha = alpha; pill(ctx, clamp((a + b) / 2, 160, L.W - 160), y + 50, text, { size: 30 }); ctx.restore(); return y + 90; }
  // Notisark: regnestykket bygges opp linje for linje. Aktiv linje er turkis.
  function note(n) { const mob = L.H > L.W; if (!mob) n = { ...n, right: true }; const x0 = n.right ? L.W - 32 - (n.w ?? 560) : 32, lh = mob ? 52 : 44, y0 = n.bottom !== false ? L.sceneH - 32 - (70 + n.lines.length * lh) : 32, w = n.w ?? 560, h = 70 + n.lines.length * lh;
    ctx.save(); ctx.globalAlpha = n.alpha ?? 1; ctx.shadowColor = 'rgba(15,23,42,.22)'; ctx.shadowBlur = 18; ctx.shadowOffsetY = 4; ctx.fillStyle = 'rgba(255,255,255,.97)'; rr(ctx, x0, y0, w, h, 18); ctx.fill(); ctx.shadowColor = 'transparent';
    ctx.font = `600 22px ${FONT}`; ctx.fillStyle = C.teal; ctx.textBaseline = 'alphabetic'; ctx.fillText((n.title ?? 'REGNESTYKKE').toUpperCase(), x0 + 26, y0 + 40);
    n.lines.forEach((t, i) => { const on = i === (n.active ?? n.lines.length - 1); ctx.globalAlpha = (n.alpha ?? 1) * ((n.lineAlpha || [])[i] ?? 1); ctx.font = `${on ? 700 : 500} ${mob ? 34 : 30}px ${FONT}`; ctx.fillStyle = on ? C.teal : C.text; ctx.fillText(t, x0 + 26, y0 + 40 + 46 + i * lh); });
    ctx.restore(); }
  function marker(x, text, lane = 'near') { const [px, py] = at(x, 3.7, 0), [, top] = at(x, -3.7, 0); ctx.save(); ctx.setLineDash([10, 8]); ctx.strokeStyle = 'rgba(255,255,255,.95)'; ctx.lineWidth = 4; ctx.beginPath(); ctx.moveTo(px, py); ctx.lineTo(px, top); ctx.stroke(); ctx.restore();
    if (text) pill(ctx, px, top - 34, text, { size: 26, dot: C.text }); }

  window.setFormat = f => { L = LAYOUT[f]; canvas.width = L.W; canvas.height = L.H; renderer.setSize(L.W, L.sceneH); camera.aspect = L.W / L.sceneH; camera.updateProjectionMatrix(); window.filmFormat = f; };
  window.setFormat('mobile');

  function drawScene(sh) {
    Object.values(cars).forEach(c => c.o.visible = false);
    for (const [lane, front, braking, alpha] of (sh.cars || [])) placeCar(lane, front, braking, alpha);
    ball.visible = !!sh.ball; if (sh.ball) { ball.position.set(sh.ball[0], .35, sh.ball[1]); ball.rotation.set(sh.ball[2] ?? 0, 0, 0); }
    setStrips(sh.strips || []);
    lineMesh.visible = sh.line !== false && (sh.lineAlpha ?? 1) > .01; lineMesh.material.transparent = true; lineMesh.material.opacity = sh.lineAlpha ?? 1; lineMesh.position.set(0, .025, sh.lineZ ?? 0); lineMesh.scale.set(.3, 1, sh.lineW ?? 7.0);
    // Kamera: fra siden og litt ovenfra, x-midten og bredden bestemmer avstanden.
    const { cx, span, elev = 20, fov = 26 } = sh.cam, hf = 2 * Math.atan(Math.tan(fov * Math.PI / 360) * camera.aspect), dist = span / 2 / Math.tan(hf / 2), e = elev * Math.PI / 180;
    camera.fov = fov; camera.position.set(cx, Math.sin(e) * dist, Math.cos(e) * dist + (sh.cam.dz ?? 0)); camera.lookAt(cx, 0, sh.cam.lz ?? span * .26); camera.updateProjectionMatrix();
    sun.position.set(cx - 30, 80, 50); sun.target.position.set(cx, 0, 0);
    camera.updateMatrixWorld(); renderer.render(scene, camera);
    ctx.reset(); ctx.drawImage(renderer.domElement, 0, 0, L.W, L.sceneH);
    { const y0 = at(sh.cam.cx, 3.6)[1] + 36; let y = y0; if (sh.bars) y = bars(sh.bars, y);
      for (const [x, t, ma = 1] of (sh.markers || [])) { const p = px(x), [, top] = at(x, -3.7, 0); ctx.save(); ctx.globalAlpha = ma; ctx.setLineDash([10, 8]); ctx.strokeStyle = C.text; ctx.lineWidth = 3; ctx.beginPath(); ctx.moveTo(p, top); ctx.lineTo(p, y - 8); ctx.stroke(); pill(ctx, p, top - 34, t, { size: 26, dot: '#e8473a' }); ctx.restore(); }
      if (sh.ruler) y = ruler(...sh.ruler, y); for (const b of (sh.brackets || [])) y = bracket(b[0], b[1], b[2], y, b[3], b[4]); }
    for (const p of (sh.pills || [])) { if ((p.alpha ?? 1) < .01) continue; const [x, y] = at(p.x, p.lane ?? 'near', p.y ?? 2.2); ctx.save(); ctx.globalAlpha = p.alpha ?? 1; pill(ctx, clamp(x + (p.dx ?? 0), 150, L.W - 150), y + (p.dy ?? 0), p.text, { dot: p.dot, size: p.size ?? 28 }); ctx.restore(); }
    if (sh.note) note(sh.note);
    if (sh.summary) summary(sh.summary === true ? 1 : sh.summary);
  }
  function summary(alpha = 1) { if (alpha < .01) return; const wd = L.W > L.H, cw = wd ? 720 : 960, cx = wd ? L.W - cw - 40 : (L.W - cw) / 2, cy = wd ? 404 : 118, rows = SUMMARY_ROWS, rh = 78, ch = 150 + rows.length * rh;
    ctx.save(); ctx.globalAlpha = alpha; ctx.fillStyle = `rgba(15,23,42,${wd ? .2 : .35})`; ctx.fillRect(0, 0, L.W, L.sceneH); ctx.shadowColor = 'rgba(15,23,42,.35)'; ctx.shadowBlur = 30; ctx.fillStyle = C.white; rr(ctx, cx, cy, cw, ch, 24); ctx.fill(); ctx.shadowColor = 'transparent';
    ctx.font = `600 30px ${FONT}`; ctx.fillStyle = C.teal; ctx.fillText(SUMMARY_TITLE, cx + 48, cy + 70);
    const colX = (wd ? [40, 200, 380, 560] : [48, 270, 520, 760]).map(o => cx + o), head = ['Fart', 'Reaksjon', 'Bremsing', 'Stopp'], hc = [C.muted, C.teal, '#d97706', C.text];
    ctx.font = `600 28px ${FONT}`; head.forEach((t, i) => { ctx.fillStyle = hc[i]; ctx.fillText(t, colX[i], cy + 128); });
    rows.forEach((r, k) => { const y = cy + 128 + (k + 1) * rh; ctx.fillStyle = C.border; ctx.fillRect(cx + 40, y - 52, cw - 80, 2); ctx.font = `600 38px ${FONT}`; r.forEach((t, i) => { ctx.fillStyle = i === 3 ? C.text : hc[i] === C.muted ? C.text : hc[i]; ctx.fillText(t, colX[i], y); }); });
    ctx.restore(); }
  function posterPanel(lines, dur = DURATION_EST) {
    const { W, H, sceneH, pad } = L; ctx.save(); ctx.fillStyle = C.white; ctx.fillRect(0, sceneH, W, H - sceneH); ctx.fillStyle = C.border; ctx.fillRect(0, sceneH, W, 2);
    ctx.font = `600 ${L.label}px ${FONT}`; ctx.fillStyle = C.teal; ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic'; ctx.fillText(`FORKLARINGSFILM · ${Math.floor(dur / 60)}:${String(Math.floor(dur % 60)).padStart(2, '0')}`, pad, sceneH + 74);
    ctx.textAlign = 'right'; ctx.fillStyle = C.text; ctx.font = `700 ${L.label}px ${FONT}`; ctx.fillText('teori-test.no', W - pad, sceneH + 74);
    ctx.textAlign = 'left'; ctx.font = `700 ${L.font}px ${FONT}`; lines.forEach((t, i) => ctx.fillText(t, pad, sceneH + 74 + 34 + L.font + i * L.line));
    const cx = W - pad - 70, cy = sceneH + 74 + 34 + L.font * .6 + L.line * .5; ctx.shadowColor = 'rgba(13,148,136,.45)'; ctx.shadowBlur = 24; ctx.fillStyle = C.teal; ctx.beginPath(); ctx.arc(cx, cy, 70, 0, 7); ctx.fill();
    ctx.shadowColor = 'transparent'; ctx.fillStyle = C.white; ctx.beginPath(); ctx.moveTo(cx - 20, cy - 32); ctx.lineTo(cx + 36, cy); ctx.lineTo(cx - 20, cy + 32); ctx.closePath(); ctx.fill(); ctx.restore(); }

  const shots = SHOTS({ C, ORANGE });
  const total = CHAPTERS.reduce((s, c) => s + c.sec, 0), starts = CHAPTERS.map((_, i) => CHAPTERS.slice(0, i).reduce((s, c) => s + c.sec, 0)), marks = starts.slice(1).map(s => s / total);
  window.shotIds = shots.map(s => s.id);
  window.renderShot = function (id) {
    const sh = shots.find(x => x.id === id); if (!sh) throw Error('Ukjent bilde ' + id);
    drawScene(sh);
    if (sh.poster) { posterPanel(POSTER); window.infoBounds = []; return canvas; }
    const i = sh.chapter - 1, ch = CHAPTERS[i];
    const b = infoPanel(ctx, L, { chapter: sh.chapter, total: CHAPTERS.length, title: ch.title, lines: sh.text, progress: (starts[i] + ch.sec * sh.at) / total, chapterMarks: marks });
    window.infoBounds = b.map(x => ({ t: x.t, x: x.x, w: x.w })); return canvas;
  };

  // ---------- Filmen ----------
  const ease = k => { k = clamp(k); return k * k * (3 - 2 * k); };
  const DURATION = timing.duration, CHS = timing.chapters, endStart = CHS[CHS.length - 1].end;
  const film = FILM({ C, ORANGE, ease, clamp, CHS, SUMMARY_ROWS, wide: () => L.W > L.H });
  const chapterOf = t => { let i = 0; while (i < CHS.length - 1 && t >= CHS[i + 1].start) i++; return i; };
  const stateAt = (i, t) => { const ch = CHS[i]; t = Math.min(t, ch.end); return film.chapterState(i, t - ch.start, t - ch.speech); };
  const cuts = CHS.slice(1).map((c, k) => ({ t: c.start, prev: [k, c.start - 1e-3], fade: .5 }));
  const fmarks = CHS.slice(1).map(c => c.start / DURATION);
  const buffer = document.createElement('canvas'), bctx = buffer.getContext('2d');
  window.__film = film; window.__stateAt = stateAt; window.__CHS = CHS;
  window.setFilmFormat = f => { window.setFormat(f); return { width: L.W, height: L.H }; };
  window.chapterTimes = CHS.map(c => ({ chapter: c.chapter, title: c.title, start: c.start }));
  window.filmDuration = DURATION;
  window.renderFrame = function (seconds) {
    const t = clamp(Number(seconds) || 0, 0, DURATION), end = t >= endStart;
    const i = chapterOf(Math.min(t, endStart - 1e-3)), ch = CHS[i], u = t - ch.start, a = t - ch.speech;
    const cut = cuts.find(c => t >= c.t && t < c.t + c.fade);
    if (cut) { drawScene(stateAt(...cut.prev)); buffer.width = L.W; buffer.height = L.sceneH; bctx.drawImage(canvas, 0, 0, L.W, L.sceneH, 0, 0, L.W, L.sceneH); }
    const st = stateAt(i, t); drawScene(st);
    if (cut) { ctx.save(); ctx.globalAlpha = 1 - ease((t - cut.t) / cut.fade); ctx.drawImage(buffer, 0, 0); ctx.restore(); }
    const S = ch.sentences; let k = 0; S.forEach((s, j) => { if (a >= s - .15) k = j; });
    const lines = end ? END_LINES : POINTS[i][k], since = end ? t - endStart : k === 0 ? u : a - (S[k] - .15);
    const b = infoPanel(ctx, L, { chapter: i + 1, total: CHAPTERS.length, title: ch.title, lines, progress: t / DURATION, chapterMarks: fmarks, alpha: clamp(since / .25, 0, 1) });
    window.infoLayout = { bounds: b.map(x => ({ text: x.t, x: x.x, y: x.y, width: x.w, height: x.h })), width: L.W, sceneHeight: L.sceneH };
    window.frameInfo = { t, chapter: i + 1, title: ch.title, speechTime: a, endCard: end, point: lines.join(' '), duration: DURATION, cars: (st.cars || []).map(c => ({ lane: c[0], front: +c[1].toFixed(3), braking: !!c[2] })), log: st.log || null };
    return canvas;
  };
  // Plakaten i filmen bruker faktisk lengde.
  window.renderShot = (orig => id => { const c = orig(id); if (id === 'plakat') posterPanel(POSTER, DURATION); return c; })(window.renderShot);
  window.renderFrame(.5);
  window.ready = true; window.animationReady = true;
}
init().catch(e => { window.initError = window.animationError = String(e && e.stack || e); console.error(e); });

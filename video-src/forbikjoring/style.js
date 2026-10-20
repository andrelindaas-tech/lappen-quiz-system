// Grafisk profil for teori-test.no-filmer. Verdiene er hentet fra src/index.css.
export const C = {
  white: '#ffffff', text: '#0f172a', muted: '#64748b', border: '#e2e8f0', page: '#f8fafc',
  teal: '#0d9488', tealLight: '#14b8a6', tealSoft: 'rgba(20,184,166,.22)',
  green: '#059669', red: '#dc2626', redSoft: 'rgba(220,38,38,.20)', amber: '#f59e0b',
};
export const FONT = '"IBM Plex Sans", system-ui, sans-serif';

// Fast layout. Mobil er hovedformatet.
export const LAYOUT = {
  mobile: { W: 1080, H: 1350, sceneH: 960, pad: 56, label: 30, font: 56, line: 70, chip: 28 },
  wide:   { W: 1920, H: 1080, sceneH: 760, pad: 96, label: 30, font: 58, line: 72, chip: 28 },
};

export function rr(ctx, x, y, w, h, r) { ctx.beginPath(); ctx.roundRect(x, y, w, h, r); }

// Infofeltet nederst: kapittelmerke, logo, ett kort poeng (maks to linjer), fremdrift.
export function infoPanel(ctx, L, { chapter, total, title, lines, progress, chapterMarks = [], alpha = 1 }) {
  const { W, H, sceneH, pad } = L;
  ctx.save();
  ctx.fillStyle = C.white; ctx.fillRect(0, sceneH, W, H - sceneH);
  ctx.fillStyle = C.border; ctx.fillRect(0, sceneH, W, 2);
  ctx.textBaseline = 'alphabetic';
  const y0 = sceneH + 74;
  ctx.font = `600 ${L.label}px ${FONT}`; ctx.fillStyle = C.teal; ctx.textAlign = 'left';
  ctx.fillText(`KAPITTEL ${chapter} · ${title.toUpperCase()}`, pad, y0);
  ctx.textAlign = 'right'; ctx.fillStyle = C.text; ctx.font = `700 ${L.label}px ${FONT}`;
  ctx.fillText('teori-test.no', W - pad, y0);
  ctx.textAlign = 'left'; ctx.fillStyle = C.text; ctx.font = `600 ${L.font}px ${FONT}`;
  ctx.globalAlpha = alpha;
  const bounds = lines.map((t, i) => { const y = y0 + 34 + L.font + i * L.line; ctx.fillText(t, pad, y); return { t, x: pad, y: y - L.font, w: ctx.measureText(t).width, h: L.font * 1.25 }; });
  ctx.globalAlpha = 1;
  const barY = H - 44, barW = W - pad * 2;
  ctx.fillStyle = C.border; rr(ctx, pad, barY, barW, 8, 4); ctx.fill();
  ctx.fillStyle = C.teal; rr(ctx, pad, barY, Math.max(8, barW * progress), 8, 4); ctx.fill();
  ctx.fillStyle = C.white; for (const m of chapterMarks) ctx.fillRect(pad + barW * m - 2, barY, 4, 8);
  ctx.restore();
  return bounds;
}

// Kapittelmerke oppe til venstre i scenen.
export function chapterChip(ctx, L, n, total, title) {
  ctx.save(); ctx.font = `600 ${L.chip}px ${FONT}`;
  const txt = `${n}/${total}  ${title}`, w = ctx.measureText(txt).width + 44;
  ctx.shadowColor = 'rgba(15,23,42,.18)'; ctx.shadowBlur = 16; ctx.shadowOffsetY = 4;
  ctx.fillStyle = 'rgba(255,255,255,.94)'; rr(ctx, 32, 32, w, L.chip + 30, (L.chip + 30) / 2); ctx.fill();
  ctx.shadowColor = 'transparent'; ctx.fillStyle = C.teal; ctx.beginPath(); ctx.arc(32 + 24, 32 + (L.chip + 30) / 2, 6, 0, 7); ctx.fill();
  ctx.fillStyle = C.text; ctx.textBaseline = 'middle'; ctx.fillText(txt, 32 + 38, 32 + (L.chip + 30) / 2 + 1);
  ctx.restore();
}

// Liten etikett i scenen (tall, fart, tid). Hvit pille med mørk tekst, valgfri farget prikk.
export function pill(ctx, x, y, txt, { size = 30, dot = null, bg = 'rgba(255,255,255,.95)', color = C.text, align = 'center' } = {}) {
  ctx.save(); ctx.font = `700 ${size}px ${FONT}`; ctx.textBaseline = 'middle';
  const tw = ctx.measureText(txt).width, pw = tw + (dot ? 64 : 40), ph = size + 24;
  const left = align === 'center' ? x - pw / 2 : align === 'right' ? x - pw : x;
  ctx.shadowColor = 'rgba(15,23,42,.22)'; ctx.shadowBlur = 14; ctx.shadowOffsetY = 3;
  ctx.fillStyle = bg; rr(ctx, left, y - ph / 2, pw, ph, ph / 2); ctx.fill(); ctx.shadowColor = 'transparent';
  if (dot) { ctx.fillStyle = dot; ctx.beginPath(); ctx.arc(left + 26, y, 8, 0, 7); ctx.fill(); }
  ctx.fillStyle = color; ctx.textAlign = 'left'; ctx.fillText(txt, left + (dot ? 44 : 20), y + 1);
  ctx.restore();
  return { x: left, y: y - ph / 2, w: pw, h: ph };
}

// Nummerert markør (1–4) for sjekkpunkter.
export function marker(ctx, x, y, n, on = true) {
  ctx.save(); const r = 26;
  ctx.shadowColor = 'rgba(15,23,42,.25)'; ctx.shadowBlur = 12;
  ctx.fillStyle = on ? C.teal : 'rgba(255,255,255,.9)'; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
  ctx.shadowColor = 'transparent'; ctx.lineWidth = 4; ctx.strokeStyle = C.white; ctx.stroke();
  ctx.fillStyle = on ? C.white : C.muted; ctx.font = `700 28px ${FONT}`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(String(n), x, y + 1); ctx.restore();
}

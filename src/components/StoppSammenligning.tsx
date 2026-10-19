import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { C, bush, clampX, drawCar, tag } from "./brakingCanvas";
import "./BremselengdeFirdobling.css";
import "./StoppSammenligning.css";

/**
 * Animert stoppsammenligning: to biler ovenfra, samme hindring, 10 km/t forskjell.
 * Samme beregning som sammenligningen i bremselengde-artikkelen:
 *   reaksjonstid 1 s  -> reaksjonslengde = fart ÷ 3,6 × 1 s
 *   bremselengde (tørr asfalt) = (fart ÷ 10)² ÷ 2 m
 * Begge bremser like hardt og jevnt: a = 100 / 12,96 ≈ 7,7 m/s² (samme for alle farter).
 * 50 km/t -> 26,4 m, 60 km/t -> 34,7 m, 41 km/t ved hindringen. Scenen styres bare av tiden t (render(t)), ingen akkumulert tilstand.
 */

type Pair = { slow: number; fast: number };
const PAIRS: Pair[] = [
  { slow: 30, fast: 40 },
  { slow: 50, fast: 60 },
  { slow: 80, fast: 90 },
];

const A = 100 / 12.96; // m/s²
const TR = 1; // s
const PLAYBACK = 0.5; // sakte film, konstant hastighet

const ms = (kmh: number) => kmh / 3.6;
const reactionDist = (kmh: number) => ms(kmh) * TR;
const brakeDist = (kmh: number) => (kmh / 10) ** 2 / 2;
const stopDist = (kmh: number) => reactionDist(kmh) + brakeDist(kmh);
const stopTime = (kmh: number) => TR + ms(kmh) / A;

/** Posisjon (m) relativt til punktet der faren oppdages, t = 0 ved oppdagelse. */
function pos(kmh: number, t: number) {
  const v = ms(kmh);
  if (t <= TR) return v * t;
  const tb = Math.min(t - TR, v / A);
  return v * TR + v * tb - (A * tb * tb) / 2;
}
function speedKmh(kmh: number, t: number) {
  const v = ms(kmh);
  if (t <= TR) return kmh;
  return Math.max(0, v - A * (t - TR)) * 3.6;
}
/** Tid og fart når bilen når avstanden d. */
function arrival(kmh: number, d: number) {
  const v = ms(kmh);
  const r = reactionDist(kmh);
  if (d <= r) return { t: d / v, kmh };
  const v2 = Math.sqrt(Math.max(0, v * v - 2 * A * (d - r)));
  return { t: TR + (v - v2) / A, kmh: v2 * 3.6 };
}

const nf = (n: number, d = 1) =>
  n.toLocaleString("nb-NO", { minimumFractionDigits: 0, maximumFractionDigits: d });


type Phase = "idle" | "run1" | "paused" | "run2" | "done";

export default function StoppSammenligning() {
  const [pairIdx, setPairIdx] = useState(1);
  const [phase, setPhase] = useState<Phase>("idle");
  const [t, setT] = useState(0); // scenetid, 0 = start = faren oppdages
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const [width, setWidth] = useState(640);

  const pair = PAIRS[pairIdx];
  const m = useMemo(() => {
    const obstacle = stopDist(pair.slow);
    const fastStop = stopDist(pair.fast);
    const hit = arrival(pair.fast, obstacle);
    return {
      obstacle,
      fastStop,
      hitT: hit.t,
      hitKmh: Math.round(hit.kmh),
      endT: Math.max(stopTime(pair.fast), stopTime(pair.slow)),
      diff: fastStop - obstacle,
    };
  }, [pair]);

  // Responsiv bredde
  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setWidth(Math.max(240, Math.round(e.contentRect.width))));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const runTo = useCallback(
    (from: number, to: number, next: Phase) => {
      cancelAnimationFrame(rafRef.current!);
      if (reduceMotion) {
        setT(to);
        setPhase(next);
        return;
      }
      const start = performance.now();
      const tick = (now: number) => {
        const tt = Math.min(to, from + ((now - start) / 1000) * PLAYBACK);
        setT(tt);
        if (tt < to) rafRef.current = requestAnimationFrame(tick);
        else setPhase(next);
      };
      rafRef.current = requestAnimationFrame(tick);
    },
    [reduceMotion],
  );

  useEffect(() => () => cancelAnimationFrame(rafRef.current!), []);

  const reset = useCallback((idx?: number) => {
    cancelAnimationFrame(rafRef.current!);
    if (idx !== undefined) setPairIdx(idx);
    setPhase("idle");
    setT(0);
  }, []);

  const play = () => {
    setPhase("run1");
    runTo(0, m.hitT, "paused");
  };
  const showAll = () => {
    setPhase("run2");
    runTo(m.hitT, m.endT + 0.3, "done");
  };
  const replay = () => {
    setT(0);
    setPhase("run1");
    runTo(0, m.hitT, "paused");
  };

  // ---------- Tegning ----------
  const small = width < 520;
  const laneH = small ? 52 : 60;
  const roadTop = 58;
  const roadH = laneH * 2 + 10;
  const height = roadTop + roadH + 76;

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const dpr = window.devicePixelRatio || 1;
    cv.width = Math.round(width * dpr);
    cv.height = Math.round(height * dpr);
    const g = cv.getContext("2d");
    if (!g) return;
    g.setTransform(dpr, 0, 0, dpr, 0, 0);
    const font = getComputedStyle(cv).fontFamily || "system-ui, sans-serif";

    const padL = small ? 14 : 24;
    const padR = small ? 14 : 24;
    // Bilene har samme størrelse i alle tre sammenligningene (målestokk fra 80 mot 90 km/t).
    const sRef = (width - padL - padR) / (stopDist(PAIRS[PAIRS.length - 1].fast) + 4 + 6);
    const carPx = Math.min(56, Math.max(30, 5.5 * sRef));
    const carWpx = carPx * 0.5;
    const xMax = m.fastStop + 4;
    const s = (width - padL - padR - carPx) / (xMax + 1.5); // px per meter
    const xMin = -(carPx / s) - 1.5;
    const X = (d: number) => padL + (d - xMin) * s;
    const laneY = [roadTop + 5 + laneH / 2, roadTop + 5 + laneH * 1.5];
    const ox = X(m.obstacle);

    // Gress med prikker og busker (fast mønster)
    g.fillStyle = C.grass;
    g.fillRect(0, 0, width, height);
    g.fillStyle = C.grassDot;
    for (let i = 0; i < width * height / 900; i++) {
      const px = (i * 97.13) % width;
      const py = (i * 53.71 + (i % 7) * 13) % height;
      g.fillRect(px, py, 1.5, 1.5);
    }
    for (const f of [0.04, 0.27, 0.5, 0.73, 0.96]) {
      const bx = f * width;
      if (Math.abs(bx - X(0)) < 70 || Math.abs(bx - ox) < 50) continue;
      bush(g, bx, roadTop / 2 + ((f * 100) % 3) * 4 - 2, small ? 8 : 10);
    }

    // Vei med kantstein og gul stiplet midtlinje
    g.fillStyle = C.curb;
    g.fillRect(0, roadTop - 4, width, roadH + 8);
    g.fillStyle = C.road;
    g.fillRect(0, roadTop, width, roadH);
    g.fillStyle = C.white;
    const dashLen = 3 * s, period = 6 * s;
    const startX = X(0) - Math.ceil(X(0) / period) * period;
    for (let x = startX; x < width; x += period) g.fillRect(x, roadTop + roadH / 2 - 1.5, dashLen, 3);

    // Startpunkt (faren oppdages)
    g.strokeStyle = "rgba(255,255,255,0.75)";
    g.setLineDash([4, 4]);
    g.lineWidth = 1.5;
    g.beginPath();
    g.moveTo(X(0), roadTop + 3);
    g.lineTo(X(0), roadTop + roadH - 3);
    g.stroke();
    g.setLineDash([]);

    const cars = [
      { kmh: pair.slow, color: C.blue, soft: C.blueSoft, y: laneY[0], up: true },
      { kmh: pair.fast, color: C.red, soft: C.redSoft, y: laneY[1], up: false },
    ];

    // Strekninger: reaksjon (lys) og bremsing (bilfarge)
    for (const c of cars) {
      const p = pos(c.kmh, t);
      const r = Math.min(p, reactionDist(c.kmh));
      const bh = laneH * 0.7;
      if (t > 0) {
        g.fillStyle = C.reaction;
        g.fillRect(X(0), c.y - bh / 2, r * s, bh);
        if (p > r) {
          g.fillStyle = c.soft;
          g.fillRect(X(r), c.y - bh / 2, (p - r) * s, bh);
        }
      }
    }

    // Hindring: markert linje over begge spor
    const top = roadTop - 8, bot = roadTop + roadH + 8;
    g.fillStyle = C.white;
    g.fillRect(ox - 3, top, 6, bot - top);
    g.fillStyle = C.obstacle;
    for (let y = top; y < bot; y += 12) g.fillRect(ox - 3, y, 6, Math.min(6, bot - y));

    // Biler
    for (const c of cars) drawCar(g, X(pos(c.kmh, t)), c.y, carPx, carWpx, c.color);

    // Etiketter over veien
    g.font = `700 ${small ? 11 : 12}px ${font}`;
    g.textBaseline = "alphabetic";
    g.textAlign = "center";
    g.fillStyle = C.ink;
    const l1 = "Faren oppdages";
    g.fillText(l1, clampX(X(0), g.measureText(l1).width, width), roadTop - 12);
    g.fillStyle = C.obstacleText;
    g.fillText("Hindring", clampX(ox, g.measureText("Hindring").width, width), roadTop - 26);

    // Fartsskilt: over blå bil, under rød bil
    for (const c of cars) {
      const v = speedKmh(c.kmh, t);
      tag(g, X(pos(c.kmh, t)) - carPx / 2, c.y, carWpx, c.up, `${Math.round(v)} km/t`, c.color, font, small);
    }

    // Pause: «Fortsatt 41 km/t her»
    if (phase === "paused" || phase === "run2" || phase === "done") {
      const y = roadTop + roadH + 38;
      g.font = `800 ${small ? 12 : 13}px ${font}`;
      g.textAlign = "center";
      g.fillStyle = C.red;
      const txt = `Fortsatt ${m.hitKmh} km/t her`;
      g.fillText(txt, clampX(ox, g.measureText(txt).width, width), y);
    }

    // Ferdig: avstand mellom stoppunktene
    if (phase === "done") {
      const fx = X(m.fastStop);
      const y = roadTop + roadH + 52;
      g.strokeStyle = C.ink;
      g.fillStyle = C.ink;
      g.lineWidth = 1.5;
      g.beginPath();
      g.moveTo(ox, y - 6); g.lineTo(ox, y + 6);
      g.moveTo(fx, y - 6); g.lineTo(fx, y + 6);
      g.moveTo(ox, y); g.lineTo(fx, y);
      g.stroke();
      g.font = `800 ${small ? 12 : 13}px ${font}`;
      g.textAlign = "center";
      const txt = `${nf(m.diff)} m lenger`;
      g.fillText(txt, clampX((ox + fx) / 2, g.measureText(txt).width, width), y + 17);
    }

    // Meterskala
    g.fillStyle = C.muted;
    g.font = `600 ${small ? 10 : 11}px ${font}`;
    g.textAlign = "center";
    const step = xMax > 50 ? 10 : 5;
    const sy = roadTop + roadH + 22;
    for (let d = 0; d <= xMax - 2; d += step) {
      g.fillRect(X(d) - 0.5, roadTop + roadH + 6, 1, 5);
      g.fillText(`${d} m`, X(d), sy);
    }
  }, [t, width, height, small, laneH, roadH, pair, m, phase]);

  // ---------- Tekst ----------
  const caption = (() => {
    if (phase === "idle")
      return "Den blå bilen rekker å stoppe. Hva tror du skjer med den andre?";
    if (phase === "paused")
      return `Den røde bilen er ved hindringen og har fortsatt ${m.hitKmh} km/t. Den blå bremser fortsatt og stopper ved streken.`;
    if (phase === "done")
      return `Den blå stopper ved hindringen. Den røde stopper ${nf(m.diff)} m lenger frem.`;
    if (t < TR) return "Faren er oppdaget. Under reaksjonstiden kjører begge videre i full fart.";
    return "Begge bremser like hardt.";
  })();

  const running = phase === "run1" || phase === "run2";

  return (
    <figure className="stop-animation">
      <p className="stop-label">Stoppsammenligning · 10 km/t forskjell</p>
      <div className="stop-pairs">
        {PAIRS.map((p, i) => (
          <button
            key={i}
            type="button"
            onClick={() => reset(i)}
            aria-pressed={i === pairIdx}
            className="stop-pair"
          >
            {p.slow} mot {p.fast} km/t
          </button>
        ))}
      </div>

      <div ref={wrapRef} className="braking-animation-scene">
        <canvas
          ref={canvasRef}
          style={{ width, height, display: "block" }}
          role="img"
          aria-label={`To biler sett ovenfra. Blå bil i ${pair.slow} km/t og rød bil i ${pair.fast} km/t bremser for samme hindring.`}
        />
      </div>

      <div className="stop-controls">
        <p className="braking-animation-caption" aria-live="polite">
          {caption}
        </p>

        <div className="stop-buttons">
          {phase === "idle" && (
            <button type="button" onClick={play} className="braking-animation-play">
              ▶ Spill av
            </button>
          )}
          {phase === "paused" && (
            <button type="button" onClick={showAll} className="braking-animation-play">
              Vis hele stoppet
            </button>
          )}
          {(phase === "done" || phase === "paused") && (
            <button type="button" onClick={replay} className="braking-animation-play">
              ↺ Spill på nytt
            </button>
          )}
          {running && <span className="py-2 text-sm text-slate-500">Vises i sakte film …</span>}
        </div>

        <div className="stop-legend">
          <Legend color="#94a3b8" label="Reaksjonsstrekning" />
          <Legend color="linear-gradient(90deg,#60a5fa,#f87171)" label="Bremsestrekning" />
          <Legend color="repeating-linear-gradient(90deg,#0f172a 0 6px,#fff 6px 12px)" label="Hindring" />
        </div>

        {phase === "done" && (
          <dl className="stop-stats">
            <Stat color="var(--color-text)" title={`${pair.slow} km/t`} value={`${nf(stopDist(pair.slow))} m`} sub="stopplengde" />
            <Stat color="var(--color-text)" title={`${pair.fast} km/t`} value={`${nf(stopDist(pair.fast))} m`} sub={`stopplengde · ${m.hitKmh} km/t ved hindringen`} />
          </dl>
        )}

        <p className="text-sm text-slate-700">
          Bare 10 km/t høyere fart kan gi stor forskjell når du må stoppe.
        </p>

        <details className="braking-animation-method">
          <summary className="braking-animation-summary">Slik regner vi</summary>
          <ul className="braking-animation-list">
            <li>Begge førerne reagerer etter ett sekund. Reaksjonslengden blir fart ÷ 3,6 × 1 sekund.</li>
            <li>Bremselengden følger huskeregelen for tørr asfalt: (fart ÷ 10) × (fart ÷ 10) ÷ 2.</li>
            <li>Begge bremser like hardt og jevnt hele veien.</li>
            <li>Hindringen ligger der bilen med lavest fart stopper.</li>
            <li>Farten ved hindringen regnes ut fra hvor langt den raskeste bilen har bremset når den når streken.</li>
            <li>Animasjonen vises i halv fart. Tallene er avrundet.</li>
          </ul>
        </details>
      </div>
    </figure>
  );
}

function Legend({ color, label }: { color: string; label: string }) {
  return (
    <span className="stop-legend-item">
      <span className="stop-swatch" style={{ background: color }} />
      {label}
    </span>
  );
}

function Stat({ color, title, value, sub }: { color: string; title: string; value: string; sub: string }) {
  return (
    <div className="stop-stat">
      <dt style={{ color }}>{title}</dt>
      <dd className="stop-stat-value">{value}</dd>
      <dd className="text-slate-500">{sub}</dd>
    </div>
  );
}

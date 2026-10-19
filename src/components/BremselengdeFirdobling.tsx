import { useCallback, useEffect, useRef, useState } from "react";
import { C, bush, drawCar, roundRect } from "./brakingCanvas";
import "./BremselengdeFirdobling.css";

/**
 * Animasjon: når farten dobles, blir bremselengden fire ganger så lang.
 * Fire biler (15, 30, 60, 120 km/t) begynner å bremse ved samme strek og bremser like hardt.
 * Bremselengde etter huskeregelen for tørr asfalt: (fart ÷ 10)² ÷ 2 -> 1,1 / 4,5 / 18 / 72 m.
 * Reaksjonslengden er ikke med. Scenen styres bare av tiden t.
 */

const SPEEDS = [15, 30, 60, 120];
const A = 100 / 12.96; // m/s², samme for alle (følger av huskeregelen)
const PLAYBACK = 0.75;

const ms = (kmh: number) => kmh / 3.6;
const brakeDist = (kmh: number) => (kmh / 10) ** 2 / 2;
const stopTime = (kmh: number) => ms(kmh) / A;
function pos(kmh: number, t: number) {
  const v = ms(kmh);
  const tb = Math.min(Math.max(0, t), v / A);
  return v * tb - (A * tb * tb) / 2;
}
const nf = (n: number) => n.toLocaleString("nb-NO", { maximumFractionDigits: 1 });
const END = stopTime(SPEEDS[SPEEDS.length - 1]);

type Phase = "idle" | "run" | "done";

type Poster = { src: string; width?: number; height?: number; alt: string };

// Before the first play, a still of the end state is shown. It is in the server-rendered HTML,
// so search engines get an image with the same numbers as the animation.
export default function BremselengdeFirdobling({ poster }: { poster?: Poster }) {
  const [phase, setPhase] = useState<Phase>("idle");
  const [t, setT] = useState(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>();
  const [width, setWidth] = useState(640);

  useEffect(() => {
    const el = wrapRef.current;
    if (!el) return;
    const ro = new ResizeObserver(([e]) => setWidth(Math.max(240, Math.round(e.contentRect.width))));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);
  useEffect(() => () => cancelAnimationFrame(rafRef.current!), []);

  const reduceMotion =
    typeof window !== "undefined" &&
    window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

  const play = useCallback(() => {
    cancelAnimationFrame(rafRef.current!);
    setPhase("run");
    if (reduceMotion) {
      setT(END);
      setPhase("done");
      return;
    }
    const start = performance.now();
    const tick = (now: number) => {
      const tt = Math.min(END, ((now - start) / 1000) * PLAYBACK);
      setT(tt);
      if (tt < END) rafRef.current = requestAnimationFrame(tick);
      else setPhase("done");
    };
    rafRef.current = requestAnimationFrame(tick);
  }, [reduceMotion]);

  // ---------- Tegning ----------
  const small = width < 520;
  // On narrow screens the still is too small to read, so the canvas with its compact layout is shown instead.
  const showPoster = !!poster && !small && phase === "idle";
  const laneH = small ? 40 : 46;
  const top = 34;
  const roadH = laneH * SPEEDS.length + 8;
  const height = top + roadH + 34;

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

    const labelW = small ? 70 : 100;
    const carPx = small ? 30 : 44;
    const carW = carPx * 0.5;
    const x0 = labelW + carPx + 8; // bremsestreken
    const textRoom = small ? 78 : 104;
    const s = (width - x0 - textRoom - 10) / brakeDist(SPEEDS[SPEEDS.length - 1]);
    const laneY = (i: number) => top + 4 + laneH * (i + 0.5);

    // Gress
    g.fillStyle = C.grass;
    g.fillRect(0, 0, width, height);
    g.fillStyle = C.grassDot;
    for (let i = 0; i < (width * height) / 900; i++) {
      g.fillRect((i * 97.13) % width, (i * 53.71 + (i % 7) * 13) % height, 1.5, 1.5);
    }
    g.font = `700 ${small ? 11 : 12}px ${font}`;
    const labelEnd = Math.max(labelW, x0 - 30) + g.measureText("Bremsene tas i bruk her").width + 24;
    for (const f of [0.55, 0.8, 0.97]) if (f * width > labelEnd) bush(g, f * width, top / 2, small ? 7 : 9);

    // Vei (starter etter fartskolonnen)
    const roadX = labelW;
    g.fillStyle = C.curb;
    g.fillRect(roadX, top - 4, width - roadX, roadH + 8);
    g.fillStyle = C.road;
    g.fillRect(roadX, top, width - roadX, roadH);
    g.fillStyle = "rgba(255,255,255,0.75)";
    for (let i = 1; i < SPEEDS.length; i++) {
      const y = top + 4 + laneH * i;
      for (let x = roadX + 6; x < width; x += 22) g.fillRect(x, y - 1, 11, 2);
    }

    // Bremsestrek
    g.fillStyle = C.white;
    g.fillRect(x0 - 2, top - 6, 4, roadH + 12);
    g.font = `700 ${small ? 11 : 12}px ${font}`;
    g.fillStyle = C.ink;
    g.textAlign = "left";
    g.fillText("Bremsene tas i bruk her", Math.max(roadX, x0 - 30), top - 12);

    SPEEDS.forEach((kmh, i) => {
      const y = laneY(i);
      const p = pos(kmh, t);
      const front = x0 + p * s;
      const stopped = t >= stopTime(kmh) - 1e-6;

      // Bremsestrekning
      if (p > 0) {
        g.fillStyle = C.yellow;
        g.fillRect(x0, y - laneH * 0.3, p * s, laneH * 0.6);
      }
      drawCar(g, front, y, carPx, carW, C.blue);

      // Fart i venstre kolonne
      g.font = `800 ${small ? 12 : 14}px ${font}`;
      g.fillStyle = C.ink;
      g.textAlign = "right";
      g.textBaseline = "middle";
      g.fillText(`${kmh} km/t`, labelW - 8, y);

      // Meter etter bilen
      if (t > 0) {
        g.font = `800 ${small ? 12 : 14}px ${font}`;
        g.textAlign = "left";
        g.fillStyle = C.white;
        const txt = `${nf(stopped ? brakeDist(kmh) : p)} m`;
        g.fillText(txt, front + 6, y);
        if (phase === "done" && i > 0) {
          const tw = g.measureText(txt).width;
          pill(g, front + 6 + tw + 6, y, "×4", font, small, width);
        }
      }
      g.textBaseline = "alphabetic";
    });

    // «2×» mellom fartene
    g.strokeStyle = C.muted;
    g.lineWidth = 1.5;
    g.font = `800 ${small ? 11 : 12}px ${font}`;
    g.fillStyle = C.muted;
    g.textAlign = "left";
    for (let i = 0; i < SPEEDS.length - 1; i++) {
      const y1 = laneY(i) + 6, y2 = laneY(i + 1) - 6, bx = 6;
      g.beginPath();
      g.moveTo(bx + 6, y1); g.lineTo(bx, y1); g.lineTo(bx, y2); g.lineTo(bx + 6, y2);
      g.stroke();
      g.textBaseline = "middle";
      g.fillText("2×", bx + 5, (y1 + y2) / 2);
      g.textBaseline = "alphabetic";
    }

    // Meterskala
    g.fillStyle = C.muted;
    g.font = `600 ${small ? 10 : 11}px ${font}`;
    g.textAlign = "center";
    const step = [5, 10, 20, 25, 50].find((st) => st * s >= 38) ?? 50;
    for (let d = 0; d <= brakeDist(SPEEDS[SPEEDS.length - 1]); d += step) {
      g.fillRect(x0 + d * s - 0.5, top + roadH + 6, 1, 5);
      g.fillText(`${d} m`, x0 + d * s, top + roadH + 22);
    }
  }, [t, width, height, small, laneH, roadH, phase]);

  const caption =
    phase === "idle"
      ? showPoster
        ? "Alle bilene bremser like hardt fra samme strek. Trykk «Spill av» og se hvordan de stopper."
        : "Alle bilene begynner å bremse ved samme strek og bremser like hardt. Hvor langt kommer hver av dem?"
      : phase === "run"
        ? "Bilene bremser …"
        : "Dobbel fart gir fire ganger så lang bremselengde: omtrent 1,1 → 4,5 → 18 → 72 meter.";

  return (
    <figure className="braking-animation">
      <p className="braking-animation-label">Dobbel fart · bremselengde</p>
      <div ref={wrapRef} className="braking-animation-scene">
        <canvas
          ref={canvasRef}
          style={{ width, height, display: showPoster ? "none" : "block" }}
          role="img"
          aria-label="Fire biler i 15, 30, 60 og 120 km/t bremser fra samme strek. Bremselengdene blir 1,1, 4,5, 18 og 72 meter."
        />
        {showPoster && poster && (
          <img
            className="braking-animation-poster"
            src={poster.src}
            width={poster.width}
            height={poster.height}
            alt={poster.alt}
            loading="lazy"
          />
        )}
      </div>
      <div className="braking-animation-controls">
        <p className="braking-animation-caption" aria-live="polite">
          {caption}
        </p>
        <div className="braking-animation-buttons">
          {phase !== "run" && (
            <button
              type="button"
              onClick={play}
              className="braking-animation-play"
            >
              {phase === "idle" ? "▶ Spill av" : "↺ Spill på nytt"}
            </button>
          )}
        </div>
        <p className="braking-animation-note">
          Halverer du farten, blir bremselengden en firedel.
        </p>
        <details className="braking-animation-method">
          <summary className="braking-animation-summary">Slik regner vi</summary>
          <ul className="braking-animation-list">
            <li>Bremselengde på tørr asfalt = (fart ÷ 10) × (fart ÷ 10) ÷ 2.</li>
            <li>Alle bilene bremser like hardt og jevnt fra samme strek.</li>
            <li>Reaksjonslengden er ikke med her. Ved samme reaksjonstid blir den dobbelt så lang når farten dobles.</li>
            <li>Animasjonen vises litt saktere enn i virkeligheten.</li>
          </ul>
        </details>
      </div>
    </figure>
  );
}

function pill(g: CanvasRenderingContext2D, x: number, cy: number, text: string, font: string, small: boolean, width: number) {
  g.font = `800 ${small ? 10 : 11}px ${font}`;
  const w = g.measureText(text).width + 10;
  const h = small ? 16 : 18;
  if (x + w > width - 2) return;
  g.fillStyle = C.yellow;
  roundRect(g, x, cy - h / 2, w, h, h / 2);
  g.fill();
  g.fillStyle = C.ink;
  g.textAlign = "center";
  g.fillText(text, x + w / 2, cy + 0.5);
  g.textAlign = "left";
}

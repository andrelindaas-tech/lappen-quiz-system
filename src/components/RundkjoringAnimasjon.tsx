import { useEffect, useRef, useState } from 'react'

const CENTER = { x: 220, y: 200 }
const RADIUS = 78

export default function RundkjoringAnimasjon() {
  const [angleB, setAngleB] = useState(-Math.PI / 2)
  const [carAX, setCarAX] = useState(30)
  const [carAState, setCarAState] = useState<'driving' | 'stopped'>('driving')
  const rafRef = useRef<number>()
  const lastRef = useRef<number>()
  const carAPhase = useRef(0)

  useEffect(() => {
    const tick = (ts: number) => {
      const dt = lastRef.current ? (ts - lastRef.current) / 1000 : 0
      lastRef.current = ts

      // Bil B kjører inne i rundkjøringen
      setAngleB(a => a - dt * (2 * Math.PI / 6))

      // Bil A kjører inn fra venstre, stopper ved vikepliktlinjen
      carAPhase.current += dt
      const phase = carAPhase.current % 5
      if (phase < 1.5) {
        setCarAX(30 + (phase / 1.5) * 95)
        setCarAState('driving')
      } else if (phase < 3.5) {
        setCarAX(125)
        setCarAState('stopped')
      } else {
        setCarAX(125 - ((phase - 3.5) / 1.5) * 95)
        setCarAState('driving')
      }

      rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current!)
  }, [])

  // Bil B sin posisjon — orbit rundt CENTER med radius 78
  const bx = CENTER.x + RADIUS * Math.cos(angleB)
  const by = CENTER.y + RADIUS * Math.sin(angleB)
  const bRot = (angleB * 180 / Math.PI) + 90

  return (
    <div style={{ width: '100%', maxWidth: 480, margin: '0 auto' }}>
      <svg width="100%" viewBox="0 0 440 400" role="img" xmlns="http://www.w3.org/2000/svg">
        <title>Vikeplikt i rundkjøring</title>
        <desc>Animert illustrasjon: bil A stopper ved vikepliktlinjen, bil B kjører inne i rundkjøringen</desc>

        {/* Bakgrunn */}
        <rect width="440" height="400" fill="#c5d99a" rx="10"/>

        {/* Vei horisontalt */}
        <rect x="0" y="170" width="440" height="62" fill="#555"/>
        {/* Vei vertikalt */}
        <rect x="194" y="0" width="62" height="400" fill="#555"/>

        {/* Rundkjøring asfalt */}
        <circle cx={CENTER.x} cy={CENTER.y} r="105" fill="#555"/>
        {/* Midtøy */}
        <circle cx={CENTER.x} cy={CENTER.y} r="52" fill="#7ab855"/>
        <circle cx={CENTER.x} cy={CENTER.y} r="38" fill="#68a044" opacity="0.6"/>

        {/* Ringvei stiplet midtlinje — bil B sin bane */}
        <circle cx={CENTER.x} cy={CENTER.y} r={RADIUS} fill="none" stroke="#f5f0dc" strokeWidth="1.5" strokeDasharray="10 7"/>

        {/* Midtlinje horisontal */}
        <line x1="0" y1="201" x2="118" y2="201" stroke="#f5f0dc" strokeWidth="2" strokeDasharray="14 8"/>
        <line x1="322" y1="201" x2="440" y2="201" stroke="#f5f0dc" strokeWidth="2" strokeDasharray="14 8"/>
        {/* Midtlinje vertikal */}
        <line x1="225" y1="0" x2="225" y2="95" stroke="#f5f0dc" strokeWidth="2" strokeDasharray="14 8"/>
        <line x1="225" y1="305" x2="225" y2="400" stroke="#f5f0dc" strokeWidth="2" strokeDasharray="14 8"/>

        {/* Vikepliktlinjer */}
        <line x1="118" y1="173" x2="118" y2="229" stroke="#fffde0" strokeWidth="3" strokeDasharray="7 5"/>
        <line x1="322" y1="173" x2="322" y2="229" stroke="#fffde0" strokeWidth="3" strokeDasharray="7 5"/>
        <line x1="197" y1="95" x2="253" y2="95" stroke="#fffde0" strokeWidth="3" strokeDasharray="7 5"/>
        <line x1="197" y1="305" x2="253" y2="305" stroke="#fffde0" strokeWidth="3" strokeDasharray="7 5"/>

        {/* Pil kjøreretning — økt opacity */}
        <defs>
          <marker id="arr2" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke="rgba(255,255,255,0.8)" strokeWidth="1.5" strokeLinecap="round"/>
          </marker>
        </defs>
        <path d="M 298 130 A 78 78 0 0 1 298 272" fill="none" stroke="rgba(255,255,255,0.7)" strokeWidth="2.5"
          markerEnd="url(#arr2)"/>

        {/* Bil B — inne i rundkjøringen, orbit radius 78 */}
        <g transform={`translate(${bx}, ${by}) rotate(${bRot})`}>
          <rect x="-11" y="-7" width="22" height="14" rx="3" fill="#E24B4A"/>
          <rect x="-7" y="-4" width="14" height="6" rx="1" fill="rgba(255,255,255,0.5)"/>
          <circle cx="-8" cy="8" r="3" fill="#222"/>
          <circle cx="8" cy="8" r="3" fill="#222"/>
          <circle cx="-8" cy="-8" r="3" fill="#222"/>
          <circle cx="8" cy="-8" r="3" fill="#222"/>
        </g>

        {/* Bil A — høyre kjørefelt (y=193), kjører fra venstre */}
        <g transform={`translate(${carAX}, 193)`}>
          <rect x="-11" y="-7" width="22" height="14" rx="3" fill="#378ADD"/>
          <rect x="-7" y="-4" width="14" height="6" rx="1" fill="rgba(255,255,255,0.5)"/>
          <circle cx="-8" cy="8" r="3" fill="#222"/>
          <circle cx="8" cy="8" r="3" fill="#222"/>
          <circle cx="-8" cy="-8" r="3" fill="#222"/>
          <circle cx="8" cy="-8" r="3" fill="#222"/>
          {/* Bremselys når stoppet */}
          {carAState === 'stopped' && (
            <rect x="-13" y="-5" width="4" height="10" rx="1" fill="#ff4444" opacity="0.9"/>
          )}
        </g>

        {/* Vikeplikt-trekant når Bil A stopper */}
        {carAState === 'stopped' && (
          <g transform="translate(118, 155)">
            <polygon points="0,-12 10,6 -10,6" fill="#cc2200" stroke="white" strokeWidth="2"/>
            <text x="0" y="4" textAnchor="middle" fontSize="8" fontWeight="700" fill="white">!</text>
          </g>
        )}

        {/* Label Bil A */}
        <rect x="8" y="125" width="130" height="48" rx="6" fill="var(--color-background-primary)" stroke="#378ADD" strokeWidth="1.5"/>
        <text x="73" y="145" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="12" fontWeight="600" fill="#378ADD">Bil A</text>
        <text x="73" y="162" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9.5" fill="var(--color-text-secondary)">
          {carAState === 'stopped' ? 'Stopper — har vikeplikt' : 'Kjører mot rundkjøringen'}
        </text>

        {/* Label Bil B */}
        <rect x="292" y="55" width="140" height="48" rx="6" fill="var(--color-background-primary)" stroke="#E24B4A" strokeWidth="1.5"/>
        <text x="362" y="75" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="12" fontWeight="600" fill="#E24B4A">Bil B</text>
        <text x="362" y="92" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="9.5" fill="var(--color-text-secondary)">Inne — har forkjørsrett</text>

        {/* Tittel-boks */}
        <rect x="95" y="348" width="250" height="34" rx="7" fill="var(--color-background-primary)" stroke="var(--color-border-tertiary)" strokeWidth="0.5"/>
        <text x="220" y="370" textAnchor="middle" fontFamily="var(--font-sans)" fontSize="12" fontWeight="500" fill="var(--color-text-primary)">Vikeplikt ved innkjøring</text>
      </svg>
    </div>
  )
}

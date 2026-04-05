import { useState } from 'react'

// ---- Data ----------------------------------------------------------------
interface LineInfo {
  id: string
  title: string
  description: string
  rule: string
  ruleType: 'green' | 'red' | 'amber'
}

const LINE_DATA: Record<string, LineInfo> = {
  kantlinje: {
    id: 'kantlinje',
    title: 'Kantlinje',
    description:
      'Markerer yttergrensen av kjørebanen mot veikanten eller skulder. Hvit kantlinje er standard. Gul kantlinje langs fortau eller parkering indikerer stans- og parkeringsforbud.',
    rule: 'Ikke kjør utenfor',
    ruleType: 'amber',
  },
  'stiplet-linje': {
    id: 'stiplet-linje',
    title: 'Stiplet hvit linje — kjørefeltlinje',
    description:
      'Skiller kjørefelt i samme kjøreretning. Du kan krysse den når det er trygt og lovlig — for eksempel ved feltskifte eller forbikjøring der forholdene tillater det.',
    rule: 'Kan krysses',
    ruleType: 'green',
  },
  sperrelinje: {
    id: 'sperrelinje',
    title: 'Heltrukken hvit linje — sperrelinje',
    description:
      'Forbyr overkjøring og feltskifte. Går langs kjøreretningen mellom kjørefelt der forbikjøring er farlig. Brukes der sikt eller trafikkforhold er dårlige.',
    rule: 'Kan IKKE krysses',
    ruleType: 'red',
  },
  'gul-sperrelinje': {
    id: 'gul-sperrelinje',
    title: 'Gul sperrelinje — skiller kjøreretninger',
    description:
      'Heltrukken gul linje skiller kjøreretninger på toveisveier. Det er forbudt å krysse eller kjøre til venstre for gul sperrelinje — selv med god sikt.',
    rule: 'Absolutt forbudt å krysse',
    ruleType: 'red',
  },
}

// ---- Helpers -------------------------------------------------------------
function ruleColor(type: 'green' | 'red' | 'amber'): string {
  if (type === 'green') return '#22c55e'
  if (type === 'red') return '#ef4444'
  return '#f59e0b'
}

function ruleBg(type: 'green' | 'red' | 'amber'): string {
  if (type === 'green') return 'rgba(34,197,94,0.12)'
  if (type === 'red') return 'rgba(239,68,68,0.12)'
  return 'rgba(245,158,11,0.12)'
}

// ---- SVG dimensions ------------------------------------------------------
// viewBox: 0 0 520 200
//   y=0..10   grass top
//   y=10..20  shoulder (gravel tone)
//   y=20..25  kantlinje top (white)
//   y=25..95  lanes 1 & 3 (direction →)
//     centre of road: y=100
//   y=95..105 gul sperrelinje + sperrelinje  (split line)
//   y=105..175 lanes 2 & 4 (direction ←)
//   y=175..180 kantlinje bottom (white)
//   y=180..190 shoulder
//   y=190..200 grass bottom
//
// Vertical split between gul/hvit sperrelinje: x=260

const TOP_KANT_Y = 22
const BOT_KANT_Y = 178
const CENTER_Y = 100
const GUL_X_END = 260
const HVT_X_START = 260

export default function VeimerkingInteraktiv() {
  const [active, setActive] = useState<string | null>(null)

  const toggle = (id: string) => setActive(prev => (prev === id ? null : id))

  const isActive = (id: string) => active === id

  const lineHighlight = (id: string) =>
    isActive(id) ? { filter: 'brightness(1.5)' } : {}

  const info = active ? LINE_DATA[active] : null

  return (
    <div style={{ fontFamily: 'var(--font-family)' }}>
      {/* ---- SVG scene ------------------------------------------------- */}
      <div
        style={{
          borderRadius: 'var(--radius-lg)',
          overflow: 'hidden',
          border: '1px solid var(--color-border)',
          marginBottom: '1rem',
        }}
      >
        <svg
          viewBox="0 0 520 200"
          width="100%"
          style={{ display: 'block', maxWidth: '100%' }}
          aria-label="Interaktiv vegstrekning — klikk på linjene"
        >
          {/* ---- Bakgrunn: gress ---------------------------------------- */}
          <rect x="0" y="0" width="520" height="200" fill="#4a7c59" />

          {/* ---- Skulder / gruset asfalt --------------------------------- */}
          <rect x="0" y="13" width="520" height="12" fill="#9ca3af" />
          <rect x="0" y="175" width="520" height="12" fill="#9ca3af" />

          {/* ---- Kjørebane asfalt --------------------------------------- */}
          <rect x="0" y="25" width="520" height="150" fill="#374151" />

          {/* ---- Kjørefeltsstriper (stiplet hvit) y≈62 —— felt 1/3 ------- */}
          {/* Dashes in top half (lanes 1 & 3) */}
          {Array.from({ length: 9 }).map((_, i) => (
            <rect
              key={`d1-${i}`}
              x={i * 60 + 10}
              y={62}
              width={30}
              height={3}
              fill="white"
              opacity={0.9}
            />
          ))}
          {/* Dashes in bottom half (lanes 2 & 4) */}
          {Array.from({ length: 9 }).map((_, i) => (
            <rect
              key={`d2-${i}`}
              x={i * 60 + 10}
              y={138}
              width={30}
              height={3}
              fill="white"
              opacity={0.9}
            />
          ))}

          {/* ---- Gul sperrelinje (venstre halvdel — skiller retninger) --- */}
          <line
            x1="0" y1={CENTER_Y}
            x2={GUL_X_END} y2={CENTER_Y}
            stroke="#facc15"
            strokeWidth={4}
            style={{ ...lineHighlight('gul-sperrelinje') }}
          />
          {/* Hit area for gul sperrelinje */}
          <rect
            x="0" y={CENTER_Y - 10}
            width={GUL_X_END} height={20}
            fill="transparent"
            style={{ cursor: 'pointer' }}
            onClick={() => toggle('gul-sperrelinje')}
          />
          {isActive('gul-sperrelinje') && (
            <rect
              x="0" y={CENTER_Y - 6}
              width={GUL_X_END} height={12}
              fill="none"
              stroke="#facc15"
              strokeWidth="2"
              rx="2"
              opacity={0.7}
            />
          )}

          {/* ---- Hvit sperrelinje (høyre halvdel — mellom felt 3/4) ------- */}
          <line
            x1={HVT_X_START} y1={CENTER_Y}
            x2="520" y2={CENTER_Y}
            stroke="white"
            strokeWidth={4}
            style={{ ...lineHighlight('sperrelinje') }}
          />
          {/* Hit area for hvit sperrelinje */}
          <rect
            x={HVT_X_START} y={CENTER_Y - 10}
            width={520 - HVT_X_START} height={20}
            fill="transparent"
            style={{ cursor: 'pointer' }}
            onClick={() => toggle('sperrelinje')}
          />
          {isActive('sperrelinje') && (
            <rect
              x={HVT_X_START} y={CENTER_Y - 6}
              width={520 - HVT_X_START} height={12}
              fill="none"
              stroke="white"
              strokeWidth="2"
              rx="2"
              opacity={0.7}
            />
          )}

          {/* ---- Kantlinje topp ------------------------------------------ */}
          <line
            x1="0" y1={TOP_KANT_Y}
            x2="520" y2={TOP_KANT_Y}
            stroke="white"
            strokeWidth={3}
            style={{ ...lineHighlight('kantlinje') }}
          />
          {/* Hit area kantlinje topp */}
          <rect
            x="0" y={TOP_KANT_Y - 8}
            width="520" height={18}
            fill="transparent"
            style={{ cursor: 'pointer' }}
            onClick={() => toggle('kantlinje')}
          />
          {isActive('kantlinje') && (
            <rect
              x="0" y={TOP_KANT_Y - 5}
              width="520" height={10}
              fill="none"
              stroke="white"
              strokeWidth="2"
              rx="2"
              opacity={0.7}
            />
          )}

          {/* ---- Kantlinje bunn ------------------------------------------ */}
          <line
            x1="0" y1={BOT_KANT_Y}
            x2="520" y2={BOT_KANT_Y}
            stroke="white"
            strokeWidth={3}
            style={{ ...lineHighlight('kantlinje') }}
          />
          {/* Hit area kantlinje bunn */}
          <rect
            x="0" y={BOT_KANT_Y - 8}
            width="520" height={18}
            fill="transparent"
            style={{ cursor: 'pointer' }}
            onClick={() => toggle('kantlinje')}
          />

          {/* ---- Stiplet midtlinje (felt-deler, høyre halvdel, klikkbar) -- */}
          {/* Invisible clickable strip over dashes in top half (felt 1/3) */}
          <rect
            x="0" y={55}
            width="520" height={16}
            fill="transparent"
            style={{ cursor: 'pointer' }}
            onClick={() => toggle('stiplet-linje')}
          />
          {/* Invisible clickable strip over dashes in bottom half (felt 2/4) */}
          <rect
            x="0" y={131}
            width="520" height={16}
            fill="transparent"
            style={{ cursor: 'pointer' }}
            onClick={() => toggle('stiplet-linje')}
          />
          {isActive('stiplet-linje') && (
            <>
              <rect
                x="0" y={58}
                width="520" height={8}
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                rx="2"
                opacity={0.5}
              />
              <rect
                x="0" y={134}
                width="520" height={8}
                fill="none"
                stroke="white"
                strokeWidth="1.5"
                rx="2"
                opacity={0.5}
              />
            </>
          )}

          {/* ---- Kjøreretningspiler -------------------------------------- */}
          {/* → pil i felt 1 (top half) */}
          <text x="120" y={50} fill="white" fontSize="16" textAnchor="middle" opacity={0.6} style={{ pointerEvents: 'none' }}>→</text>
          <text x="380" y={50} fill="white" fontSize="16" textAnchor="middle" opacity={0.6} style={{ pointerEvents: 'none' }}>→</text>
          {/* ← pil i felt 2 (bottom half) */}
          <text x="120" y={158} fill="white" fontSize="16" textAnchor="middle" opacity={0.6} style={{ pointerEvents: 'none' }}>←</text>
          <text x="380" y={158} fill="white" fontSize="16" textAnchor="middle" opacity={0.6} style={{ pointerEvents: 'none' }}>←</text>

          {/* ---- Label — gul sperrelinje --------------------------------- */}
          <text x="130" y={96} fill="#facc15" fontSize="8.5" textAnchor="middle" opacity={0.8} style={{ pointerEvents: 'none' }}>
            Gul sperrelinje
          </text>
          {/* ---- Label — hvit sperrelinje -------------------------------- */}
          <text x="390" y={96} fill="rgba(255,255,255,0.7)" fontSize="8.5" textAnchor="middle" style={{ pointerEvents: 'none' }}>
            Hvit sperrelinje
          </text>
          {/* ---- Label — stiplet linje ----------------------------------- */}
          <text x="260" y={52} fill="rgba(255,255,255,0.6)" fontSize="8" textAnchor="middle" style={{ pointerEvents: 'none' }}>
            Kjørefeltlinje
          </text>
          {/* ---- Label — kantlinje --------------------------------------- */}
          <text x="460" y={19} fill="rgba(255,255,255,0.7)" fontSize="8" textAnchor="middle" style={{ pointerEvents: 'none' }}>
            Kantlinje
          </text>
        </svg>
      </div>

      {/* ---- Prompt when nothing selected --------------------------------- */}
      {!info && (
        <div
          style={{
            textAlign: 'center',
            color: 'var(--color-text-light)',
            fontSize: 'var(--font-size-sm)',
            padding: '0.75rem',
            border: '1px dashed var(--color-border)',
            borderRadius: 'var(--radius-md)',
          }}
        >
          👆 Klikk på en linje i illustrasjonen for å se hva den betyr
        </div>
      )}

      {/* ---- Info card ---------------------------------------------------- */}
      {info && (
        <div
          style={{
            background: 'var(--color-bg)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: 'var(--spacing-lg)',
            transition: 'all 0.2s ease',
            animation: 'fadeIn 0.2s ease',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: 'var(--spacing-md)',
              flexWrap: 'wrap',
            }}
          >
            <h3
              style={{
                margin: 0,
                fontSize: 'var(--font-size-lg)',
                fontWeight: 700,
                color: 'var(--color-text)',
              }}
            >
              {info.title}
            </h3>
            {/* Regel-badge */}
            <span
              style={{
                display: 'inline-block',
                background: ruleBg(info.ruleType),
                color: ruleColor(info.ruleType),
                border: `1px solid ${ruleColor(info.ruleType)}`,
                borderRadius: '999px',
                padding: '0.2rem 0.75rem',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 700,
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              {info.rule}
            </span>
          </div>
          <p
            style={{
              marginTop: 'var(--spacing-sm)',
              color: 'var(--color-text-light)',
              lineHeight: 1.6,
              marginBottom: 0,
            }}
          >
            {info.description}
          </p>
        </div>
      )}
    </div>
  )
}

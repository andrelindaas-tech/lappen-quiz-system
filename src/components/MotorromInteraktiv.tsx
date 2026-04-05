import { useState, cloneElement, isValidElement, ReactElement } from 'react'

interface MotorKomponent {
    id: string
    name: string
    x: number
    y: number
    color: string
    icon: React.ReactNode
    kortBeskrivelse: string
    langBeskrivelse: string
    sjekkPunkter: string[]
    tegnPaFeil: string[]
}

const OilIcon = ({ color = 'currentColor' }: { color?: string }) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {/* Body */}
        <path d="M7 17h11v-5H7v5z" />
        {/* Handle */}
        <path d="M7 12l-4-1v3l4 1" />
        {/* Cap (T-shape) */}
        <path d="M11 12v-2m-2 0h4" />
        {/* Spout */}
        <path d="M18 14c2-1 4-1 6-3l-2 3" />
        {/* Drop */}
        <path d="M22 17v.01" />
    </svg>
)

const CoolantIcon = ({ color = 'currentColor' }: { color?: string }) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10 19H14" />
        <path d="M12 19V5" />
        <path d="M10 9H14" />
        <path d="M10 13H14" />
        <path d="M8 21C8 21 9 20 12 20C15 20 16 21 16 21" />
        <path d="M8 17C8 17 9 16 12 16C15 16 16 17 16 17" />
    </svg>
)

const BrakeIcon = ({ color = 'currentColor' }: { color?: string }) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8V12" />
        <path d="M12 16H12.01" />
        <path d="M3 12C3 12 4 8 7 6" />
        <path d="M21 12C21 12 20 8 17 6" />
        <path d="M3 12C3 12 4 16 7 18" />
        <path d="M21 12C21 12 20 16 17 18" />
    </svg>
)

const WasherIcon = ({ color = 'currentColor' }: { color?: string }) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 18C2 18 6 14 12 14C18 14 22 18 22 18" />
        <path d="M12 14V11" />
        <path d="M12 11C12 11 10 9 10 7C10 5 12 4 12 4C12 4 14 5 14 7C14 9 12 11 12 11" />
        <path d="M8 11C8 11 7 9 7 7C7 5 8 4 8 4" />
        <path d="M16 11C16 11 17 9 17 7C17 5 16 4 16 4" />
    </svg>
)

const BatteryIcon = ({ color = 'currentColor' }: { color?: string }) => (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M6 4V6" />
        <path d="M18 4V6" />
        <path d="M5 12H9" />
        <path d="M7 10V14" />
        <path d="M15 12H19" />
    </svg>
)

const komponenter: MotorKomponent[] = [
    {
        id: 'kjolevaeske',
        name: 'Kjølevæske',
        x: 105, y: 275,
        color: '#3b82f6',
        icon: <CoolantIcon />,
        kortBeskrivelse: 'Holder motoren kjølig og hindrer overoppheting.',
        langBeskrivelse: 'Kjølevæsken sirkulerer gjennom motoren og radiatoren for å regulere motortemperaturen. For lite kjølevæske kan føre til overoppheting og alvorlige motorskader.',
        sjekkPunkter: [
            'Kontroller nivået i ekspansjonsbeholderen — skal stå mellom MIN og MAX',
            'Sjekk at lokket sitter godt og er tett',
        ],
        tegnPaFeil: [
            'Lavt nivå kan tyde på lekkasje i systemet',
            'Hvit røyk fra eksosen kan tyde på at kjølevæske lekker inn i motoren',
        ],
    },
    {
        id: 'bremsevaeske',
        name: 'Bremsevæske',
        x: 320, y: 45,
        color: '#ef4444',
        icon: <BrakeIcon />,
        kortBeskrivelse: 'Overfører bremsekraften fra pedalen til hjulbremsene.',
        langBeskrivelse: 'Bremsevæsken overfører kraften fra bremsepedalen til hjulene. Beholderen sitter vanligvis ved siden av motoren, nær firewall.',
        sjekkPunkter: [
            'Kontroller at nivået er mellom MIN og MAX på beholderen',
            'Se at beholderen ikke er sprukken eller skadet',
        ],
        tegnPaFeil: [
            'Lavt nivå kan tyde på lekkasje eller slitte bremseklosser',
            'Myk bremsepedal kan skyldes luft i systemet',
        ],
    },
    {
        id: 'spylervaeske',
        name: 'Spylervæske',
        x: 435, y: 275,
        color: '#06b6d4',
        icon: <WasherIcon />,
        kortBeskrivelse: 'Væske til frontruten og eventuelt bakvindusvisker.',
        langBeskrivelse: 'Spylervæske brukes av viskersystemet til å vaske vekk skitt og insekter. Viktig for god sikt. Om vinteren må man bruke frostbestendig blanding.',
        sjekkPunkter: [
            'Kontroller nivået i beholderen — lett gjenkjennelig med vindusvaskersymbol',
            'Bruk spylervæske med frostvern om vinteren (-20°C eller lavere)',
            'Sjekk at sprederne er rettet riktig og ikke er tette',
        ],
        tegnPaFeil: [
            'Tom beholder — fyll opp med blanding egnet for temperatur',
            'Tette spredere kan renses med en nål',
            'Bruk aldri rent vann — fryser og skader pumpen',
        ],
    },
    {
        id: 'oljepaafylling',
        name: 'Oljepåfylling',
        x: 325, y: 145,
        color: '#f59e0b',
        icon: <OilIcon />,
        kortBeskrivelse: 'Lokket der du fyller på motorolje.',
        langBeskrivelse: 'Motoren trenger lodd for smøring. Oljepåfyllingslokket sitter på toppen av motoren, ofte merket med et oljekannesymbol.',
        sjekkPunkter: [
            'Fyll kun med korrekt oljeType — se bilens manual',
            'Ikke overfyll — sjekk nivået med oljenivåpinnen',
            'Pass på at lokket sitter skikkelig på plass',
        ],
        tegnPaFeil: [
            'Hvit emulsjon på lokket kan tyde på vann i olja (kondens eller lekkasje)',
            'Svart, tykk olje betyr den er forurenset og bør byttes',
        ],
    },
    {
        id: 'oljepin',
        name: 'Oljenivåpinne',
        x: 200, y: 220,
        color: '#f97316',
        icon: <OilIcon />,
        kortBeskrivelse: 'Pinnen du bruker for å sjekke oljenivået i motoren.',
        langBeskrivelse: 'Oljenivåpinnen (dipstick) har to merker — MIN og MAX. Oljenivået bør alltid ligge mellom disse.',
        sjekkPunkter: [
            'Slå av motoren og vent 5 minutter før du måler',
            'Dra ut, tørk av, stikk helt inn, og dra ut på nytt',
            'Les nivået — skal være mellom MIN og MAX',
        ],
        tegnPaFeil: [
            'For lavt nivå — fyll på litt om gangen',
            'For høyt nivå — kan skade motortettinger',
        ],
    },
    {
        id: 'batteri',
        name: 'Batteri',
        x: 440, y: 110,
        color: '#8b5cf6',
        icon: <BatteryIcon />,
        kortBeskrivelse: 'Startbatteri som gir strøm til tenning og elektronikk.',
        langBeskrivelse: 'Bilbatteriet leverer strøm til startmotoren. Et svakt batteri er vanligste årsak til startvansker om vinteren.',
        sjekkPunkter: [
            'Sjekk at kablene sitter godt fastskrudd',
            'Kontroller at batteriet sitter fysisk fast',
        ],
        tegnPaFeil: [
            'Bilen starter tregt — batteriet kan være svakt',
            'Løse kabler kan føre til startvansker og gnister',
        ],
    },
]

export default function MotorromInteraktiv() {
    const [aktiv, setAktiv] = useState<string | null>(null)

    const aktivKomponent = komponenter.find(k => k.id === aktiv) ?? null

    return (
        <div style={{
            fontFamily: 'inherit',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid var(--color-border)',
            background: 'var(--color-card-bg)',
            boxShadow: '0 10px 30px -10px rgba(0,0,0,0.2)',
        }}>
            {/* SVG Engine Bay */}
            <div style={{ position: 'relative', background: 'var(--motorrom-bg)', padding: '0', overflow: 'hidden' }}>
                <svg
                    viewBox="0 0 520 340"
                    width="100%"
                    style={{ display: 'block', maxHeight: '420px' }}
                    aria-label="Interaktivt motorrom"
                >
                    {/* Background area */}
                    <rect x="0" y="0" width="520" height="340" fill="var(--motorrom-bg)" />
                    
                    {/* Simplified walls/perspective lines - solid clean lines */}
                    <path d="M0,40 L520,40" stroke="var(--color-border)" strokeWidth="1" opacity="0.3" />
                    <path d="M0,300 L520,300" stroke="var(--color-border)" strokeWidth="1" opacity="0.3" />

                    {/* Windshield / Cowl area (Top) */}
                    <rect x="0" y="0" width="520" height="40" fill="var(--motorrom-engine-front)" opacity="0.5" />
                    <text x="260" y="24" textAnchor="middle" fontSize="11" fill="var(--motorrom-text)" fontWeight="600" letterSpacing="1.5">← PASSASJERKABIN (FRONTREKKE) →</text>

                    {/* Engine Block - Solid with clear border */}
                    <rect x="150" y="80" width="220" height="180" rx="12" fill="var(--motorrom-engine)" stroke="var(--color-border)" strokeWidth="2" />
                    
                    {/* Simple decorative lines for engine cover */}
                    {[110, 140, 170, 200, 230].map(y => (
                        <line key={y} x1="180" y1={y} x2="340" y2={y} stroke="var(--motorrom-bg)" strokeWidth="2" opacity="0.4" strokeLinecap="round" />
                    ))}
                    
                    <text x="260" y="105" textAnchor="middle" fontSize="11" fill="var(--motorrom-text)" fontWeight="800" opacity="0.5">MOTOR / ENGINE</text>

                    {/* Battery box - Solid */}
                    <rect x="390" y="70" width="90" height="80" rx="6" fill="var(--motorrom-engine-front)" stroke="var(--color-border)" strokeWidth="1.5" />
                    <circle cx="410" cy="85" r="5" fill="var(--motorrom-text)" />
                    <circle cx="460" cy="85" r="5" fill="var(--motorrom-text)" />

                    {/* Coolant Reservoir (Left side) - Simplified circular shape */}
                    <circle cx="105" cy="275" r="35" fill="var(--motorrom-engine)" stroke="var(--color-border)" strokeWidth="1.5" />
                    <circle cx="105" cy="275" r="22" fill="var(--motorrom-engine-front)" stroke="var(--color-border)" strokeWidth="1" />

                    {/* Washer Fluid Reservoir (Right side) - Solid box */}
                    <rect x="405" y="255" width="60" height="40" rx="8" fill="var(--motorrom-engine)" stroke="var(--color-border)" strokeWidth="1.5" />
                    <circle cx="435" cy="275" r="14" fill="#06b6d4" opacity="0.2" />

                    {/* Decoration lines (Hoses/Wires) - Subtle solid lines */}
                    <path d="M140,260 Q120,200 150,150" fill="none" stroke="var(--motorrom-text)" strokeWidth="2" opacity="0.2" />
                    <path d="M380,100 Q430,90 400,60" fill="none" stroke="var(--motorrom-text)" strokeWidth="2" opacity="0.2" />

                    {/* Front area (Bottom) */}
                    <rect x="0" y="300" width="520" height="40" fill="var(--motorrom-engine-front)" opacity="0.5" />
                    <text x="260" y="325" textAnchor="middle" fontSize="11" fill="var(--motorrom-label)" fontWeight="bold" letterSpacing="2">↓ DU STÅR HER (FRONTEN AV BILEN) ↓</text>

                    {/* Hotspots */}
                    {komponenter.map(k => {
                        const isActive = aktiv === k.id
                        return (
                            <g key={k.id} style={{ cursor: 'pointer' }} onClick={() => setAktiv(isActive ? null : k.id)}>
                                {/* Pulse ring */}
                                {!isActive && (
                                    <circle cx={k.x} cy={k.y} r="20" fill={k.color} opacity="0.15">
                                        <animate attributeName="r" values="16;24;16" dur="3s" repeatCount="indefinite" />
                                        <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
                                    </circle>
                                )}
                                {/* Main dot with shadow */}
                                <circle cx={k.x} cy={k.y + 2} r="14" fill="rgba(0,0,0,0.5)" />
                                <circle
                                    cx={k.x} cy={k.y} r="14"
                                    fill={isActive ? k.color : 'var(--motorrom-bg)'}
                                    stroke={k.color}
                                    strokeWidth="2.5"
                                    style={{ transition: 'all 0.3s ease' }}
                                />
                                {/* Icon/X */}
                                {isActive ? (
                                    <text
                                        x={k.x} y={k.y + 5}
                                        textAnchor="middle"
                                        fontSize="14"
                                        fill="white"
                                        style={{ transition: 'all 0.3s' }}
                                    >
                                        ✕
                                    </text>
                                ) : (
                                    <g transform={`translate(${k.x - 10}, ${k.y - 10})`}>
                                        {isValidElement(k.icon) 
                                            ? cloneElement(k.icon as ReactElement, { color: 'var(--color-text)' })
                                            : k.icon}
                                    </g>
                                )}
                                {/* Active indicator tooltip-like circle */}
                                {isActive && (
                                    <path d={`M${k.x},${k.y-14} L${k.x-8},${k.y-30} L${k.x+8},${k.y-30} Z`} fill={k.color} />
                                )}
                            </g>
                        )
                    })}
                </svg>
            </div>

            {/* Info panel */}
            <div style={{
                padding: '1.5rem',
                minHeight: '140px',
                borderTop: '1px solid var(--color-border)',
                background: 'var(--color-bg)',
            }}>
                {!aktivKomponent ? (
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '1rem',
                        margin: '2rem 0',
                    }}>
                        <div style={{ padding: '1rem', background: 'var(--color-surface)', borderRadius: '50%', color: 'var(--color-primary)' }}>
                            <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"/></svg>
                        </div>
                        <p style={{
                            color: 'var(--color-text-light)',
                            fontSize: '0.95rem',
                            textAlign: 'center',
                            margin: 0,
                            maxWidth: '300px'
                        }}>
                            Klikk på punktene i motorrommet for å lære nøyaktig hva du skal sjekke på oppkjøringen
                        </p>
                    </div>
                ) : (
                    <div style={{ animation: 'fadeIn 0.3s ease-out' }}>
                        {/* Header */}
                        <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', marginBottom: '1.25rem' }}>
                            <div style={{ 
                                width: '48px', 
                                height: '48px', 
                                background: aktivKomponent.color + '22',
                                borderRadius: '12px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '1.75rem',
                                border: `1.5px solid ${aktivKomponent.color}44`
                            }}>
                                {isValidElement(aktivKomponent.icon) 
                                    ? cloneElement(aktivKomponent.icon as ReactElement, { color: aktivKomponent.color })
                                    : aktivKomponent.icon}
                            </div>
                            <div>
                                <h3 style={{
                                    margin: 0,
                                    fontSize: '1.2rem',
                                    fontWeight: 800,
                                    color: 'var(--color-text)',
                                    marginBottom: '0.25rem'
                                }}>
                                    {aktivKomponent.name}
                                </h3>
                                <p style={{ margin: 0, fontSize: '0.95rem', color: aktivKomponent.color, fontWeight: 600 }}>
                                    {aktivKomponent.kortBeskrivelse}
                                </p>
                            </div>
                        </div>

                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text)', lineHeight: 1.65, marginBottom: '1.5rem', opacity: 0.9 }}>
                            {aktivKomponent.langBeskrivelse}
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                            {/* Checkpoints */}
                            <div style={{
                                background: 'var(--color-surface)',
                                borderRadius: '12px',
                                padding: '1rem',
                                border: `1px solid var(--color-border)`,
                                borderLeft: `4px solid ${aktivKomponent.color}`
                            }}>
                                <p style={{ margin: '0 0 0.75rem', fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-text)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ color: aktivKomponent.color }}>✓</span> Hva du sjekker
                                </p>
                                <ul style={{ margin: 0, paddingLeft: '1.25rem', listStyleType: 'none' }}>
                                    {aktivKomponent.sjekkPunkter.map((p, i) => (
                                        <li key={i} style={{ fontSize: '0.88rem', color: 'var(--color-text-light)', lineHeight: 1.5, marginBottom: '0.5rem', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: '-1rem', color: '#10b981' }}>•</span>
                                            {p}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Faults */}
                            <div style={{
                                background: 'var(--color-surface)',
                                borderRadius: '12px',
                                padding: '1rem',
                                border: `1px solid var(--color-border)`,
                                borderLeft: `4px solid #ef4444`
                            }}>
                                <p style={{ margin: '0 0 0.75rem', fontSize: '0.8rem', fontWeight: 800, color: 'var(--color-text)', textTransform: 'uppercase', letterSpacing: '0.05em', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <span style={{ color: '#ef4444' }}>⚠️</span> Tegn på feil
                                </p>
                                <ul style={{ margin: 0, paddingLeft: '1.25rem', listStyleType: 'none' }}>
                                    {aktivKomponent.tegnPaFeil.map((t, i) => (
                                        <li key={i} style={{ fontSize: '0.88rem', color: 'var(--color-text-light)', lineHeight: 1.5, marginBottom: '0.5rem', position: 'relative' }}>
                                            <span style={{ position: 'absolute', left: '-1rem', color: '#ef4444' }}>•</span>
                                            {t}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* Quick selectors */}
            <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.6rem',
                padding: '1rem 1.5rem',
                background: 'var(--color-card-bg)',
                borderTop: '1px solid var(--color-border)',
            }}>
                {komponenter.map(k => (
                    <button
                        key={k.id}
                        onClick={() => setAktiv(aktiv === k.id ? null : k.id)}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '0.4rem',
                            padding: '0.5rem 1rem',
                            borderRadius: '10px',
                            border: `1.5px solid ${aktiv === k.id ? k.color : 'var(--color-border)'}`,
                            background: aktiv === k.id ? k.color + '15' : 'var(--color-bg)',
                            color: aktiv === k.id ? k.color : 'var(--color-text-light)',
                            fontSize: '0.85rem',
                            fontWeight: 700,
                            cursor: 'pointer',
                            transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                        }}
                    >
                        <span style={{ fontSize: '1rem', display: 'flex', alignItems: 'center' }}>
                            {isValidElement(k.icon) 
                                ? cloneElement(k.icon as ReactElement, { color: aktiv === k.id ? k.color : 'var(--color-text-light)' })
                                : k.icon}
                        </span>
                        <span>{k.name}</span>
                    </button>
                ))}
            </div>

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    )
}

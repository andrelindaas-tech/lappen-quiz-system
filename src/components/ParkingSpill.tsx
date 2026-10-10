import { useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { Helmet } from 'react-helmet-async'
import { Check, ChevronRight, RotateCcw, X } from 'lucide-react'
import Link from './InternalLink'
import { createGameAnalytics } from '../utils/gameAnalytics'
import { parkingScenarios, type ParkingScenario, type ParkingSpot as ParkingSpotData } from '../data/parkingScenarios'
import './ParkingSpill.css'

const TOTAL = parkingScenarios.length
const SEO_TITLE = 'Parkeringsspill – hvor kan du parkere? Gratis teorispill'
const SEO_DESCRIPTION = `Tren på stans og parkering i ${TOTAL} tegnede situasjoner: 5-metersregelen, gangfelt, holdeplass og skilt. Gratis spill til teoriprøven klasse B.`

// Kjørefeltet der spilleren kjører, og båndet der teksten under plassene står.
const LANE_TOP = 304
const LANE_HEIGHT = 78
const PILL_Y = 411
const PILL_Y_BELOW_SIDEWALK = 458
const FIVE_METERS = 165

const STOP_TEMPLATES: ParkingScenario['template'][] = ['sign-unloading', 'stop-ban']

function joinLabels(labels: string[]) {
    if (labels.length <= 1) return labels.join('')
    return `${labels.slice(0, -1).join(', ')} eller ${labels[labels.length - 1]}`
}

function Tree({ x, y, scale = 1 }: { x: number; y: number; scale?: number }) {
    return (
        <g className="pk-tree" transform={`translate(${x} ${y}) scale(${scale})`} aria-hidden="true">
            <circle className="pk-tree-shadow" cx="5" cy="7" r="24" />
            <circle className="pk-tree-crown" r="22" />
            <circle className="pk-tree-light" cx="-7" cy="-8" r="8" />
        </g>
    )
}

function TopDownCar() {
    return (
        <g className="pk-car" aria-hidden="true">
            <rect className="pk-car-shadow" x="-39" y="-17" width="84" height="38" rx="14" />
            <rect className="pk-car-body" x="-42" y="-20" width="84" height="40" rx="14" />
            <path className="pk-car-hood" d="M 18 -16 H 29 Q 37 -15 39 -8 V 8 Q 37 15 29 16 H 18 Z" />
            <path className="pk-car-cabin" d="M -18 -16 H 13 L 23 -10 V 10 L 13 16 H -18 L -27 10 V -10 Z" />
            <path className="pk-car-window" d="M 11 -13 L 19 -8 V 8 L 11 13 Z" />
            <path className="pk-car-window" d="M -16 -13 L -23 -8 V 8 L -16 13 Z" />
            <rect className="pk-car-roof" x="-12" y="-13" width="20" height="26" rx="4" />
            <g className="pk-car-wheels">
                <rect x="-27" y="-23" width="15" height="6" rx="3" />
                <rect x="19" y="-23" width="15" height="6" rx="3" />
                <rect x="-27" y="17" width="15" height="6" rx="3" />
                <rect x="19" y="17" width="15" height="6" rx="3" />
            </g>
            <g className="pk-car-lights">
                <rect x="36" y="-11" width="4" height="8" rx="2" />
                <rect x="36" y="3" width="4" height="8" rx="2" />
            </g>
        </g>
    )
}

function House({ x, y, width = 150, height = 56 }: { x: number; y: number; width?: number; height?: number }) {
    const half = width / 2
    return (
        <g aria-hidden="true">
            <rect className="pk-roof-shadow" x={x + 5} y={y + 7} width={width} height={height} rx="7" />
            <rect className="pk-roof-a" x={x} y={y} width={half} height={height} rx="7" />
            <rect className="pk-roof-b" x={x + half} y={y} width={half} height={height} rx="7" />
            <rect className="pk-roof-a" x={x + half - 8} y={y} width="8" height={height} />
            <line className="pk-roof-ridge" x1={x + half} y1={y + 3} x2={x + half} y2={y + height - 3} />
            <path className="pk-roof-lines" d={`M ${x + 8} ${y + height * 0.28} H ${x + width - 8} M ${x + 8} ${y + height * 0.52} H ${x + width - 8} M ${x + 8} ${y + height * 0.76} H ${x + width - 8}`} />
            <rect className="pk-chimney" x={x + width - 34} y={y + 12} width="14" height="14" rx="2" />
        </g>
    )
}

function Bush({ x, y, r = 14 }: { x: number; y: number; r?: number }) {
    return (
        <g aria-hidden="true">
            <circle className="pk-tree-shadow" cx={x + 3} cy={y + 4} r={r} />
            <circle className="pk-hedge" cx={x} cy={y} r={r} />
            <circle className="pk-hedge-light" cx={x - r / 3} cy={y - r / 3} r={r / 3} />
        </g>
    )
}

function RoadBase() {
    return (
        <>
            <defs>
                <pattern id="pk-asphalt" width="16" height="16" patternUnits="userSpaceOnUse">
                    <circle className="pk-asphalt-dot" cx="3" cy="4" r="1" />
                    <circle className="pk-asphalt-dot" cx="11" cy="9" r="0.9" />
                    <circle className="pk-asphalt-dot" cx="6" cy="14" r="0.8" />
                    <circle className="pk-asphalt-dot" cx="14" cy="2" r="0.7" />
                </pattern>
                <pattern id="pk-paving" width="44" height="34" patternUnits="userSpaceOnUse">
                    <path className="pk-paving-joint" d="M 0.75 0 V 34 M 0 17 H 44" />
                </pattern>
            </defs>
            <rect className="pk-grass" width="800" height="520" rx="22" />
            <House x={150} y={8} width={150} height={52} />
            <rect className="pk-hedge" x="132" y="68" width="186" height="16" rx="8" />
            <rect className="pk-hedge-light" x="140" y="70" width="170" height="5" rx="2.5" />
            <rect className="pk-hedge" x="30" y="482" width="240" height="18" rx="9" />
            <rect className="pk-hedge-light" x="38" y="485" width="224" height="5" rx="2.5" />
            <Bush x={742} y={72} r={15} />
            <Bush x={300} y={494} r={14} />
            <Bush x={324} y={502} r={10} />
            <rect className="pk-sidewalk" y="92" width="800" height="34" />
            <rect y="92" width="800" height="34" fill="url(#pk-paving)" />
            <rect className="pk-sidewalk" y="394" width="800" height="34" />
            <rect y="394" width="800" height="34" fill="url(#pk-paving)" />
            <rect className="pk-road" y="126" width="800" height="268" />
            <rect y="126" width="800" height="268" fill="url(#pk-asphalt)" />
            <rect className="pk-kerb" y="120" width="800" height="6" />
            <rect className="pk-kerb" y="394" width="800" height="6" />
            <rect className="pk-kerb-shadow" y="126" width="800" height="5" />
            <rect className="pk-kerb-shadow" y="389" width="800" height="5" />
            <line className="pk-centerline" x1="0" y1="260" x2="800" y2="260" />
            <line className="pk-edge-line" x1="0" y1="138" x2="800" y2="138" />
            <line className="pk-edge-line" x1="0" y1="382" x2="800" y2="382" />
            <g className="pk-direction" aria-hidden="true">
                <path d="M 40 283 H 90 M 78 272 L 90 283 L 78 294" />
                <path d="M 760 196 H 710 M 722 185 L 710 196 L 722 207" />
            </g>
            <Tree x={70} y={55} scale={0.8} />
            <Tree x={742} y={470} scale={0.85} />
        </>
    )
}

function ParkingForbiddenSign({ x, arrow = true }: { x: number; arrow?: boolean }) {
    return (
        <g className="pk-sign" transform={`translate(${x} 431)`} aria-hidden="true">
            <rect className="pk-sign-post" x="-4" y="-53" width="8" height="60" rx="3" />
            <circle className="pk-sign-rim" cy="-76" r="29" />
            <circle className="pk-sign-face" cy="-76" r="22" />
            <path className="pk-sign-slash" d="M -15 -91 L 15 -61" />
            {arrow && (
                <g className="pk-sign-arrow" transform="translate(0 -32)">
                    <rect x="-17" y="-15" width="34" height="30" rx="3" />
                    <path d="M -9 0 H 9 M 3 -6 L 9 0 L 3 6" />
                </g>
            )}
        </g>
    )
}

function StopForbiddenSign({ x }: { x: number }) {
    return (
        <g className="pk-sign" transform={`translate(${x} 431)`} aria-hidden="true">
            <rect className="pk-sign-post" x="-4" y="-53" width="8" height="60" rx="3" />
            <circle className="pk-sign-rim" cy="-76" r="29" />
            <circle className="pk-sign-face" cy="-76" r="22" />
            <path className="pk-sign-slash" d="M -14 -90 L 14 -62 M 14 -90 L -14 -62" />
        </g>
    )
}

function BusStopSign({ x }: { x: number }) {
    return (
        <g className="pk-bus-sign" transform={`translate(${x} 431)`} aria-hidden="true">
            <rect className="pk-sign-post" x="-4" y="-57" width="8" height="64" rx="3" />
            <rect className="pk-bus-sign-board" x="-24" y="-107" width="48" height="52" rx="6" />
            <rect className="pk-bus-icon" x="-14" y="-96" width="28" height="27" rx="5" />
            <rect className="pk-bus-window" x="-9" y="-91" width="18" height="9" rx="2" />
            <circle className="pk-bus-wheel" cx="-8" cy="-68" r="3" />
            <circle className="pk-bus-wheel" cx="8" cy="-68" r="3" />
        </g>
    )
}

function Crosswalk({ x }: { x: number }) {
    return (
        <g className="pk-crosswalk" aria-hidden="true">
            {Array.from({ length: 7 }, (_, index) => (
                <rect key={index} x={x} y={143 + index * 35} width={54} height={19} rx="2" />
            ))}
        </g>
    )
}

function LevelCrossing() {
    return (
        <g aria-hidden="true">
            <rect className="pk-ballast" x="458" y="0" width="64" height="126" />
            <rect className="pk-ballast" x="458" y="394" width="64" height="126" />
            <rect className="pk-rail-bed" x="458" y="126" width="64" height="268" />
            <g className="pk-sleepers">
                {Array.from({ length: 29 }, (_, index) => (
                    <line key={index} x1="462" x2="518" y1={8 + index * 18} y2={8 + index * 18} />
                ))}
            </g>
            <line className="pk-rail" x1="474" y1="0" x2="474" y2="520" />
            <line className="pk-rail" x1="506" y1="0" x2="506" y2="520" />
            <g className="pk-crossbuck" transform="translate(436 126)">
                <rect className="pk-sign-post" x="-4" y="-20" width="8" height="26" rx="3" />
                <g transform="translate(0 -44)">
                    <rect className="pk-crossbuck-arm" x="-34" y="-8" width="68" height="16" rx="2" transform="rotate(35)" />
                    <rect className="pk-crossbuck-arm" x="-34" y="-8" width="68" height="16" rx="2" transform="rotate(-35)" />
                </g>
            </g>
        </g>
    )
}

function BikeLane() {
    return (
        <g aria-hidden="true">
            <rect className="pk-bike-lane" x="170" y="330" width="350" height="52" />
            <line className="pk-bike-lane-line" x1="170" y1="330" x2="520" y2="330" />
            {[225, 465].map(x => (
                <g key={x} className="pk-bike-symbol" transform={`translate(${x} 356)`}>
                    <circle cx="-11" cy="5" r="7" />
                    <circle cx="11" cy="5" r="7" />
                    <path d="M -11 5 L -3 -7 H 6 L 11 5 M -3 -7 L 1 5 H -11 M 5 -11 H 10" />
                </g>
            ))}
        </g>
    )
}

function Driveway() {
    return (
        <g aria-hidden="true">
            <rect className="pk-driveway" x="430" y="394" width="100" height="94" />
            <House x={398} y={484} width={164} height={60} />
        </g>
    )
}

function ScaleBar({ length, label }: { length: number; label: string }) {
    return (
        <g className="pk-scale" aria-hidden="true">
            <path d={`M 40 109 H ${40 + length} M 40 99 V 119 M ${40 + length} 99 V 119`} />
            <text x={40 + length + 12} y="117">{label}</text>
        </g>
    )
}

function Measure({ from, to, label, y = 293 }: { from: number; to: number; label: string; y?: number }) {
    return (
        <g className="pk-measure" aria-hidden="true">
            <line x1={from} y1={y} x2={to} y2={y} />
            <path d={`M ${from} ${y - 8} V ${y + 8} M ${to} ${y - 8} V ${y + 8}`} />
            <text x={(from + to) / 2} y={y - 13} textAnchor="middle">{label}</text>
        </g>
    )
}

function Zone({ from, to, allowed, top = LANE_TOP, height = LANE_HEIGHT }: { from: number; to: number; allowed: boolean; top?: number; height?: number }) {
    return <rect className={`pk-zone ${allowed ? 'is-allowed' : 'is-forbidden'}`} x={from} y={top} width={to - from} height={height} />
}

function ZonePill({ x, y, text, allowed }: { x: number; y: number; text: string; allowed: boolean }) {
    const width = text.length * 14 + 30
    return (
        <g className={`pk-pill ${allowed ? 'is-allowed' : 'is-forbidden'}`} transform={`translate(${x} ${y})`} aria-hidden="true">
            <rect x={-width / 2} y="-19" width={width} height="38" rx="19" />
            <text textAnchor="middle" y="8">{text}</text>
        </g>
    )
}

/** Måling fra bilens front til gangfeltet, vist etter at svaret er sjekket. */
function CarMeasure({ spot, crosswalkX }: { spot: ParkingSpotData | undefined; crosswalkX: number }) {
    if (!spot) return null
    const front = spot.x + 42
    if (front >= crosswalkX) return null
    const enough = crosswalkX - front > FIVE_METERS
    return <Measure from={front} to={crosswalkX} label={enough ? 'mer enn 5 m' : 'mindre enn 5 m'} />
}

function SceneDetails({
    scenario,
    checked,
    selectedSpot,
}: {
    scenario: ParkingScenario
    checked: boolean
    selectedSpot: string | null
}) {
    const chosen = scenario.spots.find(spot => spot.id === selectedSpot)

    switch (scenario.template) {
        case 'sign-zone':
            return (
                <>
                    {checked && (
                        <>
                            <Zone from={70} to={390} allowed />
                            <Zone from={420} to={800} allowed={false} />
                        </>
                    )}
                    <ParkingForbiddenSign x={420} />
                </>
            )
        case 'crosswalk':
            return (
                <>
                    {checked && (
                        <>
                            <Zone from={70} to={320} allowed />
                            <Zone from={320} to={485} allowed={false} />
                            <Zone from={539} to={770} allowed />
                        </>
                    )}
                    <Crosswalk x={485} />
                    {checked && <CarMeasure spot={chosen} crosswalkX={485} />}
                </>
            )
        case 'intersection':
            return (
                <>
                    <rect className="pk-road" x="470" y="0" width="210" height="260" />
                    <rect x="470" y="0" width="210" height="260" fill="url(#pk-asphalt)" />
                    <rect className="pk-sidewalk" x="436" y="0" width="34" height="126" />
                    <rect className="pk-sidewalk" x="680" y="0" width="34" height="126" />
                    <rect className="pk-kerb" x="464" y="0" width="6" height="126" />
                    <rect className="pk-kerb" x="680" y="0" width="6" height="126" />
                    <line className="pk-centerline" x1="575" y1="0" x2="575" y2="126" />
                    {checked && (
                        <>
                            <Zone from={305} to={470} allowed={false} />
                            <Measure from={305} to={470} label="5 m" />
                        </>
                    )}
                </>
            )
        case 'driveway':
            return (
                <>
                    {checked && (
                        <>
                            <Zone from={70} to={430} allowed />
                            <Zone from={430} to={530} allowed={false} />
                            <Zone from={530} to={780} allowed />
                        </>
                    )}
                    <Driveway />
                </>
            )
        case 'sidewalk':
            return checked ? <Zone from={0} to={800} allowed={false} top={394} height={34} /> : null
        case 'bus-stop':
            return (
                <>
                    <ScaleBar length={195} label="20 m" />
                    <path className="pk-bus-bay" d="M 248 394 H 590 Q 615 394 632 412 H 225 Q 237 394 248 394 Z" />
                    {checked && (
                        <>
                            <Zone from={235} to={625} allowed={false} />
                            <Zone from={625} to={780} allowed />
                            <Measure from={235} to={430} label="20 m" />
                            <Measure from={430} to={625} label="20 m" />
                        </>
                    )}
                    <BusStopSign x={430} />
                </>
            )
        case 'level-crossing':
            return (
                <>
                    {checked && (
                        <>
                            <Zone from={70} to={305} allowed />
                            <Zone from={305} to={462} allowed={false} />
                            <Zone from={518} to={675} allowed={false} />
                            <Zone from={675} to={790} allowed />
                        </>
                    )}
                    <LevelCrossing />
                    {checked && (
                        <>
                            <Measure from={297} to={462} label="5 m" />
                            <Measure from={518} to={683} label="5 m" />
                        </>
                    )}
                </>
            )
        case 'bike-lane':
            return (
                <>
                    <BikeLane />
                    {checked && (
                        <>
                            <Zone from={70} to={170} allowed top={330} height={52} />
                            <Zone from={170} to={520} allowed={false} top={330} height={52} />
                            <Zone from={520} to={780} allowed top={330} height={52} />
                        </>
                    )}
                </>
            )
        case 'sign-unloading':
            return (
                <>
                    {checked && (
                        <>
                            <Zone from={195} to={395} allowed />
                            <Zone from={395} to={560} allowed={false} />
                            <Zone from={614} to={770} allowed />
                        </>
                    )}
                    <ParkingForbiddenSign x={150} />
                    <Crosswalk x={560} />
                    {checked && <CarMeasure spot={chosen} crosswalkX={560} />}
                </>
            )
        case 'stop-ban':
            return (
                <>
                    {checked && (
                        <>
                            <Zone from={70} to={300} allowed />
                            <Zone from={330} to={800} allowed={false} />
                        </>
                    )}
                    <StopForbiddenSign x={330} />
                </>
            )
    }
}

function SpotMarker({
    spot,
    selected,
    checked,
    correct,
    onSelect,
}: {
    spot: ParkingSpotData
    selected: boolean
    checked: boolean
    correct: boolean
    onSelect: (id: string) => void
}) {
    const handleKeyDown = (event: KeyboardEvent<SVGGElement>) => {
        if (checked || (event.key !== 'Enter' && event.key !== ' ')) return
        event.preventDefault()
        onSelect(spot.id)
    }

    return (
        <g
            className={`pk-spot ${selected ? 'is-selected' : ''} ${checked && correct ? 'is-correct' : ''} ${checked && selected && !correct ? 'is-wrong' : ''}`}
            transform={`translate(${spot.x} ${spot.y})`}
            role="button"
            tabIndex={checked ? -1 : 0}
            aria-pressed={selected}
            aria-disabled={checked}
            aria-label={`Plass ${spot.label}`}
            onClick={checked ? undefined : () => onSelect(spot.id)}
            onKeyDown={handleKeyDown}
        >
            <rect className="pk-spot-hit" x="-65" y="-52" width="130" height="104" rx="12" />
            <rect className="pk-spot-line" x="-50" y="-29" width="100" height="58" rx="9" />
            <g className="pk-spot-badge" transform="translate(-40 -43)">
                <circle r="21" />
                <text textAnchor="middle" y="8">{spot.label}</text>
            </g>
        </g>
    )
}

function SiteLogo() {
    return (
        <span className="pk-logo" aria-hidden="true">
            <svg viewBox="0 0 1000 1000" focusable="false">
                <circle className="pk-logo-face" cx="500" cy="500" r="450" strokeWidth="34" />
                <g className="pk-logo-glyph">
                    <rect x="265" y="279.48" width="361.7" height="32.69" />
                    <rect x="265" y="279.48" width="32.7" height="118.52" />
                    <rect x="265" y="365.3" width="159.39" height="32.7" />
                    <rect x="391.7" y="365.3" width="32.69" height="279.96" />
                    <rect x="391.7" y="612.57" width="118.52" height="32.69" />
                    <rect x="477.52" y="365.3" width="32.7" height="279.96" />
                    <rect x="477.52" y="365.3" width="257.48" height="32.7" />
                    <rect x="702.3" y="365.3" width="32.7" height="112.4" />
                    <rect x="567.43" y="445" width="167.57" height="32.7" />
                    <rect x="567.43" y="445" width="32.7" height="259.52" />
                    <rect x="477.52" y="671.83" width="122.61" height="32.69" />
                </g>
            </svg>
        </span>
    )
}

export default function ParkingSpill() {
    const [index, setIndex] = useState(0)
    const [selectedSpot, setSelectedSpot] = useState<string | null>(null)
    const [checked, setChecked] = useState(false)
    const [results, setResults] = useState<(boolean | undefined)[]>(() => Array(TOTAL).fill(undefined))
    const [showResults, setShowResults] = useState(false)
    const [started, setStarted] = useState(false)
    const gameAnalyticsRef = useRef(createGameAnalytics('parkering'))
    const gameAnalytics = gameAnalyticsRef.current
    const questionRef = useRef<HTMLHeadingElement>(null)
    const feedbackRef = useRef<HTMLDivElement>(null)
    const resultsRef = useRef<HTMLHeadingElement>(null)
    const hasInteracted = useRef(false)

    const scenario = parkingScenarios[index]
    const chosen = scenario.spots.find(spot => spot.id === selectedSpot)
    const correct = selectedSpot !== null && scenario.correctSpots.includes(selectedSpot)
    const score = results.filter(Boolean).length
    const isStop = STOP_TEMPLATES.includes(scenario.template)
    const correctLabels = scenario.spots.filter(spot => scenario.correctSpots.includes(spot.id)).map(spot => spot.label)
    const spotPrompt = `Trykk på plass ${joinLabels(scenario.spots.map(spot => spot.label))}.`
    const pillY = scenario.template === 'sidewalk' ? PILL_Y_BELOW_SIDEWALK : PILL_Y
    const isLast = index === TOTAL - 1
    const question = isStop ? 'Hvor kan du stanse?' : 'Hvor kan du parkere?'

    useEffect(() => {
        gameAnalytics.view(TOTAL)
    }, [gameAnalytics])

    // Flytter fokus dit svaret og resultatet vises, slik at tastatur- og skjermleserbrukere ikke mister plassen.
    useEffect(() => {
        if (checked) feedbackRef.current?.focus()
    }, [checked])

    useEffect(() => {
        if (!hasInteracted.current) return
        questionRef.current?.focus()
    }, [index])

    useEffect(() => {
        if (showResults) resultsRef.current?.focus()
    }, [showResults])

    useEffect(() => {
        if (started) questionRef.current?.focus()
    }, [started])

    const selectSpot = (id: string) => {
        hasInteracted.current = true
        gameAnalytics.start(TOTAL)
        setSelectedSpot(id)
    }

    const resetAnswer = () => {
        setSelectedSpot(null)
        setChecked(false)
    }

    const checkAnswer = () => {
        if (checked || !selectedSpot) return
        setChecked(true)
        // Bare første forsøk teller. «Prøv igjen» gir ikke nye poeng.
        if (results[index] !== undefined) return
        const nextResults = [...results]
        nextResults[index] = correct
        setResults(nextResults)
        gameAnalytics.roundCompleted({
            roundNumber: index + 1,
            scenarioType: scenario.template,
            regulation: scenario.id,
            isCorrect: correct,
            score: nextResults.filter(Boolean).length,
            total: TOTAL,
        })
    }

    const nextScenario = () => {
        if (isLast) {
            setShowResults(true)
            gameAnalytics.complete({ score, total: TOTAL })
            return
        }
        hasInteracted.current = true
        setIndex(current => current + 1)
        setSelectedSpot(null)
        setChecked(false)
    }

    const restartGame = () => {
        gameAnalytics.replay({ score, total: TOTAL })
        hasInteracted.current = false
        setIndex(0)
        setResults(Array(TOTAL).fill(undefined))
        setSelectedSpot(null)
        setChecked(false)
        setShowResults(false)
    }

    return (
        <div className="pk-page">
            <Helmet>
                <title>{SEO_TITLE}</title>
                <meta name="description" content={SEO_DESCRIPTION} />
                <meta property="og:title" content={SEO_TITLE} />
                <meta property="og:description" content={SEO_DESCRIPTION} />
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'VideoGame',
                        name: 'Parkeringsspillet',
                        url: 'https://teori-test.no/laeringsspill/parkering/',
                        description: 'Interaktivt læringsspill der du velger hvor du kan stanse og parkere i tegnede situasjoner. Laget for teoriprøven klasse B.',
                        genre: 'Educational',
                        gamePlatform: 'Web browser',
                        applicationCategory: 'Game',
                        isAccessibleForFree: true,
                        inLanguage: 'nb',
                    })}
                </script>
                <script type="application/ld+json">
                    {JSON.stringify({
                        '@context': 'https://schema.org',
                        '@type': 'BreadcrumbList',
                        itemListElement: [
                            { '@type': 'ListItem', position: 1, name: 'Læringsspill', item: 'https://teori-test.no/laeringsspill/' },
                            { '@type': 'ListItem', position: 2, name: 'Parkeringsspillet' },
                        ],
                    })}
                </script>
            </Helmet>

            <nav className="pk-breadcrumb" aria-label="Brødsmulesti">
                <Link to="/laeringsspill">Læringsspill</Link>
                <span aria-hidden="true">/</span>
                <span aria-current="page">Parkeringsspillet</span>
            </nav>

            <header className="pk-intro">
                <span className="pk-kicker">Interaktiv trening i stans og parkering</span>
                <h1>Parkeringsspill: hvor kan du parkere?</h1>
                <p>
                    Velg riktig plass i {TOTAL} tegnede situasjoner for stans og parkering. Du får forklaring etter hver oppgave.
                </p>
                <ul className="pk-points" aria-label="Om spillet">
                    <li>Gratis å spille</li>
                    <li>Ingen innlogging</li>
                    <li>{TOTAL} situasjoner</li>
                </ul>
            </header>

            <section className="pk-card" aria-labelledby={showResults ? 'pk-results-title' : started ? 'pk-question-title' : 'pk-start-title'}>
                {!showResults && !started ? (
                    <div className="pk-start">
                        <h2 id="pk-start-title">Dette trener du på</h2>
                        <ul>
                            <li>5 meter foran gangfelt og fra veikryss</li>
                            <li>20 meter fra holdeplasskiltet</li>
                            <li>å ikke parkere foran inn- eller utkjørsel</li>
                            <li>fortau, sykkelfelt og planovergang</li>
                            <li>forskjellen på «Parkering forbudt» og «Stans forbudt»</li>
                        </ul>
                        <p>
                            Vil du lese reglene først, finner du dem i <Link to="/laeringsressurser/stans-og-parkering">artikkelen om stans og parkering</Link>. Du kan også øve på <Link to="/laeringsspill/veimerking">veimerking</Link> og <Link to="/laeringsspill/vikeplikt">vikeplikt</Link>.
                        </p>
                        <button type="button" className="pk-button pk-button--primary" onClick={() => setStarted(true)}>
                            Start spillet
                            <ChevronRight size={18} aria-hidden="true" />
                        </button>
                    </div>
                ) : !showResults ? (
                    <>
                        <div className="pk-progress-meta">
                            <span>Situasjon {index + 1} av {TOTAL}</span>
                            <span className="pk-score" aria-label={`${score} poeng`}>{score} poeng</span>
                        </div>
                        <div className="pk-progress-track" aria-hidden="true">
                            <div className="pk-progress-fill" style={{ width: `${((index + 1) / TOTAL) * 100}%` }} />
                        </div>

                        <div className="pk-question">
                            <h2 id="pk-question-title" ref={questionRef} tabIndex={-1}>{question}</h2>
                            <p>{scenario.prompt}</p>
                        </div>

                        <div className="pk-scene-wrap">
                            <svg className="pk-scene" viewBox="0 0 800 520" role="group" aria-labelledby="pk-scene-title pk-scene-desc">
                                <title id="pk-scene-title">{question}</title>
                                <desc id="pk-scene-desc">Du kjører mot høyre i det nederste kjørefeltet. Velg en av de markerte plassene.</desc>
                                <RoadBase />
                                <SceneDetails scenario={scenario} checked={checked} selectedSpot={selectedSpot} />

                                {checked && scenario.spots.map(spot => (
                                    <ZonePill
                                        key={spot.id}
                                        x={spot.x}
                                        y={pillY}
                                        allowed={scenario.correctSpots.includes(spot.id)}
                                        text={scenario.correctSpots.includes(spot.id) ? (isStop ? 'KAN STANSE' : 'LOVLIG') : 'FORBUDT'}
                                    />
                                ))}

                                {scenario.spots.map(spot => (
                                    <SpotMarker
                                        key={spot.id}
                                        spot={spot}
                                        selected={selectedSpot === spot.id}
                                        checked={checked}
                                        correct={scenario.correctSpots.includes(spot.id)}
                                        onSelect={selectSpot}
                                    />
                                ))}

                                <g
                                    className={`pk-player-car ${checked ? (correct ? 'is-correct' : 'is-wrong') : ''}`}
                                    style={{ transform: `translate(${chosen?.x ?? 75}px, ${chosen?.y ?? 355}px)` }}
                                >
                                    <TopDownCar />
                                </g>
                            </svg>
                        </div>

                        {!checked && (
                            <div className="pk-status" aria-live="polite">
                                <p>{selectedSpot ? `Plass ${chosen?.label} er valgt.` : spotPrompt}</p>
                            </div>
                        )}

                        {checked && (
                            <div className={`pk-feedback ${correct ? 'is-correct' : 'is-wrong'}`} ref={feedbackRef} tabIndex={-1}>
                                <strong className="pk-feedback-title">
                                    <span className="pk-feedback-icon" aria-hidden="true">
                                        {correct ? <Check size={16} strokeWidth={3} /> : <X size={16} strokeWidth={3} />}
                                    </span>
                                    {correct ? 'Riktig!' : 'Ikke helt. Se de markerte sonene.'}
                                </strong>
                                <span className="pk-rule-label">{scenario.ruleLabel}</span>
                                <p>{scenario.explanation}</p>
                                {correctLabels.length > 1 && (
                                    <p className="pk-correct-spots">Riktig svar: plass {joinLabels(correctLabels)}.</p>
                                )}
                                {correctLabels.length === 1 && !correct && (
                                    <p className="pk-correct-spots">Riktig svar: plass {correctLabels[0]}.</p>
                                )}
                            </div>
                        )}

                        <div className="pk-actions">
                            {!checked ? (
                                <>
                                    <button type="button" className="pk-button pk-button--secondary" onClick={resetAnswer} disabled={!selectedSpot}>
                                        <RotateCcw size={18} aria-hidden="true" />
                                        Nullstill
                                    </button>
                                    <button type="button" className="pk-button pk-button--primary" onClick={checkAnswer} disabled={!selectedSpot}>
                                        Sjekk svaret
                                    </button>
                                </>
                            ) : (
                                <>
                                    {!correct && (
                                        <button type="button" className="pk-button pk-button--secondary" onClick={resetAnswer}>
                                            <RotateCcw size={18} aria-hidden="true" />
                                            Prøv igjen
                                        </button>
                                    )}
                                    <button type="button" className={`pk-button pk-button--primary${correct ? ' pk-button--wide' : ''}`} onClick={nextScenario}>
                                        {isLast ? 'Se resultat' : 'Neste situasjon'}
                                        {!isLast && <ChevronRight size={18} aria-hidden="true" />}
                                    </button>
                                </>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="pk-results">
                        <SiteLogo />
                        <span className="pk-kicker">Alle situasjonene er fullført</span>
                        <h2 id="pk-results-title" ref={resultsRef} tabIndex={-1}>Du fikk {score} av {TOTAL} riktige</h2>
                        <p>
                            {score === TOTAL
                                ? 'Full pott! Du kan reglene for stans og parkering ved gangfelt, kryss, holdeplass, innkjørsel og skilt.'
                                : score >= Math.ceil(TOTAL * 0.7)
                                    ? 'Godt jobbet. Se på situasjonene du bommet på, og prøv én runde til.'
                                    : 'Ta én regel om gangen. Se etter skilt, gangfelt, kryss og holdeplass, og husk forskjellen på stans og parkering.'}
                        </p>
                        <ul className="pk-results-list" aria-label="Resultat per situasjon">
                            {parkingScenarios.map((item, itemIndex) => (
                                <li key={item.id} className={results[itemIndex] ? 'is-correct' : 'is-wrong'}>
                                    <span aria-hidden="true">{results[itemIndex] ? '✓' : '✗'}</span>
                                    <span>{item.title}</span>
                                    <span className="pk-visually-hidden">{results[itemIndex] ? 'Riktig' : 'Feil'}</span>
                                </li>
                            ))}
                        </ul>
                        <div className="pk-results-actions">
                            <button type="button" className="pk-button pk-button--primary" onClick={restartGame}>
                                Spill igjen
                            </button>
                            <Link className="pk-button pk-button--secondary" to="/laeringsressurser/stans-og-parkering">
                                Les artikkelen om stans og parkering
                            </Link>
                            <Link className="pk-button pk-button--secondary" to="/quiz">
                                Ta en gratis teoritest
                            </Link>
                        </div>
                    </div>
                )}
            </section>
        </div>
    )
}

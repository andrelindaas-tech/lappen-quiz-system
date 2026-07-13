import { useCallback, useEffect, useRef, useState, type KeyboardEvent } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Play, RotateCcw } from 'lucide-react'
import { trackEvent } from '../utils/analytics'
import {
    vikepliktScenarios,
    type VikepliktDirection,
    type VikepliktObstacleSide,
    type VikepliktScenario,
    type VikepliktTurn,
    type VikepliktVehicle,
} from '../data/vikepliktScenarios'
import './VikepliktSpill.css'

interface Pose {
    x: number
    y: number
    rotation: number
}

interface Point {
    x: number
    y: number
}

type VehicleTone = 'player' | 'red' | 'yellow' | 'purple'

const PATHS: Record<VikepliktDirection, Record<VikepliktTurn, Pose[]>> = {
    sor: {
        rett: [
            { x: 205, y: 300, rotation: 0 },
            { x: 205, y: 180, rotation: 0 },
            { x: 205, y: -35, rotation: 0 },
        ],
        hoyre: [
            { x: 205, y: 300, rotation: 0 },
            { x: 205, y: 225, rotation: 0 },
            { x: 215, y: 215, rotation: 45 },
            { x: 245, y: 205, rotation: 90 },
            { x: 395, y: 205, rotation: 90 },
        ],
        venstre: [
            { x: 205, y: 300, rotation: 0 },
            { x: 205, y: 210, rotation: 0 },
            { x: 180, y: 180, rotation: -45 },
            { x: 120, y: 155, rotation: -90 },
            { x: -35, y: 155, rotation: -90 },
        ],
    },
    nord: {
        rett: [
            { x: 155, y: 60, rotation: 180 },
            { x: 155, y: 180, rotation: 180 },
            { x: 155, y: 395, rotation: 180 },
        ],
        hoyre: [
            { x: 155, y: 60, rotation: 180 },
            { x: 155, y: 135, rotation: 180 },
            { x: 145, y: 145, rotation: 225 },
            { x: 115, y: 155, rotation: 270 },
            { x: -35, y: 155, rotation: 270 },
        ],
        venstre: [
            { x: 155, y: 60, rotation: 180 },
            { x: 155, y: 150, rotation: 180 },
            { x: 180, y: 180, rotation: 135 },
            { x: 240, y: 205, rotation: 90 },
            { x: 395, y: 205, rotation: 90 },
        ],
    },
    vest: {
        rett: [
            { x: 60, y: 205, rotation: 90 },
            { x: 180, y: 205, rotation: 90 },
            { x: 395, y: 205, rotation: 90 },
        ],
        hoyre: [
            { x: 60, y: 205, rotation: 90 },
            { x: 135, y: 205, rotation: 90 },
            { x: 145, y: 215, rotation: 135 },
            { x: 155, y: 245, rotation: 180 },
            { x: 155, y: 395, rotation: 180 },
        ],
        venstre: [
            { x: 60, y: 205, rotation: 90 },
            { x: 150, y: 205, rotation: 90 },
            { x: 180, y: 180, rotation: 45 },
            { x: 205, y: 120, rotation: 0 },
            { x: 205, y: -35, rotation: 0 },
        ],
    },
    ost: {
        rett: [
            { x: 300, y: 155, rotation: -90 },
            { x: 180, y: 155, rotation: -90 },
            { x: -35, y: 155, rotation: -90 },
        ],
        hoyre: [
            { x: 300, y: 155, rotation: -90 },
            { x: 225, y: 155, rotation: -90 },
            { x: 215, y: 145, rotation: -45 },
            { x: 205, y: 115, rotation: 0 },
            { x: 205, y: -35, rotation: 0 },
        ],
        venstre: [
            { x: 300, y: 155, rotation: -90 },
            { x: 210, y: 155, rotation: -90 },
            { x: 180, y: 180, rotation: -135 },
            { x: 155, y: 240, rotation: -180 },
            { x: 155, y: 395, rotation: -180 },
        ],
    },
}

type ObstacleVehicleRole = 'spiller' | 'motende'

const OBSTACLE_PATHS: Record<VikepliktObstacleSide, Record<ObstacleVehicleRole, Pose[]>> = {
    spiller: {
        spiller: [
            { x: 205, y: 300, rotation: 0 },
            { x: 205, y: 255, rotation: 0 },
            { x: 190, y: 235, rotation: -25 },
            { x: 155, y: 215, rotation: 0 },
            { x: 155, y: 165, rotation: 0 },
            { x: 175, y: 140, rotation: 25 },
            { x: 205, y: 120, rotation: 0 },
            { x: 205, y: -35, rotation: 0 },
        ],
        motende: PATHS.nord.rett,
    },
    motende: {
        spiller: PATHS.sor.rett,
        motende: [
            { x: 155, y: 60, rotation: 180 },
            { x: 155, y: 105, rotation: 180 },
            { x: 175, y: 125, rotation: 145 },
            { x: 205, y: 145, rotation: 180 },
            { x: 205, y: 195, rotation: 180 },
            { x: 180, y: 220, rotation: 215 },
            { x: 155, y: 240, rotation: 180 },
            { x: 155, y: 395, rotation: 180 },
        ],
    },
}

function tangentRotation(dx: number, dy: number) {
    return Math.atan2(dx, -dy) * 180 / Math.PI
}

function sampleBezierPath(start: Point, control1: Point, control2: Point, end: Point, steps: number): Pose[] {
    return Array.from({ length: steps + 1 }, (_, index) => {
        const t = index / steps
        const inverse = 1 - t
        const x = inverse ** 3 * start.x
            + 3 * inverse ** 2 * t * control1.x
            + 3 * inverse * t ** 2 * control2.x
            + t ** 3 * end.x
        const y = inverse ** 3 * start.y
            + 3 * inverse ** 2 * t * control1.y
            + 3 * inverse * t ** 2 * control2.y
            + t ** 3 * end.y
        const dx = 3 * inverse ** 2 * (control1.x - start.x)
            + 6 * inverse * t * (control2.x - control1.x)
            + 3 * t ** 2 * (end.x - control2.x)
        const dy = 3 * inverse ** 2 * (control1.y - start.y)
            + 6 * inverse * t * (control2.y - control1.y)
            + 3 * t ** 2 * (end.y - control2.y)

        return { x, y, rotation: tangentRotation(dx, dy) }
    })
}

function sampleCircularPath(center: Point, radius: number, startDegrees: number, endDegrees: number, steps: number): Pose[] {
    const startRadians = startDegrees * Math.PI / 180
    const deltaRadians = (endDegrees - startDegrees) * Math.PI / 180

    return Array.from({ length: steps + 1 }, (_, index) => {
        const t = index / steps
        const angle = startRadians + deltaRadians * t
        const x = center.x + radius * Math.cos(angle)
        const y = center.y + radius * Math.sin(angle)
        const dx = -radius * Math.sin(angle) * deltaRadians
        const dy = radius * Math.cos(angle) * deltaRadians

        return { x, y, rotation: tangentRotation(dx, dy) }
    })
}

function joinPaths(...paths: Pose[][]): Pose[] {
    return paths.flatMap((path, index) => index === 0 ? path : path.slice(1))
}

const ROUNDABOUT_CENTER = { x: 180, y: 180 }
const ROUNDABOUT_RADIUS = 74
const PLAYER_ARC_START = sampleCircularPath(ROUNDABOUT_CENTER, ROUNDABOUT_RADIUS, 60, 60, 1)[0]
const PLAYER_ARC_END = sampleCircularPath(ROUNDABOUT_CENTER, ROUNDABOUT_RADIUS, -60, -60, 1)[0]
const RED_ARC_END = sampleCircularPath(ROUNDABOUT_CENTER, ROUNDABOUT_RADIUS, 20, 20, 1)[0]

// Rundkjøringsbanene bygges av Bézier-kurver og en sirkelbue. Rotasjonen kommer
// fra tangentretningen i hvert punkt, slik at bilen alltid peker langs kjørebanen.
const ROUNDABOUT_PATHS: Record<'spiller' | 'inne', Pose[]> = {
    spiller: joinPaths(
        sampleBezierPath(
            { x: 200, y: 320 },
            { x: 200, y: 285 },
            { x: 202, y: 253 },
            PLAYER_ARC_START,
            14,
        ),
        sampleCircularPath(ROUNDABOUT_CENTER, ROUNDABOUT_RADIUS, 60, -60, 28),
        sampleBezierPath(
            PLAYER_ARC_END,
            { x: 202, y: 107 },
            { x: 200, y: 70 },
            { x: 200, y: -35 },
            18,
        ),
    ),
    inne: joinPaths(
        sampleCircularPath(ROUNDABOUT_CENTER, ROUNDABOUT_RADIUS, 140, 20, 28),
        sampleBezierPath(
            RED_ARC_END,
            { x: 255, y: 190 },
            { x: 320, y: 200 },
            { x: 395, y: 200 },
            18,
        ),
    ),
}

function getVehiclePath(scenario: VikepliktScenario, vehicle: VikepliktVehicle) {
    if (scenario.template === 'hindring' && scenario.obstacle) {
        const role: ObstacleVehicleRole = vehicle.erSpiller ? 'spiller' : 'motende'
        return OBSTACLE_PATHS[scenario.obstacle.side][role]
    }
    if (scenario.template === 'rundkjoring') {
        return ROUNDABOUT_PATHS[vehicle.iRundkjoring ? 'inne' : 'spiller']
    }
    return PATHS[vehicle.fra][vehicle.skal]
}

const SIGN_POSITIONS: Record<VikepliktDirection, { x: number; y: number }> = {
    nord: { x: 100, y: 82 },
    sor: { x: 234, y: 252 },
    ost: { x: 252, y: 100 },
    vest: { x: 82, y: 234 },
}

const SIGN_CONNECTORS: Record<VikepliktDirection, string> = {
    nord: 'M 130 95 L 142 95',
    sor: 'M 234 265 L 220 265',
    ost: 'M 265 130 L 265 142',
    vest: 'M 95 234 L 95 220',
}

const TRAFFIC_SIGNAL_POSITIONS: Record<VikepliktDirection, { x: number; y: number }> = {
    nord: { x: 92, y: 78 },
    sor: { x: 251, y: 303 },
    ost: { x: 286, y: 104 },
    vest: { x: 74, y: 255 },
}

const TRAFFIC_SIGNAL_ROTATIONS: Record<VikepliktDirection, number> = {
    nord: 180,
    sor: 0,
    ost: -90,
    vest: 90,
}

const DIRECTIONS: VikepliktDirection[] = ['nord', 'sor', 'ost', 'vest']

interface TreePosition {
    x: number
    y: number
    scale: number
}

const TREE_POSITIONS: Record<VikepliktScenario['template'], TreePosition[]> = {
    'x-kryss': [
        { x: 34, y: 38, scale: 1 },
        { x: 86, y: 70, scale: 0.78 },
        { x: 38, y: 108, scale: 0.68 },
        { x: 276, y: 38, scale: 0.82 },
        { x: 325, y: 72, scale: 1 },
        { x: 317, y: 116, scale: 0.66 },
        { x: 36, y: 276, scale: 0.84 },
        { x: 84, y: 326, scale: 1 },
        { x: 112, y: 278, scale: 0.64 },
        { x: 276, y: 322, scale: 1 },
        { x: 326, y: 276, scale: 0.78 },
    ],
    't-kryss': [
        { x: 34, y: 38, scale: 1 },
        { x: 88, y: 88, scale: 0.76 },
        { x: 128, y: 40, scale: 0.68 },
        { x: 181, y: 72, scale: 0.92 },
        { x: 226, y: 36, scale: 0.66 },
        { x: 282, y: 72, scale: 0.84 },
        { x: 328, y: 38, scale: 1 },
        { x: 36, y: 276, scale: 0.84 },
        { x: 84, y: 326, scale: 1 },
        { x: 276, y: 322, scale: 1 },
        { x: 326, y: 276, scale: 0.78 },
    ],
    hindring: [
        { x: 38, y: 42, scale: 1 },
        { x: 92, y: 92, scale: 0.76 },
        { x: 42, y: 306, scale: 0.84 },
        { x: 98, y: 332, scale: 1 },
        { x: 322, y: 42, scale: 1 },
        { x: 270, y: 92, scale: 0.76 },
        { x: 318, y: 306, scale: 0.84 },
        { x: 262, y: 332, scale: 1 },
    ],
    rundkjoring: [
        { x: 34, y: 34, scale: 0.9 },
        { x: 82, y: 66, scale: 0.66 },
        { x: 326, y: 34, scale: 0.9 },
        { x: 278, y: 66, scale: 0.66 },
        { x: 34, y: 326, scale: 0.9 },
        { x: 78, y: 294, scale: 0.68 },
        { x: 326, y: 326, scale: 0.9 },
        { x: 282, y: 294, scale: 0.68 },
    ],
}

// 1400 / 0,9 gir nøyaktig 10 % lavere kjørehastighet enn den opprinnelige avspillingen.
const DRIVE_DURATION_MS = Math.round(1400 / 0.9)
const DRIVE_STAGGER_MS = Math.round(1150 / 0.9)

function easeInOutCubic(t: number) {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

// Interpolerer bilens posisjon/rotasjon langs banen for en progresjon 0–1.
function samplePath(path: Pose[], progress: number): Pose {
    const clamped = Math.max(0, Math.min(1, progress))
    const eased = easeInOutCubic(clamped)
    const scaled = eased * (path.length - 1)
    const index = Math.min(path.length - 2, Math.floor(scaled))
    const local = scaled - index
    const from = path[index]
    const to = path[index + 1]
    return {
        x: from.x + (to.x - from.x) * local,
        y: from.y + (to.y - from.y) * local,
        rotation: from.rotation + (to.rotation - from.rotation) * local,
    }
}

function prefersReducedMotion() {
    return typeof window !== 'undefined' && Boolean(window.matchMedia?.('(prefers-reduced-motion: reduce)').matches)
}

function axisFor(direction: VikepliktDirection) {
    return direction === 'nord' || direction === 'sor' ? 'vertical' : 'horizontal'
}

function directionLabel(direction: VikepliktDirection) {
    return { nord: 'nord', sor: 'sør', ost: 'øst', vest: 'vest' }[direction]
}

function turnLabel(turn: VikepliktTurn) {
    return { rett: 'rett frem', hoyre: 'til høyre', venstre: 'til venstre' }[turn]
}

function regulationLabel(scenario: VikepliktScenario) {
    if (scenario.regulation === 'hoyreregel') return 'Uregulert kryss'
    if (scenario.regulation === 'vikepliktskilt') return 'Vikepliktskilt'
    if (scenario.regulation === 'hindring') return 'Hindring i veien'
    if (scenario.regulation === 'rundkjoring') return 'Rundkjøring med ett felt'
    if (scenario.regulation === 'trafikklys') return 'Trafikklys og vikepliktskilt'
    return 'Forkjørsvei'
}

function nonPlayerIndex(scenario: VikepliktScenario, vehicle: VikepliktVehicle) {
    return scenario.vehicles.filter(candidate => !candidate.erSpiller).findIndex(candidate => candidate.id === vehicle.id)
}

function vehicleTone(scenario: VikepliktScenario, vehicle: VikepliktVehicle): VehicleTone {
    if (vehicle.erSpiller) return 'player'
    return (['red', 'yellow', 'purple'] as VehicleTone[])[nonPlayerIndex(scenario, vehicle)] ?? 'purple'
}

function vehicleName(scenario: VikepliktScenario, vehicle: VikepliktVehicle) {
    if (vehicle.erSpiller) return 'Du'
    return ['Rød bil', 'Gul bil', 'Lilla bil'][nonPlayerIndex(scenario, vehicle)] ?? 'Bil'
}

function SceneTree({ x, y, scale }: TreePosition) {
    return (
        <g className="vp-tree" transform={`translate(${x} ${y}) scale(${scale})`}>
            <ellipse className="vp-tree-shadow" cx="3" cy="5" rx="12" ry="8" />
            <circle className="vp-tree-canopy-dark" cx="0" cy="0" r="10.5" />
            <circle className="vp-tree-canopy-mid" cx="-4" cy="-3" r="6.5" />
            <circle className="vp-tree-canopy-light" cx="3.5" cy="-4" r="5" />
        </g>
    )
}

function SceneRoad({ template }: Pick<VikepliktScenario, 'template'>) {
    return (
        <g aria-hidden="true">
            <defs>
                <pattern id="vp-grass-texture" width="22" height="22" patternUnits="userSpaceOnUse">
                    <circle className="vp-grass-speck" cx="4" cy="5" r="0.8" />
                    <circle className="vp-grass-speck" cx="17" cy="15" r="0.55" />
                    <path className="vp-grass-blade" d="M 10 19 l 1.4 -3 M 12 19 l -0.4 -2.6" />
                    <path className="vp-grass-blade" d="M 19 7 l 1 -2" />
                </pattern>
            </defs>
            <rect className="vp-scene-ground" width="360" height="360" />
            <rect className="vp-scene-ground-texture" width="360" height="360" fill="url(#vp-grass-texture)" />
            <g className="vp-trees">
                {TREE_POSITIONS[template].map((tree, index) => (
                    <SceneTree key={`${template}-${index}`} {...tree} />
                ))}
            </g>
            {template === 'rundkjoring' ? (
                <>
                    <rect className="vp-road" x="140" y="0" width="80" height="360" />
                    <rect className="vp-road" x="0" y="140" width="360" height="80" />
                    <circle className="vp-road" cx="180" cy="180" r="96" />

                    <g className="vp-road-markings">
                        <line x1="180" y1="0" x2="180" y2="83" />
                        <line x1="180" y1="277" x2="180" y2="360" />
                        <line x1="0" y1="180" x2="83" y2="180" />
                        <line x1="277" y1="180" x2="360" y2="180" />
                    </g>
                    <g className="vp-road-edges">
                        <line x1="140" y1="0" x2="140" y2="91" />
                        <line x1="220" y1="0" x2="220" y2="91" />
                        <line x1="140" y1="269" x2="140" y2="360" />
                        <line x1="220" y1="269" x2="220" y2="360" />
                        <line x1="0" y1="140" x2="91" y2="140" />
                        <line x1="0" y1="220" x2="91" y2="220" />
                        <line x1="269" y1="140" x2="360" y2="140" />
                        <line x1="269" y1="220" x2="360" y2="220" />
                    </g>

                    <circle className="vp-roundabout-curb" cx="180" cy="180" r="53" />
                    <circle className="vp-roundabout-island" cx="180" cy="180" r="47" />
                    <circle className="vp-roundabout-island-texture" cx="180" cy="180" r="47" fill="url(#vp-grass-texture)" />
                    <g className="vp-roundabout-shrubs">
                        <SceneTree x={169} y={181} scale={0.72} />
                        <SceneTree x={191} y={174} scale={0.62} />
                    </g>

                    <g className="vp-yield-lines">
                        {[0, 90, 180, 270].map(rotation => (
                            <g key={rotation} transform={`rotate(${rotation} 180 180)`}>
                                <path d="M 184 265 l 5 8 l 5 -8 Z" />
                                <path d="M 195 265 l 5 8 l 5 -8 Z" />
                                <path d="M 206 265 l 5 8 l 5 -8 Z" />
                            </g>
                        ))}
                    </g>
                    <g className="vp-roundabout-direction" aria-hidden="true">
                        <path d="M 191 108 Q 157 104 132 129" />
                        <path d="M 126 135 L 138 131 L 130 123 Z" />
                    </g>
                </>
            ) : template === 'hindring' ? (
                <>
                    <rect className="vp-road" x="130" y="0" width="100" height="360" />
                    <g className="vp-road-markings">
                        <line x1="180" y1="0" x2="180" y2="360" />
                    </g>
                    <g className="vp-road-edges">
                        <line x1="130" y1="0" x2="130" y2="360" />
                        <line x1="230" y1="0" x2="230" y2="360" />
                    </g>
                </>
            ) : (
                <>
                    <rect className="vp-road" x="0" y="130" width="360" height="100" />
                    {template === 'x-kryss' ? (
                        <rect className="vp-road" x="130" y="0" width="100" height="360" />
                    ) : (
                        <rect className="vp-road" x="130" y="180" width="100" height="180" />
                    )}
                    <g className="vp-road-markings">
                        <line x1="0" y1="180" x2="130" y2="180" />
                        <line x1="230" y1="180" x2="360" y2="180" />
                        {template === 'x-kryss' && <line x1="180" y1="0" x2="180" y2="130" />}
                        <line x1="180" y1="230" x2="180" y2="360" />
                    </g>
                </>
            )}
        </g>
    )
}

function SceneSigns({ scenario }: { scenario: VikepliktScenario }) {
    if (
        scenario.regulation === 'hoyreregel'
        || scenario.regulation === 'hindring'
        || scenario.regulation === 'rundkjoring'
        || scenario.regulation === 'trafikklys'
    ) return null

    const player = scenario.vehicles.find(vehicle => vehicle.erSpiller)
    if (!player) return null

    const primaryAxis = axisFor(player.fra)
    const activeDirections = new Set(scenario.vehicles.map(vehicle => vehicle.fra))
    const availableDirections = DIRECTIONS.filter(direction =>
        activeDirections.has(direction) && (scenario.template === 'x-kryss' || direction !== 'nord')
    )

    return (
        <g className="vp-scene-signs" aria-label="Skilt som regulerer krysset">
            {availableDirections.map(direction => {
                const onPrimaryAxis = axisFor(direction) === primaryAxis
                const signType = scenario.regulation === 'vikepliktskilt'
                    ? (onPrimaryAxis ? 'vikeplikt' : null)
                    : (onPrimaryAxis ? 'forkjorsvei' : 'vikeplikt')

                if (!signType) return null
                const position = SIGN_POSITIONS[direction]
                const label = signType === 'forkjorsvei' ? 'Forkjørsvei' : 'Vikeplikt'

                return (
                    <g key={`${direction}-${signType}`}>
                        <title>{`${label} for trafikk fra ${directionLabel(direction)}`}</title>
                        <path className="vp-sign-connector" d={SIGN_CONNECTORS[direction]} />
                        <circle className="vp-sign-backdrop" cx={position.x + 13} cy={position.y + 13} r="17" />
                        <image
                            href={`/signs/${signType}.svg`}
                            x={position.x}
                            y={position.y}
                            width="26"
                            height="26"
                        />
                    </g>
                )
            })}
        </g>
    )
}

function SceneTrafficSignals({
    scenario,
    registerSignal,
}: {
    scenario: VikepliktScenario
    registerSignal: (direction: VikepliktDirection, node: SVGGElement | null) => void
}) {
    if (scenario.regulation !== 'trafikklys' || !scenario.signals) return null

    const player = scenario.vehicles.find(vehicle => vehicle.erSpiller)
    if (!player) return null
    const signPosition = SIGN_POSITIONS[player.fra]

    return (
        <g className="vp-scene-signals" aria-label="Fungerende trafikklys og vikepliktskilt">
            <g>
                <title>Vikepliktskilt for deg – trafikklyset gjelder så lenge det fungerer</title>
                <path className="vp-sign-connector" d={SIGN_CONNECTORS[player.fra]} />
                <circle className="vp-sign-backdrop" cx={signPosition.x + 13} cy={signPosition.y + 13} r="17" />
                <image
                    href="/signs/vikeplikt.svg"
                    x={signPosition.x}
                    y={signPosition.y}
                    width="26"
                    height="26"
                />
            </g>

            {DIRECTIONS.map(direction => {
                const state = scenario.signals?.[direction]
                if (!state) return null
                const position = TRAFFIC_SIGNAL_POSITIONS[direction]

                return (
                    <g
                        key={direction}
                        className="vp-traffic-signal"
                        transform={`translate(${position.x} ${position.y}) rotate(${TRAFFIC_SIGNAL_ROTATIONS[direction]})`}
                        data-state={state}
                        ref={node => registerSignal(direction, node)}
                    >
                        <title>{`${state === 'rod' ? 'Rødt' : state === 'gul' ? 'Gult' : 'Grønt'} lys for trafikk fra ${directionLabel(direction)}`}</title>
                        <line className="vp-signal-post" x1="0" y1="17" x2="0" y2="27" />
                        <rect className="vp-signal-housing" x="-9" y="-18" width="18" height="36" rx="5" />
                        <circle className="vp-signal-bulb vp-signal-bulb--red" cx="0" cy="-10" r="5" />
                        <circle className="vp-signal-bulb vp-signal-bulb--yellow" cx="0" cy="0" r="5" />
                        <circle className="vp-signal-bulb vp-signal-bulb--green" cx="0" cy="10" r="5" />
                    </g>
                )
            })}
        </g>
    )
}

function SceneObstacle({ scenario }: { scenario: VikepliktScenario }) {
    if (scenario.template !== 'hindring' || !scenario.obstacle) return null

    const onPlayerSide = scenario.obstacle.side === 'spiller'
    const carX = onPlayerSide ? 205 : 155
    const carRotation = onPlayerSide ? 0 : 180
    const labelX = onPlayerSide ? 278 : 82
    const labelLineStart = onPlayerSide ? 248 : 112
    const labelLineEnd = onPlayerSide ? 220 : 140

    return (
        <g className="vp-obstacle" aria-label={`Parkert bil på ${onPlayerSide ? 'din' : 'møtende bils'} side`}>
            <title>Parkert bil som sperrer deler av kjørefeltet</title>
            <line className="vp-obstacle-label-line" x1={labelLineStart} y1="190" x2={labelLineEnd} y2="190" />
            <g className="vp-obstacle-label" transform={`translate(${labelX} 190)`}>
                <rect x="-29" y="-11" width="58" height="22" rx="11" />
                <text x="0" y="4" textAnchor="middle">PARKERT</text>
            </g>
            <g className="vp-parked-car" transform={`translate(${carX} 190) rotate(${carRotation})`}>
                <g className="vp-car-wheels">
                    <rect x="-13" y="-14" width="3" height="8" rx="1.5" />
                    <rect x="10" y="-14" width="3" height="8" rx="1.5" />
                    <rect x="-13" y="7" width="3" height="8" rx="1.5" />
                    <rect x="10" y="7" width="3" height="8" rx="1.5" />
                </g>
                <rect className="vp-parked-car-body" x="-11" y="-21" width="22" height="42" rx="5" />
                <path className="vp-car-window" d="M -7 -11 Q 0 -14 7 -11 L 6 -4 L -6 -4 Z" />
                <path className="vp-car-window" d="M -6 4 L 6 4 L 7 11 Q 0 14 -7 11 Z" />
                <rect className="vp-car-roof" x="-6" y="-3" width="12" height="6" rx="2" />
                <g className="vp-car-headlights">
                    <rect x="-8" y="-20" width="4" height="2.4" rx="1" />
                    <rect x="4" y="-20" width="4" height="2.4" rx="1" />
                </g>
                <g className="vp-car-tail-lights">
                    <rect x="-8" y="17.6" width="4" height="2.4" rx="1" />
                    <rect x="4" y="17.6" width="4" height="2.4" rx="1" />
                </g>
            </g>
        </g>
    )
}

interface VehicleRefs {
    group: SVGGElement | null
    car: SVGGElement | null
}

interface VehicleProps {
    scenario: VikepliktScenario
    vehicle: VikepliktVehicle
    path: Pose[]
    selectedIndex: number
    correctIndex: number
    checked: boolean
    isPlaybackActive: boolean
    onSelect: () => void
    registerRefs: (vehicleId: string, refs: VehicleRefs) => void
}

function SceneVehicle({
    scenario,
    vehicle,
    path,
    selectedIndex,
    correctIndex,
    checked,
    isPlaybackActive,
    onSelect,
    registerRefs,
}: VehicleProps) {
    const start = path[0]
    const badgeIndex = checked ? correctIndex : selectedIndex
    const tone = vehicleTone(scenario, vehicle)
    const name = vehicleName(scenario, vehicle)
    const isSelected = selectedIndex >= 0
    const movementLabel = vehicle.iRundkjoring
        ? 'er allerede inne i rundkjøringen'
        : `kommer fra ${directionLabel(vehicle.fra)}, skal ${turnLabel(vehicle.skal)}`

    const handleKeyDown = (event: KeyboardEvent<SVGGElement>) => {
        if (checked || (event.key !== 'Enter' && event.key !== ' ')) return
        event.preventDefault()
        onSelect()
    }

    return (
        <g transform={`translate(${start.x} ${start.y})`}>
            <g
                className={`vp-vehicle-button ${isSelected ? 'is-selected' : ''} ${checked ? 'is-checked' : ''} ${isPlaybackActive ? 'is-playback-active' : ''}`}
                role="button"
                tabIndex={checked ? -1 : 0}
                aria-disabled={checked}
                aria-label={`${name}, ${movementLabel}${badgeIndex >= 0 ? `, nummer ${badgeIndex + 1}` : ''}`}
                onClick={checked ? undefined : onSelect}
                onKeyDown={handleKeyDown}
                ref={node => registerRefs(vehicle.id, { group: node, car: node?.querySelector('.vp-car') ?? null })}
            >
                <rect className="vp-vehicle-hit-area" x="-27" y="-34" width="54" height="68" rx="12" />
                <g transform={`rotate(${start.rotation})`} className={`vp-car vp-car--${tone}`}>
                    <g className="vp-car-wheels">
                        <rect x="-13" y="-14" width="3" height="8" rx="1.5" />
                        <rect x="10" y="-14" width="3" height="8" rx="1.5" />
                        <rect x="-13" y="7" width="3" height="8" rx="1.5" />
                        <rect x="10" y="7" width="3" height="8" rx="1.5" />
                    </g>
                    <rect className="vp-car-body" x="-11" y="-21" width="22" height="42" rx="5" />
                    <path className="vp-car-body-highlight" d="M -7 -17 Q 0 -20 7 -17" />
                    <path className="vp-car-window" d="M -7 -11 Q 0 -14 7 -11 L 6 -4 L -6 -4 Z" />
                    <path className="vp-car-window" d="M -6 4 L 6 4 L 7 11 Q 0 14 -7 11 Z" />
                    <rect className="vp-car-roof" x="-6" y="-3" width="12" height="6" rx="2" />
                    <g className="vp-car-headlights">
                        <rect x="-8" y="-20" width="4" height="2.4" rx="1" />
                        <rect x="4" y="-20" width="4" height="2.4" rx="1" />
                    </g>
                    <g className="vp-car-tail-lights">
                        <rect x="-8" y="17.6" width="4" height="2.4" rx="1" />
                        <rect x="4" y="17.6" width="4" height="2.4" rx="1" />
                    </g>
                    <path className="vp-car-arrow" d="M 0 -2 L -4 4 L 4 4 Z" />
                    {vehicle.blinklys && vehicle.skal !== 'rett' && (
                        <circle
                            className="vp-indicator"
                            cx={vehicle.skal === 'hoyre' ? 9 : -9}
                            cy="-15"
                            r="2.8"
                        />
                    )}
                </g>

                {vehicle.erSpiller && (
                    <g className="vp-player-label" transform="translate(0 -40)">
                        <rect x="-18" y="-10" width="36" height="20" rx="10" />
                        <text x="0" y="4" textAnchor="middle">DEG</text>
                    </g>
                )}

                {badgeIndex >= 0 && (
                    <g className="vp-order-badge" transform="translate(22 -24)">
                        <circle r="12" />
                        <text x="0" y="4" textAnchor="middle">{badgeIndex + 1}</text>
                    </g>
                )}
            </g>
        </g>
    )
}

function IntersectionScene({
    scenario,
    selectedOrder,
    checked,
    playbackRun,
    playbackSpeed,
    activeVehicleId,
    onSelect,
    onActiveVehicleChange,
    onPlaybackComplete,
}: {
    scenario: VikepliktScenario
    selectedOrder: string[]
    checked: boolean
    playbackRun: number | null
    playbackSpeed: number
    activeVehicleId: string | null
    onSelect: (vehicleId: string) => void
    onActiveVehicleChange: (vehicleId: string | null) => void
    onPlaybackComplete: () => void
}) {
    const vehicleRefs = useRef(new Map<string, VehicleRefs>())
    const trafficSignalRefs = useRef(new Map<VikepliktDirection, SVGGElement>())

    const registerRefs = useCallback((vehicleId: string, refs: VehicleRefs) => {
        vehicleRefs.current.set(vehicleId, refs)
    }, [])

    // Spiller av riktig avvikling: bilene kjøres etter tur langs banene sine.
    // Transform settes direkte på DOM-nodene (utenom React) for jevn 60 fps-animasjon.
    useEffect(() => {
        if (!checked || playbackRun === null) return

        scenario.vehicles.forEach(vehicle => {
            const path = getVehiclePath(scenario, vehicle)
            const start = path[0]
            const refs = vehicleRefs.current.get(vehicle.id)
            refs?.group?.setAttribute('transform', 'translate(0 0)')
            refs?.car?.setAttribute('transform', `rotate(${start.rotation})`)
        })
        if (scenario.regulation === 'trafikklys') {
            DIRECTIONS.forEach(direction => {
                const initialState = scenario.signals?.[direction]
                if (initialState) trafficSignalRefs.current.get(direction)?.setAttribute('data-state', initialState)
            })
        }

        if (prefersReducedMotion()) {
            onActiveVehicleChange(null)
            onPlaybackComplete()
            return
        }

        const durationMs = Math.round(DRIVE_DURATION_MS * playbackSpeed)
        const staggerMs = Math.round((scenario.template === 'hindring' ? DRIVE_DURATION_MS : DRIVE_STAGGER_MS) * playbackSpeed)
        const totalMs = (scenario.correctOrder.length - 1) * staggerMs + durationMs
        let rafId = 0
        const startTime = performance.now()
        let lastActiveVehicleId: string | null = null

        const step = (now: number) => {
            const elapsed = now - startTime
            const activeIndex = Math.min(scenario.correctOrder.length - 1, Math.floor(elapsed / staggerMs))
            const nextActiveVehicleId = scenario.correctOrder[activeIndex] ?? null
            if (nextActiveVehicleId !== lastActiveVehicleId) {
                lastActiveVehicleId = nextActiveVehicleId
                onActiveVehicleChange(nextActiveVehicleId)
            }

            if (scenario.regulation === 'trafikklys') {
                const player = scenario.vehicles.find(vehicle => vehicle.erSpiller)
                const playerDriveIndex = player ? scenario.correctOrder.indexOf(player.id) : -1
                const playerStartsAt = playerDriveIndex * staggerMs
                const crossYellowAt = Math.max(0, playerStartsAt - 700)
                const crossRedAt = Math.max(0, playerStartsAt - 400)
                const playerGreenAt = Math.max(0, playerStartsAt - 150)

                DIRECTIONS.forEach(direction => {
                    const signal = trafficSignalRefs.current.get(direction)
                    if (!signal || !player) return
                    const onPlayerAxis = axisFor(direction) === axisFor(player.fra)
                    const nextState = onPlayerAxis
                        ? (elapsed >= playerGreenAt ? 'gronn' : 'rod')
                        : elapsed >= crossRedAt
                            ? 'rod'
                            : elapsed >= crossYellowAt
                                ? 'gul'
                                : 'gronn'

                    if (signal.getAttribute('data-state') !== nextState) {
                        signal.setAttribute('data-state', nextState)
                        const title = signal.querySelector('title')
                        if (title) {
                            const stateLabel = nextState === 'rod' ? 'Rødt' : nextState === 'gul' ? 'Gult' : 'Grønt'
                            title.textContent = `${stateLabel} lys for trafikk fra ${directionLabel(direction)}`
                        }
                    }
                })
            }
            scenario.vehicles.forEach(vehicle => {
                const driveIndex = scenario.correctOrder.indexOf(vehicle.id)
                if (driveIndex < 0) return
                const progress = (elapsed - driveIndex * staggerMs) / durationMs
                const path = getVehiclePath(scenario, vehicle)
                const start = path[0]
                const pose = samplePath(path, progress)
                const refs = vehicleRefs.current.get(vehicle.id)
                refs?.group?.setAttribute('transform', `translate(${pose.x - start.x} ${pose.y - start.y})`)
                refs?.car?.setAttribute('transform', `rotate(${pose.rotation})`)
            })

            if (elapsed < totalMs) {
                rafId = requestAnimationFrame(step)
            } else {
                onActiveVehicleChange(null)
                onPlaybackComplete()
            }
        }

        rafId = requestAnimationFrame(step)
        return () => {
            cancelAnimationFrame(rafId)
            onActiveVehicleChange(null)
            if (scenario.regulation === 'trafikklys') {
                DIRECTIONS.forEach(direction => {
                    const initialState = scenario.signals?.[direction]
                    if (initialState) trafficSignalRefs.current.get(direction)?.setAttribute('data-state', initialState)
                })
            }
        }
    }, [checked, playbackRun, playbackSpeed, scenario, onActiveVehicleChange, onPlaybackComplete])

    return (
        <div className="vp-scene-wrap">
            <svg
                className="vp-scene"
                viewBox="0 0 360 360"
                role="img"
                aria-label={`${scenario.template === 'x-kryss' ? 'X-kryss' : scenario.template === 't-kryss' ? 'T-kryss' : scenario.template === 'rundkjoring' ? 'Rundkjøring med ett felt' : 'Smal vei med parkert bil'} og ${scenario.vehicles.length} kjøretøy`}
            >
                <SceneRoad template={scenario.template} />
                <SceneSigns scenario={scenario} />
                <SceneTrafficSignals
                    scenario={scenario}
                    registerSignal={(direction, node) => {
                        if (node) trafficSignalRefs.current.set(direction, node)
                        else trafficSignalRefs.current.delete(direction)
                    }}
                />
                <SceneObstacle scenario={scenario} />
                {scenario.vehicles.map(vehicle => (
                    <SceneVehicle
                        key={vehicle.id}
                        scenario={scenario}
                        vehicle={vehicle}
                        path={getVehiclePath(scenario, vehicle)}
                        selectedIndex={selectedOrder.indexOf(vehicle.id)}
                        correctIndex={scenario.correctOrder.indexOf(vehicle.id)}
                        checked={checked}
                        isPlaybackActive={activeVehicleId === vehicle.id}
                        onSelect={() => onSelect(vehicle.id)}
                        registerRefs={registerRefs}
                    />
                ))}
            </svg>
        </div>
    )
}

export default function VikepliktSpill() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [score, setScore] = useState(0)
    const [selectedOrder, setSelectedOrder] = useState<string[]>([])
    const [checked, setChecked] = useState(false)
    const [wasCorrect, setWasCorrect] = useState<boolean | null>(null)
    const [playbackRun, setPlaybackRun] = useState<number | null>(null)
    const [activeVehicleId, setActiveVehicleId] = useState<string | null>(null)
    const [playbackDone, setPlaybackDone] = useState(false)
    const [showResults, setShowResults] = useState(false)
    const startedTrackedRef = useRef(false)
    const completionTrackedRef = useRef(false)

    // Skjult QA-hjelp: ?runde=11 åpner en bestemt runde direkte.
    // Leses først etter mount, slik at SSR/prerender får identisk første render.
    useEffect(() => {
        if (typeof window === 'undefined') return
        const requestedRound = Number(new URLSearchParams(window.location.search).get('runde'))
        if (!Number.isInteger(requestedRound) || requestedRound < 1 || requestedRound > vikepliktScenarios.length) return

        setCurrentIndex(requestedRound - 1)
        setSelectedOrder([])
        setChecked(false)
        setWasCorrect(null)
        setPlaybackRun(null)
        setActiveVehicleId(null)
        setPlaybackDone(false)
        setShowResults(false)
    }, [])

    useEffect(() => {
        if (startedTrackedRef.current) return
        startedTrackedRef.current = true
        trackEvent('game_started', { game_name: 'vikeplikt' })
    }, [])

    const scenario = vikepliktScenarios[currentIndex]
    const progress = ((currentIndex + 1) / vikepliktScenarios.length) * 100

    const seoHead = (
        <Helmet>
            <title>Vikepliktspill – tren på hvem som kjører først</title>
            <meta name="description" content="Tren på høyreregelen, skilt, trafikklys, venstresving, hindringer og rundkjøring. Velg riktig kjørerekkefølge i femten visuelle trafikksituasjoner." />
            <meta property="og:title" content="Vikepliktspill – tren på hvem som kjører først" />
            <meta property="og:description" content="Tren på høyreregelen, skilt, trafikklys, venstresving, hindringer og rundkjøring. Velg riktig kjørerekkefølge i femten visuelle trafikksituasjoner." />
            <script type="application/ld+json">
                {JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'VideoGame',
                    name: 'Vikepliktspillet',
                    url: 'https://teori-test.no/laeringsspill/vikeplikt',
                    description: 'Interaktivt læringsspill der du velger hvilken rekkefølge kjøretøyene skal kjøre i kryss, ved hindringer og i rundkjøring.',
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
                        { '@type': 'ListItem', position: 1, name: 'Læringsspill', item: 'https://teori-test.no/laeringsspill' },
                        { '@type': 'ListItem', position: 2, name: 'Vikepliktspillet' },
                    ],
                })}
            </script>
        </Helmet>
    )

    const selectVehicle = (vehicleId: string) => {
        if (checked) return
        setSelectedOrder(current => {
            if (current.includes(vehicleId)) {
                return current.filter(id => id !== vehicleId)
            }
            if (current.length >= scenario.vehicles.length) return current
            return [...current, vehicleId]
        })
    }

    const checkAnswer = () => {
        if (checked || selectedOrder.length !== scenario.vehicles.length) return
        const isCorrect = scenario.correctOrder.every((vehicleId, index) => selectedOrder[index] === vehicleId)
        setChecked(true)
        setWasCorrect(isCorrect)
        setPlaybackRun(isCorrect ? 1 : null)
        setActiveVehicleId(null)
        setPlaybackDone(false)
        if (isCorrect) setScore(current => current + 1)
    }

    const resetRound = () => {
        if (checked) return
        setSelectedOrder([])
    }

    const handlePlaybackComplete = useCallback(() => {
        setPlaybackDone(true)
    }, [])

    const handleActiveVehicleChange = useCallback((vehicleId: string | null) => {
        setActiveVehicleId(vehicleId)
    }, [])

    const playCorrectOrder = () => {
        setPlaybackDone(false)
        setActiveVehicleId(null)
        setPlaybackRun(current => (current ?? 0) + 1)
    }

    const completeGame = () => {
        setShowResults(true)
        if (!completionTrackedRef.current) {
            completionTrackedRef.current = true
            trackEvent('game_completed', {
                game_name: 'vikeplikt',
                score,
                total: vikepliktScenarios.length,
            })
        }
    }

    const nextRound = () => {
        if (!playbackDone) return
        if (currentIndex === vikepliktScenarios.length - 1) {
            completeGame()
            return
        }
        setCurrentIndex(index => index + 1)
        setSelectedOrder([])
        setChecked(false)
        setWasCorrect(null)
        setPlaybackRun(null)
        setActiveVehicleId(null)
        setPlaybackDone(false)
    }

    const restartGame = () => {
        setCurrentIndex(0)
        setScore(0)
        setSelectedOrder([])
        setChecked(false)
        setWasCorrect(null)
        setPlaybackRun(null)
        setActiveVehicleId(null)
        setPlaybackDone(false)
        setShowResults(false)
        completionTrackedRef.current = false
        trackEvent('game_started', { game_name: 'vikeplikt' })
    }

    const correctOrderVehicles = scenario.correctOrder.map(vehicleId => scenario.vehicles.find(vehicle => vehicle.id === vehicleId)!)

    return (
        <div className="vp-game-page">
            {seoHead}

            <nav className="vp-breadcrumb" aria-label="Brødsmulesti">
                <Link to="/laeringsspill">Læringsspill</Link>
                <span aria-hidden="true">/</span>
                <span>Vikepliktspillet</span>
            </nav>

            <section className="vp-card" aria-labelledby="vp-page-title">
                {!showResults ? (
                    <>
                        <header className="vp-header">
                            <div>
                                <span className="vp-kicker">Vikepliktspillet · nivå {scenario.level}</span>
                                <h1 id="vp-page-title">Når kjører du?</h1>
                                <p>Trykk kjøretøyene i rekkefølgen de skal kjøre.</p>
                            </div>
                            <div className="vp-score" aria-label={`${score} poeng`}>
                                <strong>{score}</strong>
                                <span>poeng</span>
                            </div>
                        </header>

                        <div className="vp-progress-meta">
                            <span>Runde {currentIndex + 1} av {vikepliktScenarios.length}</span>
                            <span>{regulationLabel(scenario)}</span>
                        </div>
                        <div className="vp-progress-track" aria-hidden="true">
                            <div className="vp-progress-fill" style={{ width: `${progress}%` }} />
                        </div>

                        <IntersectionScene
                            key={scenario.id}
                            scenario={scenario}
                            selectedOrder={selectedOrder}
                            checked={checked}
                            playbackRun={playbackRun}
                            playbackSpeed={wasCorrect === false ? 1.15 : 1}
                            activeVehicleId={activeVehicleId}
                            onSelect={selectVehicle}
                            onActiveVehicleChange={handleActiveVehicleChange}
                            onPlaybackComplete={handlePlaybackComplete}
                        />

                        {!checked && (
                            <div className="vp-selection-status" aria-live="polite">
                                {selectedOrder.length === 0
                                    ? 'Start med kjøretøyet som skal kjøre først.'
                                    : `${selectedOrder.length} av ${scenario.vehicles.length} kjøretøy valgt.`}
                            </div>
                        )}

                        {checked && (
                            <section className={`vp-feedback ${wasCorrect ? 'is-correct' : 'is-wrong'}`} aria-live="polite">
                                <div className="vp-feedback-heading">
                                    <span className="vp-feedback-icon" aria-hidden="true">{wasCorrect ? '✓' : '!'}</span>
                                    <div>
                                        <h2>{wasCorrect ? 'Riktig rekkefølge!' : 'Ikke helt – her er riktig rekkefølge'}</h2>
                                        <div className="vp-order-summary" aria-label="Riktig rekkefølge">
                                            {correctOrderVehicles.map((vehicle, index) => {
                                                const isActive = activeVehicleId === vehicle.id
                                                return (
                                                    <span
                                                        key={vehicle.id}
                                                        className={isActive ? 'is-active' : undefined}
                                                        aria-current={isActive ? 'step' : undefined}
                                                    >
                                                        <b>{index + 1}</b> {vehicleName(scenario, vehicle)}
                                                    </span>
                                                )
                                            })}
                                        </div>
                                    </div>
                                </div>
                                <p>{scenario.explanation}</p>
                                {scenario.teorifelle && (
                                    <p className="vp-theory-trap"><strong>Teorifelle:</strong> {scenario.teorifelle}</p>
                                )}
                            </section>
                        )}

                        <div className="vp-actions">
                            {!checked ? (
                                <>
                                    <button
                                        type="button"
                                        className="vp-button vp-button--secondary"
                                        onClick={resetRound}
                                        disabled={selectedOrder.length === 0}
                                    >
                                        <RotateCcw size={18} aria-hidden="true" />
                                        Nullstill
                                    </button>
                                    <button
                                        type="button"
                                        className="vp-button vp-button--primary"
                                        onClick={checkAnswer}
                                        disabled={selectedOrder.length !== scenario.vehicles.length}
                                    >
                                        Sjekk svaret
                                    </button>
                                </>
                            ) : wasCorrect ? (
                                <button
                                    type="button"
                                    className="vp-button vp-button--primary vp-button--wide"
                                    onClick={nextRound}
                                    disabled={!playbackDone}
                                >
                                    {!playbackDone
                                        ? 'Viser riktig avvikling …'
                                        : currentIndex === vikepliktScenarios.length - 1
                                            ? 'Se resultat'
                                            : 'Neste situasjon'}
                                </button>
                            ) : playbackRun === null ? (
                                <button
                                    type="button"
                                    className="vp-button vp-button--primary vp-button--wide"
                                    onClick={playCorrectOrder}
                                >
                                    <Play size={18} aria-hidden="true" />
                                    Vis riktig avvikling
                                </button>
                            ) : !playbackDone ? (
                                <button
                                    type="button"
                                    className="vp-button vp-button--primary vp-button--wide"
                                    disabled
                                >
                                    Viser riktig avvikling …
                                </button>
                            ) : (
                                <>
                                    <button
                                        type="button"
                                        className="vp-button vp-button--secondary"
                                        onClick={playCorrectOrder}
                                    >
                                        <RotateCcw size={18} aria-hidden="true" />
                                        Se igjen
                                    </button>
                                    <button
                                        type="button"
                                        className="vp-button vp-button--primary"
                                        onClick={nextRound}
                                    >
                                        {currentIndex === vikepliktScenarios.length - 1
                                            ? 'Se resultat'
                                            : 'Neste situasjon'}
                                    </button>
                                </>
                            )}
                        </div>
                    </>
                ) : (
                    <div className="vp-results">
                        <span className="vp-results-icon" aria-hidden="true">🏁</span>
                        <span className="vp-kicker">Alle situasjonene er fullført</span>
                        <h1 id="vp-page-title">Du fikk {score} av {vikepliktScenarios.length} riktige</h1>
                        <p>
                            {score === vikepliktScenarios.length
                                ? 'Full pott! Du skiller mellom høyreregelen, skilt, trafikklys, venstresving, hindringer og rundkjøring.'
                                : score >= 7
                                    ? 'Godt jobbet. Se særlig på forklaringene i situasjonene du bommet på, og prøv én runde til.'
                                    : 'Dette blir lettere når du tar én regel om gangen: se etter skilt, trafikk fra høyre, venstresving og hvilken side en hindring står på.'}
                        </p>
                        <div className="vp-results-actions">
                            <button type="button" className="vp-button vp-button--primary" onClick={restartGame}>
                                Spill igjen
                            </button>
                            <Link className="vp-button vp-button--secondary" to="/laeringsressurser/vikeplikt">
                                Les vikeplikt-artikkelen
                            </Link>
                        </div>
                    </div>
                )}
            </section>
        </div>
    )
}

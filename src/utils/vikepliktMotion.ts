export interface VehiclePose { x: number; y: number; rotation: number }
interface MotionPath { poses: VehiclePose[]; distances: number[]; length: number }

// Moderat tempo: ca. 3,3 sekunder for to biler og 4,8 for tre.
export const DRIVE_DURATION_MS = 1800
export const DRIVE_STAGGER_MS = 1500

export function prepareMotionPath(poses: VehiclePose[]): MotionPath {
    const distances = [0]
    for (let i = 1; i < poses.length; i++) {
        distances.push(distances[i - 1] + Math.hypot(poses[i].x - poses[i - 1].x, poses[i].y - poses[i - 1].y))
    }
    return { poses, distances, length: distances[distances.length - 1] }
}

export function sampleMotionPath(path: MotionPath, progress: number): VehiclePose {
    const t = Math.max(0, Math.min(1, progress))
    if (t === 0 || path.length === 0) return path.poses[0]
    if (t === 1) return path.poses[path.poses.length - 1]
    // Myk start/stopp uten den gamle kubiske kurvens høye toppfart midt i bevegelsen.
    const distance = t * t * (3 - 2 * t) * path.length
    let index = 0
    while (index < path.poses.length - 2 && path.distances[index + 1] < distance) index++
    const from = path.poses[index]
    const to = path.poses[index + 1]
    const segment = path.distances[index + 1] - path.distances[index]
    const local = segment > 0 ? (distance - path.distances[index]) / segment : 0
    const rotationDelta = ((to.rotation - from.rotation + 540) % 360) - 180
    return {
        x: from.x + (to.x - from.x) * local,
        y: from.y + (to.y - from.y) * local,
        rotation: from.rotation + rotationDelta * local,
    }
}

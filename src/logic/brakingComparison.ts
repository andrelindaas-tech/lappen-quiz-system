// Same constant deceleration for both cars, derived from v² / 200 metres.
export function compareBraking(speed: number, reactionTime = 1) {
    const fasterSpeed = speed + 10
    const brakingDistance = speed * speed / 200
    const stoppingDistance = speed / 3.6 * reactionTime + brakingDistance
    const fasterStoppingDistance = fasterSpeed / 3.6 * reactionTime + fasterSpeed * fasterSpeed / 200
    const distanceAvailableToBrake = Math.max(0, stoppingDistance - fasterSpeed / 3.6 * reactionTime)
    const remainingSpeed = Math.sqrt(Math.max(0, fasterSpeed * fasterSpeed - 200 * distanceAvailableToBrake))
    return { fasterSpeed, stoppingDistance, fasterStoppingDistance, remainingSpeed }
}

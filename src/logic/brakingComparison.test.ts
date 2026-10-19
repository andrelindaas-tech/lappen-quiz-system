import { describe, expect, it } from 'vitest'
import { compareBraking } from './brakingComparison'

describe('speed at the slower car’s stopping point', () => {
    it('uses one second of reaction and identical deceleration at 50/60 km/h', () => {
        const result = compareBraking(50)
        expect(result.stoppingDistance).toBeCloseTo(26.388889)
        expect(result.fasterStoppingDistance).toBeCloseTo(34.666667)
        expect(result.remainingSpeed).toBeCloseTo(40.688519, 4)
    })
    it('matches the energy difference when reaction time is zero', () => {
        expect(compareBraking(50, 0).remainingSpeed).toBeCloseTo(Math.sqrt(60 ** 2 - 50 ** 2))
    })
    it('does not slow the faster car before its reaction distance', () => {
        expect(compareBraking(10, 3).remainingSpeed).toBe(20)
    })
})

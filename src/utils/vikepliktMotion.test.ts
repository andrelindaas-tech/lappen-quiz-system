import { describe, expect, it } from 'vitest'
import { prepareMotionPath, sampleMotionPath } from './vikepliktMotion'

describe('vikeplikt: jevn avspilling langs kjørebanen', () => {
    it('gir samme posisjon uavhengig av tettheten av punkter langs veien', () => {
        const sparse = prepareMotionPath([{ x: 0, y: 0, rotation: 0 }, { x: 100, y: 0, rotation: 0 }])
        const dense = prepareMotionPath([0, 1, 3, 5, 10, 100].map(x => ({ x, y: 0, rotation: 0 })))
        for (const progress of [.1, .25, .5, .75, .9]) {
            expect(sampleMotionPath(dense, progress).x).toBeCloseTo(sampleMotionPath(sparse, progress).x)
        }
    })

    it('følger avstanden gjennom en sving og låser start og slutt', () => {
        const poses = [{ x: 0, y: 0, rotation: 0 }, { x: 0, y: 20, rotation: 0 }, { x: 80, y: 20, rotation: 90 }]
        const path = prepareMotionPath(poses)
        expect(sampleMotionPath(path, -1)).toEqual(poses[0])
        expect(sampleMotionPath(path, .5)).toEqual({ x: 30, y: 20, rotation: 33.75 })
        expect(sampleMotionPath(path, 2)).toEqual(poses[2])
    })

    it('snur korteste vei over vinkelgrensen og tåler stillestående punkter', () => {
        const path = prepareMotionPath([{ x: 0, y: 0, rotation: 170 }, { x: 10, y: 0, rotation: -170 }])
        expect(sampleMotionPath(path, .5).rotation).toBe(180)
        const still = prepareMotionPath([{ x: 4, y: 8, rotation: 0 }, { x: 4, y: 8, rotation: 0 }])
        expect(sampleMotionPath(still, .5)).toEqual({ x: 4, y: 8, rotation: 0 })
    })
})

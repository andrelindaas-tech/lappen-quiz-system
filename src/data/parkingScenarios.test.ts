import { describe, expect, it } from 'vitest'
import { parkingScenarios } from './parkingScenarios'

describe('parkingScenarios', () => {
    it('har minst ti situasjoner med unike id-er', () => {
        expect(parkingScenarios.length).toBeGreaterThanOrEqual(10)
        expect(new Set(parkingScenarios.map(scenario => scenario.id)).size).toBe(parkingScenarios.length)
    })

    it('har minst ett riktig og ett feil svar i hver situasjon', () => {
        for (const scenario of parkingScenarios) {
            const spotIds = scenario.spots.map(spot => spot.id)
            expect(new Set(spotIds).size, scenario.id).toBe(spotIds.length)
            expect(scenario.correctSpots.length, scenario.id).toBeGreaterThan(0)
            expect(scenario.correctSpots.length, scenario.id).toBeLessThan(spotIds.length)
            for (const correct of scenario.correctSpots) expect(spotIds, scenario.id).toContain(correct)
        }
    })

    it('legger plassene innenfor tegningen og med nok avstand til å trykke på', () => {
        for (const scenario of parkingScenarios) {
            const spots = [...scenario.spots].sort((a, b) => a.x - b.x)
            spots.forEach((spot, index) => {
                expect(spot.x - 42, scenario.id).toBeGreaterThanOrEqual(0)
                expect(spot.x + 42, scenario.id).toBeLessThanOrEqual(800)
                if (index > 0) expect(spot.x - spots[index - 1].x, scenario.id).toBeGreaterThanOrEqual(130)
            })
        }
    })

    it('bruker ikke ordet prototype i teksten som vises til brukeren', () => {
        const visible = parkingScenarios.flatMap(scenario => [scenario.title, scenario.shortTitle, scenario.prompt, scenario.explanation, scenario.ruleLabel])
        for (const text of visible) expect(text.toLowerCase()).not.toContain('prototype')
    })
})

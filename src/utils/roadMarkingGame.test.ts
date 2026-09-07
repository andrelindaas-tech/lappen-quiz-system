import { describe, expect, it } from 'vitest'
import { ROAD_MARKING_SCENARIOS as scenarios } from '../data/roadMarkingScenarios'
import { initialRoadMarkingState, roadMarkingReducer as reduce, type RoadMarkingState } from './roadMarkingGame'

function finish(state: RoadMarkingState, missIds: number[] = []) {
    while (state.phase === 'playing') {
        const s = scenarios.find(s => s.id === state.queue[state.round])!
        state = reduce(state, { type: 'answer', scenarioId: s.id, option: missIds.includes(s.id) ? (s.correct + 1) % s.options.length : s.correct })
        state = reduce(state, { type: 'next' })
    }
    return state
}

describe('veimerking: gjennomføring og repetisjon', () => {
    it('krever start og ett gyldig svar før neste oppgave', () => {
        expect(reduce(initialRoadMarkingState, { type: 'answer', scenarioId: 1, option: 1 })).toBe(initialRoadMarkingState)
        const started = reduce(initialRoadMarkingState, { type: 'start' })
        expect(reduce(started, { type: 'next' })).toBe(started)
        expect(reduce(started, { type: 'answer', scenarioId: 1, option: 99 })).toBe(started)
        expect(reduce(started, { type: 'answer', scenarioId: 1, option: -1 })).toBe(started)
    })

    it('registrerer ikke dobbeltsvar eller sene svar fra forrige oppgave', () => {
        const started = reduce(initialRoadMarkingState, { type: 'start' })
        const answered = reduce(started, { type: 'answer', scenarioId: 1, option: 0 })
        expect(reduce(answered, { type: 'answer', scenarioId: 1, option: 1 })).toBe(answered)
        const next = reduce(answered, { type: 'next' })
        expect(reduce(next, { type: 'answer', scenarioId: 1, option: 1 })).toBe(next)
        expect(reduce(next, { type: 'next' })).toBe(next)
        expect(next.answers).toHaveLength(1)
        expect(next.answers[0].correct).toBe(false)
    })

    it('gjentar bare feilene og bruker riktig total ved ny gjennomføring', () => {
        const result = finish(reduce(initialRoadMarkingState, { type: 'start' }), [4, 13])
        expect(result.answers.filter(a => a.correct)).toHaveLength(12)
        const retry = reduce(result, { type: 'retry' })
        expect(retry.queue).toEqual([4, 13])
        expect(retry.answers).toEqual([])
        expect(retry.retry).toBe(true)
        const retryResult = finish(retry, [13])
        expect(retryResult.phase).toBe('results')
        expect(retryResult.answers).toHaveLength(2)
        expect(reduce(retryResult, { type: 'retry' }).queue).toEqual([13])
    })

    it('fullfører en repetisjon på én oppgave og lar full runde starte på nytt', () => {
        const result = finish(reduce(initialRoadMarkingState, { type: 'start' }), [1])
        const passed = finish(reduce(result, { type: 'retry' }))
        expect(passed.phase).toBe('results')
        expect(passed.answers).toEqual([{ scenarioId: 1, option: scenarios[0].correct, correct: true }])
        expect(reduce(passed, { type: 'retry' })).toBe(passed)
        const restarted = reduce(passed, { type: 'start' })
        expect(restarted.queue).toHaveLength(14)
        expect(restarted.answers).toEqual([])
        expect(restarted.retry).toBe(false)
    })
})

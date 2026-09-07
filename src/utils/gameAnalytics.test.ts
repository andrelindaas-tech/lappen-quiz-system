import { describe, expect, it, vi } from 'vitest'
import { createGameAnalytics } from './gameAnalytics'

describe('createGameAnalytics', () => {
    it('lar spill uten fast slutt utelate total til gjennomføringen er over', () => {
        const emit = vi.fn()
        const analytics = createGameAnalytics('skiltduellen', emit)
        analytics.view()
        analytics.start()
        analytics.roundCompleted({ roundNumber: 1, isCorrect: false, score: 0 })
        analytics.complete({ score: 0, total: 1 })
        expect(emit.mock.calls.slice(0, 3).every(([, params]) => !('total' in params))).toBe(true)
        expect(emit).toHaveBeenLastCalledWith('game_completed', { game_name: 'skiltduellen', score: 0, total: 1 })
    })

    it('sender visning og spillstart én gang og på separate handlinger', () => {
        const emit = vi.fn()
        const analytics = createGameAnalytics('vikeplikt', emit)

        analytics.view(15)
        analytics.view(15)
        expect(emit).toHaveBeenCalledTimes(1)
        expect(emit).toHaveBeenLastCalledWith('game_view', {
            game_name: 'vikeplikt',
            total: 15,
        })

        analytics.start(15)
        analytics.start(15)
        expect(emit).toHaveBeenCalledTimes(2)
        expect(emit).toHaveBeenLastCalledWith('game_started', {
            game_name: 'vikeplikt',
            total: 15,
        })
    })

    it('sender én fullføringshendelse per kontrollert runde med trygge parametere', () => {
        const emit = vi.fn()
        const analytics = createGameAnalytics('vikeplikt', emit)
        const round = {
            roundNumber: 3,
            scenarioType: 'x-kryss',
            regulation: 'hoyreregel',
            isCorrect: false,
            score: 1,
            total: 15,
        }

        analytics.roundCompleted(round)
        analytics.roundCompleted(round)

        expect(emit).toHaveBeenCalledOnce()
        expect(emit).toHaveBeenCalledWith('game_round_completed', {
            game_name: 'vikeplikt',
            round_number: 3,
            scenario_type: 'x-kryss',
            regulation: 'hoyreregel',
            is_correct: false,
            score: 1,
            total: 15,
        })
    })

    it('sender fullføring én gang og åpner en ny gjennomføring etter replay', () => {
        const emit = vi.fn()
        const analytics = createGameAnalytics('vikeplikt', emit)

        analytics.start(15)
        analytics.complete({ score: 12, total: 15 })
        analytics.complete({ score: 12, total: 15 })
        analytics.replay({ score: 12, total: 15 })
        analytics.start(15)
        analytics.roundCompleted({
            roundNumber: 1,
            scenarioType: 'x-kryss',
            regulation: 'hoyreregel',
            isCorrect: true,
            score: 1,
            total: 15,
        })

        expect(emit.mock.calls.map(([name]) => name)).toEqual([
            'game_started',
            'game_completed',
            'game_replay',
            'game_started',
            'game_round_completed',
        ])
        expect(emit).toHaveBeenNthCalledWith(3, 'game_replay', {
            game_name: 'vikeplikt',
            score: 12,
            total: 15,
        })
    })
})

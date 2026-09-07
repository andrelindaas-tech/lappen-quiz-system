import { trackEvent, type AnalyticsParams } from './analytics'

type GameEventEmitter = (name: string, params?: AnalyticsParams) => void

interface GameRoundCompletedParams {
    roundNumber: number
    scenarioType?: string
    regulation?: string
    isCorrect: boolean
    score: number
    total?: number
}

interface GameScoreParams {
    score: number
    total: number
}

/**
 * Felles, personvernvennlig måling for læringsspill.
 * Holder selv orden på engangshendelser per spillgjennomføring.
 */
export function createGameAnalytics(gameName: string, emit: GameEventEmitter = trackEvent) {
    let viewed = false
    let started = false
    let completed = false
    const completedRounds = new Set<number>()

    const baseParams = { game_name: gameName }

    return {
        view(total?: number) {
            if (viewed) return
            viewed = true
            emit('game_view', { ...baseParams, ...(total === undefined ? {} : { total }) })
        },

        start(total?: number) {
            if (started) return
            started = true
            emit('game_started', { ...baseParams, ...(total === undefined ? {} : { total }) })
        },

        roundCompleted({
            roundNumber,
            scenarioType,
            regulation,
            isCorrect,
            score,
            total,
        }: GameRoundCompletedParams) {
            if (completedRounds.has(roundNumber)) return
            completedRounds.add(roundNumber)
            emit('game_round_completed', {
                ...baseParams,
                round_number: roundNumber,
                scenario_type: scenarioType,
                regulation,
                is_correct: isCorrect,
                score,
                ...(total === undefined ? {} : { total }),
            })
        },

        complete({ score, total }: GameScoreParams) {
            if (completed) return
            completed = true
            emit('game_completed', { ...baseParams, score, total })
        },

        replay({ score, total }: GameScoreParams) {
            emit('game_replay', { ...baseParams, score, total })
            started = false
            completed = false
            completedRounds.clear()
        },
    }
}

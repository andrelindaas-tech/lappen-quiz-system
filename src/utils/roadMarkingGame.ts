import { ROAD_MARKING_SCENARIOS } from '../data/roadMarkingScenarios'

export interface RoadMarkingAnswer { scenarioId: number; option: number; correct: boolean }
export interface RoadMarkingState {
    phase: 'intro' | 'playing' | 'results'
    queue: number[]
    round: number
    answers: RoadMarkingAnswer[]
    retry: boolean
}
export const initialRoadMarkingState: RoadMarkingState = {
    phase: 'intro', queue: ROAD_MARKING_SCENARIOS.map(s => s.id), round: 0, answers: [], retry: false,
}
type Action = { type: 'start' | 'next' | 'retry' } | { type: 'answer'; option: number; scenarioId: number }

export function roadMarkingReducer(state: RoadMarkingState, action: Action): RoadMarkingState {
    if (action.type === 'start') return { ...initialRoadMarkingState, phase: 'playing' }
    if (action.type === 'retry') {
        if (state.phase !== 'results') return state
        const queue = state.answers.filter(a => !a.correct).map(a => a.scenarioId)
        return queue.length ? { phase: 'playing', queue, round: 0, answers: [], retry: true } : state
    }
    if (state.phase !== 'playing') return state
    const scenario = ROAD_MARKING_SCENARIOS.find(s => s.id === state.queue[state.round])!
    if (action.type === 'answer') {
        if (state.answers.length > state.round || action.scenarioId !== scenario.id || !Number.isInteger(action.option) || action.option < 0 || action.option >= scenario.options.length) return state
        return { ...state, answers: [...state.answers, { scenarioId: scenario.id, option: action.option, correct: action.option === scenario.correct }] }
    }
    if (state.answers.length <= state.round) return state
    return state.round + 1 === state.queue.length ? { ...state, phase: 'results' } : { ...state, round: state.round + 1 }
}

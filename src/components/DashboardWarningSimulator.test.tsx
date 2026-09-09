import { describe, expect, it } from 'vitest'
import { renderToString } from 'react-dom/server'
import DashboardWarningSimulator from './DashboardWarningSimulator'
import { dashboardLamps, dashboardQuestions, makeDashboardRound } from '../data/dashboardLamps'

describe('Dashbordets læringsrunder', () => {
    it('velger fem ulike oppgaver uten å endre spørsmålsbanken', () => {
        const original = dashboardQuestions.map(q => q.id)
        const round = makeDashboardRound(dashboardQuestions)
        expect(round).toHaveLength(5)
        expect(new Set(round.map(q => q.id)).size).toBe(5)
        expect(dashboardQuestions.map(q => q.id)).toEqual(original)
    })
    it('lar en ny øvingsrunde inneholde bare feilene, også ved én feil', () => {
        const missed = [dashboardQuestions[0], dashboardQuestions[4]]
        expect(makeDashboardRound(missed, missed.length).map(q => q.id).sort()).toEqual(missed.map(q => q.id).sort())
        expect(makeDashboardRound([missed[0]], 1)).toEqual([missed[0]])
    })
    it('dekker alle lampene og begge lysmønstrene for motor og antiskrens', () => {
        expect(dashboardLamps).toHaveLength(12)
        for (const lamp of dashboardLamps) expect(dashboardQuestions.some(q => q.lamp === lamp.id)).toBe(true)
        for (const id of ['engine', 'esp']) {
            expect(dashboardQuestions.some(q => q.lamp === id && q.blinking)).toBe(true)
            expect(dashboardQuestions.some(q => q.lamp === id && !q.blinking)).toBe(true)
        }
        for (const q of dashboardQuestions) {
            expect(q.options[q.correct]).toBeTruthy()
            expect(new Set(q.options).size).toBe(q.options.length)
        }
    })
    it('prerenderer et stabilt utforsk-panel med alle tolv lamper', () => {
        const html = renderToString(<DashboardWarningSimulator />)
        expect(html).toBe(renderToString(<DashboardWarningSimulator />))
        expect(html).toContain('Utforsk lampene')
        expect(html).toContain('Test deg selv')
        for (const lamp of dashboardLamps) expect(html).toContain(lamp.name)
        expect(html).toContain('aria-live="polite"')
    })
})

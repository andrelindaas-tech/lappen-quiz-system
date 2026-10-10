import { describe, expect, it } from 'vitest'
import { renderToStaticMarkup } from 'react-dom/server'
import CategoryResult, { categoryResults } from './CategoryResult'
import ResultScreen from './ResultScreen'
import type { QuizResult } from '../logic/quizEngine'

describe('Gratis resultatanalyse', () => {
    it.each([ [8, true], [6, false] ] as const)('viser riktig status for %i riktige og prioriterer feil ved stryk', (correctCount, passed) => {
        const html = renderToStaticMarkup(<ResultScreen result={{correctCount, totalCount:10, errors:10-correctCount, percentage:correctCount*10, maxErrors:2, passed}} mode={{name:'Ekspresstest',description:'',questionCount:10,maxErrors:2}} onRestart={() => {}} onReview={() => {}} onReturnHome={() => {}} />)
        expect(html).toContain(passed ? 'Bestått på denne øvingstesten' : 'Ikke bestått på denne øvingstesten')
        expect(html).toContain('Krav i denne testen: 8 riktige av 10.')
        expect(html).toContain('Bestått her er ingen garanti')
        if (!passed) expect(html.indexOf('Se feilsvarene (4)')).toBeLessThan(html.indexOf('Ta testen på nytt'))
    })
    it('viser endelig score og prosent allerede ved første rendering', () => {
        const html = renderToStaticMarkup(<ResultScreen
            result={{ correctCount: 8, totalCount: 10, errors: 2, percentage: 80, maxErrors: 2, passed: true }}
            mode={{ name: 'Ekspresstest', description: '', questionCount: 10, maxErrors: 2 }}
            onRestart={() => {}} onReview={() => {}} onReturnHome={() => {}}
        />)
        expect(html).toContain('Riktige svar: 8 av 10')
        expect(html).toContain('>80%</span>')
    })
    it('anbefaler bare to temaer med feil og minst tre svar', () => {
        const html = renderToStaticMarkup(<CategoryResult breakdown={{ vikeplikt: { correct: 1, total: 4 }, skilt: { correct: 2, total: 4 }, parkering: { correct: 3, total: 4 }, sikkerhet: { correct: 0, total: 2 }, lover: { correct: 4, total: 4 } }} />)
        expect(html.match(/target="_blank"/g)).toHaveLength(2)
        expect(html).toContain('Les om vikeplikt og kryss')
        expect(html).toContain('Les om trafikkskilt')
        expect(html).toContain('Lite grunnlag')
        expect(html).not.toContain('Les om parkering')
    })
    it('gir ingen repetisjonslenker ved alle riktige, tomt eller lite grunnlag', () => {
        const scenarios: QuizResult['categoryBreakdown'][] = [{}, { skilt: { correct: 0, total: 2 } }, { skilt: { correct: 4, total: 4 } }]
        for (const breakdown of scenarios) {
            const html = renderToStaticMarkup(<CategoryResult breakdown={breakdown} />)
            expect(html).not.toContain('target="_blank"')
            expect(html).not.toContain('Dine svake områder')
        }
        expect(categoryResults({ skilt: { correct: 0, total: 0 } })).toEqual([])
    })
    it('bruker oversikten for brede kategorier og viser maksimalt fem rader først', () => {
        const breakdown = Object.fromEntries(['skilt','sikkerhet','lover','trafikanter','kjoretoy','parkering'].map(key => [key, { correct: 1, total: 4 }]))
        const html = renderToStaticMarkup(<CategoryResult breakdown={breakdown} />)
        expect(html).toContain('Vis alle 6 temaer')
        expect(html.match(/class="category-result-row"/g)).toHaveLength(5)
        const broad = renderToStaticMarkup(<CategoryResult breakdown={{ sikkerhet: { correct: 1, total: 4 } }} />)
        expect(broad).toContain('href="/laeringsressurser/"')
        expect(broad).not.toContain('sikkerhetskontroll')
    })
    it('eksponerer ikke pensumdetaljer eller målrettet øving i gratis resultatside', () => {
        const result = { correctCount: 1, totalCount: 4, errors: 3, percentage: 25, maxErrors: 7, passed: true, categoryBreakdown: { skilt: { correct: 1, total: 4 } }, curriculumAnalysis: { areas: [], untagged: 0 } }
        const props = { result, mode: { name: 'Full prøve', description: '', questionCount: 4, maxErrors: 7, isExamMode: true }, onRestart() {}, onReview() {}, onReturnHome() {} }
        const html = renderToStaticMarkup(<ResultScreen {...props} />)
        expect(html).toContain('Resultat per tema')
        expect(html).not.toContain('Øv på dette')
        expect(html).not.toContain('Resultat per pensumområde')
        expect(renderToStaticMarkup(<ResultScreen {...props} mode={{ ...props.mode, isExamMode: false }} />)).toContain('Resultat per tema')
    })
    it('skiller ubesvarte fra riktige og gir gjennomgang selv når alle besvarte er riktige', () => {
        const html = renderToStaticMarkup(<CategoryResult breakdown={{ skilt: { correct: 3, total: 3 } }} unanswered={2} onReview={() => {}} />)
        expect(html).toContain('2 ubesvarte spørsmål')
        expect(html).toContain('Gå gjennom feil og ubesvarte')
        expect(html).not.toContain('Start her:')
    })
    it('viser årsaken til prioriteringen og lover ikke at få svar viser mestring', () => {
        const html = renderToStaticMarkup(<CategoryResult breakdown={{ skilt: { correct: 1, total: 3 } }} onReview={() => {}} />)
        expect(html).toContain('1 av 3 riktige · 2 feil')
        expect(html).toContain('Gå gjennom feilsvarene')
        expect(html).toContain('grunnlaget begrenset')
    })
})

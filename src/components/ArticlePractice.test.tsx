import { describe, expect, it } from 'vitest'
import { renderToString } from 'react-dom/server'
import ArticlePractice, { articleSituations, type PracticeTopic } from './ArticlePractice'

describe('Artikkeloppgaver', () => {
  it('har fire entydige alternativer og gyldig fasit i alle situasjoner', () => {
    for (const situations of Object.values(articleSituations)) for (const q of situations) {
      expect(q.options).toHaveLength(4)
      expect(new Set(q.options).size).toBe(4)
      expect(q.options[q.correct]).toBeTruthy()
      expect(q.explanation.length).toBeGreaterThan(40)
    }
  })
  it('prerenderer første oppgave og samtlige forklaringer uten klientkode', () => {
    for (const topic of Object.keys(articleSituations) as PracticeTopic[]) {
      const html=renderToString(<ArticlePractice topic={topic}/> )
      expect(html).toContain(articleSituations[topic][0].question)
      expect(html.match(/class="ap-letter"/g)).toHaveLength(4)
      for (const q of articleSituations[topic]) expect(html).toContain(q.explanation)
      expect(html).toContain('aria-live="polite"')
    }
  })
})

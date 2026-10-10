import { useState } from 'react'
import type { QuizResult } from '../logic/quizEngine'
import './CategoryResult.css'

const topics: Record<string, { name: string; path: string }> = {
    vikeplikt: { name: 'Vikeplikt og kryss', path: 'vikeplikt/' },
    skilt: { name: 'Trafikkskilt', path: 'skilt/' },
    fart_og_plassering: { name: 'Fart og plassering', path: '' },
    bremselengde: { name: 'Bremselengde og reaksjonstid', path: 'bremselengde/' },
    parkering: { name: 'Parkering og stans', path: 'stans-og-parkering/' },
    kjoretoy: { name: 'Kjøretøy og teknisk', path: '' },
    trafikanter: { name: 'Trafikanter og samspill', path: '' },
    sikkerhet: { name: 'Sikkerhet og førstehjelp', path: '' },
    veimerking: { name: 'Veimerking', path: 'veimerking/' },
    lover: { name: 'Lover og ansvar', path: '' },
}

export function categoryResults(breakdown: QuizResult['categoryBreakdown']) {
    return Object.entries(breakdown ?? {}).filter(([, r]) => r.total > 0).map(([key, r]) => ({
        key, ...r, ...(topics[key] ?? { name: 'Andre spørsmål', path: '' }),
        rate: r.correct / r.total,
    })).sort((a, b) => a.rate - b.rate || b.total - a.total || a.name.localeCompare(b.name, 'nb'))
}

export default function CategoryResult({ breakdown, unanswered = 0, onReview }: { breakdown: QuizResult['categoryBreakdown']; unanswered?: number; onReview?: () => void }) {
    const [expanded, setExpanded] = useState(false)
    const rows = categoryResults(breakdown)
    const repeat = rows.filter(r => r.total >= 3 && r.correct < r.total).slice(0, 2)
    const perfect = rows.length > 0 && rows.every(r => r.correct === r.total)
    const hasErrors = rows.some(r => r.correct < r.total) || unanswered > 0
    return <section className="category-result" aria-label="Resultat per tema">
        <div className="category-result-recommend">
            <h3>{repeat.length ? 'Dette kan du øve på videre' : !rows.length ? 'Ingen besvarte spørsmål' : perfect ? 'Alle besvarte spørsmål var riktige' : 'Få svar å bygge på'}</h3>
            <p>{repeat.length ? 'Start med feilsvarene, og bruk lesestoffet til å forstå regelen bak svaret. Disse temaene hadde lavest andel riktige blant temaene med minst tre svar:' : !rows.length ? 'Besvar spørsmål i en ny test for å få en oversikt over temaene.' : perfect ? 'Prøv en ny test med andre spørsmål for å undersøke om kunnskapen sitter.' : 'Gå gjennom feilsvarene først. Det er for få svar per tema til å prioritere lesestoff ut fra denne testen.'}</p>
            {repeat.map((r, index) => <div className="category-result-suggestion" key={r.key}>
                <strong>{index === 0 ? 'Start her' : 'Deretter'}: {r.name}</strong>
                <p>{r.correct} av {r.total} riktige · {r.total - r.correct} feil</p>
                <a href={`/laeringsressurser/${r.path}`} target="_blank" rel="noopener noreferrer">{r.path ? `Les om ${r.name.toLocaleLowerCase('nb')}` : `Finn lesestoff: ${r.name.toLocaleLowerCase('nb')}`} →</a>
            </div>)}
            {repeat.some(r => !r.path) && <p className="category-result-note">Brede temaer lenker til oversikten over læringsressurser.</p>}
            {unanswered > 0 && <p>{unanswered} ubesvarte spørsmål er ikke vurdert per tema. Se gjennom dem også før du tar en ny test.</p>}
            {hasErrors && onReview && <button type="button" className="button button-secondary category-result-more" onClick={onReview}>{unanswered ? 'Gå gjennom feil og ubesvarte' : 'Gå gjennom feilsvarene'}</button>}
        </div>
        <div className="category-result-heading"><h3>Resultat per tema</h3><span>Riktige / besvarte</span></div>
        <div>
            {rows.slice(0, expanded ? rows.length : 5).map(r => <div className="category-result-row" key={r.key}>
                <div><strong>{r.name}</strong><small>{r.total < 3 ? 'Lite grunnlag' : r.correct === r.total ? 'Alle riktige' : `${r.total - r.correct} feil`}</small></div>
                <div className="category-result-track" aria-hidden="true"><div style={{ width: `${r.rate * 100}%`, background: r.total < 3 ? 'var(--color-text-light)' : r.rate < .75 ? '#b77618' : 'var(--color-primary)' }} /></div>
                <span className="category-result-number">{r.correct} / {r.total}</span>
            </div>)}
        </div>
        {rows.length > 5 && <button type="button" className="button button-secondary category-result-more" aria-expanded={expanded} onClick={() => setExpanded(!expanded)}>{expanded ? 'Vis færre temaer' : `Vis alle ${rows.length} temaer`}</button>}
        <p className="category-result-note">Dette viser svarene i denne testen, ikke alt du kan om et tema. Repetisjonsforslag krever minst tre besvarte spørsmål, men også da er grunnlaget begrenset. Ubesvarte spørsmål inngår ikke i temaresultatet.</p>
    </section>
}

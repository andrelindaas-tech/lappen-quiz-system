import Link from './InternalLink'
import './BeforeTheoryTest.css'

const articles = [
    ['teoritentamen', 'Gratis teoritentamen: slik fungerer øvingsprøven'],
    ['teoriproven-bil', 'Pris, tid og krav for teoriprøven'],
    ['vanlige-feil-teoriproven', '10 vanlige feil på teoriprøven'],
    ['stroket-teoriproven', 'Strøket? Slik består du neste gang'],
    ['temaliste-teoriproven-klasse-b', 'Temaliste for teoriprøven klasse B'],
    ['tips-eksamen', 'Tips for å bestå på første forsøk'],
]

export const beforeTheoryTestTopics = new Set([...articles.map(([id]) => id), 'teoriprove-gyldig-fravaer'])
export const practiceLinkTopics = new Set(['veimerking', 'vognkort-vekter', 'forbikjoring', 'vikeplikt', 'bremselengde', 'trafikklys-signaler', 'forerstottesystemer', 'reaksjonstid'])

export default function BeforeTheoryTest({ currentTopic }: { currentTopic?: string }) {
    return <section className="before-theory-test" aria-label="Før teoriprøven">
        <h2>Før teoriprøven</h2>
        <ul>
            {articles.filter(([id]) => id !== currentTopic).map(([id, label]) =>
                <li key={id}><Link to={`/laeringsressurser/${id}/`}>{label}</Link></li>)}
            {currentTopic && <li><Link to="/">Gratis teoriprøve for bil</Link></li>}
        </ul>
    </section>
}

export function TheoryPracticeLinks() {
    return <p className="theory-practice-links">Vil du øve på alle temaene? Velg en <Link to="/">gratis teoriprøve for bil</Link>, eller les <Link to="/laeringsressurser/teoritentamen/">hvordan en teoritentamen fungerer</Link>.</p>
}

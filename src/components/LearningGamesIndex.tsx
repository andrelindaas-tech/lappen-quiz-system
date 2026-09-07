import Link from './InternalLink'
import { Helmet } from 'react-helmet-async'
import { ArrowRight, BookOpen, CircleGauge, Gamepad2, Route, Signpost, UserCheck } from 'lucide-react'
import './LearningGamesIndex.css'

const games = [
    {
        slug: 'vikeplikt', name: 'Vikepliktspillet', icon: Route,
        question: 'Hvem kjører først?',
        description: 'Velg kjørerekkefølgen i kryss, ved hindringer og i rundkjøringer. Se bilene kjøre, og få forklart hvilken regel som gjelder.',
        detail: '15 situasjoner · Animert fasit', action: 'Tren på vikeplikt',
    },
    {
        slug: 'stopplengde', name: 'Stopplengde-utfordringen', icon: CircleGauge,
        question: 'Hvor langt før bilen stopper?',
        description: 'Anslå stopplengden med en skyveknapp. Sammenlign med utregningen og se hvordan fart og føre påvirker reaksjons- og bremselengden.',
        detail: '6 eller 10 oppgaver · Uten tidspress', action: 'Prøv stopplengde',
    },
    {
        slug: 'skiltduellen', name: 'Skiltduellen', icon: Signpost,
        question: 'Kjenner du igjen skiltet i tide?',
        description: 'Les påstanden og velg mellom fire trafikkskilt før tiden går ut. Samle poeng for raske svar, og lær av forklaringen når du bommer.',
        detail: 'Fire skiltvalg · Spill på tid', action: 'Start skiltduellen',
    },
    {
        slug: 'veimerking', name: 'Veimerking-spillet', icon: Route,
        question: 'Hvilken linje gjelder for deg?',
        description: 'Se veien fra bilen merket DU og velg ett av fire svar. Bruk hint, lær huskereglene og øv på nytt på oppgavene du bommet på.',
        detail: '14 bildeoppgaver · Øv på feilene', action: 'Øv på veimerking',
    },
]

export default function LearningGamesIndex() {
    return (
        <div className="lg-page">
            <Helmet>
                <title>Gratis teorispill – lær til teoriprøven med spill</title>
                <meta name="description" content="Fire gratis læringsspill til teoriprøven klasse B: tren på vikeplikt, trafikkskilt, stopplengde og veimerking. Spill rett i nettleseren – ingen innlogging." />
                <meta property="og:title" content="Gratis teorispill – lær til teoriprøven med spill" />
                <meta property="og:description" content="Fire gratis læringsspill til teoriprøven klasse B: tren på vikeplikt, trafikkskilt, stopplengde og veimerking. Spill rett i nettleseren – ingen innlogging." />
                <script type="application/ld+json">{JSON.stringify({
                    '@context': 'https://schema.org', '@type': 'ItemList',
                    name: 'Læringsspill til teoriprøven klasse B',
                    itemListElement: games.map((game, index) => ({
                        '@type': 'ListItem', position: index + 1, name: game.name,
                        url: `https://teori-test.no/laeringsspill/${game.slug}/`,
                    })),
                })}</script>
            </Helmet>

            <header className="lg-intro">
                <h1>Gratis spill til teoriprøven – klasse B</h1>
                <p>Teori sitter bedre når du bruker den. I de gratis læringsspillene trener du på vikeplikt, trafikkskilt, stopplengde og veimerking gjennom visuelle oppgaver og tydelige forklaringer. Spill direkte i nettleseren og uten innlogging.</p>
                <ul className="lg-benefits" aria-label="Om læringsspillene">
                    <li><Gamepad2 size={18} aria-hidden="true" />Fire gratis spill</li>
                    <li><UserCheck size={18} aria-hidden="true" />Ingen innlogging</li>
                    <li><BookOpen size={18} aria-hidden="true" />Fasit og forklaringer</li>
                </ul>
            </header>

            <section aria-labelledby="lg-choose-title">
                <div className="lg-section-heading">
                    <h2 id="lg-choose-title">Hva vil du bli tryggere på?</h2>
                    <p>Velg rolig øving eller utfordre deg selv på tid.</p>
                </div>
                <div className="lg-grid">
                    {games.map(({ slug, name, icon: Icon, question, description, detail, action }) => (
                        <Link key={slug} to={`/laeringsspill/${slug}/`} className="lg-card">
                            <div className="lg-card-top"><span className="lg-icon"><Icon size={25} strokeWidth={1.8} aria-hidden="true" /></span><span>{name}</span></div>
                            <h3>{question}</h3>
                            <p>{description}</p>
                            <span className="lg-card-detail">{detail}</span>
                            <span className="lg-card-action">{action}<ArrowRight size={18} aria-hidden="true" /></span>
                        </Link>
                    ))}
                </div>
            </section>

            <section className="lg-next" aria-labelledby="lg-next-title">
                <div><h2 id="lg-next-title">Bruk det du lærer videre</h2><p>Spillene hjelper deg å øve på ett tema om gangen. Les deg opp når noe er uklart, og prøv kunnskapen i en teoritest etterpå.</p></div>
                <div className="lg-next-links"><Link to="/laeringsressurser/">Utforsk læringsartiklene<ArrowRight size={17} aria-hidden="true" /></Link><Link to="/">Ta en gratis teoritest<ArrowRight size={17} aria-hidden="true" /></Link></div>
            </section>
        </div>
    )
}

import { useEffect, useState, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import Link from './InternalLink'
import { Helmet } from 'react-helmet-async'
import { ChevronDown, ChevronRight, RefreshCw } from 'lucide-react'
import { clearWrongAnswers, getWrongAnswersCount } from '../utils/wrongAnswersStore'
import './StartScreenV2.css'
import HeroSignCollage from './HeroSignCollage'
import BeforeTheoryTest from './BeforeTheoryTest'
import MerEnnSporsmal from './MerEnnSporsmal'

interface FaqItem {
    question: string
    answer: ReactNode
    jsonLdAnswer?: string
}

// Tallene under hero. Tallene er sjekket mot bygget.
const PROOF = [
    { number: '45', text: 'spørsmål, som på prøven' },
    { number: '250', text: 'trafikkskilt forklart' },
    { number: '50+', text: 'guider til pensum' },
    { number: '5', text: 'læringsspill' },
]

const demoProgress = {
    correct: 32,
    total: 45,
    tests: 2,
    questions: 20,
    articles: 14,
    totalArticles: 55,
    scores: [
        { label: 'Skilt', score: 64 },
        { label: 'Vikeplikt', score: 78 },
        { label: 'Full prøve', score: 86 },
    ],
}

const coreTheoryTopics = [
    { label: 'Vikeplikt og rundkjøring', path: '/laeringsressurser/vikeplikt' },
    { label: 'Bremselengde og stopplengde', path: '/laeringsressurser/bremselengde' },
    { label: 'Myndighetspyramiden i trafikken', path: '/laeringsressurser/myndighetspyramiden' },
    { label: 'Veimerking til teoriprøven', path: '/laeringsressurser/veimerking' },
    { label: 'Trafikkskilt og skiltregler', path: '/laeringsressurser/skilt' },
    { label: 'Fartsgrenser og fartstilpasning', path: '/laeringsressurser/fartsgrenser' },
    { label: 'Promille, rus og reaksjonsevne', path: '/laeringsressurser/promille' },
    { label: 'Tilhenger, vekt og førerkortklasse', path: '/laeringsressurser/tilhenger' },
    { label: 'Sikkerhetskontroll av bilen', path: '/laeringsressurser/sikkerhetskontroll' },
    { label: 'Glatt føre og vinterkjøring', path: '/laeringsressurser/glatt-fore' },
] as const

const faqItems: FaqItem[] = [
    {
        question: 'Er teoriprøven på Teori-test.no gratis?',
        answer: 'Ja. Du kan ta en teoriprøve gratis for bil klasse B med 45 spørsmål, fasit og forklaringer. Du trenger ikke registrere deg.',
    },
    {
        question: 'Er dette en teoriprøve for bil klasse B?',
        answer: 'Ja. Øvingen er laget for deg som skal ta teoriprøven for personbil i klasse B.',
    },
    {
        question: 'Er dette den ekte teoriprøven?',
        answer: 'Nei. Dette er en øvingsprøve laget for å ligne formatet på teoriprøven for klasse B, slik at du kan trene før den ekte prøven hos Statens vegvesen.',
    },
    {
        question: 'Hvor mange spørsmål er det på teoriprøven?',
        answer: 'Teoriprøven for bil (klasse B) hos Statens vegvesen har 45 spørsmål. Du må svare riktig på minst 38 for å bestå. Øvingsprøven vår bruker samme format med 45 spørsmål.',
    },
    {
        question: 'Hvor mange feil kan man ha på teoriprøven?',
        answer: 'Du kan ha maksimalt 7 feil på teoriprøven for klasse B. Det tilsvarer minst 38 riktige av 45 spørsmål, altså cirka 85 prosent.',
    },
    {
        question: 'Hvor lang tid har man på teoriprøven?',
        answer: 'Du har 90 minutter på den offisielle teoriprøven for klasse B. Trenger du mer tid, kan du be prøvevakten om ekstra tid. Hos oss kan du øve med valgfri 90-minutters nedtelling.',
    },
    {
        question: 'Får jeg se fasit og forklaring?',
        answer: 'Ja. Etter prøven får du se riktige svar og korte forklaringer, slik at du kan lære av feilene dine.',
    },
    {
        question: 'Får jeg se hva jeg bør øve mer på etter prøven?',
        answer: 'Ja. Etter full prøve får du en oversikt over temaene du bommet mest på, slik at du kan øve videre mer målrettet.',
    },
    {
        question: 'Hvilke temaer kan jeg øve på?',
        answer: 'Spørsmålene dekker de viktigste kategoriene i pensum for teoriprøven for klasse B. Du kan øve på blant annet vikeplikt, trafikkskilt, veimerking, bremselengde, forbikjøring, promille, glatt føre, kjøretøy, sikkerhetskontroll og trafikkregler.',
    },
    {
        question: 'Finnes det en gratis teoriprøve-app jeg kan bruke?',
        answer: (
            <>
                <p>Du trenger ikke laste ned en egen app. Teori-test.no fungerer i nettleseren på mobil, nettbrett og PC.</p>
                <span className="tt-v2-faq-instruction"><strong>iPhone/Safari:</strong> Åpne teori-test.no, trykk Del-ikonet og velg «Legg til på Hjem-skjerm».</span>
                <span className="tt-v2-faq-instruction"><strong>Android/Chrome:</strong> Åpne teori-test.no, trykk menyen og velg «Legg til på startsiden» eller «Installer app».</span>
            </>
        ),
        jsonLdAnswer: 'Du trenger ikke laste ned en egen app. Teori-test.no fungerer i nettleseren på mobil, nettbrett og PC. For rask tilgang kan brukeren legge siden til på hjemskjermen.',
    },
]

export default function StartScreen() {
    const navigate = useNavigate()
    const [fokusCount, setFokusCount] = useState(0)
    const [useTimerForFull, setUseTimerForFull] = useState(false)
    const [activeFaq, setActiveFaq] = useState<number | null>(null)

    useEffect(() => {
        setFokusCount(getWrongAnswersCount())
    }, [])


    // Nettstedets navn for Google (vises over søkeresultatet). Bare på forsiden, slik Google anbefaler.
    const websiteJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Teori-test.no',
        alternateName: ['Teori-test', 'Teoritest', 'Teori test'],
        url: 'https://teori-test.no/',
        inLanguage: 'nb',
        publisher: { '@id': 'https://teori-test.no/#organization' },
    }

    // Organisasjon med logo, så Google kan vise riktig navn og ikon.
    const organizationJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Organization',
        '@id': 'https://teori-test.no/#organization',
        name: 'Teori-test.no',
        url: 'https://teori-test.no/',
        logo: 'https://teori-test.no/logo.png',
    }

    const faqJsonLd = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqItems.map((item) => ({
            '@type': 'Question',
            name: item.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: item.jsonLdAnswer || (typeof item.answer === 'string'
                    ? item.answer
                    : 'Besøk Teori-test.no for detaljert informasjon.'),
            },
        })),
    }

    const startFullQuiz = () => {
        navigate(`/quiz?mode=eksamen${useTimerForFull ? '&timer=true' : ''}`)
    }

    const clearFokus = () => {
        if (!window.confirm('Er du sikker på at du vil nullstille alle lagrede feilsvar i fokusmodus?')) return
        clearWrongAnswers()
        setFokusCount(0)
    }

    return (
        <div className="tt-v2-start">
            <Helmet>
                <title>Gratis teoriprøve klasse B 2026 – 45 spørsmål og fasit | Teori-test.no</title>
                <meta name="description" content="Øv gratis til teoriprøven for klasse B. Ta full prøve med 45 spørsmål, vikepliktstest, skilttest og interaktive guider. Ingen registrering." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://teori-test.no/" />
                <meta property="og:title" content="Gratis teoriprøve klasse B 2026 – 45 spørsmål og fasit | Teori-test.no" />
                <meta property="og:description" content="Øv gratis til teoriprøven for klasse B. Ta full prøve med 45 spørsmål, vikepliktstest, skilttest og interaktive guider. Ingen registrering." />
                <meta property="og:image" content="https://teori-test.no/og-image.png" />
                <meta property="og:image:alt" content="Teori-test.no – gratis teoriprøve for klasse B" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Gratis teoriprøve klasse B 2026 – 45 spørsmål og fasit | Teori-test.no" />
                <meta name="twitter:description" content="Øv gratis til teoriprøven for klasse B. Ta full prøve med 45 spørsmål, vikepliktstest, skilttest og interaktive guider. Ingen registrering." />
                <meta name="twitter:image" content="https://teori-test.no/og-image.png" />
                <meta name="twitter:image:alt" content="Teori-test.no – gratis teoriprøve for klasse B" />
                <script type="application/ld+json">{JSON.stringify(websiteJsonLd)}</script>
                <script type="application/ld+json">{JSON.stringify(organizationJsonLd)}</script>
                <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
            </Helmet>

            <section className="tt-v2-hero tt-v2-container">
                <div className="tt-v2-hero-copy">
                    <p className="tt-v2-eyebrow">Klasse B · Førerkort</p>
                    <h1>Norges enkleste måte å øve til teoriprøven – helt gratis.</h1>
                    <p className="tt-v2-lead">
                        Teori-test.no er laget for deg som snart skal ta teoriprøven for klasse B. Her finner du kvalitetssikrede teorioppgaver som dekker hele pensum – fra fartsgrenser og vikeplikt til vegoppmerking og trafikkskilt. I tillegg til øvingsprøver finner du interaktive læringsartikler med visuelle guider og simulatorer. Du trenger ikke å opprette en bruker, betale eller laste ned noe.
                    </p>
                    <div className="tt-v2-assurances" aria-label="Kort fakta">
                        <span>Ingen registrering</span>
                        <span>45 spørsmål</span>
                        <span>Oppdatert 2026</span>
                        <span>Klasse B-pensum</span>
                    </div>
                </div>

                <HeroSignCollage />
            </section>

            <section className="tt-v2-proof" aria-label="Dette får du">
                <div className="tt-v2-container tt-v2-proof-grid">
                    {PROOF.map(p => (
                        <div className="tt-v2-proof-item" key={p.text}><strong><span className="tt-v2-proof-number">{p.number}</span> {p.text}</strong></div>
                    ))}
                </div>
            </section>

            <section className="tt-v2-feature-stage tt-v2-container" id="fremgang" aria-label="Min fremgang og Fokusmodus">
                <article className="tt-v2-feature-card tt-v2-progress-card">
                    <div className="tt-v2-feature-copy">
                        <p className="tt-v2-eyebrow">Min fremgang</p>
                        <h2>Få oversikt over svake områder</h2>
                        <p>Etter full prøve ser du hvilke temaer du bør øve mer på – og hvor du står nå.</p>
                        <Link className="tt-v2-text-link" to="/min-fremgang">
                            Min fremgang <ChevronRight size={14} aria-hidden="true" />
                        </Link>
                    </div>

                    <div className="tt-v2-progress-visual" aria-label="Din fremgangsoversikt">
                        <div className="tt-v2-progress-meta">
                            <span>Siste fulle prøve</span>
                            <strong>{demoProgress.correct} <small>/ {demoProgress.total} riktige</small></strong>
                        </div>
                        <div className="tt-v2-bar-list">
                            {demoProgress.scores.map((item) => (
                                <div className="tt-v2-bar-row" key={item.label}>
                                    <div className="tt-v2-bar-head"><span>{item.label}</span><b>{item.score} %</b></div>
                                    <i><span style={{ width: `${item.score}%` }} /></i>
                                </div>
                            ))}
                        </div>
                        <dl className="tt-v2-progress-activity" aria-label="Aktivitet totalt">
                            <div><dt>Prøver</dt><dd><strong>{demoProgress.tests}</strong> totalt</dd></div>
                            <div><dt>Spørsmål</dt><dd><strong>{demoProgress.questions}</strong> svart på</dd></div>
                            <div><dt>Artikler</dt><dd><strong>{demoProgress.articles}</strong> / {demoProgress.totalArticles}</dd></div>
                        </dl>
                    </div>
                </article>

                <article className="tt-v2-feature-card tt-v2-focus-card">
                    <div className="tt-v2-focus-symbol" aria-hidden="true"><i /><i /><i /></div>
                    <p className="tt-v2-eyebrow">Fokusmodus</p>
                    <h2>Tren videre på spørsmålene du faktisk bommer på.</h2>
                    <p>Feilsvarene dine lagres anonymt i nettleseren din, slik at du kan luke ut de svake punktene før prøvedagen.</p>
                    {fokusCount > 0 && (
                        <p className="tt-v2-focus-count">Lagrede feilsvar: <strong>{fokusCount} spørsmål</strong></p>
                    )}
                    <div className="tt-v2-focus-actions">
                        <button
                            className="tt-v2-button tt-v2-button-secondary"
                            type="button"
                            disabled={fokusCount === 0}
                            onClick={() => navigate('/quiz?mode=fokus')}
                        >
                            Start test <ChevronRight size={14} aria-hidden="true" />
                        </button>
                        {fokusCount > 0 && (
                            <button className="tt-v2-reset-button" type="button" onClick={clearFokus}>
                                <RefreshCw size={14} aria-hidden="true" /> Nullstill
                            </button>
                        )}
                    </div>
                </article>
            </section>

            <section className="tt-v2-trials tt-v2-container" id="prover">
                <div className="tt-v2-section-heading">
                    <div><p className="tt-v2-eyebrow">Øvingsprøve</p><h2>Velg prøvetype</h2></div>
                    <p>Velg mellom en rask øvingstest og en fullverdig eksamensprøve.</p>
                </div>

                <div className="tt-v2-trial-grid">
                    <article className="tt-v2-trial-card tt-v2-trial-card-full">
                        <div className="tt-v2-trial-number">01</div>
                        <div className="tt-v2-trial-copy">
                            <div className="tt-v2-trial-title-row"><h3>Full prøve</h3><span className="tt-v2-trial-badge">Offisielt format</span></div>
                            <p>Simulerer den virkelige teoriprøven hos Statens vegvesen med samme tidsbegrensning og beståttgrense (maks 7 feil av 45 oppgaver). Denne samler spørsmål fra alle kategorier for å gi deg et mest mulig realistisk bilde av sjansene dine for å bestå før den ekte eksamenen. Etter prøven får du en oversikt over hvilke temaer du bør øve mer på.</p>
                            <div className="tt-v2-trial-bottom">
                                <div className="tt-v2-trial-meta">
                                    <span><small>Tid</small>90 min</span>
                                    <span><small>Krav</small>Maks 7 feil</span>
                                </div>
                                <label className="tt-v2-time-toggle">
                                    <input
                                        type="checkbox"
                                        checked={useTimerForFull}
                                        onChange={(event) => setUseTimerForFull(event.target.checked)}
                                    />
                                    <span>Tidsbegrensning (90 min)</span>
                                </label>
                                <button className="tt-v2-button tt-v2-button-primary" type="button" onClick={startFullQuiz}>
                                    Start full prøve <ChevronRight size={14} aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                    </article>

                    <TrialCard
                        number="02"
                        title="Vikepliktstest"
                        description="Målrettet øving på en vanlig strykfelle. Test din forståelse for høyreregler, svingeregler, forkjørsvei, rundkjøringer og spesielle vikepliktsituasjoner med visualiseringer."
                        meta="10 spørsmål · vikeplikt i trafikken"
                        onStart={() => navigate('/quiz/vikeplikt')}
                    />
                    <TrialCard
                        number="03"
                        title="Ekspresstest"
                        description="10 raske spørsmål når du vil ta en kjapp sjekk. Passer perfekt når du har dårlig tid på bussen, skolen eller i pausen."
                        meta="10 spørsmål · ca. 15 minutter"
                        onStart={() => navigate('/quiz?mode=hurtig')}
                    />
                    <TrialCard
                        number="04"
                        title="Skilttest"
                        description="Øv på trafikkskilt og vikepliktskilt. Lær deg betydningen av de viktigste forbuds-, påbuds-, opplysnings- og fareskiltene du garantert vil møte på veien."
                        meta="10 spørsmål · norske trafikkskilt"
                        onStart={() => navigate('/quiz/skilt')}
                    />
                </div>

                <div className="tt-v2-exam-strip">
                    <aside className="tt-v2-exam-facts" aria-labelledby="exam-facts-title">
                        <h3 id="exam-facts-title">Teoriprøven for klasse B: kort fakta</h3>
                        <ul>
                            <li><strong>45</strong><span>spørsmål</span></li>
                            <li><strong>90</strong><span>minutter</span></li>
                            <li><strong>7</strong><span>feil kan du ha, maks</span></li>
                            <li><strong>17,5</strong><span>år er tidligste alder</span></li>
                            <li><strong>3</strong><span>år gjelder bestått prøve</span></li>
                            <li><strong>2</strong><span>uker minst før ny prøve ved stryk</span></li>
                        </ul>
                        <small>Regler kan endres. Sjekk alltid Statens vegvesen før du bestiller prøve.</small>
                    </aside>
                    <aside className="tt-v2-exam-checklist" aria-labelledby="exam-checklist-title">
                        <h3 id="exam-checklist-title">Dette må være på plass før prøven</h3>
                        <ul>
                            <li>Du har søkt om førerkort på Din side hos Statens vegvesen, og søknaden er godkjent. Har du svart ja på helsespørsmålene, trenger du syns- eller helseattest.</li>
                            <li>Opplæringen er fullført og registrert: <Link to="/laeringsressurser/trafikalt-grunnkurs">trafikalt grunnkurs</Link>. Over 25 år er du fritatt for deler av det.</li>
                            <li>Du er minst 17 og et halvt år, altså tidligst seks måneder før du fyller 18.</li>
                            <li>Du har bestilt og betalt time, og har med gyldig legitimasjon.</li>
                        </ul>
                        <Link className="tt-v2-text-link" to="/laeringsressurser/teoriproven-bil">
                            Alt om teoriprøven <ChevronRight size={14} aria-hidden="true" />
                        </Link>
                    </aside>
                </div>
            </section>

            <div className="tt-v2-container"><BeforeTheoryTest /></div>
            <section className="tt-v2-interactive" aria-label="Interaktiv læring">
                <div className="tt-v2-container">
                    <div className="tt-v2-section-heading">
                        <div><p className="tt-v2-eyebrow">Mer enn spørsmål</p><h2>Interaktive guider og artikler</h2></div>
                        <p>Forstå reglene bak spørsmålene med visuelle eksempler, steg-for-steg-guider og korte forklaringer.</p>
                    </div>

                    <MerEnnSporsmal />
                </div>
            </section>

            <section className="tt-v2-topics" aria-labelledby="core-theory-topics-title">
                <div className="tt-v2-container">
                    <div className="tt-v2-topics-heading">
                        <div>
                            <p className="tt-v2-eyebrow">Les deg opp på pensum</p>
                            <h2 id="core-theory-topics-title">Viktige temaer på teoriprøven</h2>
                        </div>
                        <p>Gå rett til forklaringer, eksempler og vanlige teorifeller i temaene mange synes er vanskelige.</p>
                    </div>

                    <nav aria-label="Sentrale temaer for teoriprøven">
                        <ul className="tt-v2-topic-list">
                            {coreTheoryTopics.map((topic) => (
                                <li key={topic.path}>
                                    <Link to={topic.path}>
                                        <span>{topic.label}</span>
                                        <ChevronRight size={16} aria-hidden="true" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>

                    <Link className="tt-v2-text-link tt-v2-topics-all" to="/laeringsressurser">
                        Se alle læringsressurser <ChevronRight size={14} aria-hidden="true" />
                    </Link>
                </div>
            </section>

            <section className="tt-v2-how">
                <div className="tt-v2-container">
                    <div className="tt-v2-how-heading"><p className="tt-v2-eyebrow">Fra øving til oversikt</p><h2>Slik fungerer det</h2></div>
                    <ol className="tt-v2-how-track">
                        <HowStep number="01" title="Velg prøve eller tema">Start med en full prøve, en tematest eller en guide.</HowStep>
                        <HowStep number="02" title="Svar på spørsmål">Øv i samme format som teoriprøven hos Statens vegvesen.</HowStep>
                        <HowStep number="03" title="Se forklaring">Lær hvorfor svaret er riktig eller feil – ikke bare hva som var riktig.</HowStep>
                        <HowStep number="04" title="Få oversikt over svake områder">Etter full prøve ser du hvilke temaer du bør øve mer på, og kan trene videre i fokusmodus.</HowStep>
                    </ol>
                </div>
            </section>

            <section className="tt-v2-trust" aria-label="Om siden og kildene">
                <div className="tt-v2-container tt-v2-trust-grid">
                    <div className="tt-v2-trust-method">
                        <p className="tt-v2-eyebrow">Åpent om innholdet</p>
                        <h2>Du skal kunne se hva du øver på.</h2>
                        <ol className="tt-v2-method-list">
                            <TrustMethod number="01" title="Temaer fra klasse B-pensum">Oppgavene tar utgangspunkt i temaene som inngår i opplæringen for klasse B.</TrustMethod>
                            <TrustMethod number="02" title="Forklaring etter hvert svar">Etter at du har svart, får du en forklaring som viser hvorfor alternativet er riktig eller feil.</TrustMethod>
                            <TrustMethod number="03" title="Synlig oppdateringsdato">Vi viser når innholdet sist ble gjennomgått eller vesentlig oppdatert.</TrustMethod>
                        </ol>
                    </div>
                    <div>
                        <p className="tt-v2-eyebrow">Dette kan du forvente</p>
                        <div className="tt-v2-trust-facts">
                            <div><span>Svar</span><span>Forklaring etter hvert svar</span></div>
                            <div><span>Skiltguide</span><span>For norske trafikkskilt</span></div>
                            <div><span>Tjenesten</span><span>Uavhengig læringsressurs</span></div>
                            <div><span>Tilknytning</span><span>Ikke tilknyttet Statens vegvesen</span></div>
                        </div>
                        <p className="tt-v2-trust-sources">
                            Les mer om{' '}
                            <a href="https://www.vegvesen.no/" target="_blank" rel="noopener noreferrer">opplæring for klasse B hos Statens vegvesen</a>
                            {' '}og{' '}
                            <a href="https://lovdata.no/dokument/SF/forskrift/1986-03-21-747" target="_blank" rel="noopener noreferrer">trafikkreglene på Lovdata</a>.
                        </p>
                    </div>
                </div>
            </section>

            <section className="tt-v2-seo tt-v2-seo-single tt-v2-container" aria-labelledby="bruk-resultatene">
                <div className="tt-v2-seo-intro">
                    <p className="tt-v2-eyebrow">Fra resultat til neste økt</p>
                    <h2 id="bruk-resultatene">Bruk resultatene til å velge hva du øver på.</h2>
                    <p>
                        En prøve er mest nyttig som et øyeblikksbilde av egen øving. Se etter temaene du oftest svarer feil på, les forklaringen og prøv den samme regelen i en ny situasjon. Når du øver igjen senere, kan du sammenligne resultatene med dine egne tidligere forsøk.
                    </p>
                    <div className="tt-v2-seo-links">
                        <p>
                            <strong>Kort økt:</strong>{' '}
                            <Link to="/quiz/skilt">Skilt-quiz</Link> ·{' '}
                            <Link to="/quiz/vikeplikt">Vikeplikt-quiz</Link> ·{' '}
                            <Link to="/quiz/fartsregler">Fartsregler</Link> ·{' '}
                            <Link to="/quiz/veimerking">Veimerking</Link>
                        </p>
                        <p>
                            <strong>Forstå regelen:</strong>{' '}
                            <Link to="/sporsmal">Teorispørsmål</Link> ·{' '}
                            <Link to="/laeringsressurser">Interaktive guider</Link>
                        </p>
                        <p>
                            <strong>Fortsett der du slapp:</strong>{' '}
                            <Link to="/min-fremgang">Min fremgang</Link> ·{' '}
                            <Link to="/quiz?mode=fokus">Fokusmodus</Link>
                        </p>
                    </div>
                </div>

            </section>

            <section className="tt-v2-faq tt-v2-container" id="faq">
                <div className="tt-v2-faq-heading">
                    <div><p className="tt-v2-eyebrow">Om øvingsprøven</p><h2>Ofte stilte spørsmål</h2></div>
                    <p>Svar på vanlige spørsmål om teoriprøven, øvingen og hvordan Teori-test.no fungerer.</p>
                </div>
                <div className="tt-v2-faq-list">
                    {faqItems.map((faq, index) => {
                        const open = activeFaq === index
                        return (
                            <div className={`tt-v2-faq-item ${open ? 'is-open' : ''}`} key={faq.question}>
                                <button type="button" onClick={() => setActiveFaq(open ? null : index)} aria-expanded={open}>
                                    <span>{faq.question}</span>
                                    <ChevronDown size={18} aria-hidden="true" />
                                </button>
                                {open && <div className="tt-v2-faq-answer">{typeof faq.answer === 'string' ? <p>{faq.answer}</p> : faq.answer}</div>}
                            </div>
                        )
                    })}
                </div>
            </section>
        </div>
    )
}

interface TrialCardProps {
    number: string
    title: string
    description: string
    meta: string
    onStart: () => void
}

function TrialCard({ number, title, description, meta, onStart }: TrialCardProps) {
    return (
        <article className="tt-v2-trial-card">
            <div className="tt-v2-trial-number">{number}</div>
            <div className="tt-v2-trial-copy">
                <div className="tt-v2-trial-title-row"><h3>{title}</h3></div>
                <p>{description}</p>
                <div className="tt-v2-trial-bottom">
                    <div className="tt-v2-trial-meta"><span>{meta}</span></div>
                    <button className="tt-v2-button tt-v2-button-tertiary" type="button" onClick={onStart}>
                        Start test <ChevronRight size={14} aria-hidden="true" />
                    </button>
                </div>
            </div>
        </article>
    )
}

function HowStep({ number, title, children }: { number: string; title: string; children: ReactNode }) {
    return (
        <li className="tt-v2-how-step">
            <span className="tt-v2-how-dot" aria-hidden="true">{number}</span>
            <h3>{title}</h3>
            <p>{children}</p>
        </li>
    )
}

function TrustMethod({ number, title, children }: { number: string; title: string; children: ReactNode }) {
    return (
        <li>
            <i aria-hidden="true">{number}</i>
            <strong>{title}</strong>
            <span>{children}</span>
        </li>
    )
}

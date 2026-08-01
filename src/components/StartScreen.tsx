import { useEffect, useRef, useState, type ReactNode } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ChevronDown, ChevronRight, RefreshCw } from 'lucide-react'
import { clearWrongAnswers, getWrongAnswersCount } from '../utils/wrongAnswersStore'
import './StartScreenV2.css'

interface FaqItem {
    question: string
    answer: ReactNode
    jsonLdAnswer?: string
}

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

const faqItems: FaqItem[] = [
    {
        question: 'Er teoriprøven på Teori-test.no gratis?',
        answer: 'Ja. Du kan ta en teoriprøve gratis for bil klasse B med 45 spørsmål, fasit og forklaringer. Du trenger ikke registrere deg.',
    },
    {
        question: 'Er dette en teoriprøve for bil klasse B?',
        answer: 'Ja. Øvingen er laget for deg som skal ta teoriprøven for bil/personbil klasse B.',
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
        answer: 'Spørsmålene dekker de viktigste kategoriene i pensum for teoriprøven klasse B. Du kan øve på blant annet vikeplikt, trafikkskilt, veimerking, bremselengde, forbikjøring, promille, glatt føre, kjøretøy, sikkerhetskontroll og trafikkregler.',
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
    const roundaboutFrame = useRef<HTMLIFrameElement>(null)
    const [fokusCount, setFokusCount] = useState(0)
    const [useTimerForFull, setUseTimerForFull] = useState(false)
    const [activeFaq, setActiveFaq] = useState<number | null>(null)
    const [roundaboutHeight, setRoundaboutHeight] = useState(720)

    useEffect(() => {
        setFokusCount(getWrongAnswersCount())
    }, [])

    useEffect(() => {
        const frame = roundaboutFrame.current
        if (!frame) return

        const syncTheme = () => {
            frame.contentWindow?.postMessage({
                type: 'teori-test-theme',
                theme: document.body.classList.contains('dark-mode') ? 'dark' : 'light',
            }, '*')
        }

        const handleMessage = (event: MessageEvent) => {
            if (event.source !== frame.contentWindow) return
            if (event.data?.type === 'roundabout-ready') syncTheme()
            if (event.data?.type === 'roundabout-height') {
                const nextHeight = Math.max(360, Math.min(1100, Number(event.data.height) || 0))
                setRoundaboutHeight(nextHeight)
            }
        }

        const handleThemeChange = () => syncTheme()
        window.addEventListener('message', handleMessage)
        window.addEventListener('teori-test-theme-change', handleThemeChange)
        frame.addEventListener('load', syncTheme)

        return () => {
            window.removeEventListener('message', handleMessage)
            window.removeEventListener('teori-test-theme-change', handleThemeChange)
            frame.removeEventListener('load', syncTheme)
        }
    }, [])

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
                <meta name="description" content="Øv gratis til teoriprøven for klasse B. Ta full prøve med 45 spørsmål, vikeplikt-test, skilt-test og interaktive guider. Ingen registrering." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://teori-test.no/" />
                <meta property="og:title" content="Gratis teoriprøve klasse B 2026 – 45 spørsmål og fasit | Teori-test.no" />
                <meta property="og:description" content="Øv gratis til teoriprøven for klasse B. Ta full prøve med 45 spørsmål, vikeplikt-test, skilt-test og interaktive guider. Ingen registrering." />
                <meta property="og:image" content="https://teori-test.no/og-image.png" />
                <meta property="og:image:alt" content="Teori-test.no – gratis teoriprøve for klasse B" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Gratis teoriprøve klasse B 2026 – 45 spørsmål og fasit | Teori-test.no" />
                <meta name="twitter:description" content="Øv gratis til teoriprøven for klasse B. Ta full prøve med 45 spørsmål, vikeplikt-test, skilt-test og interaktive guider. Ingen registrering." />
                <meta name="twitter:image" content="https://teori-test.no/og-image.png" />
                <meta name="twitter:image:alt" content="Teori-test.no – gratis teoriprøve for klasse B" />
                <script type="application/ld+json">{JSON.stringify(faqJsonLd)}</script>
            </Helmet>

            <section className="tt-v2-hero tt-v2-container">
                <div className="tt-v2-hero-copy">
                    <p className="tt-v2-eyebrow">Klasse B · Førerkort</p>
                    <h1>Norges enkleste måte å øve til teoriprøven – helt gratis.</h1>
                    <p className="tt-v2-lead">
                        Teori-test.no er laget for deg som snart skal ta teoriprøven for klasse B. Her finner du kvalitetssikrede teorioppgaver som dekker hele pensum – fra fartsgrenser og vikeplikt til vegoppmerking og trafikkskilt. I tillegg til øvingsprøver finner du interaktive læringsartikler med visuelle guider og simulatorer. Du trenger ikke å lage bruker, betale, eller laste ned noe.
                    </p>
                    <div className="tt-v2-assurances" aria-label="Kort fakta">
                        <span>Ingen registrering</span>
                        <span>45 spørsmål</span>
                        <span>Oppdatert 2026</span>
                        <span>Klasse B-pensum</span>
                    </div>
                </div>

                <aside className="tt-v2-hero-action" aria-label="Full prøve">
                    <div className="tt-v2-start-head"><strong>Full prøve</strong><span>Klasse B</span></div>
                    <div className="tt-v2-start-facts">
                        <span><strong>45</strong><small>spørsmål</small></span>
                        <span><strong>90</strong><small>minutter</small></span>
                        <span><strong>7</strong><small>maks feil</small></span>
                    </div>
                    <a className="tt-v2-button tt-v2-button-primary" href="#prover">
                        Start full prøve <ChevronRight size={14} aria-hidden="true" />
                    </a>
                </aside>
            </section>

            <section className="tt-v2-proof" aria-label="Dette får du">
                <div className="tt-v2-container tt-v2-proof-grid">
                    <div className="tt-v2-proof-item"><strong>Pensum etter Vegvesenets læreplan</strong></div>
                    <div className="tt-v2-proof-item"><strong>Forklaring på hvert svar</strong></div>
                    <div className="tt-v2-proof-item"><strong>Stor skiltguide</strong></div>
                    <div className="tt-v2-proof-item"><strong>Samme format som prøven</strong></div>
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
                    <p>Velg mellom en rask øvingstest eller fullverdig eksamensprøve</p>
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
            </section>

            <section className="tt-v2-interactive" aria-label="Interaktiv læring">
                <div className="tt-v2-container">
                    <div className="tt-v2-section-heading">
                        <div><p className="tt-v2-eyebrow">Mer enn spørsmål</p><h2>Interaktive guider og artikler</h2></div>
                        <p>Forstå reglene bak spørsmålene med visuelle eksempler, steg-for-steg-guider og korte forklaringer.</p>
                    </div>

                    <article className="tt-v2-roundabout-feature">
                        <header className="tt-v2-roundabout-head">
                            <div>
                                <span className="tt-v2-roundabout-label">Interaktiv demo</span>
                                <h3>Rundkjøring: plassering, tegn og vikeplikt</h3>
                                <p>Firearmet rundkjøring med ett kjørefelt. Du kommer inn nedenfra. Trafikken kjører til høyre om midtøya.</p>
                            </div>
                            <a className="tt-v2-button tt-v2-button-tertiary" href="/rundkjoring-visning.html" target="_blank" rel="noopener">
                                Åpne hele demoen <ChevronRight size={14} aria-hidden="true" />
                            </a>
                        </header>
                        <iframe
                            ref={roundaboutFrame}
                            className="tt-v2-roundabout-frame"
                            src="/rundkjoring-visning.html?embed=1"
                            title="Interaktiv demonstrasjon av plassering, tegn og vikeplikt i rundkjøring"
                            loading="lazy"
                            scrolling="no"
                            style={{ height: `${roundaboutHeight}px` }}
                        />
                    </article>

                    <article className="tt-v2-sign-guide">
                        <div className="tt-v2-sign-guide-copy">
                            <span className="tt-v2-roundabout-label">250 norske trafikkskilt</span>
                            <h3>Skiltguide</h3>
                            <p>Alle skiltgruppene forklart, med de vanligste misforståelsene ved hvert skilt.</p>
                            <Link className="tt-v2-text-link" to="/trafikkskilt">
                                Åpne skiltguiden <ChevronRight size={14} aria-hidden="true" />
                            </Link>
                        </div>
                        <div className="tt-v2-stage-signs" aria-hidden="true">
                            <img src="/signs/vikeplikt.svg" alt="" loading="lazy" decoding="async" />
                            <img src="/signs/stopp.svg" alt="" loading="lazy" decoding="async" />
                            <img src="/signs/forkjorsvei.svg" alt="" loading="lazy" decoding="async" />
                            <img src="/signs/forbudsskilt/skilt-362-50-fartsgrense.jpg" alt="" loading="lazy" decoding="async" />
                        </div>
                    </article>
                </div>
            </section>

            <section className="tt-v2-how">
                <div className="tt-v2-container">
                    <div className="tt-v2-how-heading"><p className="tt-v2-eyebrow">Fra øving til oversikt</p><h2>Slik fungerer det</h2></div>
                    <ol className="tt-v2-how-track">
                        <HowStep number="01" title="Velg prøve eller tema">Start med full prøve, tematest eller en guide.</HowStep>
                        <HowStep number="02" title="Svar på spørsmål">Øv i samme format som teoriprøven hos Statens vegvesen.</HowStep>
                        <HowStep number="03" title="Se forklaring">Lær hvorfor svaret er riktig eller feil – ikke bare hva som var riktig.</HowStep>
                        <HowStep number="04" title="Få oversikt over svake områder">Etter full prøve ser du hvilke temaer du bør øve mer på, og kan trene videre i Fokusmodus.</HowStep>
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

            <section className="tt-v2-seo tt-v2-container" aria-labelledby="bruk-resultatene">
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

                <aside className="tt-v2-exam-facts" aria-labelledby="exam-facts-title">
                    <h3 id="exam-facts-title">Teoriprøven klasse B: kort fakta</h3>
                    <ul>
                        <li><strong>45</strong><span>spørsmål på teoriprøven for klasse B</span></li>
                        <li><strong>90</strong><span>minutter ordinær tid</span></li>
                        <li><strong>7</strong><span>maks feil for å bestå</span></li>
                        <li><strong>17,5</strong><span>år er tidligste alder for å ta prøven</span></li>
                        <li><strong>3</strong><span>års gyldighet etter bestått teoriprøve</span></li>
                        <li><strong>2</strong><span>uker er minste ventetid ved stryk</span></li>
                    </ul>
                    <p>Teoriprøven tas hos Statens vegvesen. Bestill time før du møter på trafikkstasjonen.</p>
                    <small>Regler kan endres. Sjekk alltid Statens vegvesen for oppdatert informasjon før du bestiller prøve.</small>
                </aside>
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

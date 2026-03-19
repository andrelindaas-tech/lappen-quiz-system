import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import '../theory.css'

declare function gtag(...args: unknown[]): void

export default function OppkjoringPage() {
    
    useEffect(() => {
        window.scrollTo(0, 0);
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', { 
                page_path: '/laeringsressurser/oppkjoring', 
                page_title: document.title 
            })
        }
    }, [])

    return (
        <div className="container theory-topic-detail">
            <Helmet>
                <title>Oppkjøring klasse B 2026: Bestå på første forsøk | Teori-test.no</title>
                <meta name="description" content="Alt om oppkjøring klasse B: priser 2026, sikkerhetskontrollen steg for steg, hva sensor vurderer og ekspert-tips som hjelper deg bestå på første forsøk." />
                
                <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Oppkjoring klasse B 2026: Besta pa forste forsok",
  "description": "Komplett guide til oppkjoring: priser, sikkerhetskontroll, hva sensor vurderer og praktiske tips.",
  "url": "https://teori-test.no/laeringsressurser/oppkjoring",
  "inLanguage": "no",
  "author": { "@type": "Organization", "name": "Teori-test.no" },
  "publisher": { "@type": "Organization", "name": "Teori-test.no", "url": "https://teori-test.no" },
  "datePublished": "2026-03-19",
  "dateModified": "2026-03-19"
}
`}</script>
                <script type="application/ld+json">{`
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Hva koster oppkjoring klasse B i 2026?",
      "acceptedAnswer": { "@type": "Answer", "text": "Gebyret til Statens vegvesen er 1 490 kr pa nett eller 1 540 kr pa trafikkstasjonen. I tillegg koster leie av skolebil 2 500-3 500 kr. Beregn totalt 3 000-5 000 kr for selve provedagen." }
    },
    {
      "@type": "Question",
      "name": "Hva sjekkes pa sikkerhetskontrollen pa oppkjoringen?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sensor sjekker bremsekraftforsterker, dekk og monsterdybde, vaskeniva og lys (naerlys, fjernlys, baklys, blinklys)." }
    },
    {
      "@type": "Question",
      "name": "Kan man struke pa sikkerhetskontrollen alene?",
      "acceptedAnswer": { "@type": "Answer", "text": "Ja. Hvis du ikke kan svare pa sporsmalene om bilen din under sikkerhetskontrollen, kan sensor avbryte provekortet der." }
    },
    {
      "@type": "Question",
      "name": "Hva vurderer sensor pa oppkjoringen?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sensor vurderer om du er en trygg, forutsigbar og hensynsfull trafikant. Fokus er pa samhandling, riktig plassering i veibanen og korrekt vikeplikt." }
    }
  ]
}
`}</script>
            </Helmet>

            <Link to="/laeringsressurser" className="theory-back-btn" style={{textDecoration: 'none'}}>
                ← Tilbake til emner
            </Link>

            <div className="theory-topic-header">
                <div>
                    <h1>Oppkjøring klasse B 2026: Komplett guide til å bestå på første forsøk</h1>
                </div>
            </div>

            <div className="theory-sections">
                <div className="theory-section theory-section-text">
                    <div className="theory-section-content">
                        <p>Du har <Link to="/laeringsressurser/tips-eksamen" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}>bestått teoriprøven</Link> — nå er det bare én ting som gjenstår. Oppkjøringen er det siste hinderet mellom deg og friheten på fire hjul, og det er helt normalt å ha en klump i magen. I denne guiden går vi gjennom alt: hva det koster, hva som skjer på sikkerhetskontrollen, hva sensor faktisk ser etter, og de ærlige tipsene som hjelper deg bestå på første forsøk.</p>
                    </div>
                </div>

                <div className="theory-section theory-section-info">
                    <h2 className="theory-section-title">Hva koster oppkjøring klasse B i 2026?</h2>
                    <div className="theory-section-content">
                        <p>Gebyr til Statens vegvesen: 1 490 kr (nett) eller 1 540 kr (på trafikkstasjonen) — betal digitalt og spar 50 kr. Leie av skolebil: 2 500–3 500 kr avhengig av trafikkskole. Utstedelse av førerkort: ca. 200–300 kr. Totalt: beregn 3 000–5 000 kr for selve prøvedagen. Husk: du må ha gyldig legitimasjon og bestått teoriprøven.</p>
                    </div>
                </div>

                <div className="theory-section theory-section-warning">
                    <h2 className="theory-section-title">Sikkerhetskontrollen: Den første testen på oppkjøringen</h2>
                    <div className="theory-section-content">
                        <p>Oppkjøringen starter alltid med en sikkerhetskontroll. Dette er din sjanse til å sette en god standard.</p>
                        <p>Bremsekraftforsterker: pump bremsepedalen 5–6 ganger med motoren av til den blir hard, hold pedalen inne og start motoren — pedalen skal sige merkbart inn. Dekk og mønsterdybde: minst 1,6 mm (sommer) og 3,0 mm (vinter). Væsker: vit hvor du fyller spylervæske og hvordan du sjekker olje. Lys: sjekk nærlys, fjernlys, baklys og blinklys.</p>
                    </div>
                </div>

                <div className="theory-section theory-section-text">
                    <h2 className="theory-section-title">Hva vurderer sensor på oppkjøringen?</h2>
                    <div className="theory-section-content">
                        <p>Sensor ser etter om du er trygg, forutsigbar og hensynsfull — ikke om du er perfekt. De tre viktigste fokusområdene: (1) Samhandling: bruker du blinklys tidlig nok og viser tydelig hva du har tenkt å gjøre? (2) Plassering: ligger du riktig i feltet og overholder "hold til høyre"-regelen? (3) Vikeplikt: viser du tydelig at du ser etter trafikk fra høyre der høyreregelen gjelder? <Link to="/laeringsressurser/vikeplikt" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}>Les vår komplette guide til vikeplikt</Link>.</p>
                    </div>
                </div>

                <div className="theory-section theory-section-tip">
                    <h2 className="theory-section-title">Tips til oppkjøringen: Slik håndterer du nervene</h2>
                    <div className="theory-section-content">
                        <p>Tenk høyt: si det hvis en situasjon er uklar — "Her er det uoversiktlig, så jeg roer ned." Da forstår sensor hvordan du tenker. Ikke dvel ved småfeil: kveler du motoren én gang, stryker du ikke av den grunn. Trekk pusten og fortsett. Bli kjent med ruten: kjør mye rundt trafikkstasjonen dagene før — kjente kryss gir enorm trygghet.</p>
                    </div>
                </div>

                <div className="theory-section theory-section-text">
                    <div className="theory-section-content">
                        <p>Lykke til på oppkjøringen! Husk at sensor ikke er der for å ta deg, men for å se at du er klar til å kjøre trygt på egen hånd. Ikke bestått teoriprøven ennå? <Link to="/" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}>Øv gratis på Teori-test.no</Link> — realistiske prøver i samme format som den offisielle testen, helt uten registrering.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Bro fra artikkel til øving.
//
// Bakgrunn: GA4 (juni–juli 2026) viser at bare 31,9 % av Google-brukerne når /quiz,
// mot 52 % av ChatGPT-brukerne og 73 % fra Bing. Google-trafikken lander i en artikkel,
// leser ~13 minutter og forlater siden. Denne komponenten er den målbare broa videre.
//
// Plassering: rett etter minitesten, der brukeren nettopp har svart på spørsmål og
// sett en score — samme logikk som «Hva nå?»-blokka på resultatskjermen.
//
// Bevisst beskjeden: én linje tekst, én knapp, én sekundærlenke. Vi tester plassering
// og måling først, ikke visuell vekt.

import { Link } from 'react-router-dom'
import { trackEvent } from '../utils/analytics'

// Artikler med en temaquiz som faktisk finnes. Alt annet får ekspresstesten.
// Utvides når flere /quiz/-kategorier er på plass.
const TEMAQUIZ: Record<string, { path: string; navn: string }> = {
    veimerking: { path: '/quiz/veimerking', navn: 'veimerking' },
    vikeplikt: { path: '/quiz/vikeplikt', navn: 'vikeplikt' },
    'trikk-og-vikeplikt': { path: '/quiz/vikeplikt', navn: 'vikeplikt' },
    'buss-fra-holdeplass': { path: '/quiz/vikeplikt', navn: 'vikeplikt' },
    rundkjoring: { path: '/quiz/vikeplikt', navn: 'vikeplikt' },
    skilt: { path: '/quiz/skilt', navn: 'trafikkskilt' },
    fartsgrenser: { path: '/quiz/fartsregler', navn: 'fartsregler' },
}

interface Props {
    articleId: string
}

export default function NesteSteg({ articleId }: Props) {
    const tema = TEMAQUIZ[articleId]
    const primaerPath = tema ? tema.path : '/quiz?mode=hurtig'
    const primaerTekst = tema ? `Test deg på ${tema.navn}` : 'Ta en kort test'
    // Artikkeltitlene er lange og setningspregede, så vi bruker temanavnet i stedet.
    const ledetekst = tema
        ? `Du har lest om ${tema.navn}. Vil du teste om det sitter?`
        : 'Vil du teste om du husker det du nettopp leste?'

    const spor = (maal: string) =>
        trackEvent('article_bridge_click', { article_id: articleId, target: maal })

    return (
        <div
            style={{
                marginTop: '1.5rem',
                padding: '1.1rem 1.25rem',
                border: '1px solid var(--color-border)',
                borderRadius: '12px',
                background: 'var(--color-surface)',
            }}
        >
            <p style={{ margin: '0 0 0.85rem', color: 'var(--color-text)', lineHeight: 1.5 }}>
                {ledetekst}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '0.85rem' }}>
                <Link
                    to={primaerPath}
                    onClick={() => spor(primaerPath)}
                    style={{
                        display: 'inline-block',
                        padding: '0.6rem 1.15rem',
                        borderRadius: '8px',
                        background: 'var(--color-primary)',
                        color: '#fff',
                        fontWeight: 600,
                        textDecoration: 'none',
                    }}
                >
                    {primaerTekst}
                </Link>
                <Link
                    to="/quiz"
                    onClick={() => spor('/quiz')}
                    style={{
                        color: 'var(--color-text-light)',
                        textDecoration: 'underline',
                        fontSize: '0.95rem',
                    }}
                >
                    eller ta hele prøven med 45 spørsmål
                </Link>
            </div>
        </div>
    )
}

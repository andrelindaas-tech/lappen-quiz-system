// Landingssider for skilt etter utseende: blå, røde, trekantede — og en nummerindeks.
//
// Hvorfor: søkefeltet på /trafikkskilt er klientsidig, så Google kan ikke bruke det.
// Vi rangerer på posisjon 9–21 for søk som «blått skilt med rød strek» og «skilt 302»
// uten å få klikk, fordi siden Google viser inneholder kategorikort — ikke blå skilt.
// Disse sidene gir hvert utseende en side som faktisk inneholder svaret.

import { useLocation, Link, Navigate } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import {
    getSignLookGroup,
    signLookGroups,
    signsInGroup,
    signsInGroupUnntak,
    signsInGroupTotalt,
    signsByNumberSeries,
} from '../../data/trafficSignLooks'
import { parseInlineLinks } from '../../utils/textUtils'
import type { TrafficSign } from '../../data/trafficSigns'

const BASE = 'https://teori-test.no'

function Brodsmuler({ navn }: { navn: string }) {
    return (
        <nav style={{ fontSize: '0.9rem', marginBottom: 'var(--spacing-md)' }} aria-label="Brødsmuler">
            <Link to="/trafikkskilt" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Skiltguiden</Link>
            <span style={{ color: 'var(--color-text-light)' }}> › {navn}</span>
        </nav>
    )
}

function SkiltKort({ sign }: { sign: TrafficSign }) {
    return (
        <Link
            to={`/trafikkskilt/${sign.category}/${sign.slug}`}
            className="practice-card"
            style={{ display: 'flex', flexDirection: 'column', gap: '10px', padding: '14px', textDecoration: 'none', color: 'inherit' }}
        >
            <img
                src={sign.imagePath}
                alt={`Skilt ${sign.code} ${sign.name}`}
                loading="lazy"
                style={{ width: '100%', height: '96px', objectFit: 'contain' }}
            />
            <div>
                <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>Skilt {sign.code}</div>
                <div style={{ fontWeight: 600, lineHeight: 1.3 }}>{sign.name}</div>
            </div>
        </Link>
    )
}

const RUTENETT: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))',
    gap: '14px',
}

/** /trafikkskilt/blaa-skilt, /rode-skilt, /trekantede-skilt */
export function TrafficSignLookPage() {
    // Rutene er statiske (/trafikkskilt/blaa-skilt osv.) for ikke å kollidere med
    // den dynamiske kategoriruten, så slug leses fra adressen i stedet for useParams.
    const { pathname } = useLocation()
    const lookSlug = pathname.replace(/\/+$/, '').split('/').pop() || ''
    const gruppe = getSignLookGroup(lookSlug)
    if (!gruppe) return <Navigate to="/trafikkskilt" replace />

    const signs = signsInGroup(gruppe)
    const unntak = signsInGroupUnntak(gruppe)
    const antallTotalt = signsInGroupTotalt(gruppe).length
    const url = `${BASE}/trafikkskilt/${gruppe.slug}/`

    return (
        <div className="container" style={{ paddingBottom: 'var(--spacing-2xl)' }}>
            <Helmet>
                <title>{gruppe.seoTitle}</title>
                <meta name="description" content={gruppe.seoDescription} />
                <link rel="canonical" href={url} />
                <meta property="og:title" content={gruppe.seoTitle} />
                <meta property="og:description" content={gruppe.seoDescription} />
                <meta property="og:url" content={url} />
                <script type="application/ld+json">{JSON.stringify({
                    '@context': 'https://schema.org',
                    '@type': 'BreadcrumbList',
                    itemListElement: [
                        { '@type': 'ListItem', position: 1, name: 'Skiltguiden', item: `${BASE}/trafikkskilt/` },
                        { '@type': 'ListItem', position: 2, name: gruppe.h1, item: url },
                    ],
                })}</script>
            </Helmet>

            <Brodsmuler navn={gruppe.h1} />
            <h1 style={{ marginBottom: '0.5rem' }}>{gruppe.h1}</h1>
            <p style={{ color: 'var(--color-text-light)', lineHeight: 1.65, maxWidth: '46rem' }}>
                {parseInlineLinks(gruppe.intro)}
            </p>
            <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', maxWidth: '46rem' }}>
                Leter du etter et bestemt skilt? Folk beskriver dem gjerne som{' '}
                {gruppe.sokeeksempler.map((e, i) => (
                    <span key={e}>{i > 0 ? ', ' : ''}«{e}»</span>
                ))}
                . Under finner du alle {antallTotalt} skiltene i gruppen — klikk for full forklaring og typiske teorifeller.
            </p>

            <div style={{ ...RUTENETT, margin: '1.75rem 0 2rem' }}>
                {signs.map((s) => <SkiltKort key={s.id} sign={s} />)}
            </div>

            {gruppe.unntak && unntak.length > 0 && (
                <section
                    style={{
                        margin: '0 0 2rem',
                        padding: '1.25rem 1.4rem',
                        border: '1px solid var(--color-border)',
                        borderRadius: '12px',
                        background: 'var(--color-surface)',
                    }}
                >
                    <h2 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '0.6rem' }}>
                        {gruppe.unntak.tittel}
                    </h2>
                    <p style={{ color: 'var(--color-text-light)', lineHeight: 1.65, maxWidth: '46rem', marginBottom: '1.1rem' }}>
                        {parseInlineLinks(gruppe.unntak.forklaring)}
                    </p>
                    <div style={RUTENETT}>
                        {unntak.map((s) => <SkiltKort key={s.id} sign={s} />)}
                    </div>
                </section>
            )}

            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.25rem', fontSize: '0.95rem' }}>
                <strong>Andre måter å finne skiltet på:</strong>{' '}
                {signLookGroups.filter((g) => g.slug !== gruppe.slug).map((g, i) => (
                    <span key={g.slug}>
                        {i > 0 && ' · '}
                        <Link to={`/trafikkskilt/${g.slug}`} style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>{g.h1}</Link>
                    </span>
                ))}
                {' · '}
                <Link to="/trafikkskilt/skiltnummer" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Alle skilt etter nummer</Link>
            </div>
        </div>
    )
}

/** /trafikkskilt/skiltnummer — komplett nummerindeks */
export function TrafficSignNumberIndex() {
    const serier = signsByNumberSeries()
    const antall = serier.reduce((n, s) => n + s.signs.length, 0)
    const url = `${BASE}/trafikkskilt/skiltnummer/`
    const tittel = 'Alle trafikkskilt etter nummer – komplett skiltnummerliste'
    const beskrivelse =
        `Slå opp trafikkskilt på nummer. Komplett liste over alle ${antall} norske trafikkskilt fra 100- til 900-serien, ` +
        'med navn, bilde og forklaring.'

    return (
        <div className="container" style={{ paddingBottom: 'var(--spacing-2xl)' }}>
            <Helmet>
                <title>{tittel}</title>
                <meta name="description" content={beskrivelse} />
                <link rel="canonical" href={url} />
                <meta property="og:title" content={tittel} />
                <meta property="og:description" content={beskrivelse} />
                <meta property="og:url" content={url} />
            </Helmet>

            <Brodsmuler navn="Alle skilt etter nummer" />
            <h1 style={{ marginBottom: '0.5rem' }}>Alle trafikkskilt etter nummer</h1>
            <p style={{ color: 'var(--color-text-light)', lineHeight: 1.65, maxWidth: '46rem' }}>
                Skiltnummeret forteller hva slags skilt det er. Førstesifferet gir gruppen: 100-serien er fareskilt,
                300-serien er forbudsskilt, 400-serien er påbudsskilt, og så videre. Under finner du alle {antall} skiltene
                sortert på nummer.
            </p>

            {serier.map(({ serie, navn, signs }) => (
                <section key={serie} style={{ marginTop: '2rem' }}>
                    <h2 id={`serie-${serie}`} style={{ fontSize: '1.15rem', marginBottom: '0.75rem' }}>{navn}</h2>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '6px 18px' }}>
                        {signs.map((s) => (
                            <li key={s.id} style={{ padding: '5px 0', borderBottom: '1px solid var(--color-border)' }}>
                                <Link to={`/trafikkskilt/${s.category}/${s.slug}`} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', gap: '10px' }}>
                                    <span style={{ color: 'var(--color-primary)', fontWeight: 600, minWidth: '3.6rem' }}>{s.code}</span>
                                    <span>{s.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}

            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: '1.25rem', marginTop: '2rem', fontSize: '0.95rem' }}>
                <strong>Vet du ikke nummeret?</strong> Finn skiltet etter utseende:{' '}
                {signLookGroups.map((g, i) => (
                    <span key={g.slug}>
                        {i > 0 && ' · '}
                        <Link to={`/trafikkskilt/${g.slug}`} style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>{g.h1}</Link>
                    </span>
                ))}
            </div>
        </div>
    )
}

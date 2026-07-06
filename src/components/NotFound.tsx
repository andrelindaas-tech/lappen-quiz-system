// 404-side — vises for ukjente URL-er i stedet for forsiden (unngår soft-404)
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'

export default function NotFound() {
    return (
        <div className="container" style={{ textAlign: 'center', padding: 'var(--spacing-2xl) var(--spacing-lg)', maxWidth: '560px', margin: '0 auto' }}>
            <Helmet>
                <title>Fant ikke siden | Teori-test.no</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <div style={{ fontSize: '3rem', marginBottom: 'var(--spacing-sm)' }}>🚧</div>
            <h1 style={{ fontSize: '1.75rem', fontWeight: 800, marginBottom: 'var(--spacing-sm)' }}>
                Fant ikke siden
            </h1>
            <p style={{ color: 'var(--color-text-light)', lineHeight: 1.6, marginBottom: 'var(--spacing-xl)' }}>
                Siden du leter etter finnes ikke, eller kan ha blitt flyttet.
                Her er noen snarveier videre:
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                <Link
                    to="/"
                    style={{
                        display: 'inline-block', padding: '12px 28px', borderRadius: '10px',
                        backgroundColor: 'var(--color-primary)', color: '#fff',
                        textDecoration: 'none', fontWeight: 700,
                    }}
                >
                    Ta en gratis teoriprøve →
                </Link>
                <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center', marginTop: 'var(--spacing-sm)' }}>
                    <Link to="/laeringsressurser" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}>Artikler</Link>
                    <Link to="/trafikkskilt" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}>Skiltguide</Link>
                    <Link to="/laeringsspill" style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}>Minispill</Link>
                </div>
            </div>
        </div>
    )
}

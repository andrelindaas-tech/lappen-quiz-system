// Interaktiv rundkjøringsdemo — lokal forhåndsvisning.
//
// Demoen er en selvstendig HTML-fil med all CSS og JS inline. Den vises i en iframe
// framfor å bli portert til React, av to grunner: den er fortsatt under arbeid, og
// iframen isolerer stilene fullstendig så ingenting lekker inn i artikkelen.
//
// Kilden ligger i rundkjoring-demo/ (untracked). Kopien i public/ er gitignorert,
// så demoen virker lokalt men følger ikke med til produksjon. Skal den publiseres,
// må BÅDE ignoreringen fjernes OG seksjonen i theoryData committes.
//
// Om bredden — dette er hele poenget med komponenten:
// Demoen har allerede to kolonner over 900 px (.rk-layout i demofilen). Artikkelen
// er kappet på 800 px av .theory-topic-detail, så inne i artikkelspalten ser demoen
// en for smal «skjerm» og faller korrekt tilbake til én kolonne. Da blir diagrammet
// bredt, og siden scenen er kvadratisk (900 x 900 i GEO) blir det like høyt — og
// stabelen sprenger rammen.
//
// Derfor bryter iframen ut av spalten. Bredden er ikke satt til «så bred som mulig»:
// diagramkolonnen blir bredde minus 372 px panel minus 22 px gap, og diagrammet blir
// like høyt som det er bredt. Rundt 1040 px havner totalhøyden nær 820 px, som er
// akkurat det rammen er. Går du til 1240 px, får du to kolonner men skroller igjen.

import { useState, type CSSProperties } from 'react'

const BREDDE_FULL = 'min(1040px, calc(100vw - 2rem))'
const HOYDE_DESKTOP = 820

export default function RundkjoringDemo() {
    const [full, setFull] = useState(true)

    // Negativ venstremarg trekker iframen symmetrisk ut av den 800 px brede spalten.
    // Ingen forfedre har overflow eller transform, så utbruddet er trygt.
    const bredde = full ? BREDDE_FULL : '100%'
    const ramme: CSSProperties = {
        width: bredde,
        marginLeft: `calc((100% - ${bredde}) / 2)`,
        position: 'relative',
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
        overflow: 'hidden',
        background: '#fff',
    }

    // Kontrollene ligger over rammen, ikke under. Brukeren skal vite at demoen
    // vises best i full bredde før hen begynner å klikke i den, ikke etterpå.
    return (
        <div style={{ marginTop: '1.25rem' }}>
            <div
                    className="roundabout-demo-controls"
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '0.75rem 1rem',
                        alignItems: 'center',
                        marginBottom: '0.6rem',
                        fontSize: '0.9rem',
                    }}
                >
                    <span style={{ color: 'var(--color-text-light)' }}>
                        {full
                            ? 'Demoen vises i full bredde, som er det den er laget for.'
                            : 'Denne demoen vises best i full bredde.'}
                    </span>
                    <button
                        type="button"
                        onClick={() => setFull((v) => !v)}
                        style={{
                            background: 'none',
                            border: '1px solid var(--color-border)',
                            borderRadius: '999px',
                            padding: '0.35rem 0.9rem',
                            color: 'var(--color-primary)',
                            fontWeight: 600,
                            cursor: 'pointer',
                            font: 'inherit',
                        }}
                    >
                        {full ? 'Vis i artikkelbredde' : 'Vis i full bredde'}
                    </button>
                    <a
                        href="/rundkjoring-demo.html"
                        target="_blank"
                        rel="noopener"
                        style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}
                    >
                        Åpne i egen fane
                    </a>
                </div>

            <div style={ramme}>
                <iframe
                    className="roundabout-demo-frame"
                    src="/rundkjoring-demo.html"
                    title="Interaktiv rundkjøring – øv på vikeplikt, feltvalg og blinklys"
                    loading="lazy"
                    style={{
                        display: 'block',
                        width: '100%',
                        height: `${HOYDE_DESKTOP}px`,
                        border: 0,
                    }}
                />
            </div>
        </div>
    )
}

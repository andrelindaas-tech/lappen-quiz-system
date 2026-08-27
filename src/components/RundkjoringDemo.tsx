import { useEffect, useRef, useState, type CSSProperties } from 'react'

const BREDDE_FULL = 'min(1040px, calc(100vw - 2rem))'

export default function RundkjoringDemo() {
    const [full, setFull] = useState(true)
    const [height, setHeight] = useState(720)
    const frameRef = useRef<HTMLIFrameElement>(null)

    useEffect(() => {
        const frame = frameRef.current
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
                setHeight(nextHeight)
            }
        }

        window.addEventListener('message', handleMessage)
        window.addEventListener('teori-test-theme-change', syncTheme)
        frame.addEventListener('load', syncTheme)

        return () => {
            window.removeEventListener('message', handleMessage)
            window.removeEventListener('teori-test-theme-change', syncTheme)
            frame.removeEventListener('load', syncTheme)
        }
    }, [])

    const bredde = full ? BREDDE_FULL : '100%'
    const ramme: CSSProperties = {
        width: bredde,
        marginLeft: `calc((100% - ${bredde}) / 2)`,
        position: 'relative',
        border: '1px solid var(--color-border)',
        borderRadius: '12px',
        overflow: 'hidden',
        background: 'var(--color-background-primary)',
    }

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
                    onClick={() => setFull((value) => !value)}
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
                    href="/rundkjoring-visning.html"
                    target="_blank"
                    rel="noopener"
                    style={{ color: 'var(--color-primary)', fontWeight: 600, textDecoration: 'none' }}
                >
                    Åpne i egen fane
                </a>
            </div>

            <div style={ramme}>
                <iframe
                    ref={frameRef}
                    className="roundabout-demo-frame"
                    src="/rundkjoring-visning.html?embed=1"
                    title="Interaktiv rundkjøring – øv på vikeplikt, feltvalg og blinklys"
                    loading="lazy"
                    scrolling="no"
                    style={{
                        display: 'block',
                        width: '100%',
                        height: `${height}px`,
                        border: 0,
                    }}
                />
            </div>
        </div>
    )
}

import { useEffect, useRef, useState } from 'react'

/** Show the WebGL lesson on arrival; visitors can collapse it to read on. */
export default function MintCarLights() {
    const [started, setStarted] = useState(true)
    const [height, setHeight] = useState(1500)
    const frame = useRef<HTMLIFrameElement>(null)
    const syncTheme = () => frame.current?.contentWindow?.postMessage({
        type: 'car-lights-theme',
        theme: document.body.classList.contains('dark-mode') ? 'dark' : 'light',
    }, window.location.origin)
    useEffect(() => {
        const observer = new MutationObserver(syncTheme)
        observer.observe(document.body, { attributes: true, attributeFilter: ['class'] })
        return () => observer.disconnect()
    }, [])
    useEffect(() => {
        const receive = (event: MessageEvent) => {
            if (event.origin !== window.location.origin || event.source !== frame.current?.contentWindow) return
            if (event.data?.type === 'car-lights-show') { frame.current?.scrollIntoView({block:'start'}); return }
            if (event.data?.type !== 'car-lights-height' || !Number.isFinite(event.data.height)) return
            setHeight(Math.max(600, Math.min(2600, Math.ceil(event.data.height))))
        }
        window.addEventListener('message', receive)
        return () => window.removeEventListener('message', receive)
    }, [])
    return <section className="theory-section" aria-labelledby="utforsk-billys">
        <h2 id="utforsk-billys">Prøv bilens lys i 3D</h2>
        <p>Roter bilen, velg en lysfunksjon og sammenlign lysene av og på. Forklaringene nedenfor kan leses uten 3D-visningen.</p>
        <button type="button" aria-expanded={started} aria-controls="bilens-lys-demo" onClick={() => setStarted(value => !value)} style={{padding:'12px 20px',marginBottom:16,borderRadius:12,background:'#193f32',color:'white',border:0,font:'inherit',cursor:'pointer'}}>{started ? 'Skjul den interaktive bilen' : 'Vis den interaktive bilen'}</button>
        <div id="bilens-lys-demo" hidden={!started}>
            {started && <iframe ref={frame} onLoad={syncTheme} src="/prototypes/mint-hatch/index.html?embed" title="Utforsk bilens lys – interaktiv bilmodell" style={{width:'100%',height,border:0,display:'block',scrollMarginTop:80}} />}
        </div>
    </section>
}

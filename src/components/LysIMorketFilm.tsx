import './VeimerkingVideo.css'

// 30-second animation without sound. It runs in an iframe so Three.js stays outside the app.
// The on-screen captions are repeated as text for search engines and screen readers.
const captions: [string, string][] = [
    ['Fjernlys på mørk vei', 'Fjernlyset lyser langt frem og gir best oversikt når veien er fri.'],
    ['Blend ned i god tid', 'Senest når lyskjeglene møtes. Fjernlyset må ikke blende andre trafikanter.'],
    ['Nærlys gir kortere sikt', 'Senk farten, så du rekker å reagere og bremse.'],
    ['Se mot høyre kantlinje', 'Ikke se inn i lysene til den møtende.'],
    ['Blend opp igjen', 'Når dere er ca. to billengder fra hverandre, blender ikke fjernlyset lenger.'],
    ['Fjernlys når veien er fri', 'Blend ned igjen for møtende, og når du kjører bak andre.'],
]

export default function LysIMorketFilm() {
    return (
        <figure className="veimerking-video">
            <div className="veimerking-video-frame">
                <iframe
                    src="/video/lys-i-morket/index.html"
                    title="To biler møtes i mørket – fjernlys, nærlys og blending. Animasjon uten lyd"
                    loading="lazy"
                    allow="fullscreen"
                />
            </div>
            <figcaption>Animasjon: to biler møtes i mørket (0:30, uten lyd). Bytt til «Ovenfra» for å se lyskjeglene.</figcaption>
            <details className="veimerking-video-text">
                <summary>Les teksten fra animasjonen</summary>
                {captions.map(([title, text]) => <p key={title}><strong>{title}.</strong> {text}</p>)}
            </details>
        </figure>
    )
}

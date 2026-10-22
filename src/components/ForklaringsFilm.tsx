import './ForklaringsFilm.css'
import { forklaringsfilmer } from '../data/forklaringsfilmer'

// Felles innbygging for alle forklaringsfilmene. Filmen kjører i en iframe, så Three.js
// og globale variabler holdes utenfor appen. Iframen lastes først når den nærmer seg skjermen.
export default function ForklaringsFilm({ id }: { id: string }) {
    const film = forklaringsfilmer[id]
    if (!film) return null
    return (
        <figure className="forklaringsfilm">
            <div className="forklaringsfilm-frame">
                <iframe
                    src={film.src}
                    title={film.title}
                    loading="lazy"
                    allow={film.sound === false ? 'fullscreen' : 'autoplay; fullscreen'}
                />
            </div>
            <figcaption>{film.caption}</figcaption>
            <details className="forklaringsfilm-text">
                <summary>{film.textLabel}</summary>
                {film.paragraphs.map((p, i) => typeof p === 'string'
                    ? <p key={i}>{p}</p>
                    : <p key={i}><strong>{p[0]}.</strong> {p[1]}</p>)}
            </details>
        </figure>
    )
}

import { useState } from 'react'
import './ForklaringsFilm.css'
import { forklaringsfilmer } from '../data/forklaringsfilmer'

// Felles innbygging for alle forklaringsfilmene. Artikkelen viser bare plakaten. Filmen
// (Three.js i en iframe) lastes først når leseren trykker, og starter da med en gang.
// Plakatene ligger ved siden av filmen: poster.webp (bred) og poster-mobil.webp (smal).
export default function ForklaringsFilm({ id }: { id: string }) {
    const [started, setStarted] = useState(false)
    const film = forklaringsfilmer[id]
    if (!film) return null
    const dir = film.src.replace(/index\.html$/, '')
    return (
        <figure className="forklaringsfilm">
            <div className="forklaringsfilm-frame">
                {started ? (
                    <iframe
                        src={`${film.src}?autoplay=1`}
                        title={film.title}
                        allow={film.sound === false ? 'fullscreen' : 'autoplay; fullscreen'}
                    />
                ) : (
                    <button type="button" className="forklaringsfilm-poster" onClick={() => setStarted(true)} aria-label={`Spill av filmen: ${film.title}`}>
                        <picture>
                            <source media="(max-width: 640px)" srcSet={`${dir}poster-mobil.webp`} />
                            <img src={`${dir}poster.webp`} alt="" loading="lazy" decoding="async" />
                        </picture>
                    </button>
                )}
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

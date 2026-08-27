import illustrationDocument from '../assets/illustrations/vikeplikt-illustrasjon.html?raw'

const illustrationMarkup = illustrationDocument.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] ?? illustrationDocument

export default function VikepliktSituasjonerIllustrasjon() {
    return (
        <figure className="vikeplikt-situasjoner-figure">
            <div
                className="vikeplikt-situasjoner-illustrasjon"
                dangerouslySetInnerHTML={{ __html: illustrationMarkup }}
            />
            <figcaption className="vikeplikt-situasjoner-caption">
                Se først etter trafikklys, skilt og oppmerking. Vurder deretter hva trafikantene skal gjøre, og bruk høyreregelen bare når ingen annen regel avgjør situasjonen.
            </figcaption>
        </figure>
    )
}

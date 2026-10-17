import './VeimerkingVideo.css'

// The film runs in an iframe so Three.js and its globals stay outside the app.
// The narration is also rendered as text, for search engines and readers without sound.
const narration = [
    "Veimerkingen hjelper deg å forstå hvordan veien skal brukes. Fargen forteller hvilken funksjon oppmerkingen har. Gul oppmerking brukes mellom motgående kjøreretninger. Hvit oppmerking har flere oppgaver. Her skiller en hvit linje kjørefelt i samme retning. En hvit kantlinje markerer kjørebanens ytterkant. Den skiller kjørebanen fra veiskulderen eller veikanten. Hvit oppmerking brukes også til gangfelt.",
    "Dette er en kjørefeltlinje. Den har korte streker og lange mellomrom. Du kan krysse den, for eksempel for å skifte felt eller kjøre forbi. Men bare når det er trygt og lovlig.",
    "Varsellinjen har lange streker og korte mellomrom. Det er motsatt av kjørefeltlinjen. En gul varsellinje betyr at sikten fremover er for kort til vanlig forbikjøring. En hvit varsellinje varsler fare ved å skifte felt. Linjen er brutt, men det betyr ikke at det er trygt å krysse.",
    "Her skiller én hvit sperrelinje to felt i samme retning. Du skal ikke kjøre på eller over den. Midt i veien ser du dobbel gul sperrelinje. Da har begge kjøreretningene sperrelinje nærmest seg. Forbudet er det samme: Ikke kjør på eller over.",
    "Her ligger to linjer side om side: én brutt og én heltrukken. Da gjelder linjen som er nærmest deg. Den blå bilen har den brutte linjen nærmest, og kan kjøre forbi når det er trygt. Møtende trafikk har sperrelinjen nærmest, og skal ikke krysse. Har du kjørt over i motgående felt, kan du likevel krysse tilbake til høyre side.",
    "Dette er et sperreområde. Det er et felt med skrå striper, omgitt av en heltrukken linje. Du skal ikke kjøre inn i det. Følg kjørefeltet videre, slik bilen gjør her.",
    "Pilene foran krysset viser hvilket felt du skal bruke. Velg felt etter hvor du skal, og gjør det i god tid. Er feltet avgrenset av sperrelinje, må du kjøre dit pilen viser.",
    "Skillelinjen skiller et vanlig kjørefelt fra et felt med spesiell bruk, for eksempel et kollektivfelt. Du kjenner den igjen på at strekene og mellomrommene er like lange. Skiltene forteller hvem som kan bruke feltet.",
    "Kantlinjen viser hvor kjørebanen slutter. En heltrukken kantlinje er ikke en sperrelinje. På smale veier uten midtlinje kan kantlinjen være brutt. Se på farge og mønster. Da forstår du hva linjen betyr.",
]

export default function VeimerkingVideo() {
    return (
        <figure className="veimerking-video">
            <div className="veimerking-video-frame">
                <iframe
                    src="/video/veimerking/index.html"
                    title="Veimerking – forstå linjene. Animasjon med fortellerstemme"
                    loading="lazy"
                    allow="autoplay; fullscreen"
                />
            </div>
            <figcaption>Animasjon: slik leser du veimerkingen (2:42, med lyd). Velg kapittel nederst i spilleren.</figcaption>
            <details className="veimerking-video-text">
                <summary>Les teksten fra filmen</summary>
                {narration.map((p, i) => <p key={i}>{p}</p>)}
            </details>
        </figure>
    )
}

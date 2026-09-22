import { useState } from 'react'
import './RyggingVendingDemo.css'

const situations = [
    { name: 'Ut av innkjørselen', question: 'Du skal rygge over fortauet. En gående nærmer seg bak bilen. Hva gjør du?', options: ['Venter og lar den gående passere', 'Rygger fordi ryggelysene varsler'], correct: 0, explanation: 'Riktig handling er å vente. Du har vikeplikt for den gående. Se etter nye trafikanter og kontroller veien før du eventuelt rygger videre.', image: 'rygging-ut-av-innkjorsel.svg', alt: 'Blå bil i innkjørsel med bakenden mot fortauet. En gående er på vei mot området bak bilen.', risk: 'Den gående kan komme inn bak bilen. Når du har sluppet personen fram, må du også kontrollere trafikken på veien.', legend: ['Din bil står stille', 'Gående på fortauet', 'Trafikk på veien'], cx: 429, cy: 246, rx: 123, ry: 29 },
    { name: 'Skjult bak hekken', question: 'En hekk skjuler området bak bilen. Du ser ingen i kameraet. Hva gjør du?', options: ['Rygger sakte og håper noen varsler', 'Skaffer tilstrekkelig oversikt før jeg rygger'], correct: 1, explanation: 'Riktig handling er å skaffe oversikt. Selv om kameraet ikke viser noen, kan det være trafikanter bak hekken. Få noen til å passe på eller kontroller selv at fare eller skade ikke kan oppstå. Oppretthold oversikten underveis.', image: 'rygging-sikt-bak-hekk.svg', alt: 'En hekk ved innkjørselen skjuler en del av fortauet bak den blå bilen.', risk: 'Hekken skjuler trafikanter som kan komme inn i bilens bevegelsesområde. Å kjøre sakte erstatter ikke nødvendig oversikt.', legend: ['Din bil står stille', '? = området må avklares', 'Skravert felt: begrenset oversikt'], cx: 510, cy: 246, rx: 98, ry: 29 },
    { name: 'Rygge ut med sving', question: 'Du skal rygge ut av parkeringslommen med bakenden mot venstre, slik pilen viser. Området bak er kontrollert og fritt. Hva må du særlig sjekke før du svinger?', options: ['At fronten har plass til å svinge ut mot bilen til høyre', 'At bakenden følger pilen, mens jeg holder øye med ryggekameraet'], correct: 0, explanation: 'Når bakenden går mot venstre, svinger fronten mot høyre. Derfor kan høyre fremre hjørne komme nær den parkerte bilen, selv om det er god plass bak. Kontroller avstanden langs siden og foran, og vurder om du må rygge lenger rett bakover før du svinger. Følg samtidig med etter trafikanter bak bilen.', image: 'rygging-frontutsving-parkering.svg', alt: 'Blå bil parkert med fronten opp og en oransje bil tett ved høyre side. Stiplet pil bak den blå bilen viser ønsket rygging med bakenden mot venstre.', risk: 'Se særlig på høyre fremre hjørne av den blå bilen og avstanden til nabobilen. Dette området kan bli trangere når du rygger med sving.', legend: ['Din bil', 'Parkert nabobil', 'Ønsket retning for bakenden'], cx: 377, cy: 130, rx: 46, ry: 63 },
    { name: 'To måter å vende på', question: 'Du vil snu. A er en bred vei med mer trafikk. B er en roligere, smal sidevei der du må regne med å rygge. Begge har god sikt, og ingen skilt eller oppmerking forbyr vending. Hvilket alternativ vil du undersøke nærmere?', options: ['A: Vurdere en U-sving på den brede veien', 'B: Vurdere en vending med rygging på sideveien'], correct: -1, explanation: '', explanations: ['En U-sving kan være et godt valg hvis bilen har nok plass og du kan gjennomføre uten å hindre andre. Du slipper å rygge, men må krysse den andre kjøreretningen. Kontroller trafikk både foran og bak, og vurder om det er et tilstrekkelig opphold. Veibredden alene avgjør ikke om du kan snu.', 'Sideveien kan gi deg mer tid og mindre trafikk å forholde deg til. Til gjengjeld kan du måtte rygge og skifte kjøreretning flere ganger. Kontroller gående, innkjørsler, kantene og frontens utsving. Hele vendingen må kunne gjennomføres inne på sideveien; ikke planlegg å rygge ut i krysset.'], image: 'vending-velg-sted.svg', alt: 'En bred gjennomgående vei med en smalere sidevei. Blå bil kjører mot høyre. A markerer en mulig U-sving på den brede veien, mens B markerer sideveien der vending kan kreve rygging.', risk: '', legend: ['Bred vei: U-sving kan få plass', 'Rolig sidevei: rygging kan bli nødvendig'], cx: 0, cy: 0, rx: 0, ry: 0 }

]

export default function RyggingVendingDemo() {
    const [index, setIndex] = useState(0)
    const [answer, setAnswer] = useState<number | null>(null)
    const [hint, setHint] = useState(false)
    const situation = situations[index]
    return <div className="rv-demo">
        <div className="rv-choices" role="group" aria-label="Velg trafikksituasjon">
            {situations.map((item, i) => <button key={item.name} type="button" aria-pressed={i === index} onClick={() => { setIndex(i); setAnswer(null); setHint(false) }}>{i + 1}. {item.name}</button>)}
        </div>
        <p className="rv-kicker">SITUASJON {index + 1} AV {situations.length} · {situation.explanations ? 'SAMMENLIGN ALTERNATIVENE' : 'FINN DET SOM MÅ AVKLARES'}</p>
        <p className="rv-question">{situation.question}</p>
        <div className="rv-scene">
            <picture>
                {situation.explanations && answer === 1 && <source media="(max-width: 600px)" srcSet="/images/rygging/vending-sidevei-mobil.svg" width="240" height="990" />}
            <img src={'/images/rygging/' + (situation.explanations && answer === 1 ? 'vending-sidevei-tre-bevegelser.svg' : situation.image)} alt={situation.explanations && answer === 1 ? 'Forstørret prinsippskisse av sidevei B i tre trinn: bilen kjører forover mot venstre, rygger med motsatt rattutslag og kjører forover i motsatt retning. Gule piler viser rygging.' : situation.alt} width="720" height="400" />
            </picture>
            {hint && <svg viewBox="0 0 720 400" aria-hidden="true"><ellipse cx={situation.cx} cy={situation.cy} rx={situation.rx} ry={situation.ry} /></svg>}
        </div>
        {situation.explanations && answer === 1 && <p className="rv-note">Forstørret visning av B. Lys pil = forover. Gul pil = bakover. Bilen viser starten på hvert trinn.</p>}
        <ul className="rv-legend" aria-label="Forklaring til bildet">{situation.legend.map((label, i) => <li key={label}><span>{index === 3 ? (i === 0 ? 'A' : 'B') : index === 1 && i > 0 ? (i === 1 ? '?' : '▧') : i + 1}</span>{label}</li>)}</ul>{!situation.explanations && <button className="rv-hint" type="button" aria-pressed={hint} onClick={() => setHint(!hint)}>{hint ? 'Skjul risikoområdet' : 'Vis risikoområdet'}</button>}
        {hint && <p className="rv-risk">{situation.risk}</p>}
        {situation.explanations && <p>Her er det ikke ett fasitsvar. Velg et alternativ og se hva som må være på plass. Du kan også kjøre videre hvis ingen av stedene egner seg.</p>}
        <div className="rv-answers" role="group" aria-label="Velg handling">
            {situation.options.map((option, i) => <button type="button" key={option} aria-pressed={answer === i} onClick={() => setAnswer(i)}>{option}</button>)}
        </div>
        <div aria-live="polite" aria-atomic="true">
            {answer !== null && <div className={'rv-feedback ' + (situation.explanations ? 'rv-comparison' : answer === situation.correct ? 'rv-correct' : 'rv-retry')}><strong>{situation.explanations ? (answer === 0 ? 'A: Mer plass, men mer trafikk' : 'B: Mindre trafikk, men flere bevegelser') : answer === situation.correct ? 'Riktig vurdert.' : 'Her må du velge en annen handling.'}</strong><p>{situation.explanations ? situation.explanations[answer] : situation.explanation}</p></div>}
        </div>
        <p className="rv-note">Skjematisk øvelse. Bildet viser et øyeblikk; i trafikken må du følge med hele tiden.</p>
    </div>
}

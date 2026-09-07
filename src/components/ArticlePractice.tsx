import { useId, useRef, useState } from 'react'
import './ArticlePractice.css'

export type PracticeTopic = 'bus' | 'child' | 'parking'
type Situation = { label: string; scene: string; detail: string; question: string; options: string[]; correct: number; explanation: string }
export const articleSituations: Record<PracticeTopic, Situation[]> = {
  bus: [
    { label: '60-sone', scene: 'bus60', detail: 'Bussen står i en busslomme og blinker ut. Du nærmer deg bakfra.', question: 'Hvem har vikeplikt når bussen skal ut?', options: ['Bussen må alltid vente til veien er tom', 'Du har vikeplikt og skal gi bussen plass', 'Den som kjører saktest, har vikeplikt', 'Du har bare vikeplikt i 50-sone'], correct: 1, explanation: 'Særregelen gjelder ved fartsgrense 60 km/t eller lavere når bussen gir tegn om å forlate holdeplassen. Senk farten tidlig og gi plass. Bussføreren skal samtidig unngå fare.' },
    { label: '70-sone', scene: 'bus70', detail: 'Samme busslomme, samme blinklys. Bare fartsgrensen er endret til 70 km/t.', question: 'Hva er annerledes i denne situasjonen?', options: ['Blinklyset gir alltid bussen prioritet', 'Din faktiske fart avgjør om du har vikeplikt', 'Bussen har vikeplikt ved utkjøring fra busslommen', 'Du skal øke farten for å passere først'], correct: 2, explanation: 'Ved fartsgrense over 60 km/t gjelder ikke særregelen. I denne busslommen har bussen vikeplikt ved utkjøring. Du skal likevel være hensynsfull, følge med og unngå fare. Det er fartsgrensen, ikke din faktiske fart, som avgjør om særregelen gjelder.' },
  ],
  child: [
    { label: 'Bakovervendt sete', scene: 'rear', detail: 'Vurder denne plasseringen: Et bakovervendt barnesete står i forsetet, og frontairbagen er slått på.', question: 'Kan barnet sitte her slik bilen er nå?', options: ['Ja, hvis turen er kort', 'Ja, hvis setet skyves helt tilbake', 'Ja, hvis barnet bruker selene i barnesetet', 'Nei, aldri bakovervendt foran aktiv airbag'], correct: 3, explanation: 'Dette er forbudt. En frontairbag kan treffe barnesetet med stor kraft. Bruk en egnet plass i baksetet, eller koble ut frontairbagen etter bilens anvisninger før et egnet sete brukes foran. Kontroller alltid bilens og barnesetets bruksanvisninger.' },
    { label: 'Barn på 138 cm', scene: 'forward', detail: 'Barnet er 138 cm, sitter forovervendt og frontairbagen er aktiv.', question: 'Hva er riktig om anbefalingen for airbag?', options: ['Barn under 140 cm bør ikke sitte foran aktiv airbag', 'Fra 135 cm er aktiv airbag alltid anbefalt', '140 cm er lovgrensen for alle typer barneseter', 'Et vanlig bilbelte fjerner risikoen fra airbagen'], correct: 0, explanation: 'Statens vegvesen anbefaler at barn under 140 cm ikke sitter foran en aktiv frontairbag. Dette er en sikkerhetsanbefaling. Kravet til barnesikringsutstyr for barn mellom 135 og 150 cm gjelder i tillegg når slikt utstyr finnes i bilen.' },
    { label: 'Trygg plassering', scene: 'backseat', detail: 'Et barn på 120 cm skal være med. Bilen har bilbelter og et egnet, godkjent barnesete.', question: 'Hva må du som fører sørge for?', options: ['Vanlig bilbelte er nok på korte turer', 'Barnet bruker godkjent utstyr tilpasset høyde og vekt', 'Barnet velger selv om setet skal brukes', 'Airbag kan erstatte barnesete'], correct: 1, explanation: 'Barn under 135 cm skal bruke godkjent barnesikringsutstyr som passer barnet. Føreren har ansvar for sikringen av passasjerer under 15 år. Følg monteringsanvisningene; illustrasjonen viser prinsippet, ikke en monteringsveiledning.' },
  ],
  parking: [
    { label: 'Foran gangfelt', scene: 'crossing', detail: 'Bilen står 3 meter foran gangfeltet i kjøreretningen. Du vil slippe av en passasjer.', question: 'Kan du stanse her for avstigning?', options: ['Ja, hvis du blir sittende bak rattet', 'Ja, hvis det tar under ett minutt', 'Nei, det er for nær gangfeltet', 'Ja, hvis du slår på nødblink'], correct: 2, explanation: 'Du kan ikke stanse frivillig på eller nærmere enn 5 meter foran gangfelt. Avstigning og nødblink gir ikke unntak fra stanseforbudet. Trafikal stans, for eksempel for å slippe frem en fotgjenger, er noe annet.' },
    { label: 'Forkjørsvei i 60', scene: 'priority', detail: 'Bilen står på kjørebanen på en forkjørsvei med fartsgrense 60 km/t. Ingen skilt tillater parkering her.', question: 'Kan du parkere her for å ta en telefon?', options: ['Nei, parkering på kjørebanen er forbudt her', 'Ja, fordi det ikke er et parkeringsforbudsskilt', 'Ja, hvis motoren går', 'Ja, hvis du ikke forlater bilen'], correct: 0, explanation: 'På forkjørsvei med høyere fartsgrense enn 50 km/t er det forbudt å parkere på kjørebanen. Å bli stående for å ta en telefon er parkering, også når du sitter i bilen. Dette følger av trafikkreglene § 17 nr. 3.' },
    { label: 'Vente på noen', scene: 'waiting', detail: 'Skiltet viser parkering forbudt. Passasjeren er fortsatt inne i huset. Du venter i bilen.', question: 'Er dette lovlig av- og påstigning?', options: ['Ja, hvis motoren er i gang', 'Nei, å vente på passasjeren regnes som parkering', 'Ja, hvis du venter under fem minutter', 'Ja, hvis du setter på blinklyset'], correct: 1, explanation: 'Passasjeren må være klar til å gå inn. Å vente er parkering. Ved parkeringsforbud kan kortest mulig stans for av- og påstigning være tillatt, men et stanseforbud tillater heller ikke dette.' },
  ],
}

function Car({ x, y }: { x: number; y: number }) {
  return <g transform={`translate(${x} ${y})`}><rect x="3" y="5" width="95" height="42" rx="15" fill="#101d29" opacity=".2"/><rect width="94" height="40" rx="13" fill="#2869ce" stroke="#c5e0ff" strokeWidth="2"/><path d="M60 5h15l7 8v14l-7 8H60z" fill="#c5e0ff"/><rect x="18" y="6" width="22" height="28" rx="4" fill="#123957"/><path d="M90 6v7m0 14v7" stroke="#fff5c2" strokeWidth="4"/></g>
}

function RoadScene({ scene, description }: { scene: string; description: string }) {
  const bus = scene.startsWith('bus')
  return <svg viewBox="0 0 640 280" role="img" aria-label={description} className="ap-scene">
    <rect width="640" height="280" fill="#e6eee7"/>
    {[40,140,250,490,595].map(x=><g key={x}><circle cx={x} cy="29" r="26" fill="#bed3c3"/><circle cx={x-5} cy="23" r="18" fill="#8caf98"/></g>)}
    <path d={bus ? 'M0 70H640V203H535L490 261H265L230 203H0Z' : 'M0 70H640V222H0Z'} fill="#364753"/>
    <path d="M0 136H640" stroke="#f7ce55" strokeWidth="3" strokeDasharray="25 19"/>
    <path d="M0 75H640" stroke="#f1f5f7" strokeWidth="3"/>
    <path d={bus?'M0 199H230L268 255H486L532 199H640':'M0 218H640'} stroke="#f1f5f7" strokeWidth="3" fill="none"/>
    {bus ? <>
      <Car x={100} y={151}/><text x="147" y="192" textAnchor="middle" fill="#fff" fontSize="12" fontWeight="700">DU →</text>
      <g transform="translate(307 210)">
        {/* Bus seen from above, matching the car and the road diagram. Front faces right. */}
        <rect x="2" y="3" width="145" height="38" rx="9" fill="#172b35" opacity=".28"/>
        {[23,108].map(x=><g key={x} fill="#182b35"><rect x={x} y="-3" width="14" height="7" rx="2"/><rect x={x} y="33" width="14" height="7" rx="2"/></g>)}
        <rect width="145" height="37" rx="8" fill="#d89626" stroke="#ffe5ab" strokeWidth="1.5"/>
        <rect x="4" y="3" width="135" height="30" rx="6" fill="#f3bc55"/>
        <path d="M126 4h9q6 0 6 7v15q0 7-6 7h-9z" fill="#203b4b"/>
        <path d="M129 6h5q4 0 4 5v8h-9z" fill="#8ac0cf"/>
        <path d="M129 22h9v4q0 4-4 4h-5z" fill="#6398ac"/>
        <rect x="5" y="7" width="6" height="23" rx="2" fill="#294555"/>
        {[17,39,61,83,105].map(x=><g key={x}><rect x={x} y="3" width="18" height="4" rx="1" fill="#294555"/><rect x={x} y="30" width="18" height="4" rx="1" fill="#294555"/></g>)}
        <rect x="20" y="10" width="97" height="17" rx="5" fill="#f8cf7b" stroke="#dca644" strokeWidth="1"/>
        <rect x="29" y="13" width="21" height="11" rx="3" fill="#e1ac4d"/>
        <path d="M33 16h13m-13 3h13m-13 3h13" stroke="#b68129" strokeWidth="1"/>
        <text x="83" y="23" textAnchor="middle" fill="#513b1a" fontSize="11" fontWeight="700" letterSpacing="1">BUSS</text>
        <path d="M134 0v-5h7m-7 42v5h7" fill="none" stroke="#263e4b" strokeWidth="2" strokeLinecap="round"/>
        <rect x="140" y="7" width="3" height="6" rx="1" fill="#fff7dd"/>
        <rect x="140" y="25" width="3" height="6" rx="1" fill="#fff7dd"/>
        <path d="M2 8v5m0 11v5" stroke="#c94a3c" strokeWidth="3"/>
        <circle cx="137" cy="2" r="8" fill="#ffca36" opacity=".25"/>
        <rect x="133" y="-1" width="8" height="5" rx="2" fill="#ffcf43" stroke="#fff4c6" strokeWidth="1.5"/>
      </g>
      <path d="M458 222Q484 177 529 173" fill="none" stroke="#ffd574" strokeWidth="3" strokeDasharray="7 5"/><path d="m521 165 10 8-10 8" fill="none" stroke="#ffd574" strokeWidth="3"/>
      <g transform="translate(551 237)"><circle r="28" fill="#fff" stroke="#cb3d45" strokeWidth="6"/><text y="8" textAnchor="middle" fontSize="24" fontWeight="800" fill="#17212b">{scene==='bus60'?'60':'70'}</text></g>
    </> : <>
      <Car x={190} y={170}/><text x="237" y="162" textAnchor="middle" fill="#fff" fontSize="13">Kjøreretning →</text>
      {scene==='crossing' ? <>{[83,108,151,177,202].map(y=><rect key={y} x="395" y={y} width="65" height="12" fill="#f5f7f6"/>)}<path d="M285 246H393m-108-7v14m108-14v14" stroke="#206b65" strokeWidth="2"/><text x="339" y="268" fill="#17554f" fontSize="16" textAnchor="middle" fontWeight="700">3 meter</text></> : scene==='priority' ? <><path d="m410 14 31 31-31 31-31-31z" fill="#fff" stroke="#344550" strokeWidth="2"/><path d="m410 23 22 22-22 22-22-22z" fill="#f9d352"/><circle cx="487" cy="45" r="27" fill="#fff" stroke="#c93d46" strokeWidth="5"/><text x="487" y="54" textAnchor="middle" fill="#17212b" fontSize="26" fontWeight="800">60</text><text x="443" y="263" textAnchor="middle" fill="#17554f" fontSize="14">Parkert på kjørebanen</text></> : <><circle cx="439" cy="43" r="28" fill="#2357a0" stroke="#d84048" strokeWidth="6"/><path d="m420 24 38 38" stroke="#d84048" strokeWidth="6"/><text x="439" y="262" textAnchor="middle" fill="#17554f" fontSize="14">Passasjeren er ikke klar</text></>}
    </>}
  </svg>
}

function PassengerSeat({ x }: { x: number }) {
  return <g transform={`translate(${x} 0)`}>
    {/* Both vehicle seats face right; the backrest is behind the cushion. */}
    <path d="M29 254v16m81-16v16M20 273h101" fill="none" stroke="#738695" strokeWidth="6" strokeLinecap="round"/>
    <path d="M12 133Q9 122 21 119L34 118Q44 118 47 130L67 223L119 225Q134 226 134 240V249Q133 258 120 258H48Q32 258 30 243Z" fill="#455b6e" stroke="#304757" strokeWidth="2"/>
    <path d="M21 137Q19 131 27 130H32Q36 130 38 139L56 223H42Z" fill="#7c93a5"/>
    <path d="M49 234H118Q125 234 125 241V245H47Q40 245 40 240Q40 234 49 234Z" fill="#8ca2b3"/>
    <path d="M27 111v11m8-11v11" stroke="#8397a6" strokeWidth="4"/>
    <rect x="19" y="93" width="32" height="20" rx="7" fill="#526b7e" stroke="#304757" strokeWidth="2"/>
    <path d="M25 99h19" stroke="#90a5b4" strokeWidth="3" strokeLinecap="round"/>
    <path d="m43 162 11 48M62 248h40" stroke="#a3b4bf" strokeWidth="1.5" opacity=".7"/>
    <rect x="116" y="230" width="7" height="12" rx="2" fill="#ca5a55"/>
  </g>
}

function ChildRestraint({ x, rearFacing }: { x: number; rearFacing: boolean }) {
  return <g transform={`translate(${x} 182) scale(${rearFacing ? -1 : 1} 1)`}>
    <path d="M-31 48H48L53 58H-36Z" fill="#174f51"/>
    <path d="M-37-30Q-40-44-26-46Q-14-46-12-33L1 23L45 29Q58 32 54 45Q53 50 42 50H-16Q-29 50-31 34Z" fill="#238c87" stroke="#145f5e" strokeWidth="2"/>
    <path d="M-26-29L-13 28Q-12 37-3 38H43" fill="none" stroke="#78c4b5" strokeWidth="9" strokeLinecap="round"/>
    <path d="M-26-46Q-36-45-35-28L-31-16H-21L-19-37Z" fill="#40a49a"/>
    <circle cx="-3" cy="-25" r={rearFacing ? 14 : 16} fill="#bd815d"/>
    <path d="m9-29 6 6-7 3" fill="#bd815d"/>
    <path d="M-5-7L0 20L25 28L29 46" fill="none" stroke="#315d9a" strokeWidth="13" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="m-7 3 11 12 17 3" fill="none" stroke="#bd815d" strokeWidth="6" strokeLinecap="round"/>
    <path d="m-12-6 13 25m4-24-6 24m-9 4h20" stroke="#ffd774" strokeWidth="4" fill="none" strokeLinecap="round"/>
    <rect x="-5" y="17" width="9" height="8" rx="2" fill="#253c4c"/>
    <path d="M26 47h12" stroke="#203d62" strokeWidth="7" strokeLinecap="round"/>
  </g>
}

function ChildScene({ scene, description }: { scene: string; description: string }) {
  const back=scene==='backseat'
  const reverse=scene==='rear'
  return <svg viewBox="0 0 640 360" role="img" aria-label={description} className="ap-scene">
    <rect width="640" height="360" fill="#eaf0f4"/>
    <ellipse cx="319" cy="287" rx="279" ry="11" fill="#ccdae3"/>
    <path d="M48 276V151Q48 140 58 132L147 57Q160 46 176 46H421Q436 46 448 57L540 143Q550 151 552 168L565 230V276Z" fill="#f9fbfc" stroke="#839cad" strokeWidth="3"/>
    <path d="M73 141L158 69Q166 62 180 62H278V142Z" fill="#c7dde8"/>
    <path d="M297 62H418Q428 62 436 70L512 142H297Z" fill="#c7dde8"/>
    <path d="M77 144H516M287 60V264" stroke="#d8e3e9" strokeWidth="5"/>
    <path d="M62 266H548" stroke="#b4c5d0" strokeWidth="3"/>
    <path d="M87 174h36m171 0h21" stroke="#a5b9c6" strokeWidth="5" strokeLinecap="round"/>
    <path d="M549 157H498Q485 157 485 168L494 192H553" fill="#a4b7c5" stroke="#768f9f" strokeWidth="2"/>
    <path d="M504 170h29m-25 12h29" stroke="#607b8c" strokeWidth="3" strokeLinecap="round"/>
    <PassengerSeat x={99}/>
    <PassengerSeat x={320}/>
    <ChildRestraint x={back ? 177 : 397} rearFacing={reverse}/>
    {!back&&<>
      <circle cx="509" cy="166" r="5" fill="#b4443c" stroke="#fff" strokeWidth="2"/>
      <path d="M509 160V126" fill="none" stroke="#b4443c" strokeWidth="2"/>
      <rect x="437" y="78" width="168" height="46" rx="13" fill="#fff3ef" stroke="#e2a59d"/>
      <text x="521" y="98" textAnchor="middle" fill="#a3322e" fontSize="15" fontWeight="700">Frontairbag: PÅ</text>
      <text x="521" y="114" textAnchor="middle" fill="#8b5149" fontSize="12">Ikke utløst</text>
    </>}
    <path d="M177 277v17m221-17v17" stroke="#8da5b5" strokeWidth="2"/>
    <rect x="124" y="297" width="106" height="32" rx="16" fill={back?'#165f5a':'#d9e4ec'}/>
    <text x="177" y="318" textAnchor="middle" fontSize="17" fontWeight="700" fill={back?'#fff':'#354f62'}>Baksete</text>
    <rect x="345" y="297" width="106" height="32" rx="16" fill={!back?'#165f5a':'#d9e4ec'}/>
    <text x="398" y="318" textAnchor="middle" fontSize="17" fontWeight="700" fill={!back?'#fff':'#354f62'}>Forsete</text>
    <text x="535" y="345" textAnchor="middle" fontSize="13" fill="#425e72">Kjøreretning →</text>
  </svg>
}


export default function ArticlePractice({ topic }: { topic: PracticeTopic }) {
  const situations=articleSituations[topic]
  const [current,setCurrent]=useState(0)
  const [answers,setAnswers]=useState<Record<number,number>>({})
  const id=useId()
  const choiceRefs=useRef<(HTMLButtonElement|null)[]>([])
  const goTo=(index:number)=>{setCurrent(index);choiceRefs.current[index]?.focus()}
  const q=situations[current]
  const selected=answers[current]
  const answered=selected!==undefined
  return <div className="ap" data-practice={topic}>
    <div className="ap-top"><span className="ap-eyebrow">SE SITUASJONEN · VELG HANDLING</span><span>{Object.keys(answers).length} av {situations.length} besvart</span></div>
    <div className="ap-choices" aria-label="Velg situasjon">{situations.map((s,i)=><button type="button" ref={element=>{choiceRefs.current[i]=element}} key={s.label} aria-pressed={i===current} onClick={()=>setCurrent(i)}>{s.label}{answers[i]!==undefined?' · besvart':''}</button>)}</div>
    <figure className="ap-figure">{topic==='child'?<ChildScene scene={q.scene} description={q.detail}/>:<RoadScene scene={q.scene} description={q.detail}/>}<figcaption>{q.detail}{topic==='child'&&<small>Prinsippskisse – følg alltid bilens og barnesetets bruksanvisninger.</small>}</figcaption></figure>
    <fieldset className="ap-question"><legend>{q.question}</legend><div className="ap-options">{q.options.map((option,i)=><button type="button" key={`${current}-${i}`} disabled={answered} aria-describedby={answered?`${id}-answer`:undefined} className={answered?(i===q.correct?'ap-correct':i===selected?'ap-wrong':''):''} onClick={()=>setAnswers({...answers,[current]:i})}><span className="ap-letter">{'ABCD'[i]}</span><span>{option}{answered&&i===q.correct&&<small>✓ Riktig svar</small>}{answered&&i===selected&&i!==q.correct&&<small>× Ditt svar</small>}</span></button>)}</div></fieldset>
    <div aria-live="polite" aria-atomic="true" id={`${id}-answer`}>{answered&&<div className="ap-feedback"><strong>{selected===q.correct?'Riktig vurdert.':'Her er forklaringen.'}</strong><p>{q.explanation}</p></div>}</div>
    {answered&&<div className="ap-actions">{current<situations.length-1&&<button type="button" onClick={()=>goTo(current+1)}>Neste situasjon →</button>}<button type="button" onClick={()=>{setAnswers({});goTo(0)}}>Prøv på nytt</button></div>}
    <details className="ap-summary"><summary>Les forklaringene samlet</summary>{situations.map(s=><div key={s.label}><h3>{s.label}</h3><p>{s.explanation}</p></div>)}</details>
  </div>
}

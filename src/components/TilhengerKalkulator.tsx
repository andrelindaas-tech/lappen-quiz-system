import { useId, useState } from 'react'
import './TilhengerKalkulator.css'
const kg = (n: number) => n.toLocaleString('nb-NO') + ' kg'
export function beregnTilhengerklasse(bil: number, henger: number) {
    if (![bil,henger].every(n => Number.isFinite(n) && Number.isInteger(n) && n > 0)) return null
    if (bil > 3500 || henger > 3500) return { klasse:'Sjekk særskilt', tekst:'Veiledningen gjelder personbil og tilhenger med tillatt totalvekt inntil 3 500 kg hver. Undersøk førerretten hos Statens vegvesen.' }
    if (henger <= 750) return { klasse:'Klasse B', tekst:'Tilhengeren har tillatt totalvekt på høyst 750 kg. Kombinasjonen er innenfor vektgrensene for førerkort klasse B.' }
    if (bil+henger <= 3500) return { klasse:'Klasse B', tekst:'Tilhengeren er over 750 kg, men summen av tillatte totalvekter er høyst 3 500 kg. Det er innenfor vektgrensene for klasse B.' }
    if (bil+henger <= 4250) return { klasse:'B96 eller BE', tekst:'Summen er over 3 500 kg og høyst 4 250 kg. Du trenger minst klasse B med kode 96. B96 krever obligatorisk opplæring, men ingen ny førerprøve.' }
    return { klasse:'Klasse BE', tekst:'Summen er over 4 250 kg. Innenfor disse vektgrensene trenger du klasse BE. BE krever obligatorisk opplæring og oppkjøring, men ikke en ny teoriprøve.' }
}
export function TilhengerKalkulator() {
    const id = useId()
    const [bilVekt,setBilVekt] = useState('1985')
    const [hengerVekt,setHengerVekt] = useState('1400')
    const bil=Number(bilVekt), henger=Number(hengerVekt)
    const resultat=beregnTilhengerklasse(bil,henger)
    return <div id="henger-kalkulator" className="trailer-calc">
        <header><span className="trailer-calc-eyebrow">BIL + TILHENGER</span><h3>Hvilken førerkortklasse trenger du?</h3><p>Bruk <strong>tillatt totalvekt</strong> fra begge vognkortene (F.2).</p></header>
        <div className="trailer-calc-scene" aria-hidden="true">
            <svg viewBox="0 0 680 205" fill="none">
                <defs><linearGradient id={`${id}-paint`} x1="190" y1="65" x2="190" y2="152" gradientUnits="userSpaceOnUse"><stop stopColor="#579ab4"/><stop offset=".45" stopColor="#2b718f"/><stop offset="1" stopColor="#16475f"/></linearGradient><linearGradient id={`${id}-glass`} x1="170" y1="70" x2="240" y2="101" gradientUnits="userSpaceOnUse"><stop stopColor="#b5d8e4"/><stop offset="1" stopColor="#487187"/></linearGradient></defs>
                <ellipse cx="333" cy="171" rx="269" ry="10" fill="#dce7e9"/>
                <path d="M40 180H640" stroke="#b9cbce" strokeWidth="2"/>
                <path d="M339 146H403L423 136" stroke="#526f7d" strokeWidth="7" strokeLinejoin="round"/>
                <path d="M60 133Q60 114 78 108L124 98L159 72Q170 63 193 62H262Q285 63 303 82L322 102Q339 110 344 125L343 145Q342 151 330 151H76Q59 149 60 133Z" fill={`url(#${id}-paint)`} stroke="#214c62" strokeWidth="2"/>
                <path d="M137 98L169 75Q174 72 193 72H259Q276 73 289 86L300 99Z" fill={`url(#${id}-glass)`} stroke="#214556" strokeWidth="3" strokeLinejoin="round"/>
                <path d="M207 72V99M264 74L273 99" stroke="#214556" strokeWidth="5"/>
                <path d="M147 104L139 133Q138 138 147 138H257Q267 138 266 130L260 104M207 104V138" stroke="#22536c" strokeWidth="1.4"/>
                <path d="M80 117Q187 106 329 115" stroke="#91bdcc" strokeWidth="1.5" opacity=".7"/>
                <path d="M73 143H332" stroke="#163b4d" strokeWidth="10" strokeLinecap="round"/>
                <path d="M86 149A30 30 0 0 1 146 149M257 149A30 30 0 0 1 317 149" fill="#203c4b" stroke="#517888" strokeWidth="2"/>
                <path d="M65 118L89 114L84 120L64 125" fill="#e5f5ff"/>
                <path d="M326 109L338 119H328L320 110" fill="#ee7969"/>
                <path d="M63 134H79" stroke="#183a4c" strokeWidth="5" strokeLinecap="round"/>
                <path d="M184 108H196M241 108H252" stroke="#cae1e8" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M145 101L138 95H129Q125 98 129 102Z" fill="#173e54"/>
                <rect x="415" y="80" width="188" height="67" rx="6" fill="#d4e1e5" stroke="#6b8792" strokeWidth="3"/>
                <path d="M418 101H600M418 123H600M445 82V145M573 82V145" stroke="#9cb4bd" strokeWidth="2"/>
                <path d="M409 147H611" stroke="#526f7d" strokeWidth="7" strokeLinecap="round"/>
                <rect x="600" y="130" width="8" height="13" rx="2" fill="#ca6758"/>
                {[116,287,521].map(x=><g key={x}><circle cx={x} cy="150" r="24" fill="#20323e"/><circle cx={x} cy="150" r="16" fill="#9eb4bf"/><circle cx={x} cy="150" r="12" fill="#405b6a"/>{[0,72,144,216,288].map(angle=><path key={angle} d={`M${x-2} 147L${x-4} 135H${x+4}L${x+2} 147Z`} fill="#dbe7ed" transform={`rotate(${angle} ${x} 150)`}/>)}<circle cx={x} cy="150" r="4" fill="#c3d5de"/></g>)}
                <path d="M491 137Q521 112 551 137" stroke="#526f7d" strokeWidth="6" strokeLinecap="round"/>
            </svg>
            <div className="trailer-calc-weights"><span>Bil<strong>{bil>0 && Number.isFinite(bil)?kg(bil):'—'}</strong></span><span className="trailer-calc-plus">+</span><span>Tilhenger<strong>{henger>0 && Number.isFinite(henger)?kg(henger):'—'}</strong></span></div>
        </div>
        <div className="trailer-calc-fields">
            <label htmlFor={`${id}-bil`}>Bilens tillatte totalvekt<div className="trailer-calc-input"><input id={`${id}-bil`} type="number" min="1" step="1" inputMode="numeric" value={bilVekt} onChange={e=>setBilVekt(e.target.value)}/><span>kg</span></div></label>
            <label htmlFor={`${id}-henger`}>Tilhengerens tillatte totalvekt<div className="trailer-calc-input"><input id={`${id}-henger`} type="number" min="1" step="1" inputMode="numeric" value={hengerVekt} onChange={e=>setHengerVekt(e.target.value)}/><span>kg</span></div></label>
        </div>
        <div className="trailer-calc-result" aria-live="polite" aria-atomic="true">{resultat?<><div className="trailer-calc-result-top"><div><span>Samlet tillatt totalvekt</span><strong>{kg(bil+henger)}</strong></div><span className="trailer-calc-class">{resultat.klasse}</span></div><p>{resultat.tekst}</p></>:<p>Fyll inn to positive, hele vekter i kg for å se førerkortklassen.</p>}</div>
        <div className="trailer-calc-check"><h4>Sjekk også hva bilen kan trekke</h4><p>Førerretten er bare én del av svaret. Bilens tillatte tilhengervekt, vogntogvekt og aktuell last må også være innenfor grensene. Kalkulatoren dekker ikke særrettigheter fra eldre førerkort.</p><a href="https://www.vegvesen.no/kjoretoy/eie-og-vedlikeholde/tilhenger/tilhengerkalkulator/" target="_blank" rel="noopener noreferrer">Sjekk bil og tilhenger hos Vegvesenet <span aria-hidden="true">↗</span></a></div>
    </div>
}

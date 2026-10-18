import { useId, useState } from 'react'
import { ArrowRight, BookOpen, Check, ShieldAlert } from 'lucide-react'
import './MotorromInteraktiv.css'

type Mode = 'dipstick' | 'electronic' | 'electric'
type Point = { id: string; name: string; x: number; y: number; how: string; look: string; act: string }
const points: Point[] = [
    { id: 'washer', name: 'Spylervæske', x: 17, y: 73, how: 'Finn lokket med symbolet for frontrutespyler. Kontroller at spyleren gir væske på ruten.', look: 'Væsken skal bidra til fri sikt. Velg spylervæske som tåler temperaturen.', act: 'Fyll riktig væske ved behov. Hvis spyleren fortsatt ikke virker, må også dyser og system undersøkes.' },
    { id: 'coolant', name: 'Kjølevæske', x: 17, y: 34, how: 'Finn beholderen og les av nivået utenfra når motoren er kald. På noen biler skal verksted gjøre dette.', look: 'Nivået skal være mellom MIN og MAX.', act: 'Få lavt nivå eller lekkasje undersøkt. Åpne aldri lokket når systemet er varmt.' },
    { id: 'brake', name: 'Bremsevæske', x: 68, y: 20, how: 'Finn beholderen og les av uten å åpne lokket. Sjekk i instruksjonsboken om dette er en føreroppgave.', look: 'Nivået skal være mellom MIN og MAX.', act: 'Er nivået under MIN, må bilen undersøkes før kjøring. Ikke bare fyll på.' },
    { id: 'battery', name: 'Lavvoltbatteri', x: 84, y: 44, how: 'Finn ut hvor lavvoltbatteriet er plassert. Se etter synlige skader og løse fester hvis batteriet er tilgjengelig.', look: 'Dette er ikke elbilens store fremdriftsbatteri. Lavvoltbatteriet kan være skjult eller stå et annet sted.', act: 'Ikke løsne kabler eller deksler for øvelsens skyld. Høyspenningsdeler og oransje kabler skal du ikke arbeide på.' },
    { id: 'oil', name: 'Oljepåfylling', x: 53, y: 42, how: 'Finn oljepåfyllingslokket på motoren. Kontroller nivået med bilens målemetode før eventuell påfylling.', look: 'Lokket og peilepinnen har ulike oppgaver. Lokket viser hvor olje fylles, ikke hvor mye olje det er.', act: 'Bruk bare riktig oljespesifikasjon og mengde etter instruksjonsboken. For mye olje kan også gi skade.' },
    { id: 'level', name: 'Oljenivå', x: 43, y: 69, how: 'Parker plant og slå av motoren. Trekk opp peilepinnen, tørk av og sett den helt inn. Trekk opp igjen og les av. Følg bilens krav til temperatur og ventetid.', look: 'Oljen skal være mellom MIN og MAX.', act: 'Bruk riktig olje og mengde ved etterfylling. Ikke fyll over MAX.' },
]
const modes: { id: Mode; label: string }[] = [
    { id: 'dipstick', label: 'Med peilepinne' }, { id: 'electronic', label: 'Elektronisk oljemåling' }, { id: 'electric', label: 'Elbil' },
]
export default function MotorromInteraktiv() {
    const [mode, setMode] = useState<Mode>('dipstick')
    const [selected, setSelected] = useState('washer')
    const panelId = useId()
    const visible = points.filter(p => mode !== 'electric' || !['oil', 'level', 'coolant'].includes(p.id))
    const point = visible.find(p => p.id === selected) || visible[0]
    const detail = mode === 'electronic' && point.id === 'level' ? {
        ...point, how: 'Finn oljenivå i bilens meny. Følg krav til temperatur, parkering og ventetid i instruksjonsboken.',
        look: 'Se om displayet viser normalt nivå eller ber om etterfylling.',
        act: 'Følg mengden bilen oppgir. Er målingen utilgjengelig, sjekk kravene til måling i instruksjonsboken.',
    } : mode === 'electric' && point.id === 'brake' ? {
        ...point, how: 'Finn kontrollen i bilens instruksjonsbok. På noen elbiler kan du lese av nivået selv; på andre gjør verkstedet det.',
        look: 'Der føreren skal sjekke beholderen, skal nivået være mellom MIN og MAX. Les av utenfra.',
        act: 'Ikke fjern deksler for å komme til. La verkstedet gjøre kontroller som instruksjonsboken krever fagfolk til.',
    } : point
    function changeMode(next: Mode) {
        setMode(next)
        if (next === 'electric' && ['oil', 'level', 'coolant'].includes(selected)) setSelected('washer')
    }
    return <div className="engine-guide">
        <div className="engine-guide-heading"><span>UNDER PANSERET</span><p>Finn punktet. Forstå kontrollen.</p></div>
        <div className="engine-modes" role="group" aria-label="Type bil og oljemåling">
            {modes.map(m => <button key={m.id} type="button" aria-pressed={mode === m.id} onClick={() => changeMode(m.id)}>{m.label}</button>)}
        </div>
        <p className="engine-mode-note">{mode === 'electric' ? 'Ingen motorolje. Mange elbiler har kjølevæske til batteri og motor, men beholderen er ofte skjult og kontrolleres av verkstedet. Sjekk instruksjonsboken.' : mode === 'electronic' ? 'Oljenivået leses i bilens meny. Punkt 6 viser målingen, ikke en peilepinne.' : 'Peilepinnen måler nivået. Oljelokket brukes til påfylling.'}</p>
        <div className="engine-workspace"><div>
            <div className="engine-drawing">
                <svg viewBox="0 0 560 400" role="img" aria-label="Prinsippskisse sett forfra. Kontrollpunktenes plassering og tilgjengelighet varierer mellom biler.">
                    <rect x="1" y="1" width="558" height="398" rx="28" fill="#101e30" />
                    <path d="M30 90 Q30 55 80 45 H480 Q530 55 530 90 V335 Q530 360 495 362 H65 Q30 360 30 335Z" fill="#1b2e42" stroke="#476177" strokeWidth="2" />
                    <path d="M85 45 Q280 15 475 45" stroke="#708296" strokeWidth="12" fill="none" />
                    <text x="280" y="27" textAnchor="middle" fill="#b8cada" fontSize="12" letterSpacing="2">MOT FRONTRUTEN</text>
                    <path d="M45 110H66V325H45M515 110H494V325H515" stroke="#31485e" strokeWidth="12" fill="none" />
                    <path d="M70 343H490" stroke="#0d1726" strokeWidth="15" />
                    {Array.from({ length: 18 }, (_, i) => <path key={i} d={`M${90 + i * 22} 337v12`} stroke="#53677b" strokeWidth="3" />)}
                    {mode === 'electric' ? <g><rect x="165" y="125" width="218" height="181" rx="35" fill="#111c2b" stroke="#64748b" strokeWidth="2" /><rect x="184" y="145" width="180" height="140" rx="24" fill="#233448" /><text x="274" y="224" textAnchor="middle" fill="#c3d3df" fontSize="14">DEKSEL / OPPBEVARING</text></g> : <g>
                        <path d="M177 117H343L373 147V274L346 301H174L154 275V146Z" fill="#344b60" stroke="#8296a8" strokeWidth="2" />
                        {[161, 189, 217, 245].map(y => <path key={y} d={`M181 ${y}H334`} stroke="#172b3d" strokeWidth="9" />)}
                        <text x="265" y="137" textAnchor="middle" fill="#d3e0e8" fontSize="13" letterSpacing="3">MOTOR</text>
                        <path d="M165 263H131Q118 263 118 241V191" fill="none" stroke="#0d1925" strokeWidth="16" />
                        <circle cx="297" cy="167" r="22" fill="#0d1925" stroke="#d9ae56" strokeWidth="3" />
                        {mode === 'dipstick' ? <path d="M238 270v28m-9-32a9 9 0 1 0 18 0a9 9 0 1 0-18 0" stroke="#f6bf56" strokeWidth="5" fill="none" /> : <g><rect x="205" y="256" width="70" height="42" rx="7" fill="#0d1925" stroke="#6edbce" /><path d="M219 281h13m4 0h13m4 0h9" stroke="#6edbce" strokeWidth="6" /></g>}
                    </g>}
                    <g opacity={mode === 'electric' ? 0.45 : 1}>
                        {mode !== 'electric' && <><rect x="63" y="110" width="67" height="71" rx="22" fill="#a5c5d3" stroke="#e0edf2" strokeWidth="2" /><path d="M67 153h59v10H67" fill="#d78c98" /><rect x="79" y="100" width="35" height="16" rx="6" fill="#24313e" /></>}
                        <rect x="349" y="62" width="65" height="44" rx="10" fill="#b9c7cc" /><rect x="366" y="56" width="30" height="10" rx="4" fill="#263545" /><path d="M355 87h52" stroke="#a4814b" strokeWidth="7" />
                    </g>
                    <path d="M67 270Q63 255 80 253H112Q129 257 130 276V318H66Z" fill="#a4c8e0" stroke="#d7ebf6" strokeWidth="2" /><rect x="80" y="248" width="35" height="15" rx="6" fill="#3989d1" />
                    <rect x="424" y="138" width="72" height="79" rx="8" fill="#111d2b" stroke="#72889a" strokeWidth="2" /><rect x="435" y="133" width="12" height="10" fill="#d4968c" /><rect x="474" y="133" width="12" height="10" fill="#9aaabc" /><text x="460" y="204" textAnchor="middle" fill="#b8cada" fontSize="11">LAVVOLT</text>
                    <text x="280" y="385" textAnchor="middle" fill="#b8cada" fontSize="12" letterSpacing="2">DU STÅR FORAN BILEN</text>
                </svg>
                {visible.map((p, i) => <button key={p.id} type="button" className="engine-hotspot" style={{ left: `${p.x}%`, top: `${p.y}%` }} aria-label={`${i + 1}. ${p.name}`} aria-pressed={point.id === p.id} aria-controls={panelId} onClick={() => setSelected(p.id)}>{i + 1}</button>)}
            </div>
            <p className="engine-caption">Prinsippskisse · Plassering og tilgjengelighet varierer. Fargene identifiserer ikke væsketype.</p>
            <div className="engine-points" role="group" aria-label="Kontrollpunkter">
                {visible.map((p, i) => <button type="button" key={p.id} aria-pressed={p.id === point.id} aria-controls={panelId} onClick={() => setSelected(p.id)}><span>{i + 1}</span>{p.name}{p.id === point.id && <Check size={16} aria-hidden="true" />}</button>)}
            </div>
        </div>
        <section className="engine-detail" id={panelId} aria-live="polite" aria-atomic="true">
            <span className="engine-detail-label">KONTROLLPUNKT {visible.indexOf(point) + 1}</span><h3>{point.name}</h3>
            <div><h4><BookOpen size={18} aria-hidden="true" /> Slik kontrollerer du</h4><p>{detail.how}</p></div>
            <div><h4><Check size={18} aria-hidden="true" /> Se etter</h4><p>{detail.look}</p></div>
            <div className="engine-action"><h4><ArrowRight size={18} aria-hidden="true" /> Hva gjør du med funnet?</h4><p>{detail.act}</p></div>
        </section></div>
        <div className="engine-safety"><ShieldAlert size={21} aria-hidden="true" /><p>Sikre bilen mot bevegelse før kontroll. Hold hender unna vifter og bevegelige deler, også når motoren er av. Følg instruksjonsboken før du åpner eller etterfyller noe.</p></div>
    </div>
}

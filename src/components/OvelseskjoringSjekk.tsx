import { useEffect, useId, useRef, useState } from 'react'
import Link from './InternalLink'
import { trackEvent } from '../utils/analytics'
import { sporOmMorke, vurder, type Alder, type Fem, type Grunnkurs, type JaNei } from '../utils/ovelseskjoring'
import './OvelseskjoringSjekk.css'

// «Kan dere øvelseskjøre nå?»: korte spørsmål om elev, ledsager og bil. Ingenting lagres.
// Neste spørsmål vises først når det forrige er besvart. Reglene ligger i utils/ovelseskjoring.ts.
type Valg<T extends string> = { verdi: T; tekst: string }

function Radio<T extends string>({ legend, name, verdi, valg, onChange }: { legend: string; name: string; verdi: T; valg: Valg<T>[]; onChange: (v: T) => void }) {
    return (
        <fieldset>
            <legend>{legend}</legend>
            <div className="ovk-options">
                {valg.map(v => (
                    <label key={v.verdi}>
                        <input type="radio" name={name} value={v.verdi} checked={verdi === v.verdi} onChange={() => onChange(v.verdi)} />
                        <span>{v.tekst}</span>
                    </label>
                ))}
            </div>
        </fieldset>
    )
}

function idag() {
    const d = new Date()
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
}

export default function OvelseskjoringSjekk() {
    const id = useId()
    const [alder, setAlder] = useState<Alder>('')
    const [grunnkurs, setGrunnkurs] = useState<Grunnkurs>('')
    const [dato, setDato] = useState('')
    const [morke, setMorke] = useState<JaNei>('')
    const [ledsager25, setLedsager25] = useState<JaNei>('')
    const [ledsagerFem, setLedsagerFem] = useState<Fem>('')
    const [lSkilt, setLSkilt] = useState(false)
    const [speil, setSpeil] = useState(false)
    const [vekt, setVekt] = useState(false)
    const [vis, setVis] = useState(false)
    const sendt = useRef(false)

    // Dagens dato fylles inn i nettleseren, ikke under forhåndsgenereringen.
    useEffect(() => { setDato(idag()) }, [])

    const under16 = alder === 'under16'
    const visGrunnkurs = alder === '16-24'
    const visDato = alder === '25+' || (alder === '16-24' && grunnkurs !== '')
    const visMorke = visDato && sporOmMorke({ alder, grunnkurs, dato })
    const visLedsager = visDato && !!dato && (!visMorke || morke !== '')
    const visFem = visLedsager && ledsager25 !== ''
    const visBil = visFem && ledsagerFem !== ''
    const ferdig = under16 || (visBil && vis)

    const resultat = ferdig ? vurder({ alder, grunnkurs, dato, morke, ledsager25, ledsagerFem, lSkilt, speil, vekt }) : null

    useEffect(() => {
        if (resultat && !sendt.current) {
            sendt.current = true
            trackEvent('ovelseskjoring_sjekk_resultat', { resultat: resultat.ok ? 'ok' : 'mangler' })
        }
    }, [resultat])

    return (
        <form className="ovk-sjekk" onSubmit={e => { e.preventDefault(); setVis(true) }} aria-label="Sjekk om dere kan øvelseskjøre nå">
            <Radio legend="Hvor gammel er eleven?" name={`${id}-alder`} verdi={alder} onChange={setAlder}
                valg={[{ verdi: 'under16', tekst: 'Under 16' }, { verdi: '16-24', tekst: '16–24' }, { verdi: '25+', tekst: '25 eller eldre' }]} />

            {visGrunnkurs && (
                <Radio legend="Har eleven fullført trafikalt grunnkurs?" name={`${id}-kurs`} verdi={grunnkurs} onChange={setGrunnkurs}
                    valg={[{ verdi: 'ja', tekst: 'Ja' }, { verdi: 'nei', tekst: 'Nei' }, { verdi: 'annen', tekst: 'Nei, men eleven har førerkort i en annen klasse (moped, MC, traktor)' }]} />
            )}

            {visDato && (
                <fieldset>
                    <legend><label htmlFor={`${id}-dato`}>Når skal dere kjøre?</label></legend>
                    <input id={`${id}-dato`} type="date" value={dato} onChange={e => setDato(e.target.value)} />
                </fieldset>
            )}

            {visMorke && (
                <Radio legend="Har eleven fullført Trafikant i mørket?" name={`${id}-morke`} verdi={morke} onChange={setMorke}
                    valg={[{ verdi: 'ja', tekst: 'Ja' }, { verdi: 'nei', tekst: 'Nei' }]} />
            )}

            {visLedsager && (
                <Radio legend="Er ledsageren fylt 25 år?" name={`${id}-l25`} verdi={ledsager25} onChange={setLedsager25}
                    valg={[{ verdi: 'ja', tekst: 'Ja' }, { verdi: 'nei', tekst: 'Nei' }]} />
            )}

            {visFem && (
                <Radio legend="Har ledsageren hatt førerkort klasse B uten avbrudd de siste fem årene?" name={`${id}-l5`} verdi={ledsagerFem} onChange={setLedsagerFem}
                    valg={[{ verdi: 'ja', tekst: 'Ja' }, { verdi: 'nei', tekst: 'Nei' }, { verdi: 'vet', tekst: 'Vet ikke' }]} />
            )}

            {visBil && (
                <fieldset>
                    <legend>Hva har bilen?</legend>
                    <div className="ovk-options">
                        <label><input type="checkbox" checked={lSkilt} onChange={e => setLSkilt(e.target.checked)} /><span>L-skilt bak</span></label>
                        <label><input type="checkbox" checked={speil} onChange={e => setSpeil(e.target.checked)} /><span>Ekstra speil til ledsager</span></label>
                        <label><input type="checkbox" checked={vekt} onChange={e => setVekt(e.target.checked)} /><span>Tillatt totalvekt høyst 3500 kg</span></label>
                    </div>
                    {!vis && <button type="submit" className="ovk-button">Se resultatet</button>}
                </fieldset>
            )}

            <div aria-live="polite">
                {resultat ? (
                    <div className={`ovk-result${resultat.ok ? '' : ' is-no'}`}>
                        <strong className="ovk-result-title">{resultat.ok ? 'Dere kan kjøre.' : 'Dette må på plass før dere kjører.'}</strong>
                        {resultat.husk && <p>{resultat.husk}</p>}
                        <ul className="ovk-list">
                            {resultat.punkter.map(p => (
                                <li key={p.tekst} className={p.ok ? 'is-ok' : 'is-missing'}>
                                    <span aria-hidden="true">{p.ok ? '✓' : '✗'}</span>
                                    <span><span className="ovk-sr">{p.ok ? 'Oppfylt: ' : 'Mangler: '}</span>{p.tekst}{p.lenke && <> <Link to={p.lenke.href}>{p.lenke.tekst}</Link></>}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <p className="ovk-hint">Svar på spørsmålene, så får du svaret her.</p>
                )}
            </div>
        </form>
    )
}

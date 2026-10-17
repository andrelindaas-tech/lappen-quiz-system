import { useState } from 'react'
import './MorkekjoringSjekk.css'

// Answers "can I practise driving now?" from the mørkekjøring rule: the course is needed from 1 November to 15 March.
type Done = 'ja' | 'nei' | ''

function inDarkSeason(date: Date) {
    const m = date.getMonth() + 1
    const d = date.getDate()
    return m === 11 || m === 12 || m === 1 || m === 2 || (m === 3 && d <= 15)
}

function formatDate(date: Date) {
    return date.toLocaleDateString('nb-NO', { day: 'numeric', month: 'long', year: 'numeric' })
}

export default function MorkekjoringSjekk() {
    const [done, setDone] = useState<Done>('')
    const [dateText, setDateText] = useState('')

    const date = dateText ? new Date(`${dateText}T12:00:00`) : null
    let result: { ok: boolean; title: string; text: string } | null = null
    if (done && date) {
        if (done === 'ja') {
            result = { ok: true, title: 'Ja, mørkekjøringen er ikke noe hinder.', text: 'Med fullført mørkekjøring kan du øvelseskjøre hele året, så lenge resten av kravene er oppfylt: trafikalt grunnkurs (eller fylt 25 år), godkjent ledsager, L-skilt og ekstra speil.' }
        } else if (inDarkSeason(date)) {
            result = { ok: false, title: `Nei, ikke ${formatDate(date)}.`, text: 'Mellom 1. november og 15. mars må du ha fullført mørkekjøring for å øvelseskjøre. Kurset holdes i den samme perioden, så meld deg på hos en trafikkskole så snart som mulig.' }
        } else {
            result = { ok: true, title: `Ja, ${formatDate(date)} kan du øvelseskjøre uten mørkekjøring.`, text: 'Mellom 16. mars og 31. oktober er mørkekjøring ikke et krav for å øvelseskjøre. Fra 1. november må den være fullført, og kurset kan tidligst tas 1. november.' }
        }
    }

    return (
        <form className="mk-sjekk" onSubmit={e => e.preventDefault()} aria-label="Sjekk om du kan øvelseskjøre">
            <fieldset>
                <legend>1. Har du fullført mørkekjøring (trafikant i mørket)?</legend>
                <div className="mk-sjekk-options">
                    <label><input type="radio" name="mk-done" value="ja" checked={done === 'ja'} onChange={() => setDone('ja')} /><span>Ja</span></label>
                    <label><input type="radio" name="mk-done" value="nei" checked={done === 'nei'} onChange={() => setDone('nei')} /><span>Nei</span></label>
                </div>
            </fieldset>
            <fieldset>
                <legend><label htmlFor="mk-date">2. Hvilken dag vil du øvelseskjøre?</label></legend>
                <input id="mk-date" type="date" value={dateText} onChange={e => setDateText(e.target.value)} />
            </fieldset>
            <div aria-live="polite">
                {result ? (
                    <div className={`mk-sjekk-result${result.ok ? '' : ' is-no'}`}>
                        <strong>{result.title}</strong>
                        <p>{result.text}</p>
                    </div>
                ) : (
                    <p style={{ margin: 0, opacity: 0.8 }}>Svar på begge spørsmålene, så får du svaret her.</p>
                )}
            </div>
        </form>
    )
}

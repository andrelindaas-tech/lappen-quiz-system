import { inDarkSeason } from './morkeperiode'

// Regler for «Kan dere øvelseskjøre nå?». Ren funksjon, så den kan testes uten nettleser.
// Kilde: vegtrafikkloven § 26, trafikkopplæringsforskriften § 2-1 og § 3-1, Statens vegvesen (25.10.2026).
export type Alder = '' | 'under16' | '16-24' | '25+'
export type Grunnkurs = '' | 'ja' | 'nei' | 'annen'
export type JaNei = '' | 'ja' | 'nei'
export type Fem = '' | 'ja' | 'nei' | 'vet'

export interface Svar {
    alder: Alder
    grunnkurs: Grunnkurs
    dato: string // YYYY-MM-DD
    morke: JaNei
    ledsager25: JaNei
    ledsagerFem: Fem
    lSkilt: boolean
    speil: boolean
    vekt: boolean
}

export interface Punkt { ok: boolean; tekst: string; lenke?: { href: string; tekst: string } }
export interface Resultat { ok: boolean; punkter: Punkt[]; husk?: string }

export const tilDato = (s: string) => (s ? new Date(`${s}T12:00:00`) : null)

/** Skal spørsmålet om Trafikant i mørket stilles? I mørkeperioden for alle fra 16 år, unntatt 16–24 uten grunnkurs
 *  (da mangler grunnkurset uansett). Statens vegvesen gir ingen unntak for 25 år eller annen førerkortklasse. */
export function sporOmMorke(s: Pick<Svar, 'alder' | 'grunnkurs' | 'dato'>) {
    const d = tilDato(s.dato)
    const aktuell = s.alder === '25+' || (s.alder === '16-24' && (s.grunnkurs === 'ja' || s.grunnkurs === 'annen'))
    return aktuell && !!d && inDarkSeason(d)
}

export function vurder(s: Svar): Resultat {
    if (s.alder === 'under16') {
        return { ok: false, punkter: [{ ok: false, tekst: 'Du kan begynne å øvelseskjøre med bil når du er 16 år. Trafikalt grunnkurs kan du ta før det.' }] }
    }
    const p: Punkt[] = [{ ok: true, tekst: 'Eleven er fylt 16 år.' }]
    if (s.alder === '16-24') {
        if (s.grunnkurs === 'ja') p.push({ ok: true, tekst: 'Eleven har fullført trafikalt grunnkurs.' })
        else if (s.grunnkurs === 'annen') p.push({ ok: true, tekst: 'Eleven har førerkort i en annen klasse og trenger ikke grunnkurs før øvelseskjøring.' })
        else p.push({ ok: false, tekst: 'Under 25 år må du ha fullført trafikalt grunnkurs før du kan øvelseskjøre.', lenke: { href: '/laeringsressurser/trafikalt-grunnkurs/', tekst: 'Om trafikalt grunnkurs' } })
    }
    if (sporOmMorke(s)) {
        if (s.morke === 'ja') p.push({ ok: true, tekst: 'Eleven har fullført Trafikant i mørket.' })
        else p.push({ ok: false, tekst: 'Mellom 1. november og 15. mars må du ha fullført Trafikant i mørket. Kurset holdes i denne perioden, så meld deg på hos en trafikkskole.', lenke: { href: '/laeringsressurser/morkekjoring/', tekst: 'Om mørkekjøring' } })
    }
    p.push(s.ledsager25 === 'ja' ? { ok: true, tekst: 'Ledsageren er fylt 25 år.' } : { ok: false, tekst: 'Ledsageren må være fylt 25 år.' })
    if (s.ledsagerFem === 'ja') p.push({ ok: true, tekst: 'Ledsageren har hatt førerkort klasse B uten avbrudd de siste fem årene.' })
    else if (s.ledsagerFem === 'vet') p.push({ ok: false, tekst: 'Sjekk det før dere kjører. Har førerkortet vært borte, for eksempel etter beslag, kan det hende kravet ikke er oppfylt.' })
    else p.push({ ok: false, tekst: 'Ledsageren må ha hatt førerkort klasse B uten avbrudd de siste fem årene.' })
    p.push(s.lSkilt ? { ok: true, tekst: 'Bilen har L-skilt bak.' } : { ok: false, tekst: 'Bilen skal ha godt synlig rød L på hvit bunn bak.' })
    p.push(s.speil ? { ok: true, tekst: 'Ledsageren har ekstra speil.' } : { ok: false, tekst: 'Ledsageren skal ha et ekstra speil med god sikt bakover.' })
    p.push(s.vekt ? { ok: true, tekst: 'Bilen har tillatt totalvekt på høyst 3500 kg.' } : { ok: false, tekst: 'Bilen må ha tillatt totalvekt på høyst 3500 kg. Det står i vognkortet.', lenke: { href: '/laeringsressurser/vognkort-vekter/', tekst: 'Slik leser du vognkortet' } })

    const ok = p.every(x => x.ok)
    const husk = s.alder === '25+' ? 'Husk legitimasjon.'
        : s.grunnkurs === 'annen' ? 'Husk førerkortet og legitimasjon.'
        : 'Husk legitimasjon og øvelseskjøringsbevis.'
    return { ok, punkter: p, husk: ok ? husk : undefined }
}

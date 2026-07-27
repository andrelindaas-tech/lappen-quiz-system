// Utseendegrupper for trafikkskilt — farge og form.
//
// Bakgrunn: GSC viser at folk søker på hvordan skiltet SER UT, ikke hva det heter:
// «blått skilt med rød strek» (67 visn.), «norsk skilt blått og hvitt» (86),
// «rødt skilt med hvit strek» (53), «skilt 302» (53), «906 skilt» (102).
// Vi rangerer på posisjon 9–21 for disse og får null klikk, fordi søkefeltet på
// /trafikkskilt er klientsidig — Google kan ikke bruke det. Disse gruppene finnes
// derfor for å gi hvert utseende sin egen indekserbare side.
//
// Fargen følger skiltnummerserien, som er systematisk i skiltforskriften:
//   1xx fareskilt (rød trekant) · 2xx vikeplikt/forkjørs (blandet)
//   3xx forbudsskilt (rød ring) · 4xx påbudsskilt (blå sirkel)
//   5xx opplysningsskilt (blå firkant) · 6xx serviceskilt (blå firkant)
//   7xx vegvisning (blandet) · 8xx underskilt (hvit) · 9xx markeringsskilt (blandet)

import { trafficSigns } from './trafficSigns'
import type { TrafficSign } from './trafficSigns'

export interface SignLookGroup {
    slug: string
    h1: string
    seoTitle: string
    seoDescription: string
    intro: string
    /** Hva folk faktisk skriver i Google — brukes i innledningen på siden. */
    sokeeksempler: string[]
    matcher: (sign: TrafficSign) => boolean
    /**
     * Skilt som hører til gruppen visuelt, men som bryter med regelen gruppen lærer bort.
     * De vises i en egen bolk nederst med forklaring, i stedet for å ligge blandet inn
     * og motsi innledningen.
     */
    unntak?: {
        koder: string[]
        tittel: string
        forklaring: string
    }
}

const serie = (sign: TrafficSign) => sign.code.charAt(0)
const hoved = (sign: TrafficSign) => sign.code.split('.')[0]

// Listene under er verifisert mot de faktiske skiltbildene 27. juli 2026, ikke utledet
// fra nummerserien. Nummerlogikken alene tok feil på 17 av 82 skilt i blå gruppe.
// Slik reverifiserer du: les gjennomsnittsfargen i hvert bilde og sammenlign med gruppen.

// 2xx-skiltene må klassifiseres enkeltvis — serien er blandet.
const TOSERIE_BLA = ['214']                     // møtende kjørende har vikeplikt
const TOSERIE_ROD = ['202', '204', '212']       // vikeplikt, stopp, vikeplikt for møtende
const TOSERIE_TREKANT = ['202']                 // vikeplikt er en trekant på hodet

// Ikke blå, selv om de ligger i 500- og 600-serien.
const IKKE_BLA = [
    '530', '531', '532', '534', '538',  // hvite kjørefeltskilt med svarte og røde piler
    '542',                              // slutt på gatetun — grå med skråstrek
    '565',                              // feil kjøreretning — rødt STOPP-skilt
    '570',                              // nødutgang i tunnel — grønt
    '640', '650',                       // severdighet og friluftsliv — brune turistskilt
]

// Blå sirkel med rød ring. Hører hjemme i begge grupper, og «blått skilt med rød strek»
// er nettopp disse to — det søket har 67 visninger i GSC uten at vi fanget det før.
const BLA_OG_ROD = ['370', '372']

// «Slutt på»-skilt: grå eller svarte med skråstrek, ikke røde.
const IKKE_ROD = ['336', '337', '364', '368']

export const signLookGroups: SignLookGroup[] = [
    {
        slug: 'blaa-skilt',
        h1: 'Blå trafikkskilt',
        seoTitle: 'Blå trafikkskilt – hva betyr de? Komplett oversikt med bilder',
        seoDescription:
            'Alle blå trafikkskilt i Norge med bilde og forklaring. Blå sirkel betyr påbud, blå firkant betyr opplysning eller service. Finn skiltet du leter etter.',
        intro:
            'Blå skilt gir deg beskjed om noe du **skal** gjøre, eller opplyser om hvordan vegen er å bruke. ' +
            'Formen forteller hva slags beskjed det er: **blå sirkel er påbud** — du må følge den. ' +
            '**Blå firkant er opplysning eller service** — den informerer, men pålegger deg ingenting.',
        sokeeksempler: ['blått skilt med rød strek', 'norsk skilt blått og hvitt', 'blått skilt med hvit pil'],
        matcher: (s) =>
            BLA_OG_ROD.includes(hoved(s)) ||
            TOSERIE_BLA.includes(s.code) ||
            (['4', '5', '6'].includes(serie(s)) && !IKKE_BLA.includes(hoved(s))),
        unntak: {
            koder: BLA_OG_ROD,
            tittel: 'Blå skilt som likevel er forbud',
            forklaring:
                'To skilt bryter med regelen over. De har blå bunn, men rød ring — og **rød ring betyr alltid forbud**, ' +
                'uansett hvilken farge det er bak. Det er en av de vanligste forvekslingene på teoriprøven: ' +
                'folk ser den blå bunnen og leser skiltet som et påbud.',
        },
    },
    {
        slug: 'rode-skilt',
        h1: 'Røde trafikkskilt',
        seoTitle: 'Røde trafikkskilt – fareskilt og forbudsskilt med forklaring',
        seoDescription:
            'Alle røde trafikkskilt i Norge med bilde og forklaring. Rød trekant varsler fare, rød ring betyr forbud. Se hele oversikten og de vanligste teorifellene.',
        intro:
            'Rødt betyr alltid at du må være oppmerksom. Formen skiller de to typene: ' +
            '**rød trekant varsler om fare** lenger fram — den forbyr ingenting, men ber deg tilpasse farten. ' +
            '**Rød ring er et forbud** — den sier hva du ikke har lov til.',
        sokeeksempler: ['rødt skilt med hvit strek', 'rundt rødt skilt', 'rødt skilt med svart symbol'],
        matcher: (s) =>
            TOSERIE_ROD.includes(s.code) ||
            (['1', '3'].includes(serie(s)) && !IKKE_ROD.includes(hoved(s))),
    },
    {
        slug: 'trekantede-skilt',
        h1: 'Trekantede trafikkskilt',
        seoTitle: 'Trekantede trafikkskilt – alle fareskiltene med bilde',
        seoDescription:
            'Trekantede skilt varsler om fare på vegen. Se alle fareskiltene i Norge med bilde og forklaring — og vikepliktskiltet, den eneste trekanten som står på hodet.',
        intro:
            'En trekant med rød kant varsler om **fare lenger fram**. Skiltet forbyr ingenting — det ber deg senke farten og være forberedt. ' +
            'Ett trekantet skilt skiller seg ut: **vikepliktskiltet står på hodet**, og det er et krav, ikke en advarsel.',
        sokeeksempler: ['trekantet skilt', 'skilt med rød trekant', 'trekant skilt trafikk'],
        matcher: (s) => serie(s) === '1' || TOSERIE_TREKANT.includes(s.code),
    },
]

const sorter = (a: TrafficSign, b: TrafficSign) => a.code.localeCompare(b.code, 'nb', { numeric: true })
const erUnntak = (group: SignLookGroup, s: TrafficSign) =>
    !!group.unntak?.koder.includes(s.code.split('.')[0])

/** Skiltene i gruppen, uten dem som vises i egen unntaksbolk. */
export function signsInGroup(group: SignLookGroup): TrafficSign[] {
    return trafficSigns.filter((s) => group.matcher(s) && !erUnntak(group, s)).sort(sorter)
}

/** Skiltene som bryter med gruppens regel, vist for seg med forklaring. */
export function signsInGroupUnntak(group: SignLookGroup): TrafficSign[] {
    if (!group.unntak) return []
    return trafficSigns.filter((s) => group.matcher(s) && erUnntak(group, s)).sort(sorter)
}

/** Alle skilt i gruppen, inkludert unntakene — brukes til antall i innledningen. */
export function signsInGroupTotalt(group: SignLookGroup): TrafficSign[] {
    return trafficSigns.filter(group.matcher).sort(sorter)
}

export function getSignLookGroup(slug: string): SignLookGroup | undefined {
    return signLookGroups.find((g) => g.slug === slug)
}

/** Alle skilt sortert på nummer, gruppert etter serie — grunnlaget for nummerindeksen. */
export const SERIE_NAVN: Record<string, string> = {
    '1': 'Fareskilt (100-serien)',
    '2': 'Vikeplikts- og forkjørsskilt (200-serien)',
    '3': 'Forbudsskilt (300-serien)',
    '4': 'Påbudsskilt (400-serien)',
    '5': 'Opplysningsskilt (500-serien)',
    '6': 'Serviceskilt (600-serien)',
    '7': 'Vegvisningsskilt (700-serien)',
    '8': 'Underskilt (800-serien)',
    '9': 'Markeringsskilt (900-serien)',
}

export function signsByNumberSeries(): { serie: string; navn: string; signs: TrafficSign[] }[] {
    const grupper = new Map<string, TrafficSign[]>()
    for (const s of trafficSigns) {
        const k = s.code.charAt(0)
        if (!grupper.has(k)) grupper.set(k, [])
        grupper.get(k)!.push(s)
    }
    return [...grupper.entries()]
        .sort((a, b) => a[0].localeCompare(b[0]))
        .map(([serie, signs]) => ({
            serie,
            navn: SERIE_NAVN[serie] ?? `${serie}00-serien`,
            signs: signs.sort((a, b) => a.code.localeCompare(b.code, 'nb', { numeric: true })),
        }))
}

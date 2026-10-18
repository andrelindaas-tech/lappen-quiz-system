import type { TheoryTopic } from './theoryData'

export const morkekjoringTopic: TheoryTopic = {
    id: 'morkekjoring',
    title: 'Mørkekjøring (trafikant i mørket) – datoer, regler og øvelseskjøring',
    icon: '🌙',
    color: 'var(--apple-indigo)',
    shortDescription: 'Hva er mørkekjøring, når kan du ta kurset, og kan du øvelseskjøre uten? Her er reglene for klasse B, med en rask sjekk av om du kan øvelseskjøre på en bestemt dag.',
    seoTitle: 'Mørkekjøring 2026/2027 – hva er det, når og kan du øvelseskjøre uten?',
    seoDescription: 'Mørkekjøring (trafikant i mørket) er 3 timer og tas 1. november–15. mars. Se om du kan øvelseskjøre uten, hva som gjelder over 25 år og etter sommerkurs.',
    author: 'Teori-test.no-redaksjonen',
    publishedDate: '2026-10-17',
    lastUpdated: '2026-10-17',
    sections: [
        {
            title: 'Kort svar',
            type: 'info',
            content: `**Mørkekjøring**, eller «trafikant i mørket», er en obligatorisk del av trafikalt grunnkurs for klasse B. Kurset tar **3 timer**.

**Når:** Kurset holdes bare mellom **1. november og 15. mars**, fordi det må være mørkt.

**Øvelseskjøring:** Mellom 1. november og 15. mars kan du ikke øvelseskjøre før du har fullført mørkekjøringen.

**Over 25 år:** Du slipper selve grunnkurset, men mørkekjøring og førstehjelp må du ta.`
        },
        {
            title: 'Hva skjer på mørkekjøringen?',
            type: 'text',
            component: 'LysIMorketFilm',
            content: `Du kjører ikke selv. Du sitter på mens trafikklæreren kjører, og ser demonstrasjoner på et område med lite eller ingen trafikk. Etterpå snakker dere om det dere har sett.

Poenget er å oppleve hvor lite du ser i mørket, og hva som gjør det lettere eller vanskeligere å bli sett:

- hvor kort nærlyset rekker, og hvordan fjernlys endrer det
- hvordan en fotgjenger med og uten refleks ser ut fra førersetet
- hvordan blending fra møtende trafikk påvirker synet
- hvorfor farten må tilpasses det du faktisk ser

Det faglige om nærlys, fjernlys, blending og refleks finner du i [lysbruk til teoriprøven](/laeringsressurser/lysbruk-morkekjoring/). Animasjonen viser hva som skjer med lyset når to biler møtes.`
        },
        {
            title: 'Kan du øvelseskjøre uten mørkekjøring?',
            type: 'text',
            component: 'MorkekjoringSjekk',
            content: `Det avhenger av datoen:

- **16. mars – 31. oktober:** Ja. Mørkekjøring er ikke et krav i den lyse perioden.
- **1. november – 15. mars:** Nei. Da må mørkekjøringen være fullført før du øvelseskjører.

Velg dag nedenfor, så får du svaret.`
        },
        {
            title: 'Tok du grunnkurset i sommer?',
            type: 'text',
            content: `Tar du trafikalt grunnkurs mellom 16. mars og 31. oktober, er det for lyst til å holde mørkekjøringen. Du får da et øvelseskjøringsbevis som bare gjelder fram til 31. oktober.

Når du har tatt mørkekjøringen, sender Statens vegvesen deg et nytt bevis som gjelder hele året. **Meld deg på i god tid.** Mange trafikkskoler har fulle kurs i november og desember.`
        },
        {
            title: 'Har du kjørt opp uten mørkekjøring?',
            type: 'text',
            content: `Kjører du opp mellom 16. mars og 31. oktober, kan du ta mørkekjøringen etterpå.

Etter kurset melder trafikkskolen inn at det er gjennomført. Da må du bestille nytt førerkort på Din side hos Statens vegvesen. Både kurset og bestillingen må være gjort **innen 31. januar** året etter. Ellers blir førerretten avbrutt.`
        },
        {
            title: 'Over 25 år: må du ta mørkekjøring?',
            type: 'text',
            content: `Ja. Er du fylt 25, er du fritatt fra selve trafikalt grunnkurs og trenger ikke øvelseskjøringsbevis. Men to deler må du fortsatt ta:

- trafikant i mørket (mørkekjøring)
- plikter ved trafikkuhell og førstehjelp

Mørkekjøringen tilbys bare om vinteren. Ta den tidlig, så den ikke blir en flaskehals rett før oppkjøringen.`
        },
        {
            title: 'Hva koster mørkekjøring?',
            type: 'text',
            content: `Prisen varierer mellom trafikkskolene. Hos Flex Trafikkskole i Bergen kostet mørkekjøringen 2 690 kr i juli 2026, mer enn resten av grunnkurset. Mange skoler oppgir grunnkurset uten mørkekjøring, så sjekk hva som er med når du sammenligner priser.

Se flere priseksempler i [trafikalt grunnkurs](/laeringsressurser/trafikalt-grunnkurs/).`
        },
        {
            title: 'Dette bør du kunne til teoriprøven',
            type: 'tip',
            content: `Teoriprøven spør ikke om selve kurset, men om det du lærer der:

- **Nærlys** rekker kort. Kjør ikke fortere enn at du kan stanse på den strekningen du ser.
- **Refleks** gjør fotgjengere synlige mye tidligere enn mørke klær alene.
- **Blending:** Se mot høyre kant av veien når du blir blendet, og senk farten.

Les mer om [lysbruk og sikt i mørket](/laeringsressurser/lysbruk-morkekjoring/), om [øvelseskjøring](/laeringsressurser/ovingskjoring/), eller [ta en gratis øvingsprøve](/quiz/).`
        },
    ],
    faq: [
        { question: 'Hva er mørkekjøring?', answer: 'Mørkekjøring, eller «trafikant i mørket», er en obligatorisk del av trafikalt grunnkurs. Kurset tar 3 timer. Du sitter på mens trafikklæreren kjører og viser hvor lite du ser i mørket, og hvor mye refleks og riktig lysbruk betyr.' },
        { question: 'Når kan man ta mørkekjøring?', answer: 'Bare mellom 1. november og 15. mars, fordi det må være mørkt.' },
        { question: 'Kan man øvelseskjøre uten mørkekjøring?', answer: 'Ja, mellom 16. mars og 31. oktober. Mellom 1. november og 15. mars må mørkekjøringen være fullført før du kan øvelseskjøre.' },
        { question: 'Må man ta mørkekjøring hvis man er over 25 år?', answer: 'Ja. Over 25 år er du fritatt fra selve trafikalt grunnkurs, men du må fortsatt ta trafikant i mørket og førstehjelp.' },
        { question: 'Hvor lang tid tar mørkekjøring?', answer: '3 timer.' },
        { question: 'Hva hvis jeg har kjørt opp uten mørkekjøring?', answer: 'Har du kjørt opp mellom 16. mars og 31. oktober, kan du ta mørkekjøringen etterpå. Du må ta kurset og bestille nytt førerkort innen 31. januar året etter, ellers blir førerretten avbrutt.' },
    ],
    miniQuiz: [
        {
            question: 'Du tok trafikalt grunnkurs i juni og har ikke tatt mørkekjøring. Kan du øvelseskjøre 10. november?',
            options: ['Ja, grunnkurset er nok', 'Nei, du må ta mørkekjøring først', 'Ja, hvis ledsageren er over 25', 'Bare på dagtid'],
            correct: 'Nei, du må ta mørkekjøring først',
            explanation: 'Mellom 1. november og 15. mars må mørkekjøringen være fullført før du kan øvelseskjøre. Det gjelder også på dagtid.',
        },
        {
            question: 'Du er 27 år og skal ta førerkort klasse B. Hva må du ta?',
            options: ['Hele trafikalt grunnkurs', 'Ingenting av grunnkurset', 'Mørkekjøring og førstehjelp', 'Bare mørkekjøring'],
            correct: 'Mørkekjøring og førstehjelp',
            explanation: 'Over 25 år er du fritatt fra selve grunnkurset, men trafikant i mørket og plikter ved trafikkuhell og førstehjelp er fortsatt obligatorisk.',
        },
        {
            question: 'Når kan mørkekjøringen holdes?',
            options: ['Hele året', '1. oktober – 1. april', '1. november – 15. mars', 'Bare i desember og januar'],
            correct: '1. november – 15. mars',
            explanation: 'Kurset må holdes i mørket, og derfor bare mellom 1. november og 15. mars.',
        },
    ],
    sources: {
        title: 'Kilder',
        type: 'text',
        content: `Reglene bygger på Statens vegvesen, oktober 2026.

- [Statens vegvesen: Trafikant i mørket (mørkekjøring)](https://www.vegvesen.no/forerkort/ta-forerkort/trafikant-i-morket/)
- [Statens vegvesen: Personbil – B](https://www.vegvesen.no/forerkort/ta-forerkort/veien-til-forerkortet/personbil-b/)`
    },
}

export type VikepliktTemplate = 'x-kryss' | 't-kryss' | 'hindring' | 'rundkjoring'
export type VikepliktLevel = 1 | 2
export type VikepliktRegulation = 'hoyreregel' | 'vikepliktskilt' | 'forkjorsvei' | 'hindring' | 'rundkjoring' | 'trafikklys'
export type VikepliktDirection = 'nord' | 'sor' | 'ost' | 'vest'
export type VikepliktTurn = 'rett' | 'hoyre' | 'venstre'
export type VikepliktObstacleSide = 'spiller' | 'motende'
export type VikepliktSignalState = 'rod' | 'gul' | 'gronn'

export interface VikepliktVehicle {
    id: string
    erSpiller?: boolean
    fra: VikepliktDirection
    skal: VikepliktTurn
    blinklys?: boolean
    iRundkjoring?: boolean
}

export interface VikepliktScenario {
    id: string
    template: VikepliktTemplate
    level: VikepliktLevel
    regulation: VikepliktRegulation
    vehicles: VikepliktVehicle[]
    correctOrder: string[]
    explanation: string
    teorifelle?: string
    obstacle?: {
        type: 'parkert-bil'
        side: VikepliktObstacleSide
    }
    signals?: Partial<Record<VikepliktDirection, VikepliktSignalState>>
}

// Rekkefølgene følger vikeplikt-artikkelen i theoryData.ts:
// skilt går foran høyreregelen, høyreregelen gjelder også i T-kryss,
// og venstresvingende skal vike for møtende trafikk.
// For skiltregulerte runder angir regulation spillerens veiakse:
// vikepliktskilt = spilleren og møtende har vikeplikt, forkjorsvei = de kjører på forkjørsveien.
export const vikepliktScenarios: VikepliktScenario[] = [
    {
        id: 'hoyre-x-sor',
        template: 'x-kryss',
        level: 1,
        regulation: 'hoyreregel',
        vehicles: [
            { id: 'deg', erSpiller: true, fra: 'sor', skal: 'rett' },
            { id: 'rod', fra: 'ost', skal: 'rett' },
        ],
        correctOrder: ['rod', 'deg'],
        explanation: 'Rød bil kommer fra din høyre. I et uregulert kryss har du vikeplikt for kjøretøy fra høyre, så rød kjører før deg.',
    },
    {
        id: 'hoyre-x-vest',
        template: 'x-kryss',
        level: 1,
        regulation: 'hoyreregel',
        vehicles: [
            { id: 'deg', erSpiller: true, fra: 'vest', skal: 'rett' },
            { id: 'rod', fra: 'sor', skal: 'rett' },
        ],
        correctOrder: ['rod', 'deg'],
        explanation: 'Rød bil kommer fra din høyre. At du skal rett frem gir deg ikke forkjørsrett; høyreregelen bestemmer rekkefølgen.',
        teorifelle: 'Å kjøre rett frem gir ikke automatisk rett til å kjøre først.',
    },
    {
        id: 'du-er-fra-hoyre',
        template: 'x-kryss',
        level: 1,
        regulation: 'hoyreregel',
        vehicles: [
            { id: 'deg', erSpiller: true, fra: 'sor', skal: 'hoyre', blinklys: true },
            { id: 'rod', fra: 'vest', skal: 'rett' },
        ],
        correctOrder: ['deg', 'rod'],
        explanation: 'Du kommer fra høyre sett fra rød bil. Rød har derfor vikeplikt for deg, og du kjører først.',
    },
    {
        id: 'hoyreregel-t-kryss',
        template: 't-kryss',
        level: 1,
        regulation: 'hoyreregel',
        vehicles: [
            { id: 'deg', erSpiller: true, fra: 'vest', skal: 'rett' },
            { id: 'rod', fra: 'sor', skal: 'hoyre', blinklys: true },
        ],
        correctOrder: ['rod', 'deg'],
        explanation: 'Rød bil kommer fra din høyre. Høyreregelen gjelder også i uregulerte T-kryss, selv om du kjører på veien som fortsetter rett frem.',
        teorifelle: 'Den gjennomgående veien i et T-kryss er ikke automatisk forkjørsvei.',
    },
    {
        id: 'hoyreregel-tre-biler',
        template: 'x-kryss',
        level: 1,
        regulation: 'hoyreregel',
        vehicles: [
            { id: 'deg', erSpiller: true, fra: 'sor', skal: 'venstre', blinklys: true },
            { id: 'rod', fra: 'ost', skal: 'rett' },
            { id: 'gul', fra: 'nord', skal: 'rett' },
        ],
        correctOrder: ['gul', 'rod', 'deg'],
        explanation: 'Rød har gul bil på sin høyre side og må vente. Du har rød bil på din høyre side, og du skal i tillegg svinge til venstre foran møtende gul bil. Derfor blir rekkefølgen gul, rød, så deg.',
    },
    {
        id: 'vikeplikt-du-sist',
        template: 'x-kryss',
        level: 2,
        regulation: 'vikepliktskilt',
        vehicles: [
            { id: 'deg', erSpiller: true, fra: 'sor', skal: 'rett' },
            { id: 'rod', fra: 'ost', skal: 'rett' },
            { id: 'gul', fra: 'vest', skal: 'venstre', blinklys: true },
        ],
        correctOrder: ['rod', 'gul', 'deg'],
        explanation: 'Du har vikepliktskilt og må slippe frem begge bilene på veien du skal inn på. Gul bil svinger til venstre og viker for møtende rød bil. Rekkefølgen blir rød, gul, så deg.',
    },
    {
        id: 'vikeplikt-du-i-midten',
        template: 'x-kryss',
        level: 2,
        regulation: 'vikepliktskilt',
        vehicles: [
            { id: 'deg', erSpiller: true, fra: 'sor', skal: 'rett' },
            { id: 'rod', fra: 'ost', skal: 'rett' },
            { id: 'gul', fra: 'nord', skal: 'venstre', blinklys: true },
        ],
        correctOrder: ['rod', 'deg', 'gul'],
        explanation: 'Du og gul bil har vikepliktskilt og slipper først frem rød bil på hovedveien. Deretter kjører du rett frem; gul skal svinge til venstre og må vike for deg som møtende.',
        teorifelle: 'Når to møtende biler har samme vikeplikt, viker den venstresvingende for den som kjører rett frem.',
    },
    {
        id: 'hindring-pa-din-side',
        template: 'hindring',
        level: 2,
        regulation: 'hindring',
        vehicles: [
            { id: 'deg', erSpiller: true, fra: 'sor', skal: 'rett' },
            { id: 'rod', fra: 'nord', skal: 'rett' },
        ],
        obstacle: { type: 'parkert-bil', side: 'spiller' },
        correctOrder: ['rod', 'deg'],
        explanation: 'Den parkerte bilen sperrer din side av veien. Du må over i kjørefeltet for møtende trafikk for å passere, og har derfor vikeplikt for rød bil. Rød kjører først, deretter kan du kjøre rundt hindringen.',
        teorifelle: 'Når en del av veien er sperret, har den som har sperringen på sin side vikeplikt.',
    },
    {
        id: 'forkjorsvei-venstresving',
        template: 'x-kryss',
        level: 2,
        regulation: 'forkjorsvei',
        vehicles: [
            { id: 'deg', erSpiller: true, fra: 'sor', skal: 'venstre', blinklys: true },
            { id: 'rod', fra: 'nord', skal: 'rett' },
            { id: 'gul', fra: 'ost', skal: 'rett' },
        ],
        correctOrder: ['rod', 'deg', 'gul'],
        explanation: 'Du og rød bil kjører på forkjørsveien, men du skal svinge til venstre og må vike for møtende rød bil. Etterpå kjører du før gul bil, som kommer fra sideveien.',
        teorifelle: 'Forkjørsvei opphever høyreregelen, men ikke vikeplikten for møtende ved venstresving.',
    },
    {
        id: 'rundkjoring-du-er-inne',
        template: 'rundkjoring',
        level: 2,
        regulation: 'rundkjoring',
        vehicles: [
            { id: 'deg', erSpiller: true, fra: 'vest', skal: 'rett', iRundkjoring: true },
            { id: 'rod', fra: 'sor', skal: 'rett' },
        ],
        correctOrder: ['deg', 'rod'],
        explanation: 'Du er allerede inne i rundkjøringen og kjører derfor først. Rød bil har vikeplikt ved innkjøringen og må vente til du har passert før den kan kjøre inn.',
        teorifelle: 'Vikeplikten gjelder kjøretøyet som skal inn i rundkjøringen. Denne gangen er det den andre bilen som må vente på deg.',
    },
    {
        id: 'forkjorsvei-du-forst',
        template: 'x-kryss',
        level: 2,
        regulation: 'forkjorsvei',
        vehicles: [
            { id: 'deg', erSpiller: true, fra: 'vest', skal: 'rett' },
            { id: 'rod', fra: 'ost', skal: 'venstre', blinklys: true },
            { id: 'gul', fra: 'sor', skal: 'rett' },
        ],
        correctOrder: ['deg', 'rod', 'gul'],
        explanation: 'Du kjører rett frem på forkjørsveien. Møtende rød bil skal svinge til venstre og viker for deg. Gul bil kommer fra sideveien og må vente på begge bilene på forkjørsveien.',
    },
    {
        id: 'forkjorsvei-t-kryss',
        template: 't-kryss',
        level: 2,
        regulation: 'forkjorsvei',
        vehicles: [
            { id: 'deg', erSpiller: true, fra: 'vest', skal: 'rett' },
            { id: 'rod', fra: 'ost', skal: 'venstre', blinklys: true },
            { id: 'gul', fra: 'sor', skal: 'hoyre', blinklys: true },
        ],
        correctOrder: ['deg', 'rod', 'gul'],
        explanation: 'Du og rød bil er på forkjørsveien. Du kjører rett frem, mens møtende rød bil svinger til venstre og viker for deg. Gul bil kommer fra sideveien og kjører til slutt.',
        teorifelle: 'I et skiltregulert T-kryss følger du skiltene; høyreregelen bestemmer ikke mellom hovedvei og sidevei.',
    },
    {
        id: 'hindring-pa-motendes-side',
        template: 'hindring',
        level: 2,
        regulation: 'hindring',
        vehicles: [
            { id: 'deg', erSpiller: true, fra: 'sor', skal: 'rett' },
            { id: 'rod', fra: 'nord', skal: 'rett' },
        ],
        obstacle: { type: 'parkert-bil', side: 'motende' },
        correctOrder: ['deg', 'rod'],
        explanation: 'Den parkerte bilen sperrer rød bils side av veien. Rød må over i ditt kjørefelt for å passere og har derfor vikeplikt for deg. Du kjører først, deretter kan rød kjøre rundt hindringen.',
        teorifelle: 'Se hvilken side hindringen faktisk står på – det avgjør hvem som må vente.',
    },
    {
        id: 'rundkjoring-bil-inne-forst',
        template: 'rundkjoring',
        level: 2,
        regulation: 'rundkjoring',
        vehicles: [
            { id: 'deg', erSpiller: true, fra: 'sor', skal: 'rett' },
            { id: 'rod', fra: 'vest', skal: 'rett', iRundkjoring: true },
        ],
        correctOrder: ['rod', 'deg'],
        explanation: 'Rød bil er allerede inne i rundkjøringen. Du har vikeplikt ved innkjøringen og må vente til rød har passert. Deretter kan du kjøre inn når det er klart, følge kjørefeltet rundt og blinke til høyre når du skal ut.',
        teorifelle: 'Ved innkjøring i rundkjøring følger du vikeplikten – ikke høyreregelen. Trafikk som allerede er inne, kjører først.',
    },
    {
        id: 'rodt-lys-og-vikepliktskilt',
        template: 'x-kryss',
        level: 2,
        regulation: 'trafikklys',
        vehicles: [
            { id: 'deg', erSpiller: true, fra: 'sor', skal: 'rett' },
            { id: 'rod', fra: 'ost', skal: 'rett' },
            { id: 'gul', fra: 'vest', skal: 'venstre', blinklys: true },
        ],
        signals: { sor: 'rod', ost: 'gronn', vest: 'gronn' },
        correctOrder: ['rod', 'gul', 'deg'],
        explanation: 'Du har rødt lys og må vente. Rød og gul bil har grønt lys, men gul skal svinge til venstre og viker for møtende rød bil. Rød kjører først, deretter gul. Når ditt lys skifter til grønt, kan du kjøre. Det fungerende trafikklyset gjelder foran vikepliktskiltet.',
        teorifelle: 'Trafikklys står over trafikkskilt. Vikepliktskiltet gjelder først når lysreguleringen er ute av drift eller blinker gult.',
    },
]

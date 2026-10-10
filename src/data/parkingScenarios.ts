// Situasjoner til parkeringsspillet (/laeringsspill/parkering/).
//
// Regelgrunnlag: forskrift om kjørende og gående trafikk (trafikkreglene).
//   - § 1 nr. 1 bokstav k: definisjonen av «parkering», med unntak for kortest mulig stans
//     for av- og påstigning eller av- og pålessing.
//   - § 17: stans og parkering (nr. 1 stansforbud, nr. 2 parkeringsforbud, nr. 3 forkjørsveg).
//   § 18 gjelder syklende og brukes ikke her.
// Skiltene 370 og 372 er regulert i skiltforskriften. Betydningen deres stemmer med skiltsidene på nettstedet.
//
// Tegningene er skjematiske. Én meter er ikke like lang i alle bildene, og bilen er tegnet
// mindre enn en ekte bil. Det er sonene og målelinjene som gjelder, ikke pikselavstandene.

export type ParkingTemplate =
    | 'sign-zone'
    | 'crosswalk'
    | 'intersection'
    | 'bus-stop'
    | 'driveway'
    | 'sign-unloading'
    | 'stop-ban'
    | 'sidewalk'
    | 'level-crossing'
    | 'bike-lane'

export type ParkingSpot = {
    id: string
    label: string
    x: number
    y: number
}

export type ParkingScenario = {
    id: string
    title: string
    shortTitle: string
    template: ParkingTemplate
    prompt: string
    spots: ParkingSpot[]
    correctSpots: string[]
    explanation: string
    ruleLabel: string
}

export const parkingScenarios: ParkingScenario[] = [
    {
        // Trafikkreglene § 17 nr. 1 bokstav b: stans (og dermed parkering) er forbudt i vegkryss
        // og nærmere enn 5 meter fra vegkrysset. Avstanden regnes fra punktet der fortaukant,
        // kantlinje eller vegkant begynner å runde.
        id: 'fem-meter-kryss',
        title: 'Fem meter fra veikryss',
        shortTitle: 'Veikryss',
        template: 'intersection',
        prompt: 'Du kjører mot høyre og vil parkere langs kanten.',
        spots: [
            { id: 'a', label: 'A', x: 395, y: 355 },
            { id: 'b', label: 'B', x: 200, y: 355 },
        ],
        correctSpots: ['b'],
        ruleLabel: 'Minst 5 m fra veikrysset',
        explanation: 'Du kan ikke stanse eller parkere nærmere enn 5 meter fra veikrysset. Avstanden regnes fra der veikanten begynner å runde. Plass A ligger innenfor de 5 meterne. Plass B ligger utenfor.',
    },
    {
        // Trafikkreglene § 17 nr. 1 bokstav d: stans (og dermed parkering) er forbudt på gangfelt
        // og nærmere enn 5 meter foran gangfeltet. «Foran» er i kjøreretningen.
        // Etter gangfeltet gjelder ikke femmetersregelen.
        id: 'fem-meter-gangfelt',
        title: 'Fem meter foran gangfelt',
        shortTitle: 'Gangfelt',
        template: 'crosswalk',
        prompt: 'Du kjører mot høyre og vil parkere langs kanten.',
        spots: [
            { id: 'a', label: 'A', x: 180, y: 355 },
            { id: 'b', label: 'B', x: 385, y: 355 },
            { id: 'c', label: 'C', x: 650, y: 355 },
        ],
        correctSpots: ['a', 'c'],
        ruleLabel: 'Minst 5 m foran gangfeltet',
        explanation: 'Du kan ikke stanse eller parkere på gangfeltet eller nærmere enn 5 meter foran det. Plass B ligger innenfor femmetersonen. Plass A ligger lenger unna, og plass C ligger etter gangfeltet. Der gjelder ikke femmetersregelen.',
    },
    {
        // Trafikkreglene § 17 nr. 2 bokstav a: parkering er forbudt foran inn- eller utkjørsel.
        // Gjelder uten skilt. Bestemmelsen har ingen avstandsregel som femmetersregelen. Den gjelder
        // rett foran innkjørselen. Plass B og D ligger tett ved siden av, men ikke foran.
        id: 'foran-innkjorsel',
        title: 'Foran innkjørsel',
        shortTitle: 'Innkjørsel',
        template: 'driveway',
        prompt: 'Du kjører mot høyre og vil parkere langs kanten.',
        spots: [
            { id: 'a', label: 'A', x: 200, y: 355 },
            { id: 'b', label: 'B', x: 345, y: 355 },
            { id: 'c', label: 'C', x: 480, y: 355 },
            { id: 'd', label: 'D', x: 615, y: 355 },
        ],
        correctSpots: ['a', 'b', 'd'],
        ruleLabel: 'Ikke foran inn- eller utkjørsel',
        explanation: 'Du kan ikke parkere foran en inn- eller utkjørsel. Forbudet gjelder også uten skilt, men bare rett foran innkjørselen. Plass C står foran innkjørselen. Plass A, B og D er lovlige, også de to som ligger tett ved siden av.',
    },
    {
        // Trafikkreglene § 17 nr. 1 bokstav c: stans (og dermed parkering) er forbudt helt eller
        // delvis på fortau, gangveg eller sykkelveg.
        id: 'delvis-pa-fortau',
        title: 'Delvis oppå fortauet',
        shortTitle: 'Fortau',
        template: 'sidewalk',
        prompt: 'Du kjører mot høyre og vil parkere langs kanten.',
        spots: [
            { id: 'a', label: 'A', x: 200, y: 355 },
            { id: 'b', label: 'B', x: 450, y: 394 },
            { id: 'c', label: 'C', x: 650, y: 355 },
        ],
        correctSpots: ['a', 'c'],
        ruleLabel: 'Ikke helt eller delvis på fortau',
        explanation: 'Du kan ikke stanse eller parkere helt eller delvis på fortau. Plass B har deler av bilen oppå fortauet, og det er ikke lov. Plass A og C ligger på kjørebanen.',
    },
    {
        // Trafikkreglene § 17 nr. 1 bokstav h: stans (og dermed parkering) er forbudt på vegutvidelse
        // for holdeplass for buss, drosje eller sporvogn, og nærmere enn 20 meter fra offentlig
        // trafikkskilt for slik holdeplass. Av- og påstigning er unntatt når den ikke er til hinder
        // for kjøretøyene. Det unntaket brukes ikke i denne situasjonen.
        id: 'tjue-meter-holdeplass',
        title: 'Parkering ved bussholdeplass',
        shortTitle: 'Holdeplass',
        template: 'bus-stop',
        prompt: 'Du kjører mot høyre og vil parkere langs kanten.',
        spots: [
            { id: 'a', label: 'A', x: 335, y: 355 },
            { id: 'b', label: 'B', x: 685, y: 355 },
        ],
        correctSpots: ['b'],
        ruleLabel: '20 m fra holdeplasskiltet',
        explanation: 'Du kan ikke stanse eller parkere på holdeplassen eller nærmere enn 20 meter fra holdeplasskiltet. Plass A ligger inne i sonen. Plass B ligger utenfor den.',
    },
    {
        // Trafikkreglene § 17 nr. 1 bokstav f: stans (og dermed parkering) er forbudt nærmere
        // planovergang enn 5 meter. Regelen gjelder på begge sider av sporet.
        id: 'fem-meter-planovergang',
        title: 'Fem meter fra planovergang',
        shortTitle: 'Planovergang',
        template: 'level-crossing',
        prompt: 'Du kjører mot høyre og vil parkere langs kanten.',
        spots: [
            { id: 'a', label: 'A', x: 175, y: 355 },
            { id: 'b', label: 'B', x: 380, y: 355 },
            { id: 'c', label: 'C', x: 590, y: 355 },
            { id: 'd', label: 'D', x: 740, y: 355 },
        ],
        correctSpots: ['a', 'd'],
        ruleLabel: 'Minst 5 m fra planovergangen',
        explanation: 'Du kan ikke stanse eller parkere nærmere enn 5 meter fra en planovergang. Det gjelder på begge sider av sporet. Plass B og C ligger innenfor femmetersonen. Plass A og D ligger utenfor.',
    },
    {
        // Trafikkreglene § 17 nr. 1 bokstav g: stans (og dermed parkering) er forbudt i
        // kollektivfelt, sambruksfelt og sykkelfelt.
        id: 'sykkelfelt',
        title: 'Sykkelfelt langs kanten',
        shortTitle: 'Sykkelfelt',
        template: 'bike-lane',
        prompt: 'Du kjører mot høyre og vil parkere langs kanten.',
        spots: [
            { id: 'a', label: 'A', x: 345, y: 355 },
            { id: 'b', label: 'B', x: 650, y: 355 },
        ],
        correctSpots: ['b'],
        ruleLabel: 'Ikke stans i sykkelfelt',
        explanation: 'Du kan ikke stanse eller parkere i sykkelfelt. Plass A står inne i sykkelfeltet. Plass B ligger etter at sykkelfeltet er slutt.',
    },
    {
        // Skilt 372 Parkering forbudt (skiltforskriften). Forbudet gjelder fra skiltet og videre i
        // retningen pilen viser. Uten pil gjelder det i kjøreretningen til neste skilt eller veikryss.
        // Selve skiltet regulerer ikke stans. Se også § 1 nr. 1 bokstav k.
        id: 'parkering-forbudt-pil',
        title: 'Parkeringsforbud med pil',
        shortTitle: 'Forbudsskilt',
        template: 'sign-zone',
        prompt: 'Du kjører mot høyre og vil parkere langs kanten.',
        spots: [
            { id: 'a', label: 'A', x: 275, y: 355 },
            { id: 'b', label: 'B', x: 585, y: 355 },
        ],
        correctSpots: ['a'],
        ruleLabel: 'Forbudet starter ved skiltet',
        explanation: 'Plass A ligger før skiltet. Plass B ligger etter skiltet, i retningen pilen viser, og er derfor innenfor parkeringsforbudet.',
    },
    {
        // Skilt 372 Parkering forbudt (skiltforskriften) forbyr parkering, ikke stans.
        // Trafikkreglene § 1 nr. 1 bokstav k: kortest mulig stans for av- eller pålessing er ikke
        // parkering. Stansforbudet i § 17 nr. 1 bokstav d (nærmere enn 5 meter foran gangfelt) har
        // ikke noe unntak for lessing og gjelder fortsatt.
        // Oppgavedata fra teoritesten (oppgave 124): 58 % svarte feil på dette.
        id: 'parkering-forbudt-laste-ut',
        title: 'Parkering forbudt: laste ut',
        shortTitle: 'Laste ut',
        template: 'sign-unloading',
        prompt: 'Du kjører mot høyre og skal laste ut en tung kasse. Du kjører videre med en gang.',
        spots: [
            { id: 'a', label: 'A', x: 250, y: 355 },
            { id: 'b', label: 'B', x: 470, y: 355 },
            { id: 'c', label: 'C', x: 710, y: 355 },
        ],
        correctSpots: ['a', 'c'],
        ruleLabel: 'Parkering forbudt er ikke stans forbudt',
        explanation: 'Skiltet forbyr parkering. Kortest mulig stans for å laste ut regnes ikke som parkering, så du kan stanse ved A og C. Plass B ligger nærmere enn 5 meter foran gangfeltet. Der er all stans forbudt, også for å laste ut.',
    },
    {
        // Skilt 370 Stans forbudt (skiltforskriften). Totalforbud mot stans. Det finnes ikke noe
        // unntak for av- og pålessing eller av- og påstigning.
        // Trafikkreglene § 1 nr. 1 bokstav k gir unntaket fra parkering. Skiltet forbyr stans, ikke bare parkering.
        id: 'stans-forbudt',
        title: 'Stans forbudt: slippe av',
        shortTitle: 'Stans forbudt',
        template: 'stop-ban',
        prompt: 'Du kjører mot høyre og skal slippe av en passasjer. Du kjører videre med en gang.',
        spots: [
            { id: 'a', label: 'A', x: 175, y: 355 },
            { id: 'b', label: 'B', x: 480, y: 355 },
            { id: 'c', label: 'C', x: 670, y: 355 },
        ],
        correctSpots: ['a'],
        ruleLabel: 'Stans forbudt gjelder også avstigning',
        explanation: 'Skiltet «Stans forbudt» forbyr all stans fra skiltet og videre i kjøreretningen. Det gjelder også for å slippe av en passasjer. Bare plass A ligger før skiltet.',
    },
]

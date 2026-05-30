import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import confetti from 'canvas-confetti'
import './RoadMarkingGame.css'

interface Option {
    id: string
    text: string
    isCorrect: boolean
}

interface Scenario {
    id: number
    title: string
    question: string
    options: Option[]
    explanation: string
    svg: string
}

const SCENARIOS: Scenario[] = [
    {
        id: 1,
        title: "Hvit sperrelinje",
        question: "Hva betyr denne heltrukne hvite linjen mellom kjørefelt i samme retning?",
        options: [
            { id: 'a', text: "Sperrelinje — det er forbudt å skifte kjørefelt over denne linjen.", isCorrect: true },
            { id: 'b', text: "Kjørefeltlinje — kan krysses dersom du bruker blinklys først.", isCorrect: false },
            { id: 'c', text: "Varsellinje — advarer om at veien snart snevres inn.", isCorrect: false },
            { id: 'd', text: "Kantlinje — markerer den ytre kanten av asfalten.", isCorrect: false }
        ],
        explanation: "En heltrukken hvit linje mellom kjørefelt i samme kjøreretning er en sperrelinje. Det er ikke tillatt å krysse denne eller kjøre på den. Slike linjer brukes ofte inn mot veikryss eller i tunneler der feltskifte utgjør en sikkerhetsrisiko.",
        svg: `
            <svg viewBox="0 0 600 300" class="w-full h-full rounded-lg bg-[#3f6a3d]">
                <!-- Asfalt -->
                <rect x="0" y="40" width="600" height="220" fill="#2c3540" />
                <!-- Kjøreretningspiler i asfalten (samme retning) -->
                <path d="M 120 100 L 150 100 M 140 95 L 150 100 L 140 105" stroke="white" stroke-width="3" fill="none" />
                <path d="M 120 200 L 150 200 M 140 195 L 150 200 L 140 205" stroke="white" stroke-width="3" fill="none" />
                <path d="M 450 100 L 480 100 M 470 95 L 480 100 L 470 105" stroke="white" stroke-width="3" fill="none" />
                <path d="M 450 200 L 480 200 M 470 195 L 480 200 L 470 205" stroke="white" stroke-width="3" fill="none" />
                <!-- Hvit sperrelinje -->
                <line x1="0" y1="150" x2="600" y2="150" stroke="white" stroke-width="6" />
                <!-- Rød stiplet markeringsring -->
                <ellipse cx="300" cy="150" rx="180" ry="25" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="8 6" />
            </svg>
        `
    },
    {
        id: 2,
        title: "Gul varsellinje",
        question: "Hva betyr denne gule linjen i midten av veien?",
        options: [
            { id: 'a', text: "Forbikjøring forbudt — linjen må aldri krysses.", isCorrect: false },
            { id: 'b', text: "Sikten er for kort til vanlig forbikjøring. Linjen varsler om fare.", isCorrect: true },
            { id: 'c', text: "Vanlig midtlinje — du kan kjøre forbi som normalt om det er fri bane.", isCorrect: false },
            { id: 'd', text: "Sperreområde — veien deles permanent i to separate retninger.", isCorrect: false }
        ],
        explanation: "En gul varsellinje skiller motgående kjøreretninger og har lange streker med korte opphold (forholdet 3:1). Den varsler at sikten fremover er for kort til vanlig forbikjøring. Det er ikke et direkte forbud mot å krysse den, men en sterk advarsel.",
        svg: `
            <svg viewBox="0 0 600 300" class="w-full h-full rounded-lg bg-[#3f6a3d]">
                <!-- Asfalt -->
                <rect x="0" y="40" width="600" height="220" fill="#2c3540" />
                <!-- Kjøreretningspiler (motgående) -->
                <path d="M 120 100 L 150 100 M 140 95 L 150 100 L 140 105" stroke="white" stroke-width="3" fill="none" />
                <path d="M 480 200 L 450 200 M 460 195 L 450 200 L 460 205" stroke="white" stroke-width="3" fill="none" />
                <!-- Kantlinjer -->
                <line x1="0" y1="45" x2="600" y2="45" stroke="white" stroke-width="3" />
                <line x1="0" y1="255" x2="600" y2="255" stroke="white" stroke-width="3" />
                <!-- Gul varsellinje -->
                <line x1="0" y1="150" x2="600" y2="150" stroke="#facc15" stroke-width="5" stroke-dasharray="45 15" />
                <!-- Markeringsring -->
                <ellipse cx="300" cy="150" rx="160" ry="25" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="8 6" />
            </svg>
        `
    },
    {
        id: 3,
        title: "Kombinert linje",
        question: "Du kjører bilen merket 'DU'. Hvilke regler gjelder for deg angående å krysse midtlinjen?",
        options: [
            { id: 'a', text: "Du kan krysse linjen (f.eks. for forbikjøring) fordi den stiplede linjen er på din side.", isCorrect: true },
            { id: 'b', text: "Du må forholde deg til den heltrukne linjen og har kjøreforbud over den.", isCorrect: false },
            { id: 'c', text: "Begge sider har forbud mot å krysse linjen uansett situasjon.", isCorrect: false },
            { id: 'd', text: "Kombinerte linjer gjelder kun for svinging i kryss, ikke forbikjøring.", isCorrect: false }
        ],
        explanation: "Ved kombinert linje skal du alltid forholde deg til den linjen som ligger nærmest ditt eget kjørefelt. Siden den stiplede varsellinjen ligger på din side, har du lov til å krysse den dersom veien videre er klar og det kan skje sikkert.",
        svg: `
            <svg viewBox="0 0 600 300" class="w-full h-full rounded-lg bg-[#3f6a3d]">
                <!-- Asfalt -->
                <rect x="0" y="40" width="600" height="220" fill="#2c3540" />
                <!-- Motgående pil øverst -->
                <path d="M 480 95 L 450 95 M 460 90 L 450 95 L 460 100" stroke="white" stroke-width="3" fill="none" />
                <!-- Eget felt pil nederst -->
                <path d="M 120 205 L 150 205 M 140 200 L 150 205 L 140 210" stroke="white" stroke-width="3" fill="none" />
                <!-- Kantlinjer -->
                <line x1="0" y1="45" x2="600" y2="45" stroke="white" stroke-width="3" />
                <line x1="0" y1="255" x2="600" y2="255" stroke="white" stroke-width="3" />
                <!-- Kombinert linje -->
                <line x1="0" y1="146" x2="600" y2="146" stroke="#facc15" stroke-width="4" />
                <line x1="0" y1="154" x2="600" y2="154" stroke="#facc15" stroke-width="4" stroke-dasharray="15 15" />
                <!-- Bil i eget felt -->
                <rect x="200" y="180" width="70" height="40" rx="5" fill="#3b82f6" stroke="white" stroke-width="2" />
                <text x="235" y="205" fill="white" font-size="14" font-weight="bold" text-anchor="middle">DU</text>
                <!-- Markeringsring -->
                <ellipse cx="320" cy="150" rx="140" ry="20" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="8 6" />
            </svg>
        `
    },
    {
        id: 4,
        title: "Vikelinje (Haitenner)",
        question: "Hva forteller disse hvite trekantene ('haitennene') deg når du nærmer deg krysset?",
        options: [
            { id: 'a', text: "At du har forkjørsrett og kryssende trafikk må vike for deg.", isCorrect: false },
            { id: 'b', text: "At du må stoppe helt opp uansett om det kommer biler eller ikke.", isCorrect: false },
            { id: 'c', text: "At du har vikeplikt for kryssende trafikk på den tverrgående veien.", isCorrect: true },
            { id: 'd', text: "At veien videre er enveiskjørt mot høyre.", isCorrect: false }
        ],
        explanation: "Hvite trekanter på tvers av kjørefeltet kalles en vikelinje (ofte kalt 'haitenner'). De markerer stedet hvor du må stanse for å overholde vikeplikten dersom det kommer kryssende trafikk. Du trenger ikke å stanse helt om det er fri bane.",
        svg: `
            <svg viewBox="0 0 600 300" class="w-full h-full rounded-lg bg-[#3f6a3d]">
                <!-- Horisontal hovedvei -->
                <rect x="0" y="0" width="600" height="120" fill="#2c3540" />
                <!-- Vertikal tilførselsvei -->
                <rect x="200" y="120" width="200" height="180" fill="#2c3540" />
                <!-- Sidelinjer i krysset -->
                <line x1="0" y1="120" x2="200" y2="120" stroke="white" stroke-width="4" />
                <line x1="400" y1="120" x2="600" y2="120" stroke="white" stroke-width="4" />
                <line x1="200" y1="120" x2="200" y2="300" stroke="white" stroke-width="4" />
                <line x1="400" y1="120" x2="400" y2="300" stroke="white" stroke-width="4" />
                <!-- Midtlinje på sideveien -->
                <line x1="300" y1="160" x2="300" y2="300" stroke="#facc15" stroke-width="4" stroke-dasharray="10 10" />
                <!-- Bil -->
                <rect x="215" y="210" width="70" height="45" rx="5" fill="#3b82f6" stroke="white" stroke-width="2" />
                <text x="250" y="238" fill="white" font-size="13" font-weight="bold" text-anchor="middle">DU</text>
                <!-- Vikelinje -->
                <g fill="white">
                    <polygon points="210,123 230,123 220,138" />
                    <polygon points="240,123 260,123 250,138" />
                    <polygon points="270,123 290,123 280,138" />
                </g>
                <!-- Markeringsring -->
                <ellipse cx="250" cy="130" rx="60" ry="22" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="6 4" />
            </svg>
        `
    },
    {
        id: 5,
        title: "Sperreområde",
        question: "Hvilke regler gjelder for det skraverte området i midten (sperreområdet)?",
        options: [
            { id: 'a', text: "Det er forbudt å kjøre, sykle eller parkere på eller over sperreområdet.", isCorrect: true },
            { id: 'b', text: "Området kan brukes som midlertidig stopp- eller svingefelt ved kø.", isCorrect: false },
            { id: 'c', text: "Sperreområdet gjelder kun for tungtransport og lastebiler.", isCorrect: false },
            { id: 'd', text: "Du kan kjøre over området dersom du skal svinge av til høyre senere.", isCorrect: false }
        ],
        explanation: "Et sperreområde er markert med diagonale hvite eller gule striper innenfor en heltrukken begrensningslinje. Det skal lede trafikken sikkert unna hindringer. Det er strengt forbudt å kjøre eller plassere kjøretøyet innenfor dette området.",
        svg: `
            <svg viewBox="0 0 600 300" class="w-full h-full rounded-lg bg-[#3f6a3d]">
                <defs>
                    <pattern id="diagonal-stripes" width="15" height="15" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                        <line x1="0" y1="0" x2="0" y2="15" stroke="white" stroke-width="4" />
                    </pattern>
                </defs>
                <!-- Veibane som utvider seg naturlig (Polygon) -->
                <polygon points="0,80 220,80 600,40 600,260 220,220 0,220" fill="#2c3540" />
                
                <!-- Kantlinjer som følger utvidingen -->
                <path d="M 0 80 L 220 80 L 600 40" stroke="white" stroke-width="4" fill="none" />
                <path d="M 0 220 L 220 220 L 600 260" stroke="white" stroke-width="4" fill="none" />
                
                <!-- Kjørefeltlinje før splitten -->
                <line x1="0" y1="150" x2="220" y2="150" stroke="white" stroke-width="4" stroke-dasharray="8 16" />
                
                <!-- Sperreområde fylt med stripemønsteret -->
                <polygon points="220,150 600,115 600,185" fill="url(#diagonal-stripes)" stroke="white" stroke-width="4" />
                
                <!-- Kjørepil øvre felt -->
                <path d="M 320 100 L 440 82" stroke="white" stroke-width="3" fill="none" />
                <path d="M 430 77 L 440 82 L 432 89" stroke="white" stroke-width="3" fill="none" />
                
                <!-- Kjørepil nedre felt -->
                <path d="M 320 200 L 440 218" stroke="white" stroke-width="3" fill="none" />
                <path d="M 432 211 L 440 218 L 430 223" stroke="white" stroke-width="3" fill="none" />
                
                <!-- Egen bil -->
                <rect x="50" y="162" width="65" height="38" rx="5" fill="#3b82f6" stroke="white" stroke-width="2" />
                <text x="82" y="186" fill="white" font-size="13" font-weight="bold" text-anchor="middle">DU</text>
                
                <!-- Rød markeringsring -->
                <ellipse cx="410" cy="150" rx="160" ry="55" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="8 6" />
            </svg>
        `
    },
    {
        id: 6,
        title: "Stopplinje",
        question: "Hva kreves av deg når du møter denne heltrukne, brede tverrlinjen (stopplinjen)?",
        options: [
            { id: 'a', text: "Du må stoppe helt opp (hjulene i ro) før du passerer linjen.", isCorrect: true },
            { id: 'b', text: "Det er en vikelinje, du må kun stoppe dersom det kommer biler.", isCorrect: false },
            { id: 'c', text: "Du må redusere farten til under 20 km/t, men trenger ikke stoppe helt.", isCorrect: false },
            { id: 'd', text: "Linjen viser hvor du har vikeplikt fra høyre.", isCorrect: false }
        ],
        explanation: "En stopplinje er en bred, heltrukken tverrlinje som brukes sammen med stoppskilt eller trafikklys. Her har du en absolutt plikt til å stoppe helt opp (alle hjul må stå i ro) før linjen, selv om det ikke er noen andre biler i sikte.",
        svg: `
            <svg viewBox="0 0 600 300" class="w-full h-full rounded-lg bg-[#3f6a3d]">
                <!-- Veier i krysset -->
                <rect x="0" y="0" width="600" height="120" fill="#2c3540" />
                <rect x="200" y="120" width="200" height="180" fill="#2c3540" />
                <line x1="0" y1="120" x2="200" y2="120" stroke="white" stroke-width="4" />
                <line x1="400" y1="120" x2="600" y2="120" stroke="white" stroke-width="4" />
                <line x1="200" y1="120" x2="200" y2="300" stroke="white" stroke-width="4" />
                <line x1="400" y1="120" x2="400" y2="300" stroke="white" stroke-width="4" />
                <!-- Delelinje -->
                <line x1="300" y1="160" x2="300" y2="300" stroke="#facc15" stroke-width="4" stroke-dasharray="10 10" />
                <!-- Egen bil -->
                <rect x="215" y="210" width="70" height="45" rx="5" fill="#3b82f6" stroke="white" stroke-width="2" />
                <text x="250" y="238" fill="white" font-size="13" font-weight="bold" text-anchor="middle">DU</text>
                <!-- Stoppskilt-ikon -->
                <g transform="translate(340, 150)">
                    <polygon points="10,0 25,0 35,10 35,25 25,35 10,35 0,25 0,10" fill="#ef4444" stroke="white" stroke-width="1.5" />
                    <text x="17.5" y="21" fill="white" font-size="8" font-weight="bold" text-anchor="middle">STOP</text>
                </g>
                <!-- Stopplinje (bred tverrlinje) -->
                <line x1="200" y1="125" x2="300" y2="125" stroke="white" stroke-width="12" />
                <!-- Rød markeringsring -->
                <ellipse cx="250" cy="125" rx="60" ry="18" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="6 4" />
            </svg>
        `
    },
    {
        id: 7,
        title: "Skillelinje",
        question: "Hva markerer denne brede, stiplede hvite linjen (skillelinjen)?",
        options: [
            { id: 'a', text: "At feltet til høyre er et kollektivfelt eller sykkelfelt.", isCorrect: true },
            { id: 'b', text: "At det er en vanlig kjørefeltlinje der du fritt kan bytte felt for å kjøre forbi.", isCorrect: false },
            { id: 'c', text: "At veien snevres inn til ett felt om kort tid.", isCorrect: false },
            { id: 'd', text: "At du har vikeplikt for biler som kommer fra høyre.", isCorrect: false }
        ],
        explanation: "En skillelinje er betydelig bredere enn en vanlig kjørefeltlinje. Den markerer grensen mot et kjørefelt for spesielle trafikantgrupper, som et kollektivfelt (buss/taxi) eller sykkelfelt. Du har som hovedregel ikke lov til å kjøre i kollektivfeltet med vanlig personbil.",
        svg: `
            <svg viewBox="0 0 600 300" class="w-full h-full rounded-lg bg-[#3f6a3d]">
                <!-- Asfalt -->
                <rect x="0" y="40" width="600" height="220" fill="#2c3540" />
                <line x1="0" y1="45" x2="600" y2="45" stroke="white" stroke-width="3" />
                <line x1="0" y1="255" x2="600" y2="255" stroke="white" stroke-width="3" />
                <!-- Bred skillelinje -->
                <line x1="0" y1="150" x2="600" y2="150" stroke="white" stroke-width="10" stroke-dasharray="15 20" />
                <!-- Buss-tekst i asfalten -->
                <text x="300" y="215" fill="white" font-size="28" font-weight="900" letter-spacing="4" text-anchor="middle" opacity="0.8">BUSS</text>
                <!-- Pilmerking -->
                <path d="M 100 95 L 130 95 M 120 90 L 130 95 L 120 100" stroke="white" stroke-width="3" fill="none" />
                <!-- Egen bil -->
                <rect x="50" y="75" width="65" height="38" rx="5" fill="#3b82f6" stroke="white" stroke-width="2" />
                <text x="82" y="99" fill="white" font-size="13" font-weight="bold" text-anchor="middle">DU</text>
                <!-- Rød markeringsring -->
                <ellipse cx="300" cy="150" rx="180" ry="20" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="8 6" />
            </svg>
        `
    },
    {
        id: 8,
        title: "Gul sperrelinje",
        question: "Hva betyr denne heltrukne gule linjen i midten (gul sperrelinje)?",
        options: [
            { id: 'a', text: "Den skiller motgående kjøreretninger, og det er forbudt å krysse den.", isCorrect: true },
            { id: 'b', text: "Den skiller kjørefelt i samme retning der det er svingeforbud.", isCorrect: false },
            { id: 'c', text: "Den tillater forbikjøring så lenge du har fri sikt fremover.", isCorrect: false },
            { id: 'd', text: "Den markerer at det er en enveiskjørt gate.", isCorrect: false }
        ],
        explanation: "Heltrukken gul linje kalles en gul sperrelinje og skiller motgående kjøreretninger. Det er strengt forbudt å krysse denne linjen, eller kjøre til venstre for den, uansett om du har god sikt eller ikke. (Hvite sperrelinjer brukes til å skille felt i samme retning).",
        svg: `
            <svg viewBox="0 0 600 300" class="w-full h-full rounded-lg bg-[#3f6a3d]">
                <!-- Asfalt -->
                <rect x="0" y="40" width="600" height="220" fill="#2c3540" />
                <!-- Motgående piler -->
                <path d="M 480 95 L 450 95 M 460 90 L 450 95 L 460 100" stroke="white" stroke-width="3" fill="none" />
                <path d="M 120 205 L 150 205 M 140 200 L 150 205 L 140 210" stroke="white" stroke-width="3" fill="none" />
                <!-- Kantlinjer -->
                <line x1="0" y1="45" x2="600" y2="45" stroke="white" stroke-width="3" />
                <line x1="0" y1="255" x2="600" y2="255" stroke="white" stroke-width="3" />
                <!-- Gul sperrelinje -->
                <line x1="0" y1="150" x2="600" y2="150" stroke="#facc15" stroke-width="8" />
                <!-- Egen bil -->
                <rect x="200" y="180" width="70" height="40" rx="5" fill="#3b82f6" stroke="white" stroke-width="2" />
                <text x="235" y="205" fill="white" font-size="14" font-weight="bold" text-anchor="middle">DU</text>
                <!-- Markeringsring -->
                <ellipse cx="320" cy="150" rx="140" ry="25" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="8 6" />
            </svg>
        `
    },
    {
        id: 9,
        title: "Gul kantlinje",
        question: "Hva betyr denne heltrukne gule linjen langs fortauskanten?",
        options: [
            { id: 'a', text: "Stansforbud — det er forbudt å stanse eller parkere langs denne linjen.", isCorrect: true },
            { id: 'b', text: "Parkeringsforbud — du kan stanse kort for av- og påstigning, men ikke parkere.", isCorrect: false },
            { id: 'c', text: "At det kun er tillatt å parkere her i helgene.", isCorrect: false },
            { id: 'd', text: "Linjen markerer vikeplikt for fotgjengere.", isCorrect: false }
        ],
        explanation: "En heltrukken gul linje på kantstein eller langs veikanten betyr stansforbud (og dermed også parkeringsforbud). Her har du ikke lov til å stanse i det hele tatt – ikke en gang for en rask av- og påstigning. (Stiplet gul linje betyr kun parkeringsforbud).",
        svg: `
            <svg viewBox="0 0 600 300" class="w-full h-full rounded-lg bg-[#3f6a3d]">
                <!-- Asfalt -->
                <rect x="0" y="40" width="600" height="200" fill="#2c3540" />
                <line x1="0" y1="45" x2="600" y2="45" stroke="white" stroke-width="3" />
                <!-- Fortau nederst -->
                <rect x="0" y="240" width="600" height="60" fill="#94a3b8" />
                <line x1="0" y1="240" x2="600" y2="240" stroke="#475569" stroke-width="3" />
                <!-- Gul heltrukken kantlinje -->
                <line x1="0" y1="237" x2="600" y2="237" stroke="#facc15" stroke-width="6" />
                <!-- Egen bil -->
                <rect x="250" y="185" width="70" height="40" rx="5" fill="#3b82f6" stroke="white" stroke-width="2" />
                <text x="285" y="210" fill="white" font-size="14" font-weight="bold" text-anchor="middle">DU</text>
                <!-- Pil kjøreretning -->
                <path d="M 100 120 L 130 120 M 120 115 L 130 120 L 120 125" stroke="white" stroke-width="3" fill="none" />
                <!-- Markeringsring -->
                <ellipse cx="285" cy="237" rx="110" ry="20" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="8 6" />
            </svg>
        `
    },
    {
        id: 10,
        title: "Pilmerking med sperrelinje",
        question: "Du ligger i det høyre feltet, og det er en hvit sperrelinje på din venstre side. Hva må du gjøre?",
        options: [
            { id: 'a', text: "Du har påbud om å svinge til høyre. Du kan ikke lenger skifte felt eller kjøre rett frem.", isCorrect: true },
            { id: 'b', text: "Pilen er kun en anbefaling; du kan kjøre rett frem om du er forsiktig.", isCorrect: false },
            { id: 'c', text: "Du kan krysse sperrelinjen for å skifte felt om du bruker blinklys.", isCorrect: false },
            { id: 'd', text: "Du må stoppe helt opp før du svinger til høyre.", isCorrect: false }
        ],
        explanation: "Kjørefeltpiler (skilt 1034) angir hvilke kjøreretninger som er tillatt i feltet. Det er forbudt å kjøre i strid med pilene. Siden det er en heltrukken sperrelinje på din venstre side, kan du heller ikke skifte felt, og du må derfor følge pilens retning og svinge til høyre.",
        svg: `
            <svg viewBox="0 0 600 300" class="w-full h-full rounded-lg bg-[#3f6a3d]">
                <!-- Veibane som utvider seg diagonalt og deretter snevres inn til kun ETT felt etter svingen -->
                <polygon points="0,40 600,40 600,150 520,150 520,300 420,300 420,255 0,255" fill="#2c3540" />
                
                <!-- Kantlinjer som markerer innsnevring og kryss-geometri -->
                <path d="M 0 45 L 600 45" stroke="white" stroke-width="3" fill="none" />
                <path d="M 0 255 L 420 255 L 420 300" stroke="white" stroke-width="3" fill="none" />
                <path d="M 520 150 L 520 300" stroke="white" stroke-width="4" fill="none" />
                
                <!-- Heltrukken hvit sperrelinje (Løper uavbrutt helt ut til høyre) -->
                <line x1="0" y1="150" x2="600" y2="150" stroke="white" stroke-width="6" />
                
                <!-- Pil rett frem i venstre felt -->
                <path d="M 320 100 L 350 100 M 340 95 L 350 100 L 340 105" stroke="white" stroke-width="3" fill="none" />
                
                <!-- Sving til høyre pil som leder ned på sideveien -->
                <path d="M 220 200 L 410 200 Q 470 200 470 230 L 470 270" stroke="white" stroke-width="4.5" fill="none" />
                <path d="M 463 260 L 470 270 L 477 260" stroke="white" stroke-width="4.5" fill="none" />
                
                <!-- Egen bil -->
                <rect x="110" y="180" width="70" height="40" rx="5" fill="#3b82f6" stroke="white" stroke-width="2" />
                <text x="145" y="205" fill="white" font-size="14" font-weight="bold" text-anchor="middle">DU</text>
                
                <!-- Rød markeringsring rundt pilen og avkjøringen -->
                <ellipse cx="360" cy="210" rx="130" ry="55" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="8 6" />
            </svg>
        `
    },
    {
        id: 11,
        title: "Midlertidig veimerking",
        question: "Det pågår veiarbeid, og det er malt både gule og delvis slitte hvite linjer på asfalten. Hvilke skal du følge?",
        options: [
            { id: 'a', text: "Du må følge de gule linjene. Midlertidig gul oppmerking overstyrer den hvite.", isCorrect: true },
            { id: 'b', text: "Du skal følge de hvite linjene, da permanent oppmerking alltid gjelder først.", isCorrect: false },
            { id: 'c', text: "Du kan velge fritt basert på hvilket kjørefelt som er tomt.", isCorrect: false },
            { id: 'd', text: "De gule linjene gjelder kun for anleggsmaskiner under 7,5 tonn.", isCorrect: false }
        ],
        explanation: "Under veiarbeid brukes det ofte midlertidig gul vegoppmerking for å lede trafikken i nye, midlertidige traséer. Regelen er krystallklar: Gul midlertidig oppmerking overstyrer alltid den ordinære hvite oppmerkingen.",
        svg: `
            <svg viewBox="0 0 600 300" class="w-full h-full rounded-lg bg-[#3f6a3d]">
                <!-- Asfalt -->
                <rect x="0" y="40" width="600" height="220" fill="#2c3540" />
                
                <!-- Ordinære, hvite kantlinjer (rette og parallelle med veien) -->
                <line x1="0" y1="45" x2="600" y2="45" stroke="white" stroke-width="3" />
                <line x1="0" y1="255" x2="600" y2="255" stroke="white" stroke-width="3" />
                
                <!-- Slitt hvit delelinje (lav opasitet) som fortsetter rett frem -->
                <line x1="0" y1="150" x2="600" y2="150" stroke="white" stroke-width="4" stroke-dasharray="10 15" opacity="0.25" />
                
                <!-- Midlertidig gul delelinje som svinger unna veiarbeidet i midten -->
                <path d="M 0 150 Q 300 80 600 150" stroke="#facc15" stroke-width="6" fill="none" stroke-dasharray="15 15" />
                
                <!-- Kjegler som sperrer av det opprinnelige feltet -->
                <g transform="translate(280, 160)">
                    <polygon points="10,30 20,30 15,0" fill="#f97316" />
                    <rect x="12" y="10" width="6" height="8" fill="white" />
                </g>
                <g transform="translate(320, 170)">
                    <polygon points="10,30 20,30 15,0" fill="#f97316" />
                    <rect x="12" y="10" width="6" height="8" fill="white" />
                </g>

                <!-- Egen bil som følger den gule svingen -->
                <g transform="translate(110, 150) rotate(-10)">
                    <rect x="0" y="0" width="65" height="38" rx="5" fill="#3b82f6" stroke="white" stroke-width="2" />
                    <text x="32.5" y="24" fill="white" font-size="13" font-weight="bold" text-anchor="middle">DU</text>
                </g>
                
                <!-- Rød markeringsring rundt kjeglene og den gule linjen -->
                <ellipse cx="300" cy="150" rx="140" ry="45" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="8 6" />
            </svg>
        `
    },
    {
        id: 12,
        title: "Gangfelt (Sebrastriper)",
        question: "Du nærmer deg dette gangfeltet (sebrastripene). Hva er din viktigste plikt som bilfører?",
        options: [
            { id: 'a', text: "Du har vikeplikt for fotgjengere som befinner seg i, eller er på vei ut i, gangfeltet.", isCorrect: true },
            { id: 'b', text: "Du har vikeplikt for syklister som sykler hurtig over gangfeltet.", isCorrect: false },
            { id: 'c', text: "Du har kun vikeplikt dersom det er dårlig sikt eller mørkt.", isCorrect: false },
            { id: 'd', text: "Du må stoppe helt opp og stå i ro i 3 sekunder, uansett om det er folk der eller ikke.", isCorrect: false }
        ],
        explanation: "Sebrastriper i veibanen markerer et godkjent gangfelt. Som bilfører har du en streng og absolutt vikeplikt for fotgjengere som er i gangfeltet, eller som viser tydelig tegn på at de er på vei ut i det. Du må tilpasse farten i god tid.",
        svg: `
            <svg viewBox="0 0 600 300" class="w-full h-full rounded-lg bg-[#3f6a3d]">
                <!-- Asfalt -->
                <rect x="0" y="40" width="600" height="220" fill="#2c3540" />
                <line x1="0" y1="45" x2="600" y2="45" stroke="white" stroke-width="3" />
                <line x1="0" y1="255" x2="600" y2="255" stroke="white" stroke-width="3" />
                <line x1="0" y1="150" x2="600" y2="150" stroke="white" stroke-width="4" stroke-dasharray="15 15" />
                
                <!-- Sebrastriper (Rektanglene ligger parallelt med kjøreretningen) -->
                <g fill="white" opacity="0.95">
                    <rect x="300" y="55" width="80" height="20" />
                    <rect x="300" y="85" width="80" height="20" />
                    <rect x="300" y="115" width="80" height="20" />
                    <rect x="300" y="145" width="80" height="20" />
                    <rect x="300" y="175" width="80" height="20" />
                    <rect x="300" y="205" width="80" height="20" />
                    <rect x="300" y="235" width="80" height="20" />
                </g>

                <!-- Egen bil på vei mot gangfeltet -->
                <rect x="100" y="175" width="70" height="40" rx="5" fill="#3b82f6" stroke="white" stroke-width="2" />
                <text x="135" y="200" fill="white" font-size="14" font-weight="bold" text-anchor="middle">DU</text>
                
                <!-- Rød markeringsring -->
                <ellipse cx="340" cy="150" rx="70" ry="110" fill="none" stroke="#ef4444" stroke-width="3" stroke-dasharray="8 6" />
            </svg>
        `
    }
];

export default function RoadMarkingGame() {
    const [currentRound, setCurrentRound] = useState(0)
    const [score, setScore] = useState(0)
    const [streak, setStreak] = useState(0)
    const [hasAnswered, setHasAnswered] = useState(false)
    const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null)
    const [showResults, setShowResults] = useState(false)

    const scenario = SCENARIOS[currentRound]

    // Confetti effect on completion
    useEffect(() => {
        if (showResults && score >= 70) {
            const duration = 2000
            const end = Date.now() + duration

            const frame = () => {
                confetti({
                    particleCount: 4,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0, y: 0.85 },
                    colors: ['#2dd4bf', '#3b82f6', '#10b981']
                })
                confetti({
                    particleCount: 4,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1, y: 0.85 },
                    colors: ['#2dd4bf', '#3b82f6', '#10b981']
                })

                if (Date.now() < end) {
                    requestAnimationFrame(frame)
                }
            }
            frame()
        }
    }, [showResults, score])

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
                return
            }

            if (!showResults) {
                if (!hasAnswered) {
                    // Option selection (1-4)
                    const key = e.key
                    if (['1', '2', '3', '4'].includes(key)) {
                        const index = parseInt(key) - 1
                        const option = scenario.options[index]
                        if (option) {
                            handleSelectOption(option.id, option.isCorrect)
                        }
                    } else if (['a', 'b', 'c', 'd'].includes(key.toLowerCase())) {
                        const optionId = key.toLowerCase()
                        const option = scenario.options.find(o => o.id === optionId)
                        if (option) {
                            handleSelectOption(option.id, option.isCorrect)
                        }
                    }
                } else {
                    // Next round (Enter, Space, or N)
                    if (e.key === 'Enter' || e.key === ' ' || e.key.toLowerCase() === 'n') {
                        e.preventDefault() // Prevent scrolling for spacebar
                        handleNextRound()
                    }
                }
            } else {
                // Restart game (R)
                if (e.key.toLowerCase() === 'r') {
                    handleRestartGame()
                }
            }
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [currentRound, hasAnswered, showResults, scenario, score, streak])

    const handleSelectOption = (optionId: string, isCorrect: boolean) => {
        if (hasAnswered) return
        setSelectedOptionId(optionId)
        setHasAnswered(true)

        if (isCorrect) {
            setScore(prev => prev + 10 + (streak * 2))
            setStreak(prev => prev + 1)
        } else {
            setStreak(0)
        }
    }

    const handleNextRound = () => {
        setSelectedOptionId(null)
        setHasAnswered(false)

        if (currentRound < SCENARIOS.length - 1) {
            setCurrentRound(prev => prev + 1)
        } else {
            setShowResults(true)
        }
    }

    const handleRestartGame = () => {
        setCurrentRound(0)
        setScore(0)
        setStreak(0)
        setHasAnswered(false)
        setSelectedOptionId(null)
        setShowResults(false)
    }

    const renderResults = () => {
        let textResult = ""
        if (score >= 120) {
            textResult = "Utmerket! Du har fullstendig kontroll på all viktig veimerking og er klar for teoriprøven Klasse B."
        } else if (score >= 70) {
            textResult = "Godt bestått! Du har god grunnforståelse, men pass på de små nyansene rundt kollektivfelt og gule kantlinjer."
        } else {
            textResult = "Her er det rom for forbedring. Vegoppmerking kan virke lett, men har mange nyanser. Gå gjennom artiklene og prøv igjen!"
        }

        return (
            <div className="quiz-results-card" key="results">
                <span className="results-trophy" aria-hidden="true">🏆</span>
                <h2 className="quiz-card-title" style={{ fontSize: '1.75rem', marginBottom: 'var(--spacing-sm)' }}>
                    Spillet er fullført!
                </h2>
                <p className="results-score-info">
                    Du oppnådde totalt <strong>{score} poeng</strong>.
                </p>
                
                <div className="results-assessment">
                    <h3 className="results-assessment-title">Resultatvurdering</h3>
                    <p className="results-assessment-text">{textResult}</p>
                </div>

                <button onClick={handleRestartGame} className="results-restart-btn">
                    <span>Spill på nytt</span>
                    <kbd className="keyboard-hint" style={{ background: 'rgba(255, 255, 255, 0.2)', border: 'none', color: '#ffffff', boxShadow: 'none' }}>R</kbd>
                </button>
            </div>
        )
    }

    const progressPercent = ((currentRound + 1) / SCENARIOS.length) * 100

    return (
        <div className="road-marking-game">
            <Helmet>
                <title>Lær veimerking: Interaktivt spill til teoriprøven | Teori-test.no</title>
                <meta name="description" content="Test din kunnskap om sperrelinjer, haitenner, sperreområder og veimerking med vårt interaktive læringsspill for klasse B." />
            </Helmet>

            <nav aria-label="Brødsmulesti">
                <Link to="/laeringsspill">Læringsspill</Link>
                <span style={{ color: 'var(--color-text-light)', margin: '0 8px' }}>/</span>
                <span style={{ color: 'var(--color-text-light)' }}>Veimerking-spillet</span>
            </nav>

            <div className="quiz-card-container">
                {showResults ? (
                    renderResults()
                ) : (
                    <>
                        {/* Header */}
                        <div className="quiz-card-header">
                            <div className="quiz-card-meta">
                                <span className="quiz-card-kicker">
                                    🚙 Kan du lese veimerkingen?
                                </span>
                                <span className="quiz-card-score">
                                    Poeng: {score}
                                </span>
                            </div>
                            <h1 className="quiz-card-title">Runde {currentRound + 1} av {SCENARIOS.length}</h1>
                            
                            <div className="quiz-progress-bar-bg">
                                <div className="quiz-progress-bar-fill" style={{ width: `${progressPercent}%` }} />
                            </div>
                        </div>

                        {/* Body */}
                        <div className="quiz-card-body" key={currentRound}>
                            {/* Inline Visual SVG */}
                            <div 
                                className="quiz-visual-wrapper" 
                                dangerouslySetInnerHTML={{ __html: scenario.svg }} 
                            />

                            {/* Question */}
                            <p className="quiz-question-text">{scenario.question}</p>

                            {/* Options */}
                            <div className="quiz-options-list">
                                {scenario.options.map((option, idx) => {
                                    let btnClass = "quiz-option-btn"
                                    if (hasAnswered) {
                                        if (option.isCorrect) {
                                            btnClass += " correct-option"
                                        } else if (selectedOptionId === option.id) {
                                            btnClass += " incorrect-option"
                                        }
                                    }

                                    return (
                                        <button
                                            key={option.id}
                                            disabled={hasAnswered}
                                            onClick={() => handleSelectOption(option.id, option.isCorrect)}
                                            className={btnClass}
                                            aria-label={`Svaralternativ ${option.id.toUpperCase()}: ${option.text}`}
                                        >
                                            <span className="option-badge-text-group">
                                                <span className="option-badge">{option.id.toUpperCase()}</span>
                                                <span className="option-text">{option.text}</span>
                                            </span>
                                            <kbd className="keyboard-hint">{idx + 1}</kbd>
                                        </button>
                                    )
                                })}
                            </div>

                            {/* Feedback panel */}
                            {hasAnswered && selectedOptionId && (
                                <div className="quiz-feedback-panel">
                                    <div className="quiz-feedback-status">
                                        {scenario.options.find(o => o.id === selectedOptionId)?.isCorrect ? (
                                            <span className="status-correct">✔ Riktig svar!</span>
                                        ) : (
                                            <span className="status-incorrect">❌ Feil svar.</span>
                                        )}
                                        {streak > 1 && (
                                            <span className="streak-badge">
                                                🔥 Streak x{streak}!
                                            </span>
                                        )}
                                    </div>
                                    <p className="quiz-feedback-text">{scenario.explanation}</p>
                                    
                                    <button onClick={handleNextRound} className="quiz-next-btn">
                                        <span>
                                            {currentRound < SCENARIOS.length - 1 ? "Neste runde" : "Se resultat"}
                                        </span>
                                        <kbd className="keyboard-hint" style={{ background: 'rgba(255, 255, 255, 0.2)', border: 'none', color: '#ffffff', boxShadow: 'none' }}>Enter</kbd>
                                    </button>
                                </div>
                            )}
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

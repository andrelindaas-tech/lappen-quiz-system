import type { TheoryTopic } from './theoryData'

// Øvelseskjøring klasse B. Fagkontrollert mot vegtrafikkloven § 24 a og § 26,
// trafikkopplæringsforskriften § 2-1 og § 3-1 og Statens vegvesen (25.10.2026).
export const ovingskjoringTopic: TheoryTopic = {
    id: 'ovingskjoring',
    title: 'Øvelseskjøring klasse B: regler, ledsager og sjekkliste',
    icon: '🚗',
    shortDescription: 'Alt om øvelseskjøring klasse B: alder, trafikalt grunnkurs, mørkekjøring, ledsager, L-skilt, ekstra speil, ansvar, passasjerer og henger. Med sjekkliste og øvingsplan.',
    color: 'var(--apple-green)',
    seoTitle: 'Øvelseskjøring klasse B: regler, ledsager og sjekkliste',
    seoDescription: 'Kan dere øvelseskjøre i dag? Se kravene til elev, ledsager og bil, regler for passasjerer, henger og mørkekjøring, og en øvingsplan i fem trinn.',
    author: 'Teori-test.no-redaksjonen',
    reviewedAgainst: 'Vegtrafikkloven § 24 a og § 26, trafikkopplæringsforskriften § 2-1 og § 3-1 og Statens vegvesens sider om øvelseskjøring (kontrollert 25.10.2026)',
    publishedDate: '2026-10-25',
    lastUpdated: '2026-10-25',
    sections: [
        {
            title: 'Kort svar',
            type: 'info',
            content: `For å øvelseskjøre med personbil må dette være på plass:

- **Eleven** er fylt 16 år. Er du under 25, må du ha fullført trafikalt grunnkurs.
- **Mellom 1. november og 15. mars** må eleven også ha fullført Trafikant i mørket (mørkekjøring).
- **Ledsageren** er fylt 25 år og har hatt førerkort klasse B uten avbrudd de siste fem årene.
- **Bilen** har rød L på hvit bunn bak, ekstra speil til ledsageren og tillatt totalvekt på høyst 3500 kg.
- **Med i bilen:** legitimasjon og bevis for trafikalt grunnkurs (øvelseskjøringsbevis).

Under øvelseskjøringen regnes ledsageren som fører av bilen.`
        },
        {
            title: 'Kan dere øvelseskjøre nå?',
            type: 'component',
            component: 'OvelseskjoringSjekk',
            content: 'Svar på noen spørsmål, så ser du om alt er på plass før dere kjører. Ingenting lagres.'
        },
        {
            title: 'Krav til deg som elev',
            type: 'text',
            content: `**Alder:** Du kan begynne å øvelseskjøre med personbil når du er 16 år, altså to år før du kan få førerkort.

**Under 25 år:** Du må ha fullført [trafikalt grunnkurs](/laeringsressurser/trafikalt-grunnkurs/). Da får du et øvelseskjøringsbevis, som du skal ha med deg hver gang du kjører, sammen med legitimasjon.

**25 år eller eldre:** Du slipper kravet om trafikalt grunnkurs før du øvelseskjører, og du trenger ikke øvelseskjøringsbevis. Trafikant i mørket og Plikter ved trafikkuhell og førstehjelp må du likevel ta. Vil du øvelseskjøre mellom 1. november og 15. mars, må Trafikant i mørket være tatt først. Ta med legitimasjon når du kjører.

**Har du førerkort fra før,** for eksempel for moped, motorsykkel eller traktor, slipper du også kravet om grunnkurs før øvelseskjøring. Ta med førerkortet.

**Helse:** Du kan ikke øvelseskjøre hvis du er påvirket av alkohol eller andre rusmidler, eller er syk, trøtt eller svekket på annen måte. Det samme gjelder ledsageren.`
        },
        {
            title: 'Mørkekjøring og øvelseskjøring',
            type: 'info',
            content: `Mellom **1. november og 15. mars** må du ha fullført [Trafikant i mørket](/laeringsressurser/morkekjoring/) for å øvelseskjøre. Kurset holdes bare i denne perioden, fordi det må være mørkt.

Tok du trafikalt grunnkurs mellom 16. mars og 31. oktober, får du et øvelseskjøringsbevis som bare gjelder fra 16. mars til 31. oktober. Når du har tatt Trafikant i mørket, sender Statens vegvesen deg et nytt bevis som gjelder hele året.

Vil du sjekke en bestemt dato? Bruk [sjekken i artikkelen om mørkekjøring](/laeringsressurser/morkekjoring/).`
        },
        {
            title: 'Krav til ledsageren',
            type: 'warning',
            content: `- Ledsageren må være fylt **25 år**.
- Ledsageren må ha hatt førerkort i samme klasse (klasse B) **uten avbrudd de siste fem årene**. Har førerkortet vært borte på grunn av helse i seks måneder eller mindre, regnes det likevel som sammenhengende.
- Har ledsageren tatt førerkortet i et annet land, må hen ha med dokumentasjon på at førerkortet har vært gyldig uten avbrudd de siste fem årene.
- En godkjent trafikklærer kan være ledsager ved privat øvelseskjøring fra 23 år.
- Ledsageren skal sitte ved siden av deg, følge med hele tiden og være i stand til å kjøre selv: ikke ruspåvirket, trøtt eller syk.

Det finnes ikke noe obligatorisk ledsagerkurs. Statens vegvesen anbefaler at ledsageren går gjennom en digital informasjonsløype eller deltar på et informasjonsmøte. Mange trafikkskoler tilbyr også en time der elev og ledsager kjører sammen med trafikklæreren, så dere øver på samme måte som eleven lærer på trafikkskolen.`
        },
        {
            title: 'Hvem har ansvaret?',
            type: 'text',
            content: `Under øvelseskjøring regnes **ledsageren som fører** av bilen. Det står i vegtrafikkloven § 26. Ledsageren må derfor følge med som om hen kjørte selv, og gripe inn i tide.

Men eleven er ikke uten ansvar. Trafikkreglene og forbudet mot å kjøre ruspåvirket, trøtt eller syk gjelder også for eleven. Kjører eleven med promille, er det eleven som har brutt promillegrensen, selv om ledsageren regnes som fører.`
        },
        {
            title: 'Krav til bilen',
            type: 'table',
            content: "<div class=\"responsive-theory-table-wrapper\" style=\"margin-top: 1rem;\"><table class=\"responsive-theory-table\" style=\"width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;\"><thead><tr style=\"background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);\"><th style=\"padding: 12px 8px;\">Hva</th><th style=\"padding: 12px 8px;\">Krav</th><th style=\"padding: 12px 8px;\">Typisk feil</th></tr></thead><tbody><tr style=\"border-bottom: 1px solid var(--color-border);\"><td style=\"padding: 12px 8px;\">Bilen</td><td style=\"padding: 12px 8px;\">Personbil i klasse B, tillatt totalvekt høyst 3500 kg, i forsvarlig stand.</td><td style=\"padding: 12px 8px;\">Øver i en stor varebil uten å sjekke totalvekten i <a href=\"/laeringsressurser/vognkort-vekter/\">vognkortet</a>.</td></tr><tr style=\"border-bottom: 1px solid var(--color-border);\"><td style=\"padding: 12px 8px;\">L-skilt</td><td style=\"padding: 12px 8px;\">Godt synlig rød L på hvit bunn bak på bilen. Skal bare brukes under øvelseskjøring og tas av etterpå.</td><td style=\"padding: 12px 8px;\">Lar L-skiltet sitte på når ledsageren kjører selv.</td></tr><tr style=\"border-bottom: 1px solid var(--color-border);\"><td style=\"padding: 12px 8px;\">Ekstra speil</td><td style=\"padding: 12px 8px;\">Ledsageren skal ha et eget speil med god sikt bakover. Har bilen skjerm i stedet for innvendig speil, holder det hvis ledsageren ser godt nok bakover.</td><td style=\"padding: 12px 8px;\">Kjører uten ekstra speil.</td></tr><tr style=\"border-bottom: 1px solid var(--color-border);\"><td style=\"padding: 12px 8px;\">Pedaler og håndbrems</td><td style=\"padding: 12px 8px;\">Ekstra bremsepedal eller håndbrems i midten er ikke påkrevd ved privat øvelseskjøring.</td><td style=\"padding: 12px 8px;\">Tror bilen må bygges om.</td></tr><tr><td style=\"padding: 12px 8px;\">Automat</td><td style=\"padding: 12px 8px;\">Lov. Kjører du opp med automatgir, får du førerkort som bare gjelder automat.</td><td style=\"padding: 12px 8px;\">Øver bare med automat og kjører opp med manuell.</td></tr></tbody></table></div>" + '<p style="margin-top: 1rem;">Sjekk også lys, dekk, bremser og varsellamper før dere kjører. Se <a href="/laeringsressurser/sikkerhetskontroll/">sikkerhetskontrollen</a>.</p>'
        },
        {
            title: 'Passasjerer og flere elever',
            type: 'text',
            content: `Dere kan ha med passasjerer når eleven har kommet så langt at det er forsvarlig, og eleven føler seg trygg. I starten er det lurt å kjøre uten, fordi passasjerer tar oppmerksomhet.

På vanlig vei kan ledsageren bare øvelseskjøre med **én elev om gangen**.`
        },
        {
            title: 'Øvelseskjøring med henger',
            type: 'text',
            content: `Du kan øvelseskjøre med tilhenger når du kjører så godt at det er fornuftig. Bil og henger må være innenfor det klasse B gir lov til, og ledsageren må oppfylle de vanlige kravene.

Vil du kjøre med tyngre henger etter at du har fått førerkort, trenger du B96 eller BE. Les mer om [tilhenger og førerkort](/laeringsressurser/tilhenger/), og bruk [tilhengerkalkulatoren](/laeringsressurser/tilhengerkalkulator/) for å sjekke vektene.`
        },
        {
            title: 'Tapt førerkort eller sperrefrist',
            type: 'text',
            content: `Har du [mistet førerkortet](/laeringsressurser/forerkortbeslag/), fått det beslaglagt eller har sperrefrist, kan du ikke øvelseskjøre i perioden uten samtykke fra politiet.

Når tapsperioden er over, kan du øvelseskjøre uten nytt trafikalt grunnkurs. Du må ha med dokumentasjon fra Statens vegvesen om at du har rett til å øvelseskjøre, og legitimasjon.`
        },
        {
            title: 'Øvingsplan i fem trinn',
            type: 'table',
            content: '<p>Øk vanskelighetsgraden gradvis. Avtal før hver økt hva dere skal øve på, og snakk kort om hvordan det gikk etterpå. Mellom øktene kan du lese og teste deg på temaet.</p>' + "<div class=\"responsive-theory-table-wrapper\" style=\"margin-top: 1rem;\"><table class=\"responsive-theory-table\" style=\"width: 100%; border-collapse: collapse; text-align: left; font-size: 0.95rem;\"><thead><tr style=\"background-color: var(--color-surface); border-bottom: 2px solid var(--color-border);\"><th style=\"padding: 12px 8px;\">Trinn</th><th style=\"padding: 12px 8px;\">Hvor</th><th style=\"padding: 12px 8px;\">Hva dere øver på</th><th style=\"padding: 12px 8px;\">Les og test deg</th></tr></thead><tbody><tr style=\"border-bottom: 1px solid var(--color-border);\"><td style=\"padding: 12px 8px;\"><strong>Trinn 1</strong></td><td style=\"padding: 12px 8px;\">Tom parkeringsplass eller rolig område</td><td style=\"padding: 12px 8px;\">Igangsetting, bremsing, giring, styring, rygging og parkering</td><td style=\"padding: 12px 8px;\"><a href=\"/laeringsressurser/sikkerhetskontroll/\">Sikkerhetskontroll</a>, <a href=\"/laeringsressurser/rygging-og-vending/\">rygging og vending</a>, <a href=\"/laeringsspill/parkering/\">parkeringsspillet</a></td></tr><tr style=\"border-bottom: 1px solid var(--color-border);\"><td style=\"padding: 12px 8px;\"><strong>Trinn 2</strong></td><td style=\"padding: 12px 8px;\">Boligfelt</td><td style=\"padding: 12px 8px;\">Plassering, fart, høyreregelen, utkjøring</td><td style=\"padding: 12px 8px;\"><a href=\"/laeringsressurser/vikeplikt/\">Vikeplikt</a> med film, <a href=\"/laeringsspill/vikeplikt/\">vikepliktspillet</a></td></tr><tr style=\"border-bottom: 1px solid var(--color-border);\"><td style=\"padding: 12px 8px;\"><strong>Trinn 3</strong></td><td style=\"padding: 12px 8px;\">Kryss, lysregulering og rundkjøring</td><td style=\"padding: 12px 8px;\">Feltvalg, blinklys, vikeplikt for gående og syklende</td><td style=\"padding: 12px 8px;\"><a href=\"/laeringsressurser/rundkjoring/\">Rundkjøring</a> med film, <a href=\"/laeringsressurser/veimerking/\">veimerking</a> og <a href=\"/laeringsspill/veimerking/\">veimerkingsspillet</a></td></tr><tr style=\"border-bottom: 1px solid var(--color-border);\"><td style=\"padding: 12px 8px;\"><strong>Trinn 4</strong></td><td style=\"padding: 12px 8px;\">Landevei og motorvei</td><td style=\"padding: 12px 8px;\">Fart, avstand, forbikjøring, påkjøring og avkjøring</td><td style=\"padding: 12px 8px;\"><a href=\"/laeringsressurser/forbikjoring/\">Forbikjøring</a> med film, <a href=\"/laeringsspill/stopplengde/\">stopplengdespillet</a>, <a href=\"/laeringsressurser/motorvei-regler/\">motorvei</a></td></tr><tr><td style=\"padding: 12px 8px;\"><strong>Trinn 5</strong></td><td style=\"padding: 12px 8px;\">Mørke, regn og glatt føre</td><td style=\"padding: 12px 8px;\">Lysbruk, sikt, fart etter forholdene</td><td style=\"padding: 12px 8px;\"><a href=\"/laeringsressurser/lysbruk-morkekjoring/\">Lysbruk i mørket</a>, <a href=\"/laeringsressurser/glatt-fore/\">glatt føre</a>, <a href=\"/laeringsressurser/vinterdekk-og-piggdekk/\">vinterdekk</a></td></tr></tbody></table></div>"
        },
        {
            title: 'Vanlige misforståelser',
            type: 'warning',
            content: `- **«Ledsageren har hatt lappen i fem år.»** Det holder ikke hvis førerkortet har vært borte i mellomtiden, for eksempel etter fartsbot. Kravet er fem år uten avbrudd.
- **«Eleven har ikke ansvar, det er ledsageren som er fører.»** Eleven må likevel følge trafikkreglene og kan ikke kjøre ruspåvirket.
- **«Vi kan øvelseskjøre hele året.»** Mellom 1. november og 15. mars må eleven ha tatt Trafikant i mørket.
- **«L-skiltet kan sitte på.»** Det skal tas av når øvelseskjøringen er slutt.
- **«Ledsageren må ta kurs.»** Det er ikke påkrevd, men en felles kjøretime på trafikkskolen er lurt.`
        },
        {
            title: 'Teori og praksis hører sammen',
            type: 'tip',
            content: 'Øvelseskjøring gir praktisk erfaring, men god trafikal forståelse starter med teorien. Mellom kjøreøktene bør du øve på [vikeplikt](/laeringsressurser/vikeplikt/), [trafikkskilt](/laeringsressurser/skilt/), [sikkerhetskontroll](/laeringsressurser/sikkerhetskontroll/) og vanlige trafikkregler. [Ta en gratis teoriprøve](/) for å se hvor du står, og les om [trafikalt grunnkurs](/laeringsressurser/trafikalt-grunnkurs/). Når du nærmer deg førerprøven, les guiden til [oppkjøring klasse B](/laeringsressurser/oppkjoring/).'
        }
    ],
    faq: [
        {
            question: 'Når kan jeg begynne å øvelseskjøre med bil?',
            answer: 'Du kan begynne å øvelseskjøre med personbil når du er 16 år. Er du under 25 år, må du ha fullført trafikalt grunnkurs først.'
        },
        {
            question: 'Hva må jeg ha med når jeg øvelseskjører?',
            answer: 'Legitimasjon. Er du under 25 år, må du også ha med øvelseskjøringsbeviset. Har du førerkort i en annen klasse, tar du med det.'
        },
        {
            question: 'Hvem kan være ledsager ved øvelseskjøring?',
            answer: 'Ledsageren må være fylt 25 år og ha hatt førerkort klasse B uten avbrudd de siste fem årene. En godkjent trafikklærer kan være ledsager fra 23 år. Ledsageren må også være i stand til å kjøre selv og følge med hele tiden.'
        },
        {
            question: 'Hvor mange år må ledsageren ha hatt førerkort?',
            answer: 'Minst fem år uten avbrudd, i samme klasse som eleven øver i.'
        },
        {
            question: 'Hvem er ansvarlig sjåfør ved øvelseskjøring?',
            answer: 'Ledsageren regnes som fører av bilen, jf. vegtrafikkloven § 26. Eleven må likevel følge trafikkreglene og kan ikke kjøre ruspåvirket.'
        },
        {
            question: 'Kan man øvelseskjøre uten mørkekjøring?',
            answer: 'Ja, mellom 16. mars og 31. oktober. Mellom 1. november og 15. mars må eleven ha fullført Trafikant i mørket.'
        },
        {
            question: 'Må bilen ha L-skilt og ekstra speil?',
            answer: 'Ja. Bilen skal ha godt synlig rød L på hvit bunn bak og et ekstra speil til ledsageren. L-skiltet skal tas av når øvelseskjøringen er slutt.'
        },
        {
            question: 'Når kan man øvelseskjøre med andre i bilen?',
            answer: 'Når eleven har kommet så langt at det er forsvarlig. På vanlig vei kan ledsageren bare øvelseskjøre med én elev om gangen.'
        },
        {
            question: 'Må ledsageren ta kurs?',
            answer: 'Nei. Det finnes ikke noe obligatorisk ledsagerkurs. Statens vegvesen anbefaler en digital informasjonsløype eller et informasjonsmøte, og en felles kjøretime på trafikkskolen er lurt.'
        },
        {
            question: 'Kan man øvelseskjøre med henger?',
            answer: 'Ja, når eleven kjører så godt at det er fornuftig, og bil og henger er innenfor det klasse B gir lov til.'
        },
        {
            question: 'Hva skjer hvis man øvelseskjører uten godkjent ledsager?',
            answer: 'Da er det ikke lovlig øvelseskjøring. Eleven kan regnes for å ha kjørt uten førerett, og det kan gi bot og en sperrefrist før eleven kan få førerkort. Ledsageren kan også bli straffet.'
        },
        {
            question: 'Kan jeg øvelseskjøre med automatgir?',
            answer: 'Ja. Kjører du opp med automatgir, får du førerkort som bare gjelder automat.'
        }
    ],
    miniQuiz: [
        {
            question: 'Hvor gammel må du være for å øvelseskjøre med personbil?',
            options: ['15 år', '16 år', '17 år', '18 år'],
            correct: '16 år',
            explanation: 'Du kan begynne å øvelseskjøre med personbil når du er 16 år, så lenge kravene ellers er oppfylt.'
        },
        {
            question: 'Hva er kravet til ledsager?',
            options: ['Minst 21 år og hatt førerkort i 2 år', 'Fylt 25 år og hatt klasse B uten avbrudd de siste fem årene', 'Bare gyldig førerkort uansett alder', 'Må være trafikklærer'],
            correct: 'Fylt 25 år og hatt klasse B uten avbrudd de siste fem årene',
            explanation: 'Dette er hovedkravet til ledsager ved privat øvelseskjøring klasse B. En godkjent trafikklærer kan være ledsager fra 23 år.'
        },
        {
            question: 'Hvor skal L-skiltet være?',
            options: ['Foran på bilen', 'Godt synlig bak på bilen', 'I frontruten', 'Det er valgfritt'],
            correct: 'Godt synlig bak på bilen',
            explanation: 'L-skiltet skal være godt synlig bak på bilen under øvelseskjøringen, og tas av etterpå.'
        },
        {
            question: 'Hva må bilen ha for ledsager?',
            options: ['Ekstra speil', 'Ekstra pedalsett', 'Taklys', 'Varseltrekant på dashbordet'],
            correct: 'Ekstra speil',
            explanation: 'Ledsageren skal ha et ekstra speil med god sikt bakover. Ekstra pedalsett er ikke påkrevd ved privat øvelseskjøring.'
        },
        {
            question: 'Hvem regnes som ansvarlig fører under privat øvelseskjøring?',
            options: ['Eleven', 'Ledsager', 'Bileier', 'Trafikkstasjonen'],
            correct: 'Ledsager',
            explanation: 'Ledsageren regnes som fører under privat øvelseskjøring (vegtrafikkloven § 26).'
        },
        {
            question: 'Ledsageren regnes som fører under øvelseskjøring. Hva betyr det for eleven?',
            options: ['Eleven kan ikke straffes for noe', 'Eleven må fortsatt følge trafikkreglene og kan ikke kjøre ruspåvirket', 'Eleven trenger ikke legitimasjon', 'Eleven kan kjøre uten L-skilt'],
            correct: 'Eleven må fortsatt følge trafikkreglene og kan ikke kjøre ruspåvirket',
            explanation: 'Ledsageren har føreransvaret, men trafikkreglene og rusreglene gjelder også for eleven.'
        },
        {
            question: 'Hvor mange elever kan øvelseskjøre med samme ledsager på en tur på vanlig vei?',
            options: ['Én om gangen', 'To, hvis de bytter', 'Så mange det er seter til', 'Det er ingen regel'],
            correct: 'Én om gangen',
            explanation: 'På vei som er åpen for alminnelig ferdsel kan det bare øvelseskjøres med én elev om gangen.'
        }
    ],
    sources: {
        title: 'Kilder',
        type: 'text',
        content: `Reglene er kontrollert mot lov, forskrift og Statens vegvesen 25. oktober 2026.

- [Statens vegvesen: Generelt om øvelseskjøring](https://www.vegvesen.no/forerkort/ta-forerkort/ovelseskjoring/generelt-om-ovelseskjoring/)
- [Statens vegvesen: Øvelseskjøring med personbil](https://www.vegvesen.no/forerkort/ta-forerkort/ovelseskjoring/ovelseskjoring-i-de-ulike-forerkortklassene/personbil/)
- [Statens vegvesen: Ledsager under øvelseskjøring](https://www.vegvesen.no/forerkort/ta-forerkort/ledsager-under-ovelseskjoring/)
- [Statens vegvesen: Trafikant i mørket](https://www.vegvesen.no/forerkort/ta-forerkort/trafikant-i-morket/)
- [Lovdata: Vegtrafikkloven § 24 a og § 26](https://lovdata.no/lov/1965-06-18-4/§26)
- [Lovdata: Trafikkopplæringsforskriften kapittel 2 og § 3-1](https://lovdata.no/dokument/SF/forskrift/2004-10-01-1339/KAPITTEL_2)`
    },
}

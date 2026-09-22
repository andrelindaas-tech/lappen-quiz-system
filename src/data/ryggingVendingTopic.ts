import type { TheoryTopic } from './theoryData'

export const ryggingVendingTopic: TheoryTopic = {
    id: 'rygging-og-vending',
    title: 'Rygging og vending – oppdag faren før du flytter bilen',
    shortDescription: 'Hvem må du vike for, hva kan være skjult, og når bør du la bilen stå? Lær reglene og øv på fire situasjoner om rygging, parkering og valg av sted for vending.',
    icon: '↩️',
    color: 'var(--apple-blue)',
    seoTitle: 'Rygging og vending: regler, vikeplikt og blindsoner',
    seoDescription: 'Hvem har vikeplikt ved rygging og vending? Lær reglene, finn skjulte farer og test valgene dine i fire illustrerte situasjoner før bilen beveger seg.',
    author: 'Teori-test.no-redaksjonen',
    lastUpdated: '2026-09-21',
    heroImage: { src: '/images/rygging/rygging-ut-av-innkjorsel-1280.webp', srcSet: '/images/rygging/rygging-ut-av-innkjorsel-640.webp 640w, /images/rygging/rygging-ut-av-innkjorsel-1280.webp 1280w', sizes: '(max-width: 700px) 100vw, 900px', width: 1280, height: 720, alt: 'Blå bil skal rygge over fortauet. Nummer 1 viser bilen, 2 en gående fra høyre og 3 en bil på veien. Begge må slippes fram.', caption: '1: Du skal rygge. 2: En gående nærmer seg. 3: Trafikken på veien må også kontrolleres. Den stiplede pilen viser ønsket kjøreretning – ikke at det er klart.' },
    sections: [
        { title: 'Kort forklart', type: 'info', content: `**Når du rygger eller vender, har du vikeplikt for andre trafikanter.** Det gjelder også gående og syklende, og uansett hvilken side de kommer fra.

Du må ha tilstrekkelig oversikt før du begynner og mens bilen beveger seg. Ved dårlig sikt må du få noen til å passe på eller selv forsikre deg om at manøveren kan gjennomføres uten fare eller skade.

På motorvei, motortrafikkvei og inn- og utkjøringsveiene til disse er rygging og vending forbudt. Et ledig område er derfor ikke automatisk et lovlig sted å snu.` },
        { title: 'Hvem har vikeplikt ved rygging og vending?', type: 'text', content: `Se først på **hva bilen gjør**, ikke på hvem som kommer fra høyre. Den som rygger eller vender, må slippe fram andre. Du kan ikke kreve at noen stanser for å la deg fullføre fordi du allerede har begynt.

**Eksempel:** Du rygger ut av en parkeringslomme, og en bil kommer fra venstre. Du har vikeplikt fordi du rygger. Høyreregelen gir deg ikke prioritet i denne situasjonen.

Det samme gjelder når en gående passerer bak bilen. Ryggelys varsler hva du vil gjøre, men gir deg ingen rett til å kjøre først. Les også [slik finner du hvem som skal kjøre først](/laeringsressurser/vikeplikt/).` },
        { title: 'Tre spørsmål før bilen beveger seg', type: 'table', content: `<div class="responsive-theory-table-wrapper"><table class="responsive-theory-table"><thead><tr><th scope="col">Sjekk</th><th scope="col">Spør deg selv</th><th scope="col">Når svaret er nei</th></tr></thead><tbody><tr><td><strong>1. Lovlig?</strong></td><td>Tillater reglene, skiltene og oppmerkingen manøveren?</td><td>Finn en annen rute eller et annet sted. God sikt opphever ikke et forbud.</td></tr><tr><td><strong>2. Oversikt?</strong></td><td>Vet jeg hva som finnes i området hele bilen skal bevege seg i?</td><td>Kontroller også områdene kameraet ikke viser. En hekk eller parkert bil kan skjule gående og syklende. Skaff deg oversikt før du rygger, og få hjelp hvis det er nødvendig.</td></tr><tr><td><strong>3. Fri bane?</strong></td><td>Kan jeg gjennomføre uten å hindre andre eller skape fare?</td><td>Vent. Kontroller på nytt når trafikanten har passert.</td></tr></tbody></table></div><p>Dette er vår pedagogiske sjekkliste. Du må fortsette å observere og vike under hele manøveren.</p>` },
        { title: 'Finn faren: Hva må du avklare før du rygger eller vender?', type: 'component', component: 'RyggingVendingDemo', content: 'Du fører den blå bilen. Bildet gir deg oversikt ovenfra, men føreren kan ha dårligere sikt. Finn det som må avklares, velg handling og vis forklaringen.' },
        { title: 'Rygge ut av innkjørsel: To områder å kontrollere', type: 'text', content: `Når du rygger ut av en innkjørsel, kan du måtte krysse både et fortau og en kjørebane. **At bilveien er tom, betyr ikke at området bak bilen er fritt.** En gående eller syklist kan være på vei langs fortauet.

Kontroller derfor både området bak bilen og trafikken fra begge sider på veien. En hekk eller en parkert varebil kan skjule trafikanter som nærmer seg. Du må skaffe nødvendig oversikt før du rygger inn i området, ikke bruke selve ryggingen som en prøve på om noen er der.

Når du rygger, gjelder vikeplikten etter § 11. Når du kjører ut fra en eiendom, gjelder også utkjøringsregelen i § 7. Å snu bilen slik at du kan kjøre ut forover, fjerner derfor ikke vikeplikten.` },
        { title: 'Observasjon: Se mer enn bare bakover', type: 'text', content: `Før du rygger, må du vite hvor bilen skal, og om området er fritt. Se etter mennesker, sykler, lave hindringer og trafikk som kan komme inn i området.

1. **Vurder stedet.** Har du nok plass og oversikt? Finn et bedre sted hvis manøveren blir uoversiktlig.
2. **Se deg rundt.** Bruk speil, direkte blikk og eventuelt kamera sammen. Gå ut og se når det er nødvendig.
3. **Kontroller begge ender av bilen.** Når du svinger mens du rygger, svinger fronten ut til siden. En stolpe eller en bil ved siden av kan derfor være utsatt selv om området rett bak er tomt.
4. **Beveg bilen langsomt og følg med underveis.** En kontroll før start er ikke nok hvis situasjonen endrer seg.
5. **Stans når oversikten forsvinner.** Kontroller området på nytt før du fortsetter.

Dette er en praktisk huskeliste, ikke en egen regel eller en garanti for at manøveren er trygg.`, image: { src: '/images/rygging/observasjon-front-og-blindsoner.svg', alt: 'Bil sett ovenfra: 1 viser området bak bilen, 2 siden, og 3 frontens utsving mot en stolpe.', caption: '1: Området bak bilen. 2: Sidene. 3: Fronten kan svinge ut mot en hindring. Fargefeltene er skjematiske kontrollområder, ikke målte blindsoner eller en beregnet kjørebane.' } },
        { title: 'Er ryggekamera og sensorer nok?', type: 'warning', content: `**Selv om kameraet ikke viser noen hindringer, kan det være noe utenfor synsfeltet.** Kameraet viser bare en del av omgivelsene. Skitt, lysforhold og hindringer kan begrense det du ser. Sensorer kan også overse noe.

Bruk hjelpemidlene som støtte til egen observasjon. Sjekk spesielt sidene og området fronten svinger ut i. Du har fortsatt ansvaret for å oppdage andre og stanse i tide.

Les mer om [førerstøttesystemer og førerens ansvar](/laeringsressurser/forerstottesystemer/).` },
        { title: 'Dårlig sikt ved rygging: Når trenger du en hjelpemann?', type: 'text', content: `En hekk, en varebil eller last i bilen kan skjule området du skal rygge inn i. Da holder det ikke å anta at ingen er der.

Trafikkreglene § 11 krever at en annen passer på, eller at du selv ved å se etter har forsikret deg om at fare eller skade ikke kan oppstå. Å gå ut og se kan være nødvendig, men gir ikke et varig klarsignal: noen kan komme til mens du setter deg inn igjen.

Bruker du en hjelper, avtal tydelige tegn og en trygg plassering utenfor bilens bevegelsesområde. **Stans hvis du mister kontakten med hjelperen.** Velg en annen løsning hvis dere ikke klarer å ha tilstrekkelig oversikt.` },
        { title: 'Planlegg parkeringen: Kan du kjøre ut med fronten først?', type: 'tip', content: `Trygg Trafikk anbefaler å rygge inn i parkeringslommen og kjøre ut forover. Da kan du ha bedre oversikt over omgivelsene når du skal ut igjen. Små barn kan være vanskelige å oppdage bak bilen.

Vurder dette allerede når du parkerer. Rådet forutsetter at du kan rygge inn på en lovlig og trygg måte. Du må fortsatt observere og vike både på vei inn og ut.` },
        { title: 'U-sving og vending: Velg stedet før du velger manøveren', type: 'text', content: `Vending betyr at du snur for å kjøre tilbake i motsatt retning. Det kan være en U-sving eller en vending som også krever rygging.

Finn et lovlig sted med god sikt og nok plass. Kontroller skilt og oppmerking, og vurder om du kan snu uten å hindre andre. En sving eller bakketopp med dårlig oversikt er et dårlig utgangspunkt, selv om du ikke ser et forbudsskilt.

Ved en vending med flere bevegelser må du kontrollere omgivelsene på nytt hver gang du endrer kjøreretning. Vikeplikten gjelder også mens du holder på. Ofte er det bedre å kjøre videre og finne et mer oversiktlig sted.` },
        { title: 'Hva er forskjellen på U-sving og trepunktsvending?', type: 'text', content: `**En U-sving** er en vending der du kjører forover i en bue og fortsetter i motsatt retning. Du trenger nok bredde til hele bilen, ikke bare hjulene. Bilens svingradius og hindringer langs kanten avgjør hvor mye plass du trenger.

**En trepunktsvending** består vanligvis av tre bevegelser: forover med sving, bakover med sving og forover i den nye retningen. Den kan brukes når en sammenhengende U-sving ikke får plass, men krever mer tid og observasjon fordi du også rygger.

Navnet betyr ikke at du må fullføre på akkurat tre bevegelser. Ikke press bilen nær en kant eller hindring for å få det til. Stans og vurder på nytt hvis plassen eller oversikten er dårligere enn du trodde.

Ved begge metodene må du vike for andre. Før hver ny bevegelse kontrollerer du trafikken og området bilen skal bevege seg i, også frontens utsving. En bred vei er ikke alene nok til å avgjøre om du kan snu.` },
        { title: 'Hvor bør du snu? Velg oversikt fremfor korteste vei', type: 'text', content: `Vurder hele området før du bestemmer deg. En bred utvidelse kan se fristende ut, men en hekk, sving eller bakketopp kan skjule trafikk som nærmer seg. En smalere, oversiktlig plass kan kreve flere bevegelser, men gi deg bedre mulighet til å følge med.

Se etter et lovlig, oversiktlig sted med nok manøvreringsplass. En egnet snuplass eller en lovlig rute rundt et kvartal kan være et bedre valg enn å snu der du oppdaget at du kjørte feil. Kontroller også gående, syklende, innkjørsler og trafikk bakfra.

**Eksempel:** Du kan få plass til en U-sving ved en høy hekk, men ser ikke veien videre. Lenger frem finnes en åpen snuplass. Kjør videre og vurder snuplassen; ikke velg hekken bare fordi bilen får plass til å snu i én bevegelse.` },
        { title: 'Er det tillatt å vende i et veikryss eller på forkjørsvei?', type: 'text', content: `**Det er ikke et generelt vendingsforbud bare fordi du er i et veikryss eller på en forkjørsvei.** Men du må kontrollere skilt, oppmerking, sikt og trafikk. Når du vender, har du vikeplikt for andre trafikanter, også om du startet på forkjørsveien.

Et [vendingsforbudsskilt](/trafikkskilt/forbudsskilt/vendingsforbud/) gjelder til og med første veikryss. Det er derfor feil å tenke at du kan snu straks du kommer inn i krysset etter skiltet.

Selv uten et slikt skilt kan manøveren være ulovlig på grunn av andre anvisninger eller uforsvarlig på grunn av dårlig oversikt. Bruk de tre spørsmålene: **Lovlig? Oversikt? Fri bane?** Finn et annet sted hvis du ikke kan avklare alle tre.` },
        { title: 'Hvor er rygging og vending forbudt?', type: 'warning', content: `Du skal ikke rygge eller vende på **motorvei eller motortrafikkvei**, og heller ikke på **inn- eller utkjøringsveiene** til disse. Har du kjørt forbi avkjøringen, kjører du videre og følger en lovlig rute tilbake.

**Skilt 332 «Vendingsforbud»** forbyr vending og gjelder til og med første veikryss. Kontroller også andre skilt og oppmerking som kan begrense manøveren. Fravær av vendingsforbud betyr ikke at enhver vending er tillatt eller forsvarlig.

Se også [reglene for motorvei og motortrafikkvei](/laeringsressurser/motorvei-regler/).` },
        { title: 'Dette må du huske ved rygging og vending', type: 'text', content: `- **«Den andre kommer fra venstre, så jeg kan rygge.»** Nei. Vikeplikten følger av at du rygger.
- **«Ryggelysene er tent, så andre må vente.»** Nei. Lysene varsler, men gir ingen prioritet.
- **«Jeg sjekket før jeg satte meg inn.»** Du må også følge med mens du rygger.
- **«Kameraet viser ingen hindringer.»** Du må kontrollere områdene kameraet ikke viser.
- **«Jeg trenger bare å rygge noen meter på rampen.»** Forbudet gjelder også inn- og utkjøringsveiene til motorvei og motortrafikkvei.
- **«Jeg har begynt å snu, så jeg får kjøre ferdig.»** Du har fortsatt vikeplikt for andre.` },
        { title: 'Husk: Se – vurder – vik', type: 'summary', content: '**Se** rundt hele bilen og kontroller sikten. **Vurder** om stedet og manøveren er lovlig og trygg. **Vik** for andre, og stans hvis oversikten blir borte.\n\n[Test vikeplikten din med flere oppgaver →](/quiz/vikeplikt/)' }
    ],
    faq: [
        { question: 'Hva er en trepunktsvending?', answer: 'En trepunktsvending er en måte å snu bilen på ved å kjøre forover, rygge og kjøre forover i motsatt retning. Du må ha nok plass, kontrollere omgivelsene før hver bevegelse og vike for andre under hele vendingen.' },
        { question: 'Er det tillatt å vende i et veikryss?', answer: 'Et veikryss er ikke i seg selv et generelt vendingsforbud. Du må følge skilt og oppmerking, ha tilstrekkelig oversikt og vike for andre. Skilt 332 Vendingsforbud gjelder til og med første veikryss.' },
        { question: 'Er det tillatt å vende på forkjørsvei?', answer: 'Forkjørsvei innebærer ikke i seg selv et generelt forbud mot vending. Andre skilt, oppmerking og regler kan likevel forby manøveren. Når du vender, har du vikeplikt for andre trafikanter; forkjørsveien gir deg ikke prioritet under vendingen.' },
        { question: 'Hvem har vikeplikt når jeg rygger ut av en parkeringsplass?', answer: 'Du har vikeplikt for andre trafikanter når du rygger. Når du kjører ut fra en parkeringsplass, gjelder også utkjøringsregelen. Om den andre kommer fra høyre eller venstre, gir deg ikke prioritet.' },
        { question: 'Har jeg vikeplikt for gående når jeg rygger?', answer: 'Ja. Vikeplikten ved rygging gjelder andre trafikanter, også gående og syklende.' },
        { question: 'Må jeg alltid ha en hjelper når jeg rygger?', answer: 'Nei. Men er utsikten utilstrekkelig, må en annen passe på, eller du må selv ved å se etter ha forsikret deg om at fare eller skade ikke kan oppstå. Du må opprettholde oversikten under manøveren.' },
        { question: 'Kan jeg snu hvis det ikke er vendingsforbud?', answer: 'Ikke nødvendigvis. Andre regler, skilt og oppmerking kan forby manøveren. Du må dessuten ha tilstrekkelig oversikt og vike for andre trafikanter.' },
        { question: 'Kan jeg rygge tilbake til en avkjøring på motorvei?', answer: 'Nei. Rygging og vending er forbudt på motorvei, motortrafikkvei og inn- og utkjøringsveiene til disse. Kjør videre og finn en lovlig rute tilbake.' }
    ],
    miniQuiz: [
        { question: 'Du rygger, og en bil kommer fra venstre. Hvem skal vike?', options: ['Jeg skal vike', 'Bilen fra venstre', 'Den som kjører raskest'], correct: 'Jeg skal vike', explanation: 'Den som rygger har vikeplikt for andre trafikanter. Høyreregelen gir deg ikke prioritet her.' },
        { question: 'Du mister kontakten med personen som hjelper deg å rygge. Hva gjør du?', options: ['Fortsetter sakte', 'Stanser og gjenoppretter oversikten', 'Bruker bare kameraet videre'], correct: 'Stanser og gjenoppretter oversikten', explanation: 'Når hjelperen er nødvendig for oversikten, må du stanse hvis kontakten blir borte.' },
        { question: 'Hva må du huske når du svinger mens du rygger?', options: ['Bare bakhjulene beveger seg til siden', 'Fronten kan svinge ut mot en hindring', 'Ryggelys gir meg prioritet'], correct: 'Fronten kan svinge ut mot en hindring', explanation: 'Kontroller både området bak bilen og plassen fronten trenger når bilen svinger.' },
        { question: 'Du har kjørt forbi riktig avkjøring på motorvei. Hva gjør du?', options: ['Rygger på skulderen', 'Snur hvis veien er tom', 'Kjører videre og finner en lovlig rute tilbake'], correct: 'Kjører videre og finner en lovlig rute tilbake', explanation: 'Forbudet mot rygging og vending gjelder også inn- og utkjøringsveiene.' }
    ],
    sources: { title: 'Kilder og faglig grunnlag', type: 'text', content: '- [Trafikkreglene § 11 – rygging og vending, og § 7 – vikeplikt (Lovdata)](https://lovdata.no/dokument/SF/forskrift/1986-03-21-747)\n- [Skiltforskriften § 8 – skilt 332 Vendingsforbud (Lovdata)](https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219)\n- [Høyesterett HR-2024-2325-U – aktsomhetsplikten ved rygging](https://www.domstol.no/globalassets/upload/hret/avgjorelser/2024/desember/hr-2024-2325-u.pdf)' }
}

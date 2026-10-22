// Forklaringsfilmene på teori-test.no. Selve filmen ligger i public/video/<id>/ og vises i en iframe.
// Teksten fra filmen gjentas under spilleren, for søkemotorer og for dem som ikke kan høre lyden.
// Kilde og arbeidsflyt: video-src/<id>/ og skillen teori-test-video.

export type FilmParagraph = string | [title: string, text: string]

export interface Forklaringsfilm {
    src: string
    title: string
    caption: string
    textLabel: string
    paragraphs: FilmParagraph[]
    sound?: boolean
}

export const forklaringsfilmer: Record<string, Forklaringsfilm> = {
    "veimerking": {
        src: "/video/veimerking/index.html",
        title: "Veimerking – forstå linjene. Animasjon med fortellerstemme",
        caption: "Animasjon: slik leser du veimerkingen (2:42, med lyd). Velg kapittel nederst i spilleren.",
        textLabel: "Les teksten fra filmen",
        paragraphs: [
            "Veimerkingen hjelper deg å forstå hvordan veien skal brukes. Fargen forteller hvilken funksjon oppmerkingen har. Gul oppmerking brukes mellom motgående kjøreretninger. Hvit oppmerking har flere oppgaver. Her skiller en hvit linje kjørefelt i samme retning. En hvit kantlinje markerer kjørebanens ytterkant. Den skiller kjørebanen fra veiskulderen eller veikanten. Hvit oppmerking brukes også til gangfelt.",
            "Dette er en kjørefeltlinje. Den har korte streker og lange mellomrom. Du kan krysse den, for eksempel for å skifte felt eller kjøre forbi. Men bare når det er trygt og lovlig.",
            "Varsellinjen har lange streker og korte mellomrom. Det er motsatt av kjørefeltlinjen. En gul varsellinje betyr at sikten fremover er for kort til vanlig forbikjøring. En hvit varsellinje varsler fare ved å skifte felt. Linjen er brutt, men det betyr ikke at det er trygt å krysse.",
            "Her skiller én hvit sperrelinje to felt i samme retning. Du skal ikke kjøre på eller over den. Midt i veien ser du dobbel gul sperrelinje. Da har begge kjøreretningene sperrelinje nærmest seg. Forbudet er det samme: Ikke kjør på eller over.",
            "Her ligger to linjer side om side: én brutt og én heltrukken. Da gjelder linjen som er nærmest deg. Den blå bilen har den brutte linjen nærmest, og kan kjøre forbi når det er trygt. Møtende trafikk har sperrelinjen nærmest, og skal ikke krysse. Har du kjørt over i motgående felt, kan du likevel krysse tilbake til høyre side.",
            "Dette er et sperreområde. Det er et felt med skrå striper, omgitt av en heltrukken linje. Du skal ikke kjøre inn i det. Følg kjørefeltet videre, slik bilen gjør her.",
            "Pilene foran krysset viser hvilket felt du skal bruke. Velg felt etter hvor du skal, og gjør det i god tid. Er feltet avgrenset av sperrelinje, må du kjøre dit pilen viser.",
            "Skillelinjen skiller et vanlig kjørefelt fra et felt med spesiell bruk, for eksempel et kollektivfelt. Du kjenner den igjen på at strekene og mellomrommene er like lange. Skiltene forteller hvem som kan bruke feltet.",
            "Kantlinjen viser hvor kjørebanen slutter. En heltrukken kantlinje er ikke en sperrelinje. På smale veier uten midtlinje kan kantlinjen være brutt. Se på farge og mønster. Da forstår du hva linjen betyr.",
        ],
    },
    "lys-i-morket": {
        src: "/video/lys-i-morket/index.html",
        title: "To biler møtes i mørket – fjernlys, nærlys og blending. Animasjon uten lyd",
        caption: "Animasjon: to biler møtes i mørket (0:30, uten lyd). Bytt til «Ovenfra» for å se lyskjeglene.",
        textLabel: "Les teksten fra animasjonen",
        sound: false,
        paragraphs: [
            ["Fjernlys på mørk vei", "Fjernlyset lyser langt frem og gir best oversikt når veien er fri."],
            ["Blend ned i god tid", "Senest når lyskjeglene møtes. Fjernlyset må ikke blende andre trafikanter."],
            ["Nærlys gir kortere sikt", "Senk farten, så du rekker å reagere og bremse."],
            ["Se mot høyre kantlinje", "Ikke se inn i lysene til den møtende."],
            ["Blend opp igjen", "Når dere er ca. to billengder fra hverandre, blender ikke fjernlyset lenger."],
            ["Fjernlys når veien er fri", "Blend ned igjen for møtende, og når du kjører bak andre."],
        ],
    },
    "forbikjoring": {
        src: "/video/forbikjoring/index.html",
        title: "Forbikjøring – hvor mye vei trenger du? Animasjon med fortellerstemme",
        caption: "Animasjon: slik vurderer du om det er plass til å kjøre forbi (1:52, med lyd). Velg kapittel nederst i spilleren.",
        textLabel: "Les teksten fra filmen",
        paragraphs: [
            "Før du kjører forbi, må du være sikker på fire ting. Veien må være fri langt nok fremover. Bilen foran skal ikke selv kjøre forbi. Ingen bak deg har begynt å kjøre forbi deg. Og du må kunne legge deg inn igjen uten å hindre andre.",
            "Du kjører i 80 og vil forbi en lastebil som holder 70. Fartsforskjellen er bare 10 kilometer i timen. I dette eksemplet tar forbikjøringen rundt 25 sekunder. Da kjører du over 500 meter. En møtende bil kjører like langt på den tiden. Du trenger altså over en kilometer fri vei.",
            "Fartsgrensen gjelder også når du kjører forbi. Er fartsforskjellen for liten, er svaret å bli liggende bak.",
            "Ikke kjør forbi der en bakketopp, en sving eller noe annet hindrer sikten. Ikke kjør forbi rett før eller i et kryss, med mindre du kjører på forkjørsvei eller krysset er lysregulert. Og ikke kjør forbi et kjøretøy som skjuler et gangfelt. Der det er sperrelinje eller skilt for forbikjøring forbudt, er det også forbudt.",
            "Blir du forbikjørt, skal du holde deg så langt til høyre som mulig og ikke øke farten. Kjører du sakte eller har et stort kjøretøy, skal du slippe andre forbi. Om nødvendig kjører du inn til siden.",
            "Kjør bare forbi når du ser at det er nok plass. Er du i tvil, så la være. Det er nesten alltid en ny sjanse lenger fremme.",
        ],
    },
    "trafikkuhell": {
        src: "/video/trafikkuhell/index.html",
        title: "Trafikkuhell – sikre, varsle, hjelpe. Animasjon med fortellerstemme",
        caption: "Animasjon: dette gjør du ved et trafikkuhell (1:46, med lyd). Velg kapittel nederst i spilleren.",
        textLabel: "Les teksten fra filmen",
        paragraphs: [
            "Er du innblandet i et trafikkuhell, skal du stanse. Det gjelder uansett hvem som har skylden. Kommer du først til et ulykkessted, skal du også stanse og hjelpe hvis det trengs. Stans et lite stykke før ulykkesstedet, slik at nødetatene får plass.",
            "Sett på nødblinken. Ta på refleksvesten før du går ut av bilen. Derfor bør vesten ligge der du når den fra førersetet, for eksempel i dørlommen.",
            "Sett ut varseltrekanten. Den skal stå så langt unna at andre rekker å oppdage faren og stoppe. Ligger ulykken rett etter en sving, skal trekanten stå før svingen. En vanlig huskeregel er minst 50 meter i tettbygd strøk, og 150 til 250 meter på vei med høy fart. Slå av tenningen på bilene som er innblandet, hvis du kan.",
            "Ved personskade ringer du 113. Si hvor du er, hva som har skjedd og hvor mange som er skadet. Sett telefonen på høyttaler, så har du hendene fri.",
            "Start med den som ikke gir lyd fra seg. Sjekk at luftveiene er frie, og at personen puster. Puster personen ikke normalt, starter du hjerte-lungeredning: 30 trykk på brystet og 2 innblåsinger. Hold de skadde varme. Flytt dem bare hvis det er fare der de er.",
            "Bli på stedet til politiet eller nødetatene sier at du kan dra. Er ingen skadet, bytter dere navn, adresse og bilnummer. Ta bilder, og fyll ut skademeldingen sammen.",
        ],
    },
    "vikeplikt": {
        src: "/video/vikeplikt/index.html",
        title: "Vikeplikt – hvem kjører først? Animasjon med fortellerstemme",
        caption: "Animasjon: slik finner du ut hvem som har vikeplikt (2:15, med lyd). Velg kapittel nederst i spilleren.",
        textLabel: "Les teksten fra filmen",
        paragraphs: [
            "Hvem kjører først? Start øverst i myndighetspyramiden. Dirigerer politiet, gjør du som politiet sier. Deretter gjelder trafikklys, så skilt og veimerking. Avgjør ingen av dem, gjelder trafikkreglene. Da ser du først etter spesielle situasjoner, og til slutt høyreregelen.",
            "I et kryss uten skilt og lys har du vikeplikt for den som kommer fra høyre. Det kalles høyreregelen. Den gjelder også når du skal svinge til venstre. Da har du møtende bil på høyre side når du svinger, og du må slippe den først.",
            "Skilt og veimerking går foran høyreregelen. Ser du vikepliktskiltet og haitennene, skal du vike for trafikken på vegen du kjører inn på. Det gjelder begge retninger.",
            "Her kommer en bil ut fra en parkeringsplass, fra høyre. Høyreregelen gjelder ikke her. Den som kjører ut fra en parkeringsplass, en eiendom, en bensinstasjon, en gågate, et gatetun eller et lignende område, har vikeplikt for alle. Det gjelder både biler, syklister og gående.",
            "Er vegen sperret på din side, for eksempel av parkerte biler, skal du slippe møtende først. Den som har hindringen på sin side, viker. Står det skilt som sier noe annet, er det skiltet som gjelder.",
            "En buss blinker for å kjøre ut fra holdeplassen. Er fartsgrensen 60 kilometer i timen eller lavere, har du vikeplikt for bussen. Senk farten i god tid og slipp den ut. Bussføreren skal likevel unngå fare. Er fartsgrensen høyere, gjelder ikke denne regelen.",
            "Start øverst: politi, lys og skilt. Så de spesielle situasjonene: parkering, hindring og buss. Og til slutt høyreregelen.",
        ],
    },
}

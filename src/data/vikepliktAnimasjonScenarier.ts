// Tekstene for de åtte situasjonene i vikeplikt-animasjonen, hentet fra animasjonen.
// De vises som vanlig HTML under animasjonen, slik at Google kan lese dem.
// Endrer du en tekst i animasjonen (vikepliktAnimasjonEngine.ts), endre den også her.

export interface VikepliktAnimasjonScenario { id: string; slug: string; name: string; setup: string; why: string; first: string }

export const VIKEPLIKT_SCENARIER: VikepliktAnimasjonScenario[] = [
    {
        id: "hoyre",
        slug: "hoyreregelen",
        name: "Høyreregelen",
        setup: "Umerket T-kryss. Det er ingen skilt, lys eller oppmerking som sier noe annet.",
        why: "Blå bil kommer fra høyre for grønn bil, og ingenting annet avgjør vikeplikten. Da gjelder høyreregelen: grønn bil viker for blå bil. Hvor stor veien er, har ingen betydning.",
        first: "Blå bil"
    },
    {
        id: "vikeplikt",
        slug: "vikepliktskilt",
        name: "Vikepliktskilt",
        setup: "Samme kryss, men nå har blå bil vikepliktskilt (202) og vikelinje.",
        why: "Skiltet går foran høyreregelen. Blå bil har vikeplikt for kjørende fra begge retninger, og venter derfor til grønn bil har passert.",
        first: "Grønn bil"
    },
    {
        id: "stopp",
        slug: "stoppskilt",
        name: "Stoppskilt",
        setup: "Blå bil har stoppskilt (204) og kommer først fram til krysset.",
        why: "Blå bil må stanse helt, selv om den kom først. Stoppskiltet gir vikeplikt for all trafikk på vegen den skal inn på.",
        first: "Grønn bil"
    },
    {
        id: "forkjor",
        slug: "forkjorsveg",
        name: "Forkjørsveg",
        setup: "Grønn bil kjører på en forkjørsveg (206). Blå bil kommer fra sidevegen og skal til høyre.",
        why: "På en forkjørsveg har trafikken fra sideveiene vikeplikt. Blå bil venter til grønn bil har passert, og kjører så ut etter den.",
        first: "Grønn bil"
    },
    {
        id: "venstre",
        slug: "venstresving",
        name: "Venstresving",
        setup: "Blå bil skal svinge til venstre. Rød bil kommer imot og skal rett fram.",
        why: "Den som svinger til venstre, viker for møtende kjøretøy. Blå bil venter til rød bil har passert.",
        first: "Rød bil"
    },
    {
        id: "rundkjoring",
        slug: "rundkjoring",
        name: "Rundkjøring",
        setup: "Blå bil skal inn i rundkjøringen. Rød bil er allerede inne i rundkjøringen.",
        why: "Foran rundkjøringen står det vikepliktskilt og vikelinje. Blå bil har vikeplikt for trafikken som allerede er inne i rundkjøringen.",
        first: "Rød bil"
    },
    {
        id: "parkering",
        slug: "utkjoring",
        name: "Utkjøring",
        setup: "Blå bil kjører ut fra en parkeringsplass. Rød bil kommer på vegen.",
        why: "Den som kjører ut fra en parkeringsplass, garasje eller eiendom, viker for trafikken på vegen. Blå bil venter til rød bil har passert.",
        first: "Rød bil"
    },
    {
        id: "lys",
        slug: "trafikklys",
        name: "Trafikklys",
        setup: "Blå bil har vikepliktskilt, men også grønt lys. Grønn bil har rødt lys.",
        why: "Så lenge trafikklyset er i drift, gjelder lyset foran vikepliktskiltet. Blå bil har grønt og kjører først. Grønn bil stopper for rødt.",
        first: "Blå bil"
    }
]

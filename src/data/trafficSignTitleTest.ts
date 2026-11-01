// Tittel-test for skiltsider (startet 1.11.2026, ikke publisert ennå).
// Testgruppen er hver andre av de 50 skiltsidene med flest visninger i Search Console
// (90 dager til 30.10.2026). De andre 25 er sammenligningsgruppe. Se docs/skilt-tittel-test-2026-11-01/.
// Endring: navnet først i tittel og H1, vanlig skrivemåte («vei») i tillegg til den offisielle («veg»),
// og første setning på siden svarer på hva skiltet betyr. Faktaene er kontrollert mot
// skiltforskriften og trafikkreglene 1.11.2026.

export interface SignTitleTest {
  /** Navnet slik folk søker, med skiltnummer, for eksempel «Enveiskjøring (skilt 526 Envegskjøring)». */
  name: string;
  /** Første setning på siden og starten på metabeskrivelsen. */
  lead: string;
}

export const signTitleTest: Record<string, SignTitleTest> = {
  '302': { name: 'Innkjøring forbudt (skilt 302)', lead: 'Innkjøring forbudt (skilt 302) betyr at du ikke har lov til å kjøre forbi skiltet. Sykling og el-sparkesykkel på fortau kan likevel være lov.' },
  '204': { name: 'Stopp (skilt 204)', lead: 'Stopp (skilt 204) betyr at du skal stanse helt før stopplinjen eller krysset, og deretter vike for trafikken på veien du skal inn på eller krysse.' },
  '366': { name: 'Fartsgrensesone (skilt 366)', lead: 'Fartsgrensesone (skilt 366) betyr at fartsgrensen på skiltet gjelder i hele området, også etter veikryss, helt til sonen slutter.' },
  '555': { name: 'Havarilomme (skilt 555)', lead: 'Havarilomme (skilt 555) viser en utvidelse av veien eller tunnelen der du kan stanse ved havari eller en annen nødsituasjon.' },
  '202': { name: 'Vikeplikt (skilt 202)', lead: 'Vikeplikt (skilt 202) betyr at du skal vike for kjørende fra begge sider på veien du kjører inn på eller krysser.' },
  '524': { name: 'Møteplass (skilt 524)', lead: 'Møteplass (skilt 524) viser en utvidelse av en smal vei der kjøretøy kan passere hverandre. Du må ikke parkere der.' },
  '527': { name: 'Blindvei (skilt 527 Blindveg)', lead: 'Blindvei (skilt 527 Blindveg) betyr at veien er stengt og ikke fører gjennom. Skiltet er ikke et forbud mot å kjøre inn.' },
  '372': { name: 'Parkering forbudt (skilt 372)', lead: 'Parkering forbudt (skilt 372) betyr at du ikke kan parkere på den siden av veien der skiltet står. Kort stans for av- og påstigning er lov.' },
  '335': { name: 'Forbikjøringsforbud for lastebil (skilt 335)', lead: 'Forbikjøringsforbud for lastebil (skilt 335) betyr at lastebil over 3500 kg tillatt totalvekt ikke kan kjøre forbi motorvogn med flere enn to hjul.' },
  '640.10': { name: 'Severdighet (skilt 640.10)', lead: 'Severdighet (skilt 640.10) viser vei til et kulturminne, et historisk sted eller en annen severdighet.' },
  '370': { name: 'Stans forbudt (skilt 370)', lead: 'Stans forbudt (skilt 370) betyr at du ikke kan stanse på den siden av veien der skiltet står, heller ikke for å slippe av noen.' },
  '306.1': { name: 'Forbudt for motorvogn (skilt 306.1)', lead: 'Forbudt for motorvogn (skilt 306.1) betyr at du ikke kan kjøre motorvogn forbi skiltet. Liten elektrisk motorvogn, som el-sparkesykkel, er unntatt.' },
  '540': { name: 'Gatetun (skilt 540)', lead: 'Gatetun (skilt 540) betyr at du kjører inn i et område der du skal kjøre i gangfart og har vikeplikt for gående.' },
  '532': { name: 'Kjørefelt slutter (skilt 532)', lead: 'Kjørefelt slutter (skilt 532) betyr at feltet du kjører i, slutter. Du må skifte felt og har vikeplikt for trafikken i feltet du skal inn i.' },
  '330.2': { name: 'Svingforbud til venstre (skilt 330.2)', lead: 'Svingforbud til venstre (skilt 330.2) betyr at du ikke kan svinge til venstre i krysset ved skiltet, eller i første kryss etter det.' },
  '822.1': { name: 'Forløp av forkjørsvei (underskilt 822.1)', lead: 'Forløp av forkjørsvei (underskilt 822.1) viser hvordan forkjørsveien går gjennom krysset når den svinger.' },
  '142': { name: 'Barn (skilt 142)', lead: 'Barn (skilt 142) varsler at barn ofte ferdes eller oppholder seg på eller ved veien, for eksempel ved skole, barnehage eller lekeplass.' },
  '940': { name: 'Trafikkjegle (skilt 940)', lead: 'Trafikkjegle (skilt 940) brukes til midlertidig oppmerking, innsnevring eller sperring av kjørefelt.' },
  '503': { name: 'Motortrafikkvei (skilt 503 Motortrafikkveg)', lead: 'Motortrafikkvei (skilt 503 Motortrafikkveg) betyr at reglene for motortrafikkvei gjelder: ingen stans, rygging eller vending, og bare kjøretøy som kan kjøre minst 40 km/t.' },
  '336': { name: 'Slutt på forbikjøringsforbud (skilt 336)', lead: 'Slutt på forbikjøringsforbud (skilt 336) betyr at forbudet fra skilt 334 slutter. Sperrelinjer i veien gjelder fortsatt.' },
  '135': { name: 'Planovergang uten bom (skilt 135)', lead: 'Planovergang uten bom (skilt 135) varsler at veien krysser jernbane eller sporvei uten bom. Se og lytt etter tog før du kjører over.' },
  '806': { name: 'Tid (underskilt 806)', lead: 'Tid (underskilt 806) betyr at skiltet over bare gjelder i tidsrommet som står. Sorte tall gjelder hverdager, tall i parentes lørdag og røde tall søn- og helligdager.' },
  '148': { name: 'Møtende trafikk (skilt 148)', lead: 'Møtende trafikk (skilt 148) varsler at det kan komme trafikk mot deg i samme kjørebane.' },
  '522': { name: 'Gang- og sykkelvei (skilt 522)', lead: 'Gang- og sykkelvei (skilt 522 Gang- og sykkelveg) betyr at veien er for gående, syklende og el-sparkesykkel. Bil og moped kan ikke kjøre der.' },
  '526': { name: 'Enveiskjøring (skilt 526 Envegskjøring)', lead: 'Enveiskjøring (skilt 526 Envegskjøring) betyr at du bare kan kjøre i pilens retning fram til første veikryss.' },
};

export const signTestTitle = (t: SignTitleTest) => {
  const full = `${t.name} – hva betyr det?`;
  return full.length <= 60 ? full : t.name;
};

export const signTestDescription = (t: SignTitleTest) => {
  const withHook = `${t.lead} Se eksempler og vanlige feil.`;
  return withHook.length <= 160 ? withHook : t.lead;
};

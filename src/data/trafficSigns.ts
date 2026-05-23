export interface TrafficSign {
  id: string;
  code: string;
  name: string;
  displayName?: string;
  slug: string;
  category: string;
  imagePath: string;
  shortExplanation: string;
  longExplanation?: string;
  theoryTrap: string;
  whatToDo?: string[];
  confusedWith?: string[];
  sources: { name: string; url: string }[];
  aliases?: string[];
}

export const trafficSigns: TrafficSign[] = [
  // --- VIKEPLIKT- OG FORKJØRSSKILT (Aktiv Kategori) ---
  {
    id: '202',
    code: '202',
    name: 'Vikeplikt',
    displayName: 'Vikeplikt',
    slug: 'vikeplikt',
    category: 'vikeplikt-og-forkjorsskilt',
    imagePath: '/signs/vikeplikt-og-forkjorsskilt/skilt-202-vikeplikt.jpg',
    shortExplanation: 'Viser at du har vikeplikt for kjørende trafikk i begge retninger på kryssende veg.',
    longExplanation: 'Vikepliktsskiltet forteller at du må vike for kryssende trafikk. Dette betyr at du skal senke farten i god tid for å vise at du har tenkt å overholde vikeplikten. Du må ikke forstyrre eller hindre kryssende trafikk, og du må om nødvendig stanse helt opp. Det er ikke krav om å stoppe dersom det er fri sikt og ingen kryssende trafikk.',
    theoryTrap: 'Mange tror feilaktig at vikepliktskilt betyr at du ALLTID må stoppe, slik som ved stoppskilt. Du skal derimot kun stoppe dersom det er nødvendig for å slippe frem kryssende trafikk.',
    whatToDo: [
      'Senk farten i god tid før krysset for å vise tydelig at du viker.',
      'Sjekk kryssende trafikk grundig i begge retninger.',
      'Stans helt om det kommer biler eller andre kjøretøy du har vikeplikt for.'
    ],
    confusedWith: ['204', '212'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['yield', 'gi vikeplikt', 'trekant']
  },
  {
    id: '204',
    code: '204',
    name: 'Stopp',
    displayName: 'Stopp',
    slug: 'stopp',
    category: 'vikeplikt-og-forkjorsskilt',
    imagePath: '/signs/vikeplikt-og-forkjorsskilt/skilt-204-stopp.jpg',
    shortExplanation: 'Viser at du har vikeplikt for kjørende trafikk på kryssende veg, og at du alltid skal stoppe helt før innkjøring eller kryssing.',
    longExplanation: 'Stoppskiltet krever at du stanser kjøretøyet fullstendig før du kjører inn i eller over krysset. Du skal stoppe foran den hvite stopplinjen. Dersom stopplinje mangler, må du stanse på et sted der du har best mulig oversikt over den kryssende vegen, umiddelbart før du kjører inn i krysset.',
    theoryTrap: 'Å gjøre en «rullende stopp» der hjulene ikke står helt stille er ulovlig og vil føre til stryk på oppkjøringen eller teoriprøven. Hjulene må stå helt i ro i minst 1-2 sekunder.',
    whatToDo: [
      'Stopp kjøretøyet helt opp bak stopplinjen.',
      'Sørg for at hjulene står helt i ro i minst 1-2 sekunder.',
      'Vike for all trafikk på den kryssende vegen før du svinger eller kjører videre.'
    ],
    confusedWith: ['202'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['stop', 'stoppe', 'stoppskilt']
  },
  {
    id: '206',
    code: '206',
    name: 'Forkjørsveg',
    displayName: 'Forkjørsveg',
    slug: 'forkjorsveg',
    category: 'vikeplikt-og-forkjorsskilt',
    imagePath: '/signs/vikeplikt-og-forkjorsskilt/skilt-206-forkjorsveg.jpg',
    shortExplanation: 'Viser at sideveger har vikeplikt for deg. Vikeplikten gjelder til skiltet «Slutt på forkjørsveg» eller annet vikepliktskilt settes opp.',
    longExplanation: 'Når du kjører på en forkjørsveg, har kjørende fra sideveger vikeplikt for deg. Det betyr at du ikke trenger å vike for trafikk fra høyre (høyreregelen gjelder ikke). Skiltet gjentas etter viktige kryss for å bekrefte at vegen fortsatt har forkjørsstatus.',
    theoryTrap: 'Forkjørsrett fritar deg ALDRI for plikten til å være aktpågivende og varsom. Du må fortsatt vike for fotgjengere i gangfelt og svingende trafikk, og du må kjøre defensivt.',
    whatToDo: [
      'Fortsett videre uten å vike for sideveger (høyreregelen er opphevet).',
      'Vær oppmerksom på kryssende trafikanter som kan overse sin vikeplikt.',
      'Husk at svingeregler og vikeplikt for myke trafikanter fortsatt gjelder.'
    ],
    confusedWith: ['208', '210'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['forkjørsvei', 'diamant', 'gul diamant']
  },
  {
    id: '208',
    code: '208',
    name: 'Slutt på forkjørsveg',
    displayName: 'Slutt på forkjørsveg',
    slug: 'slutt-pa-forkjorsveg',
    category: 'vikeplikt-og-forkjorsskilt',
    imagePath: '/signs/vikeplikt-og-forkjorsskilt/skilt-208-slutt-pa-forkjorsveg.jpg',
    shortExplanation: 'Viser at vegen ikke lenger er forkjørsveg, og at høyreregelen eller andre skilt regulerer vikeplikten framover.',
    longExplanation: 'Dette skiltet markerer at den særskilte forkjørsretten din opphører. Fra dette punktet gjelder vanlige trafikkregler, noe som betyr at du vanligvis må gi vikeplikt til biler som kommer fra høyre (høyreregelen), med mindre et nytt skilt regulerer neste kryss.',
    theoryTrap: 'Når forkjørsvegen slutter, gjelder høyreregelen i neste uregulerte kryss. Dette er en typisk teorifelle hvor man blir spurt om hvem som har vikeplikt like etter at dette skiltet er passert.',
    whatToDo: [
      'Forbered deg på at høyreregelen nå gjelder i uregulerte kryss.',
      'Tilpass farten og vær ekstra oppmerksom på veger fra din høyre side.'
    ],
    confusedWith: ['206'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['slutt på forkjørsvei', 'opphevet forkjørsveg']
  },
  {
    id: '210',
    code: '210',
    name: 'Forkjørsvegkryss',
    displayName: 'Forkjørsvegkryss',
    slug: 'forkjorsvegkryss',
    category: 'vikeplikt-og-forkjorsskilt',
    imagePath: '/signs/vikeplikt-og-forkjorsskilt/skilt-210-forkjorskryss.jpg',
    shortExplanation: 'Viser at du har forkjørsrett i det kommende krysset. Trafikk fra sideveger har vikeplikt.',
    longExplanation: 'Dette skiltet forteller at du har forkjørsrett i det neste krysset du kommer til. Trafikk fra sidevegene møter enten vikepliktskilt (202) eller stoppskilt (204). Til forskjell fra skilt 206 (Forkjørsveg), gjelder dette skiltet kun for det kommende krysset, ikke for hele strekningen.',
    theoryTrap: 'Husk at dette skiltet KUN gjelder det første krysset etter skiltet. Mange forveksler det med skilt 206, som gjelder for en hel strekning inntil opphevelsesskilt.',
    whatToDo: [
      'Kjør normalt gjennom det kommende krysset uten å vike for sideveger.',
      'Vær forberedt på at høyreregelen igjen gjelder i kryssene etter dette krysset.'
    ],
    confusedWith: ['206'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['forkjørskryss', 'kryss med vikeplikt']
  },
  {
    id: '212',
    code: '212',
    name: 'Vikeplikt overfor møtende kjørende',
    displayName: 'Vikeplikt overfor møtende kjørende',
    slug: 'vikeplikt-overfor-motende-kjorende',
    category: 'vikeplikt-og-forkjorsskilt',
    imagePath: '/signs/vikeplikt-og-forkjorsskilt/skilt-212-vikeplikt-overfor-motende-kjorende.jpg',
    shortExplanation: 'Viser at du har vikeplikt for møtende kjørende på grunn av smal veg eller hindring.',
    longExplanation: 'Dette skiltet settes opp på steder der vegen er for smal til at to biler kan passere samtidig, eller der det er en hindring. Skiltet betyr at du har vikeplikt for møtende trafikk. Du må stoppe før den smale strekningen og vente til møtende biler har passert.',
    theoryTrap: 'Den røde pilen peker i din kjøreretning, og den svarte/hvite pilen peker mot deg. Rød farge betyr forbud/vikeplikt, så det er DU som må vente. Mange forveksler retningene på pilene på teoriprøven.',
    whatToDo: [
      'Stopp før den smale passasjen dersom det er møtende kjøretøy i sikte.',
      'La de møtende passere uhindret før du kjører videre.'
    ],
    confusedWith: ['214'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['møtende trafikk', 'smal vei', 'rød pil']
  },
  {
    id: '214',
    code: '214',
    name: 'Møtende kjørende har vikeplikt',
    displayName: 'Møtende kjørende har vikeplikt',
    slug: 'motende-kjorende-har-vikeplikt',
    category: 'vikeplikt-og-forkjorsskilt',
    imagePath: '/signs/vikeplikt-og-forkjorsskilt/skilt-214-motende-kjorende-har-vikeplikt.jpg',
    shortExplanation: 'Viser at møtende kjørende har vikeplikt for deg på grunn av smal veg eller hindring.',
    longExplanation: 'Dette skiltet gir deg rett til å kjøre først inn på den smale veistrekningen. Møtende trafikanter ser skilt 212 og skal stoppe for å slippe deg frem. Den hvite pilen peker i din kjøreretning (du kan kjøre), mens den møtende retningen er markert med en rød pil (de må vente).',
    theoryTrap: 'Selv om du har forkjørsrett, kan du ikke tvinge deg frem dersom en møtende bil allerede har kjørt inn i den smale strekningen. Du må da vise aktsomhet og eventuelt vente.',
    whatToDo: [
      'Kjør inn på den smale strekningen med normal aktsomhet.',
      'Vær forberedt på å stoppe dersom et møtende kjøretøy allerede er inne på strekningen.'
    ],
    confusedWith: ['212'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['møtende vikeplikt', 'smal vei forkjørsrett', 'hvit pil']
  },

  // --- FARESKILT (Aktiv Kategori) ---
  {
    id: '100.1',
    code: '100.1',
    name: 'Farlig sving til høyre',
    displayName: 'Farlig sving til høyre',
    slug: 'farlig-sving-til-hoyre',
    category: 'fareskilt',
    imagePath: '/signs/fareskilt/skilt-100-1-farlig-sving-til-hoyre.jpg',
    shortExplanation: 'Varsler om en farlig sving til høyre på vegen forut.',
    longExplanation: 'Skiltet brukes der en sving er så skarp, uoversiktlig eller har en utforming som gjør det nødvendig å varsle førerne spesielt. Du må redusere hastigheten i god tid før svingen.',
    theoryTrap: 'Mange tror skiltet påbyr en bestemt hastighet. Det er kun en advarsel, og du må selv vurdere trygg fart basert på sikt og føreforhold.',
    whatToDo: [
      'Senk farten før du kjører inn i svingen.',
      'Hold kjøretøyet godt til høyre i eget kjørefelt for å unngå motgående biler.',
      'Unngå forbikjøringer og brå rattbevegelser.'
    ],
    confusedWith: ['100.2', '102.1'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['sving', 'høyre', 'høyresving', 'farlig sving']
  },
  {
    id: '100.2',
    code: '100.2',
    name: 'Farlig sving til venstre',
    displayName: 'Farlig sving til venstre',
    slug: 'farlig-sving-til-venstre',
    category: 'fareskilt',
    imagePath: '/signs/fareskilt/skilt-100-2-farlig-sving-til-venstre.jpg',
    shortExplanation: 'Varsler om en farlig sving til venstre på vegen forut.',
    longExplanation: 'Settes opp der en sving til venstre er skarp eller har ugunstig dosering. Bremsearbeidet skal gjøres ferdig på rettstrekningen før svingen starter.',
    theoryTrap: 'Å bremse midt inne i en sving reduserer bilens sideveis veigrep. Dette øker sjansen for skrens, spesielt på glatt eller fuktig vegbane.',
    whatToDo: [
      'Brems ned til en trygg hastighet før svingen begynner.',
      'Vær forberedt på motgående trafikk som kan kutte svingen.',
      'Hold kjøretøyet stabilt i eget felt.'
    ],
    confusedWith: ['100.1', '102.1'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['sving', 'venstre', 'venstresving', 'farlig sving']
  },
  {
    id: '102.1',
    code: '102.1',
    name: 'Farlige svinger',
    displayName: 'Farlige svinger, den første til høyre',
    slug: 'farlige-svinger-forst-til-hoyre',
    category: 'fareskilt',
    imagePath: '/signs/fareskilt/skilt-102-1-farlige-svinger-forst-til-hoyre.jpg',
    shortExplanation: 'Varsler om flere farlige svinger forut, der den første er til høyre.',
    longExplanation: 'Varsler om en serie med skarpe svinger etter hverandre. Symbolet nederst viser retningen på den første svingen. Avstanden eller strekningen kan være angitt med et underskilt.',
    theoryTrap: 'Skiltet viser bare retningen på den første svingen. Den neste svingen vil gå i motsatt retning. Mange glemmer dette og blir overrasket.',
    whatToDo: [
      'Tilpass farten slik at du beholder kontrollen gjennom alle svingene.',
      'Hold deg godt innenfor ditt eget felt.',
      'Vær oppmerksom på redusert sikt.'
    ],
    confusedWith: ['100.1', '100.2'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['flere svinger', 'svinger', 's-sving']
  },
  {
    id: '106.1',
    code: '106.1',
    name: 'Smalere veg',
    displayName: 'Smalere veg på begge sider',
    slug: 'smalere-veg-begge-sider',
    category: 'fareskilt',
    imagePath: '/signs/fareskilt/skilt-106-1-smalere-veg-begge-sider.jpg',
    shortExplanation: 'Varsler om at vegen blir smalere på begge sider forut.',
    longExplanation: 'Settes opp der vegbredden reduseres slik at møting blir vanskelig, for eksempel før en smal bro, tunnel eller undergang.',
    theoryTrap: 'Dette skiltet ger deg ikke forkjørsrett. Hvis vegen er for smal for to kjøretøy, må dere samarbeide eller følge eventuelle vikepliktsskilt.',
    whatToDo: [
      'Senk farten og hold ekstra godt til høyre.',
      'Vær forberedt på å stoppe på en møteplass om nødvendig.',
      'Sjekk om det kommer møtende trafikk på den smale strekningen.'
    ],
    confusedWith: ['212', '214'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['smal veg', 'smalere vei', 'innsnevring']
  },
  {
    id: '108',
    code: '108',
    name: 'Ujevn veg',
    displayName: 'Ujevn veg',
    slug: 'ujevn-veg',
    category: 'fareskilt',
    imagePath: '/signs/fareskilt/skilt-108-ujevn-veg.jpg',
    shortExplanation: 'Varsler om at kjørebanen har ujevnheter, huller eller humper.',
    longExplanation: 'Settes opp på strekninger der vegen er i dårlig stand, eller der det er ujevnheter som kan skade bilen eller føre til tap av kontroll ved vanlig fart.',
    theoryTrap: 'Å kjøre for fort over dype hull eller ujevnheter kan skade dekk, felger og hjuloppheng, eller kaste bilen ut av kurs.',
    whatToDo: [
      'Reduser hastigheten umiddelbart.',
      'Hold rattet stødig med begge hender.',
      'Se opp for biler foran som bremser brått eller svinger unna huller.'
    ],
    confusedWith: ['109'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['dårlig vei', 'hull', 'skader', 'humpete']
  },
  {
    id: '109',
    code: '109',
    name: 'Fartshump',
    displayName: 'Fartshump',
    slug: 'fartshump',
    category: 'fareskilt',
    imagePath: '/signs/fareskilt/skilt-109-fartshump.jpg',
    shortExplanation: 'Varsler om en fysisk fartshump anlagt i vegen.',
    longExplanation: 'Brukes i boligstrøk og gater der det er krav om spesielt lav hastighet. Humpen er utformet for å tvinge farten ned for å beskytte myke trafikanter.',
    theoryTrap: 'Fartshumper er laget for en bestemt fart (f.eks. 30 km/t). Kjører du raskere, kan det gi kraftige slag og skade bilens understell.',
    whatToDo: [
      'Senk farten til en behagelig og trygg hastighet før humpene.',
      'Kjør mykt over og hold jevn lav fart.',
      'Vær oppmerksom på kryssende fotgjengere.'
    ],
    confusedWith: ['108'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['hump', 'fartsdump', 'dump']
  },
  {
    id: '110',
    code: '110',
    name: 'Vegarbeid',
    displayName: 'Vegarbeid',
    slug: 'vegarbeid',
    category: 'fareskilt',
    imagePath: '/signs/fareskilt/skilt-110-vegarbeid.jpg',
    shortExplanation: 'Varsler om arbeid på eller langs vegen forut.',
    longExplanation: 'Settes opp ved anleggsområder. Det kan forekomme arbeidere i vegen, maskiner, grus, ujevn veg og endret kjøremønster.',
    theoryTrap: 'Midlertidige skilt på gul bunn gjelder foran de vanlige skiltene på stedet. Du må alltid følge de gule linjene og midlertidige skilt.',
    whatToDo: [
      'Reduser farten og hold god sikkerhetsavstand.',
      'Følg anvisninger fra skilt, lys eller vakter på stedet.',
      'Vis hensyn til de som jobber på vegen.'
    ],
    confusedWith: [],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['veiarbeid', 'arbeid', 'vegarbeid']
  },
  {
    id: '112',
    code: '112',
    name: 'Steinsprut',
    displayName: 'Steinsprut',
    slug: 'steinsprut',
    category: 'fareskilt',
    imagePath: '/signs/fareskilt/skilt-112-steinsprut.jpg',
    shortExplanation: 'Varsler om fare for løs grus og steinsprut fra dekk.',
    longExplanation: 'Brukes ofte etter asfaltering eller grusing av veg. Steinene kan slynges ut i høy fart og skade frontruter og lakk.',
    theoryTrap: 'For å unngå skade må du øke avstanden til forangående biler. Mange tror faren bare gjelder for deres eget kjøretøy.',
    whatToDo: [
      'Øk avstanden til bilen foran betydelig.',
      'Senk farten ved møting for å redusere kraften i steinsprut.',
      'Kjør rolig uten hjulspinn.'
    ],
    confusedWith: [],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['grus', 'løs grus', 'stein', 'steinsprut']
  },
  {
    id: '116',
    code: '116',
    name: 'Glatt kjørebane',
    displayName: 'Glatt kjørebane',
    slug: 'glatt-kjorebane',
    category: 'fareskilt',
    imagePath: '/signs/fareskilt/skilt-116-glatt-kjorebane.jpg',
    shortExplanation: 'Varsler om strekning der kjørebanen under visse forhold kan bli glatt.',
    longExplanation: 'Advarer mot glatt vegbane. Dette gjelder spesielt ved regn (såpeeffekt), rim, is eller nylagt asfalt.',
    theoryTrap: 'Veien kan være glatt også om sommeren, spesielt ved lett regn etter en tørrperiode, da oljerester og støv flyter opp.',
    whatToDo: [
      'Senk farten og unngå brå bevegelser med ratt eller bremser.',
      'Øk sikkerhetsavstanden til kjøretøyet foran.',
      'Sjekk veigrepet forsiktig der det er trygt og oversiktlig.'
    ],
    confusedWith: [],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['glatt', 'is', 'glatt kjørebane', 'såpeglatt', 'hålke']
  },
  {
    id: '122',
    code: '122',
    name: 'Tunnel',
    displayName: 'Tunnel',
    slug: 'tunnel',
    category: 'fareskilt',
    imagePath: '/signs/fareskilt/skilt-122-tunnel.jpg',
    shortExplanation: 'Varsler om tunnel forut.',
    longExplanation: 'Forbereder føreren på tunnelkjøring, hvor lysforholdene endres brått og kjøremiljøet blir mer lukket.',
    theoryTrap: 'Det er påbudt å bruke nærlys/kjørelys i tunnel. Du må aldri snu eller rygge inne i en tunnel.',
    whatToDo: [
      'Slå på nærlys og ta av solbriller før du kjører inn.',
      'Hold god avstand til forangående bil.',
      'Følg med på rømningsveger og nødtelefoner.'
    ],
    confusedWith: [],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['tunnel', 'tunnell']
  },
  {
    id: '124',
    code: '124',
    name: 'Farlig vegkryss',
    displayName: 'Farlig vegkryss',
    slug: 'farlig-vegkryss',
    category: 'fareskilt',
    imagePath: '/signs/fareskilt/skilt-124-farlig-vegkryss.jpg',
    shortExplanation: 'Varsler om uoversiktlig eller farlig vegkryss der høyreregelen gjelder.',
    longExplanation: 'Settes opp før uregulerte kryss der det er dårlig sikt eller spesielt viktig å være oppmerksom. Du har vikeplikt for all kjørende trafikk fra høyre.',
    theoryTrap: 'Mange tror at vegen med mest trafikk har forkjørsrett. Ved dette skiltet gjelder alltid den vanlige høyreregelen.',
    whatToDo: [
      'Senk farten og vær klar til å stoppe for trafikk fra høyre.',
      'Sjekk krysset grundig i begge retninger.',
      'Hold foten klar over bremsepedalen.'
    ],
    confusedWith: ['210'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['kryss', 'veikryss', 'høyreregel', 'vegkryss']
  },
  {
    id: '126',
    code: '126',
    name: 'Rundkjøring',
    displayName: 'Rundkjøring',
    slug: 'rundkjoring',
    category: 'fareskilt',
    imagePath: '/signs/fareskilt/skilt-126-rundkjoring.jpg',
    shortExplanation: 'Varsler om rundkjøring forut.',
    longExplanation: 'Settes opp for å varsle om at next kryss er en rundkjøring, slik at du kan tilpasse fart og plassering i tide.',
    theoryTrap: 'Fareskiltet gir deg ikke vikeplikt i seg selv, men du vil møte vikepliktsskilt (202) rett før selve rundkjøringen.',
    whatToDo: [
      'Tilpass farten og plasser deg i riktig felt i god tid.',
      'Vike for trafikk som allerede er inne i rundkjøringen.',
      'Blink deg ut når du forlater rundkjøringen.'
    ],
    confusedWith: ['406'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['rundkjøring', 'rundkjoring', 'sirkel']
  },
  {
    id: '132',
    code: '132',
    name: 'Trafikklyssignal',
    displayName: 'Trafikklyssignal',
    slug: 'trafikklyssignal',
    category: 'fareskilt',
    imagePath: '/signs/fareskilt/skilt-132-trafikklyssignal.jpg',
    shortExplanation: 'Varsler om vegstrekning der trafikken reguleres av trafikklyssignal.',
    longExplanation: 'Settes opp på steder der lysregulering ikke kan ventes, eller der sikten frem mot lyset er redusert.',
    theoryTrap: 'Hvis lyset blinker gult, er reguleringen ute av drift. Da gjelder vanlig vikeplikt eller skilting på stedet.',
    whatToDo: [
      'Tilpass farten slik at du kan stanse kontrollert om lyset blir gult eller rødt.',
      'Sjekk lyset på avstand.',
      'Vær klar til å stoppe.'
    ],
    confusedWith: [],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['lys', 'trafikklys', 'lyssignal']
  },
  {
    id: '134',
    code: '134',
    name: 'Planovergang med bom',
    displayName: 'Planovergang med bom',
    slug: 'planovergang-med-bom',
    category: 'fareskilt',
    imagePath: '/signs/fareskilt/skilt-134-planovergang-med-bom.jpg',
    shortExplanation: 'Varsler om jernbaneovergang eller sporvegskryssing med bom eller halvbom.',
    longExplanation: 'Varsler om at vegen krysser jernbane eller sporveg med fysiske bommer. Planoverganger innebærer høy risiko.',
    theoryTrap: 'Bommen kan være nede selv om du ikke ser tog. Gå aldri under eller prøv å snike deg forbi senkede bommer.',
    whatToDo: [
      'Senk farten, lytt etter tog og se til begge sider.',
      'Stopp helt om det blinker rødt lys eller bommen senkes.',
      'Ikke kjør over hvis det er kø på andre siden av sporet.'
    ],
    confusedWith: ['135'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['tog', 'planovergang', 'jernbane', 'bom']
  },
  {
    id: '135',
    code: '135',
    name: 'Planovergang uten bom',
    displayName: 'Planovergang uten bom',
    slug: 'planovergang-uten-bom',
    category: 'fareskilt',
    imagePath: '/signs/fareskilt/skilt-135-planovergang-uten-bom.jpg',
    shortExplanation: 'Varsler om jernbaneovergang eller sporvegskryssing uten bom.',
    longExplanation: 'Varsler om planovergang uten fysiske stengsler. Dette krever ekstra stor årvåkenhet og sjekk av begge retninger før kryssing.',
    theoryTrap: 'Siden det ikke er bommer, må du aldri anta at sporet er fritt uten å ha sett og lyttet grundig selv.',
    whatToDo: [
      'Brems ned til lav fart og se godt til begge sider.',
      'Lytt etter tog og vær klar til å stoppe.',
      'Kryss sporet raskt når det er klart.'
    ],
    confusedWith: ['134'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['tog', 'planovergang', 'jernbane', 'uten bom']
  },
  {
    id: '140',
    code: '140',
    name: 'Fotgjengere',
    displayName: 'Fotgjengere',
    slug: 'fotgjengere',
    category: 'fareskilt',
    imagePath: '/signs/fareskilt/skilt-140-avstand-til-gangfelt.jpg',
    shortExplanation: 'Varsler om et sted der fotgjengere ofte krysser eller oppholder seg i kjørebanen.',
    longExplanation: 'Settes opp i forkant av gangfelt som ligger uoversiktlig til, eller på steder der fotgjengere jevnlig krysser uten at det er merket gangfelt.',
    theoryTrap: 'Skiltet markerer ikke selve gangfeltets nøyaktige plassering, men varsler deg i god tid før slik at du kan senke farten.',
    whatToDo: [
      'Senk farten og vær klar til å vike for fotgjengere.',
      'Sjekk fortau og kanter nøye for personer på veg ut i vegen.',
      'Vis tydelig at du bremser ned for å slippe gående over.'
    ],
    confusedWith: ['516'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['fotgjenger', 'gangfelt', 'gå', 'fotgjengere']
  },
  {
    id: '142',
    code: '142',
    name: 'Barn',
    displayName: 'Barn',
    slug: 'barn',
    category: 'fareskilt',
    imagePath: '/signs/fareskilt/skilt-142-barn.jpg',
    shortExplanation: 'Varsler om at barn ofte oppholder seg eller krysser vegen forut.',
    longExplanation: 'Brukes nær skoler, barnehager, lekeplasser og boligområder. Barn er impulsive, har begrenset trafikkforståelse og kan brått løpe ut i vegen.',
    theoryTrap: 'Barn klarer ikke å bedømme biltrafikkens fart og avstand korrekt. Du som bilfører har det fulle ansvaret for å avverge fare.',
    whatToDo: [
      'Reduser hastigheten og hold ekstra utkikk langs vegkanten.',
      'Vær forberedt på å stoppe helt opp på kort varsel.',
      'Se etter tegn på lek eller aktivitet i nærheten.'
    ],
    confusedWith: ['140'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['barn', 'skole', 'barnehage', 'lekeplass']
  },
  {
    id: '144',
    code: '144',
    name: 'Syklende',
    displayName: 'Syklende',
    slug: 'syklende',
    category: 'fareskilt',
    imagePath: '/signs/fareskilt/skilt-144-syklende.jpg',
    shortExplanation: 'Varsler om at syklende ofte krysser eller kjører inn på vegen.',
    longExplanation: 'Settes opp der en sykkelveg krysser kjørebanen eller der syklister regelmessig blander seg med biltrafikken.',
    theoryTrap: 'Selv om syklende som krysser fra en gang- og sykkelveg har vikeplikt for biler, fritar det ikke bilfører for aktsomhetsplikten.',
    whatToDo: [
      'Hold god avstand ved passering (minst 1,5 meter sideavstand).',
      'Sjekk blindsoner grundig ved svinging.',
      'Vær klar til å vike dersom en syklist opptrer uforutsigbart.'
    ],
    confusedWith: ['306.6'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['sykkel', 'syklende', 'syklist']
  },
  {
    id: '146-1',
    code: '146.1',
    name: 'Elg',
    displayName: 'Elg',
    slug: 'elg',
    category: 'fareskilt',
    imagePath: '/signs/fareskilt/skilt-146-1-elg.jpg',
    shortExplanation: 'Varsler om strekning der det er fare for elg eller andre ville dyr på vegen.',
    longExplanation: 'Settes opp på kjente dyretråkk eller strekninger med mange påkjørsler. En kollisjon med elg kan gi enorme materielle og personskader.',
    theoryTrap: 'Faren for påkjøring er størst i skumringen, grålysningen og om natten, samt om vinteren når elgen trekker mot vegen.',
    whatToDo: [
      'Senk farten og skann skogbrynet kontinuerlig.',
      'Bruk fjernlys når det er mulig for å se refleksjoner fra dyrenes øyne.',
      'Husk at dyr ofte kommer flere sammen.'
    ],
    confusedWith: [],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['elg', 'dyr', 'hjort', 'vilt', 'viltfare']
  },
  {
    id: '148',
    code: '148',
    name: 'Møtende trafikk',
    displayName: 'Møtende trafikk',
    slug: 'motende-trafikk',
    category: 'fareskilt',
    imagePath: '/signs/fareskilt/skilt-148-motende-trafikk.jpg',
    shortExplanation: 'Varsler om at vegen har kjøring i begge retninger etter en strekning med enveiskjøring.',
    longExplanation: 'Brukes der en enveiskjørt veg eller en motorveg slutter, slik at du må forberede deg på motgående kjøretøy i samme vegbane.',
    theoryTrap: 'Når du har kjørt på enveiskjørt veg, kan du ubevisst legge deg til venstre i vegen. Dette skiltet varsler at du må holde til høyre med en gang.',
    whatToDo: [
      'Hold godt til høyre i kjørebanen.',
      'Vær oppmerksom på møtende biler.',
      'Fullfør eller avbryt eventuelle forbikjøringer raskt.'
    ],
    confusedWith: ['212', '214'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['møtende', 'toveis', 'møtende trafikk']
  },
  {
    id: '149',
    code: '149',
    name: 'Kø',
    displayName: 'Kø',
    slug: 'ko',
    category: 'fareskilt',
    imagePath: '/signs/fareskilt/skilt-149-ko.jpg',
    shortExplanation: 'Varsler om fare for uventet kødannelse og stillestående trafikk.',
    longExplanation: 'Settes opp før steder der det ofte oppstår uventet stopp eller kø, som etter uoversiktlige svinger eller bakketopper.',
    theoryTrap: 'En av de vanligste ulykkene på flerfeltsveger er påkjøring bakfra ved uventet kø. Du må reagere med en gang du ser skiltet.',
    whatToDo: [
      'Senk farten og øk sikkerhetsavstanden til kjøretøyet foran.',
      'Bruk nødblink midlertidig dersom du må bremse kraftig for å varsle biler bak.',
      'Følg godt med i speilene.'
    ],
    confusedWith: [],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['kø', 'ko', 'stillestående', 'trafikkork']
  },
  {
    id: '153',
    code: '153',
    name: 'Trafikkulykke',
    displayName: 'Trafikkulykke',
    slug: 'trafikkulykke',
    category: 'fareskilt',
    imagePath: '/signs/fareskilt/skilt-153-trafikkulykke.jpg',
    shortExplanation: 'Midlertidig varsling om at det har skjedd en trafikkulykke forut.',
    longExplanation: 'Settes opp av nødetatene eller vegtrafikksentralen for å advare mot fare ved et ulykkessted. Det kan være redningsmannskaper og sperringer i vegen.',
    theoryTrap: 'Ulykkessteder fører ofte til titting og distraksjon («gummihalsing»). Hold blikket på vegen foran deg for å unngå en ny ulykke.',
    whatToDo: [
      'Senk farten betraktelig og vær klar til å stoppe helt.',
      'Følg nøye tegn og anvisninger fra politi eller vakter.',
      'Passer ulykkesstedet i lav fart med god sikkerhetsavstand.'
    ],
    confusedWith: [],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['ulykke', 'kollisjon', 'smell', 'ulykkessted']
  },

  // --- FORBUDSSKILT (Aktiv Kategori) ---
  {
    id: '302',
    code: '302',
    name: 'Innkjøring forbudt',
    displayName: 'Innkjøring forbudt',
    slug: 'innkjoring-forbudt',
    category: 'forbudsskilt',
    imagePath: '/signs/forbudsskilt/skilt-302-innkjoring-forbudt.jpg',
    shortExplanation: 'Viser forbud mot å kjøre forbi skiltet. Sykling kan være tillatt ved underskilt.',
    longExplanation: 'Skiltet markerer at det er forbudt å kjøre inn på vegen fra denne retningen. Dette gjøres ofte for å regulere enveiskjørte veger, slik at trafikk kun flyter én veg. Vegen kan likevel ha trafikk i motsatt retning.',
    theoryTrap: 'Gjelder kun kjøring inn på vegen fra denne retningen. Vegen kan fortsatt være toveis og ha trafikk som kommer mot deg.',
    whatToDo: [
      'Ikke kjør inn i vegen som er sperret med dette skiltet.',
      'Se etter eventuelle underskilt som gjør unntak for syklende eller andre.',
      'Vær forberedt på at det kan komme motgående kjøretøy ut fra vegen.'
    ],
    confusedWith: [],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['innkjøring', 'innkjoring', 'enveiskjørt', 'forbudt innkjøring']
  },
  {
    id: '306.0',
    code: '306.0',
    name: 'Forbudt for alle kjøretøy',
    displayName: 'Forbudt for alle kjøretøy',
    slug: 'forbudt-for-alle-kjoretoy',
    category: 'forbudsskilt',
    imagePath: '/signs/forbudsskilt/skilt-306-0-forbudt-for-alle-kjoretoy.jpg',
    shortExplanation: 'Forbyr ferdsel med alle typer kjøretøy i begge retninger.',
    longExplanation: 'Dette skiltet betyr at vegen er helt stengt for all kjøretøytrafikk, inkludert sykler og mopeder. Gående kan likevel bruke vegen.',
    theoryTrap: 'Mange tror at syklister kan kjøre forbi dette skiltet, men skiltet gjelder også for syklende siden en sykkel er definert som et kjøretøy i trafikkreglene.',
    whatToDo: [
      'Ikke kjør inn på vegen med noen form for kjøretøy (heller ikke vanlig sykkel eller el-sparkesykkel).',
      'Gående kan passere fritt.'
    ],
    confusedWith: ['302', '306.1'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['alle kjøretøy', 'stengt veg', 'stengt', 'forbudt for alle kjøretøy']
  },
  {
    id: '306.1',
    code: '306.1',
    name: 'Forbudt for motorvogn',
    displayName: 'Forbudt for motorvogn',
    slug: 'forbudt-for-motorvogn',
    category: 'forbudsskilt',
    imagePath: '/signs/forbudsskilt/skilt-306-1-forbudt-for-motorvogn.jpg',
    shortExplanation: 'Forbyr ferdsel med motorvogn (kjøretøy med motor, unntatt tohjuls moped).',
    longExplanation: 'Skiltet forbyr kjøring med alle typer motorvogner (personbil, lastebil, motorsykkel, tre- og firehjuls moped/ATV). Tohjuls moped og vanlig sykkel er likevel tillatt.',
    theoryTrap: 'Husk at tohjuls moped er unntatt fra dette forbudet og kan kjøre her, mens motorsykkel og traktor er forbudt.',
    whatToDo: [
      'Ikke kjør her med bil, motorsykkel, ATV eller traktor.',
      'Du kan passere med vanlig sykkel eller tohjuls moped.'
    ],
    confusedWith: ['306.0'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['motorvogn', 'bil og motorsykkel', 'forbudt for motorvogn']
  },
  {
    id: '306.6',
    code: '306.6',
    name: 'Forbudt for syklende',
    displayName: 'Forbudt for syklende',
    slug: 'forbudt-for-syklende',
    category: 'forbudsskilt',
    imagePath: '/signs/forbudsskilt/skilt-306-6-forbudt-for-syklende.jpg',
    shortExplanation: 'Forbyr ferdsel med sykkel og små elektriske kjøretøy.',
    longExplanation: 'Skiltet markerer forbud mot sykling. Gjelder også for små elektriske kjøretøy (som el-sparkesykkel).',
    theoryTrap: 'Skiltet gjelder kun for syklende og el-sparkesykler. Gående kan fortsatt benytte vegen.',
    whatToDo: [
      'Gå av sykkelen og trill den dersom du må bruke vegen eller fortauet videre.',
      'Finn en alternativ rute som er tillatt for syklende.'
    ],
    confusedWith: ['306.8'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['sykkel forbudt', 'sykling', 'forbudt for syklende']
  },
  {
    id: '306.8',
    code: '306.8',
    name: 'Forbudt for gående og syklende',
    displayName: 'Forbudt for gående og syklende',
    slug: 'forbudt-for-gaende-og-syklende',
    category: 'forbudsskilt',
    imagePath: '/signs/forbudsskilt/skilt-306-8-forbudt-for-gaende-og-syklende.jpg',
    shortExplanation: 'Forbyr ferdsel for både fotgjengere, syklende og små elektriske kjøretøy.',
    longExplanation: 'Dette skiltet brukes ofte i tunneler eller på høyhastighetsveger der det er livsfarlig for myke trafikanter å ferdes.',
    theoryTrap: 'Mange tror det er tillatt å gå på vegen dersom man triller sykkelen, men skiltet forbyr også all gående ferdsel.',
    whatToDo: [
      'Ikke gå eller sykle forbi dette skiltet under noen omstendigheter.',
      'Benytt egne gang- og sykkelveger.'
    ],
    confusedWith: ['306.6'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['gående og syklende', 'fotgjenger forbudt', 'forbudt for gående og syklende']
  },
  {
    id: '308',
    code: '308',
    name: 'Forbudt for transport av farlig gods',
    displayName: 'Forbudt for transport av farlig gods',
    slug: 'forbudt-for-transport-av-farlig-gods',
    category: 'forbudsskilt',
    imagePath: '/signs/forbudsskilt/skilt-308-forbudt-for-transport-av-farlig-gods.jpg',
    shortExplanation: 'Forbyr kjøretøy som transporterer farlig gods som krever oransje nummerskilt.',
    longExplanation: 'Skiltet forbyr ferdsel av kjøretøy lastet med farlig gods (eksplosiver, brannfarlige væsker, gass osv.) som etter internasjonale regler (ADR) krever merking med oransje skilt.',
    theoryTrap: 'Gjelder kun kjøretøy som transporterer farlig gods i mengder som krever merking. Vanlige personbiler eller mindre varetransporter gjelder det ikke for.',
    whatToDo: [
      'Dersom du kjører kjøretøy med krav til oransje markeringsskilt, må du finne en annen rute.',
      'Følg eventuelle underskilt for spesifikke klasser av farlig gods.'
    ],
    confusedWith: [],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['farlig gods', 'adr', 'giftig last', 'transport av farlig gods']
  },
  {
    id: '312',
    code: '312',
    name: 'Breddegrense',
    displayName: 'Breddegrense 2,3m',
    slug: 'breddegrense',
    category: 'forbudsskilt',
    imagePath: '/signs/forbudsskilt/skilt-312-breddegrense.jpg',
    shortExplanation: 'Forbyr kjøretøy med bredde over den angitte grensen (inkludert last).',
    longExplanation: 'Skiltet forbyr kjøring med kjøretøy der den faktiske bredden, inkludert eventuell last, er større enn det som står på skiltet (f.eks. 2,3 meter). Settes ofte opp foran smale broer eller trange gater.',
    theoryTrap: 'Husk at breddegrensen gjelder kjøretøyets FAKTISKE bredde inkludert speil og last, ikke bare bredden som står i vognkortet.',
    whatToDo: [
      'Sjekk kjøretøyets faktiske bredde før du kjører inn på strekningen.',
      'Velg en annen veg dersom bredden overskrider grensen.'
    ],
    confusedWith: ['314'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['bredde', 'breddegrense', 'trang vei']
  },
  {
    id: '314',
    code: '314',
    name: 'Høydegrense',
    displayName: 'Høydegrense 3,5m',
    slug: 'hoydegrense',
    category: 'forbudsskilt',
    imagePath: '/signs/forbudsskilt/skilt-314-hoydegrense.jpg',
    shortExplanation: 'Forbyr kjøretøy med høyde over den angitte grensen (inkludert last).',
    longExplanation: 'Skiltet forbyr ferdsel med kjøretøy der kjøretøyets eller lastens faktiske høyde over vegen er større enn den angitte grensen (f.eks. 3,5 meter). Settes opp foran lave underganger, tunneler eller luftledninger.',
    theoryTrap: 'Høydegrensen gjelder kjøretøyets høyeste punkt inkludert eventuell taklast eller skiboks.',
    whatToDo: [
      'Kjenn alltid til kjøretøyets nøyaktige høyde inkludert taklast.',
      'Stans og finn alternativ rute dersom du er høyere enn skiltet angir.'
    ],
    confusedWith: ['312'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['høyde', 'hoyde', 'høydegrense', 'lav undergang']
  },
  {
    id: '330.1',
    code: '330.1',
    name: 'Svingforbud til høyre',
    displayName: 'Svingforbud til høyre',
    slug: 'svingforbud-til-hoyre',
    category: 'forbudsskilt',
    imagePath: '/signs/forbudsskilt/skilt-330-1-svingforbud-til-hoyre.jpg',
    shortExplanation: 'Viser at det er forbudt å svinge til høyre i neste vegkryss.',
    longExplanation: 'Dette skiltet settes opp like før et vegkryss og forbyr svinging til høyre. Det brukes ofte for å hindre trafikk inn på enveiskjørte gater eller områder der det er trafikkfarlig å svinge.',
    theoryTrap: 'Forbudet gjelder KUN i det første krysset etter skiltet. Det betyr IKKE at du har generelt svingforbud framover.',
    whatToDo: [
      'Fortsett enten rett fram eller sving til venstre i krysset.',
      'Ikke start svinging til høyre etter dette skiltet.'
    ],
    confusedWith: ['330.2', '332'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['svingforbud', 'høyre sving', 'svinge høyre', 'svingforbud høyre']
  },
  {
    id: '330.2',
    code: '330.2',
    name: 'Svingforbud til venstre',
    displayName: 'Svingforbud til venstre',
    slug: 'svingforbud-til-venstre',
    category: 'forbudsskilt',
    imagePath: '/signs/forbudsskilt/skilt-330-2-svingforbud-til-venstre.jpg',
    shortExplanation: 'Viser at det er forbudt å svinge til venstre i neste vegkryss.',
    longExplanation: 'Dette skiltet forbyr svinging til venstre i det krysset som kommer umiddelbart etter skiltet. Settes ofte opp for å unngå lange køer eller farlige situasjoner ved kryssing av motgående felt.',
    theoryTrap: 'Selv om det er svingforbud til venstre, betyr det ikke automatisk at det er forbudt å gjøre en U-sving (vending) – med mindre det er eget vendingsforbudskilt (332) til stede.',
    whatToDo: [
      'Kjør rett fram eller sving til høyre i det kommende krysset.',
      'Ikke sving til venstre.'
    ],
    confusedWith: ['330.1', '332'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['svingforbud', 'venstre sving', 'svinge venstre', 'svingforbud venstre']
  },
  {
    id: '332',
    code: '332',
    name: 'Vendingsforbud',
    displayName: 'Vendingsforbud (U-sving forbudt)',
    slug: 'vendingsforbud',
    category: 'forbudsskilt',
    imagePath: '/signs/forbudsskilt/skilt-332-vendingsforbud.jpg',
    shortExplanation: 'Forbyr å vende kjøretøyet (ta U-sving) i kryss eller på vegstrekning.',
    longExplanation: 'Skiltet forbyr all form for vending eller U-sving på den aktuelle strekningen frem til neste vegkryss. Det brukes på steder der U-svinger kan skape farlige situasjoner på grunn av høy fart eller dårlig sikt.',
    theoryTrap: 'Selv om det er forbudt å snu (vende), er det fortsatt tillatt å svinge til venstre inn på en sideveg (med mindre det også er svingforbudskilt).',
    whatToDo: [
      'Ikke foreta noen U-sving eller snuoperasjon etter at du har passert skiltet.',
      'Dersom du må snu, kjør videre til et egnet sted (f.eks. en rundkjøring) der det er tillatt.'
    ],
    confusedWith: ['330.2'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['u-sving', 'vending', 'snu', 'u sving']
  },
  {
    id: '334',
    code: '334',
    name: 'Forbikjøring forbudt',
    displayName: 'Forbikjøring forbudt',
    slug: 'forbikjoring-forbudt',
    category: 'forbudsskilt',
    imagePath: '/signs/forbudsskilt/skilt-334-forbikjoring-forbudt.jpg',
    shortExplanation: 'Viser forbud mot å kjøre forbi motorvogn med flere enn to hjul.',
    longExplanation: 'Skiltet forbyr forbikjøring av motorvogner som har mer enn to hjul (biler, lastebiler osv.). Forbudet gjelder fra der skiltet er satt opp til det oppheves av et opphevelsesskilt eller vegkryss.',
    theoryTrap: 'Forbudet gjelder ikke forbikjøring av tohjuls motorsykkel eller moped, men du må fortsatt holde god sikkerhetsavstand.',
    whatToDo: [
      'Hold deg bak kjøretøyet foran og vent med å kjøre forbi.',
      'Du kan kjøre forbi tohjuls motorsykkel eller moped hvis det kan gjøres trygt.',
      'Ikke start en forbikjøring før du har passert opphevelsesskiltet eller et vegkryss.'
    ],
    confusedWith: ['336', '335'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['forbikjøring', 'forbikjoring', 'forbifart', 'forbikjøring forbudt']
  },
  {
    id: '335',
    code: '335',
    name: 'Forbikjøringsforbud for lastebil',
    displayName: 'Forbikjøringsforbud for lastebil',
    slug: 'forbikjoringsforbud-for-lastebil',
    category: 'forbudsskilt',
    imagePath: '/signs/forbudsskilt/skilt-335-forbikjoringsforbud-for-lastebil.jpg',
    shortExplanation: 'Forbyr lastebil med tillatt totalvekt over 3500 kg å kjøre forbi motorvogn med flere enn to hjul.',
    longExplanation: 'Dette skiltet gjelder spesifikt for førere av lastebil registrert med tillatt totalvekt over 3,5 tonn. Det forbyr dem å foreta forbikjøring av andre motorvogner med mer enn to hjul. Gjelder frem til opphevelsesskilt (337).',
    theoryTrap: 'Personbiler og mindre varebiler (under 3500 kg) rammes IKKE av dette forbudet og kan foreta forbikjøring som normalt.',
    whatToDo: [
      'Dersom du kjører lastebil over 3500 kg, må du holde deg bak kjøretøyet foran.',
      'Kjører du personbil kan du se bort fra dette forbudet (men kjør aktsomt).'
    ],
    confusedWith: ['334', '337'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['forbikjøring lastebil', 'lastebil forbud', 'forbikjøringsforbud lastebil']
  },
  {
    id: '336',
    code: '336',
    name: 'Slutt på forbikjøringsforbud',
    displayName: 'Slutt på forbikjøringsforbud',
    slug: 'slutt-pa-forbikjoringsforbud',
    category: 'forbudsskilt',
    imagePath: '/signs/forbudsskilt/skilt-336-slutt-pa-forbikjoringsforbud.jpg',
    shortExplanation: 'Viser at det særskilte forbikjøringsforbudet opphører.',
    longExplanation: 'Dette skiltet markerer slutten på strekningen med forbikjøringsforbud. Det betyr at du igjen kan kjøre forbi andre kjøretøy, forutsatt at de generelle vilkårene for trygg forbikjøring er oppfylt.',
    theoryTrap: 'Selv om forbudet er opphevet, kan du kun kjøre forbi dersom det er fri sikt, veimerkingen tillater det og det kan skje uten fare.',
    whatToDo: [
      'Vurder sikt, veimerking og møtende trafikk før du eventuelt starter en forbikjøring.',
      'Husk at du aldri må kjøre forbi like før eller i et vegkryss eller rett foran gangfelt.'
    ],
    confusedWith: ['334', '337'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['forbikjøring', 'forbikjoring', 'slutt på forbikjøringsforbud', 'opphevet forbikjøring']
  },
  {
    id: '337',
    code: '337',
    name: 'Slutt på forbikjøringsforbud for lastebil',
    displayName: 'Slutt på forbikjøringsforbud for lastebil',
    slug: 'slutt-pa-forbikjoringsforbud-for-lastebil',
    category: 'forbudsskilt',
    imagePath: '/signs/forbudsskilt/skilt-337-slutt-pa-forbikjoringsforbud-for-lastebil.jpg',
    shortExplanation: 'Viser at det særskilte forbikjøringsforbudet for lastebiler opphører.',
    longExplanation: 'Markerer at strekningen hvor lastebiler over 3500 kg hadde forbud mot å kjøre forbi er avsluttet. Lastebiler kan nå foreta forbikjøringer igjen.',
    theoryTrap: 'Forbikjøring krever alltid tilstrekkelig sikt og plass, uavhengig av om forbudet er opphevet.',
    whatToDo: [
      'Førere av lastebiler kan nå kjøre forbi andre kjøretøy når forholdene tillater det.'
    ],
    confusedWith: ['335', '336'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['slutt forbikjøring lastebil', 'lastebil forbikjøring opphevet', 'slutt på forbikjøringsforbud for lastebil']
  },
  {
    id: '362',
    code: '362',
    name: 'Fartsgrense 50',
    displayName: 'Fartsgrense 50',
    slug: 'fartsgrense-50',
    category: 'forbudsskilt',
    imagePath: '/signs/forbudsskilt/skilt-362-50-fartsgrense.jpg',
    shortExplanation: 'Viser høyeste tillatte fart på 50 km/t.',
    longExplanation: 'Fartsgrenseskiltet angir den maksimale tillatte farten på strekningen i kilometer i timen. Fartsgrensen gjelder fra skiltet og fram til en annen fartsgrense oppgis eller til den oppheves.',
    theoryTrap: 'Fartsgrensen gjelder helt til neste fartsgrenseskilt, eller til skilt som opphever særskilt fartsgrense.',
    whatToDo: [
      'Tilpass farten slik at du ikke overskrider 50 km/t.',
      'Kjør saktere dersom sikt, føre eller trafikkforhold gjør det nødvendig.'
    ],
    confusedWith: ['364', '366'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['fartsgrense', 'fart', 'fart 50', 'fartsgrense 50']
  },
  {
    id: '364',
    code: '364',
    name: 'Slutt på særskilt fartsgrense 50',
    displayName: 'Slutt på særskilt fartsgrense 50',
    slug: 'slutt-pa-saerskilt-fartsgrense-50',
    category: 'forbudsskilt',
    imagePath: '/signs/forbudsskilt/skilt-364-50-slutt-pa-saerskilt-fartsgrense.jpg',
    shortExplanation: 'Viser at en særskilt fartsgrense (her 50 km/t) opphører, og at den generelle fartsgrensen gjelder.',
    longExplanation: 'Dette skiltet opphever en tidligere angitt særskilt fartsgrense på 50 km/t. Etter dette skiltet gjelder de generelle fartsgrensene: 50 km/t i tettbygd strøk, og 80 km/t utenfor tettbygd strøk, med mindre annet er skiltet.',
    theoryTrap: 'Skiltet betyr ikke at det er fri fart. Du går tilbake til den generelle fartsgrensen (50 km/t i tettbygde strøk, 80 km/t utenfor tettbygde strøk).',
    whatToDo: [
      'Finn ut om du er innenfor eller utenfor tettbygd strøk for å vite om den nye fartsgrensen er 50 eller 80 km/t.',
      'Tilpass farten etter de generelle reglene.'
    ],
    confusedWith: ['362'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['fartsgrense', 'fart', 'slutt på særskilt fartsgrense', 'opphevet fartsgrense']
  },
  {
    id: '366',
    code: '366',
    name: 'Fartsgrensesone',
    displayName: 'Fartsgrensesone 30',
    slug: 'fartsgrensesone',
    category: 'forbudsskilt',
    imagePath: '/signs/forbudsskilt/skilt-366-fartsgrensesone.jpg',
    shortExplanation: 'Viser grense for et område der høyeste tillatte fart er angitt på skiltet (her 30 km/t).',
    longExplanation: 'Dette skiltet markerer inngangen til en fartsgrensesone (for eksempel i et boligstrøk). Den angitte fartsgrensen gjelder for alle veger innenfor sonen, og oppheves ikke av kryss slik som vanlige fartsgrenseskilt gjør.',
    theoryTrap: 'Vanlige fartsgrenseskilt oppheves normalt ved neste kryss, men en fartsgrensesone gjelder HELT til du passerer et skilt for slutt på fartsgrensesone (368).',
    whatToDo: [
      'Hold farten under sonens grense på alle veger du svinger inn på innenfor dette området.',
      'Se etter skilt 368 for å vite når sonen avsluttes.'
    ],
    confusedWith: ['362', '368'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['sone', 'fartssone', 'fartsgrensesone', 'fartsone']
  },
  {
    id: '368',
    code: '368',
    name: 'Slutt på fartsgrensesone',
    displayName: 'Slutt på fartsgrensesone',
    slug: 'slutt-pa-fartsgrensesone',
    category: 'forbudsskilt',
    imagePath: '/signs/forbudsskilt/skilt-368-slutt-pa-fartsgrensesone.jpg',
    shortExplanation: 'Viser at fartsgrensesonen opphører.',
    longExplanation: 'Markerer at du kjører ut av området som har hatt en felles lavere fartsgrense. Etter dette skiltet gjelder de vanlige fartsgrensene på vegen (enten angitt med nytt skilt, eller generelle regler).',
    theoryTrap: 'Etter dette skiltet går man vanligvis tilbake til generell fartsgrense (50 km/t i tettbygd strøk, 80 km/t utenfor), med mindre et nytt skilt oppgir noe annet.',
    whatToDo: [
      'Orientér deg om hvilken fartsgrense som gjelder videre på vegen du kjører ut på.'
    ],
    confusedWith: ['366'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['slutt sone', 'opphevet sone', 'slutt på fartsgrensesone']
  },
  {
    id: '370',
    code: '370',
    name: 'Stans forbudt',
    displayName: 'Stans forbudt',
    slug: 'stans-forbudt',
    category: 'forbudsskilt',
    imagePath: '/signs/forbudsskilt/skilt-370-stans-forbudt.jpg',
    shortExplanation: 'Forbyr enhver stans av kjøretøy på den siden av vegen skiltet er satt opp.',
    longExplanation: 'Skiltet forbyr all stans av kjøretøyet, inkludert stans for av- og påstigning eller av- og pålessing av varer. Brukes på steder der selv en kort stans vil være til stor fare eller hinder for trafikken.',
    theoryTrap: 'Stans forbudt er strengere enn Parkering forbudt. Ved stans forbudt kan du IKKE en gang stoppe i 5 sekunder for å slippe ut en passasjer. Unntaket er stans forårsaket av trafikkforhold (f.eks. kø eller rødt lys).',
    whatToDo: [
      'Ikke stoppe kjøretøyet langs vegkanten på denne siden av vegen.',
      'Dersom du må slippe av noen eller laste varer, finn en sideveg eller et område uten stansforbud.'
    ],
    confusedWith: ['372'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['stans', 'stopp forbudt', 'all stans forbudt', 'stans forbudt']
  },
  {
    id: '372',
    code: '372',
    name: 'Parkering forbudt',
    displayName: 'Parkering forbudt',
    slug: 'parkering-forbudt',
    category: 'forbudsskilt',
    imagePath: '/signs/forbudsskilt/skilt-372-parkering-forbudt.jpg',
    shortExplanation: 'Viser forbud mot parkering på den siden av vegen skiltet er satt opp.',
    longExplanation: 'Skiltet forbyr parkering av kjøretøy på den siden av vegen hvor skiltet er satt opp. Forbudet gjelder fram til neste vegkryss, eller til det oppheves av annet skilt.',
    theoryTrap: 'Kort stans for av- og påstigning eller av- og pålessing er tillatt, så lenge det ikke hindrer annen trafikk.',
    whatToDo: [
      'Ikke parker bilen på denne siden av vegen.',
      'Du kan gjøre en kort stans for hurtig av- eller påstigning, eller av- og pålessing.'
    ],
    confusedWith: ['370'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['parkering', 'stans', 'parkere', 'parkering forbudt']
  },

  // --- PÅBUDSSKILT (Aktiv Kategori) ---
  {
    id: '402.1',
    code: '402.1',
    name: 'Påbudt kjøreretning - Rett fram',
    displayName: 'Påbudt kjøreretning - Rett fram',
    slug: 'pabudt-kjoreretning-rett-fram',
    category: 'pabudsskilt',
    imagePath: '/signs/pabudsskilt/skilt-402-1-pabudt-kjoreretning-rett-fram.jpg',
    shortExplanation: 'Påbyr kjøring rett fram i vegkrysset.',
    longExplanation: 'Skiltet påbyr kjøring rett fram i vegkrysset eller på den strekningen skiltet gjelder. Det er ikke tillatt å svinge til høyre eller venstre.',
    theoryTrap: 'Dette skiltet påbyr kjøreretning, og må ikke forveksles med opplysningsskiltet for envegskjøring (526). Selv om du kun kan kjøre rett fram, kan du fortsatt møte tverrgående eller møtende trafikk.',
    whatToDo: [
      'Kjør kun rett fram i krysset eller på strekningen.',
      'Ikke sving til høyre eller venstre.'
    ],
    confusedWith: ['402.2', '402.3', '402.4', '402.5', '402.6', '402.7', '402.8', '526'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['påbud', 'pabud', 'kjøreretning', 'kjoreretning', 'rett fram']
  },
  {
    id: '402.2',
    code: '402.2',
    name: 'Påbudt kjøreretning - Til høyre',
    displayName: 'Påbudt kjøreretning - Til høyre',
    slug: 'pabudt-kjoreretning-til-hoyre',
    category: 'pabudsskilt',
    imagePath: '/signs/pabudsskilt/skilt-402-2-pabudt-kjoreretning-til-hoyre.jpg',
    shortExplanation: 'Påbyr at du må svinge til høyre i vegkrysset.',
    longExplanation: 'Skiltet påbyr kjøring til høyre i vegkrysset. Det er forbudt å kjøre rett fram eller svinge til venstre.',
    theoryTrap: 'Påbudet gjelder kun i det krysset eller den avkjøringen der skiltet er plassert. Det må ikke forveksles med påbudt kjøreretning på høyre side (402.7) eller påbudt kjørefelt (404.1).',
    whatToDo: [
      'Sving til høyre i vegkrysset.',
      'Ikke sving til venstre eller kjør rett fram.'
    ],
    confusedWith: ['402.1', '402.3', '402.4', '402.5', '402.6', '402.7', '402.8', '404.1'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['påbud', 'pabud', 'kjøreretning', 'kjoreretning', 'høyre', 'hoyre']
  },
  {
    id: '402.3',
    code: '402.3',
    name: 'Påbudt kjøreretning - Til venstre',
    displayName: 'Påbudt kjøreretning - Til venstre',
    slug: 'pabudt-kjoreretning-til-venstre',
    category: 'pabudsskilt',
    imagePath: '/signs/pabudsskilt/skilt-402-3-pabudt-kjoreretning-til-venstre.jpg',
    shortExplanation: 'Påbyr at du må svinge til venstre i vegkrysset.',
    longExplanation: 'Skiltet påbyr kjøring til venstre i vegkrysset. Det er forbudt å kjøre rett fram eller svinge til høyre.',
    theoryTrap: 'Selv om du er påbudt å svinge til venstre, må du fortsatt overholde den vanlige vikeplikten for møtende trafikk dersom du ikke kjører på en forkjørsveg.',
    whatToDo: [
      'Sving til venstre i vegkrysset.',
      'Ikke sving til høyre eller kjør rett fram.'
    ],
    confusedWith: ['402.1', '402.2', '402.4', '402.5', '402.6', '402.7', '402.8', '404.2'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['påbud', 'pabud', 'kjøreretning', 'kjoreretning', 'venstre']
  },
  {
    id: '402.4',
    code: '402.4',
    name: 'Påbudt kjøreretning - Rett fram eller til høyre',
    displayName: 'Påbudt kjøreretning - Rett fram eller til høyre',
    slug: 'pabudt-kjoreretning-rett-fram-eller-til-hoyre',
    category: 'pabudsskilt',
    imagePath: '/signs/pabudsskilt/skilt-402-4-pabudt-kjoreretning-rett-fram-eller-til-hoyre.jpg',
    shortExplanation: 'Påbyr kjøring rett fram eller sving til høyre i vegkrysset.',
    longExplanation: 'Skiltet tillater kun kjøring rett fram eller sving til høyre i krysset. Det er strengt forbudt å svinge til venstre.',
    theoryTrap: 'Husk å gi riktig tegn (blinke) i god tid dersom du skal svinge til høyre, selv om skiltet åpner for to alternative kjøreretninger.',
    whatToDo: [
      'Kjør enten rett fram eller sving til høyre i krysset.',
      'Ikke sving til venstre.'
    ],
    confusedWith: ['402.1', '402.2', '402.3', '402.5', '402.6', '402.7', '402.8'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['påbud', 'pabud', 'kjøreretning', 'kjoreretning', 'rett fram', 'høyre', 'hoyre']
  },
  {
    id: '402.5',
    code: '402.5',
    name: 'Påbudt kjøreretning - Rett fram eller til venstre',
    displayName: 'Påbudt kjøreretning - Rett fram eller til venstre',
    slug: 'pabudt-kjoreretning-rett-fram-eller-til-venstre',
    category: 'pabudsskilt',
    imagePath: '/signs/pabudsskilt/skilt-402-5-pabudt-kjoreretning-rett-fram-eller-til-venstre.jpg',
    shortExplanation: 'Påbyr kjøring rett fram eller sving til venstre i vegkrysset.',
    longExplanation: 'Skiltet tillater kun kjøring rett fram eller sving til venentre i krysset. Det er forbudt å svinge til høyre.',
    theoryTrap: 'Husk å gi riktig tegn (blinke) i god tid dersom du skal svinge til venstre, og pass på møtende kjøretøy som skal rett fram eller til høyre.',
    whatToDo: [
      'Kjør enten rett fram eller sving til venstre i krysset.',
      'Ikke sving til høyre.'
    ],
    confusedWith: ['402.1', '402.2', '402.3', '402.4', '402.6', '402.7', '402.8'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['påbud', 'pabud', 'kjøreretning', 'kjoreretning', 'rett fram', 'venstre']
  },
  {
    id: '402.6',
    code: '402.6',
    name: 'Påbudt kjøreretning - Til høyre eller venstre',
    displayName: 'Påbudt kjøreretning - Til høyre eller venstre',
    slug: 'pabudt-kjoreretning-til-hoyre-eller-venstre',
    category: 'pabudsskilt',
    imagePath: '/signs/pabudsskilt/skilt-402-6-pabudt-kjoreretning-til-hoyre-eller-venstre.jpg',
    shortExplanation: 'Påbyr at du må svinge enten til høyre eller til venstre i vegkrysset.',
    longExplanation: 'Skiltet påbyr at du må svinge enten til høyre eller til venstre i krysset. Det er forbudt å kjøre rett fram.',
    theoryTrap: 'Dette skiltet forbyr kjøring rett fram. Du må velge en av sidene og blinke i god tid før du svinger.',
    whatToDo: [
      'Sving enten til høyre eller til venstre i krysset.',
      'Ikke kjør rett fram.'
    ],
    confusedWith: ['402.1', '402.2', '402.3', '402.4', '402.5', '402.7', '402.8'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['påbud', 'pabud', 'kjøreretning', 'kjoreretning', 'høyre', 'hoyre', 'venstre']
  },
  {
    id: '402.7',
    code: '402.7',
    name: 'Påbudt runding, høyre side',
    displayName: 'Påbudt kjøreretning på høyre side',
    slug: 'pabudt-kjoreretning-pa-hoyre-side',
    category: 'pabudsskilt',
    imagePath: '/signs/pabudsskilt/skilt-402-7-pabudt-kjoreretning-pa-hoyre-side.jpg',
    shortExplanation: 'Påbyr at du skal passere en hindring eller trafikkøy på høyre side.',
    longExplanation: 'Skiltet påbyr at du må passere en hindring, en trafikkøy eller et fysisk skille på høyre side av skiltet.',
    theoryTrap: 'Dette skiltet viser hvordan du skal passere en fysisk hindring (f.eks. en trafikkøy). Det skal ikke forveksles med påbudt kjøreretning til høyre i et kryss (402.2) eller påbudt kjørefelt (404.1).',
    whatToDo: [
      'Passer hindringen, trafikkøya eller sperringen på høyre side.'
    ],
    confusedWith: ['402.1', '402.2', '402.8', '404.1'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['påbud', 'pabud', 'kjøreretning', 'kjoreretning', 'høyre side', 'hoyre side', 'runding']
  },
  {
    id: '402.8',
    code: '402.8',
    name: 'Påbudt runding, venstre side',
    displayName: 'Påbudt kjøreretning på venstre side',
    slug: 'pabudt-kjoreretning-pa-venstre-side',
    category: 'pabudsskilt',
    imagePath: '/signs/pabudsskilt/skilt-402-8-pabudt-kjoreretning-pa-venstre-side.jpg',
    shortExplanation: 'Påbyr at du skal passere en hindring eller trafikkøy på venstre side.',
    longExplanation: 'Skiltet påbyr at du må passere en hindring, en trafikkøy eller et fysisk skille på venstre side av skiltet.',
    theoryTrap: 'I land med høyretrafikk er det sjelden å passere hindringer på venstre side. Skiltet brukes spesielt ved vegarbeid, terminaler eller i spesielle kryssløsninger.',
    whatToDo: [
      'Passer hindringen, trafikkøya eller sperringen på venstre side.'
    ],
    confusedWith: ['402.1', '402.3', '402.7', '404.2'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['påbud', 'pabud', 'kjøreretning', 'kjoreretning', 'venstre side', 'runding']
  },
  {
    id: '404.1',
    code: '404.1',
    name: 'Påbudt kjørefelt, høyre side',
    displayName: 'Påbudt kjørefelt høyre',
    slug: 'pabudt-kjorefelt-hoyre',
    category: 'pabudsskilt',
    imagePath: '/signs/pabudsskilt/skilt-404-1-pabudt-kjorefelt-hoyre.jpg',
    shortExplanation: 'Viser at kjørefeltet på høyre side av skiltet er påbudt kjørefelt.',
    longExplanation: 'Skiltet påbyr bruk av kjørefeltet som ligger til høyre for skiltet. Det brukes for å lede trafikk inn i riktig kjørefelt, for eksempel før vegen deler seg.',
    theoryTrap: 'Skiltet må ikke forveksles med påbudt kjøreretning (402.2 eller 402.7). Det angir hvilket kjørefelt du skal plassere deg i, ikke en svingerelasjon.',
    whatToDo: [
      'Bruk kjørefeltet som ligger til høyre for skiltet.',
      'Plasser kjøretøyet i god tid.'
    ],
    confusedWith: ['404.2', '402.2', '402.7'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['påbud', 'pabud', 'kjørefelt', 'kjorefelt', 'høyre', 'hoyre']
  },
  {
    id: '404.2',
    code: '404.2',
    name: 'Påbudt kjørefelt, venstre side',
    displayName: 'Påbudt kjørefelt venstre',
    slug: 'pabudt-kjorefelt-venstre',
    category: 'pabudsskilt',
    imagePath: '/signs/pabudsskilt/skilt-404-2-pabudt-kjorefelt-venstre.jpg',
    shortExplanation: 'Viser at kjørefeltet på venstre side av skiltet er påbudt kjørefelt.',
    longExplanation: 'Skiltet påbyr bruk av kjørefeltet som ligger til venstre for skiltet. Det brukes for å lede trafikk inn i riktig kjørefelt.',
    theoryTrap: 'Skiltet angir at du må bruke feltet til venstre for skiltet, ikke at du skal svinge til venstre eller kjøre mot kjøreretningen.',
    whatToDo: [
      'Bruk kjørefeltet som ligger til venstre for skiltet.',
      'Plasser kjøretøyet i god tid.'
    ],
    confusedWith: ['404.1', '402.3', '402.8'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['påbud', 'pabud', 'kjørefelt', 'kjorefelt', 'venstre']
  },
  {
    id: '406',
    code: '406',
    name: 'Påbudt rundkjøring',
    displayName: 'Påbudt rundkjøring',
    slug: 'pabudt-rundkjoring',
    category: 'pabudsskilt',
    imagePath: '/signs/pabudsskilt/skilt-406-pabudt-rundkjoring.jpg',
    shortExplanation: 'Viser at kjørende skal passere krysset i den retning pilene angir.',
    longExplanation: 'Skiltet påbyr kjøring inn i rundkjøringen i pilenes retning (mot klokken). Du har alltid vikeplikt for trafikk som allerede befinner seg inne i rundkjøringen, og skiltet står nesten alltid sammen med vikepliktskilt (202).',
    theoryTrap: 'Du skal alltid vike for trafikk som allerede er inne i rundkjøringen. Husk også å blinke til høyre når du skal svinge ut av rundkjøringen, aldri når du kjører inn.',
    whatToDo: [
      'Kjør inn i rundkjøringen i pilenes retning (mot klokken).',
      'Vike for trafikk som allerede befinner seg inne i rundkjøringen.',
      'Blink til høyre når du skal kjøre ut av rundkjøringen.'
    ],
    confusedWith: ['408'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['påbud', 'pabud', 'rundkjøring', 'rundkjoring']
  },
  {
    id: '408',
    code: '408',
    name: 'Påbudt kjøreretning i rundkjøring',
    displayName: 'Påbudt kjøreretning i rundkjøring',
    slug: 'pabudt-kjoreretning-i-rundkjoring',
    category: 'pabudsskilt',
    imagePath: '/signs/pabudsskilt/skilt-408-pabudt-kjoreretning-i-rundkjoring.jpg',
    shortExplanation: 'Påbyr en bestemt kjøreretning før eller i en rundkjøring.',
    longExplanation: 'Skiltet påbyr kjørende før rundkjøringen å kjøre i den retningen pilen viser. Dette brukes gjerne der det kun er tillatt å svinge til høyre eller venstre inn eller ut av rundkjøringen.',
    theoryTrap: 'Dette skiltet påbyr en bestemt kjøreretning inn eller ut av rundkjøringen, i motsetning to skilt 406 som viser selve retningen rundt trafikkøya.',
    whatToDo: [
      'Følg pilens kjøreretning ved passering av rundkjøringen.',
      'Gi riktig tegn (blinklys) i god tid.'
    ],
    confusedWith: ['406', '402.2', '402.3'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['påbud', 'pabud', 'kjøreretning', 'kjoreretning', 'rundkjøring', 'rundkjoring']
  },

  // --- OPPLYSNINGSSKILT (Aktiv Kategori) ---
  {
    id: '502',
    code: '502',
    name: 'Motorveg',
    displayName: 'Motorveg',
    slug: 'motorveg',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-502-motorveg.jpg',
    shortExplanation: 'Viser at trafikkregler for motorveg gjelder fra skiltet og fram til skiltet «Slutt på motorveg».',
    longExplanation: 'Dette skiltet markerer starten på en motorveg. På motorveg gjelder særskilte regler: det er kun tillatt for motorvogner som lovlig kan kjøre i minst 40 km/t på flat veg å kjøre her. Det er strengt forbudt å snu, rygge, stanse eller parkere på motorvegen (inkludert på veiskulderen, unntatt ved nødstilfeller).',
    theoryTrap: 'Mange tror at fartsgrensen automatisk blir 110 km/t på motorveg. Fartsgrensen er alltid den som er skiltet, og hvis det ikke er skiltet, gjelder den generelle fartsgrensen på 80 km/t.',
    whatToDo: [
      'Kjør kun inn på motorvegen dersom kjøretøyet ditt kan kjøre lovlig i minst 40 km/t på flat veg.',
      'Bruk påkjøringsfeltet to å tilpasse farten til trafikken på motorvegen før du fletter inn.',
      'Ikke snu, rygge, stanse eller parkere på vegen eller veiskulderen.'
    ],
    confusedWith: ['503', '504'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['motorveg', 'motorvei', 'motorveiskilt', 'fart']
  },
  {
    id: '503',
    code: '503',
    name: 'Motortrafikkveg',
    displayName: 'Motortrafikkveg',
    slug: 'motortrafikkveg',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-503-motortrafikkveg.jpg',
    shortExplanation: 'Viser at trafikkregler for motortrafikkveg gjelder fra skiltet og fram til skiltet «Slutt på motortrafikkveg».',
    longExplanation: 'Motortrafikkveg (tidligere kalt hurtigveg) har de samme adgangsreglene som motorveg. Det betyr at gående, syklende, mopeder og traktorer ikke har adgang. Forskjellen fra motorveg er at en motortrafikkveg ikke nødvendigvis har midtdeler eller flere kjørefelt, og kryss kan være i samme plan.',
    theoryTrap: 'Det er lett å forveksle reglene for motorveg og motortrafikkveg, men husk at adgangsbegrensningen (minst 40 km/t) og forbudet mot rygging, snuing og stans gjelder på begge.',
    whatToDo: [
      'Følg de samme reglene for adgang og stans som på motorveg.',
      'Vær ekstra oppmerksom på motgående trafikk, da motortrafikkveger ofte ikke har midtdeler.'
    ],
    confusedWith: ['502', '505'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['motortrafikkveg', 'motortrafikkvei', 'hurtigveg', 'hurtigvei']
  },
  {
    id: '504',
    code: '504',
    name: 'Slutt på motorveg',
    displayName: 'Slutt på motorveg',
    slug: 'slutt-pa-motorveg',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-504-slutt-pa-motorveg.jpg',
    shortExplanation: 'Viser at de særskilte trafikkreglene for motorveg opphører fra skiltet.',
    longExplanation: 'Dette skiltet markerer slutten på motorvegen. Etter dette skiltet går vegen over til en vanlig veg der de ordinære trafikkreglene gjelder, og fartsgrensen settes ofte ned. Kjøretøy som traktorer eller mopeder kan igjen dukke opp på vegen framover.',
    theoryTrap: 'Ved slutten av motorvegen må du ofte tilpasse farten raskt ned til lavere fartsgrenser, og du må være forberedt på møtende trafikk uten midtdeler og myke trafikanter.',
    whatToDo: [
      'Senk farten og vær oppmerksom på skiltede fartsgrenser framover.',
      'Vær forberedt på å møte syklister, fotgjengere, traktorer og motgående trafikk uten midtdeler.'
    ],
    confusedWith: ['502', '505'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['slutt på motorveg', 'slutt på motorvei', 'motorveg slutt']
  },
  {
    id: '505',
    code: '505',
    name: 'Slutt på motortrafikkveg',
    displayName: 'Slutt på motortrafikkveg',
    slug: 'slutt-pa-motortrafikkveg',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-505-slutt-pa-motortrafikkveg.jpg',
    shortExplanation: 'Viser at de særskilte trafikkreglene for motortrafikkveg opphører fra skiltet.',
    longExplanation: 'Dette skiltet markerer at motortrafikkvegen ender. Den særskilte adgangsbegrensningen faller bort, slik at saktegående kjøretøy, syklister og fotgjengere igjen kan ferdes på vegen framover.',
    theoryTrap: 'Mange glemmer å tilpasse farten og oppmerksomheten når de går fra en motortrafikkveg til en vanlig tovegsveg der syklister og traktorer plutselig kan befinne seg i kjørebanen.',
    whatToDo: [
      'Forbered deg på å dele vegen med syklister, fotgjengere og saktegående kjøretøy.',
      'Tilpass farten etter de nye vegforholdene og eventuelle fartsgrenseskilt.'
    ],
    confusedWith: ['503', '504'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['slutt på motortrafikkveg', 'slutt på motortrafikkvei', 'motortrafikkveg slutt']
  },
  {
    id: '516',
    code: '516',
    name: 'Gangfelt',
    displayName: 'Gangfelt',
    slug: 'gangfelt',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-516-gangfelt.jpg',
    shortExplanation: 'Viser sted der vegen er lagt til rette for fotgjengere å krysse.',
    longExplanation: 'Gangfeltet markerer at du som fører har vikeplikt for fotgjengere som befinner seg i gangfeltet eller er på veg ut i det. Du må tilpasse farten slik at du kan stanse kontrollert og trygt dersom noen vil krysse.',
    theoryTrap: 'Det er strengt forbudt å kjøre forbi et kjøretøy som har stanset foran gangfeltet (forbikjøringsforbud), eller å stanse/parkere mindre enn 5 meter før gangfeltet på din side av vegen.',
    whatToDo: [
      'Senk farten i god tid når du nærmer deg et gangfelt der fotgjengere venter.',
      'Stopp helt for å slippe over fotgjengere som er i eller på veg inn i gangfeltet.',
      'Husk at du aldri må kjøre forbi en bil som har stanset foran et gangfelt.'
    ],
    confusedWith: ['140'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['gangfelt', 'fotgjengerfelt', 'zebra', 'krysse veien', 'fotgjenger']
  },
  {
    id: '524',
    code: '524',
    name: 'Møteplass',
    displayName: 'Møteplass',
    slug: 'moteplass',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-524-moteplass.jpg',
    shortExplanation: 'Viser en utviding av vegen (lomme) beregnet på at kjøretøy kan passere hverandre på smal veg.',
    longExplanation: 'Skiltet markerer et sted på en ellers smal veg der kjørebanen er utvidet for å gjøre det mulig for møtende kjøretøy å passere hverandre. Den som har møteplassen på sin høyre side skal vike ved å kjøre inn i lommen og vente på at den møtende passerer. Dersom møteplassen er på din venstre side, bør du stoppe rett overfor møteplassen slik at den møtende kan bruke lommen.',
    theoryTrap: 'Møteplass-lommen er KUN beregnet for passering. Det er IKKE tillatt å bruke møteplassen som rasteplass, vanlig parkeringsplass eller sted for å ta en U-sving.',
    whatToDo: [
      'Bruk møteplassen til å slippe forbi møtende trafikk på smale veger.',
      'Kjør inn i lommen hvis den er på din høyre side for å la møtende bil passere.',
      'Stopp utenfor lommen (på linje) dersom den er til venstre for deg, slik at møtende bil kan svinge inn i lommen.',
      'Ikke parker eller ta pause i en møteplass-lomme.'
    ],
    confusedWith: ['552'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['møteplass', 'moteplass', 'møtested', 'smal vei', 'passering']
  },
  {
    id: '526',
    code: '526',
    name: 'Envegskjøring',
    displayName: 'Envegskjøring',
    slug: 'envegskjoring',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-526-1-envegskjoring.jpg',
    shortExplanation: 'Viser at kjøring på vegen kun er tillatt i pilens retning fram til neste vegkryss.',
    longExplanation: 'Envegskjøring betyr at all trafikk i kjørebanen må bevege seg i samme retning (pilens retning). Når du skal svinge til venstre fra en envegsregulert veg, skal du plassere bilen helt til venstre i kjørefeltet før svingen, i motsetning til på tovegsveger der du plasserer deg mot midtlinjen.',
    theoryTrap: 'Selv om vegen er envegsregulert, kan det være skiltet unntak for syklister, slik at du må være forberedt på møtende syklister. Husk også spesiell plassering helt til venstre ved venstresving.',
    whatToDo: [
      'Kjør kun i den retningen som pilen på skiltet peker.',
      'Plasser bilen helt til venstre i vegen før du svinger til venstre i neste kryss.',
      'Vær oppmerksom på eventuelle syklister som kan ha tillatelse til å sykle mot kjøreretningen.'
    ],
    confusedWith: ['302', '402'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['envegskjøring', 'envegskjoring', 'enveiskjøring', 'enveiskjørt', 'enveis']
  },
  {
    id: '527',
    code: '527',
    name: 'Blindveg',
    displayName: 'Blindveg',
    slug: 'blindveg',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-527-1-blindveg.jpg',
    shortExplanation: 'Viser at vegen er fysisk stengt for gjennomkjøring.',
    longExplanation: 'Skiltet opplyser om at vegen ikke har gjennomgang for motorvogn. Det kan imidlertid være åpen passasje for gående og syklende i enden av vegen (dette indikeres da med symboler for gangfelt/sykkel på skiltet, som underkategorier av blindvegskiltet).',
    theoryTrap: 'En blindveg betyr ikke at du har forbud mot å kjøre inn, men bare at du ikke kommer deg gjennom til en annen veg med bil. Du må være forberedt på å måtte snu eller rygge for å komme deg ut igjen.',
    whatToDo: [
      'Kjør kun inn på vegen om du har et ærend der, da du må snu eller rygge for å forlate den.',
      'Vær oppmerksom på myke trafikanter i enden av vegen der det kan være gangveger videre.'
    ],
    confusedWith: ['302'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['blindveg', 'blindvei', 'stengt veg', 'stengt vei']
  },
  {
    id: '552',
    code: '552',
    name: 'Parkering',
    displayName: 'Parkering',
    slug: 'parkering',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-552-parkering.jpg',
    shortExplanation: 'Viser at parkering er tillatt på det skiltede stedet eller strekningen.',
    longExplanation: 'Skiltet tillater parkering på stedet. Ofte har skiltet underskilt som angir tidsbegrensning, parkeringsavgift, eller at parkeringen gjelder for spesifikke kjøretøygrupper eller personer (f.eks. forflytningshemmede).',
    theoryTrap: 'Uten underskilt tillater skiltet fri parkering, men du må alltid passe på at du parkerer lovlig i kjøreretningen og ikke bryter generelle parkeringsregler (for eksempel å blokkere utkjørsler).',
    whatToDo: [
      'Du kan parkere kjøretøyet ditt her.',
      'Sjekk alltid eventuelle underskilt for restriksjoner (avgift, makstid, reserverte plasser).',
      'Parkere i kjøreretningen på høyre side av vegen (eller venstre på envegsregulert veg).'
    ],
    confusedWith: ['372', '370', '524'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['parkering', 'parkeringsplass', 'parkere', 'p-skilt', 'p skilt']
  },
  {
    id: '560',
    code: '560',
    name: 'Opplysningstavle',
    displayName: 'Opplysningstavle',
    slug: 'opplysningstavle',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-560-opplysningstavle.jpg',
    shortExplanation: 'Gir opplysninger av betydning for ferdselen som ikke kan gis ved andre skilt.',
    longExplanation: 'Dette skiltet brukes til å gi generell eller spesifikk informasjon om veg- eller trafikkforhold framover, for eksempel informasjon om bomveg, fergetider, eller særlige kjøremønstre.',
    theoryTrap: 'Opplysningstavler kan inneholde tekst eller symboler som krever at du tilpasser kjøringen din, men de setter ikke i seg selv opp direkte forbud eller påbud med mindre de viser symboler for andre skilt.',
    whatToDo: [
      'Les informasjonen på tavlen og innrett kjøringen din etter opplysningene.',
      'Vær forberedt på endrede trafikkforhold, bomstasjoner eller betalingsløsninger som beskrevet.'
    ],
    confusedWith: [],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['opplysningstavle', 'tavle', 'informasjonstavle', 'opplysning']
  },
  {
    id: '565',
    code: '565',
    name: 'Feil kjøreretning',
    displayName: 'Feil kjøreretning',
    slug: 'feil-kjoreretning',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-565-feil-kjoreretning.jpg',
    shortExplanation: 'Varsler om at du kjører mot den tillatte kjøreretningen på en veg eller avkjøring.',
    longExplanation: 'Dette skiltet settes opp på steder der det er stor fare for at førere kan kjøre inn i feil kjøreretning, særlig på motorvegavkjøringer eller envegsregulerte veger. Skiltet fungerer som en siste advarsel om at du må stanse umiddelbart og snu på en trygg måte.',
    theoryTrap: 'Dersom du ser dette skiltet, betyr det at du allerede har overtrådt et innkjøringsforbud eller kjører mot kjøreretningen. Du må stanse med en gang for å unngå en alvorlig frontkollisjon.',
    whatToDo: [
      'Stopp kjøretøyet umiddelbart på et sikkert sted på siden av vegen.',
      'Snu kjøretøyet på en trygg måte når det er klart, eller rygg forsiktig ut dersom det er mest hensiktsmessig og trygt.',
      'Ikke fortsett kjøringen framover da det kan føre til en alvorlig frontkollisjon.'
    ],
    confusedWith: ['302'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['feil kjøreretning', 'feil kjoreretning', 'feil vei', 'mot kjøreretningen']
  },
  {
    id: '570',
    code: '570',
    name: 'Nødutgang for tunnel',
    displayName: 'Nødutgang for tunnel',
    slug: 'nodutgang-for-tunnel',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-570-1-nodutgang-for-tunnel.jpg',
    shortExplanation: 'Viser hvor det er en nødutgang i en tunnel.',
    longExplanation: 'Skiltet markerer døren til en nødutgang eller et rømningsrom i en tunnel. Dette brukes i nødsituasjoner som brann eller røykutvikling for å rømme i sikkerhet.',
    theoryTrap: 'Nødutganger i tunneler skal KUN brukes i reelle nødsituasjoner (f.eks. brann, røyk). De er ikke for vanlig gjennomgang eller pauseplasser.',
    whatToDo: [
      'Merk deg plasseringen av nødutganger når du kjører gjennom tunneler.',
      'Bruk nødutgangen umiddelbart dersom det oppstår brann, røykutvikling eller en annen livstruende situasjon i tunnelen.'
    ],
    confusedWith: ['570.2'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['nødutgang', 'nodutgang', 'tunnel', 'rømning', 'nødutgang tunnel']
  },
  {
    id: '570.2',
    code: '570.2',
    name: 'Retning og avstand til nødutgang',
    displayName: 'Retning og avstand til nødutgang',
    slug: 'retning-og-avstand-til-nodutgang',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-570-2-retning-og-avstand-til-nodutgang.jpg',
    shortExplanation: 'Viser retning og avstand (i meter) til nærmeste nødutgang i tunnelen.',
    longExplanation: 'Dette skiltet er plassert langs tunnelveggen med jevne mellomrom for å fortelle deg hvilken retning du skal rømme til fots, og hvor mange meter det er igjen til nærmeste nødutgang.',
    theoryTrap: 'Skiltet viser ofte avstand to to nødutganger (en i hver retning). Du bør normalt rømme i retningen med kortest avstand, med mindre brann eller røyk sperrer den vegen.',
    whatToDo: [
      'Hvis du må forlate bilen i tunnelen på grunn av nødssituasjon, sjekk skiltet for å finne korteste vei til sikkerhet.',
      'Gå i pilens retning mot nødutgangen.'
    ],
    confusedWith: ['570'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['retning og avstand til nødutgang', 'retning og avstand', 'nødutgang avstand', 'avstand nødutgang']
  },
  {
    id: '508.1',
    code: '508.1',
    name: 'Kollektivfelt',
    displayName: 'Kollektivfelt',
    slug: 'kollektivfelt',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-508-1-kollektivfelt.jpg',
    shortExplanation: 'Viser at kjørefeltet er reservert for kollektivtrafikk.',
    longExplanation: 'Skiltet markerer et kjørefelt som er reservert for busser i rutedrift samt andre kjøretøy som har tillatelse til å kjøre der (f.eks. drosje, elbil, motorsykkel og moped avhengig av gjeldende regler). Andre kjøretøy må ikke benytte feltet unntatt ved kryssing eller svinging.',
    theoryTrap: 'Mange tror at elbil alltid har fri tilgang til alle kollektivfelt. Reglene kan kreve at det må være passasjerer i bilen (sambrukskrav), eller elbil kan være helt ekskludert ved underskilt.',
    whatToDo: [
      'Ikke kjør i kollektivfeltet med mindre kjøretøyet ditt har spesiell tillatelse.',
      'Du kan svinge inn i feltet rett før et kryss dersom du skal svinge til høyre.',
      'Pass på busser og drosjer som har forkjørsrett når de skal ut fra holdeplass.'
    ],
    confusedWith: ['508.2', '510.1'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['kollektivfelt', 'bussfelt', 'buss', 'drosje', 'taxi', 'elbil']
  },
  {
    id: '508.2',
    code: '508.2',
    name: 'Kollektivfelt for buss og drosje',
    displayName: 'Kollektivfelt for buss og drosje',
    slug: 'kollektivfelt-for-buss-og-drosje',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-508-2-kollektivfelt.jpg',
    shortExplanation: 'Viser at kjørefeltet er reservert for buss og drosje.',
    longExplanation: 'Dette feltet er særskilt reservert for buss og drosje. Elbiler og andre kjøretøy har kun adgang dersom det er skiltet med unntak, ellers er det forbudt for dem å bruke feltet.',
    theoryTrap: 'I motsetning til det generelle kollektivfeltet (508.1), er dette feltet i utgangspunktet stengt for andre kjøretøy enn buss og drosje, med mindre underskilt tillater annet.',
    whatToDo: [
      'Kjør kun her om du kjører buss eller drosje, eller har tillatelse via underskilt.',
      'Respekter feltets begrensninger for å unngå bot.'
    ],
    confusedWith: ['508.1', '510.2'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['kollektivfelt', 'buss', 'drosje', 'taxi', 'buss og drosje']
  },
  {
    id: '509',
    code: '509',
    name: 'Sambruksfelt',
    displayName: 'Sambruksfelt',
    slug: 'sambruksfelt',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-509-sambruksfelt.jpg',
    shortExplanation: 'Viser at kjørefeltet er reservert for kjøretøy i sambruk (flere personer i bilen).',
    longExplanation: 'Skiltet markerer et kjørefelt reservert for minibusser, drosjer, elbiler/hydrogenbiler og andre motorvogner som har minst det antall personer om bord som er angitt på skiltet (f.eks. 2+ eller 3+).',
    theoryTrap: 'Kravet til antall personer gjelder også for føreren. Hvis skiltet sier 3+, betyr det fører + minst to passasjerer.',
    whatToDo: [
      'Bruk feltet kun hvis du oppfyller minstekravet til antall personer i kjøretøyet.',
      'Plasser deg i det ordinære feltet dersom du kjører alene.'
    ],
    confusedWith: ['511'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['sambruk', 'sambruksfelt', 'samkjøring', 'passasjerer', '2+', '3+']
  },
  {
    id: '510.1',
    code: '510.1',
    name: 'Slutt på kollektivfelt',
    displayName: 'Slutt på kollektivfelt',
    slug: 'slutt-pa-kollektivfelt',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-510-1-slutt-pa-kollektivfelt.jpg',
    shortExplanation: 'Viser at den reserverte reguleringen for kollektivfeltet opphører.',
    longExplanation: 'Dette skiltet markerer slutten på kollektivfeltet. Kjørefeltet går etter dette over til å være et ordinært kjørefelt for all trafikk.',
    theoryTrap: 'Når feltet slutter, må du være oppmerksom på at vanlig trafikk vil begynne å bruke feltet igjen, og det kan oppstå sammenfletting eller feltskifte.',
    whatToDo: [
      'Vær oppmerksom på andre kjøretøy som fletter eller skifter felt når reguleringen opphører.',
      'Kjør som normalt i feltet framover.'
    ],
    confusedWith: ['508.1', '510.2'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['slutt kollektivfelt', 'kollektivfelt slutt', 'slutt på bussfelt']
  },
  {
    id: '510.2',
    code: '510.2',
    name: 'Slutt på kollektivfelt for buss og drosje',
    displayName: 'Slutt på kollektivfelt for buss og drosje',
    slug: 'slutt-pa-kollektivfelt-for-buss-og-drosje',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-510-2-slutt-pa-kollektivfelt.jpg',
    shortExplanation: 'Viser at kollektivfeltet for buss og drosje opphører.',
    longExplanation: 'Dette skiltet markerer slutten på det særskilte kollektivfeltet for buss og drosje. Feltet blir nå et vanlig kjørefelt åpent for alle.',
    theoryTrap: 'Vær forberedt på at biler fra de andre feltene kan ønske å skifte felt hit når restriksjonen opphører.',
    whatToDo: [
      'Følg med i speilene for kjøretøy som skifter felt etter at restriksjonen opphører.',
      'Kjør som normalt.'
    ],
    confusedWith: ['508.2', '510.1'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['slutt kollektivfelt', 'buss og drosje slutt']
  },
  {
    id: '511',
    code: '511',
    name: 'Slutt på sambruksfelt',
    displayName: 'Slutt på sambruksfelt',
    slug: 'slutt-pa-sambruksfelt',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-511-slutt-pa-sambruksfelt.jpg',
    shortExplanation: 'Viser at den særskilte reguleringen for sambruksfelt opphører.',
    longExplanation: 'Dette skiltet markerer slutten på sambruksfeltet. Kjørefeltet åpnes etter dette for ordinær trafikk uavhengig av antall passasjerer i bilen.',
    theoryTrap: 'Vær forberedt på at biler uten passasjerer nå vil begynne å flette inn i feltet.',
    whatToDo: [
      'Vær oppmerksom på fletting og endret feltdeling framover.',
      'Fortsett kjøringen i samsvar med ordinære trafikkregler.'
    ],
    confusedWith: ['509'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['slutt sambruksfelt', 'sambruksfelt slutt', 'sambruk slutt']
  },
  {
    id: '512',
    code: '512',
    name: 'Holdeplass for buss',
    displayName: 'Holdeplass for buss',
    slug: 'holdeplass-for-buss',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-512-holdeplass-for-buss.jpg',
    shortExplanation: 'Viser hvor det er holdeplass for buss.',
    longExplanation: 'Skiltet markerer en bussholdeplass. Det er forbudt å parkere på holdeplassen eller mindre enn 20 meter fra skiltet på begge sider. Av- og påstigning er tillatt dersom det ikke hindrer bussen.',
    theoryTrap: 'Du kan stoppe for kort av- og påstigning ved bussholdeplassen, men du har aldri lov til å parkere der. Husk også 20-metersregelen på begge sider av skiltet!',
    whatToDo: [
      'Ikke parker på holdeplassen eller innenfor 20 meter fra skiltet.',
      'Vikeplikt for busser som blinker ut fra holdeplassen der fartsgrensen er 60 km/t eller lavere.',
      'Tilpass farten og vær oppmerksom på passasjerer som krysser vegen.'
    ],
    confusedWith: ['514'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['holdeplass', 'buss', 'bussholdeplass', 'buss-stopp', 'bussstopp', 'stoppe', 'parkering']
  },
  {
    id: '514',
    code: '514',
    name: 'Holdeplass for drosje',
    displayName: 'Holdeplass for drosje',
    slug: 'holdeplass-for-drosje',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-514-holdeplass-for-drosje.jpg',
    shortExplanation: 'Viser sted reservert for drosjeoppstilling.',
    longExplanation: 'Dette skiltet markerer en holdeplass eller oppstillingsplass for drosjer. Det er forbudt å parkere eller stanse for andre kjøretøy her.',
    theoryTrap: 'Det er strengt forbudt for private kjøretøy å parkere eller stanse på en drosjeholdeplass. Dette er reservert utelukkende for drosjer i tjeneste.',
    whatToDo: [
      'Ikke stans eller parker på drosjeholdeplassen.',
      'La plassen være fri for drosjenes drift.'
    ],
    confusedWith: ['512'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['taxi', 'drosje', 'drosjeholdeplass', 'taxiholdeplass', 'drosje-stopp']
  },
  {
    id: '518',
    code: '518',
    name: 'Gangveg',
    displayName: 'Gangveg',
    slug: 'gangveg',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-518-gangveg.jpg',
    shortExplanation: 'Viser at vegen er reservert for gående.',
    longExplanation: 'Skiltet markerer en veg som er fysisk anlagt og reservert for fotgjengere. Det er forbudt å kjøre motorvogn her. Sykling er i utgangspunktet kun tillatt i gangfart og på de gåendes premisser.',
    theoryTrap: 'Dette er en gangveg, ikke en sykkelveg. Sykling er kun tillatt hvis det skjer uten fare eller hinder for de gående (i praksis gangfart).',
    whatToDo: [
      'Ikke kjør motorvogn på gangvegen.',
      'Ta hensyn til gående dersom du sykler, og hold lav fart.'
    ],
    confusedWith: ['520', '522'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['gangveg', 'gangvei', 'fotgjenger', 'rulle stol', 'gå']
  },
  {
    id: '520',
    code: '520',
    name: 'Sykkelveg',
    displayName: 'Sykkelveg',
    slug: 'sykkelveg',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-520-sykkelveg.jpg',
    shortExplanation: 'Viser at vegen er reservert for syklende.',
    longExplanation: 'Dette skiltet markerer en veg anlagt spesielt for syklister og førere av små elektriske kjøretøy. Gående kan bruke vegen dersom det ikke er gangveg ved siden av, men må da gå på siden av vegen.',
    theoryTrap: 'Dette er en sykkelveg og ikke en gangveg, men fotgjengere har likevel lov til å gå der dersom det ikke finnes et alternativt fortau eller gangveg. Syklister må ta hensyn til dem.',
    whatToDo: [
      'Bruk vegen om du sykler eller kjører el-sparkesykkel.',
      'Ikke kjør bil, moped eller motorsykkel her.',
      'Vær oppmerksom på eventuelle gående.'
    ],
    confusedWith: ['518', '521', '522'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['sykkelveg', 'sykkelvei', 'sykkel', 'sykle']
  },
  {
    id: '521',
    code: '521',
    name: 'Sykkelfelt',
    displayName: 'Sykkelfelt',
    slug: 'sykkelfelt',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-521-sykkelfelt.jpg',
    shortExplanation: 'Viser at et kjørefelt er reservert for syklende.',
    longExplanation: 'Et sykkelfelt er en del av kjørebanen som er skiltet og oppmerket for syklister. Det er forbudt for motorvogner å kjøre i eller stanse i sykkelfeltet, unntatt ved kryssing for avsvinging.',
    theoryTrap: 'Det er stans- og parkeringsforbud i sykkelfelt for vanlige biler. Du har ikke lov til å gjøre korte stopp for av- eller påstigning der.',
    whatToDo: [
      'Ikke stans eller parker bilen din i sykkelfeltet.',
      'Kryss feltet raskt og kun etter grundig blindsonesjekk ved svinging til høyre.'
    ],
    confusedWith: ['520'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['sykkelfelt', 'sykkel', 'sykkelfelt i kjørebane']
  },
  {
    id: '522',
    code: '522',
    name: 'Gang- og sykkelveg',
    displayName: 'Gang- og sykkelveg',
    slug: 'gang-og-sykkelveg',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-522-gang-og-sykkelveg.jpg',
    shortExplanation: 'Viser at vegen er reservert for gående og syklende.',
    longExplanation: 'Skiltet markerer en felles veg beregnet for både gående og syklende. Trafikantene må dele plassen og vise gjensidig hensyn. Syklende må passere gående med god avstand og i moderat fart.',
    theoryTrap: 'Dette er en fellesvei uten fysisk deling mellom gående og syklende. Syklister har ikke forkjørsrett fremfor gående her og må tilpasse farten.',
    whatToDo: [
      'Del vegen hensynsfullt enten du går eller sykler.',
      'Senk farten på sykkel når du passerer gående.',
      'Ikke kjør motorvogn på vegen.'
    ],
    confusedWith: ['518', '520'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['gang og sykkelveg', 'gang og sykkelvei', 'fellesvei', 'sykkel og gange']
  },
  {
    id: '526.2',
    code: '526.2',
    name: 'Envegskjøring',
    displayName: 'Envegskjøring',
    slug: 'envegskjoring-retning',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-526-2-envegskjoring.jpg',
    shortExplanation: 'Viser at kryssende veg er envegsregulert i pilens retning.',
    longExplanation: 'Dette skiltet settes opp før eller i et kryss for å opplyse om at den kryssende vegen er envegsregulert. Du kan bare svinge inn på vegen i pilens retning.',
    theoryTrap: 'Selv om dette skiltet viser at vegen er envegsregulert, må du fortsatt sjekke om det er underskilt som gjør unntak for syklister, slik at du ikke kolliderer med en møtende sykkel.',
    whatToDo: [
      'Sving bare til høyre/venstre i pilens retning inn på den envegsregulerte vegen.',
      'Ikke kjør mot pilens retning.'
    ],
    confusedWith: ['526'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['envegskjøring', 'envegskjoring kryss', 'enveiskjøring', 'pil']
  },
  {
    id: '527.2',
    code: '527.2',
    name: 'Blindveg sideveg',
    displayName: 'Blindveg sideveg',
    slug: 'blindveg-sideveg',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-527-2-blindveg-sideveg.jpg',
    shortExplanation: 'Viser at sidevegen er en blindveg.',
    longExplanation: 'Skiltet opplyser før krysset om at sidevegen du kan svinge inn på, er stengt for gjennomkjøring med motorvogn.',
    theoryTrap: 'Dette er en advarsel før du svinger. Du kan godt kjøre inn der hvis du har et ærend, men du kommer ikke igjennom med bil.',
    whatToDo: [
      'Vær forberedt på å måtte snu dersom du svinger inn på sidevegen.',
      'Fortsett rett fram om du skal gjennom til andre områder.'
    ],
    confusedWith: ['527'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['blindveg sideveg', 'blindvei sidevei', 'blindsideveg']
  },
  {
    id: '527.3',
    code: '527.3',
    name: 'Blindveg åpen for gående og syklende',
    displayName: 'Blindveg åpen for gående og syklende',
    slug: 'blindveg-apen-for-gaende-og-syklende',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-527-3-blindveg-apen-for-gaende-og-syklende.jpg',
    shortExplanation: 'Viser at vegen er blind for motorvogn, men åpen for gående og syklende.',
    longExplanation: 'Dette skiltet viser at vegen er fysisk stengt for gjennomkjøring med bil, men at det er en gang- og sykkelveg eller sti videre i enden slik at myke trafikanter kan passere.',
    theoryTrap: 'For biler er veien helt stengt i enden, men forvent mer gående og syklende trafikk som bruker veien som gjennomgang.',
    whatToDo: [
      'Ikke kjør inn her dersom du skal gjennom med bil.',
      'Kjør forsiktig da det er tilrettelagt for gjennomgang av syklister og fotgjengere.'
    ],
    confusedWith: ['527', '527.4'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['blindvei sykkel', 'blindveg gående', 'blindveg sykkel og gange']
  },
  {
    id: '527.4',
    code: '527.4',
    name: 'Blindveg sideveg åpen for gående og syklende',
    displayName: 'Blindveg sideveg åpen for gående og syklende',
    slug: 'blindveg-sideveg-apen-for-gaende-og-syklende',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-527-4-blindveg-sideveg-apen-for-gaende-og-syklende.jpg',
    shortExplanation: 'Viser at sidevegen er blind for motorvogn, men åpen for gående og syklende.',
    longExplanation: 'Dette skiltet opplyser på forhånd om at sidevegen er stengt for gjennomkjøring med motorvogn, men har åpen passasje videre for gående og syklende.',
    theoryTrap: 'Dette skiltet varsler deg om forholdene i sidevegen før du svinger inn i krysset.',
    whatToDo: [
      'Sving kun inn dersom du skal besøke en adresse i sidevegen eller ferdes til fots/sykkel.',
      'Kjør forsiktig med tanke på syklende og gående.'
    ],
    confusedWith: ['527.3', '527.2'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['blindveg sideveg sykkel', 'blindvei sidevei gange']
  },
  {
    id: '528',
    code: '528',
    name: 'Valgfritt kjørefelt',
    displayName: 'Valgfritt kjørefelt',
    slug: 'valgfritt-kjorefelt',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-528-valgfritt-kjorefelt.jpg',
    shortExplanation: 'Viser at kjørefeltet deler seg i to og at du kan bruke begge feltene videre.',
    longExplanation: 'Skiltet opplyser om at kjørefeltet du befinner deg i deler seg i to separate felt framover, og at du kan velge fritt hvilket av de to feltene du vil legge deg i uten å krysse sperrelinjer.',
    theoryTrap: 'Du må bestemme deg og velge felt før linjene blir heltrukne sperrelinjer. Plasser deg tidlig etter hvor du skal videre.',
    whatToDo: [
      'Velg et av de to feltene og plasser deg tydelig i god tid.',
      'Unngå brå feltskifter rett der feltet deler seg.'
    ],
    confusedWith: [],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['valgfritt felt', 'kjørefelt deler seg', 'kjørefeltvalg']
  },
  {
    id: '530',
    code: '530',
    name: 'Sammenfletting',
    displayName: 'Sammenfletting',
    slug: 'sammenfletting',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-530-sammenfletting.jpg',
    shortExplanation: 'Viser at to kjørefelt skal flettes sammen til ett. Fletteprinsippet gjelder.',
    longExplanation: 'Dette skiltet markerer at to kjørefelt går sammen til ett kjørefelt. Her gjelder fletteprinsippet (vegtrafikkloven § 8 nr. 3), som betyr at de kjørende under gjensidig hensynstagen skal kjøre annenhver gang inn i det felles kjørefeltet.',
    theoryTrap: 'Ingen av kjørefeltene har forkjørsrett framfor det andre. Det er vikeplikt for begge parter til å flette smidig (kjøre annenhver gang), i motsetning til ved et vanlig feltskifte der du har vikeplikt for biler i det andre feltet.',
    whatToDo: [
      'Tilpass farten til bilene i det andre kjørefeltet.',
      'Flett inn etter "glidelåsprinsippet" ved å kjøre annenhver gang.',
      'Vis gjensidig hensyn og unngå unødig bremsing.'
    ],
    confusedWith: ['532', '531'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['sammenfletting', 'fletting', 'glidelås', 'flette', 'kjørefelt']
  },
  {
    id: '531',
    code: '531',
    name: 'Felt for fartsøkning',
    displayName: 'Felt for fartsøkning',
    slug: 'felt-for-fartsokning',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-531-felt-for-fartsokning.jpg',
    shortExplanation: 'Viser at du kjører i et påkjøringsfelt (akselerasjonsfelt) og skal flette med trafikken.',
    longExplanation: 'Dette skiltet opplyser om at du befinner deg i et fartsøkingsfelt, typisk ved påkjøring to motorveg eller motortrafikkveg. Du skal øke farten for å tilpasse deg flyten i hovedkjørebanen og deretter flette inn.',
    theoryTrap: 'Fartsøkingsfeltet bruker fletteprinsippet, men du må tilpasse farten din godt slik at du ikke tvinger trafikken i hovedkjørebanen til å bremse brått. Ikke stopp opp i påkjøringsfeltet med mindre det er helt nødvendig.',
    whatToDo: [
      'Øk farten i feltet slik at du oppnår samme hastighet som trafikken på motorvegen.',
      'Finn en egnet luke i speilet, blink i god tid og flett smidig inn.',
      'Ikke stans i fartsøkingsfeltet med mindre det er absolutt nødvendig for sikkerheten.'
    ],
    confusedWith: ['530', '534'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['fartsøkning', 'påkjøringsfelt', 'akselerasjonsfelt', 'flette motorveg']
  },
  {
    id: '532',
    code: '532',
    name: 'Kjørefelt slutter',
    displayName: 'Kjørefelt slutter',
    slug: 'kjorefelt-slutter',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-532-kjorefelt-slutter.jpg',
    shortExplanation: 'Viser at et kjørefelt slutter framover. Kjørende i dette feltet må skifte felt.',
    longExplanation: 'Dette skiltet markerer at et kjørefelt slutter og at kjørende i dette feltet må foreta et feltskifte inn i det gjenværende feltet. Her gjelder de vanlige reglene for feltskifte, som betyr at den som skifter felt har vikeplikt for trafikk i det feltet man skal inn i.',
    theoryTrap: 'Det er lett å forveksle dette med sammenfletting (skilt 530). Ved kjørefelt slutter har du vikeplikt dersom du kjører i feltet som opphører og skal skifte felt. Ved sammenfletting (530) har ingen vikeplikt, og man fletter annenhver gang.',
    whatToDo: [
      'Dersom ditt felt slutter: Gi tegn, sjekk speil og blindsone, og skift felt når det er en ledig luke.',
      'Husk at du har vikeplikt for biler i det kjørefeltet du skal kjøre inn i.',
      'Dersom du kjører i det gjennomgående feltet: Hjelp andre til å skifte felt ved å tilpasse farten.'
    ],
    confusedWith: ['530', '538'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['kjørefelt slutter', 'felt slutter', 'feltskifte', 'vikeplikt feltskifte']
  },
  {
    id: '534',
    code: '534',
    name: 'Kjørefelt begynner',
    displayName: 'Kjørefelt begynner',
    slug: 'kjorefelt-begynner',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-534-kjorefelt-begynner.jpg',
    shortExplanation: 'Viser at vegen utvides med et nytt kjørefelt framover.',
    longExplanation: 'Skiltet markerer at det opprettes et nytt kjørefelt på siden av det eksisterende, for eksempel et stigningsfelt for saktegående kjøretøy eller et eget felt for svinging.',
    theoryTrap: 'Det nye feltet kan brukes til å slippe forbi raskere trafikk dersom du kjører et saktegående kjøretøy, eller til å plassere deg riktig før et kryss.',
    whatToDo: [
      'Legg deg i det nye høyre feltet dersom du kjører sakte og vil slippe forbi kø.',
      'Hold øye med trafikken som eventuelt skifter felt inn i det nye feltet.'
    ],
    confusedWith: ['531', '538'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['kjørefelt begynner', 'nytt felt', 'stigningsfelt']
  },
  {
    id: '538',
    code: '538',
    name: 'Kjørefeltinndeling',
    displayName: 'Kjørefeltinndeling',
    slug: 'kjorefeltinndeling',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-538-kjorefeltinndeling.jpg',
    shortExplanation: 'Viser antall kjørefelt i din retning og hvordan de fordeler seg.',
    longExplanation: 'Dette skiltet opplyser om feltstrukturen på strekningen framover. Det viser hvor mange kjørefelt som går i kjøreretningen din, og om noen av dem svinger av eller er reservert.',
    theoryTrap: 'Kjørefeltinndelingstavlen viser den fysiske inndelingen. Du må plassere deg i riktig felt tidlig i samsvar med pilene på skiltet.',
    whatToDo: [
      'Bruk skiltet til å orientere deg om riktig plassering i god tid før kyss eller feltdelinger.',
      'Plasser deg i kjørefeltet som leder dit du skal.'
    ],
    confusedWith: ['532', '534'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['kjørefeltinndeling', 'feltinndeling', 'feltpiler', 'kjørefelt']
  },
  {
    id: '540',
    code: '540',
    name: 'Gatetun',
    displayName: 'Gatetun',
    slug: 'gatetun',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-540-gatetun.jpg',
    shortExplanation: 'Viser at du kjører inn i et område med spesielle regler for fart og lek.',
    longExplanation: 'Et gatetun er et område tilrettelagt for opphold og lek. Her gjelder særskilte regler: All kjøring må skje i gangfart (under 10 km/t), du har vikeplikt for alle fotgjengere, og det er forbudt å parkere utenom spesielt oppmerkede plasser.',
    theoryTrap: 'Fartsgrensen i et gatetun er ikke 30 eller 50 km/t – den er «gangfart», noe som i praksis tolkes som under 10 km/t. Husk også at du har vikeplikt (høyreregelen) når du kjører inne i et gatetun, men når du kjører UT av et gatetun har du vikeplikt for all trafikk på kryssende veg (vegtrafikkloven § 7 nr. 4).',
    whatToDo: [
      'Kjør i gangfart (under 10 km/t) når du befinner deg i et gatetun.',
      'Vis ekstrem aktsomhet overfor lekende barn og fotgjengere som kan bruke hele gata.',
      'Parkere kun på oppmerkede plasser, og husk vikeplikten når du skal kjøre ut av gatetunet.'
    ],
    confusedWith: ['542', '548'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['gatetun', 'gangfart', 'lekeområde', 'parkering gatetun', 'ut av gatetun']
  },
  {
    id: '542',
    code: '542',
    name: 'Slutt på gatetun',
    displayName: 'Slutt på gatetun',
    slug: 'slutt-pa-gatetun',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-542-slutt-pa-gatetun.jpg',
    shortExplanation: 'Viser at reguleringen for gatetun opphører.',
    longExplanation: 'Dette skiltet markerer at du forlater et gatetun. Du har full vikeplikt for all trafikk på den kryssende vegen du kjører ut på.',
    theoryTrap: 'Når du passerer dette skiltet for å kjøre ut på vanlig veg, har du vikeplikt for alle trafikanter på den kryssende vegen (både kjørende og myke trafikanter), uavhengig av høyreregelen.',
    whatToDo: [
      'Stopp helt og overhold vikeplikten overfor all trafikk på den kryssende vegen du kjører ut på.',
      'Gå over til normal fartstilpasning etter de nye vegforholdene.'
    ],
    confusedWith: ['540'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['slutt gatetun', 'gatetun slutt', 'ut av gatetun']
  },
  {
    id: '548',
    code: '548',
    name: 'Gågate',
    displayName: 'Gågate',
    slug: 'gagate',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-548-gagate.jpg',
    shortExplanation: 'Viser at vegen er regulert som gågate der kjøring i utgangspunktet er forbudt.',
    longExplanation: 'En gågate er en gate reservert for gående. Kjøring med motorvogn er i utgangspunktet forbudt, med mindre annet er spesifisert på underskilt (f.eks. for varelevering til bestemte tider). All tillatt kjøring må skje i gangfart og på de gåendes premisser.',
    theoryTrap: 'Kjøring i gågate er kun tillatt i spesielle unntakstilfeller. Dersom du har tillatelse til å kjøre der, må du holde gangfart (under 10 km/t) og vike for alle fotgjengere. Du har også vikeplikt når du kjører UT av en gågate.',
    whatToDo: [
      'Ikke kjør inn i gågaten med mindre du har spesiell tillatelse (f.eks. varelevering til godkjente tider).',
      'Kjør i gangfart og vik for alle gående dersom kjøring er tillatt.',
      'Husk full vikeplikt for kryssende trafikk når du kjører ut av gågaten.'
    ],
    confusedWith: ['540', '518'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['gågate', 'gagate', 'fotgjenger gate', 'kjøreforbud gågate']
  }
];

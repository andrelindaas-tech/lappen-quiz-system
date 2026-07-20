export interface TrafficSignCombination {
  mainSignCode: string;
  mainSignName: string;
  mainSignImagePath: string;
  relationType: string;
  combinedMeaning: string;
}

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
  combinations?: TrafficSignCombination[];
  visualDescription?: string;
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
    aliases: ['yield', 'gi vikeplikt', 'trekant'],
    visualDescription: 'Trekantet skilt med spissen ned, rød kant og hvit bunn.',
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
    aliases: ['stop', 'stoppe', 'stoppskilt'],
    visualDescription: 'Åttekantet rødt skilt med hvit kant og teksten STOP.',
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
    aliases: ['forkjørsvei', 'diamant', 'gul diamant'],
    visualDescription: 'Diamantformet skilt med gul midt, hvit ramme og svart ytterkant.',
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
    aliases: ['slutt på forkjørsvei', 'opphevet forkjørsveg'],
    visualDescription: 'Gul og hvit diamant med fem tynne, parallelle, svarte skråstreker over.',
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
    aliases: ['forkjørskryss', 'kryss med vikeplikt'],
    visualDescription: 'Trekantet skilt med spissen opp, rød kant, hvit bunn og et svart symbol som viser en tykk pil rett fram krysset av en tynn tverrlinje.',
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
    aliases: ['møtende trafikk', 'smal vei', 'rød pil'],
    visualDescription: 'Rundt skilt med rød kant, hvit bunn, rød pil oppover og svart pil nedover.',
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
    aliases: ['møtende vikeplikt', 'smal vei forkjørsrett', 'hvit pil'],
    visualDescription: 'Blått firkantet skilt med hvit pil oppover og rød pil nedover.',
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
    aliases: ['veiarbeid', 'arbeid', 'vegarbeid'],
    visualDescription: 'Trekantet skilt med spissen opp, rød kant, gul bunn og et svart symbol av en person som graver.',
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
    aliases: ['glatt', 'is', 'glatt kjørebane', 'såpeglatt', 'hålke'],
    visualDescription: 'Trekantet skilt med spissen opp, rød kant, hvit bunn og et svart symbol av en bil som sklir og lager svingete spor.',
  },
  {
    id: '122',
    code: '122',
    name: 'Tunnel',
    displayName: 'Tunnel',
    slug: 'tunnel',
    category: 'fareskilt',
    imagePath: '/signs/fareskilt/skilt-122-tunnel.jpg',
    shortExplanation: 'Varsler om tunnel lenger fremme. Ta av solbriller og vær forberedt på brå endring i lysforhold.',
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
    aliases: ['barn', 'skole', 'barnehage', 'lekeplass'],
    visualDescription: 'Trekantet skilt med spissen opp, rød kant, hvit bunn og et svart symbol av to barn som løper.',
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
    aliases: ['innkjøring', 'innkjoring', 'enveiskjørt', 'forbudt innkjøring'],
    visualDescription: 'Rundt rødt skilt med en hvit vannrett bjelke i midten.',
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
    aliases: ['alle kjøretøy', 'stengt veg', 'stengt', 'forbudt for alle kjøretøy'],
    visualDescription: 'Rundt skilt med rød kant og hvit bunn.',
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
    aliases: ['motorvogn', 'bil og motorsykkel', 'forbudt for motorvogn'],
    visualDescription: 'Rundt skilt med rød kant, hvit bunn og et svart symbol av en personbil.',
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
    aliases: ['sykkel forbudt', 'sykling', 'forbudt for syklende'],
    visualDescription: 'Rundt skilt med rød kant, hvit bunn og et svart symbol av en sykkel.',
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
    aliases: ['gående og syklende', 'fotgjenger forbudt', 'forbudt for gående og syklende'],
    visualDescription: 'Rundt skilt med rød kant, hvit bunn og svarte symboler av en gående og en syklende.',
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
    aliases: ['farlig gods', 'adr', 'giftig last', 'transport av farlig gods'],
    visualDescription: 'Rundt skilt med rød kant, hvit bunn, en svart lastebil og et oransje symbol (eksplosjon) bak.',
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
    aliases: ['bredde', 'breddegrense', 'trang vei'],
    visualDescription: 'Rundt skilt med rød kant, hvit bunn og teksten 2,3 m med piler på hver side.',
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
    aliases: ['høyde', 'hoyde', 'høydegrense', 'lav undergang'],
    visualDescription: 'Rundt skilt med rød kant, hvit bunn og teksten 3,5 m med piler over og under.',
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
    aliases: ['svingforbud', 'høyre sving', 'svinge høyre', 'svingforbud høyre'],
    visualDescription: 'Rundt skilt med rød kant, hvit bunn og en svart pil som svinger til høyre med en rød skråstrek over.',
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
    aliases: ['svingforbud', 'venstre sving', 'svinge venstre', 'svingforbud venstre'],
    visualDescription: 'Rundt skilt med rød kant, hvit bunn og en svart pil som svinger til venstre med en rød skråstrek over.',
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
    aliases: ['u-sving', 'vending', 'snu', 'u sving'],
    visualDescription: 'Rundt skilt med rød kant, hvit bunn og en svart U-sving-pil med en rød skråstrek over.',
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
    aliases: ['forbikjøring', 'forbikjoring', 'forbifart', 'forbikjøring forbudt'],
    visualDescription: 'Rundt skilt med rød kant, hvit bunn og to biler ved siden av hverandre (en rød til venstre og en svart til høyre).',
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
    aliases: ['forbikjøring lastebil', 'lastebil forbud', 'forbikjøringsforbud lastebil'],
    visualDescription: 'Rundt skilt med rød kant, hvit bunn, en rød lastebil til venstre og en svart personbil til høyre.',
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
    aliases: ['forbikjøring', 'forbikjoring', 'slutt på forbikjøringsforbud', 'opphevet forbikjøring'],
    visualDescription: 'Rundt skilt med hvit bunn, fem tynne, parallelle, grå skråstreker og to grå biler ved siden av hverandre.',
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
    aliases: ['slutt forbikjøring lastebil', 'lastebil forbikjøring opphevet', 'slutt på forbikjøringsforbud for lastebil'],
    visualDescription: 'Rundt skilt med hvit bunn, fem tynne, parallelle, grå skråstreker, en grå lastebil og en grå personbil ved siden av hverandre.',
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
    aliases: ['fartsgrense', 'fart', 'fart 50', 'fartsgrense 50'],
    visualDescription: 'Rundt skilt med rød kant, hvit bunn og tallet 50.',
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
    aliases: ['fartsgrense', 'fart', 'slutt på særskilt fartsgrense', 'opphevet fartsgrense'],
    visualDescription: 'Rundt skilt med hvit bunn, fem tynne, parallelle, svarte skråstreker over et lysegrått tall 50.',
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
    aliases: ['sone', 'fartssone', 'fartsgrensesone', 'fartsone'],
    visualDescription: 'Firkantet hvitt skilt med svart kant, som viser teksten SONE over et rundt fartsgrenseskilt med rød kant og tallet 30.',
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
    aliases: ['slutt sone', 'opphevet sone', 'slutt på fartsgrensesone'],
    visualDescription: 'Firkantet gråhvitt skilt som viser teksten SONE over en grå ring med tallet 30, overstrøket med fem tynne, parallelle, svarte/grå skråstreker.',
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
    aliases: ['stans', 'stopp forbudt', 'all stans forbudt', 'stans forbudt'],
    visualDescription: 'Rundt skilt med rød kant, blå bunn og et rødt kryss (X) over hele skiltflaten.',
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
    aliases: ['parkering', 'stans', 'parkere', 'parkering forbudt'],
    visualDescription: 'Rundt skilt med rød kant, blå bunn og en rød diagonal skråstrek.',
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
    aliases: ['påbud', 'pabud', 'kjøreretning', 'kjoreretning', 'rett fram'],
    visualDescription: 'Blått rundt skilt med en hvit pil som peker rett opp.',
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
    aliases: ['påbud', 'pabud', 'kjøreretning', 'kjoreretning', 'høyre', 'hoyre'],
    visualDescription: 'Blått rundt skilt med en hvit pil som peker til høyre.',
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
    aliases: ['påbud', 'pabud', 'kjøreretning', 'kjoreretning', 'venstre'],
    visualDescription: 'Blått rundt skilt med en hvit pil som peker til venstre.',
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
    aliases: ['påbud', 'pabud', 'kjøreretning', 'kjoreretning', 'rett fram', 'høyre', 'hoyre'],
    visualDescription: 'Blått rundt skilt med en hvit pil som deler seg rett fram og til høyre.',
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
    aliases: ['påbud', 'pabud', 'kjøreretning', 'kjoreretning', 'rett fram', 'venstre'],
    visualDescription: 'Blått rundt skilt med en hvit pil som deler seg rett fram og til venstre.',
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
    aliases: ['påbud', 'pabud', 'kjøreretning', 'kjoreretning', 'høyre', 'hoyre', 'venstre'],
    visualDescription: 'Blått rundt skilt med en hvit pil som peker til både høyre og venstre.',
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
    aliases: ['påbud', 'pabud', 'kjøreretning', 'kjoreretning', 'høyre side', 'hoyre side', 'runding'],
    visualDescription: 'Blått rundt skilt med en hvit pil som peker skrått nedover mot høyre.',
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
    aliases: ['påbud', 'pabud', 'kjøreretning', 'kjoreretning', 'venstre side', 'runding'],
    visualDescription: 'Blått rundt skilt med en hvit pil som peker skrått nedover mot venstre.',
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
    aliases: ['påbud', 'pabud', 'kjørefelt', 'kjorefelt', 'høyre', 'hoyre'],
    visualDescription: 'Blått rundt skilt med en hvit pil som peker skrått nedover mot høyre.',
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
    aliases: ['påbud', 'pabud', 'kjørefelt', 'kjorefelt', 'venstre'],
    visualDescription: 'Blått rundt skilt med en hvit pil som peker skrått nedover mot venstre.',
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
    aliases: ['påbud', 'pabud', 'rundkjøring', 'rundkjoring'],
    visualDescription: 'Blått rundt skilt med tre hvite piler som danner en sirkel.',
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
    aliases: ['påbud', 'pabud', 'kjøreretning', 'kjoreretning', 'rundkjøring', 'rundkjoring'],
    visualDescription: 'Blått avlangt skilt med tre hvite piler som peker mot høyre.',
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
    aliases: ['motorveg', 'motorvei', 'motorveiskilt', 'fart'],
    visualDescription: 'Blått firkantet skilt med et hvitt symbol av to kjørebaner og en bro over.',
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
    aliases: ['motortrafikkveg', 'motortrafikkvei', 'hurtigveg', 'hurtigvei'],
    visualDescription: 'Blått firkantet skilt med et hvitt symbol av en personbil sett fra siden.',
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
    aliases: ['slutt på motorveg', 'slutt på motorvei', 'motorveg slutt'],
    visualDescription: 'Blått firkantet skilt med hvitt symbol av motorveg, overstrøket med en rød diagonal linje.',
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
    aliases: ['slutt på motortrafikkveg', 'slutt på motortrafikkvei', 'motortrafikkveg slutt'],
    visualDescription: 'Blått firkantet skilt med hvitt symbol av motortrafikkveg, overstrøket med en rød diagonal linje.',
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
    aliases: ['gangfelt', 'fotgjengerfelt', 'zebra', 'krysse veien', 'fotgjenger'],
    visualDescription: 'Blått firkantet skilt med en hvit trekant som viser en person som går over et gangfelt.',
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
    aliases: ['møteplass', 'moteplass', 'møtested', 'smal vei', 'passering'],
    visualDescription: 'Blått firkantet skilt med en stor, hvit bokstav M.',
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
    aliases: ['envegskjøring', 'envegskjoring', 'enveiskjøring', 'enveiskjørt', 'enveis'],
    visualDescription: 'Blått avlangt skilt med en hvit pil og teksten ENVEGSKJØRING.',
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
    aliases: ['blindveg', 'blindvei', 'stengt veg', 'stengt vei'],
    visualDescription: 'Blått firkantet skilt med et rødt og hvitt symbol av en blindvei.',
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
    visualDescription: 'Rektangulært blått skilt med hvitt buss-symbol.',
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
    visualDescription: 'Hvitt firkantet skilt der en rød pil viser fartsøkningsfeltet som flettes inn i det gjennomgående kjørefeltet.',
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
    visualDescription: 'Hvitt firkantet skilt der svarte piler viser feltene som fortsetter, og en rød pil viser kjørefeltet som slutter og må flette inn.',
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
    theoryTrap: 'Når du passerer dette skiltet for å kjøre ut på vanlig veg, har du vikeplikt for alle trafikanter på den kryssende vegen. Dette gjelder selv om du kommer fra høyre, da utkjørsel fra gatetun er likestilt med utkjørsel fra eiendom, parkeringsplass eller gårdsveg.',
    whatToDo: [
      'Stopp eller sjekk kryssende veg grundig for å overholde vikeplikten når du kjører ut av gatetunet.',
      'Tilpass farten din til den ordinære fartsgrensen som gjelder på vegen du svinger inn på.'
    ],
    confusedWith: ['540'],
    sources: [{ name: 'Statens vegvesen', url: 'https://www.vegvesen.no' }],
    aliases: ['slutt gatetun', 'vikeplikt', 'ut av gatetun']
  },
  // --- UNDERSKILT (Aktiv Kategori) ---
  {
    id: '802',
    code: '802',
    name: 'Avstand',
    displayName: 'Avstand',
    slug: 'avstand',
    category: 'underskilt',
    imagePath: '/signs/underskilt/skilt-802-avstand.jpg',
    shortExplanation: 'Viser nøyaktig avstand fra hovedskiltet frem til stedet der faren eller reguleringen begynner.',
    longExplanation: 'Dette underskiltet presiserer avstanden fra der skiltet står, til det punktet der faren starter eller reguleringen trer i kraft. For eksempel, plassert under et fareskilt angir det avstanden til selve faren. Plassert under et vikepliktsskilt kan det angi avstand frem til vikepliktlinjen eller stopplinjen.',
    theoryTrap: 'Mange forveksler avstand med utstrekning (skilt 804). Avstand (802) har ingen piler på siden av tallet og viser kun hvor langt det er frem til reguleringen starter, ikke hvor lang strekning den gjelder for.',
    whatToDo: [
      'Vær forberedt på at faren eller reguleringen beskrevet på hovedskiltet inntreffer etter den oppgitte avstanden.',
      'Tilpass farten og oppmerksomheten din i god tid.'
    ],
    confusedWith: ['804', '824'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['underskilt', 'avstand', 'gjelder', 'strekning', 'meter'],
    combinations: [
      {
        mainSignCode: '362',
        mainSignName: 'Fartsgrense 50',
        mainSignImagePath: '/signs/forbudsskilt/skilt-362-50-fartsgrense.jpg',
        relationType: 'Avstand',
        combinedMeaning: 'Fartsgrensen på 50 km/t gjelder ikke fra der skiltstolpen står, men starter først 500 meter lenger fremme (forvarsling).'
      }
    ]
  },
  {
    id: '804',
    code: '804',
    name: 'Utstrekning',
    displayName: 'Utstrekning',
    slug: 'utstrekning',
    category: 'underskilt',
    imagePath: '/signs/underskilt/skilt-804-utstrekning.jpg',
    shortExplanation: 'Viser lengden på den veistrekningen som hovedskiltets regulering eller farevarsel gjelder for.',
    longExplanation: 'Dette underskiltet presiserer utstrekningen (lengden) av reguleringen eller faren. Det har to oppovervendte piler på hver side av avstandstallet. Dette viser at faren eller reguleringen starter bei skiltet og gjelder kontinuerlig over den oppgitte strekningen.',
    theoryTrap: 'Mange overser at piler på siden av tallet betyr utstrekning (skilt 804), mens et tall uten piler betyr avstand (skilt 802). Reguleringen gjelder umiddelbart etter skiltet og varer i det angitte antall meter/kilometer.',
    whatToDo: [
      'Tilpass kjøringen til faren eller reguleringen over hele den angitte strekningen.',
      'Husk at reguleringen opphører når den oppgitte distansen er tilendebragt.'
    ],
    confusedWith: ['802'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['underskilt', 'utstrekning', 'strekning', 'gjelder', 'piler', 'lengde'],
    combinations: [
      {
        mainSignCode: '146.1',
        mainSignName: 'Elg',
        mainSignImagePath: '/signs/fareskilt/skilt-146-1-elg.jpg',
        relationType: 'Utstrekning',
        combinedMeaning: 'Det er økt fare for elg på vegen over en strekning på 2 kilometer som starter umiddelbart etter at du passerer skiltet.'
      }
    ]
  },
  {
    id: '806',
    code: '806',
    name: 'Tid',
    displayName: 'Tid',
    slug: 'tid',
    category: 'underskilt',
    imagePath: '/signs/underskilt/skilt-806-tid.jpg',
    shortExplanation: 'Viser de spesifikke klokkeslettene og dagene hovedskiltets regulering er gyldig.',
    longExplanation: 'Dette underskiltet angir når reguleringen på hovedskiltet gjelder. Tall uten parenteser gjelder hverdager (mandag til fredag). Tall i parentes gjelder lørdager (og andre dager før søndag/helligdag). Røde tall gjelder søndager, helligdager og offentlige høytidsdager.',
    theoryTrap: 'Husk parentes-regelen: Klokkeslett uten parentes gjelder mandag-fredag, i parentes gjelder lørdager, og røde tall gjelder søndager/helligdager. Parkerer eller kjører du utenom disse tidene, gjelder ikke hovedskiltet.',
    whatToDo: [
      'Sjekk ukedag og klokkeslett for å vurdere om hovedskiltet er aktivt.',
      'Husk at hvis du parkerer utenom de oppgitte tidene, er det de generelle reglene på stedet som gjelder.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['underskilt', 'tid', 'klokkeslett', 'gjelder', 'parkering', 'hverdag', 'lørdag', 'søndag', 'røde tall', 'parentes'],
    combinations: [
      {
        mainSignCode: '372',
        mainSignName: 'Parkering forbudt',
        mainSignImagePath: '/signs/forbudsskilt/skilt-372-parkering-forbudt.jpg',
        relationType: 'Tidsbegrensning',
        combinedMeaning: 'Det er forbudt å parkere på stedet mandag til fredag mellom kl. 08:00 og 16:00, og lørdager mellom kl. 08:00 og 13:00. Utenom disse tidene er parkering tillatt.'
      }
    ]
  },
  {
    id: '807.1',
    code: '807.1',
    name: 'Symbol personbil',
    displayName: 'Symbol personbil',
    slug: 'gjelder-personbil',
    category: 'underskilt',
    imagePath: '/signs/underskilt/skilt-807-1-symbol-personbil.jpg',
    shortExplanation: 'Viser at hovedskiltets regulering eller unntak kun gjelder for personbiler.',
    longExplanation: 'Dette underskiltet presiserer at reguleringen på hovedskiltet er begrenset til kjøretøygruppen personbil (klasse B). Hvis det står under et parkeringsskilt, er plassen reservert for personbiler. Står det under et forbudsskilt, gjelder forbudet kun for personbiler.',
    theoryTrap: 'Mange tror feilaktig at symbolet gjelder for alle lette kjøretøy. Det gjelder spesifikt for personbiler og omfatter ikke motorsykler, mopeder eller varebiler med mindre disse er avbildet eller nevnt.',
    whatToDo: [
      'Følg hovedskiltets regulering dersom du kjører personbil.',
      'Dersom du kjører et annet kjøretøy, må du forholde deg til at reguleringen ikke gjelder for deg (eller at du ikke kan parkere der).'
    ],
    confusedWith: ['807.3', '807.6'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['underskilt', 'personbil', 'gjelder', 'kjøretøygruppe', 'bil'],
    combinations: [
      {
        mainSignCode: '552',
        mainSignName: 'Parkering',
        mainSignImagePath: '/signs/opplysningsskilt/skilt-552-parkering.jpg',
        relationType: 'Kjøretøygruppe',
        combinedMeaning: 'Parkeringsplassen er reservert utelukkende for personbiler. Andre kjøretøy, som busser, lastebiler eller motorsykler, har ikke lov til å parkere her.'
      }
    ]
  },
  {
    id: '807.3',
    code: '807.3',
    name: 'Symbol buss',
    displayName: 'Symbol buss',
    slug: 'gjelder-buss',
    category: 'underskilt',
    imagePath: '/signs/underskilt/skilt-807-3-symbol-buss.jpg',
    shortExplanation: 'Viser at hovedskiltets regulering eller unntak kun gjelder for busser.',
    longExplanation: 'Dette underskiltet presiserer at reguleringen på hovedskiltet kun gjelder for busser. Dette brukes ofte for å reservere parkeringsplasser for buss, eller for å opprette særskilte kjøreforbud eller påbud for store passasjerkjøretøy.',
    theoryTrap: 'Hvis skiltet står under et parkeringsskilt, har personbiler ikke lov til å parkere der – plassen er reservert utelukkende for busser. Mange overser dette og får parkeringsgebyr.',
    whatToDo: [
      'Unngå å bruke plasser eller felt som er reservert for buss via dette skiltet dersom du kjører personbil.',
      'Vis ekstra oppmerksomhet overfor busser i nærheten av slike soner.'
    ],
    confusedWith: ['807.1'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['underskilt', 'buss', 'gjelder', 'kjøretøygruppe', 'kollektiv'],
    combinations: [
      {
        mainSignCode: '372',
        mainSignName: 'Parkering forbudt',
        mainSignImagePath: '/signs/forbudsskilt/skilt-372-parkering-forbudt.jpg',
        relationType: 'Unntak',
        combinedMeaning: 'Det er parkering forbudt for alle kjøretøy, unntatt busser, som har dispensasjon til å parkere på stedet.'
      }
    ]
  },
  {
    id: '807.6',
    code: '807.6',
    name: 'Symbol sykkel',
    displayName: 'Symbol sykkel',
    slug: 'gjelder-sykkel',
    category: 'underskilt',
    imagePath: '/signs/underskilt/skilt-807-6-symbol-sykkel.jpg',
    shortExplanation: 'Viser at hovedskiltets regulering eller unntak gjelder for syklister.',
    longExplanation: 'Dette underskiltet presiserer at reguleringen på hovedskiltet gjelder for syklende, eller at de har unntak fra den. Det brukes hyppig sammen med "Gjelder ikke" under forbudsskilt (for eksempel innkjøring forbudt) for å tillate toveissykling i enveiskjørte gater.',
    theoryTrap: 'Husk at dersom det står "Gjelder ikke" sammen med sykkelsymbolet under et forbudsskilt, betyr det at syklende har lov til å bryte forbudet. Les alltid hele skiltkombinasjonen under ett.',
    whatToDo: [
      'Vær oppmerksom på syklende dersom skiltet viser at de er unntatt fra enveiskjøring.',
      'Sjekk kryssende sykkeltrafikk ekstra nøye.'
    ],
    confusedWith: ['826'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['underskilt', 'sykkel', 'syklende', 'gjelder', 'unntak'],
    combinations: [
      {
        mainSignCode: '302',
        mainSignName: 'Innkjøring forbudt',
        mainSignImagePath: '/signs/forbudsskilt/skilt-302-innkjoring-forbudt.jpg',
        relationType: 'Unntak',
        combinedMeaning: 'Innkjøring er forbudt for alle motorvogner, men syklende har unntak og kan sykle inn mot kjøreretningen (toveissykling).'
      }
    ]
  },
  {
    id: '807.8',
    code: '807.8',
    name: 'Symbol forflytningshemmede',
    displayName: 'Symbol forflytningshemmede',
    slug: 'gjelder-forflytningshemmede',
    category: 'underskilt',
    imagePath: '/signs/underskilt/skilt-807-8-symbol-forflytningshemmede.jpg',
    shortExplanation: 'Viser at hovedskiltet (som oftest parkering) kun gjelder for forflytningshemmede med særskilt parkeringstillatelse.',
    longExplanation: 'Dette underskiltet presiserer at en parkeringsplass er reservert for bilister med nedsatt funksjonsevne. For å kunne parkere på disse plassene må kjøretøyet ha en gyldig, offentlig parkeringstillatelse (HC-kort) godt synlig plassert i frontruten.',
    theoryTrap: 'Det er ikke tillatt å stanse eller parkere på disse plassene "bare et øyeblikk" for å løpe et ærend eller slippe av noen, med mindre kjøretøyet og føreren/passasjeren har gyldig HC-kort.',
    whatToDo: [
      'La disse plassene stå ledige med mindre du transporterer en person med gyldig HC-kort.',
      'Plasser tillatelsen godt synlig i frontruten dersom du har rett til å parkere her.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['underskilt', 'forflytningshemmede', 'hc', 'handikap', 'parkering', 'gjelder'],
    combinations: [
      {
        mainSignCode: '552',
        mainSignName: 'Parkering',
        mainSignImagePath: '/signs/opplysningsskilt/skilt-552-parkering.jpg',
        relationType: 'Brukergruppe',
        combinedMeaning: 'Parkeringsplassen er reservert for bilister med nedsatt funksjonsevne. Kjøretøyet må ha et gyldig, offentlig HC-kort liggende godt synlig i frontruten.'
      }
    ]
  },
  {
    id: '807.10',
    code: '807.10',
    name: 'Symbol liten elektrisk motorvogn',
    displayName: 'Symbol liten elektrisk motorvogn',
    slug: 'liten-elektrisk-motorvogn',
    category: 'underskilt',
    imagePath: '/signs/underskilt/skilt-807-10-symbol-liten-elektrisk-motorvogn.png',
    shortExplanation: 'Viser at hovedskiltets regulering eller unntak gjelder for små elektriske motorvogner som elsparkesykler.',
    longExplanation: 'Dette underskiltet presiserer at hovedskiltets regler gjelder for små elektriske motorvogner (for eksempel elsparkesykkel). Det brukes ofte under forbudsskilt eller parkeringsskilt for å regulere ferdsel eller parkering av disse kjøretøyene i bysoner.',
    theoryTrap: 'Mange antar at små elektriske motorvogner alltid reguleres nøyaktig som tråsykler. Dette skiltet viser at myndighetene kan innføre egne særskilte forbud eller regler kun for elsparkesykler.',
    whatToDo: [
      'Følg de angitte reguleringene dersom du kjører elsparkesykkel.',
      'Vær oppmerksom på slike soner i bykjerner der elsparkesykling kan være forbudt.'
    ],
    confusedWith: ['807.6'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['underskilt', 'liten elektrisk motorvogn', 'elsparkesykkel', 'sparkesykkel', 'gjelder', 'sone'],
    combinations: [
      {
        mainSignCode: '306.6',
        mainSignName: 'Forbudt for syklende',
        mainSignImagePath: '/signs/forbudsskilt/skilt-306-6-forbudt-for-syklende.jpg',
        relationType: 'Begrensning',
        combinedMeaning: 'Det er forbudt å ferdes med både tråsykkel og liten elektrisk motorvogn (som elsparkesykkel) på denne vegen.'
      }
    ]
  },
  {
    id: '808',
    code: '808',
    name: 'Tekst',
    displayName: 'Tekst',
    slug: 'tekstlig-presisering',
    category: 'underskilt',
    imagePath: '/signs/underskilt/skilt-808-tekst.jpg',
    shortExplanation: 'Gir en skriftlig presisering, utvidelse eller begrensning av hovedskiltets gyldighet.',
    longExplanation: 'Dette underskiltet bruker tekst til å formidle utfyllende regler som ikke kan vises med symboler. Eksempler er "Gjelder ikke buss", "Gjelder til snuplass", "Kun besøkende" eller tidsbegrensninger.',
    theoryTrap: 'Hovedfellen er å overse teksten eller misforstå unntakene. Teksten modifiserer always hovedskiltet – står det f.eks. "Stans forbudt" med underskilt "Gjelder ikke varebil", betyr det at varebiler kan stanse der for av-/pålessing, men ingen andre.',
    whatToDo: [
      'Les teksten på underskiltet grundig.',
      'Vurder om teksten innebærer et unntak eller en innskjerping for din kjøretøygruppe eller situasjon.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['underskilt', 'tekst', 'gjelder', 'unntak', 'presisering'],
    combinations: [
      {
        mainSignCode: '302',
        mainSignName: 'Innkjøring forbudt',
        mainSignImagePath: '/signs/forbudsskilt/skilt-302-innkjoring-forbudt.jpg',
        relationType: 'Unntak',
        combinedMeaning: 'Innkjøring er forbudt for alle vanlige motorvogner, men busser og taxier har dispensasjon til å kjøre inn i gaten.'
      }
    ]
  },
  {
    id: '810',
    code: '810',
    name: 'Svingpil',
    displayName: 'Svingpil',
    slug: 'svingpil',
    category: 'underskilt',
    imagePath: '/signs/underskilt/skilt-810-svingpil.jpg',
    shortExplanation: 'Viser at hovedskiltets regulering eller farevarsel gjelder etter at du svinger i pilens retning i neste kryss.',
    longExplanation: 'Dette underskiltet angir at reguleringen eller faren på hovedskiltet gjelder på den kryssende vegen du svinger inn på, ikke på vegen du befinner deg på nå. Det gir føreren mulighet til å innrette seg før svingen tas.',
    theoryTrap: 'Reguleringen gjelder ikke på veien du kjører på akkurat nå, men trer i kraft med en gang du svinger inn i krysset.',
    whatToDo: [
      'Forbered deg på at forbudet eller faren gjelder umiddelbart etter svingen i krysset.',
      'Sørg for riktig plassering i kjørefeltet før du svinger.'
    ],
    confusedWith: ['828.1', '828.2'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['underskilt', 'svingpil', 'retning', 'pil', 'gjelder'],
    combinations: [
      {
        mainSignCode: '372',
        mainSignName: 'Parkering forbudt',
        mainSignImagePath: '/signs/forbudsskilt/skilt-372-parkering-forbudt.jpg',
        relationType: 'Retningsbegrensning',
        combinedMeaning: 'Parkeringsforbudet gjelder ikke rett frem på denne vegen, men trer i kraft på den tverrgående vegen umiddelbart etter at du svinger til høyre i neste vegkryss.'
      }
    ]
  },
  {
    id: '812',
    code: '812',
    name: 'Anbefalt fart',
    displayName: 'Anbefalt fart',
    slug: 'anbefalt-fart',
    category: 'underskilt',
    imagePath: '/signs/underskilt/skilt-812-anbefalt-fart.jpg',
    shortExplanation: 'Viser den anbefalte høyeste hastigheten under normale forhold ved passering av et faremoment.',
    longExplanation: 'Dette underskiltet plasseres under et fareskilt (for eksempel for svinger eller humper) for å angi hvilken hastighet som er trygg og hensiktsmessig under gode kjøreforhold. Denne hastigheten er lavere enn den generelle eller skiltede fartsgrensen på veien.',
    theoryTrap: 'Dette is en anbefaling for din egen sikkerhet, ikke en formell fartsgrense. Du får ikke bot for å kjøre i f.eks. 60 km/t hvis anbefalt fart er 50 (så fremt fartsgrensen tillater det), men du risikerer ulykker og kan bli holdt erstatningsansvarlig ved uaktsom kjøring.',
    whatToDo: [
      'Tilpass og reduser hastigheten til den anbefalte verdien før du når faremomentet.',
      'Husk at ved dårlig sikt eller glatt vegbane må du kjøre enda saktere enn anbefalt.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['underskilt', 'anbefalt fart', 'fart', 'hastighet', 'fartsgrense', 'sving'],
    combinations: [
      {
        mainSignCode: '100.1',
        mainSignName: 'Farlig sving til høyre',
        mainSignImagePath: '/signs/fareskilt/skilt-100-1-farlig-sving-til-hoyre.jpg',
        relationType: 'Anbefalt hastighet',
        combinedMeaning: 'Det varsles om en farlig, skarp sving til høyre forut. Det anbefales å redusere farten til 50 km/t eller lavere før du kjører inn i svingen.'
      }
    ]
  },
  {
    id: '822.1',
    code: '822.1',
    name: 'Forløp av forkjørsveg',
    displayName: 'Forløp av forkjørsveg',
    slug: 'forlop-av-forkjorsveg',
    category: 'underskilt',
    imagePath: '/signs/underskilt/skilt-822-1-forlop-av-forkjorsveg.jpg',
    shortExplanation: 'Viser hvordan den prioriterte forkjørsvegen svinger eller forløper gjennom krysset.',
    longExplanation: 'Dette underskiltet står under forkjørsvegskilt (206) eller vikepliktsskilt (202) for å visualisere kjøremønsteret i krysset. Den tykke, svarte streken viser hvilken retning forkjørsvegen tar, mens de tynne strekene viser sideveger der trafikken har vikeplikt.',
    theoryTrap: 'Selv om du følger den prioriterte forkjørsvegen (tykk strek) og svinger gjennom krysset, må du bruke retningsendringssignal (blinklys). Husk også at trafikken fra de tynne strekene har vikeplikt for deg, uansett hvilken side de kommer fra.',
    whatToDo: [
      'Følg den tykke linjen for å beholde forkjørsretten din gjennom krysset.',
      'Husk å bruke blinklys dersom du svinger ut av din opprinnelige kjøreretning, selv om du følger den tykke linjen.',
      'Kjørende på sidevegene (tynne linjer) har vikeplikt for deg.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['underskilt', 'forløp av forkjørsveg', 'forkjørsvei', 'kryss', 'vikeplikt', 'strekning'],
    combinations: [
      {
        mainSignCode: '202',
        mainSignName: 'Vikeplikt',
        mainSignImagePath: '/signs/vikeplikt-og-forkjorsskilt/skilt-202-vikeplikt.jpg',
        relationType: 'Vegforløp',
        combinedMeaning: 'Du har vikeplikt i krysset. Den prioriterte forkjørsvegen går i en sving til venstre (tykk strek). Du har full vikeplikt for all trafikk som kommer langs denne prioriterte ruten.'
      }
    ]
  },
  {
    id: '824',
    code: '824',
    name: 'Forvarsling av stopp',
    displayName: 'Forvarsling av stopp',
    slug: 'forvarsling-av-stopp',
    category: 'underskilt',
    imagePath: '/signs/underskilt/skilt-824-forvarsling-av-stopp.jpg',
    shortExplanation: 'Varsler på forhånd om at du har vikeplikt og må stoppe helt ved neste stoppskilt.',
    longExplanation: 'Dette underskiltet er plassert under et vanlig vikepliktsskilt (202) for å advare om at det neste krysset er regulert med et stoppskilt (204). Skiltet angir avstanden i meter frem til krysset der du har absolutt stanseplikt.',
    theoryTrap: 'Du trenger ikke stoppe der dette skiltet står montert. Dette er kun et forvarsel. Du skal bremse rolig ned og stanse helt først når du når selve stoppskiltet og stopplinjen efter det angitte antall meter.',
    whatToDo: [
      'Begynn å senke farten kontrollert etter at du har passert skiltet.',
      'Forbered deg på å stanse kjøretøyet fullstendig foran stopplinjen i neste kryss.'
    ],
    confusedWith: ['802'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['underskilt', 'forvarsling av stopp', 'stopp', 'vikeplikt', 'avstand'],
    combinations: [
      {
        mainSignCode: '202',
        mainSignName: 'Vikeplikt',
        mainSignImagePath: '/signs/vikeplikt-og-forkjorsskilt/skilt-202-vikeplikt.jpg',
        relationType: 'Forvarsling',
        combinedMeaning: 'Varsler om at krysset 150 meter lenger fremme har et stoppskilt (204). Du må tilpasse farten og forberede deg på å stanse helt opp foran stopplinjen i krysset.'
      }
    ]
  },
  {
    id: '826',
    code: '826',
    name: 'Sykkeltrafikk i begge kjøreretninger',
    displayName: 'Sykkeltrafikk i begge kjøreretninger',
    slug: 'toveis-sykkeltrafikk',
    category: 'underskilt',
    imagePath: '/signs/underskilt/skilt-826-sykkeltrafikk-i-begge-kjoreretninger.jpg',
    shortExplanation: 'Advarer om at syklister har tillatelse til å sykle i begge retninger på veien eller i kryssende gate.',
    longExplanation: 'Dette underskiltet presiserer at syklende har lov til å sykle i begge retninger på strekningen. Dette brukes ofte i enveiskjørte gater der syklister er unntatt fra enveiskjøringen, slik at bilister må forvente møtende syklister.',
    theoryTrap: 'Selv om veien er markert som enveiskjørt for biler, opphever dette skiltet enveiskjøringen for syklister. Du må aldri anta at gaten er tom i motgående retning.',
    whatToDo: [
      'Plasser kjøretøyet ditt slik at det er tilstrekkelig plass til møtende syklister.',
      'Vær spesielt oppmerksom på syklende som kommer imot kjøreretningen når du skal svinge i kryss.'
    ],
    confusedWith: ['807.6'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['underskilt', 'sykkeltrafikk i begge kjøreretninger', 'sykkel', 'toveis', 'retning', 'strekning'],
    combinations: [
      {
        mainSignCode: '526.1',
        mainSignName: 'Envegskjøring',
        mainSignImagePath: '/signs/opplysningsskilt/skilt-526-1-envegskjoring.jpg',
        relationType: 'Vegtype unntak',
        combinedMeaning: 'Gaten er enveiskjørt for biler, men syklister har tillatelse til å sykle i begge retninger (mot kjøreretningen). Du må vike og gi plass til møtende syklende.'
      }
    ]
  },
  {
    id: '828.1',
    code: '828.1',
    name: 'Utstrekning av stans- og parkeringsregulering (Start)',
    displayName: 'Utstrekning av stans- og parkeringsregulering (Start)',
    slug: 'start-pa-parkeringsregulering',
    category: 'underskilt',
    imagePath: '/signs/underskilt/skilt-828-1-utstrekning-av-stans-og-parkeringsregulering.jpg',
    shortExplanation: 'Viser at stans- eller parkeringsreguleringen starter ved skiltet og gjelder fremover i pilens retning.',
    longExplanation: 'Dette underskiltet presiserer starten på en regulering for stans eller parkering. Pilen peker oppover (eller fremover), noe som betyr at forbudet eller tillatelsen gjelder fra skiltet og i kjøreretningen fremover langs kanten.',
    theoryTrap: 'Mange forveksler start (pil opp, skilt 828.1) med slutt (pil ned, skilt 828.2). Parkerer du rett før dette skiltet, rammes du ikke av reguleringen fremover (med mindre andre generelle regler forbyr det).',
    whatToDo: [
      'Husk at reguleringen (for eksempel et stansforbud) gjelder fra skiltet og videre fremover in den retningen pilen peker.'
    ],
    confusedWith: ['828.2', '828.3', '810'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['underskilt', 'start på parkeringsregulering', 'parkering', 'stans', 'retning', 'strekning', 'pil'],
    combinations: [
      {
        mainSignCode: '370',
        mainSignName: 'Stans forbudt',
        mainSignImagePath: '/signs/forbudsskilt/skilt-370-stans-forbudt.jpg',
        relationType: 'Grense / Start',
        combinedMeaning: 'Stansforbudet gjelder fra der skiltstolpen står og videre fremover langs denne siden av vegen.'
      }
    ]
  },
  {
    id: '828.2',
    code: '828.2',
    name: 'Utstrekning av stans- og parkeringsregulering (Slutt)',
    displayName: 'Utstrekning av stans- og parkeringsregulering (Slutt)',
    slug: 'slutt-pa-parkeringsregulering',
    category: 'underskilt',
    imagePath: '/signs/underskilt/skilt-828-2-utstrekning-av-stans-og-parkeringsregulering.jpg',
    shortExplanation: 'Viser at stans- eller parkeringsreguleringen opphører ved skiltet.',
    longExplanation: 'Dette underskiltet presiserer slutten på en regulering. Pilen peker nedover (eller bakover), noe som indikerer at stans- eller parkeringsreguleringen gjaldt på strekningen fram til dette skiltet, og at den opphører her.',
    theoryTrap: 'Pilen som peker ned betyr at forbudet slutter. Det er altså lov å parkere etter dette skiltet, forutsatt at det ikke er i strid med generelle trafikkregler (f.eks. avstand til kryss).',
    whatToDo: [
      'Vær oppmerksom på at reguleringen som gjaldt bakover langs vegen nå slutter.',
      'Du kan parkere etter skiltet om forholdene ellers tillater det.'
    ],
    confusedWith: ['828.1', '828.3', '810'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['underskilt', 'slutt på parkeringsregulering', 'parkering', 'stans', 'retning', 'strekning', 'pil'],
    combinations: [
      {
        mainSignCode: '370',
        mainSignName: 'Stans forbudt',
        mainSignImagePath: '/signs/forbudsskilt/skilt-370-stans-forbudt.jpg',
        relationType: 'Grense / Slutt',
        combinedMeaning: 'Stansforbudet som har gjeldt langs denne vegkanten opphører akkurat ved dette skiltet. Du kan stanse etter skiltstolpen.'
      }
    ]
  },
  {
    id: '828.3',
    code: '828.3',
    name: 'Utstrekning av stans- og parkeringsregulering (Gjeldende)',
    displayName: 'Utstrekning av stans- og parkeringsregulering (Gjeldende)',
    slug: 'gjeldende-parkeringsregulering',
    category: 'underskilt',
    imagePath: '/signs/underskilt/skilt-828-3-utstrekning-av-stans-og-parkeringsregulering.jpg',
    shortExplanation: 'Viser at stans- eller parkeringsreguleringen gjelder på begge sider av skiltet.',
    longExplanation: 'Dette underskiltet bekrefter at reguleringen for stans eller parkering fortsetter å gjelde på begge sider av skiltet (både før og etter). Det har en dobbeltsidig pil som peker både opp og ned for å fungere som en gjentakelse på en lengre strekning.',
    theoryTrap: 'Det er forbudt å parkere eller stanse både før og etter dette skiltet. Det er plassert der som en påminnelse for at du ikke skal tro reguleringen er over.',
    whatToDo: [
      'Respekter at stans- eller parkeringsreguleringen er aktiv på hele denne veistrekningen på begge sider av skiltet.'
    ],
    confusedWith: ['828.1', '828.2', '810'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['underskilt', 'gjeldende parkeringsregulering', 'parkering', 'stans', 'retning', 'strekning', 'pil'],
    combinations: [
      {
        mainSignCode: '370',
        mainSignName: 'Stans forbudt',
        mainSignImagePath: '/signs/forbudsskilt/skilt-370-stans-forbudt.jpg',
        relationType: 'Gjentakelse',
        combinedMeaning: 'Stansforbudet gjelder både før og etter dette skiltet (bekrefter at forbudet fortsatt løper på denne strekningen).'
      }
    ]
  },
  {
    id: '829',
    code: '829',
    name: 'Oppstilling av parkert kjøretøy',
    displayName: 'Oppstilling av parkert kjøretøy',
    slug: 'oppstillingsmate',
    category: 'underskilt',
    imagePath: '/signs/underskilt/skilt-829-oppstilling-av-parkert-kjoretoy.jpg',
    shortExplanation: 'Angir hvilken retning og vinkel kjøretøyet skal parkeres i på den oppmerkede plassen.',
    longExplanation: 'Dette underskiltet presiserer oppstillingsmåten for kjøretøy på en parkeringsplass. Symbolet viser om bilene skal parkeres parallelt med vegen, vinkelrett på den, eller på skrå inn mot fortauskanten.',
    theoryTrap: 'Det er en vanlig kilde til parkeringsgebyr å parkere i strid med dette skiltet. Dersom skiltet for eksempel viser skråparkering, er det ikke tillatt å parkere parallelt, selv om det fysisk er plass.',
    whatToDo: [
      'Still opp kjøretøyet ditt nøyaktig slik som symbolet på underskiltet viser.',
      'Sørg for at bilen står innenfor eventuelle oppmerkede linjer på bakken.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['underskilt', 'oppstillingsmåte', 'parkering', 'gjelder'],
    combinations: [
      {
        mainSignCode: '552',
        mainSignName: 'Parkering',
        mainSignImagePath: '/signs/opplysningsskilt/skilt-552-parkering.jpg',
        relationType: 'Oppstillingsmåte',
        combinedMeaning: 'Det er tillatt å parkere, men bilene skal plasseres i skrå stilling mot fortauskanten slik symbolet på underskiltet viser.'
      }
    ]
  },
  {
    id: '831',
    code: '831',
    name: 'Parkeringsskive / gratisbillett',
    displayName: 'Parkeringsskive / gratisbillett',
    slug: 'parkeringsskive',
    category: 'underskilt',
    imagePath: '/signs/underskilt/skilt-831-parkeringsskive-gratisbillett.jpg',
    shortExplanation: 'Viser at parkeringen er tidsbegrenset og krever bruk av parkeringsskive eller registrering for å dokumentere ankomsttid.',
    longExplanation: 'Dette underskiltet forteller at du kan parkere gratis i en angitt tidsperiode, men at du må dokumentere når du parkerte. Dette gjøres ved å stille inn en parkeringsskive i frontruten på ankomsttidspunktet (rundet opp to nærmeste halvtime), legge en synlig lapp med tidspunkt, eller registrere det på parkeringsautomat/app.',
    theoryTrap: 'Selv om parkeringen er gratis, kan du bli bøtelagt dersom du glemmer å stille parkeringsskiven eller registrere ankomsten digitalt. Fellen er å tro at du slipper unna fordi det ikke koster penger.',
    whatToDo: [
      'Still inn parkeringsskiven og plasser den godt synlig bak frontruten med en gang du parkerer.',
      'Alternativt henter du en gratisbillett fra automaten eller registrerer ankomsttiden i parkeringsappen.'
    ],
    confusedWith: ['834'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['underskilt', 'parkeringsskive', 'gratisbillett', 'parkering', 'klokkeslett', 'tid'],
    combinations: [
      {
        mainSignCode: '552',
        mainSignName: 'Parkering',
        mainSignImagePath: '/signs/opplysningsskilt/skilt-552-parkering.jpg',
        relationType: 'Dokumentasjon',
        combinedMeaning: 'Det er gratis parkering, men du har plikt til å dokumentere ankomsttidspunktet med parkeringsskive eller parkeringsapp.'
      }
    ]
  },
  {
    id: '834',
    code: '834',
    name: 'Kombinert regulering',
    displayName: 'Kombinert regulering',
    slug: 'kombinert-regulering',
    category: 'underskilt',
    imagePath: '/signs/underskilt/skilt-834-kombinert-regulering.jpg',
    shortExplanation: 'Viser flere reguleringer som gjelder samtidig under hovedskiltet.',
    longExplanation: 'Dette underskiltet angir flere parallelle regler for stedet, som for eksempel tidsbegrenset parkering mot avgift innenfor visse klokkeslett, eller at det kun gjelder for visse kjøretøygrupper.',
    theoryTrap: 'Du må oppfylle alle de oppførte kravene samtidig. Hvis det kreves avgift og det er en tidsbegrensning i et klokkeslett, er begge deler aktive i den perioden.',
    whatToDo: [
      'Les alle delene av underskiltet under ett.',
      'Sørg for å overholde samtlige betingelser (for eksempel betale avgift og registrere parkeringsskive).'
    ],
    confusedWith: ['831'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['underskilt', 'kombinert regulering', 'parkering', 'avgift', 'tid', 'klokkeslett', 'gjelder'],
    combinations: [
      {
        mainSignCode: '552',
        mainSignName: 'Parkering',
        mainSignImagePath: '/signs/opplysningsskilt/skilt-552-parkering.jpg',
        relationType: 'Betingelser',
        combinedMeaning: 'Det er parkering mot avgift i tidsrommene som oppgis (f.eks. hverdager 08-17), og parkering er begrenset til maksimalt 2 timer.'
      }
    ]
  },
  // --- SERVICESKILT (Aktiv Kategori) ---
  {
    id: '601',
    code: '601',
    name: 'Radioinformasjon',
    displayName: 'Radioinformasjon / Lytt til radio',
    slug: 'radioinformasjon',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-601-lytt-til-radio.jpg',
    visualDescription: 'Blått skilt med hvitt felt med høyttaler-symbol og teksten «Radio».',
    shortExplanation: 'Viser at det gis veg- og trafikkmeldinger via den angitte radiofrekvensen eller kanalen.',
    longExplanation: 'Skiltet opplyser om at du kan motta lokal radioinformasjon med trafikkmeldinger, spesielt før og i tunneler, eller over værutsatte fjelloverganger. Nyere skilt viser gjerne til digitale radiokanaler som NRK P1.',
    theoryTrap: 'Dette er et opplysningsskilt for din egen komfort og sikkerhet, ikke et påbud. Du risikerer ingen sanksjoner om du ikke skrur på radioen, men det er sterkt anbefalt ved utfordrende føre eller stengte veger.',
    whatToDo: [
      'Still radioen inn på den angitte kanalen eller frekvensen for å motta meldinger.',
      'Følg med på meldinger om kolonnekjøring, stengte tunneler eller omkjøringer.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['radio', 'lytt til radio', 'frekvens', 'trafikkmeldinger']
  },
  {
    id: '602',
    code: '602',
    name: 'Førstehjelp',
    displayName: 'Førstehjelp',
    slug: 'forstehjelp',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-602-forstehjelp.jpg',
    shortExplanation: 'Angir plassering av førstehjelpsstasjon, nødskrin eller nødutstyr.',
    longExplanation: 'Dette skiltet viser hvor du kan finne førstehjelpsutstyr, båre eller en stasjon bemannet for enkel akuttmedisinsk hjelp langs vegen.',
    theoryTrap: 'Dette skiltet angir ikke nødvendigvis et fullverdig sykehus, men et sted med elementært førstehjelpsutstyr for å stabilisere skadde personer.',
    whatToDo: [
      'Bruk dette utstyret eller oppsøk stasjonen ved akutte skader eller ulykker.',
      'Husk alltid å sikre ulykkesstedet først med refleksvest og varseltrekant før du henter utstyr.'
    ],
    confusedWith: ['605', '606'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['førstehjelp', 'nødskrin', 'forstehjelp', 'plaster', 'røde kors', 'hjelp']
  },
  {
    id: '605',
    code: '605',
    name: 'Nødtelefon',
    displayName: 'Nødtelefon',
    slug: 'nodtelefon',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-605-nodtelefon.jpg',
    shortExplanation: 'Viser plassering av nødtelefon som er koblet direkte til Vegtrafikksentralen eller nødetatene.',
    longExplanation: 'Settes opp langs motorveger, fjelloverganger og inne i tunneler. Telefonen gir direkte kontakt med Vegtrafikksentralen, og de ser automatisk nøyaktig hvilken telefon du ringer fra.',
    theoryTrap: 'I tunneler bør du alltid bruke Vegvesenets nødtelefon framfor din egen mobiltelefon. Når du løfter av røret på en nødtelefon i en tunnel, går alarmen automatisk hos Vegtrafikksentralen, skiltene utenfor tunnelen stenges, og ventilasjonsanlegget startes for å suge ut eventuell røyk.',
    whatToDo: [
      'Bruk telefonen ved motorstopp, brann, ulykker eller andre nødsituasjoner.',
      'Oppgi rolig hva som har skjedd. Posisjonen din er allerede registrert.'
    ],
    confusedWith: ['602', '606'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['nødtelefon', 'telefon', 'tunnel telefon', 'nodtelefon', 'nød']
  },
  {
    id: '606',
    code: '606',
    name: 'Brannslokkingsapparat',
    displayName: 'Brannslokkingsapparat',
    slug: 'brannslokkingsapparat',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-606-brannslokningsapparat.jpg',
    shortExplanation: 'Viser plassering av brannslokkingsutstyr.',
    longExplanation: 'Settes opp der det er plassert brannslokkingsapparater til allmenn bruk, som for eksempel i tunneler, ved rasteplasser eller bensinstasjoner.',
    theoryTrap: 'Dette er plassert for at du raskt skal kunne slokke et begynnende branntilløp. Du må aldri risikere ditt eget liv ved store branner.',
    whatToDo: [
      'Bruk apparatet til å kvele små branner i eget eller andres kjøretøy.',
      'Sørg for å trykke på nødknapp eller ringe 110/112 så snart som mulig.'
    ],
    confusedWith: ['602', '605'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['brann', 'slokker', 'brannslukker', 'brannslokkingsapparat', 'apparat']
  },
  {
    id: '608',
    code: '608',
    name: 'Kjøretøyverksted',
    displayName: 'Kjøretøyverksted',
    slug: 'kjoretoyverksted',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-608-kjoretoyverksted.jpg',
    shortExplanation: 'Viser at det finnes et bilverksted i nærheten.',
    longExplanation: 'Dette skiltet viser vei til et godkjent kjøretøyverksted som kan hjelpe med reparasjoner, tekniske problemer eller berging.',
    theoryTrap: 'Verkstedet har egne åpningstider og er normalt ikke døgnåpent, selv om skiltet står oppe hele tiden.',
    whatToDo: [
      'Kjør hit eller kontakt verkstedet dersom bilen har tekniske feil eller ulyder.',
      'Ved akutt motorstopp på vegen bør du bruke nødblink og plassere bilen så trygt som mulig før du søker hjelp.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['verksted', 'bilverksted', 'reparasjon', 'mekaniker']
  },
  {
    id: '609',
    code: '609',
    name: 'Hurtiglading',
    displayName: 'Hurtiglading av motorvogn',
    slug: 'hurtiglading',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-609-hurtiglading-av-motorvogn.jpg',
    shortExplanation: 'Viser ladestasjon for elektriske kjøretøy.',
    longExplanation: 'Skiltet viser vei til en ladestasjon utstyrt med hurtigladere (og ofte normalladere) for elbiler og andre oppladbare motorvogner.',
    theoryTrap: 'Parkeringsplasser merket med dette skiltet er kun ment for elbiler som faktisk lader. Å parkere en bensin-/dieselbil eller en elbil som ikke lader her, kan medføre parkeringsgebyr.',
    whatToDo: [
      'Følg skiltet dersom du kjører elbil og trenger å lade batteriet.',
      'Frigi plassen så snart ladingen er fullført, slik at andre slipper til.'
    ],
    confusedWith: ['610'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['lading', 'elbil', 'ladestasjon', 'hurtiglading', 'strøm']
  },
  {
    id: '610',
    code: '610',
    name: 'Drivstoff',
    displayName: 'Drivstoff',
    slug: 'drivstoff',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-610-drivstoff.jpg',
    shortExplanation: 'Viser at det finnes en bensinstasjon / energistasjon i nærheten.',
    longExplanation: 'Dette skiltet opplyser om en fyllestasjon for vanlig drivstoff (bensin og diesel). Ofte kombinert med kiosksalg, toalett og enkle bilrekvisita.',
    theoryTrap: 'Dette standardskiltet garanterer kun tradisjonelt drivstoff. For elbiler eller alternative drivstoff må du se etter skilt 609 (Hurtiglading), 610.1 (LPG) eller 610.2 (Hydrogen).',
    whatToDo: [
      'Sving av for å fylle drivstoff eller ta en pause på stasjonen.'
    ],
    confusedWith: ['609', '610.1', '610.2'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['bensin', 'diesel', 'bensinstasjon', 'fylle', 'drivstoff']
  },
  {
    id: '610.1',
    code: '610.1',
    name: 'Drivstoff LPG',
    displayName: 'Drivstoff - Gass (LPG)',
    slug: 'drivstoff-gass-lpg',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-610-1-drivstoff.jpg',
    shortExplanation: 'Viser fyllestasjon for gass (autogass/LPG).',
    longExplanation: 'Viser vei til en stasjon hvor biler og kjøretøy som drives av flytende petroleumsgass (LPG) kan fylle tanken.',
    theoryTrap: 'Ikke alle vanlige bensinstasjoner har LPG-fylling. Dette skiltet brukes spesifikt for å lede gassdrevne kjøretøy til riktig sted.',
    whatToDo: [
      'Følg skiltet dersom du kjører et gassdrevet kjøretøy og trenger å fylle gass.'
    ],
    confusedWith: ['610', '610.2'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['gass', 'lpg', 'autogass', 'propan']
  },
  {
    id: '610.2',
    code: '610.2',
    name: 'Drivstoff Hydrogen',
    displayName: 'Drivstoff - Hydrogen',
    slug: 'drivstoff-hydrogen',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-610-2-drivstoff.jpg',
    shortExplanation: 'Viser fyllestasjon for hydrogen.',
    longExplanation: 'Viser vei til en energistasjon utstyrt for fylling av hydrogengass, som benyttes av biler med brenselcelleteknologi.',
    theoryTrap: 'Hydrogensektoren er svært spesialisert, og vanlige kjøretøy kan ikke bruke disse pumpene.',
    whatToDo: [
      'Bruk stasjonen til fylling dersom du kjører en hydrogenbil.'
    ],
    confusedWith: ['610', '610.1'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['hydrogen', 'h2', 'brenselcelle']
  },
  {
    id: '611',
    code: '611',
    name: 'Tømmested toalett',
    displayName: 'Tømmested for toalett',
    slug: 'tommested-toalett',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-611-toalettommeanlegg.jpg',
    shortExplanation: 'Viser tømmested for avløpsvann/kjemisk toalett fra campingvogner, bobiler og busser.',
    longExplanation: 'Settes opp ved rasteplasser eller campingplasser for å angi et godkjent tømmested for septiktank og kjemisk toalett fra mobile boenheter.',
    theoryTrap: 'Det er strengt forbudt og miljøskadelig å tømme kjemiske toaletter i vanlig natur, veikant eller i vanlige toaletter som ikke er tilrettelagt for dette.',
    whatToDo: [
      'Følg skiltet for å utføre tømming av toalett/spillvann på en lovlig og miljøvennlig måte.'
    ],
    confusedWith: ['612'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['tømmested', 'septik', 'bobil tømming', 'toalett tømming', 'kloakk', 'wc tømming']
  },
  {
    id: '612',
    code: '612',
    name: 'Toalett',
    displayName: 'Toalett',
    slug: 'toalett',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-612-toalett.jpg',
    shortExplanation: 'Viser til et offentlig toalett langs vegen.',
    longExplanation: 'Settes opp ved rasteplasser, parkeringsområder eller offentlige bygg for å vise at toalettfasiliteter er tilgjengelige.',
    theoryTrap: 'Dette skiltet garanterer ikke at toalettet er universelt utformet (handikaptoalett) eller gratis, men gir opplysning om at det finnes et toalett.',
    whatToDo: [
      'Benytt toalettet ved behov. Husk å forlate det i god stand.'
    ],
    confusedWith: ['611'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['toalett', 'wc', 'dass', 'do', 'restroom']
  },
  {
    id: '613.1',
    code: '613.1',
    name: 'Rasteplass',
    displayName: 'Rasteplass',
    slug: 'rasteplass',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-613-1-rasteplass.jpg',
    shortExplanation: 'Viser til en tilrettelagt rasteplass langs vegen.',
    longExplanation: 'Rasteplasser er tilrettelagte områder utenfor kjørebanen hvor førere og passasjerer kan ta pauser. De er ofte utstyrt med bord, søppelkasser, toaletter og noen ganger lekeområder eller utsiktspunkter.',
    theoryTrap: 'Rasteplasser er ment for kortere opphold og hvile for å motvirke tretthet bak rattet. Det er ikke tillatt å etablere permanente campingplasser eller bo der over lengre tid (f.eks. mer enn et døgn på samme sted om det hindrer andre).',
    whatToDo: [
      'Sving inn for å ta en pause og strekke på beina dersom du føler deg trøtt.',
      'Kast søppel i beholderne og vis hensyn til andre reisende.'
    ],
    confusedWith: ['552'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['rasteplass', 'rast', 'pause', 'benk', 'veikant parkering']
  },
  {
    id: '614',
    code: '614',
    name: 'Enklere servering',
    displayName: 'Enklere servering',
    slug: 'enklere-servering',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-614-enklere-servering.jpg',
    shortExplanation: 'Viser kafé, kiosk eller enklere serveringssted i nærheten.',
    longExplanation: 'Viser vei til et sted hvor man kan kjøpe enkle måltider, kaffe, snacks, bakevarer eller kioskvarer. Typisk en veikro eller bensinstasjon med matservering.',
    theoryTrap: 'Dette skiltet indikerer enklere servering, ikke en fullverdig restaurant (som har eget skilt med kniv og gaffel – 616).',
    whatToDo: [
      'Benytt serveringsstedet for mat og drikke under reisen.'
    ],
    confusedWith: ['616'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['kaffe', 'kafe', 'kiosk', 'veikro', 'kopp', 'enklere servering']
  },
  {
    id: '616',
    code: '616',
    name: 'Spisested',
    displayName: 'Spisested',
    slug: 'spisested',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-616-spisested.jpg',
    shortExplanation: 'Viser til en restaurant eller et fullverdig spisested.',
    longExplanation: 'Viser vei til et spisested med et mer omfattende mattilbud (varmretter, middag osv.) enn en enkel kiosk eller kafé.',
    theoryTrap: 'Skiltet viser en kniv og en gaffel. Dette skiller seg fra skilt 614 som viser en kaffekopp og indikerer enklere servering.',
    whatToDo: [
      'Sving av for et større måltid underveis.'
    ],
    confusedWith: ['614'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['restaurant', 'spisested', 'mat', 'middag', 'kniv og gaffel']
  },
  {
    id: '618',
    code: '618',
    name: 'Campingplass',
    displayName: 'Campingplass',
    slug: 'campingplass',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-618-campingplass.jpg',
    shortExplanation: 'Viser vei til en godkjent campingplass for telt, campingvogn eller bobil.',
    longExplanation: 'Angir et område spesielt tilrettelagt for overnatting i telt, campingvogn eller bobil. Ofte utstyrt med fellesanlegg for dusj, toalett og strømtilkobling.',
    theoryTrap: 'Dette er et kommersielt eller tilrettelagt campingområde. Det må ikke forveksles med allemannsretten for fricamping i utmark.',
    whatToDo: [
      'Følg skiltet for å finne overnattingsplass med telt eller vogn.'
    ],
    confusedWith: ['621', '622'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['camping', 'telt', 'campingplass', 'vogn']
  },
  {
    id: '621',
    code: '621',
    name: 'Bobilplass',
    displayName: 'Bobilplass',
    slug: 'bobilplass',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-621-bobilplass.jpg',
    shortExplanation: 'Viser til en tilrettelagt oppstillingsplass for bobiler.',
    longExplanation: 'Dette skiltet viser til et område spesielt avsatt og tilrettelagt for overnatting og parkering av bobiler (bobilcamp/bobilparkering).',
    theoryTrap: 'En bobilplass er forbeholdt bobiler. Campingvogner som trekkes av personbil eller vanlige biler kan ikke overnatte på områder utelukkende merket med dette skiltet.',
    whatToDo: [
      'Oppsøk plassen for overnatting dersom du kjører en registrert bobil.'
    ],
    confusedWith: ['618', '622'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['bobil', 'bobilplass', 'caravan', 'bobilparkering']
  },
  {
    id: '622',
    code: '622',
    name: 'Campinghytter',
    displayName: 'Campinghytter',
    slug: 'campinghytter',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-622-campinghytter.jpg',
    shortExplanation: 'Viser til utleiehytter (typisk på eller i tilknytning til en campingplass).',
    longExplanation: 'Skiltet opplyser om at det er mulig å leie enkle hytter for overnatting på stedet.',
    theoryTrap: 'Dette indikerer enkle hytter, ikke nødvendigvis et hotell eller motell (som har eget skilt for overnattingssted – 626).',
    whatToDo: [
      'Sving av dersom du ønsker hytteovernatting.'
    ],
    confusedWith: ['618', '626'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['hytter', 'campinghytter', 'overnatting hytte']
  },
  {
    id: '624',
    code: '624',
    name: 'Vandrerhjem',
    displayName: 'Vandrerhjem',
    slug: 'vandrerhjem',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-624-vandrerhjem.jpg',
    shortExplanation: 'Viser vei til et vandrerhjem (hostel) med enklere og rimeligere overnatting.',
    longExplanation: 'Opplyser om tilgjengelig vandrerhjem for reisende, ofte med mulighet for felleskjøkken, sovesaler eller enkle private rom.',
    theoryTrap: 'Standard og servicenivå er enklere og rimeligere enn på ordinære hoteller.',
    whatToDo: [
      'Oppsøk vandrerhjemmet dersom du ønsker rimelig overnatting.'
    ],
    confusedWith: ['626'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['vandrerhjem', 'hostel', 'billig overnatting']
  },
  {
    id: '625',
    code: '625',
    name: 'Rom og frokost',
    displayName: 'Rom og frokost (Bed & Breakfast)',
    slug: 'rom-og-frokost',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-625-rom-og-frokost.jpg',
    shortExplanation: 'Viser til privat eller mindre kommersiell overnatting med frokost inkludert.',
    longExplanation: 'Angir et mindre overnattingssted, ofte i private hjem eller gårdsturisme, der leie av rom inkluderer frokost (Bed and Breakfast).',
    theoryTrap: 'Kapasiteten på slike steder er ofte svært begrenset sammenlignet med et vanlig hotell.',
    whatToDo: [
      'Oppsøk stedet for en personlig og koselig overnatting.'
    ],
    confusedWith: ['626'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['bed and breakfast', 'bb', 'rom og frokost', 'gjestegård']
  },
  {
    id: '626',
    code: '626',
    name: 'Overnattingssted',
    displayName: 'Overnattingssted (Hotell / Motell)',
    slug: 'overnattingssted',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-626-overnattingssted.jpg',
    shortExplanation: 'Viser vei til et hotell, motell eller pensjonat.',
    longExplanation: 'Skiltet viser at det finnes kommersiell overnatting med fulle hotell- eller motelltjenester i nærheten.',
    theoryTrap: 'Dette skiltet viser en seng. Det indikerer ordinært hotell/motell, ikke camping eller hytter (som har egne skilt).',
    whatToDo: [
      'Følg skiltet for å finne hotellovernatting.'
    ],
    confusedWith: ['622', '624', '625'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['hotell', 'motell', 'seng', 'overnatting', 'overnattingssted', 'pensjonat']
  },
  {
    id: '635',
    code: '635',
    name: 'Informasjon',
    displayName: 'Informasjonstavle',
    slug: 'informasjonstavle',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-635-informasjon.jpg',
    shortExplanation: 'Viser til en informasjonstavle, kart eller info-punkt.',
    longExplanation: 'Settes opp ved rasteplasser, innkjøringer til kommuner eller severdigheter. Viser et sted med oppsatte kart og lokal informasjon for reisende.',
    theoryTrap: 'Dette er en ubemannet informasjonstavle med fysiske kart og oppslag. Det er ikke et bemannet turistkontor (som har skilt 637).',
    whatToDo: [
      'Stopp på oppmerket plass og gå bort til tavlen for å orientere deg på kartet.'
    ],
    confusedWith: ['637'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['informasjon', 'info', 'kart', 'tavle', 'i-skilt']
  },
  {
    id: '637',
    code: '637',
    name: 'Turistkontor',
    displayName: 'Turistkontor',
    slug: 'turistkontor',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-637-turistkontor.jpg',
    shortExplanation: 'Viser vei til et bemannet turistkontor.',
    longExplanation: 'Viser til et lokalt eller regionalt turistkontor (i-punkt) der du kan få personlig hjelp, brosjyrer, bestille turer og få reisetips.',
    theoryTrap: 'Turistkontor har begrensede åpningstider og er ofte kun sesongåpne om sommeren.',
    whatToDo: [
      'Oppsøk kontoret i åpningstiden for reisehjelp og råd.'
    ],
    confusedWith: ['635'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['turistinformasjon', 'turistkontor', 'info bemannet', 'i-punkt']
  },
  {
    id: '640.10',
    code: '640.10',
    name: 'Severdighet',
    displayName: 'Severdighet',
    slug: 'severdighet',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-640-10-severdighet.jpg',
    shortExplanation: 'Viser til et kulturminne, historisk sted eller annen severdighet.',
    longExplanation: 'Dette skiltet (ofte kalt «sløyfe» eller «severdighetstegn») viser vei til nasjonalt eller regionalt viktige severdigheter, kulturminner, gamle kirker eller fortidsminner.',
    theoryTrap: 'Symbolet (en firkantet sløyfe) er internasjonalt kjent og finnes også på tastaturet på Mac (Command-tasten), men i trafikken betyr det alltid en vernet eller viktig severdighet.',
    whatToDo: [
      'Følg skiltet dersom du ønsker å besøke lokale severdigheter.'
    ],
    confusedWith: ['640.12', '640.20'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['severdighet', 'sløyfe', 'kulturminne', 'historisk', 'attraksjon']
  },
  {
    id: '640.12',
    code: '640.12',
    name: 'Museum',
    displayName: 'Museum / Galleri',
    slug: 'museum-galleri',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-640-12-museum-galleri.jpg',
    shortExplanation: 'Viser vei til et museum eller kunstgalleri.',
    longExplanation: 'Opplyser om at det ligger et offentlig tilgjengelig museum, kunstsamling eller galleri i nærheten.',
    theoryTrap: 'Disse stedene krever ofte inngangsbillett og har faste åpningstider.',
    whatToDo: [
      'Følg skiltet for kulturelle opplevelser underveis.'
    ],
    confusedWith: ['640.10'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['museum', 'galleri', 'kunst', 'utstilling']
  },
  {
    id: '640.20',
    code: '640.20',
    name: 'Utsiktspunkt',
    displayName: 'Utsiktspunkt',
    slug: 'utsiktspunkt',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-640-20-utsiktspunkt.jpg',
    shortExplanation: 'Viser vei til et tilrettelagt utsiktspunkt.',
    longExplanation: 'Dette skiltet leder til en parkeringsplass eller rampe som byr på spesielt flott utsikt over landskapet forut.',
    theoryTrap: 'Sving forsiktig av vegen, da inn- og utkjøringer til utsiktspunkter kan være bratte eller ligge rett etter uoversiktlige svinger.',
    whatToDo: [
      'Sving inn og parker trygt før du nyter utsikten.'
    ],
    confusedWith: ['640.10'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['utsiktspunkt', 'utsikt', 'fotopunkt', 'panorama']
  },
  {
    id: '650.10',
    code: '650.10',
    name: 'Badeplass',
    displayName: 'Badeplass',
    slug: 'badeplass',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-650-10-badeplass.jpg',
    shortExplanation: 'Viser vei til en tilrettelagt badeplass (strand, svaberg eller basseng).',
    longExplanation: 'Opplyser om offentlig tilgjengelig badeplass, gjerne med tilhørende toalett, parkering eller søppelhåndtering.',
    theoryTrap: 'Bading skjer alltid på eget ansvar. Skiltet garanterer ikke at vannet er temperert eller fritt for undervannsstrømmer.',
    whatToDo: [
      'Vis aktsomhet ved bading, spesielt med barn.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['badeplass', 'strand', 'bading', 'vann', 'bade']
  },
  {
    id: '650.11',
    code: '650.11',
    name: 'Fiskeplass',
    displayName: 'Fiskeplass',
    slug: 'fiskeplass',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-650-11-fiskeplass.jpg',
    shortExplanation: 'Viser vei til tilrettelagt fiskeplass.',
    longExplanation: 'Viser til steder der det er gode og eventuelt universelt utformede fiskemuligheter fra land (brygge, elvebredd osv.).',
    theoryTrap: 'Selv om det skiltes fiskeplass, må du fortsatt ha gyldig fiskekort eller følge lokale regler for fiske i ferskvann.',
    whatToDo: [
      'Sjekk lokale fiskeregler før du kaster ut snøret.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['fiskeplass', 'fiske', 'fiskekort', 'stang']
  },
  {
    id: '650.20',
    code: '650.20',
    name: 'Tursti',
    displayName: 'Tursti',
    slug: 'tursti',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-650-20-tursti.jpg',
    shortExplanation: 'Viser startpunkt for en merket tursti eller turløype.',
    longExplanation: 'Settes opp der en merket sti for fotturer eller fjellturer starter, ofte ved en parkeringsplass med informasjonstavle.',
    theoryTrap: 'Dette er en sti beregnet for gående i naturen. Den må ikke forveksles med sykkelløyper eller asfalterte gangveger.',
    whatToDo: [
      'Følg stien og respekter naturen ved å ta med søppel hjem.'
    ],
    confusedWith: ['650.21'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['tursti', 'sti', 'gåtur', 'fottur', 'fjelltur']
  },
  {
    id: '650.21',
    code: '650.21',
    name: 'Skiløype',
    displayName: 'Skiløype',
    slug: 'skiloype',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-650-21-skiloyype.jpg',
    shortExplanation: 'Viser startpunkt eller kryssing for en merket og preparert skiløype.',
    longExplanation: 'Opplyser om at du befinner deg ved eller krysser en løype beregnet på langrenn og skigåing.',
    theoryTrap: 'På sommerstid er dette ofte myr eller utmark. Skiltet er primært aktivt/relevant i vintersesongen.',
    whatToDo: [
      'Vis hensyn dersom skiløypen krysser vegen eller parkeringsplassen.'
    ],
    confusedWith: ['650.20'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['skiløype', 'ski', 'langrenn', 'løype', 'skiloyype']
  },
  {
    id: '650.40',
    code: '650.40',
    name: 'Gardsmat',
    displayName: 'Gardsmat / Bygdeturisme',
    slug: 'gardsmat-bygdeturisme',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-650-40-gardsmat-bygdeturisme.jpg',
    shortExplanation: 'Viser til gardsmatutsalg, bygdeturisme eller lokalprodusert mat.',
    longExplanation: 'Dette skiltet viser vei til gårder eller utsalg som tilbyr lokalproduserte matvarer, tradisjonsmat, gårdsutsalg eller bygdeturismeopplevelser.',
    theoryTrap: 'Slike gårdsutsalg kan ha sesongavhengige eller uregelmessige åpningstider.',
    whatToDo: [
      'Følg skiltet for å støtte lokale produsenter og handle tradisjonsmat.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['gårdsmat', 'gardsmat', 'bygdeturisme', 'gård', 'lokalmat', 'honning', 'svele']
  },
  // --- VEGVISNINGSSKILT ---
  {
    id: '701',
    code: '701',
    name: 'Tabellorienteringstavle',
    displayName: 'Tabellorienteringstavle',
    slug: 'tabellorienteringstavle',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-701-tabellorienteringstavle.jpg',
    shortExplanation: 'Viser vegnummer, reisemål og avstander fram mot et kryss i tabellform.',
    longExplanation: 'Tabellorienteringstavler settes opp i god tid før et vegkryss for å hjelpe deg med å orientere deg om retninger, reisemål og vegnummer i krysset, slik at du kan planlegge plasseringen din tidlig.',
    theoryTrap: 'Dette er et vegvisningsskilt og ikke et påbudsskilt. Det er rent informativt og pålegger deg ingen svingforbud eller kjørefeltpåbud i seg selv, men hjelper deg å plassere deg riktig.',
    whatToDo: [
      'Les skiltet i god tid for å finne ditt reisemål.',
      'Plasser deg i riktig kjørefelt tidlig og gi tegn i god tid før krysset.'
    ],
    confusedWith: ['703', '711'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['tabellorienteringstavle', 'orienteringstavle', 'vegviser', 'veiutvalg']
  },
  {
    id: '703',
    code: '703',
    name: 'Diagramorienteringstavle',
    displayName: 'Diagramorienteringstavle',
    slug: 'diagramorienteringstavle',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-703-diagramorienteringstavle.jpg',
    shortExplanation: 'Viser kryssutforming og kjøreretninger grafisk som et diagram fram mot et kryss.',
    longExplanation: 'Diagramorienteringstavler viser en forenklet tegning av kryssutformingen (for eksempel en rundkjøring eller et kryss med sideveger) og hvilke retninger de ulike kjørefeltene fører til.',
    theoryTrap: 'Tegningen på skiltet viser den faktiske geometrien i krysset. Hvis en sideveg er tegnet med en sving eller vinkel, betyr det at du må være forberedt på denne svingen.',
    whatToDo: [
      'Bruk diagrammet til å forstå kryssets oppbygning (f.eks. om det er rundkjøring).',
      'Plasser deg i riktig kjørefelt i henhold til retningen du skal.'
    ],
    confusedWith: ['701'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['diagramorienteringstavle', 'diagram', 'kryssdiagram', 'rundkjøring']
  },
  {
    id: '705',
    code: '705',
    name: 'Avkjøringstavle',
    displayName: 'Avkjøringstavle',
    slug: 'avkjoringstavle',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-705-avkjoringstavle.jpg',
    shortExplanation: 'Viser avkjøring og reisemål i god tid før krysset på motorveger eller andre flerfeltsveger.',
    longExplanation: 'Avkjøringstavler settes opp i god tid før en avkjøring (typisk 500 eller 1000 meter før) på veger med høy hastighet for å gi deg tid til å forberede feltskifte til avkjøringsfeltet.',
    theoryTrap: 'Dette skiltet står før avkjøringsfeltet starter. Du skal ikke bremse ned på selve hovedvegen, men vente til du har svingt helt inn i avkjøringsfeltet (retardasjonsfeltet) før du reduserer farten.',
    whatToDo: [
      'Planlegg feltskifte til høyre kjørefelt i god tid.',
      'Hold jevn fart på hovedvegen og brems først når du er inne i avkjøringsfeltet.'
    ],
    confusedWith: ['701', '709'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['avkjøringstavle', 'avkjoringstavle', 'motorveiavkjøring', 'avfart']
  },
  {
    id: '707',
    code: '707',
    name: 'Kjørefeltorienteringstavle',
    displayName: 'Kjørefeltorienteringstavle',
    slug: 'kjorefeltorienteringstavle',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-707-kjorefeltorienteringstavle.jpg',
    shortExplanation: 'Viser hvordan kjørefeltene fordeler seg fram mot vegkryss.',
    longExplanation: 'Kjørefeltorienteringstavler viser antall kjørefelt og hvilke reisemål eller retninger de enkelte feltene leder til før du kommer til selve krysset.',
    theoryTrap: 'Skiltet viser ofte om et kjørefelt slutter eller om to felt slås sammen. Vær oppmerksom på fletting og plasser deg tidlig.',
    whatToDo: [
      'Sjekk hvilke kjørefelt som leder til din destinasjon.',
      'Skift felt i god tid dersom du ligger i feil kjørefelt.'
    ],
    confusedWith: ['709', '717'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['kjørefeltorienteringstavle', 'kjørefelt', 'feltfordeling', 'filvalg']
  },
  {
    id: '709',
    code: '709',
    name: 'Portalorienteringstavle',
    displayName: 'Portalorienteringstavle',
    slug: 'portalorienteringstavle',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-709-portalorienteringstavle.jpg',
    shortExplanation: 'Står over veibanen for å vise retning for de enkelte kjørefelt.',
    longExplanation: 'Portalorienteringstavler henges opp på en portal eller bru over kjørebanen. Hvert skilt henger direkte over det kjørefeltet informasjonen gjelder for.',
    theoryTrap: 'Siden skiltet henger over feltet, er det ekstremt viktig å følge det spesifikke feltet du ligger under, spesielt i store flerfeltskryss.',
    whatToDo: [
      'Se på skiltene over veibanen fremfor kun i veikanten.',
      'Hold deg i kjørefeltet som har vegviser til ditt reisemål.'
    ],
    confusedWith: ['707', '719'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['portalorienteringstavle', 'portal', 'skiltbru', 'kjørefeltskilt']
  },
  {
    id: '711',
    code: '711',
    name: 'Tabellvegviser',
    displayName: 'Tabellvegviser',
    slug: 'tabellvegviser',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-711-tabellvegviser.jpg',
    shortExplanation: 'Står i selve krysset og viser reisemål og vegnummer i tabellform.',
    longExplanation: 'Tabellvegvisere settes opp rett før eller i selve krysset for å angi retningene til de ulike reisemålene og vegnumrene.',
    theoryTrap: 'I motsetning to orienteringstavler (som står i forkant) står tabellvegviseren i selve krysset. Ikke bråbrems hvis du oppdager feil retning sent.',
    whatToDo: [
      'Gjør vegvalget før du kjører inn i krysset.',
      'Følg retningen angitt på tabellvegviseren.'
    ],
    confusedWith: ['701', '713'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['tabellvegviser', 'veiviser', 'kryssvegviser', 'skiltikryss']
  },
  {
    id: '713',
    code: '713',
    name: 'Vegviser',
    displayName: 'Vegviser',
    slug: 'vegviser',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-713-vegviser.jpg',
    shortExplanation: 'Viser retning og vegnummer til reisemål, plassert i selve krysset.',
    longExplanation: 'Vegvisere er de klassiske pilformede skiltene plassert direkte i vegkrysset som peker mot reisemål og oppgjev vegnummer.',
    theoryTrap: 'Fargen på vegviseren har stor betydning: Gul = riks- eller fylkesveg, Hvit = lokal veg, Grønn = motorveg, Brun = nasjonal turistveg.',
    whatToDo: [
      'Følg pilens retning i krysset.',
      'Bruk fargen til å forstå hvilken type veg du svinger inn på.'
    ],
    confusedWith: ['711', '717'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['vegviser', 'pilskilt', 'veipil', 'retningspil', 'gulvegviser']
  },
  {
    id: '717',
    code: '717',
    name: 'Kjørefeltvegviser',
    displayName: 'Kjørefeltvegviser',
    slug: 'kjorefeltvegviser',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-717-kjorefeltvegviser.jpg',
    shortExplanation: 'Viser retning og reisemål for de enkelte kjørefelt, plassert i selve krysset.',
    longExplanation: 'Kjørefeltvegvisere viser hvilke kjørefelt som fører til de angitte reisemålene og vegnumrene i krysset.',
    theoryTrap: 'Plassert rett ved krysset. Hvis du har valgt feil kjørefelt, må du fortsette i det feltet du ligger i av hensyn til sikkerheten (ikke ta brå svinger over sperrelinjer).',
    whatToDo: [
      'Følg kjørefeltet som peker mot din destinasjon.',
      'Dersom du har lagt deg i feil felt, må du følge feltets retning og snu senere.'
    ],
    confusedWith: ['707', '719'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['kjørefeltvegviser', 'filvegviser', 'feltpil', 'vegvalg']
  },
  {
    id: '719',
    code: '719',
    name: 'Portalvegviser',
    displayName: 'Portalvegviser',
    slug: 'portalvegviser',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-719-portalvegviser.jpg',
    shortExplanation: 'Plassert på portal over veibanen i selve krysset for å angi retning i de enkelte kjørefelt.',
    longExplanation: 'Portalvegvisere er hengt opp over kjørebanen i selve vegkrysset, for å gjøre det helt klart hvilke kjørefelt som fører hvor.',
    theoryTrap: 'Ofte kombinert med heltrukne linjer (sperrelinjer) under portalen. Dette betyr at du ikke lenger kan skifte felt når du er under portalen.',
    whatToDo: [
      'Følg filen du befinner deg i under portalen.',
      'Sørg for å være plassert i riktig felt før du kommer helt frem til portalen.'
    ],
    confusedWith: ['709', '717'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['portalvegviser', 'portalskilt', 'bruvegviser']
  },
  {
    id: '723.11',
    code: '723.11',
    name: 'Vegnummer for europaveg',
    displayName: 'Vegnummer for europaveg (E-veg)',
    slug: 'vegnummer-europaveg',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-723-11-vegnummer-europaveg.jpg',
    shortExplanation: 'Viser rutenummeret til en europaveg (E-veg).',
    longExplanation: 'Europavegnummeret angir en vegstrekning som er en del av det internasjonale europavegnettet (f.eks. E 6 eller E 18).',
    theoryTrap: 'Europavegskiltet kjennetegnes av en grønn bakgrunn med en hvit ramme og hvit tekst.',
    whatToDo: [
      'Bruk vegnummeret til å bekrefte at du kjører på riktig europaveg.',
      'Vær klar over at europaveger ofte har høy standard og høyere fartsgrenser.'
    ],
    confusedWith: ['723.13', '723.15'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['europaveg', 'e-veg', 'grøntskilt', 'e6', 'e18', 'e39']
  },
  {
    id: '723.13',
    code: '723.13',
    name: 'Vegnummer for riksveg',
    displayName: 'Vegnummer for riksveg',
    slug: 'vegnummer-riksveg',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-723-13-vegnummer-riksveg.jpg',
    shortExplanation: 'Viser rutenummeret til en riksveg.',
    longExplanation: 'Dette skiltet viser vegnummeret for en nasjonal riksveg (ikke europaveg). Riksveger eies og driftes av staten.',
    theoryTrap: 'Riksvegnummeret har grønn bakgrunn og hvit tekst, men har INGEN hvit ramme rundt (i motsetning til europaveg).',
    whatToDo: [
      'Følg rutenummeret for å holde deg på planlagt riksveg.'
    ],
    confusedWith: ['723.11', '723.15'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['riksveg', 'riksvei', 'grøntvegnummer', 'riksvegskilt']
  },
  {
    id: '723.15',
    code: '723.15',
    name: 'Vegnummer for fylkesveg',
    displayName: 'Vegnummer for fylkesveg',
    slug: 'vegnummer-fylkesveg',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-723-15-vegnummer-fylkesveg.jpg',
    shortExplanation: 'Viser rutenummeret til en fylkesveg.',
    longExplanation: 'Viser vegnummeret til en fylkesveg. Fylkesveger eies og vedlikeholdes av fylkeskommunene.',
    theoryTrap: 'Fylkesvegskiltet har svart tekst og svart ramme på hvit bakgrunn. Dette gjør det enkelt å skille fylkesveger fra grønne riksveger.',
    whatToDo: [
      'Naviger etter de hvite fylkesvegnumrene på lokalveger og sekundærveger.'
    ],
    confusedWith: ['723.11', '723.13'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['fylkesveg', 'fylkesvei', 'hvitskilt', 'fylkesskilt']
  },
  {
    id: '723.21',
    code: '723.21',
    name: 'Ringveg / ringrute',
    displayName: 'Ringveg / ringrute',
    slug: 'ringveg-ringrute',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-723-21-ringveg-ringrute.jpg',
    shortExplanation: 'Viser rutenummer for en ringveg som går rundt et byområde.',
    longExplanation: 'Ringvegskiltet viser at vegen går i en ring rundt et bysenter (f.eks. Ring 3 eller Ring 2 i Oslo) for å lede gjennomgangstrafikken utenom sentrum.',
    theoryTrap: 'Svart skrift og ramme på hvit bakgrunn med teksten "Ring" etterfulgt av nummeret.',
    whatToDo: [
      'Bruk ringvegen for å unngå bytrafikk og lyskryss i sentrum.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['ringveg', 'ringrute', 'ringvei', 'ring3', 'ring2']
  },
  {
    id: '723.31',
    code: '723.31',
    name: 'Nasjonal turistveg',
    displayName: 'Nasjonal turistveg',
    slug: 'nasjonal-turistveg',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-723-31-nasjonal-turistveg.jpg',
    shortExplanation: 'Viser rute som har status som nasjonal turistveg.',
    longExplanation: 'Dette skiltet markerer vegstrekninger utvalgt for sin naturskjønne verdi og spesielle arkitektoniske utsiktspunkter.',
    theoryTrap: 'Brun bakgrunn med det hvite turistvegsymbolet (en firkantet knute, også kalt severdighetssymbol).',
    whatToDo: [
      'Forvent smalere, svingete veger og mange turister som kjører sakte på disse strekningene.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['nasjonal turistveg', 'turistveg', 'turistvei', 'bruntskilt', 'turist']
  },
  {
    id: '723.41',
    code: '723.41',
    name: 'Omkjøringsrute for store kjøretøy',
    displayName: 'Omkjøringsrute for store kjøretøy',
    slug: 'omkjoringsrute-store-kjoretoy',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-723-41-omkjoringsrute-store-kjoretoy.jpg',
    shortExplanation: 'Viser anbefalt rute for store kjøretøy for å unngå hindringer på hovedvegen.',
    longExplanation: 'Dette skiltet angir en anbefalt kjørerute for lastebiler, busser og andre store kjøretøy, typisk for å unngå lave tunneler, trange bygater eller svake bruer.',
    theoryTrap: 'Selv om det er et vegvisningsskilt (blått symbol), er det viktig at store kjøretøy følger dette for å unngå fysiske hindringer.',
    whatToDo: [
      'Hvis du kjører et stort kjøretøy (klasse C/D eller stor personbil med henger), bør du følge denne ruten.'
    ],
    confusedWith: ['723.51', '741'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['omkjøring for lastebil', 'lastebilrute', 'omkjøring lastebil']
  },
  {
    id: '723.51',
    code: '723.51',
    name: 'Rute for transport av farlig gods',
    displayName: 'Rute for transport av farlig gods',
    slug: 'rute-farlig-gods',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-723-51-rute-farlig-gods.jpg',
    shortExplanation: 'Viser anbefalt rute for kjøretøy som frakter farlig gods.',
    longExplanation: 'Dette skiltet viser hvilken rute kjøretøy med eksplosiver, brennbare væsker eller annet farlig gods (ADR-transport) bør velge for å minimere risikoen for ulykker nær tettsteder eller sårbare tunneler.',
    theoryTrap: 'Oransje og svart symbol med en lastebil. Dette skiltet gjelder ADR-transporter og er en anbefalt eller påbudt rute avhengig av lokale forskrifter.',
    whatToDo: [
      'Følg ruten dersom du transporterer farlig gods underlagt ADR-reglene.'
    ],
    confusedWith: ['723.41'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['farlig gods', 'adr-rute', 'oransje lastebil', 'eksplosiver']
  },
  {
    id: '723.71',
    code: '723.71',
    name: 'Kryssnummer for flerfeltsveg',
    displayName: 'Kryssnummer for flerfeltsveg',
    slug: 'kryssnummer-flerfeltsveg',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-723-71-kryssnummer-flerfeltsveg.jpg',
    shortExplanation: 'Viser avkjøringsnummeret til et vegkryss på motorveg eller annen flerfeltsveg.',
    longExplanation: 'Dette skiltet oppgir kryssets unike nummer. Kryssnummereringen gjør det enklere å navigere og finne riktig avkjøring basert på kart og navigasjonssystemer.',
    theoryTrap: 'Svart bakgrunn med hvitt kryss-symbol og hvitt nummer. Viser kun kryssnummeret på flerfeltsveger (grønne motorveger).',
    whatToDo: [
      'Bruk kryssnummeret til å planlegge avkjøringen din i god tid.'
    ],
    confusedWith: ['723.73'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['kryssnummer', 'avkjøringsnummer', 'kryss-symbol', 'avfartsnummer']
  },
  {
    id: '723.73',
    code: '723.73',
    name: 'Kryssnummer for tofeltsveg',
    displayName: 'Kryssnummer for tofeltsveg',
    slug: 'kryssnummer-tofeltsveg',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-723-73-kryssnummer-tofeltsveg.jpg',
    shortExplanation: 'Viser avkjøringsnummeret til et vegkryss på tofeltsveg.',
    longExplanation: 'Angir kryssets nummer på vanlige tofeltsveger (gule veger) for å forenkle navigasjon.',
    theoryTrap: 'Gul bakgrunn med svart kryss-symbol og nummer. Fargen indikerer at du befinner deg på en vanlig tofeltsveg, ikke en flerfelts- eller motorveg.',
    whatToDo: [
      'Bruk nummeret til å identifisere riktig vegkryss på din rute.'
    ],
    confusedWith: ['723.71'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['kryssnummer tofelt', 'gult kryssnummer', 'avfart tofelt']
  },
  {
    id: '727',
    code: '727',
    name: 'Stedsnavnskilt',
    displayName: 'Stedsnavnskilt',
    slug: 'stedsnavnskilt',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-727-stedsnavnskilt.jpg',
    shortExplanation: 'Angir navnet på et tettsted, elv, kommune eller fylkesgrense.',
    longExplanation: 'Stedsnavnskilt brukes for å informere trafikanter om at de kjører inn i et bestemt geografisk område eller krysser en grense.',
    theoryTrap: 'Skiltet opplyser kun om navnet på stedet og setter IKKE i seg selv noen fartsgrenser (i motsetning til skilt 502 "Sone for tettbygd strøk" som setter 50 km/t grense).',
    whatToDo: [
      'Bruk skiltet til geografisk orientering under kjøring.'
    ],
    confusedWith: ['502'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['stedsnavnskilt', 'kommuneskilt', 'stedsnavn', 'elvenavn', 'bygrense']
  },
  {
    id: '729',
    code: '729',
    name: 'Gate- og vegnavnskilt',
    displayName: 'Gate- og vegnavnskilt',
    slug: 'gate-vegnavnskilt',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-729-gate-vegnavnskilt.jpg',
    shortExplanation: 'Viser navnet på en gate eller veg.',
    longExplanation: 'Settes opp i kryss og langs vegen for å vise navnet på gaten eller vegen du befinner deg på eller krysser.',
    theoryTrap: 'Hvit bakgrunn med svart ramme. Brukes til lokal orientering og adressesøk.',
    whatToDo: [
      'Bruk vegnavnet til lokal navigering.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['gate- og vegnavnskilt', 'gatenavn', 'vegnavn', 'veiskilt', 'skilt med gatenavn']
  },
  {
    id: '731',
    code: '731',
    name: 'Samleskilt for vegvisning',
    displayName: 'Samleskilt for vegvisning',
    slug: 'samleskilt-vegvisning',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-731-samleskilt-vegvisning.jpg',
    shortExplanation: 'Samler informasjon om flere reisemål og vegnummer i et kryss på ett felles skilt.',
    longExplanation: 'Dette skiltet brukes ofte før større vegkryss for å gi en ryddig, samlet oversikt over komplekse veivalg og hindre visuell støy fra mange enkeltskilter.',
    theoryTrap: 'Viser retning og vegnummer for flere destinasjoner samtidig. Plasser deg i riktig kjørefelt tidlig basert på samleskiltet.',
    whatToDo: [
      'Les skiltet raskt for å finne din destinasjon og følg tilhørende pil/felt.'
    ],
    confusedWith: ['701', '711'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['samleskilt for vegvisning', 'samleskilt', 'vegvisning', 'fellesveiviser']
  },
  {
    id: '741',
    code: '741',
    name: 'Anbefalt omkjøring for bestemte kjøretøygrupper',
    displayName: 'Anbefalt omkjøring for bestemte kjøretøygrupper',
    slug: 'omkjoring-bestemte-kjoretoygrupper',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-741-omkjoring-bestemte-kjoretoygrupper.jpg',
    shortExplanation: 'Viser anbefalt omkjøringsrute for spesifikke kjøretøygrupper (f.eks. lastebiler).',
    longExplanation: 'Dette skiltet angir en anbefalt rute for enkelte grupper kjøretøy for å lede dem utenom områder der de kan skape problemer eller møte hindringer.',
    theoryTrap: 'Skiltet viser et blått symbol med lastebil eller buss. Det er en anbefalt rute, men det er sterkt tilrådelig å følge den for å unngå å sette seg fast.',
    whatToDo: [
      'Følg ruten dersom du kjører et kjøretøy som treffes av symbolet.'
    ],
    confusedWith: ['723.41', '743.1'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['anbefalt omkjøring', 'omkjøring lastebil', 'anbefalt rute lastebil']
  },
  {
    id: '743.1',
    code: '743.1',
    name: 'Midlertidig omkjøring',
    displayName: 'Midlertidig omkjøring',
    slug: 'midlertidig-omkjoring',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-743-1-midlertidig-omkjoring.jpg',
    shortExplanation: 'Viser midlertidig omkjøringsrute på grunn av stengt veg eller vegarbeid.',
    longExplanation: 'Dette skiltet leder trafikken rundt en midlertidig stengt vegstrekning (f.eks. på grunn av ulykke, ras eller vegarbeid).',
    theoryTrap: 'Skiltet har gul bakgrunn, som alltid indikerer midlertidige forhold. Følg de gule omkjøringsskiltene slavisk for å komme tilbake på ruten din.',
    whatToDo: [
      'Følg pilenes retning for å kjøre rundt den stengte vegen.',
      'Tilpass farten da omkjøringsvegen kan ha lavere standard.'
    ],
    confusedWith: ['743.2', '745'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['midlertidig omkjøring', 'gult omkjøringsskilt', 'omkjøringspil', 'vegarbeid omkjøring']
  },
  {
    id: '743.2',
    code: '743.2',
    name: 'Midlertidig omkjøringstavle',
    displayName: 'Midlertidig omkjøringstavle',
    slug: 'midlertidig-omkjoringstavle',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-743-2-midlertidig-omkjoring.jpg',
    shortExplanation: 'Midlertidig tavle som viser omkjøringsvegen grafisk som et kart.',
    longExplanation: 'Viser hele omkjøringsruten grafisk på en tavle før du kjører inn på den, slik at du har oversikt over traséen.',
    theoryTrap: 'Gul bakgrunn betyr midlertidig regulering. Skiltet viser ofte kryss eller rundkjøringer der du må skifte retning under omkjøringen.',
    whatToDo: [
      'Studer tavlen raskt for å forstå omkjøringsruten.',
      'Følg de gule vegviserne videre.'
    ],
    confusedWith: ['743.1'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['midlertidig omkjøringstavle', 'omkjøringskart', 'gulkarttavle']
  },
  {
    id: '745',
    code: '745',
    name: 'Slutt på midlertidig omkjøring',
    displayName: 'Slutt på midlertidig omkjøring',
    slug: 'slutt-pa-midlertidig-omkjoring',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-745-slutt-pa-midlertidig-omkjoring.jpg',
    shortExplanation: 'Viser at den midlertidige omkjøringen er avsluttet.',
    longExplanation: 'Dette skiltet markerer slutten på omkjøringsruten. Etter dette skiltet følger du igjen den vanlige vegvisningen (hvite/gule skilt).',
    theoryTrap: 'Gult skilt med en rød diagonal strek over omkjøringssymbolet. Det opphever den midlertidige skiltingen.',
    whatToDo: [
      'Fortsett kjøringen og følg ordinære skilt videre.'
    ],
    confusedWith: ['743.1'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['slutt på midlertidig omkjøring', 'slutt omkjøring', 'rødstrek omkjøring']
  },
  {
    id: '749',
    code: '749',
    name: 'Vegviser for gangtrafikk',
    displayName: 'Vegviser for gangtrafikk',
    slug: 'vegviser-gangtrafikk',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-749-vegviser-gangtrafikk.jpg',
    shortExplanation: 'Viser veg og retning to reisemål beregnet for gående.',
    longExplanation: 'Settes opp for å viser vei til steder (f.eks. stasjon, sentrum eller severdigheter) langs gangveger eller fortau.',
    theoryTrap: 'Dette skiltet gjelder KUN for fotgjengere. Det er blått med et symbol av en gående person.',
    whatToDo: [
      'Gjelder ikke for motorvogn eller syklister. Ignorer skiltet under kjøring.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['vegviser for gangtrafikk', 'fotgjengerskilt', 'gåretning', 'blåfotgjenger']
  },
  {
    id: '751',
    code: '751',
    name: 'Vegviser for sykkelrute',
    displayName: 'Vegviser for sykkelrute',
    slug: 'vegviser-sykkelrute',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-751-vegviser-sykkelrute.jpg',
    shortExplanation: 'Viser retning og rutenummer eller reisemål for syklende.',
    longExplanation: 'Brukes til å rettlede syklister langs nasjonale eller lokale sykkelruter.',
    theoryTrap: 'Grønn bakgrunn med rødt/brunt sykkelsymbol. Gjelder kun for syklister, men bilister må være oppmerksomme på at sykkeltrafikk er prioritert her.',
    whatToDo: [
      'Vær ekstra oppmerksom på syklister i krysset der dette skiltet står.'
    ],
    confusedWith: ['753', '755'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['vegviser for sykkelrute', 'sykkelvegviser', 'sykkelpil', 'sykkelrute']
  },
  {
    id: '753',
    code: '753',
    name: 'Tabellvegviser for sykkelrute',
    displayName: 'Tabellvegviser for sykkelrute',
    slug: 'tabellvegviser-sykkelrute',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-753-tabellvegviser-sykkelrute.jpg',
    shortExplanation: 'Viser flere reisemål og avstander for syklister i tabellform.',
    longExplanation: 'Settes opp i kryss på sykkelveger for å gi syklister oversikt over ulike ruter og avstander.',
    theoryTrap: 'Dette skiltet oppgir avstander tilpasset syklende trafikanter.',
    whatToDo: [
      'Vær oppmerksom på at dette er en tilrettelagt sykkeltrase.'
    ],
    confusedWith: ['751'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['tabellvegviser for sykkelrute', 'sykkeltabell', 'avstandssykkel']
  },
  {
    id: '755',
    code: '755',
    name: 'Ruteskilt for sykkelrute',
    displayName: 'Ruteskilt for sykkelrute',
    slug: 'sykkelruteskilt',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-755-sykkelruteskilt.jpg',
    shortExplanation: 'Viser rutenummer for en nasjonal eller regional sykkelrute.',
    longExplanation: 'Brukes som rutebekreftelse langs lengre sykkelløyper.',
    theoryTrap: 'Svart nummer på grønn bakgrunn eller rødt skilt med hvitt sykkelsymbol. Viser kun rutenummeret for syklister.',
    whatToDo: [
      'Bruk informasjonen til å dele vegen trygt med syklister.'
    ],
    confusedWith: ['751'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['ruteskilt for sykkelrute', 'sykkelruteskilt', 'sykkelnummer']
  },
  {
    id: '757',
    code: '757',
    name: 'Avstandsskilt for sykkelrute',
    displayName: 'Avstandsskilt for sykkelrute',
    slug: 'avstandsskilt-sykkelrute',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-757-avstandsskilt-sykkelrute.jpg',
    shortExplanation: 'Viser avstander til reisemål langs en sykkelrute.',
    longExplanation: 'Settes opp regelmessig langs sykkelruten for å bekrefte reisemål og vise gjenværende avstand.',
    theoryTrap: 'Avstandene er angitt i kilometer og gjelder sykkelløypa, som kan avvike fra bilvegen.',
    whatToDo: [
      'Respekter syklende på disse strekningene.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['avstandsskilt for sykkelrute', 'sykkelavstand', 'sykkelmilepæl']
  },
  {
    id: '761',
    code: '761',
    name: 'Motorveg',
    displayName: 'Motorveg',
    slug: 'motorveg',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-761-motorveg.jpg',
    shortExplanation: 'Markerer at vegen er klassifisert som motorveg.',
    longExplanation: 'Motorvegskiltet markerer starten på en motorveg, der spesielle trafikkregler gjelder: Det er forbudt for gående, syklende, mopeder, traktorer og kjøretøy som ikke kan kjøre lovlig i minst 40 km/t på vannrett veg.',
    theoryTrap: 'Dette er et vegvisningsskilt (kode 761) og ikke et opplysningsskilt, selv om det er blått og gir informasjon. På motorveg er det strengt forbudt å rygge, vende, kjøre i motsatt retning eller stanse/parkere på kjørebanen eller veiskulderen.',
    whatToDo: [
      'Kjør kun inn på motorveg med godkjent motorvogn (minst 40 km/t konstruktiv hastighet).',
      'Bruk akselerasjonsfeltet til å tilpasse farten til trafikken på motorvegen.',
      'Hold god sikkerhetsavstand og følg de særskilte reglene for motorveg.'
    ],
    confusedWith: ['763'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['motorveg', 'motorvei', 'e6 motorvei', 'blått motorvegskilt', 'vei klasse a']
  },
  {
    id: '763',
    code: '763',
    name: 'Motortrafikkveg',
    displayName: 'Motortrafikkveg',
    slug: 'motortrafikkveg',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-763-motortrafikkveg.jpg',
    shortExplanation: 'Markerer at vegen er klassifisert som motortrafikkveg.',
    longExplanation: 'Motortrafikkveg (tidligere kalt "bilveg") har de samme adgangsbegrensningene som en motorveg (forbudt for gående, syklende, moped, traktor). Vegen har imidlertid ofte lavere standard enn motorveg, f.eks. tofeltsveg uten midtdeler.',
    theoryTrap: 'Mange forveksler dette med motorveg. En motortrafikkveg kan ha møtende trafikk uten midtdeler og plankryss (kryss i samme plan). Rygge/vende-forbudet gjelder fortsatt.',
    whatToDo: [
      'Følg de samme kjøretøysbegrensningene som på motorveg.',
      'Vær oppmerksom på møtende trafikk og plankryss.'
    ],
    confusedWith: ['761'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['motortrafikkveg', 'motortrafikkvei', 'bilveg', 'bilvei', 'blåbil']
  },
  {
    id: '765',
    code: '765',
    name: 'Bomveg (brukerbetaling)',
    displayName: 'Bomveg (brukerbetaling)',
    slug: 'bomveg-brukerbetaling',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-765-bomveg-brukerbetaling.jpg',
    shortExplanation: 'Viser at det kreves betaling (bompenger) for å bruke vegen.',
    longExplanation: 'Dette skiltet settes opp i forkant av en bomvei eller bomstasjon for å informere om at strekningen krever brukerbetaling.',
    theoryTrap: 'Skiltet viser "Kr" i en sirkel. Mange tror de må stoppe for å betale kontant, men nesten alle norske bomstasjoner er helautomatiske. Du skal kjøre igjennom uten å stoppe.',
    whatToDo: [
      'Kjør igjennom bomstasjonen uten å stoppe.',
      'Sørg for å ha gyldig AutoPASS-avtale for rabatt.'
    ],
    confusedWith: ['792.30'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['bomveg', 'bomvei', 'bomstasjon', 'kroner', 'kr-skilt', 'brukerbetaling']
  },
  {
    id: '767',
    code: '767',
    name: 'Parkering',
    displayName: 'Parkering',
    slug: 'parkering',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-767-parkering.jpg',
    shortExplanation: 'Angir at parkering er tillatt på stedet.',
    longExplanation: 'Dette skiltet markerer en plass eller strekning der det er tillatt å parkere kjøretøy. Eventuelle tidsbegrensninger, parkeringsvilkår eller betalingsplikt vil være angitt på underskilt.',
    theoryTrap: 'Selv om det er en stor hvit P på blå bakgrunn, er dette offisielt et vegvisningsskilt (767). Hvis skiltet står uten underskilt, gjelder tillatelsen uten tidsbegrensning.',
    whatToDo: [
      'Parkér kjøretøyet i henhold til eventuelle oppmerkede felt.',
      'Sjekk alltid om det er underskilt som angir tidsbegrensning, avgift eller reserverte plasser.'
    ],
    confusedWith: ['769'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['parkering', 'p-skilt', 'parkere', 'parkeringsplass']
  },
  {
    id: '769',
    code: '769',
    name: 'Parkeringshus',
    displayName: 'Parkeringshus',
    slug: 'parkeringshus',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-769-parkeringshus.jpg',
    shortExplanation: 'Angir at det er et parkeringshus eller parkeringskjeller på stedet.',
    longExplanation: 'Dette skiltet viser vei til eller markerer inngangen til et innendørs parkeringsanlegg (parkeringshus eller parkeringskjeller).',
    theoryTrap: 'Skiltet har et tak-symbol over den hvite P-en. Hjelper deg å skille utendørs parkering fra innendørs parkeringshus.',
    whatToDo: [
      'Kjør forsiktig inn i parkeringshuset og vær oppmerksom på lav takhøyde og fotgjengere i mørke områder.'
    ],
    confusedWith: ['767'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['parkeringshus', 'parkeringskjeller', 'innendørs parkering', 'p-hus']
  },
  {
    id: '771',
    code: '771',
    name: 'Lufthavn / flyplass',
    displayName: 'Lufthavn / flyplass',
    slug: 'lufthavn-flyplass',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-771-lufthavn-flyplass.jpg',
    shortExplanation: 'Viser vei til en lufthavn eller flyplass.',
    longExplanation: 'Dette skiltet viser retningen til nærmeste flyplass eller lufthavn.',
    theoryTrap: 'Skiltet viser et hvitt flysymbol på blå bakgrunn. Dette er en del av den internasjonale symbolvegvisningen.',
    whatToDo: [
      'Følg skiltet dersom du skal til flyplassen.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['lufthavn', 'flyplass', 'flyskilt', 'flyplassvegviser']
  },
  {
    id: '773',
    code: '773',
    name: 'Busstasjon / bussterminal',
    displayName: 'Busstasjon / bussterminal',
    slug: 'busstasjon-bussterminal',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-773-busstasjon-bussterminal.jpg',
    shortExplanation: 'Viser vei til en busstasjon eller bussterminal.',
    longExplanation: 'Viser retning til en busstasjon der rutebusser og langdistansebusser har terminal eller stoppested.',
    theoryTrap: 'Må ikke forveksles med vanlig bussholdeplass (skilt 512). Dette skiltet viser vei til een busstasjon, som er en større terminal.',
    whatToDo: [
      'Vær forberedt på økt buss- og fotgjengertrafikk i nærheten av busstasjonen.'
    ],
    confusedWith: ['512'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['busstasjon', 'bussterminal', 'bussholdeplass retning', 'buss-stasjon']
  },
  {
    id: '774',
    code: '774',
    name: 'Jernbanestasjon / togterminal',
    displayName: 'Jernbanestasjon / togterminal',
    slug: 'jernbanestasjon-togterminal',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-774-jernbanestasjon-togterminal.jpg',
    shortExplanation: 'Viser vei til en jernbanestasjon eller togterminal.',
    longExplanation: 'Dette skiltet viser retningen til nærmeste jernbanestasjon eller togstasjon for passasjertog.',
    theoryTrap: 'Blått skilt med et hvitt togsymbol. Hjelper deg å navigere mot kollektivknutepunkter.',
    whatToDo: [
      'Følg skiltet for å finne jernbanestasjonen.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['jernbanestasjon', 'togstasjon', 'togterminal', 'togskilt', 'jernbane']
  },
  {
    id: '775',
    code: '775',
    name: 'Bilferje',
    displayName: 'Bilferje',
    slug: 'bilferje',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-775-bilferje.jpg',
    shortExplanation: 'Viser vei til et bilferjeleie.',
    longExplanation: 'Dette skiltet viser retningen til nærmeste ferjeleie der du kan ta bilferje over en fjord eller til en øy.',
    theoryTrap: 'Skiltet viser et ferjesymbol sett forfra. Det er viktig å beregne god tid til ferjeavganger under planleggingen av reisen.',
    whatToDo: [
      'Følg skiltet for å komme til ferjekaia.',
      'Plasser deg i riktig oppstillingsfelt på kaia.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['bilferje', 'bilferry', 'ferjeleie', 'ferjekai', 'fergeskilt']
  },
  {
    id: '780',
    code: '780',
    name: 'Kjettingplass',
    displayName: 'Kjettingplass',
    slug: 'kjettingplass',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-780-kjetting.jpg',
    shortExplanation: 'Viser sted spesielt tilrettelagt for å montere eller demontere snøkjettinger på tunge kjøretøy.',
    longExplanation: 'Kjettingplasser etableres langs bratte bakker eller før fjelloverganger, slik at lastebiler og andre tunge kjøretøy kan stoppe trygt utenom kjørebanen for å legge på snøkjetting under vanskelige vinterforhold.',
    theoryTrap: 'Selv om dette skiltet gjelder mest for tunge kjøretøy, er det viktig at personbiler ikke blokkerer kjettingplassen under snøfall, da lastebiler er avhengige av denne for å unngå å kjøre seg fast.',
    whatToDo: [
      'Ikke stans eller parker på kjettingplassen med mindre du har behov for å legge på kjetting.',
      'Vær oppmerksom på at tunge kjøretøy kan kjøre sakte eller svinge brått inn på plassen.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['kjettingplass', 'kjetting', 'snøkjetting', 'monteringsplass', 'snøfallplass']
  },
  {
    id: '790.10',
    code: '790.10',
    name: 'Kirke',
    displayName: 'Kirke',
    slug: 'kirke',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-790-10-kirke.jpg',
    shortExplanation: 'Viser retning til en kirke eller et kirkebygg.',
    longExplanation: 'Settes opp for å rettlede trafikanter mot en kirke av kulturhistorisk eller praktisk betydning.',
    theoryTrap: 'Viser et hvitt kirkesymbol på blå bakgrunn. Dette er et rent informasjonvegviserskilt.',
    whatToDo: [
      'Bruk det som navigasjonshjelp ved behov.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['kirke', 'kirkebygg', 'gudstjeneste', 'kirkeskilt']
  },
  {
    id: '790.15',
    code: '790.15',
    name: 'Næringsområde',
    displayName: 'Næringsområde / Industriområde',
    slug: 'naeringsomrade',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-790-15-naeringsomrade.jpg',
    shortExplanation: 'Viser vei til et nærings- eller industriområde.',
    longExplanation: 'Dette skiltet hjelper yrkessjåfører og andre trafikanter med å finne frem til næringsparker eller industriområder der bedrifter og fabrikker er samlet.',
    theoryTrap: 'Viser et hvitt fabrikksymbol med piper. Her kan det være økt trafikk av tunge kjøretøy (lastebiler og vogntog) som svinger ut og inn.',
    whatToDo: [
      'Vær spesielt oppmerksom på kryssende og svingende tungtransport i nærheten av næringsområder.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['næringsområde', 'industriområde', 'fabrikk', 'industripark']
  },
  {
    id: '790.16',
    code: '790.16',
    name: 'Kjøpesenter',
    displayName: 'Kjøpesenter',
    slug: 'kjopesenter',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-790-16-kjopesenter.jpg',
    shortExplanation: 'Viser vei til et kjøpesenter eller varehus.',
    longExplanation: 'Dette skiltet viser retningen til et kjøpesenter eller en større samling av butikker.',
    theoryTrap: 'Skiltet viser en hvit handlekurv på blå bakgrunn. Vær forberedt på uforutsigbar trafikk, fotgjengere og kø rundt innkjøringene.',
    whatToDo: [
      'Tilpass farten og vær oppmerksom på biler som bremser brått for å svinge inn til senteret.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['kjøpesenter', 'senter', 'handlekurv', 'butikksenter', 'shopping']
  },
  {
    id: '790.20',
    code: '790.20',
    name: 'Svømmehall',
    displayName: 'Svømmehall / Badeanlegg',
    slug: 'svommehall',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-790-20-svommehall.jpg',
    shortExplanation: 'Viser vei til en svømmehall eller et badeanlegg.',
    longExplanation: 'Viser vei til innendørs badeanlegg, svømmehaller eller offentlige bad.',
    theoryTrap: 'Viser en hvit svømmer på blå bakgrunn. Ofte plassert nær idrettsparker.',
    whatToDo: [
      'Følg skiltet dersom du skal til badeanlegget.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['svømmehall', 'svommehall', 'badeland', 'badeanlegg', 'svømmer']
  },
  {
    id: '792.30',
    code: '792.30',
    name: 'Helautomatisk bomstasjon',
    displayName: 'AutoPASS helautomatisk bomstasjon',
    slug: 'helautomatisk-bomstasjon',
    category: 'vegvisningsskilt',
    imagePath: '/signs/vegvisningsskilt/skilt-792-30-helautomatisk-bomstasjon.jpg',
    shortExplanation: 'Viser at du nærmer deg en automatisk bomstasjon der betalingen skjer uten stans.',
    longExplanation: 'Dette skiltet varsler om en kommende AutoPASS helautomatisk bomstasjon. Skiltet viser et kamerasymbol og radiabølgesymbol for å vise at passeringen registreres automatisk via bombrikke eller video av bilskiltet.',
    theoryTrap: 'Det er strengt forbudt å stoppe eller bremse ned ved en helautomatisk bomstasjon. Mange tror de må stoppe fordi det er en "bomstasjon", men det fører til farlige situasjoner.',
    whatToDo: [
      'Kjør igjennom bomstasjonen i normal hastighet uten å bremse ned.',
      'Sørg for at du har gyldig betalingsløsning eller AutoPASS-brikke.'
    ],
    confusedWith: ['765'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['helautomatisk bomstasjon', 'autopass', 'bomstasjonkamera', 'bompenger automatisk']
  },
  // --- MARKERINGSSKILT ---
  {
    id: '902-H',
    code: '902-H',
    name: 'Bakgrunnsmarkering (høyre)',
    displayName: 'Bakgrunnsmarkering (høyre)',
    slug: 'bakgrunnsmarkering-hoyre',
    category: 'markeringsskilt',
    imagePath: '/signs/markeringsskilt/skilt-902-h-bakgrunnsmarkering.jpg',
    shortExplanation: 'Viser at vegen endrer retning i en spesielt skarp eller uoversiktlig sving til høyre.',
    longExplanation: 'Bakgrunnsmarkering brukes på steder der det kan være vanskelig å oppdage svingen eller faremomentet i tide, spesielt under mørke- eller tåkekjøring.',
    theoryTrap: 'De gule og svarte skråstripene peker alltid nedover i kjøreretningen. Når stripene skråner ned mot høyre, viser det at du skal passere på høyre side og svinge til høyre.',
    whatToDo: [
      'Tilpass farten før svingen.',
      'Følg vegens retning til høyre.'
    ],
    confusedWith: ['902-V', '904-H'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['bakgrunnsmarkering', 'svingmarkering', 'skarp sving høyre', 'gulgul-svart']
  },
  {
    id: '902-V',
    code: '902-V',
    name: 'Bakgrunnsmarkering (venstre)',
    displayName: 'Bakgrunnsmarkering (venstre)',
    slug: 'bakgrunnsmarkering-venstre',
    category: 'markeringsskilt',
    imagePath: '/signs/markeringsskilt/skilt-902-v-bakgrunnsmarkering.jpg',
    shortExplanation: 'Viser at vegen endrer retning i en spesielt skarp eller uoversiktlig sving til venstre.',
    longExplanation: 'Bakgrunnsmarkering med striper som skråner ned mot venstre brukes for å lede kjøretøy trygt gjennom en skarp sving til venstre.',
    theoryTrap: 'Stripene skråner nedover til venstre, som indikerer at du må styre og passere til venstre for skiltet.',
    whatToDo: [
      'Reduser farten før kurven.',
      'Hold oppmerksomheten på vegens forløp mot venstre.'
    ],
    confusedWith: ['902-H', '904-V'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['bakgrunnsmarkering venstre', 'skarp sving venstre', 'kurvemarkering']
  },
  {
    id: '904-H',
    code: '904-H',
    name: 'Retningsmarkering (høyre)',
    displayName: 'Retningsmarkering (høyre)',
    slug: 'retningsmarkering-hoyre',
    category: 'markeringsskilt',
    imagePath: '/signs/markeringsskilt/skilt-904-retningsmarkering.jpg',
    shortExplanation: 'Viser retningsendring eller kurveforløp til høyre på spesielt utsatte steder.',
    longExplanation: 'Retningsmarkering brukes i kurver eller veikryss for å markere at vegen svinger skarpt til høyre, og er utstyrt med gule piler på svart bakgrunn.',
    theoryTrap: 'Pilene peker tydelig mot høyre. Dette skiltet brukes ofte som supplement til vanlig bakgrunnsmarkering i ekstra skarpe svinger.',
    whatToDo: [
      'Tilpass hastigheten etter svingens skarphet.',
      'Kjør i henhold til pilenes retning.'
    ],
    confusedWith: ['902-H', '904-V'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['retningsmarkering', 'piler', 'kurvepiler', 'svingpiler høyre']
  },
  {
    id: '904-V',
    code: '904-V',
    name: 'Retningsmarkering (venstre)',
    displayName: 'Retningsmarkering (venstre)',
    slug: 'retningsmarkering-venstre',
    category: 'markeringsskilt',
    imagePath: '/signs/markeringsskilt/skilt-904-v-retningsmarkering.jpg',
    shortExplanation: 'Viser retningsendring eller kurveforløp til venstre på spesielt utsatte steder.',
    longExplanation: 'Pilene peker mot venstre for å rettlede trafikken gjennom en skarp venstresving der sikten kan være redusert.',
    theoryTrap: 'Pilretningen må følges. Slike skilt er plassert direkte i svingens ytre ytterkant for maksimal synlighet.',
    whatToDo: [
      'Senk farten i god tid.',
      'Følg svingen mot venstre.'
    ],
    confusedWith: ['902-V', '904-H'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['retningsmarkering venstre', 'venstrepiler', 'svingpiler venstre']
  },
  {
    id: '906-H',
    code: '906-H',
    name: 'Hindermarkering (høyre)',
    displayName: 'Hindermarkering (høyre)',
    slug: 'hindermarkering-hoyre',
    category: 'markeringsskilt',
    imagePath: '/signs/markeringsskilt/skilt-906-h-hindermarkering.jpg',
    shortExplanation: 'Markerer en hindring i eller nær vegen, og angir at du skal passere på høyre side.',
    longExplanation: 'Hindermarkering brukes til å merke fysiske hindringer som trafikkøyer, autovernender, stolper eller midtdelere.',
    theoryTrap: 'Stripene skråner nedover mot høyre. Dette er din visuelle instruks om å passere på den siden stripene skråner ned mot (altså høyre side).',
    whatToDo: [
      'Styr til høyre for skiltet for å passere hindringen trygt.'
    ],
    confusedWith: ['906-V', '906-VH'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['hindermarkering', 'hinder', 'passering høyre', 'gul-svart stolpe']
  },
  {
    id: '906-V',
    code: '906-V',
    name: 'Hindermarkering (venstre)',
    displayName: 'Hindermarkering (venstre)',
    slug: 'hindermarkering-venstre',
    category: 'markeringsskilt',
    imagePath: '/signs/markeringsskilt/skilt-906-v-hindermarkering.jpg',
    shortExplanation: 'Markerer en hindring i eller nær vegen, og angir at du skal passere på venstre side.',
    longExplanation: 'Brukes for å markere hindringer der trafikkstrømmen ledes til venstre for hindringen.',
    theoryTrap: 'Stripene skråner nedover mot venstre. Du må styre og passere til venstre for dette skiltet.',
    whatToDo: [
      'Passér på venstre side av hindringen.'
    ],
    confusedWith: ['906-H', '906-VH'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['hindermarkering venstre', 'hinder venstre', 'passering venstre']
  },
  {
    id: '906-VH',
    code: '906-VH',
    name: 'Hindermarkering (begge sider)',
    displayName: 'Hindermarkering (begge sider)',
    slug: 'hindermarkering-begge-sider',
    category: 'markeringsskilt',
    imagePath: '/signs/markeringsskilt/skilt-906-vh-hindermarkering.jpg',
    shortExplanation: 'Markerer en hindring som kan passeres på enten høyre eller venstre side.',
    longExplanation: 'Dette skiltet har et pilformet (V-formet) mønster der stripene skråner nedover mot begge sider. Det settes typisk opp på starten av trafikkøyer der kjørefelt deler seg.',
    theoryTrap: 'Siden mønsteret peker nedover til begge sider, har du lov til å passere hindringen på valgfri side (både høyre og venstre side).',
    whatToDo: [
      'Velg kjørefeltet som leder til din destinasjon og passér hindringen på den aktuelle siden.'
    ],
    confusedWith: ['906-H', '906-V'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['hindermarkering begge sider', 'pilsplitt', 'valgfri passering', 'midtdeler splitting']
  },
  {
    id: '908',
    code: '908',
    name: 'Hindermarkering for høyde',
    displayName: 'Hindermarkering for høyde',
    slug: 'hindermarkering-hoyde',
    category: 'markeringsskilt',
    imagePath: '/signs/markeringsskilt/skilt-908-hindermarkering-hoyde.jpg',
    shortExplanation: 'Markerer en hindring i høyden, for eksempel underkant av en tunnelportal eller undergang.',
    longExplanation: 'Settes opp for å gjøre førere av høye kjøretøy ekstra oppmerksomme på fysiske hindringer over kjørebanen.',
    theoryTrap: 'Dette skiltet har vertikale striper. Det markerer kun høydehindringen og må leses sammen med fareskilt for fri høyde.',
    whatToDo: [
      'Vær spesielt oppmerksom på kjøretøyets totale høyde (inkludert eventuell last/takboks).'
    ],
    confusedWith: ['930'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['hindermarkering for høyde', 'høydehindring', 'tunneltak', 'undergangsmarkering']
  },
  {
    id: '912',
    code: '912',
    name: 'Avkjøringsmarkering',
    displayName: 'Avkjøringsmarkering',
    slug: 'avkjoringsmarkering',
    category: 'markeringsskilt',
    imagePath: '/signs/markeringsskilt/skilt-912-avkjoringsmarkering.jpg',
    shortExplanation: 'Markerer punktet (krysset) der et avkjøringsfelt skiller seg fra hovedvegen.',
    longExplanation: 'Dette skiltet står i selve delepunktet («snuten») mellom kjørefeltene for å markere hvor du må svinge av.',
    theoryTrap: 'Det er strengt forbudt å krysse sperreområdet (skraveringen) foran dette skiltet. Hvis du bommer på avkjøringen, må du fortsette rett frem.',
    whatToDo: [
      'Følg kjørefeltet du har plassert deg i.',
      'Ikke gjør brå feltskifter over sperrelinjer foran skiltet.'
    ],
    confusedWith: ['906-VH'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['avkjøringsmarkering', 'avkjøringssnute', 'krysspil', 'veideling']
  },
  {
    id: '914-H',
    code: '914-H',
    name: 'Tunnelmarkering (høyre)',
    displayName: 'Tunnelmarkering (høyre)',
    slug: 'tunnelmarkering-hoyre',
    category: 'markeringsskilt',
    imagePath: '/signs/markeringsskilt/skilt-914-h-tunnelmarkering.jpg',
    shortExplanation: 'Markeringsskilt montert på tunnelveggen på høyre side for å vise kantforløpet.',
    longExplanation: 'Disse skiltene monteres i tunneler for å gi bedre visuell ledning langs tunnelveggene under mørke og fuktige forhold.',
    theoryTrap: 'Skiltet er svart og hvitt. Stripene leder blikket og markerer hvor langt ut til høyre du kan plassere bilen.',
    whatToDo: [
      'Bruk markeringene til å holde riktig sideplassering i tunnelen.'
    ],
    confusedWith: ['914-V'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['tunnelmarkering høyre', 'tunnelstripe', 'tunnelveggskilt']
  },
  {
    id: '914-V',
    code: '914-V',
    name: 'Tunnelmarkering (venstre)',
    displayName: 'Tunnelmarkering (venstre)',
    slug: 'tunnelmarkering-venstre',
    category: 'markeringsskilt',
    imagePath: '/signs/markeringsskilt/skilt-914-v-tunnelmarkering.jpg',
    shortExplanation: 'Markeringsskilt montert på tunnelveggen på venstre side for å vise kantforløpet.',
    longExplanation: 'Viser forløpet av venstre tunnelvegg for motgående kjørefelt eller flerfeltsveger.',
    theoryTrap: 'Svart-hvitt mønster. Viser den fysiske begrensningen på venstre side.',
    whatToDo: [
      'Hold god avstand til venstre side og tunnelveggen.'
    ],
    confusedWith: ['914-H'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['tunnelmarkering venstre', 'tunnelvegg venstre']
  },
  {
    id: '916',
    code: '916',
    name: 'Avstandsmarkering i tunnel',
    displayName: 'Avstandsmarkering i tunnel',
    slug: 'avstandsmarkering-i-tunnel',
    category: 'markeringsskilt',
    imagePath: '/signs/markeringsskilt/skilt-916-avstandsmarkering-i-tunnel.jpg',
    shortExplanation: 'Viser avstand til tunnelåpningene (nødutganger) i begge retninger.',
    longExplanation: 'Dette skiltet settes opp med jevne mellomrom i lange tunneler for å angi avstanden til trygghet i hver retning.',
    theoryTrap: 'Skiltet har to piler med avstander (f.eks. opp 9 km, ned 2 km). Ved en brann eller ulykke i tunnelen viser dette skiltet hvilken vei det er kortest å gå for å evakuere til fots.',
    whatToDo: [
      'Bruk skiltet til å orientere deg om korteste evakueringsveg i en nødsituasjon.',
      'Gå alltid i retning av pilen med kortest avstand ved evakuering.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['avstandsmarkering i tunnel', 'nødutgang tunnel', 'evakueringsskilt', 'tunnelavstand']
  },
  {
    id: '920-H',
    code: '920-H',
    name: 'Kantstolpe (høyre)',
    displayName: 'Kantstolpe (høyre side)',
    slug: 'kantstolpe-hoyre',
    category: 'markeringsskilt',
    imagePath: '/signs/markeringsskilt/skilt-920-h-kantstolpe.jpg',
    shortExplanation: 'Kantstolpe plassert på høyre side av vegen for å markere vegens kant.',
    longExplanation: 'Kantstolper hjelper deg å se vegens forløp under dårlig sikt (snøvær, tåke eller mørke).',
    theoryTrap: 'Stolper på høyre side av vegen har alltid en hvit rektangulær (firkantet) refleks. Dette gjør at du enkelt kan identifisere høyre vegkant i mørket.',
    whatToDo: [
      'Plasser kjøretøyet i forhold til kantstolpen på høyre side.',
      'Bruk stolpene til å vurdere vegens forløp fremover.'
    ],
    confusedWith: ['920-V', '920-VM'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['kantstolpe høyre', 'brøytestikke refleks', 'høyrereflekstolpe']
  },
  {
    id: '920-V',
    code: '920-V',
    name: 'Kantstolpe (venstre)',
    displayName: 'Kantstolpe (venstre side)',
    slug: 'kantstolpe-venstre',
    category: 'markeringsskilt',
    imagePath: '/signs/markeringsskilt/skilt-920-ve-kantstolpe.jpg',
    shortExplanation: 'Kantstolpe plassert på venstre side av vegen for å markere vegens kant.',
    longExplanation: 'Marker stolpeforløpet på venstre side av vegen for å skille vegen fra grøften.',
    theoryTrap: 'Stolper på venstre side av vegen har alltid to hvite sirkulære reflekser (prikker). Dette skiller dem visuelt fra stolpene på høyre side (som har en rektangulær strek).',
    whatToDo: [
      'Hold god avstand til venstre side der stolpene med to prikker står.'
    ],
    confusedWith: ['920-H', '920-VM'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['kantstolpe venstre', 'refleks med to prikker', 'venstrereflekstolpe']
  },
  {
    id: '920-VM',
    code: '920-VM',
    name: 'Kantstolpe (midtdeler)',
    displayName: 'Kantstolpe (midtdeler)',
    slug: 'kantstolpe-midtdeler',
    category: 'markeringsskilt',
    imagePath: '/signs/markeringsskilt/skilt-920-vm-kantstolpe.jpg',
    shortExplanation: 'Kantstolpe plassert på midtdeler, trafikkøy eller skillelinje.',
    longExplanation: 'Disse stolpene brukes for å synliggjøre midtdelere eller andre faste hindringer mellom motgående felt.',
    theoryTrap: 'Kan ha gule reflekser eller andre mønster avhengig av plassering for å skille dem fra ytterkanten av vegen.',
    whatToDo: [
      'Hold deg til høyre for kantstolper på midtdeler.'
    ],
    confusedWith: ['920-H', '920-V'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['kantstolpe midtdeler', 'midtstolpe', 'gulkantstolpe']
  },
  {
    id: '930',
    code: '930',
    name: 'Sperremarkering',
    displayName: 'Sperremarkering',
    slug: 'sperremarkering',
    category: 'markeringsskilt',
    imagePath: '/signs/markeringsskilt/skilt-930-sperremarkering.jpg',
    shortExplanation: 'Markerer stengt veg, vegarbeid eller midlertidige sperringer.',
    longExplanation: 'Sperremarkering settes opp på tvers av kjørebanen for å vise at vegen er helt stengt for trafikk, f.eks. ved vegarbeid eller ulykker.',
    theoryTrap: 'Skiltet har røde og gule skråstriper (rød/gul markering). Det betyr et absolutt forbud mot å kjøre forbi eller passere markeringen.',
    whatToDo: [
      'Stans kjøretøyet helt og snu, eller følg skiltet omkjøring.'
    ],
    confusedWith: ['908'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['sperremarkering', 'vegsperring', 'rød-gul sperre', 'stengt veg']
  },
  {
    id: '940',
    code: '940',
    name: 'Trafikkjegle',
    displayName: 'Trafikkjegle',
    slug: 'trafikkjegle',
    category: 'markeringsskilt',
    imagePath: '/signs/markeringsskilt/skilt-940-trafikkjegle.jpg',
    shortExplanation: 'Brukes til midlertidig oppmerking, innsnevring eller sperring av kjørefelt.',
    longExplanation: 'Trafikkjegler (kjegler) brukes ved ulykker, vegarbeid eller kortvarige endringer for å lede kjøretøy trygt forbi et skadested eller arbeidsområde.',
    theoryTrap: 'Kjegler settes opp midlertidig og kan lett velte. Du må aldri kjøre over kjeglene eller flytte på dem selv.',
    whatToDo: [
      'Senk farten og hold god avstand til kjeglene.',
      'Vær forberedt på uforutsigbart mønster ved innsnevring.'
    ],
    confusedWith: ['942'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['trafikkjegle', 'kjegle', 'oransje kjegle', 'vegarbeidjegle']
  },
  {
    id: '942',
    code: '942',
    name: 'Trafikksylinder',
    displayName: 'Trafikksylinder',
    slug: 'trafikksylinder',
    category: 'markeringsskilt',
    imagePath: '/signs/markeringsskilt/skilt-942-trafikksylinder.jpg',
    shortExplanation: 'Brukes til deling av kjørefelt, markering av trafikkøyer eller midlertidige sperringer.',
    longExplanation: 'Trafikksylindere monteres på vegen for å skille felt i hver sin retning eller hindre ulovlige svinger over sperreområder.',
    theoryTrap: 'Trafikksylindere er laget av fleksibelt materiale som gir etter om de blir påkjørt, men de fungerer fortsatt som en fysisk sperrelinje som det er ulovlig å krysse.',
    whatToDo: [
      'Hold deg på riktig side av sylinderne.',
      'Ikke utfør feltskifter på strekninger med sylindere.'
    ],
    confusedWith: ['940'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['trafikksylinder', 'sylinder', 'veggsylinder', 'oransje stolpe']
  },
  {
    id: '548',
    code: '548',
    name: 'Gågate',
    displayName: 'Gågate',
    slug: 'gagate',
    category: 'opplysningsskilt',
    imagePath: '/signs/opplysningsskilt/skilt-548-gagate.jpg',
    shortExplanation: 'Viser at du kjører inn i en gågate, der kjøring med motorvogn i utgangspunktet er forbudt.',
    longExplanation: 'Gågaten er forbeholdt gående. Kjøring med motorvogn er forbudt, med mindre underskilt åpner for unntak — for eksempel varetransport i bestemte tidsrom. Den som har lov til å kjøre, må kjøre i gangfart og har vikeplikt for gående. Parkering er forbudt. Skiltet gjelder til «Slutt på gågate» (550).',
    theoryTrap: 'Gågate og gatetun forveksles ofte: i et gatetun er kjøring TILLATT i gangfart, mens i en gågate er kjøring i utgangspunktet FORBUDT (unntak krever underskilt). Felles for begge: når du kjører ut, har du vikeplikt for all annen trafikk.',
    whatToDo: [
      'Ikke kjør inn med mindre et underskilt gir deg lov (f.eks. varetransport).',
      'Har du lovlig ærend: kjør i gangfart og vik for gående.',
      'Husk vikeplikt for all trafikk når du kjører ut av gågaten.'
    ],
    confusedWith: ['540'],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['gågate', 'gå gate', 'bilfri gate', 'gangvei i sentrum'],
    visualDescription: 'Firkantet blått skilt med gående personer og gatemiljø.',
  },
  {
    id: '605',
    code: '605',
    name: 'Bensinstasjon',
    displayName: 'Bensinstasjon',
    slug: 'bensinstasjon',
    category: 'serviceskilt',
    imagePath: '/signs/serviceskilt/skilt-605-bensinstasjon.jpg',
    shortExplanation: 'Viser at det finnes bensinstasjon eller drivstoffanlegg ved vegen eller via avkjøringen.',
    longExplanation: 'Serviceskiltet opplyser om hvor du kan fylle drivstoff. Det brukes ofte sammen med vegvisningsskilt før avkjøringer, og kan ha symboler for ladestasjon der det tilbys.',
    theoryTrap: 'Serviceskilt pålegger deg ingenting — de gir bare informasjon. Men å planlegge fylling og lading i god tid er en del av god turplanlegging, som teoriprøven kan teste.',
    whatToDo: [
      'Planlegg fylling eller lading i god tid, spesielt før fjelloverganger og lange strekninger.'
    ],
    confusedWith: [],
    sources: [
      { name: 'Statens vegvesen', url: 'https://www.vegvesen.no' },
      { name: 'Lovdata', url: 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219' }
    ],
    aliases: ['bensinstasjon', 'bensinpumpe', 'drivstoff', 'tanking'],
    visualDescription: 'Firkantet blått skilt med hvit bensinpumpe.',
  }
];


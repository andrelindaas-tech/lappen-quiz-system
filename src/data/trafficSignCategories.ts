export interface TrafficSignCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  isActive?: boolean;
  /** Ekstra avsnitt under beskrivelsen — dekker synonymer og utseende folk søker på */
  synonymIntro?: string;
  /** FAQ vist nederst på kategorisiden + FAQPage-schema */
  faq?: { question: string; answer: string }[];
  /** De vanligste teorifellene i skiltgruppen — vises som egen seksjon under skiltgriden */
  commonMistakes?: string[];
}

export const trafficSignCategories: TrafficSignCategory[] = [
  {
    id: 'vikeplikt-og-forkjorsskilt',
    name: 'Vikeplikt- og forkjørsskilt',
    slug: 'vikeplikt-og-forkjorsskilt',
    description: 'Skilt som regulerer hvem som har vikeplikt eller forkjørsrett i kryss og på veistrekninger.',
    isActive: true,
    synonymIntro: 'Gruppen kalles også vikepliktskilt eller forkjørsskilt. Det mest kjente er den hvite trekanten med rød kant og spissen ned (vikeplikt) og det røde åttekantede stoppskiltet.',
    faq: [
      {
        question: 'Hva betyr trekant-skiltet med spissen ned?',
        answer: 'Den hvite trekanten med rød kant og spissen ned er vikepliktskiltet (202). Det betyr at du har vikeplikt for kjørende trafikk i begge retninger på kryssende veg. Du må kun stoppe helt hvis det er nødvendig for å slippe trafikken frem.'
      },
      {
        question: 'Hvilket skilt krever at du alltid stopper helt?',
        answer: 'Stoppskiltet (204) – det røde åttekantede skiltet – krever at du alltid stanser helt, med hjulene i ro, før du kjører videre. En «rullende stopp» er ikke lov.'
      },
      {
        question: 'Hva betyr det gule diamantformede skiltet?',
        answer: 'Det gule, diamantformede skiltet med hvit kant er forkjørsveg (206). Det betyr at kryssende trafikk har vikeplikt for deg, helt til skiltet «Slutt på forkjørsveg» opphever det.'
      }
    ],
    commonMistakes: [
      'Vikepliktskilt betyr ikke at du alltid må stoppe — full stans kreves bare hvis det er nødvendig for å slippe frem kryssende trafikk. Det er stoppskiltet (204) som alltid krever at hjulene står helt i ro.',
      'Forkjørsveg (206) gjelder helt til den oppheves av «Slutt på forkjørsveg», vikeplikt- eller stoppskilt — mens forkjørskryss (210) bare gjelder det første krysset. Mange blander rekkevidden til de to.',
      'På skilt 212/214 (vikeplikt overfor møtende / møtende har vikeplikt) er det pilfargene som avgjør: rød pil = den som må vike. Pilretningene er en gjenganger på teoriprøven.',
      'Vikepliktskiltet og stoppskiltet har unike former (trekant med spissen ned og åttekant) nettopp for at du skal kjenne dem igjen bakfra eller med snø på — et klassisk teorispørsmål.',
      'Skilt i denne gruppen setter høyreregelen til side. Ser du ingen vikeplikt- eller forkjørsskilt i et kryss, er det høyreregelen som gjelder.',
    ],
  },
  {
    id: 'fareskilt',
    name: 'Fareskilt',
    slug: 'fareskilt',
    description: 'Fareskilt varsler om farer du må være ekstra oppmerksom på. De sier ikke nødvendigvis at noe er forbudt, men at du må tilpasse fart, plassering og oppmerksomhet etter forholdene.',
    isActive: true,
    synonymIntro: 'Fareskilt kalles også varselskilt. Du kjenner dem igjen på formen: trekantede skilt med rød kant, hvit bunn og et svart symbol som viser faren – for eksempel elg, barn eller farlig sving.',
    faq: [
      {
        question: 'Hva betyr trekantede skilt med rød kant?',
        answer: 'Trekantede skilt med rød kant og spissen opp er fareskilt. De varsler om en fare lenger fremme – for eksempel farlig sving, glatt veg eller dyr – og betyr at du må senke farten og skjerpe oppmerksomheten.'
      },
      {
        question: 'Hva skal du gjøre når du ser et fareskilt?',
        answer: 'Tilpass farten, øk oppmerksomheten og vær klar til å handle. Fareskilt forbyr ingenting i seg selv, men faren det varsler om kan kreve at du bremser eller endrer plassering.'
      },
      {
        question: 'Hvor langt før faren står fareskiltet?',
        answer: 'Utenfor tettbygd strøk står fareskilt vanligvis 150–250 meter før faren. I tettbygd strøk kan avstanden være kortere. Et underskilt kan angi en annen avstand.'
      }
    ],
    commonMistakes: [
      'Fareskilt forbyr ingenting — de varsler. Det er situasjonen bak skiltet (glatt veg, barn, dyr) som avgjør hva du må gjøre, og riktig svar på prøven er nesten alltid «tilpass farten og øk oppmerksomheten».',
      'Elgskiltet betyr ikke at elgen krysser akkurat ved skiltet — faren gjelder en strekning, ofte angitt med underskilt. Størst risiko er det i grålysning og skumring.',
      'Mange glemmer avstandsregelen: utenfor tettbygd strøk står fareskiltet vanligvis 150–250 meter FØR faren. Ser du skiltet, har du altså litt tid — bruk den til å senke farten.',
      '«Glatt kjørebane»-skiltet gjelder ikke bare is og snø: vegen kan være glatt av regn etter en tørkeperiode, løv, grus eller søl fra landbruk.',
    ],
  },
  {
    id: 'forbudsskilt',
    name: 'Forbudsskilt',
    slug: 'forbudsskilt',
    description: 'Runde skilt som forbyr en bestemt adferd, for eksempel fartsgrenser eller innkjøringsforbud.',
    isActive: true,
    synonymIntro: 'Forbudsskilt er runde med rød ring – ofte omtalt som «rundt skilt med rød ring» eller «rød sirkel-skilt». De blå variantene med røde streker er stans- og parkeringsskiltene.',
    faq: [
      {
        question: 'Hva betyr blått skilt med rød strek?',
        answer: 'Et rundt blått skilt med rød ring og én rød skråstrek betyr parkering forbudt (372). Har skiltet et rødt kryss (to kryssende streker), betyr det stans forbudt (370) – da kan du verken stanse eller parkere.'
      },
      {
        question: 'Hva betyr rundt hvitt skilt med rød ring?',
        answer: 'Runde hvite skilt med rød ring er forbudsskilt. Symbolet eller tallet i midten viser hva som er forbudt – for eksempel er et tall en fartsgrense, og en rød ring rundt en bil betyr forbikjøring forbudt.'
      },
      {
        question: 'Hvor lenge gjelder et forbudsskilt?',
        answer: 'Et forbudsskilt gjelder som hovedregel frem til neste kryss, eller til et opphevelsesskilt eller nytt skilt endrer reguleringen. Underskilt kan angi en bestemt strekning.'
      }
    ],
    commonMistakes: [
      'Ikke alle forbud opphører i neste kryss: parkeringsregulering gjelder til krysset, men en skiltet fartsgrense gjelder videre til den oppheves av nytt fartsgrenseskilt eller opphevelsesskilt.',
      'Parkering forbudt (én skråstrek) og stans forbudt (kryss) blandes ofte: ved parkering forbudt kan du fortsatt stanse kort for av- og påstigning, ved stans forbudt kan du ikke stanse i det hele tatt.',
      '«Innkjøring forbudt» betyr ikke at gaten er enveiskjørt — det kan komme trafikk imot selv om du passerte skiltet lovlig fra riktig side.',
      'Forbikjøring forbudt gjelder motorvogn med flere enn to hjul — tohjuls MC og moped kan fortsatt forbikjøres når det er trygt.',
      '«Slutt på fartsgrense»-skiltene betyr aldri fri fart: du går tilbake til de generelle grensene, 50 km/t i tettbygd strøk og 80 km/t utenfor.',
    ],
  },
  {
    id: 'pabudsskilt',
    name: 'Påbudsskilt',
    slug: 'pabudsskilt',
    description: 'Påbudsskilt viser hva du må gjøre eller hvilken retning du skal følge. De brukes blant annet for kjøreretning, kjørefelt og rundkjøring, og er viktige å forstå fordi de pålegger deg en bestemt handling.',
    isActive: true,
    synonymIntro: 'Påbudsskilt kalles ofte obligatoriske skilt i dagligtale. Du kjenner dem igjen som runde, blå skilt med hvite piler eller symboler – de forteller hva du MÅ gjøre, ikke bare hva du kan.',
    faq: [
      {
        question: 'Hva er obligatoriske skilt?',
        answer: 'Obligatoriske skilt er et uoffisielt navn på påbudsskilt – runde blå skilt med hvite symboler. De pålegger deg en bestemt handling, for eksempel påbudt kjøreretning eller påbudt rundkjøring.'
      },
      {
        question: 'Hva betyr blått rundt skilt med hvit pil?',
        answer: 'Et rundt blått skilt med hvit pil er påbudt kjøreretning (402). Du må kjøre i den retningen pilen viser – andre retninger er ikke tillatt.'
      },
      {
        question: 'Hva er forskjellen på påbudsskilt og opplysningsskilt?',
        answer: 'Påbudsskilt (runde, blå) pålegger deg en handling du må utføre. Opplysningsskilt (firkantede, ofte blå) informerer om hva som gjelder på stedet, for eksempel motorveg eller gangfelt.'
      }
    ],
    commonMistakes: [
      'Blå runde skilt er påbud — ikke forslag. Viser pilen rett frem, kan du ikke svinge selv om det «ser klart ut» eller ville spart deg en omvei.',
      'Påbudt rundkjøring betyr at du MÅ følge rundkjøringen i pilens retning — du kan aldri svinge til venstre foran sentraløya.',
      'Rund og blå (påbud: hva du MÅ gjøre) forveksles med firkantet og blå (opplysning: hva som gjelder). Formen er det raskeste kjennetegnet på prøven.',
      'Påbudt kjørefelt/kjøreretning brukes ofte midlertidig ved vegarbeid — det midlertidige gule skiltet gjelder foran de permanente.',
    ],
  },
  {
    id: 'opplysningsskilt',
    name: 'Opplysningsskilt',
    slug: 'opplysningsskilt',
    description: 'Opplysningsskilt gir informasjon om trafikkregler, kjørefelt, parkeringsmuligheter, gangfelt, motorveg og andre forhold du må forstå når du kjører. De forteller ofte hva som gjelder på stedet eller strekningen.',
    isActive: true,
    synonymIntro: 'Opplysningsskilt er som regel firkantede, blå og hvite skilt. Søker du på «norsk skilt blått og hvitt», er det oftest et opplysningsskilt du har sett – for eksempel gangfelt, parkering eller motorveg.',
    faq: [
      {
        question: 'Hva betyr blå og hvite firkantede skilt?',
        answer: 'Firkantede blå skilt med hvite symboler er opplysningsskilt. De informerer om hva som gjelder på stedet – for eksempel gangfelt, parkering, envegskjøring eller motorveg.'
      },
      {
        question: 'Er opplysningsskilt bare til informasjon?',
        answer: 'Nei – mange opplysningsskilt har rettslig betydning. Skiltet for gangfelt betyr for eksempel at du har vikeplikt for gående i feltet, og motorvegskiltet betyr at reglene for motorveg gjelder.'
      }
    ],
    commonMistakes: [
      '«Opplysning» betyr ikke «uforpliktende»: gatetun krever gangfart, motorveg-skiltet utløser motorvegreglene, og envegskjøring/kollektivfelt-skiltene har bøtesatser bak seg.',
      'Sammenfletting (530) og kjørefelt slutter (532) er gruppens største felle: ved sammenfletting fletter begge felt annenhver gang uten prioritet, ved kjørefelt slutter har du som mister feltet vikeplikt.',
      'I gatetun er «fartsgrensen» gangfart (under 10 km/t) — ikke 30. Og når du kjører UT av gatetunet, har du vikeplikt for all annen trafikk.',
      'Motortrafikkveg har samme adgangsregler og forbud (rygging, vending, stans) som motorveg — men kan ha møtende trafikk og kryss i plan. Mange tror reglene er «mildere».',
      'Møteplass-lommen (M-skiltet) er kun for passering — aldri parkering eller snuplass.',
    ],
  },
  {
    id: 'serviceskilt',
    name: 'Serviceskilt',
    slug: 'serviceskilt',
    description: 'Skilt som gir opplysninger om nødutstyr, veghjelp, spisesteder, overnatting og andre tjenester langs vegen.',
    isActive: true,
    synonymIntro: 'Serviceskilt er de blå eller brune firkantede skiltene med hvite symboler for bensinstasjon, rasteplass, sykehus og lignende tjenester.',
    faq: [
      {
        question: 'Hva betyr brune serviceskilt?',
        answer: 'Brune serviceskilt viser vei til severdigheter og aktiviteter, for eksempel museer, badeplasser eller nasjonale turistveger. Blå serviceskilt viser tjenester som drivstoff, mat og overnatting.'
      },
      {
        question: 'Kommer serviceskilt på teoriprøven?',
        answer: 'Serviceskilt testes sjeldnere enn fare- og forbudsskilt, men du bør kjenne igjen de vanligste – som førstehjelp, drivstoff og rasteplass – og vite at de kun informerer, ikke regulerer.'
      }
    ],
  },
  {
    id: 'vegvisningsskilt',
    name: 'Vegvisningsskilt',
    slug: 'vegvisningsskilt',
    description: 'Skilt som viser vei til steder, bydeler, virksomheter eller rutenummer.',
    isActive: true,
    synonymIntro: 'Vegvisningsskilt kalles gjerne veivisere eller retningsskilt. Fargen forteller hvor vegen fører: blå for riksveger, gule for lokale mål, grønne for motorveg og hvite for gater og virksomheter.',
    faq: [
      {
        question: 'Hva betyr fargene på vegvisningsskilt?',
        answer: 'Grønn bakgrunn brukes for motorveg, blå for øvrige hovedveger, gul/oransje for midlertidig omkjøring og lokale mål, hvit for gater, bydeler og virksomheter, og brun for severdigheter.'
      },
      {
        question: 'Kommer vegvisningsskilt på teoriprøven?',
        answer: 'Du kan få spørsmål om hva fargene betyr og hvordan du leser skiltene i god tid for å velge riktig felt – spesielt i kombinasjon med feltvalg og plassering.'
      }
    ],
  },
  {
    id: 'underskilt',
    name: 'Underskilt',
    slug: 'underskilt',
    description: 'Underskilt står under et hovedskilt og presiserer hvem skiltet gjelder for, hvor langt det gjelder, når det gjelder eller hvilke unntak som finnes. De er viktige på teoriprøven fordi de kan endre hvordan du skal tolke hovedskiltet.',
    isActive: true,
    synonymIntro: 'Underskilt er de små, hvite tilleggsskiltene som henger under hovedskiltet – med tekst, tall eller symboler som presiserer hva som gjelder.',
    faq: [
      {
        question: 'Hva betyr tallene på et underskilt?',
        answer: 'Tall på underskilt angir som regel avstand eller utstrekning – for eksempel «200 m» (faren/reguleringen kommer om 200 meter) eller en pil med lengde som viser hvor langt hovedskiltet gjelder.'
      },
      {
        question: 'Gjelder hovedskiltet uten at du leser underskiltet?',
        answer: 'Nei – underskiltet er en del av reguleringen. Et parkering forbudt-skilt med underskilt «8–16» gjelder for eksempel bare i det tidsrommet. Du må alltid lese hovedskilt og underskilt samlet.'
      }
    ],
  },
  {
    id: 'markeringsskilt',
    name: 'Markeringsskilt',
    slug: 'markeringsskilt',
    description: 'Skilt som markerer hindringer, svinger eller vegens kantforløp.',
    isActive: true,
    synonymIntro: 'Markeringsskilt er de sorte og gule (eller røde og hvite) stripede skiltene som markerer skarpe svinger, hindre og kanter – ofte kalt sving-markering eller hindermarkering.',
    faq: [
      {
        question: 'Hva betyr sorte og gule stripede skilt?',
        answer: 'Sorte og gule striper brukes på bakgrunnsmarkering i skarpe svinger og ved hindre. Stripene peker nedover mot den siden du skal passere på.'
      },
      {
        question: 'Hva er forskjellen på markeringsskilt og fareskilt?',
        answer: 'Fareskilt varsler om en fare i forkant, mens markeringsskilt står ved selve hindringen eller svingen og viser nøyaktig hvor den er og hvilken side du skal passere på.'
      }
    ],
  },
];

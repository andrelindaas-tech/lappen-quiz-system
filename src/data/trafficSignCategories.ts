export interface TrafficSignCategory {
  id: string;
  name: string;
  slug: string;
  description: string;
  isActive?: boolean;
}

export const trafficSignCategories: TrafficSignCategory[] = [
  {
    id: 'vikeplikt-og-forkjorsskilt',
    name: 'Vikeplikt- og forkjørsskilt',
    slug: 'vikeplikt-og-forkjorsskilt',
    description: 'Skilt som regulerer hvem som har vikeplikt eller forkjørsrett i kryss og på veistrekninger.',
    isActive: true,
  },
  {
    id: 'fareskilt',
    name: 'Fareskilt',
    slug: 'fareskilt',
    description: 'Fareskilt varsler om farer du må være ekstra oppmerksom på. De sier ikke nødvendigvis at noe er forbudt, men at du må tilpasse fart, plassering og oppmerksomhet etter forholdene.',
    isActive: true,
  },
  {
    id: 'forbudsskilt',
    name: 'Forbudsskilt',
    slug: 'forbudsskilt',
    description: 'Runde skilt som forbyr en bestemt adferd, for eksempel fartsgrenser eller innkjøringsforbud.',
    isActive: true,
  },
  {
    id: 'pabudsskilt',
    name: 'Påbudsskilt',
    slug: 'pabudsskilt',
    description: 'Påbudsskilt viser hva du må gjøre eller hvilken retning du skal følge. De brukes blant annet for kjøreretning, kjørefelt og rundkjøring, og er viktige å forstå fordi de pålegger deg en bestemt handling.',
    isActive: true,
  },
  {
    id: 'opplysningsskilt',
    name: 'Opplysningsskilt',
    slug: 'opplysningsskilt',
    description: 'Opplysningsskilt gir informasjon om trafikkregler, kjørefelt, parkeringsmuligheter, gangfelt, motorveg og andre forhold du må forstå når du kjører. De forteller ofte hva som gjelder på stedet eller strekningen.',
    isActive: true,
  },
  {
    id: 'serviceskilt',
    name: 'Serviceskilt',
    slug: 'serviceskilt',
    description: 'Skilt som gir opplysninger om nødhjelp, bensinstasjoner eller serveringssteder.',
    isActive: false,
  },
  {
    id: 'vegvisningsskilt',
    name: 'Vegvisningsskilt',
    slug: 'vegvisningsskilt',
    description: 'Skilt som viser vei til steder, bydeler, virksomheter eller rutenummer.',
    isActive: false,
  },
  {
    id: 'underskilt',
    name: 'Underskilt',
    slug: 'underskilt',
    description: 'Mindre skilt under hovedskiltet som presiserer, utvider eller begrenser skiltets gyldighet.',
    isActive: false,
  },
  {
    id: 'markeringsskilt',
    name: 'Markeringsskilt',
    slug: 'markeringsskilt',
    description: 'Skilt som markerer hindringer, svinger eller vegens kantforløp.',
    isActive: false,
  },
];

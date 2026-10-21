// Skjermtekst i infofeltet: ett kort poeng per setning (maks to linjer).
// Rekkefølgen følger setningene i manus.md og setningsstartene i timing.json.
export const POINTS = [
  [ // 1 Før du kjører forbi
    ['Før du kjører forbi:', 'sjekk fire ting'],
    ['1 · Fri vei langt nok', 'fremover'],
    ['2 · Bilen foran skal ikke', 'selv kjøre forbi'],
    ['3 · Ingen bak deg har', 'begynt å kjøre forbi'],
    ['4 · Plass til å legge deg', 'inn igjen'],
  ],
  [ // 2 Så lang tid tar det
    ['Du kjører i 80.', 'Lastebilen holder 70.'],
    ['Fartsforskjellen er', 'bare 10 km/t'],
    ['Forbikjøringen tar', 'rundt 25 sekunder'],
    ['Du kjører over', '500 meter'],
    ['Møtende bil kjører', 'like langt'],
    ['Regneeksempel: 80 forbi 70', '≈ 25 s og over 1 km fri vei'],
  ],
  [ // 3 Fartsgrensen
    ['Ingen ekstra fart for', 'å komme forbi'],
    ['For liten forskjell:', 'bli liggende bak'],
  ],
  [ // 4 Forbikjøring forbudt
    ['Forbudt der bakketopp eller', 'sving hindrer sikten'],
    ['Forbudt rett før og i kryss', '– unntak: forkjørsvei og lys'],
    ['Forbudt forbi en bil som', 'skjuler et gangfelt'],
    ['Forbudt ved sperrelinje', 'og skilt 334'],
  ],
  [ // 5 Når du blir forbikjørt
    ['Blir du forbikjørt: hold', 'til høyre, ikke øk farten'],
    ['Sakte eller stort kjøretøy:', 'slipp andre forbi'],
    ['Om nødvendig:', 'kjør inn til siden'],
  ],
  [ // 6 Husk dette
    ['Kjør bare forbi når du', 'ser at det er nok plass'],
    ['Er du i tvil –', 'la være'],
    ['Det kommer nesten alltid', 'en ny sjanse'],
  ],
];

// Praktisk råd i stillheten på slutten av kapittel 2 (ikke i talen).
export const MIRROR_LINES = ['Legg deg inn når du ser', 'lastebilen i speilet'];
export const CLOSE_LINES = ['Dere nærmer dere hverandre', 'med ca. 45 meter i sekundet'];

// Sluttkortet (4 s etter siste kapittel).
export const END_LINES = ['Er du i tvil – la være.', 'Les mer på teori-test.no'];
export const SUMMARY = [
  'Sjekk fri vei, foran og bak deg',
  'Fartsgrensen gjelder også nå',
  'Ikke ved bakketopp, kryss og gangfelt',
  'Blir du forbikjørt: hold til høyre',
];

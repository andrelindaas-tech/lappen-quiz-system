// Skjermtekst i infofeltet: ett kort poeng per setning (maks to linjer). Følger manuset (4-vikeplikt.md).
export const POINTS = [
  [ // 1 Hvem bestemmer?
    ['Hvem kjører', 'først?'],
    ['Start øverst i', 'myndighetspyramiden'],
    ['1 · Politiet dirigerer:', 'gjør som politiet sier'],
    ['2 · Trafikklys', '3 · Skilt og veimerking'],
    ['4 · Ingen av dem avgjør:', 'trafikkreglene gjelder'],
    ['Først spesielle situasjoner,', 'til slutt høyreregelen'],
  ],
  [ // 2 Høyreregelen
    ['Kryss uten skilt og lys:', 'vik for den fra høyre'],
    ['Det kalles', 'høyreregelen'],
    ['Gjelder også når du', 'svinger til venstre'],
    ['Møtende er på din høyre side', '– slipp den først'],
  ],
  [ // 3 Skilt går foran
    ['Skilt og veimerking går', 'foran høyreregelen'],
    ['Vikepliktskilt og haitenner:', 'vik for trafikken på vegen'],
    ['Det gjelder', 'begge retninger'],
  ],
  [ // 4 Ut fra en parkeringsplass
    ['Bil ut fra parkeringsplass,', 'fra høyre'],
    ['Høyreregelen gjelder', 'ikke her'],
    ['Ut fra parkering o.l.:', 'vikeplikt for alle'],
    ['Også for syklister', 'og gående'],
  ],
  [ // 5 Smal veg og hindring
    ['Hindring på din side:', 'slipp møtende først'],
    ['Den som har hindringen', 'på sin side, viker'],
    ['Skilt sier noe annet?', 'Da gjelder skiltet'],
  ],
  [ // 6 Buss fra holdeplass
    ['Bussen blinker for å kjøre', 'ut fra holdeplassen'],
    ['60 km/t eller lavere:', 'du har vikeplikt for bussen'],
    ['Senk farten i god tid', 'og slipp den ut'],
    ['Bussføreren skal likevel', 'unngå fare'],
    ['Høyere fartsgrense:', 'regelen gjelder ikke'],
  ],
  [ // 7 Husk dette
    ['Start øverst:', 'politi, lys og skilt'],
    ['Så spesielle situasjoner:', 'parkering, hindring, buss'],
    ['Til slutt', 'høyreregelen'],
  ],
];
// Myndighetspyramiden (samme rekkefølge som artikkelen).
export const PYRAMID = ['Politi', 'Trafikklys', 'Skilt og veimerking', 'Trafikkregler'];
export const PYRAMID_BASE = ['Spesielle situasjoner', 'Høyreregelen'];
// Sluttkortet.
export const END_LINES = ['Øv mer i vikepliktspillet', 'på teori-test.no'];
export const SUMMARY_TITLE = 'HUSK DETTE';
export const SUMMARY = [
  'Politi → lys → skilt → trafikkregler',
  'Ut fra parkering, eiendom o.l.: vik for alle',
  'Hindring på din side: slipp møtende',
  'Buss, 60 km/t eller lavere: slipp den ut',
  'Ellers: høyreregelen',
];
export const POSTER = ['Vikeplikt –', 'hvem kjører først?'];

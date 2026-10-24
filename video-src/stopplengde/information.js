// Skjermtekst i infofeltet: ett kort poeng per setning (maks to linjer, ca. 30 tegn per linje).
// Følger manuset (manus.md). Teksten i de godkjente nøkkelbildene er brukt der den passer.
export const POINTS = [
  [ // 1 Tre deler av stoppet
    ['Fra faren oppdages', 'til bilen står stille'],
    ['Først reagerer du,', 'så bremser du'],
    ['Reaksjonslengde + bremselengde', '= stopplengde'],
  ],
  [ // 2 Reaksjonslengde
    ['Mens du reagerer,', 'bremser ikke bilen'],
    ['Bilen kjører videre', 'i samme fart'],
    ['Del farten på 3,6:', 'meter per sekund'],
    ['40 ÷ 3,6 ≈ 11,1 m/s', 'altså ca. 11 m/s'],
    ['Ett sekund reaksjonstid:', 'ca. 11 meter'],
  ],
  [ // 3 Dobbel reaksjonstid
    ['Trøtt eller uoppmerksom:', 'kanskje to sekunder'],
    ['To sekunder: dobbelt så lang,', 'ca. 22 meter'],
    ['Ikke fire ganger så lang:', 'farten er den samme'],
  ],
  [ // 4 Slik regner du bremselengden
    ['Huskeregel for full bremsing', 'på tørr asfalt'],
    ['Del på 10, gang med seg selv', 'og del på 2'],
    ['40 km/t:', '4 × 4 = 16'],
    ['16 ÷ 2 =', '8 meter'],
    ['Vått føre eller is:', 'mye lengre bremselengde'],
  ],
  [ // 5 Dobbel fart
    ['80 km/t:', '8 × 8 = 64'],
    ['64 ÷ 2 = 32 meter:', 'fire ganger så langt'],
    ['Bremselengden oppgitt?', 'Bruk forholdet mellom fartene'],
    ['80 ÷ 40 = 2'],
    ['2 × 2 = 4'],
    ['8 m × 4 = 32 m'],
  ],
  [ // 6 Stopplengde
    ['Legg sammen', 'de to delene'],
    ['40 km/t:', 'ca. 19 meter'],
    ['80 km/t:', 'ca. 54 meter'],
    ['Nesten tre ganger', 'så langt'],
  ],
  [ // 7 Husk dette
    ['Reaksjonslengden følger', 'farten og reaksjonstiden'],
    ['Dobbel fart: fire ganger', 'så lang bremselengde'],
    ['Reaksjon + bremsing', '= stopplengde'],
  ],
];
export const END_LINES = ['Regn ut din egen stopplengde', 'på teori-test.no'];

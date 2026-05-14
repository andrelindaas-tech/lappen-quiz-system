# Trafikkskilt-assets

Denne mappen er reservert for skiltgrafikk brukt av skiltbanken.

## Mappestruktur

Skiltbanken organiseres etter skiltforskriftens hovedkategorier/kapitler:

```txt
public/signs/
  fareskilt/
  vikeplikt-og-forkjorsskilt/
  forbudsskilt/
  pabudsskilt/
  opplysningsskilt/
  serviceskilt/
  vegvisningsskilt/
  underskilt/
  markeringsskilt/
```

Kategorier med kontrollert artikkelsett:

- `fareskilt/`
- `vikeplikt-og-forkjorsskilt/` - Kapittel 3. Vikeplikt- og forkjorsskilt
- `forbudsskilt/`
- `pabudsskilt/`
- `opplysningsskilt/`
- `serviceskilt/`
- `vegvisningsskilt/`
- `underskilt/`
- `markeringsskilt/`

Anbefalt kilde for POC og videre import:

- Statens vegvesen: https://www.vegvesen.no/fag/veg-og-gate/trafikkskilt-og-vegoppmerking/filer-og-fargekoder-for-trafikkskilt/
- Lovdata/skiltforskriften for navn, kode og betydning: https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219

Ikke legg inn grafikk hentet fra konkurrenter som Teorimester, Teoritentamen, Bil-teori eller lignende.

POC- og artikkelfilene er hentet fra Statens vegvesen sine JPG/PNG-pakker og gitt SEO-/kodevennlige filnavn.

## Artikkelsett

Kategori-grid:

- `fareskilt/skilt-142-barn.jpg`
- `vikeplikt-og-forkjorsskilt/skilt-202-vikeplikt.jpg`
- `forbudsskilt/skilt-302-innkjoring-forbudt.jpg`
- `pabudsskilt/skilt-406-pabudt-rundkjoring.jpg`
- `opplysningsskilt/skilt-516-gangfelt.jpg`
- `serviceskilt/skilt-605-bensinstasjon.jpg`
- `vegvisningsskilt/skilt-713-vegviser.jpg`
- `underskilt/skilt-802-avstand.jpg`
- `markeringsskilt/skilt-904-retningsmarkering.jpg`

Vanlige teorifeller:

- `vikeplikt-og-forkjorsskilt/skilt-204-stopp.jpg`
- `vikeplikt-og-forkjorsskilt/skilt-206-forkjorsveg.jpg`
- `vikeplikt-og-forkjorsskilt/skilt-208-slutt-pa-forkjorsveg.jpg`
- `forbudsskilt/skilt-334-forbikjoring-forbudt.jpg`
- `forbudsskilt/skilt-336-slutt-pa-forbikjoringsforbud.jpg`
- `forbudsskilt/skilt-362-50-fartsgrense.jpg`
- `forbudsskilt/skilt-364-50-slutt-pa-saerskilt-fartsgrense.jpg`
- `forbudsskilt/skilt-372-parkering-forbudt.jpg`
- `underskilt/skilt-806-tid.jpg`

Statens vegvesen tilbyr EPS for vektor og JPG/PNG for bilde. Dersom vi vil ha `.svg` senere, bor vi avklare konvertering fra EPS til SVG og beholde kilde-/lisensnotat per fil.

For full import bor rettighetsgrunnlag og eventuell attribution avklares for bruk pa teori-test.no.

import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Link from '../InternalLink';
import { trafficSigns, type TrafficSign } from '../../data/trafficSigns';
import type { TrafficSignCategory } from '../../data/trafficSignCategories';
import type { TrafficSignGuide as Guide } from '../../data/trafficSignGuides';
import { trackEvent } from '../../utils/analytics';
import './TrafficSignGuide.css';

export default function TrafficSignGuide({ sign, category, guide }: { sign: TrafficSign; category: TrafficSignCategory; guide: Guide }) {
  const name = sign.displayName || sign.name;
  const updatedAt = guide.updatedAt || '2026-10-05';
  const dateLabel = new Date(`${updatedAt}T12:00:00Z`).toLocaleDateString('nb-NO', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
  const sourceDate = guide.sourceDate || '5. oktober 2026';
  // Situasjonsbildet er 1200×1200. På mobil blir boblene i bildet for små til å lese,
  // så bildet kan åpnes i full størrelse. Lenken går til selve bildefilen, slik at det
  // også virker uten JavaScript.
  const [zoomOpen, setZoomOpen] = useState(false);
  const zoomScroll = useRef<HTMLDivElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!zoomOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const onKey = (event: KeyboardEvent) => { if (event.key === 'Escape') setZoomOpen(false); };
    window.addEventListener('keydown', onKey);
    closeButton.current?.focus();
    const box = zoomScroll.current;
    if (box) box.scrollLeft = (box.scrollWidth - box.clientWidth) / 2;
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener('keydown', onKey); };
  }, [zoomOpen]);
  const answerData = guide.answerData;
  const percent = (count: number, total: number) => (count / total * 100).toLocaleString('nb-NO', { minimumFractionDigits: 1, maximumFractionDigits: 1 });
  const canonical = `https://teori-test.no/trafikkskilt/${category.slug}/${sign.slug}/`;
  const illustration = `/images/sign-situations/skilt-${sign.code}-${sign.slug}-situasjon.webp`;
  const law = 'https://lovdata.no/dokument/SF/forskrift/2005-10-07-1219';
  const trafficParagraph = ({ '212': 7, '524': 17, '531': 8 } as Record<string, number>)[sign.code];
  const sources = guide.sources || [
    [`Skiltforskriften § ${guide.paragraph}, skilt ${sign.code}`, `${law}/%C2%A7${guide.paragraph}`],
    sign.code === '555'
      ? ['Statens vegvesen: nødstans i tunnel', 'https://www.vegvesen.no/om-oss/presse/aktuelt/lokalt/region-sor/ikke-bruk-mobiltelefonen-i-tunneler/']
      : trafficParagraph
        ? [`Trafikkreglene § ${trafficParagraph}`, `https://lovdata.no/dokument/SF/forskrift/1986-03-21-747/%C2%A7${trafficParagraph}`]
        : ['Forenklet forelegg § 1', 'https://lovdata.no/dokument/SF/forskrift/1990-06-29-492/%C2%A71'],
  ];
  const structured = [
    { '@context': 'https://schema.org', '@type': 'ImageObject', contentUrl: `https://teori-test.no${illustration}`, url: canonical, name: `Skilt ${sign.code} ${name} i en trafikksituasjon`, caption: guide.scenario, width: 1200, height: 1200, inLanguage: 'nb', representativeOfPage: true },
    { '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: guide.faq.map(([question, answer]) => ({ '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer } })) },
    { '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Skiltguiden', item: 'https://teori-test.no/trafikkskilt/' },
      { '@type': 'ListItem', position: 2, name: category.name, item: `https://teori-test.no/trafikkskilt/${category.slug}/` },
      { '@type': 'ListItem', position: 3, name: `Skilt ${sign.code} ${name}`, item: canonical },
    ] },
  ];
  return <article className="sign-guide container">
    <Helmet>
      <title>{guide.title}</title><meta name="description" content={guide.description} />
      <meta property="og:title" content={guide.title} /><meta property="og:description" content={guide.description} />
      <meta property="og:image" content={`https://teori-test.no${illustration}`} /><meta property="og:image:alt" content={guide.scenario} />
      <meta property="og:image:width" content="1200" /><meta property="og:image:height" content="1200" />
      <meta name="twitter:title" content={guide.title} /><meta name="twitter:description" content={guide.description} />
      <meta name="twitter:image" content={`https://teori-test.no${illustration}`} />
      {structured.map((data) => <script key={data['@type']} type="application/ld+json">{JSON.stringify(data)}</script>)}
    </Helmet>
    <nav aria-label="Brødsmuler"><Link to="/trafikkskilt/">Skiltguiden</Link> / <Link to={`/trafikkskilt/${category.slug}/`}>{category.name}</Link> / {sign.code}</nav>
    <header className="sign-guide-intro">
      <img className="sign-guide-official" src={sign.imagePath} alt={sign.visualDescription || `Skilt ${sign.code} ${name}`} width="180" height="180" />
      <div><p className="sign-guide-eyebrow">{category.name} · Skilt {sign.code}</p><h1>Skilt {sign.code} {name}</h1>
      <p>{guide.intro || 'Lær regelen, se den i en trafikksituasjon og skill skiltet fra lignende skilt.'}</p>
      <p className="sign-guide-date">Sist oppdatert <time dateTime={updatedAt}>{dateLabel}</time></p></div>
    </header>
    <section className="sign-guide-answer"><h2>Kort svar</h2><p>{guide.answer}</p><p className="sign-guide-visual">Kjennetegn: {sign.visualDescription}</p></section>
    <section><h2>Skiltet i en trafikksituasjon</h2><figure>
      <a className="sign-guide-scene-link" href={illustration} aria-label="Vis situasjonsbildet i full størrelse" onClick={(event) => { event.preventDefault(); setZoomOpen(true); trackEvent('sign_image_zoom', { sign_code: sign.code }); }}>
        <img className="sign-guide-scene" src={illustration} alt={guide.scenario} width="1200" height="1200" loading="lazy" />
        <span className="sign-guide-zoom-hint" aria-hidden="true">🔍 Trykk på bildet for å forstørre</span>
      </a>
      <figcaption>{guide.scenario}</figcaption></figure><ol>{guide.points.map(p => <li key={p}>{p}</li>)}</ol>
      {zoomOpen && <div className="sign-guide-lightbox" role="dialog" aria-modal="true" aria-label={`Skilt ${sign.code} ${name} i en trafikksituasjon`} onClick={() => setZoomOpen(false)}>
        <button ref={closeButton} type="button" className="sign-guide-lightbox-close" onClick={() => setZoomOpen(false)}>Lukk ✕</button>
        <div ref={zoomScroll} className="sign-guide-lightbox-scroll" onClick={(event) => event.stopPropagation()}>
          <img src={illustration} alt={guide.scenario} width="1200" height="1200" />
        </div>
      </div>}</section>
    {answerData ? <section className="sign-guide-answer-data" aria-labelledby="sign-answer-data-title">
      <h2 id="sign-answer-data-title">Dette bommer flest på</h2>
      <p><strong>Omtrent 1 av 4 svarte feil.</strong> I uttrekket fra Teori-test.no var {answerData.incorrect} av {answerData.total} registrerte førstesvar feil ({percent(answerData.incorrect, answerData.total)} %).</p>
      <h3>«{answerData.question}»</h3>
      <table><caption>Svarfordeling i uttrekket</caption><thead><tr><th scope="col">Svar</th><th scope="col">Andel</th></tr></thead><tbody>
        {answerData.answers.map(answer => <tr key={answer.text}><th scope="row">{answer.text}{answer.correct && <span className="sign-guide-correct"> (riktig)</span>}</th><td>{percent(answer.count, answerData.total)} %</td></tr>)}
      </tbody></table>
      <p><strong>Forvekslingen er tydelig:</strong> 148 av de 170 som svarte feil, valgte «Veien er stengt i begge retninger». Det er {percent(148, answerData.incorrect)} % av feilsvarene.</p>
      <p>Skilt 302 gjelder innkjøring fra siden skiltet vender mot. Trafikk kan fortsatt komme ut av gaten. <Link to="/trafikkskilt/forbudsskilt/forbudt-for-alle-kjoretoy/">Skilt 306.0 Forbudt for alle kjøretøy</Link> er skiltet som regulerer trafikk i begge retninger.</p>
      <p className="sign-guide-date">Kilde: Teori-test.no, {answerData.period}. Utvalg: {answerData.total} først registrerte svar per nettleser.</p>
    </section> : <aside className="sign-guide-trap"><h2>Vanlig misforståelse</h2><p>{guide.misconception}</p></aside>}
    <section><h2>Slik gjør du det</h2><ol>{guide.steps.map(p => <li key={p}>{p}</li>)}</ol></section>
    <section><h2>Hvor møter du skiltet?</h2><ul>{guide.places.map(p => <li key={p}>{p}</li>)}</ul></section>
    <section><h2>Hvor gjelder regelen?</h2><p>{guide.extent}</p></section>
    {guide.supplementary && <section><h2>Underskilt du bør kjenne</h2>{guide.supplementary.map(({ code, explanation }) => {
      const supplement = trafficSigns.find(s => s.code === code);
      return supplement && <p key={code}><Link to={`/trafikkskilt/${supplement.category}/${supplement.slug}/`}>{code} {supplement.name}</Link>: {explanation}</p>;
    })}</section>}
    <section><h2>Skill dette fra andre skilt</h2><div className="sign-guide-comparisons">{guide.comparisons.map(([code, distinction]) => {
      const other = trafficSigns.find(s => s.code === code);
      return other && <Link key={code} to={`/trafikkskilt/${other.category}/${other.slug}/`}><img src={other.imagePath} alt={`Skilt ${code} ${other.name}`} width="64" height="64" loading="lazy" /><span><strong>{code} {other.displayName || other.name}</strong><span>{distinction}</span></span></Link>;
    })}</div></section>
    <section><h2>{guide.consequenceHeading || 'Hvis du bryter regelen'}</h2><p>{guide.consequence}</p><p className="sign-guide-date">{guide.consequenceNote || `Forelegg og prikker kontrollert mot Lovdata ${sourceDate}. Satsene gjelder forenklet forelegg og forutsetter at vilkårene for det er oppfylt.`}</p></section>
    <section className="sign-guide-practice"><h2>Øv på skilt og regler</h2><Link className="sign-guide-button" to="/quiz/skilt/" onClick={() => trackEvent('sign_quiz_click', { sign_code: sign.code })}>Start skilt-testen</Link>
      <p>Vil du teste alle temaene, kan du ta en <Link to="/">gratis teoriprøve for bil</Link> med 45 spørsmål.</p>
      <ul>{guide.articles.map(([slug, label]) => <li key={slug}><Link to={`/laeringsressurser/${slug}/`}>{label}</Link></li>)}</ul></section>
    <section><h2>Vanlige spørsmål</h2>{guide.faq.map(([q, a]) => <div key={q} className="sign-guide-faq"><h3>{q}</h3><p>{a}</p></div>)}</section>
    <footer className="sign-guide-sources"><h2>Kilder</h2><p>Kildene er kontrollert {sourceDate}.</p><ul>{sources.map(([label, url]) => <li key={url}><a href={url} target="_blank" rel="noopener noreferrer">{label}</a></li>)}</ul></footer>
  </article>;
}

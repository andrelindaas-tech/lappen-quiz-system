import { useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getTrafficSignBySlug, getCategoryBySlug } from '../../lib/trafficSigns';
import { trafficSigns } from '../../data/trafficSigns';
import { getSignExtra } from '../../data/trafficSignExtras';
import '../../theory.css';

// Standard gyldighets-/rekkeviddeforklaring per skiltgruppe (vises i FAQ på alle skiltsider)
const categoryValidityNotes: Record<string, string> = {
  'vikeplikt-og-forkjorsskilt':
    'Vikeplikt- og stoppskilt gjelder i krysset de står ved. Forkjørsveg gjelder helt til den oppheves av «Slutt på forkjørsveg», vikeplikt- eller stoppskilt, mens forkjørskryss bare gjelder det første krysset.',
  fareskilt:
    'Fareskilt varsler en fare lenger fremme. Utenfor tettbygd strøk står skiltet vanligvis 150–250 meter før faren, i tettbygd strøk 50–150 meter. Underskilt kan angi hvor lang strekning faren gjelder.',
  forbudsskilt:
    'Hovedregelen er at forbudet gjelder fra skiltet og fram til neste vegkryss, eller til et opphevelsesskilt eller nytt skilt endrer reguleringen. Skiltede fartsgrenser gjelder til nytt fartsgrenseskilt eller opphevelse — uavhengig av kryss. Underskilt kan angi sone eller strekning.',
  pabudsskilt:
    'Påbudet gjelder stedet eller strekningen skiltet regulerer — typisk gjennom krysset eller til påbudet naturlig er oppfylt. Midlertidige gule skilt ved vegarbeid gjelder foran de permanente.',
  opplysningsskilt:
    'Opplysningen gjelder stedet eller strekningen skiltet står ved. Mange av skiltene (motorveg, motortrafikkveg, gatetun, envegskjøring, kollektivfelt) gjelder til et eget sluttskilt opphever dem.',
  serviceskilt:
    'Serviceskilt gir informasjon om tilbud og tjenester langs vegen. De pålegger ingen plikter og har ingen rekkevidde å huske til prøven.',
  vegvisningsskilt:
    'Vegvisningsskilt gir informasjon om veger, reisemål og avstander. De pålegger ingen plikter, men hjelper deg å planlegge feltvalg i god tid.',
  underskilt:
    'Underskilt gjelder aldri alene — de presiserer eller utvider betydningen av hovedskiltet de henger under, og følger hovedskiltets rekkevidde.',
  markeringsskilt:
    'Markeringsskilt markerer selve stedet — en hindring, kurve eller kant — og gjelder der de står.',
};

export default function TrafficSignDetailPage() {
  const { categorySlug, signSlug } = useParams<{ categorySlug: string; signSlug: string }>();
  const navigate = useNavigate();

  // Fetch the sign
  const sign = useMemo(() => {
    return categorySlug && signSlug ? getTrafficSignBySlug(categorySlug, signSlug) : undefined;
  }, [categorySlug, signSlug]);

  // Fetch the category
  const category = useMemo(() => {
    return categorySlug ? getCategoryBySlug(categorySlug) : undefined;
  }, [categorySlug]);

  // Clean up visualDescription by removing trailing period if it exists
  const cleanVisualDescription = useMemo(() => {
    if (!sign || !sign.visualDescription) return '';
    return sign.visualDescription.endsWith('.')
      ? sign.visualDescription.slice(0, -1)
      : sign.visualDescription;
  }, [sign]);

  // Fetch signs that this sign might be confused with
  const confusedWithSigns = useMemo(() => {
    if (!sign || !sign.confusedWith) return [];
    return trafficSigns.filter((s) => sign.confusedWith?.includes(s.id));
  }, [sign]);

  if (!sign || !category || !category.isActive) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
        <Helmet>
          <title>Fant ikke skiltet | Teori-test.no</title>
          <meta name="robots" content="noindex, nofollow" />
        </Helmet>
        <div style={{
          maxWidth: '500px',
          margin: '0 auto',
          padding: 'var(--spacing-xl)',
          backgroundColor: 'var(--color-bg)',
          borderRadius: 'var(--radius-lg)',
          border: '1px solid var(--color-border)',
          boxShadow: 'var(--shadow-md)'
        }}>
          <span style={{ fontSize: '3rem', display: 'block', marginBottom: 'var(--spacing-sm)' }}>🔍</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: 'var(--spacing-sm)' }}>
            Fant ikke skiltet
          </h1>
          <p style={{ color: 'var(--color-text-light)', marginBottom: 'var(--spacing-lg)' }}>
            Beklager, vi fant ikke det trafikkskiltet du lette etter. Det kan ha blitt flyttet eller slettet.
          </p>
          <button
            onClick={() => navigate('/trafikkskilt')}
            style={{
              padding: '12px 24px',
              backgroundColor: 'var(--color-primary)',
              color: '#ffffff',
              border: 'none',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'background-color 0.2s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary)')}
          >
            Tilbake til skiltbanken
          </button>
        </div>
      </div>
    );
  }

  const signTitleName = sign.displayName || sign.name;
  const isUnderskilt = category.slug === 'underskilt';
  const seoTitle = isUnderskilt
    ? `${signTitleName}-underskiltet (${sign.code}) | Hva betyr skiltet?`
    : `${signTitleName}-skiltet (${sign.code}) | Hva betyr skiltet?`;
  const seoDesc = isUnderskilt
    ? `Lær hva ${signTitleName.toLowerCase()}-underskiltet betyr, hvordan det presiserer hovedskiltet, og hvilken vanlig misforståelse du må passe på til teoriprøven.`
    : `Lær hva ${signTitleName.toLowerCase()}-skiltet betyr, hva du skal gjøre, og hvilken vanlig misforståelse du må passe på til teoriprøven.`;

  // ImageObject structured data for Google Images
  const imageStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ImageObject',
    contentUrl: `https://teori-test.no${sign.imagePath}`,
    url: `https://teori-test.no/trafikkskilt/${category.slug}/${sign.slug}`,
    name: `Skilt ${sign.code} ${signTitleName}`,
    description: cleanVisualDescription || seoDesc,
    caption: `Skilt ${sign.code} ${signTitleName} – norsk trafikkskilt`,
    representativeOfPage: true,
    inLanguage: 'nb',
  };

  // FAQPage structured data generated from existing sign fields
  const faqEntries = [
    {
      '@type': 'Question',
      name: `Hva betyr skilt ${sign.code} ${signTitleName}?`,
      acceptedAnswer: {
        '@type': 'Answer',
        text: cleanVisualDescription
          ? `${sign.shortExplanation} Kjennetegn: ${cleanVisualDescription}.`
          : sign.shortExplanation,
      },
    },
    {
      '@type': 'Question',
      name: `Hva er en vanlig misforståelse om ${signTitleName.toLowerCase()}-skiltet?`,
      acceptedAnswer: { '@type': 'Answer', text: sign.theoryTrap },
    },
    ...(sign.whatToDo && sign.whatToDo.length > 0
      ? [
          {
            '@type': 'Question',
            name: `Hva skal du gjøre når du ser ${signTitleName.toLowerCase()}-skiltet?`,
            acceptedAnswer: { '@type': 'Answer', text: sign.whatToDo.join(' ') },
          },
        ]
      : []),
    // Kuraterte FAQ for skilt med mye søketrafikk (trafficSignExtras.ts)
    ...(getSignExtra(sign.slug)?.faq ?? []).map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
    // Auto-genererte FAQ fra eksisterende felt (alle skilt)
    ...(sign.aliases && sign.aliases.length > 0
      ? [
          {
            '@type': 'Question',
            name: `Hva kalles ${signTitleName.toLowerCase()}-skiltet i dagligtale?`,
            acceptedAnswer: {
              '@type': 'Answer',
              text: `Skiltet kalles også ${sign.aliases.join(', ')}.${cleanVisualDescription ? ` Du kjenner det igjen slik: ${cleanVisualDescription}.` : ''}`,
            },
          },
        ]
      : []),
    ...(categoryValidityNotes[category.slug]
      ? [
          {
            '@type': 'Question',
            name: 'Hvor lenge gjelder skiltet?',
            acceptedAnswer: { '@type': 'Answer', text: categoryValidityNotes[category.slug] },
          },
        ]
      : []),
  ];
  const faqStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqEntries,
  };

  // BreadcrumbList structured data (matches the visible breadcrumb)
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Skiltguiden', item: 'https://teori-test.no/trafikkskilt' },
      { '@type': 'ListItem', position: 2, name: category.name, item: `https://teori-test.no/trafikkskilt/${category.slug}` },
      { '@type': 'ListItem', position: 3, name: signTitleName },
    ],
  };

  return (
    <div className="container" style={{ paddingBottom: 'var(--spacing-2xl)' }}>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDesc} />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDesc} />
        <script type="application/ld+json">
          {JSON.stringify(imageStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqStructuredData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
      </Helmet>

      {/* Breadcrumbs */}
      <nav style={{ marginBottom: 'var(--spacing-lg)', fontSize: '0.9rem' }}>
        <Link to="/trafikkskilt" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
          Skiltguiden
        </Link>
        <span style={{ color: 'var(--color-text-light)', margin: '0 8px' }}>/</span>
        <Link to={`/trafikkskilt/${category.slug}`} style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
          {category.name}
        </Link>
        <span style={{ color: 'var(--color-text-light)', margin: '0 8px' }}>/</span>
        <span style={{ color: 'var(--color-text-light)' }}>{signTitleName}</span>
      </nav>

      {/* Details layout: Split into visual/image block and text content */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr',
        gap: 'var(--spacing-xl)',
      }}>
        {/* Top/Main details card */}
        <div style={{
          backgroundColor: 'var(--color-bg)',
          border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-xl)',
          padding: 'var(--spacing-xl)',
          boxShadow: 'var(--shadow-sm)',
          display: 'grid',
          gridTemplateColumns: '1fr',
          gap: 'var(--spacing-xl)',
        }}>
          {/* Layout for image and basic info */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            gap: 'var(--spacing-xl)',
            alignItems: 'center',
          }}>
            {/* Sign Image Frame */}
            <div style={{
              flex: '1 1 240px',
              maxWidth: '300px',
              aspectRatio: '1',
              backgroundColor: 'var(--color-bg-secondary)',
              borderRadius: 'var(--radius-lg)',
              padding: 'var(--spacing-lg)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto',
            }}>
              <img
                src={sign.imagePath}
                alt={cleanVisualDescription ? `${cleanVisualDescription}, skilt ${sign.code} ${signTitleName}` : `Skilt ${sign.code} ${signTitleName} – norsk trafikkskilt`}
                style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
              />
            </div>

            {/* Title and Short Explanation */}
            <div style={{ flex: '2 1 300px' }}>
              <div style={{ display: 'inline-block', padding: '2px 8px', borderRadius: '4px', backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--color-primary)', fontSize: '0.85rem', fontWeight: 700, marginBottom: 'var(--spacing-sm)', fontFamily: 'monospace' }}>
                Offentlig skilt nr. {sign.code}
              </div>
              <h1 style={{ fontSize: '2.25rem', fontWeight: 800, margin: '0 0 var(--spacing-sm) 0', letterSpacing: '-0.02em' }}>
                {signTitleName}-skiltet
              </h1>
              <h2 style={{ fontSize: '1.15rem', color: 'var(--color-text)', fontWeight: 600, marginTop: 'var(--spacing-md)', marginBottom: 'var(--spacing-xs)' }}>
                Kort forklart
              </h2>
              <p style={{ fontSize: '1.05rem', color: 'var(--color-text)', lineHeight: '1.6', margin: 0 }}>
                {sign.shortExplanation}
              </p>
              {sign.visualDescription && (
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginTop: '8px', margin: 0, fontStyle: 'italic' }}>
                  Kjennetegn: {sign.visualDescription}
                </p>
              )}
              {sign.aliases && sign.aliases.length > 0 && (
                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginTop: '4px', margin: 0 }}>
                  Kalles også: {sign.aliases.join(', ')}.
                </p>
              )}

              {/* Practice CTA */}
              <div style={{ marginTop: 'var(--spacing-lg)' }}>
                <Link
                  to="/quiz/skilt"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    padding: '12px 24px',
                    backgroundColor: 'var(--color-primary)',
                    color: '#ffffff',
                    textDecoration: 'none',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: 600,
                    boxShadow: 'var(--shadow-sm)',
                    transition: 'all 0.2s ease',
                  }}
                  onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)')}
                  onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary)')}
                >
                  📝 Øv på skilt i quiz
                </Link>
              </div>
            </div>
          </div>

          {/* Long/Detail description if available */}
          {sign.longExplanation && (
            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--spacing-lg)' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 'var(--spacing-xs)' }}>
                Betydning og virkemåte
              </h2>
              <p style={{ color: 'var(--color-text)', lineHeight: '1.6', fontSize: '1rem' }}>
                {sign.longExplanation}
              </p>
            </div>
          )}

          {/* What to do (Actionable steps) */}
          {sign.whatToDo && sign.whatToDo.length > 0 && (
            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--spacing-lg)' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 'var(--spacing-sm)' }}>
                Hva skal du gjøre i trafikken?
              </h2>
              <ol style={{ paddingLeft: '20px', margin: 0 }}>
                {sign.whatToDo.map((step, idx) => (
                  <li key={idx} style={{ marginBottom: '8px', color: 'var(--color-text)', fontSize: '0.975rem', lineHeight: '1.5' }}>
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          )}

          {/* Hvor møter du skiltet (kuratert for topp-skilt) */}
          {getSignExtra(sign.slug) && (
            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--spacing-lg)' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 'var(--spacing-xs)' }}>
                Hvor møter du skiltet?
              </h2>
              <p style={{ color: 'var(--color-text)', lineHeight: '1.6', fontSize: '1rem' }}>
                {getSignExtra(sign.slug)!.whereYouMeetIt}
              </p>
            </div>
          )}

          {/* Combinations section for Underskilts */}
          {category.slug === 'underskilt' && sign.combinations && sign.combinations.length > 0 && (
            <div style={{ borderTop: '1px solid var(--color-border)', paddingTop: 'var(--spacing-lg)', marginTop: 'var(--spacing-lg)' }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 'var(--spacing-md)' }}>
                Slik fungerer det i praksis (Skiltkombinasjon)
              </h2>
              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr',
                gap: 'var(--spacing-md)'
              }}>
                {sign.combinations.map((combo, idx) => (
                  <div
                    key={idx}
                    style={{
                      display: 'flex',
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      gap: 'var(--spacing-lg)',
                      backgroundColor: 'var(--color-bg-secondary)',
                      padding: 'var(--spacing-lg)',
                      borderRadius: 'var(--radius-lg)',
                      border: '1px solid var(--color-border)',
                      alignItems: 'center'
                    }}
                  >
                    {/* Visual post simulation */}
                    <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      gap: '6px',
                      backgroundColor: 'var(--color-bg)',
                      border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-md)',
                      padding: 'var(--spacing-md)',
                      width: '120px',
                      boxShadow: 'var(--shadow-sm)',
                      flexShrink: 0,
                      margin: '0 auto'
                    }}>
                      {/* Main sign */}
                      <div style={{
                        height: '70px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%'
                      }}>
                        <img
                          src={combo.mainSignImagePath}
                          alt={combo.mainSignName}
                          style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                        />
                      </div>
                      {/* Pole line divider */}
                      <div style={{ width: '2px', height: '8px', backgroundColor: 'var(--color-border)' }}></div>
                      {/* Underskilt */}
                      <div style={{
                        height: '45px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        padding: '2px',
                        backgroundColor: 'var(--color-bg-secondary)',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid rgba(0,0,0,0.05)'
                      }}>
                        <img
                          src={sign.imagePath}
                          alt={`Skilt ${sign.code} ${sign.displayName || sign.name}`}
                          style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                        />
                      </div>
                    </div>

                    {/* Explanatory text */}
                    <div style={{ flex: '1 1 240px' }}>
                      <span style={{
                        fontSize: '0.75rem',
                        fontWeight: 700,
                        backgroundColor: 'rgba(59, 130, 246, 0.1)',
                        color: 'var(--color-primary)',
                        padding: '2px 6px',
                        borderRadius: '4px',
                        textTransform: 'uppercase',
                        display: 'inline-block',
                        marginBottom: '6px'
                      }}>
                        {combo.relationType}
                      </span>
                      <h4 style={{ margin: '0 0 6px 0', fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-text)' }}>
                        Kombinasjon: {combo.mainSignName} (Nr. {combo.mainSignCode}) + {sign.displayName || sign.name}
                      </h4>
                      <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5', color: 'var(--color-text-light)' }}>
                        <strong>Lovlig betydning:</strong> {combo.combinedMeaning}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Theory Trap box */}
          {sign.theoryTrap && (
            <div style={{
              backgroundColor: 'rgba(239, 68, 68, 0.05)',
              borderLeft: '4px solid var(--color-error)',
              padding: 'var(--spacing-md) var(--spacing-lg)',
              borderRadius: '0 var(--radius-md) var(--radius-md) 0',
              marginTop: 'var(--spacing-sm)',
            }}>
              <h3 style={{ fontSize: '1.05rem', fontWeight: 700, color: 'var(--color-error)', marginBottom: '4px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                ⚠️ Vanlig misforståelse
              </h3>
              <p style={{ color: 'var(--color-text)', margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
                {sign.theoryTrap}
              </p>
            </div>
          )}
        </div>

        {/* Similar Signs / Confused With */}
        {confusedWithSigns.length > 0 && (
          <section>
            <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 'var(--spacing-md)' }}>
              Forveksles ofte med
            </h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
              gap: 'var(--spacing-md)',
            }}>
              {confusedWithSigns.map((confusedSign) => (
                <Link
                  key={confusedSign.id}
                  to={`/trafikkskilt/${confusedSign.category}/${confusedSign.slug}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 'var(--spacing-md)',
                    padding: 'var(--spacing-md)',
                    backgroundColor: 'var(--color-bg)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-md)',
                    textDecoration: 'none',
                    color: 'var(--color-text)',
                    transition: 'all 0.2s ease',
                  }}
                  className="practice-card"
                >
                  <img
                    src={confusedSign.imagePath}
                    alt={`Skilt ${confusedSign.code} ${confusedSign.displayName || confusedSign.name}`}
                    style={{ width: '56px', height: '56px', objectFit: 'contain' }}
                    loading="lazy"
                  />
                  <div style={{ minWidth: 0 }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, color: 'var(--color-text-light)', textTransform: 'uppercase' }}>
                      Nr. {confusedSign.code}
                    </span>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: 600, margin: '2px 0 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {confusedSign.displayName || confusedSign.name}
                    </h3>
                    <p style={{ fontSize: '0.8rem', color: 'var(--color-text-light)', margin: '2px 0 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                      {confusedSign.shortExplanation}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Synlig FAQ: kuratert (topp-skilt) + autogenerert fra aliases/gyldighet (alle skilt) */}
        {(() => {
          const visibleFaq = [
            ...(getSignExtra(sign.slug)?.faq ?? []),
            ...(sign.aliases && sign.aliases.length > 0
              ? [{
                  question: `Hva kalles ${(sign.displayName || sign.name).toLowerCase()}-skiltet i dagligtale?`,
                  answer: `Skiltet kalles også ${sign.aliases.join(', ')}.${cleanVisualDescription ? ` Du kjenner det igjen slik: ${cleanVisualDescription}.` : ''}`,
                }]
              : []),
            ...(categoryValidityNotes[category.slug]
              ? [{ question: 'Hvor lenge gjelder skiltet?', answer: categoryValidityNotes[category.slug] }]
              : []),
          ];
          if (visibleFaq.length === 0) return null;
          return (
            <section style={{ maxWidth: '760px' }}>
              <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 'var(--spacing-md)' }}>
                Ofte stilte spørsmål om {(sign.displayName || sign.name).toLowerCase()}-skiltet
              </h2>
              {visibleFaq.map((item) => (
                <div key={item.question} style={{ marginBottom: 'var(--spacing-lg)' }}>
                  <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '6px' }}>
                    {item.question}
                  </h3>
                  <p style={{ color: 'var(--color-text-light)', lineHeight: '1.6', margin: 0 }}>
                    {item.answer}
                  </p>
                </div>
              ))}
            </section>
          );
        })()}

        {/* Sources block */}
        {sign.sources && sign.sources.length > 0 && (
          <footer style={{
            fontSize: '0.85rem',
            color: 'var(--color-text-light)',
            marginTop: 'var(--spacing-md)',
            borderTop: '1px solid var(--color-border)',
            paddingTop: 'var(--spacing-md)',
          }}>
            <span style={{ fontWeight: 600 }}>Kilder og lovhjemmel: </span>
            {sign.sources.map((source, idx) => (
              <span key={idx}>
                {idx > 0 && ', '}
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: 'var(--color-primary)', textDecoration: 'none' }}
                >
                  {source.name}
                </a>
              </span>
            ))}
          </footer>
        )}
      </div>
    </div>
  );
}

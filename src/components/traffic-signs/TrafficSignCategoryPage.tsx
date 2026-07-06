import { useMemo } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getCategoryBySlug, getTrafficSignsByCategory } from '../../lib/trafficSigns';
import '../../theory.css';

export default function TrafficSignCategoryPage() {
  const { categorySlug } = useParams<{ categorySlug: string }>();

  // Fetch category details
  const category = useMemo(() => {
    return categorySlug ? getCategoryBySlug(categorySlug) : undefined;
  }, [categorySlug]);

  // Fetch signs for category (only if active)
  const signs = useMemo(() => {
    if (category && category.isActive && categorySlug) {
      return getTrafficSignsByCategory(categorySlug);
    }
    return [];
  }, [category, categorySlug]);

  // If category is not found or not active, render the "Kommer snart" fallback with noindex.
  if (!category || !category.isActive) {
    return (
      <div className="container" style={{ textAlign: 'center', padding: 'var(--spacing-2xl) var(--spacing-lg)' }}>
        <Helmet>
          <title>Kommer snart - Trafikkskilt | Teori-test.no</title>
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
          <span style={{ fontSize: '3rem', display: 'block', marginBottom: 'var(--spacing-sm)' }}>🚧</span>
          <h1 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: 'var(--spacing-sm)' }}>
            {category ? category.name : 'Ukjent kategori'}
          </h1>
          <p style={{ color: 'var(--color-text-light)', marginBottom: 'var(--spacing-lg)', fontSize: '1rem', lineHeight: '1.6' }}>
            Denne skiltkategorien er under utvikling og vil bli tilgjengelig om kort tid. Vi jobber med å legge til detaljerte forklaringer og vanlige misforståelser for alle disse skiltene.
          </p>
          <Link
            to="/trafikkskilt"
            style={{
              display: 'inline-block',
              padding: '12px 24px',
              backgroundColor: 'var(--color-primary)',
              color: '#ffffff',
              textDecoration: 'none',
              borderRadius: 'var(--radius-sm)',
              fontWeight: 600,
              boxShadow: 'var(--shadow-sm)',
              transition: 'background-color 0.2s ease',
            }}
            onMouseOver={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary-dark)')}
            onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'var(--color-primary)')}
          >
            Tilbake til skiltbanken
          </Link>
        </div>
      </div>
    );
  }

  // Active category rendering
  const seoTitle = category.slug === 'forbudsskilt'
    ? 'Forbudsskilt – alle forbudsskiltene med forklaring'
    : category.slug === 'fareskilt'
    ? 'Fareskilt (varselskilt) – alle med forklaring'
    : category.slug === 'opplysningsskilt'
    ? 'Opplysningsskilt – alle blå og hvite skilt med forklaring'
    : category.slug === 'pabudsskilt'
    ? 'Påbudsskilt (obligatoriske skilt) – alle med forklaring'
    : category.slug === 'underskilt'
    ? 'Underskilt | Trafikkskilt til teoriprøven'
    : `${category.name} - Forklaringer og regler til teoriprøven | Teori-test.no`;

  const seoDesc = category.slug === 'forbudsskilt'
    ? 'Hva er forbudsskilt? Se alle de runde skiltene med rød ring – fartsgrenser, innkjøring forbudt, stans og parkering – med forklaring og vanlige teorifeller.'
    : category.slug === 'fareskilt'
    ? 'Hva er fareskilt? Se alle de trekantede skiltene med rød kant – elg, barn, farlig sving og glatt veg – med forklaring og hva du skal gjøre.'
    : category.slug === 'opplysningsskilt'
    ? 'Hva betyr opplysningsskilt? Se de firkantede blå og hvite skiltene – gangfelt, motorveg, parkering og envegskjøring – med forklaring til teoriprøven.'
    : category.slug === 'pabudsskilt'
    ? 'Hva er påbudsskilt? De runde blå skiltene med hvite piler kalles også obligatoriske skilt. Se alle med forklaring og vanlige misforståelser.'
    : category.slug === 'underskilt'
    ? 'Lær hva underskilt betyr til teoriprøven. Se hvordan underskilt presiserer avstand, tid, kjøretøygrupper, unntak og gyldighet for hovedskilt.'
    : `Lær alt om ${category.name.toLowerCase()} til teoriprøven. Her finner du en oversikt over alle skilt i denne gruppen med forklaringer, kjøreregler og vanlige misforståelser.`;

  // BreadcrumbList structured data (matches the visible breadcrumb)
  const breadcrumbStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Skiltbanken', item: 'https://teori-test.no/trafikkskilt' },
      { '@type': 'ListItem', position: 2, name: category.name },
    ],
  };

  return (
    <div className="container" style={{ paddingBottom: 'var(--spacing-2xl)' }}>
      <Helmet>
        <title>{seoTitle}</title>
        <meta name="description" content={seoDesc} />
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDesc} />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbStructuredData)}
        </script>
        {category.faq && category.faq.length > 0 && (
          <script type="application/ld+json">
            {JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: category.faq.map((item) => ({
                '@type': 'Question',
                name: item.question,
                acceptedAnswer: { '@type': 'Answer', text: item.answer },
              })),
            })}
          </script>
        )}
      </Helmet>

      {/* Breadcrumb navigation */}
      <nav style={{ marginBottom: 'var(--spacing-md)', fontSize: '0.9rem' }}>
        <Link to="/trafikkskilt" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>
          Skiltbanken
        </Link>
        <span style={{ color: 'var(--color-text-light)', margin: '0 8px' }}>/</span>
        <span style={{ color: 'var(--color-text-light)' }}>{category.name}</span>
      </nav>

      {/* Header section */}
      <section style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <h1 style={{ fontSize: '2.25rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 'var(--spacing-sm)' }}>
          {category.name}
        </h1>
        <p style={{ color: 'var(--color-text-light)', fontSize: '1.1rem', lineHeight: '1.6', maxWidth: '720px' }}>
          {category.description}
        </p>
        {category.synonymIntro && (
          <p style={{ color: 'var(--color-text-light)', fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '720px', marginTop: 'var(--spacing-sm)' }}>
            {category.synonymIntro}
          </p>
        )}
      </section>

      {/* Grid of signs in the category */}
      <section>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 'var(--spacing-lg)',
        }}>
          {signs.map((sign) => (
            <div
              key={sign.id}
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                padding: 'var(--spacing-lg)',
                backgroundColor: 'var(--color-bg)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-lg)',
                boxShadow: 'var(--shadow-sm)',
                transition: 'all 0.2s ease',
              }}
              className="practice-card"
            >
              <div>
                {/* Sign image centered */}
                <div style={{
                  height: '110px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 'var(--spacing-md)',
                  backgroundColor: 'var(--color-bg-secondary)',
                  borderRadius: 'var(--radius-md)',
                  padding: 'var(--spacing-md)',
                }}>
                  <img
                    src={sign.imagePath}
                    alt={`Skilt ${sign.code} ${sign.displayName || sign.name}`}
                    style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain' }}
                    loading="lazy"
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'baseline', gap: '8px', marginBottom: '6px' }}>
                  <span style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    color: 'var(--color-primary)',
                    padding: '2px 6px',
                    borderRadius: '4px',
                    fontFamily: 'monospace',
                  }}>
                    {sign.code}
                  </span>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700, margin: 0, color: 'var(--color-text)' }}>
                    {sign.displayName || sign.name}
                  </h3>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: '1.5', marginBottom: 'var(--spacing-sm)' }}>
                  {sign.shortExplanation}
                </p>

                {sign.theoryTrap && (
                  <div style={{
                    fontSize: '0.85rem',
                    backgroundColor: 'rgba(239, 68, 68, 0.05)',
                    borderLeft: '3px solid var(--color-error)',
                    padding: '8px 12px',
                    borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                    marginBottom: 'var(--spacing-md)',
                  }}>
                    <strong style={{ color: 'var(--color-error)' }}>Vanlig misforståelse: </strong>
                    <span style={{ color: 'var(--color-text)' }}>{sign.theoryTrap}</span>
                  </div>
                )}
              </div>

              <div>
                <Link
                  to={`/trafikkskilt/${category.slug}/${sign.slug}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px',
                    backgroundColor: 'var(--color-bg-secondary)',
                    border: '1px solid var(--color-border)',
                    borderRadius: 'var(--radius-sm)',
                    color: 'var(--color-text)',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 600,
                    transition: 'all 0.2s ease',
                    textAlign: 'center',
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-primary)';
                    e.currentTarget.style.color = 'var(--color-primary)';
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.borderColor = 'var(--color-border)';
                    e.currentTarget.style.color = 'var(--color-text)';
                  }}
                >
                  Les mer og se regler →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Quiz CTA */}
      <section style={{
        marginTop: 'var(--spacing-2xl)',
        textAlign: 'center',
        padding: 'var(--spacing-xl)',
        backgroundColor: 'var(--color-bg)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        boxShadow: 'var(--shadow-sm)',
      }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: 'var(--spacing-sm)' }}>
          Kan du skiltene i denne gruppen?
        </h2>
        <p style={{ color: 'var(--color-text-light)', marginBottom: 'var(--spacing-md)' }}>
          Ta en kort skiltquiz og se hvor mange du kjenner igjen.
        </p>
        <Link
          to="/quiz/skilt"
          style={{
            display: 'inline-block',
            padding: '12px 28px',
            backgroundColor: 'var(--color-primary)',
            color: '#ffffff',
            borderRadius: 'var(--radius-sm)',
            textDecoration: 'none',
            fontWeight: 600,
          }}
        >
          Start skiltquiz
        </Link>
      </section>

      {/* FAQ */}
      {category.faq && category.faq.length > 0 && (
        <section style={{ marginTop: 'var(--spacing-2xl)', maxWidth: '760px' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: 'var(--spacing-lg)' }}>
            Ofte stilte spørsmål om {category.name.toLowerCase()}
          </h2>
          {category.faq.map((item) => (
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
      )}
    </div>
  );
}

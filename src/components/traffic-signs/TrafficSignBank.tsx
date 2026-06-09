import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { getAllCategories, searchTrafficSigns } from '../../lib/trafficSigns';
import { trafficSigns } from '../../data/trafficSigns';
import '../../theory.css';

export default function TrafficSignBank() {
  const [searchQuery, setSearchQuery] = useState('');

  const faqItems = useMemo(() => [
    {
      question: "Hvor mange trafikkskilt er det i Norge?",
      answer: "Det finnes nesten 300 offisielle trafikkskilt i Norge, fordelt på 9 grupper som fareskilt, forbudsskilt, påbudsskilt, opplysningsskilt og vikepliktskilt. Skiltbanken på teori-test.no dekker 212 av de viktigste med forklaringer og teorifeller."
    },
    {
      question: "Hva er forskjellen på fareskilt og forbudsskilt?",
      answer: "Fareskilt varsler om fare og krever at du tilpasser fart og oppmerksomhet — de forbyr ikke noe. Forbudsskilt forbyr en bestemt handling eller kjøremåte, for eksempel innkjøring eller parkering."
    },
    {
      question: "Hvilke skilt er viktigst til teoriprøven?",
      answer: "Vikepliktskilt (202), stoppskilt (204), forkjørsvegskilt (206), innkjøring forbudt (302) og forbikjøringsforbud (334) er blant de mest testede på teoriprøven. Underskilt er også viktige fordi de kan endre hvordan du tolker hovedskiltet."
    },
    {
      question: "Hva betyr underskilt?",
      answer: "Underskilt står under et hovedskilt og presiserer hvem skiltet gjelder for, hvor langt det gjelder, eller hvilke unntak som finnes. På teoriprøven er underskilt viktige fordi de kan endre betydningen av hovedskiltet."
    }
  ], []);

  const faqSchema = useMemo(() => ({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  }), [faqItems]);

  // Fetch all categories and the signs for the active one
  const categories = useMemo(() => getAllCategories(), []);
  
  // Get featured signs from mixed categories for the preview list
  const featuredSigns = useMemo(() => {
    const featuredCodes = ['202', '204', '206', '302', '334', '370', '372', '406', '524'];
    return featuredCodes
      .map(code => trafficSigns.find(sign => sign.code === code))
      .filter((sign): sign is typeof trafficSigns[0] => !!sign);
  }, []);

  // Search results
  const searchResults = useMemo(() => {
    return searchTrafficSigns(searchQuery);
  }, [searchQuery]);

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <div className="container" style={{ paddingBottom: 'var(--spacing-2xl)' }}>
      <Helmet>
        <title>Trafikkskilt og skiltregler for teoriprøven | Teori-test.no</title>
        <meta
          name="description"
          content="Søk i skiltbanken og lær alle trafikkskiltene til teoriprøven for personbil (klasse B). Se forklaringer, kjøreregler og typiske teorifeller."
        />
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      {/* Hero / Header Section */}
      <section style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)', marginTop: 'var(--spacing-md)' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 'var(--spacing-md)' }}>
          Trafikkskilt til teoriprøven
        </h1>
        <p style={{ color: 'var(--color-text-light)', maxWidth: '720px', margin: '0 auto 16px auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
          På teoriprøven klasse B møter du skilt fra alle skiltgrupper: vikepliktsskilt, fareskilt, forbudsskilt, påbudsskilt og opplysningsskilt. Du må ikke bare kjenne igjen skiltet, men også forstå hva det krever av deg i trafikken.
        </p>
        <p style={{ color: 'var(--color-text-light)', maxWidth: '720px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.6' }}>
          Søk etter skilt med navn, skilt nummer eller beskrivelse av hvordan skiltet ser ut – for eksempel “blått skilt med hvit pil”, “rødt skilt med hvit strek” eller “skilt 204”.
        </p>
      </section>

      {/* Interactive Search Section */}
      <section style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <div style={{ position: 'relative', maxWidth: '600px', margin: '0 auto' }}>
          <input
            type="text"
            placeholder="Søk etter navn, nummer eller utseende (f.eks. blått skilt med hvit pil)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              padding: '16px',
              fontSize: '1.05rem',
              borderRadius: 'var(--radius-md)',
              border: '1px solid var(--color-border)',
              backgroundColor: 'var(--color-bg)',
              color: 'var(--color-text)',
              boxShadow: 'var(--shadow-sm)',
              outline: 'none',
              transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
            }}
            onFocus={(e) => {
              e.target.style.borderColor = 'var(--color-primary)';
              e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.15)';
            }}
            onBlur={(e) => {
              e.target.style.borderColor = 'var(--color-border)';
              e.target.style.boxShadow = 'var(--shadow-sm)';
            }}
          />
          {searchQuery && (
            <button
              onClick={handleClearSearch}
              style={{
                position: 'absolute',
                right: '16px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: 'var(--color-text-light)',
                cursor: 'pointer',
                fontSize: '1.2rem',
                padding: '4px',
              }}
              title="Nullstill søk"
            >
              ×
            </button>
          )}
        </div>

        {/* Search Results Dropdown/Grid */}
        {searchQuery && (
          <div style={{
            marginTop: 'var(--spacing-md)',
            padding: 'var(--spacing-lg)',
            backgroundColor: 'var(--color-bg)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--color-border)',
            boxShadow: 'var(--shadow-md)',
          }}>
            <h2 style={{ fontSize: '1.25rem', marginBottom: 'var(--spacing-md)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Søkeresultater ({searchResults.length})</span>
              <button 
                onClick={handleClearSearch}
                style={{ background: 'none', border: 'none', color: 'var(--color-primary)', cursor: 'pointer', fontSize: '0.875rem', fontWeight: 600 }}
              >
                Lukk søk
              </button>
            </h2>
            
            {searchResults.length === 0 ? (
              <p style={{ color: 'var(--color-text-light)', textAlign: 'center', padding: 'var(--spacing-lg) 0' }}>
                Ingen skilt matchet søket ditt. Prøv et annet ord eller skiltnummer.
              </p>
            ) : (
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
                gap: 'var(--spacing-md)',
              }}>
                {searchResults.map((sign) => (
                  <Link
                    key={sign.id}
                    to={`/trafikkskilt/${sign.category}/${sign.slug}`}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--spacing-md)',
                      padding: 'var(--spacing-sm)',
                      borderRadius: 'var(--radius-sm)',
                      border: '1px solid var(--color-border)',
                      textDecoration: 'none',
                      color: 'var(--color-text)',
                      transition: 'all 0.2s ease',
                      backgroundColor: 'var(--color-bg-secondary)',
                    }}
                    className="practice-card"
                  >
                    <img
                      src={sign.imagePath}
                      alt={sign.displayName || sign.name}
                      style={{ width: '48px', height: '48px', objectFit: 'contain' }}
                      loading="lazy"
                    />
                    <div style={{ minWidth: 0 }}>
                      <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-light)', textTransform: 'uppercase' }}>
                        Nr. {sign.code}
                      </span>
                      <h4 style={{ fontSize: '0.95rem', fontWeight: 600, margin: '2px 0 0 0', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                        {sign.displayName || sign.name}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            )}
          </div>
        )}
      </section>

      {/* Categories Grid */}
      <section id="categories" style={{ marginBottom: 'var(--spacing-2xl)' }}>
        <h2 style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 'var(--spacing-sm)' }}>
          Skiltgrupper
        </h2>
        <p style={{ color: 'var(--color-text-light)', fontSize: '1.05rem', lineHeight: '1.6', maxWidth: '800px', marginBottom: 'var(--spacing-lg)' }}>
          Trafikkskilt er delt inn i grupper etter funksjon. Noen skilt varsler om fare, noen gir forbud, noen påbyr en handling, og andre gir informasjon om vei, felt eller sted. Velg en skiltgruppe for å se skiltene, vanlige misforståelser og hva du skal gjøre i trafikken.
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 'var(--spacing-md)',
        }}>
          {categories.map((cat) => {
            const isClickable = cat.isActive;
            
            const cardInner = (
              <>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 'var(--spacing-xs)' }}>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--color-text)', margin: 0 }}>
                      {cat.name}
                    </h3>
                    {!isClickable && (
                      <span style={{
                        fontSize: '0.7rem',
                        fontWeight: 600,
                        backgroundColor: 'var(--color-bg-secondary)',
                        color: 'var(--color-text-light)',
                        padding: '2px 8px',
                        borderRadius: '9999px',
                        border: '1px solid var(--color-border)',
                        whiteSpace: 'nowrap',
                      }}>
                        Kommer snart
                      </span>
                    )}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: 'var(--spacing-md)', lineHeight: '1.5' }}>
                    {cat.description}
                  </p>
                </div>
                <div>
                  {isClickable ? (
                    <span
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        fontSize: '0.9rem',
                        fontWeight: 600,
                        color: 'var(--color-primary)',
                      }}
                    >
                      Utforsk gruppe →
                    </span>
                  ) : (
                    <span style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', fontStyle: 'italic' }}>
                      Under utvikling
                    </span>
                  )}
                </div>
              </>
            );

            const cardStyle = {
              position: 'relative' as const,
              backgroundColor: 'var(--color-bg)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-md)',
              padding: 'var(--spacing-lg)',
              display: 'flex',
              flexDirection: 'column' as const,
              justifyContent: 'space-between' as const,
              opacity: isClickable ? 1 : 0.75,
              transition: 'all 0.2s ease',
              boxShadow: 'var(--shadow-sm)',
              textDecoration: 'none',
              color: 'inherit',
            };

            if (isClickable) {
              return (
                <Link
                  key={cat.id}
                  to={`/trafikkskilt/${cat.slug}`}
                  style={cardStyle}
                  className="practice-card"
                >
                  {cardInner}
                </Link>
              );
            }

            return (
              <div
                key={cat.id}
                style={cardStyle}
              >
                {cardInner}
              </div>
            );
          })}
        </div>
      </section>

      {/* Compact Sign Quiz CTA Band */}
      <section className="sign-quiz-cta-band">
        <div className="sign-quiz-cta-content">
          <h3 className="sign-quiz-cta-title">Vil du teste skiltene?</h3>
          <p className="sign-quiz-cta-text">Ta en kort skiltquiz og se hvilke skilt du kjenner igjen.</p>
        </div>
        <Link
          to="/quiz/skilt"
          className="button"
          style={{ textDecoration: 'none' }}
        >
          Start skiltquiz
        </Link>
      </section>

      {/* Featured signs section */}
      <section style={{
        backgroundColor: 'var(--color-bg)',
        border: '1px solid var(--color-border)',
        borderRadius: 'var(--radius-lg)',
        padding: 'var(--spacing-xl)',
        boxShadow: 'var(--shadow-sm)',
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--spacing-lg)', flexWrap: 'wrap', gap: 'var(--spacing-sm)' }}>
          <div>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, margin: 0 }}>
              Viktige skilt til teoriprøven
            </h2>
            <p style={{ color: 'var(--color-text-light)', fontSize: '0.925rem', marginTop: '2px' }}>
              Et raskt utvalg av skilt du bør kjenne godt før teoriprøven.
            </p>
          </div>
          <button
            onClick={() => {
              document.getElementById('categories')?.scrollIntoView({ behavior: 'smooth' });
            }}
            style={{
              padding: '8px 16px',
              backgroundColor: 'var(--color-bg-secondary)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-sm)',
              color: 'var(--color-text)',
              fontSize: '0.9rem',
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.2s ease',
            }}
            className="practice-card"
          >
            Utforsk skiltbanken →
          </button>
        </div>

        <div className="featured-signs-grid">
          {featuredSigns.map((sign) => (
            <Link
              key={sign.id}
              to={`/trafikkskilt/${sign.category}/${sign.slug}`}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                textAlign: 'center',
                padding: 'var(--spacing-lg)',
                backgroundColor: 'var(--color-bg-secondary)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                textDecoration: 'none',
                color: 'var(--color-text)',
                transition: 'all 0.2s ease',
              }}
              className="practice-card"
            >
              <div style={{ height: '80px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 'var(--spacing-md)' }}>
                <img
                  src={sign.imagePath}
                  alt={sign.displayName || sign.name}
                  style={{ maxHeight: '100%', maxWidth: '80px', objectFit: 'contain' }}
                  loading="lazy"
                />
              </div>
              <span style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-text-light)', textTransform: 'uppercase' }}>
                Nr. {sign.code}
              </span>
              <h3 style={{ fontSize: '1rem', fontWeight: 600, margin: '4px 0 8px 0' }}>
                {sign.displayName || sign.name}
              </h3>
              <p style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', lineHeight: '1.4', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                {sign.shortExplanation}
              </p>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="theory-faq-section" style={{ marginTop: 'var(--spacing-2xl)' }}>
        <h2 className="theory-faq-title" style={{ fontSize: '1.75rem', fontWeight: 800, letterSpacing: '-0.02em', marginBottom: 'var(--spacing-lg)' }}>
          Ofte stilte spørsmål om trafikkskilt
        </h2>
        <div className="theory-faq-list">
          {faqItems.map((item, i) => (
            <div key={i} className="theory-faq-item">
              <h3 className="theory-faq-question">{item.question}</h3>
              <div className="theory-faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

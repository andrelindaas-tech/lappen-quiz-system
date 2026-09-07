const choices = [
  {
    title: 'Automat', badge: 'Kode 78', symbol: 'D',
    driving: 'Automatgir og elbil',
    learning: 'Ingen clutch eller manuelle girskift.',
    consideration: 'Vil du kjøre manuell senere, må du bestå en ny oppkjøring med manuelt gir.',
  },
  {
    title: 'Manuell', badge: 'Uten kode 78', symbol: 'H',
    driving: 'Både manuell og automat',
    learning: 'Du lærer å bruke clutch og skifte gir selv.',
    consideration: 'Mer å koordinere under opplæringen, men større valgfrihet når du skal låne eller leie bil.',
  },
];

export default function AutomatVsManuellSammenligning() {
  return (
    <div className="gear-comparison">
      <div className="gear-comparison-grid">
        {choices.map(choice => (
          <section className="gear-comparison-card" key={choice.title} aria-label={choice.title}>
            <header>
              <span className="gear-comparison-icon" aria-hidden="true">{choice.symbol}</span>
              <div><h3>{choice.title}</h3><span className="gear-comparison-badge">{choice.badge}</span></div>
            </header>
            <dl>
              <div><dt>Du kan kjøre</dt><dd>{choice.driving}</dd></div>
              <div><dt>Under opplæringen</dt><dd>{choice.learning}</dd></div>
              <div><dt>Vurder før du velger</dt><dd>{choice.consideration}</dd></div>
            </dl>
          </section>
        ))}
      </div>
      <p className="gear-comparison-note">Begge gjelder klasse B. Kode 78 begrenser girtypen – de øvrige grensene for førerkortklassen gjelder fortsatt.</p>
    </div>
  );
}

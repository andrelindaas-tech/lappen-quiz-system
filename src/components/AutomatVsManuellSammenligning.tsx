export default function AutomatVsManuellSammenligning() {
  return (
    <div style={{ width: '100%', maxWidth: 680, margin: '2rem auto' }}>
      <svg width="100%" viewBox="0 0 680 340" role="img" xmlns="http://www.w3.org/2000/svg">
        <title>Automatlappen vs manuell — sammenligning og kode 78</title>
        <desc>Visuell sammenligning av automat og manuell førerkort, med illustrasjon av kode 78</desc>

        <text style={{font: '500 15px var(--font-sans)', fill: 'var(--color-text-primary)'}} x="340" y="32" textAnchor="middle">Automat eller manuell?</text>

        {/* Automat-kort */}
        <rect x="40" y="52" width="270" height="230" rx="12" fill="#E1F5EE" stroke="#0F6E56" strokeWidth="0.5"/>
        <text style={{font: '500 14px var(--font-sans)', fill: '#085041'}} x="175" y="80" textAnchor="middle">Automatlappen</text>
        <text style={{font: '400 12px var(--font-sans)', fill: '#1D9E75'}} x="175" y="96" textAnchor="middle">Kode 78 i førerkortet</text>

        <text style={{font: '400 12px var(--font-sans)', fill: '#1D9E75'}} x="64" y="126">✓</text>
        <text style={{font: '400 12px var(--font-sans)', fill: 'var(--color-text-primary)'}} x="80" y="126">Elbil og moderne biler</text>
        <text style={{font: '400 12px var(--font-sans)', fill: '#1D9E75'}} x="64" y="148">✓</text>
        <text style={{font: '400 12px var(--font-sans)', fill: 'var(--color-text-primary)'}} x="80" y="148">Enklere opplæring</text>
        <text style={{font: '400 12px var(--font-sans)', fill: '#1D9E75'}} x="64" y="170">✓</text>
        <text style={{font: '400 12px var(--font-sans)', fill: 'var(--color-text-primary)'}} x="80" y="170">Ofte færre timer</text>
        <text style={{font: '400 12px var(--font-sans)', fill: '#1D9E75'}} x="64" y="192">✓</text>
        <text style={{font: '400 12px var(--font-sans)', fill: 'var(--color-text-primary)'}} x="80" y="192">Billigere opplæring</text>

        <text style={{font: '400 12px var(--font-sans)', fill: '#A32D2D'}} x="64" y="222">✗</text>
        <text style={{font: '400 12px var(--font-sans)', fill: 'var(--color-text-primary)'}} x="80" y="222">Ikke manuell bil</text>
        <text style={{font: '400 12px var(--font-sans)', fill: '#A32D2D'}} x="64" y="244">✗</text>
        <text style={{font: '400 12px var(--font-sans)', fill: 'var(--color-text-primary)'}} x="80" y="244">Begrenset bilutleie</text>
        <text style={{font: '400 12px var(--font-sans)', fill: '#A32D2D'}} x="64" y="266">✗</text>
        <text style={{font: '400 12px var(--font-sans)', fill: 'var(--color-text-primary)'}} x="80" y="266">Ny oppkjøring for manuell</text>

        {/* Manuell-kort */}
        <rect x="370" y="52" width="270" height="230" rx="12" fill="#E6F1FB" stroke="#185FA5" strokeWidth="0.5"/>
        <text style={{font: '500 14px var(--font-sans)', fill: '#0C447C'}} x="505" y="80" textAnchor="middle">Manuell</text>
        <text style={{font: '400 12px var(--font-sans)', fill: '#378ADD'}} x="505" y="96" textAnchor="middle">Ingen kode i førerkortet</text>

        <text style={{font: '400 12px var(--font-sans)', fill: '#185FA5'}} x="394" y="126">✓</text>
        <text style={{font: '400 12px var(--font-sans)', fill: 'var(--color-text-primary)'}} x="410" y="126">Kjør alle biler</text>
        <text style={{font: '400 12px var(--font-sans)', fill: '#185FA5'}} x="394" y="148">✓</text>
        <text style={{font: '400 12px var(--font-sans)', fill: 'var(--color-text-primary)'}} x="410" y="148">Full fleksibilitet</text>
        <text style={{font: '400 12px var(--font-sans)', fill: '#185FA5'}} x="394" y="170">✓</text>
        <text style={{font: '400 12px var(--font-sans)', fill: 'var(--color-text-primary)'}} x="410" y="170">Jobbbil og varebil</text>
        <text style={{font: '400 12px var(--font-sans)', fill: '#185FA5'}} x="394" y="192">✓</text>
        <text style={{font: '400 12px var(--font-sans)', fill: 'var(--color-text-primary)'}} x="410" y="192">Bilutleie i utlandet</text>

        <text style={{font: '400 12px var(--font-sans)', fill: '#854F0B'}} x="394" y="222">✗</text>
        <text style={{font: '400 12px var(--font-sans)', fill: 'var(--color-text-primary)'}} x="410" y="222">Flere timer på giring</text>
        <text style={{font: '400 12px var(--font-sans)', fill: '#854F0B'}} x="394" y="244">✗</text>
        <text style={{font: '400 12px var(--font-sans)', fill: 'var(--color-text-primary)'}} x="410" y="244">Litt dyrere opplæring</text>

        {/* Kode 78 badge legend - Centered group */}
        <g transform="translate(260, 290)">
          <rect x="0" y="0" width="46" height="24" rx="4" fill="#FAEEDA" stroke="#BA7517" strokeWidth="0.5"/>
          <text style={{font: '500 12px var(--font-sans)', fill: '#854F0B'}} x="23" y="16" textAnchor="middle">78</text>
          <text style={{font: '400 12px var(--font-sans)', fill: 'var(--color-text-secondary)'}} x="56" y="16">= kun automatgir</text>
        </g>

        {/* Trend */}
        <text style={{font: '400 12px var(--font-sans)', fill: 'var(--color-text-secondary)'}} x="340" y="335" textAnchor="middle">61% tok automat i 2024 — mot 6% i 2016</text>
      </svg>
    </div>
  )
}

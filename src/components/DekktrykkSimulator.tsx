import { useState } from 'react'
import './DekktrykkSimulator.css'

export default function DekktrykkSimulator() {
    const [pressure, setPressure] = useState<number>(1) // 0 = Low, 1 = Correct, 2 = High

    const getPressureLabel = () => {
        switch (pressure) {
            case 0: return 'For lavt lufttrykk'
            case 1: return 'Riktig lufttrykk'
            case 2: return 'For høyt lufttrykk'
            default: return ''
        }
    }

    const getPressureClass = () => {
        switch (pressure) {
            case 0: return 'low-pressure'
            case 1: return 'correct-pressure'
            case 2: return 'high-pressure'
            default: return ''
        }
    }

    return (
        <div className={`tire-pressure-simulator ${getPressureClass()}`}>
            <div className="simulator-card">
                <div className="simulator-header">
                    <h4>Lufttrykkets betydning</h4>
                    <span className="pressure-badge">{getPressureLabel()}</span>
                </div>

                {/* Dynamic SVG Visualizer */}
                <div className="visualizer-container">
                    <svg viewBox="0 0 400 240" className="tire-svg">
                        {/* Road surface */}
                        <line x1="20" y1="210" x2="380" y2="210" className="road-line" />
                        <line x1="20" y1="211" x2="380" y2="211" className="road-line-sub" />

                        {/* Static Alloy Rim (Wheel center) */}
                        <g className="wheel-hub">
                            <circle cx="200" cy="100" r="45" className="rim-outer" />
                            <circle cx="200" cy="100" r="35" className="rim-inner" />
                            {/* Spokes */}
                            <path d="M 200,65 L 200,135 M 165,100 L 235,100 M 175,75 L 225,125 M 175,125 L 225,75" className="rim-spokes" />
                            <circle cx="200" cy="100" r="10" className="rim-center" />
                        </g>

                        {/* TIRE PROFILE STATE 0: LOW PRESSURE (bulging, sagged) */}
                        <g className={`tire-state state-low ${pressure === 0 ? 'active' : ''}`}>
                            {/* Tire body */}
                            <path d="M 155,100 
                                     C 155,40 245,40 245,100 
                                     C 245,130 295,160 275,200 
                                     C 265,210 240,210 200,210
                                     C 160,210 135,210 125,200 
                                     C 105,160 155,130 155,100 Z" 
                                  className="tire-rubber" />
                            {/* Inner tube shadow / heat warning */}
                            <path d="M 165,100 C 165,50 235,50 235,100 C 235,125 275,150 255,185 C 240,195 220,195 200,195 C 180,195 160,195 145,185 C 125,150 165,125 165,100 Z" className="tire-inner-glow" />
                            
                            {/* Contact patch indicators (wear on shoulders) */}
                            <path d="M 125,210 L 160,210" className="contact-glow wear-edge" />
                            <path d="M 240,210 L 275,210" className="contact-glow wear-edge" />
                            <circle cx="142" cy="210" r="6" className="warning-dot" />
                            <circle cx="258" cy="210" r="6" className="warning-dot" />
                            
                            {/* Friction arrows */}
                            <path d="M 142,225 L 142,215 M 139,218 L 142,215 L 145,218" className="friction-arrow" />
                            <path d="M 258,225 L 258,215 M 255,218 L 258,215 L 261,218" className="friction-arrow" />
                        </g>

                        {/* TIRE PROFILE STATE 1: CORRECT PRESSURE (ideal roundness and contact) */}
                        <g className={`tire-state state-correct ${pressure === 1 ? 'active' : ''}`}>
                            {/* Tire body */}
                            <path d="M 155,100 
                                     C 155,45 245,45 245,100 
                                     C 245,130 280,150 265,200 
                                     C 255,210 230,210 200,210
                                     C 170,210 145,210 135,200 
                                     C 120,150 155,130 155,100 Z" 
                                  className="tire-rubber" />
                            
                            {/* Contact patch indicators (perfect even wear) */}
                            <path d="M 145,210 L 255,210" className="contact-glow wear-even" />
                            <circle cx="200" cy="210" r="5" className="success-dot" />
                        </g>

                        {/* TIRE PROFILE STATE 2: HIGH PRESSURE (over-rounded, center focus) */}
                        <g className={`tire-state state-high ${pressure === 2 ? 'active' : ''}`}>
                            {/* Tire body */}
                            <path d="M 155,100 
                                     C 155,50 245,50 245,100 
                                     C 245,130 270,150 255,200 
                                     C 248,207 215,212 200,212
                                     C 185,212 152,207 145,200 
                                     C 130,150 155,130 155,100 Z" 
                                  className="tire-rubber" />
                            
                            {/* Contact patch indicators (wear in center only) */}
                            <path d="M 185,211 L 215,211" className="contact-glow wear-center" />
                            <circle cx="200" cy="211" r="6" className="warning-dot" />
                            
                            {/* Friction arrow */}
                            <path d="M 200,225 L 200,216 M 197,219 L 200,216 L 203,219" className="friction-arrow" />
                        </g>
                    </svg>
                </div>

                {/* Interactive Slider and Options */}
                <div className="slider-section">
                    <div className="slider-labels">
                        <button 
                            className={`label-btn ${pressure === 0 ? 'active' : ''}`}
                            onClick={() => setPressure(0)}
                        >
                            For lavt
                        </button>
                        <button 
                            className={`label-btn ${pressure === 1 ? 'active' : ''}`}
                            onClick={() => setPressure(1)}
                        >
                            Riktig (Optimalt)
                        </button>
                        <button 
                            className={`label-btn ${pressure === 2 ? 'active' : ''}`}
                            onClick={() => setPressure(2)}
                        >
                            For høyt
                        </button>
                    </div>

                    <input 
                        type="range" 
                        min="0" 
                        max="2" 
                        step="1"
                        value={pressure} 
                        onChange={(e) => setPressure(parseInt(e.target.value))} 
                        className="pressure-range-slider"
                        aria-label="Lufttrykk-innstilling"
                    />
                </div>

                {/* Explanatory cards showing values dynamically */}
                <div className="info-cards-container">
                    {pressure === 0 && (
                        <div className="info-card warning-card animated">
                            <h5>⚠️ Konsekvenser ved for lavt lufttrykk</h5>
                            <p>
                                Dekket presses flatere ned mot veien og buler ut på sidene. Slitasjen skjer på 
                                ytterkantene (skuldrene), og dekket genererer langt mer varme.
                            </p>
                            <ul>
                                <li><strong>Stabilitet:</strong> Bilen blir myk, svampete og mindre stabil i svinger.</li>
                                <li><strong>Forbruk:</strong> Rullemotstanden øker kraftig, noe som gir mer drivstofforbruk/mindre rekkevidde.</li>
                                <li><strong>Fare:</strong> Økt risiko for punktering eller dekkeksplosjon på grunn av varme.</li>
                            </ul>
                            <div className="teori-point">
                                <strong>Teoripoeng:</strong> Bilen kan få vesentlig lengre bremselengde og dårligere evne til å gjøre en unnamanøver selv om dekkene ser fine ut fra avstand.
                            </div>
                        </div>
                    )}

                    {pressure === 1 && (
                        <div className="info-card success-card animated">
                            <h5>✅ Konsekvenser ved riktig lufttrykk</h5>
                            <p>
                                Dekket ligger flatt og jevnt mot asfalten. Vekten av bilen er optimalt fordelt 
                                over hele dekkets bredde.
                            </p>
                            <ul>
                                <li><strong>Veigrep:</strong> Gir maksimalt feste og kortest mulig bremselengde på alle underlag.</li>
                                <li><strong>Økonomi:</strong> Dekket slites jevnt og varer lengst mulig, med minimal rullemotstand.</li>
                                <li><strong>Sikkerhet:</strong> Stabil oppførsel i svinger og rask, presis unnamanøver-respons.</li>
                            </ul>
                            <div className="teori-point">
                                <strong>Teoripoeng:</strong> Riktig lufttrykk finner du i bilens instruksjonsbok eller på merkelapp i dørkarm/tanklokk. Aldri gjett basert på dekkets utseende.
                            </div>
                        </div>
                    )}

                    {pressure === 2 && (
                        <div className="info-card warning-card animated">
                            <h5>⚠️ Konsekvenser ved for høyt lufttrykk</h5>
                            <p>
                                Dekket blåses opp som en ballong. Slitasjen skjer kun på midten av slitebanen, 
                                og kontaktflaten mot veien blir mindre.
                            </p>
                            <ul>
                                <li><strong>Grep:</strong> Redusert kontaktflate gir markant dårligere veigrep, spesielt på vått føre.</li>
                                <li><strong>Komfort:</strong> Dekket blir steinhardt og absorberer ikke ujevnheter, som gir en ubehagelig kjøretur.</li>
                                <li><strong>Slitasje:</strong> Sliter ut midten av dekket for tidlig og ødelegger dekkets struktur.</li>
                            </ul>
                            <div className="teori-point">
                                <strong>Teoripoeng:</strong> For høyt trykk reduserer unnamanøver-grepet dramatisk fordi kontaktflaten er redusert, selv om trillemotstanden er lav.
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

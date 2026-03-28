export default function AuthorityPyramid() {
    return (
        <div style={{ width: '100%', maxWidth: '600px', margin: '2rem auto', display: 'flex', justifyContent: 'center' }}>
            <svg 
                viewBox="0 0 500 350" 
                style={{ width: '100%', height: 'auto', filter: 'drop-shadow(0 4px 6px rgba(0,0,0,0.05))' }}
            >
                <style>
                    {`
                        .pyramid-slice {
                            fill: var(--color-bg);
                            stroke: var(--color-text);
                            stroke-width: 5;
                            stroke-linejoin: round;
                            transition: all 0.3s ease;
                        }
                        .pyramid-slice:hover {
                            fill: var(--color-bg-secondary);
                        }
                        .pyramid-text {
                            fill: var(--color-text);
                            font-family: inherit;
                            font-size: 15px;
                            font-weight: 800;
                            text-anchor: middle;
                            pointer-events: none;
                        }
                        .icon-stroke {
                            stroke: var(--color-text);
                        }
                    `}
                </style>
                
                {/* Center X: 250. Base width 450. Total height 310. DX/DY = 0.725 */}

                {/* Level 1: Politi */}
                <g className="pyramid-slice-group">
                    {/* Top=250,10. Bottom Width=100_ish. */}
                    <path className="pyramid-slice" d="M 250 15 L 198 85 L 302 85 Z" />
                    
                    {/* Shield Icon */}
                    <svg x="238" y="28" width="24" height="28" viewBox="0 0 24 28" fill="none" className="icon-stroke" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2L4 5v6c0 5.5 3.8 10.7 8 12 4.2-1.3 8-6.5 8-12V5l-8-3z"/>
                        <circle cx="12" cy="11" r="3"/>
                    </svg>
                    <text x="250" y="75" className="pyramid-text">POLITI</text>
                </g>

                {/* Level 2: Lyssignal */}
                <g className="pyramid-slice-group">
                    <path className="pyramid-slice" d="M 191 95 L 140 165 L 360 165 L 309 95 Z" />
                    
                    {/* Traffic Light Icon */}
                    <svg x="238" y="100" width="24" height="36" viewBox="0 0 24 36" fill="var(--color-bg)" className="icon-stroke" strokeWidth="2.5" rx="4">
                        <rect x="4" y="2" width="16" height="32" rx="4" />
                        <circle cx="12" cy="8" r="3" fill="#ef4444" stroke="none" />
                        <circle cx="12" cy="18" r="3" fill="#eab308" stroke="none" />
                        <circle cx="12" cy="28" r="3" fill="#22c55e" stroke="none" />
                    </svg>
                    <text x="250" y="155" className="pyramid-text">LYSSIGNAL</text>
                </g>

                {/* Level 3: Skilt & Oppmerking */}
                <g className="pyramid-slice-group">
                    <path className="pyramid-slice" d="M 133 175 L 82 245 L 418 245 L 367 175 Z" />
                    
                    <g transform="translate(192, 185)">
                        {/* No U-turn / Forbidden circle */}
                        <circle cx="15" cy="15" r="12" fill="none" stroke="#ef4444" strokeWidth="3" />
                        <line x1="6" y1="24" x2="24" y2="6" stroke="#ef4444" strokeWidth="3" />
                        
                        {/* Yield / Danger Triangle */}
                        <polygon points="50,4 66,26 34,26" fill="none" stroke="#ef4444" strokeWidth="3" strokeLinejoin="round" />
                        
                        {/* Info / Mandatory Square */}
                        <rect x="74" y="7" width="16" height="16" fill="#3b82f6" rx="2" />
                        <line x1="82" y1="11" x2="82" y2="19" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
                    </g>
                    <text x="250" y="235" className="pyramid-text">SKILT & OPPMERKING</text>
                </g>

                {/* Level 4: Trafikkregler & Forskrifter */}
                <g className="pyramid-slice-group">
                    <path className="pyramid-slice" d="M 75 255 L 24 325 L 476 325 L 425 255 Z" />
                    <text x="250" y="300" className="pyramid-text" style={{ fontSize: '16px' }}>TRAFIKKREGLER & FORSKRIFTER</text>
                </g>

            </svg>
        </div>
    )
}

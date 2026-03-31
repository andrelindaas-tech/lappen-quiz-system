import { useState, useEffect } from 'react';
import './TrailerWeightSimulator.css';

function CarImageMask({ className }: { className: string }) {
    const [maskUrl, setMaskUrl] = useState<string>('');

    useEffect(() => {
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d', { willReadFrequently: true });
            if (!ctx) return;
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
            const data = imageData.data;
            
            for (let i = 0; i < data.length; i += 4) {
                const r = data[i];
                const g = data[i + 1];
                const b = data[i + 2];
                const a = data[i + 3];
                if (a === 0) continue;
                
                const brightness = (r * 0.299 + g * 0.587 + b * 0.114);
                
                // Makes bright pixels (white background) transparent, dark pixels opaque
                data[i + 3] = a * ((255 - brightness) / 255);
                data[i] = 0;
                data[i + 1] = 0;
                data[i + 2] = 0;
            }
            
            ctx.putImageData(imageData, 0, 0);
            setMaskUrl(canvas.toDataURL('image/png'));
        };
        img.src = '/suv-silhouette.png';
    }, []);

    const styleObj = maskUrl ? { 
        WebkitMaskImage: `url(${maskUrl})`, 
        maskImage: `url(${maskUrl})` 
    } : {};

    return <div className={className} style={styleObj} />;
}

export default function TrailerWeightSimulator() {
    const [carWeight, setCarWeight] = useState(2450);
    const [trailerWeight, setTrailerWeight] = useState(750);

    const totalWeight = carWeight + trailerWeight;

    // Logic
    let isLegal = false;
    let statusText = '';
    let explanationText = '';

    if (trailerWeight <= 750) {
        isLegal = true;
        statusText = 'Status: ✅ Lovlig';
        explanationText = 'Dette er lovlig. Tilhengerens tillatte totalvekt er 750 kg eller lavere. Da kan du alltid trekke den med klasse B, uansett om den samlede vekten for bil og henger overstiger 3500 kg (opptil maks 4250 kg).';
    } else if (totalWeight <= 3500) {
        isLegal = true;
        statusText = 'Status: ✅ Lovlig';
        explanationText = `Dette er lovlig med klasse B på grunn av «campingvogn-regelen». Siden hengeren er tyngre enn 750 kg, slår denne regelen inn: Den tillatte totalvekten for bil pluss henger må ikke overstige 3500 kg. Her er totalen ${totalWeight} kg.`;
    } else {
        isLegal = false;
        statusText = 'Status: ❌ Ulovlig';
        explanationText = `Her overstiger den samlede tillatte totalvekten (${totalWeight} kg) grensen på 3500 kg, og hengeren er tyngre enn 750 kg. For å kjøre dette lovlig trenger du klasse B96 eller BE.`;
    }

    return (
        <div className="trailer-sim-container">
            <h3 className="trailer-sim-header">Simulering av Hengerløsning med Klasse B</h3>
            
            <div className={`trailer-sim-visual ${isLegal ? 'legal' : 'illegal'}`}>
                {/* PNG Mask Car (User's Silhouette) - processed for transparent background */}
                <CarImageMask className="sim-image-car" />
                
                {/* Towbar connector */}
                <svg width="55" height="80" viewBox="0 0 55 80" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible', marginLeft: '-40px' }}>
                    <line className="sim-svg-towbar" x1="0" y1="62" x2="55" y2="62" strokeWidth="1.5" />
                </svg>

                {/* SVG Trailer (Box - Line Art Style) */}
                <svg width="120" height="80" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg" style={{ overflow: 'visible', marginLeft: '-5px' }}>
                    {/* Trailer Body Line Art */}
                    <rect className="sim-svg-trailer" x="0" y="42" width="85" height="20" rx="3" strokeWidth="1.5" />
                    
                    {/* Fender/Arch over wheel */}
                    <path className="sim-svg-trailer" d="M 34 62 A 13 13 0 0 1 60 62" strokeWidth="1.5" strokeLinecap="round" />
                    
                    {/* Trailer Wheel */}
                    <circle className="sim-svg-trailer" cx="47" cy="62" r="9" strokeWidth="1.5" />
                    <circle className="sim-svg-trailer" cx="47" cy="62" r="2" strokeWidth="1.5" />
                </svg>
            </div>

            <div className="trailer-sim-details">
                <div className="trailer-sim-details-total">Vogntogvekt (total): {totalWeight} kg</div>
            </div>

            <div className={`trailer-sim-explanation-box ${isLegal ? 'legal' : 'illegal'}`}>
                <div className={`trailer-sim-status-title ${isLegal ? 'legal' : 'illegal'}`}>
                    {statusText}
                </div>
                <div className="trailer-sim-text">
                    {explanationText}
                </div>
            </div>

            <div className="trailer-sim-controls">
                <div className="trailer-sim-control-group">
                    <div className="trailer-sim-control-label">
                        <span>Bilens tillatte totalvekt</span>
                        <span className="trailer-sim-control-value">{carWeight} kg</span>
                    </div>
                    <input 
                        type="range" 
                        min="1000" 
                        max="3500" 
                        step="50" 
                        value={carWeight} 
                        onChange={(e) => setCarWeight(Number(e.target.value))}
                        className="trailer-sim-slider"
                    />
                </div>

                <div className="trailer-sim-control-group">
                    <div className="trailer-sim-control-label">
                        <span>Tilhengerens tillatte totalvekt</span>
                        <span className="trailer-sim-control-value">{trailerWeight} kg</span>
                    </div>
                    <input 
                        type="range" 
                        min="500" 
                        max="3500" 
                        step="50" 
                        value={trailerWeight} 
                        onChange={(e) => setTrailerWeight(Number(e.target.value))}
                        className="trailer-sim-slider"
                    />
                </div>
            </div>
        </div>
    );
}

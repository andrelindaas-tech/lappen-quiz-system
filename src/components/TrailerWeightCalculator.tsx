import { useState } from 'react';
import './TrailerWeightCalculator.css';

export default function TrailerWeightCalculator() {
    const [carWeight, setCarWeight] = useState(2000);
    const [trailerWeight, setTrailerWeight] = useState(750);

    const totalWeight = carWeight + trailerWeight;

    // Logic for Rule 1 and Rule 2
    let isLegal = false;
    let statusText = '';
    let explanationText = '';

    if (trailerWeight <= 750) {
        // Condition A: Rule 1
        isLegal = true;
        statusText = '✅ Lovlig med Klasse B';
        explanationText = 'Selv om vogntogets totale vekt kan bli opptil 4250 kg, er dette lovlig fordi tilhengerens tillatte totalvekt er 750 kg eller lavere. (Dette kalles ofte "campingvogn-regelen").';
    } else if (totalWeight <= 3500) {
        // Condition B: Rule 2
        isLegal = true;
        statusText = '✅ Lovlig med Klasse B';
        explanationText = `Dette er lovlig. Siden tilhengeren er tyngre enn 750 kg, slår hovedregelen inn: Den tillatte totalvekten for bilen og hengeren til sammen må ikke overstige 3500 kg. Her er totalen ${totalWeight} kg.`;
    } else {
        // Condition C: Illegal
        isLegal = false;
        statusText = '❌ Ulovlig med vanlig Klasse B';
        explanationText = `Her overstiger den samlede tillatte totalvekten (${totalWeight} kg) grensen på 3500 kg, og tilhengeren er tyngre enn 750 kg. For å kjøre dette lovlig trenger du førerkort klasse B96 eller BE.`;
    }

    return (
        <div className="trailer-calc-container">
            <h3 className="trailer-calc-header">Er dette lovlig med klasse B?</h3>
            
            <div className="trailer-calc-group">
                <div className="trailer-calc-label">
                    <span>Bilens tillatte totalvekt</span>
                    <span className="trailer-calc-value">{carWeight} kg</span>
                </div>
                <input 
                    type="range" 
                    min="1000" 
                    max="3500" 
                    step="50" 
                    value={carWeight} 
                    onChange={(e) => setCarWeight(Number(e.target.value))}
                    className="trailer-calc-slider"
                />
            </div>

            <div className="trailer-calc-group">
                <div className="trailer-calc-label">
                    <span>Tilhengerens tillatte totalvekt</span>
                    <span className="trailer-calc-value">{trailerWeight} kg</span>
                </div>
                <input 
                    type="range" 
                    min="500" 
                    max="3500" 
                    step="50" 
                    value={trailerWeight} 
                    onChange={(e) => setTrailerWeight(Number(e.target.value))}
                    className="trailer-calc-slider"
                />
            </div>

            <div className={`trailer-calc-result ${isLegal ? 'legal' : 'illegal'}`}>
                <div className="trailer-calc-total">
                    Vogntogvekt (total): {totalWeight} kg
                </div>
                <div className={`trailer-calc-status ${isLegal ? 'legal' : 'illegal'}`}>
                    {statusText}
                </div>
                <div className="trailer-calc-explanation">
                    {explanationText}
                </div>
            </div>
        </div>
    );
}

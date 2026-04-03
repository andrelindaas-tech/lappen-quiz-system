import { useState, useEffect } from 'react';
import './DashboardWarningSimulator.css';

interface MeaningOption {
    label: string;
    isCorrect: boolean;
}

interface Lamp {
    id: string;
    name: string;
    color: 'red' | 'yellow';
    correctAnswer: 'stop' | 'drive';
    explanation: string;
    icon: React.ReactNode;
    meaningOptions: MeaningOption[];
}

const LAMPS: Lamp[] = [
    {
        id: 'brakes_red',
        name: 'Bremseanlegg (Rød)',
        color: 'red',
        correctAnswer: 'stop',
        explanation: 'Rødt lys betyr alltid stopp. Denne lampen indikerer en alvorlig feil på bremsesystemet, for eksempel lavt bremsevæskenivå eller feil på to-krets systemet. Du må stoppe umiddelbart og ringe veihjelp.',
        meaningOptions: [
            { label: 'Feil på bremsesystemet', isCorrect: true },
            { label: 'Håndbrekket er på', isCorrect: false },
            { label: 'Slitte dekk', isCorrect: false }
        ],
        icon: (
            <svg viewBox="0 0 100 100" className="lamp-icon">
                {/* Outer brackets/pads */}
                <path d="M20 30 A 40 40 0 0 0 20 70" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                <path d="M80 30 A 40 40 0 0 1 80 70" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                {/* Inner circle with ! */}
                <circle cx="50" cy="50" r="28" fill="none" stroke="currentColor" strokeWidth="6" />
                <path d="M50 35 L50 58" fill="none" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
                <circle cx="50" cy="68" r="4" fill="currentColor" />
            </svg>
        )
    },
    {
        id: 'oil_red',
        name: 'Oljetrykk (Rød)',
        color: 'red',
        correctAnswer: 'stop',
        explanation: 'Rødt lys betyr alltid stopp. Motoren har for lavt oljetrykk. Dette kan føre til totalt motorhavari på sekunder. Stopp bilen forsvarlig og skru av motoren umiddelbart.',
        meaningOptions: [
            { label: 'Lavt oljetrykk', isCorrect: true },
            { label: 'Lite drivstoff', isCorrect: false },
            { label: 'Oljeservice nødvendig', isCorrect: false }
        ],
        icon: (
            <svg viewBox="0 0 100 100" className="lamp-icon">
                {/* Oil Lamp Body - More rectangular with distinct elements */}
                <path d="M30 60 L30 80 L75 80 L80 65 L45 60 Z" fill="currentColor" opacity="0.9" />
                {/* Spout - Long and thin */}
                <path d="M75 68 L92 60" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                <path d="M92 60 Q96 60 94 65 L93 68 Q90 73 89 65 Z" fill="currentColor" /> {/* Spout end tip and drop combo */}
                <circle cx="94" cy="74" r="4" fill="currentColor" /> {/* The actual drop */}
                {/* Handle - Angled rect */}
                <path d="M30 65 L10 65 L10 60 L30 55 Z" fill="currentColor" />
                <path d="M10 65 L10 50 L30 45 L30 65" fill="none" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
                {/* Filler Cap - T-shape */}
                <path d="M35 55 L50 55" stroke="currentColor" strokeWidth="6" strokeLinecap="round" />
                <path d="M42.5 55 L42.5 60" stroke="currentColor" strokeWidth="5" />
            </svg>
        )
    },
    {
        id: 'battery_red',
        name: 'Lading/Batteri (Rød)',
        color: 'red',
        correctAnswer: 'stop',
        explanation: 'Rødt lys betyr alltid stopp. Dynamoen lader ikke batteriet. Bilen vil snart gå tom for strøm og stanse. I mange biler betyr dette også at vannpumpen har stoppet, som fører til overoppheting. Finn et trygt sted og stans.',
        meaningOptions: [
            { label: 'Feil på ladesystemet', isCorrect: true },
            { label: 'Flatt batteri', isCorrect: false },
            { label: 'Startsperre aktivert', isCorrect: false }
        ],
        icon: (
            <svg viewBox="0 0 100 100" className="lamp-icon">
                <rect x="25" y="35" width="50" height="40" rx="3" fill="none" stroke="currentColor" strokeWidth="6" />
                <rect x="35" y="28" width="10" height="7" fill="currentColor" />
                <rect x="55" y="28" width="10" height="7" fill="currentColor" />
                <path d="M35 55 L45 55 M55 55 L65 55 M60 50 L60 60" stroke="currentColor" strokeWidth="5" />
            </svg>
        )
    },
    {
        id: 'engine_yellow',
        name: 'Feil på motor (Gul)',
        color: 'yellow',
        correctAnswer: 'drive',
        explanation: 'Gult varsellys betyr at du vanligvis kan kjøre videre, men at noe må sjekkes snarere enn senere. Her er det en feil med motoren eller avgassystemet. Kjør direkte til et verksted for kontroll.',
        meaningOptions: [
            { label: 'Feil på motor/avgass', isCorrect: true },
            { label: 'Lite kjølevæske', isCorrect: false },
            { label: 'Lite spylervæske', isCorrect: false }
        ],
        icon: (
            <svg viewBox="0 0 100 100" className="lamp-icon">
                {/* Engine block silhouette */}
                <path d="M20 45 L30 45 L30 35 L60 35 L60 45 L70 45 L85 55 L85 75 L20 75 Z" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
                {/* Fan/Pulley area */}
                <circle cx="15" cy="60" r="4" fill="none" stroke="currentColor" strokeWidth="4" />
                <line x1="10" y1="60" x2="20" y2="60" stroke="currentColor" strokeWidth="4" />
                {/* Detail/Cap */}
                <rect x="40" y="30" width="10" height="5" fill="currentColor" />
            </svg>
        )
    },
    {
        id: 'tire_yellow',
        name: 'Dekktrykk (Gul)',
        color: 'yellow',
        correctAnswer: 'drive',
        explanation: 'Gult varsellys betyr at du kan kjøre videre. Dette indikerer feil dekktrykk på ett eller flere hjul. Kjør rolig til nærmeste bensinstasjon og kontroller luften i alle dekk.',
        meaningOptions: [
            { label: 'Lavt lufttrykk i dekk', isCorrect: true },
            { label: 'Skjevslitte dekk', isCorrect: false },
            { label: 'Feil på støtdempere', isCorrect: false }
        ],
        icon: (
            <svg viewBox="0 0 100 100" className="lamp-icon">
                {/* Tire Cross-section (Standard TPMS icon) */}
                <path d="M35 30 L35 40 Q35 50 25 60 Q20 70 25 80 Q30 90 40 90 L60 90 Q70 90 75 80 Q80 70 75 60 Q65 50 65 40 L65 30" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="butt" />
                {/* Bottom treads/ripples - more like the image */}
                <path d="M35 90 L35 95 M42 90 L42 95 M49 90 L49 95 M56 90 L56 95 M63 90 L63 95 M70 90 L70 95" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                {/* Exclamation point - bolder like the image */}
                <path d="M50 25 L50 65" stroke="currentColor" strokeWidth="12" strokeLinecap="butt" />
                <circle cx="50" cy="78" r="6" fill="currentColor" />
            </svg>
        )
    },
    {
        id: 'abs_yellow',
        name: 'ABS-bremser (Gul)',
        color: 'yellow',
        correctAnswer: 'drive',
        explanation: 'Gult varsellys betyr at du kan kjøre videre, men vær oppmerksom. Feil på ABS-systemet gjør at hjulene kan låse seg ved hard nedbremsing, spesielt på glatt føre. Kjør til verksted for kontroll.',
        meaningOptions: [
            { label: 'Feil på ABS-systemet', isCorrect: true },
            { label: 'Slitte bremseklosser', isCorrect: false },
            { label: 'Systemet er i bruk', isCorrect: false }
        ],
        icon: (
            <svg viewBox="0 0 100 100" className="lamp-icon">
                <circle cx="50" cy="50" r="35" fill="none" stroke="currentColor" strokeWidth="6" />
                <text x="50" y="58" fontSize="22" fontWeight="900" textAnchor="middle" fill="currentColor" style={{ fontFamily: 'Arial, sans-serif' }}>ABS</text>
            </svg>
        )
    }
];

export default function DashboardWarningSimulator() {
    const [activeLamp, setActiveLamp] = useState<Lamp | null>(null);
    const [questionType, setQuestionType] = useState<'action' | 'meaning'>('action');
    const [shuffledOptions, setShuffledOptions] = useState<MeaningOption[]>([]);
    const [userAnswer, setUserAnswer] = useState<string | null>(null);
    const [feedback, setFeedback] = useState<{ status: 'correct' | 'incorrect'; text: string } | null>(null);

    // Initialize with a random lamp and question type
    useEffect(() => {
        reset();
    }, []);

    const reset = () => {
        const randomLamp = LAMPS[Math.floor(Math.random() * LAMPS.length)];
        // 60% chance for 'meaning', 40% for 'action'
        const randomType = Math.random() < 0.6 ? 'meaning' : 'action';
        
        setActiveLamp(randomLamp);
        setQuestionType(randomType);
        setUserAnswer(null);
        setFeedback(null);

        // Shuffle options for meaning quiz
        if (randomType === 'meaning') {
            const shuffled = [...randomLamp.meaningOptions].sort(() => Math.random() - 0.5);
            setShuffledOptions(shuffled);
        }
    };

    const handleAnswer = (answerValue: string) => {
        if (!activeLamp || userAnswer) return;

        setUserAnswer(answerValue);
        
        let isCorrect = false;
        if (questionType === 'action') {
            isCorrect = answerValue === activeLamp.correctAnswer;
        } else {
            const selectedOption = activeLamp.meaningOptions.find(o => o.label === answerValue);
            isCorrect = !!selectedOption?.isCorrect;
        }
        
        setFeedback({
            status: isCorrect ? 'correct' : 'incorrect',
            text: activeLamp.explanation
        });
    };

    return (
        <div className="dashboard-sim-container">
            <h3 className="dashboard-sim-header">Simulering: Forstår du varsellampene?</h3>

            <div className="dashboard-display">
                {LAMPS.map((lamp) => (
                    <div 
                        key={lamp.id} 
                        className={`dashboard-lamp-svg ${activeLamp?.id === lamp.id ? `active ${lamp.color}` : 'inactive'}`}
                    >
                        {lamp.icon}
                    </div>
                ))}
            </div>

            <div className="dashboard-sim-controls">
                <p className="dashboard-question">
                    {questionType === 'action' 
                        ? 'Denne lampen lyser mens du kjører. Hva gjør du?' 
                        : 'Hva betyr dette symbolet?'}
                </p>
                
                <div className="dashboard-action-buttons">
                    {questionType === 'action' ? (
                        <>
                            <button 
                                className="dashboard-btn"
                                onClick={() => handleAnswer('stop')}
                                disabled={!!userAnswer}
                            >
                                Stopp bilen umiddelbart
                            </button>
                            <button 
                                className="dashboard-btn"
                                onClick={() => handleAnswer('drive')}
                                disabled={!!userAnswer}
                            >
                                Kjør videre (til verksted)
                            </button>
                        </>
                    ) : (
                        shuffledOptions.map((option, idx) => (
                            <button
                                key={idx}
                                className="dashboard-btn"
                                onClick={() => handleAnswer(option.label)}
                                disabled={!!userAnswer}
                            >
                                {option.label}
                            </button>
                        ))
                    )}
                </div>

                {feedback && (
                    <div className={`dashboard-explanation-box ${feedback.status}`}>
                        <div className={`dashboard-status-title ${feedback.status}`}>
                            {feedback.status === 'correct' ? '✅ Riktig!' : '❌ Ikke helt riktig'}
                        </div>
                        <div className="dashboard-text">
                            {feedback.text}
                        </div>
                    </div>
                )}

                <button className="dashboard-reset-btn" onClick={reset}>
                    🔄 Test en ny varsellampe
                </button>
            </div>
        </div>
    );
}

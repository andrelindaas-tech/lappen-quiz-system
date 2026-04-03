import { useState, useEffect, useCallback, useRef } from 'react';

type TestState = 'idle' | 'waiting' | 'go' | 'done';

interface RoundResult {
    time: number;
    reactionDistance: number;
    stopDistance: number;
    rating: { label: string; color: string; textColor: string; borderColor: string };
}

export default function ReaksjonstidTest() {
    const [state, setState] = useState<TestState>('idle');
    const [rounds, setRounds] = useState<RoundResult[]>([]);
    const [lastResult, setLastResult] = useState<RoundResult | null>(null);
    const [currentStartTime, setCurrentStartTime] = useState<number>(0);
    const [error, setError] = useState<boolean>(false);
    
    // Refs for timers
    const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const btnRef = useRef<HTMLButtonElement>(null);

    const getRating = (ms: number) => {
        // We use opaque colors that work in both modes, or let the theme handle it
        if (ms < 250) return { label: 'Lynrask', color: '#10b98120', textColor: '#10b981', borderColor: '#10b981' };
        if (ms < 400) return { label: 'Meget rask', color: '#22c55e20', textColor: '#22c55e', borderColor: '#22c55e' };
        if (ms < 700) return { label: 'Normal', color: '#f59e0b20', textColor: '#f59e0b', borderColor: '#f59e0b' };
        if (ms < 1000) return { label: 'Litt treg', color: '#f9731620', textColor: '#f97316', borderColor: '#f97316' };
        return { label: 'Treg', color: '#ef444420', textColor: '#ef4444', borderColor: '#ef4444' };
    };

    const startRound = useCallback(() => {
        setError(false);
        setLastResult(null);
        setState('waiting');
        
        const delay = 1500 + Math.random() * 2500;
        
        timerRef.current = setTimeout(() => {
            setState('go');
            setCurrentStartTime(performance.now());
        }, delay);
    }, []);

    const handleSuccess = useCallback(() => {
        const reactionTime = performance.now() - currentStartTime;
        const reactDist = (reactionTime / 1000) * (80 / 3.6);
        const stopDist = reactDist + 32;

        const result: RoundResult = {
            time: reactionTime,
            reactionDistance: reactDist,
            stopDistance: stopDist,
            rating: getRating(reactionTime)
        };

        const updatedRounds = [...rounds, result];
        setRounds(updatedRounds);
        setLastResult(result);

        if (updatedRounds.length >= 5) {
            setState('done');
        } else {
            setState('idle');
        }
    }, [currentStartTime, rounds, getRating]);

    const handleTooEarly = useCallback(() => {
        if (timerRef.current) clearTimeout(timerRef.current);
        setError(true);
        setState('idle');
    }, []);

    const resetTest = useCallback(() => {
        setRounds([]);
        setLastResult(null);
        setError(false);
        setState('idle');
    }, []);

    // Event Listener logic via Ref
    useEffect(() => {
        const btn = btnRef.current;
        if (!btn) return;

        const handleClick = (e: MouseEvent) => {
            e.preventDefault();
            e.stopPropagation();

            if (state === 'idle') {
                startRound();
            } else if (state === 'waiting') {
                handleTooEarly();
            } else if (state === 'go') {
                handleSuccess();
            } else if (state === 'done') {
                resetTest();
            }
        };

        btn.addEventListener('click', handleClick);
        return () => btn.removeEventListener('click', handleClick);
    }, [state, startRound, handleTooEarly, handleSuccess, resetTest]);

    // Average calculations for DONE state
    const avgTime = rounds.length > 0 ? rounds.reduce((acc, r) => acc + r.time, 0) / rounds.length : 0;
    const avgReactDist = (avgTime / 1000) * (80 / 3.6);
    const avgStopDist = avgReactDist + 32;
    const finalRating = getRating(avgTime);

    return (
        <div className="reaksjon-test-container" style={{
            background: 'var(--color-bg)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            padding: '2.5rem 1.5rem',
            maxWidth: '500px',
            margin: '2rem auto',
            textAlign: 'center',
            boxShadow: 'var(--shadow-lg)',
            color: 'var(--color-text)'
        }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--color-text)' }}>
                {state === 'done' ? 'Test fullført' : 'Test reaksjonstiden din'}
            </h2>
            <p style={{ color: 'var(--color-text-light)', marginBottom: '2rem', fontSize: '0.95rem' }}>
                {state === 'done' 
                    ? 'Her er dine samlede resultater fra 5 runder.' 
                    : 'Klikk når lyset blir grønt. Ikke klikk for tidlig!'}
            </p>

            {/* Traffic Lights */}
            {state !== 'done' && (
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginBottom: '1.5rem' }}>
                    <div style={{
                        width: '90px', height: '90px', borderRadius: '50%',
                        background: (state === 'waiting') ? '#E24B4A' : 'var(--color-bg-secondary)',
                        border: '1px solid var(--color-border)',
                        transition: 'background 0.1s ease',
                        boxShadow: (state === 'waiting') ? '0 0 30px rgba(226, 75, 74, 0.4)' : 'none'
                    }} />
                    <div style={{
                        width: '90px', height: '90px', borderRadius: '50%',
                        background: (state === 'go') ? '#639922' : 'var(--color-bg-secondary)',
                        border: '1px solid var(--color-border)',
                        transition: 'background 0.1s ease',
                        boxShadow: (state === 'go') ? '0 0 30px rgba(99, 153, 34, 0.4)' : 'none'
                    }} />
                </div>
            )}

            {/* Status / Round Info */}
            <div style={{ marginBottom: '1.5rem', fontWeight: 500, color: 'var(--color-text-light)' }}>
                {state === 'waiting' && 'Vent...'}
                {state === 'go' && <span style={{ color: '#639922', fontWeight: 800 }}>KLIKK NÅ!</span>}
                {state === 'idle' && !error && rounds.length > 0 && rounds.length < 5 && `${5 - rounds.length} runder igjen`}
                {error && <span style={{ color: '#E24B4A' }}>For tidlig! Prøv igjen.</span>}
                {state === 'done' && `Gjennomsnitt etter 5 forsøk`}
            </div>

            {/* Action Button */}
            <button
                ref={btnRef}
                className="button"
                style={{
                    width: '100%',
                    height: (state === 'waiting' || state === 'go') ? '120px' : 'auto',
                    fontSize: '1.1rem',
                    transition: 'all 0.2s ease',
                    marginBottom: '1.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    opacity: (state === 'waiting' || state === 'go') ? 0.8 : 1
                }}
            >
                {state === 'idle' && (rounds.length === 0 ? 'Start test' : 'Neste runde')}
                {state === 'waiting' && 'KLIKK HER!'}
                {state === 'go' && 'BREMS!'}
                {state === 'done' && 'Ta testen på nytt'}
            </button>

            {/* Results Section */}
            {(lastResult || state === 'done') && (
                <div style={{ animation: 'fadeIn 0.4s ease-out' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '0.75rem' }}>
                        <div style={{ background: 'var(--color-bg-secondary)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', marginBottom: '0.25rem' }}>Reaksjonstid</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-text)' }}>
                                {Math.round(state === 'done' ? avgTime : lastResult!.time)}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>millisekunder</div>
                        </div>
                        <div style={{ background: 'var(--color-bg-secondary)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--color-border)' }}>
                            <div style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', marginBottom: '0.25rem' }}>Reaksjonslengde</div>
                            <div style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--color-text)' }}>
                                {(state === 'done' ? avgReactDist : lastResult!.reactionDistance).toFixed(1)}
                            </div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>meter ved 80 km/t</div>
                        </div>
                    </div>
                    <div style={{ background: 'var(--color-bg-secondary)', padding: '1.25rem', borderRadius: '12px', marginBottom: '1rem', border: '1px solid var(--color-border)' }}>
                        <div style={{ fontSize: '0.85rem', color: 'var(--color-text-light)', marginBottom: '0.25rem' }}>Total stopplengde ved 80 km/t</div>
                        <div style={{ fontSize: '1.75rem', fontWeight: 900, color: 'var(--color-text)' }}>
                            {(state === 'done' ? avgStopDist : lastResult!.stopDistance).toFixed(1)} m
                        </div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--color-text-light)' }}>
                            din reaksjon + 32 m bremselengde
                        </div>
                    </div>

                    <div style={{ 
                        display: 'inline-block',
                        padding: '0.25rem 1rem',
                        borderRadius: '20px',
                        background: (state === 'done' ? finalRating : lastResult!.rating).color,
                        color: (state === 'done' ? finalRating : lastResult!.rating).textColor,
                        border: `1px solid ${(state === 'done' ? finalRating : lastResult!.rating).borderColor}`,
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        marginBottom: '1rem'
                    }}>
                        {(state === 'done' ? finalRating : lastResult!.rating).label}
                    </div>

                    <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', marginBottom: '0.5rem' }}>
                        {state === 'done' 
                            ? 'Godt jobbet! Du har nå et bilde av din reelle reaksjonsevne.'
                            : 'Normalt. Husk at tretthet kan doble reaksjonstiden.'}
                    </p>
                    <div style={{ fontSize: '0.85rem', color: 'var(--color-text-light)' }}>
                        Forsøk {rounds.length} av 5
                    </div>
                </div>
            )}

            <style>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
}

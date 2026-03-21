// UX-PRINSIPP: Live-kalkulator for ungdom (16-17 år)
// - Beregner automatisk mens bruker skriver – ingen knapp nødvendig
// - Viser kombinert vekt live med + animasjon
// - Enkelt språk med emoji – ikke fagterminologi
// - Forklarer 'tillatt totalvekt' inline – de fleste vet ikke hva det er
// - Stor, tydelig fargeboks for resultat – lesbar på mobil

import { useState, useEffect } from 'react';

type Klasse = 'B' | 'B-campingvogn' | 'B96' | 'BE';

type Resultat = {
    klasse: Klasse;
    emoji: string;
    heading: string;
    forklaring: string;
    hvaGjor: string;
    bgColor: string;
    borderColor: string;
    textColor: string;
};

function beregnKlasse(bil: number, tilhenger: number): Resultat {
    const kombinert = bil + tilhenger;
    
    // Klasse B: Tilhenger <= 750 kg
    if (tilhenger <= 750) {
        return {
            klasse: 'B',
            emoji: '🚗',
            heading: 'Vanlig B-lappen holder!',
            forklaring: `Hengeren (${tilhenger} kg) er under 750 kg. Det trengs ingen ekstra kurs eller prøve.`,
            hvaGjor: 'Du kan kjøre med hengeren med en gang du har B-lappen.',
            bgColor: 'rgba(5, 150, 105, 0.05)', 
            borderColor: 'var(--color-success)', 
            textColor: 'var(--color-success)',
        };
    }
    
    // Klasse B: Campingvogn-regelen (kombinert <= 3500 kg)
    if (kombinert <= 3500) {
        return {
            klasse: 'B-campingvogn',
            emoji: '🚐',
            heading: 'Vanlig B-lappen holder! (campingvogn-regelen)',
            forklaring: `Hengeren (${tilhenger} kg) er over 750 kg, men bil + henger er ${kombinert} kg – altså under 3 500 kg.`,
            hvaGjor: 'B-lappen er nok. Campingvogn-regelen redder deg!',
            bgColor: 'rgba(5, 150, 105, 0.05)', 
            borderColor: 'var(--color-success)', 
            textColor: 'var(--color-success)',
        };
    }
    
    // Klasse B96: Kombinert <= 4250 kg
    if (kombinert <= 4250) {
        return {
            klasse: 'B96',
            emoji: '🚚💨',
            heading: 'Du trenger B96',
            forklaring: `Bil + henger er ${kombinert} kg (over 3 500 kg). Da trenger du B96 i tillegg til B-lappen.`,
            hvaGjor: 'B96 = 7-timers kurs (5t teori + 2t kjøring). Ingen oppkjøring!',
            bgColor: 'rgba(245, 158, 11, 0.05)', 
            borderColor: '#f59e0b', 
            textColor: '#f59e0b',
        };
    }
    
    // Klasse BE: Alt over
    return {
        klasse: 'BE',
        emoji: '🚛',
        heading: 'Du trenger klasse BE',
        forklaring: `Bil + henger er ${kombinert} kg – over 4 250 kg. Da kreves det BE-førerkort.`,
        hvaGjor: 'BE krever ny teoriprøve + praktisk oppkjøring for tilhenger.',
        bgColor: 'rgba(220, 38, 38, 0.05)', 
        borderColor: 'var(--color-error)', 
        textColor: 'var(--color-error)',
    };
}

export function TilhengerKalkulator() {
    const [bilVekt, setBilVekt] = useState('');
    const [tilhengerVekt, setTilhengerVekt] = useState('');
    const [resultat, setResultat] = useState<Resultat | null>(null);

    // Beregn automatisk når begge felt er fylt ut
    useEffect(() => {
        const bil = parseFloat(bilVekt);
        const tilhenger = parseFloat(tilhengerVekt);
        if (bil > 0 && tilhenger > 0 && bil < 10000 && tilhenger < 10000) {
            setResultat(beregnKlasse(bil, tilhenger));
        } else {
            setResultat(null);
        }
    }, [bilVekt, tilhengerVekt]);

    const kombinert = (parseFloat(bilVekt) || 0) + (parseFloat(tilhengerVekt) || 0);
    const visKombinert = parseFloat(bilVekt) > 0 && parseFloat(tilhengerVekt) > 0;

    return (
        <div id="henger-kalkulator" style={{
            backgroundColor: 'var(--color-bg)',
            border: '2px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--spacing-xl)',
            margin: 'var(--spacing-xl) 0',
            boxShadow: 'var(--shadow-md)',
            textAlign: 'left'
        }}>
            <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, marginBottom: 'var(--spacing-xs)', color: 'var(--color-text)' }}>
                Trenger du ekstra lappen? Sjekk her
            </h3>
            
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-light)', marginBottom: 'var(--spacing-sm)' }}>
                Skriv inn vekter fra <strong>vognkortet</strong> – ikke faktisk vekt.
            </p>
            
            <p style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-light)', opacity: 0.7, marginBottom: 'var(--spacing-lg)' }}>
                Usikker? Tillatt totalvekt finner du i vognkortet (del I/II) under 'F.1'.
            </p>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'var(--spacing-md)', marginBottom: 'var(--spacing-lg)' }}>
                <div>
                    <label style={{ display: 'block', fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text)', marginBottom: 'var(--spacing-xs)' }}>
                        Bilen (kg) fra vognkort
                    </label>
                    <input
                        type='number' min='0' inputMode='numeric'
                        placeholder='F.eks. 2 200'
                        value={bilVekt}
                        onChange={(e) => setBilVekt(e.target.value)}
                        style={{
                            width: '100%',
                            border: '2px solid var(--color-border)',
                            borderRadius: 'var(--radius-md)',
                            padding: 'var(--spacing-md)',
                            fontSize: 'var(--font-size-base)',
                            backgroundColor: 'transparent',
                            color: 'var(--color-text)',
                            outline: 'none',
                            transition: 'border-color 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                    />
                </div>
                <div>
                    <label style={{ display: 'block', fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text)', marginBottom: 'var(--spacing-xs)' }}>
                        Hengeren (kg) fra vognkort
                    </label>
                    <input
                        type='number' min='0' inputMode='numeric'
                        placeholder='F.eks. 1 100'
                        value={tilhengerVekt}
                        onChange={(e) => setTilhengerVekt(e.target.value)}
                        style={{
                            width: '100%',
                            border: '2px solid var(--color-border)',
                            borderRadius: 'var(--radius-md)',
                            padding: 'var(--spacing-md)',
                            fontSize: 'var(--font-size-base)',
                            backgroundColor: 'transparent',
                            color: 'var(--color-text)',
                            outline: 'none',
                            transition: 'border-color 0.2s ease'
                        }}
                        onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                        onBlur={(e) => e.target.style.borderColor = 'var(--color-border)'}
                    />
                </div>
            </div>

            {visKombinert && (
                <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-light)', marginBottom: 'var(--spacing-md)', textAlign: 'center' }}>
                    Bil + henger = 
                    <span style={{ fontWeight: 700, color: 'var(--color-text)', marginLeft: '4px' }}>
                        {kombinert.toLocaleString('no')} kg
                    </span>
                    {' kombinert'}
                </p>
            )}

            {resultat && (
                <div style={{
                    borderRadius: 'var(--radius-md)',
                    padding: 'var(--spacing-lg)',
                    border: '2px solid',
                    borderColor: resultat.borderColor,
                    backgroundColor: resultat.bgColor,
                    animation: 'fadeIn 0.4s ease'
                }}>
                    <p style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: 'var(--spacing-xs)', color: resultat.textColor }}>
                        {resultat.emoji} {resultat.heading}
                    </p>
                    <p style={{ fontSize: 'var(--font-size-sm)', marginBottom: 'var(--spacing-sm)', color: resultat.textColor, opacity: 0.9 }}>
                        {resultat.forklaring}
                    </p>
                    <p style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: resultat.textColor }}>
                        {resultat.hvaGjor}
                    </p>
                </div>
            )}

            {!resultat && (
                <p style={{ textAlign: 'center', color: 'var(--color-text-light)', fontSize: 'var(--font-size-sm)', padding: 'var(--spacing-md) 0' }}>
                    Fyll inn begge felt for å se svaret
                </p>
            )}
            
            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}} />

            <div style={{
                marginTop: 'var(--spacing-2xl)',
                padding: 'var(--spacing-xl)',
                backgroundColor: 'var(--color-bg-alt)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
                textAlign: 'center'
            }}>
                <h4 style={{ fontSize: 'var(--font-size-md)', marginBottom: 'var(--spacing-sm)', color: 'var(--color-text)' }}>
                    Vil du sjekke hva akkurat din bil er godkjent for å trekke?
                </h4>
                <p style={{ color: 'var(--color-text-light)', marginBottom: 'var(--spacing-lg)', fontSize: 'var(--font-size-sm)' }}>
                    Statens vegvesen har en egen kalkulator der du søker opp bilen din på registreringsnummer:
                </p>
                <a 
                    href="https://www.vegvesen.no/kjoretoy/eie-og-vedlikeholde/tilhenger/tilhengerkalkulator/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    style={{
                        display: 'inline-block',
                        padding: 'var(--spacing-sm) var(--spacing-lg)',
                        backgroundColor: 'var(--color-primary)',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: 'var(--radius-full)',
                        fontWeight: 600,
                        fontSize: 'var(--font-size-sm)',
                        transition: 'opacity 0.2s',
                    }}
                    onMouseOver={(e) => e.currentTarget.style.opacity = '0.9'}
                    onMouseOut={(e) => e.currentTarget.style.opacity = '1'}
                >
                    Vegvesenets tilhengerkalkulator →
                </a>
            </div>
        </div>
    );
}

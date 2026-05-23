import { useState, useEffect } from 'react'

interface CalcResult {
    currentBAC: number
    peakBAC: number
    hoursToUnder02: number
    hoursToSober: number
    statusText: string
    statusSubtext: string
    statusColor: string
    statusBg: string
    statusBorder: string
}

interface DrinkType {
    id: string
    name: string
    displayLabel: string
    percentage: number
    volumeCl: number
    alcoholGrams: number
}

const DRINK_TEMPLATES: DrinkType[] = [
    { id: 'pils_33', name: 'Pils 0,33 l', displayLabel: 'Pils 0,33 l (4,5 %)', percentage: 4.5, volumeCl: 33, alcoholGrams: 33 * 10 * 0.045 * 0.789 },
    { id: 'pils_50', name: 'Pils 0,5 l', displayLabel: 'Pils 0,5 l (4,5 %)', percentage: 4.5, volumeCl: 50, alcoholGrams: 50 * 10 * 0.045 * 0.789 },
    { id: 'sterkol_50', name: 'Sterkøl 0,5 l', displayLabel: 'Sterkøl 0,5 l (6,5 %)', percentage: 6.5, volumeCl: 50, alcoholGrams: 50 * 10 * 0.065 * 0.789 },
    { id: 'vin_15', name: 'Vin 15 cl', displayLabel: 'Vin 15 cl (12 %)', percentage: 12, volumeCl: 15, alcoholGrams: 15 * 10 * 0.12 * 0.789 },
    { id: 'sterkvin_8', name: 'Sterkvin 8 cl', displayLabel: 'Sterkvin 8 cl (18 %)', percentage: 18, volumeCl: 8, alcoholGrams: 8 * 10 * 0.18 * 0.789 },
    { id: 'brennevin_4', name: 'Brennevin 4 cl', displayLabel: 'Brennevin 4 cl (40 %)', percentage: 40, volumeCl: 4, alcoholGrams: 4 * 10 * 0.40 * 0.789 },
    { id: 'cider_33', name: 'Cider 0,33 l', displayLabel: 'Cider 0,33 l (4,5 %)', percentage: 4.5, volumeCl: 33, alcoholGrams: 33 * 10 * 0.045 * 0.789 },
    { id: 'rusbrus_33', name: 'Rusbrus 0,33 l', displayLabel: 'Rusbrus 0,33 l (4,5 %)', percentage: 4.5, volumeCl: 33, alcoholGrams: 33 * 10 * 0.045 * 0.789 },
]

interface AddedDrink {
    templateId: string
    count: number
}

export function PromilleKalkulator() {
    const [gender, setGender] = useState<'mann' | 'kvinne'>('mann')
    const [weight, setWeight] = useState<number>(75)
    const [hours, setHours] = useState<number>(1)
    const [addedDrinks, setAddedDrinks] = useState<AddedDrink[]>([])
    const [result, setResult] = useState<CalcResult | null>(null)

    // Add a drink
    const addDrink = (templateId: string) => {
        setAddedDrinks(prev => {
            const existing = prev.find(item => item.templateId === templateId)
            if (existing) {
                return prev.map(item => item.templateId === templateId ? { ...item, count: item.count + 1 } : item)
            }
            return [...prev, { templateId, count: 1 }]
        })
    }

    // Decrement a drink
    const decrementDrink = (templateId: string) => {
        setAddedDrinks(prev => {
            const existing = prev.find(item => item.templateId === templateId)
            if (existing && existing.count > 1) {
                return prev.map(item => item.templateId === templateId ? { ...item, count: item.count - 1 } : item)
            }
            return prev.filter(item => item.templateId !== templateId)
        })
    }

    // Remove a drink entirely
    const removeDrink = (templateId: string) => {
        setAddedDrinks(prev => prev.filter(item => item.templateId !== templateId))
    }

    // Reset all
    const resetAll = () => {
        setAddedDrinks([])
        setHours(1)
        setWeight(75)
        setGender('mann')
    }

    useEffect(() => {
        const r = gender === 'mann' ? 0.68 : 0.55
        
        // Calculate total grams of alcohol
        const totalGrams = addedDrinks.reduce((sum, item) => {
            const template = DRINK_TEMPLATES.find(t => t.id === item.templateId)
            return sum + (template ? template.alcoholGrams * item.count : 0)
        }, 0)

        if (totalGrams === 0) {
            setResult({
                currentBAC: 0,
                peakBAC: 0,
                hoursToUnder02: 0,
                hoursToSober: 0,
                statusText: 'Ingen alkohol registrert',
                statusSubtext: 'Legg til drikker under for å anslå promilleutvikling.',
                statusColor: 'var(--color-text-light)',
                statusBg: 'var(--color-bg-secondary)',
                statusBorder: 'var(--color-border)'
            })
            return
        }

        // Estimert topp-promille (Widmarks formel)
        const peakBAC = totalGrams / (weight * r)
        
        // Estimert promille etter t timer (forbrenning på ca. 0,15 promille per time)
        const currentBAC = Math.max(0, peakBAC - 0.15 * hours)
        
        // Timer til promillen når under 0,2 fra NÅ (gitt at den allerede er på currentBAC)
        const hoursToUnder02 = currentBAC > 0.2 ? (currentBAC - 0.2) / 0.15 : 0
        
        // Timer til promillen når 0,0 fra NÅ
        const hoursToSober = currentBAC > 0 ? currentBAC / 0.15 : 0

        let statusText = ''
        let statusSubtext = ''
        let statusColor = ''
        let statusBg = ''
        let statusBorder = ''

        if (currentBAC > 0.2) {
            statusText = 'Over lovlig grense'
            statusSubtext = 'Kalkulatoren anslår at du er over den lovlige grensen på 0,2 ‰. Kjøring er ulovlig og utgjør stor trafikkfare.'
            statusColor = 'var(--color-error)'
            statusBg = 'rgba(239, 68, 68, 0.04)'
            statusBorder = 'var(--color-error)'
        } else if (currentBAC > 0) {
            statusText = 'Under 0,2 i beregningen'
            statusSubtext = 'Beregningen viser under 0,2 ‰, men du kan likevel være påvirket og over lovlig grense. Bruk aldri kalkulatoren som en kjøretillatelse.'
            statusColor = '#f59e0b' // amber
            statusBg = 'rgba(245, 158, 11, 0.04)'
            statusBorder = '#f59e0b'
        } else {
            statusText = 'Usikkert – ikke kjør'
            statusSubtext = 'Beregningen viser 0,0 ‰, men det er individuell variasjon og usikkerhet. Ikke kjør hvis du er i tvil eller nylig har drukket.'
            statusColor = 'var(--color-text-light)'
            statusBg = 'var(--color-bg-secondary)'
            statusBorder = 'var(--color-border)'
        }

        setResult({
            currentBAC: Math.round(currentBAC * 100) / 100,
            peakBAC: Math.round(peakBAC * 100) / 100,
            hoursToUnder02: Math.round(hoursToUnder02 * 100) / 100,
            hoursToSober: Math.round(hoursToSober * 100) / 100,
            statusText,
            statusSubtext,
            statusColor,
            statusBg,
            statusBorder
        })
    }, [gender, weight, hours, addedDrinks])

    const formatRemainingTime = (hoursFraction: number): { text: string; clockText: string } => {
        if (hoursFraction <= 0) {
            return { text: '0 t 0 min', clockText: 'Nå' }
        }
        const h = Math.floor(hoursFraction)
        const m = Math.round((hoursFraction - h) * 60)
        
        let finalH = h
        let finalM = m
        if (finalM === 60) {
            finalH += 1
            finalM = 0
        }
        
        const text = `${finalH} t ${finalM} min`
        
        const now = new Date()
        now.setMinutes(now.getMinutes() + Math.round(hoursFraction * 60))
        const hh = String(now.getHours()).padStart(2, '0')
        const mm = String(now.getMinutes()).padStart(2, '0')
        
        return { text, clockText: `ca. kl. ${hh}:${mm}` }
    }

    const time02 = result ? formatRemainingTime(result.hoursToUnder02) : { text: '--', clockText: '--' }
    const timeSober = result ? formatRemainingTime(result.hoursToSober) : { text: '--', clockText: '--' }

    return (
        <div id="promille-kalkulator" style={{
            backgroundColor: 'var(--color-bg)',
            border: '2px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
            padding: 'var(--spacing-xl)',
            margin: 'var(--spacing-xl) 0',
            boxShadow: 'var(--shadow-md)',
            textAlign: 'left'
        }}>
            {/* Advarsel over kalkulator */}
            <div style={{
                backgroundColor: 'rgba(239, 68, 68, 0.08)',
                borderLeft: '4px solid var(--color-error)',
                padding: 'var(--spacing-md)',
                borderRadius: 'var(--radius-sm)',
                marginBottom: 'var(--spacing-lg)',
                fontSize: 'var(--font-size-sm)',
                fontWeight: 600,
                color: 'var(--color-error)'
            }}>
                ⚠️ Advarsel: Kalkulatoren er bare veiledende og kan ikke avgjøre om du er lovlig eller trygg nok til å kjøre.
            </div>

            <h3 style={{ fontSize: 'var(--font-size-xl)', fontWeight: 700, marginBottom: 'var(--spacing-xs)', color: 'var(--color-text)' }}>
                🧮 Promillekalkulator
            </h3>
            <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-light)', marginBottom: 'var(--spacing-lg)' }}>
                Estimer promillen din basert på drikke, kroppsvekt og tid. Beregningen er veiledende.
            </p>

            {/* Første rad: Kjønn, Kroppsvekt, Timer */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: 'var(--spacing-md)',
                marginBottom: 'var(--spacing-lg)'
            }}>
                {/* Kjønn */}
                <div>
                    <label style={{ display: 'block', fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text)', marginBottom: 'var(--spacing-xs)' }}>
                        Kjønn:
                    </label>
                    <div style={{ display: 'flex', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-sm)', overflow: 'hidden' }}>
                        <button
                            type="button"
                            onClick={() => setGender('mann')}
                            style={{
                                flex: 1,
                                padding: '0.6rem',
                                border: 'none',
                                backgroundColor: gender === 'mann' ? 'var(--color-primary)' : 'transparent',
                                color: gender === 'mann' ? '#ffffff' : 'var(--color-text-light)',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            Mann
                        </button>
                        <button
                            type="button"
                            onClick={() => setGender('kvinne')}
                            style={{
                                flex: 1,
                                padding: '0.6rem',
                                border: 'none',
                                backgroundColor: gender === 'kvinne' ? 'var(--color-primary)' : 'transparent',
                                color: gender === 'kvinne' ? '#ffffff' : 'var(--color-text-light)',
                                fontWeight: 600,
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            Kvinne
                        </button>
                    </div>
                </div>

                {/* Kroppsvekt */}
                <div>
                    <label htmlFor="promille-weight-input" style={{ display: 'block', fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text)', marginBottom: 'var(--spacing-xs)' }}>
                        Kroppsvekt (kg):
                    </label>
                    <input
                        id="promille-weight-input"
                        type="number"
                        min="30"
                        max="200"
                        value={weight}
                        onChange={(e) => setWeight(Math.max(1, Number(e.target.value)))}
                        style={{
                            width: '100%',
                            padding: '0.6rem 1rem',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--color-border)',
                            backgroundColor: 'var(--color-bg)',
                            color: 'var(--color-text)',
                            fontSize: 'var(--font-size-base)',
                            fontWeight: 500
                        }}
                    />
                </div>

                {/* Timer siden start */}
                <div>
                    <label htmlFor="promille-hours-input" style={{ display: 'block', fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text)', marginBottom: 'var(--spacing-xs)' }}>
                        Timer siden start:
                    </label>
                    <input
                        id="promille-hours-input"
                        type="number"
                        min="0"
                        max="72"
                        step="0.5"
                        value={hours}
                        onChange={(e) => setHours(Math.max(0, Number(e.target.value)))}
                        style={{
                            width: '100%',
                            padding: '0.6rem 1rem',
                            borderRadius: 'var(--radius-sm)',
                            border: '1px solid var(--color-border)',
                            backgroundColor: 'var(--color-bg)',
                            color: 'var(--color-text)',
                            fontSize: 'var(--font-size-base)',
                            fontWeight: 500
                        }}
                    />
                </div>
            </div>

            {/* Legg til drikke */}
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <span style={{ display: 'block', fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text)', marginBottom: 'var(--spacing-xs)' }}>
                    Legg til drikke:
                </span>
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
                    gap: '8px'
                }}>
                    {DRINK_TEMPLATES.map(template => (
                        <button
                            key={template.id}
                            type="button"
                            onClick={() => addDrink(template.id)}
                            style={{
                                display: 'block',
                                width: '100%',
                                padding: '0.6rem 0.8rem',
                                border: '1px solid var(--color-border)',
                                borderRadius: 'var(--radius-sm)',
                                backgroundColor: 'var(--color-bg)',
                                color: 'var(--color-text)',
                                fontSize: 'var(--font-size-sm)',
                                textAlign: 'left',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                fontWeight: 500
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.borderColor = 'var(--color-primary)'
                                e.currentTarget.style.backgroundColor = 'var(--color-bg-secondary)'
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.borderColor = 'var(--color-border)'
                                e.currentTarget.style.backgroundColor = 'var(--color-bg)'
                            }}
                        >
                            + {template.name}
                        </button>
                    ))}
                </div>
            </div>

            {/* Dine drikker */}
            <div style={{ marginBottom: 'var(--spacing-lg)' }}>
                <span style={{ display: 'block', fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text)', marginBottom: 'var(--spacing-xs)' }}>
                    Dine drikker:
                </span>
                {addedDrinks.length === 0 ? (
                    <div style={{
                        padding: '1rem',
                        border: '1px dashed var(--color-border)',
                        borderRadius: 'var(--radius-sm)',
                        textAlign: 'center',
                        color: 'var(--color-text-light)',
                        fontSize: 'var(--font-size-sm)'
                    }}>
                        Ingen drikker lagt til ennå. Klikk på drikkene over for å legge til.
                    </div>
                ) : (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                        {addedDrinks.map(item => {
                            const template = DRINK_TEMPLATES.find(t => t.id === item.templateId)
                            if (!template) return null
                            return (
                                <div
                                    key={item.templateId}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '0.5rem 0.8rem',
                                        border: '1px solid var(--color-border)',
                                        borderRadius: 'var(--radius-sm)',
                                        backgroundColor: 'var(--color-bg-secondary)',
                                        gap: 'var(--spacing-sm)'
                                    }}
                                >
                                    <span style={{ fontSize: 'var(--font-size-sm)', fontWeight: 600, color: 'var(--color-text)' }}>
                                        {template.displayLabel}
                                    </span>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                        {/* Minus */}
                                        <button
                                            type="button"
                                            onClick={() => decrementDrink(item.templateId)}
                                            style={{
                                                width: '28px',
                                                height: '28px',
                                                borderRadius: '50%',
                                                border: '1px solid var(--color-border)',
                                                backgroundColor: 'var(--color-bg)',
                                                color: 'var(--color-text)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                fontWeight: 'bold',
                                                fontSize: '1rem',
                                                lineHeight: 1
                                            }}
                                        >
                                            −
                                        </button>
                                        <span style={{ minWidth: '20px', textAlign: 'center', fontWeight: 'bold', fontSize: 'var(--font-size-base)', color: 'var(--color-text)' }}>
                                            {item.count}
                                        </span>
                                        {/* Plus */}
                                        <button
                                            type="button"
                                            onClick={() => addDrink(item.templateId)}
                                            style={{
                                                width: '28px',
                                                height: '28px',
                                                borderRadius: '50%',
                                                border: '1px solid var(--color-border)',
                                                backgroundColor: 'var(--color-bg)',
                                                color: 'var(--color-text)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                cursor: 'pointer',
                                                fontWeight: 'bold',
                                                fontSize: '1rem',
                                                lineHeight: 1
                                            }}
                                        >
                                            +
                                        </button>
                                        {/* Fjern */}
                                        <button
                                            type="button"
                                            onClick={() => removeDrink(item.templateId)}
                                            style={{
                                                padding: '0.3rem 0.8rem',
                                                borderRadius: 'var(--radius-sm)',
                                                border: '1px solid var(--color-border)',
                                                backgroundColor: 'var(--color-bg)',
                                                color: 'var(--color-text)',
                                                fontSize: 'var(--font-size-xs)',
                                                cursor: 'pointer',
                                                fontWeight: 500,
                                                marginLeft: '8px'
                                            }}
                                        >
                                            Fjern
                                        </button>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                )}
            </div>

            {/* Resultat-kort */}
            {result && (
                <div style={{
                    border: `2px solid ${result.statusBorder}`,
                    backgroundColor: result.statusBg,
                    borderRadius: 'var(--radius-lg)',
                    padding: 'var(--spacing-lg)',
                    marginTop: 'var(--spacing-lg)',
                    boxShadow: 'var(--shadow-sm)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <div>
                            <span style={{ display: 'block', fontSize: 'var(--font-size-xs)', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-light)', fontWeight: 700, marginBottom: '2px' }}>
                                ESTIMERT PROMILLE NÅ
                            </span>
                            <strong style={{ fontSize: '3rem', fontWeight: 800, color: result.statusColor === 'var(--color-text-light)' ? 'var(--color-text)' : result.statusColor, lineHeight: 1.1 }}>
                                {result.currentBAC.toLocaleString('no', { minimumFractionDigits: 2 })} ‰
                            </strong>
                        </div>
                        {result.peakBAC > 0 && (
                            <div style={{ textAlign: 'right' }}>
                                <span style={{ display: 'block', fontSize: 'var(--font-size-xs)', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-light)', fontWeight: 700, marginBottom: '2px' }}>
                                    MAKSIMAL
                                </span>
                                <strong style={{ fontSize: '1.25rem', fontWeight: 700, color: 'var(--color-text)' }}>
                                    {result.peakBAC.toLocaleString('no', { minimumFractionDigits: 2 })} ‰
                                </strong>
                            </div>
                        )}
                    </div>

                    <div style={{ borderTop: '1px solid var(--color-border)', marginTop: 'var(--spacing-md)', paddingTop: 'var(--spacing-md)' }}>
                        <h4 style={{ fontSize: 'var(--font-size-lg)', fontWeight: 700, color: result.statusColor === 'var(--color-text-light)' ? 'var(--color-text)' : result.statusColor, marginBottom: '4px' }}>
                            {result.statusText}
                        </h4>
                        <p style={{ fontSize: 'var(--font-size-sm)', color: 'var(--color-text-light)', margin: 0, lineHeight: 1.5 }}>
                            {result.statusSubtext}
                        </p>
                    </div>
                </div>
            )}

            {/* Nedtellinger */}
            {result && addedDrinks.length > 0 && (
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: 'var(--spacing-md)',
                    marginTop: 'var(--spacing-md)'
                }}>
                    {/* Under 0.2 */}
                    <div style={{
                        backgroundColor: 'var(--color-bg-secondary)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        padding: 'var(--spacing-md)'
                    }}>
                        <span style={{ display: 'block', fontSize: 'var(--font-size-xs)', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-light)', fontWeight: 700, marginBottom: '4px' }}>
                            UNDER 0,2 ‰
                        </span>
                        <strong style={{ display: 'block', fontSize: 'var(--font-size-lg)', color: 'var(--color-text)' }}>
                            {time02.text}
                        </strong>
                        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-light)' }}>
                            {time02.clockText}
                        </span>
                    </div>

                    {/* Helt edru */}
                    <div style={{
                        backgroundColor: 'var(--color-bg-secondary)',
                        border: '1px solid var(--color-border)',
                        borderRadius: 'var(--radius-md)',
                        padding: 'var(--spacing-md)'
                    }}>
                        <span style={{ display: 'block', fontSize: 'var(--font-size-xs)', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--color-text-light)', fontWeight: 700, marginBottom: '4px' }}>
                            HELT EDRU (0,0 ‰)
                        </span>
                        <strong style={{ display: 'block', fontSize: 'var(--font-size-lg)', color: 'var(--color-text)' }}>
                            {timeSober.text}
                        </strong>
                        <span style={{ fontSize: 'var(--font-size-xs)', color: 'var(--color-text-light)' }}>
                            {timeSober.clockText}
                        </span>
                    </div>
                </div>
            )}

            {/* Nederste rad: Pil og Nullstill */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                marginTop: 'var(--spacing-md)'
            }}>
                <div style={{ color: 'var(--color-text-light)', opacity: 0.5 }}>
                    ↓
                </div>
                <button
                    type="button"
                    onClick={resetAll}
                    style={{
                        padding: '0.5rem 1.2rem',
                        borderRadius: 'var(--radius-sm)',
                        border: '1px solid var(--color-border)',
                        backgroundColor: 'var(--color-bg)',
                        color: 'var(--color-text)',
                        cursor: 'pointer',
                        fontWeight: 600,
                        fontSize: 'var(--font-size-sm)',
                        transition: 'all 0.2s'
                    }}
                    onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-bg-secondary)'
                    }}
                    onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = 'var(--color-bg)'
                    }}
                >
                    Nullstill
                </button>
            </div>
        </div>
    )
}

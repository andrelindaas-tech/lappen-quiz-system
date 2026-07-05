// Interaktivt, fiktivt vognkort (del 1) med klikkbare felt og forklaringer.
// Brukes i artikkelen «Vognkort og vekter» via section.component === 'VognkortEksempel'.
import { useState } from 'react'

interface VognkortFelt {
    kode: string
    navn: string
    verdi: string
    forklaring: string
}

const FELTER: VognkortFelt[] = [
    {
        kode: 'G',
        navn: 'Egenvekt (med fører)',
        verdi: '1 400 kg',
        forklaring: 'Egenvekten er hva bilen veier klar til kjøring, inkludert fører (75 kg), drivstoff og væsker – men uten passasjerer og last. Her: 1 400 kg.'
    },
    {
        kode: 'F.2',
        navn: 'Tillatt totalvekt',
        verdi: '1 985 kg',
        forklaring: 'Den høyeste vekten bilen lovlig kan ha med alt ombord: fører, passasjerer og last. Her: 1 985 kg. Kjører du tyngre, er det overlast.'
    },
    {
        kode: '—',
        navn: 'Nyttelast (regnes ut)',
        verdi: '585 kg',
        forklaring: 'Nyttelast står ikke som eget felt – du regner den ut selv: tillatt totalvekt minus egenvekt. Her: 1 985 − 1 400 = 585 kg til passasjerer og bagasje. En klassisk oppgave på teoriprøven!'
    },
    {
        kode: 'O.1',
        navn: 'Tilhengervekt med brems',
        verdi: '1 400 kg',
        forklaring: 'Den tyngste bremsede tilhengeren (aktuell totalvekt) bilen har lov til å trekke. Her: 1 400 kg.'
    },
    {
        kode: 'O.2',
        navn: 'Tilhengervekt uten brems',
        verdi: '650 kg',
        forklaring: 'Den tyngste ubremsede tilhengeren bilen kan trekke. Her: 650 kg.'
    },
    {
        kode: '—',
        navn: 'Tillatt vogntogvekt',
        verdi: '3 385 kg',
        forklaring: 'Maksimal samlet vekt for bil + tilhenger. Her: 3 385 kg. Selv om bilen kan trekke 1 400 kg, kan vogntogvekten begrense hvor tungt du faktisk kan laste når bilen er full.'
    },
    {
        kode: 'S.1',
        navn: 'Antall sitteplasser',
        verdi: '5',
        forklaring: 'Hvor mange personer (inkludert fører) bilen er registrert for. Flere passasjerer enn dette er ulovlig – uansett vekt.'
    },
    {
        kode: '—',
        navn: 'Maks taklast',
        verdi: '75 kg',
        forklaring: 'Den tyngste lasten du kan ha på taket, inkludert vekten av takstativ og takboks. Står i vognkortet eller i bilens instruksjonsbok. Her: 75 kg.'
    },
]

export default function VognkortEksempel() {
    const [valgt, setValgt] = useState<number | null>(2) // start på nyttelast — poenget flest bommer på

    return (
        <div style={{
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-lg)',
            overflow: 'hidden',
            backgroundColor: 'var(--color-bg)',
            boxShadow: 'var(--shadow-sm)',
            maxWidth: '680px',
        }}>
            {/* Header som ligner vognkortets topp */}
            <div style={{
                backgroundColor: 'var(--color-bg-secondary)',
                borderBottom: '1px solid var(--color-border)',
                padding: '14px 18px',
            }}>
                <div style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.08em', color: 'var(--color-text-light)', textTransform: 'uppercase' }}>
                    Vognkort del 1 · Fiktivt eksempel
                </div>
                <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginTop: '4px', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: 'monospace', fontSize: '1.3rem', fontWeight: 800, letterSpacing: '0.05em' }}>EK 12345</span>
                    <span style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>Personbil (M1) · Eksempel og Sønn Bilfabrikk</span>
                </div>
            </div>

            {/* Feltliste */}
            <div role="list">
                {FELTER.map((felt, i) => {
                    const aktiv = valgt === i
                    return (
                        <div key={felt.kode + felt.navn} role="listitem">
                            <button
                                type="button"
                                onClick={() => setValgt(aktiv ? null : i)}
                                aria-expanded={aktiv}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '12px',
                                    width: '100%',
                                    padding: '12px 18px',
                                    background: aktiv ? 'var(--color-primary-soft, rgba(45, 212, 191, 0.08))' : 'transparent',
                                    border: 'none',
                                    borderTop: '1px solid var(--color-border)',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    color: 'var(--color-text)',
                                    fontSize: '0.95rem',
                                }}
                            >
                                <span style={{
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    fontSize: '0.8rem',
                                    color: 'var(--color-primary)',
                                    backgroundColor: 'rgba(45, 212, 191, 0.12)',
                                    borderRadius: '4px',
                                    padding: '2px 6px',
                                    minWidth: '38px',
                                    textAlign: 'center',
                                }}>{felt.kode}</span>
                                <span style={{ flexGrow: 1, fontWeight: 600 }}>{felt.navn}</span>
                                <span style={{ fontFamily: 'monospace', fontWeight: 700 }}>{felt.verdi}</span>
                                <span aria-hidden="true" style={{ color: 'var(--color-text-light)', transform: aktiv ? 'rotate(90deg)' : 'none', transition: 'transform 0.15s ease' }}>›</span>
                            </button>
                            {aktiv && (
                                <div style={{
                                    padding: '4px 18px 14px 68px',
                                    fontSize: '0.9rem',
                                    lineHeight: 1.6,
                                    color: 'var(--color-text-light)',
                                    backgroundColor: 'var(--color-primary-soft, rgba(45, 212, 191, 0.08))',
                                }}>
                                    {felt.forklaring}
                                </div>
                            )}
                        </div>
                    )
                })}
            </div>

            <div style={{
                padding: '10px 18px',
                borderTop: '1px solid var(--color-border)',
                fontSize: '0.8rem',
                color: 'var(--color-text-light)',
                backgroundColor: 'var(--color-bg-secondary)',
            }}>
                👆 Trykk på et felt for forklaring. Kodene (G, F.2, O.1 …) er de samme som i ekte norske vognkort.
            </div>
        </div>
    )
}

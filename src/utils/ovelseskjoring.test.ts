import { describe, expect, it } from 'vitest'
import { sporOmMorke, vurder, type Svar } from './ovelseskjoring'

const alt: Svar = { alder: '16-24', grunnkurs: 'ja', dato: '2026-04-20', morke: 'nei', ledsager25: 'ja', ledsagerFem: 'ja', lSkilt: true, speil: true, vekt: true }
const mangler = (s: Svar) => vurder(s).punkter.filter(p => !p.ok).map(p => p.tekst)

describe('Kan dere øvelseskjøre nå?', () => {
    it('17 år, grunnkurs, 20. desember, uten Trafikant i mørket: mangler mørkekjøring', () => {
        const s = { ...alt, dato: '2026-12-20' }
        expect(sporOmMorke(s)).toBe(true)
        expect(vurder(s).ok).toBe(false)
        expect(mangler(s)).toEqual([expect.stringContaining('Trafikant i mørket')])
    })
    it('17 år, grunnkurs, 20. april, uten Trafikant i mørket: dere kan kjøre', () => {
        expect(sporOmMorke(alt)).toBe(false)
        const r = vurder(alt)
        expect(r.ok).toBe(true)
        expect(r.husk).toBe('Husk legitimasjon og øvelseskjøringsbevis.')
    })
    it('15. mars er mørkeperiode, 16. mars er det ikke', () => {
        expect(vurder({ ...alt, dato: '2027-03-15' }).ok).toBe(false)
        expect(vurder({ ...alt, dato: '2027-03-16' }).ok).toBe(true)
        expect(vurder({ ...alt, dato: '2026-11-01' }).ok).toBe(false)
        expect(vurder({ ...alt, dato: '2026-10-31' }).ok).toBe(true)
    })
    it('30 år, 20. desember: spør om Trafikant i mørket, som også gjelder over 25', () => {
        const s = { ...alt, alder: '25+' as const, grunnkurs: '' as const, dato: '2026-12-20' }
        expect(sporOmMorke(s)).toBe(true)
        expect(vurder({ ...s, morke: 'nei' }).ok).toBe(false)
        const r = vurder({ ...s, morke: 'ja' })
        expect(r.ok).toBe(true)
        expect(r.husk).toBe('Husk legitimasjon.')
    })
    it('30 år, 20. april: ikke spørsmål om mørkekjøring', () => {
        const s = { ...alt, alder: '25+' as const, grunnkurs: '' as const }
        expect(sporOmMorke(s)).toBe(false)
        expect(vurder(s).ok).toBe(true)
    })
    it('18 år med førerkort A1, 20. desember: spør om Trafikant i mørket', () => {
        const s = { ...alt, grunnkurs: 'annen' as const, dato: '2026-12-20' }
        expect(sporOmMorke(s)).toBe(true)
        const r = vurder({ ...s, morke: 'ja' })
        expect(r.ok).toBe(true)
        expect(r.husk).toBe('Husk førerkortet og legitimasjon.')
    })
    it('16–24 uten grunnkurs i mørkeperioden: spør ikke om mørkekjøring, grunnkurset mangler', () => {
        const s = { ...alt, grunnkurs: 'nei' as const, dato: '2026-12-20' }
        expect(sporOmMorke(s)).toBe(false)
        expect(vurder(s).ok).toBe(false)
    })
    it('ledsager «Vet ikke» gir ikke «Dere kan kjøre»', () => {
        expect(vurder({ ...alt, ledsagerFem: 'vet' }).ok).toBe(false)
    })
    it('15 år: bare alderssvaret', () => {
        const r = vurder({ ...alt, alder: 'under16' })
        expect(r.ok).toBe(false)
        expect(r.punkter).toHaveLength(1)
    })
    it('16–24 uten grunnkurs: mangler grunnkurs', () => {
        expect(mangler({ ...alt, grunnkurs: 'nei' })).toEqual([expect.stringContaining('trafikalt grunnkurs')])
    })
    it('mangler utstyr i bilen: hvert punkt listes', () => {
        expect(mangler({ ...alt, lSkilt: false, speil: false, vekt: false })).toHaveLength(3)
    })
})

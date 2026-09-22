import { describe, expect, it } from 'vitest'
import { beregnTilhengerklasse } from './TilhengerKalkulator'
describe('førerkortgrenser', () => {
    it.each([[3500,750,'Klasse B'],[2750,751,'B96 eller BE'],[2000,1500,'Klasse B'],[2000,1501,'B96 eller BE'],[2500,1750,'B96 eller BE'],[2500,1751,'Klasse BE'],[3500,3500,'Klasse BE'],[3501,750,'Sjekk særskilt'],[2000,3501,'Sjekk særskilt']])('%s + %s gir %s', (bil,henger,klasse) => {
        expect(beregnTilhengerklasse(Number(bil),Number(henger))?.klasse).toBe(klasse)
    })
    it.each([0,-1,NaN,Infinity,1.5])('avviser ugyldig vekt %s', n => {
        expect(beregnTilhengerklasse(n,750)).toBeNull()
        expect(beregnTilhengerklasse(2000,n)).toBeNull()
    })
})

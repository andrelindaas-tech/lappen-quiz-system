import { afterEach, expect, it, vi } from 'vitest'
import { loadScoreboard } from './localProfile'

afterEach(() => { vi.unstubAllGlobals() })
it('beholder ekte resultater og filtrerer tidligere lagrede demonavn', () => {
  const real = { id: 'player-123', nickname: 'Min runde', score: 500, streak: 2, roundsAnswered: 2, date: '2026-09-21' }
  vi.stubGlobal('window', { localStorage: { getItem: () => JSON.stringify([{ ...real, id: 'mock-1' }, real]) } })
  expect(loadScoreboard()).toEqual([real])
})
it('oppretter ingen fiktive resultater for nye spillere', () => {
  vi.stubGlobal('window', { localStorage: { getItem: () => null } })
  expect(loadScoreboard()).toEqual([])
})

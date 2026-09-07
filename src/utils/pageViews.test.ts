import { describe, expect, it, vi } from 'vitest'
import { afterPageMetadata, createPageViewTracker } from './pageViews'

describe('GA4 pageviews', () => {
    it('counts initial load once, ignores normalization and hash-only changes', () => {
        const emit = vi.fn()
        const tracker = createPageViewTracker(emit)
        tracker.visit('https://teori-test.no/quiz', 'Old title')
        expect(emit).not.toHaveBeenCalled()
        tracker.visit('https://teori-test.no/quiz/', 'Quiz')
        tracker.visit('https://teori-test.no/quiz/', 'Quiz')
        tracker.visit('https://teori-test.no/quiz/#forklaring', 'Quiz')
        expect(emit).toHaveBeenCalledTimes(1)
        expect(emit).toHaveBeenCalledWith({
            page_location: 'https://teori-test.no/quiz/', page_path: '/quiz/',
            page_title: 'Quiz', page_referrer: '',
        })
    })

    it('counts query changes and back/forward revisits with a virtual referrer', () => {
        const emit = vi.fn()
        const tracker = createPageViewTracker(emit)
        tracker.visit('https://teori-test.no/', 'Home', 'https://www.google.com/')
        tracker.visit('https://teori-test.no/quiz/?mode=eksamen&timer=true', 'Quiz')
        tracker.visit('https://teori-test.no/', 'Home')
        tracker.visit('https://teori-test.no/quiz/?mode=eksamen&timer=true', 'Quiz')
        expect(emit).toHaveBeenCalledTimes(4)
        expect(emit.mock.calls[0][0].page_referrer).toBe('https://www.google.com/')
        expect(emit.mock.calls[2][0].page_referrer).toBe('https://teori-test.no/quiz/?mode=eksamen&timer=true')
    })

    it('never reports account visits or their tokens, and counts returning to the same public page', () => {
        const emit = vi.fn()
        const tracker = createPageViewTracker(emit)
        tracker.visit('https://teori-test.no/', 'Home')
        tracker.visit('https://teori-test.no/konto/?code=secret#access_token=secret', 'Account')
        tracker.visit('https://teori-test.no/', 'Home')
        expect(emit).toHaveBeenCalledTimes(2)
        expect(emit.mock.calls[1][0].page_referrer).toBe('')
        expect(JSON.stringify(emit.mock.calls)).not.toContain('secret')
    })

    it('removes private initial referrers and fragments', () => {
        for (const referrer of ['https://teori-test.no/konto/?code=secret', 'https://example.org/?access_token=secret']) {
            const emit = vi.fn()
            createPageViewTracker(emit).visit('https://teori-test.no/', 'Home', referrer)
            expect(emit.mock.calls[0][0].page_referrer).toBe('')
        }
        const emit = vi.fn()
        createPageViewTracker(emit).visit('https://teori-test.no/', 'Home', 'https://example.org/#secret')
        expect(emit.mock.calls[0][0].page_referrer).toBe('https://example.org/')
    })

    it('cancels stale work before either frame, and waits for metadata before sending', () => {
        let id = 0
        const pending = new Map<number, FrameRequestCallback>()
        const request = (callback: FrameRequestCallback) => { pending.set(++id, callback); return id }
        const cancel = (frame: number) => { pending.delete(frame) }
        const tick = () => { const frames = [...pending.values()]; pending.clear(); frames.forEach(cb => cb(0)) }
        const emit = vi.fn()
        const cancelBeforeFirst = afterPageMetadata(emit, request, cancel)
        cancelBeforeFirst()
        tick()
        expect(emit).not.toHaveBeenCalled()
        const cancelBeforeSecond = afterPageMetadata(emit, request, cancel)
        tick()
        cancelBeforeSecond()
        tick()
        expect(emit).not.toHaveBeenCalled()
        afterPageMetadata(emit, request, cancel)
        tick()
        expect(emit).not.toHaveBeenCalled()
        tick()
        expect(emit).toHaveBeenCalledTimes(1)
    })
})

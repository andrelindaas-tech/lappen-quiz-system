// Lightweight GA4 event helper.
// Safe everywhere: no-op if gtag is unavailable (SSR/prerender, adblock, dev).
type GtagParams = Record<string, string | number | boolean | undefined>

export function trackEvent(name: string, params?: GtagParams) {
    if (typeof window !== 'undefined' && typeof (window as unknown as { gtag?: unknown }).gtag === 'function') {
        ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', name, params)
    }
}

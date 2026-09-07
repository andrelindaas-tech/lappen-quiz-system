// Lightweight GA4 event helper.
// No-op on account routes or when gtag is unavailable. Local builds queue only;
// index.html loads the Google tag exclusively on production hostnames.
export type AnalyticsParams = Record<string, string | number | boolean | undefined>

export function trackEvent(name: string, params?: AnalyticsParams) {
    if (typeof window !== 'undefined' && !window.location.pathname.startsWith('/konto')
        && typeof (window as unknown as { gtag?: unknown }).gtag === 'function') {
        ;(window as unknown as { gtag: (...args: unknown[]) => void }).gtag('event', name, params)
    }
}

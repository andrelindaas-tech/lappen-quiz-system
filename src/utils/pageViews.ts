import { normalizeInternalPath } from './internalUrls'
import type { AnalyticsParams } from './analytics'

/** Never use an account callback URL (or a URL containing credentials) as a referrer. */
function safeReferrer(value: string): string {
    if (!value) return ''
    try {
        const url = new URL(value)
        if (!['https:', 'http:'].includes(url.protocol) || url.pathname.startsWith('/konto')) return ''
        if ([...url.searchParams.keys()].some(key => /^(code|token|token_hash|access_token|refresh_token)$/i.test(key))) return ''
        url.hash = ''
        return url.href
    } catch {
        return ''
    }
}

/** Per mounted app, not per URL forever: A → B → A must count three visits. */
export function createPageViewTracker(emit: (params: AnalyticsParams) => void) {
    let previousLocation: string | undefined
    let referrer: string | undefined
    return {
        visit(href: string, title: string, documentReferrer = '') {
            const url = new URL(href)
            if (url.pathname.startsWith('/konto')) {
                previousLocation = undefined
                referrer = ''
                return
            }
            // Do not count the temporary URL before the router's replace/redirect.
            if (normalizeInternalPath(url.pathname) !== url.pathname) return
            url.hash = ''
            if (url.href === previousLocation) return
            emit({
                page_location: url.href,
                page_path: url.pathname + url.search,
                page_title: title,
                page_referrer: referrer ?? safeReferrer(documentReferrer),
            })
            previousLocation = url.href
            referrer = url.href
        },
    }
}

/** Helmet commits on the next animation frame. Cancel both frames on navigation. */
export function afterPageMetadata(
    callback: () => void,
    request: typeof requestAnimationFrame = requestAnimationFrame,
    cancel: typeof cancelAnimationFrame = cancelAnimationFrame,
) {
    let frame = request(() => { frame = request(callback) })
    return () => cancel(frame)
}

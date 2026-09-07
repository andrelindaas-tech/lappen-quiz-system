import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import { trackEvent } from '../utils/analytics'
import { afterPageMetadata, createPageViewTracker } from '../utils/pageViews'

/** Inside the route Suspense boundary so slow code loading cannot report the old title. */
export default function AnalyticsPageView() {
    const { pathname, search } = useLocation()
    const tracker = useRef(createPageViewTracker(params => {
        const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag
        if (!gtag) return
        // Keep subsequent events on the current SPA page, with its virtual referrer.
        gtag('set', params)
        trackEvent('page_view', params)
    }))

    useEffect(() => {
        if (pathname.startsWith('/konto')) {
            tracker.current.visit(window.location.href, '')
            return
        }
        return afterPageMetadata(() => {
            // The browser may already be moving to a route whose lazy module is pending.
            if (window.location.pathname !== pathname || window.location.search !== search) return
            tracker.current.visit(window.location.href, document.title, document.referrer)
        })
    }, [pathname, search])

    return null
}

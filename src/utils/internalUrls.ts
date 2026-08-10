import type { To } from 'react-router-dom'

const FILE_PATH_PATTERN = /\/[^/?#]+\.[^/?#]+$/

/**
 * Keep every crawlable app route on the same trailing-slash convention used by
 * Netlify, canonicals and sitemap.xml. Static files such as .html, .svg and
 * .png are deliberately left unchanged.
 */
export function normalizeInternalPath(pathname: string): string {
    if (
        !pathname
        || pathname === '/'
        || pathname.endsWith('/')
        || !pathname.startsWith('/')
        || pathname.startsWith('//')
        || FILE_PATH_PATTERN.test(pathname)
    ) {
        return pathname
    }

    return `${pathname}/`
}

export function normalizeInternalTo(to: To): To {
    if (typeof to !== 'string') {
        return to.pathname
            ? { ...to, pathname: normalizeInternalPath(to.pathname) }
            : to
    }

    if (!to.startsWith('/') || to.startsWith('//')) return to

    const suffixIndex = to.search(/[?#]/)
    const pathname = suffixIndex === -1 ? to : to.slice(0, suffixIndex)
    const suffix = suffixIndex === -1 ? '' : to.slice(suffixIndex)
    return `${normalizeInternalPath(pathname)}${suffix}`
}

/** Normalize internal anchors embedded in trusted article HTML strings. */
export function normalizeInternalHtmlLinks(html: string): string {
    return html.replace(
        /\bhref=(["'])(\/(?!\/)[^"'?#]*)([?#][^"']*)?\1/gi,
        (_match, quote: string, pathname: string, suffix = '') =>
            `href=${quote}${normalizeInternalPath(pathname)}${suffix}${quote}`,
    )
}

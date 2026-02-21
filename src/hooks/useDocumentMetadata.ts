import { useEffect } from 'react'

interface MetadataOptions {
    title?: string
    description?: string
    canonical?: string
}

const DEFAULT_TITLE = 'Teori-test.no – Gratis øvingsprøve for førerkort klasse B'
const DEFAULT_DESC = 'Øv gratis på teoriprøven for førerkort klasse B (personbil). Realistiske øvingsprøver med trafikkregler, skilt, sikkerhet og mer.'

/**
 * Hook to manage document metadata dynamically
 * Updates title, description, canonical URL and Open Graph tags per page
 */
export function useDocumentMetadata({ title, description, canonical }: MetadataOptions) {
    useEffect(() => {
        // Update Title
        const fullTitle = title ? `${title} | Teori-test.no` : DEFAULT_TITLE
        document.title = fullTitle

        // Update Description
        const desc = description || DEFAULT_DESC
        const metaDesc = document.querySelector('meta[name="description"]')
        if (metaDesc) metaDesc.setAttribute('content', desc)

        // Update Canonical — use pathname-based URL (no hash)
        const canonicalUrl = canonical || (window.location.origin + window.location.pathname)
        const linkCanonical = document.querySelector('link[rel="canonical"]')
        if (linkCanonical) linkCanonical.setAttribute('href', canonicalUrl)

        // Update OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]')
        if (ogTitle) ogTitle.setAttribute('content', fullTitle)

        const ogDesc = document.querySelector('meta[property="og:description"]')
        if (ogDesc) ogDesc.setAttribute('content', desc)

        const ogUrl = document.querySelector('meta[property="og:url"]')
        if (ogUrl) ogUrl.setAttribute('content', canonicalUrl)

    }, [title, description, canonical])
}

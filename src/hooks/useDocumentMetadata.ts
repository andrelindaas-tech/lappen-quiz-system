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
 */
export function useDocumentMetadata({ title, description, canonical }: MetadataOptions) {
    useEffect(() => {
        // Update Title
        const fullTitle = title ? `${title} | Teori-test.no` : DEFAULT_TITLE
        document.title = fullTitle

        // Update Description
        const metaDesc = document.querySelector('meta[name="description"]')
        if (metaDesc) {
            metaDesc.setAttribute('content', description || DEFAULT_DESC)
        }

        // Update Canonical
        const linkCanonical = document.querySelector('link[rel="canonical"]')
        if (linkCanonical) {
            const currentUrl = window.location.origin + (window.location.hash || '')
            linkCanonical.setAttribute('href', canonical || currentUrl)
        }

        // Update OG Tags
        const ogTitle = document.querySelector('meta[property="og:title"]')
        if (ogTitle) ogTitle.setAttribute('content', fullTitle)

        const ogDesc = document.querySelector('meta[property="og:description"]')
        if (ogDesc) ogDesc.setAttribute('content', description || DEFAULT_DESC)

    }, [title, description, canonical])
}

import React from 'react'
import { Link } from 'react-router-dom'

/**
 * Helper to parse bold markdown **text** and italic *text*
 */
function parseBoldAndItalicText(text: string) {
    // 1. Parse inline code first
    const codeRegex = /`([^`]+)`/g
    let codeParts: React.ReactNode[] = []
    let lastIndex = 0
    let match

    while ((match = codeRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            codeParts.push(text.substring(lastIndex, match.index))
        }
        codeParts.push(<code key={`code-${match.index}`} className="theory-inline-code">{match[1]}</code>)
        lastIndex = codeRegex.lastIndex
    }

    if (lastIndex < text.length) {
        codeParts.push(text.substring(lastIndex))
    }

    // 2. Parse bold from the remaining string parts
    let boldParts: React.ReactNode[] = []
    codeParts.forEach((part, i) => {
        if (typeof part === 'string') {
            const boldRegex = /\*\*([^*]+)\*\*/g
            let boldLastIndex = 0
            let boldMatch
            while ((boldMatch = boldRegex.exec(part)) !== null) {
                if (boldMatch.index > boldLastIndex) {
                    boldParts.push(part.substring(boldLastIndex, boldMatch.index))
                }
                boldParts.push(<strong key={`bold-${i}-${boldMatch.index}`}>{boldMatch[1]}</strong>)
                boldLastIndex = boldRegex.lastIndex
            }
            if (boldLastIndex < part.length) {
                boldParts.push(part.substring(boldLastIndex))
            }
        } else {
            boldParts.push(part)
        }
    })
    
    // 3. Parse italic from the remaining string parts
    let finalParts: React.ReactNode[] = []
    boldParts.forEach((part, i) => {
        if (typeof part === 'string') {
            const italicRegex = /\*([^*]+)\*/g
            let itLastIndex = 0
            let itMatch
            while ((itMatch = italicRegex.exec(part)) !== null) {
                if (itMatch.index > itLastIndex) {
                    finalParts.push(part.substring(itLastIndex, itMatch.index))
                }
                
                // Standalone image captions start and end with * and contain no other *
                const trimmed = part.trim()
                const isStandaloneCaption = trimmed.startsWith('*') && trimmed.endsWith('*') && trimmed.split('*').length === 3
                
                if (isStandaloneCaption) {
                    finalParts.push(
                        <em key={`italic-${i}-${itMatch.index}`} style={{ display: 'block', textAlign: 'center', fontSize: '0.9rem', color: 'var(--color-text-light)', marginTop: '-0.5rem', marginBottom: '1.5rem' }}>
                            {itMatch[1]}
                        </em>
                    )
                } else {
                    finalParts.push(
                        <em key={`italic-${i}-${itMatch.index}`}>
                            {itMatch[1]}
                        </em>
                    )
                }
                itLastIndex = italicRegex.lastIndex
            }
            if (itLastIndex < part.length) {
                finalParts.push(part.substring(itLastIndex))
            }
        } else {
            finalParts.push(part)
        }
    })

    return finalParts.length > 0 ? finalParts : [text]
}

/**
 * Helper function to safely parse markdown-style localized [links](/urls), ![images](/img.jpg) and **bold** / *italic* text
 */
export function parseInlineLinks(text: string) {
    const linkRegex = /(!?)\[([^\]]+)\]\(([^)]+)\)/g
    const parts = []
    let lastIndex = 0
    let match

    while ((match = linkRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(...parseBoldAndItalicText(text.substring(lastIndex, match.index)))
        }
        
        const isImage = match[1] === '!'
        const textContent = match[2]
        const url = match[3]

        if (isImage) {
            // Apply different styling if it's a sign (needs smaller width) vs regular illustration
            const isSign = url.includes('/signs/') || (url.includes('skilt') && !url.includes('/images/'));
            parts.push(
                <img 
                    key={match.index} 
                    src={url} 
                    alt={textContent} 
                    style={{ 
                        maxWidth: isSign ? '300px' : '100%', 
                        height: 'auto', 
                        borderRadius: '8px', 
                        margin: '1rem auto', 
                        display: 'block' 
                    }} 
                />
            )
        } else if (url.startsWith('/') || url.startsWith('#')) {
            parts.push(
                <Link 
                    key={match.index} 
                    to={url} 
                    style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}
                    onClick={(e) => {
                        const [path, hash] = url.split('#');
                        
                        // Normalize paths to ignore trailing slashes
                        const normalize = (p: string) => p.replace(/\/$/, '') || '/';
                        const currentPath = normalize(window.location.pathname);
                        const targetPath = path ? normalize(path) : currentPath;
                        
                        if (hash && targetPath === currentPath) {
                            e.preventDefault();
                            e.stopPropagation();
                            const element = document.getElementById(hash);
                            if (element) {
                                element.scrollIntoView({ behavior: 'smooth' });
                                // Update URL hash without full navigation/reload
                                window.history.pushState(null, '', `${window.location.pathname}#${hash}`);
                            }
                        }
                    }}
                >
                    {textContent}
                </Link>
            )
        } else {
            parts.push(
                <a 
                    key={match.index} 
                    href={url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    style={{ color: 'var(--color-primary)', textDecoration: 'none', fontWeight: 600 }}
                    onClick={(e) => e.stopPropagation()} 
                >
                    {textContent}
                </a>
            )
        }
        lastIndex = linkRegex.lastIndex
    }

    if (lastIndex < text.length) {
        parts.push(...parseBoldAndItalicText(text.substring(lastIndex)))
    }

    return parts.length > 0 ? parts : [text]
}

/**
 * Legger data-label på hver <td> i artikkeltabeller, hentet fra <th> i samme kolonne.
 * Brukes fordi tabellene stables på mobil (.responsive-theory-table i theory.css) og da
 * trenger hver celle sitt eget kolonnenavn. Ren strengoperasjon, så den virker også under
 * prerendering hvor DOM ikke finnes. Hver <table> behandles for seg, og celler som
 * allerede har data-label — eller ligger i første kolonne — blir stående urørt.
 */
export function addTableCellLabels(html: string): string {
    return html.replace(/<table[\s\S]*?<\/table>/gi, (table) => {
        const headMatch = table.match(/<thead[\s\S]*?<\/thead>/i)
        if (!headMatch) return table
        const headers: string[] = []
        for (const th of headMatch[0].matchAll(/<th[^>]*>([\s\S]*?)<\/th>/gi)) {
            headers.push(th[1].replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').trim())
        }
        if (headers.length === 0) return table

        const bodyStart = table.search(/<tbody[^>]*>/i)
        if (bodyStart === -1) return table
        const head = table.slice(0, bodyStart)
        const body = table.slice(bodyStart).replace(/<tr[\s\S]*?<\/tr>/gi, (row) => {
            let col = 0
            return row.replace(/<td\b([^>]*)>/gi, (cell, attrs) => {
                const label = headers[col]
                col++
                if (col === 1 || !label || /data-label=/i.test(attrs)) return cell
                return `<td${attrs} data-label="${label.replace(/"/g, '&quot;')}">`
            })
        })
        return head + body
    })
}

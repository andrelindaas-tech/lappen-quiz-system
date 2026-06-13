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
                // Use caption-like styling for italic text to look great under images
                finalParts.push(
                    <em key={`italic-${i}-${itMatch.index}`} style={{ display: 'block', textAlign: 'center', fontSize: '0.9rem', color: 'var(--color-text-light)', marginTop: '-0.5rem', marginBottom: '1.5rem' }}>
                        {itMatch[1]}
                    </em>
                )
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

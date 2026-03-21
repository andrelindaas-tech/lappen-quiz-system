import { Link } from 'react-router-dom'

/**
 * Helper function to safely parse markdown-style localized [links](/urls)
 */
export function parseInlineLinks(text: string) {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    const parts = []
    let lastIndex = 0
    let match

    while ((match = linkRegex.exec(text)) !== null) {
        if (match.index > lastIndex) {
            parts.push(text.substring(lastIndex, match.index))
        }
        const textContent = match[1]
        const url = match[2]

        if (url.startsWith('/') || url.startsWith('#')) {
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
        parts.push(text.substring(lastIndex))
    }

    return parts.length > 0 ? parts : [text]
}

import { useEffect } from 'react'

interface ImageLightboxProps {
    src: string
    alt: string
    isOpen: boolean
    onClose: () => void
}

export default function ImageLightbox({ src, alt, isOpen, onClose }: ImageLightboxProps) {
    // Handle Escape key press
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose()
            }
        }

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown)
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown)
        }
    }, [isOpen, onClose])

    // Lock body scroll when open
    useEffect(() => {
        if (isOpen) {
            const originalOverflow = document.body.style.overflow
            document.body.style.overflow = 'hidden'
            return () => {
                document.body.style.overflow = originalOverflow
            }
        }
    }, [isOpen])

    if (!isOpen) return null

    return (
        <div 
            className="lightbox-overlay" 
            onClick={onClose}
            role="dialog"
            aria-modal="true"
            aria-label="Forstørret bilde"
        >
            <button 
                className="lightbox-close" 
                onClick={onClose} 
                aria-label="Lukk"
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
            
            <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
                <img 
                    src={src} 
                    alt={alt} 
                    className="lightbox-image" 
                    onClick={onClose} /* Clicking the image also closes it for quick dismiss */
                />
                <div className="lightbox-caption">
                    Klikk på bildet eller bakgrunnen for å lukke
                </div>
            </div>
        </div>
    )
}

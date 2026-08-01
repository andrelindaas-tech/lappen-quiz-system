// Dark Mode Toggle Component

interface ThemeToggleProps {
    isDark: boolean
    onToggle: () => void
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
    return (
        <button
            onClick={onToggle}
            className="theme-toggle"
            aria-label={isDark ? 'Bytt til lys modus' : 'Bytt til mørk modus'}
            title={isDark ? 'Bytt til lys modus' : 'Bytt til mørk modus'}
        >
            <span className="tt-theme-glyph" aria-hidden="true" />
            <span className="tt-theme-label">Modus</span>
        </button>
    )
}

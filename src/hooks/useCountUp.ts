// Teller mykt opp fra 0 til målverdien ved montering (ease-out, ~0,7s).
// Respekterer prefers-reduced-motion (viser målverdien umiddelbart).
import { useEffect, useState } from 'react'

function prefersReducedMotion(): boolean {
    return typeof window !== 'undefined'
        && typeof window.matchMedia === 'function'
        && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

export function useCountUp(target: number, durationMs = 700): number {
    const [value, setValue] = useState(() => (prefersReducedMotion() ? target : 0))

    useEffect(() => {
        if (prefersReducedMotion() || target === 0) {
            setValue(target)
            return
        }
        let frame = 0
        const start = performance.now()
        const tick = (now: number) => {
            const t = Math.min(1, (now - start) / durationMs)
            const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
            setValue(Math.round(target * eased))
            if (t < 1) frame = requestAnimationFrame(tick)
        }
        frame = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(frame)
    }, [target, durationMs])

    return value
}

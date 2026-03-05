// Daily Streak Component with Framer Motion bounce animation
import { useState, useEffect, useRef } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { getStreak, isStreakEnabled, toggleStreakEnabled } from '../utils/streakStore'

interface DailyStreakProps {
    shouldBounce: boolean
    onBounceComplete: () => void
}

export default function DailyStreak({ shouldBounce, onBounceComplete }: DailyStreakProps) {
    const [enabled, setEnabled] = useState(() => isStreakEnabled())
    const [count, setCount] = useState(() => getStreak().count)
    const [showMenu, setShowMenu] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const controls = useAnimation()

    // Update count when it changes externally (e.g. after quiz completion)
    useEffect(() => {
        const streak = getStreak()
        setCount(streak.count)
    }, [shouldBounce])

    // Bounce animation when streak increases
    useEffect(() => {
        if (shouldBounce && enabled) {
            controls.start({
                scale: [1, 1.4, 0.9, 1.2, 1],
                rotate: [0, -10, 10, -5, 0],
                transition: { duration: 0.6, ease: 'easeInOut' }
            }).then(() => {
                onBounceComplete()
            })
        }
    }, [shouldBounce, enabled, controls, onBounceComplete])

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
                setShowMenu(false)
            }
        }

        if (showMenu) {
            document.addEventListener('mousedown', handleClickOutside)
            return () => document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [showMenu])

    function handleToggle() {
        const newEnabled = toggleStreakEnabled()
        setEnabled(newEnabled)
        setShowMenu(false)
    }

    // If disabled, hide completely
    if (!enabled) {
        return (
            <div className="streak-container" ref={menuRef}>
                <button
                    className="streak-enable-btn"
                    onClick={() => handleToggle()}
                    title="Aktiver daglig streak"
                    aria-label="Aktiver daglig streak"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
                        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                    </svg>
                </button>
            </div>
        )
    }

    return (
        <div className="streak-container" ref={menuRef}>
            <motion.button
                className="streak-badge"
                onClick={() => setShowMenu(prev => !prev)}
                animate={controls}
                title={`Daglig streak: ${count} ${count === 1 ? 'dag' : 'dager'}`}
                aria-label={`Daglig streak: ${count} dager`}
            >
                <span className="streak-flame">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginTop: '2px' }}>
                        <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></path>
                    </svg>
                </span>
                <span className="streak-count">{count}</span>
            </motion.button>

            {showMenu && (
                <div className="streak-menu">
                    <p className="streak-menu-title">Daglig Streak</p>
                    <p className="streak-menu-info">
                        {count === 0
                            ? 'Fullfør en quiz for å starte!'
                            : `${count} ${count === 1 ? 'dag' : 'dager'} på rad! 💪`
                        }
                    </p>
                    <button
                        className="streak-menu-toggle"
                        onClick={handleToggle}
                    >
                        Skjul streak
                    </button>
                </div>
            )}
        </div>
    )
}

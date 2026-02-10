// Timer Component for Quiz Mode
import { useEffect, useState } from 'react'

interface TimerProps {
    timeLimitMinutes: number
    onTimeUp: () => void
    onTimeWarning?: () => void  // Optional callback at 5 minutes remaining
}

export default function Timer({ timeLimitMinutes, onTimeUp, onTimeWarning }: TimerProps) {
    const [secondsRemaining, setSecondsRemaining] = useState(timeLimitMinutes * 60)
    const [hasWarned, setHasWarned] = useState(false)

    useEffect(() => {
        // Start countdown
        const interval = setInterval(() => {
            setSecondsRemaining(prev => {
                if (prev <= 1) {
                    clearInterval(interval)
                    onTimeUp()
                    return 0
                }
                return prev - 1
            })
        }, 1000)

        return () => clearInterval(interval)
    }, [onTimeUp])

    // Trigger warning at 5 minutes
    useEffect(() => {
        if (secondsRemaining === 300 && !hasWarned && onTimeWarning) {
            onTimeWarning()
            setHasWarned(true)
        }
    }, [secondsRemaining, hasWarned, onTimeWarning])

    // Format time as MM:SS
    const minutes = Math.floor(secondsRemaining / 60)
    const seconds = secondsRemaining % 60
    const timeDisplay = `${minutes}:${seconds.toString().padStart(2, '0')}`

    // Determine if we're in warning state (< 5 minutes)
    const isWarning = secondsRemaining <= 300 && secondsRemaining > 0
    const isExpired = secondsRemaining === 0

    return (
        <div className={`timer ${isWarning ? 'timer-warning' : ''} ${isExpired ? 'timer-expired' : ''}`}>
            <div className="timer-icon">⏱️</div>
            <div className="timer-display">{timeDisplay}</div>
        </div>
    )
}

// Daily Streak LocalStorage utility
// Tracks consecutive days of quiz completion

const STREAK_KEY = 'daily_streak'
const STREAK_ENABLED_KEY = 'streak_enabled'

interface StreakData {
    count: number
    lastDate: string // YYYY-MM-DD
}

function getToday(): string {
    const now = new Date()
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}

function getYesterday(): string {
    const now = new Date()
    now.setDate(now.getDate() - 1)
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`
}

export function getStreak(): StreakData {
    try {
        const raw = localStorage.getItem(STREAK_KEY)
        if (raw) {
            return JSON.parse(raw) as StreakData
        }
    } catch {
        // Corrupted data, reset
    }
    return { count: 0, lastDate: '' }
}

/**
 * Records a quiz completion. Returns the new streak count.
 * - If last completion was today → no change
 * - If last completion was yesterday → increment
 * - Otherwise → reset to 1
 */
export function recordCompletion(): number {
    const streak = getStreak()
    const today = getToday()
    const yesterday = getYesterday()

    if (streak.lastDate === today) {
        // Already recorded today, no change
        return streak.count
    }

    let newCount: number

    if (streak.lastDate === yesterday) {
        // Consecutive day — increment!
        newCount = streak.count + 1
    } else {
        // Streak broken or first time — start fresh
        newCount = 1
    }

    const newStreak: StreakData = { count: newCount, lastDate: today }
    localStorage.setItem(STREAK_KEY, JSON.stringify(newStreak))
    return newCount
}

export function isStreakEnabled(): boolean {
    const val = localStorage.getItem(STREAK_ENABLED_KEY)
    // Default to enabled
    return val !== 'false'
}

export function toggleStreakEnabled(): boolean {
    const current = isStreakEnabled()
    localStorage.setItem(STREAK_ENABLED_KEY, String(!current))
    return !current
}

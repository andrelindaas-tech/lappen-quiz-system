// «Min fremgang» — localStorage-basert fremgangslagring (ingen konto).
// Alt lagres kun lokalt på brukerens enhet.

export interface QuizRecord {
    date: string // ISO
    name: string // f.eks. 'Full prøve', 'Ekspresstest', 'Skilt-test'
    correct: number
    total: number
    passed: boolean
}

const RESULTS_KEY = 'tt_quiz_results'
const ARTICLES_KEY = 'tt_articles_read'
const NAME_KEY = 'tt_display_name'
const MAX_RESULTS = 100

function safeGet(key: string): string | null {
    try {
        return localStorage.getItem(key)
    } catch {
        return null
    }
}

function safeSet(key: string, value: string) {
    try {
        localStorage.setItem(key, value)
    } catch {
        // full/utilgjengelig lagring — ignorer stille
    }
}

// --- Prøveresultater ---

export function recordQuizResult(rec: Omit<QuizRecord, 'date'>) {
    const results = getQuizResults()
    results.unshift({ ...rec, date: new Date().toISOString() })
    safeSet(RESULTS_KEY, JSON.stringify(results.slice(0, MAX_RESULTS)))
}

export function getQuizResults(): QuizRecord[] {
    try {
        const raw = safeGet(RESULTS_KEY)
        if (!raw) return []
        const parsed = JSON.parse(raw)
        return Array.isArray(parsed) ? parsed : []
    } catch {
        return []
    }
}

export function getTotals(): { tests: number; questions: number } {
    const results = getQuizResults()
    return {
        tests: results.length,
        questions: results.reduce((sum, r) => sum + (r.total || 0), 0),
    }
}

export function getCountsByType(): { name: string; count: number }[] {
    const counts = new Map<string, number>()
    for (const r of getQuizResults()) {
        counts.set(r.name, (counts.get(r.name) || 0) + 1)
    }
    return [...counts.entries()]
        .map(([name, count]) => ({ name, count }))
        .sort((a, b) => b.count - a.count)
}

// --- Artikler lest ---

export function markArticleRead(articleId: string) {
    try {
        const raw = safeGet(ARTICLES_KEY)
        const ids: string[] = raw ? JSON.parse(raw) : []
        if (!ids.includes(articleId)) {
            ids.push(articleId)
            safeSet(ARTICLES_KEY, JSON.stringify(ids))
        }
    } catch {
        // ignorer
    }
}

export function getArticlesReadCount(): number {
    try {
        const raw = safeGet(ARTICLES_KEY)
        const ids = raw ? JSON.parse(raw) : []
        return Array.isArray(ids) ? ids.length : 0
    } catch {
        return 0
    }
}

// --- Visningsnavn ---

export function getDisplayName(): string {
    return safeGet(NAME_KEY) || ''
}

export function setDisplayName(name: string) {
    safeSet(NAME_KEY, name.trim().slice(0, 24))
}

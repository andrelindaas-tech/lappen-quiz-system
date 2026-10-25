// Mørkeperioden for Trafikant i mørket: 1. november til og med 15. mars.
export function inDarkSeason(date: Date) {
    const m = date.getMonth() + 1
    const d = date.getDate()
    return m === 11 || m === 12 || m === 1 || m === 2 || (m === 3 && d <= 15)
}

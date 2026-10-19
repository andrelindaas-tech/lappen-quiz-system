export const C = {
    blueSoft: '#60a5fa', red: '#b91c1c', redSoft: '#f87171', reaction: '#94a3b8', obstacle: '#0f172a', obstacleText: '#0f172a',
    grass: '#e6eee5', grassDot: '#c6d6c4', curb: '#bcc6bd', road: '#334155',
    white: '#ffffff', ink: '#142b28', muted: '#425a53', yellow: '#f9cf62', blue: '#38bdf8',
}

export function clampX(x: number, textWidth: number, width: number) {
    return Math.max(textWidth / 2 + 5, Math.min(width - textWidth / 2 - 5, x))
}

export function tag(g: CanvasRenderingContext2D, x: number, y: number, carWidth: number, up: boolean, text: string, color: string, font: string, small: boolean) {
    g.save()
    g.font = `700 ${small ? 10 : 12}px ${font}`
    const w = g.measureText(text).width + 8
    const canvasWidth = g.canvas.width / (window.devicePixelRatio || 1)
    const cx = clampX(x, w, canvasWidth)
    const cy = y + (up ? -1 : 1) * (carWidth / 2 + 11)
    g.fillStyle = '#ffffff'
    roundRect(g, cx - w / 2, cy - 8, w, 16, 4)
    g.fill()
    g.fillStyle = color === C.blue ? '#075985' : '#991b1b'
    g.textAlign = 'center'
    g.textBaseline = 'middle'
    g.fillText(text, cx, cy)
    g.restore()
}

export function roundRect(g: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
    g.beginPath()
    g.roundRect(x, y, w, h, r)
}

export function bush(g: CanvasRenderingContext2D, x: number, y: number, r: number) {
    g.fillStyle = '#8eaf8a'
    g.beginPath()
    g.arc(x, y, r, 0, Math.PI * 2)
    g.fill()
}

// Front bumper is exactly at `front`, so travelled distance matches the scale.
export function drawCar(g: CanvasRenderingContext2D, front: number, cy: number, length: number, width: number, color: string) {
    g.save()
    const x = front - length, y = cy - width / 2
    g.fillStyle = '#0f172a'
    for (const dx of [.18, .72]) {
        g.fillRect(x + length * dx, y - 2, length * .17, 4)
        g.fillRect(x + length * dx, y + width - 2, length * .17, 4)
    }
    g.fillStyle = color
    roundRect(g, x, y, length, width, width * .25)
    g.fill()
    g.strokeStyle = '#0f172a'
    g.lineWidth = 1
    g.stroke()
    g.fillStyle = '#164e63'
    roundRect(g, x + length * .3, y + width * .12, length * .42, width * .76, 2)
    g.fill()
    g.fillStyle = '#e0f2fe'
    g.fillRect(front - 3, y + 2, 2, width * .2)
    g.fillRect(front - 3, y + width * .7, 2, width * .2)
    g.restore()
}

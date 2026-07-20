// Build-time prerendering (SSG).
// Renders every URL from public/sitemap.xml to static HTML in dist/,
// so crawlers (Google, AI bots) get real content without running JS.
// Run AFTER `vite build` and `vite build --ssr` (see package.json "build").
import fs from 'node:fs'
import path from 'node:path'
import { PassThrough } from 'node:stream'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { renderToPipeableStream } from 'react-dom/server'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.resolve(__dirname, '..')
const DIST = path.join(ROOT, 'dist')
const SERVER_BUNDLE = path.join(ROOT, 'dist-server', 'entry-server.js')
const SITEMAP = path.join(ROOT, 'public', 'sitemap.xml')
const BASE_URL = 'https://teori-test.no'

// --- Browser API shims (components read localStorage in state initializers) ---
const memoryStorage = () => {
    const store = new Map()
    return {
        getItem: (k) => (store.has(k) ? store.get(k) : null),
        setItem: (k, v) => store.set(k, String(v)),
        removeItem: (k) => store.delete(k),
        clear: () => store.clear(),
        key: (i) => [...store.keys()][i] ?? null,
        get length() { return store.size },
    }
}
globalThis.localStorage = memoryStorage()
globalThis.sessionStorage = memoryStorage()

// --- Collect routes from the freshly generated sitemap ---
const xml = fs.readFileSync(SITEMAP, 'utf-8')
const routes = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((m) => m[1].replace(BASE_URL, '') || '/')
    // Sitemap-URL-er har trailing slash (matcher Netlify-redirect); rutene normaliseres uten
    .map((r) => (r === '/' ? r : r.replace(/\/+$/, '')))

// --- Load app + template ---
const { createApp } = await import(pathToFileURL(SERVER_BUNDLE).href)
const template = fs.readFileSync(path.join(DIST, 'index.html'), 'utf-8')

function renderRoute(url) {
    return new Promise((resolve, reject) => {
        const { app, helmetContext } = createApp(url)
        const stream = renderToPipeableStream(app, {
            onAllReady() {
                const sink = new PassThrough()
                let html = ''
                sink.on('data', (c) => (html += c))
                sink.on('end', () => resolve({ html, helmet: helmetContext.helmet }))
                stream.pipe(sink)
            },
            onError: reject,
        })
        // Safety: never hang the build on a stuck route
        setTimeout(() => reject(new Error('render timeout')), 30000)
    })
}

function buildDocument(appHtml, helmet) {
    let doc = template
    let head = helmet
        ? [helmet.title, helmet.meta, helmet.link, helmet.script]
              .map((p) => p.toString())
              .filter(Boolean)
              .join('\n  ')
        : ''
    // Only swap in Helmet's <title> if it actually has content —
    // otherwise keep the static default title from index.html
    const helmetTitle = head.match(/<title[^>]*>([\s\S]*?)<\/title>/)
    if (helmetTitle && helmetTitle[1].trim()) {
        doc = doc.replace(/<title>[\s\S]*?<\/title>/, '')
    } else if (helmetTitle) {
        head = head.replace(/<title[^>]*>[\s\S]*?<\/title>\s*/, '')
    }
    if (head.trim()) {
        doc = doc.replace('</head>', `  ${head}\n</head>`)
    }
    return doc.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`)
}

let ok = 0
const failed = []
for (const route of routes) {
    try {
        const { html, helmet } = await renderRoute(route)
        const outDir = route === '/' ? DIST : path.join(DIST, route.replace(/^\//, ''))
        fs.mkdirSync(outDir, { recursive: true })
        fs.writeFileSync(path.join(outDir, 'index.html'), buildDocument(html, helmet), 'utf-8')
        ok++
    } catch (err) {
        failed.push(`${route}: ${err?.message ?? err}`)
    }
}

// Clean up the SSR bundle — only dist/ should be deployed
fs.rmSync(path.join(ROOT, 'dist-server'), { recursive: true, force: true })

console.log(`Prerendered ${ok}/${routes.length} routes.`)
if (failed.length) {
    console.error('Failed routes:\n' + failed.join('\n'))
}
// Homepage must always prerender; tolerate a few stragglers elsewhere
if (failed.some((f) => f.startsWith('/:')) || failed.length > routes.length * 0.05) {
    process.exit(1)
}

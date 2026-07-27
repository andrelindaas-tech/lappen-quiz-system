// IndexNow — varsler Bing/Yandex m.fl. om nye og endrede URL-er.
// Bruk:  node scripts/indexnow.mjs            -> sender alle URL-er i sitemap.xml
//        node scripts/indexnow.mjs <url> ...   -> sender bare de oppgitte URL-ene
// Nokkelen er offentlig med hensikt: filen paa public/<key>.txt beviser eierskap.

import { readFileSync, readdirSync } from 'node:fs'

const HOST = 'teori-test.no'
const KEY = readdirSync('public').find(f => /^[a-f0-9]{32}\.txt$/.test(f))?.replace('.txt', '')
if (!KEY) { console.error('Fant ingen nokkelfil i public/. Avbryter.'); process.exit(1) }

const args = process.argv.slice(2)
let urls = args.length
    ? args
    : [...readFileSync('public/sitemap.xml', 'utf8').matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1])

if (!urls.length) { console.error('Ingen URL-er aa sende.'); process.exit(1) }

console.log(`Sender ${urls.length} URL-er til IndexNow (nokkel ${KEY.slice(0, 6)}...)`)

for (let i = 0; i < urls.length; i += 10000) {
    const batch = urls.slice(i, i + 10000)
    const res = await fetch('https://api.indexnow.org/indexnow', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json; charset=utf-8' },
        body: JSON.stringify({
            host: HOST,
            key: KEY,
            keyLocation: `https://${HOST}/${KEY}.txt`,
            urlList: batch,
        }),
    })
    console.log(`  batch ${i / 10000 + 1}: HTTP ${res.status} ${res.statusText}`)
    if (res.status === 200) console.log('  OK — URL-ene er mottatt.')
    else if (res.status === 202) console.log('  Mottatt, men nokkelen er ikke validert enda. Sjekk at nokkelfilen er deployet.')
    else console.log('  Svar:', (await res.text()).slice(0, 300))
}

import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'

// Shared vector vocabulary keeps the article and exercise illustrations consistent.
const defs = `<defs>
 <linearGradient id="blue" x2="1" y2="1"><stop stop-color="#4ba8d5"/><stop offset="1" stop-color="#176499"/></linearGradient>
 <linearGradient id="orange" x2="1" y2="1"><stop stop-color="#ffc47b"/><stop offset="1" stop-color="#d9843e"/></linearGradient>
 <pattern id="paving" width="38" height="28" patternUnits="userSpaceOnUse"><path d="M0 0H38V28H0Z" fill="none" stroke="#c8c5bd" stroke-width=".8"/></pattern>
 <pattern id="unknown" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(35)"><rect width="12" height="12" fill="#fbebd7"/><path d="M0 0V12" stroke="#dcba89" stroke-width="3"/></pattern>
 <filter id="shadow" x="-40%" y="-40%" width="180%" height="180%"><feDropShadow dx="0" dy="4" stdDeviation="4" flood-color="#152d32" flood-opacity=".2"/></filter>
 <marker id="arrow" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M1 1L6 4L1 7" fill="none" stroke="#1c668f" stroke-width="2" stroke-linejoin="round"/></marker>
 <marker id="walk" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M1 1L6 4L1 7" fill="none" stroke="#9c5334" stroke-width="2"/></marker>
 <g id="car"><g fill="#223643"><rect x="-30" y="-33" width="8" height="22" rx="3"/><rect x="22" y="-33" width="8" height="22" rx="3"/><rect x="-30" y="24" width="8" height="22" rx="3"/><rect x="22" y="24" width="8" height="22" rx="3"/></g><rect x="-26" y="-55" width="52" height="110" rx="15" fill="url(#blue)" stroke="#185679" stroke-width="2"/><path d="M-19-26Q0-34 19-26L16-10H-16Z" fill="#203e52"/><path d="M-17 24H17L19 37Q0 43-19 37Z" fill="#203e52"/><rect x="-16" y="-5" width="32" height="24" rx="5" fill="#82c4e5"/><path d="M-23-19V22M23-19V22" stroke="#c4e9f5" stroke-width="2"/><path d="M-20-47h10m20 0h10" stroke="#fff4c6" stroke-width="5" stroke-linecap="round"/><path d="M-20 47h8m24 0h8" stroke="#e94d4a" stroke-width="4"/><path d="M-9 49h6m6 0h6" stroke="#fff" stroke-width="3"/><rect x="-35" y="-20" width="9" height="7" rx="3" fill="#176499"/><rect x="26" y="-20" width="9" height="7" rx="3" fill="#176499"/></g>
 <g id="other"><rect x="-25" y="-53" width="50" height="106" rx="14" fill="url(#orange)" stroke="#a95d28" stroke-width="2"/><path d="M-18-25Q0-31 18-25L15-8H-15Z" fill="#594d43"/><rect x="-16" y="0" width="32" height="23" rx="5" fill="#ffce98"/><path d="M-17 28H17V38H-17Z" fill="#594d43"/><path d="M-20-46h10m20 0h10" stroke="#fff6d8" stroke-width="4"/></g>
 <g id="person"><ellipse cy="6" rx="16" ry="11" fill="#000" opacity=".1"/><path d="M-7 8L-12 18M5 9L10 18" stroke="#263b4a" stroke-width="7" stroke-linecap="round"/><path d="M-17 2Q0-10 17 2" stroke="#d57248" stroke-width="10" stroke-linecap="round" fill="none"/><ellipse cy="-5" rx="9" ry="10" fill="#e5b598"/><path d="M-8-8Q0-21 8-8" fill="#4d3b33"/></g>
 </defs>`
const badge = (x,y,n) => `<g transform="translate(${x} ${y})"><circle r="16" fill="#fff" stroke="#244e62" stroke-width="2"/><text y="6" text-anchor="middle" font-size="19" font-weight="700" fill="#244e62">${n}</text></g>`
const arrow = (path, color='#1c668f') => `<path d="${path}" fill="none" stroke="${color}" stroke-width="4" stroke-dasharray="8 7" marker-end="url(#${color === '#1c668f' ? 'arrow' : 'walk'})"/>`
const hedge = (x,y,w,h) => `<g filter="url(#shadow)"><rect x="${x}" y="${y}" width="${w}" height="${h}" rx="15" fill="#426c54"/>${Array.from({length:Math.floor(w/24)},(_,i)=>`<ellipse cx="${x+15+i*24}" cy="${y+h/2}" rx="19" ry="${h/2-2}" fill="${i%2?'#658b62':'#73986b'}"/>`).join('')}</g>`
const garden = `<rect width="720" height="400" fill="#e8efdf"/><path d="M40 0V200M670 0V200" stroke="#d7e3cd" stroke-width="2"/><rect x="75" y="26" width="164" height="148" rx="5" fill="#cfcec4" filter="url(#shadow)"/><path d="M64 39L154 8L250 39V149H64Z" fill="#b1bdbe"/><path d="M154 8V149M66 60H247M66 84H247M66 108H247M66 132H247" stroke="#8e9da1" stroke-width="2"/><rect x="285" width="125" height="214" fill="#d4dbd7"/><path d="M299 0V209M396 0V209" stroke="#bdc6c0" stroke-width="2"/>${hedge(23,179,231,28)}<circle cx="653" cy="54" r="37" fill="#7c9d74"/><circle cx="643" cy="43" r="25" fill="#93b283"/>`
const road = `<rect y="213" width="720" height="66" fill="#e5e0d5"/><rect y="213" width="720" height="66" fill="url(#paving)"/><path d="M0 211H720M0 279H720" stroke="#f9f7ef" stroke-width="7"/><rect y="285" width="720" height="115" fill="#556673"/><path d="M0 345H720" stroke="#f0da84" stroke-width="3" stroke-dasharray="23 19"/><path d="M0 291H720M0 397H720" stroke="#c2cad0" stroke-width="2"/>`
const parked = `<use href="#car" transform="translate(347 131)" filter="url(#shadow)"/>${arrow('M347 197V252')}`
const driveway = `${garden}${road}${parked}<use href="#other" transform="translate(146 316) rotate(-90)" filter="url(#shadow)"/>`
const overview = `${driveway}<use href="#person" transform="translate(524 242) rotate(-90)"/>${arrow('M489 244H410','#9c5334')}${badge(393,165,1)}${badge(555,245,2)}${badge(205,316,3)}`
const hidden = `${driveway}<path d="M410 218H604V274H410Z" fill="url(#unknown)" opacity=".9"/>${hedge(415,65,196,140)}${badge(393,165,1)}${badge(510,245,'?')}<text x="491" y="148" font-size="23" fill="#fff" font-weight="600">Hekk</text>`
const observation = `<rect width="720" height="400" fill="#f3f6f4"/>
<text x="28" y="33" font-size="22" font-weight="700" fill="#173e52">Se bakover – og følg med på fronten</text>
<rect y="54" width="720" height="291" fill="#556673"/>
<path d="M0 61H720" stroke="#d6dfd7" stroke-width="9"/>
<path d="M277 82V260M416 82V260" stroke="#edf2ee" stroke-width="3"/>
<rect x="296" y="123" width="103" height="130" rx="25" fill="#b8e3de" fill-opacity=".16" stroke="#b8e3de" stroke-width="2" stroke-dasharray="5 6"/>
<ellipse cx="346" cy="292" rx="94" ry="36" fill="#f4d398" fill-opacity=".22" stroke="#f4d398" stroke-width="2" stroke-dasharray="6 6"/>
<ellipse cx="421" cy="135" rx="55" ry="43" fill="#ffc18c" fill-opacity=".2" stroke="#ffc18c" stroke-width="2" stroke-dasharray="6 6"/>
<use href="#car" transform="translate(347 183) scale(1.16)" filter="url(#shadow)"/>
<path d="M347 255Q347 307 283 309" fill="none" stroke="#173e52" stroke-width="12"/>
<path d="M347 255Q347 307 283 309M299 296L281 309L299 322" fill="none" stroke="#e3f7ff" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M365 114Q404 110 429 140M412 137L431 143L428 123" fill="none" stroke="#173e52" stroke-width="12" stroke-linejoin="round"/>
<path d="M365 114Q404 110 429 140M412 137L431 143L428 123" fill="none" stroke="#ffe3bf" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>
<g filter="url(#shadow)"><circle cx="458" cy="144" r="13" fill="#263b48"/><circle cx="458" cy="140" r="10" fill="#f3cb71"/><circle cx="458" cy="140" r="5" fill="#516570"/></g>
${badge(41,284,1)}<text x="66" y="290" font-size="20" font-weight="700" fill="#fff">Bak bilen</text><path d="M169 285H244" stroke="#f4d398" stroke-width="2"/>
${badge(41,188,2)}<text x="66" y="194" font-size="20" font-weight="700" fill="#fff">Begge sider</text><path d="M184 189H289" stroke="#b8e3de" stroke-width="2"/>
${badge(515,115,3)}<text x="540" y="121" font-size="20" font-weight="700" fill="#fff">Fronten</text>
<text x="510" y="150" font-size="17" fill="#ffe3bf">Pass på utsvinget</text><path d="M496 144H477" stroke="#ffc18c" stroke-width="2"/>
<text x="28" y="378" font-size="19" fill="#173e52">Bakenden mot venstre → fronten svinger mot høyre.</text>`
const parkingArrow = `<path d="M347 224V255Q347 315 250 327H191" fill="none" stroke="#173e52" stroke-width="12" stroke-linecap="round"/><path d="M347 224V255Q347 315 250 327H191" fill="none" stroke="#e3f7ff" stroke-width="7" stroke-dasharray="12 9" stroke-linecap="round"/><path d="M211 310L187 327L211 344" fill="none" stroke="#173e52" stroke-width="13" stroke-linejoin="round" stroke-linecap="round"/><path d="M211 310L187 327L211 344" fill="none" stroke="#e3f7ff" stroke-width="7" stroke-linejoin="round" stroke-linecap="round"/>`
const parking = `<rect width="720" height="400" fill="#e7efdf"/>${hedge(50,16,620,28)}<rect y="64" width="720" height="336" fill="#556673"/><path d="M0 66H720" stroke="#d6dcd6" stroke-width="5"/><path d="M205 80V235H470V80M385 80V235M295 80V235" fill="none" stroke="#e8ece9" stroke-width="3"/><use href="#car" transform="translate(347 160)" filter="url(#shadow)"/><use href="#other" transform="translate(424 155)" filter="url(#shadow)"/>${parkingArrow}${badge(303,146,1)}${badge(471,148,2)}${badge(269,358,3)}`
const turningChoice = `<rect width="720" height="400" fill="#e8efdf"/><path d="M0 194H444M550 194H720" stroke="#d5dfd0" stroke-width="10"/><path d="M0 333H720" stroke="#d5dfd0" stroke-width="12"/>
<rect y="206" width="720" height="118" fill="#c7d0cb"/><rect y="212" width="720" height="106" fill="#556673"/>
<path d="M495 0V230" stroke="#c7d0cb" stroke-width="88"/><path d="M495 0V238" stroke="#556673" stroke-width="76"/>
<path d="M0 265H447M544 265H720" stroke="#f0da84" stroke-width="3" stroke-dasharray="19 15"/>
<path d="M0 218H448Q451 218 451 208V0M539 0V208Q539 218 551 218H720M0 312H720" fill="none" stroke="#e5ece7" stroke-width="2"/>
<rect x="600" y="55" width="80" height="93" rx="4" fill="#cdcfc4"/><path d="M590 63L640 39L690 63V127H590Z" fill="#a9b8ba"/><path d="M640 39V127M592 86H688M592 107H688" stroke="#899da2" stroke-width="2"/>
${hedge(581,160,120,25)}<rect x="538" y="118" width="43" height="28" fill="#c9d0ca"/>
<use href="#car" transform="translate(110 290) rotate(90) scale(.65)" filter="url(#shadow)"/>
<path d="M167 290H280C345 290 345 239 280 239H228M243 227L226 239L243 251" fill="none" stroke="#173e52" stroke-width="10" stroke-linejoin="round"/>
<path d="M167 290H280C345 290 345 239 280 239H228M243 227L226 239L243 251" fill="none" stroke="#e4f7ff" stroke-width="5" stroke-linejoin="round" stroke-dasharray="9 5"/>
${badge(295,178,'A')}<path d="M295 195V224" stroke="#244e62" stroke-width="2"/>
${badge(495,94,'B')}
<text x="24" y="36" font-size="22" font-weight="700" fill="#173e52">Hvor vil du vurdere å vende?</text>
<text x="24" y="80" font-size="20" fill="#173e52">A · Bred vei, mer trafikk</text>
<text x="24" y="114" font-size="20" fill="#173e52">B · Smal sidevei, mindre trafikk</text>
<text x="24" y="369" font-size="18" fill="#173e52">Pilen viser en mulig U-sving – ikke at det er klart.</text>`
// Three arcs follow one continuous three-point turn. In the middle arc
// travel reverses while the car's front continues rotating toward the south.
const turnSteps = [
 {title:'1 · Forover', detail:'Sving mot venstre', path:'M170 285A100 100 0 0 0 120 198.4', x:170,y:285,rotation:0,color:'#e3f7ff'},
 {title:'2 · Bakover', detail:'Rygg med motsatt rattutslag', path:'M120 198.4A50 50 0 0 0 170 198.4', x:120,y:198.4,rotation:-60,color:'#ffd08a'},
 {title:'3 · Forover', detail:'Fullfør i motsatt retning', path:'M170 198.4A100 100 0 0 0 120 285', x:170,y:198.4,rotation:-120,color:'#e3f7ff'}
]
const turningSideRoad = `<rect width="720" height="400" fill="#f3f6f3"/>
<text x="24" y="30" font-size="21" font-weight="700" fill="#173e52">B · Vending inne på sideveien</text>
<defs><marker id="step-forward" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="16" refX="12" refY="8" orient="auto"><path d="M3 2L12 8L3 14" fill="none" stroke="#e3f7ff" stroke-width="4" stroke-linejoin="round"/></marker><marker id="step-reverse" markerUnits="userSpaceOnUse" markerWidth="16" markerHeight="16" refX="12" refY="8" orient="auto"><path d="M3 2L12 8L3 14" fill="none" stroke="#ffd08a" stroke-width="4" stroke-linejoin="round"/></marker></defs>
${turnSteps.map((step,i)=>`<g transform="translate(${i*240} 0)">
<rect x="8" y="48" width="224" height="299" rx="12" fill="#e4eddf"/>
<rect x="57" y="91" width="151" height="247" fill="#c5cfc8"/><rect x="63" y="91" width="139" height="247" fill="#556673"/>
<path d="M68 91V338M197 91V338" stroke="#d9e3dd" stroke-width="2"/>
<text x="22" y="77" font-size="20" font-weight="700" fill="#173e52">${step.title}</text>
<path d="M170 285A100 100 0 0 0 120 198.4A50 50 0 0 0 170 198.4A100 100 0 0 0 120 285" fill="none" stroke="#a6b7be" stroke-opacity=".35" stroke-width="2" stroke-dasharray="4 6"/>
<path d="${step.path}" fill="none" stroke="#16394c" stroke-width="10"/>
<path d="${step.path}" fill="none" stroke="${step.color}" stroke-width="5" marker-end="url(#${i===1?'step-reverse':'step-forward'})"/>
<use href="#car" transform="translate(${step.x} ${step.y}) rotate(${step.rotation}) scale(.43)" filter="url(#shadow)"/>
${i===2?'<use href="#car" transform="translate(120 307) rotate(180) scale(.43)" opacity=".45"/>':''}
<text x="120" y="366" text-anchor="middle" font-size="${i===1?14:16}" fill="#173e52">${step.detail}</text></g>`).join('')}
<text x="24" y="391" font-size="14" fill="#526a77">Prinsippskisse: Kontroller hele området før hver bevegelse. Pilene er ikke målte hjulspor.</text>`
const scenes = {
 'vending-sidevei-tre-bevegelser.svg': ['Tre bevegelser for vending: forover, bakover og forover i motsatt retning', turningSideRoad],
 'vending-velg-sted.svg': ['To alternativer for vending: bred vei eller roligere sidevei', turningChoice],
 'rygging-frontutsving-parkering.svg': ['Rygging ut av parkeringslomme: kontroller plassen til frontens utsving', parking],
 'rygging-ut-av-innkjorsel.svg': ['Rygging over fortau: bilen må vente på gående og trafikk', overview],
 'rygging-sikt-bak-hekk.svg': ['Hekken skjuler en del av området bak bilen', hidden],
 'observasjon-front-og-blindsoner.svg': ['Kontroller bak bilen, sidene og området fronten svinger ut i', observation]
}
for (const [name,[title,body]] of Object.entries(scenes)) {
 const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1440" height="800" viewBox="0 0 720 400" role="img" aria-labelledby="title"><title id="title">${title}</title>${defs}<g font-family="Arial, sans-serif">${body}</g></svg>`
 writeFileSync(fileURLToPath(new URL(`../public/images/rygging/${name}`,import.meta.url)),svg)
}
// Stack the same three steps on narrow screens so arrows and captions stay readable.
const mobileSteps = [...turningSideRoad.matchAll(/<g transform="translate\(\d+ 0\)">[\s\S]*?<\/g>/g)]
 .map((match, i) => match[0].replace(/translate\(\d+ 0\)/, `translate(0 ${i * 330 - 42})`)).join('')
const stepMarkers = turningSideRoad.match(/<defs>[\s\S]*?<\/defs>/)[0]
writeFileSync(fileURLToPath(new URL('../public/images/rygging/vending-sidevei-mobil.svg', import.meta.url)), `<svg xmlns="http://www.w3.org/2000/svg" width="480" height="1980" viewBox="0 0 240 990" role="img" aria-labelledby="title"><title id="title">Vending på sideveien: forover, bakover og forover</title>${defs}${stepMarkers}<g font-family="Arial, sans-serif">${mobileSteps}</g></svg>`)
console.log('Updated reversing and turning illustrations.')

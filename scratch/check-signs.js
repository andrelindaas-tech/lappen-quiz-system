import { trafficSigns } from './src/data/trafficSigns.js'

console.log('Signs in forbudsskilt category:')
const forbudSigns = trafficSigns.filter(s => s.category === 'forbudsskilt')
console.log(JSON.stringify(forbudSigns, null, 2))
console.log(`Total: ${forbudSigns.length}`)

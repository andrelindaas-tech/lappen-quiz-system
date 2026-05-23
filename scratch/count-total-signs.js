import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
const SIGNS_DATA_PATH = path.join(ROOT_DIR, 'src/data/trafficSigns.ts');

if (!fs.existsSync(SIGNS_DATA_PATH)) {
  console.error('❌ Data file not found!');
  process.exit(1);
}

const content = fs.readFileSync(SIGNS_DATA_PATH, 'utf-8');

// Match each object block by splitting or finding `id:`
const regex = /id:\s*['"]([^'"]+)['"]/g;
const ids = [];
let match;
while ((match = regex.exec(content)) !== null) {
  ids.push(match[1]);
}

// Let's also parse categories to get a breakdown
const blocks = content.split(/\n\s*\{\s*\n/);
const categoryCounts = {};
let totalCount = 0;

for (const block of blocks) {
  const idMatch = block.match(/id:\s*['"]([^'"]+)['"]/);
  const categoryMatch = block.match(/category:\s*['"]([^'"]+)['"]/);
  if (idMatch) {
    const category = categoryMatch ? categoryMatch[1] : 'unknown';
    categoryCounts[category] = (categoryCounts[category] || 0) + 1;
    totalCount++;
  }
}

console.log('📊 Traffic Sign Count Summary:');
console.log(`- Total Signs: ${totalCount}`);
console.log('\nBreakdown by category:');
for (const [cat, count] of Object.entries(categoryCounts)) {
  console.log(`- ${cat}: ${count}`);
}

import { trafficSigns } from '../src/data/trafficSigns';
import { trafficSignCategories } from '../src/data/trafficSignCategories';
import fs from 'fs';
import path from 'path';

const projectRoot = path.resolve('.');

console.log('--- STARTING VERIFICATION ---');

// 1. Check fareskilt category is active
const fareskiltCat = trafficSignCategories.find(c => c.id === 'fareskilt');
if (!fareskiltCat) {
  console.error('FAIL: Fareskilt category not found in trafficSignCategories!');
  process.exit(1);
}
if (!fareskiltCat.isActive) {
  console.error('FAIL: Fareskilt category is NOT active!');
  process.exit(1);
}
console.log('PASS: Fareskilt category is active.');

// 2. Filter signs
const warningSigns = trafficSigns.filter(s => s.category === 'fareskilt');
console.log(`INFO: Found ${warningSigns.length} warning signs (expected 22).`);

if (warningSigns.length !== 22) {
  console.error(`FAIL: Warning signs count is ${warningSigns.length}, expected 22.`);
  process.exit(1);
}
console.log('PASS: Exactly 22 warning signs found.');

// 3. Verify each sign's fields and image
let errors = 0;
warningSigns.forEach(s => {
  console.log(`Checking sign: ${s.code} (${s.name})`);
  
  if (!s.id) { console.error(`  FAIL: Missing id`); errors++; }
  if (!s.code) { console.error(`  FAIL: Missing code`); errors++; }
  if (!s.name) { console.error(`  FAIL: Missing name`); errors++; }
  if (!s.slug) { console.error(`  FAIL: Missing slug`); errors++; }
  if (!s.imagePath) { console.error(`  FAIL: Missing imagePath`); errors++; }
  
  if (!s.shortExplanation || s.shortExplanation.trim() === '') {
    console.error(`  FAIL: Missing shortExplanation (Kort forklart)`); errors++;
  }
  if (!s.longExplanation || s.longExplanation.trim() === '') {
    console.error(`  FAIL: Missing longExplanation (Kort betydning)`); errors++;
  }
  if (s.theoryTrap === undefined || s.theoryTrap === null) {
    console.error(`  FAIL: Missing theoryTrap (Vanlig misforståelse)`); errors++;
  }
  
  // What to do (2-3 items)
  if (!s.whatToDo || !Array.isArray(s.whatToDo) || s.whatToDo.length < 2 || s.whatToDo.length > 3) {
    console.warn(`  WARN: whatToDo has ${s.whatToDo?.length} items. Should be 2-3 handlinger.`);
  }

  // Confused with (array of strings)
  if (!s.confusedWith || !Array.isArray(s.confusedWith)) {
    console.error(`  FAIL: confusedWith is not an array`); errors++;
  }

  // Sources (at least 1)
  if (!s.sources || !Array.isArray(s.sources) || s.sources.length === 0) {
    console.error(`  FAIL: Missing sources (kilder)`); errors++;
  } else {
    s.sources.forEach(src => {
      if (!src.name || !src.url) {
        console.error(`  FAIL: Source is invalid: ${JSON.stringify(src)}`); errors++;
      }
    });
  }

  // Aliases
  if (!s.aliases || !Array.isArray(s.aliases)) {
    console.error(`  FAIL: aliases is not an array`); errors++;
  }

  // Check image exists
  const absImagePath = path.join(projectRoot, 'public', s.imagePath);
  if (!fs.existsSync(absImagePath)) {
    console.error(`  FAIL: Image file does not exist at ${absImagePath}`); errors++;
  }
});

// 4. Verify specific constraints (140, 142, 146.1)
const s140 = warningSigns.find(s => s.code === '140');
if (!s140) {
  console.error('FAIL: Sign 140 not found');
  errors++;
} else {
  if (s140.name !== 'Fotgjengere') {
    console.error(`FAIL: Sign 140 name is ${s140.name}, expected "Fotgjengere"`);
    errors++;
  }
  if (s140.imagePath !== '/signs/fareskilt/skilt-140-avstand-til-gangfelt.jpg') {
    console.error(`FAIL: Sign 140 imagePath is ${s140.imagePath}, expected "/signs/fareskilt/skilt-140-avstand-til-gangfelt.jpg"`);
    errors++;
  }
  console.log('PASS: Sign 140 verified successfully.');
}

const s142 = warningSigns.find(s => s.id === '142');
if (!s142) {
  console.error('FAIL: Sign 142 (Barn) not found by id "142"');
  errors++;
} else {
  if (s142.code !== '142' || s142.slug !== 'barn' || s142.imagePath !== '/signs/fareskilt/skilt-142-barn.jpg') {
    console.error(`FAIL: Sign 142 has modified code/slug/imagePath: ${JSON.stringify(s142)}`);
    errors++;
  }
  console.log('PASS: Sign 142 references intact.');
}

const s146_1 = warningSigns.find(s => s.id === '146-1');
if (!s146_1) {
  console.error('FAIL: Sign 146.1 (Elg) not found by id "146-1"');
  errors++;
} else {
  if (s146_1.code !== '146.1' || s146_1.slug !== 'elg' || s146_1.imagePath !== '/signs/fareskilt/skilt-146-1-elg.jpg') {
    console.error(`FAIL: Sign 146-1 has modified code/slug/imagePath: ${JSON.stringify(s146_1)}`);
    errors++;
  }
  console.log('PASS: Sign 146.1 references intact.');
}

// 5. Test search functionality
const searchQueries = ['glatt', 'elg', 'sving', 'vegarbeid', 'tunnel'];
searchQueries.forEach(query => {
  const matches = warningSigns.filter(s => {
    const q = query.toLowerCase();
    const nameMatch = s.name.toLowerCase().includes(q);
    const dispMatch = s.displayName?.toLowerCase().includes(q);
    const codeMatch = s.code.toLowerCase().includes(q);
    const explMatch = s.shortExplanation.toLowerCase().includes(q);
    const aliasMatch = s.aliases?.some(a => a.toLowerCase().includes(q));
    return nameMatch || dispMatch || codeMatch || explMatch || aliasMatch;
  });
  console.log(`Search for "${query}": found ${matches.length} warning signs.`);
  if (matches.length === 0) {
    console.error(`FAIL: Search for "${query}" returned no warning signs.`);
    errors++;
  } else {
    matches.forEach(m => console.log(`  - Match: ${m.code} (${m.name})`));
  }
});

if (errors > 0) {
  console.error(`--- VERIFICATION FAILED WITH ${errors} ERRORS ---`);
  process.exit(1);
} else {
  console.log('--- ALL VERIFICATIONS PASSED SUCCESSFULLY ---');
}

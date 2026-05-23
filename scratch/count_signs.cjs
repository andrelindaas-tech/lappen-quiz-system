const fs = require('fs');
const path = require('path');

// Since trafficSigns.ts has type definitions, we can write a small JS file to read it as a string
// and count instances or we can import the transpiled file if it exists, or just read trafficSigns.ts
// and count matches of id: '...' or similar.
// Better yet, let's write a simple script that reads the file content and uses regex to find all signs.

const filePath = path.join(__dirname, '..', 'src', 'data', 'trafficSigns.ts');
const content = fs.readFileSync(filePath, 'utf-8');

// Match id: '...'
const matches = content.match(/id:\s*'([^']+)'/g);
const totalSigns = matches ? matches.length : 0;

// Let's also see what categories they belong to
const categoryMatches = content.match(/category:\s*'([^']+)'/g);

const categories = {};
if (categoryMatches) {
    categoryMatches.forEach(cat => {
        const name = cat.replace(/category:\s*'|'/g, '');
        categories[name] = (categories[name] || 0) + 1;
    });
}

console.log("Total signs in trafficSigns.ts:", totalSigns);
console.log("Category breakdown:");
console.log(categories);

// Let's find which categories are active
const categoryFilePath = path.join(__dirname, '..', 'src', 'data', 'trafficSignCategories.ts');
const catContent = fs.readFileSync(categoryFilePath, 'utf-8');

// We want to find categories where isActive is true
// Category blocks:
// {
//     id: 'fareskilt',
//     name: 'Fareskilt',
//     isActive: true,
//     ...
// }
// Let's count how many categories are active and how many signs in active categories are there.
// We can parse the files or do regex.
// We use regex to parse categories and signs.

const catRegex = /id:\s*'([^']+)'[\s\S]*?isActive:\s*(true|false)/g;
let catMatch;
const activeCategories = [];
while ((catMatch = catRegex.exec(catContent)) !== null) {
    if (catMatch[2] === 'true') {
        activeCategories.push(catMatch[1]);
    }
}
console.log("Active categories:", activeCategories);

// Let's count signs in active categories
// We can extract each sign's category and id
const signRegex = /id:\s*'([^']+)'[\s\S]*?category:\s*'([^']+)'/g;
let signMatch;
let activeSignsCount = 0;
const activeSigns = [];
while ((signMatch = signRegex.exec(content)) !== null) {
    const id = signMatch[1];
    const category = signMatch[2];
    if (activeCategories.includes(category)) {
        activeSignsCount++;
        activeSigns.push(id);
    }
}
console.log("Total active signs (belonging to active categories):", activeSignsCount);

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const ROOT_DIR = path.resolve(__dirname, '..');
const THEORY_DATA_PATH = path.join(ROOT_DIR, 'src/data/theoryData.ts');
const QUESTIONS_DATA_PATH = path.join(ROOT_DIR, 'src/data/questionPages.ts');
const CAT_DATA_PATH = path.join(ROOT_DIR, 'src/data/trafficSignCategories.ts');
const SIGNS_DATA_PATH = path.join(ROOT_DIR, 'src/data/trafficSigns.ts');
const SITEMAP_PATH = path.join(ROOT_DIR, 'public/sitemap.xml');

const BASE_URL = 'https://teori-test.no';
const TODAY = new Date().toISOString().split('T')[0];

function generateSitemap() {
  console.log('Generating sitemap.xml...');

  // 1. Static and Hub URLs
  const urls = [
    { loc: '/', priority: '1.0', changefreq: 'weekly' },
    { loc: '/laeringsressurser', priority: '0.8', changefreq: 'monthly' },
    { loc: '/laeringsspill', priority: '0.7', changefreq: 'monthly' },
    { loc: '/laeringsspill/stopplengde', priority: '0.7', changefreq: 'monthly' },
    { loc: '/laeringsspill/veimerking', priority: '0.7', changefreq: 'monthly' },
    { loc: '/laeringsspill/skiltduellen', priority: '0.7', changefreq: 'monthly' },
    { loc: '/trafikkskilt', priority: '0.8', changefreq: 'monthly' },
    { loc: '/quiz', priority: '0.8', changefreq: 'monthly' },
    { loc: '/quiz/vikeplikt', priority: '0.6', changefreq: 'monthly' },
    { loc: '/quiz/skilt', priority: '0.6', changefreq: 'monthly' },
    { loc: '/quiz/fartsregler', priority: '0.6', changefreq: 'monthly' },
    { loc: '/quiz/veimerking', priority: '0.6', changefreq: 'monthly' },
    { loc: '/sporsmal', priority: '0.7', changefreq: 'weekly' },
  ];

  // 1b. Spørsmålssider fra questionPages.ts
  if (fs.existsSync(QUESTIONS_DATA_PATH)) {
    const content = fs.readFileSync(QUESTIONS_DATA_PATH, 'utf-8');
    const slugRegex = /slug:\s*['"]([^'"]+)['"]/g;
    let qm;
    while ((qm = slugRegex.exec(content)) !== null) {
      urls.push({
        loc: `/sporsmal/${qm[1]}`,
        priority: '0.6',
        changefreq: 'monthly'
      });
    }
  } else {
    console.warn(`Warning: Could not find question pages at ${QUESTIONS_DATA_PATH}`);
  }

  // 2. Parse theory articles from theoryData.ts
  if (fs.existsSync(THEORY_DATA_PATH)) {
    const content = fs.readFileSync(THEORY_DATA_PATH, 'utf-8');
    // Extract IDs using anchored word-boundary regex
    const idRegex = /\bid:\s*['"]([^'"]+)['"]/g;
    const ids = new Set();
    let match;
    while ((match = idRegex.exec(content)) !== null) {
      const id = match[1];
      // Filter out types/reserved words that might match
      const reserved = [
        'string', 'text', 'formula', 'info', 'warning', 'tip', 'example', 
        'signs', 'calculator', 'pyramid', 'table', 'component', 'summary'
      ];
      if (!reserved.includes(id)) {
        ids.add(id);
      }
    }
    
    // Add unique article URLs
    for (const id of ids) {
      urls.push({
        loc: `/laeringsressurser/${id}`,
        priority: '0.7',
        changefreq: 'monthly'
      });
    }
  } else {
    console.warn(`Warning: Could not find theory data at ${THEORY_DATA_PATH}`);
  }

  // 3. Parse active categories from trafficSignCategories.ts
  const activeCategories = new Set();
  if (fs.existsSync(CAT_DATA_PATH)) {
    const content = fs.readFileSync(CAT_DATA_PATH, 'utf-8');
    // Find blocks in categories array
    const blocks = content.split(/\{/);
    for (const block of blocks) {
      const slugMatch = block.match(/slug:\s*['"]([^'"]+)['"]/);
      const isActiveMatch = block.match(/isActive:\s*true/);
      if (slugMatch && isActiveMatch) {
        const slug = slugMatch[1];
        activeCategories.add(slug);
        urls.push({
          loc: `/trafikkskilt/${slug}`,
          priority: '0.7',
          changefreq: 'monthly'
        });
      }
    }
  } else {
    console.warn(`Warning: Could not find categories data at ${CAT_DATA_PATH}`);
  }

  // 4. Parse active signs from trafficSigns.ts (incl. image for Google Images)
  if (fs.existsSync(SIGNS_DATA_PATH)) {
    const content = fs.readFileSync(SIGNS_DATA_PATH, 'utf-8');
    // Split into individual sign blocks
    const blocks = content.split(/\n\s*\{/);
    for (const block of blocks) {
      const slugMatch = block.match(/slug:\s*['"]([^'"]+)['"]/);
      const categoryMatch = block.match(/category:\s*['"]([^'"]+)['"]/);
      const imageMatch = block.match(/imagePath:\s*['"]([^'"]+)['"]/);
      if (slugMatch && categoryMatch) {
        const slug = slugMatch[1];
        const category = categoryMatch[1];
        if (activeCategories.has(category)) {
          urls.push({
            loc: `/trafikkskilt/${category}/${slug}`,
            priority: '0.6',
            changefreq: 'monthly',
            image: imageMatch ? imageMatch[1] : null
          });
        }
      }
    }
  } else {
    console.warn(`Warning: Could not find traffic signs data at ${SIGNS_DATA_PATH}`);
  }

  // Generate XML sitemap (with image extension for sign photos)
  let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
  xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n';

  for (const url of urls) {
    xml += '    <url>\n';
    xml += `        <loc>${BASE_URL}${url.loc}</loc>\n`;
    xml += `        <lastmod>${TODAY}</lastmod>\n`;
    xml += `        <changefreq>${url.changefreq}</changefreq>\n`;
    xml += `        <priority>${url.priority}</priority>\n`;
    if (url.image) {
      xml += '        <image:image>\n';
      xml += `            <image:loc>${BASE_URL}${url.image}</image:loc>\n`;
      xml += '        </image:image>\n';
    }
    xml += '    </url>\n';
  }
  
  xml += '</urlset>\n';

  fs.writeFileSync(SITEMAP_PATH, xml, 'utf-8');
  console.log(`Successfully generated sitemap with ${urls.length} URLs at ${SITEMAP_PATH}`);
}

generateSitemap();

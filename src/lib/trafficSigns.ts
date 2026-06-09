import { trafficSigns, TrafficSign } from '../data/trafficSigns';
import { trafficSignCategories, TrafficSignCategory } from '../data/trafficSignCategories';

/**
 * Returns all traffic signs belonging to a specific category.
 */
export function getTrafficSignsByCategory(categorySlug: string): TrafficSign[] {
  return trafficSigns.filter((sign) => sign.category === categorySlug);
}

/**
 * Returns a specific traffic sign by its category slug and sign slug.
 */
export function getTrafficSignBySlug(categorySlug: string, signSlug: string): TrafficSign | undefined {
  return trafficSigns.find(
    (sign) => sign.category === categorySlug && sign.slug === signSlug
  );
}

/**
 * Searches for traffic signs matching the query (checks name, displayName, code, description, aliases, and category-based visual attributes).
 */
export function searchTrafficSigns(query: string): TrafficSign[] {
  const cleanQuery = query.toLowerCase().trim();
  if (!cleanQuery) return [];

  // Normalize query: strip common search terms like "skilt", "nr", "nummer" when they are separate words
  const processedQuery = cleanQuery
    .replace(/\bskilt\b/g, '')
    .replace(/\bnr\b/g, '')
    .replace(/\bnummer\b/g, '')
    .replace(/\s+/g, ' ')
    .trim();

  // Fallback to original cleanQuery if the stripping resulted in an empty string (e.g. user searched for just "skilt")
  const finalQuery = processedQuery || cleanQuery;

  // Split query into individual keywords, filtering out common prepositions/conjunctions
  const words = finalQuery.split(/\s+/).filter(w => w.length > 0);
  const stopWords = ['med', 'og', 'i', 'på', 'til', 'for', 'av', 'et', 'en', 'eller', 'som'];
  const keywords = words.filter(w => !stopWords.includes(w));
  const searchTerms = keywords.length > 0 ? keywords : words;

  return trafficSigns
    .map((sign) => {
      const name = sign.name.toLowerCase();
      const displayName = (sign.displayName || '').toLowerCase();
      const code = sign.code.toLowerCase();
      const shortExplanation = sign.shortExplanation.toLowerCase();
      const longExplanation = (sign.longExplanation || '').toLowerCase();
      const theoryTrap = sign.theoryTrap.toLowerCase();
      const aliases = (sign.aliases || []).map(a => a.toLowerCase()).join(' ');
      const categoryText = sign.category.toLowerCase();

      // Dynamically add visual descriptors (colors, shapes, key elements) based on category to make visual searches extremely smart
      let visualTags = '';
      if (sign.category === 'pabudsskilt') {
        visualTags = 'blå blått rund rundt hvit hvitt pil piler kjoreretning kjøreretning';
      } else if (sign.category === 'forbudsskilt') {
        visualTags = 'rød rødt rund rundt hvit hvitt gul gult';
      } else if (sign.category === 'fareskilt') {
        visualTags = 'rød rødt trekant trekantet hvit hvitt gul gult';
      } else if (sign.category === 'opplysningsskilt') {
        visualTags = 'blå blått firkant firkantet hvit hvitt';
      } else if (sign.category === 'vikeplikt-og-forkjorsskilt') {
        visualTags = 'vikeplikt forkjørshøyre forkjørsveg trekant oppned trekantet firkant gul gult hvit hvitt';
      } else if (sign.category === 'vegvisningsskilt') {
        visualTags = 'blå blått firkant firkantet hvit hvitt vegviser';
      } else if (sign.category === 'markeringsskilt') {
        visualTags = 'gul gult rød rødt hvit hvitt markeringsskilt';
      } else if (sign.category === 'underskilt') {
        visualTags = 'hvit hvitt firkant firkantet';
      }

      const allText = `${name} ${displayName} ${code} ${shortExplanation} ${longExplanation} ${theoryTrap} ${aliases} ${categoryText} ${visualTags}`;

      // Check if all search terms match somewhere in the text
      const matchesAllTerms = searchTerms.every(term => allText.includes(term));

      if (!matchesAllTerms) return null;

      // Calculate score for ranking
      let score = 0;
      
      // 1. Exact match on code gets highest score
      if (code === finalQuery) score += 1000;
      else if (code.includes(finalQuery)) score += 500;

      // 2. Exact match or includes on name/displayName
      if (name === finalQuery || displayName === finalQuery) score += 800;
      else if (name.includes(finalQuery)) score += 300;

      // 3. Match on aliases
      if (sign.aliases?.some(a => a.toLowerCase() === finalQuery)) score += 400;
      else if (sign.aliases?.some(a => a.toLowerCase().includes(finalQuery))) score += 200;

      return { sign, score };
    })
    .filter((result): result is { sign: TrafficSign; score: number } => result !== null)
    .sort((a, b) => b.score - a.score)
    .map(result => result.sign);
}

/**
 * Returns all traffic sign categories.
 */
export function getAllCategories(): TrafficSignCategory[] {
  return trafficSignCategories;
}

/**
 * Returns a specific category by its slug.
 */
export function getCategoryBySlug(slug: string): TrafficSignCategory | undefined {
  return trafficSignCategories.find((cat) => cat.slug === slug);
}

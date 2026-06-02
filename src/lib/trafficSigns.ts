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
 * Searches for traffic signs matching the query (checks name, displayName, code, description, and aliases).
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

  return trafficSigns.filter((sign) => {
    const nameMatch = sign.name.toLowerCase().includes(finalQuery);
    const displayNameMatch = sign.displayName?.toLowerCase().includes(finalQuery) || false;
    const codeMatch = sign.code.toLowerCase().includes(finalQuery);
    const explanationMatch = sign.shortExplanation.toLowerCase().includes(finalQuery) || 
      sign.longExplanation?.toLowerCase().includes(finalQuery) || false;
    const trapMatch = sign.theoryTrap.toLowerCase().includes(finalQuery);
    const aliasMatch = sign.aliases?.some((alias) => alias.toLowerCase().includes(finalQuery)) || false;

    return nameMatch || displayNameMatch || codeMatch || explanationMatch || trapMatch || aliasMatch;
  });
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

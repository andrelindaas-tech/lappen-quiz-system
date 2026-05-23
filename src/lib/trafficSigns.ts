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

  return trafficSigns.filter((sign) => {
    const nameMatch = sign.name.toLowerCase().includes(cleanQuery);
    const displayNameMatch = sign.displayName?.toLowerCase().includes(cleanQuery) || false;
    const codeMatch = sign.code.toLowerCase().includes(cleanQuery);
    const explanationMatch = sign.shortExplanation.toLowerCase().includes(cleanQuery) || 
      sign.longExplanation?.toLowerCase().includes(cleanQuery) || false;
    const trapMatch = sign.theoryTrap.toLowerCase().includes(cleanQuery);
    const aliasMatch = sign.aliases?.some((alias) => alias.toLowerCase().includes(cleanQuery)) || false;

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

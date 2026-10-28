import type { Project } from './workpress-types';

/**
 * Picks related projects for a project detail page.
 *
 * Priority (strict fallback, not merged — stop at the first tier with any matches):
 *   1. Same service AND same city
 *   2. Same city (any service)
 *   3. Same service (any city)
 *   4. None — caller should hide the "Related Projects" section
 */
export function getRelatedProjects(
  all: Project[],
  current: Project,
  limit = 3
): Project[] {
  const others = all.filter((p) => p.id !== current.id && p.is_published);
  const services = current.services ?? [];
  const city = current.address.city.toLowerCase();

  const sharesService = (p: Project) =>
    services.length > 0 && p.services?.some((s) => services.includes(s));
  const sharesCity = (p: Project) => p.address.city.toLowerCase() === city;

  const tier1 = others.filter((p) => sharesCity(p) && sharesService(p));
  if (tier1.length > 0) return tier1.slice(0, limit);

  const tier2 = others.filter(sharesCity);
  if (tier2.length > 0) return tier2.slice(0, limit);

  const tier3 = others.filter(sharesService);
  if (tier3.length > 0) return tier3.slice(0, limit);

  return [];
}

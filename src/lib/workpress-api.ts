import { Project, Photo, CompanySettings } from './workpress-types';

const BASE = process.env.NEXT_PUBLIC_DASHBOARD_URL;
const ORG  = process.env.NEXT_PUBLIC_CLIENT_ID;

function apiUrl(path: string) {
  return `${BASE}/api/public/organizations/${ORG}${path}`;
}

/** Normalize coordinates to numbers — the API returns them as strings */
function normalizeProject(project: Project): Project {
  if (project.coordinates) {
    project.coordinates = {
      lat: typeof project.coordinates.lat === 'string' ? parseFloat(project.coordinates.lat) : project.coordinates.lat,
      lon: typeof project.coordinates.lon === 'string' ? parseFloat(project.coordinates.lon) : project.coordinates.lon,
    };
  }
  return project;
}

/** Company details for schema.org markup — cached 1 hour */
export async function getCompanySettings(): Promise<CompanySettings | null> {
  if (!BASE || !ORG) {
    console.error('[WorkPress] Missing NEXT_PUBLIC_DASHBOARD_URL or NEXT_PUBLIC_CLIENT_ID');
    return null;
  }
  try {
    const res = await fetch(apiUrl('/settings'), { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    return res.json();
  } catch (err) {
    console.error('[WorkPress] getCompanySettings error:', err);
    return null;
  }
}

/** All published projects — cached 5 minutes */
export async function getProjects(): Promise<Project[]> {
  if (!BASE || !ORG) return [];
  try {
    const res = await fetch(apiUrl('/projects'), { next: { revalidate: 300 } });
    if (!res.ok) return [];
    const projects: Project[] = await res.json();
    return projects.map(normalizeProject);
  } catch (err) {
    console.error('[WorkPress] getProjects error:', err);
    return [];
  }
}

/** Single project by slug — cached 1 hour, revalidated via webhook */
export async function getProject(slug: string): Promise<Project | null> {
  if (!BASE || !ORG) return null;
  try {
    const res = await fetch(apiUrl(`/projects/${slug}`), { next: { revalidate: 3600 } });
    if (!res.ok) return null;
    const project: Project = await res.json();
    return normalizeProject(project);
  } catch (err) {
    console.error('[WorkPress] getProject error:', err);
    return null;
  }
}

/** Project photo gallery — cached 1 hour */
export async function getProjectPhotos(slug: string): Promise<Photo[]> {
  if (!BASE || !ORG) return [];
  try {
    const res = await fetch(apiUrl(`/projects/${slug}/photos`), { next: { revalidate: 3600 } });
    if (!res.ok) return [];
    return res.json();
  } catch (err) {
    console.error('[WorkPress] getProjectPhotos error:', err);
    return [];
  }
}

/**
 * Splits a project's photos into the top-of-page hero and the gallery.
 *
 * Tag rules (41 Roofing):
 * - before + after  -> slider (hasBeforeAfter). Gallery = untagged photos only.
 * - after only      -> the first after photo shown by itself (afterOnly).
 *                      Gallery = untagged photos only (after is not repeated).
 * - before only     -> no slider and no hero. Before photos stay in the gallery.
 * - neither         -> no hero. Gallery = all photos.
 *
 * Only the first after (and first before) photo is used in the hero; extra
 * before/after photos are not shown in the gallery while a hero is showing.
 */
export function getBeforeAfterPhotos(photos: Photo[]) {
  const beforePhotos = photos.filter(p => p.type === 'before');
  const afterPhotos = photos.filter(p => p.type === 'after');
  const untaggedPhotos = photos.filter(p => p.type !== 'before' && p.type !== 'after');

  const hasBeforeAfter = beforePhotos.length > 0 && afterPhotos.length > 0;
  const afterOnly = afterPhotos.length > 0 && beforePhotos.length === 0;
  const galleryPhotos = hasBeforeAfter || afterOnly ? untaggedPhotos : photos;

  return {
    hasBeforeAfter,
    afterOnly,
    beforePhotos,
    afterPhotos,
    galleryPhotos,
  };
}

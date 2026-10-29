import Link from "next/link";
import ArrowIcon from "@/components/icons/ArrowIcon";
import type { Project } from "@/lib/workpress-types";

/**
 * Card for a real WorkPress project. Distinct from the legacy
 * `src/components/ProjectCard.tsx` (bespoke placeholder shape used by the
 * still-commented-out service-area-page Projects section) — this one renders
 * live WorkPress data and links to the real `/[city]/[slug]` detail page.
 *
 * `featured`: stretches the card (and its image) to fill the height of its
 * container instead of using a fixed aspect ratio — for the homepage's
 * single expanded "most recent project" slot.
 */
export default function ProjectCard({
  project,
  featured = false,
}: {
  project: Project;
  featured?: boolean;
}) {
  const citySlug = project.address.city.toLowerCase().replace(/\s+/g, "-");
  const excerpt =
    project.description.length > 140
      ? project.description.slice(0, 140).trimEnd() + "..."
      : project.description;
  const primaryService = project.services?.[0];

  return (
    <Link
      href={`/${citySlug}/${project.slug}`}
      className={`group bg-brand-white border border-brand-border rounded-[10px] overflow-hidden ${
        featured ? "flex flex-col h-full" : "block"
      }`}
    >
      <div
        className={`overflow-hidden relative ${featured ? "flex-1 min-h-[320px]" : "aspect-[16/10]"}`}
      >
        <img
          src={project.cover_photo_url}
          alt={`${project.seoTitle} - project photo`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover img-hover-scale"
        />
        <div className="absolute top-6 left-6 bg-brand-black text-white px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-[10px]">
          {project.address.city}
        </div>
      </div>
      <div className="p-8 lg:p-10">
        <div className="mb-6">
          <h3 className="font-heading font-black text-2xl uppercase mb-2 tracking-wide">
            {project.seoTitle}
          </h3>
          {primaryService && (
            <p className="text-xs text-brand-muted uppercase tracking-widest font-bold">
              {primaryService}
            </p>
          )}
        </div>
        <p className="text-sm text-brand-muted leading-relaxed mb-8 border-t border-brand-border pt-6">
          {excerpt}
        </p>
        <div className="relative inline-flex items-center gap-3 text-brand-black text-sm font-bold uppercase tracking-widest">
          <span>View Project</span>
          <ArrowIcon className="w-4 h-4" />
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-black group-hover:w-full transition-all duration-300 ease-in-out" />
        </div>
      </div>
    </Link>
  );
}

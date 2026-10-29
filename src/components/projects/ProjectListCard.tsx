import Link from "next/link";
import ArrowIcon from "@/components/icons/ArrowIcon";
import type { Project } from "@/lib/workpress-types";

/**
 * Horizontal variant of ProjectCard — thumbnail on the left, title/excerpt/
 * link on the right. Used for the homepage's "recent work" list column,
 * alongside the single expanded ProjectCard (`featured`) slot.
 */
export default function ProjectListCard({ project }: { project: Project }) {
  const citySlug = project.address.city.toLowerCase().replace(/\s+/g, "-");
  const excerpt =
    project.description.length > 110
      ? project.description.slice(0, 110).trimEnd() + "..."
      : project.description;

  return (
    <Link
      href={`/${citySlug}/${project.slug}`}
      className="group flex gap-5 bg-brand-white border border-brand-border rounded-[10px] overflow-hidden p-4 sm:p-5"
    >
      <div className="relative w-28 sm:w-36 aspect-[4/3] shrink-0 overflow-hidden rounded-[8px]">
        <img
          src={project.cover_photo_url}
          alt={`${project.seoTitle} - project photo`}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover img-hover-scale"
        />
      </div>
      <div className="flex min-w-0 flex-col justify-center py-1">
        <p className="mb-1 text-[11px] font-bold uppercase tracking-widest text-brand-muted">
          {project.address.city}
        </p>
        <h3 className="mb-1 line-clamp-2 font-heading font-black text-base uppercase leading-tight tracking-wide sm:text-lg">
          {project.seoTitle}
        </h3>
        <p className="mb-2 line-clamp-2 hidden text-sm leading-relaxed text-brand-muted sm:block">
          {excerpt}
        </p>
        <div className="relative inline-flex w-fit items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-black">
          <span>View Project</span>
          <ArrowIcon className="w-3 h-3" />
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-black transition-all duration-300 ease-in-out group-hover:w-full" />
        </div>
      </div>
    </Link>
  );
}

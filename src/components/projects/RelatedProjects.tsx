import ProjectCard from "./ProjectCard";
import type { Project } from "@/lib/workpress-types";

export default function RelatedProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="py-24 md:py-32 bg-brand-softGray border-t border-brand-border">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="eyebrow mb-4">More Projects</p>
          <h2 className="font-heading font-black text-[32px] lg:text-[48px] leading-[1.1] text-brand-black uppercase max-w-2xl">
            Related Work Nearby
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

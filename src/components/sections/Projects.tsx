import Link from "next/link";
import ArrowIcon from "@/components/icons/ArrowIcon";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectListCard from "@/components/projects/ProjectListCard";
import { getProjects } from "@/lib/workpress-api";

const MAX_PROJECTS = 4;

export default async function Projects() {
  const projects = (await getProjects())
    .filter((p) => p.is_published)
    .sort(
      (a, b) =>
        new Date(b.updated_at ?? b.created_at).getTime() -
        new Date(a.updated_at ?? a.created_at).getTime()
    )
    .slice(0, MAX_PROJECTS);

  if (projects.length === 0) return null;

  const [mostRecent, ...rest] = projects;

  return (
    <section id="projects" className="py-24 md:py-32 bg-brand-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <p className="eyebrow mb-4">Recent Work</p>
            <h2 className="font-heading font-black text-4xl lg:text-5xl uppercase tracking-tight">
              Roofs We&rsquo;ve Built
              <br />
              Across North Texas.
            </h2>
          </div>
          <Link
            href="/projects"
            className="relative inline-flex items-center gap-3 font-heading font-bold text-sm tracking-widest text-brand-black uppercase group shrink-0"
          >
            View All Projects
            <ArrowIcon className="w-4 h-4" />
            <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-black group-hover:w-full transition-all duration-300 ease-in-out" />
          </Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <ProjectCard project={mostRecent} featured />
          <div className="flex flex-col gap-6">
            {rest.map((project) => (
              <ProjectListCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

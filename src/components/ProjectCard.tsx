import ArrowIcon from "@/components/icons/ArrowIcon";

export interface Project {
  city: string;
  title: string;
  material: string;
  problem: string;
  solution: string;
  img: string;
  alt: string;
  href?: string;
}

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <a
      href={project.href ?? "#contact"}
      className="group block bg-brand-white border border-brand-border rounded-[10px] overflow-hidden"
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={project.img}
          alt={project.alt}
          className="w-full h-full object-cover img-hover-scale"
        />
        <div className="absolute top-6 left-6 bg-brand-black text-white px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-[10px]">
          {project.city}
        </div>
      </div>
      <div className="p-8 lg:p-10">
        <div className="mb-8">
          <h3 className="font-heading font-black text-2xl uppercase mb-2 tracking-wide">
            {project.title}
          </h3>
          <p className="text-xs text-brand-muted uppercase tracking-widest font-bold">
            {project.material}
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 mb-8 border-t border-brand-border pt-6">
          <div>
            <p className="text-xs text-brand-black uppercase font-bold tracking-widest mb-2">Problem</p>
            <p className="text-sm text-brand-muted leading-relaxed">{project.problem}</p>
          </div>
          <div>
            <p className="text-xs text-brand-black uppercase font-bold tracking-widest mb-2">Solution</p>
            <p className="text-sm text-brand-muted leading-relaxed">{project.solution}</p>
          </div>
        </div>
        <div className="relative inline-flex items-center gap-3 text-brand-black text-sm font-bold uppercase tracking-widest">
          <span>View Project</span>
          <ArrowIcon className="w-4 h-4" />
          <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-black group-hover:w-full transition-all duration-300 ease-in-out" />
        </div>
      </div>
    </a>
  );
}

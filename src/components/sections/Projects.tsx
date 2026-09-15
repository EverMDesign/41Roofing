import ProjectCard, { type Project } from "@/components/ProjectCard";

const projects: Project[] = [
  {
    city: "Crowley, TX",
    title: "Roof Replacement",
    material: "Architectural Shingles",
    problem: "End of lifespan, widespread granular loss.",
    solution: "Full replacement with upgraded ventilation.",
    img: "https://images.unsplash.com/photo-1590674899484-d5640e854abe?auto=format&fit=crop&q=80",
    alt: "Roof Replacement in Crowley, TX",
  },
  {
    city: "Burleson, TX",
    title: "Storm Damage Repair",
    material: "Impact-Resistant System",
    problem: "Severe hail strikes across all slopes.",
    solution: "Class 4 install and gutter replacement.",
    img: "https://images.unsplash.com/photo-1520699049698-acd2fcc01002?auto=format&fit=crop&q=80",
    alt: "Storm Damage Repair in Burleson, TX",
  },
  {
    city: "Joshua, TX",
    title: "Roof Repair",
    material: "Flashing & Shingles",
    problem: "Active leak around chimney flashing.",
    solution: "Re-flashed chimney, replaced damaged decking.",
    img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
    alt: "Roof Repair in Joshua, TX",
  },
  {
    city: "Arlington, TX",
    title: "Commercial Roofing",
    material: "TPO System",
    problem: "Ponding water causing interior leaks.",
    solution: "Tapered insulation and seamless TPO install.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    alt: "Commercial Roofing in Arlington, TX",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-brand-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="mb-16">
          <p className="eyebrow mb-4">Recent Work</p>
          <h2 className="font-heading font-black text-4xl lg:text-5xl uppercase tracking-tight">
            Roofs We&rsquo;ve Built
            <br />
            Across North Texas.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.title + project.city} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

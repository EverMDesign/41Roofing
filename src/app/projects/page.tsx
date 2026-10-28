import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ModalProvider from "@/components/ModalProvider";
import InspectionModal from "@/components/InspectionModal";
import ProjectCard from "@/components/projects/ProjectCard";
import ServiceAreaMap from "@/components/ServiceAreaMap";
import { getProjects } from "@/lib/workpress-api";
import { BUSINESS } from "@/lib/schema-business";

export const revalidate = 300;

const PAGE_TITLE = "Our Projects | 41 Roofing & Restoration";
const PAGE_DESC =
  "Browse completed roofing and restoration projects from 41 Roofing & Restoration across Crowley and North Texas.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    alternates: { canonical: "/projects" },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${BUSINESS.url}/projects`,
      siteName: BUSINESS.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: PAGE_TITLE,
      description: PAGE_DESC,
    },
  };
}

const PAGE_SIZE = 9;

export default async function ProjectsPage({
  searchParams,
}: {
  searchParams: Promise<{ city?: string; show?: string }>;
}) {
  const { city, show } = await searchParams;
  const allProjects = (await getProjects()).filter((p) => p.is_published);

  const cities = Array.from(new Set(allProjects.map((p) => p.address.city))).sort();

  const filtered = city
    ? allProjects.filter((p) => p.address.city.toLowerCase() === city.toLowerCase())
    : allProjects;

  const visibleCount = Math.min(Number(show) || PAGE_SIZE, filtered.length);
  const visible = filtered.slice(0, visibleCount);
  const hasMore = visibleCount < filtered.length;
  const mappableProjects = filtered.filter((p) => p.coordinates);

  const pillClass = (active: boolean) =>
    `px-5 py-2.5 rounded-full font-heading font-bold text-sm uppercase tracking-wide transition-colors border ${
      active
        ? "bg-brand-aqua text-brand-black border-brand-aqua"
        : "bg-brand-white border-brand-border text-brand-charcoal hover:bg-brand-aqua hover:text-brand-black hover:border-brand-aqua"
    }`;

  return (
    <ModalProvider>
      <div className="w-full overflow-x-hidden bg-brand-white text-brand-charcoal font-sans">
        <Header />

        <main className="pt-20 md:pt-24">
          {/* Hero / intro */}
          <section className="bg-brand-white">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-12 md:pt-16 pb-16">
              <p className="eyebrow mb-4">Our Work</p>
              <h1 className="font-heading font-black text-[36px] md:text-[60px] md:leading-[66px] text-brand-black leading-[1.1] max-w-3xl mb-6">
                Roofs We&rsquo;ve Built Across North Texas.
              </h1>
              <p className="text-brand-muted text-base md:text-lg max-w-2xl leading-relaxed">
                Real roof replacements, repairs, and storm restorations completed by 41 Roofing
                &amp; Restoration for homeowners and businesses in Crowley and the surrounding area.
              </p>
            </div>
          </section>

          {/* City filter */}
          <section className="bg-brand-white border-y border-brand-border">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-6">
              <nav
                aria-label="Filter projects by city"
                className="flex flex-wrap gap-3"
              >
                <Link href="/projects" className={pillClass(!city)}>
                  All Cities
                </Link>
                {cities.map((c) => (
                  <Link
                    key={c}
                    href={`/projects?city=${encodeURIComponent(c.toLowerCase())}`}
                    className={pillClass(city?.toLowerCase() === c.toLowerCase())}
                  >
                    {c}
                  </Link>
                ))}
              </nav>
            </div>
          </section>

          {/* Service area map — only when at least one visible project has coordinates */}
          {mappableProjects.length > 0 && (
            <section className="bg-brand-white">
              <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-16">
                <p className="eyebrow mb-4">Where We&rsquo;ve Worked</p>
                <h2 className="font-heading font-black text-[28px] md:text-[36px] leading-[1.1] text-brand-black uppercase mb-8">
                  {city ? `${city} Projects on the Map` : "Our Projects on the Map"}
                </h2>
                <div className="rounded-[10px] overflow-hidden border border-brand-border">
                  <ServiceAreaMap projects={mappableProjects} />
                </div>
              </div>
            </section>
          )}

          {/* Project grid */}
          <section className="py-24 md:py-32 bg-brand-softGray">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
              {filtered.length === 0 ? (
                <div className="text-center py-16">
                  <p className="font-heading font-black text-2xl text-brand-black uppercase mb-4">
                    {city ? `No Projects in ${city} Yet` : "No Projects Yet"}
                  </p>
                  <p className="text-brand-muted mb-8">
                    We&rsquo;re always adding new work — check back soon
                    {city ? ", or view projects from every city we serve." : "."}
                  </p>
                  {city && (
                    <Link
                      href="/projects"
                      className="inline-flex items-center justify-center bg-brand-black text-brand-white px-8 py-4 rounded-[10px] font-heading font-bold text-sm tracking-widest uppercase hover:bg-brand-aqua hover:text-brand-black transition-colors"
                    >
                      View All Cities
                    </Link>
                  )}
                </div>
              ) : (
                <>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {visible.map((project) => (
                      <ProjectCard key={project.id} project={project} />
                    ))}
                  </div>

                  {hasMore && (
                    <div className="flex justify-center mt-16">
                      <Link
                        href={`/projects?${new URLSearchParams({
                          ...(city ? { city } : {}),
                          show: String(visibleCount + PAGE_SIZE),
                        }).toString()}`}
                        scroll={false}
                        className="inline-flex items-center justify-center border border-brand-border text-brand-charcoal px-10 py-4 rounded-[10px] font-heading font-bold text-sm tracking-widest uppercase hover:bg-brand-black hover:text-white hover:border-brand-black transition-colors"
                      >
                        Load More Projects
                      </Link>
                    </div>
                  )}
                </>
              )}
            </div>
          </section>
        </main>

        <Footer />
        <MobileBottomBar />
        <InspectionModal />
      </div>
    </ModalProvider>
  );
}

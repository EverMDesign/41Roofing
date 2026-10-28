import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ModalProvider from "@/components/ModalProvider";
import InspectionModal from "@/components/InspectionModal";
import BeforeAfterSlider from "@/components/projects/BeforeAfterSlider";
import ProjectGallery from "@/components/projects/ProjectGallery";
import RelatedProjects from "@/components/projects/RelatedProjects";
import ProjectCTAForm from "@/components/projects/ProjectCTAForm";
import {
  getProject,
  getProjectPhotos,
  getProjects,
  getBeforeAfterPhotos,
} from "@/lib/workpress-api";
import { generateProjectSchema } from "@/lib/workpress-schema";
import { getRelatedProjects } from "@/lib/related-projects";
import { BUSINESS } from "@/lib/schema-business";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string; slug: string }>;
}): Promise<Metadata> {
  const { city, slug } = await params;
  const project = await getProject(slug);
  if (!project) return {};

  const title = `${project.seoTitle} | ${BUSINESS.name}`;
  const description = project.metaDescription ?? project.description.slice(0, 160);
  const url = `${BUSINESS.url}/${city}/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: `/${city}/${slug}` },
    openGraph: {
      title,
      description,
      url,
      siteName: BUSINESS.name,
      locale: "en_US",
      type: "website",
      images: project.cover_photo_url
        ? [{ url: project.cover_photo_url, alt: `${project.seoTitle} - project photo` }]
        : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: project.cover_photo_url ? [project.cover_photo_url] : undefined,
    },
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ city: string; slug: string }>;
}) {
  const { city, slug } = await params;
  const project = await getProject(slug);
  if (!project || !project.is_published) notFound();

  const [photos, allProjects] = await Promise.all([getProjectPhotos(slug), getProjects()]);
  const { hasBeforeAfter, beforePhotos, afterPhotos, galleryPhotos } = getBeforeAfterPhotos(photos);
  const related = getRelatedProjects(allProjects, project);
  const schemas = await generateProjectSchema(project, city);

  return (
    <ModalProvider>
      <div className="w-full overflow-x-clip bg-brand-white text-brand-charcoal font-sans">
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <Header />

        <main>
          {/* Hero */}
          <section className="relative h-[55vh] min-h-[420px] flex items-end bg-brand-black overflow-hidden pb-12 pt-32">
            <div className="absolute inset-0 z-0">
              <img
                src={project.cover_photo_url}
                alt={`${project.seoTitle} - project photo`}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
            </div>

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12">
              <nav aria-label="Breadcrumb" className="mb-4">
                <ol className="flex items-center gap-2 text-xs text-brand-white/60 uppercase tracking-widest font-heading font-bold">
                  <li>
                    <Link href="/" className="hover:text-brand-aqua transition-colors">
                      Home
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li>
                    <Link href="/projects" className="hover:text-brand-aqua transition-colors">
                      Projects
                    </Link>
                  </li>
                  <li aria-hidden="true">/</li>
                  <li className="text-brand-white/90">{project.address.city}</li>
                </ol>
              </nav>
              <p className="text-brand-aqua font-bold tracking-[0.2em] text-sm uppercase mb-4 flex items-center gap-4">
                <span className="w-12 h-px bg-brand-aqua" />
                {project.services?.[0] ?? "Completed Project"} &bull; {project.address.city}, {project.address.state}
              </p>
              <h1 className="font-heading font-black text-[32px] md:text-[48px] lg:text-[64px] leading-[0.95] text-brand-white uppercase max-w-4xl">
                {project.seoTitle}
              </h1>
            </div>
          </section>

          {/* Content + Sidebar */}
          <section className="py-24 md:py-32 bg-brand-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
              <div className="flex flex-col lg:flex-row gap-16 items-start">
                {/* Main content */}
                <div className="w-full lg:w-2/3 space-y-16">
                  {hasBeforeAfter && (
                    <BeforeAfterSlider before={beforePhotos[0]} after={afterPhotos[0]} />
                  )}

                  <div className="space-y-6 text-brand-charcoal text-base leading-relaxed">
                    {project.description
                      .split(/\n\s*\n/)
                      .map((p) => p.trim())
                      .filter(Boolean)
                      .map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                  </div>

                  <ProjectGallery
                    photos={hasBeforeAfter ? galleryPhotos : photos}
                    seoTitle={project.seoTitle}
                  />
                </div>

                {/* Sidebar */}
                <aside className="w-full lg:w-1/3 lg:sticky lg:top-32 space-y-8">
                  {project.services && project.services.length > 0 && (
                    <div className="bg-brand-softGray border border-brand-border rounded-[10px] p-8">
                      <h2 className="font-heading font-black text-lg uppercase mb-4 text-brand-black">
                        Services Performed
                      </h2>
                      <ul aria-label="Services performed" className="flex flex-wrap gap-3">
                        {project.services.map((s) => (
                          <li
                            key={s}
                            className="px-4 py-2 bg-brand-white border border-brand-border rounded-full font-heading font-bold text-xs uppercase tracking-wide text-brand-charcoal"
                          >
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <ProjectCTAForm project={project} />
                </aside>
              </div>
            </div>
          </section>
        </main>

        {related.length > 0 && <RelatedProjects projects={related} />}

        <Footer />
        <MobileBottomBar />
        <InspectionModal />
      </div>
    </ModalProvider>
  );
}

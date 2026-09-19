import type { ReactNode } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ModalProvider from "@/components/ModalProvider";
import InspectionModal from "@/components/InspectionModal";
import QuoteForm from "@/components/QuoteForm";
import ReviewCard, { type Review } from "@/components/ReviewCard";
import ProjectCard, { type Project } from "@/components/ProjectCard";
import ChevronIcon from "@/components/icons/ChevronIcon";
import { fetchGoogleReviews } from "@/lib/google-reviews";

interface FAQ {
  q: string;
  a: string;
}

interface ServiceCard {
  title: string;
  description: string;
}

export interface ServiceAreaData {
  city: string;
  state: string;
  slug: string;
  heroImage: string;
  eyebrow: string;
  heroTitle: string;
  heroSubtitle: string;
  aboutEyebrow: string;
  aboutHeading: string;
  aboutImage: string;
  aboutImageAlt: string;
  aboutParagraphs: string[];
  servicesHeading: string;
  servicesParagraph: string;
  serviceCards: ServiceCard[];
  neighborhoodsHeading: string;
  neighborhoodsParagraphs: string[];
  projectsEyebrow: string;
  projectsHeading: string;
  projects: Project[];
  reviewsEyebrow: string;
  reviewsHeading: string;
  reviews: Review[];
  faqEyebrow: string;
  faqHeading: string;
  faqs: FAQ[];
}

export default async function ServiceAreaTemplate({
  data,
}: {
  data: ServiceAreaData;
}) {
  const googleData = await fetchGoogleReviews();

  const liveReviews: Review[] | null = googleData
    ? googleData.reviews
        .filter((r) => r.rating >= 4)
        .sort(
          (a, b) =>
            new Date(b.publishTime).getTime() -
            new Date(a.publishTime).getTime()
        )
        .slice(0, 3)
        .map((r) => ({
          quote: r.text.text,
          name: r.authorAttribution.displayName,
          location: r.relativePublishTimeDescription,
          service: "",
          source: "Google",
          rating: r.rating,
        }))
    : null;

  const reviews = liveReviews ?? data.reviews;

  return (
    <ModalProvider>
      <div className="w-full overflow-x-clip bg-brand-white text-brand-charcoal font-sans">
        <Header />

        <main>
          {/* Hero */}
          <section className="relative h-[60vh] min-h-[500px] flex items-end bg-brand-black overflow-hidden pb-12 pt-32">
            <div className="absolute inset-0 z-0">
              <img
                src={data.heroImage}
                alt={`Roofing services in ${data.city}, ${data.state} — local landmark near 41 Roofing service area`}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/40 to-transparent" />
            </div>

            <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 md:px-12">
              <div className="max-w-4xl">
                <p className="text-brand-aqua font-bold tracking-[0.2em] text-sm uppercase mb-4 flex items-center gap-4">
                  <span className="w-12 h-px bg-brand-aqua" />
                  {data.eyebrow}
                </p>
                <h1 className="font-heading font-black text-[40px] md:text-[56px] lg:text-[80px] leading-[0.9] text-brand-white uppercase mb-6">
                  {data.heroTitle}
                </h1>
                <h2 className="font-heading font-black text-xl lg:text-2xl text-brand-aqua uppercase mb-6 tracking-wide">
                  {data.heroSubtitle}
                </h2>
              </div>
            </div>
          </section>

          {/* Content + Sidebar */}
          <section className="py-24 md:py-32 bg-brand-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
              <div className="flex flex-col lg:flex-row gap-16 items-start">
                {/* Main Content */}
                <div className="lg:w-2/3 space-y-24">
                  {/* About Section */}
                  <div>
                    <p className="eyebrow mb-4">{data.aboutEyebrow}</p>
                    <h2 className="font-heading font-black text-[32px] lg:text-[48px] leading-[1.1] text-brand-black uppercase mb-8">
                      {data.aboutHeading}
                    </h2>
                    <div className="aspect-[16/9] overflow-hidden bg-brand-softGray mb-8 rounded-[10px]">
                      <img
                        src={data.aboutImage}
                        alt={data.aboutImageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="space-y-6 text-brand-charcoal text-base leading-relaxed">
                      {data.aboutParagraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>

                  {/* Services Section */}
                  <div>
                    <h2 className="font-heading font-black text-[28px] lg:text-[36px] leading-[1.1] text-brand-black uppercase mb-8">
                      {data.servicesHeading}
                    </h2>
                    <p className="text-brand-charcoal text-base leading-relaxed mb-8">
                      {data.servicesParagraph}
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {data.serviceCards.map((card) => (
                        <div
                          key={card.title}
                          className="bg-brand-softGray p-8 border border-brand-border rounded-[10px]"
                        >
                          <h3 className="font-heading font-black text-xl uppercase mb-3 text-brand-black">
                            {card.title}
                          </h3>
                          <p className="text-brand-muted text-sm leading-relaxed">
                            {card.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Neighborhoods Section */}
                  <div>
                    <h2 className="font-heading font-black text-[28px] lg:text-[36px] leading-[1.1] text-brand-black uppercase mb-8">
                      {data.neighborhoodsHeading}
                    </h2>
                    <div className="space-y-6 text-brand-charcoal text-base leading-relaxed">
                      {data.neighborhoodsParagraphs.map((p, i) => (
                        <p key={i}>{p}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sidebar Form */}
                <div className="lg:w-1/3 lg:sticky lg:top-32">
                  <QuoteForm variant="sidebar" formType="sidebar-quote" />
                </div>
              </div>
            </div>
          </section>

          {/* Projects — commented out, revisit later (see docs/revisit.md) */}
          {/*
          <section className="py-24 md:py-32 bg-brand-softGray">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
              <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                <div>
                  <p className="eyebrow mb-4">{data.projectsEyebrow}</p>
                  <h2 className="font-heading font-black text-[32px] lg:text-[56px] leading-[1.1] text-brand-black uppercase max-w-2xl">
                    {data.projectsHeading}
                  </h2>
                </div>
                <div className="hidden md:block w-32 h-px bg-brand-border" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {data.projects.map((project) => (
                  <ProjectCard key={project.title} project={project} />
                ))}
              </div>
            </div>
          </section>
          */}

          {/* Reviews */}
          <section className="py-24 md:py-32 bg-brand-white">
            <div className="max-w-[1440px] mx-auto px-6 md:px-12">
              <div className="text-center mb-16 md:mb-20">
                <p className="eyebrow mb-4">{data.reviewsEyebrow}</p>
                <h2 className="font-heading font-black text-[32px] md:text-[56px] md:leading-[1.1] text-brand-black leading-[1.1] uppercase max-w-3xl mx-auto">
                  {data.reviewsHeading}
                </h2>
                {googleData && googleData.totalReviews > 0 && (
                  <a
                    href={`https://www.google.com/maps/place/?q=place_id:${process.env.GOOGLE_PLACE_ID || ""}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 text-brand-muted font-heading text-sm uppercase tracking-widest hover:text-brand-black transition-colors"
                  >
                    <span>{googleData.rating.toFixed(1)}</span>
                    <span className="inline-flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          aria-hidden="true"
                          className={`w-4 h-4 ${i < Math.round(googleData.rating) ? "text-yellow-400" : "text-brand-border"} fill-current`}
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </span>
                    <span>from {googleData.totalReviews} Google reviews</span>
                  </a>
                )}
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {reviews.map((review) => (
                  <ReviewCard key={review.name} review={review} />
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="py-24 md:py-32 bg-brand-charcoal">
            <div className="max-w-[1000px] mx-auto px-6 md:px-12">
              <div className="text-center mb-16">
                <p className="text-brand-aqua font-bold tracking-[0.2em] text-sm uppercase mb-4">
                  {data.faqEyebrow}
                </p>
                <h2 className="font-heading font-black text-[32px] md:text-[56px] md:leading-[1.1] text-brand-white leading-[1.1] uppercase">
                  {data.faqHeading}
                </h2>
              </div>
              <div className="space-y-0 border-t border-white/20">
                {data.faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border-b border-white/20"
                  >
                    <summary className="flex justify-between items-center font-heading font-bold text-lg md:text-xl text-brand-white py-6 cursor-pointer hover:text-brand-aqua transition-colors">
                      {faq.q}
                      <span className="transition group-open:rotate-180 text-brand-aqua ml-4 shrink-0">
                        <ChevronIcon />
                      </span>
                    </summary>
                    <div className="text-brand-white/70 font-sans pb-6 text-base leading-relaxed">
                      {faq.a}
                    </div>
                  </details>
                ))}
              </div>
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

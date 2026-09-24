import type { ReactNode } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ModalProvider from "@/components/ModalProvider";
// TODO: Re-enable after A2P approval
// import InspectionModal from "@/components/InspectionModal";
// import QuoteForm from "@/components/QuoteForm";
import ReviewCard, { type Review } from "@/components/ReviewCard";
import ChevronIcon from "@/components/icons/ChevronIcon";
import { fetchGoogleReviews } from "@/lib/google-reviews";
import { buildServicePageSchema } from "@/lib/schema";
import { BUSINESS, BUSINESS_CONFIG } from "@/lib/schema-business";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface FAQ {
  q: string;
  a: string;
}

export interface ServicePageData {
  /** Route path without domain (e.g. "/services/roof-replacement") */
  path: string;
  /** Schema.org serviceType (e.g. "Roofing Contractor") */
  serviceType: string;
  breadcrumbs: Breadcrumb[];
  title: string;
  subtitle: string;
  heroImage: string;
  defaultTab: "roofing" | "remodeling";
  defaultService: string;
  reviewsEyebrow: string;
  reviewsHeading: string;
  reviews: Review[];
  faqEyebrow: string;
  faqHeading: string;
  faqs: FAQ[];
}

interface ServicePageTemplateProps {
  data: ServicePageData;
  children: ReactNode;
}

export default async function ServicePageTemplate({
  data,
  children,
}: ServicePageTemplateProps) {
  const googleData = await fetchGoogleReviews();

  const liveReviews: Review[] | null = googleData
    ? googleData.reviews
        .filter((r) => r.rating >= 4)
        .sort((a, b) => new Date(b.publishTime).getTime() - new Date(a.publishTime).getTime())
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
  const titleLines = data.title.split("\n");

  const { jsonLd: schema } = buildServicePageSchema(
    BUSINESS_CONFIG,
    {
      name: data.title.replace("\n", " "),
      description: data.subtitle,
      slug: data.path.replace("/services/", ""),
      serviceTypes: [data.serviceType],
      serviceAreas: BUSINESS_CONFIG.areaServed ?? [],
      image: data.heroImage
        ? { url: `${BUSINESS_CONFIG.url}${data.heroImage}`, name: data.title.replace("\n", " ") }
        : undefined,
      breadcrumbParent: data.breadcrumbs[0]
        ? { name: data.breadcrumbs[0].label, path: data.breadcrumbs[0].href ?? "/services" }
        : undefined,
      faqs: data.faqs.map((f) => ({ question: f.q, answer: f.a })),
    },
    { includeSitewide: false, strict: false },
  );

  return (
    <ModalProvider>
      <div className="w-full overflow-x-clip bg-brand-white text-brand-charcoal font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        <Header />

        <main>
          {/* Hero */}
          <section className="relative pt-40 md:pt-48 pb-24 md:pb-32 bg-brand-black overflow-hidden border-b border-white/10">
            <div className="absolute inset-0 z-0">
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/80 to-transparent" />
            </div>

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
              <div className="max-w-4xl">
                <div className="flex items-center gap-2 text-brand-aqua font-heading font-bold tracking-[0.2em] text-xs uppercase mb-6">
                  {data.breadcrumbs.map((crumb, i) => (
                    <span key={crumb.label} className="flex items-center gap-2">
                      {i > 0 && <span>/</span>}
                      {crumb.href ? (
                        <Link
                          href={crumb.href}
                          className="hover:text-brand-white transition-colors"
                        >
                          {crumb.label}
                        </Link>
                      ) : (
                        <span>{crumb.label}</span>
                      )}
                    </span>
                  ))}
                </div>
                <h1 className="font-heading font-black text-[40px] md:text-[56px] lg:text-[80px] leading-[0.95] text-brand-white uppercase mb-8">
                  {titleLines.map((line, i) => (
                    <span key={i}>
                      {i > 0 && <br />}
                      {line}
                    </span>
                  ))}
                </h1>
                <p className="text-brand-white/80 text-lg max-w-2xl font-light leading-relaxed">
                  {data.subtitle}
                </p>
              </div>
            </div>
          </section>

          {/* Content + Sidebar Form */}
          <section className="py-24 md:py-32 bg-brand-white">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
                <div className="lg:col-span-12 space-y-16">{children}</div>
                {/* TODO: Re-enable sidebar QuoteForm after A2P approval */}
                {/* <div className="lg:col-span-5 lg:self-stretch">
                  <QuoteForm variant="sidebar" formType="sidebar-quote" defaultTab={data.defaultTab} defaultService={data.defaultService} />
                </div> */}
              </div>
            </div>
          </section>

          {/* Reviews */}
          <section className="py-24 md:py-32 bg-brand-softGray">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
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

          {/* Service Areas Cross-Links */}
          <section className="py-16 md:py-20 bg-brand-white border-t border-brand-border">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 text-center">
              <h2 className="font-heading font-black text-[24px] md:text-[32px] text-brand-black uppercase mb-8">
                Areas We Serve
              </h2>
              <div className="flex flex-wrap justify-center gap-3">
                {BUSINESS.areaPages.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="px-5 py-2.5 bg-brand-softGray border border-brand-border rounded-full font-heading font-bold text-sm uppercase tracking-wide text-brand-charcoal hover:bg-brand-aqua hover:text-brand-black hover:border-brand-aqua transition-colors"
                  >
                    {area.name}, TX
                  </Link>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ */}
          <section className="py-24 md:py-32 bg-brand-white">
            <div className="max-w-[1000px] mx-auto px-6 md:px-12">
              <div className="text-center mb-16">
                <p className="eyebrow mb-4">{data.faqEyebrow}</p>
                <h2 className="font-heading font-black text-[32px] md:text-[56px] md:leading-[1.1] text-brand-black leading-[1.1] uppercase">
                  {data.faqHeading}
                </h2>
              </div>
              <div className="space-y-0 border-t border-brand-border">
                {data.faqs.map((faq, idx) => (
                  <details
                    key={idx}
                    className="group border-b border-brand-border"
                  >
                    <summary className="flex justify-between items-center font-heading font-bold text-lg md:text-xl text-brand-black py-6 cursor-pointer">
                      {faq.q}
                      <span className="transition group-open:rotate-180 text-brand-aqua ml-4 shrink-0">
                        <ChevronIcon />
                      </span>
                    </summary>
                    <div className="text-brand-charcoal/80 font-sans pb-6 text-base leading-relaxed">
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
        {/* TODO: Re-enable after A2P approval */}
        {/* <InspectionModal /> */}
      </div>
    </ModalProvider>
  );
}

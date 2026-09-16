import type { ReactNode } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ModalProvider from "@/components/ModalProvider";
import InspectionModal from "@/components/InspectionModal";
import SidebarQuoteForm from "@/components/SidebarQuoteForm";
import ReviewCard, { type Review } from "@/components/ReviewCard";
import ChevronIcon from "@/components/icons/ChevronIcon";

interface Breadcrumb {
  label: string;
  href?: string;
}

interface FAQ {
  q: string;
  a: string;
}

export interface ServicePageData {
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

export default function ServicePageTemplate({
  data,
  children,
}: ServicePageTemplateProps) {
  const titleLines = data.title.split("\n");

  return (
    <ModalProvider>
      <div className="w-full overflow-x-clip bg-brand-white text-brand-charcoal font-sans">
        <Header />

        <main>
          {/* Hero */}
          <section className="relative pt-40 md:pt-48 pb-24 md:pb-32 bg-brand-black overflow-hidden border-b border-white/10">
            <div className="absolute inset-0 z-0">
              <img
                src={data.heroImage}
                alt=""
                className="w-full h-full object-cover opacity-30 grayscale"
              />
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
                <div className="lg:col-span-7 space-y-16">{children}</div>
                <div className="lg:col-span-5 lg:self-stretch">
                  <SidebarQuoteForm defaultTab={data.defaultTab} defaultService={data.defaultService} />
                </div>
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
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                {data.reviews.map((review) => (
                  <ReviewCard key={review.name} review={review} />
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
        <InspectionModal />
      </div>
    </ModalProvider>
  );
}

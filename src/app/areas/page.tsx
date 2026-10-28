import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ModalProvider from "@/components/ModalProvider";
import InspectionModal from "@/components/InspectionModal";
import ArrowIcon from "@/components/icons/ArrowIcon";
import { serviceAreas } from "@/lib/service-areas-data";
import { BUSINESS } from "@/lib/schema-business";

const PAGE_TITLE = "Areas We Serve | 41 Roofing & Restoration";
const PAGE_DESC =
  "41 Roofing & Restoration proudly serves Crowley, Burleson, Arlington, Joshua, Cleburne, Keller, and the surrounding North Texas area with roof repair, replacement, and storm damage restoration.";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    alternates: { canonical: "/areas" },
    openGraph: {
      title: PAGE_TITLE,
      description: PAGE_DESC,
      url: `${BUSINESS.url}/areas`,
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

export default function ServiceAreasArchivePage() {
  return (
    <ModalProvider>
      <div className="w-full overflow-x-hidden bg-brand-white text-brand-charcoal font-sans">
        <Header />

        <main className="pt-20 md:pt-24">
          {/* Hero / intro */}
          <section className="bg-brand-white">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-12 md:pt-16 pb-16">
              <p className="eyebrow mb-4">Local Roofing</p>
              <h1 className="font-heading font-black text-[36px] md:text-[60px] md:leading-[66px] text-brand-black leading-[1.1] max-w-3xl mb-6">
                Proudly Serving North Texas.
              </h1>
              <p className="text-brand-muted text-base md:text-lg max-w-2xl leading-relaxed">
                Honest inspections, roof repair, replacement, and storm damage restoration for
                homeowners and businesses across Crowley and the surrounding communities.
              </p>
            </div>
          </section>

          {/* Area grid */}
          <section className="py-24 md:py-32 bg-brand-softGray">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {serviceAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/areas/${area.slug}`}
                    className="group block bg-brand-white border border-brand-border rounded-[10px] overflow-hidden"
                  >
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img
                        src={area.heroImage}
                        alt={area.heroImageAlt}
                        loading="lazy"
                        className="w-full h-full object-cover img-hover-scale"
                      />
                      <div className="absolute top-6 left-6 bg-brand-black text-white px-4 py-2 text-xs font-bold uppercase tracking-widest rounded-[10px]">
                        {area.state}
                      </div>
                    </div>
                    <div className="p-8 lg:p-10">
                      <div className="mb-6">
                        <h2 className="font-heading font-black text-2xl uppercase mb-2 tracking-wide">
                          {area.city}, {area.state}
                        </h2>
                        <p className="text-xs text-brand-muted uppercase tracking-widest font-bold">
                          {area.eyebrow}
                        </p>
                      </div>
                      <p className="text-sm text-brand-muted leading-relaxed mb-8 border-t border-brand-border pt-6">
                        {area.heroSubtitle}
                      </p>
                      <div className="relative inline-flex items-center gap-3 text-brand-black text-sm font-bold uppercase tracking-widest">
                        <span>View Service Area</span>
                        <ArrowIcon className="w-4 h-4" />
                        <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-brand-black group-hover:w-full transition-all duration-300 ease-in-out" />
                      </div>
                    </div>
                  </Link>
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

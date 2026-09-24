import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ModalProvider from "@/components/ModalProvider";

const PAGE_TITLE = "Roofing Services in Crowley, TX | 41 Roofing & Restoration";
const PAGE_DESC =
  "Residential and commercial roofing services in Crowley and North Texas. Roof repair, replacement, commercial roofing, and emergency tarping from a local contractor you can trust.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/services/roofing" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: "/services/roofing",
    images: [
      {
        url: "/41-roofing-and-restoration-roof-replacement.webp",
        width: 1200,
        height: 630,
        alt: "41 Roofing and Restoration — roofing services in Crowley TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: ["/41-roofing-and-restoration-roof-replacement.webp"],
  },
};

const services = [
  {
    title: "Roof Repair",
    desc: "Targeted fixes for active leaks, storm damage, missing shingles, and flashing issues. We diagnose the problem and fix it right.",
    href: "/services/roof-repair",
  },
  {
    title: "Roof Replacement",
    desc: "Complete tear-offs and new system installations using premium architectural and impact-resistant shingles built for the Texas climate.",
    href: "/services/roof-replacement",
  },
  {
    title: "Commercial Roofing",
    desc: "Low-slope and flat roof solutions for businesses. Inspections, repairs, and full replacements for commercial properties across North Texas.",
    href: "/services/commercial-roofing",
  },
  {
    title: "Emergency Tarping",
    desc: "Same-day emergency tarping to protect your property from further damage after storms, fallen trees, or sudden roof failures.",
    href: "/services/emergency-tarping",
  },
];

export default function RoofingCategoryPage() {
  return (
    <ModalProvider>
      <div className="w-full overflow-x-clip bg-brand-white text-brand-charcoal font-sans">
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
                  <Link href="/" className="hover:text-brand-white transition-colors">Home</Link>
                  <span>/</span>
                  <span>Roofing</span>
                </div>
                <h1 className="font-heading font-black text-[40px] md:text-[56px] lg:text-[80px] leading-[0.95] text-brand-white uppercase mb-6">
                  Roofing Services
                </h1>
                <p className="text-brand-white/60 font-heading font-bold text-sm uppercase tracking-widest mb-8">
                  Residential and Commercial
                </p>
                <p className="text-brand-white/80 text-lg max-w-2xl font-light leading-relaxed">
                  From targeted repairs to complete replacements, we protect homes and businesses across Crowley and North Texas with honest inspections and dependable workmanship.
                </p>
              </div>
            </div>
          </section>

          {/* Services List */}
          <section className="py-24 md:py-32 bg-brand-white">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
              <div className="border-t border-brand-border">
                {services.map((svc) => (
                  <Link
                    key={svc.title}
                    href={svc.href}
                    className="group flex items-center justify-between gap-4 py-6 px-4 -mx-4 border-b border-brand-border hover:bg-brand-softGray transition-colors duration-200"
                  >
                    <div className="min-w-0">
                      <h2 className="font-heading font-bold text-xl uppercase tracking-wide text-brand-black">
                        {svc.title}
                      </h2>
                      <p className="text-sm text-brand-muted font-sans mt-1 leading-relaxed">
                        {svc.desc}
                      </p>
                    </div>
                    <svg
                      className="shrink-0 w-6 h-6 text-brand-black transition-transform duration-200 group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <MobileBottomBar />
      </div>
    </ModalProvider>
  );
}

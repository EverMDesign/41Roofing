import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ModalProvider from "@/components/ModalProvider";
import ReviewsWidget from "./ReviewsWidget";
import { BUSINESS } from "@/lib/schema-business";
import { fetchGoogleReviews } from "@/lib/google-reviews";

const PAGE_TITLE = "Customer Reviews | 41 Roofing & Restoration";
const PAGE_DESC =
  "Read reviews from homeowners and business owners who trust 41 Roofing and Restoration LLC for roofing, restoration, and remodeling in North Texas.";

export const metadata: Metadata = {
  title: PAGE_TITLE,
  description: PAGE_DESC,
  alternates: { canonical: "/reviews" },
  openGraph: {
    title: PAGE_TITLE,
    description: PAGE_DESC,
    url: `${BUSINESS.url}/reviews`,
    siteName: BUSINESS.name,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/41-roofing-and-restoration-roof-replacement.webp",
        width: 1200,
        height: 630,
        alt: "41 Roofing and Restoration — customer reviews",
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

function buildSchemas(rating?: number, totalReviews?: number) {
  const schemas: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${BUSINESS.url}/reviews#webpage`,
      url: `${BUSINESS.url}/reviews`,
      name: `Reviews | ${BUSINESS.name}`,
      description: PAGE_DESC,
      isPartOf: { "@id": `${BUSINESS.url}/#website` },
      publisher: { "@id": `${BUSINESS.url}/#business` },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "@id": `${BUSINESS.url}/reviews#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: BUSINESS.url },
        { "@type": "ListItem", position: 2, name: "Reviews", item: `${BUSINESS.url}/reviews` },
      ],
    },
  ];

  if (rating && totalReviews) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${BUSINESS.url}/#business`,
      name: BUSINESS.name,
      url: BUSINESS.url,
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: rating.toFixed(1),
        bestRating: "5",
        worstRating: "1",
        ratingCount: totalReviews,
      },
    });
  }

  return schemas;
}

export default async function ReviewsPage() {
  const googleData = await fetchGoogleReviews();
  const schemas = buildSchemas(googleData?.rating, googleData?.totalReviews);

  return (
    <ModalProvider>
      <div className="w-full overflow-x-hidden bg-brand-white text-brand-charcoal font-sans">
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        <Header />
        <main className="min-h-screen pt-20 md:pt-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
            <h1 className="font-heading font-black text-3xl md:text-4xl text-brand-black mb-2 uppercase">
              Customer Reviews — 41 Roofing &amp; Restoration
            </h1>
            <p className="text-sm text-brand-muted mb-12">
              See what our customers are saying about 41 Roofing and Restoration LLC.
            </p>

            <ReviewsWidget />
          </div>
        </main>
        <Footer />
        <MobileBottomBar />
        <Script
          src="https://reputationhub.site/reputation/assets/review-widget.js"
          strategy="afterInteractive"
        />
      </div>
    </ModalProvider>
  );
}

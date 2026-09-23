import type { Metadata } from "next";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ModalProvider from "@/components/ModalProvider";
import ReviewsWidget from "./ReviewsWidget";

export const metadata: Metadata = {
  title: "Reviews | 41 Roofing and Restoration LLC",
  description:
    "Read reviews from homeowners and business owners who trust 41 Roofing and Restoration LLC for roofing, restoration, and remodeling in North Texas.",
};

export default function ReviewsPage() {
  return (
    <ModalProvider>
      <div className="w-full overflow-x-hidden bg-brand-white text-brand-charcoal font-sans">
        <Header />
        <main className="min-h-screen pt-20 md:pt-24">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-20">
            <h1 className="font-heading font-black text-3xl md:text-4xl text-brand-black mb-2 uppercase">
              Reviews
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

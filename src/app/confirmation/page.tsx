import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ModalProvider from "@/components/ModalProvider";
import InspectionModal from "@/components/InspectionModal";
import ConfirmationHero from "@/components/sections/ConfirmationHero";
import NextSteps from "@/components/sections/NextSteps";
import PrepareForInspection from "@/components/sections/PrepareForInspection";

export const metadata: Metadata = {
  title: "Request Confirmed | 41 Roofing & Restoration",
  description:
    "Your roof inspection request has been received. Learn what happens next and how to prepare for your inspection.",
};

export default function ConfirmationPage() {
  return (
    <ModalProvider>
      <div className="w-full overflow-x-hidden bg-brand-white text-brand-charcoal font-sans">
        <Header />
        <main className="min-h-screen pt-20 md:pt-24">
          <ConfirmationHero />
          <NextSteps />
          <PrepareForInspection />

          {/* Back to Home CTA */}
          <section className="py-24 md:py-32 bg-brand-white text-center">
            <div className="max-w-2xl mx-auto px-6 md:px-12">
              <h2 className="font-heading font-black text-2xl mb-6">
                BACK TO HOME?
              </h2>
              <p className="text-brand-muted mb-10">
                While our team works on your request, feel free to explore our
                recent projects or learn about roofing materials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/"
                  className="bg-brand-black text-brand-white px-10 py-5 font-heading font-bold text-sm tracking-widest uppercase hover:bg-brand-aqua hover:text-brand-black transition-colors"
                >
                  Return to Homepage
                </Link>
                <Link
                  href="/#projects"
                  className="border border-brand-border text-brand-charcoal px-10 py-5 font-heading font-bold text-sm tracking-widest uppercase hover:bg-brand-softGray transition-colors"
                >
                  View Gallery
                </Link>
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

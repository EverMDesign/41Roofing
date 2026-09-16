import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ModalProvider from "@/components/ModalProvider";
import InspectionModal from "@/components/InspectionModal";
import { generateHomepageSchema } from "@/lib/schema";
import Hero from "@/components/sections/Hero";
import TrustBar from "@/components/sections/TrustBar";
import Services from "@/components/sections/Services";
import Reviews from "@/components/sections/Reviews";
// import Projects from "@/components/sections/Projects";
import StormDamage from "@/components/sections/StormDamage";
import Diagnosis from "@/components/sections/Diagnosis";
import RepairOrReplace from "@/components/sections/RepairOrReplace";
import Owner from "@/components/sections/Owner";
import WhyChoose from "@/components/sections/WhyChoose";
import StatementBanner from "@/components/sections/StatementBanner";
import ServiceAreas from "@/components/sections/ServiceAreas";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import MapEmbed from "@/components/sections/MapEmbed";

export default function Home() {
  const homepageSchema = generateHomepageSchema();

  return (
    <ModalProvider>
      <div className="w-full overflow-x-hidden bg-brand-white text-brand-charcoal font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }}
        />
        <Header />
        <main>
          <Hero />
          <TrustBar />
          <Services />
          <Reviews />
          {/* <Projects /> */}
          <StormDamage />
          <Diagnosis />
          <RepairOrReplace />
          <Owner />
          <WhyChoose />
          <StatementBanner />
          <ServiceAreas />
          <FAQ />
          <Contact />
          <MapEmbed />
        </main>
        <Footer />
        <MobileBottomBar />
        <InspectionModal />
      </div>
    </ModalProvider>
  );
}

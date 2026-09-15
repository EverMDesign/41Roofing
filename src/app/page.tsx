import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ModalProvider from "@/components/ModalProvider";
import InspectionModal from "@/components/InspectionModal";
import Hero from "@/components/sections/Hero";
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

export default function Home() {
  return (
    <ModalProvider>
      <div className="w-full overflow-x-hidden bg-brand-white text-brand-charcoal font-sans">
        <Header />
        <main>
          <Hero />
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
        </main>
        <Footer />
        <MobileBottomBar />
        <InspectionModal />
      </div>
    </ModalProvider>
  );
}

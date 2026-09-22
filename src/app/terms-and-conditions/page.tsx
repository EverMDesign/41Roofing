import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ModalProvider from "@/components/ModalProvider";
import InspectionModal from "@/components/InspectionModal";

export const metadata: Metadata = {
  title: "Terms of Service | 41 Roofing & Restoration",
  description:
    "Read the Terms of Service for 41 Roofing & Restoration.",
};

export default function TermsPage() {
  return (
    <ModalProvider>
      <div className="w-full overflow-x-hidden bg-brand-white text-brand-charcoal font-sans">
        <Header />
        <main className="min-h-screen pt-20 md:pt-24">
          <div className="max-w-3xl mx-auto px-6 md:px-12 py-20">
            <h1 className="font-heading font-black text-3xl md:text-4xl text-brand-black mb-2">
              TERMS OF SERVICE
            </h1>
            <p className="text-sm text-brand-muted mb-12">Last updated: September 22, 2026</p>

            <div className="space-y-10 text-brand-muted leading-relaxed text-sm">
              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">1. ACCEPTANCE OF TERMS</h2>
                <p>By accessing or using the 41 Roofing &amp; Restoration website (&ldquo;Site&rdquo;) or requesting our services, you agree to be bound by these Terms of Service. If you do not agree, please do not use this Site or our services.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">2. SERVICES</h2>
                <p>41 Roofing &amp; Restoration provides residential and commercial roofing, restoration, remodeling, painting, gutter, and exterior construction services in the greater DFW area. All services are subject to a separate written contract agreed upon before work begins. Estimates provided through this website or by phone are non-binding until a formal contract is signed by both parties.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">3. ESTIMATES &amp; CONTRACTS</h2>
                <p>Submitting an inspection or estimate request through this Site does not create a contractual obligation on either party. A binding agreement is only established when a written contract has been signed by an authorized representative of 41 Roofing &amp; Restoration and the customer. Prices in estimates are valid for 30 days from the date of issue unless otherwise stated.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">4. PAYMENTS</h2>
                <p>Payment terms are outlined in your individual project contract. Generally:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>A deposit may be required before work begins</li>
                  <li>Final payment is due upon project completion</li>
                  <li>Accepted payment methods will be listed in your contract</li>
                </ul>
                <p className="mt-3">Overdue balances may be subject to collection proceedings and applicable fees.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">5. WARRANTIES</h2>
                <p>41 Roofing &amp; Restoration offers workmanship warranties on completed projects as described in your project contract. Manufacturer warranties on materials (shingles, coatings, etc.) are governed by those manufacturers&apos; terms and are separate from our workmanship warranty. Warranties are non-transferable unless explicitly stated in writing.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">6. LIMITATION OF LIABILITY</h2>
                <p>To the maximum extent permitted by applicable law, 41 Roofing &amp; Restoration shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of this Site or our services. Our total liability for any claim related to services rendered shall not exceed the amount paid by the customer for those specific services.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">7. INTELLECTUAL PROPERTY</h2>
                <p>All content on this Site — including text, images, logos, and video — is the property of 41 Roofing &amp; Restoration or its licensors and is protected by applicable copyright and trademark laws. You may not reproduce, distribute, or use any content without our prior written consent.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">8. THIRD-PARTY LINKS</h2>
                <p>This Site may contain links to third-party websites. These links are provided for convenience only. 41 Roofing &amp; Restoration has no control over and assumes no responsibility for the content, privacy policies, or practices of third-party sites.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">9. GOVERNING LAW</h2>
                <p>These Terms of Service shall be governed by and construed in accordance with the laws of the State of Texas, without regard to its conflict of law provisions. Any disputes arising under these Terms shall be resolved exclusively in the courts located in Tarrant County, Texas.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">10. CHANGES TO THESE TERMS</h2>
                <p>We reserve the right to update these Terms of Service at any time. Changes take effect immediately upon posting to this page. Continued use of this Site or our services after changes are posted constitutes your acceptance of the revised Terms.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">11. CONTACT US</h2>
                <p>For questions about these Terms, please contact us:</p>
                <div className="mt-3 space-y-1">
                  <p><strong className="text-brand-black">41 Roofing &amp; Restoration</strong></p>
                  <p>208 East Main Street, Suite D</p>
                  <p>Crowley, TX 76036</p>
                  <p>Phone: <a href="tel:817-266-9433" className="text-brand-aqua hover:underline">817-266-9433</a></p>
                </div>
              </section>
            </div>
          </div>
        </main>
        <Footer />
        <MobileBottomBar />
        <InspectionModal />
      </div>
    </ModalProvider>
  );
}

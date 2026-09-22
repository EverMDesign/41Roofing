import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ModalProvider from "@/components/ModalProvider";
import InspectionModal from "@/components/InspectionModal";

export const metadata: Metadata = {
  title: "Privacy Policy | 41 Roofing & Restoration",
  description:
    "Learn how 41 Roofing & Restoration collects, uses, and protects your personal information.",
};

export default function PrivacyPage() {
  return (
    <ModalProvider>
      <div className="w-full overflow-x-hidden bg-brand-white text-brand-charcoal font-sans">
        <Header />
        <main className="min-h-screen pt-20 md:pt-24">
          <div className="max-w-3xl mx-auto px-6 md:px-12 py-20">
            <h1 className="font-heading font-black text-3xl md:text-4xl text-brand-black mb-2">
              PRIVACY POLICY
            </h1>
            <p className="text-sm text-brand-muted mb-12">Last updated: September 22, 2026</p>

            <div className="space-y-10 text-brand-muted leading-relaxed text-sm">
              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">1. INFORMATION WE COLLECT</h2>
                <p>When you request an inspection, contact us, or submit a form on our website, we may collect the following information:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>Full name</li>
                  <li>Phone number</li>
                  <li>Email address</li>
                  <li>Property address</li>
                  <li>Service type and project details</li>
                </ul>
                <p className="mt-3">We also collect standard web analytics data such as browser type, pages visited, and referring URLs through third-party analytics tools.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">2. HOW WE USE YOUR INFORMATION</h2>
                <p>We use the information you provide to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>Respond to inspection requests and service inquiries</li>
                  <li>Schedule appointments and follow up on projects</li>
                  <li>Send project updates, invoices, and warranty information</li>
                  <li>Improve our website and services</li>
                  <li>Comply with applicable laws and regulations</li>
                </ul>
                <p className="mt-3">We do not sell, rent, or trade your personal information to third parties for marketing purposes.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">3. HOW WE SHARE YOUR INFORMATION</h2>
                <p>We may share your information only in the following circumstances:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li><strong>Service providers:</strong> Trusted third-party tools we use to operate our business (e.g., CRM platforms, email services) under strict confidentiality agreements.</li>
                  <li><strong>Legal requirements:</strong> When required by law, court order, or governmental authority.</li>
                  <li><strong>Business transfers:</strong> In the event of a merger, acquisition, or sale of company assets.</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">4. COOKIES &amp; TRACKING</h2>
                <p>Our website uses cookies and similar tracking technologies to enhance your experience and analyze site traffic. You can control cookie settings through your browser preferences. Disabling cookies may limit some functionality on our site.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">5. SMS COMMUNICATIONS</h2>
                <p>If you opt in to receive SMS notifications, you consent to receive text messages from 41 Roofing &amp; Restoration regarding your inspection, project updates, and occasional marketing communications. You may opt out at any time by replying STOP. Message and data rates may apply. Message frequency varies.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">6. DATA RETENTION</h2>
                <p>We retain your personal information for as long as necessary to fulfill the purposes described in this policy, or as required by applicable law. Customer project records are typically retained for seven (7) years for warranty and legal purposes.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">7. YOUR RIGHTS</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>Request access to the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your personal information (subject to legal obligations)</li>
                  <li>Opt out of marketing communications at any time</li>
                </ul>
                <p className="mt-3">To exercise any of these rights, contact us at <a href="tel:817-266-9433" className="text-brand-aqua hover:underline">817-266-9433</a>.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">8. SECURITY</h2>
                <p>We implement reasonable administrative, technical, and physical safeguards to protect your information against unauthorized access, disclosure, or destruction. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">9. CHILDREN&apos;S PRIVACY</h2>
                <p>Our website is not directed to children under the age of 13, and we do not knowingly collect personal information from children. If you believe a child has provided us with personal information, please contact us immediately.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">10. CHANGES TO THIS POLICY</h2>
                <p>We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Last updated&rdquo; date at the top of this page. We encourage you to review this policy periodically.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">11. CONTACT US</h2>
                <p>If you have questions or concerns about this Privacy Policy, please reach out:</p>
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

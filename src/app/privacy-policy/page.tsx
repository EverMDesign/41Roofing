import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ModalProvider from "@/components/ModalProvider";
// TODO: Re-enable after A2P approval
// import InspectionModal from "@/components/InspectionModal";

export const metadata: Metadata = {
  title: "Privacy Policy | 41 Roofing & Restoration",
  description:
    "Learn how 41 Roofing & Restoration collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy-policy" },
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
            <p className="text-sm text-brand-muted mb-12">Last updated: June 2026</p>

            <div className="space-y-10 text-brand-muted leading-relaxed text-sm">
              <p>
                41 Roofing and Restoration LLC, also referred to in this Privacy Policy as &ldquo;41 Roofing,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us,&rdquo; respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect personal information when you visit our website, request an estimate, contact us, schedule an inspection, communicate with us, or use our roofing, restoration, remodeling, gutter, and related services.
              </p>
              <p>
                This Privacy Policy applies to information collected online through our website and forms, as well as information collected offline through phone calls, text messages, emails, in-person inspections, estimates, project documentation, and customer service communications.
              </p>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">1. WHO WE ARE</h2>
                <p>41 Roofing and Restoration LLC is a roofing, restoration, and remodeling company based in Crowley, Texas, serving homeowners and business owners across North Texas.</p>
                <div className="mt-3 space-y-1">
                  <p><strong className="text-brand-black">Business Contact Information:</strong></p>
                  <p>41 Roofing and Restoration LLC</p>
                  <p>208 East Main Street Suite D</p>
                  <p>Crowley, TX 76036</p>
                  <p>Call/Text: <a href="tel:817-266-9433" className="text-brand-aqua hover:underline">(817) 266-9433</a></p>
                  <p>Office: <a href="tel:+1-817-887-9200" className="text-brand-aqua hover:underline">(817) 887-9200</a></p>
                  <p>Email: <a href="mailto:info@41roofing.com" className="text-brand-aqua hover:underline">info@41roofing.com</a></p>
                </div>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">2. INFORMATION WE COLLECT</h2>
                <p>We may collect the following categories of information, depending on how you interact with us:</p>

                <h3 className="font-heading font-bold text-base text-brand-black mt-6 mb-2">Contact Information</h3>
                <p>This may include your name, phone number, email address, mailing address, service address, and preferred contact method.</p>

                <h3 className="font-heading font-bold text-base text-brand-black mt-6 mb-2">Project and Property Information</h3>
                <p>This may include the type of service requested, property details, roof or restoration concerns, inspection notes, project photos, measurements, damage documentation, warranty information, estimate details, and related project records.</p>

                <h3 className="font-heading font-bold text-base text-brand-black mt-6 mb-2">Communication Information</h3>
                <p>This may include messages you send to us through website forms, email, phone, text message, social media, or other communication channels, including records of appointment requests, inspection requests, customer service inquiries, and service updates.</p>

                <h3 className="font-heading font-bold text-base text-brand-black mt-6 mb-2">Payment and Transaction Information</h3>
                <p>If you purchase services from us, we may collect information related to invoices, payments, billing details, transaction history, and related business records. If payments are processed through a third-party payment processor, that provider may collect and process payment information according to its own privacy policy.</p>

                <h3 className="font-heading font-bold text-base text-brand-black mt-6 mb-2">Website and Device Information</h3>
                <p>When you visit our website, we may automatically collect information such as your IP address, browser type, device type, pages visited, referring website, approximate location based on IP address, date and time of visit, and other usage data.</p>

                <h3 className="font-heading font-bold text-base text-brand-black mt-6 mb-2">Marketing and Advertising Information</h3>
                <p>We may collect information related to your interaction with our website, advertisements, lead forms, emails, or online content. This may include information used to measure ad performance, improve our website, and better understand which services customers are interested in.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">3. HOW WE COLLECT INFORMATION</h2>
                <p>We may collect information directly from you when you:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>Submit a website form</li>
                  <li>Request a free estimate or inspection</li>
                  <li>Call, text, or email us</li>
                  <li>Schedule an appointment</li>
                  <li>Communicate with our team during a project</li>
                  <li>Provide project photos or documents</li>
                  <li>Interact with our website, ads, or social media pages</li>
                  <li>Leave a review or provide feedback</li>
                </ul>
                <p className="mt-3">We may also collect information automatically through cookies, analytics tools, advertising pixels, and similar technologies when you use our website.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">4. HOW WE USE YOUR INFORMATION</h2>
                <p>We may use personal information for the following purposes:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>To respond to your questions, estimate requests, inspection requests, and service inquiries</li>
                  <li>To schedule, confirm, and manage appointments</li>
                  <li>To provide roofing, restoration, remodeling, gutter, and related services</li>
                  <li>To prepare estimates, proposals, contracts, invoices, and project documentation</li>
                  <li>To communicate about inspections, appointments, project updates, service reminders, warranties, and customer support</li>
                  <li>To send text messages, emails, or calls that you have requested or consented to receive</li>
                  <li>To improve our website, services, customer experience, advertising, and internal operations</li>
                  <li>To process payments and maintain business records</li>
                  <li>To document work performed, including before-and-after photos when appropriate</li>
                  <li>To comply with legal, insurance, accounting, tax, regulatory, and safety obligations</li>
                  <li>To prevent fraud, protect our rights, and maintain the security of our website and business operations</li>
                </ul>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">5. TEXT MESSAGING AND MOBILE INFORMATION</h2>
                <p>If you provide your mobile phone number and opt in to receive text messages from 41 Roofing and Restoration LLC, we may send you text messages related to your inquiry, inspection request, appointment, estimate, project updates, service reminders, or customer support.</p>
                <p className="mt-3">Message frequency may vary. Message and data rates may apply. You may opt out of receiving text messages at any time by replying STOP. You may request assistance by replying HELP or by contacting us directly.</p>
                <p className="mt-3">We do not sell, rent, or share mobile phone numbers, SMS opt-in data, or text messaging consent with third parties or affiliates for marketing or promotional purposes.</p>
                <p className="mt-3">All categories of information described in this Privacy Policy exclude text messaging originator opt-in data and consent. SMS opt-in data and consent will not be shared with third parties for their own marketing or promotional purposes. We may use service providers only as needed to help deliver and support our messaging services, subject to confidentiality and only for the purpose of providing those services.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">6. MARKETING COMMUNICATIONS</h2>
                <p>We may contact you by email, phone, or text message about services you requested, appointments, project updates, or related customer service matters. Where required by law, we will obtain your consent before sending marketing communications.</p>
                <p className="mt-3">You may opt out of marketing emails by using the unsubscribe instructions included in the email, if available, or by contacting us directly. You may opt out of text messages by replying STOP.</p>
                <p className="mt-3">Even if you opt out of marketing communications, we may still send non-marketing messages related to active services, appointments, estimates, transactions, warranties, safety matters, or legal obligations.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">7. COOKIES, ANALYTICS, AND ADVERTISING TOOLS</h2>
                <p>Our website may use cookies, analytics tools, advertising pixels, and similar technologies to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>Operate and improve the website</li>
                  <li>Understand how visitors use the website</li>
                  <li>Measure the performance of our marketing and advertising</li>
                  <li>Help show relevant ads or content</li>
                  <li>Improve user experience and website functionality</li>
                </ul>
                <p className="mt-3">You can usually adjust your browser settings to block or delete cookies. Some website features may not work properly if cookies are disabled.</p>
                <p className="mt-3">We may use third-party platforms such as website hosting providers, analytics providers, advertising platforms, CRM tools, form tools, and similar service providers. These providers may collect information according to their own privacy policies.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">8. HOW WE SHARE INFORMATION</h2>
                <p>We may share personal information when reasonably necessary for our business operations, including with:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>Service providers that help us operate our website, forms, CRM, email, text messaging, scheduling, hosting, analytics, advertising, payment processing, invoicing, or customer communications</li>
                  <li>Contractors, subcontractors, suppliers, inspectors, or project-related partners when needed to provide requested services</li>
                  <li>Insurance-related parties, only when you ask us to help provide documentation or communicate regarding a claim or project matter</li>
                  <li>Professional advisors, such as accountants, attorneys, insurance representatives, or business consultants</li>
                  <li>Government, regulatory, law enforcement, or legal authorities when required by law or necessary to protect our rights</li>
                  <li>A successor business in the event of a merger, acquisition, sale, restructuring, or transfer of business assets</li>
                </ul>
                <p className="mt-3">We do not sell your personal information for monetary payment. We do not sell sensitive personal information. We do not share SMS opt-in data or mobile consent for marketing or promotional purposes.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">9. THIRD-PARTY WEBSITES AND SERVICES</h2>
                <p>Our website may contain links to third-party websites, platforms, or services. We are not responsible for the privacy practices, content, or security of those third-party websites or services. You should review their privacy policies before providing information to them.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">10. DATA RETENTION</h2>
                <p>We retain personal information for as long as reasonably necessary to provide services, respond to inquiries, maintain business records, fulfill warranty or project obligations, comply with legal and accounting requirements, resolve disputes, and protect our rights.</p>
                <p className="mt-3">The exact retention period may vary depending on the type of information, the purpose for which it was collected, and applicable legal or business requirements.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">11. DATA SECURITY</h2>
                <p>We use reasonable administrative, technical, and physical safeguards designed to protect personal information from unauthorized access, use, loss, misuse, alteration, or disclosure.</p>
                <p className="mt-3">No website, data transmission, storage system, or method of electronic communication is completely secure. We cannot guarantee absolute security, but we take reasonable steps to protect the information we collect and maintain.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">12. YOUR PRIVACY RIGHTS</h2>
                <p>Depending on where you live and the laws that apply, you may have certain rights regarding your personal information. These rights may include the right to:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>Confirm whether we process your personal information</li>
                  <li>Access personal information we maintain about you</li>
                  <li>Correct inaccurate personal information</li>
                  <li>Request deletion of personal information</li>
                  <li>Obtain a copy of certain personal information in a portable format</li>
                  <li>Opt out of certain processing for targeted advertising, sale of personal data, or certain profiling activities</li>
                  <li>Appeal a decision we make regarding a privacy rights request, where required by law</li>
                </ul>
                <p className="mt-3">To submit a privacy request, contact us using the information below:</p>
                <div className="mt-3 space-y-1">
                  <p>Email: <a href="mailto:info@41roofing.com" className="text-brand-aqua hover:underline">info@41roofing.com</a></p>
                  <p>Call/Text: <a href="tel:817-266-9433" className="text-brand-aqua hover:underline">(817) 266-9433</a></p>
                  <p>Office: <a href="tel:+1-817-887-9200" className="text-brand-aqua hover:underline">(817) 887-9200</a></p>
                </div>
                <p className="mt-3">We may need to verify your identity before processing your request. If we deny your request, you may appeal by contacting us again and stating that you are submitting a Privacy Appeal.</p>
                <p className="mt-3">We will not discriminate against you for exercising privacy rights available under applicable law.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">13. TEXAS PRIVACY NOTICE</h2>
                <p>Texas residents may have privacy rights under the Texas Data Privacy and Security Act and other applicable laws. These rights may include the ability to access, correct, delete, obtain, and opt out of certain uses of personal data, subject to legal limitations and business exemptions.</p>
                <p className="mt-3">If you are a Texas resident and would like to exercise privacy rights that may apply to your information, contact us at <a href="mailto:info@41roofing.com" className="text-brand-aqua hover:underline">info@41roofing.com</a> or call/text <a href="tel:817-266-9433" className="text-brand-aqua hover:underline">(817) 266-9433</a>.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">14. CHILDREN&apos;S PRIVACY</h2>
                <p>Our website and services are intended for homeowners, business owners, property managers, and other adults seeking roofing, restoration, remodeling, gutter, or related services. We do not knowingly collect personal information from children under 13.</p>
                <p className="mt-3">If you believe a child has provided personal information to us, please contact us so we can review and delete the information if appropriate.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">15. INSURANCE AND CLAIM-RELATED INFORMATION</h2>
                <p>If you ask us to help document storm damage, restoration needs, or project details for an insurance-related matter, we may use photos, inspection notes, estimates, communications, and other project information for that purpose.</p>
                <p className="mt-3">We are not responsible for the privacy practices of insurance companies, adjusters, mortgage companies, or other third parties involved in an insurance or claim process. Those parties may have their own privacy policies and data handling practices.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">16. CHANGES TO THIS PRIVACY POLICY</h2>
                <p>We may update this Privacy Policy from time to time. When we make updates, we will revise the &ldquo;Last Updated&rdquo; date at the top of this page.</p>
                <p className="mt-3">Your continued use of our website or services after updates are posted means you acknowledge the revised Privacy Policy.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">17. CONTACT US</h2>
                <p>If you have questions about this Privacy Policy or how your information is handled, contact us at:</p>
                <div className="mt-3 space-y-1">
                  <p><strong className="text-brand-black">41 Roofing and Restoration LLC</strong></p>
                  <p>208 East Main Street Suite D</p>
                  <p>Crowley, TX 76036</p>
                  <p>Call/Text: <a href="tel:817-266-9433" className="text-brand-aqua hover:underline">(817) 266-9433</a></p>
                  <p>Office: <a href="tel:+1-817-887-9200" className="text-brand-aqua hover:underline">(817) 887-9200</a></p>
                  <p>Email: <a href="mailto:info@41roofing.com" className="text-brand-aqua hover:underline">info@41roofing.com</a></p>
                </div>
              </section>
            </div>
          </div>
        </main>
        <Footer />
        <MobileBottomBar />
        {/* TODO: Re-enable after A2P approval */}
        {/* <InspectionModal /> */}
      </div>
    </ModalProvider>
  );
}

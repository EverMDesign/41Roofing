import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileBottomBar from "@/components/MobileBottomBar";
import ModalProvider from "@/components/ModalProvider";
// TODO: Re-enable after A2P approval
// import InspectionModal from "@/components/InspectionModal";

export const metadata: Metadata = {
  title: "Terms & Conditions | 41 Roofing and Restoration LLC",
  description:
    "Read the Terms & Conditions for 41 Roofing and Restoration LLC.",
  alternates: { canonical: "/terms-and-conditions" },
};

export default function TermsPage() {
  return (
    <ModalProvider>
      <div className="w-full overflow-x-hidden bg-brand-white text-brand-charcoal font-sans">
        <Header />
        <main className="min-h-screen pt-20 md:pt-24">
          <div className="max-w-3xl mx-auto px-6 md:px-12 py-20">
            <h1 className="font-heading font-black text-3xl md:text-4xl text-brand-black mb-2">
              TERMS &amp; CONDITIONS
            </h1>
            <p className="text-sm text-brand-muted mb-12">Last updated: June 2026</p>

            <div className="space-y-10 text-brand-muted leading-relaxed text-sm">
              <div className="space-y-4">
                <p>
                  These Terms &amp; Conditions, also referred to as the &ldquo;Terms,&rdquo; govern your access to and use of the website, forms, online content, communications, and general business interactions provided by 41 Roofing and Restoration LLC, also referred to as &ldquo;41 Roofing,&rdquo; &ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us.&rdquo;
                </p>
                <p>
                  By visiting our website, submitting a form, requesting an estimate, scheduling an inspection, contacting us, or using our services, you agree to these Terms. If you do not agree with these Terms, please do not use our website or submit information through our website.
                </p>
                <p>
                  These Terms are intended to govern general website use and general business interactions. Any written proposal, estimate, service agreement, construction contract, change order, warranty document, financing agreement, or insurance-related document signed by you and 41 Roofing will control if there is a conflict with these Terms.
                </p>
              </div>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">1. WHO WE ARE</h2>
                <p>41 Roofing and Restoration LLC is a roofing, restoration, remodeling, gutter, and related services company based in Crowley, Texas, serving homeowners and business owners in North Texas.</p>
                <div className="mt-3 space-y-1">
                  <p><strong className="text-brand-black">Business Contact Information:</strong></p>
                  <p>41 Roofing and Restoration LLC</p>
                  <p>208 E Main St Suite D</p>
                  <p>Crowley, TX 76036</p>
                  <p>Call/Text: <a href="tel:817-266-9433" className="text-brand-aqua hover:underline">(817) 266-9433</a></p>
                  <p>Office: <a href="tel:+1-817-887-9200" className="text-brand-aqua hover:underline">(817) 887-9200</a></p>
                  <p>Email: <a href="mailto:info@41roofing.com" className="text-brand-aqua hover:underline">info@41roofing.com</a></p>
                </div>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">2. WEBSITE USE</h2>
                <p>You may use our website for lawful purposes only. You agree not to use our website in any way that:</p>
                <ul className="list-disc pl-6 mt-3 space-y-1">
                  <li>Violates any applicable law or regulation</li>
                  <li>Attempts to gain unauthorized access to our website, systems, forms, CRM, or business tools</li>
                  <li>Interferes with the security, performance, or functionality of our website</li>
                  <li>Submits false, misleading, fraudulent, or incomplete information</li>
                  <li>Uses our content, branding, photos, text, or materials without permission</li>
                  <li>Attempts to impersonate another person, business, property owner, insurance representative, or authorized decision maker</li>
                </ul>
                <p className="mt-3">We may restrict or block access to our website if we believe a user is misusing it or violating these Terms.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">3. WEBSITE CONTENT</h2>
                <p>The content on our website is provided for general informational and marketing purposes only. Website content may describe roofing, restoration, remodeling, gutters, inspections, storm damage, insurance-related topics, maintenance, repair, or other services.</p>
                <p className="mt-3">Website content is not a substitute for a written inspection, professional evaluation, signed proposal, construction contract, warranty document, insurance policy, engineering report, legal advice, or other formal documentation.</p>
                <p className="mt-3">We make reasonable efforts to keep website content accurate, but we do not guarantee that all content is current, complete, or error-free at all times. We may update, remove, or change website content at any time without notice.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">4. ESTIMATES, INSPECTIONS, AND SERVICE REQUESTS</h2>
                <p>You may request an estimate, inspection, consultation, or service appointment through our website, phone, text message, email, social media, or other communication channels.</p>
                <p className="mt-3">Submitting a request does not create a contract, guarantee service availability, guarantee pricing, or obligate 41 Roofing to perform work. Any project pricing, scope of work, timeline, materials, payment terms, warranties, and other project-specific details must be confirmed in a written estimate, proposal, agreement, contract, or other approved documentation.</p>
                <p className="mt-3">We reserve the right to decline a request, refuse service, cancel an appointment, or recommend that a customer contact another qualified professional when appropriate.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">5. CUSTOMER INFORMATION AND PROPERTY ACCESS</h2>
                <p>When you request services, you agree to provide accurate and complete information, including your name, contact information, service address, property details, and the type of service requested.</p>
                <p className="mt-3">If an inspection or project requires access to your property, you represent that you are the property owner, an authorized representative of the property owner, or otherwise authorized to request the inspection or service.</p>
                <p className="mt-3">You agree to provide safe and reasonable access to the property, including access to exterior areas, rooflines, attic spaces, driveways, gates, garages, utilities, or other areas reasonably needed for the requested inspection or service.</p>
                <p className="mt-3">You are responsible for securing pets, notifying occupants, clearing reasonable access areas, and disclosing known hazards that may affect inspection or work conditions.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">6. PROPOSALS, CONTRACTS, AND CHANGE ORDERS</h2>
                <p>A written estimate or proposal is not binding unless accepted according to its stated terms. A project may require a signed agreement, deposit, insurance documentation, financing approval, material selection, permit approval, or other requirements before work begins.</p>
                <p className="mt-3">Project scope is limited to the work described in the written agreement or approved change order. Any additional work, hidden damage, code-required upgrade, material change, labor change, repair need, insurance supplement, or owner-requested change may require a written change order and additional cost.</p>
                <p className="mt-3">If hidden damage, structural concerns, unsafe conditions, rot, mold, decking issues, framing issues, improper prior installation, code concerns, or other unexpected conditions are discovered, 41 Roofing may pause work, document the condition, and provide recommended next steps.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">7. PRICING AND PAYMENT</h2>
                <p>Pricing, deposits, payment schedules, balances, finance terms, and accepted payment methods will be stated in the applicable estimate, proposal, invoice, contract, or financing documentation.</p>
                <p className="mt-3">Unless otherwise stated in writing, prices may be subject to change based on materials, labor, project conditions, manufacturer availability, supplier pricing, permitting requirements, code requirements, additional work, approved change orders, or other project-specific factors.</p>
                <p className="mt-3">Failure to make timely payment may result in delayed scheduling, paused work, collection efforts, cancellation of service, or other remedies allowed by the applicable agreement and law.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">8. INSURANCE CLAIMS AND ADJUSTING DISCLAIMER</h2>
                <p>41 Roofing may provide roofing, restoration, repair, inspection, documentation, and construction-related services. We may also provide factual project documentation, photos, measurements, estimates, or construction-related information when appropriate.</p>
                <p className="mt-3">41 Roofing is not a public insurance adjuster unless separately licensed and authorized under applicable law. We do not act as your insurance company, insurance agent, public adjuster, attorney, or legal representative. We do not guarantee insurance coverage, claim approval, claim payment, supplement approval, or the amount an insurance company may pay.</p>
                <p className="mt-3">Customers are responsible for reviewing their own insurance policy, communicating with their insurance carrier, understanding deductibles, and making claim-related decisions. For questions about policy coverage, claim rights, or legal obligations, customers should contact their insurance carrier, a licensed public adjuster, or an attorney.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">9. SCHEDULING, WEATHER, AND DELAYS</h2>
                <p>Project scheduling depends on factors that may include weather, material availability, crew availability, permitting, customer approvals, payment status, property access, safety conditions, supplier delays, insurance processing, and other circumstances beyond our control.</p>
                <p className="mt-3">We will make reasonable efforts to communicate scheduling updates, but no start date, completion date, inspection time, or delivery date is guaranteed unless expressly stated in a signed written agreement.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">10. MATERIALS, COLORS, AND PRODUCT AVAILABILITY</h2>
                <p>Materials, colors, shingle styles, finishes, fixtures, accessories, or other products may vary based on manufacturer specifications, supplier inventory, lighting, weathering, digital screen differences, lot variations, and product availability.</p>
                <p className="mt-3">We are not responsible for manufacturer discontinuations, supply shortages, delivery delays, color variations, or other product-related matters outside our reasonable control.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">11. WARRANTIES</h2>
                <p>Any workmanship warranty, manufacturer warranty, product warranty, or service warranty will be provided only as stated in the applicable written agreement, warranty document, product documentation, or manufacturer terms.</p>
                <p className="mt-3">Website statements, marketing materials, photos, reviews, social media posts, or general service descriptions do not create a separate warranty unless included in a signed written agreement.</p>
                <p className="mt-3">Warranty coverage may be limited or voided by factors such as improper maintenance, storm damage, third-party work, structural movement, owner modifications, neglect, abuse, product defects, manufacturer exclusions, pre-existing conditions, or other exclusions listed in the applicable warranty documentation.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">12. PHOTOS, VIDEOS, REVIEWS, AND PROJECT DOCUMENTATION</h2>
                <p>We may take photos, videos, notes, measurements, or other documentation before, during, or after an inspection or project for estimating, project management, quality control, insurance documentation, warranty documentation, internal records, training, dispute resolution, or marketing purposes.</p>
                <p className="mt-3">We will make reasonable efforts not to disclose sensitive personal information in marketing materials. If you have concerns about the use of project photos or videos, contact us in writing.</p>
                <p className="mt-3">If you submit a review, testimonial, comment, photo, or feedback, you grant 41 Roofing permission to use, reproduce, display, and share that content for business, marketing, and promotional purposes, unless you and 41 Roofing agree otherwise in writing.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">13. TEXT MESSAGES, CALLS, AND EMAIL COMMUNICATIONS</h2>
                <p>By providing your phone number, email address, or other contact information, you authorize 41 Roofing to contact you about your inquiry, appointment, inspection, estimate, project, service updates, warranty matters, customer support, or related business communications.</p>
                <p className="mt-3">If you opt in to receive text messages, message frequency may vary. Message and data rates may apply. You may opt out of text messages by replying STOP. You may request help by replying HELP or by contacting us directly.</p>
                <p className="mt-3">Text messaging opt-in data and consent will not be sold, rented, or shared with third parties or affiliates for their own marketing or promotional purposes.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">14. PRIVACY</h2>
                <p>Your use of our website and communications with us are also governed by our <Link href="/privacy-policy" className="text-brand-aqua hover:underline">Privacy Policy</Link>. The Privacy Policy explains how we collect, use, disclose, and protect personal information.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">15. THIRD-PARTY LINKS AND TOOLS</h2>
                <p>Our website or communications may include links to third-party websites, platforms, payment processors, financing providers, map tools, review platforms, social media platforms, analytics tools, CRM tools, advertising platforms, or other service providers.</p>
                <p className="mt-3">We do not control third-party websites or services and are not responsible for their content, privacy practices, security, availability, or terms. Your use of third-party websites or services is subject to their own terms and policies.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">16. INTELLECTUAL PROPERTY</h2>
                <p>The website, text, graphics, design elements, logos, service descriptions, photos, videos, icons, layout, branding, and other materials are owned by or licensed to 41 Roofing unless otherwise stated.</p>
                <p className="mt-3">You may not copy, reproduce, modify, publish, distribute, sell, display, scrape, reuse, or create derivative works from our website content or branding without prior written permission from 41 Roofing.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">17. NO PROFESSIONAL ADVICE</h2>
                <p>Information on our website or in general communications may include roofing, restoration, construction, maintenance, insurance-related, or property-related information. This information is provided for general educational and business purposes only.</p>
                <p className="mt-3">We do not provide legal, engineering, architectural, public adjusting, tax, accounting, or insurance coverage advice. You should consult the appropriate licensed professional for those matters.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">18. LIMITATION OF LIABILITY</h2>
                <p>To the fullest extent allowed by law, 41 Roofing will not be liable for indirect, incidental, consequential, special, punitive, or exemplary damages arising from your use of our website, reliance on website content, third-party links, communication delays, website interruptions, or general business interactions.</p>
                <p className="mt-3">Nothing in these Terms is intended to limit any liability that cannot be limited under applicable law or to override a signed written agreement between you and 41 Roofing.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">19. INDEMNIFICATION</h2>
                <p>You agree to defend, indemnify, and hold harmless 41 Roofing, its owners, managers, employees, contractors, representatives, service providers, and affiliates from claims, damages, losses, liabilities, costs, and expenses arising from your misuse of our website, your violation of these Terms, your submission of false or unauthorized information, or your violation of another person&apos;s rights.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">20. CANCELLATION RIGHTS</h2>
                <p>Cancellation rights may vary depending on the type of transaction, where the agreement was signed, the applicable contract terms, and applicable law.</p>
                <p className="mt-3">Any project-specific cancellation terms will be stated in the written estimate, proposal, contract, notice of cancellation, or other applicable documentation. If a law gives you a cancellation right, nothing in these Terms is intended to limit that right.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">21. GOVERNING LAW</h2>
                <p>These Terms are governed by the laws of the State of Texas, without regard to conflict-of-law principles.</p>
                <p className="mt-3">Any dispute related to these Terms, our website, or general business interactions will be handled in accordance with applicable Texas law and any dispute resolution terms stated in a signed written agreement between you and 41 Roofing.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">22. CHANGES TO THESE TERMS</h2>
                <p>We may update these Terms from time to time. When we update these Terms, we will revise the &ldquo;Last Updated&rdquo; date above. Continued use of our website or services after updates are posted means you accept the updated Terms.</p>
              </section>

              <section>
                <h2 className="font-heading font-bold text-lg text-brand-black mb-3">23. CONTACT US</h2>
                <p>If you have questions about these Terms &amp; Conditions, contact us at:</p>
                <div className="mt-3 space-y-1">
                  <p><strong className="text-brand-black">41 Roofing and Restoration LLC</strong></p>
                  <p>208 E Main St Suite D</p>
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

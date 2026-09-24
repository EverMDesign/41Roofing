export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10 text-brand-white pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <img
            src="/41-roofing-logo.webp"
            alt="41 Roofing and Restoration logo — roofing contractor in Crowley TX"
            className="h-14 w-auto mb-8"
          />
          <p className="font-sans text-brand-white/70 text-sm max-w-xs mb-8">
            Honest inspections. Dependable results. Premier roofing and restoration services in Crowley and North Texas.
          </p>
          <div className="font-sans text-brand-white/70 text-sm">
            <p className="font-heading font-bold text-brand-white mb-2 uppercase tracking-wide">
              41 Roofing &amp; Restoration
            </p>
            <p>208 E Main St</p>
            <p>Suite D</p>
            <p>Crowley, TX 76036</p>
          </div>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg mb-6 tracking-wide">CONTACT</h4>
          <ul className="space-y-4 font-sans text-brand-white/70 text-sm">
            <li>
              <span className="text-brand-white font-semibold">Call/Text:</span>{" "}
              <a href="tel:817-266-9433" className="hover:text-brand-aqua transition-colors">
                817-266-9433
              </a>
            </li>
            <li>
              <span className="text-brand-white font-semibold">Office:</span>{" "}
              <a href="tel:817-887-9200" className="hover:text-brand-aqua transition-colors">
                817-887-9200
              </a>
            </li>
            <li>
              <a
                href="https://share.google/lptYzXmBTygQYyjS4"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-brand-aqua transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0" aria-hidden="true">
                  <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                  <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                  <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A10.96 10.96 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z" />
                  <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                </svg>
                Visit Us on Google
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg mb-6 tracking-wide">SERVICES</h4>
          <ul className="space-y-3 font-sans text-brand-white/70 text-sm">
            <li><a href="/services/roof-repair" className="hover:text-brand-aqua transition-colors">Roof Repair</a></li>
            <li><a href="/services/roof-replacement" className="hover:text-brand-aqua transition-colors">Roof Replacement</a></li>
            <li><a href="/services/commercial-roofing" className="hover:text-brand-aqua transition-colors">Commercial Roofing</a></li>
            <li><a href="/services/emergency-tarping" className="hover:text-brand-aqua transition-colors">Emergency Tarping</a></li>
            <li><a href="/services/gutters" className="hover:text-brand-aqua transition-colors">Gutters</a></li>
            <li><a href="/services/exterior-repairs" className="hover:text-brand-aqua transition-colors">Exterior Repairs</a></li>
            <li><a href="/services/interior-exterior-restoration" className="hover:text-brand-aqua transition-colors">Restoration</a></li>
            <li><a href="/services/interior-exterior-painting" className="hover:text-brand-aqua transition-colors">Painting</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg mb-6 tracking-wide">AREAS</h4>
          <ul className="space-y-3 font-sans text-brand-white/70 text-sm">
            <li><a href="/areas/crowley" className="hover:text-brand-aqua transition-colors">Crowley</a></li>
            <li><a href="/areas/burleson" className="hover:text-brand-aqua transition-colors">Burleson</a></li>
            <li><a href="/areas/arlington" className="hover:text-brand-aqua transition-colors">Arlington</a></li>
            <li><a href="/areas/joshua" className="hover:text-brand-aqua transition-colors">Joshua</a></li>
            <li><a href="/areas/cleburne" className="hover:text-brand-aqua transition-colors">Cleburne</a></li>
            <li><a href="/areas/keller" className="hover:text-brand-aqua transition-colors">Keller</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-brand-white/50">
        <p>&copy; {new Date().getFullYear()} 41 Roofing &amp; Restoration. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/privacy-policy" className="hover:text-brand-white transition-colors">Privacy Policy</a>
          <a href="/terms-and-conditions" className="hover:text-brand-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

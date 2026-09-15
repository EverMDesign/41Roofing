export default function Footer() {
  return (
    <footer className="bg-brand-black border-t border-white/10 text-brand-white pt-24 pb-12">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div>
          <div className="w-12 h-12 bg-brand-white flex items-center justify-center font-heading font-black text-brand-black text-2xl leading-none tracking-tighter mb-8">
            41
          </div>
          <p className="font-sans text-brand-white/70 text-sm max-w-xs mb-8">
            Honest inspections. Dependable results. Premier roofing and restoration services in Crowley and North Texas.
          </p>
          <div className="font-sans text-brand-white/70 text-sm">
            <p className="font-heading font-bold text-brand-white mb-2 uppercase tracking-wide">
              41 Roofing &amp; Restoration
            </p>
            <p>208 East Main Street</p>
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
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg mb-6 tracking-wide">SERVICES</h4>
          <ul className="space-y-3 font-sans text-brand-white/70 text-sm">
            <li><a href="#residential" className="hover:text-brand-aqua transition-colors">Residential Roofing</a></li>
            <li><a href="#commercial" className="hover:text-brand-aqua transition-colors">Commercial Roofing</a></li>
            <li><a href="#residential" className="hover:text-brand-aqua transition-colors">Roof Repair</a></li>
            <li><a href="#repair-replace" className="hover:text-brand-aqua transition-colors">Roof Replacement</a></li>
            <li><a href="#storm" className="hover:text-brand-aqua transition-colors">Storm Damage</a></li>
            <li><a href="#restoration" className="hover:text-brand-aqua transition-colors">Restoration</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-heading font-bold text-lg mb-6 tracking-wide">COMPANY</h4>
          <ul className="space-y-3 font-sans text-brand-white/70 text-sm">
            <li><a href="#owner" className="hover:text-brand-aqua transition-colors">About Us</a></li>
            <li><a href="#projects" className="hover:text-brand-aqua transition-colors">Projects</a></li>
            <li><a href="#reviews" className="hover:text-brand-aqua transition-colors">Reviews</a></li>
            <li><a href="#service-areas" className="hover:text-brand-aqua transition-colors">Service Areas</a></li>
            <li><a href="#faq" className="hover:text-brand-aqua transition-colors">FAQ</a></li>
            <li><a href="#contact" className="hover:text-brand-aqua transition-colors">Contact</a></li>
          </ul>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-brand-white/50">
        <p>&copy; {new Date().getFullYear()} 41 Roofing &amp; Restoration. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#contact" className="hover:text-brand-white transition-colors">Privacy Policy</a>
          <a href="#contact" className="hover:text-brand-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}

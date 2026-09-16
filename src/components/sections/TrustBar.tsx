const badges = [
  {
    href: "https://roofingcontractors.org/tx/crowley/41-roofing-and-restoration",
    src: "https://roofingcontractors.org/assets/arco-seal-3daa7f36.png",
    alt: "ARCO verified roofing contractor seal — 41 Roofing and Restoration in Crowley TX",
    className: "h-12 md:h-16",
  },
  {
    href: "https://www.yelp.com/biz/41-roofing-and-restoration-crowley-2",
    src: "https://s3-media0.fl.yelpcdn.com/assets/srv0/yelp_design_cdn/7ef71bf77a33/assets/img/brand/logo_desktop.svg",
    alt: "41 Roofing and Restoration on Yelp — roofing contractor reviews in Crowley TX",
    className: "h-8 md:h-10",
  },
  {
    href: "https://www.bbb.org/us/tx/crowley/profile/general-contractor/41-roofing-and-restoration-llc-0825-1000176042",
    src: "https://m.bbb.org/brand/seals/Accredited_Business_Seal_NoRating_RGB.svg",
    alt: "BBB Accredited Business seal — 41 Roofing and Restoration in Crowley TX",
    className: "h-10 md:h-14",
  },
  {
    href: "https://www.buildzoom.com/contractor/41-roofing-restoration",
    src: "https://assets.buildzoom.com/static/marketing/_assets/badges/verified-license-icon.png",
    alt: "BuildZoom verified license — 41 Roofing and Restoration contractor in Crowley TX",
    className: "h-10 md:h-14",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-brand-white border-b border-brand-border">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 py-4 flex items-center justify-between gap-6">
        <span className="hidden md:block font-heading font-black text-2xl tracking-widest uppercase text-brand-black">Verified &amp; Accredited</span>
        <div className="flex items-center gap-6">
        {badges.map((badge, i) => (
          <div key={badge.href} className="flex items-center gap-6">
            {i > 0 && <div className="w-px h-8 bg-brand-border" />}
            <a
              href={badge.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={badge.src}
                alt={badge.alt}
                className={`${badge.className} w-auto`}
              />
            </a>
          </div>
        ))}
        </div>
      </div>
    </section>
  );
}

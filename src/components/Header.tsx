"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useModal } from "@/components/ModalProvider";

const roofingServices = [
  { label: "Roof Repair", href: "/services/roof-repair" },
  { label: "Roof Replacement", href: "/services/roof-replacement" },
  { label: "Commercial Roofing", href: "/services/commercial-roofing" },
  { label: "Emergency Tarping", href: "/services/emergency-tarping" },
];

const restorationServices = [
  { label: "Gutters", href: "/services/gutters" },
  { label: "Exterior Repairs", href: "/services/exterior-repairs" },
  { label: "Interior & Exterior Restoration", href: "/services/restoration" },
  { label: "Interior & Exterior Painting", href: "/services/painting" },
];

const serviceAreas = [
  { label: "Crowley", href: "/areas/crowley" },
  { label: "Burleson", href: "/areas/burleson" },
  { label: "Arlington", href: "/areas/arlington" },
  { label: "Joshua", href: "/areas/joshua" },
  { label: "Cleburne", href: "/areas/cleburne" },
  { label: "Keller", href: "/areas/keller" },
];

const navItems: { label: string; href: string }[] = [
  // { label: "Projects", href: "#projects" },
];

const mobileNavItems = [
  { label: "Roof Repair", href: "/services/roof-repair" },
  { label: "Roof Replacement", href: "/services/roof-replacement" },
  { label: "Commercial Roofing", href: "/services/commercial-roofing" },
  { label: "Emergency Tarping", href: "/services/emergency-tarping" },
  { label: "Gutters", href: "/services/gutters" },
  { label: "Exterior Repairs", href: "/services/exterior-repairs" },
  { label: "Restoration", href: "/services/restoration" },
  { label: "Painting", href: "/services/painting" },
  // { label: "Projects", href: "#projects" },
  { label: "Areas", href: "#service-areas" },
  { label: "FAQ", href: "#faq" },
  { label: "Reviews", href: "/reviews" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { open: openModal } = useModal();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 w-full z-50 bg-brand-black border-b border-white/10 transition-colors duration-300 ${
          scrolled ? "shadow-md" : ""
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-6 md:px-12 flex items-center justify-between h-20 md:h-24">
          <Link
            href="/"
            className="flex items-center gap-3 group z-50"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <img
              src="/41-roofing-logo.webp"
              alt="41 Roofing and Restoration logo — roofing contractor in Crowley TX"
              className="h-12 md:h-14 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-8 xl:gap-12">
            <div className="relative group h-24 flex items-center">
              <button className="text-brand-white/80 hover:text-brand-white text-sm font-semibold tracking-wide uppercase transition-colors">
                Services
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="flex gap-12 p-8 min-w-[620px]">
                  <div className="flex flex-col gap-4">
                    <span className="text-brand-black text-sm font-black tracking-widest uppercase mb-1">Roofing</span>
                    {roofingServices.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="relative text-brand-black/70 hover:text-brand-black text-base font-medium transition-colors whitespace-nowrap w-fit after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-aqua after:transition-all after:duration-300 hover:after:w-full"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                  <div className="w-px bg-gray-200" />
                  <div className="flex flex-col gap-4">
                    <span className="text-brand-black text-sm font-black tracking-widest uppercase mb-1">Restoration & Remodeling</span>
                    {restorationServices.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="relative text-brand-black/70 hover:text-brand-black text-base font-medium transition-colors whitespace-nowrap w-fit after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-aqua after:transition-all after:duration-300 hover:after:w-full"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-brand-white/80 hover:text-brand-white text-sm font-semibold tracking-wide uppercase transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="relative group h-24 flex items-center">
              <button className="text-brand-white/80 hover:text-brand-white text-sm font-semibold tracking-wide uppercase transition-colors">
                Areas
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-8 min-w-[240px]">
                  <span className="text-brand-black text-sm font-black tracking-widest uppercase mb-4 block">Service Areas</span>
                  <div className="flex flex-col gap-4">
                    {serviceAreas.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="relative text-brand-black/70 hover:text-brand-black text-base font-medium transition-colors whitespace-nowrap w-fit after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-brand-aqua after:transition-all after:duration-300 hover:after:w-full"
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <a
              href="#faq"
              className="text-brand-white/80 hover:text-brand-white text-sm font-semibold tracking-wide uppercase transition-colors"
            >
              FAQ
            </a>
            <a
              href="/reviews"
              className="text-brand-white/80 hover:text-brand-white text-sm font-semibold tracking-wide uppercase transition-colors"
            >
              Reviews
            </a>
          </nav>

          <div className="flex items-center gap-6">
            <a
              href="tel:817-266-9433"
              className="hidden xl:block text-brand-white font-medium text-sm tracking-wide uppercase"
            >
              Call / Text 817-266-9433
            </a>
            {/* TODO: Re-enable after A2P approval */}
            {/* <button
              onClick={openModal}
              className="hidden md:inline-flex bg-brand-aqua text-brand-black px-8 py-4 rounded-[10px] font-heading font-bold text-sm tracking-widest hover:bg-white transition-colors duration-300"
            >
              Free Roof Inspection
            </button> */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-[6px] z-50"
            >
              <span className={`w-6 h-[2px] bg-brand-white block transition-transform duration-300 ${mobileMenuOpen ? "translate-y-[4px] rotate-45" : ""}`} />
              <span className={`w-6 h-[2px] bg-brand-white block transition-transform duration-300 ${mobileMenuOpen ? "-translate-y-[4px] -rotate-45" : ""}`} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-black flex flex-col items-center justify-center gap-8 lg:hidden">
          <span className="text-brand-aqua text-xs font-bold tracking-widest uppercase">Services</span>
          {mobileNavItems.slice(0, 8).map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-white text-lg font-heading font-bold uppercase tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <div className="w-16 h-px bg-white/20" />
          {mobileNavItems.slice(8).map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-white text-lg font-heading font-bold uppercase tracking-wide"
            >
              {item.label}
            </a>
          ))}
          {/* TODO: Re-enable after A2P approval */}
          {/* <button
            onClick={() => { setMobileMenuOpen(false); openModal(); }}
            className="bg-brand-aqua text-brand-black px-8 py-4 font-heading font-bold text-sm tracking-widest uppercase mt-4"
          >
            Free Roof Inspection
          </button> */}
        </div>
      )}
    </>
  );
}

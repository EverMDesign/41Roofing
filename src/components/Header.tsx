"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const roofingDropdownItems = [
  { label: "Residential Roofing", href: "#residential" },
  { label: "Roof Replacement", href: "#repair-replace" },
  { label: "Roof Repair", href: "#residential" },
  { label: "Roof Inspections", href: "#residential" },
  { label: "Hail & Storm Damage", href: "#storm" },
  { label: "Emergency Tarping", href: "#services" },
  { label: "Skylights", href: "#residential" },
  { label: "Flashing / Chimney Work", href: "#residential" },
  { label: "Roof Decking Repair", href: "#residential" },
  { label: "Roofing Materials", href: "#materials" },
];

const navItems = [
  { label: "Commercial", href: "#commercial" },
  { label: "Storm Damage", href: "#storm" },
  { label: "Restoration", href: "#restoration" },
  { label: "Projects", href: "#projects" },
  { label: "Service Areas", href: "#service-areas" },
  { label: "About", href: "#owner" },
];

const mobileNavItems = [
  { label: "Services", href: "#services" },
  { label: "Commercial", href: "#commercial" },
  { label: "Storm Damage", href: "#storm" },
  { label: "Restoration", href: "#restoration" },
  { label: "Projects", href: "#projects" },
  { label: "Service Areas", href: "#service-areas" },
  { label: "About", href: "#owner" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between h-20 md:h-24">
          <Link
            href="/"
            className="flex items-center gap-3 group z-50"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <div className="w-10 h-10 bg-brand-white flex items-center justify-center font-heading font-black text-brand-black text-xl leading-none tracking-tighter">
              41
            </div>
            <span className="font-heading font-bold text-brand-white text-lg tracking-wide hidden md:block">
              ROOFING
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8 xl:gap-12 absolute left-1/2 -translate-x-1/2">
            <div className="relative group h-24 flex items-center">
              <button className="text-brand-white/80 hover:text-brand-white text-sm font-semibold tracking-wide uppercase transition-colors">
                Roofing
              </button>
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 bg-brand-black border border-white/10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div className="p-4 flex flex-col gap-3">
                  {roofingDropdownItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="text-left text-brand-white/70 hover:text-brand-aqua text-sm font-medium transition-colors"
                    >
                      {item.label}
                    </a>
                  ))}
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
          </nav>

          <div className="flex items-center gap-6">
            <a
              href="tel:817-266-9433"
              className="hidden xl:block text-brand-white font-medium text-sm tracking-wide uppercase"
            >
              Call / Text 817-266-9433
            </a>
            <a
              href="#contact"
              className="hidden md:inline-flex bg-brand-aqua text-brand-black px-8 py-4 rounded-[10px] font-heading font-bold text-sm tracking-widest hover:bg-white transition-colors duration-300"
            >
              Free Roof Inspection
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden w-10 h-10 flex flex-col items-center justify-center gap-2 z-50"
            >
              <span className="w-6 h-[2px] bg-brand-white block" />
              <span className="w-6 h-[2px] bg-brand-white block" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-brand-black flex flex-col items-center justify-center gap-8 lg:hidden">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="absolute top-6 right-6 text-brand-white font-heading font-bold text-sm"
          >
            CLOSE
          </button>
          {mobileNavItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-brand-white text-xl font-heading font-bold uppercase tracking-wide"
            >
              {item.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="bg-brand-aqua text-brand-black px-8 py-4 font-heading font-bold text-sm tracking-widest uppercase mt-4"
          >
            Free Roof Inspection
          </a>
        </div>
      )}
    </>
  );
}

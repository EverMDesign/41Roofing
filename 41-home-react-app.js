import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from 'react-router-dom';

const ScrollToHash = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [hash]);
  return null;
};

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    phone: '',
    email: '',
    address: '',
    service: '',
    message: '',
    sms: false,
  });
  const [formStatus, setFormStatus] = useState('idle');

  useEffect(() => {
    const fontLink = document.createElement('link');
    fontLink.rel = 'stylesheet';
    fontLink.href =
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Montserrat:wght@700;800;900&display=swap';
    document.head.appendChild(fontLink);

    const tailwindScript = document.createElement('script');
    tailwindScript.src = 'https://cdn.tailwindcss.com/3.4.17';
    document.head.appendChild(tailwindScript);

    const configScript = document.createElement('script');
    configScript.textContent = `
      tailwind.config = {
        theme: {
          extend: {
            colors: {
              brand: {
                black: '#050505',
                charcoal: '#171A1B',
                white: '#FFFFFF',
                lightAqua: '#E9FBFD',
                aqua: '#BFEFF3',
                softGray: '#F4F6F6',
                border: '#DCE5E6',
                muted: '#606568',
              }
            },
            fontFamily: {
              sans: ['Inter', 'sans-serif'],
              heading: ['Montserrat', 'sans-serif'],
            },
            fontSize: {
              'hero-desktop': ['96px', '0.95'],
              'hero-mobile': ['52px', '1'],
              'h2-desktop': ['64px', '1'],
              'h2-mobile': ['48px', '1.1'],
            },
            transitionTimingFunction: {
              'premium': 'cubic-bezier(0.16, 1, 0.3, 1)',
            }
          }
        }
      }
    `;
    document.head.appendChild(configScript);

    const style = document.createElement('style');
    style.textContent = `
      body {
        background-color: #FFFFFF;
        color: #171A1B;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }
      h1, h2, h3, h4, h5, h6, .font-heading {
        text-transform: uppercase;
      }
      .eyebrow {
        font-family: 'Inter', sans-serif;
        text-transform: uppercase;
        letter-spacing: 0.15em;
        font-weight: 600;
        font-size: 0.875rem;
        color: #606568;
      }
      .reveal-up {
        opacity: 0;
        transform: translateY(24px);
        transition: opacity 700ms cubic-bezier(0.16, 1, 0.3, 1), transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
      }
      .reveal-up.is-visible {
        opacity: 1;
        transform: translateY(0);
      }
      .img-hover-scale {
        transition: transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
      }
      .group:hover .img-hover-scale {
        transform: scale(1.03);
      }
      .arrow-shift {
        transition: transform 300ms ease;
      }
      .group:hover .arrow-shift {
        transform: translateX(6px);
      }
      .no-scrollbar::-webkit-scrollbar {
        display: none;
      }
      .no-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
      }
      details > summary {
        list-style: none;
      }
      details > summary::-webkit-details-marker {
        display: none;
      }
      details[open] summary ~ * {
        animation: sweep .5s ease-in-out;
      }
      @keyframes sweep {
        0%    {opacity: 0; transform: translateY(-10px)}
        100%  {opacity: 1; transform: translateY(0)}
      }
      .divider-light { border-bottom: 1px solid #DCE5E6; }
      .divider-dark { border-bottom: 1px solid rgba(255,255,255,0.1); }
    `;
    document.head.appendChild(style);

    document.documentElement.classList.add('scroll-smooth');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('h2, .eyebrow').forEach((el) => {
      el.classList.add('reveal-up');
      observer.observe(el);
    });

    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', onScroll);

    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileMenuOpen(false);
    };
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      observer.disconnect();
    };
  }, []);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const handleInputChange = (e) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === 'checkbox' ? checked : value,
    }));
    if (formStatus === 'error') setFormStatus('idle');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.fname || !formData.lname || !formData.phone || !formData.email || !formData.address) {
      setFormStatus('error');
      return;
    }
    setFormStatus('submitting');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  const ArrowIcon = ({ className = 'w-6 h-6' }) => (
    <svg className={`${className} arrow-shift`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  );

  const StarRating = () => (
    <div className="flex gap-1 mb-6 text-brand-black">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <Router basename="/">
      <ScrollToHash />
      <div className="w-full overflow-x-hidden bg-brand-white text-brand-charcoal font-sans">
        {/* Header */}
        <header
          className={`fixed top-0 w-full z-50 bg-brand-black border-b border-white/10 transition-colors duration-300 ${
            scrolled ? 'shadow-md' : ''
          }`}
        >
          <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex items-center justify-between h-20 md:h-24">
            <Link to="/" className="flex items-center gap-3 group z-50" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
                    <button onClick={() => scrollToId('residential')} className="text-left text-brand-white/70 hover:text-brand-aqua text-sm font-medium transition-colors">Residential Roofing</button>
                    <button onClick={() => scrollToId('repair-replace')} className="text-left text-brand-white/70 hover:text-brand-aqua text-sm font-medium transition-colors">Roof Replacement</button>
                    <button onClick={() => scrollToId('residential')} className="text-left text-brand-white/70 hover:text-brand-aqua text-sm font-medium transition-colors">Roof Repair</button>
                    <button onClick={() => scrollToId('residential')} className="text-left text-brand-white/70 hover:text-brand-aqua text-sm font-medium transition-colors">Roof Inspections</button>
                    <button onClick={() => scrollToId('storm')} className="text-left text-brand-white/70 hover:text-brand-aqua text-sm font-medium transition-colors">Hail & Storm Damage</button>
                    <button onClick={() => scrollToId('services')} className="text-left text-brand-white/70 hover:text-brand-aqua text-sm font-medium transition-colors">Emergency Tarping</button>
                    <button onClick={() => scrollToId('residential')} className="text-left text-brand-white/70 hover:text-brand-aqua text-sm font-medium transition-colors">Skylights</button>
                    <button onClick={() => scrollToId('residential')} className="text-left text-brand-white/70 hover:text-brand-aqua text-sm font-medium transition-colors">Flashing / Chimney Work</button>
                    <button onClick={() => scrollToId('residential')} className="text-left text-brand-white/70 hover:text-brand-aqua text-sm font-medium transition-colors">Roof Decking Repair</button>
                    <button onClick={() => scrollToId('materials')} className="text-left text-brand-white/70 hover:text-brand-aqua text-sm font-medium transition-colors">Roofing Materials</button>
                  </div>
                </div>
              </div>
              <button onClick={() => scrollToId('commercial')} className="text-brand-white/80 hover:text-brand-white text-sm font-semibold tracking-wide uppercase transition-colors">Commercial</button>
              <button onClick={() => scrollToId('storm')} className="text-brand-white/80 hover:text-brand-white text-sm font-semibold tracking-wide uppercase transition-colors">Storm Damage</button>
              <button onClick={() => scrollToId('restoration')} className="text-brand-white/80 hover:text-brand-white text-sm font-semibold tracking-wide uppercase transition-colors">Restoration</button>
              <button onClick={() => scrollToId('projects')} className="text-brand-white/80 hover:text-brand-white text-sm font-semibold tracking-wide uppercase transition-colors">Projects</button>
              <button onClick={() => scrollToId('service-areas')} className="text-brand-white/80 hover:text-brand-white text-sm font-semibold tracking-wide uppercase transition-colors">Service Areas</button>
              <button onClick={() => scrollToId('owner')} className="text-brand-white/80 hover:text-brand-white text-sm font-semibold tracking-wide uppercase transition-colors">About</button>
            </nav>

            <div className="flex items-center gap-6">
              <a href="tel:817-266-9433" className="hidden xl:block text-brand-white font-medium text-sm tracking-wide uppercase">
                Call / Text 817-266-9433
              </a>
              <button onClick={() => scrollToId('contact')} className="hidden md:inline-flex bg-brand-aqua text-brand-black px-8 py-4 font-heading font-bold text-sm tracking-widest hover:bg-white transition-colors duration-300">
                Free Roof Inspection
              </button>
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
            <button onClick={() => setMobileMenuOpen(false)} className="absolute top-6 right-6 text-brand-white font-heading font-bold text-sm">CLOSE</button>
            <button onClick={() => scrollToId('services')} className="text-brand-white text-xl font-heading font-bold uppercase tracking-wide">Services</button>
            <button onClick={() => scrollToId('commercial')} className="text-brand-white text-xl font-heading font-bold uppercase tracking-wide">Commercial</button>
            <button onClick={() => scrollToId('storm')} className="text-brand-white text-xl font-heading font-bold uppercase tracking-wide">Storm Damage</button>
            <button onClick={() => scrollToId('restoration')} className="text-brand-white text-xl font-heading font-bold uppercase tracking-wide">Restoration</button>
            <button onClick={() => scrollToId('projects')} className="text-brand-white text-xl font-heading font-bold uppercase tracking-wide">Projects</button>
            <button onClick={() => scrollToId('service-areas')} className="text-brand-white text-xl font-heading font-bold uppercase tracking-wide">Service Areas</button>
            <button onClick={() => scrollToId('owner')} className="text-brand-white text-xl font-heading font-bold uppercase tracking-wide">About</button>
            <button onClick={() => scrollToId('contact')} className="bg-brand-aqua text-brand-black px-8 py-4 font-heading font-bold text-sm tracking-widest uppercase mt-4">Free Roof Inspection</button>
          </div>
        )}

        <Routes>
          <Route
            path="/"
            element={
              <main>
                {/* Hero */}
                <section className="relative h-[90vh] min-h-[700px] w-full bg-brand-black overflow-hidden flex items-end pt-24 pb-12 md:pb-24">
                  <div className="absolute inset-0 z-0">
                    <img
                      src="https://images.unsplash.com/photo-1632759145355-614749f70ce8?auto=format&fit=crop&q=80&w=2000"
                      alt="Roof Installation"
                      className="w-full h-full object-cover opacity-60"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/50 to-transparent" />
                  </div>
                  <div className="relative z-10 w-full max-w-[1920px] mx-auto px-6 md:px-12 flex flex-col justify-end">
                    <div className="max-w-5xl">
                      <p className="font-heading font-bold text-brand-aqua tracking-[0.2em] text-xs md:text-sm mb-6 uppercase">
                        Crowley, Texas • Serving North Texas
                      </p>
                      <h1 className="font-heading font-black text-brand-white text-[42px] md:text-hero-desktop leading-[0.95] mb-8">
                        Roofing & Restoration
                        <br />
                        In Crowley, TX
                      </h1>
                      <h2 className="font-heading font-bold text-brand-white text-2xl md:text-4xl mb-6 tracking-wide">
                        Honest Inspections.
                        <br />
                        Dependable Results.
                      </h2>
                      <p className="text-brand-white/80 text-base md:text-lg max-w-2xl font-sans font-normal leading-relaxed mb-10">
                        41 Roofing & Restoration provides roof inspections, repairs, replacements, storm restoration,
                        commercial roofing and property restoration throughout Crowley and North Texas.
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 mb-16 md:mb-24">
                        <button
                          onClick={() => scrollToId('contact')}
                          className="inline-flex justify-center items-center bg-brand-aqua text-brand-black px-10 py-5 font-heading font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300"
                        >
                          Get A Free Roof Inspection
                        </button>
                        <a
                          href="tel:817-266-9433"
                          className="inline-flex justify-center items-center border border-brand-border text-brand-white px-10 py-5 font-heading font-bold text-sm tracking-widest uppercase hover:bg-brand-white hover:text-brand-black transition-colors duration-300"
                        >
                          Call / Text 817-266-9433
                        </a>
                      </div>
                    </div>
                    <div className="w-full border-t border-white/20 pt-6 flex flex-wrap gap-x-8 gap-y-4 text-xs md:text-sm font-heading font-bold text-brand-white/60 tracking-widest uppercase">
                      <span>Locally Owned</span>
                      <span className="hidden md:inline">•</span>
                      <span>Woman-Owned</span>
                      <span className="hidden md:inline">•</span>
                      <span>Free Inspections</span>
                      <span className="hidden md:inline">•</span>
                      <span>Residential & Commercial</span>
                    </div>
                  </div>
                </section>

                {/* Services */}
                <section id="services" className="py-24 md:py-32 bg-brand-white relative z-20">
                  <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                    <div className="mb-16">
                      <p className="eyebrow mb-4">How can we help?</p>
                      <h2 className="font-heading font-bold text-[32px] md:text-h2-desktop text-brand-black leading-[1.1] max-w-3xl">
                        Start with what your property needs.
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">
                      <button onClick={() => scrollToId('contact')} className="group relative h-[400px] overflow-hidden bg-brand-charcoal block text-left">
                        <img
                          src="https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&q=80&w=800"
                          alt="Roof Repair"
                          className="absolute inset-0 w-full h-full object-cover opacity-50 img-hover-scale"
                        />
                        <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/20 transition-colors duration-500" />
                        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
                          <div className="flex items-center justify-between w-full mb-2">
                            <h3 className="font-heading font-bold text-brand-white text-2xl">Roof Repair</h3>
                            <ArrowIcon className="w-6 h-6 text-brand-aqua" />
                          </div>
                          <p className="text-brand-white/80 font-sans text-sm">Targeted fixes for active leaks and damage.</p>
                        </div>
                      </button>
                      <button onClick={() => scrollToId('contact')} className="group relative h-[400px] overflow-hidden bg-brand-charcoal block text-left">
                        <img
                          src="https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?auto=format&fit=crop&q=80&w=800"
                          alt="Roof Replacement"
                          className="absolute inset-0 w-full h-full object-cover opacity-50 img-hover-scale"
                        />
                        <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/20 transition-colors duration-500" />
                        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
                          <div className="flex items-center justify-between w-full mb-2">
                            <h3 className="font-heading font-bold text-brand-white text-2xl">Roof Replacement</h3>
                            <ArrowIcon className="w-6 h-6 text-brand-aqua" />
                          </div>
                          <p className="text-brand-white/80 font-sans text-sm">Complete systems built for Texas weather.</p>
                        </div>
                      </button>
                      <button onClick={() => scrollToId('storm')} className="group relative h-[400px] overflow-hidden bg-brand-charcoal block text-left">
                        <img
                          src="https://images.unsplash.com/photo-1527626922570-388cebbd8ce1?auto=format&fit=crop&q=80&w=800"
                          alt="Storm Damage"
                          className="absolute inset-0 w-full h-full object-cover opacity-50 img-hover-scale"
                        />
                        <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/20 transition-colors duration-500" />
                        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
                          <div className="flex items-center justify-between w-full mb-2">
                            <h3 className="font-heading font-bold text-brand-white text-2xl">Storm Damage</h3>
                            <ArrowIcon className="w-6 h-6 text-brand-aqua" />
                          </div>
                          <p className="text-brand-white/80 font-sans text-sm">Honest documentation after severe weather.</p>
                        </div>
                      </button>
                      <button onClick={() => scrollToId('commercial')} className="group relative h-[400px] overflow-hidden bg-brand-charcoal block text-left">
                        <img
                          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800"
                          alt="Commercial Roofing"
                          className="absolute inset-0 w-full h-full object-cover opacity-50 img-hover-scale"
                        />
                        <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/20 transition-colors duration-500" />
                        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
                          <div className="flex items-center justify-between w-full mb-2">
                            <h3 className="font-heading font-bold text-brand-white text-2xl">Commercial Roofing</h3>
                            <ArrowIcon className="w-6 h-6 text-brand-aqua" />
                          </div>
                          <p className="text-brand-white/80 font-sans text-sm">Dependable solutions for business properties.</p>
                        </div>
                      </button>
                      <button onClick={() => scrollToId('contact')} className="group relative h-[400px] overflow-hidden bg-brand-charcoal block text-left">
                        <img
                          src="https://images.unsplash.com/photo-1621644788164-9d584347eb10?auto=format&fit=crop&q=80&w=800"
                          alt="Roof Inspections"
                          className="absolute inset-0 w-full h-full object-cover opacity-50 img-hover-scale"
                        />
                        <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/20 transition-colors duration-500" />
                        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
                          <div className="flex items-center justify-between w-full mb-2">
                            <h3 className="font-heading font-bold text-brand-white text-2xl">Roof Inspections</h3>
                            <ArrowIcon className="w-6 h-6 text-brand-aqua" />
                          </div>
                          <p className="text-brand-white/80 font-sans text-sm">Truthful assessments before we recommend anything.</p>
                        </div>
                      </button>
                      <button onClick={() => scrollToId('contact')} className="group relative h-[400px] overflow-hidden bg-brand-charcoal block text-left">
                        <img
                          src="https://images.unsplash.com/photo-1541888000431-155e8eb94f54?auto=format&fit=crop&q=80&w=800"
                          alt="Emergency Tarping"
                          className="absolute inset-0 w-full h-full object-cover opacity-50 img-hover-scale"
                        />
                        <div className="absolute inset-0 bg-brand-black/40 group-hover:bg-brand-black/20 transition-colors duration-500" />
                        <div className="absolute bottom-0 left-0 w-full p-8 flex flex-col justify-end">
                          <div className="flex items-center justify-between w-full mb-2">
                            <h3 className="font-heading font-bold text-brand-white text-2xl">Emergency Tarping</h3>
                            <ArrowIcon className="w-6 h-6 text-brand-aqua" />
                          </div>
                          <p className="text-brand-white/80 font-sans text-sm">Immediate protection to prevent interior damage.</p>
                        </div>
                      </button>
                    </div>
                  </div>
                </section>

                {/* Diagnosis */}
                <section id="problems" className="py-24 md:py-32 bg-brand-charcoal">
                  <div className="max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
                    <div className="flex flex-col max-w-2xl">
                      <h2 className="font-heading font-bold text-[32px] md:text-[52px] text-brand-white leading-[1.1] mb-6">
                        NOT SURE WHAT YOUR ROOF NEEDS?
                      </h2>
                      <p className="text-brand-white/70 text-lg md:text-xl font-sans mb-12 border-l-2 border-brand-aqua pl-6">
                        A roof problem does not automatically mean you need a new roof. Start with an honest inspection.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
                        {[
                          'Roof Leak',
                          'Missing Shingles',
                          'Hail Damage',
                          'Wind Damage',
                          'Aging Roof',
                          'Water Stains',
                          'Damaged Flashing',
                          'Skylight Leak',
                          'Sagging / Soft Decking',
                          'Recent Storm',
                        ].map((item) => (
                          <button
                            key={item}
                            onClick={() => scrollToId('contact')}
                            className="group flex items-center justify-between py-4 divider-dark cursor-pointer text-left"
                          >
                            <span className="font-heading font-semibold text-brand-white/90 group-hover:text-brand-aqua transition-colors tracking-wide text-sm md:text-base">
                              {item}
                            </span>
                            <span className="text-brand-aqua opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                          </button>
                        ))}
                      </div>
                      <div>
                        <button
                          onClick={() => scrollToId('contact')}
                          className="inline-flex bg-brand-white text-brand-black px-8 py-4 font-heading font-bold text-sm tracking-widest hover:bg-brand-aqua transition-colors duration-300"
                        >
                          Schedule An Inspection
                        </button>
                      </div>
                    </div>
                    <div className="hidden lg:block h-[600px] w-full relative overflow-hidden bg-brand-black">
                      <img
                        src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=1000"
                        alt="Roof Inspection Detail"
                        className="absolute inset-0 w-full h-full object-cover opacity-80"
                      />
                      <div className="absolute inset-0 border border-white/10 m-4 pointer-events-none" />
                    </div>
                  </div>
                </section>

                {/* Reviews */}
                <section id="reviews" className="py-24 md:py-32 bg-brand-softGray">
                  <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                      <div className="max-w-2xl">
                        <p className="eyebrow mb-4">North Texas Homeowners</p>
                        <h2 className="font-heading font-bold text-[32px] md:text-[52px] text-brand-black leading-[1.1]">
                          BUILT ON TRUST.
                          <br />
                          PROVEN BY THE PEOPLE WE SERVE.
                        </h2>
                      </div>
                      <button
                        onClick={() => scrollToId('reviews')}
                        className="inline-flex items-center gap-3 font-heading font-bold text-sm tracking-widest text-brand-black hover:text-brand-aqua transition-colors uppercase group"
                      >
                        Read More Reviews
                        <ArrowIcon className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                      <div className="bg-brand-white p-10 lg:p-12 border border-brand-border flex flex-col justify-between h-full relative">
                        <div className="text-[80px] font-heading font-black text-brand-aqua/20 absolute top-4 left-6 leading-none">"</div>
                        <div className="relative z-10 mb-12">
                          <StarRating />
                          <p className="font-sans text-brand-charcoal text-base leading-relaxed">
                            "Brandi and her team were incredibly honest during the inspection. Another company told us we
                            needed a full replacement after a storm, but 41 Roofing showed us it was just minor repair work.
                            The communication was excellent from start to finish."
                          </p>
                        </div>
                        <div className="mt-auto border-t border-brand-border pt-6">
                          <p className="font-heading font-bold text-sm uppercase tracking-wide">Sarah M.</p>
                          <p className="text-brand-muted text-xs uppercase tracking-widest mt-1">Crowley, TX • Roof Repair</p>
                        </div>
                      </div>
                      <div className="bg-brand-white p-10 lg:p-12 border border-brand-border flex flex-col justify-between h-full relative">
                        <div className="text-[80px] font-heading font-black text-brand-aqua/20 absolute top-4 left-6 leading-none">"</div>
                        <div className="relative z-10 mb-12">
                          <StarRating />
                          <p className="font-sans text-brand-charcoal text-base leading-relaxed">
                            "The crew was professional, fast, and the cleanup was spotless. They replaced our entire roof in
                            one day. Brandi clearly runs a tight ship, and it shows in the quality of the work and the
                            respect they show your property."
                          </p>
                        </div>
                        <div className="mt-auto border-t border-brand-border pt-6">
                          <p className="font-heading font-bold text-sm uppercase tracking-wide">David T.</p>
                          <p className="text-brand-muted text-xs uppercase tracking-widest mt-1">Burleson, TX • Roof Replacement</p>
                        </div>
                      </div>
                      <div className="bg-brand-white p-10 lg:p-12 border border-brand-border flex flex-col justify-between h-full relative">
                        <div className="text-[80px] font-heading font-black text-brand-aqua/20 absolute top-4 left-6 leading-none">"</div>
                        <div className="relative z-10 mb-12">
                          <StarRating />
                          <p className="font-sans text-brand-charcoal text-base leading-relaxed">
                            "A rare find in the roofing industry. They actually did exactly what they said they would do,
                            when they said they would do it. Dealing with storm damage is stressful, but 41 Roofing made
                            the restoration process straightforward."
                          </p>
                        </div>
                        <div className="mt-auto border-t border-brand-border pt-6">
                          <p className="font-heading font-bold text-sm uppercase tracking-wide">Robert K.</p>
                          <p className="text-brand-muted text-xs uppercase tracking-widest mt-1">Arlington, TX • Storm Damage</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Honest Inspections */}
                <section id="inspection" className="bg-brand-lightAqua py-24 md:py-32">
                  <div className="max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-6 order-2 lg:order-1 relative">
                      <div className="relative h-[500px] md:h-[700px] w-full overflow-hidden">
                        <img
                          src="https://images.unsplash.com/photo-1590479773265-7464e5d48118?auto=format&fit=crop&q=80&w=1200"
                          alt="Honest Roof Inspection"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <div className="hidden md:block absolute -bottom-8 -right-8 w-48 h-48 bg-brand-aqua border border-brand-charcoal/10 -z-10" />
                    </div>
                    <div className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2 flex flex-col justify-center">
                      <h3 className="font-heading font-black text-brand-charcoal text-[28px] md:text-[42px] leading-tight mb-8">
                        HONEST INSPECTIONS.
                        <br />
                        DEPENDABLE RESULTS.
                      </h3>
                      <h2 className="font-heading font-bold text-brand-charcoal text-xl md:text-2xl mb-8 tracking-wide">
                        WE DIAGNOSE BEFORE WE SELL.
                      </h2>
                      <div className="pl-6 border-l-2 border-brand-black mb-10">
                        <p className="font-heading font-bold text-brand-black text-lg md:text-xl italic uppercase tracking-wide">
                          "We never sell you what you don't need."
                        </p>
                      </div>
                      <div className="font-sans text-brand-charcoal/80 text-base md:text-lg space-y-6">
                        <p>
                          At 41 Roofing, we believe that a strong reputation is built on telling the truth. Before we ever
                          discuss a contract or a replacement, we perform a thorough, honest assessment of your roofing
                          system.
                        </p>
                        <p>
                          We provide clear documentation and truthful recommendations. If a simple repair will extend the
                          life of your roof, that is exactly what we will recommend. If storm damage warrants a full
                          replacement, we explain our findings clearly so you can make an informed decision.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Residential Services */}
                <section id="residential" className="py-24 md:py-32 bg-brand-white">
                  <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                    <div className="mb-16 md:mb-24">
                      <p className="eyebrow mb-4">Residential Roofing</p>
                      <h2 className="font-heading font-bold text-[32px] md:text-h2-desktop text-brand-black leading-[1.1] max-w-4xl">
                        COMPLETE ROOFING SERVICES FOR NORTH TEXAS HOMES.
                      </h2>
                      <p className="mt-8 text-brand-charcoal/80 max-w-2xl text-lg font-sans">
                        Texas heat, severe wind, large hail, and heavy rain put incredible stress on aging roofing systems.
                        We build roofs designed to withstand the unique demands of our local climate.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 lg:gap-x-32">
                      <div>
                        {[
                          'Roof Inspections',
                          'Roof Repair',
                          'Roof Replacement',
                          'Storm Damage Inspection',
                          'Hail Damage',
                        ].map((s) => (
                          <button
                            key={s}
                            onClick={() => scrollToId('contact')}
                            className="group block py-8 divider-light flex justify-between items-center hover:bg-brand-softGray transition-colors px-4 -mx-4 w-full text-left"
                          >
                            <span className="font-heading font-bold text-xl md:text-2xl text-brand-black tracking-wide">
                              {s}
                            </span>
                            <ArrowIcon className="w-6 h-6 text-brand-black" />
                          </button>
                        ))}
                      </div>
                      <div>
                        {[
                          'Emergency Tarping',
                          'Skylights',
                          'Flashing Repairs',
                          'Decking / Structural Repair',
                          'Gutters',
                        ].map((s) => (
                          <button
                            key={s}
                            onClick={() => scrollToId('contact')}
                            className="group block py-8 divider-light flex justify-between items-center hover:bg-brand-softGray transition-colors px-4 -mx-4 w-full text-left"
                          >
                            <span className="font-heading font-bold text-xl md:text-2xl text-brand-black tracking-wide">
                              {s}
                            </span>
                            <ArrowIcon className="w-6 h-6 text-brand-black" />
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </section>

                {/* Projects */}
                <section id="projects" className="py-24 md:py-32 bg-brand-softGray">
                  <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                    <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                      <div>
                        <p className="eyebrow mb-4">Recent Work</p>
                        <h2 className="font-heading font-bold text-[32px] md:text-[52px] text-brand-black leading-[1.1]">
                          ROOFS WE'VE BUILT
                          <br />
                          ACROSS NORTH TEXAS.
                        </h2>
                      </div>
                      <button
                        onClick={() => scrollToId('projects')}
                        className="inline-flex items-center gap-3 font-heading font-bold text-sm tracking-widest text-brand-black hover:text-brand-aqua transition-colors uppercase group"
                      >
                        View All Projects
                        <ArrowIcon className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
                      <div className="group relative">
                        <button onClick={() => scrollToId('contact')} className="block overflow-hidden relative bg-brand-charcoal h-[400px] md:h-[600px] mb-6 w-full text-left">
                          <img
                            src="https://images.unsplash.com/photo-1605814524103-62584102d12e?auto=format&fit=crop&q=80&w=1200"
                            alt="Roof Replacement in Crowley"
                            className="w-full h-full object-cover opacity-80 img-hover-scale"
                          />
                          <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        </button>
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex gap-4 mb-2">
                              <span className="font-heading font-bold text-xs uppercase tracking-widest text-brand-muted">
                                Crowley, TX
                              </span>
                              <span className="font-heading font-bold text-xs uppercase tracking-widest text-brand-muted border-l border-brand-border pl-4">
                                Architectural Shingles
                              </span>
                            </div>
                            <h3 className="font-heading font-bold text-2xl text-brand-black mb-2">ROOF REPLACEMENT</h3>
                            <p className="font-sans text-brand-charcoal/80 text-sm max-w-md">
                              Aging system replaced with high-wind resistant architectural shingles after extensive
                              granule loss.
                            </p>
                          </div>
                          <button
                            onClick={() => scrollToId('contact')}
                            className="hidden md:inline-flex items-center font-heading font-bold text-sm tracking-widest uppercase hover:text-brand-aqua transition-colors group-hover:translate-x-2 transform duration-300"
                          >
                            View Project →
                          </button>
                        </div>
                      </div>
                      <div className="flex flex-col gap-8 lg:gap-16 mt-0 md:mt-24">
                        <div className="group relative">
                          <button onClick={() => scrollToId('contact')} className="block overflow-hidden relative bg-brand-charcoal h-[300px] md:h-[400px] mb-6 w-full text-left">
                            <img
                              src="https://images.unsplash.com/photo-1628745277861-1ee068224594?auto=format&fit=crop&q=80&w=800"
                              alt="Storm Damage Repair in Burleson"
                              className="w-full h-full object-cover opacity-80 img-hover-scale"
                            />
                            <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500" />
                          </button>
                          <div>
                            <div className="flex gap-4 mb-2">
                              <span className="font-heading font-bold text-xs uppercase tracking-widest text-brand-muted">
                                Burleson, TX
                              </span>
                            </div>
                            <h3 className="font-heading font-bold text-xl text-brand-black mb-2">STORM DAMAGE REPAIR</h3>
                            <p className="font-sans text-brand-charcoal/80 text-sm mb-4">
                              Targeted repair of wind-lifted shingles and damaged ridge caps following severe spring
                              storms.
                            </p>
                            <button
                              onClick={() => scrollToId('contact')}
                              className="inline-flex items-center font-heading font-bold text-xs tracking-widest uppercase text-brand-black hover:text-brand-aqua transition-colors"
                            >
                              View Project →
                            </button>
                          </div>
                        </div>
                        <div className="group relative">
                          <button onClick={() => scrollToId('contact')} className="block overflow-hidden relative bg-brand-charcoal h-[300px] md:h-[400px] mb-6 w-full text-left">
                            <img
                              src="https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&q=80&w=800"
                              alt="Commercial Roofing in Arlington"
                              className="w-full h-full object-cover opacity-80 img-hover-scale"
                            />
                            <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500" />
                          </button>
                          <div>
                            <div className="flex gap-4 mb-2">
                              <span className="font-heading font-bold text-xs uppercase tracking-widest text-brand-muted">
                                Arlington, TX
                              </span>
                              <span className="font-heading font-bold text-xs uppercase tracking-widest text-brand-muted border-l border-brand-border pl-4">
                                TPO System
                              </span>
                            </div>
                            <h3 className="font-heading font-bold text-xl text-brand-black mb-2">COMMERCIAL ROOFING</h3>
                            <p className="font-sans text-brand-charcoal/80 text-sm mb-4">
                              Complete flat roof recovery for local retail center experiencing multiple active leaks.
                            </p>
                            <button
                              onClick={() => scrollToId('contact')}
                              className="inline-flex items-center font-heading font-bold text-xs tracking-widest uppercase text-brand-black hover:text-brand-aqua transition-colors"
                            >
                              View Project →
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Storm */}
                <section id="storm" className="relative py-32 bg-brand-black overflow-hidden">
                  <div className="absolute inset-0 z-0">
                    <img
                      src="https://images.unsplash.com/photo-1601004652238-d65fa3462947?auto=format&fit=crop&q=80&w=2000"
                      alt="Storm Damage"
                      className="w-full h-full object-cover opacity-30 grayscale"
                    />
                    <div className="absolute inset-0 bg-brand-black/60" />
                  </div>
                  <div className="relative z-10 max-w-[1920px] mx-auto px-6 md:px-12">
                    <div className="max-w-3xl mb-16">
                      <p className="eyebrow text-brand-aqua mb-4">North Texas Storms</p>
                      <h2 className="font-heading font-black text-brand-white text-[32px] md:text-h2-desktop leading-[1.1] mb-8">
                        WHEN TEXAS WEATHER HITS,
                        <br />
                        KNOW WHAT TO DO NEXT.
                      </h2>
                      <p className="font-sans text-brand-white/80 text-lg md:text-xl max-w-2xl">
                        Hail, high winds, and heavy rain can compromise a roof instantly. Missing shingles, roof leaks,
                        and hidden impact damage require immediate professional evaluation to prevent further structural
                        deterioration.
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-t border-white/20 pt-16 mb-16">
                      {[
                        { num: '01', title: 'INSPECT', desc: 'Thorough evaluation of entire roofing system.' },
                        { num: '02', title: 'DOCUMENT', desc: 'Photographic evidence of all visible damage.' },
                        { num: '03', title: 'EXPLAIN', desc: 'Clear review of findings without pressure.' },
                        { num: '04', title: 'DEVELOP SCOPE', desc: 'Detailed plan for exact repair requirements.' },
                        { num: '05', title: 'REPAIR / REPLACE', desc: 'Professional execution of the approved scope.' },
                      ].map((step) => (
                        <div key={step.num}>
                          <span className="block font-heading font-bold text-brand-aqua text-4xl mb-4">{step.num}</span>
                          <h4 className="font-heading font-bold text-brand-white text-lg mb-2">{step.title}</h4>
                          <p className="font-sans text-brand-white/70 text-sm">{step.desc}</p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-brand-charcoal/50 border border-white/10 p-6 md:p-8 max-w-4xl mb-12 border-l-4 border-l-brand-aqua">
                      <p className="font-sans text-brand-white text-base md:text-lg italic">
                        "We document visible damage, explain our findings and provide a clear construction scope."
                      </p>
                    </div>
                    <button
                      onClick={() => scrollToId('contact')}
                      className="inline-flex justify-center items-center bg-brand-aqua text-brand-black px-10 py-5 font-heading font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300"
                    >
                      Request A Storm Inspection
                    </button>
                  </div>
                </section>

                {/* Process */}
                <section id="process" className="py-24 md:py-32 bg-brand-white">
                  <div className="max-w-[1920px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-16 lg:gap-32">
                    <div className="md:w-1/3">
                      <p className="eyebrow mb-4">Our Process</p>
                      <h2 className="font-heading font-bold text-[32px] md:text-[48px] text-brand-black leading-[1.1] sticky top-32">
                        STRAIGHTFORWARD
                        <br />
                        FROM INSPECTION TO COMPLETION.
                      </h2>
                    </div>
                    <div className="md:w-2/3 flex flex-col gap-12">
                      {[
                        { num: '01', title: 'INSPECT', desc: 'A comprehensive, honest evaluation of your property\'s exterior.' },
                        { num: '02', title: 'DOCUMENT', desc: 'Thorough photographic documentation of current conditions.' },
                        { num: '03', title: 'EXPLAIN', desc: 'A clear, no-pressure conversation about what we found and what it means.' },
                        { num: '04', title: 'PLAN', desc: 'Developing a precise scope of work and timeline for your approval.' },
                        { num: '05', title: 'BUILD', desc: 'Professional installation using premium materials and proven techniques.' },
                        { num: '06', title: 'FINAL WALKTHROUGH', desc: 'Ensuring every detail meets our standard and your satisfaction.' },
                      ].map((step) => (
                        <div key={step.num} className="flex gap-8 group">
                          <div className="font-heading font-black text-brand-border text-5xl md:text-6xl group-hover:text-brand-black transition-colors">
                            {step.num}
                          </div>
                          <div>
                            <h3 className="font-heading font-bold text-2xl mb-2">{step.title}</h3>
                            <p className="font-sans text-brand-charcoal/80">{step.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Materials */}
                <section id="materials" className="py-24 md:py-32 bg-brand-softGray">
                  <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                    <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
                      <div className="max-w-2xl">
                        <p className="eyebrow mb-4">Materials & Roofing Systems</p>
                        <h2 className="font-heading font-bold text-[32px] md:text-[48px] text-brand-black leading-[1.1]">
                          CHOOSE A ROOF BUILT FOR YOUR HOME AND YOUR PROPERTY.
                        </h2>
                      </div>
                      <button
                        onClick={() => scrollToId('contact')}
                        className="inline-flex justify-center items-center border-2 border-brand-black text-brand-black px-8 py-4 font-heading font-bold text-sm tracking-widest uppercase hover:bg-brand-black hover:text-brand-white transition-colors duration-300"
                      >
                        Explore Roofing Materials
                      </button>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-1">
                      {[
                        'ARCHITECTURAL SHINGLES',
                        'IMPACT-RESISTANT OPTIONS',
                        'METAL ROOFING',
                        'COMMERCIAL SYSTEMS',
                      ].map((mat) => (
                        <button
                          key={mat}
                          onClick={() => scrollToId('contact')}
                          className="bg-brand-white p-8 border border-brand-border h-[300px] flex flex-col justify-between group hover:border-brand-black transition-colors cursor-pointer text-left"
                        >
                          <h3 className="font-heading font-bold text-xl text-brand-black">{mat}</h3>
                          <div className="flex justify-between items-center text-brand-aqua opacity-0 group-hover:opacity-100 transition-opacity">
                            <span className="font-heading font-bold text-xs tracking-widest text-brand-black uppercase">
                              View Options
                            </span>
                            <ArrowIcon className="w-5 h-5 text-brand-black" />
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Repair or Replace */}
                <section id="repair-replace" className="py-24 md:py-32 bg-brand-white">
                  <div className="max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                      <h2 className="font-heading font-black text-[32px] md:text-[52px] text-brand-black leading-[1.1] mb-6">
                        REPAIR OR REPLACE?
                      </h2>
                      <p className="font-sans text-brand-charcoal/80 text-lg mb-8">
                        Some roofs can be repaired, while others require replacement. Our honest inspections evaluate key
                        factors to give you the truth about your roof's condition.
                      </p>
                      <ul className="space-y-4 font-heading font-bold text-sm tracking-widest uppercase mb-12">
                        {[
                          'Roof Age',
                          'Extent of Damage',
                          'Leak History',
                          'Material Condition',
                          'Storm Impact',
                          'Decking Condition',
                          'Long-Term Cost',
                        ].map((item) => (
                          <li key={item} className="flex items-center gap-4">
                            <div className="w-1.5 h-1.5 bg-brand-aqua" />
                            {item}
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col sm:flex-row gap-4">
                        <button
                          onClick={() => scrollToId('contact')}
                          className="inline-flex justify-center items-center border border-brand-black text-brand-black px-8 py-4 font-heading font-bold text-xs tracking-widest uppercase hover:bg-brand-black hover:text-brand-white transition-colors"
                        >
                          Learn About Roof Repair
                        </button>
                        <button
                          onClick={() => scrollToId('contact')}
                          className="inline-flex justify-center items-center border border-brand-black text-brand-black px-8 py-4 font-heading font-bold text-xs tracking-widest uppercase hover:bg-brand-black hover:text-brand-white transition-colors"
                        >
                          Learn About Replacement
                        </button>
                      </div>
                    </div>
                    <div className="relative h-[600px] w-full bg-brand-charcoal overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1518063223069-70dc4e1074e0?auto=format&fit=crop&q=80&w=1000"
                        alt="Roof assessment"
                        className="w-full h-full object-cover opacity-80"
                      />
                    </div>
                  </div>
                </section>

                {/* Statement Banner */}
                <section className="relative h-[60vh] min-h-[500px] w-full bg-brand-black flex items-center justify-center overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=2000"
                    alt="Architectural build"
                    className="absolute inset-0 w-full h-full object-cover opacity-40"
                  />
                  <div className="absolute inset-0 bg-brand-black/40" />
                  <div className="relative z-10 text-center px-6">
                    <h2 className="font-heading font-black text-brand-white text-[42px] md:text-[80px] lg:text-[120px] leading-[0.9] tracking-tighter">
                      RESTORE THE PAST.
                      <br />
                      BUILD THE FUTURE.
                    </h2>
                  </div>
                </section>

                {/* Restoration */}
                <section id="restoration" className="py-24 md:py-32 bg-brand-charcoal text-brand-white">
                  <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                    <div className="max-w-3xl mb-16">
                      <p className="eyebrow text-brand-white/50 mb-4">Restoration & Remodeling</p>
                      <h2 className="font-heading font-bold text-[32px] md:text-[52px] leading-[1.1]">
                        WHEN YOUR PROJECT GOES BEYOND THE ROOF.
                      </h2>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-12 border-t border-white/20 pt-16">
                      {['Gutters', 'Exterior Restoration', 'Exterior Repairs', 'Interior Restoration', 'Remodeling', 'Property Repairs'].map(
                        (item) => (
                          <button
                            key={item}
                            onClick={() => scrollToId('contact')}
                            className="font-heading font-bold text-xl md:text-2xl hover:text-brand-aqua transition-colors cursor-pointer text-left"
                          >
                            {item}
                          </button>
                        )
                      )}
                    </div>
                  </div>
                </section>

                {/* Owner */}
                <section id="owner" className="bg-brand-lightAqua py-24 md:py-32">
                  <div className="max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <div className="lg:col-span-5 flex flex-col justify-center">
                      <p className="eyebrow mb-4">Meet The Owner</p>
                      <h2 className="font-heading font-black text-brand-charcoal text-[42px] md:text-[64px] leading-none mb-8">
                        OWNER-LED.
                        <br />
                        WOMAN-OWNED.
                      </h2>
                      <h3 className="font-heading font-bold text-brand-black text-xl tracking-widest mb-6">BRANDI BURK</h3>
                      <div className="font-sans text-brand-charcoal/80 text-base md:text-lg space-y-6 max-w-lg">
                        <p>
                          Born and raised with local Crowley roots, Brandi built 41 Roofing on the principle that
                          contractors should be trustworthy, transparent, and present.
                        </p>
                        <p>
                          Her hands-on leadership ensures that every inspection is honest, every communication is clear,
                          and every result is dependable. When you work with 41 Roofing, you aren't dealing with a faceless
                          franchise; you're working with a local business committed to protecting North Texas homes.
                        </p>
                      </div>
                    </div>
                    <div className="lg:col-span-6 lg:col-start-7 relative">
                      <div className="relative h-[600px] md:h-[800px] w-full overflow-hidden bg-brand-charcoal">
                        <img
                          src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                          alt="Brandi Burk, Owner"
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                      </div>
                      <div className="absolute -top-8 -left-8 w-32 h-32 border border-brand-black/20 -z-10 hidden md:block" />
                    </div>
                  </div>
                </section>

                {/* Why Choose */}
                <section id="why-us" className="py-24 md:py-32 bg-brand-white">
                  <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                    <div className="text-center max-w-4xl mx-auto mb-20">
                      <p className="eyebrow mb-4">Why Choose 41 Roofing?</p>
                      <h2 className="font-heading font-bold text-[32px] md:text-[52px] text-brand-black leading-[1.1]">
                        THE STANDARD BEHIND EVERY PROJECT.
                      </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-t border-l border-brand-border">
                      {[
                        {
                          num: '/01',
                          title: 'LOCAL TEXAS ROOTS',
                          desc: 'We aren\'t out-of-town storm chasers. We are based in Crowley and invested in our community.',
                        },
                        {
                          num: '/02',
                          title: 'WOMAN-OWNED',
                          desc: 'Led by Brandi Burk, bringing a distinct standard of care and communication to the industry.',
                        },
                        {
                          num: '/03',
                          title: 'HONEST INSPECTIONS',
                          desc: 'We tell you exactly what you need, and more importantly, what you don\'t need.',
                        },
                        {
                          num: '/04',
                          title: 'MULTI-SERVICE EXPERTISE',
                          desc: 'Equipped to handle everything from minor roof repairs to full property restoration.',
                        },
                        {
                          num: '/05',
                          title: 'DEPENDABLE RESULTS',
                          desc: 'High-quality materials installed correctly, ensuring your roof performs when it matters.',
                        },
                        {
                          num: '/06',
                          title: 'CLEAR COMMUNICATION',
                          desc: 'You will never have to guess where your project stands or who to call with a question.',
                        },
                      ].map((item) => (
                        <div
                          key={item.num}
                          className="p-10 border-b border-r border-brand-border"
                        >
                          <span className="block font-heading font-black text-brand-aqua text-3xl mb-6">{item.num}</span>
                          <h3 className="font-heading font-bold text-xl mb-4">{item.title}</h3>
                          <p className="font-sans text-brand-charcoal/70 text-sm">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Commercial */}
                <section id="commercial" className="bg-brand-charcoal py-24 md:py-32 text-brand-white">
                  <div className="max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div>
                      <h2 className="font-heading font-black text-[32px] md:text-[52px] leading-[1.1] mb-8">
                        COMMERCIAL ROOFING
                        <br />
                        WITHOUT THE GUESSWORK.
                      </h2>
                      <p className="font-heading font-bold text-brand-aqua text-sm tracking-widest uppercase mb-8">
                        Property Owners • Facility Managers • Business Owners • Commercial Property Managers
                      </p>
                      <p className="font-sans text-brand-white/80 text-lg mb-12 max-w-xl">
                        Protecting your commercial asset requires specialized expertise. We provide dependable inspection,
                        repair, and replacement services for low-slope and commercial systems.
                      </p>
                      <button
                        onClick={() => scrollToId('contact')}
                        className="inline-flex justify-center items-center bg-brand-white text-brand-black px-8 py-4 font-heading font-bold text-sm tracking-widest uppercase hover:bg-brand-aqua transition-colors duration-300"
                      >
                        Explore Commercial Roofing
                      </button>
                    </div>
                    <div className="relative h-[400px] md:h-[600px] w-full">
                      <img
                        src="https://images.unsplash.com/photo-1541888000431-155e8eb94f54?auto=format&fit=crop&q=80&w=1000"
                        alt="Commercial Roofing"
                        className="w-full h-full object-cover grayscale opacity-80"
                      />
                    </div>
                  </div>
                </section>

                {/* Service Areas */}
                <section id="service-areas" className="py-24 md:py-32 bg-brand-softGray">
                  <div className="max-w-[1920px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                      <p className="eyebrow mb-4">Local Roofing</p>
                      <h2 className="font-heading font-bold text-[32px] md:text-[52px] text-brand-black leading-[1.1]">
                        PROUDLY SERVING NORTH TEXAS.
                      </h2>
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-8 mb-16 max-w-4xl mx-auto text-center">
                      {['CROWLEY', 'BURLESON', 'ARLINGTON', 'JOSHUA', 'CLEBURNE'].map((city) => (
                        <button
                          key={city}
                          onClick={() => scrollToId('contact')}
                          className="font-heading font-black text-2xl md:text-4xl text-brand-black hover:text-brand-aqua transition-colors"
                        >
                          {city}
                        </button>
                      ))}
                      <span className="font-heading font-black text-2xl md:text-4xl text-brand-muted">SOUTH DFW</span>
                    </div>
                    <div className="text-center">
                      <button
                        onClick={() => scrollToId('contact')}
                        className="inline-flex items-center gap-2 font-heading font-bold text-sm tracking-widest text-brand-black hover:text-brand-aqua transition-colors uppercase group"
                      >
                        View All Service Areas
                        <ArrowIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </section>

                {/* FAQ */}
                <section id="faq" className="py-24 md:py-32 bg-brand-white">
                  <div className="max-w-[1000px] mx-auto px-6 md:px-12">
                    <div className="text-center mb-16">
                      <p className="eyebrow mb-4">Roofing Questions</p>
                      <h2 className="font-heading font-bold text-[32px] md:text-[48px] text-brand-black leading-[1.1]">
                        CLEAR ANSWERS BEFORE YOU MAKE A DECISION.
                      </h2>
                    </div>
                    <div className="space-y-0 border-t border-brand-border">
                      {[
                        {
                          q: 'HOW DO I KNOW IF I SHOULD REPAIR OR REPLACE MY ROOF?',
                          a: 'It depends on the age of the roof, the extent of the damage, and the condition of the materials. We perform a thorough inspection to determine if a targeted repair will resolve the issue or if a full replacement is the most cost-effective long-term solution. We will never push a replacement if a repair is viable.',
                        },
                        {
                          q: 'WHAT ARE COMMON SIGNS OF HAIL DAMAGE?',
                          a: 'Look for dented gutters, damaged flashing, circular dark spots on shingles where granules are missing (bruising), and excessive granules in your downspouts. Often, severe hail damage is not visible from the ground, requiring a professional roof inspection.',
                        },
                        {
                          q: 'WHEN SHOULD I HAVE MY ROOF INSPECTED?',
                          a: 'We recommend an inspection after any severe weather event (major hail or high winds), if you notice active leaks or water stains inside, or if your roof is over 10-15 years old. Catching problems early prevents costly structural damage.',
                        },
                        {
                          q: 'DO YOU PROVIDE FREE ROOF INSPECTIONS?',
                          a: 'Yes, we provide free, comprehensive, and honest roof inspections for homeowners and commercial property owners in our service area.',
                        },
                        {
                          q: 'HOW LONG DOES ROOF REPLACEMENT USUALLY TAKE?',
                          a: 'Most standard residential roof replacements are completed in 1 to 2 days, weather permitting. Complex roofs or commercial systems may take longer. We outline the exact timeline before the project begins.',
                        },
                        {
                          q: 'WHAT SHOULD I DO AFTER A NORTH TEXAS HAILSTORM?',
                          a: 'First, ensure your safety. Then, document any obvious damage from the ground. Contact a reputable, local roofing contractor like 41 Roofing for an honest inspection before calling your insurance company. We will provide the documentation you need to decide if a claim is warranted.',
                        },
                        {
                          q: 'CAN YOU REPAIR AN ACTIVE ROOF LEAK?',
                          a: 'Yes, we specialize in identifying the source of leaks (which can sometimes travel far from the actual entry point) and performing durable repairs to stop water intrusion.',
                        },
                        {
                          q: 'DO YOU PROVIDE RESIDENTIAL AND COMMERCIAL ROOFING?',
                          a: 'Yes, our team is equipped and experienced to handle both sloped residential roofing systems and low-slope or flat commercial systems.',
                        },
                        {
                          q: 'WHAT ROOFING MATERIALS DO YOU INSTALL?',
                          a: 'We install premium architectural shingles, impact-resistant options, metal roofing, and various commercial systems. We only use materials proven to perform in the Texas climate.',
                        },
                        {
                          q: 'WHAT AREAS DO YOU SERVE?',
                          a: 'We are based in Crowley, TX, and serve the greater North Texas / South DFW area, including Burleson, Arlington, Joshua, Cleburne, and surrounding communities.',
                        },
                      ].map((faq, idx) => (
                        <details key={idx} className="group border-b border-brand-border">
                          <summary className="flex justify-between items-center font-heading font-bold text-lg md:text-xl text-brand-black py-6 cursor-pointer">
                            {faq.q}
                            <span className="transition group-open:rotate-180 text-brand-aqua ml-4">
                              <svg
                                fill="none"
                                height="24"
                                shapeRendering="geometricPrecision"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                                width="24"
                              >
                                <path d="M6 9l6 6 6-6" />
                              </svg>
                            </span>
                          </summary>
                          <div className="text-brand-charcoal/80 font-sans pb-6 text-base leading-relaxed">{faq.a}</div>
                        </details>
                      ))}
                    </div>
                  </div>
                </section>

                {/* Contact */}
                <section id="contact" className="bg-brand-black text-brand-white">
                  <div className="max-w-[1920px] mx-auto flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 p-12 lg:p-24 xl:p-32 flex flex-col justify-center border-b lg:border-b-0 lg:border-r border-white/10">
                      <p className="eyebrow text-brand-white/50 mb-6">Start Here</p>
                      <h2 className="font-heading font-black text-[42px] md:text-[64px] leading-none mb-6">
                        NOT SURE WHAT YOUR ROOF NEEDS?
                      </h2>
                      <h3 className="font-heading font-bold text-brand-aqua text-xl md:text-2xl mb-12 tracking-wide">
                        START WITH AN HONEST INSPECTION.
                      </h3>
                      <div className="flex flex-col sm:flex-row gap-6 mt-auto pt-12">
                        <a
                          href="tel:817-266-9433"
                          className="inline-flex justify-center items-center bg-brand-aqua text-brand-black px-10 py-5 font-heading font-bold text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300"
                        >
                          Call / Text 817-266-9433
                        </a>
                      </div>
                    </div>
                    <div className="w-full lg:w-1/2 p-12 lg:p-24 xl:p-32 bg-brand-charcoal">
                      {formStatus === 'success' ? (
                        <div className="h-full flex flex-col justify-center items-center text-center">
                          <h3 className="font-heading font-black text-3xl text-brand-white mb-4">THANK YOU!</h3>
                          <p className="text-brand-white/80 font-sans text-lg">
                            We have received your request and will contact you shortly to schedule your inspection.
                          </p>
                          <button
                            onClick={() => {
                              setFormStatus('idle');
                              setFormData({ fname: '', lname: '', phone: '', email: '', address: '', service: '', message: '', sms: false });
                            }}
                            className="mt-8 inline-flex justify-center items-center border border-brand-white text-brand-white px-8 py-4 font-heading font-bold text-sm tracking-widest uppercase hover:bg-brand-white hover:text-brand-black transition-colors"
                          >
                            Submit Another Request
                          </button>
                        </div>
                      ) : (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-10">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="relative">
                              <input
                                type="text"
                                id="fname"
                                value={formData.fname}
                                onChange={handleInputChange}
                                className="w-full bg-transparent border-b border-white/20 pb-3 text-brand-white placeholder-transparent focus:outline-none focus:border-brand-aqua transition-colors peer font-sans text-lg"
                                placeholder="First Name"
                                required
                              />
                              <label
                                htmlFor="fname"
                                className="absolute left-0 -top-4 text-xs font-heading font-bold uppercase tracking-widest text-brand-white/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-brand-white/70 peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-aqua"
                              >
                                First Name
                              </label>
                            </div>
                            <div className="relative">
                              <input
                                type="text"
                                id="lname"
                                value={formData.lname}
                                onChange={handleInputChange}
                                className="w-full bg-transparent border-b border-white/20 pb-3 text-brand-white placeholder-transparent focus:outline-none focus:border-brand-aqua transition-colors peer font-sans text-lg"
                                placeholder="Last Name"
                                required
                              />
                              <label
                                htmlFor="lname"
                                className="absolute left-0 -top-4 text-xs font-heading font-bold uppercase tracking-widest text-brand-white/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-brand-white/70 peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-aqua"
                              >
                                Last Name
                              </label>
                            </div>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                            <div className="relative">
                              <input
                                type="tel"
                                id="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="w-full bg-transparent border-b border-white/20 pb-3 text-brand-white placeholder-transparent focus:outline-none focus:border-brand-aqua transition-colors peer font-sans text-lg"
                                placeholder="Phone"
                                required
                              />
                              <label
                                htmlFor="phone"
                                className="absolute left-0 -top-4 text-xs font-heading font-bold uppercase tracking-widest text-brand-white/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-brand-white/70 peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-aqua"
                              >
                                Phone
                              </label>
                            </div>
                            <div className="relative">
                              <input
                                type="email"
                                id="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full bg-transparent border-b border-white/20 pb-3 text-brand-white placeholder-transparent focus:outline-none focus:border-brand-aqua transition-colors peer font-sans text-lg"
                                placeholder="Email"
                                required
                              />
                              <label
                                htmlFor="email"
                                className="absolute left-0 -top-4 text-xs font-heading font-bold uppercase tracking-widest text-brand-white/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-brand-white/70 peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-aqua"
                              >
                                Email
                              </label>
                            </div>
                          </div>
                          <div className="relative">
                            <input
                              type="text"
                              id="address"
                              value={formData.address}
                              onChange={handleInputChange}
                              className="w-full bg-transparent border-b border-white/20 pb-3 text-brand-white placeholder-transparent focus:outline-none focus:border-brand-aqua transition-colors peer font-sans text-lg"
                              placeholder="Property Address / ZIP"
                              required
                            />
                            <label
                              htmlFor="address"
                              className="absolute left-0 -top-4 text-xs font-heading font-bold uppercase tracking-widest text-brand-white/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-brand-white/70 peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-aqua"
                            >
                              Property Address / ZIP
                            </label>
                          </div>
                          <div className="relative">
                            <select
                              id="service"
                              value={formData.service}
                              onChange={handleInputChange}
                              className="w-full bg-brand-charcoal border-b border-white/20 pb-3 text-brand-white/70 focus:outline-none focus:border-brand-aqua transition-colors font-sans text-lg appearance-none rounded-none cursor-pointer"
                            >
                              <option value="" disabled>
                                Select Service Needed
                              </option>
                              <option value="inspection">Roof Inspection</option>
                              <option value="repair">Roof Repair</option>
                              <option value="replacement">Roof Replacement</option>
                              <option value="storm">Storm Damage</option>
                              <option value="tarping">Emergency Tarping</option>
                              <option value="commercial">Commercial Roofing</option>
                              <option value="restoration">Restoration</option>
                              <option value="remodeling">Remodeling</option>
                              <option value="other">Other</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-brand-aqua">
                              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                          <div className="relative">
                            <textarea
                              id="message"
                              rows={3}
                              value={formData.message}
                              onChange={handleInputChange}
                              className="w-full bg-transparent border-b border-white/20 pb-3 text-brand-white placeholder-transparent focus:outline-none focus:border-brand-aqua transition-colors peer font-sans text-lg resize-none"
                              placeholder="Message"
                            />
                            <label
                              htmlFor="message"
                              className="absolute left-0 -top-4 text-xs font-heading font-bold uppercase tracking-widest text-brand-white/50 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-brand-white/70 peer-placeholder-shown:top-1 peer-focus:-top-4 peer-focus:text-xs peer-focus:text-brand-aqua"
                            >
                              Message (Optional)
                            </label>
                          </div>
                          <div className="flex items-start gap-3 mt-4">
                            <input
                              type="checkbox"
                              id="sms"
                              checked={formData.sms}
                              onChange={handleInputChange}
                              className="mt-1 accent-brand-aqua cursor-pointer w-4 h-4 rounded-none bg-brand-charcoal border-white/20"
                            />
                            <label htmlFor="sms" className="text-xs text-brand-white/50 font-sans leading-tight">
                              I consent to receive SMS notifications, alerts & occasional marketing communication from 41
                              Roofing & Restoration. View Privacy Policy and Terms of Service.
                            </label>
                          </div>
                          {formStatus === 'error' && (
                            <p className="text-red-400 text-sm font-sans">Please fill in all required fields.</p>
                          )}
                          <button
                            type="submit"
                            disabled={formStatus === 'submitting'}
                            className="w-full border border-brand-white text-brand-white py-5 font-heading font-bold text-sm tracking-widest uppercase hover:bg-brand-white hover:text-brand-black transition-colors mt-4 disabled:opacity-50"
                          >
                            {formStatus === 'submitting' ? 'Submitting...' : 'Request My Inspection'}
                          </button>
                        </form>
                      )}
                    </div>
                  </div>
                </section>
              </main>
            }
          />
        </Routes>

        {/* Footer */}
        <footer className="bg-brand-black border-t border-white/10 text-brand-white pt-24 pb-12">
          <div className="max-w-[1920px] mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <div>
              <div className="w-12 h-12 bg-brand-white flex items-center justify-center font-heading font-black text-brand-black text-2xl leading-none tracking-tighter mb-8">
                41
              </div>
              <p className="font-sans text-brand-white/70 text-sm max-w-xs mb-8">
                Honest inspections. Dependable results. Premier roofing and restoration services in Crowley and North
                Texas.
              </p>
              <div className="font-sans text-brand-white/70 text-sm">
                <p className="font-heading font-bold text-brand-white mb-2 uppercase tracking-wide">
                  41 Roofing & Restoration
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
                  <span className="text-brand-white font-semibold">Call/Text:</span>{' '}
                  <a href="tel:817-266-9433" className="hover:text-brand-aqua transition-colors">
                    817-266-9433
                  </a>
                </li>
                <li>
                  <span className="text-brand-white font-semibold">Office:</span>{' '}
                  <a href="tel:817-887-9200" className="hover:text-brand-aqua transition-colors">
                    817-887-9200
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg mb-6 tracking-wide">SERVICES</h4>
              <ul className="space-y-3 font-sans text-brand-white/70 text-sm">
                <li>
                  <button onClick={() => scrollToId('residential')} className="hover:text-brand-aqua transition-colors text-left">Residential Roofing</button>
                </li>
                <li>
                  <button onClick={() => scrollToId('commercial')} className="hover:text-brand-aqua transition-colors text-left">Commercial Roofing</button>
                </li>
                <li>
                  <button onClick={() => scrollToId('residential')} className="hover:text-brand-aqua transition-colors text-left">Roof Repair</button>
                </li>
                <li>
                  <button onClick={() => scrollToId('repair-replace')} className="hover:text-brand-aqua transition-colors text-left">Roof Replacement</button>
                </li>
                <li>
                  <button onClick={() => scrollToId('storm')} className="hover:text-brand-aqua transition-colors text-left">Storm Damage</button>
                </li>
                <li>
                  <button onClick={() => scrollToId('restoration')} className="hover:text-brand-aqua transition-colors text-left">Restoration</button>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-lg mb-6 tracking-wide">COMPANY</h4>
              <ul className="space-y-3 font-sans text-brand-white/70 text-sm">
                <li>
                  <button onClick={() => scrollToId('owner')} className="hover:text-brand-aqua transition-colors text-left">About Us</button>
                </li>
                <li>
                  <button onClick={() => scrollToId('projects')} className="hover:text-brand-aqua transition-colors text-left">Projects</button>
                </li>
                <li>
                  <button onClick={() => scrollToId('reviews')} className="hover:text-brand-aqua transition-colors text-left">Reviews</button>
                </li>
                <li>
                  <button onClick={() => scrollToId('service-areas')} className="hover:text-brand-aqua transition-colors text-left">Service Areas</button>
                </li>
                <li>
                  <button onClick={() => scrollToId('faq')} className="hover:text-brand-aqua transition-colors text-left">FAQ</button>
                </li>
                <li>
                  <button onClick={() => scrollToId('contact')} className="hover:text-brand-aqua transition-colors text-left">Contact</button>
                </li>
              </ul>
            </div>
          </div>
          <div className="max-w-[1920px] mx-auto px-6 md:px-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-sans text-brand-white/50">
            <p>© 2024 41 Roofing & Restoration. All rights reserved.</p>
            <div className="flex gap-4">
              <button onClick={() => scrollToId('contact')} className="hover:text-brand-white transition-colors">Privacy Policy</button>
              <button onClick={() => scrollToId('contact')} className="hover:text-brand-white transition-colors">Terms of Service</button>
            </div>
          </div>
        </footer>

        {/* Mobile Bottom Bar */}
        <div className="md:hidden fixed bottom-0 left-0 w-full bg-brand-black border-t border-white/10 z-50 flex">
          <a
            href="tel:817-266-9433"
            className="flex-1 py-4 text-center font-heading font-bold text-xs tracking-widest uppercase text-brand-white border-r border-white/10"
          >
            CALL
          </a>
          <button
            onClick={() => scrollToId('contact')}
            className="flex-1 py-4 text-center font-heading font-bold text-xs tracking-widest uppercase text-brand-black bg-brand-aqua"
          >
            FREE INSPECTION
          </button>
        </div>
      </div>
    </Router>
  );
};

export default App;
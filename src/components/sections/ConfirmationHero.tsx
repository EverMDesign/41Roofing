"use client";

import { useEffect, useRef } from "react";

export default function ConfirmationHero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    sectionRef.current?.classList.add("is-visible");
  }, []);

  return (
    <section className="bg-brand-black text-brand-white py-16 md:py-20 lg:py-28 relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img
          src="/41-roofing-quad-finished.webp"
          alt=""
          className="w-full h-full object-cover grayscale"
        />
      </div>

      <div
        ref={sectionRef}
        className="reveal-up relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center"
      >
        {/* Checkmark icon */}
        <div className="mb-10 flex justify-center">
          <div className="w-24 h-24 rounded-full bg-brand-aqua flex items-center justify-center text-brand-black">
            <svg
              className="w-12 h-12"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
        </div>

        <p className="text-brand-aqua font-heading font-bold tracking-[0.2em] text-sm uppercase mb-6">
          Inspection Request Received
        </p>
        <h1 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl leading-tight mb-8">
          YOU&rsquo;RE ON THE LIST,
          <br />
          CROWLEY.
        </h1>
        <p className="text-brand-white/70 text-lg md:text-xl max-w-2xl mx-auto font-light leading-relaxed">
          Thank you for trusting 41 Roofing. We have received your details and
          our team is already reviewing your property location.
        </p>
      </div>
    </section>
  );
}

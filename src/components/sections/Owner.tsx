"use client";

import { useRef, useState } from "react";

export default function Owner() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <section id="owner" className="bg-brand-aqua py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        <div className="lg:col-span-5 flex flex-col justify-center">
          <p className="eyebrow mb-4">Meet The Owner</p>
          <h2 className="font-heading font-black text-brand-charcoal text-[32px] md:text-[60px] md:leading-[66px] leading-[1.1] mb-8">
            OWNER-LED.
            <br />
            WOMAN-OWNED.
          </h2>
          <h3 className="font-heading font-bold text-brand-black text-xl tracking-widest mb-6">BRANDI BURK</h3>
          <div className="font-sans text-brand-charcoal/80 text-base md:text-lg space-y-6 max-w-lg">
            <p>
              Born and raised with local Crowley roots, Brandi built 41 Roofing on the principle that contractors
              should be trustworthy, transparent, and present.
            </p>
            <p>
              Her hands-on leadership ensures that every inspection is honest, every communication is clear, and
              every result is dependable. When you work with 41 Roofing, you aren&rsquo;t dealing with a faceless
              franchise; you&rsquo;re working with a local business committed to protecting North Texas homes.
            </p>
          </div>
        </div>
        <div className="lg:col-span-6 lg:col-start-7 relative">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[10px] bg-brand-charcoal">
            <video
              ref={videoRef}
              src="https://assets.cdn.filesafe.space/R7DwPt39QmcIooKJtyyM/media/6a73a3b5ee50b30ddc6f569f.mp4"
              controls={playing}
              playsInline
              poster="/41-roofing-thumbnail-video.webp"
              className="absolute inset-0 w-full h-full object-cover"
              onPause={() => setPlaying(false)}
              onPlay={() => setPlaying(true)}
            />
            {!playing && (
              <button
                onClick={handlePlay}
                aria-label="Play video"
                className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer group"
              >
                <svg
                  className="w-16 h-16 md:w-20 md:h-20 text-white drop-shadow-lg group-hover:scale-110 transition-transform duration-300"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            )}
          </div>
          <div className="absolute -top-8 -left-8 w-32 h-32 border border-brand-black/20 rounded-[10px] -z-10 hidden md:block" />
        </div>
      </div>
    </section>
  );
}

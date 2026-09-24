"use client";

import { useState } from "react";

export default function ReviewsWidget() {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="relative min-h-[400px]">
      {!loaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-4">
          <div className="w-10 h-10 border-4 border-brand-aqua/30 border-t-brand-aqua rounded-full animate-spin" />
          <p className="text-sm text-brand-muted">Loading reviews...</p>
        </div>
      )}
      <iframe
        className="lc_reviews_widget"
        src="https://reputationhub.site/reputation/widgets/review_widget/csavg1y6oz1jNxRuSEwz?widgetId=6ab2d99beab39e3931b188dd"
        title="41 Roofing and Restoration Reviews"
        loading="lazy"
        scrolling="no"
        onLoad={() => setLoaded(true)}
        style={{
          minWidth: "100%",
          width: "100%",
          border: "none",
          opacity: loaded ? 1 : 0,
          transition: "opacity 0.3s ease-in",
        }}
      />
    </div>
  );
}

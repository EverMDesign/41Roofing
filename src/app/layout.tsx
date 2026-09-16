import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "41 Roofing & Restoration | Crowley, TX Roofing Contractor",
  description:
    "Honest inspections. Dependable results. 41 Roofing & Restoration provides roof inspections, repairs, replacements, storm restoration, and commercial roofing throughout Crowley and North Texas.",
  metadataBase: new URL("https://41roofing.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "41 Roofing & Restoration | Crowley, TX Roofing Contractor",
    description:
      "Honest inspections. Dependable results. Premier roofing and restoration services in Crowley and North Texas.",
    url: "https://41roofing.com",
    siteName: "41 Roofing & Restoration",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/41-roofing-and-restoration-roof-replacement.webp",
        width: 1200,
        height: 630,
        alt: "41 Roofing and Restoration — roofing contractor in Crowley TX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "41 Roofing & Restoration | Crowley, TX Roofing Contractor",
    description:
      "Honest inspections. Dependable results. Premier roofing and restoration services in Crowley and North Texas.",
    images: ["/41-roofing-and-restoration-roof-replacement.webp"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

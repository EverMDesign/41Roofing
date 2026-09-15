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
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${montserrat.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

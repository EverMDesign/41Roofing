import type { Metadata } from "next";
import ServiceAreaTemplate from "@/components/ServiceAreaTemplate";
import { serviceAreas, getServiceArea } from "@/lib/service-areas-data";
import { notFound } from "next/navigation";

const OG_IMAGE = "/41-roofing-and-restoration-roof-replacement.webp";

export async function generateStaticParams() {
  return serviceAreas.map((area) => ({ slug: area.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) return {};

  return {
    title: area.metaTitle,
    description: area.metaDescription,
    alternates: { canonical: `/areas/${slug}` },
    openGraph: {
      title: area.metaTitle,
      description: area.metaDescription,
      url: `/areas/${slug}`,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: area.ogImageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: area.metaTitle,
      description: area.metaDescription,
      images: [OG_IMAGE],
    },
  };
}

export default async function ServiceAreaPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const area = getServiceArea(slug);
  if (!area) notFound();

  return <ServiceAreaTemplate data={area} />;
}

import QuoteForm from "@/components/QuoteForm";
import type { Project } from "@/lib/workpress-types";

/**
 * Sidebar lead-capture CTA for the project detail page. Reuses the
 * site's existing QuoteForm (already wired to GHL via /api/submit-form,
 * honeypot + Turnstile) rather than inventing a new form — only maps
 * the project's primary service onto QuoteForm's tab/service defaults.
 */
const SERVICE_VALUE_MAP: Record<string, { tab: "roofing" | "remodeling"; value: string }> = {
  "Roof Inspection": { tab: "roofing", value: "inspection" },
  "Roof Repair": { tab: "roofing", value: "repair" },
  "Roof Replacement": { tab: "roofing", value: "replacement" },
  "Storm Damage": { tab: "roofing", value: "storm" },
  "Emergency Tarping": { tab: "roofing", value: "tarping" },
  "Commercial Roofing": { tab: "roofing", value: "commercial" },
  Gutters: { tab: "remodeling", value: "gutters" },
  Remodeling: { tab: "remodeling", value: "remodeling" },
  "Exterior Repairs": { tab: "remodeling", value: "exterior-repairs" },
  "Interior & Exterior Restoration": { tab: "remodeling", value: "restoration" },
  "Property Repairs": { tab: "remodeling", value: "property-repairs" },
  "Interior & Exterior Painting": { tab: "remodeling", value: "painting" },
};

export default function ProjectCTAForm({ project }: { project: Project }) {
  const match = project.services?.map((s) => SERVICE_VALUE_MAP[s]).find(Boolean);

  return (
    <QuoteForm
      variant="sidebar"
      formType="project-detail"
      defaultTab={match?.tab}
      defaultService={match?.value}
    />
  );
}

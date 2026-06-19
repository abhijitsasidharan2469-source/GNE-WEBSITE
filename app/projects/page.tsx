import type { Metadata } from "next";
import Link from "next/link";
import { MapPinned } from "lucide-react";
import { ProjectsPortfolio } from "@/components/ProjectsPortfolio";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { projects } from "@/content/projects";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "EPC Projects & Case Studies",
  description:
    "Explore GNE Infra's EPC project portfolio with an interactive map, case studies, and delivery timeline across India.",
};

export default function ProjectsPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projects",
    url: `${site.url}/projects`,
    about: ["Solar EPC", "BESS", "EMS", "Hydrogen"],
    publisher: { "@type": "Organization", name: site.legalName, url: site.url },
  };

  return (
    <div>
      <JsonLd data={jsonLd} />
      <Section className="bg-renewable-gradient">
        <div className="mx-auto max-w-6xl px-4">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 backdrop-blur dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200">
              <MapPinned className="h-4 w-4 text-brand-green" />
              Projects
            </div>
            <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
              Explore Our Solar Projects
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-slate-700 dark:text-slate-200">
              Explore commissioned and in-progress solar, BESS, and hybrid projects across
              India — with interactive map pins and detailed case studies.
            </p>
            <div className="mt-8">
              <Link href="/contact" className="btn-primary">
                Share your requirement
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </Section>

      <Section className="bg-grid">
        <div className="mx-auto max-w-6xl px-4">
          <ProjectsPortfolio projects={projects} />
        </div>
      </Section>
    </div>
  );
}

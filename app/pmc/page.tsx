import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ClipboardCheck, ShieldCheck, Target } from "lucide-react";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Project Management Consultancy | GNE Infra",
  description:
    "Project Management Consultancy for renewable energy projects: governance, quality, compliance, and stakeholder coordination.",
};

export default function PmcPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Project Management Consultancy",
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: "Project Management Consultancy",
    keywords: ["PMC", "solar project management", "renewable energy consultancy"]
  };

  return (
    <div>
      <JsonLd data={jsonLd} />
      <Section className="bg-renewable-gradient">
        <div className="mx-auto max-w-6xl px-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 backdrop-blur dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200">
            <Target className="h-4 w-4 text-brand-blue" />
            Project Management Consultancy
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
            Project Management Consultancy For Solar, BESS, Pumped Storage Project(PSP)
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-700 dark:text-slate-200">
            Driving Seamless Execution and On-Ground Delivery
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Request PMC Support
            </Link>
            <Link href="/projects" className="btn-secondary">
              Review Delivery Experience
            </Link>
          </div>
        </div>
      </Section>

      <Section className="bg-grid">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black tracking-tight">PMC that keeps projects on track</h2>
              <p className="mt-5 text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Our PMC services are tailored for large-scale solar and energy storage assets, with robust contract governance,
                quality assurance, risk management and reporting built in from day one.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand-green" />
                  Land Identification & ROU structuring
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand-green" />
                  Concept engineering (SLD, layouts, GAD)
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand-green" />
                  Grid connectivity & approvals
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand-green" />
                  Regulatory & statutory advisory
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand-green" />
                  DPR support
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand-green" />
                  Lender coordination
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand-green" />
                  Execution planning
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand-green" />
                  EMS Integration and Planning
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand-green" />
                  SCADA integration
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand-green" />
                  EHS & lifecycle advisory
                </li>

              </ul>
            </div>

            <div className="space-y-6">
              <Card>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">What we manage</div>
                <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <div>Scope alignment and change control</div>
                  <div>Schedule monitoring and issue resolution</div>
                  <div>Procurement oversight and vendor performance</div>
                </div>
              </Card>
              <Card>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">Our PMC promise</div>
                <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <div>Transparent governance and stakeholder communication</div>
                  <div>Consistent quality checks with audit-ready documentation</div>
                  <div>Practical decisions that preserve capital and schedule</div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-brand-blue" />
                  <div>
                    <div className="text-sm font-semibold">Handover excellence</div>
                    <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      We prepare commissioning reports, O&M readiness packages, and formal acceptance documentation.
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

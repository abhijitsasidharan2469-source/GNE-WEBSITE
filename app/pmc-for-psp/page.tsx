import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ClipboardCheck, ShieldCheck, Target } from "lucide-react";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "PMC for PSP | GNE Infra",
  description:
    "Project Management Consultancy for Public Sector Projects (PSP) with process discipline, stakeholder alignment, and execution certainty.",
};

export default function PmcForPspPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "PMC for PSP",
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: "Project Management Consultancy for PSP",
    keywords: ["PMC for PSP", "public sector project management", "renewable energy consultancy"]
  };

  return (
    <div>
      <JsonLd data={jsonLd} />
      <Section className="bg-renewable-gradient">
        <div className="mx-auto max-w-6xl px-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 backdrop-blur dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200">
            <Target className="h-4 w-4 text-brand-blue" />
            PMC for PSP
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
            PMC for Public Sector Projects
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-700 dark:text-slate-200">
            We support public sector renewable energy projects with contract oversight, compliance management and delivery confidence.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Talk to a PSP PMC Lead
            </Link>
            <Link href="/projects" className="btn-secondary">
              View Delivery Track Record
            </Link>
          </div>
        </div>
      </Section>

      <Section className="bg-grid">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black tracking-tight">Expert PMC for government-backed projects</h2>
              <p className="mt-5 text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Our team understands the governance, approvals and compliance needed in public sector renewable development, ensuring projects stay aligned with stakeholder expectations and regulatory frameworks.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand-green" />
                  Project controls tuned for tender milestones and public procurement requirements.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand-green" />
                  Compliance reporting, bid evaluation support, and stakeholder governance.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand-green" />
                  Risk management, site readiness checks, and handover certainty.
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <Card>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">PSP PMC focus areas</div>
                <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <div>Government process alignment and documentation</div>
                  <div>Technical audit coordination and compliance</div>
                  <div>Performance-based milestone delivery</div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start gap-3">
                  <ClipboardCheck className="mt-0.5 h-5 w-5 text-brand-solar" />
                  <div>
                    <div className="text-sm font-semibold">Quality and approvals</div>
                    <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      Tight quality control and approval management keeps projects audit-ready through every stage.
                    </div>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-brand-blue" />
                  <div>
                    <div className="text-sm font-semibold">Stakeholder confidence</div>
                    <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      Transparent coordination with agencies, financiers and EPC partners.
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

import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, Flame, ShieldCheck, Zap } from "lucide-react";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Operations & Maintenance | GNE Infra",
  description:
    "Operations and maintenance for solar and BESS projects: reliability, performance monitoring, and lifecycle support.",
};

export default function OmPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Operations and Maintenance",
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
    areaServed: { "@type": "Country", name: "India" },
    serviceType: "Operations and Maintenance",
    keywords: ["O&M", "solar operations", "battery maintenance", "asset performance"]
  };

  return (
    <div>
      <JsonLd data={jsonLd} />
      <Section className="bg-renewable-gradient">
        <div className="mx-auto max-w-6xl px-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 backdrop-blur dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200">
            <Zap className="h-4 w-4 text-brand-green" />
            Operations & Maintenance
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">
            Keeping your solar and storage assets productive
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-700 dark:text-slate-200">
            Proactive O&M ensures uptime, maximizes energy yield, and extends asset life for commercial and utility-grade systems.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-primary">
              Schedule O&M Review
            </Link>
            <Link href="/projects" className="btn-secondary">
              View Performance Cases
            </Link>
          </div>
        </div>
      </Section>

      <Section className="bg-grid">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-black tracking-tight">Asset care that drives results</h2>
              <p className="mt-5 text-base text-slate-700 dark:text-slate-300 leading-relaxed">
                Our O&M approach combines preventative maintenance, remote monitoring, and rapid response so your investment meets performance expectations.
              </p>
              <ul className="mt-8 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand-green" />
                  Condition-based inspections and fault diagnostics.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand-green" />
                  Performance optimization, tracking and reporting.
                </li>
                <li className="flex gap-3">
                  <CheckCircle2 className="mt-1 h-5 w-5 text-brand-green" />
                  Spare management, warranty support and compliance checks.
                </li>
              </ul>
            </div>

            <div className="space-y-6">
              <Card>
                <div className="text-sm font-semibold text-slate-900 dark:text-white">O&M coverage</div>
                <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
                  <div>Routine inspections and preventive servicing</div>
                  <div>Performance monitoring and alarms</div>
                  <div>Corrective maintenance and spare inventory</div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start gap-3">
                  <Flame className="mt-0.5 h-5 w-5 text-brand-solar" />
                  <div>
                    <div className="text-sm font-semibold">Yield-first support</div>
                    <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      Our team focuses on maintaining plant performance to protect revenue and system reliability.
                    </div>
                  </div>
                </div>
              </Card>
              <Card>
                <div className="flex items-start gap-3">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-brand-blue" />
                  <div>
                    <div className="text-sm font-semibold">Safety & compliance</div>
                    <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
                      Regular safety walkthroughs, thermal imaging, and compliance reporting.
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

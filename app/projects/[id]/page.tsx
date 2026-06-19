import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  Calendar,
  ChevronLeft,
  MapPin,
  Target,
  Zap,
} from "lucide-react";
import { Card } from "@/components/Card";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { getProjectById, projects } from "@/content/projects";
import { site } from "@/content/site";

type Props = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return { title: "Project not found" };
  return {
    title: `${project.title} | Case Study`,
    description: project.summary,
  };
}

const statusStyles: Record<
  (typeof projects)[number]["status"],
  string
> = {
  Commissioned: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200",
  "Under construction": "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200",
  Design: "bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-200",
};

export default async function ProjectDetailPage({ params }: Props) {
  const { id } = await params;
  const project = getProjectById(id);
  if (!project) return notFound();

  const related = projects.filter((p) => p.id !== project.id).slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Project",
    name: project.title,
    description: project.summary,
    location: {
      "@type": "Place",
      name: project.location,
    },
    provider: { "@type": "Organization", name: site.legalName, url: site.url },
  };

  return (
    <div>
      <JsonLd data={jsonLd} />

      {/* Hero */}
      <Section className="relative overflow-hidden py-0">
        <div className="relative h-[280px] w-full sm:h-[340px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-slate-950/20" />
          <div className="absolute inset-0 mx-auto flex max-w-6xl flex-col justify-end px-4 pb-8">
            <Link
              href="/projects"
              className="mb-4 inline-flex items-center gap-2 text-sm font-semibold text-white/80 transition hover:text-white"
            >
              <ChevronLeft className="h-4 w-4" />
              All projects
            </Link>
            <div className="flex flex-wrap items-center gap-2">
              <span
                className={`rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${statusStyles[project.status]}`}
              >
                {project.status}
              </span>
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/25">
                {project.type}
              </span>
            </div>
            <h1 className="mt-3 max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl">
              {project.title}
            </h1>
            <p className="mt-2 max-w-2xl text-sm text-white/85 sm:text-base">
              {project.summary}
            </p>
          </div>
        </div>
      </Section>

      {/* Details */}
      <Section className="bg-grid">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold tracking-tight">Project overview</h2>
                <p className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-300 sm:text-base">
                  {project.description}
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold tracking-tight">Scope of work</h2>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {project.scope.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 rounded-xl border border-emerald-100 bg-white/70 px-4 py-3 text-sm dark:border-emerald-900/40 dark:bg-slate-950/50"
                    >
                      <Target className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {project['Digital & O&M Solutions'] && project['Digital & O&M Solutions'].length > 0 && (
                <div>
                  <h2 className="text-xl font-bold tracking-tight">Digital & O&M Solutions</h2>
                  <ul className="mt-4 space-y-2">
                    {project['Digital & O&M Solutions'].map((outcome) => (
                      <li
                        key={outcome}
                        className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"
                      >
                        <Zap className="mt-0.5 h-4 w-4 shrink-0 text-brand-solar" />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div>
                <h2 className="text-xl font-bold tracking-tight">Execution & delivery</h2>
                <ul className="mt-4 space-y-2">
                  {project['Execution & delivery'].map((h) => (
                    <li
                      key={h}
                      className="flex gap-2 text-sm text-slate-700 dark:text-slate-300"
                    >
                      <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-brand-green" />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <Card>
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Capacity
                    </div>
                    <div className="mt-1 text-lg font-bold text-slate-900 dark:text-white">
                      {project.capacity}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Location
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 font-semibold">
                      <MapPin className="h-4 w-4 text-brand-green" />
                      {project.location}
                    </div>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                      Year
                    </div>
                    <div className="mt-1 flex items-center gap-1.5 font-semibold">
                      <Calendar className="h-4 w-4 text-brand-green" />
                      {project.year}
                    </div>
                  </div>
                  {project.client && (
                    <div>
                      <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                        Client
                      </div>
                      <div className="mt-1 font-semibold">{project.client}</div>
                    </div>
                  )}
                </div>
                <Link href="/contact" className="btn-primary mt-6 w-full">
                  Discuss a similar project
                </Link>
              </Card>
            </div>
          </div>

          {/* Related projects */}
          {related.length > 0 && (
            <div className="mt-16">
              <h2 className="text-xl font-bold tracking-tight">More case studies</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    href={`/projects/${p.id}`}
                    className="group flex gap-4 overflow-hidden rounded-2xl border border-emerald-100 bg-white/70 p-4 transition hover:-translate-y-0.5 hover:shadow-lg dark:border-emerald-900/40 dark:bg-slate-950/50"
                  >
                    <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl">
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="112px"
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-semibold">{p.title}</div>
                      <div className="mt-1 text-xs text-slate-500">
                        {p.capacity} • {p.location}
                      </div>
                      <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-brand-green">
                        View case study <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>
    </div>
  );
}

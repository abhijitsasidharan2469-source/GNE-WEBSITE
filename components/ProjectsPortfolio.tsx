"use client";

import dynamic from "next/dynamic";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowRight, MapPinned, Timer } from "lucide-react";
import { Card } from "@/components/Card";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { Project } from "@/content/projects";

const ProjectMap = dynamic(
  () => import("@/components/ProjectMap").then((m) => m.ProjectMap),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[420px] items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50/40 dark:border-emerald-900/40 dark:bg-slate-900/40">
        <span className="text-sm text-slate-500">Loading map…</span>
      </div>
    ),
  },
);

const statusStyles: Record<Project["status"], string> = {
  Commissioned: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/50 dark:text-emerald-200",
  "Under construction": "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200",
  Design: "bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-200",
};

export function ProjectsPortfolio({ projects }: { projects: Project[] }) {
  const [activeId, setActiveId] = useState<string | undefined>(projects[0]?.id);
  const timeline = [...projects].sort((a, b) => b.year - a.year);

  return (
    <>
      {/* Map + overview */}
      <ScrollReveal>
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <ProjectMap
            projects={projects}
            activeId={activeId}
            onSelect={setActiveId}
          />
          <Card className="flex flex-col justify-center">
            <div className="flex items-start gap-3">
              <MapPinned className="mt-0.5 h-5 w-5 shrink-0 text-brand-green" />
              <div>
                <div className="text-base font-semibold">Pan-India project footprint</div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
                  Explore commissioned and in-progress solar, BESS, and hybrid projects
                  across India. Click a pin or case study card for full project details.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
                  <li className="flex gap-2">
                    <span className="font-semibold text-emerald-600">{projects.length}</span>
                    featured case studies
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-emerald-600">
                      {projects.filter((p) => p.status === "Commissioned").length}
                    </span>
                    commissioned projects
                  </li>
                  <li className="flex gap-2">
                    <span className="font-semibold text-emerald-600">
                      {projects.filter((p) => p.status === "Under construction").length}
                    </span>
                    under construction
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </ScrollReveal>

      {/* Case study cards */}
      <ScrollReveal delay={100}>
        <h2 className="mt-14 text-2xl font-bold tracking-tight">Case studies</h2>
      </ScrollReveal>
      <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p, index) => (
          <ScrollReveal key={p.id} delay={index * 80}>
            <Link
              href={`/projects/${p.id}`}
              onMouseEnter={() => setActiveId(p.id)}
              className={`group block overflow-hidden rounded-2xl border bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:bg-slate-950/50 ${
                activeId === p.id
                  ? "border-emerald-400 ring-2 ring-emerald-400/30"
                  : "border-emerald-100 dark:border-emerald-900/40"
              }`}
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  sizes="(max-width:768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <span
                  className={`absolute left-3 top-3 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${statusStyles[p.status]}`}
                >
                  {p.status}
                </span>
              </div>
              <div className="p-5">
                <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
                  {p.type} • {p.year}
                </div>
                <div className="mt-1 text-base font-semibold text-slate-900 dark:text-white">
                  {p.title}
                </div>
                <p className="mt-2 line-clamp-2 text-sm text-slate-600 dark:text-slate-300">
                  {p.summary}
                </p>
                <div className="mt-3 flex items-center justify-between text-sm">
                  <span className="font-medium text-slate-700 dark:text-slate-200">
                    {p.capacity} • {p.location}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-brand-green opacity-0 transition-opacity group-hover:opacity-100">
                    View <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>

      {/* Timeline */}
      <ScrollReveal delay={100}>
        <h2 className="mt-14 text-2xl font-bold tracking-tight">Delivery timeline</h2>
      </ScrollReveal>
      <div className="relative mt-8">
        <div className="absolute left-4 top-0 hidden h-full w-px bg-emerald-200 dark:bg-emerald-800 md:block" />
        <div className="space-y-4">
          {timeline.map((p, index) => (
            <ScrollReveal key={`${p.id}-t`} delay={index * 60}>
              <div className="relative flex flex-col gap-3 rounded-2xl border border-emerald-100 bg-white/70 px-5 py-4 backdrop-blur dark:border-emerald-900/40 dark:bg-slate-950/50 md:ml-8 md:flex-row md:items-center md:justify-between">
                <div className="absolute -left-[1.65rem] top-1/2 hidden h-3 w-3 -translate-y-1/2 rounded-full border-2 border-white bg-brand-green shadow md:block" />
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-emerald-600">
                    {p.year}
                  </div>
                  <div className="mt-0.5 font-semibold">{p.title}</div>
                </div>
                <div className="flex flex-wrap items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                  <span className={`rounded-full px-2 py-0.5 text-xs font-semibold ${statusStyles[p.status]}`}>
                    {p.status}
                  </span>
                  {p.type} • {p.capacity}
                  <Link
                    href={`/projects/${p.id}`}
                    className="ml-1 inline-flex items-center gap-1 font-semibold text-brand-green hover:underline"
                  >
                    Details <Timer className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </>
  );
}

"use client";

import { ArrowRight, Globe2, LineChart, Sparkles, Zap } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ScrollReveal } from "@/components/ScrollReveal";

const stats = [
  {
    icon: <Zap className="h-6 w-6 text-amber-500" />,
    bg: "bg-amber-50 dark:bg-amber-950/40",
    ring: "ring-amber-200 dark:ring-amber-800/50",
    end: 112,
    suffix: " MWp",
    label: "Project Under Execution",
    sub: "projects in progress",
  },
  {
    icon: <LineChart className="h-6 w-6 text-sky-500" />,
    bg: "bg-sky-50 dark:bg-sky-950/40",
    ring: "ring-sky-200 dark:ring-sky-800/50",
    end: 300,
    suffix: "+ MWp",
    label: "Projects Pipeline",
    sub: "projects in pipeline",
  },
  {
    icon: <Sparkles className="h-6 w-6 text-emerald-600" />,
    bg: "bg-emerald-50 dark:bg-emerald-950/40",
    ring: "ring-emerald-200 dark:ring-emerald-800/50",
    end: 68,
    suffix: " MWp",
    label: "O&M Projects",
    sub: "under execution",
  },
  {
    icon: <Globe2 className="h-6 w-6 text-violet-500" />,
    bg: "bg-violet-50 dark:bg-violet-950/40",
    ring: "ring-violet-200 dark:ring-violet-800/50",
    end: 3,
    suffix: " Regions",
    label: "Overseas Expansion",
    sub: "Europe, Africa & Middle East",
  },
];

export function ImpactStats() {
  return (
    <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <ScrollReveal key={stat.label} delay={index * 100}>
          <div
            className={`stat-card group flex flex-col gap-3 rounded-2xl border bg-white p-5 shadow-sm ring-1 transition dark:bg-slate-900/60 ${stat.ring}`}
          >
            <div
              className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${stat.bg} ring-1 ${stat.ring}`}
            >
              {stat.icon}
            </div>
            <div>
              <div className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                <AnimatedCounter end={stat.end} suffix={stat.suffix} />
              </div>
              <div className="mt-0.5 text-sm font-semibold text-slate-700 dark:text-slate-200">
                {stat.label}
              </div>
              <div className="mt-1 flex items-center gap-1 text-xs text-slate-500 dark:text-slate-400">
                <ArrowRight className="h-3 w-3 rotate-45" />
                {stat.sub}
              </div>
            </div>
          </div>
        </ScrollReveal>
      ))}
    </div>
  );
}

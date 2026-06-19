"use client";

import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import type { Project } from "@/content/projects";

type ProjectMapProps = {
  projects: Project[];
  activeId?: string;
  onSelect?: (id: string) => void;
  className?: string;
};

const INDIA_BOUNDS = {
  minLat: 6.5,
  maxLat: 35.7,
  minLng: 68.1,
  maxLng: 97.4,
};

function toMapPosition(lat: number, lng: number) {
  const x =
    ((lng - INDIA_BOUNDS.minLng) / (INDIA_BOUNDS.maxLng - INDIA_BOUNDS.minLng)) *
    100;
  const y =
    ((INDIA_BOUNDS.maxLat - lat) / (INDIA_BOUNDS.maxLat - INDIA_BOUNDS.minLat)) *
    100;
  return { x, y };
}

const statusColors: Record<Project["status"], string> = {
  Commissioned: "bg-emerald-500 ring-emerald-200",
  "Under construction": "bg-amber-500 ring-amber-200",
  Design: "bg-sky-500 ring-sky-200",
};

export function ProjectMap({
  projects,
  activeId,
  onSelect,
  className = "",
}: ProjectMapProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const mappable = useMemo(
    () => projects.filter((p) => p.lat != null && p.lng != null),
    [projects],
  );

  if (!mounted) {
    return (
      <div
        className={`flex h-[420px] items-center justify-center rounded-2xl border border-emerald-100 bg-emerald-50/50 dark:border-emerald-900/40 dark:bg-slate-900/50 ${className}`}
      >
        <span className="text-sm text-slate-500 dark:text-slate-400">Loading map…</span>
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-2xl border border-emerald-100 shadow-lg dark:border-emerald-900/40 ${className}`}
    >
      {/* Map background — OpenStreetMap tiles via CSS pattern */}
      <div
        className="relative h-[420px] w-full bg-slate-200 dark:bg-slate-800"
        style={{
          backgroundImage: `
            linear-gradient(to bottom, rgba(16,185,129,0.06), rgba(15,23,42,0.15)),
            url("https://staticmap.openstreetmap.de/staticmap.php?center=23.0,80.0&zoom=5&size=800x420&maptype=mapnik")
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/30 via-transparent to-sky-50/20 dark:from-slate-950/40 dark:to-slate-950/20" />

        {/* Grid overlay for polish */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, #0f172a 1px, transparent 1px), linear-gradient(to bottom, #0f172a 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Project pins */}
        {mappable.map((project) => {
          const { x, y } = toMapPosition(project.lat!, project.lng!);
          const isActive = activeId === project.id;
          const color = statusColors[project.status];

          return (
            <button
              key={project.id}
              type="button"
              title={project.title}
              onClick={() => onSelect?.(project.id)}
              className="group absolute z-10 -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <span
                className={`relative flex h-4 w-4 items-center justify-center rounded-full ring-4 transition-transform duration-300 ${color} ${
                  isActive ? "scale-150" : "group-hover:scale-125"
                }`}
              >
                {isActive && (
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                )}
              </span>

              {/* Tooltip */}
              <span
                className={`pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-lg bg-slate-900 px-2.5 py-1.5 text-xs font-semibold text-white shadow-lg transition-opacity dark:bg-white dark:text-slate-900 ${
                  isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`}
              >
                {project.title}
              </span>
            </button>
          );
        })}

        {/* Legend */}
        <div className="absolute bottom-4 left-4 rounded-xl border border-white/60 bg-white/90 px-3 py-2.5 text-xs shadow-md backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
          <div className="mb-1.5 font-semibold text-slate-700 dark:text-slate-200">
            Project status
          </div>
          <div className="flex flex-col gap-1.5">
            {(
              [
                ["Commissioned", "bg-emerald-500"],
                ["Under construction", "bg-amber-500"],
                ["Design", "bg-sky-500"],
              ] as const
            ).map(([label, dot]) => (
              <div key={label} className="flex items-center gap-2 text-slate-600 dark:text-slate-300">
                <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
                {label}
              </div>
            ))}
          </div>
        </div>

        {/* Project count badge */}
        <div className="absolute right-4 top-4 rounded-full bg-brand-green px-3 py-1 text-xs font-bold text-white shadow-md">
          {mappable.length} active locations
        </div>
      </div>


    </div>
  );
}

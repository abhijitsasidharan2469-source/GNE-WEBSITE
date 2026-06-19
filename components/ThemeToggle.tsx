"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => setMounted(true), []);

  const resolvedTheme = theme === "system" ? systemTheme : theme;
  const isDark = resolvedTheme === "dark";

  const handleToggleTheme = () => {
    setIsAnimating(true);
    setTheme(isDark ? "light" : "dark");
    window.setTimeout(() => setIsAnimating(false), 480);
  };

  return (
    <button
      type="button"
      className="theme-toggle inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/70 px-4 py-2.5 text-sm font-semibold text-slate-700 shadow-sm backdrop-blur transition hover:bg-white dark:border-slate-800 dark:bg-slate-950/60 dark:text-slate-200 dark:hover:bg-slate-950"
      onClick={handleToggleTheme}
      aria-label="Toggle theme"
    >
      <span className="relative inline-flex min-h-6 items-center justify-center">
        <span className="invisible select-none" aria-hidden>
          Light
        </span>
        <span className="absolute inset-0 flex items-center justify-center gap-2">
          {!mounted ? (
            <span className="h-4 w-4 shrink-0 rounded bg-slate-200/70 dark:bg-slate-600/40" aria-hidden />
          ) : isDark ? (
            <>
              <Moon className={`theme-toggle-icon h-4 w-4 shrink-0${isAnimating ? " is-spinning" : ""}`} />
              Dark
            </>
          ) : (
            <>
              <Sun className={`theme-toggle-icon h-4 w-4 shrink-0${isAnimating ? " is-spinning" : ""}`} />
              Light
            </>
          )}
        </span>
      </span>
    </button>
  );
}


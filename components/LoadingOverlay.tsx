"use client";

import { useEffect, useState } from "react";

export default function LoadingOverlay() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 1000);
    return () => window.clearTimeout(timeout);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/90 backdrop-blur-sm">
      <div className="relative flex h-28 w-28 items-center justify-center rounded-full bg-slate-900/80 shadow-[0_0_60px_rgba(15,23,42,0.65)]">
        <span className="absolute inset-0 rounded-full border border-white/10" />
        <span className="absolute inset-0 rounded-full border-2 border-emerald-300/60 border-t-transparent animate-spin" style={{ animationDuration: "1s" }} />
        <span className="absolute inset-4 rounded-full border-2 border-cyan-300/60 border-b-transparent animate-spin" style={{ animationDuration: "1s", animationDirection: "reverse" }} />
        <span className="absolute inset-8 rounded-full border-2 border-white/30 border-l-transparent animate-spin" style={{ animationDuration: "1s" }} />
        <span className="absolute h-10 w-10 rounded-full bg-slate-950/90 border border-white/20 shadow-[0_0_0_10px_rgba(56,189,248,0.08)]" />
      </div>
    </div>
  );
}

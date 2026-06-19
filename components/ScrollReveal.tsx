"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/components/cn";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "up" | "scale";
  threshold?: number;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  animation = "up",
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin: "0px 0px -32px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        visible
          ? animation === "scale"
            ? "reveal-scale"
            : "reveal-up"
          : "scroll-reveal-pending",
        className,
      )}
      style={visible ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}

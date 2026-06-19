"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";

const slides = [
  {
    src: "/hero-solar-farm.png",
    alt: "Aerial view of a large-scale ground-mounted solar PV farm",
  },
  {
    src: "/hero-bess-storage.png",
    alt: "Utility-scale Battery Energy Storage System installation",
  },
  {
    src: "/hero-solar-bess-combined.png",
    alt: "Combined solar farm and BESS installation in an open field",
  },
];

const INTERVAL_MS = 4000;

export function HeroCarousel({ children }: { children: React.ReactNode }) {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = useCallback(() => {
    timerRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % slides.length);
    }, INTERVAL_MS);
  }, []);

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [startTimer]);

  return (
    <div className="relative h-[calc(100vh-4.5rem)] w-full overflow-hidden flex flex-col justify-center">
      {/* Background slides */}
      {slides.map((slide, idx) => (
        <div
          key={slide.src}
          className="absolute inset-0 transition-opacity duration-[2000ms] ease-in-out"
          style={{ opacity: idx === active ? 1 : 0 }}
          aria-hidden={idx !== active}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            sizes="100vw"
            className="object-cover"
            priority={idx === 0}
            quality={85}
          />
        </div>
      ))}

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 z-[1] bg-black/40" />

      {/* Slide indicator dots */}
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            type="button"
            aria-label={`Go to slide ${idx + 1}`}
            className={`h-2 rounded-full transition-all duration-500 ${
              idx === active
                ? "w-8 bg-white"
                : "w-2 bg-white/50 hover:bg-white/70"
            }`}
            onClick={() => {
              setActive(idx);
              if (timerRef.current) clearInterval(timerRef.current);
              startTimer();
            }}
          />
        ))}
      </div>

      {/* Content (text, CTAs, etc.) — passed as children */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}

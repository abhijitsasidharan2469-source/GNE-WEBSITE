import Link from "next/link";
import Image from "next/image";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ImpactStats } from "@/components/ImpactStats";
import { ScrollReveal } from "@/components/ScrollReveal";
import { ArrowRight, MapPin, ChevronRight, Leaf, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section — Auto-Sliding Carousel */}
      <HeroCarousel>
        <div className="flex flex-col items-center justify-center gap-3 px-4 py-2 sm:gap-3.5 lg:gap-4">
          {/* Badge */}
          <div className="rounded-full border border-white/30 px-3 py-1 text-center text-[10px] font-semibold uppercase tracking-wider text-white/90 backdrop-blur-sm sm:text-[11px]">
            ENTERPRISE-GRADE RENEWABLE INFRASTRUCTURE
          </div>

          {/* Heading */}
          <h1 className="mx-auto max-w-4xl text-center text-3xl font-black leading-[1.1] text-white drop-shadow-lg sm:text-4xl md:text-5xl lg:text-[52px]">
            Engineering the <br className="hidden sm:block" />
            Future of Energy
          </h1>

          {/* Subheading */}
          <p className="mx-auto max-w-2xl text-center text-sm font-medium leading-snug text-white/95 drop-shadow-md sm:text-[15px]">
            Delivering Solar EPC, Battery Energy Storage Systems (BESS), and Intelligent Energy Management Solutions for commercial, industrial, and utility-scale clients across India.
          </p>

          {/* Service Boxes */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-2.5">
            {[
              { key: "solar-epc", href: "/projects/p1", lines: ["Solar EPC"], wide: false },
              { key: "bess-epc", href: "/projects/p3", lines: ["BESS EPC"], wide: false },
              { key: "pmc", href: "/pmc", lines: ["Project Management Consultancy"], wide: true },
              { key: "pmc-psp", href: "/pmc-for-psp", lines: ["PMC for PSP"], wide: false },
              { key: "o-and-m", href: "/o-and-m", lines: ["O&M"], wide: false },
            ].map((service) => (
              <Link
                key={service.key}
                href={service.href}
                className={`hero-service-box flex h-[3rem] shrink-0 cursor-pointer items-center justify-center rounded-lg px-3 sm:h-[3.25rem] sm:rounded-xl sm:px-3.5 ${service.wide ? "w-[11.5rem] sm:w-[12rem]" : "w-[8.5rem] sm:w-[9rem]"
                  }`}
              >
                <p className="text-center text-xs font-semibold leading-tight text-white sm:text-[13px]">
                  {service.lines.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </p>
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand-green px-7 py-2.5 text-sm font-semibold text-white transition-all hover:scale-105 hover:shadow-lg sm:px-8 sm:py-3"
            >
              Get a Quote
            </Link>
            <Link
              href="/projects"
              className="hero-service-box inline-flex items-center justify-center rounded-full px-7 py-2.5 text-sm font-semibold text-white sm:px-8 sm:py-3"
            >
              View Our Projects
            </Link>
          </div>
        </div>
      </HeroCarousel>

      {/* ── OUR IMPACT ─────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden py-14 sm:py-20">
        {/* Subtle ambient background */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute -left-32 -top-20 h-[520px] w-[520px] rounded-full bg-emerald-400/10 blur-[100px]" />
          <div className="absolute -right-24 bottom-0 h-[400px] w-[400px] rounded-full bg-sky-400/10 blur-[90px]" />
        </div>

        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <ScrollReveal>
            <div className="mb-14 text-center">
              <span className="mb-3 inline-block rounded-full bg-emerald-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700 ring-1 ring-emerald-200 dark:bg-emerald-950/50 dark:text-emerald-300 dark:ring-emerald-800">
                Welcome to Solar Power &amp; Save Energy
              </span>
              <h2 className="mt-2 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Our&nbsp;<span className="text-brand-green">Impact</span>
              </h2>
            </div>
          </ScrollReveal>

          {/* Two-column grid */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* LEFT — Visual panel */}
            <ScrollReveal animation="scale">
              <div className="relative flex items-center justify-center">
                {/* Outer glow ring */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-sky-400/10 to-teal-400/10 blur-2xl" />

                <div className="relative overflow-hidden rounded-3xl border border-emerald-200/60 bg-white/80 p-6 shadow-2xl backdrop-blur dark:border-emerald-900/50 dark:bg-slate-900/70 sm:p-8">
                  {/* Centre orbit graphic */}
                  <div className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-72 sm:w-72">
                    {/* Animated orbit rings */}
                    <div className="absolute inset-0 animate-[spin_18s_linear_infinite] rounded-full border-2 border-dashed border-emerald-300/40 dark:border-emerald-700/40" />
                    <div className="absolute inset-6 animate-[spin_24s_linear_infinite_reverse] rounded-full border border-dashed border-sky-300/30 dark:border-sky-700/30" />

                    {/* Centre hub */}
                    <div className="relative z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-gradient-to-br from-emerald-500 to-emerald-700 shadow-xl shadow-emerald-500/40">
                      <Leaf className="mb-0.5 h-7 w-7 text-white" />
                      <span className="text-[11px] font-bold uppercase tracking-wide text-white/90">GNE</span>
                    </div>

                    {/* Orbital nodes */}
                    {[
                      { label: "Supply Chain", angle: 0, icon: "🔗", color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200" },
                      { label: "Material", angle: 51, icon: "🏗️", color: "bg-sky-100 text-sky-800 dark:bg-sky-900/50 dark:text-sky-200" },
                      { label: "Design", angle: 102, icon: "✏️", color: "bg-teal-100 text-teal-800 dark:bg-teal-900/50 dark:text-teal-200" },
                      { label: "Energy", angle: 153, icon: "⚡", color: "bg-amber-100 text-amber-800 dark:bg-amber-900/50 dark:text-amber-200" },
                      { label: "Innovation", angle: 204, icon: "💡", color: "bg-violet-100 text-violet-800 dark:bg-violet-900/50 dark:text-violet-200" },
                      { label: "Corporate", angle: 255, icon: "🌍", color: "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-200" },
                      { label: "End-of-Life", angle: 306, icon: "♻️", color: "bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-200" },
                    ].map(({ label, angle, icon, color }) => {
                      const rad = (angle - 90) * (Math.PI / 180);
                      const r = 112;
                      const x = Math.cos(rad) * r;
                      const y = Math.sin(rad) * r;
                      return (
                        <div
                          key={label}
                          className={`absolute flex h-14 w-14 flex-col items-center justify-center rounded-2xl text-center text-[9px] font-semibold leading-tight shadow-lg transition-transform hover:scale-110 ${color}`}
                          style={{ transform: `translate(${x}px, ${y}px)` }}
                        >
                          <span className="text-base leading-none">{icon}</span>
                          <span className="mt-0.5 px-0.5">{label}</span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Label below */}
                  <p className="mt-5 text-center text-xs font-semibold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    Integrated Sustainability Framework
                  </p>
                </div>
              </div>
            </ScrollReveal>

            {/* RIGHT — Copy */}
            <ScrollReveal delay={120}>
              <div className="flex flex-col gap-6">
                <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  Since our inception, <strong className="text-slate-900 dark:text-white">GNE Infra</strong> has been
                  at the forefront of India&apos;s solar energy revolution. Our innovative solar systems have
                  empowered businesses and communities to reduce their energy costs, achieve sustainability
                  goals, and contribute to the global effort against climate change.
                </p>
                <p className="text-base leading-relaxed text-slate-700 dark:text-slate-300">
                  Led by forward-thinking professionals, GNE Infra focuses on delivering top-tier project
                  execution and optimizing cost efficiency through effective supply chain management.
                </p>

                <Link
                  href="/about"
                  className="btn-primary self-start gap-2"
                >
                  Learn About Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </ScrollReveal>
          </div>

          {/* ── KPI Stats row ─────────────────────────────────────────── */}
          <ImpactStats />
        </div>
      </section>

      {/* ── OUR EXPERTISE ──────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-emerald-50/60 py-14 dark:bg-slate-900/80 sm:py-20">
        {/* Ambient glow */}
        <div className="pointer-events-none absolute inset-0 -z-0">
          <div className="absolute left-1/3 top-0 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-emerald-400/15 blur-[130px]" />
          <div className="absolute right-0 bottom-0 h-[300px] w-[400px] rounded-full bg-teal-400/10 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <ScrollReveal>
            <div className="mb-10 text-center">
              <span className="mb-3 inline-block rounded-full bg-emerald-100 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-700 ring-1 ring-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:ring-emerald-700/60">
                Process &amp; The Solutions We Can Provide
              </span>
              <h2 className="mt-2 text-4xl font-black tracking-tight text-slate-900 dark:text-white sm:text-5xl">
                Our <span className="text-brand-green">Expertise</span>
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 dark:text-slate-400">
                End-to-end renewable energy solutions — from land identification to long-term operations — engineered for scale.
              </p>
            </div>
          </ScrollReveal>

          {/* 3×2 Service Card Grid */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                key: "land",
                img: "/service-land.jpg",
                label: "Land Procurement",
                accent: "from-emerald-600 to-emerald-800",
                tag: "bg-emerald-500",
                desc: "GNE Infra provides end-to-end land procurement services for utility-scale solar projects — from site identification and feasibility analysis to title verification, due diligence, liaison with revenue authorities, and legal clearances — ensuring a bankable, encumbrance-free land parcel ready for construction.",
              },
              {
                key: "installation",
                img: "/service-installation.jpg",
                label: "Solar Installation Services",
                accent: "from-sky-600 to-sky-900",
                tag: "bg-sky-500",
                desc: "Our certified installation teams handle precision module mounting, DC/AC electrical integration, string commissioning, and final grid synchronization. Every installation follows stringent HSE protocols and is backed by SCADA-ready documentation for seamless asset handover.",
              },
              {
                key: "epc",
                img: "/service-epc.jpg",
                label: "Solar EPC",
                accent: "from-teal-600 to-teal-900",
                tag: "bg-teal-500",
                desc: "We deliver fully turnkey Engineering, Procurement & Construction contracts for utility-scale and commercial rooftop solar plants. Our integrated approach covers detailed engineering, optimized BoQ, quality procurement, on-site civil/electrical works, and lender-compliant commissioning — ensuring bankable, on-schedule delivery.",
              },
              {
                key: "om",
                img: "/service-om.jpg",
                label: "Solar O&M Services",
                accent: "from-amber-600 to-amber-900",
                tag: "bg-amber-500",
                desc: "GNE Infra's O&M offering covers preventive and corrective maintenance schedules, SCADA-based real-time performance monitoring, thermographic inspections, I-V curve analysis, and yield optimization strategies — maximizing plant availability and generation revenue across the entire operational lifecycle.",
              },
              {
                key: "bess",
                img: "/service-bess.jpg",
                label: "Solar BESS Solutions",
                accent: "from-violet-600 to-violet-900",
                tag: "bg-violet-500",
                desc: "We design and deploy Battery Energy Storage Systems paired with intelligent Energy Management Systems for peak shaving, frequency regulation, solar firming, and grid-scale arbitrage. Our BESS solutions integrate seamlessly with existing solar assets and are engineered for degradation-aware, long-cycle performance.",
              },
              {
                key: "manufacturing",
                img: "/service-manufacturing.jpg",
                label: "Manufacturing Capabilities",
                accent: "from-rose-600 to-rose-900",
                tag: "bg-rose-500",
                desc: "GNE Infra operates in-house solar panel manufacturing with rigorously quality-controlled production lines, certified BOS components, automated testing stations, and international compliance standards — ensuring reliable, high-efficiency modules that meet lender and regulatory specifications.",
              },
            ].map(({ key, img, label, accent, tag, desc }, index) => (
              <ScrollReveal key={key} delay={index * 60} className="h-full">
                <div
                  className="group relative flex h-64 flex-col overflow-hidden rounded-2xl shadow-xl transition-all duration-500 hover:-translate-y-1.5 hover:shadow-emerald-500/20 hover:shadow-2xl sm:h-72 cursor-default"
                >
                  {/* Background image */}
                  <Image
                    src={img}
                    alt={label}
                    fill
                    sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Permanent dark-bottom gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

                  {/* Hover colour tint */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${accent} opacity-0 transition-opacity duration-500 group-hover:opacity-60`} />

                  {/* Label pill – always visible */}
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <span className={`inline-block rounded-full px-3 py-1 text-xs font-bold text-white shadow-lg ${tag}`}>
                      {label}
                    </span>

                    {/* Description – slides up on hover */}
                    <p className="mt-2 max-h-0 overflow-hidden text-xs leading-relaxed text-white/90 transition-all duration-500 group-hover:max-h-32">
                      {desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ──────────────────────────────────────────────────── */}
      <section className="relative isolate overflow-hidden">
        {/* Rich layered background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-emerald-700 via-emerald-600 to-teal-500" />
        <div className="absolute inset-0 -z-10 bg-[url('/hero-solar.jpg')] bg-cover bg-center opacity-20 mix-blend-luminosity" />
        {/* Radial vignette for depth */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-emerald-900/60 via-transparent to-emerald-900/30" />
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 -z-10 opacity-10"
          style={{ backgroundImage: "linear-gradient(to right,rgba(255,255,255,.15) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,.15) 1px,transparent 1px)", backgroundSize: "56px 56px" }}
        />

        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6 sm:py-24 lg:px-8">
          {/* Eyebrow */}
          <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-emerald-100 ring-1 ring-white/25">
            Let&apos;s Build Together
          </span>

          {/* Headline */}
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Ready to Power<br className="hidden sm:block" /> Your Future?
          </h2>

          {/* Sub-copy */}
          <p className="mx-auto mt-5 max-w-xl text-base font-medium text-emerald-100/90 sm:text-lg">
            Tell us your capacity, location and timeline — our engineering team will craft a solution that delivers results from day one.
          </p>

          {/* Action buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-5">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-emerald-800 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-white/30 hover:shadow-2xl"
            >
              Get a Free Quote
              <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+918448282440"
              className="inline-flex items-center gap-2 rounded-full border-2 border-white/50 px-8 py-4 text-sm font-bold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white hover:bg-white/10"
            >
              <Zap className="h-4 w-4" />
              Call Us Now
            </a>
          </div>

          {/* Contact detail strip */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 text-xs font-medium text-emerald-100/80 sm:flex-row sm:gap-8">
            <a href="tel:+918448282440" className="flex items-center gap-2 transition-colors hover:text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-base">📞</span>
              +91 8448282440
            </a>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <a href="mailto:info@gneinfra.com" className="flex items-center gap-2 transition-colors hover:text-white">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-base">✉️</span>
              info@gneinfra.com
            </a>
            <span className="hidden h-4 w-px bg-white/20 sm:block" />
            <span className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 text-base">🌍</span>
              India · Middle East · Europe · Africa
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

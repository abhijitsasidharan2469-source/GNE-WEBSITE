import Link from "next/link";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import { MobileNav } from "@/components/MobileNav";
import { ThemeToggle } from "@/components/ThemeToggle";

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" }
];

const dropdownNav = [
  {
    label: "Services",
    items: [
      { href: "/", label: "SOLAR (EPC/IPP, I&C)" },
      { href: "/projects/p3", label: "BESS (EPC / I&C)" },
      { href: "/pmc", label: "Project Management Consultancy (PMC)" },
      { href: "/o-and-m", label: "O&M" },
      { href: "/green-hydrogen", label: "Green Hydrogen" }
    ]
  }
];

const navPill =
  "whitespace-nowrap rounded-full px-3 py-1.5 transition-all duration-200 hover:bg-brand-green hover:text-white hover:shadow-sm";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/70 backdrop-blur dark:border-slate-800/70 dark:bg-slate-950/60">
      <div className="grid w-full grid-cols-[auto_1fr_auto] items-center gap-4 px-3 py-2.5 sm:px-5 lg:px-8">
        {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- full document navigation */}
        <a href="/" className="group inline-flex items-center">
          <Image
            src="/gne-logo.png"
            alt="GNE Infra logo"
            width={315}
            height={190}
            className="h-20 sm:h-24 w-auto object-contain"
            priority
          />
        </a>

        <div className="flex min-w-0 items-center justify-center">
          <MobileNav primaryNav={primaryNav} dropdownNav={dropdownNav} />

          <nav
            className="hidden flex-nowrap items-center justify-center gap-3 text-[17px] font-bold tracking-wide text-slate-900 dark:text-slate-100 lg:flex"
            aria-label="Main"
          >
            {primaryNav.map((item) => (
              <Link key={item.href} href={item.href} className={navPill}>
                {item.label}
              </Link>
            ))}

            {dropdownNav.map((group) => (
              <div key={group.label} className="group/drop relative">
                <button
                  type="button"
                  className={`inline-flex items-center gap-1 ${navPill}`}
                >
                  {group.label}
                  <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover/drop:rotate-180" />
                </button>

                <div className="pointer-events-none absolute left-0 top-full z-50 min-w-[220px] rounded-xl border border-emerald-100 bg-white/95 p-2 opacity-0 shadow-xl transition-all duration-200 group-hover/drop:pointer-events-auto group-hover/drop:opacity-100 dark:border-emerald-900/50 dark:bg-slate-900/95">
                  {group.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block rounded-lg px-3 py-2 text-sm font-semibold text-slate-800 transition-colors hover:bg-emerald-50 hover:text-emerald-700 dark:text-slate-100 dark:hover:bg-emerald-900/40 dark:hover:text-emerald-300"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            <Link href="/blog" className={navPill}>
              Blogs
            </Link>
          </nav>
        </div>

        <div className="flex items-center justify-end gap-3">
          <Link
            href="/contact"
            className="hidden rounded-xl bg-brand-green px-5 py-3 text-[15px] font-semibold text-white transition hover:bg-emerald-700 sm:inline-flex"
          >
            Get a Quote
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import { site } from "@/content/site";

export function Footer() {
  return (
    <footer className="border-t border-emerald-100/80 bg-white dark:border-emerald-900/40 dark:bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="text-base font-semibold">{site.legalName}</div>
          <p className="mt-2 max-w-md text-sm text-slate-600 dark:text-slate-300">
            {site.description}
          </p>
          <div className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            <div>
              <span className="font-medium">Email:</span>{" "}
              <a className="underline underline-offset-4" href={`mailto:${site.contact.email}`}>
                {site.contact.email}
              </a>
            </div>
            <div className="mt-1">
              <span className="font-medium">Phone:</span>{" "}
              <a className="underline underline-offset-4" href={`tel:${site.contact.phone}`}>
                {site.contact.phone}
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold">Services</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>
              <Link className="hover:underline" href="/solar-epc">
                Solar EPC
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/bess-ems">
                BESS & EMS
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <div className="text-sm font-semibold">Company</div>
          <ul className="mt-3 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            <li>
              <Link className="hover:underline" href="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/blog">
                Blog / News
              </Link>
            </li>
            <li>
              <Link className="hover:underline" href="/contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-emerald-100/80 dark:border-emerald-900/40">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-6 text-xs text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </div>
          <div>
            Built with Next.js • Optimized for WebP/AVIF • HTTPS-ready
          </div>
        </div>
      </div>
    </footer>
  );
}


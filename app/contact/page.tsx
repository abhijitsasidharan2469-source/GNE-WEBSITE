import type { Metadata } from "next";
import { MessageSquareText, PhoneCall } from "lucide-react";
import { Card } from "@/components/Card";
import { ContactForm } from "@/components/ContactForm";
import { Section } from "@/components/Section";
import { JsonLd } from "@/components/JsonLd";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch for Solar EPC, BESS/EMS solutions, and hydrogen initiatives."
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact",
    url: `${site.url}/contact`,
    about: ["Solar EPC India", "BESS solutions", "Hydrogen energy projects", "EMS software"],
    publisher: { "@type": "Organization", name: site.legalName, url: site.url }
  };

  return (
    <div>
      <JsonLd data={jsonLd} />
      <Section className="bg-renewable-gradient">
        <div className="mx-auto max-w-6xl px-4">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/70 px-4 py-2 text-xs font-semibold text-slate-700 backdrop-blur dark:border-slate-800 dark:bg-slate-950/50 dark:text-slate-200">
            <MessageSquareText className="h-4 w-4 text-brand-blue" />
            Contact
          </div>
          <h1 className="mt-6 text-4xl font-black tracking-tight sm:text-5xl">Let’s talk</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-700 dark:text-slate-200">
            Share your project capacity, location, and timeline. We’ll respond with next steps.
          </p>
        </div>
      </Section>

      <Section className="bg-grid">
        <div className="mx-auto grid max-w-6xl gap-6 px-4 md:grid-cols-3">
          <Card className="md:col-span-2">
            <div className="text-lg font-bold">Inquiry form</div>
            <div className="mt-2 text-sm text-slate-600 dark:text-slate-300">
              This form posts to `/api/contact`. Plug in email/CRM later without changing the UI.
            </div>
            <div className="mt-6">
              <ContactForm />
            </div>
          </Card>
          <Card>
            <div className="text-lg font-bold">Direct contact</div>
            <div className="mt-4 space-y-3 text-sm text-slate-600 dark:text-slate-300">
              <div>
                <div className="font-semibold text-slate-900 dark:text-white">Email</div>
                <a className="underline underline-offset-4" href={`mailto:${site.contact.email}`}>
                  {site.contact.email}
                </a>
              </div>
              <div>
                <div className="font-semibold text-slate-900 dark:text-white">Phone</div>
                <a className="inline-flex items-center gap-2 underline underline-offset-4" href={`tel:${site.contact.phone}`}>
                  <PhoneCall className="h-4 w-4" />
                  {site.contact.phone}
                </a>
              </div>
            </div>

          </Card>
        </div>
      </Section>
    </div>
  );
}


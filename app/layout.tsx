import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import LoadingOverlay from "@/components/LoadingOverlay";
import { site } from "@/content/site";

function metadataBaseUrl(): URL {
  try {
    return new URL(site.url);
  } catch {
    return new URL("https://example.com");
  }
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: metadataBaseUrl(),
  title: {
    default: `${site.name} | Solar EPC, BESS/EMS & Hydrogen`,
    template: `%s | ${site.name}`
  },
  description: site.description,
  applicationName: site.name,
  robots: {
    index: true,
    follow: true
  },
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: "/",
    title: `${site.name} | Solar EPC, BESS/EMS & Hydrogen`,
    description: site.description,
    siteName: site.name
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LoadingOverlay />
          <Header />
          <main className="min-h-[70vh]">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}


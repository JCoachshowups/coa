import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import CookieBanner from "@/components/CookieBanner";
import ClarityLoader from "@/components/ClarityLoader";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Coach ShowUps — 10–15 show‑up calls in 2–3 weken",
  description:
    "Wij leveren 10–15 gekwalificeerde show‑up salescalls in 2–3 weken voor fitness coaches. Pay‑per‑Meeting, intake‑scoring, NL/BE.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Coach ShowUps — 10–15 show‑up calls in 2–3 weken",
    description:
      "Wij leveren 10–15 gekwalificeerde show‑up salescalls in 2–3 weken voor fitness coaches. Pay‑per‑Meeting, intake‑scoring, NL/BE.",
    images: [
      { url: `${siteUrl}/og.png?v=2`, width: 1200, height: 630, alt: "Coach ShowUps" },
      { url: `${siteUrl}/og.svg?v=2`, width: 1200, height: 630, alt: "Coach ShowUps (vector)" },
    ],
    locale: "nl_NL",
    siteName: "Coach ShowUps",
  },
  twitter: {
    card: "summary_large_image",
    title: "Coach ShowUps — 10–15 show‑up calls in 2–3 weken",
    description:
      "Wij leveren 10–15 gekwalificeerde show‑up salescalls in 2–3 weken voor fitness coaches. Pay‑per‑Meeting, intake‑scoring, NL/BE.",
    images: [`${siteUrl}/og.png?v=2`, `${siteUrl}/og.svg?v=2`],
    creator: "@JoeyVjejo",
    site: "@JoeyVjejo",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link rel="preload" as="image" href="/logo.png" />
      </head>
      <body className="bg-white">
        <Navbar />
        {children}
        <CookieBanner />
        <ClarityLoader />
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./globals.css";

// Font Awesome renders inline SVG (self-hosted, no CDN). We import its CSS
// above and disable runtime injection to avoid an icon-flash on load.
config.autoAddCss = false;

const SITE_URL = "https://www.oathbound.game";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Oathbound — A 3D Fantasy MMORPG | Coming Soon",
    template: "%s | Oathbound",
  },
  description:
    "Oathbound is an upcoming 3D fantasy MMORPG you play right in your browser. Swear your oath, forge your legend, and explore a vast living world. Now in development.",
  keywords: [
    "Oathbound",
    "fantasy MMORPG",
    "browser MMORPG",
    "3D MMORPG",
    "online RPG",
    "upcoming MMORPG",
    "play in browser",
  ],
  authors: [{ name: "Oathbound" }],
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: "Oathbound",
    title: "Oathbound — A 3D Fantasy MMORPG | Coming Soon",
    description:
      "Swear your oath. Forge your legend. An upcoming 3D fantasy MMORPG you play right in your browser.",
    images: [{ url: "/art/realm-hero.webp", width: 1200, height: 630, alt: "Oathbound" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Oathbound — A 3D Fantasy MMORPG | Coming Soon",
    description:
      "Swear your oath. Forge your legend. An upcoming 3D fantasy MMORPG you play right in your browser.",
    images: ["/art/realm-hero.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

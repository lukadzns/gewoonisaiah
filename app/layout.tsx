import type { Metadata, Viewport } from "next";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/700.css";
import "./globals.css";

export const metadata: Metadata = {
  title: "Isiah Kolf | Mediavormgever",
  description: "Portfolio van Isiah Kolf, mediavormgever. Huisstijlen, social visuals en drukwerk.",
  openGraph: {
    title: "Isiah Kolf | Mediavormgever",
    description: "Portfolio van Isiah Kolf, mediavormgever.",
    locale: "nl_NL",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#d91f2a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <body>
        <a className="skip" href="#werk">
          Ga naar het werk
        </a>
        {children}
      </body>
    </html>
  );
}

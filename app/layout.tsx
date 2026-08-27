import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "தமிழண்ணல் — Thamizhannal",
  description:
    "மூதறிஞர் இராம. பெரியகருப்பன் அவர்களின் வாழ்க்கை, நூல்கள், ஆய்வுகள் மற்றும் நினைவுகளைப் பதிவு செய்யும் இணையதளம்.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ta">
      <body>{children}</body>
    </html>
  );
}
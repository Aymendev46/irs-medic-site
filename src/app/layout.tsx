import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Eliminate US Tax Anxiety — IRSMedic | Parent & Parent LLP",
  description:
    "Attorneys and CPAs working as one team. IRS resolution, offshore disclosure, audit defense, and estate planning for global families.",
  openGraph: {
    title: "Eliminate US Tax Anxiety — IRSMedic | Parent & Parent LLP",
    description:
      "Attorneys and CPAs working as one team. IRS resolution, offshore disclosure, audit defense, and estate planning for global families.",
    url: "https://irsmedic.com",
    siteName: "IRSMedic",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eliminate US Tax Anxiety — IRSMedic | Parent & Parent LLP",
    description:
      "Attorneys and CPAs working as one team. IRS resolution, offshore disclosure, audit defense, and estate planning for global families.",
  },
  metadataBase: new URL("https://irsmedic.com"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=Inter:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-navy text-[#e8edf5] antialiased">
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { avenir } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "K9 Combinator",
  description: "Make something dogs want.",
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "K9 Combinator",
    description: "Make something dogs want.",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
        alt: "K9 Combinator",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "K9 Combinator",
    description: "Make something dogs want.",
    images: ["/opengraph.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${avenir.variable} antialiased`}>{children}</body>
    </html>
  );
}

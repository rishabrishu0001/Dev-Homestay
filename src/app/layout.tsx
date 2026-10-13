import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Dev Homestay, Shimla - A Home in the Hills | Authentic Homestyle Hospitality",
  description: "Dev Homestay, Shimla established in 2015 with 30+ years hospitality experience. Located in peaceful Dudhli–Bharari (4 km to Mall Road) with pure vegetarian home-cooked food, deodar forest views, and tour services.",
  keywords: [
    "Dev Homestay Shimla",
    "Homestay in Shimla",
    "Dudhli Bharari Homestay",
    "Pure Vegetarian Homestay Shimla",
    "Shimla Homestay with Balcony",
    "Shimla Tour Packages",
    "Spiti Valley Tours from Shimla",
    "Family Homestay Shimla"
  ],
  openGraph: {
    title: "Dev Homestay, Shimla - A Home in the Hills",
    description: "Authentic family-run homestay in Shimla with 30+ years of 5-star hospitality experience and pure vegetarian home-cooked food.",
    url: "https://devhomestay.in",
    siteName: "Dev Homestay",
    images: [
      {
        url: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Dev Homestay Himalayan View",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

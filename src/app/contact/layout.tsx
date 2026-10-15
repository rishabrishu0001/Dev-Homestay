import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Directions | Dev Homestay, Dudhli – Shimla Homestay",
  description:
    "Get directions to Dev Homestay in Dudhli, Shimla (4 km from Mall Road). Call or WhatsApp +91 84470 56787, GPS coordinates 31.1215 N, 77.1820 E, and reach guide.",
  alternates: {
    canonical: "https://www.devhomestay.in/contact",
  },
  openGraph: {
    title: "Contact & Directions | Dev Homestay, Dudhli – Shimla",
    description:
      "Find Dev Homestay in Dudhli, Shimla. Direct host contact, Google Maps location, and reach guide from Mall Road, ISBT, and railway station.",
    url: "https://www.devhomestay.in/contact",
    siteName: "Dev Homestay, Shimla",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact & Directions | Dev Homestay Shimla",
    description: "Location, map coordinates, and contact details for Dev Homestay, Dudhli, Shimla.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

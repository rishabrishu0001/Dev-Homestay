import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#1a4231",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://www.devhomestay.in"),
  title: "Homestay in Shimla near Mall Road | Dev Homestay, Dudhli – Pure Veg Stay",
  description:
    "Family-run homestay in Dudhli, Shimla, 4 km from Mall Road. Valley-view rooms from Rs 2,499, pure veg home-cooked food, free parking. Book direct, save 10%.",
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",
  icons: {
    icon: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Homestay in Shimla near Mall Road | Dev Homestay, Dudhli – Pure Veg Stay",
    description:
      "Family-run homestay in Dudhli, Shimla, 4 km from Mall Road. Valley-view rooms from Rs 2,499, pure veg home-cooked food, free parking. Book direct, save 10%.",
    url: "https://www.devhomestay.in",
    siteName: "Dev Homestay, Shimla",
    images: [
      {
        url: "https://www.devhomestay.in/images/views/panoramic-snow-mountain-view.jpg",
        width: 1200,
        height: 630,
        alt: "Dev Homestay Shimla panoramic mountain and pine valley view",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homestay in Shimla near Mall Road | Dev Homestay, Dudhli – Pure Veg Stay",
    description:
      "Family-run homestay in Dudhli, Shimla, 4 km from Mall Road. Valley-view rooms from Rs 2,499, pure veg home-cooked food, free parking. Book direct, save 10%.",
    images: ["https://www.devhomestay.in/images/views/panoramic-snow-mountain-view.jpg"],
  },
  verification: {
    google: "VlFksAh0LfGjUCXzKcMda_clANyTTBxnnQUh2wy6HfA",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {gaId && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${gaId}');
              `}
            </Script>
          </>
        )}
      </head>
      <body>{children}</body>
    </html>
  );
}

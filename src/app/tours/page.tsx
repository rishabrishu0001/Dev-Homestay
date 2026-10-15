import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Compass,
  MapPin,
  Clock,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Phone,
  MessageCircle,
  Car,
} from "lucide-react";
import { TOURS_DATA } from "@/data/toursData";
import { HOMESTAY_INFO } from "@/data/homestayData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Shimla Tour Packages & Sightseeing Taxi Services | Dev Homestay",
  description:
    "Explore curated Shimla tour packages, Kufri sightseeing cabs, Spiti Valley expeditions & Kinnaur trips. Direct booking with Dev Homestay travel desk.",
  alternates: {
    canonical: "https://www.devhomestay.in/tours",
  },
  openGraph: {
    title: "Shimla Tour Packages & Sightseeing Taxi Services | Dev Homestay",
    description:
      "Reliable mountain sightseeing cabs and customized multi-day Himachal tour packages operated directly from Dev Homestay, Shimla.",
    url: "https://www.devhomestay.in/tours",
    siteName: "Dev Homestay, Shimla",
    images: [
      {
        url: "https://www.devhomestay.in/images/views/panoramic-snow-mountain-view.jpg",
        width: 1200,
        height: 630,
        alt: "Snow peaks and Himalayan roads on Shimla tour package with Dev Homestay",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shimla Tour Packages | Dev Homestay Travel Desk",
    description: "Curated Shimla, Kufri, Spiti, and Kinnaur tour packages with experienced mountain drivers.",
    images: ["https://www.devhomestay.in/images/views/panoramic-snow-mountain-view.jpg"],
  },
};

const TOURS_INDEX_FAQS = [
  {
    q: "What types of tour services does Dev Homestay offer?",
    a: "We offer local Shimla and Kufri full-day sightseeing cabs, multi-day Spiti Valley expeditions, Kinnaur Valley packages, Manali road trips, and airport/station taxi transfers with experienced mountain drivers."
  },
  {
    q: "Can non-staying guests book tour packages through Dev Homestay?",
    a: "While our priority is always homestay guests, our travel desk also assists outside travelers, couples, and family groups looking for reliable customized Himachal packages."
  },
  {
    q: "Are the tour cab rates fixed or customized?",
    a: "Local sightseeing cabs (e.g., Kufri, Jakhoo, Mall Road) have transparent fixed rates. Multi-day Himalayan expeditions like Spiti Valley or Kinnaur are customized based on group size, vehicle choice (Innova, Scorpio, Tempo Traveler), and season."
  },
  {
    q: "How do I book a tour package or sightseeing taxi?",
    a: "You can book directly by calling +91 84470 56787 or messaging our travel desk on WhatsApp with your travel dates and preferred destinations."
  }
];

export default function ToursIndexPage() {
  const whatsappUrl = `https://wa.me/${HOMESTAY_INFO.whatsapp}?text=${encodeURIComponent(
    "Hello Dev Homestay! I would like to inquire about your Shimla and Himachal tour packages."
  )}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "TouristInformationCenter",
    name: "Dev Homestay Travel Desk",
    url: "https://www.devhomestay.in/tours",
    telephone: "+918447056787",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bharari Bhont Road, Ragyan, Dudhli",
      addressLocality: "Shimla",
      addressRegion: "Himachal Pradesh",
      postalCode: "171003",
      addressCountry: "IN",
    },
  };

  return (
    <>
      <StructuredData data={serviceSchema} />
      <Navbar />

      <main style={{ paddingTop: "85px", backgroundColor: "var(--bg-page)" }}>
        {/* Breadcrumbs */}
        <div style={{ backgroundColor: "var(--bg-surface)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <Breadcrumbs items={[{ label: "Shimla Tour Packages" }]} />
          </div>
        </div>

        {/* Hero Section */}
        <section style={{ padding: "48px 0 24px" }}>
          <div className="container">
            <span className="section-tag" style={{ display: "inline-flex", marginBottom: "14px" }}>
              <Compass size={14} /> Dedicated Travel &amp; Tour Desk
            </span>

            <h1
              className="font-serif"
              style={{
                fontSize: "clamp(2.1rem, 4.5vw, 3.2rem)",
                color: "var(--primary)",
                lineHeight: 1.2,
                marginBottom: "18px",
                fontWeight: 700,
              }}
            >
              Shimla Tour Packages &amp; Sightseeing Cabs – Himachal Travel Desk
            </h1>

            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "840px", lineHeight: 1.7, marginBottom: "36px" }}>
              Leave the mountain road logistics to experts. Operated directly from Dev Homestay, our travel desk provides trusted private sightseeing cabs, experienced Himalayan drivers, and bespoke Spiti and Kinnaur itineraries.
            </p>

            {/* Tours Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "28px",
                marginBottom: "60px",
              }}
            >
              {TOURS_DATA.map((tour) => (
                <div
                  key={tour.id}
                  style={{
                    backgroundColor: "var(--bg-card)",
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    border: "1px solid var(--border-color)",
                    boxShadow: "var(--shadow-sm)",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ position: "relative", height: "220px", overflow: "hidden" }}>
                    <Image
                      src={tour.coverImage}
                      alt={tour.coverAlt}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                    <span
                      style={{
                        position: "absolute",
                        top: "12px",
                        left: "12px",
                        backgroundColor: "var(--primary)",
                        color: "#fff",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                        padding: "4px 10px",
                        borderRadius: "9999px",
                      }}
                    >
                      {tour.duration}
                    </span>
                  </div>

                  <div style={{ padding: "24px" }}>
                    <h2
                      className="font-serif"
                      style={{ fontSize: "1.35rem", color: "var(--primary)", marginBottom: "8px", lineHeight: 1.35 }}
                    >
                      {tour.name}
                    </h2>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "16px" }}>
                      {tour.tagline}
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "20px" }}>
                      {tour.highlights.slice(0, 3).map((hl, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "baseline", gap: "8px", fontSize: "0.85rem", color: "var(--text-main)" }}>
                          <span style={{ color: "var(--accent)" }}>✓</span>
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>

                    <div style={{ display: "flex", gap: "12px", alignItems: "center" }}>
                      <Link
                        href={`/tours/${tour.slug}`}
                        className="btn btn-primary"
                        style={{ padding: "10px 18px", fontSize: "0.88rem", flex: 1, justifyContent: "center", textDecoration: "none" }}
                      >
                        View Itinerary &amp; Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* In-Depth Overview */}
            <div
              style={{
                backgroundColor: "var(--bg-surface)",
                borderRadius: "var(--radius-lg)",
                padding: "36px",
                border: "1px solid var(--border-color)",
                marginBottom: "60px",
              }}
            >
              <h2 className="font-serif" style={{ fontSize: "1.8rem", color: "var(--primary)", marginBottom: "16px" }}>
                Why Book Himachal Tour Packages Directly with Dev Homestay
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-main)", marginBottom: "16px" }}>
                Navigating mountain roads across Himachal Pradesh requires seasoned local drivers who understand weather changes, road closures, and high-altitude health protocols. With over 30 years of hospitality leadership in India, our host manages every tour with five-star precision and personal care.
              </p>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-main)", marginBottom: "24px" }}>
                Unlike anonymous online aggregators that outsource bookings to third-party brokers, we coordinate directly with our trusted vehicle partners. Whether you need a simple half-day cab to Jakhoo Temple and Mall Road or a comprehensive 8-day expedition through Spiti Valley and Kinnaur, you receive honest advice, transparent fares, and zero hidden surcharges.
              </p>

              <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ textDecoration: "none" }}
                >
                  <MessageCircle size={16} /> Inquire via WhatsApp
                </a>
                <a
                  href={`tel:${HOMESTAY_INFO.phone}`}
                  className="btn btn-outline"
                  style={{ textDecoration: "none" }}
                >
                  <Phone size={16} /> Call Tour Desk: {HOMESTAY_INFO.phone}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Tours FAQs */}
        <FAQAccordion
          title="Tour & Sightseeing Taxi FAQs"
          subtitle="Answers to common questions regarding our cabs, drivers, and Himachal tour itineraries."
          badge="Tours FAQ"
          items={TOURS_INDEX_FAQS}
        />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}

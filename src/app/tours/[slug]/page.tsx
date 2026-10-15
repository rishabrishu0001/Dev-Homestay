import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Compass,
  MapPin,
  Clock,
  Check,
  ShieldCheck,
  Phone,
  MessageCircle,
  ArrowRight,
  Sparkles,
  CalendarCheck,
  Car,
  Home,
} from "lucide-react";
import { TOURS_DATA, TourPackage } from "@/data/toursData";
import { HOMESTAY_INFO, ROOMS } from "@/data/homestayData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { StructuredData } from "@/components/StructuredData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return TOURS_DATA.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tour = TOURS_DATA.find((t) => t.slug === slug);
  if (!tour) return { title: "Tour Not Found" };

  const canonicalUrl = `https://www.devhomestay.in/tours/${tour.slug}`;

  return {
    title: tour.metaTitle,
    description: tour.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: tour.metaTitle,
      description: tour.metaDescription,
      url: canonicalUrl,
      siteName: "Dev Homestay, Shimla",
      images: [
        {
          url: `https://www.devhomestay.in${tour.coverImage}`,
          width: 1200,
          height: 630,
          alt: tour.coverAlt,
        },
      ],
      locale: "en_IN",
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: tour.metaTitle,
      description: tour.metaDescription,
      images: [`https://www.devhomestay.in${tour.coverImage}`],
    },
  };
}

export default async function TourDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tour = TOURS_DATA.find((t) => t.slug === slug);
  if (!tour) notFound();

  const otherTours = TOURS_DATA.filter((t) => t.slug !== slug);

  const whatsappUrl = `https://wa.me/${HOMESTAY_INFO.whatsapp}?text=${encodeURIComponent(
    `Hello Dev Homestay! I am interested in inquiring about the "${tour.name}". Please share rates and vehicle options.`
  )}`;

  // TouristTrip JSON-LD Schema
  const touristTripSchema = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: tour.name,
    description: tour.overview,
    image: `https://www.devhomestay.in${tour.coverImage}`,
    touristType: ["Family", "Couple", "Nature Enthusiasts"],
    itinerary: {
      "@type": "ItemList",
      numberOfItems: tour.itinerary.length,
      itemListElement: tour.itinerary.map((item, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "TouristAttraction",
          name: item.title,
          description: item.desc,
        },
      })),
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "INR",
      description: tour.startingPrice,
      url: `https://www.devhomestay.in/tours/${tour.slug}`,
    },
    provider: {
      "@type": "TravelAgency",
      name: "Dev Homestay Tour Desk",
      telephone: "+918447056787",
      url: "https://www.devhomestay.in",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Bharari Bhont Road, Ragyan, Dudhli",
        addressLocality: "Shimla",
        addressRegion: "Himachal Pradesh",
        postalCode: "171003",
        addressCountry: "IN",
      },
    },
  };

  return (
    <>
      <StructuredData data={touristTripSchema} />
      <Navbar />

      <main style={{ paddingTop: "85px", backgroundColor: "var(--bg-page)" }}>
        {/* Breadcrumbs */}
        <div style={{ backgroundColor: "var(--bg-surface)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <Breadcrumbs
              items={[
                { label: "Tour Packages", href: "/tours" },
                { label: tour.name },
              ]}
            />
          </div>
        </div>

        {/* Hero Section */}
        <section style={{ padding: "40px 0 20px" }}>
          <div className="container">
            <span className="section-tag" style={{ display: "inline-flex", marginBottom: "12px" }}>
              <Compass size={14} /> Duration: {tour.duration}
            </span>

            <h1
              className="font-serif"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "var(--primary)",
                lineHeight: 1.2,
                marginBottom: "14px",
                fontWeight: 700,
              }}
            >
              {tour.h1}
            </h1>

            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "820px", lineHeight: 1.65, marginBottom: "28px" }}>
              {tour.tagline} Handcrafted and operated directly from our homestay base in Dudhli, Shimla.
            </p>

            {/* Photo Gallery Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "16px",
                marginBottom: "48px",
              }}
            >
              {tour.gallery.map((imgUrl, i) => (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    height: "260px",
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    border: "1px solid var(--border-color)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <Image
                    src={imgUrl}
                    alt={`${tour.name} scenic destination photo ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                    priority={i === 0}
                  />
                </div>
              ))}
            </div>

            {/* Main Content & Inquiry Sidebar */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "40px",
                alignItems: "start",
                marginBottom: "50px",
              }}
            >
              <div>
                <h2 className="font-serif" style={{ fontSize: "1.7rem", color: "var(--primary)", marginBottom: "16px" }}>
                  Tour Overview &amp; Experience
                </h2>
                <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-main)", marginBottom: "28px" }}>
                  {tour.overview}
                </p>

                <h3 style={{ fontSize: "1.3rem", color: "var(--primary)", marginBottom: "16px" }}>
                  Key Highlights &amp; Inclusions
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "10px", marginBottom: "32px" }}>
                  {tour.highlights.map((hl, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: "10px",
                        padding: "12px 14px",
                        backgroundColor: "var(--bg-surface)",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--border-color)",
                        fontSize: "0.9rem",
                        color: "var(--text-main)",
                      }}
                    >
                      <Check size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                <h3 className="font-serif" style={{ fontSize: "1.5rem", color: "var(--primary)", marginBottom: "18px" }}>
                  Suggested Itinerary Breakdown
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "36px" }}>
                  {tour.itinerary.map((step, idx) => (
                    <div
                      key={idx}
                      style={{
                        padding: "20px 24px",
                        backgroundColor: "var(--bg-card)",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--border-color)",
                        borderLeft: "4px solid var(--primary)",
                      }}
                    >
                      <span style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.5px" }}>
                        {step.day}
                      </span>
                      <h4 style={{ fontSize: "1.1rem", color: "var(--primary)", margin: "4px 0 8px 0" }}>
                        {step.title}
                      </h4>
                      <p style={{ fontSize: "0.92rem", color: "var(--text-main)", lineHeight: 1.65, margin: 0 }}>
                        {step.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar Booking Card */}
              <div
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderRadius: "var(--radius-lg)",
                  padding: "32px 28px",
                  border: "1px solid var(--border-color)",
                  boxShadow: "var(--shadow-md)",
                  position: "sticky",
                  top: "100px",
                }}
              >
                <span style={{ color: "var(--primary)", fontWeight: 700, fontSize: "0.88rem", display: "flex", alignItems: "center", gap: "6px", marginBottom: "8px" }}>
                  <ShieldCheck size={18} color="var(--primary)" /> Private Mountain Tour
                </span>
                <h3 className="font-serif" style={{ fontSize: "1.5rem", color: "var(--primary)", marginBottom: "8px" }}>
                  Reserve Tour or Taxi
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "20px" }}>
                  Customized for families, couples, and small groups. Direct quotes with zero middleman markup.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center", padding: "14px 20px", marginBottom: "12px", textDecoration: "none" }}
                >
                  <MessageCircle size={18} /> Inquire via WhatsApp
                </a>

                <a
                  href={`tel:${HOMESTAY_INFO.phone}`}
                  className="btn btn-outline"
                  style={{ width: "100%", justifyContent: "center", padding: "12px 20px", textDecoration: "none" }}
                >
                  <Phone size={16} /> Call Tour Desk: {HOMESTAY_INFO.phone}
                </a>

                <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid var(--border-color)", fontSize: "0.85rem", color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div>🏔️ <strong>Base:</strong> Dev Homestay, Dudhli (~4 km to Mall Rd)</div>
                  <div>🚗 <strong>Vehicles:</strong> Sedan, Innova, Scorpio, Tempo Traveler</div>
                  <div>👨‍✈️ <strong>Drivers:</strong> 10+ yrs mountain road experience</div>
                </div>
              </div>
            </div>

            {/* Cross-Link Other Tours & Rooms */}
            <div style={{ padding: "36px 0 20px", borderTop: "1px solid var(--border-color)" }}>
              <h3 className="font-serif" style={{ fontSize: "1.4rem", color: "var(--primary)", marginBottom: "18px" }}>
                Explore Other Tour Packages &amp; Homestay Rooms
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                {otherTours.map((ot) => (
                  <Link key={ot.id} href={`/tours/${ot.slug}`} style={{ textDecoration: "none", color: "inherit" }}>
                    <div style={{ backgroundColor: "var(--bg-card)", padding: "18px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                      <h4 style={{ fontSize: "1.05rem", color: "var(--primary)", marginBottom: "4px" }}>{ot.name}</h4>
                      <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: "0 0 8px 0" }}>{ot.duration}</p>
                      <span style={{ fontSize: "0.85rem", color: "var(--accent)", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
                        View Tour Itinerary <ArrowRight size={13} />
                      </span>
                    </div>
                  </Link>
                ))}

                <Link href="/rooms/cedar-view-deluxe-room" style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={{ backgroundColor: "var(--primary-surface)", padding: "18px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1.05rem", color: "var(--primary)", marginBottom: "4px", display: "flex", alignItems: "center", gap: "6px" }}>
                      <Home size={15} /> Homestay Rooms
                    </h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: "0 0 8px 0" }}>Valley view rooms from Rs 2,499/night.</p>
                    <span style={{ fontSize: "0.85rem", color: "var(--primary)", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
                      View Accommodation <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Tour FAQs */}
        <FAQAccordion
          title={`Frequently Asked Questions About ${tour.name}`}
          subtitle="Answers to common questions regarding vehicle arrangements, weather, and preparation."
          badge="Tour FAQ"
          items={tour.faqs}
        />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}

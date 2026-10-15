import React from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  Users,
  Bed,
  Mountain,
  Check,
  Phone,
  MessageCircle,
  Sparkles,
  ShieldCheck,
  ArrowRight,
  Compass,
  Clock,
} from "lucide-react";
import { ROOMS, HOMESTAY_INFO } from "@/data/homestayData";
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
  return ROOMS.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const room = ROOMS.find((r) => r.slug === slug);
  if (!room) return { title: "Room Not Found" };

  const canonicalUrl = `https://www.devhomestay.in/rooms/${room.slug}`;

  return {
    title: room.metaTitle,
    description: room.metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: room.metaTitle,
      description: room.metaDescription,
      url: canonicalUrl,
      siteName: "Dev Homestay, Shimla",
      images: [
        {
          url: `https://www.devhomestay.in${room.image}`,
          width: 1200,
          height: 630,
          alt: `${room.name} at Dev Homestay Shimla`,
        },
      ],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: room.metaTitle,
      description: room.metaDescription,
      images: [`https://www.devhomestay.in${room.image}`],
    },
  };
}

export default async function RoomDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const room = ROOMS.find((r) => r.slug === slug);
  if (!room) notFound();

  const otherRooms = ROOMS.filter((r) => r.slug !== slug);

  const whatsappBookingUrl = `https://wa.me/${HOMESTAY_INFO.whatsapp}?text=${encodeURIComponent(
    `Hello Dev Homestay! I would like to reserve the ${room.name} (Direct booking rate from Rs ${room.pricePerNight}/night with 10% discount). Please let me know availability.`
  )}`;

  // HotelRoom JSON-LD Schema
  const hotelRoomSchema = {
    "@context": "https://schema.org",
    "@type": "HotelRoom",
    name: room.name,
    description: room.longDescription,
    image: room.gallery.map((img) => `https://www.devhomestay.in${img}`),
    bed: {
      "@type": "BedDetails",
      typeOfBed: room.bedType,
    },
    occupancy: {
      "@type": "QuantitativeValue",
      maxValue: room.capacity.includes("6") ? 6 : room.capacity.includes("3") ? 3 : 2,
    },
    floorSize: {
      "@type": "QuantitativeValue",
      value: parseInt(room.size),
      unitCode: "FTK",
    },
    amenityFeature: room.features.map((f) => ({
      "@type": "LocationFeatureSpecification",
      name: f,
      value: true,
    })),
    offers: {
      "@type": "Offer",
      price: room.pricePerNight,
      priceCurrency: "INR",
      availability: "https://schema.org/InStock",
      url: `https://www.devhomestay.in/rooms/${room.slug}`,
      validFrom: "2026-01-01",
    },
    isPartOf: {
      "@type": "LodgingBusiness",
      name: "Dev Homestay, Shimla",
      url: "https://www.devhomestay.in",
      telephone: "+918447056787",
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
      <StructuredData data={hotelRoomSchema} />
      <Navbar />

      <main style={{ paddingTop: "85px", backgroundColor: "var(--bg-page)" }}>
        {/* Breadcrumb Bar */}
        <div style={{ backgroundColor: "var(--bg-surface)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <Breadcrumbs
              items={[
                { label: "Rooms & Suites", href: "/#rooms" },
                { label: room.name },
              ]}
            />
          </div>
        </div>

        {/* Hero Banner Section */}
        <section style={{ padding: "40px 0 20px" }}>
          <div className="container">
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
              <span className="section-tag" style={{ margin: 0 }}>
                <Sparkles size={14} />
                {room.badge || "Handcrafted Homestay Living"}
              </span>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                Targeting: {room.primaryKeyword}
              </span>
            </div>

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
              {room.h1}
            </h1>

            <p style={{ fontSize: "1.1rem", color: "var(--text-muted)", maxWidth: "820px", lineHeight: 1.65, marginBottom: "28px" }}>
              {room.tagline}. Located in peaceful Dudhli–Bharari (~4 km from Shimla Mall Road) with 100% pure vegetarian home dining and deodar forest surroundings.
            </p>

            {/* Quick Specs Pill Row */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "12px",
                padding: "16px 20px",
                backgroundColor: "var(--bg-card)",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-color)",
                boxShadow: "var(--shadow-sm)",
                marginBottom: "36px",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.92rem", fontWeight: 600, color: "var(--primary)" }}>
                <Users size={16} color="var(--accent)" />
                <span>Capacity: {room.capacity}</span>
              </div>
              <div style={{ width: "1px", height: "20px", backgroundColor: "var(--border-color)" }} />
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.92rem", fontWeight: 600, color: "var(--primary)" }}>
                <Bed size={16} color="var(--accent)" />
                <span>Bedding: {room.bedType}</span>
              </div>
              <div style={{ width: "1px", height: "20px", backgroundColor: "var(--border-color)" }} />
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.92rem", fontWeight: 600, color: "var(--primary)" }}>
                <Mountain size={16} color="var(--accent)" />
                <span>Size: {room.size}</span>
              </div>
              <div style={{ width: "1px", height: "20px", backgroundColor: "var(--border-color)" }} />
              <div style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.92rem", fontWeight: 600, color: "var(--primary)" }}>
                <Clock size={16} color="var(--accent)" />
                <span>Check-in 12 PM • Check-out 11 AM</span>
              </div>
            </div>

            {/* Photo Gallery Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
                gap: "16px",
                marginBottom: "48px",
              }}
            >
              {room.gallery.slice(0, 3).map((imgUrl, i) => (
                <div
                  key={i}
                  style={{
                    position: "relative",
                    height: "280px",
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    border: "1px solid var(--border-color)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                >
                  <Image
                    src={imgUrl}
                    alt={`${room.name} interior and Himalayan view ${i + 1} at Dev Homestay Shimla`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                    priority={i === 0}
                  />
                  <span
                    style={{
                      position: "absolute",
                      bottom: "12px",
                      left: "12px",
                      background: "rgba(13, 30, 21, 0.75)",
                      color: "#fff",
                      fontSize: "0.75rem",
                      fontWeight: 600,
                      padding: "4px 10px",
                      borderRadius: "4px",
                    }}
                  >
                    Photo {i + 1} of {room.gallery.length}
                  </span>
                </div>
              ))}
            </div>

            {/* Main Content & Booking Column */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "40px",
                alignItems: "start",
                marginBottom: "50px",
              }}
            >
              {/* Detailed Description & Amenities */}
              <div>
                <h2
                  className="font-serif"
                  style={{ fontSize: "1.7rem", color: "var(--primary)", marginBottom: "16px" }}
                >
                  Room Overview & Himalayan Living
                </h2>
                <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-main)", marginBottom: "20px" }}>
                  {room.longDescription}
                </p>

                <h3 style={{ fontSize: "1.2rem", color: "var(--primary)", marginTop: "28px", marginBottom: "14px" }}>
                  Key Amenities & Thoughtful Touches
                </h3>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "12px",
                    marginBottom: "30px",
                  }}
                >
                  {room.features.map((f, idx) => (
                    <div
                      key={idx}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        padding: "10px 14px",
                        backgroundColor: "var(--bg-surface)",
                        borderRadius: "var(--radius-md)",
                        border: "1px solid var(--border-color)",
                        fontSize: "0.92rem",
                        color: "var(--text-main)",
                      }}
                    >
                      <Check size={16} color="var(--primary)" style={{ flexShrink: 0 }} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                <div
                  style={{
                    padding: "20px 24px",
                    backgroundColor: "var(--primary-surface)",
                    borderRadius: "var(--radius-md)",
                    borderLeft: "4px solid var(--primary)",
                    marginBottom: "30px",
                  }}
                >
                  <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "6px", fontWeight: 700 }}>
                    100% Pure Vegetarian Meals Available
                  </h4>
                  <p style={{ fontSize: "0.92rem", color: "var(--text-main)", margin: 0, lineHeight: 1.6 }}>
                    Enjoy fresh, home-cooked Himachali paranthas, hot dal-rice, and seasonal mountain sabzi prepared fresh in the host family kitchen. Delivered hot to your room or balcony table.
                  </p>
                </div>
              </div>

              {/* Direct Booking Sidebar Card */}
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
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "16px" }}>
                  <div>
                    <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>Direct Rate From</span>
                    <div style={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
                      <span className="font-serif" style={{ fontSize: "2.2rem", fontWeight: 700, color: "var(--primary)" }}>
                        ₹{room.pricePerNight}
                      </span>
                      <span style={{ fontSize: "0.9rem", color: "var(--text-muted)" }}>/ night</span>
                    </div>
                  </div>
                  <span
                    style={{
                      background: "#e8f5e9",
                      color: "#2e7d32",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                      padding: "6px 12px",
                      borderRadius: "9999px",
                    }}
                  >
                    Save 10% Direct
                  </span>
                </div>

                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.88rem", color: "var(--text-muted)" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <ShieldCheck size={16} color="var(--primary)" /> Zero booking fees &amp; no OTA markup
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <ShieldCheck size={16} color="var(--primary)" /> Free cancellation up to 48 hours prior
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <ShieldCheck size={16} color="var(--primary)" /> Free on-site secure parking for cars &amp; bikes
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                    <ShieldCheck size={16} color="var(--primary)" /> 24/7 hot geyser water &amp; room heater included
                  </li>
                </ul>

                <a
                  href={whatsappBookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center", padding: "14px 20px", fontSize: "0.98rem", marginBottom: "12px", textDecoration: "none" }}
                >
                  <MessageCircle size={18} /> Reserve via WhatsApp (10% Off)
                </a>

                <a
                  href={`tel:${HOMESTAY_INFO.phone}`}
                  className="btn btn-outline"
                  style={{ width: "100%", justifyContent: "center", padding: "12px 20px", fontSize: "0.92rem", textDecoration: "none" }}
                >
                  <Phone size={16} /> Call Host: {HOMESTAY_INFO.phone}
                </a>

                <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid var(--border-color)", textAlign: "center", fontSize: "0.82rem", color: "var(--text-muted)" }}>
                  Need cab assistance from Shimla station or airport? Let us know when booking!
                </div>
              </div>
            </div>

            {/* Cross-Link Related Stays & Experiences */}
            <div style={{ padding: "36px 0 20px", borderTop: "1px solid var(--border-color)" }}>
              <h3 className="font-serif" style={{ fontSize: "1.4rem", color: "var(--primary)", marginBottom: "18px" }}>
                Compare Other Rooms &amp; Mountain Stays
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "20px" }}>
                {otherRooms.map((or) => (
                  <Link
                    key={or.id}
                    href={`/rooms/${or.slug}`}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <div
                      style={{
                        backgroundColor: "var(--bg-card)",
                        borderRadius: "var(--radius-md)",
                        padding: "18px",
                        border: "1px solid var(--border-color)",
                        boxShadow: "var(--shadow-sm)",
                        transition: "transform var(--transition-fast)",
                      }}
                    >
                      <h4 style={{ fontSize: "1.05rem", color: "var(--primary)", marginBottom: "6px" }}>{or.name}</h4>
                      <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "12px", lineHeight: 1.5 }}>
                        {or.tagline}
                      </p>
                      <span style={{ fontSize: "0.85rem", color: "var(--accent)", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
                        View Room Details <ArrowRight size={13} />
                      </span>
                    </div>
                  </Link>
                ))}

                <Link href="/tours" style={{ textDecoration: "none", color: "inherit" }}>
                  <div
                    style={{
                      backgroundColor: "var(--primary-surface)",
                      borderRadius: "var(--radius-md)",
                      padding: "18px",
                      border: "1px solid var(--border-color)",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <h4 style={{ fontSize: "1.05rem", color: "var(--primary)", marginBottom: "6px", display: "flex", alignItems: "center", gap: "6px" }}>
                      <Compass size={16} /> Shimla &amp; Kufri Tours
                    </h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "12px", lineHeight: 1.5 }}>
                      Private sightseeing taxis and Himachal tour packages operated directly from Dev Homestay.
                    </p>
                    <span style={{ fontSize: "0.85rem", color: "var(--primary)", fontWeight: 700, display: "flex", alignItems: "center", gap: "4px" }}>
                      Explore Sightseeing Cabs <ArrowRight size={13} />
                    </span>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Room Specific FAQs */}
        <FAQAccordion
          title={`Frequently Asked Questions About ${room.name}`}
          subtitle={`Everything you need to know about reserving the ${room.name} at Dev Homestay Shimla.`}
          badge="Room FAQ"
          items={room.faqs}
        />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}

import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  MapPin,
  Car,
  Trees,
  Sparkles,
  ShieldCheck,
  Phone,
  MessageCircle,
  ArrowRight,
  Clock,
  Check,
  Compass,
} from "lucide-react";
import { HOMESTAY_INFO, ROOMS } from "@/data/homestayData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Homestay near Mall Road Shimla | Quiet Dudhli Stay | Dev Homestay",
  description:
    "Looking for a homestay near Mall Road Shimla? Dev Homestay in Dudhli-Bharari is just 4 km (12 mins) away. Valley-view balconies, free parking & pure veg food.",
  alternates: {
    canonical: "https://www.devhomestay.in/homestay-near-mall-road-shimla",
  },
  openGraph: {
    title: "Homestay near Mall Road Shimla (4 km) | Dev Homestay",
    description:
      "Enjoy the best of both worlds: just 4 km (12 mins) to The Mall Road and The Ridge, but nestled in peaceful deodar pine forests with free parking.",
    url: "https://www.devhomestay.in/homestay-near-mall-road-shimla",
    siteName: "Dev Homestay, Shimla",
    images: [
      {
        url: "https://www.devhomestay.in/images/rooms/hotel-panoramic-veranda-view.jpg",
        width: 1200,
        height: 630,
        alt: "Panoramic valley view from Dev Homestay, 4 km from Mall Road Shimla",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Homestay near Mall Road Shimla | Dev Homestay",
    description: "Peaceful Dudhli homestay just 4 km from Mall Road. Free parking, pure veg meals, valley balconies.",
    images: ["https://www.devhomestay.in/images/rooms/hotel-panoramic-veranda-view.jpg"],
  },
};

const MALL_ROAD_FAQS = [
  {
    q: "How far is Dev Homestay from The Mall Road and The Ridge?",
    a: "Dev Homestay is approximately 4.0 km from The Mall Road and The Ridge. Under standard traffic conditions, the drive via Bharari Road takes only 10 to 12 minutes."
  },
  {
    q: "How do guests reach Mall Road from the homestay?",
    a: "Guests can take their own car and park at the automated multi-level parking complex near the Lift/Cart Road, or hire a local taxi. Dev Homestay's in-house tour desk can arrange reliable round-trip cabs at transparent local rates."
  },
  {
    q: "Why do travelers prefer staying in Dudhli-Bharari rather than directly on Mall Road?",
    a: "Mall Road is a strictly pedestrian 'sealed' zone where personal vehicles are legally prohibited. Staying directly on Mall Road requires dragging heavy luggage uphill for several hundred meters, paying expensive off-site parking charges (often ₹500–₹1000/day), and enduring late-night crowd noise. In contrast, Dev Homestay offers drive-in access, free secure on-site parking, total pine forest tranquility, and clean mountain air."
  },
  {
    q: "Can the homestay arrange cabs for evening visits to Mall Road?",
    a: "Yes! Our front desk assists with on-call taxi pickups to drop you at the Mall Road Lift in the afternoon or evening and bring you back comfortably for dinner."
  },
  {
    q: "What other major Shimla attractions are close to the homestay?",
    a: "In addition to Mall Road (4 km), Jakhoo Temple and Ropeway are 6.2 km (20 mins), Viceregal Lodge is 6.8 km (20 mins), Chadwick Falls is 7.5 km (22 mins), and Kufri is 15 km (35 mins)."
  }
];

export default function HomestayNearMallRoadPage() {
  const whatsappUrl = `https://wa.me/${HOMESTAY_INFO.whatsapp}?text=${encodeURIComponent(
    "Hello Dev Homestay! I am looking for a homestay near Mall Road Shimla and would like to inquire about room availability."
  )}`;

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "85px", backgroundColor: "var(--bg-page)" }}>
        {/* Breadcrumbs */}
        <div style={{ backgroundColor: "var(--bg-surface)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <Breadcrumbs items={[{ label: "Homestay near Mall Road Shimla" }]} />
          </div>
        </div>

        {/* Hero Section */}
        <section style={{ padding: "48px 0 24px" }}>
          <div className="container">
            <span className="section-tag" style={{ display: "inline-flex", marginBottom: "14px" }}>
              <MapPin size={14} /> 4 km (12 mins) to Mall Road
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
              Homestay Near Mall Road Shimla – Peaceful Hill Stay in Dudhli–Bharari
            </h1>

            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "840px", lineHeight: 1.7, marginBottom: "32px" }}>
              Want easy access to Shimla&apos;s colonial charm without the traffic snarls, luggage hauling, and steep parking fees of town centre hotels? Dev Homestay offers the perfect balance: just 4 km from The Mall Road and The Ridge, surrounded by peaceful deodar cedar forests.
            </p>

            {/* Visual Mosaic */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "18px",
                marginBottom: "48px",
              }}
            >
              <div style={{ position: "relative", height: "280px", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
                <Image
                  src="/images/rooms/hotel-panoramic-veranda-view.jpg"
                  alt="Panoramic deodar valley view from veranda at Dev Homestay 4 km from Mall Road"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div style={{ position: "relative", height: "280px", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
                <Image
                  src="/images/views/panoramic-snow-mountain-view.jpg"
                  alt="Snow covered mountain ridges visible from Dudhli Bharari Shimla"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ position: "relative", height: "280px", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
                <Image
                  src="/images/rooms/bedroom-balcony-view-chairs.jpg"
                  alt="Cozy guest bedroom with private sitout balcony overlooking forest"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* In-Depth Article Content */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "48px",
                alignItems: "start",
                marginBottom: "60px",
              }}
            >
              <div>
                <h2 className="font-serif" style={{ fontSize: "1.8rem", color: "var(--primary)", marginBottom: "16px" }}>
                  The Reality of Staying on Mall Road vs. A Peaceful Nearby Homestay
                </h2>
                <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-main)", marginBottom: "18px" }}>
                  When planning a Shimla holiday, many travelers first look for accommodation situated right on The Mall Road. However, firsthand visitors quickly discover that central Shimla is designated as a pedestrian-only heritage zone. No commercial or private vehicles are permitted to drive onto Mall Road.
                </p>
                <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-main)", marginBottom: "22px" }}>
                  Guests booking hotels directly on Mall Road must leave their vehicles in overcrowded public parking garages on Cart Road (paying steep daily parking fees), queue for the municipal passenger lift, and haul suitcases up steep cobblestone inclines. Furthermore, the constant bustle of tourist shops, street performers, and late-night crowds eliminates the tranquility that people head to Himachal Pradesh to experience.
                </p>

                <h3 style={{ fontSize: "1.3rem", color: "var(--primary)", marginBottom: "14px" }}>
                  Why Dev Homestay in Dudhli–Bharari is the Smarter Choice
                </h3>
                <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-main)", marginBottom: "22px" }}>
                  Located on Bharari Bhont Road, Dev Homestay is a pleasant 10 to 12 minute drive (~4.0 km) from the heart of Shimla. Here are the distinct advantages our guests enjoy:
                </p>

                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px", marginBottom: "30px" }}>
                  <div style={{ padding: "16px", backgroundColor: "var(--bg-card)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "6px" }}>🚗 Free Drive-In Parking</h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>
                      Drive your car straight through our secure gates. No parking fees, no crowded parking garages, and no lugging bags across town.
                    </p>
                  </div>
                  <div style={{ padding: "16px", backgroundColor: "var(--bg-card)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "6px" }}>🌲 Deodar Forest Acoustics</h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>
                      Wake up to birdsong and mountain breeze instead of honking engines and bustling shopping crowds.
                    </p>
                  </div>
                  <div style={{ padding: "16px", backgroundColor: "var(--bg-card)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "6px" }}>🥘 Pure Veg Home Meals</h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>
                      Freshly made North Indian and traditional Himachali food cooked with love in the host family kitchen.
                    </p>
                  </div>
                  <div style={{ padding: "16px", backgroundColor: "var(--bg-card)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "6px" }}>🚕 Easy Cab Coordination</h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>
                      Our travel desk arranges doorstep sightseeing cabs to drop you at the Mall Road Lift and pick you up after dinner.
                    </p>
                  </div>
                </div>

                <h3 style={{ fontSize: "1.3rem", color: "var(--primary)", marginBottom: "14px" }}>
                  Key Distances from Dev Homestay
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px 0", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "10px", fontSize: "0.92rem", color: "var(--text-main)" }}>
                  <li style={{ padding: "10px 14px", backgroundColor: "var(--bg-surface)", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-color)" }}>
                    📍 <strong>The Mall Road &amp; Ridge:</strong> 4.0 km (12 mins)
                  </li>
                  <li style={{ padding: "10px 14px", backgroundColor: "var(--bg-surface)", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-color)" }}>
                    📍 <strong>Jakhoo Temple &amp; Ropeway:</strong> 6.2 km (20 mins)
                  </li>
                  <li style={{ padding: "10px 14px", backgroundColor: "var(--bg-surface)", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-color)" }}>
                    📍 <strong>Viceregal Lodge (IIAS):</strong> 6.8 km (20 mins)
                  </li>
                  <li style={{ padding: "10px 14px", backgroundColor: "var(--bg-surface)", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-color)" }}>
                    📍 <strong>Kufri Alpine Peak:</strong> 15 km (35 mins)
                  </li>
                  <li style={{ padding: "10px 14px", backgroundColor: "var(--bg-surface)", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-color)" }}>
                    📍 <strong>Shimla Railway Station:</strong> ~5 km
                  </li>
                  <li style={{ padding: "10px 14px", backgroundColor: "var(--bg-surface)", borderRadius: "var(--radius-sm)", border: "1px solid var(--border-color)" }}>
                    📍 <strong>Shimla ISBT Bus Stand:</strong> ~6 km
                  </li>
                </ul>
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
                  <ShieldCheck size={18} color="var(--primary)" /> Direct Booking Guarantee
                </span>
                <h3 className="font-serif" style={{ fontSize: "1.5rem", color: "var(--primary)", marginBottom: "12px" }}>
                  Stay 4 km from Mall Road
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "20px" }}>
                  Rooms start from Rs 2,499/night. Direct booking gives you 10% off, free cancellation up to 48 hours, free parking, and zero middleman charges.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center", padding: "14px 20px", marginBottom: "12px", textDecoration: "none" }}
                >
                  <MessageCircle size={18} /> Reserve via WhatsApp (10% Off)
                </a>

                <a
                  href={`tel:${HOMESTAY_INFO.phone}`}
                  className="btn btn-outline"
                  style={{ width: "100%", justifyContent: "center", padding: "12px 20px", textDecoration: "none" }}
                >
                  <Phone size={16} /> Call: {HOMESTAY_INFO.phone}
                </a>

                <div style={{ marginTop: "24px", paddingTop: "18px", borderTop: "1px solid var(--border-color)", fontSize: "0.85rem", color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: "6px" }}>
                  <div>🏨 <strong>Est:</strong> 2015 | 30+ Yrs 5-Star Exp</div>
                  <div>🚗 <strong>Parking:</strong> Free On-Site Drive-In</div>
                  <div>🕒 <strong>Check-in:</strong> 12 PM | Check-out: 11 AM</div>
                </div>
              </div>
            </div>

            {/* Internal Links */}
            <div style={{ padding: "36px 0", borderTop: "1px solid var(--border-color)" }}>
              <h3 className="font-serif" style={{ fontSize: "1.4rem", color: "var(--primary)", marginBottom: "16px" }}>
                Discover Accommodations &amp; Travel Guides
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
                <Link href="/rooms/cedar-view-deluxe-room" style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={{ backgroundColor: "var(--bg-card)", padding: "18px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "4px" }}>Cedar View Deluxe Room</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>Valley view balcony from Rs 2,499/night.</p>
                  </div>
                </Link>
                <Link href="/rooms/family-suite" style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={{ backgroundColor: "var(--bg-card)", padding: "18px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "4px" }}>Cozy Family Suite with Kitchen</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>Two rooms with private kitchen, sleeps 4–6.</p>
                  </div>
                </Link>
                <Link href="/pure-vegetarian-homestay-shimla" style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={{ backgroundColor: "var(--bg-card)", padding: "18px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "4px" }}>Pure Veg Dining</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>100% vegetarian homemade mountain food.</p>
                  </div>
                </Link>
                <Link href="/blog/how-to-reach-dudhli-bharari-shimla" style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={{ backgroundColor: "var(--bg-card)", padding: "18px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "4px" }}>How to Reach Guide</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>Directions from Mall Road, ISBT & Station.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Mall Road FAQs */}
        <FAQAccordion
          title="Mall Road & Location FAQs"
          subtitle="Clear answers about traveling between Dev Homestay in Dudhli and Shimla Mall Road."
          badge="Location FAQ"
          items={MALL_ROAD_FAQS}
        />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}

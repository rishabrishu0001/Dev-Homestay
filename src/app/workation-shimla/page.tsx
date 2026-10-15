import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Wifi,
  ShieldCheck,
  Phone,
  MessageCircle,
} from "lucide-react";
import { HOMESTAY_INFO } from "@/data/homestayData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Workation in Shimla with Fast Wi-Fi | Quiet Mountain Stay | Dev Homestay",
  description:
    "Plan your workation in Shimla at Dev Homestay. High-speed fiber Wi-Fi, mountain-facing balconies, electric heating, pure veg home food & weekly stay discounts.",
  alternates: {
    canonical: "https://www.devhomestay.in/workation-shimla",
  },
  openGraph: {
    title: "Workation in Shimla with Fast Fiber Wi-Fi | Dev Homestay",
    description:
      "Work from a peaceful pine homestay in Shimla. High-speed optical fiber Wi-Fi, deodar valley views, 100% pure veg home food & peaceful balconies.",
    url: "https://www.devhomestay.in/workation-shimla",
    siteName: "Dev Homestay, Shimla",
    images: [
      {
        url: "https://www.devhomestay.in/images/rooms/room-coffee-table-seating-hall.jpg",
        width: 1200,
        height: 630,
        alt: "Workation workspace with wooden table and coffee seating at Dev Homestay Shimla",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Workation in Shimla with Fast Wi-Fi | Dev Homestay",
    description: "Quiet mountain workation in Shimla with high-speed fiber Wi-Fi, home-cooked food, and valley balconies.",
    images: ["https://www.devhomestay.in/images/rooms/room-coffee-table-seating-hall.jpg"],
  },
};

const WORKATION_FAQS = [
  {
    q: "What is the Wi-Fi speed and reliability at Dev Homestay?",
    a: "We provide high-speed optical fiber broadband Wi-Fi across the property. The connection easily supports smooth Zoom/Teams HD video conferences, large file uploads/downloads, and simultaneous multi-device streaming."
  },
  {
    q: "Are there comfortable in-room desks and seating areas?",
    a: "Yes. All guest rooms feature comfortable wooden seating tables and chairs. In addition, our attached balconies and open-air covered veranda terrace provide serene outdoor laptop workspaces facing the pine forest."
  },
  {
    q: "Are special weekly or monthly workation rates available?",
    a: "Yes. We offer attractive discounted tariffs for extended workation bookings of 7 nights or longer. Please contact us directly via WhatsApp or phone to discuss custom long-stay packages."
  },
  {
    q: "Is there heating in the rooms during chilly mornings and evenings?",
    a: "Yes. All rooms come with electric room heaters, thick mountain thermal bedding, and 24/7 hot water in ensuite bathrooms, ensuring you stay productive and warm year-round."
  }
];

export default function WorkationShimlaPage() {
  const whatsappUrl = `https://wa.me/${HOMESTAY_INFO.whatsapp}?text=${encodeURIComponent(
    "Hello Dev Homestay! I am interested in booking a workation in Shimla with fast Wi-Fi and would like to ask about weekly rates."
  )}`;

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "85px", backgroundColor: "var(--bg-page)" }}>
        {/* Breadcrumbs */}
        <div style={{ backgroundColor: "var(--bg-surface)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <Breadcrumbs items={[{ label: "Workation in Shimla" }]} />
          </div>
        </div>

        {/* Hero Section */}
        <section style={{ padding: "48px 0 24px" }}>
          <div className="container">
            <span className="section-tag" style={{ display: "inline-flex", marginBottom: "14px" }}>
              <Wifi size={14} /> High-Speed Fiber Internet &amp; Quiet Mountain Living
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
              Workation in Shimla – Work from a Quiet Homestay with Fast Wi-Fi
            </h1>

            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "840px", lineHeight: 1.7, marginBottom: "32px" }}>
              Swap stressful urban home offices for crisp pine breezes and mist-clad Himalayan valley views. Dev Homestay in Dudhli–Bharari offers dependable high-speed fiber broadband, peaceful balconies, pure vegetarian home-cooked meals, and weekly stay rates.
            </p>

            {/* Photo Mosaic */}
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
                  src="/images/rooms/room-coffee-table-seating-hall.jpg"
                  alt="Quiet workation lounge table and comfortable chairs inside guest room"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div style={{ position: "relative", height: "280px", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
                <Image
                  src="/images/rooms/bedroom-sunlit-forest-window.jpg"
                  alt="Sunlit room with work desk facing pine forest canopy"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ position: "relative", height: "280px", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
                <Image
                  src="/images/rooms/hotel-panoramic-veranda-view.jpg"
                  alt="Open-air veranda walkway for working in fresh mountain air"
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
                  Productivity Meets Peaceful Himalayan Mountain Living
                </h2>
                <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-main)", marginBottom: "18px" }}>
                  A successful remote workation requires two essentials: uninterrupted high-speed internet and an environment free from constant noise and interruptions. Dev Homestay is purpose-built for professionals, digital nomads, freelancers, and remote engineering teams seeking a peaceful mountain retreat.
                </p>
                <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-main)", marginBottom: "22px" }}>
                  Located on Bharari Bhont Road in Dudhli, our homestay is completely removed from city traffic. Instead of car honks, your workday is accompanied by birdsong and the gentle rustle of deodar trees. Optical fiber Wi-Fi reaches every room and balcony, allowing you to attend uninterrupted video conferences while gazing out over Himalayan ridgelines.
                </p>

                <h3 style={{ fontSize: "1.3rem", color: "var(--primary)", marginBottom: "14px" }}>
                  Workation Amenities at Dev Homestay
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px", marginBottom: "30px" }}>
                  <div style={{ padding: "16px", backgroundColor: "var(--bg-card)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "6px" }}>🌐 Fiber Broadband Wi-Fi</h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>
                      High-speed optical fiber Wi-Fi throughout all rooms and balconies, tested for seamless video meetings and cloud workflows.
                    </p>
                  </div>
                  <div style={{ padding: "16px", backgroundColor: "var(--bg-card)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "6px" }}>☕ Wholesome Home Food</h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>
                      Zero meal-prep stress. Enjoy 100% pure vegetarian home-cooked meals and hot herbal tea on your work schedule.
                    </p>
                  </div>
                  <div style={{ padding: "16px", backgroundColor: "var(--bg-card)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "6px" }}>🔥 Heating &amp; 24/7 Hot Water</h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>
                      Electric room heaters, thermal bedding, and instant geysers ensure a warm, comfortable stay through all mountain seasons.
                    </p>
                  </div>
                  <div style={{ padding: "16px", backgroundColor: "var(--bg-card)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "6px" }}>🌲 Nature Trails for Breaks</h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>
                      Step outside after your calls for 20-minute deodar forest walks and recharge your mind with fresh Himalayan air.
                    </p>
                  </div>
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
                  <ShieldCheck size={18} color="var(--primary)" /> Workation Friendly Stay
                </span>
                <h3 className="font-serif" style={{ fontSize: "1.5rem", color: "var(--primary)", marginBottom: "12px" }}>
                  Inquire for Weekly Workation Rates
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "20px" }}>
                  Nightly rooms start from Rs 2,499. Discounted custom packages available for 7+ nights with high-speed fiber Wi-Fi, home-cooked vegetarian meals, and free parking.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center", padding: "14px 20px", marginBottom: "12px", textDecoration: "none" }}
                >
                  <MessageCircle size={18} /> Inquire Workation via WhatsApp
                </a>

                <a
                  href={`tel:${HOMESTAY_INFO.phone}`}
                  className="btn btn-outline"
                  style={{ width: "100%", justifyContent: "center", padding: "12px 20px", textDecoration: "none" }}
                >
                  <Phone size={16} /> Call: {HOMESTAY_INFO.phone}
                </a>

                <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid var(--border-color)", fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  Need multiple rooms or private kitchen suites for a remote team? Contact us directly!
                </div>
              </div>
            </div>

            {/* Internal Links */}
            <div style={{ padding: "36px 0", borderTop: "1px solid var(--border-color)" }}>
              <h3 className="font-serif" style={{ fontSize: "1.4rem", color: "var(--primary)", marginBottom: "16px" }}>
                Explore Room Options for Workations
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
                <Link href="/rooms/cedar-view-deluxe-room" style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={{ backgroundColor: "var(--bg-card)", padding: "18px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "4px" }}>Cedar View Deluxe Room</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>Valley-view balcony and desk space from Rs 2,499.</p>
                  </div>
                </Link>
                <Link href="/rooms/family-suite" style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={{ backgroundColor: "var(--bg-card)", padding: "18px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "4px" }}>Cozy Family Suite with Kitchen</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>420 sq ft with private kitchenette, ideal for extended work stays.</p>
                  </div>
                </Link>
                <Link href="/pure-vegetarian-homestay-shimla" style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={{ backgroundColor: "var(--bg-card)", padding: "18px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "4px" }}>Pure Vegetarian Dining</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>Healthy home-cooked meals every day.</p>
                  </div>
                </Link>
                <Link href="/blog/workation-in-shimla-guide" style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={{ backgroundColor: "var(--bg-card)", padding: "18px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "4px" }}>Workation Planning Guide</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>Tips on weekly schedules, packing, and connectivity.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Workation FAQs */}
        <FAQAccordion
          title="Workation & Wi-Fi FAQs"
          subtitle="Answers to common questions from remote workers, digital nomads, and extended guests."
          badge="Workation FAQ"
          items={WORKATION_FAQS}
        />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}

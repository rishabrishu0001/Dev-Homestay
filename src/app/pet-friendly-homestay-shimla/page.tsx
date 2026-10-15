import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  Heart,
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
  title: "Pet Friendly Homestay in Shimla | Stay with Dog | Dev Homestay",
  description:
    "Looking for a pet friendly homestay in Shimla? Dev Homestay in Dudhli welcomes dogs with private balconies, deodar forest trails, and free secure parking.",
  alternates: {
    canonical: "https://www.devhomestay.in/pet-friendly-homestay-shimla",
  },
  openGraph: {
    title: "Pet Friendly Homestay in Shimla | Dev Homestay",
    description:
      "Travel with your dog to Shimla! Open deodar forest trails, spacious balconies, and warm family hospitality at Dev Homestay.",
    url: "https://www.devhomestay.in/pet-friendly-homestay-shimla",
    siteName: "Dev Homestay, Shimla",
    images: [
      {
        url: "https://www.devhomestay.in/images/views/pet-friendly-dog-balcony-hall.jpg",
        width: 1200,
        height: 630,
        alt: "Friendly pet dog relaxing on balcony at Dev Homestay Shimla",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pet Friendly Homestay in Shimla | Dev Homestay",
    description: "Welcome your dog to Shimla! Peaceful forest trails, balconies, and mountain hospitality.",
    images: ["https://www.devhomestay.in/images/views/pet-friendly-dog-balcony-hall.jpg"],
  },
};

const PET_FAQS = [
  {
    q: "Are all dog breeds and pet sizes welcome?",
    a: "Yes. We welcome dogs of all breeds and sizes as well as cats. We appreciate prior notice during booking so we can allocate a room with convenient ground or direct balcony access."
  },
  {
    q: "Are there good walking trails for pets around the homestay?",
    a: "Yes! Dev Homestay is situated directly beside peaceful deodar pine forest paths and quiet village roads in Dudhli–Bharari. Unlike the crowded Mall Road (where walking dogs can be stressful amidst tourist throngs), our surroundings provide serene, safe, nature-filled walking trails."
  },
  {
    q: "Can the homestay prepare simple pet meals?",
    a: "Our kitchen is 100% vegetarian, but we are happy to provide boiled rice, plain curd, boiled potatoes, or warm milk for your pet upon request. If your dog has specific non-vegetarian packaged food, you are welcome to bring it with you."
  },
  {
    q: "Is there any extra pet fee?",
    a: "We do not charge exorbitant pet surcharges. A nominal cleaning fee may apply for deep sanitation depending on pet size and duration of stay. Please check directly with us when booking."
  }
];

export default function PetFriendlyPage() {
  const whatsappUrl = `https://wa.me/${HOMESTAY_INFO.whatsapp}?text=${encodeURIComponent(
    "Hello Dev Homestay! I am planning a trip to Shimla with my pet and would like to check room availability."
  )}`;

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "85px", backgroundColor: "var(--bg-page)" }}>
        {/* Breadcrumbs */}
        <div style={{ backgroundColor: "var(--bg-surface)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <Breadcrumbs items={[{ label: "Pet Friendly Homestay Shimla" }]} />
          </div>
        </div>

        {/* Hero Section */}
        <section style={{ padding: "48px 0 24px" }}>
          <div className="container">
            <span className="section-tag" style={{ display: "inline-flex", marginBottom: "14px" }}>
              <Heart size={14} color="#c9713e" /> Paws &amp; Pine Needles Welcome
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
              Pet Friendly Homestay in Shimla – Stay with Your Dog in the Hills
            </h1>

            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "840px", lineHeight: 1.7, marginBottom: "32px" }}>
              Don&apos;t leave your furry family members behind in boarding kennels. At Dev Homestay in Dudhli–Bharari, pets and dogs are warmly welcomed to explore crisp Himalayan air, open deodar forest trails, and scenic balconies.
            </p>

            {/* Photo Gallery */}
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
                  src="/images/views/pet-friendly-dog-balcony-hall.jpg"
                  alt="Friendly furry dog walking towards the sunny balcony at Dev Homestay Shimla"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div style={{ position: "relative", height: "280px", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
                <Image
                  src="/images/views/snowy-pine-forest-trail.jpg"
                  alt="Pine forest walking trail right outside Dev Homestay gates"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ position: "relative", height: "280px", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
                <Image
                  src="/images/rooms/hotel-panoramic-veranda-view.jpg"
                  alt="Spacious guest veranda and balcony terrace at Dev Homestay"
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
                  A Mountain Holiday Your Dog Will Love as Much as You
                </h2>
                <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-main)", marginBottom: "18px" }}>
                  Traveling with a pet to hill stations often presents major obstacles: many luxury hotels strictly ban animals, and central city streets are noisy, steep, and packed with vehicular traffic. Dev Homestay offers a refreshing departure from that model. Because we are a family-run mountain homestay located on Bharari Bhont Road in Dudhli (4 km away from Mall Road), our property is nestled in quiet deodar cedar woodlands.
                </p>
                <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-main)", marginBottom: "22px" }}>
                  Here, dogs have immediate access to nature. Step out of the property gates onto unpaved forest trails where your dog can run on soft pine needles, discover new mountain scents, and soak in morning sunshine. Our wide balconies and open outdoor verandas provide plenty of lounging space where pets can rest comfortably right beside their human companions.
                </p>

                <h3 style={{ fontSize: "1.3rem", color: "var(--primary)", marginBottom: "14px" }}>
                  Why Pet Parents Choose Dev Homestay
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px", marginBottom: "28px" }}>
                  <div style={{ padding: "16px", backgroundColor: "var(--bg-card)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "6px" }}>Pine Forest Trails</h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>
                      Peaceful walking paths under Himalayan deodar trees right from our front gate, away from honking cars and steep town stairs.
                    </p>
                  </div>
                  <div style={{ padding: "16px", backgroundColor: "var(--bg-card)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "6px" }}>Airy Balconies</h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>
                      Attached mountain sitouts where pets can safely bask in morning sun while you enjoy fresh tea and valley views.
                    </p>
                  </div>
                  <div style={{ padding: "16px", backgroundColor: "var(--bg-card)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "6px" }}>Drive-In Free Parking</h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>
                      Drive your car straight into our secure on-site parking so you don&apos;t have to walk your pet through crowded parking ramps or busy streets.
                    </p>
                  </div>
                  <div style={{ padding: "16px", backgroundColor: "var(--bg-card)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "6px" }}>Cozy Family Suites</h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>
                      Our 420 sq ft suite with private kitchen provides ample room for pet bedding, food bowls, and entire family comfort.
                    </p>
                  </div>
                </div>

                <h3 style={{ fontSize: "1.3rem", color: "var(--primary)", marginBottom: "14px" }}>
                  Helpful Guidelines for Traveling to Shimla with Dogs
                </h3>
                <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-main)", marginBottom: "16px" }}>
                  To ensure comfort for all guests and local wildlife, we ask pet owners to keep dogs leashed in common outdoor corridors and when walking on village trails. Please carry your pet&apos;s vaccination records, familiar bedding, and favorite food bowls. Winter temperatures in Shimla drop significantly from December to February; our rooms feature electric room heaters and thermal bedding to keep you and your pet warm.
                </p>
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
                  <ShieldCheck size={18} color="var(--primary)" /> Verified Pet-Friendly Stay
                </span>
                <h3 className="font-serif" style={{ fontSize: "1.5rem", color: "var(--primary)", marginBottom: "12px" }}>
                  Book a Pet-Friendly Room
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "20px" }}>
                  Direct bookings receive 10% off, free parking, and zero booking fees. Please mention your pet breed and size when contacting us.
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
                  <Phone size={16} /> Call Host: {HOMESTAY_INFO.phone}
                </a>

                <div style={{ marginTop: "20px", paddingTop: "16px", borderTop: "1px solid var(--border-color)", fontSize: "0.85rem", color: "var(--text-muted)" }}>
                  Need tips on pet travel routes from Delhi or Chandigarh? Ask our host directly!
                </div>
              </div>
            </div>

            {/* Internal Links */}
            <div style={{ padding: "36px 0", borderTop: "1px solid var(--border-color)" }}>
              <h3 className="font-serif" style={{ fontSize: "1.4rem", color: "var(--primary)", marginBottom: "16px" }}>
                Explore Room Options for You &amp; Your Dog
              </h3>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px" }}>
                <Link href="/rooms/family-suite" style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={{ backgroundColor: "var(--bg-card)", padding: "18px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "4px" }}>Cozy Family Suite with Kitchen</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>420 sq ft with private kitchenette, ideal for dogs.</p>
                  </div>
                </Link>
                <Link href="/rooms/valley-view-room" style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={{ backgroundColor: "var(--bg-card)", padding: "18px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "4px" }}>Valley View Room</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>Private balcony with mountain views from Rs 2,799.</p>
                  </div>
                </Link>
                <Link href="/pure-vegetarian-homestay-shimla" style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={{ backgroundColor: "var(--bg-card)", padding: "18px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "4px" }}>100% Pure Vegetarian Dining</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>Home-cooked food for the entire family.</p>
                  </div>
                </Link>
                <Link href="/blog/pet-friendly-travel-shimla-guide" style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={{ backgroundColor: "var(--bg-card)", padding: "18px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "4px" }}>Pet Travel Guide to Shimla</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>Practical tips on car drives, vets, and dog gear.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Pet FAQs */}
        <FAQAccordion
          title="Pet Friendly Stays FAQs"
          subtitle="Everything you need to know about bringing your dog to Dev Homestay Shimla."
          badge="Pet FAQs"
          items={PET_FAQS}
        />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}

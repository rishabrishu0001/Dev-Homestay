import React from "react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import {
  UtensilsCrossed,
  Check,
  Sparkles,
  ShieldCheck,
  Heart,
  Phone,
  MessageCircle,
  ArrowRight,
  Clock,
  MapPin,
  CalendarCheck,
} from "lucide-react";
import { HOMESTAY_INFO, ROOMS } from "@/data/homestayData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Pure Vegetarian Homestay in Shimla | Home-Cooked Food | Dev Homestay",
  description:
    "Looking for a 100% pure vegetarian homestay in Shimla? Dev Homestay in Dudhli offers authentic home-cooked Himachali meals, deodar forest views, and free parking.",
  alternates: {
    canonical: "https://www.devhomestay.in/pure-vegetarian-homestay-shimla",
  },
  openGraph: {
    title: "100% Pure Vegetarian Homestay in Shimla | Dev Homestay",
    description:
      "Wholesome home-cooked vegetarian and Himachali meals served fresh from our family kitchen. Quiet pine valley setting 4 km from Mall Road.",
    url: "https://www.devhomestay.in/pure-vegetarian-homestay-shimla",
    siteName: "Dev Homestay, Shimla",
    images: [
      {
        url: "https://www.devhomestay.in/images/views/balcony-mountain-maggi-view.jpg",
        width: 1200,
        height: 630,
        alt: "Pure vegetarian mountain food enjoyed on balcony at Dev Homestay Shimla",
      },
    ],
    locale: "en_IN",
    type: "article",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pure Vegetarian Homestay in Shimla | Dev Homestay",
    description:
      "Wholesome home-cooked vegetarian meals, clean utensils, and family hospitality in Dudhli, Shimla.",
    images: ["https://www.devhomestay.in/images/views/balcony-mountain-maggi-view.jpg"],
  },
};

const VEG_FAQS = [
  {
    q: "Is non-vegetarian food cooked or allowed on the premises?",
    a: "No. Dev Homestay is strictly and exclusively 100% pure vegetarian. No meat, poultry, fish, seafood, or eggs are cooked in our kitchen or allowed inside the property. Jain and satvik dietary requests can also be accommodated with prior notice."
  },
  {
    q: "What types of meals are prepared in the homestay kitchen?",
    a: "Our family kitchen prepares fresh North Indian and traditional Himachali homestyle recipes. Breakfast options include stuffed paranthas (aloo, paneer, gobhi) with fresh curd, puri bhaji, poha, and herbal tea. Lunch and dinner feature freshly rolled rotis, fragrant basmati rice, lentils (dal tadka, rajma, chana), and seasonal mountain vegetables."
  },
  {
    q: "Can we get meals customized for children or elderly family members?",
    a: "Yes. Because every dish is prepared fresh to order in a home kitchen rather than an industrial commercial buffet, we can easily adjust spice levels, salt, or prepare simple khichdi, curd rice, or warm milk for toddlers and elders."
  },
  {
    q: "Do any rooms have a private kitchenette for self-cooking?",
    a: "Yes. Our Cozy Family Suite (420 sq ft, sleeping 4 to 6 guests) comes with a dedicated private kitchen equipped with an LPG gas stove, cookware, plates, and utensils for guests who wish to prepare their own vegetarian tea, snacks, or baby food."
  },
  {
    q: "Are the kitchen ingredients locally sourced?",
    a: "Yes. We source fresh vegetables, mountain dairy, pure ghee, and local spices directly from Shimla and neighbouring Himachali farming pockets to deliver honest, nourishing meals."
  }
];

export default function PureVegetarianPage() {
  const whatsappUrl = `https://wa.me/${HOMESTAY_INFO.whatsapp}?text=${encodeURIComponent(
    "Hello Dev Homestay! I am interested in booking a stay at your pure vegetarian homestay in Shimla."
  )}`;

  return (
    <>
      <Navbar />

      <main style={{ paddingTop: "85px", backgroundColor: "var(--bg-page)" }}>
        {/* Breadcrumbs */}
        <div style={{ backgroundColor: "var(--bg-surface)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <Breadcrumbs items={[{ label: "Pure Vegetarian Homestay Shimla" }]} />
          </div>
        </div>

        {/* Hero Section */}
        <section style={{ padding: "48px 0 24px" }}>
          <div className="container">
            <span className="section-tag" style={{ display: "inline-flex", marginBottom: "14px" }}>
              <UtensilsCrossed size={14} /> 100% Pure Vegetarian Hospitality
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
              Pure Vegetarian Homestay in Shimla – Authentic Home-Cooked Food
            </h1>

            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "840px", lineHeight: 1.7, marginBottom: "32px" }}>
              Finding genuinely pure vegetarian, hygienic home food in Shimla can be challenging for mindful travelers and families. At Dev Homestay in Dudhli–Bharari, our family table is 100% vegetarian, free from commercial hotel additives, and seasoned with authentic Himachali warmth.
            </p>

            {/* Gallery Mosaic */}
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
                  src="/images/views/balcony-mountain-maggi-view.jpg"
                  alt="Hot vegetarian mountain meal on balcony overlooking Himalayan valley"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                  priority
                />
              </div>
              <div style={{ position: "relative", height: "280px", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
                <Image
                  src="/images/rooms/hotel-panoramic-veranda-view.jpg"
                  alt="Outdoor veranda seating area where vegetarian breakfast is served"
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div style={{ position: "relative", height: "280px", borderRadius: "var(--radius-lg)", overflow: "hidden" }}>
                <Image
                  src="/images/views/morning-sunbeams-pine-mist.jpg"
                  alt="Sunlit morning pine forest view outside Dev Homestay dining room"
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
                  Why Pure Vegetarian Travelers Choose Dev Homestay
                </h2>
                <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-main)", marginBottom: "18px" }}>
                  For vegetarian families, Jain travelers, and health-conscious guests visiting Himachal Pradesh, hotel dining often creates anxiety around shared cooking oils, cross-contamination, and heavy restaurant gravies. Dev Homestay was founded in 2015 by hospitality professionals with over 30 years of five-star luxury hotel leadership. We bring five-star hygiene standards together with the purity of a traditional Indian household kitchen.
                </p>
                <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-main)", marginBottom: "24px" }}>
                  Our kitchen is entirely meat-free, poultry-free, and fish-free. Utensils, cookware, and storage are dedicated exclusively to vegetarian preparations. When you sit down for breakfast or dinner, you are not receiving reheated banquet food; you are enjoying warm phulkas, slow-simmered lentils, and aromatic seasonal vegetables cooked specially for your family.
                </p>

                <h3 style={{ fontSize: "1.3rem", color: "var(--primary)", marginBottom: "14px" }}>
                  What You Will Savor at Our Family Table
                </h3>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "14px", marginBottom: "28px" }}>
                  <div style={{ padding: "16px", backgroundColor: "var(--bg-card)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "6px" }}>Mountain Breakfast</h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>
                      Crisp stuffed paranthas (aloo, paneer, mix veg), served with homemade white butter, fresh dahi, spicy mango pickle, and steaming ginger-cardamom chai.
                    </p>
                  </div>
                  <div style={{ padding: "16px", backgroundColor: "var(--bg-card)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "6px" }}>Homestyle Dinner Thali</h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>
                      Warm rotis, basmati jeera rice, yellow dal tadka, rich Himachali rajma madra, fresh paneer sabzi, and crisp local salad.
                    </p>
                  </div>
                  <div style={{ padding: "16px", backgroundColor: "var(--bg-card)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "6px" }}>Balcony Tea &amp; Snacks</h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>
                      Piping hot vegetable pakoras, roasted pahadi papad, and masala chai enjoyed on your private valley-view balcony overlooking cedar trees.
                    </p>
                  </div>
                  <div style={{ padding: "16px", backgroundColor: "var(--bg-card)", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "6px" }}>Satvik &amp; Jain Friendly</h4>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", margin: 0, lineHeight: 1.6 }}>
                      Meals prepared without onion or garlic upon prior request, maintaining complete spiritual and dietary peace of mind.
                    </p>
                  </div>
                </div>

                <h3 style={{ fontSize: "1.3rem", color: "var(--primary)", marginBottom: "14px" }}>
                  Private Kitchen Option in Our Cozy Family Suite
                </h3>
                <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-main)", marginBottom: "20px" }}>
                  Traveling with infants, young children, or seniors who need custom meals at odd hours? Our 420 sq ft Cozy Family Suite includes its own fully equipped kitchen with an LPG gas stove, water filter, cookware, and dining sets. This allows families to prepare baby cereal, boiling milk, or herbal teas at their convenience while still enjoying meals from our family kitchen.
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
                <div style={{ display: "inline-flex", alignItems: "center", gap: "6px", color: "var(--primary)", fontWeight: 700, fontSize: "0.9rem", marginBottom: "8px" }}>
                  <ShieldCheck size={18} color="var(--primary)" /> 100% Pure Vegetarian Stay
                </div>
                <h3 className="font-serif" style={{ fontSize: "1.5rem", color: "var(--primary)", marginBottom: "12px" }}>
                  Book Direct &amp; Save 10%
                </h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "20px" }}>
                  Rooms start from Rs 2,499/night. Direct bookings via WhatsApp or call guarantee zero OTA commission, complimentary Wi-Fi, free on-site parking, and direct access to our pure vegetarian kitchen.
                </p>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                  style={{ width: "100%", justifyContent: "center", padding: "14px 20px", marginBottom: "12px", textDecoration: "none" }}
                >
                  <MessageCircle size={18} /> Book via WhatsApp (10% Off)
                </a>

                <a
                  href={`tel:${HOMESTAY_INFO.phone}`}
                  className="btn btn-outline"
                  style={{ width: "100%", justifyContent: "center", padding: "12px 20px", textDecoration: "none" }}
                >
                  <Phone size={16} /> Call: {HOMESTAY_INFO.phone}
                </a>

                <div style={{ marginTop: "24px", paddingTop: "18px", borderTop: "1px solid var(--border-color)", fontSize: "0.85rem", color: "var(--text-muted)", display: "flex", flexDirection: "column", gap: "8px" }}>
                  <div>📍 <strong>Location:</strong> Dudhli, Shimla (4 km to Mall Road)</div>
                  <div>🚗 <strong>Parking:</strong> Free secure on-site space</div>
                  <div>🕒 <strong>Check-in:</strong> 12 PM | Check-out: 11 AM</div>
                </div>
              </div>
            </div>

            {/* Internal Links to Rooms & Blog */}
            <div style={{ padding: "36px 0", borderTop: "1px solid var(--border-color)" }}>
              <h3 className="font-serif" style={{ fontSize: "1.4rem", color: "var(--primary)", marginBottom: "16px" }}>
                Explore Accommodations &amp; Nearby Sightseeing
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
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>Private kitchen for self cooking, sleeps 4–6.</p>
                  </div>
                </Link>
                <Link href="/homestay-near-mall-road-shimla" style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={{ backgroundColor: "var(--bg-card)", padding: "18px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "4px" }}>Homestay Near Mall Road</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>Peaceful stay 4 km from Mall Road.</p>
                  </div>
                </Link>
                <Link href="/blog/pure-vegetarian-travel-shimla-guide" style={{ textDecoration: "none", color: "inherit" }}>
                  <div style={{ backgroundColor: "var(--bg-card)", padding: "18px", borderRadius: "var(--radius-md)", border: "1px solid var(--border-color)" }}>
                    <h4 style={{ fontSize: "1rem", color: "var(--primary)", marginBottom: "4px" }}>Vegetarian Travel Guide</h4>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", margin: 0 }}>Read what and where to eat in Shimla.</p>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Veg FAQs Accordion */}
        <FAQAccordion
          title="Pure Vegetarian Dining FAQs"
          subtitle="Answers to common dietary and dining questions from vegetarian travelers at Dev Homestay Shimla."
          badge="Dining FAQ"
          items={VEG_FAQS}
        />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}

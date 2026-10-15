"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Navigation,
  MessageCircle,
  Clock,
  Car,
  Plane,
  Train,
  Bus,
  Check,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { HOMESTAY_INFO, HOW_TO_REACH } from "@/data/homestayData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQAccordion } from "@/components/FAQAccordion";
import { StructuredData } from "@/components/StructuredData";
import { trackEvent } from "@/lib/analytics";

const CONTACT_FAQS = [
  {
    q: "What is the exact address and GPS location of Dev Homestay?",
    a: "Dev Homestay is located at: Bharari Bhont Road, Ragyan, Dudhli, Shimla, Himachal Pradesh - 171003. GPS coordinates are: 31.1215° N, 77.1820° E. It has direct, paved drive-in road access with free parking inside the property."
  },
  {
    q: "Can the homestay arrange taxi pickups from Shimla railway station or ISBT?",
    a: "Yes. We offer coordinated taxi pickups from Shimla Railway Station (~5 km away) and Shimla ISBT Bus Stand (~6 km away). Please notify us with your arrival details via WhatsApp or phone in advance."
  },
  {
    q: "How far is Dev Homestay from Chandigarh International Airport?",
    a: "Chandigarh International Airport (IXC) is approximately 125 km away, taking about 3.5 hours by car along the smooth Himalayan Expressway (NH-05). We can arrange private pre-booked airport pickup cabs directly to our door."
  },
  {
    q: "What are your check-in and check-out times?",
    a: "Check-in begins at 12:00 PM (noon) and check-out is at 11:00 AM. If you arrive early while your room is being prepared, you are welcome to relax on our sunny veranda and enjoy fresh mountain tea."
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    dates: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const googleMapsDirectionsUrl = `https://www.google.com/maps/dir/?api=1&destination=31.1215,77.1820`;
  const whatsappUrl = `https://wa.me/${HOMESTAY_INFO.whatsapp}?text=${encodeURIComponent(
    "Hello Dev Homestay! I would like to get directions or inquire about room bookings."
  )}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("inquiry_submit", {
      name: formData.name,
      phone: formData.phone,
      dates: formData.dates,
    });
    setSubmitted(true);
  };

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    name: "Dev Homestay, Shimla",
    url: "https://www.devhomestay.in/contact",
    telephone: "+918447056787",
    email: "devhomestay2@gmail.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bharari Bhont Road, Ragyan, Dudhli",
      addressLocality: "Shimla",
      addressRegion: "Himachal Pradesh",
      postalCode: "171003",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 31.1215,
      longitude: 77.1820,
    },
  };

  return (
    <>
      <StructuredData data={contactSchema} />
      <Navbar />

      <main style={{ paddingTop: "85px", backgroundColor: "var(--bg-page)" }}>
        {/* Breadcrumbs */}
        <div style={{ backgroundColor: "var(--bg-surface)", borderBottom: "1px solid var(--border-color)" }}>
          <div className="container">
            <Breadcrumbs items={[{ label: "Contact & Location" }]} />
          </div>
        </div>

        {/* Hero Header */}
        <section style={{ padding: "48px 0 24px" }}>
          <div className="container">
            <span className="section-tag" style={{ display: "inline-flex", marginBottom: "14px" }}>
              <MapPin size={14} /> Location &amp; Directions
            </span>

            <h1
              className="font-serif"
              style={{
                fontSize: "clamp(2.1rem, 4.5vw, 3.2rem)",
                color: "var(--primary)",
                lineHeight: 1.2,
                marginBottom: "16px",
                fontWeight: 700,
              }}
            >
              Contact Dev Homestay, Shimla – Location &amp; Directions
            </h1>

            <p style={{ fontSize: "1.15rem", color: "var(--text-muted)", maxWidth: "800px", lineHeight: 1.65, marginBottom: "36px" }}>
              Reach out directly to Dev &amp; Family for room availability, driving instructions, sightseeing cabs, and direct booking discounts.
            </p>

            {/* Contact Details & Inquiry Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
                gap: "36px",
                marginBottom: "50px",
              }}
            >
              {/* NAP & Direct Contacts Card */}
              <div
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderRadius: "var(--radius-lg)",
                  padding: "32px 28px",
                  border: "1px solid var(--border-color)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <h2 className="font-serif" style={{ fontSize: "1.5rem", color: "var(--primary)", marginBottom: "20px" }}>
                  Dev Homestay Details
                </h2>

                <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "32px" }}>
                  <div style={{ display: "flex", gap: "14px" }}>
                    <MapPin size={22} color="var(--primary)" style={{ flexShrink: 0, marginTop: "2px" }} />
                    <div>
                      <strong style={{ color: "var(--primary)", display: "block", marginBottom: "4px" }}>Address (NAP):</strong>
                      <span style={{ color: "var(--text-main)", lineHeight: 1.6, display: "block" }}>
                        Bharari Bhont Road, Ragyan, Dudhli, Shimla, Himachal Pradesh - 171003
                      </span>
                      <span style={{ fontSize: "0.85rem", color: "var(--accent)", marginTop: "4px", display: "block" }}>
                        GPS Coordinates: 31.1215° N, 77.1820° E
                      </span>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "14px" }}>
                    <Phone size={22} color="var(--primary)" style={{ flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: "var(--primary)", display: "block", marginBottom: "4px" }}>Phone &amp; WhatsApp:</strong>
                      <a
                        href={`tel:${HOMESTAY_INFO.phone}`}
                        onClick={() => trackEvent("phone_click", { source: "contact_page" })}
                        style={{ color: "var(--primary)", textDecoration: "none", fontWeight: 600, fontSize: "1.05rem" }}
                      >
                        {HOMESTAY_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "14px" }}>
                    <Mail size={22} color="var(--primary)" style={{ flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: "var(--primary)", display: "block", marginBottom: "4px" }}>Email:</strong>
                      <a
                        href={`mailto:${HOMESTAY_INFO.email}`}
                        style={{ color: "var(--text-main)", textDecoration: "none" }}
                      >
                        {HOMESTAY_INFO.email}
                      </a>
                    </div>
                  </div>

                  <div style={{ display: "flex", gap: "14px" }}>
                    <Clock size={22} color="var(--primary)" style={{ flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: "var(--primary)", display: "block", marginBottom: "4px" }}>Check-in &amp; Check-out:</strong>
                      <span style={{ color: "var(--text-main)" }}>Check-in: 12:00 PM • Check-out: 11:00 AM</span>
                    </div>
                  </div>
                </div>

                <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  <a
                    href={googleMapsDirectionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary"
                    style={{ padding: "12px 20px", textDecoration: "none" }}
                  >
                    <Navigation size={16} /> Get Driving Directions
                  </a>
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => trackEvent("whatsapp_click", { source: "contact_page" })}
                    className="btn btn-outline"
                    style={{ padding: "12px 20px", textDecoration: "none" }}
                  >
                    <MessageCircle size={16} /> Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Inquiry Form Card */}
              <div
                style={{
                  backgroundColor: "var(--bg-card)",
                  borderRadius: "var(--radius-lg)",
                  padding: "32px 28px",
                  border: "1px solid var(--border-color)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <h2 className="font-serif" style={{ fontSize: "1.5rem", color: "var(--primary)", marginBottom: "8px" }}>
                  Send a Direct Inquiry
                </h2>
                <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "20px" }}>
                  Save 10% on direct bookings with zero middleman fees.
                </p>

                {submitted ? (
                  <div
                    style={{
                      padding: "24px",
                      backgroundColor: "var(--primary-surface)",
                      borderRadius: "var(--radius-md)",
                      border: "1px solid var(--primary-light)",
                      textAlign: "center",
                    }}
                  >
                    <Check size={32} color="var(--primary)" style={{ margin: "0 auto 12px" }} />
                    <h3 style={{ fontSize: "1.1rem", color: "var(--primary)", marginBottom: "6px" }}>Thank You!</h3>
                    <p style={{ fontSize: "0.9rem", color: "var(--text-main)", marginBottom: "16px" }}>
                      We have received your message. Dev will connect with you via phone or WhatsApp shortly.
                    </p>
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary"
                      style={{ padding: "10px 18px", textDecoration: "none", fontSize: "0.88rem" }}
                    >
                      <MessageCircle size={15} /> Message Now on WhatsApp
                    </a>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-main)", marginBottom: "6px" }}>
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Ramesh Kumar"
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--border-color)",
                          backgroundColor: "var(--bg-surface)",
                          fontSize: "0.92rem",
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-main)", marginBottom: "6px" }}>
                        Phone / WhatsApp Number
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+91 98765 43210"
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--border-color)",
                          backgroundColor: "var(--bg-surface)",
                          fontSize: "0.92rem",
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-main)", marginBottom: "6px" }}>
                        Preferred Travel Dates &amp; Guests
                      </label>
                      <input
                        type="text"
                        value={formData.dates}
                        onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                        placeholder="e.g. 15-18 Dec, 2 adults"
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--border-color)",
                          backgroundColor: "var(--bg-surface)",
                          fontSize: "0.92rem",
                        }}
                      />
                    </div>

                    <div>
                      <label style={{ display: "block", fontSize: "0.85rem", fontWeight: 600, color: "var(--text-main)", marginBottom: "6px" }}>
                        Your Message / Questions
                      </label>
                      <textarea
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Ask about room preferences, vegetarian dining, or sightseeing..."
                        style={{
                          width: "100%",
                          padding: "10px 14px",
                          borderRadius: "var(--radius-sm)",
                          border: "1px solid var(--border-color)",
                          backgroundColor: "var(--bg-surface)",
                          fontSize: "0.92rem",
                          resize: "vertical",
                        }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary"
                      style={{ padding: "12px 20px", justifyContent: "center", fontSize: "0.95rem" }}
                    >
                      <Send size={16} /> Send Direct Inquiry
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Google Maps Embed Section */}
            <div style={{ marginBottom: "50px" }}>
              <h2 className="font-serif" style={{ fontSize: "1.6rem", color: "var(--primary)", marginBottom: "16px" }}>
                Interactive Google Map Location
              </h2>
              <div
                style={{
                  width: "100%",
                  height: "400px",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  border: "1px solid var(--border-color)",
                  boxShadow: "var(--shadow-sm)",
                }}
              >
                <iframe
                  title="Dev Homestay Shimla Location Map"
                  src="https://maps.google.com/maps?q=31.1215,77.1820&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* How to Reach Guide */}
            <div style={{ marginBottom: "50px" }}>
              <h2 className="font-serif" style={{ fontSize: "1.6rem", color: "var(--primary)", marginBottom: "20px" }}>
                How to Reach Dev Homestay, Shimla
              </h2>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
                  gap: "20px",
                }}
              >
                {HOW_TO_REACH.map((route, i) => (
                  <div
                    key={i}
                    style={{
                      backgroundColor: "var(--bg-card)",
                      borderRadius: "var(--radius-md)",
                      padding: "20px",
                      border: "1px solid var(--border-color)",
                      boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "10px" }}>
                      {route.mode.includes("Air") && <Plane size={20} color="var(--primary)" />}
                      {route.mode.includes("Train") && <Train size={20} color="var(--primary)" />}
                      {route.mode.includes("Road") && <Bus size={20} color="var(--primary)" />}
                      {route.mode.includes("Drive") && <Car size={20} color="var(--primary)" />}
                      <h3 style={{ fontSize: "1.05rem", color: "var(--primary)", margin: 0 }}>{route.mode}</h3>
                    </div>
                    <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", lineHeight: 1.6, margin: 0 }}>
                      {route.details}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact FAQs */}
        <FAQAccordion
          title="Location &amp; Directions FAQs"
          subtitle="Answers to common travel and transportation questions regarding Dev Homestay in Dudhli, Shimla."
          badge="Directions FAQ"
          items={CONTACT_FAQS}
        />
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}

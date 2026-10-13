"use client";

import React, { useState } from "react";
import {
  UtensilsCrossed,
  Award,
  Compass,
  Wifi,
  ShowerHead,
  Car,
  Trees,
  HeartHandshake,
  Footprints,
  Home,
  Map,
  Mountain,
  Globe,
  Sparkles,
  PhoneCall,
  CheckCircle2
} from "lucide-react";
import { AMENITIES, EXPERIENCES, TOUR_SERVICES, HOMESTAY_INFO } from "@/data/homestayData";
import styles from "./AmenitiesSection.module.css";

const iconMap: Record<string, React.ReactNode> = {
  UtensilsCrossed: <UtensilsCrossed size={26} />,
  Award: <Award size={26} />,
  Compass: <Compass size={26} />,
  Wifi: <Wifi size={26} />,
  ShowerHead: <ShowerHead size={26} />,
  Car: <Car size={26} />,
  Trees: <Trees size={26} />,
  HeartHandshake: <HeartHandshake size={26} />,
  Footprints: <Footprints size={26} />,
  Home: <Home size={26} />,
  Map: <Map size={26} />,
  Mountain: <Mountain size={26} />,
  Globe: <Globe size={26} />
};

export const AmenitiesSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"facilities" | "experiences">("facilities");

  return (
    <section id="amenities" className="section-padding" style={{ backgroundColor: "var(--bg-page)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} />
            Comfort & Local Experiences
          </span>
          <h2 className="section-title">A True Homestay & Himalayan Journey</h2>
          <p className="section-desc">
            From 100% pure vegetarian home-cooked food to guided jungle walks and customized multi-day Himalayan tour packages — experience Shimla beyond the standard tourist trail.
          </p>

          {/* Toggle Tabs */}
          <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "24px" }}>
            <button
              onClick={() => setActiveTab("facilities")}
              className={`btn ${activeTab === "facilities" ? "btn-primary" : "btn-secondary"}`}
              style={{ padding: "10px 22px", fontSize: "0.9rem" }}
            >
              Comfort &amp; Facilities
            </button>
            <button
              onClick={() => setActiveTab("experiences")}
              className={`btn ${activeTab === "experiences" ? "btn-primary" : "btn-secondary"}`}
              style={{ padding: "10px 22px", fontSize: "0.9rem" }}
            >
              Experience the Local Way
            </button>
          </div>
        </div>

        {/* Tab 1: Comfort & Facilities */}
        {activeTab === "facilities" && (
          <div className={styles.amenitiesGrid}>
            {AMENITIES.map((amenity) => (
              <div key={amenity.id} className={styles.amenityCard}>
                {amenity.highlight && (
                  <span className={styles.highlightBadge}>{amenity.highlight}</span>
                )}
                <div className={styles.iconBox}>
                  {iconMap[amenity.icon] || <Sparkles size={26} />}
                </div>
                <h3 className={styles.cardTitle}>{amenity.title}</h3>
                <p className={styles.cardDesc}>{amenity.shortDesc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Experience the Local Way */}
        {activeTab === "experiences" && (
          <div className={styles.amenitiesGrid}>
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className={styles.amenityCard}>
                <div className={styles.iconBox}>
                  {iconMap[exp.icon] || <Sparkles size={26} />}
                </div>
                <h3 className={styles.cardTitle}>{exp.title}</h3>
                <p className={styles.cardDesc}>{exp.desc}</p>
              </div>
            ))}
          </div>
        )}

        {/* Tour & Travel Desk Banner */}
        <div className={styles.bannerCard}>
          <div className={styles.bannerText}>
            <span style={{ color: "#f3c27e", textTransform: "uppercase", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "1px" }}>
              Under One Roof
            </span>
            <h3>Our Tour &amp; Travel Services</h3>
            <p style={{ marginBottom: "16px" }}>
              Dev Homestay is connected with a dedicated tour and travel desk. Whether you need Shimla &amp; Kufri sightseeing cabs, adventure expeditions to Spiti Valley &amp; Kinnaur, or customized all-India tour packages, we tailor everything around your schedule and budget.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "8px 16px", marginTop: "12px" }}>
              {TOUR_SERVICES.slice(0, 6).map((service, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "8px", fontSize: "0.86rem", color: "rgba(255,255,255,0.9)" }}>
                  <CheckCircle2 size={15} color="#f3c27e" />
                  <span>{service}</span>
                </div>
              ))}
            </div>
          </div>

          <a
            href={`https://wa.me/${HOMESTAY_INFO.whatsapp}?text=${encodeURIComponent("Hi Dev Homestay, I would like to inquire about your Tour & Travel packages / Shimla sightseeing arrangements.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: "14px 28px", fontSize: "0.95rem", whiteSpace: "nowrap" }}
          >
            <PhoneCall size={18} />
            <span>Inquire Tour Services</span>
          </a>
        </div>
      </div>
    </section>
  );
};

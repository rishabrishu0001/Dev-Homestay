"use client";

import React from "react";
import Image from "next/image";
import { Plane, Bus, Car, MapPin, Compass, Navigation, ExternalLink, Sparkles } from "lucide-react";
import { HOMESTAY_INFO, NEARBY_ATTRACTIONS, HOW_TO_REACH } from "@/data/homestayData";
import styles from "./LocationSection.module.css";

const reachIcons = [
  <Plane key="plane" size={22} />,
  <Bus key="bus" size={22} />,
  <Car key="car" size={22} />
];

export const LocationSection: React.FC = () => {
  const openGoogleMaps = () => {
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Dev Homestay, Bharari Bhont Road, Ragyan, Dudhli, Shimla, Himachal Pradesh")}`,
      "_blank"
    );
  };

  return (
    <section id="location" className="section-padding" style={{ backgroundColor: "var(--bg-surface)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} />
            Our Location
          </span>
          <h2 className="section-title">Stay Close to Shimla, Yet Away From the Crowd</h2>
          <p className="section-desc">
            Dev Homestay is located in the peaceful Dudhli–Bharari area of Shimla, surrounded by the beautiful Himalayan landscape and deodar forests. Mall Road and central Shimla are approximately 4 km away, making it easy to explore while returning to a peaceful mountain retreat.
          </p>
        </div>

        {/* Location Grid */}
        <div className={styles.locationGrid}>
          {/* How to reach */}
          <div className={styles.howToReachCard}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", color: "var(--primary)" }}>
              How to Reach Us
            </h3>

            {HOW_TO_REACH.map((item, idx) => (
              <div key={idx} className={styles.reachItem}>
                <div className={styles.reachIcon}>
                  {reachIcons[idx] || <Compass size={22} />}
                </div>
                <div>
                  <h4 className={styles.reachMode}>{item.mode}</h4>
                  <p className={styles.reachDetails}>{item.details}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Nearby Attractions */}
          <div className={styles.attractionsCard}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.4rem", color: "var(--primary)" }}>
              Nearby Exploration
            </h3>

            {NEARBY_ATTRACTIONS.map((attr, idx) => (
              <div key={idx} className={styles.attractionItem}>
                <div>
                  <h4 className={styles.attrName}>{attr.name}</h4>
                  <p className={styles.attrDesc}>{attr.desc}</p>
                </div>
                <span className={styles.attrDist}>{attr.distance}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Map Preview Banner */}
        <div className={styles.mapBanner}>
          <Image
            src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80"
            alt="Valley and River Panorama"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />

          <div className={styles.mapBannerOverlay}>
            <div className={styles.addressPill}>
              <MapPin size={16} color="#f3c27e" />
              <span>{HOMESTAY_INFO.address}</span>
            </div>

            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "2rem" }}>
              Easy Drive-in Access with Private Secure Parking
            </h3>

            <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "0.95rem" }}>
              Coordinates: {HOMESTAY_INFO.locationCoords}
            </p>

            <button
              onClick={openGoogleMaps}
              className="btn btn-primary"
              style={{ marginTop: "6px", padding: "12px 24px" }}
            >
              <Navigation size={18} />
              <span>Get Directions on Google Maps</span>
              <ExternalLink size={14} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

"use client";

import React from "react";
import Link from "next/link";
import { Trees, Phone, Mail, MapPin, Heart, Clock, Compass, ShieldCheck } from "lucide-react";
import { HOMESTAY_INFO, ROOMS } from "@/data/homestayData";
import { trackEvent } from "@/lib/analytics";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerGrid}>
          {/* Brand Info */}
          <div className={styles.brandCol}>
            <div className={styles.logoArea}>
              <div className={styles.logoBadge}>
                <Trees size={22} />
              </div>
              <span className={styles.brandName}>{HOMESTAY_INFO.name}</span>
            </div>
            <p className={styles.brandDesc}>
              A Home in the Hills. A Taste of Himachal. A Story to Take Home. Family-run homestay in peaceful Dudhli–Bharari, Shimla with 30+ years of five-star hospitality experience and 100% pure vegetarian home-cooked food.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#f3c27e", fontSize: "0.85rem", marginBottom: "8px" }}>
              <Clock size={14} />
              <span>Check-in: {HOMESTAY_INFO.checkInTime} • Check-out: {HOMESTAY_INFO.checkOutTime}</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "rgba(255,255,255,0.7)", fontSize: "0.85rem" }}>
              <ShieldCheck size={14} color="#f3c27e" />
              <span>Direct Booking: 10% Off • Zero Booking Fees • Free 48h Cancellation</span>
            </div>
          </div>

          {/* Quick Links & Niche Stays */}
          <div>
            <h4 className={styles.columnTitle}>Explore Stays</h4>
            <ul className={styles.linkList}>
              <li><Link href="/pure-vegetarian-homestay-shimla" className={styles.linkItem}>Pure Veg Homestay</Link></li>
              <li><Link href="/homestay-near-mall-road-shimla" className={styles.linkItem}>Homestay Near Mall Road</Link></li>
              <li><Link href="/workation-shimla" className={styles.linkItem}>Workation with Fast Wi-Fi</Link></li>
              <li><Link href="/pet-friendly-homestay-shimla" className={styles.linkItem}>Pet-Friendly Homestay</Link></li>
              <li><Link href="/contact" className={styles.linkItem}>Contact &amp; Map Directions</Link></li>
              <li><Link href="/blog" className={styles.linkItem}>Shimla Travel Guides &amp; Blog</Link></li>
            </ul>
          </div>

          {/* Rooms & Tours */}
          <div>
            <h4 className={styles.columnTitle}>Rooms &amp; Tours</h4>
            <ul className={styles.linkList}>
              {ROOMS.map((r) => (
                <li key={r.id}>
                  <Link href={`/rooms/${r.slug}`} className={styles.linkItem}>
                    {r.name}
                  </Link>
                </li>
              ))}
              <li style={{ marginTop: "10px", borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "8px" }}>
                <Link href="/tours" className={styles.linkItem} style={{ color: "#f3c27e", fontWeight: 600 }}>
                  <Compass size={13} style={{ display: "inline", marginRight: "4px" }} />
                  Himachal Tour Packages
                </Link>
              </li>
              <li><Link href="/tours/spiti-valley-from-shimla" className={styles.linkItem}>Spiti Valley Expedition</Link></li>
              <li><Link href="/tours/kinnaur" className={styles.linkItem}>Kinnaur Tour Packages</Link></li>
              <li><Link href="/tours/shimla-kufri-sightseeing" className={styles.linkItem}>Shimla &amp; Kufri Sightseeing</Link></li>
            </ul>
          </div>

          {/* Exact NAP & Direct Contact */}
          <div>
            <h4 className={styles.columnTitle}>Contact &amp; Location</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <MapPin size={18} style={{ flexShrink: 0, marginTop: "2px" }} />
                <span>
                  <strong>Dev Homestay</strong><br />
                  Bharari Bhont Road, Ragyan, Dudhli, Shimla, Himachal Pradesh - 171003<br />
                  <span style={{ fontSize: "0.8rem", color: "#f3c27e" }}>GPS: 31.1215° N, 77.1820° E</span>
                </span>
              </li>
              <li className={styles.contactItem}>
                <Phone size={18} style={{ flexShrink: 0 }} />
                <a
                  href={`tel:${HOMESTAY_INFO.phone}`}
                  onClick={() => trackEvent("phone_click", { source: "footer" })}
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  {HOMESTAY_INFO.phone}
                </a>
              </li>
              <li className={styles.contactItem}>
                <Mail size={18} style={{ flexShrink: 0 }} />
                <a href={`mailto:${HOMESTAY_INFO.email}`} style={{ color: "inherit", textDecoration: "none" }}>
                  {HOMESTAY_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <div>
            © {new Date().getFullYear()} {HOMESTAY_INFO.name}. All rights reserved. Direct booking best rates guaranteed.
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            Made with <Heart size={14} fill="#c9713e" color="#c9713e" /> for mountain travelers &amp; nature seekers.
          </div>
        </div>
      </div>
    </footer>
  );
};

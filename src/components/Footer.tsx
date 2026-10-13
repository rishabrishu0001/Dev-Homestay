"use client";

import React from "react";
import Link from "next/link";
import { Trees, Phone, Mail, MapPin, Heart, Clock } from "lucide-react";
import { HOMESTAY_INFO, ROOMS } from "@/data/homestayData";
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
              A Home in the Hills. A Taste of Himachal. A Story to Take Home. Family-run homestay in peaceful Dudhli–Bharari, Shimla with 30+ years of five-star hospitality experience and pure vegetarian home-cooked food.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "#f3c27e", fontSize: "0.85rem" }}>
              <Clock size={14} />
              <span>Check-in: {HOMESTAY_INFO.checkInTime} • Check-out: {HOMESTAY_INFO.checkOutTime}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={styles.columnTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li><a href="#about" className={styles.linkItem}>About Dev Homestay</a></li>
              <li><a href="#rooms" className={styles.linkItem}>Rooms & Suites</a></li>
              <li><a href="#amenities" className={styles.linkItem}>Bonfire & Amenities</a></li>
              <li><a href="#gallery" className={styles.linkItem}>Photo Gallery</a></li>
              <li><a href="#reviews" className={styles.linkItem}>Guest Testimonials</a></li>
              <li><a href="#location" className={styles.linkItem}>Location &amp; Directions</a></li>
              <li><Link href="/blog" className={styles.linkItem}>Shimla Travel Blog</Link></li>
            </ul>
          </div>

          {/* Rooms */}
          <div>
            <h4 className={styles.columnTitle}>Our Rooms</h4>
            <ul className={styles.linkList}>
              {ROOMS.map((r) => (
                <li key={r.id}>
                  <a href="#rooms" className={styles.linkItem}>{r.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className={styles.columnTitle}>Reach Out Directly</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <MapPin size={18} />
                <span>{HOMESTAY_INFO.address}</span>
              </li>
              <li className={styles.contactItem}>
                <Phone size={18} />
                <a href={`tel:${HOMESTAY_INFO.phone}`} style={{ color: "inherit" }}>
                  {HOMESTAY_INFO.phone}
                </a>
              </li>
              <li className={styles.contactItem}>
                <Mail size={18} />
                <a href={`mailto:${HOMESTAY_INFO.email}`} style={{ color: "inherit" }}>
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
            Made with <Heart size={14} fill="#c9713e" color="#c9713e" /> for nature lovers & travelers.
          </div>
        </div>
      </div>
    </footer>
  );
};

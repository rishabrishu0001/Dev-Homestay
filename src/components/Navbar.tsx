"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Trees, Phone, Menu, X, CalendarCheck } from "lucide-react";
import { HOMESTAY_INFO } from "@/data/homestayData";
import styles from "./Navbar.module.css";

interface NavbarProps {
  onBookNowClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookNowClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.headerScrolled : ""}`}>
      <div className={styles.navContainer}>
        {/* Brand Logo */}
        <Link href="/" className={styles.logoArea} onClick={closeMenu}>
          <div className={styles.logoBadge}>
            <Trees size={22} />
          </div>
          <div className={styles.logoText}>
            <span className={styles.brandName}>{HOMESTAY_INFO.name}</span>
            <span className={styles.brandSub}>Dudhli, Shimla</span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav>
          <ul className={styles.navLinks}>
            <li>
              <a href="#about" className={styles.navLink}>About</a>
            </li>
            <li>
              <a href="#rooms" className={styles.navLink}>Rooms & Suites</a>
            </li>
            <li>
              <a href="#amenities" className={styles.navLink}>Experiences</a>
            </li>
            <li>
              <a href="#gallery" className={styles.navLink}>Gallery</a>
            </li>
            <li>
              <a href="#reviews" className={styles.navLink}>Reviews</a>
            </li>
            <li>
              <a href="#location" className={styles.navLink}>Location</a>
            </li>
            <li>
              <Link href="/blog" className={styles.navLink}>Blog</Link>
            </li>
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className={styles.navActions}>
          <a href={`tel:${HOMESTAY_INFO.phone}`} className={styles.phoneCallBtn} title="Call Host">
            <Phone size={15} />
            <span>{HOMESTAY_INFO.phone}</span>
          </a>

          <button
            onClick={() => {
              closeMenu();
              if (onBookNowClick) {
                onBookNowClick();
              } else {
                const bookSec = document.getElementById("booking");
                if (bookSec) bookSec.scrollIntoView({ behavior: "smooth" });
              }
            }}
            className={`btn btn-primary ${styles.navBookBtn}`}
          >
            <CalendarCheck size={15} />
            <span>Book Stay</span>
          </button>

          {/* Mobile Toggle Button */}
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <a href="#about" className={styles.mobileNavLink} onClick={closeMenu}>About Us</a>
          <a href="#rooms" className={styles.mobileNavLink} onClick={closeMenu}>Rooms & Suites</a>
          <a href="#amenities" className={styles.mobileNavLink} onClick={closeMenu}>Experiences & Amenities</a>
          <a href="#gallery" className={styles.mobileNavLink} onClick={closeMenu}>Photo Gallery</a>
          <a href="#reviews" className={styles.mobileNavLink} onClick={closeMenu}>Guest Reviews</a>
          <a href="#location" className={styles.mobileNavLink} onClick={closeMenu}>Location &amp; How to Reach</a>
          <Link href="/blog" className={styles.mobileNavLink} onClick={closeMenu}>Travel Blog &amp; Guides</Link>
          <a
            href={`tel:${HOMESTAY_INFO.phone}`}
            className={styles.mobileNavLink}
            style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--primary)" }}
          >
            <Phone size={16} /> Call: {HOMESTAY_INFO.phone}
          </a>
        </div>
      )}
    </header>
  );
};

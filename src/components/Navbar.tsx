"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Trees, Phone, Menu, X, CalendarCheck } from "lucide-react";
import { HOMESTAY_INFO } from "@/data/homestayData";
import { trackEvent } from "@/lib/analytics";
import styles from "./Navbar.module.css";

interface NavbarProps {
  onBookNowClick?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onBookNowClick }) => {
  const router = useRouter();
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
        <nav aria-label="Main Navigation">
          <ul className={styles.navLinks}>
            <li>
              <Link href="/#about" className={styles.navLink}>About</Link>
            </li>
            <li>
              <Link href="/#rooms" className={styles.navLink}>Rooms</Link>
            </li>
            <li>
              <Link href="/pure-vegetarian-homestay-shimla" className={styles.navLink}>Pure Veg Food</Link>
            </li>
            <li>
              <Link href="/tours" className={styles.navLink}>Tours & Cabs</Link>
            </li>
            <li>
              <Link href="/contact" className={styles.navLink}>Contact & Location</Link>
            </li>
            <li>
              <Link href="/blog" className={styles.navLink}>Travel Blog</Link>
            </li>
          </ul>
        </nav>

        {/* Action Buttons */}
        <div className={styles.navActions}>
          <a
            href={`tel:${HOMESTAY_INFO.phone}`}
            onClick={() => trackEvent("phone_click", { source: "navbar" })}
            className={styles.phoneCallBtn}
            title="Call Host directly"
          >
            <Phone size={15} />
            <span>{HOMESTAY_INFO.phone}</span>
          </a>

          <button
            onClick={() => {
              closeMenu();
              trackEvent("book_stay_click", { source: "navbar" });
              if (onBookNowClick) {
                onBookNowClick();
              } else {
                const bookSec = document.getElementById("booking");
                if (bookSec) {
                  bookSec.scrollIntoView({ behavior: "smooth" });
                } else {
                  router.push("/#booking");
                }
              }
            }}
            className={`btn btn-primary ${styles.navBookBtn}`}
          >
            <CalendarCheck size={15} />
            <span>Book Direct (10% Off)</span>
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
          <Link href="/#about" className={styles.mobileNavLink} onClick={closeMenu}>About Dev Homestay</Link>
          <Link href="/#rooms" className={styles.mobileNavLink} onClick={closeMenu}>Rooms & Wooden Cottages</Link>
          <Link href="/pure-vegetarian-homestay-shimla" className={styles.mobileNavLink} onClick={closeMenu}>100% Pure Veg Dining</Link>
          <Link href="/tours" className={styles.mobileNavLink} onClick={closeMenu}>Shimla Sightseeing & Tours</Link>
          <Link href="/homestay-near-mall-road-shimla" className={styles.mobileNavLink} onClick={closeMenu}>Mall Road & Location</Link>
          <Link href="/workation-shimla" className={styles.mobileNavLink} onClick={closeMenu}>Workation in Shimla</Link>
          <Link href="/pet-friendly-homestay-shimla" className={styles.mobileNavLink} onClick={closeMenu}>Pet-Friendly Stays</Link>
          <Link href="/contact" className={styles.mobileNavLink} onClick={closeMenu}>Contact & Map Directions</Link>
          <Link href="/blog" className={styles.mobileNavLink} onClick={closeMenu}>Travel Blog & Guides</Link>
          <a
            href={`tel:${HOMESTAY_INFO.phone}`}
            onClick={() => trackEvent("phone_click", { source: "mobile_menu" })}
            className={styles.mobileNavLink}
            style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--primary)", fontWeight: 700 }}
          >
            <Phone size={16} /> Call Host: {HOMESTAY_INFO.phone}
          </a>
        </div>
      )}
    </header>
  );
};

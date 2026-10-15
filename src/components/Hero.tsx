"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Calendar, Users, Home, Search, Flame, Wifi, Sparkles, MapPin, Clock, ShieldCheck } from "lucide-react";
import { HOMESTAY_INFO, ROOMS, REVIEW_METRICS } from "@/data/homestayData";
import { trackEvent } from "@/lib/analytics";
import styles from "./Hero.module.css";

interface HeroProps {
  onSearch: (params: { checkIn: string; checkOut: string; guests: string; roomType: string }) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSearch }) => {
  // Default dates: tomorrow to +2 days
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(today.getDate() + 3);

  const formatDate = (d: Date) => d.toISOString().split("T")[0];

  const [checkIn, setCheckIn] = useState(formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(formatDate(dayAfter));
  const [guests, setGuests] = useState("2");
  const [roomType, setRoomType] = useState("all");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    trackEvent("book_stay_click", { source: "hero_search", roomType, guests });
    onSearch({ checkIn, checkOut, guests, roomType });
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBg}>
        <Image
          src="/images/views/panoramic-snow-mountain-view.jpg"
          alt="Dev Homestay Shimla panoramic snow mountain and pine valley view"
          fill
          priority
          quality={85}
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 30%" }}
        />
        <div className={styles.heroBgOverlay} />
      </div>

      <div className={styles.heroContent}>
        {/* Rating Trust Badge */}
        <div className={styles.ratingBadge}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#f7b731" stroke="#f7b731" />
            ))}
          </div>
          <span>TripAdvisor <strong>{REVIEW_METRICS.tripAdvisorRating}/5</strong> ({REVIEW_METRICS.tripAdvisorBadge}) • Google <strong>{REVIEW_METRICS.googleRating}/5</strong> ({REVIEW_METRICS.googleReviews} Reviews)</span>
        </div>

        {/* Hero Title */}
        <h1 className={styles.heroTitle}>
          Family-Run Homestay in Shimla, Dudhli–Bharari, 4 km from Mall Road
        </h1>

        {/* Tagline */}
        <p className={styles.heroTagline}>
          A Home in the Hills. <span className={styles.heroTitleHighlight}>A Taste of Himachal.</span>
        </p>

        {/* Subtitle */}
        <p className={styles.heroSubtitle}>
          Welcome to Dev Homestay, Shimla. Situated in serene Dudhli–Bharari surrounded by deodar pine woods. Hosted by hospitality professionals with 30+ years of 5-star experience, serving 100% pure vegetarian home-cooked meals with panoramic valley views.
        </p>

        {/* At A Glance Block (Quotation-ready plain sentences for AI / Search Engines) */}
        <div className={styles.atAGlance}>
          <strong>At a glance:</strong> Dev Homestay is located on Bharari Bhont Road, Dudhli, Shimla (4 km / 12 mins from Mall Road). Valley-view rooms start from Rs 2,499 per night with 10% direct booking savings. Check-in is at 12:00 PM and check-out is at 11:00 AM. Amenities include 100% pure vegetarian home-cooked food, free high-speed fiber Wi-Fi, 24/7 hot water, free secure parking, and pet-friendly hospitality.
        </div>

        {/* Search & Availability Bar */}
        <div className={styles.searchBarWrapper}>
          <form onSubmit={handleSubmit} className={styles.searchForm}>
            {/* Check In */}
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel} htmlFor="hero-checkin">
                <Calendar size={14} />
                <span>Check-in</span>
              </label>
              <input
                id="hero-checkin"
                type="date"
                value={checkIn}
                min={formatDate(today)}
                onChange={(e) => setCheckIn(e.target.value)}
                className={styles.fieldInput}
                required
              />
            </div>

            {/* Check Out */}
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel} htmlFor="hero-checkout">
                <Calendar size={14} />
                <span>Check-out</span>
              </label>
              <input
                id="hero-checkout"
                type="date"
                value={checkOut}
                min={checkIn || formatDate(tomorrow)}
                onChange={(e) => setCheckOut(e.target.value)}
                className={styles.fieldInput}
                required
              />
            </div>

            {/* Guests */}
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel} htmlFor="hero-guests">
                <Users size={14} />
                <span>Guests</span>
              </label>
              <select
                id="hero-guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className={styles.fieldInput}
              >
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5 Guests</option>
                <option value="6">6 Guests (Family Suite)</option>
              </select>
            </div>

            {/* Room Type */}
            <div className={styles.fieldGroup}>
              <label className={styles.fieldLabel} htmlFor="hero-roomtype">
                <Home size={14} />
                <span>Accommodation</span>
              </label>
              <select
                id="hero-roomtype"
                value={roomType}
                onChange={(e) => setRoomType(e.target.value)}
                className={styles.fieldInput}
              >
                <option value="all">Any Room / View All</option>
                {ROOMS.map((r) => (
                  <option key={r.id} value={r.id}>
                    {r.name} (from ₹{r.pricePerNight})
                  </option>
                ))}
              </select>
            </div>

            {/* Search Submit Button */}
            <button type="submit" className={styles.submitBtn}>
              <Search size={18} />
              <span>Explore Stay</span>
            </button>
          </form>
        </div>

        {/* Quick Highlights Pills */}
        <div className={styles.quickPills}>
          <div className={styles.quickPill}>
            <MapPin size={14} color="#f3c27e" />
            <span>Dudhli–Bharari, Shimla (4 km to Mall Rd)</span>
          </div>
          <div className={styles.quickPill}>
            <Sparkles size={14} color="#f3c27e" />
            <span>30+ Years 5-Star Hospitality</span>
          </div>
          <div className={styles.quickPill}>
            <Wifi size={14} color="#f3c27e" />
            <span>Complimentary High-Speed Wi-Fi</span>
          </div>
          <div className={styles.quickPill}>
            <Flame size={14} color="#f3c27e" />
            <span>100% Pure Vegetarian Food</span>
          </div>
        </div>
      </div>
    </section>
  );
};

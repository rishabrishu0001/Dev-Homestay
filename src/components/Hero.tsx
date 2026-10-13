"use client";

import React, { useState } from "react";
import { Star, Calendar, Users, Home, Search, Flame, Wifi, Sparkles, MapPin } from "lucide-react";
import { HOMESTAY_INFO, ROOMS } from "@/data/homestayData";
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
    onSearch({ checkIn, checkOut, guests, roomType });
  };

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroBg} />

      <div className={styles.heroContent}>
        {/* Rating Trust Badge */}
        <div className={styles.ratingBadge}>
          <div className={styles.stars}>
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} fill="#f7b731" stroke="#f7b731" />
            ))}
          </div>
          <span>TripAdvisor <strong>4.8/5</strong> (Travellers&apos; Choice) • Google <strong>4.5/5</strong> (560+ Reviews)</span>
        </div>

        {/* Hero Title */}
        <h1 className={styles.heroTitle}>
          A Home in the Hills. <br />
          <span className={styles.heroTitleHighlight}>A Taste of Himachal.</span>
        </h1>

        {/* Subtitle */}
        <p className={styles.heroSubtitle}>
          Welcome to Dev Homestay, Shimla. Located in peaceful Dudhli–Bharari (~4 km from Mall Road). 30+ years of 5-star hospitality experience, authentic pure vegetarian home-cooked food, and panoramic pine valley views.
        </p>

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

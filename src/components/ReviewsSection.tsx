"use client";

import React from "react";
import Image from "next/image";
import { Star, MessageSquareQuote, Sparkles, Award } from "lucide-react";
import { REVIEWS } from "@/data/homestayData";
import styles from "./ReviewsSection.module.css";

export const ReviewsSection: React.FC = () => {
  return (
    <section id="reviews" className="section-padding" style={{ backgroundColor: "var(--bg-page)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} />
            Guest Experiences
          </span>
          <h2 className="section-title">Loved by Travelers & Remote Workers</h2>
          <p className="section-desc">
            Discover why solo adventurers, families, and digital nomads return to Dev Homestay season after season.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className={styles.reviewsGrid}>
          {REVIEWS.map((rev) => (
            <div key={rev.id} className={styles.reviewCard}>
              <div>
                <div className={styles.ratingRow}>
                  <div className={styles.stars}>
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="#f7b731" stroke="#f7b731" />
                    ))}
                  </div>
                  <MessageSquareQuote size={28} color="#2d6850" opacity={0.4} />
                </div>

                <div style={{ marginTop: "14px" }}>
                  <span className={styles.roomStayTag}>{rev.roomType}</span>
                  <p className={styles.reviewComment}>&ldquo;{rev.comment}&rdquo;</p>
                </div>
              </div>

              {/* Author */}
              <div className={styles.authorRow}>
                <div className={styles.avatar}>
                  <Image
                    src={rev.avatar}
                    alt={rev.author}
                    fill
                    sizes="50px"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className={styles.authorInfo}>
                  <h4>{rev.author}</h4>
                  <span className={styles.authorMeta}>
                    {rev.location} • {rev.stayDate}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className={styles.trustBanner}>
          <div className={styles.trustItem}>
            <h4>4.8 ★</h4>
            <p>TripAdvisor (118 Reviews)</p>
          </div>
          <div className={styles.trustItem}>
            <h4>4.5 ★</h4>
            <p>Google (450 Reviews)</p>
          </div>
          <div className={styles.trustItem}>
            <h4>30+ Yrs</h4>
            <p>5-Star Hospitality Exp</p>
          </div>
          <div className={styles.trustItem}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
              <Award size={24} color="#c9713e" />
              <span style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--primary)" }}>Travellers&apos; Choice</span>
            </div>
            <p>TripAdvisor Recognition</p>
          </div>
        </div>
      </div>
    </section>
  );
};

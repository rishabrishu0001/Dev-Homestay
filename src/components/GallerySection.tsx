"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Sparkles } from "lucide-react";
import { GALLERY_ITEMS, GalleryItem } from "@/data/homestayData";
import styles from "./GallerySection.module.css";

type CategoryFilter = "all" | "views" | "rooms" | "outdoors" | "dining" | "vibe";

export const GallerySection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");
  const [activeLightboxItem, setActiveLightboxItem] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="section-padding" style={{ backgroundColor: "var(--bg-surface)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} />
            Visual Glimpses
          </span>
          <h2 className="section-title">Moments & Views at Dev Homestay</h2>
          <p className="section-desc">
            Explore authentic views captured directly from our balconies and grounds, hand-crafted pine suites, tranquil apple orchard gardens, and snowy mountain valleys.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filterTabs}>
          {(
            [
              { key: "all", label: "All Photos" },
              { key: "views", label: "🏔️ Views from Hotel" },
              { key: "rooms", label: "Rooms & Suites" },
              { key: "outdoors", label: "Scenic & Outdoors" },
              { key: "dining", label: "Farm Dining" },
              { key: "vibe", label: "Bonfire & Vibe" },
            ] as const
          ).map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveCategory(tab.key)}
              className={`${styles.filterBtn} ${activeCategory === tab.key ? styles.activeFilterBtn : ""}`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className={styles.galleryGrid}>
          {filteredItems.map((item) => {
            const isWide = item.id === "g-hotel-view-panoramic" || item.id === "g-veranda-360-panoramic";
            return (
              <div
                key={item.id}
                className={`${styles.galleryItem} ${isWide ? styles.galleryItemWide : ""} reveal-card`}
                onClick={() => setActiveLightboxItem(item)}
              >
                {item.badge && (
                  <span className={styles.itemBadge}>{item.badge}</span>
                )}
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes={isWide ? "(max-width: 768px) 100vw, 66vw" : "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"}
                  className={styles.galleryImage}
                />
                <div className={styles.itemOverlay}>
                  <h4 className={styles.overlayTitle}>{item.title}</h4>
                  <p className={styles.overlayCaption}>{item.caption}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Modal */}
      {activeLightboxItem && (
        <div
          className={styles.lightboxOverlay}
          onClick={() => setActiveLightboxItem(null)}
        >
          <button
            className={styles.lightboxClose}
            onClick={() => setActiveLightboxItem(null)}
            aria-label="Close Lightbox"
          >
            <X size={24} />
          </button>

          <div
            className={styles.lightboxImageWrapper}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={activeLightboxItem.image}
              alt={activeLightboxItem.title}
              fill
              sizes="1000px"
              style={{ objectFit: "contain" }}
            />
          </div>

          <div className={styles.lightboxInfo} onClick={(e) => e.stopPropagation()}>
            {activeLightboxItem.badge && (
              <span className={styles.lightboxBadge}>{activeLightboxItem.badge}</span>
            )}
            <h3 className={styles.lightboxTitle}>{activeLightboxItem.title}</h3>
            <p className={styles.lightboxCaption}>{activeLightboxItem.caption}</p>
          </div>
        </div>
      )}
    </section>
  );
};

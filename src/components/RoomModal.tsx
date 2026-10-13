"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Users, Bed, Mountain, Maximize2, Check, MessageCircle, CalendarCheck } from "lucide-react";
import { Room, HOMESTAY_INFO } from "@/data/homestayData";
import styles from "./RoomModal.module.css";

interface RoomModalProps {
  room: Room | null;
  onClose: () => void;
  onSelectForBooking: (roomId: string) => void;
}

export const RoomModal: React.FC<RoomModalProps> = ({ room, onClose, onSelectForBooking }) => {
  const [selectedImgIndex, setSelectedImgIndex] = useState(0);

  if (!room) return null;

  const activeImage = room.gallery[selectedImgIndex] || room.image;

  const handleWhatsAppBooking = () => {
    const text = encodeURIComponent(
      `Hello Dev Homestay! I would like to inquire about booking the "${room.name}" (₹${room.pricePerNight}/night). Please let me know current availability.`
    );
    window.open(`https://wa.me/${HOMESTAY_INFO.whatsapp}?text=${text}`, "_blank");
  };

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button className={styles.closeBtn} onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {/* Gallery Showcase */}
        <div className={styles.modalGallery}>
          <Image
            src={activeImage}
            alt={room.name}
            fill
            sizes="900px"
            style={{ objectFit: "cover" }}
          />

          {/* Thumbnail Strip */}
          {room.gallery.length > 1 && (
            <div className={styles.galleryThumbRow}>
              {room.gallery.map((img, idx) => (
                <div
                  key={idx}
                  className={`${styles.galleryThumb} ${idx === selectedImgIndex ? styles.activeThumb : ""}`}
                  onClick={() => setSelectedImgIndex(idx)}
                >
                  <Image src={img} alt="thumbnail" fill style={{ objectFit: "cover" }} />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Content */}
        <div className={styles.modalBody}>
          {/* Header */}
          <div className={styles.modalHeader}>
            <div>
              <h2 className={styles.roomTitle}>{room.name}</h2>
              <p className={styles.roomTagline}>{room.tagline}</p>
            </div>
            <div className={styles.priceBox}>
              <div className={styles.originalPrice}>₹{room.originalPrice}</div>
              <div className={styles.currentPrice}>₹{room.pricePerNight} <span style={{ fontSize: "0.9rem", fontWeight: 500, color: "var(--text-muted)" }}>/ night</span></div>
              <div className={styles.priceNote}>+ Complimentary Himalayan Breakfast</div>
            </div>
          </div>

          {/* Quick Specs */}
          <div className={styles.metaGrid}>
            <div className={styles.metaItem}>
              <Users size={18} />
              <span>{room.capacity}</span>
            </div>
            <div className={styles.metaItem}>
              <Bed size={18} />
              <span>{room.bedType}</span>
            </div>
            <div className={styles.metaItem}>
              <Mountain size={18} />
              <span>{room.view}</span>
            </div>
            <div className={styles.metaItem}>
              <Maximize2 size={18} />
              <span>{room.size}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h3 className={styles.sectionHeading}>About this accommodation</h3>
            <p className={styles.roomDesc}>{room.description}</p>
          </div>

          {/* Included Features */}
          <div>
            <h3 className={styles.sectionHeading}>Included Amenities & Services</h3>
            <ul className={styles.featuresList}>
              {room.features.map((feature, idx) => (
                <li key={idx} className={styles.featureItem}>
                  <Check size={16} />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Footer Actions */}
          <div className={styles.modalFooter}>
            <div>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)" }}>
                Host: {HOMESTAY_INFO.hostName} • Direct Booking Best Rate Guaranteed
              </span>
            </div>

            <div className={styles.actionButtonGroup}>
              <button
                onClick={handleWhatsAppBooking}
                className="btn btn-outline"
                style={{ borderColor: "#25D366", color: "#128C7E", display: "inline-flex", gap: "8px" }}
              >
                <MessageCircle size={16} color="#25D366" />
                <span>WhatsApp Inquiry</span>
              </button>

              <button
                onClick={() => {
                  onSelectForBooking(room.id);
                  onClose();
                }}
                className="btn btn-primary"
              >
                <CalendarCheck size={16} />
                <span>Book This Room</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

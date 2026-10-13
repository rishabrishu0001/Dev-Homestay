"use client";

import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { HOMESTAY_INFO } from "@/data/homestayData";
import styles from "./FloatingActions.module.css";

export const FloatingActions: React.FC = () => {
  const whatsappUrl = `https://wa.me/${HOMESTAY_INFO.whatsapp}?text=${encodeURIComponent(
    "Hello Dev Homestay! I am visiting your website and have a question regarding booking a room."
  )}`;

  return (
    <div className={styles.floatingContainer}>
      {/* Phone Call */}
      <a
        href={`tel:${HOMESTAY_INFO.phone}`}
        className={`${styles.floatingBtn} ${styles.phoneBtn}`}
        aria-label="Call Host"
      >
        <Phone size={22} />
        <span className={styles.tooltip}>Call Dev: {HOMESTAY_INFO.phone}</span>
      </a>

      {/* WhatsApp Chat */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.floatingBtn} ${styles.whatsappBtn}`}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} />
        <span className={styles.tooltip}>Chat on WhatsApp</span>
      </a>
    </div>
  );
};

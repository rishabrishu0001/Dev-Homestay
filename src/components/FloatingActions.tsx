import React from "react";
import { MessageCircle, Phone } from "lucide-react";
import { HOMESTAY_INFO } from "@/data/homestayData";
import { trackEvent } from "@/lib/analytics";
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
        onClick={() => trackEvent("phone_click", { source: "floating_action" })}
        className={`${styles.floatingBtn} ${styles.phoneBtn}`}
        aria-label="Call Host directly"
      >
        <Phone size={22} />
        <span className={styles.tooltip}>Call Dev: {HOMESTAY_INFO.phone}</span>
      </a>

      {/* WhatsApp Chat */}
      <a
        href={whatsappUrl}
        onClick={() => trackEvent("whatsapp_click", { source: "floating_action" })}
        target="_blank"
        rel="noopener noreferrer"
        className={`${styles.floatingBtn} ${styles.whatsappBtn}`}
        aria-label="Chat on WhatsApp with Dev Homestay"
      >
        <MessageCircle size={26} />
        <span className={styles.tooltip}>Chat on WhatsApp</span>
      </a>
    </div>
  );
};

"use client";

import React, { useState, useEffect } from "react";
import {
  Calendar,
  Users,
  Home,
  User,
  Phone,
  Mail,
  FileText,
  MessageCircle,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Percent
} from "lucide-react";
import { ROOMS, HOMESTAY_INFO } from "@/data/homestayData";
import styles from "./BookingSection.module.css";

interface BookingSectionProps {
  initialRoomId?: string;
  initialCheckIn?: string;
  initialCheckOut?: string;
  initialGuests?: string;
}

export const BookingSection: React.FC<BookingSectionProps> = ({
  initialRoomId,
  initialCheckIn,
  initialCheckOut,
  initialGuests,
}) => {
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const dayAfter = new Date(today);
  dayAfter.setDate(today.getDate() + 3);

  const formatDate = (d: Date) => d.toISOString().split("T")[0];

  const [roomId, setRoomId] = useState(initialRoomId || ROOMS[0].id);
  const [checkIn, setCheckIn] = useState(initialCheckIn || formatDate(tomorrow));
  const [checkOut, setCheckOut] = useState(initialCheckOut || formatDate(dayAfter));
  const [guests, setGuests] = useState(initialGuests || "2");
  const [guestName, setGuestName] = useState("");
  const [guestPhone, setGuestPhone] = useState("");
  const [guestEmail, setGuestEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [bookingRef, setBookingRef] = useState("");

  useEffect(() => {
    if (initialRoomId) setRoomId(initialRoomId);
  }, [initialRoomId]);

  useEffect(() => {
    if (initialCheckIn) setCheckIn(initialCheckIn);
  }, [initialCheckIn]);

  useEffect(() => {
    if (initialCheckOut) setCheckOut(initialCheckOut);
  }, [initialCheckOut]);

  useEffect(() => {
    if (initialGuests) setGuests(initialGuests);
  }, [initialGuests]);

  const selectedRoom = ROOMS.find((r) => r.id === roomId) || ROOMS[0];

  // Calculate number of nights
  const calculateNights = () => {
    const start = new Date(checkIn);
    const end = new Date(checkOut);
    const diffTime = end.getTime() - start.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 1;
  };

  const nights = calculateNights();
  const subtotal = selectedRoom.pricePerNight * nights;
  const directBookingDiscount = Math.round(subtotal * 0.1); // 10% direct booking benefit
  const totalAmount = subtotal - directBookingDiscount;

  // Instant WhatsApp Booking
  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `*New Booking Inquiry - Dev Homestay*\n\n` +
      `👤 *Guest Name:* ${guestName || "Guest"}\n` +
      `📞 *Phone:* ${guestPhone || "Not provided"}\n` +
      `🏡 *Room:* ${selectedRoom.name}\n` +
      `📅 *Dates:* ${checkIn} to ${checkOut} (${nights} night${nights > 1 ? "s" : ""})\n` +
      `👥 *Guests:* ${guests}\n` +
      `💰 *Estimated Total:* ₹${totalAmount.toLocaleString("en-IN")} (after 10% direct discount)\n` +
      (notes ? `📝 *Special Requests:* ${notes}\n\n` : `\n`) +
      `Please let me know if these dates are available for reservation!`
    );
    window.open(`https://wa.me/${HOMESTAY_INFO.whatsapp}?text=${text}`, "_blank");
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const generatedRef = "DEV-" + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(generatedRef);
    setShowSuccessModal(true);
  };

  return (
    <section id="booking" className="section-padding" style={{ backgroundColor: "var(--bg-page)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} />
            Direct Reservation
          </span>
          <h2 className="section-title">Reserve Your Mountain Getaway</h2>
          <p className="section-desc">
            Book directly with host Dev for guaranteed best prices, authentic pure vegetarian home-cooked food, and personalized stay &amp; travel coordination.
          </p>
        </div>

        {/* Booking Card */}
        <div className={styles.bookingCard}>
          {/* Form Col */}
          <div className={styles.formCol}>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.6rem", color: "var(--primary)" }}>
              Guest & Stay Details
            </h3>
            <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "4px" }}>
              Fill in your preferred dates and room. No upfront payment required to inquire.
            </p>

            <form onSubmit={handleFormSubmit} className={styles.formGrid}>
              {/* Room Selector */}
              <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
                <label className={styles.fieldLabel} htmlFor="book-room">
                  <Home size={15} />
                  <span>Selected Room</span>
                </label>
                <select
                  id="book-room"
                  value={roomId}
                  onChange={(e) => setRoomId(e.target.value)}
                  className={styles.inputField}
                >
                  {ROOMS.map((r) => (
                    <option key={r.id} value={r.id}>
                      {r.name} — ₹{r.pricePerNight}/night ({r.capacity})
                    </option>
                  ))}
                </select>
              </div>

              {/* Check-in */}
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel} htmlFor="book-checkin">
                  <Calendar size={15} />
                  <span>Check-In Date</span>
                </label>
                <input
                  id="book-checkin"
                  type="date"
                  value={checkIn}
                  min={formatDate(today)}
                  onChange={(e) => setCheckIn(e.target.value)}
                  className={styles.inputField}
                  required
                />
              </div>

              {/* Check-out */}
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel} htmlFor="book-checkout">
                  <Calendar size={15} />
                  <span>Check-Out Date</span>
                </label>
                <input
                  id="book-checkout"
                  type="date"
                  value={checkOut}
                  min={checkIn}
                  onChange={(e) => setCheckOut(e.target.value)}
                  className={styles.inputField}
                  required
                />
              </div>

              {/* Full Name */}
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel} htmlFor="book-name">
                  <User size={15} />
                  <span>Your Full Name</span>
                </label>
                <input
                  id="book-name"
                  type="text"
                  placeholder="e.g. Rahul Sharma"
                  value={guestName}
                  onChange={(e) => setGuestName(e.target.value)}
                  className={styles.inputField}
                  required
                />
              </div>

              {/* Phone / WhatsApp */}
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel} htmlFor="book-phone">
                  <Phone size={15} />
                  <span>Phone / WhatsApp</span>
                </label>
                <input
                  id="book-phone"
                  type="tel"
                  placeholder="e.g. +91 98765 43210"
                  value={guestPhone}
                  onChange={(e) => setGuestPhone(e.target.value)}
                  className={styles.inputField}
                  required
                />
              </div>

              {/* Guests Count */}
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel} htmlFor="book-guests">
                  <Users size={15} />
                  <span>Number of Guests</span>
                </label>
                <select
                  id="book-guests"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className={styles.inputField}
                >
                  <option value="1">1 Adult</option>
                  <option value="2">2 Adults</option>
                  <option value="3">3 Adults</option>
                  <option value="4">4 Adults</option>
                  <option value="5">5 Adults</option>
                  <option value="6">6 Adults (Family Suite)</option>
                  <option value="6+">6+ Guests (Family / Group)</option>
                </select>
              </div>

              {/* Email */}
              <div className={styles.fieldGroup}>
                <label className={styles.fieldLabel} htmlFor="book-email">
                  <Mail size={15} />
                  <span>Email (Optional)</span>
                </label>
                <input
                  id="book-email"
                  type="email"
                  placeholder="rahul@example.com"
                  value={guestEmail}
                  onChange={(e) => setGuestEmail(e.target.value)}
                  className={styles.inputField}
                />
              </div>

              {/* Special Requests / Notes */}
              <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
                <label className={styles.fieldLabel} htmlFor="book-notes">
                  <FileText size={15} />
                  <span>Special Notes / Requests (Optional)</span>
                </label>
                <textarea
                  id="book-notes"
                  rows={3}
                  placeholder="Tell us about your pure vegetarian meal preferences, sightseeing tours (Shimla/Kufri/Spiti), or cab requirements..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className={styles.inputField}
                  style={{ resize: "vertical" }}
                />
              </div>

              {/* Form Submit (Alternative to WhatsApp) */}
              <div className={styles.fullWidth} style={{ marginTop: "10px" }}>
                <button
                  type="submit"
                  className="btn btn-secondary"
                  style={{ width: "100%", padding: "14px" }}
                >
                  Submit Inquiry Request
                </button>
              </div>
            </form>
          </div>

          {/* Pricing & WhatsApp Sidebar */}
          <div className={styles.sidebarCol}>
            <div>
              <h3 className={styles.summaryTitle}>Stay Summary</h3>

              <div className={styles.summaryRows}>
                <div className={styles.summaryRow}>
                  <span>Room:</span>
                  <span style={{ fontWeight: 600 }}>{selectedRoom.name}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Duration:</span>
                  <span>{nights} night{nights > 1 ? "s" : ""}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Guests:</span>
                  <span>{guests} guest{guests !== "1" ? "s" : ""}</span>
                </div>
                <div className={styles.summaryRow}>
                  <span>Standard Rate:</span>
                  <span>₹{selectedRoom.pricePerNight} × {nights} = ₹{subtotal.toLocaleString("en-IN")}</span>
                </div>
                <div className={styles.summaryRow} style={{ color: "#74d49a" }}>
                  <span style={{ display: "flex", alignItems: "center", gap: "4px" }}>
                    <Percent size={14} /> Direct Booking Perk:
                  </span>
                  <span>- ₹{directBookingDiscount.toLocaleString("en-IN")} (10% OFF)</span>
                </div>

                <div>
                  <span className={styles.discountBadge}>
                    ✨ 10% Direct Booking Discount Applied
                  </span>
                </div>

                <div className={styles.summaryRowStrong}>
                  <span>Estimated Total:</span>
                  <span style={{ color: "#f7b731" }}>₹{totalAmount.toLocaleString("en-IN")}</span>
                </div>
              </div>
            </div>

            {/* Instant WhatsApp Action */}
            <div>
              <div style={{ fontSize: "0.88rem", color: "rgba(255,255,255,0.8)", marginBottom: "12px", textAlign: "center" }}>
                Want faster response? Connect with Dev directly on WhatsApp:
              </div>

              <button
                type="button"
                onClick={handleWhatsAppInquiry}
                className={styles.whatsappBookingBtn}
              >
                <MessageCircle size={20} />
                <span>Instant WhatsApp Booking</span>
              </button>

              <div className={styles.guaranteeNote}>
                <ShieldCheck size={14} />
                <span>Zero Booking Fees • Free Cancellation up to 48 hrs</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Confirmation Modal */}
      {showSuccessModal && (
        <div className={styles.confirmModalOverlay} onClick={() => setShowSuccessModal(false)}>
          <div className={styles.confirmBox} onClick={(e) => e.stopPropagation()}>
            <div className={styles.confirmIconBox}>
              <CheckCircle2 size={38} />
            </div>
            <h3 style={{ fontFamily: "var(--font-serif)", fontSize: "1.8rem", color: "var(--primary)", marginBottom: "10px" }}>
              Inquiry Sent Successfully!
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "20px" }}>
              Thank you, <strong>{guestName || "Guest"}</strong>! Host Dev has received your booking inquiry for <strong>{selectedRoom.name}</strong> from {checkIn} to {checkOut}.
            </p>
            <div style={{ background: "var(--bg-surface)", padding: "14px", borderRadius: "10px", marginBottom: "24px" }}>
              <div style={{ fontSize: "0.8rem", textTransform: "uppercase", color: "var(--text-muted)", letterSpacing: "1px" }}>
                Reference ID
              </div>
              <div style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--primary)", marginTop: "4px" }}>
                {bookingRef}
              </div>
            </div>
            <p style={{ fontSize: "0.88rem", color: "var(--text-muted)", marginBottom: "24px" }}>
              We will contact you via WhatsApp or Call on <strong>{guestPhone}</strong> within 30 minutes to confirm your reservation details.
            </p>
            <div style={{ display: "flex", gap: "12px", justifyContent: "center" }}>
              <button
                onClick={handleWhatsAppInquiry}
                className="btn btn-primary"
                style={{ backgroundColor: "#25D366" }}
              >
                <MessageCircle size={16} />
                <span>Open in WhatsApp</span>
              </button>
              <button
                onClick={() => setShowSuccessModal(false)}
                className="btn btn-outline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, Bed, Mountain, Check, Eye, CalendarCheck, Sparkles } from "lucide-react";
import { ROOMS, Room } from "@/data/homestayData";
import { trackEvent } from "@/lib/analytics";
import { RoomModal } from "./RoomModal";
import styles from "./RoomsSection.module.css";

interface RoomsSectionProps {
  onSelectForBooking: (roomId: string) => void;
  selectedRoomFilter?: string;
}

export const RoomsSection: React.FC<RoomsSectionProps> = ({
  onSelectForBooking,
  selectedRoomFilter = "all",
}) => {
  const [activeModalRoom, setActiveModalRoom] = useState<Room | null>(null);

  const displayedRooms =
    selectedRoomFilter === "all"
      ? ROOMS
      : ROOMS.filter((r) => r.id === selectedRoomFilter);

  return (
    <section id="rooms" className="section-padding" style={{ backgroundColor: "var(--bg-surface)" }}>
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-tag">
            <Sparkles size={14} />
            Handcrafted Accommodations
          </span>
          <h2 className="section-title">Rooms & Wooden Cottages</h2>
          <p className="section-desc">
            Each room is thoughtfully appointed with natural Himalayan deodar wood, plush bedding, mountain view balconies, and modern amenities designed for mindful rest.
          </p>
        </div>

        {/* Rooms Grid */}
        <div className={styles.roomsGrid}>
          {displayedRooms.map((room) => (
            <div key={room.id} className={`${styles.roomCard} reveal-card`}>
              {/* Card Image */}
              <div className={styles.cardImageWrapper}>
                <Image
                  src={room.image}
                  alt={room.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className={styles.cardImage}
                />
                {room.badge && <span className={styles.badgePill}>{room.badge}</span>}
                <div className={styles.priceTag}>
                  From <span className={styles.priceTagHighlight}>₹{room.pricePerNight}</span> / night
                </div>
              </div>

              {/* Card Body */}
              <div className={styles.cardBody}>
                <h3 className={styles.roomTitle}>{room.name}</h3>
                <p className={styles.roomTagline}>{room.tagline}</p>

                {/* Meta Highlights */}
                <div className={styles.metaRow}>
                  <div className={styles.metaPill}>
                    <Users size={14} />
                    <span>{room.capacity}</span>
                  </div>
                  <div className={styles.metaPill}>
                    <Bed size={14} />
                    <span>{room.bedType}</span>
                  </div>
                  <div className={styles.metaPill}>
                    <Mountain size={14} />
                    <span>{room.size}</span>
                  </div>
                </div>

                {/* Key Features */}
                <div className={styles.featureList}>
                  {room.features.slice(0, 3).map((f, i) => (
                    <div key={i} className={styles.featureItem}>
                      <Check size={14} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>

                {/* Actions */}
                <div className={styles.cardActions}>
                  <Link
                    href={`/rooms/${room.slug}`}
                    className="btn btn-outline"
                    style={{ padding: "10px 14px", fontSize: "0.86rem", textDecoration: "none" }}
                  >
                    <Eye size={15} />
                    <span>View Room Details</span>
                  </Link>

                  <button
                    onClick={() => {
                      trackEvent("room_reserve_click", { roomName: room.name, roomId: room.id });
                      onSelectForBooking(room.id);
                    }}
                    className="btn btn-primary"
                    style={{ padding: "10px 16px", fontSize: "0.86rem" }}
                  >
                    <CalendarCheck size={15} />
                    <span>Reserve</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Room Details Modal */}
      <RoomModal
        room={activeModalRoom}
        onClose={() => setActiveModalRoom(null)}
        onSelectForBooking={onSelectForBooking}
      />
    </section>
  );
};

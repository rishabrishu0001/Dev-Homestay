"use client";

import React, { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { AboutSection } from "@/components/AboutSection";
import { RoomsSection } from "@/components/RoomsSection";
import { AmenitiesSection } from "@/components/AmenitiesSection";
import { GallerySection } from "@/components/GallerySection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { BookingSection } from "@/components/BookingSection";
import { LocationSection } from "@/components/LocationSection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

export default function Home() {
  const [selectedRoomId, setSelectedRoomId] = useState<string>("cedar-view-deluxe");
  const [roomFilter, setRoomFilter] = useState<string>("all");
  const [checkInDate, setCheckInDate] = useState<string>("");
  const [checkOutDate, setCheckOutDate] = useState<string>("");
  const [guestCount, setGuestCount] = useState<string>("2");

  useEffect(() => {
    // Scroll reveal observer for sliding cards
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -40px 0px",
        threshold: 0.1,
      }
    );

    const observeAll = () => {
      const elements = document.querySelectorAll(
        ".reveal-card:not(.revealed), .reveal-slide-left:not(.revealed), .reveal-slide-right:not(.revealed), .reveal-slide-up:not(.revealed)"
      );
      elements.forEach((el) => observer.observe(el));
    };

    observeAll();

    // Auto-observe newly mounted cards (e.g. on filter change)
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);

  const handleHeroSearch = (params: {
    checkIn: string;
    checkOut: string;
    guests: string;
    roomType: string;
  }) => {
    setCheckInDate(params.checkIn);
    setCheckOutDate(params.checkOut);
    setGuestCount(params.guests);
    if (params.roomType !== "all") {
      setSelectedRoomId(params.roomType);
      setRoomFilter(params.roomType);
    } else {
      setRoomFilter("all");
    }

    // Scroll smoothly to rooms or booking
    const targetElement = document.getElementById("rooms");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectRoomForBooking = (roomId: string) => {
    setSelectedRoomId(roomId);
    const bookingSec = document.getElementById("booking");
    if (bookingSec) {
      bookingSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleBookNowNavbar = () => {
    const bookingSec = document.getElementById("booking");
    if (bookingSec) {
      bookingSec.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main>
      {/* Top Navbar */}
      <Navbar onBookNowClick={handleBookNowNavbar} />

      {/* Hero with Availability Search */}
      <Hero onSearch={handleHeroSearch} />

      {/* About Dev Homestay */}
      <AboutSection />

      {/* Rooms Showcase */}
      <RoomsSection
        onSelectForBooking={handleSelectRoomForBooking}
        selectedRoomFilter={roomFilter}
      />

      {/* Experiences & Amenities */}
      <AmenitiesSection />

      {/* Photo Gallery & Lightbox */}
      <GallerySection />

      {/* Guest Reviews & Testimonials */}
      <ReviewsSection />

      {/* Booking Calculator & WhatsApp Reservation */}
      <BookingSection
        initialRoomId={selectedRoomId}
        initialCheckIn={checkInDate}
        initialCheckOut={checkOutDate}
        initialGuests={guestCount}
      />

      {/* Location & How to Reach */}
      <LocationSection />

      {/* Blog & Travel Guides */}
      <BlogSection />

      {/* Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions />
    </main>
  );
}

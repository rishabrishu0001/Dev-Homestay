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
import { FAQAccordion } from "@/components/FAQAccordion";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { StructuredData } from "@/components/StructuredData";

const HOMEPAGE_FAQS = [
  {
    q: "How far is Dev Homestay from Shimla Mall Road and The Ridge?",
    a: "Dev Homestay is located on Bharari Bhont Road in Dudhli, approximately 4.0 km (about 12 minutes drive) from The Mall Road and The Ridge. This offers the ideal balance: close enough for easy sightseeing, yet far enough to enjoy peaceful deodar forests and zero city congestion."
  },
  {
    q: "Is all food served at Dev Homestay 100% pure vegetarian?",
    a: "Yes. Dev Homestay is strictly 100% pure vegetarian. All meals are prepared fresh in our family home kitchen using wholesome ingredients, offering genuine home-cooked North Indian and traditional Himachali food at our dining table."
  },
  {
    q: "Is secure on-site parking available for cars and bikes?",
    a: "Yes. We offer free on-site drive-in parking inside our private gates with ample space for both personal cars and motorbikes, eliminating the parking hassles of central Shimla."
  },
  {
    q: "Are pets allowed at Dev Homestay?",
    a: "Yes. Dev Homestay is pet friendly. Dogs and pets are warmly welcome to stay with their families. The surrounding pine forest trails and private balconies provide a wonderful environment for pets."
  },
  {
    q: "Does it snow at the homestay in winter?",
    a: "Snowfall regularly occurs in and around Dudhli–Bharari during peak winter months (typically late December to February). We do not guarantee specific snow dates as weather varies yearly, but all rooms are fully equipped with electric room heaters, thermal bedding, and 24/7 hot geyser water."
  },
  {
    q: "How do I reach Dev Homestay from the railway station, bus stand, or airport?",
    a: "Shimla Railway Station (Kalka toy train) is approx. 5 km away. Shimla ISBT is approx. 6 km. Shimla Airport (Jubbarhatti) is 24 km (about 50 minutes), and Chandigarh Airport is 125 km (approx. 3.5 hours). We provide direct taxi pickup assistance upon request."
  },
  {
    q: "What are the check-in and check-out timings?",
    a: "Check-in time is 12:00 PM (noon) and check-out time is 11:00 AM. We provide complimentary safe luggage storage if you arrive early or depart late."
  },
  {
    q: "What tour desk and sightseeing cab services are available?",
    a: "Our tour desk arranges private sightseeing taxis to Mall Road, Jakhoo Temple, Kufri (15 km), Chadwick Falls, and Viceregal Lodge. We also organize customized multi-day Kinnaur, Spiti Valley, and Himachal tour packages."
  },
  {
    q: "What are the perks of booking directly with Dev Homestay?",
    a: "Booking directly via WhatsApp (+91 84470 56787) or phone provides an instant 10% discount off standard rates, zero booking fees, and free cancellation up to 48 hours prior to check-in."
  },
  {
    q: "Is the Wi-Fi reliable for workation and remote working?",
    a: "Yes. We have complimentary high-speed optical fiber broadband Wi-Fi across the property, inside all guest rooms, and out on the balconies, ensuring dependable video calls and remote work."
  },
  {
    q: "Does the Cozy Family Suite include a private kitchen?",
    a: "Yes. The 420 sq ft Cozy Family Suite has two separate bedrooms with two queen beds (accommodating 4 to 6 guests) and a dedicated private kitchen equipped with an LPG gas stove and utensils."
  }
];

const lodgingBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  name: "Dev Homestay, Shimla",
  url: "https://www.devhomestay.in",
  image: "https://www.devhomestay.in/images/views/panoramic-snow-mountain-view.jpg",
  telephone: "+918447056787",
  email: "devhomestay2@gmail.com",
  priceRange: "₹2499 - ₹4199",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bharari Bhont Road, Ragyan, Dudhli",
    addressLocality: "Shimla",
    addressRegion: "Himachal Pradesh",
    postalCode: "171003",
    addressCountry: "IN"
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 31.1215,
    longitude: 77.1820
  },
  checkinTime: "12:00",
  checkoutTime: "11:00",
  petsAllowed: true,
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "100% Pure Vegetarian Food", value: true },
    { "@type": "LocationFeatureSpecification", name: "High-Speed Fiber Wi-Fi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Free Secure Parking", value: true },
    { "@type": "LocationFeatureSpecification", name: "24/7 Geyser Hot Water", value: true },
    { "@type": "LocationFeatureSpecification", name: "Valley View Balcony", value: true },
    { "@type": "LocationFeatureSpecification", name: "Tour & Taxi Desk", value: true },
    { "@type": "LocationFeatureSpecification", name: "Electric Room Heaters", value: true }
  ]
};

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
        rootMargin: "0px 0px -10px 0px",
        threshold: 0.04,
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

      {/* Structured Data Schema */}
      <StructuredData data={lodgingBusinessSchema} />

      {/* Location & How to Reach */}
      <LocationSection />

      {/* Frequently Asked Questions */}
      <FAQAccordion
        title="Frequently Asked Questions About Dev Homestay"
        subtitle="Helpful answers about our location, vegetarian food, parking, winter heating, and booking policies."
        badge="Guest FAQ"
        items={HOMEPAGE_FAQS}
      />

      {/* Blog & Travel Guides */}
      <BlogSection />

      {/* Footer */}
      <Footer />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions />
    </main>
  );
}

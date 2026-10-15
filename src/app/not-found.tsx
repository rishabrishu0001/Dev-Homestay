import React from "react";
import Link from "next/link";
import { Compass, Home, Phone, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main
        style={{
          minHeight: "75vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          paddingTop: "120px",
          paddingBottom: "80px",
          backgroundColor: "var(--bg-page)",
          textAlign: "center",
        }}
      >
        <div className="container" style={{ maxWidth: "640px" }}>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "6px 14px",
              borderRadius: "9999px",
              backgroundColor: "var(--primary-surface)",
              color: "var(--primary)",
              fontSize: "0.82rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.8px",
              marginBottom: "16px",
            }}
          >
            <Compass size={14} /> Page Not Found
          </span>
          <h1
            className="font-serif"
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.2rem)",
              color: "var(--primary)",
              lineHeight: 1.2,
              marginBottom: "16px",
            }}
          >
            Looks Like You Wandered Off the Mountain Trail
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-muted)",
              lineHeight: 1.7,
              marginBottom: "32px",
            }}
          >
            The page you are looking for doesn&apos;t exist or has moved. Let us help you find your way back to our cozy homestay in the Shimla pines.
          </p>

          <div
            style={{
              display: "flex",
              gap: "14px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "36px",
            }}
          >
            <Link href="/" className="btn btn-primary" style={{ padding: "12px 24px" }}>
              <Home size={16} /> Return to Homepage
            </Link>
            <Link href="/contact" className="btn btn-outline" style={{ padding: "12px 24px" }}>
              <Phone size={16} /> Contact Host
            </Link>
          </div>

          <div
            style={{
              background: "var(--bg-card)",
              borderRadius: "var(--radius-lg)",
              padding: "24px",
              border: "1px solid var(--border-color)",
              textAlign: "left",
            }}
          >
            <h3
              style={{
                fontSize: "1rem",
                color: "var(--primary)",
                fontWeight: 700,
                marginBottom: "14px",
              }}
            >
              Popular Homestay Pages:
            </h3>
            <ul
              style={{
                listStyle: "none",
                padding: 0,
                margin: 0,
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: "10px",
              }}
            >
              <li>
                <Link
                  href="/rooms/cedar-view-deluxe-room"
                  style={{
                    color: "var(--text-main)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.9rem",
                  }}
                >
                  <ArrowRight size={13} color="var(--accent)" /> Cedar View Deluxe Room
                </Link>
              </li>
              <li>
                <Link
                  href="/rooms/family-suite"
                  style={{
                    color: "var(--text-main)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.9rem",
                  }}
                >
                  <ArrowRight size={13} color="var(--accent)" /> Cozy Family Suite with Kitchen
                </Link>
              </li>
              <li>
                <Link
                  href="/pure-vegetarian-homestay-shimla"
                  style={{
                    color: "var(--text-main)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.9rem",
                  }}
                >
                  <ArrowRight size={13} color="var(--accent)" /> Pure Vegetarian Food
                </Link>
              </li>
              <li>
                <Link
                  href="/tours"
                  style={{
                    color: "var(--text-main)",
                    textDecoration: "none",
                    display: "flex",
                    alignItems: "center",
                    gap: "6px",
                    fontSize: "0.9rem",
                  }}
                >
                  <ArrowRight size={13} color="var(--accent)" /> Shimla & Himachal Tours
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}

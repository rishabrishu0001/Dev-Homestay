import React from "react";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { BookOpen, Clock, Tag, ArrowLeft, ChevronRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StructuredData } from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Shimla Travel Blog 2026 – Best Stays, Sightseeing & Local Guides | Dev Homestay",
  description:
    "Expert Shimla travel guides for 2026: best homestays, snowfall tips, family stays with kitchen, Mall Road travel, and Spiti-Kinnaur tours by Dev Homestay, Shimla.",
  alternates: {
    canonical: "https://www.devhomestay.in/blog",
  },
  openGraph: {
    title: "Shimla Travel Blog 2026 – Expert Guides & Local Insights | Dev Homestay",
    description:
      "Discover the best stays, sightseeing spots, seasonal tips, and honest travel guides for Shimla from your local hosts at Dev Homestay.",
    url: "https://www.devhomestay.in/blog",
    siteName: "Dev Homestay",
    images: [
      {
        url: "https://www.devhomestay.in/images/views/misty-valley-clouds-view.jpg",
        width: 1200,
        height: 630,
        alt: "Dev Homestay Shimla misty valley views and deodar forest",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shimla Travel Blog 2026 – Expert Guides | Dev Homestay",
    description: "Honest Shimla travel guides, snowfall tips, and local itineraries.",
    images: ["https://www.devhomestay.in/images/views/misty-valley-clouds-view.jpg"],
  },
};

export default function BlogListPage() {
  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1);

  return (
    <>
      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Shimla Travel Blog 2026 – Dev Homestay",
          description: "Expert Shimla travel guides, homestay vs hotel guides, seasonal tips and itineraries.",
          url: "https://www.devhomestay.in/blog",
          isPartOf: {
            "@type": "WebSite",
            name: "Dev Homestay",
            url: "https://www.devhomestay.in",
          },
        }}
      />
      <Navbar />

      <main style={{ paddingTop: "80px" }}>
        {/* Hero */}
        <section
          style={{
            background: "linear-gradient(135deg, var(--bg-dark) 0%, #1a4231 100%)",
            padding: "80px 0 60px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage:
                "url(/images/views/misty-valley-clouds-view.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.18,
            }}
          />
          <div className="container" style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
            <div style={{ marginBottom: "16px", display: "flex", justifyContent: "center" }}>
              <Breadcrumbs
                items={[
                  { label: "Blog", href: "/blog" },
                ]}
              />
            </div>
            <div className="section-tag" style={{ display: "inline-flex", marginBottom: "20px" }}>
              <BookOpen size={14} />
              Shimla Travel Blog
            </div>
            <h1
              className="font-serif"
              style={{
                fontSize: "clamp(2rem, 5vw, 3.2rem)",
                color: "#fff",
                lineHeight: 1.2,
                marginBottom: "18px",
                fontWeight: 600,
              }}
            >
              Expert Guides & Local Insights<br />
              <span style={{ color: "#f3c27e" }}>for Shimla Travellers</span>
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                color: "rgba(255,255,255,0.78)",
                maxWidth: "620px",
                margin: "0 auto 28px",
                lineHeight: 1.7,
              }}
            >
              Honest advice on the best stays, hotels, homestays, sightseeing spots, and seasonal tips — from hosts who have lived in Shimla for 30+ years.
            </p>
            <Link href="/#blog" style={{ color: "rgba(255,255,255,0.65)", display: "inline-flex", alignItems: "center", gap: "6px", fontSize: "0.88rem" }}>
              <ArrowLeft size={14} /> Back to Homepage
            </Link>
          </div>
        </section>

        {/* Blog Content */}
        <section className="section-padding">
          <div className="container">
            {/* Featured */}
            <Link
              href={`/blog/${featured.slug}`}
              style={{ display: "block", textDecoration: "none", color: "inherit", marginBottom: "48px" }}
            >
              <article
                style={{
                  display: "grid",
                  gridTemplateColumns: "clamp(280px, 50%, 520px) 1fr",
                  borderRadius: "var(--radius-xl)",
                  overflow: "hidden",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-color)",
                  boxShadow: "var(--shadow-md)",
                  minHeight: "400px",
                }}
              >
                <div style={{ position: "relative", overflow: "hidden" }}>
                  <Image
                    src={featured.coverImage}
                    alt={featured.coverAlt}
                    fill
                    style={{ objectFit: "cover" }}
                    sizes="50vw"
                  />
                  <div
                    style={{
                      position: "absolute",
                      inset: 0,
                      background: "linear-gradient(135deg,rgba(15,36,26,0.4) 0%,transparent 60%)",
                    }}
                  />
                  <span
                    style={{
                      position: "absolute",
                      top: "18px",
                      left: "18px",
                      background: "#d89b33",
                      color: "#fff",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      letterSpacing: "1px",
                      textTransform: "uppercase",
                      padding: "5px 12px",
                      borderRadius: "9999px",
                    }}
                  >
                    Featured Article
                  </span>
                  <span
                    style={{
                      position: "absolute",
                      bottom: "18px",
                      left: "18px",
                      background: featured.categoryColor,
                      color: "#fff",
                      fontSize: "0.7rem",
                      fontWeight: 700,
                      textTransform: "uppercase",
                      letterSpacing: "0.8px",
                      padding: "5px 12px",
                      borderRadius: "9999px",
                    }}
                  >
                    {featured.category}
                  </span>
                </div>
                <div
                  style={{
                    padding: "44px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    gap: "16px",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", flexWrap: "wrap" }}>
                    <span style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "0.8rem", color: "var(--text-muted)" }}>
                      <Clock size={12} /> {featured.readTime}
                    </span>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>{featured.publishDate}</span>
                  </div>
                  <h2 className="font-serif" style={{ fontSize: "1.65rem", color: "var(--primary)", lineHeight: 1.3 }}>
                    {featured.title}
                  </h2>
                  <p style={{ fontSize: "1rem", lineHeight: 1.7, color: "var(--text-muted)" }}>{featured.excerpt}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                    {featured.tags.slice(0, 3).map((t) => (
                      <span
                        key={t}
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          fontSize: "0.72rem",
                          fontWeight: 600,
                          color: "var(--primary)",
                          background: "var(--primary-surface)",
                          padding: "4px 10px",
                          borderRadius: "9999px",
                        }}
                      >
                        <Tag size={10} /> {t}
                      </span>
                    ))}
                  </div>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", color: "var(--accent)", fontWeight: 700, fontSize: "0.9rem" }}>
                    Read Full Article <ChevronRight size={16} />
                  </div>
                </div>
              </article>
            </Link>

            {/* Grid */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                gap: "28px",
              }}
            >
              {rest.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  style={{ display: "block", textDecoration: "none", color: "inherit" }}
                >
                  <article
                    style={{
                      background: "var(--bg-card)",
                      borderRadius: "var(--radius-lg)",
                      overflow: "hidden",
                      border: "1px solid var(--border-color)",
                      boxShadow: "var(--shadow-sm)",
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                      transition: "box-shadow 0.35s, transform 0.35s",
                    }}
                  >
                    <div style={{ position: "relative", height: "210px", overflow: "hidden", flexShrink: 0 }}>
                      <Image
                        src={post.coverImage}
                        alt={post.coverAlt}
                        fill
                        style={{ objectFit: "cover" }}
                        sizes="33vw"
                      />
                      <div
                        style={{
                          position: "absolute",
                          inset: 0,
                          background: "linear-gradient(180deg, transparent 40%, rgba(15,36,26,0.3) 100%)",
                        }}
                      />
                      <span
                        style={{
                          position: "absolute",
                          bottom: "14px",
                          left: "14px",
                          background: post.categoryColor,
                          color: "#fff",
                          fontSize: "0.68rem",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.8px",
                          padding: "4px 10px",
                          borderRadius: "9999px",
                        }}
                      >
                        {post.category}
                      </span>
                    </div>
                    <div style={{ padding: "22px 22px 18px", display: "flex", flexDirection: "column", gap: "10px", flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                        <span style={{ display: "flex", alignItems: "center", gap: "4px", fontSize: "0.78rem", color: "var(--text-muted)" }}>
                          <Clock size={11} /> {post.readTime}
                        </span>
                        <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>{post.publishDate}</span>
                      </div>
                      <h2 className="font-serif" style={{ fontSize: "1.1rem", color: "var(--primary)", lineHeight: 1.4 }}>
                        {post.title}
                      </h2>
                      <p style={{ fontSize: "0.875rem", lineHeight: 1.65, color: "var(--text-muted)", flex: 1 }}>{post.excerpt}</p>
                      <div
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "4px",
                          fontSize: "0.82rem",
                          fontWeight: 700,
                          color: "var(--accent)",
                          paddingTop: "10px",
                          borderTop: "1px solid var(--border-subtle)",
                        }}
                      >
                        Read Article <ChevronRight size={14} />
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}

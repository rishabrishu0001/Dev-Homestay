import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import {
  ArrowLeft,
  Clock,
  Tag,
  User,
  HelpCircle,
  BookOpen,
  ChevronRight,
} from "lucide-react";
import { BLOG_POSTS } from "@/data/blogData";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { FloatingActions } from "@/components/FloatingActions";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { StructuredData } from "@/components/StructuredData";
import { FAQAccordion } from "@/components/FAQAccordion";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: {
      canonical: `https://www.devhomestay.in/blog/${post.slug}`,
    },
    openGraph: {
      title: post.metaTitle,
      description: post.metaDescription,
      url: `https://www.devhomestay.in/blog/${post.slug}`,
      siteName: "Dev Homestay",
      images: [
        {
          url: `https://www.devhomestay.in${post.coverImage}`,
          width: 1200,
          height: 630,
          alt: post.coverAlt,
        },
      ],
      type: "article",
      publishedTime: post.publishDateIso,
      modifiedTime: post.dateModifiedIso,
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [`https://www.devhomestay.in${post.coverImage}`],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const related = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    image: [`https://www.devhomestay.in${post.coverImage}`],
    datePublished: post.publishDateIso,
    dateModified: post.dateModifiedIso,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: "Dev Homestay",
      url: "https://www.devhomestay.in",
      logo: {
        "@type": "ImageObject",
        url: "https://www.devhomestay.in/images/branding/apple-touch-icon.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://www.devhomestay.in/blog/${post.slug}`,
    },
  };

  return (
    <>
      <StructuredData data={blogSchema} />
      <Navbar />

      <main style={{ paddingTop: "80px" }}>
        {/* Hero Banner */}
        <div
          style={{
            position: "relative",
            height: "clamp(320px, 50vw, 520px)",
            overflow: "hidden",
          }}
        >
          <Image
            src={post.coverImage}
            alt={post.coverAlt}
            fill
            priority
            style={{ objectFit: "cover" }}
            sizes="100vw"
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(180deg, rgba(15,36,26,0.25) 0%, rgba(15,36,26,0.72) 100%)",
            }}
          />
          <div
            className="container"
            style={{
              position: "relative",
              zIndex: 1,
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-end",
              paddingBottom: "48px",
            }}
          >
            {/* Breadcrumb */}
            <div style={{ marginBottom: "16px" }}>
              <Breadcrumbs
                items={[
                  { label: "Blog", href: "/blog" },
                  { label: post.title },
                ]}
              />
            </div>

            <span
              style={{
                display: "inline-block",
                background: post.categoryColor,
                color: "#fff",
                fontSize: "0.72rem",
                fontWeight: 700,
                letterSpacing: "1px",
                textTransform: "uppercase",
                padding: "5px 14px",
                borderRadius: "9999px",
                marginBottom: "14px",
                width: "fit-content",
              }}
            >
              {post.category}
            </span>

            <h1
              className="font-serif"
              style={{
                fontSize: "clamp(1.6rem, 4vw, 2.6rem)",
                color: "#fff",
                lineHeight: 1.25,
                maxWidth: "820px",
                fontWeight: 600,
                marginBottom: "18px",
              }}
            >
              {post.title}
            </h1>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "18px",
                flexWrap: "wrap",
              }}
            >
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.85rem",
                }}
              >
                <User size={14} />
                {post.author} · {post.authorRole}
              </span>
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                  color: "rgba(255,255,255,0.8)",
                  fontSize: "0.85rem",
                }}
              >
                <Clock size={14} /> {post.readTime} · {post.publishDate}
              </span>
            </div>
          </div>
        </div>

        {/* Article Body */}
        <div className="container" style={{ maxWidth: "900px", padding: "60px 24px 80px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "0" }}>

            {/* Back Link */}
            <Link
              href="/blog"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                color: "var(--primary)",
                fontWeight: 600,
                fontSize: "0.88rem",
                marginBottom: "40px",
              }}
            >
              <ArrowLeft size={15} /> All Travel Guides
            </Link>

            {/* Tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "40px" }}>
              {post.tags.map((t) => (
                <span
                  key={t}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    fontSize: "0.73rem",
                    fontWeight: 600,
                    color: "var(--primary)",
                    background: "var(--primary-surface)",
                    padding: "5px 12px",
                    borderRadius: "9999px",
                  }}
                >
                  <Tag size={10} /> {t}
                </span>
              ))}
            </div>

            {/* Excerpt / Lead */}
            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: 1.75,
                color: "var(--text-muted)",
                fontStyle: "italic",
                borderLeft: "4px solid var(--primary-light)",
                paddingLeft: "20px",
                marginBottom: "48px",
              }}
            >
              {post.excerpt}
            </p>

            {/* Article Sections */}
            {post.sections.map((section, i) => (
              <div key={i} style={{ marginBottom: "44px" }}>
                <h2
                  className="font-serif"
                  style={{
                    fontSize: "1.45rem",
                    color: "var(--primary)",
                    marginBottom: "16px",
                    fontWeight: 600,
                    lineHeight: 1.3,
                  }}
                >
                  {section.heading}
                </h2>
                <div
                  style={{
                    fontSize: "1.02rem",
                    lineHeight: 1.8,
                    color: "var(--text-main)",
                    whiteSpace: "pre-line",
                  }}
                >
                  {section.body}
                </div>
                {i < post.sections.length - 1 && (
                  <div
                    style={{
                      height: "1px",
                      background: "var(--border-subtle)",
                      marginTop: "44px",
                    }}
                  />
                )}
              </div>
            ))}

            {/* FAQ Section */}
            <div style={{ marginTop: "48px" }}>
              <FAQAccordion
                title="Frequently Asked Questions"
                items={post.faqs.map((f) => ({
                  question: f.q,
                  answer: f.a,
                }))}
              />
            </div>

            {/* Internal Links Recommendation Box */}
            <div
              style={{
                marginTop: "48px",
                padding: "28px",
                background: "var(--bg-card)",
                borderRadius: "var(--radius-lg)",
                border: "1px solid var(--border-color)",
              }}
            >
              <h3
                className="font-serif"
                style={{ fontSize: "1.2rem", color: "var(--primary)", marginBottom: "14px" }}
              >
                Plan Your Stay & Sightseeing in Shimla
              </h3>
              <p style={{ fontSize: "0.92rem", color: "var(--text-muted)", marginBottom: "16px", lineHeight: 1.6 }}>
                Planning a trip to Shimla? Explore our handpicked rooms, dining, and local tour packages with transparent pricing:
              </p>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "12px",
                }}
              >
                <Link
                  href="/rooms/cedar-view-deluxe-room"
                  style={{
                    padding: "10px 14px",
                    background: "var(--bg-surface)",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border-color)",
                    fontSize: "0.86rem",
                    color: "var(--primary)",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  → Cedar View Deluxe Room (from ₹2,499)
                </Link>
                <Link
                  href="/rooms/valley-view-room"
                  style={{
                    padding: "10px 14px",
                    background: "var(--bg-surface)",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border-color)",
                    fontSize: "0.86rem",
                    color: "var(--primary)",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  → Valley View Room with Balcony (from ₹2,799)
                </Link>
                <Link
                  href="/rooms/family-suite"
                  style={{
                    padding: "10px 14px",
                    background: "var(--bg-surface)",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border-color)",
                    fontSize: "0.86rem",
                    color: "var(--primary)",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  → Family Suite with Private Kitchen (from ₹4,199)
                </Link>
                <Link
                  href="/pure-vegetarian-homestay-shimla"
                  style={{
                    padding: "10px 14px",
                    background: "var(--bg-surface)",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border-color)",
                    fontSize: "0.86rem",
                    color: "var(--primary)",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  → Pure Vegetarian Home Dining
                </Link>
                <Link
                  href="/homestay-near-mall-road-shimla"
                  style={{
                    padding: "10px 14px",
                    background: "var(--bg-surface)",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border-color)",
                    fontSize: "0.86rem",
                    color: "var(--primary)",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  → Homestay 4 km from Mall Road
                </Link>
                <Link
                  href="/tours"
                  style={{
                    padding: "10px 14px",
                    background: "var(--bg-surface)",
                    borderRadius: "var(--radius-sm)",
                    border: "1px solid var(--border-color)",
                    fontSize: "0.86rem",
                    color: "var(--primary)",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  → Shimla, Kufri, Spiti & Kinnaur Tours
                </Link>
              </div>
            </div>

            {/* CTA Box */}
            <div
              style={{
                marginTop: "56px",
                background: "linear-gradient(135deg, var(--primary) 0%, #2d6850 100%)",
                borderRadius: "var(--radius-xl)",
                padding: "44px",
                textAlign: "center",
                color: "#fff",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  background: "rgba(255,255,255,0.12)",
                  borderRadius: "9999px",
                  padding: "6px 16px",
                  fontSize: "0.8rem",
                  fontWeight: 600,
                  marginBottom: "18px",
                  letterSpacing: "0.8px",
                  textTransform: "uppercase",
                }}
              >
                <BookOpen size={13} /> Book Direct · Best Rates
              </div>
              <h2
                className="font-serif"
                style={{
                  fontSize: "1.7rem",
                  fontWeight: 600,
                  marginBottom: "12px",
                  lineHeight: 1.3,
                }}
              >
                Ready to Experience Dev Homestay?
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 1.7, opacity: 0.85, marginBottom: "28px", maxWidth: "480px", margin: "0 auto 28px" }}>
                Panoramic Himalayan views, pure vegetarian home-cooked food, and 30+ years of hospitality. From Rs 2,499/night.
              </p>
              <div style={{ display: "flex", gap: "14px", justifyContent: "center", flexWrap: "wrap" }}>
                <Link
                  href="/#booking"
                  className="btn"
                  style={{
                    background: "var(--accent)",
                    color: "#fff",
                    padding: "14px 32px",
                    borderRadius: "9999px",
                    fontWeight: 700,
                  }}
                >
                  Check Availability
                </Link>
                <a
                  href="https://wa.me/918447056787?text=Hello%2C%20I%20read%20your%20blog%20and%20want%20to%20book%20a%20room%20at%20Dev%20Homestay%20Shimla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    color: "#fff",
                    border: "1.5px solid rgba(255,255,255,0.35)",
                    padding: "14px 32px",
                    borderRadius: "9999px",
                    fontWeight: 700,
                  }}
                >
                  WhatsApp Enquiry
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <section
            style={{
              background: "var(--bg-surface)",
              borderTop: "1px solid var(--border-color)",
              padding: "60px 0 80px",
            }}
          >
            <div className="container">
              <h2
                className="font-serif"
                style={{
                  fontSize: "1.6rem",
                  color: "var(--primary)",
                  marginBottom: "36px",
                  fontWeight: 600,
                  textAlign: "center",
                }}
              >
                More Shimla Travel Guides
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                  gap: "24px",
                }}
              >
                {related.map((rp) => (
                  <Link
                    key={rp.slug}
                    href={`/blog/${rp.slug}`}
                    style={{ display: "block", textDecoration: "none", color: "inherit" }}
                  >
                    <article
                      style={{
                        background: "var(--bg-card)",
                        borderRadius: "var(--radius-lg)",
                        overflow: "hidden",
                        border: "1px solid var(--border-color)",
                        boxShadow: "var(--shadow-sm)",
                      }}
                    >
                      <div style={{ position: "relative", height: "180px", overflow: "hidden" }}>
                        <Image
                          src={rp.coverImage}
                          alt={rp.coverAlt}
                          fill
                          style={{ objectFit: "cover" }}
                          sizes="33vw"
                        />
                        <div
                          style={{
                            position: "absolute",
                            inset: 0,
                            background: "linear-gradient(180deg,transparent 50%,rgba(15,36,26,0.3) 100%)",
                          }}
                        />
                        <span
                          style={{
                            position: "absolute",
                            bottom: "12px",
                            left: "12px",
                            background: rp.categoryColor,
                            color: "#fff",
                            fontSize: "0.65rem",
                            fontWeight: 700,
                            textTransform: "uppercase",
                            letterSpacing: "0.8px",
                            padding: "4px 10px",
                            borderRadius: "9999px",
                          }}
                        >
                          {rp.category}
                        </span>
                      </div>
                      <div style={{ padding: "18px 18px 16px" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "6px",
                            fontSize: "0.75rem",
                            color: "var(--text-muted)",
                            marginBottom: "8px",
                          }}
                        >
                          <Clock size={11} /> {rp.readTime}
                        </div>
                        <h3
                          className="font-serif"
                          style={{
                            fontSize: "1rem",
                            color: "var(--primary)",
                            lineHeight: 1.4,
                            marginBottom: "10px",
                          }}
                        >
                          {rp.title}
                        </h3>
                        <span
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: "4px",
                            fontSize: "0.8rem",
                            fontWeight: 700,
                            color: "var(--accent)",
                          }}
                        >
                          Read Guide <ChevronRight size={13} />
                        </span>
                      </div>
                    </article>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
      <FloatingActions />
    </>
  );
}

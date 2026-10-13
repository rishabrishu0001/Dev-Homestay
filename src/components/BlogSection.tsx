"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BookOpen, ArrowRight, Clock, Tag, ChevronRight } from "lucide-react";
import { BLOG_POSTS } from "@/data/blogData";
import styles from "./BlogSection.module.css";

export const BlogSection: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const featured = BLOG_POSTS[0];
  const rest = BLOG_POSTS.slice(1, 6);

  return (
    <section className={`section-padding ${styles.blogSection}`} id="blog">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-tag">
            <BookOpen size={14} />
            Shimla Travel Blog
          </div>
          <h2 className="section-title">Expert Guides & Local Insights</h2>
          <p className="section-desc">
            Discover the best stays, hidden gems, seasonal tips, and honest travel guides for Shimla — written by your hosts who know every trail, viewpoint, and hidden gem.
          </p>
        </div>

        {/* Featured Post */}
        <Link href={`/blog/${featured.slug}`} className={styles.featuredLink}>
          <article
            className={`${styles.featuredCard} reveal-slide-up`}
            onMouseEnter={() => setHoveredId(featured.slug)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div className={styles.featuredImageWrap}>
              <Image
                src={featured.coverImage}
                alt={featured.coverAlt}
                fill
                className={`${styles.featuredImage} ${hoveredId === featured.slug ? styles.imageZoom : ""}`}
                sizes="(max-width: 768px) 100vw, 55vw"
              />
              <div className={styles.featuredOverlay} />
              <span
                className={styles.categoryBadge}
                style={{ background: featured.categoryColor }}
              >
                {featured.category}
              </span>
              <span className={styles.featuredLabel}>Featured Article</span>
            </div>
            <div className={styles.featuredContent}>
              <div className={styles.metaRow}>
                <span className={styles.metaItem}>
                  <Clock size={13} /> {featured.readTime}
                </span>
                <span className={styles.metaDot} />
                <span className={styles.metaItem}>{featured.publishDate}</span>
              </div>
              <h3 className={styles.featuredTitle}>{featured.title}</h3>
              <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
              <div className={styles.tagsRow}>
                {featured.tags.slice(0, 3).map((t) => (
                  <span key={t} className={styles.tag}>
                    <Tag size={10} /> {t}
                  </span>
                ))}
              </div>
              <div className={styles.readMoreBtn}>
                Read Full Article <ArrowRight size={16} />
              </div>
            </div>
          </article>
        </Link>

        {/* Grid Posts */}
        <div className={styles.postsGrid}>
          {rest.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className={styles.postLink}>
              <article
                className={`${styles.postCard} reveal-card`}
                onMouseEnter={() => setHoveredId(post.slug)}
                onMouseLeave={() => setHoveredId(null)}
              >
                <div className={styles.postImageWrap}>
                  <Image
                    src={post.coverImage}
                    alt={post.coverAlt}
                    fill
                    className={`${styles.postImage} ${hoveredId === post.slug ? styles.imageZoom : ""}`}
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className={styles.postOverlay} />
                  <span
                    className={styles.categoryBadge}
                    style={{ background: post.categoryColor }}
                  >
                    {post.category}
                  </span>
                </div>
                <div className={styles.postContent}>
                  <div className={styles.metaRow}>
                    <span className={styles.metaItem}>
                      <Clock size={12} /> {post.readTime}
                    </span>
                    <span className={styles.metaDot} />
                    <span className={styles.metaItem}>{post.publishDate}</span>
                  </div>
                  <h3 className={styles.postTitle}>{post.title}</h3>
                  <p className={styles.postExcerpt}>{post.excerpt}</p>
                  <div className={styles.postFooter}>
                    <span className={styles.readLink}>
                      Read More <ChevronRight size={14} />
                    </span>
                  </div>
                </div>
              </article>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className={styles.viewAllWrap}>
          <Link href="/blog" className={`btn btn-secondary ${styles.viewAllBtn}`}>
            <BookOpen size={17} />
            View All Shimla Travel Guides
          </Link>
          <p className={styles.viewAllNote}>
            6 expert articles · Shimla stays, hotels, snowfall tips &amp; sightseeing
          </p>
        </div>
      </div>
    </section>
  );
};

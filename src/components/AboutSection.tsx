"use client";

import React from "react";
import Image from "next/image";
import { HeartHandshake, Mountain, Utensils, ShieldCheck, Sparkles } from "lucide-react";
import styles from "./AboutSection.module.css";

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section-padding" style={{ backgroundColor: "var(--bg-page)" }}>
      <div className="container">
        <div className={styles.aboutGrid}>
          {/* Image Mosaic */}
          <div className={`${styles.imageMosaic} reveal-slide-left`}>
            <div className={styles.mainImgBox}>
              <Image
                src="/images/views/homestay-snow-covered-winter.jpg"
                alt="Dev Homestay Exterior in Winter Snow"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.subImgBox1}>
              <Image
                src="/images/views/misty-valley-clouds-view.jpg"
                alt="Sea of Clouds View from Balcony"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className={styles.subImgBox2}>
              <Image
                src="/images/views/snowy-pine-forest-trail.jpg"
                alt="Snowy Pine Trail Outside Homestay"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                style={{ objectFit: "cover" }}
              />
            </div>

            <div className={styles.experienceBadge}>
              <span className={styles.expYears}>30+</span>
              <span className={styles.expText}>Years Hospitality</span>
            </div>
          </div>

          {/* Content Column */}
          <div className={`${styles.contentCol} reveal-slide-right`}>
            <div>
              <span className="section-tag">
                <Sparkles size={14} />
                Established in 2015
              </span>
              <h2 className="section-title">
                A Home in the Hills. <br />
                A Taste of Himachal.
              </h2>
            </div>

            <p className={styles.storyLead}>
              Welcome to Dev Homestay, a family-run homestay in Shimla where the beauty of the Himalayas meets the warmth of a traditional Indian home.
            </p>

            <p className={styles.storyText}>
              Established in 2015, Dev Homestay was created with a simple idea — to offer travellers more than just a room. Located in the peaceful Dudhli–Bharari area (~4 km from Mall Road), our host brings over 30 years of hospitality experience, including leadership with some of India&apos;s leading five-star hotels. That professional finesse, combined with genuine homestyle warmth and pure vegetarian home-cooked meals, is what makes Dev Homestay unique.
            </p>

            {/* Feature Cards Grid */}
            <div className={styles.featuresGrid}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <HeartHandshake size={20} />
                </div>
                <div>
                  <h3 className={styles.featureTitle}>30+ Yrs 5-Star Exp</h3>
                  <p className={styles.featureSub}>Luxury hotel professionalism infused into personal family warmth.</p>
                </div>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Mountain size={20} />
                </div>
                <div>
                  <h3 className={styles.featureTitle}>Peaceful Dudhli Location</h3>
                  <p className={styles.featureSub}>Just 4 km from Mall Road, surrounded by quiet deodar pine woods.</p>
                </div>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <Utensils size={20} />
                </div>
                <div>
                  <h3 className={styles.featureTitle}>Pure Vegetarian Dining</h3>
                  <p className={styles.featureSub}>Fresh homemade Himachali & Indian vegetarian recipes at the family table.</p>
                </div>
              </div>

              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h3 className={styles.featureTitle}>Dedicated Tour Desk</h3>
                  <p className={styles.featureSub}>Full support for Shimla sightseeing, Kufri, Spiti, Kinnaur & taxi services.</p>
                </div>
              </div>
            </div>

            {/* Host Quote */}
            <div className={styles.hostQuoteBox}>
              <p>
                &ldquo;Come as a guest. Leave as family. Stay with us for the location, come back for the food, and remember us for the people.&rdquo;
              </p>
              <div className={styles.hostSignature}>— Dev &amp; Family, Dev Homestay Shimla</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

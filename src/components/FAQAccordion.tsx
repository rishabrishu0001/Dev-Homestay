"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { StructuredData } from "./StructuredData";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  title?: string;
  subtitle?: string;
  badge?: string;
  items: FAQItem[];
}

export const FAQAccordion: React.FC<FAQAccordionProps> = ({
  title = "Frequently Asked Questions",
  subtitle = "Everything you need to know about staying, booking, and dining at Dev Homestay Shimla.",
  badge = "Help & Clarity",
  items,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <>
      <StructuredData data={schemaData} />
      <section className="section-padding" style={{ backgroundColor: "var(--bg-surface)" }}>
        <div className="container" style={{ maxWidth: "860px" }}>
          {/* Section Header */}
          <div className="section-header" style={{ marginBottom: "36px" }}>
            <span className="section-tag">
              <Sparkles size={14} />
              {badge}
            </span>
            <h2 className="section-title">{title}</h2>
            {subtitle && <p className="section-desc">{subtitle}</p>}
          </div>

          {/* Accordion List */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {items.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  style={{
                    backgroundColor: "var(--bg-card)",
                    border: isOpen
                      ? "1px solid var(--primary-light)"
                      : "1px solid var(--border-color)",
                    borderRadius: "var(--radius-md)",
                    overflow: "hidden",
                    transition: "all var(--transition-fast)",
                    boxShadow: isOpen ? "var(--shadow-sm)" : "none",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => toggleIndex(idx)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${idx}`}
                    id={`faq-question-${idx}`}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      gap: "16px",
                      padding: "18px 22px",
                      background: "transparent",
                      border: "none",
                      textAlign: "left",
                      cursor: "pointer",
                      color: isOpen ? "var(--primary)" : "var(--text-main)",
                      fontWeight: 600,
                      fontSize: "1rem",
                      lineHeight: 1.45,
                    }}
                  >
                    <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                      <HelpCircle size={18} color="var(--accent)" style={{ flexShrink: 0 }} />
                      <span>{item.q}</span>
                    </span>
                    <ChevronDown
                      size={18}
                      style={{
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                        transition: "transform var(--transition-fast)",
                        flexShrink: 0,
                        color: "var(--accent)",
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div
                      id={`faq-answer-${idx}`}
                      role="region"
                      aria-labelledby={`faq-question-${idx}`}
                      style={{
                        padding: "0 22px 20px 50px",
                        color: "var(--text-muted)",
                        fontSize: "0.94rem",
                        lineHeight: 1.7,
                      }}
                    >
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

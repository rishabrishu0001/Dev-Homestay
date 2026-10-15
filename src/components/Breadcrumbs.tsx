import React from "react";
import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { StructuredData } from "./StructuredData";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  const fullItems: BreadcrumbItem[] = [
    { label: "Home", href: "/" },
    ...items,
  ];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: fullItems.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: item.href
        ? `https://www.devhomestay.in${item.href === "/" ? "" : item.href}`
        : undefined,
    })),
  };

  return (
    <>
      <StructuredData data={schemaData} />
      <nav
        aria-label="Breadcrumb"
        style={{
          display: "flex",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "8px",
          fontSize: "0.86rem",
          color: "var(--text-muted)",
          padding: "16px 0",
        }}
      >
        {fullItems.map((item, index) => {
          const isLast = index === fullItems.length - 1;
          return (
            <React.Fragment key={index}>
              {index > 0 && <ChevronRight size={13} style={{ opacity: 0.6 }} />}
              {isLast || !item.href ? (
                <span
                  style={{
                    color: "var(--primary)",
                    fontWeight: 600,
                  }}
                  aria-current="page"
                >
                  {index === 0 && <Home size={13} style={{ display: "inline", marginRight: "4px" }} />}
                  {item.label}
                </span>
              ) : (
                <Link
                  href={item.href}
                  style={{
                    color: "inherit",
                    textDecoration: "none",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "4px",
                    transition: "color var(--transition-fast)",
                  }}
                >
                  {index === 0 && <Home size={13} />}
                  <span>{item.label}</span>
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </nav>
    </>
  );
};

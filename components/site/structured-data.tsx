import {
  LICENSE_PRICE_IDR,
  SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_URL,
} from "@/lib/site";
import { FAQS } from "@/lib/faqs";

/**
 * JSON-LD structured data for Google rich results. Combines Organization,
 * WebSite, SoftwareApplication, and FAQPage into one @graph so the crawler
 * gets a complete, linked picture of the brand "Sekolah by GloApp".
 */
export function StructuredData() {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        alternateName: "GloApp Sekolah",
        url: SITE_URL,
        logo: `${SITE_URL}/icon.svg`,
        description: SITE_DESCRIPTION,
        sameAs: [WHATSAPP_URL],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: SITE_NAME,
        url: SITE_URL,
        inLanguage: "id-ID",
        publisher: { "@id": `${SITE_URL}/#organization` },
      },
      {
        "@type": "SoftwareApplication",
        "@id": `${SITE_URL}/#software`,
        name: SITE_NAME,
        applicationCategory: "BusinessApplication",
        applicationSubCategory: "School Management / ERP",
        operatingSystem: "Web, Android, iOS",
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        inLanguage: "id-ID",
        publisher: { "@id": `${SITE_URL}/#organization` },
        offers: {
          "@type": "Offer",
          price: String(LICENSE_PRICE_IDR),
          priceCurrency: "IDR",
          category: "Lifetime license",
          url: `${SITE_URL}/#lisensi`,
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/#faq`,
        mainEntity: FAQS.map(({ q, a }) => ({
          "@type": "Question",
          name: q,
          acceptedAnswer: { "@type": "Answer", text: a },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      // JSON-LD is static, trusted content — safe to inline.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
    />
  );
}

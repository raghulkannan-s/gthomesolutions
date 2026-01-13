import { siteConfig, paintingServices, civilServices, addonServices } from "@/lib/site";

export function JsonLd() {
  const allServices = [...paintingServices, ...civilServices, ...addonServices].map(
    (s) => s.title
  );

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description:
      "Professional painting, waterproofing, and renovation services in Chennai.",
    url: "https://gthomesolution.com",
    telephone: `+91${siteConfig.phone}`,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.area,
      addressRegion: "Tamil Nadu",
      postalCode: siteConfig.address.pincode,
      addressCountry: "IN",
    },
    areaServed: {
      "@type": "City",
      name: "Chennai",
    },
    founder: {
      "@type": "Person",
      name: siteConfig.founder,
    },
    foundingDate: "2024-08",
    priceRange: "$$",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Home Improvement Services",
      itemListElement: allServices.map((service, index) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service,
        },
        position: index + 1,
      })),
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

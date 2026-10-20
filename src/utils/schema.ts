import type { Faq } from "../data/faq";
import type { Destination } from "../data/destinations";

export function faqSchema(faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// Short-form answers built from the destination record. The page's sections carry
// the long version, so the accordion adds a direct answer without restating it.
export function destinationFaqs(d: Destination): Faq[] {
  return [
    {
      q: `How many days do you need in ${d.name}?`,
      a: `${d.minDays}. Best suited to: ${d.bestFor}.`,
    },
    {
      q: `What is the best time to visit ${d.name}?`,
      a: `${d.bestTime}. ${d.climate}.`,
    },
    {
      q: `How do I get to ${d.name}?`,
      a: d.transport.byTrain,
    },
    {
      q: `What should I eat in ${d.name}?`,
      a: d.namedFoods.map((f) => `${f.name} — ${f.price}`).join("; ") + ".",
    },
    {
      q: `Where should I stay in ${d.name}?`,
      a: d.accommodation.map((a) => `${a.type}: ${a.priceRange}`).join("; ") + ".",
    },
  ];
}

export function destinationPageSchema(d: Destination, url: string, siteName: string) {
  return {
    "@type": "TouristAttraction",
    "@id": `${url}#attraction`,
    name: `${d.name} (${d.chinese})`,
    description: d.description,
    image: new URL(d.image, url).href,
    url,
    address: {
      "@type": "PostalAddress",
      addressRegion: "Guangxi",
      addressCountry: "CN",
    },
    containedInPlace: {
      "@type": "AdministrativeArea",
      name: "Guangxi",
      containedInPlace: { "@type": "Country", name: "China" },
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      url: "https://www.guangxi-province.com",
    },
  };
}

export function breadcrumbSchema(trail: { name: string; url: string }[]) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.name, item: t.url })),
  };
}

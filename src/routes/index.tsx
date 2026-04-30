import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Why } from "@/components/sections/Why";
import { Packages } from "@/components/sections/Packages";
import { Services } from "@/components/sections/Services";
import { Testimonials } from "@/components/sections/Testimonials";
import { Instagram } from "@/components/sections/Instagram";
import { Faq } from "@/components/sections/Faq";
import { Location } from "@/components/sections/Location";
import { FinalCta } from "@/components/sections/FinalCta";
import { useReveal } from "@/hooks/useReveal";

const title =
  "Espaço Elci Gomes — Centro de Estética Avançada em Matinhos";
const description =
  "Estética avançada e cuidado feminino personalizado em Matinhos — PR. Protocolos exclusivos, pós-operatório de excelência e atendimento humanizado por Elci Gomes.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BeautySalon",
          name: "Espaço Elci Gomes — Centro de Estética Avançada",
          image: "https://example.com/og.jpg",
          telephone: "+55 41 99202-8296",
          priceRange: "$$",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Maringá, 71 — Sala 3",
            addressLocality: "Matinhos",
            addressRegion: "PR",
            postalCode: "83260-000",
            addressCountry: "BR",
          },
          openingHours: "Mo-Sa 09:00-19:00",
          sameAs: ["https://www.instagram.com/elci.esteticaebemestar/"],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  useReveal();
  return (
    <div className="bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <About />
        <Why />
        <Packages />
        <Services />
        <Testimonials />
        <Instagram />
        <Faq />
        <Location />
        <FinalCta />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

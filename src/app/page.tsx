import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Bio } from "@/components/sections/Bio";
import { Skills } from "@/components/sections/Skills";
import { Apps } from "@/components/sections/Apps";
import { Services } from "@/components/sections/Services";
import { Technologies } from "@/components/sections/Technologies";
import { Timeline } from "@/components/sections/Timeline";
import { Social, Contact } from "@/components/sections/Contact";
import { siteConfig } from "@/config/site";
import { getSiteUrl } from "@/lib/site-url";

function JsonLd() {
  const siteUrl = getSiteUrl();

  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    jobTitle: siteConfig.role,
    url: siteUrl,
    email: siteConfig.email,
    image: `${siteUrl}${siteConfig.photo.bio}`,
    sameAs: siteConfig.social.map((s) => s.url),
    knowsAbout: siteConfig.skills,
    worksFor: {
      "@type": "Organization",
      name: siteConfig.brand,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function Home() {
  return (
    <>
      <JsonLd />
      <Header />
      <main id="main-content">
        <Hero />
        <Bio />
        <Skills />
        <Services />
        <Apps />
        <Technologies />
        <Timeline />
        <Social />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

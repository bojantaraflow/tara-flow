import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

import Image from "next/image";

import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedToursSection } from "@/components/home/FeaturedToursSection";
import { AboutSection } from "@/components/home/AboutSection";
import { FAQSection } from "@/components/home/FAQSection";
import { ContactSection } from "@/components/home/ContactSection";
import { FadeIn } from "@/components/FadeIn";
import { IntlLink } from "@/i18n/navigation";
import { getFeaturedTours, tours } from "@/data/ture";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations();
  const tours = getFeaturedTours();
  const loc = locale as "bs" | "en";

  const faqItems = [
    { q: t("faq.q1"), a: t("faq.a1") },
    { q: t("faq.q2"), a: t("faq.a2") },
    { q: t("faq.q3"), a: t("faq.a3") },
    { q: t("faq.q4"), a: t("faq.a4") },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristInformationCenter",
    name: "Tara Flow",
    description:
      "Avanturistički turizam u srcu prirode. Rafting, hiking i nezaboravna iskustva na Tari i u okolici Foče.",
    url: "https://taraflow.ba",
    email: "taraflow@gmail.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Foča",
      addressCountry: "BA",
    },
    sameAs: ["https://instagram.com/taraflow"],
    offers: tours.map((tour) => ({
      "@type": "Offer",
      name: tour.nameBs,
      price: tour.price,
      priceCurrency: "EUR",
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FadeIn>
        <HeroSection
        tagline={t("hero.tagline")}
        ctaTours={t("hero.ctaTours")}
        ctaGallery={t("hero.ctaGallery")}
        subtitle={t("hero.subtitle")}
        />
      </FadeIn>

      <FadeIn>
        <FeaturedToursSection
          title={t("home.featuredTours")}
          subtitle={t("home.featuredSubtitle")}
          viewAllLabel={t("home.viewAllTours")}
          bookLabel={t("tours.bookNow")}
          tours={tours}
          locale={loc}
        />
      </FadeIn>

      <FadeIn>
        <AboutSection
          title={t("home.aboutTitle")}
          subtitle={t("home.aboutSubtitle")}
          teaser={t("home.aboutTeaser")}
          stat1={t("home.aboutStat1")}
          stat2={t("home.aboutStat2")}
          linkText={t("home.aboutLink")}
        />
      </FadeIn>

      <FadeIn>
        {/* GALERIJA SEKCIJA - homepage */}
        <section className="relative h-[60vh] overflow-hidden">
          <Image
            src="/images/galerija/tara-lepota.webp"
            alt="Tara Flow Galerija"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-white/60">
              {t("home.galleryTeaser")}
            </p>
            <h2 className="mb-6 text-5xl font-black text-white md:text-6xl">
              {t("home.galleryTitle")}
            </h2>
            <p className="mb-8 max-w-md text-lg text-white/70">
              {t("home.galleryDescription")}
            </p>
            <IntlLink
              href="/galerija"
              className="rounded-full bg-white px-8 py-4 text-lg font-black text-[#0F4C75] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/90 hover:shadow-2xl active:translate-y-0"
            >
              {t("home.galleryCta")}
            </IntlLink>
          </div>
        </section>
      </FadeIn>

      <FadeIn>
        <FAQSection title={t("home.faqTitle")} items={faqItems} />
      </FadeIn>

      <FadeIn>
        <ContactSection
          title={t("home.contactSection")}
          bookLabel={t("nav.book")}
        />
      </FadeIn>
    </>
  );
}

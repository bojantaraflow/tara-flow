import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { FadeIn } from "@/components/FadeIn";
import {
  getTourBySlug,
  getToursBySlugs,
  tours,
} from "@/data/ture";
import { TureGrid } from "@/components/home/TureGrid";
import { BookingForm } from "./BookingForm";

const difficultyColors = {
  Laka: "bg-green-500",
  Srednja: "bg-yellow-500",
  Zahtjevna: "bg-red-500",
} as const;

const difficultyKeys = {
  Laka: "tours.easy",
  Srednja: "tours.medium",
  Zahtjevna: "tours.hard",
} as const;

export function generateStaticParams() {
  return tours.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const tour = getTourBySlug(slug);
  if (!tour) return {};
  const name = locale === "bs" ? tour.nameBs : tour.nameEn;
  return { title: name };
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const tour = getTourBySlug(slug);
  if (!tour) notFound();

  const t = await getTranslations();
  const name = locale === "bs" ? tour.nameBs : tour.nameEn;
  const longDescription =
    locale === "bs" ? tour.longDescriptionBs : tour.longDescriptionEn;
  const itinerary = locale === "bs" ? tour.itineraryBs : tour.itineraryEn;
  const included = locale === "bs" ? tour.includedBs : tour.includedEn;
  const notIncluded = locale === "bs" ? tour.notIncludedBs : tour.notIncludedEn;
  const whatToBring =
    locale === "bs" ? tour.whatToBringBs : tour.whatToBringEn;
  const faq = locale === "bs" ? tour.faqBs : tour.faqEn;

  const similarToursData = getToursBySlugs(tour.similarTours);

  return (
    <div>
      {/* Section 1 — Hero */}
      <FadeIn>
      <section className="relative h-[60vh] min-h-[400px]">
        <Image
          src={tour.image}
          alt={name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <h1 className="text-5xl font-black text-white">{name}</h1>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <span
              className={`rounded-full px-4 py-2 text-sm font-bold text-white ${difficultyColors[tour.difficulty]}`}
            >
              {t(difficultyKeys[tour.difficulty])}
            </span>
            <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-900">
              {(locale === "bs" ? tour.durationBs : tour.durationEn)}
            </span>
            {(tour.groupSizeBs || tour.groupSizeEn) && (
              <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-gray-900">
                {locale === "bs" ? tour.groupSizeBs : tour.groupSizeEn}
              </span>
            )}
            <span className="rounded-full bg-white/90 px-4 py-2 text-sm font-bold text-gray-900">
              {t("tours.from")} {tour.price}€
            </span>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Section 2 — Long Description */}
      <FadeIn>
      <section className="bg-white py-16">
        <div className="mx-auto max-w-3xl px-4">
          <p className="text-lg leading-relaxed text-gray-700">
            {longDescription}
          </p>
        </div>
      </section>
      </FadeIn>

      {/* Section 3 — Itinerary */}
      <FadeIn delay={100}>
      <section className="bg-[#F5F0E8] py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-12 text-3xl font-bold text-gray-900">
            {t("tourDetail.itinerary")}
          </h2>
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-[#0F4C75]/30" />
            <div className="space-y-8">
              {itinerary.map((step, i) => (
                <div key={i} className="relative flex gap-6 pl-4">
                  <div className="absolute left-4 flex h-10 w-10 -translate-x-1/2 shrink-0 items-center justify-center rounded-full bg-[#0F4C75] text-sm font-black text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-[#0F4C75]/30">
                    {i + 1}
                  </div>
                  <div className="ml-8">
                    <h3 className="text-lg font-bold text-gray-900">
                      {step.time} — {step.title}
                    </h3>
                    <p className="mt-1 text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Section 4 — Included / Not Included */}
      <FadeIn delay={200}>
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-4xl px-4">
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-green-700">
                  <span className="text-2xl">✅</span> {t("tourDetail.includes")}
                </h3>
                <ul className="space-y-2">
                  {included.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <span className="text-green-600">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h3 className="mb-4 flex items-center gap-2 text-xl font-bold text-red-700">
                  <span className="text-2xl">❌</span> {t("tourDetail.notIncluded")}
                </h3>
                <ul className="space-y-2">
                  {notIncluded.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-gray-700">
                      <span className="text-red-600">✗</span> {item}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      </FadeIn>

      {/* Section 5 — What to bring */}
      <FadeIn delay={300}>
      <section className="bg-[#F5F0E8] py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            {t("tourDetail.whatToBring")}
          </h2>
          <ul className="space-y-3">
            {whatToBring.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-3 rounded-lg bg-white/60 px-4 py-3"
              >
                <span className="text-xl">🎒</span>
                <span className="text-gray-700">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
      </FadeIn>

      {/* Section 6 — FAQ */}
      <FadeIn>
      <section className="bg-white py-16">
        <div className="container mx-auto max-w-3xl px-4">
          <h2 className="mb-8 text-3xl font-bold text-gray-900">
            {t("tourDetail.faq")}
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faq.map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
      </FadeIn>

      {/* Section 7 — Similar Tours */}
      {similarToursData.length > 0 && (
        <FadeIn>
        <section className="bg-[#F5F0E8] py-16">
          <div className="container mx-auto px-4">
            <h2 className="mb-10 text-3xl font-bold text-gray-900">
              {t("tourDetail.similarTours")}
            </h2>
            <TureGrid
              tours={similarToursData}
              bookLabel={t("tours.bookNow")}
              locale={locale as "bs" | "en"}
              columns={3}
            />
          </div>
        </section>
        </FadeIn>
      )}

      {/* Section 8 — Booking CTA */}
      <FadeIn>
      <section className="bg-[#0F4C75] py-16">
        <div className="container mx-auto max-w-xl px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-white">
            {t("tourDetail.bookCta")}
          </h2>
          <BookingForm tourName={name} tourSlug={slug} />
        </div>
      </section>
      </FadeIn>
    </div>
  );
}

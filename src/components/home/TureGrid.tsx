"use client";

import { useTranslations } from "next-intl";
import { FadeIn } from "@/components/FadeIn";
import { TuraCard } from "./TuraCard";
import type { Tour } from "@/data/ture";

const difficultyKeys = {
  Laka: "easy",
  Srednja: "medium",
  Zahtjevna: "hard",
} as const;

export function TureGrid({
  tours,
  bookLabel,
  locale = "bs",
  columns = 4,
}: {
  tours: Tour[];
  bookLabel: string;
  locale?: "bs" | "en";
  columns?: 3 | 4;
}) {
  const t = useTranslations("tours");

  return (
    <div
      className={`grid grid-cols-1 gap-8 sm:grid-cols-2 ${
        columns === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3"
      }`}
    >
      {tours.map((tour, index) => (
        <FadeIn key={tour.slug} delay={index * 100}>
          <TuraCard
            slug={tour.slug}
            name={locale === "bs" ? tour.nameBs : tour.nameEn}
            shortDescription={
              locale === "bs" ? tour.shortDescriptionBs : tour.shortDescriptionEn
            }
            duration={locale === "bs" ? tour.durationBs : tour.durationEn}
            difficulty={tour.difficulty}
            difficultyLabel={t(difficultyKeys[tour.difficulty])}
            price={tour.price}
            groupSize={
              locale === "bs" ? tour.groupSizeBs : tour.groupSizeEn
            }
            image={tour.image}
            bookLabel={bookLabel}
          />
        </FadeIn>
      ))}
    </div>
  );
}

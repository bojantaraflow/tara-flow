"use client";

import { IntlLink } from "@/i18n/navigation";
import { TureGrid } from "./TureGrid";
import type { Tour } from "@/data/ture";

export function FeaturedToursSection({
  title,
  subtitle,
  viewAllLabel,
  bookLabel,
  tours,
  locale,
}: {
  title: string;
  subtitle: string;
  viewAllLabel: string;
  bookLabel: string;
  tours: Tour[];
  locale: "bs" | "en";
}) {
  return (
    <section id="featured-tours" className="bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black text-gray-900">{title}</h2>
          <div className="mx-auto mt-2 h-1 w-16 rounded-full bg-[#0F4C75]" />
          <p className="mt-4 text-gray-500">{subtitle}</p>
        </div>
        <TureGrid tours={tours} bookLabel={bookLabel} locale={locale} />
        <div className="mt-12 text-center">
          <IntlLink href="/ture">
            <span className="inline-flex items-center font-semibold text-[#0F4C75] transition-all duration-300 hover:underline hover:-translate-y-0.5">
              {viewAllLabel} →
            </span>
          </IntlLink>
        </div>
      </div>
    </section>
  );
}

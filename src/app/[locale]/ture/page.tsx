import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

import { FadeIn } from "@/components/FadeIn";
import { TureGrid } from "@/components/home/TureGrid";
import { tours, getToursByCategory } from "@/data/ture";

export const metadata: Metadata = {
  title: "Ture | Tara Flow — Rafting & Hiking Foča",
  description:
    "Sve naše avanturističke ture — rafting na Tari, hiking na Maglić, jahanje na Zelengori i jeep safari kroz NP Sutjeska. Foča, BiH.",
  keywords:
    "rafting Tara, hiking Maglić, jahanje Zelengora, jeep safari Sutjeska, avantura Foča, turizam BiH",
  openGraph: {
    title: "Ture | Tara Flow",
    description: "Rafting, hiking, jahanje i jeep safari u srcu prirode BiH.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

const TABS = [
  { key: "Svi", enKey: "tours.all" },
  { key: "Aranžmani", enKey: "tours.arrangements" },
  { key: "Jednodnevni izleti", enKey: "tours.dayTrips" },
  { key: "Planine", enKey: "tours.mountainsHiking" },
  { key: "Jahanje", enKey: "tours.horseback" },
  { key: "Jeep safari", enKey: "tours.jeepSafari" },
];

export default async function ToursPage({
  params,
  searchParams,
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ tab?: string }>;
}) {
  const { locale } = await params;
  const { tab } = await searchParams;
  setRequestLocale(locale);

  const t = await getTranslations();
  const category = tab || "Svi";
  const filteredTours = getToursByCategory(category);
  const loc = locale as "bs" | "en";

  return (
    <div className="container mx-auto px-4 py-24">
      <FadeIn>
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-black text-gray-900">{t("tours.title")}</h1>
          <p className="mt-2 text-gray-500">{t("tours.subtitle")}</p>
        </div>
      </FadeIn>

      <FadeIn delay={100}>
        <div className="mb-12 flex flex-wrap justify-center gap-2">
        {TABS.map(({ key, enKey }) => (
          <a
            key={key}
            href={`?tab=${encodeURIComponent(key)}`}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ease-out ${
              category === key
                ? "bg-[#0F4C75] text-white"
                : "bg-gray-100 text-gray-700 hover:-translate-y-0.5 hover:bg-gray-200 hover:shadow-md"
            }`}
          >
            {t(enKey)}
          </a>
        ))}
        </div>
      </FadeIn>

      <FadeIn delay={200}>
      {filteredTours.length > 0 ? (
        <TureGrid
            tours={filteredTours}
            bookLabel={t("tours.bookNow")}
            locale={loc}
            columns={3}
          />
      ) : (
        <p className="py-12 text-center text-gray-500">
          {t("tours.noToursInCategory")}
        </p>
      )}
      </FadeIn>
    </div>
  );
}

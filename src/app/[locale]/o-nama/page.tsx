import type { Metadata } from "next";
import Image from "next/image";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "O nama — Bojan & Dalibor",
};

import { FadeIn } from "@/components/FadeIn";
import { IntlLink } from "@/i18n/navigation";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("about");

  return (
    <div>
      {/* Section 1 — Hero */}
      <FadeIn>
        <section className="relative h-[50vh] min-h-[300px]">
          <Image
            src="/images/galerija/zelengora-hiking.webp"
            alt="Tara"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <h1 className="text-6xl font-black">{t("title")}</h1>
            <p className="mt-4 text-xl text-white/90">{t("heroSubtitle")}</p>
          </div>
        </section>
      </FadeIn>

      {/* Section 2 — Naša priča */}
      <FadeIn>
        <section className="bg-white py-20">
          <div className="mx-auto max-w-4xl px-4">
            <blockquote className="italic text-3xl text-[#0F4C75]">
              &ldquo;{t("storyQuote")}&rdquo;
            </blockquote>
            <p className="mt-8 text-lg leading-relaxed text-gray-700">
              {t("storyText")}
            </p>
          </div>
        </section>
      </FadeIn>

      {/* Section 3 — Bojan & Dalibor cards */}
      <FadeIn>
        <section className="bg-[#F5F0E8] py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#0F4C75] text-4xl font-black text-white">
                  B
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {t("bojanName")}
                </h3>
                <p className="mt-2 font-medium text-[#0F4C75]">
                  {t("bojanTitle")}
                </p>
                <p className="mt-4 text-gray-600">{t("bojanBio")}</p>
              </div>
              <div className="rounded-2xl bg-white p-8 text-center shadow-lg">
                <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#0F4C75] text-4xl font-black text-white">
                  D
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {t("daliborName")}
                </h3>
                <p className="mt-2 font-medium text-[#0F4C75]">
                  {t("daliborTitle")}
                </p>
                <p className="mt-4 text-gray-600">{t("daliborBio")}</p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Section 4 — Naše vrijednosti */}
      <FadeIn>
        <section className="bg-white py-20">
          <div className="container mx-auto px-4">
            <h2 className="mb-12 text-center text-3xl font-bold text-gray-900">
              {t("valuesTitle")}
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                <span className="text-5xl">🌊</span>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {t("value1Title")}
                </h3>
                <p className="mt-3 text-gray-600">{t("value1Text")}</p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                <span className="text-5xl">👥</span>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {t("value2Title")}
                </h3>
                <p className="mt-3 text-gray-600">{t("value2Text")}</p>
              </div>
              <div className="rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:shadow-lg">
                <span className="text-5xl">⭐</span>
                <h3 className="mt-4 text-xl font-bold text-gray-900">
                  {t("value3Title")}
                </h3>
                <p className="mt-3 text-gray-600">{t("value3Text")}</p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Section 5 — Brojevi (stats) */}
      <FadeIn>
        <section className="bg-[#0F4C75] py-20">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 text-center md:grid-cols-4">
              <div>
                <p className="text-5xl font-black text-white">
                  {t("stat1Number")}
                </p>
                <p className="mt-2 text-white/70">{t("stat1Label")}</p>
              </div>
              <div>
                <p className="text-5xl font-black text-white">
                  {t("stat2Number")}
                </p>
                <p className="mt-2 text-white/70">{t("stat2Label")}</p>
              </div>
              <div>
                <p className="text-5xl font-black text-white">
                  {t("stat3Number")}
                </p>
                <p className="mt-2 text-white/70">{t("stat3Label")}</p>
              </div>
              <div>
                <p className="text-5xl font-black text-white">
                  {t("stat4Number")}
                </p>
                <p className="mt-2 text-white/70">{t("stat4Label")}</p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>

      {/* Section 6 — CTA */}
      <FadeIn>
        <section className="bg-[#F5F0E8] py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-black text-gray-900">{t("ctaTitle")}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
              {t("ctaSubtitle")}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <IntlLink
                href="/ture"
                className="inline-flex items-center rounded-full bg-[#0F4C75] px-8 py-4 font-black text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#0a3d5c] hover:shadow-xl hover:shadow-[#0F4C75]/30 active:translate-y-0 active:shadow-md"
              >
                {t("ctaTours")}
              </IntlLink>
              <IntlLink
                href="/kontakt"
                className="inline-flex items-center rounded-full border-2 border-[#0F4C75] px-8 py-4 font-black text-[#0F4C75] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#0F4C75] hover:text-white hover:shadow-xl active:translate-y-0"
              >
                {t("ctaContact")}
              </IntlLink>
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}

"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";

const galerija = [
  { src: "/images/galerija/drina-tara.webp", alt: "Drina i Tara" },
  { src: "/images/galerija/tara-tara-tara.webp", alt: "Rijeka Tara" },
  { src: "/images/galerija/vidikovac-tara-jesen.webp", alt: "Vidikovac Tara jesen" },
  { src: "/images/galerija/tara-jesen-lepota.webp", alt: "Tara jesen" },
  { src: "/images/galerija/izlet-orlovacko-jezero.webp", alt: "Orlovačko jezero" },
  { src: "/images/galerija/izlet-hiking.webp", alt: "Hiking izlet" },
  { src: "/images/galerija/jezero-zelengora.webp", alt: "Jezero Zelengora" },
  { src: "/images/galerija/tara-lepota.webp", alt: "Ljepota Tare" },
  { src: "/images/galerija/tara-s-mosta.webp", alt: "Tara sa mosta" },
  { src: "/images/galerija/tara-tara.webp", alt: "Rijeka Tara" },
  { src: "/images/galerija/vidikovac-tara.webp", alt: "Vidikovac Tara" },
  { src: "/images/galerija/zelengora.webp", alt: "Zelengora" },
  { src: "/images/galerija/zelengora1.webp", alt: "Zelengora planina" },
  { src: "/images/galerija/zelengora-hiking.webp", alt: "Zelengora hiking" },
  { src: "/images/galerija/zima-tara.webp", alt: "Zima na Tari" },
  { src: "/images/galerija/tara-jutr.webp", alt: "Jutro na Tari" },
];

export default function GalerijaPage() {
  const t = useTranslations("gallery");

  return (
    <main className="min-h-screen bg-[#F5F0E8]">
      {/* Hero */}
      <div className="bg-[#0F4C75] py-24 text-center">
        <h1 className="mb-4 text-5xl font-black text-white">
          {t("title")}
        </h1>
        <p className="text-lg text-white/60">{t("subtitle")}</p>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3 xl:columns-4">
          {galerija.map((slika, i) => (
            <div
              key={i}
              className="group relative mb-4 overflow-hidden rounded-xl shadow-md break-inside-avoid transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-2xl"
            >
              <Image
                src={slika.src}
                alt={slika.alt}
                width={600}
                height={400}
                className="h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-end bg-black/0 transition-all duration-300 group-hover:bg-black/20">
                <p className="px-4 py-3 text-sm font-bold text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {slika.alt}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

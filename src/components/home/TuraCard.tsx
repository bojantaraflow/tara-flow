"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { IntlLink } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

export interface TuraCardProps {
  slug: string;
  name: string;
  shortDescription: string;
  duration: string;
  difficulty: "Laka" | "Srednja" | "Zahtjevna";
  difficultyLabel: string;
  price: number;
  groupSize?: string;
  image: string;
  bookLabel: string;
}

const difficultyColors = {
  Laka: "bg-green-500",
  Srednja: "bg-yellow-500",
  Zahtjevna: "bg-red-500",
};

export function TuraCard({
  slug,
  name,
  shortDescription,
  duration,
  difficulty,
  difficultyLabel,
  price,
  groupSize,
  image,
  bookLabel,
}: TuraCardProps) {
  return (
    <IntlLink
      href={{ pathname: "/ture/[slug]", params: { slug } }}
      className="group block cursor-pointer overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-xl">
        <Image
          src={image}
          alt={name}
          fill
          className={cn(
          "object-cover transition-transform duration-700 ease-out group-hover:scale-110",
          slug === "rafting-maglic" ? "object-bottom" : "object-center"
        )}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        <span
          className={cn(
            "absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-bold text-white",
            difficultyColors[difficulty]
          )}
        >
          {difficultyLabel}
        </span>
        <span className="absolute right-3 top-3 rounded-full bg-white px-3 py-1 text-sm font-black text-gray-900 shadow">
          {price}€
        </span>
      </div>
      <div className="rounded-b-xl bg-white p-5">
        <h3 className="text-xl font-black text-gray-900">{name}</h3>
        <p className="mb-3 mt-1 text-sm text-gray-500 line-clamp-2">
          {shortDescription}
        </p>
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
            🕐 {duration}
          </span>
          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
            ⛰️ {difficultyLabel}
          </span>
          {groupSize && (
            <span className="rounded-full bg-gray-100 px-3 py-1 text-xs text-gray-700">
              👥 {groupSize}
            </span>
          )}
        </div>
        <div className="mt-4 w-full rounded-xl border-2 border-[#0F4C75] py-3 text-center font-black text-[#0F4C75] transition-all duration-300 ease-out hover:bg-[#0F4C75] hover:text-white hover:shadow-lg hover:shadow-[#0F4C75]/20">
          {bookLabel}
        </div>
      </div>
    </IntlLink>
  );
}

"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

import { IntlLink } from "@/i18n/navigation";

const HERO_IMAGE = "/images/hero/tara-naslovna.webp";

export function HeroSection({
  tagline,
  ctaTours,
  ctaGallery,
  subtitle,
}: {
  tagline: string;
  ctaTours: string;
  ctaGallery: string;
  subtitle: string;
}) {
  return (
    <section
      id="hero"
      className="relative flex min-h-[100vh] items-center justify-center"
    >
      <Image
        src={HERO_IMAGE}
        alt="Rafting in canyon"
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.6) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto max-w-5xl px-4 text-center text-white">
        <h1
          className="text-6xl font-black tracking-tight text-white md:text-8xl"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.3)" }}
        >
          {tagline}
        </h1>
        <p className="mt-6 text-xl uppercase tracking-[0.2em] text-white/80">
          {subtitle}
        </p>
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <IntlLink href="/ture">
            <button
              type="button"
              className="rounded-full bg-[#0F4C75] px-8 py-4 text-base font-black text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#0a3d5c] hover:shadow-xl hover:shadow-[#0F4C75]/30 active:translate-y-0 active:shadow-md"
            >
              {ctaTours}
            </button>
          </IntlLink>
          <IntlLink href="/galerija">
            <button
              type="button"
              className="rounded-full border-2 border-white px-8 py-4 text-base font-black text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white hover:text-[#0F4C75] hover:shadow-xl active:translate-y-0"
            >
              {ctaGallery}
            </button>
          </IntlLink>
        </div>
      </div>
      <a
        href="#featured-tours"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/80 transition-colors hover:text-white"
        aria-label="Scroll down"
      >
        <ChevronDown className="h-10 w-10" />
      </a>
    </section>
  );
}

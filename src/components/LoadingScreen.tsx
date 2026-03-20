"use client";

import { useEffect, useState } from "react";
import { useTranslations } from "next-intl";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const t = useTranslations("brand");

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setIsLoading(false), 600);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0F4C75] transition-opacity duration-[600ms] ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      <div className="flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="animate-pulse text-5xl font-black tracking-tight text-white">
            TARA
          </span>
          <span className="animate-pulse text-5xl font-light tracking-[0.15em] text-white/60">
            FLOW
          </span>
        </div>
        {/* Animated river wave bar */}
        <div className="h-1 w-48 overflow-hidden rounded-full bg-white/20">
          <div
            className="h-full rounded-full bg-white"
            style={{
              animation: "loading 2s ease-in-out forwards",
            }}
          />
        </div>
        <p className="tracking-widest text-sm uppercase text-white/50">
          {t("tagline")}
        </p>
      </div>
    </div>
  );
}

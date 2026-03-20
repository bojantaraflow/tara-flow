"use client";

import { useState, useEffect } from "react";
import { useLocale } from "next-intl";

import { Link as IntlLink } from "@/i18n/navigation";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/ture", labelKey: "nav.tours" },
  { href: "/galerija", labelKey: "nav.gallery" },
  { href: "/o-nama", labelKey: "nav.about" },
  { href: "/kontakt", labelKey: "nav.contact" },
] as const;

export function Navbar({ labels }: { labels: Record<string, string> }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const locale = useLocale();

  const switchLocale = (newLocale: string) => {
    const currentPath = window.location.pathname;
    const newPath = currentPath.replace(`/${locale}`, `/${newLocale}`);
    window.location.href = newPath;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
          scrolled ? "bg-white py-3 shadow-md" : "bg-transparent py-5"
        )}
      >
        <nav className="container mx-auto flex h-14 items-center justify-between px-4">
          <IntlLink href="/" className="flex items-center gap-2 group">
            <div className="flex items-center gap-1">
              <span
                className={cn(
                  "text-2xl font-black tracking-tight transition-colors",
                  scrolled
                    ? "text-[#0F4C75] group-hover:text-[#0a3d5c]"
                    : "text-white group-hover:text-white/90"
                )}
              >
                TARA
              </span>
              <span
                className={cn(
                  "text-2xl font-light tracking-[0.15em] transition-colors",
                  scrolled
                    ? "text-[#0F4C75]/70 group-hover:text-[#0a3d5c]/70"
                    : "text-white/70 group-hover:text-white/60"
                )}
              >
                FLOW
              </span>
            </div>
          </IntlLink>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 md:flex">
            {navLinks.map(({ href, labelKey }) => (
              <IntlLink
                key={href}
                href={href}
                className={cn(
                  "relative font-medium after:absolute after:bottom-[-4px] after:left-0 after:h-[2px] after:w-0 after:bg-[#0F4C75] after:transition-all after:duration-300 hover:after:w-full hover:text-[#0F4C75]",
                  "text-sm",
                  scrolled ? "text-gray-700" : "text-white"
                )}
              >
                {labels[labelKey]}
              </IntlLink>
            ))}
          </div>

          {/* Right: back-to-top + lang + CTA */}
          <div className="flex items-center gap-2">
            {showBackToTop && (
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                className="hidden items-center gap-1 text-xs font-bold uppercase tracking-widest text-[#0F4C75] transition-all duration-300 hover:-translate-y-0.5 hover:opacity-80 md:flex"
              >
                <span>↑</span>
                <span>{labels["nav.backToTop"]}</span>
              </button>
            )}
            <div className="hidden items-center gap-1 md:flex">
              <button
                type="button"
                onClick={() => switchLocale("bs")}
                className={cn(
                  "rounded px-2 py-1 text-sm font-bold tracking-wider transition-all duration-200 hover:scale-110 cursor-pointer",
                  locale === "bs"
                    ? "text-[#0F4C75]"
                    : scrolled
                      ? "text-gray-400 hover:text-[#0F4C75]"
                      : "text-white/60 hover:text-white"
                )}
              >
                BS
              </button>
              <span
                className={cn(
                  "text-gray-300",
                  !scrolled && "text-white/40"
                )}
              >
                |
              </span>
              <button
                type="button"
                onClick={() => switchLocale("en")}
                className={cn(
                  "rounded px-2 py-1 text-sm font-bold tracking-wider transition-all duration-200 hover:scale-110 cursor-pointer",
                  locale === "en"
                    ? "text-[#0F4C75]"
                    : scrolled
                      ? "text-gray-400 hover:text-[#0F4C75]"
                      : "text-white/60 hover:text-white"
                )}
              >
                EN
              </button>
            </div>
            <IntlLink href="/kontakt" className="hidden sm:inline-block">
              <span
                className={cn(
                  "inline-flex items-center rounded-full px-6 py-2 text-sm font-semibold transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#0a3d5c] hover:shadow-xl hover:shadow-[#0F4C75]/30 active:translate-y-0 active:shadow-md",
                  "bg-[#0F4C75] text-white"
                )}
              >
                {labels["nav.book"]}
              </span>
            </IntlLink>
            <button
              type="button"
              className="flex flex-col gap-1.5 p-2 md:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <span
                className={cn(
                  "block h-0.5 w-6 transition-all duration-300",
                  scrolled ? "bg-[#0F4C75]" : "bg-white",
                  mobileOpen && "translate-y-2 rotate-45"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 transition-all duration-300",
                  scrolled ? "bg-[#0F4C75]" : "bg-white",
                  mobileOpen && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "block h-0.5 w-6 transition-all duration-300",
                  scrolled ? "bg-[#0F4C75]" : "bg-white",
                  mobileOpen && "-translate-y-2 -rotate-45"
                )}
              />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile menu — full screen overlay */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex flex-col items-center justify-center gap-8 bg-[#0F4C75] transition-all duration-500 md:hidden",
          mobileOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        )}
      >
        <button
          type="button"
          onClick={() => setMobileOpen(false)}
          className="absolute right-6 top-6 text-4xl font-light text-white"
          aria-label="Close menu"
        >
          ×
        </button>
        <div className="absolute left-6 top-6 flex items-center gap-1">
          <span className="text-2xl font-black text-white">TARA</span>
          <span className="text-2xl font-light tracking-[0.15em] text-white/60">
            FLOW
          </span>
        </div>
        {navLinks.map(({ href, labelKey }, i) => (
          <IntlLink
            key={href}
            href={href}
            onClick={() => setMobileOpen(false)}
            className="tracking-tight text-4xl font-black text-white transition-colors hover:text-white/60"
            style={{ transitionDelay: `${i * 75}ms` }}
          >
            {labels[labelKey]}
          </IntlLink>
        ))}
        <IntlLink
          href="/kontakt"
          onClick={() => setMobileOpen(false)}
          className="mt-4 rounded-full bg-white px-8 py-3 text-lg font-black text-[#0F4C75] transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-white/90 hover:shadow-xl active:translate-y-0"
        >
          {labels["nav.book"]}
        </IntlLink>
        <p className="absolute bottom-8 text-sm uppercase tracking-widest text-white/40">
          @taraflow
        </p>
      </div>
    </>
  );
}

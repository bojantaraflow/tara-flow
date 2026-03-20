"use client";

import { IntlLink } from "@/i18n/navigation";

export function AboutSection({
  title,
  subtitle,
  teaser,
  stat1,
  stat2,
  linkText,
}: {
  title: string;
  subtitle: string;
  teaser: string;
  stat1: string;
  stat2: string;
  linkText: string;
}) {
  return (
    <section className="bg-[#0F4C75] py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-white/80">
              {title}
            </p>
            <h2 className="mt-2 text-4xl font-black text-white md:text-5xl">
              {subtitle}
            </h2>
          </div>
          <div>
            <p className="text-lg leading-relaxed text-white/80">{teaser}</p>
            <div className="mt-8 flex gap-12">
              <div>
                <p className="text-3xl font-black text-white md:text-5xl">{stat1}</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white md:text-5xl">{stat2}</p>
              </div>
            </div>
            <IntlLink
              href="/o-nama"
              className="mt-8 inline-block border-b-2 border-white pb-1 font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:opacity-90"
            >
              {linkText} →
            </IntlLink>
          </div>
        </div>
      </div>
    </section>
  );
}

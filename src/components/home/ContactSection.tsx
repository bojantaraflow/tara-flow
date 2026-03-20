"use client";

import { Mail, MapPin, Instagram } from "lucide-react";
import { IntlLink } from "@/i18n/navigation";

export function ContactSection({
  title,
  bookLabel,
}: {
  title: string;
  bookLabel: string;
}) {
  return (
    <section id="contact" className="bg-[#0F1923] py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-black text-white">
          {title}
        </h2>
        <div className="mb-16 grid gap-8 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-[#0F4C75]/20 p-4">
              <Mail className="h-8 w-8 text-[#0F4C75]" />
            </div>
            <p className="mb-1 text-sm font-medium uppercase tracking-wider text-white/60">
              Email
            </p>
            <a
              href="mailto:taraflow@gmail.com"
              className="font-semibold text-white hover:underline"
            >
              taraflow@gmail.com
            </a>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-[#0F4C75]/20 p-4">
              <MapPin className="h-8 w-8 text-[#0F4C75]" />
            </div>
            <p className="mb-1 text-sm font-medium uppercase tracking-wider text-white/60">
              Lokacija
            </p>
            <p className="font-semibold text-white">
              Foča, Bosna i Hercegovina
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="mb-4 rounded-full bg-[#0F4C75]/20 p-4">
              <Instagram className="h-8 w-8 text-[#0F4C75]" />
            </div>
            <p className="mb-1 text-sm font-medium uppercase tracking-wider text-white/60">
              Instagram
            </p>
            <a
              href="https://instagram.com/taraflow"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-white hover:underline"
            >
              @taraflow
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-md text-center">
          <IntlLink href="/kontakt">
            <button
              type="button"
              className="w-full rounded-full bg-[#0F4C75] px-12 py-4 text-lg font-black text-white transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-[#0a3d5c] hover:shadow-xl hover:shadow-[#0F4C75]/30 active:translate-y-0 active:shadow-md md:w-auto"
            >
              {bookLabel}
            </button>
          </IntlLink>
        </div>
      </div>
    </section>
  );
}

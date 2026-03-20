import { MapPin, Mail, Instagram } from "lucide-react";

import { IntlLink } from "@/i18n/navigation";

export function Footer({ labels }: { labels: Record<string, string> }) {
  return (
    <footer className="bg-[#0A1118] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          <div>
            <IntlLink href="/" className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <span className="text-2xl font-black tracking-tight text-white">TARA</span>
                <span className="text-2xl font-light tracking-[0.15em] text-white/70">FLOW</span>
              </div>
            </IntlLink>
            <p className="mt-4 text-sm text-white/60">
              {labels["footer.description"]}
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">
              {labels["footer.quickLinks"]}
            </h3>
            <ul className="space-y-2">
              <li>
                <IntlLink
                  href="/ture"
                  className="inline-block text-sm text-white/60 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {labels["nav.tours"]}
                </IntlLink>
              </li>
              <li>
                <IntlLink
                  href="/galerija"
                  className="inline-block text-sm text-white/60 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {labels["nav.gallery"]}
                </IntlLink>
              </li>
              <li>
                <IntlLink
                  href="/o-nama"
                  className="inline-block text-sm text-white/60 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {labels["nav.about"]}
                </IntlLink>
              </li>
              <li>
                <IntlLink
                  href="/kontakt"
                  className="inline-block text-sm text-white/60 transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  {labels["nav.contact"]}
                </IntlLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-white">
              {labels["footer.contact"]}
            </h3>
            <ul className="space-y-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" />
                <a
                  href="mailto:taraflow@gmail.com"
                  className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  taraflow@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" />
                Foča, Bosna i Hercegovina
              </li>
              <li className="flex items-center gap-2">
                <Instagram className="h-4 w-4 shrink-0" />
                <a
                  href="https://instagram.com/taraflow"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-all duration-300 hover:translate-x-1 hover:text-white"
                >
                  @taraflow
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8 text-center text-sm text-white/60">
          {labels["footer.copyright"]}
        </div>
      </div>
    </footer>
  );
}

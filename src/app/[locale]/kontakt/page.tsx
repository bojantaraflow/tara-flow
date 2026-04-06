import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { getTranslations } from "next-intl/server";

export const metadata: Metadata = {
  title: "Kontakt | Tara Flow — Rezervacija",
  description:
    "Kontaktirajte Tara Flow za rezervaciju ture. Rafting, hiking, jahanje i jeep safari u Foči, BiH. Email: taraflow@gmail.com",
  keywords: "kontakt Tara Flow, rezervacija rafting, booking avantura Foča",
  openGraph: {
    title: "Kontakt | Tara Flow",
    description: "Rezervišite svoju avanturu danas.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

import { FadeIn } from "@/components/FadeIn";
import { ContactPageForm } from "./ContactPageForm";

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("contact");

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid gap-12 lg:grid-cols-2">
        <FadeIn>
        <div>
          <h1 className="text-4xl font-bold">{t("title")}</h1>
          <p className="mt-2 text-muted-foreground">{t("subtitle")}</p>

          <div className="mt-8 space-y-4">
            <p className="font-medium">taraflow@gmail.com</p>
            <p className="text-muted-foreground">{t("location")}</p>
            <p className="text-muted-foreground">
              {t("followUs")}:{" "}
              <a
                href="https://instagram.com/taraflow"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                @taraflow
              </a>
            </p>
          </div>

          <div className="mt-8 aspect-video overflow-hidden rounded-lg">
            <iframe
              src="https://maps.google.com/maps?q=Fo%C4%8Da,%20Bosnia%20and%20Herzegovina&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Foča on Google Maps"
            />
          </div>
        </div>
        </FadeIn>

        <FadeIn delay={100}>
        <div>
          <div className="rounded-xl border bg-card p-6">
            <h2 className="mb-6 text-xl font-semibold">{t("formTitle")}</h2>
            <ContactPageForm />
          </div>
        </div>
        </FadeIn>
      </div>
    </div>
  );
}

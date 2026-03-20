import { hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import { setRequestLocale } from "next-intl/server";

import { LoadingScreen } from "@/components/LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { routing } from "@/i18n/routing";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  setRequestLocale(locale);

  const t = await getTranslations();
  const labels = {
    "brand.name": t("brand.name"),
    "nav.tours": t("nav.tours"),
    "nav.gallery": t("nav.gallery"),
    "nav.about": t("nav.about"),
    "nav.contact": t("nav.contact"),
    "nav.book": t("nav.book"),
    "nav.backToTop": t("nav.backToTop"),
    "footer.description": t("footer.description"),
    "footer.quickLinks": t("footer.quickLinks"),
    "footer.contact": t("footer.contact"),
    "footer.copyright": t("footer.copyright"),
  };

  return (
    <div className="flex min-h-screen flex-col">
      <LoadingScreen />
      <Navbar labels={labels} />
      <main className="flex-1">{children}</main>
      <Footer labels={labels} />
      <WhatsAppButton />
    </div>
  );
}

import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://taraflow.ba"),
  title: {
    default: "Tara Flow — Rafting & Hiking, Foča",
    template: "%s | Tara Flow",
  },
  description:
    "Avanturistički turizam u srcu prirode. Rafting na rijeci Tari, hiking na Maglić i Zelengoru. Foča, Bosna i Hercegovina.",
  keywords: [
    "rafting Tara",
    "hiking Maglić",
    "avanturistički turizam Foča",
    "rafting BiH",
    "Tara Flow",
  ],
  openGraph: {
    type: "website",
    locale: "bs_BA",
    url: "https://taraflow.ba",
    siteName: "Tara Flow",
    title: "Tara Flow — Rafting & Hiking, Foča",
    description:
      "Avanturistički turizam u srcu prirode. Rafting na rijeci Tari, hiking na Maglić i Zelengoru.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tara Flow — Rafting & Hiking, Foča",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tara Flow — Rafting & Hiking, Foča",
    description: "Avanturistički turizam u srcu prirode.",
    images: ["/og-image.png"],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' rx='20' fill='%230F4C75'/><text y='.9em' font-size='70' x='50%' text-anchor='middle' fill='white' font-weight='900' font-family='system-ui'>T</text></svg>",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const messages = await getMessages();

  return (
    <html lang="bs" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistSans.className} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

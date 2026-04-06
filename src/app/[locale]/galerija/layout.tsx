import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Galerija | Tara Flow",
  description:
    "Pogledajte fotografije sa naših avantura — rafting na Tari, uspon na Maglić, Trnovačko jezero i Zelengora.",
  keywords:
    "galerija rafting Tara, fotografije Trnovačko jezero, slike Maglić, Zelengora fotografije",
  openGraph: {
    title: "Galerija | Tara Flow",
    description: "Trenuci sa naših avantura u prirodi BiH.",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function GalerijaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactPageForm() {
  const t = useTranslations("contact");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const isLoading = status === "loading";

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    try {
      const res = await fetch("/api/kontakt", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ime: formData.get("ime"),
          email: formData.get("email"),
          telefon: formData.get("telefon") ?? "",
          brojOsoba: formData.get("brojOsoba") ?? "",
          datum: formData.get("datum") ?? "",
          tura: formData.get("tura") ?? "",
          poruka: formData.get("poruka") ?? "",
        }),
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="text-center py-8">
        <div className="text-5xl mb-4">✅</div>
        <h3 className="text-2xl font-black text-[#0F4C75] mb-2">
          {t("thankYouTitle")}
        </h3>
        <p className="text-gray-500">{t("thankYouSubtitle")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="ime" className="mb-1 block text-sm font-medium">
          {t("name")}
        </label>
        <Input id="ime" name="ime" required />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          {t("email")}
        </label>
        <Input id="email" name="email" type="email" required />
      </div>
      <div>
        <label htmlFor="telefon" className="mb-1 block text-sm font-medium">
          {t("phone")}
        </label>
        <Input id="telefon" name="telefon" type="tel" />
      </div>
      <div>
        <label htmlFor="brojOsoba" className="mb-1 block text-sm font-medium">
          {t("persons")}
        </label>
        <Input id="brojOsoba" name="brojOsoba" type="number" min={1} />
      </div>
      <div>
        <label htmlFor="datum" className="mb-1 block text-sm font-medium">
          {t("desiredDate")}
        </label>
        <Input id="datum" name="datum" type="date" />
      </div>
      <div>
        <label htmlFor="tura" className="mb-1 block text-sm font-medium">
          {t("subject")}
        </label>
        <Input id="tura" name="tura" />
      </div>
      <div>
        <label htmlFor="poruka" className="mb-1 block text-sm font-medium">
          {t("message")}
        </label>
        <textarea
          id="poruka"
          name="poruka"
          rows={4}
          required
          className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>
      {status === "error" && (
        <p className="text-red-500 text-center mt-4">{t("errorWithEmail")}</p>
      )}
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? t("sending") : t("sendInquiry")}
      </Button>
    </form>
  );
}

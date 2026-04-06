"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function ContactForm({
  tourName,
  tourSlug,
}: {
  tourName: string;
  tourSlug: string;
}) {
  const t = useTranslations("tourDetail");
  const tc = useTranslations("contact");
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
          brojOsoba: "",
          datum: "",
          tura: tourName,
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

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="hidden" name="tourSlug" value={tourSlug} />
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
        <label htmlFor="poruka" className="mb-1 block text-sm font-medium">
          {t("message")}
        </label>
        <textarea
          id="poruka"
          name="poruka"
          rows={3}
          className="flex w-full rounded-lg border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>
      {status === "success" && (
        <p className="text-sm text-green-600">{t("successMessage")}</p>
      )}
      {status === "error" && (
        <p className="text-sm text-destructive text-center">{tc("errorWithEmail")}</p>
      )}
      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? tc("sending") : t("submit")}
      </Button>
    </form>
  );
}

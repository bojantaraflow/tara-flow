"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function BookingForm({
  tourName,
  tourSlug,
}: {
  tourName: string;
  tourSlug: string;
}) {
  const t = useTranslations("tourDetail");
  const tc = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
        <label htmlFor="booking-ime" className="mb-1 block text-sm font-medium text-white">
          {t("name")}
        </label>
        <Input id="booking-ime" name="ime" required className="bg-white" />
      </div>
      <div>
        <label htmlFor="booking-email" className="mb-1 block text-sm font-medium text-white">
          {t("email")}
        </label>
        <Input id="booking-email" name="email" type="email" required className="bg-white" />
      </div>
      <div>
        <label htmlFor="booking-telefon" className="mb-1 block text-sm font-medium text-white">
          {t("phone")}
        </label>
        <Input id="booking-telefon" name="telefon" type="tel" className="bg-white" />
      </div>
      <div>
        <label htmlFor="booking-brojOsoba" className="mb-1 block text-sm font-medium text-white">
          {t("persons")}
        </label>
        <Input id="booking-brojOsoba" name="brojOsoba" type="number" min={1} className="bg-white" />
      </div>
      <div>
        <label htmlFor="booking-datum" className="mb-1 block text-sm font-medium text-white">
          {t("desiredDate")}
        </label>
        <Input id="booking-datum" name="datum" type="date" className="bg-white" />
      </div>
      <div>
        <label htmlFor="booking-poruka" className="mb-1 block text-sm font-medium text-white">
          {t("message")}
        </label>
        <textarea
          id="booking-poruka"
          name="poruka"
          rows={3}
          className="flex w-full rounded-lg border border-input bg-white px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        />
      </div>
      {status === "success" && (
        <p className="text-sm font-medium text-green-300">
          {t("successMessage")}
        </p>
      )}
      {status === "error" && (
        <p className="text-sm font-medium text-red-300 text-center">{tc("errorWithEmail")}</p>
      )}
      <Button
        type="submit"
        className="w-full bg-white text-[#0F4C75] hover:bg-gray-100"
        disabled={isLoading}
      >
        {isLoading ? tc("sending") : t("submit")}
      </Button>
    </form>
  );
}

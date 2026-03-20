"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Loader2 } from "lucide-react";

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
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
          ime: formData.get("name"),
          email: formData.get("email"),
          telefon: formData.get("phone"),
          brojOsoba: formData.get("persons"),
          datum: formData.get("desiredDate"),
          tura: tourName,
          poruka: formData.get("message"),
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
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium text-white">
          {t("name")}
        </label>
        <Input id="name" name="name" required className="bg-white" />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium text-white">
          {t("email")}
        </label>
        <Input id="email" name="email" type="email" required className="bg-white" />
      </div>
      <div>
        <label htmlFor="phone" className="mb-1 block text-sm font-medium text-white">
          {t("phone")}
        </label>
        <Input id="phone" name="phone" type="tel" className="bg-white" />
      </div>
      <div>
        <label htmlFor="persons" className="mb-1 block text-sm font-medium text-white">
          {t("persons")}
        </label>
        <Input id="persons" name="persons" type="number" min={1} className="bg-white" />
      </div>
      <div>
        <label htmlFor="desiredDate" className="mb-1 block text-sm font-medium text-white">
          {t("desiredDate")}
        </label>
        <Input id="desiredDate" name="desiredDate" type="date" className="bg-white" />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-white">
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
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
        <p className="text-sm font-medium text-red-300">{t("errorMessage")}</p>
      )}
      <Button
        type="submit"
        className="w-full bg-white text-[#0F4C75] hover:bg-gray-100"
        disabled={status === "loading"}
      >
        {status === "loading" ? (
          <Loader2 className="mx-auto h-5 w-5 animate-spin" />
        ) : (
          t("submit")
        )}
      </Button>
    </form>
  );
}

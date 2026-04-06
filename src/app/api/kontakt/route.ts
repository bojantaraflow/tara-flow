import { Resend } from "resend";
import { NextResponse } from "next/server";

/**
 * Resend bez verifikovanog domena: na besplatnom planu poruke sa `from: onboarding@resend.dev`
 * mogu ići samo na adrese koje su verifikovane u Resend dashboardu (Settings → verified emails —
 * dodaj npr. bojantaraflow@gmail.com i potvrdi link iz maila). `to` mora biti ta ista (ili druga
 * eksplicitno dodana) adresa. Za produkciju dodaj svoj domen u Resend i promijeni `from`.
 */
const NOTIFICATION_TO =
  process.env.RESEND_TO_EMAIL ?? "bojantaraflow@gmail.com";

function escapeHtml(text: unknown): string {
  const s = String(text ?? "");
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email servis nije konfigurisan" },
        { status: 500 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const body = await req.json();
    const { ime, email, telefon, brojOsoba, datum, tura, poruka } = body;

    if (!ime || !email) {
      return NextResponse.json(
        { error: "Ime i email su obavezni" },
        { status: 400 }
      );
    }

    const subjectTour = String(tura || "Opći upit")
      .replace(/[\r\n]/g, " ")
      .slice(0, 200);

    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: NOTIFICATION_TO,
      subject: `Nova rezervacija — ${subjectTour}`,
      replyTo: String(email),
      html: `
        <h2 style="color: #0F4C75;">Nova rezervacija sa Tara Flow sajta</h2>
        <p><strong>Ime:</strong> ${escapeHtml(ime)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(telefon) || "nije upisano"}</p>
        <p><strong>Tura:</strong> ${escapeHtml(tura) || "nije odabrana"}</p>
        <p><strong>Broj osoba:</strong> ${escapeHtml(brojOsoba) || "nije upisano"}</p>
        <p><strong>Željeni datum:</strong> ${escapeHtml(datum) || "nije upisano"}</p>
        <p><strong>Poruka:</strong> ${poruka ? escapeHtml(poruka).replace(/\n/g, "<br />") : "nema poruke"}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}

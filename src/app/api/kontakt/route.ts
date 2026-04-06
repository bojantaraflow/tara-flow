import { Resend } from "resend";
import { NextResponse } from "next/server";

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
  const body = await req.json();
  const { ime, email, telefon, brojOsoba, datum, tura, poruka } = body;

  if (!ime || !email) {
    return NextResponse.json(
      { error: "Ime i email su obavezni" },
      { status: 400 }
    );
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not set");
    return NextResponse.json(
      { error: "Email servis nije konfigurisan" },
      { status: 500 }
    );
  }

  const subjectTour = String(tura ?? "").trim() || "Opći upit";

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    await resend.emails.send({
      from: "Tara Flow <onboarding@resend.dev>",
      to: "bojantaraflow@gmail.com",
      replyTo: String(email),
      subject: `Nova rezervacija — ${subjectTour}`,
      html: `
        <h2 style="color: #0F4C75;">Nova rezervacija sa Tara Flow sajta</h2>
        <p><strong>Ime:</strong> ${escapeHtml(ime)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefon:</strong> ${escapeHtml(telefon)}</p>
        <p><strong>Tura:</strong> ${escapeHtml(tura)}</p>
        <p><strong>Broj osoba:</strong> ${escapeHtml(brojOsoba)}</p>
        <p><strong>Željeni datum:</strong> ${escapeHtml(datum)}</p>
        <p><strong>Poruka:</strong> ${escapeHtml(poruka).replace(/\n/g, "<br />")}</p>
        <hr/>
        <p style="color: #888;">Poruka poslana sa taraflow.ba</p>
      `,
    });
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

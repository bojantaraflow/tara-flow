import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const body = await req.json();
  const {
    ime,
    email,
    telefon = "",
    brojOsoba = "",
    datum = "",
    tura = "",
    poruka = "",
  } = body;

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

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "Tara Flow <onboarding@resend.dev>",
      to: "taraflow@gmail.com",
      subject: tura ? `Nova rezervacija — ${tura}` : "Nova poruka sa Tara Flow sajta",
      replyTo: email,
      html: `
        <h2>Nova rezervacija sa Tara Flow sajta</h2>
        <p><strong>Ime:</strong> ${ime}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${telefon || "—"}</p>
        <p><strong>Tura:</strong> ${tura || "—"}</p>
        <p><strong>Broj osoba:</strong> ${brojOsoba || "—"}</p>
        <p><strong>Željeni datum:</strong> ${datum || "—"}</p>
        <p><strong>Poruka:</strong></p>
        <p>${String(poruka).replace(/\n/g, "<br />") || "—"}</p>
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

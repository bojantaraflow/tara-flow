import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message, phone, persons, desiredDate, tour } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email and message are required" },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not set");
      return NextResponse.json(
        { error: "Email service is not configured" },
        { status: 500 }
      );
    }

    const extraFields = [
      phone && `<p><strong>Telefon:</strong> ${phone}</p>`,
      persons && `<p><strong>Broj osoba:</strong> ${persons}</p>`,
      desiredDate && `<p><strong>Željeni datum:</strong> ${desiredDate}</p>`,
      tour && `<p><strong>Tura:</strong> ${tour}</p>`,
    ]
      .filter(Boolean)
      .join("");

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data, error } = await resend.emails.send({
      from: "Tara Flow Website <onboarding@resend.dev>",
      to: "taraflow@gmail.com",
      subject: subject || `Kontakt forma: ${name}`,
      replyTo: email,
      html: `
        <h2>Nova poruka s web stranice</h2>
        <p><strong>Ime:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${extraFields}
        <p><strong>Tema:</strong> ${subject || "—"}</p>
        <hr />
        <p>${String(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}

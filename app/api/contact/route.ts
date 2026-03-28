import { NextResponse } from "next/server";

type ContactPayload = {
  nombre?: string;
  apellido?: string;
  email?: string;
  telefono?: string;
  mensaje?: string;
  website?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as ContactPayload;

    const nombre = String(body.nombre ?? "").trim();
    const apellido = String(body.apellido ?? "").trim();
    const email = String(body.email ?? "").trim();
    const telefono = String(body.telefono ?? "").trim();
    const mensaje = String(body.mensaje ?? "").trim();
    const website = String(body.website ?? "").trim();

    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!nombre || !email || !mensaje) {
      return NextResponse.json(
        { error: "Nombre, email y mensaje son obligatorios." },
        { status: 400 },
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json({ error: "El email no es valido." }, { status: 400 });
    }

    const mailtrapToken = process.env.MAILTRAP_API_TOKEN;
    const toEmail = process.env.CONTACT_TO_EMAIL ?? "sofiamaggiotti123@gmail.com";
    const fromEmail = process.env.MAIL_FROM_EMAIL ?? "no-reply@portfolio.local";
    const fromName = process.env.MAIL_FROM_NAME ?? "Portfolio Sofia";

    if (!mailtrapToken) {
      return NextResponse.json(
        { error: "Falta MAILTRAP_API_TOKEN en variables de entorno." },
        { status: 500 },
      );
    }

    const fullName = `${nombre}${apellido ? ` ${apellido}` : ""}`.trim();
    const subject = `Nuevo mensaje desde portfolio - ${fullName}`;
    const plainText = [
      "Nuevo mensaje desde el formulario del portfolio",
      "",
      `Nombre: ${nombre}`,
      `Apellido: ${apellido || "-"}`,
      `Email: ${email}`,
      `Telefono: ${telefono || "-"}`,
      "",
      "Mensaje:",
      mensaje,
    ].join("\n");

    const html = `
      <h2>Nuevo mensaje desde el portfolio</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
      <p><strong>Apellido:</strong> ${escapeHtml(apellido || "-")}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Telefono:</strong> ${escapeHtml(telefono || "-")}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${escapeHtml(mensaje).replace(/\n/g, "<br />")}</p>
    `;

    const mailtrapResponse = await fetch("https://send.api.mailtrap.io/api/send", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${mailtrapToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: { email: fromEmail, name: fromName },
        to: [{ email: toEmail }],
        subject,
        text: plainText,
        html,
      }),
      cache: "no-store",
    });

    if (!mailtrapResponse.ok) {
      const errorText = await mailtrapResponse.text();
      return NextResponse.json(
        { error: `Mailtrap rechazo el envio: ${errorText}` },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "No se pudo procesar el envio." }, { status: 500 });
  }
}

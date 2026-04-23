import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, country, product, company, message } = body;

    if (!name || !email || !country || !message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "PINDÉ Website <noreply@pinde-alu.com>",
      to: ["doris.li@pinde-alu.com"],
      replyTo: email,
      subject: `New Inquiry from ${name} — ${country}`,
      html: `
        <h2>New Inquiry from pinde-alu.com</h2>
        <table style="border-collapse:collapse;width:100%;max-width:600px">
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold">Name</td><td style="padding:8px;border-bottom:1px solid #eee">${name}</td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold">Email</td><td style="padding:8px;border-bottom:1px solid #eee"><a href="mailto:${email}">${email}</a></td></tr>
          <tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold">Country</td><td style="padding:8px;border-bottom:1px solid #eee">${country}</td></tr>
          ${product ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold">Product Interest</td><td style="padding:8px;border-bottom:1px solid #eee">${product}</td></tr>` : ""}
          ${company ? `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold">Company</td><td style="padding:8px;border-bottom:1px solid #eee">${company}</td></tr>` : ""}
        </table>
        <h3 style="margin-top:24px">Message</h3>
        <p style="white-space:pre-wrap;background:#f9f9f9;padding:16px;border-radius:4px">${message}</p>
        <hr style="margin-top:32px;border:none;border-top:1px solid #eee">
        <p style="font-size:12px;color:#999">Sent from pinde-alu.com contact form</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}

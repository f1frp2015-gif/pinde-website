import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

const maxAttachmentSize = 8 * 1024 * 1024;
const allowedExtensions = new Set(["pdf", "dwg", "dxf", "xls", "xlsx", "csv", "zip"]);

type Inquiry = {
  name: string;
  email: string;
  country: string;
  product: string;
  company: string;
  role: string;
  supplyFormat: string;
  annualVolume: string;
  targetStandard: string;
  message: string;
  locale: string;
  website: string;
};

function cleanLine(value: unknown) {
  return typeof value === "string" ? value.replace(/[\r\n]+/g, " ").trim() : "";
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function fromRecord(record: Record<string, unknown>): Inquiry {
  return {
    name: cleanLine(record.name),
    email: cleanLine(record.email),
    country: cleanLine(record.country),
    product: cleanLine(record.product),
    company: cleanLine(record.company),
    role: cleanLine(record.role),
    supplyFormat: cleanLine(record.supplyFormat),
    annualVolume: cleanLine(record.annualVolume),
    targetStandard: cleanLine(record.targetStandard),
    message: typeof record.message === "string" ? record.message.trim() : "",
    locale: cleanLine(record.locale) || "en",
    website: cleanLine(record.website),
  };
}

function tableRow(label: string, value: string) {
  if (!value) return "";
  return `<tr><td style="padding:8px;border-bottom:1px solid #eee;font-weight:bold;vertical-align:top">${escapeHtml(
    label
  )}</td><td style="padding:8px;border-bottom:1px solid #eee">${escapeHtml(value)}</td></tr>`;
}

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") ?? "";
    let inquiry: Inquiry;
    let attachment: File | null = null;

    if (contentType.includes("multipart/form-data")) {
      const formData = await request.formData();
      const record: Record<string, unknown> = {};

      for (const [key, value] of formData.entries()) {
        if (typeof value === "string") record[key] = value;
      }

      inquiry = fromRecord(record);
      const fileEntry = formData.get("attachment");
      if (fileEntry && typeof fileEntry !== "string" && fileEntry.size > 0) {
        attachment = fileEntry;
      }
    } else {
      const body = (await request.json()) as Record<string, unknown>;
      inquiry = fromRecord(body);
    }

    if (inquiry.website) {
      return NextResponse.json({ success: true });
    }

    if (!inquiry.name || !inquiry.email || !inquiry.country || !inquiry.message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    if (!/^\S+@\S+\.\S+$/.test(inquiry.email)) {
      return NextResponse.json({ error: "Invalid email" }, { status: 400 });
    }

    let attachments:
      | Array<{ filename: string; content: Buffer; contentType?: string }>
      | undefined;

    if (attachment) {
      const extension = attachment.name.split(".").pop()?.toLowerCase() ?? "";
      if (attachment.size > maxAttachmentSize || !allowedExtensions.has(extension)) {
        return NextResponse.json({ error: "Invalid attachment" }, { status: 400 });
      }

      attachments = [
        {
          filename: cleanLine(attachment.name),
          content: Buffer.from(await attachment.arrayBuffer()),
          contentType: attachment.type || undefined,
        },
      ];
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: "PINDÉ Website <noreply@pindesys.com>",
      to: ["inquiry@pindesys.com"],
      replyTo: inquiry.email,
      subject: `Technical RFQ — ${inquiry.company || inquiry.name} — ${inquiry.country}`,
      attachments,
      html: `
        <h2>New technical RFQ from pindesys.com</h2>
        <table style="border-collapse:collapse;width:100%;max-width:720px">
          ${tableRow("Name", inquiry.name)}
          ${tableRow("Email", inquiry.email)}
          ${tableRow("Company", inquiry.company)}
          ${tableRow("Country / market", inquiry.country)}
          ${tableRow("Company role", inquiry.role)}
          ${tableRow("System interest", inquiry.product)}
          ${tableRow("Supply format", inquiry.supplyFormat)}
          ${tableRow("Estimated annual volume", inquiry.annualVolume)}
          ${tableRow("Target standard / tests", inquiry.targetStandard)}
          ${tableRow("Page language", inquiry.locale)}
          ${tableRow("Attachment", attachment?.name ?? "")}
        </table>
        <h3 style="margin-top:24px">Project and fabrication requirements</h3>
        <p style="white-space:pre-wrap;background:#F2EFE9;padding:16px;border-left:4px solid #DAAF37">${escapeHtml(
          inquiry.message
        )}</p>
        <hr style="margin-top:32px;border:none;border-top:1px solid #eee">
        <p style="font-size:12px;color:#999">Sent from the dedicated PINDÉ English/Russian technical RFQ page.</p>
      `,
    });

    if (error) throw new Error("Email provider rejected the request");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}

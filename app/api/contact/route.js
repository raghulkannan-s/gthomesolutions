import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validation";
import EmailTemplate from "@/components/email/template";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = "GT Home Solution <contact@gthomesolution.in>";

const rateLimitMap =
  globalThis.rateLimitMap || new Map();
if (!globalThis.rateLimitMap) {
  globalThis.rateLimitMap = rateLimitMap;
}

const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS = 5;

function checkRateLimit(ip) {
  const now = Date.now();
  const windowStart = now - RATE_LIMIT_WINDOW;

  const records = rateLimitMap.get(ip) || [];
  const recent = records.filter((ts) => ts > windowStart);

  if (recent.length >= MAX_REQUESTS) return false;

  recent.push(now);
  rateLimitMap.set(ip, recent);
  return true;
}

export async function POST(req) {
  try {
    const ip =
      req.headers.get("x-real-ip") ||
      req.headers.get("x-forwarded-for")?.split(",")[0] ||
      "unknown";

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Try again later." },
        { status: 429 }
      );
    }

    const raw = await req.json();

    const body = {
      name: String(raw.name || "").trim(),
      phone: String(raw.phone || "").replace(/\D/g, "").slice(-10),
      location: String(raw.location || "").trim(),
      message: String(raw.message || "").trim(),
      honeypot: raw.honeypot || "",
    };

    if (body.honeypot) {
      return NextResponse.json({ success: true });
    }

    const result = contactSchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        { success: false, error: "Invalid input" },
        { status: 400 }
      );
    }

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: ["contact@gthomesolution.in"],
      bcc: ["admin@gthomesolution.in"],
      subject: `New Estimation Request - ${body.name}`,
      react: EmailTemplate({
        name: body.name,
        phone: body.phone,
        location: body.location,
        message: body.message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Email send failed." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong." },
      { status: 500 }
    );
  }
}

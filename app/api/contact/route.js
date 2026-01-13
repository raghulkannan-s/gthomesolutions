import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validation";
import { siteConfig } from "@/lib/site";
import EmailTemplate from "@/components/email/template";

const resend = new Resend(process.env.RESEND_API_KEY);

const EMAILS = {
  developer: "raghulkannan005@gmail.com",
  admin: "admin@gthomesolution.in",
  founder: siteConfig.founderEmail,
  contact: siteConfig.email,
}

const TO_EMAILS = [ EMAILS.developer, EMAILS.founder, EMAILS.contact, EMAILS.admin ];

const FROM_EMAIL = `GT Home Solution <contact@gthomesolution.in>`;

const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW = 60000;
const MAX_REQUESTS = 5;

function checkRateLimit(ip) {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return true;
  }

  if (record.count >= MAX_REQUESTS) return false;

  record.count++;
  return true;
}

export async function POST(req) {
  try {
    const ipHeader = req.headers.get("x-forwarded-for") || "unknown";
    const ip = ipHeader.split(",")[0].trim();

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { success: false, error: "Too many requests. Try again later." },
        { status: 429 }
      );
    }

    const body = await req.json();

    if (body.honeypot) {
      return NextResponse.json({ success: true });
    }

    const result = contactSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { success: false, error: result.error.errors?.[0]?.message || "Invalid input" },
        { status: 400 }
      );
    }

    const data = result.data;

    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: EMAILS.developer,
      subject: `New Estimation Request - ${data.name}`,
      react: EmailTemplate({
        name: data.name,
        phone: data.phone,
        location: data.location,
        message: data.message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Email send failed. Try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Try again." },
      { status: 500 }
    );
  }
}

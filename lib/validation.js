import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),

  phone: z
    .string()
    .trim()
    .transform((val) => val.replace(/\s+/g, ""))
    .refine((val) => /^[6-9]\d{9}$/.test(val), {
      message: "Enter a valid 10-digit Indian mobile number",
    }),

  location: z
    .string()
    .trim()
    .min(3, "Location must be at least 3 characters")
    .max(80, "Location is too long"),

  message: z
    .string()
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(500, "Message is too long (max 500 characters)"),

  honeypot: z.string().optional().default(""),
});

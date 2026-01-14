
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons/contact"
import { siteConfig } from "@/lib/site";

export default function TopLine() {
    return(
        <div className="hidden sm:flex items-center justify-end gap-6 py-2 text-xs text-gray-600">
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex items-center gap-2 hover:text-[#1e3a5f] transition"
          >
            <MailIcon />
            <span className="font-medium">{siteConfig.email}</span>
          </a>

          <span className="h-4 w-px bg-gray-300" />

          <a
            href={`tel:+91${siteConfig.phone}`}
            className="inline-flex items-center gap-2 hover:text-[#1e3a5f] transition"
          >
            <PhoneIcon />
            <span className="font-medium">+91 {siteConfig.phone}</span>
          </a>

          <span className="h-4 w-px bg-gray-300" />

          <a
            href={`https://wa.me/91${siteConfig.phone}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-[#1e3a5f] transition"
          >
            <WhatsAppIcon />
            <span className="font-medium">WhatsApp</span>
          </a>
        </div>
    )
}
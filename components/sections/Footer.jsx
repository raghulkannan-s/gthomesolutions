import Link from "next/link";
import { siteConfig, navLinks } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-[#1e3a5f] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{siteConfig.name}</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Professional painting, waterproofing, and renovation services in
              Chennai. Quality work since {siteConfig.established}.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-white transition text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/"
                  className="text-gray-300 hover:text-white transition text-sm"
                >
                  Get Estimation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition">
                  📞 {siteConfig.phone}
                </a>
              </li>
              <li>
                <a href={siteConfig.whatsapp} className="hover:text-white transition">
                  💬 WhatsApp
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition">
                  ✉️ {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Address</h4>
            <p className="text-gray-300 text-sm leading-relaxed">
              {siteConfig.address.street}
              <br />
              {siteConfig.address.area}
              <br />
              {siteConfig.address.city} - {siteConfig.address.pincode}
            </p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-8 text-center text-gray-400 text-sm">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

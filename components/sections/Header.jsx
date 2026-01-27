"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";

import { siteConfig, navLinks } from "@/lib/site";
import { MailIcon, PhoneIcon, WhatsAppIcon, SocialIcons, InstagramIcon, FacebookIcon } from "@/components/ui/icons/contact";

import { Button } from "@/components/ui/Button";
import header from "@/public/brand/header-logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const socialColorClass = (iconKey) => {
    switch (iconKey) {
      case "facebook":
        return "text-[#1877F2]";
      case "instagram":
        return "text-[#E4405F]";
      case "whatsapp":
        return "text-[#25D366]";
      default:
        return "text-gray-200";
    }
  };

  return (
    <header className=" bg-white md:bg-white/0 fixed top-0 left-0 right-0 z-50  backdrop-blur-xs ">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src={header}
              alt="GT Home Solution Logo"
              width={46}
              height={46}
              className="rounded-md"
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-gray-400 transition font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop socials */}
          <div className="hidden md:flex items-center gap-2">
            {siteConfig.socialLinks?.map((item) => {
              const Icon = SocialIcons?.[item.iconKey];
              if (!Icon) return null;

              return (
                <a
                  key={item.key}
                  href={item.href}
                  target={item.target}
                  rel={item.rel}
                  aria-label={item.ariaLabel}
                  className={[
                    "inline-flex items-center justify-center rounded-full p-2 hover:bg-white/10 transition",
                    socialColorClass(item.iconKey),
                  ].join(" ")}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}

            {/* Call button (blue) */}
            <a
              href={`tel:+91${siteConfig.phone}`}
              aria-label="Call GT Home Solution"
              className="inline-flex items-center justify-center rounded-full p-2 hover:bg-white/10 transition text-blue-500"
            >
              <PhoneIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile quick actions + Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp chat"
              className="inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100 transition"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>

            <a
              href={`tel:+91${siteConfig.phone}`}
              aria-label="Call"
              className="inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100 transition text-blue-600"
            >
              <PhoneIcon className="w-5 h-5" />
            </a>
            <a
              href={`${siteConfig.instagram}`}
              aria-label="Instagram"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100 transition text-pink-500"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href={`${siteConfig.facebook}`}
              aria-label="Facebook"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100 transition text-blue-600"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>

            <button
              className="p-2 rounded-lg hover:bg-gray-100 transition"
              onClick={() => setIsMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg
                className="w-6 h-6 text-gray-800"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 top-16 bg-white md:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />

            <div
              id="mobile-menu"
              className="md:hidden pb-4 border-t bg-white border-gray-200 shadow-lg relative z-10"
            >
              {/* Mobile contact row */}
              <div className="pt-4 flex flex-col gap-3 text-sm text-gray-700">
                <a
                  href={`tel:+91${siteConfig.phone}`}
                  className="inline-flex items-center gap-2 hover:text-[#1e3a5f] transition"
                  onClick={closeMenu}
                >
                  <PhoneIcon className="text-blue-600" />
                  +91 {siteConfig.phone}
                </a>

                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2 hover:text-[#1e3a5f] transition"
                  onClick={closeMenu}
                >
                  <MailIcon />
                  {siteConfig.email}
                </a>

                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-[#1e3a5f] transition"
                  onClick={closeMenu}
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  WhatsApp Chat
                </a>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-gray-700 hover:text-[#1e3a5f] transition font-medium py-2"
                    onClick={closeMenu}
                  >
                    {link.label}
                  </Link>
                ))}

                <Button
                  href="#estimation"
                  variant="primary"
                  className="w-full"
                  onClick={closeMenu}
                >
                  Get Free Estimation
                </Button>
              </div>

              {/* Mobile socials */}
              <div className="mt-5 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-gray-500">Follow</span>
                  <div className="flex items-center gap-2">
                    {siteConfig.socialLinks?.map((item) => {
                      const Icon = SocialIcons?.[item.iconKey];
                      if (!Icon) return null;

                      return (
                        <a
                          key={item.key}
                          href={item.href}
                          target={item.target}
                          rel={item.rel}
                          aria-label={item.ariaLabel}
                          className={[
                            "inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100 transition",
                            socialColorClass(item.iconKey),
                          ].join(" ")}
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      );
                    })}

                    <a
                      href={`tel:+91${siteConfig.phone}`}
                      aria-label="Call GT Home Solution"
                      className="inline-flex items-center justify-center rounded-full p-2 hover:bg-gray-100 transition text-blue-600"
                      onClick={closeMenu}
                    >
                      <PhoneIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}


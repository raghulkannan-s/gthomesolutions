"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState, useRef } from "react"; // <-- add useRef
import { useRouter, usePathname } from "next/navigation";

import { siteConfig, navLinks } from "@/lib/site";
import {
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
  SocialIcons,
  InstagramIcon,
  FacebookIcon,
} from "@/components/ui/icons/contact";

import { Button } from "@/components/ui/Button";
import header from "@/public/brand/header-logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const headerRef = useRef(null);

  const closeMenu = () => {
    setIsMenuOpen(false);
    if (typeof document !== "undefined") document.body.style.overflow = "";
  };

  const mobileMenuRef = useRef(null);
  const menuToggleRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) return;

    const onPointerDown = (e) => {
      const menuEl = mobileMenuRef.current;
      const toggleEl = menuToggleRef.current;

      if (menuEl && menuEl.contains(e.target)) return;
      if (toggleEl && toggleEl.contains(e.target)) return;

      closeMenu();
    };

    document.addEventListener("pointerdown", onPointerDown, true);
    return () => document.removeEventListener("pointerdown", onPointerDown, true);
  }, [isMenuOpen]);


  const onEstimationClick = () => {
    window.scrollTo({ top: 300, behavior: "smooth" });
    closeMenu();
  };

  useEffect(() => {
    if (!isMenuOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };

    document.addEventListener("keydown", onKeyDown);

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
    <header
      ref={headerRef}
      className="fixed top-0 left-0 right-0 z-50 bg-white md:bg-white/0 backdrop-blur-sm"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Top Row */}
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

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={(e) => {
                    navigateToSection(link.href);
                }}
                className="text-gray-700 md:text-gray-300 hover:text-gray-900 md:hover:text-white transition font-medium"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Socials */}
          <div className="hidden md:flex items-center gap-2">
            {siteConfig.socialLinks?.map((item) => {
              const Icon =
                SocialIcons?.[item.iconKey] ||
                {
                  instagram: InstagramIcon,
                  facebook: FacebookIcon,
                }[item.iconKey];

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

            <a
              href={`tel:+91${siteConfig.phone}`}
              aria-label="Call GT Home Solution"
              className="inline-flex items-center justify-center rounded-full p-2 hover:bg-white/10 transition text-blue-500"
            >
              <PhoneIcon className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Actions */}
          <div className="md:hidden flex items-center gap-2">
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp chat"
              className="p-2 rounded-full hover:bg-gray-100 transition"
            >
              <WhatsAppIcon className="w-5 h-5" />
            </a>

            <a
              href={`tel:+91${siteConfig.phone}`}
              aria-label="Call"
              className="p-2 rounded-full hover:bg-gray-100 transition text-blue-600"
            >
              <PhoneIcon className="w-5 h-5" />
            </a>
            <a
              href={`${siteConfig.instagram}`}
              aria-label="Instagram"
              className="p-2 rounded-full hover:bg-gray-100 transition text-pink-500"
            >
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a
              href={`${siteConfig.facebook}`}
              aria-label="Facebook"
              className="p-2 rounded-full hover:bg-gray-100 transition text-blue-600"
            >
              <FacebookIcon className="w-5 h-5" />
            </a>

            <button
              ref={menuToggleRef}
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 top-16 bg-white md:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />

            <div
              ref={mobileMenuRef}
              id="mobile-menu"
              className="md:hidden pb-4 border-t bg-white border-gray-200 shadow-lg relative z-10"
            >
              <div className="pt-4 flex flex-col gap-3 text-sm text-gray-700">
                <a href={`tel:+91${siteConfig.phone}`} onClick={closeMenu}>
                  +91 {siteConfig.phone}
                </a>

                <a href={`mailto:${siteConfig.email}`} onClick={closeMenu}>
                  {siteConfig.email}
                </a>
              </div>

              <div className="mt-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => {
                        closeMenu();
                    }}
                    className="text-gray-700 hover:text-[#1e3a5f] transition font-medium py-2"
                  >
                    {link.label}
                  </Link>
                ))}

                <Button
                  type="button"
                  variant="primary"
                  className="w-full"
                  onClick={onEstimationClick}
                >
                  Get Free Estimation
                </Button>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}

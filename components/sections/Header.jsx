"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

import { siteConfig, navLinks } from "@/lib/site";
import { MailIcon, PhoneIcon, WhatsAppIcon } from "@/components/ui/icons/contact"

import { Button } from "@/components/ui/Button";
import header from "@/public/brand/header-logo.png";
// import TopLine from "@/components/ui/Hero/TopLine.jsx";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50  backdrop-blur-xs ">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* <TopLine /> */}

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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
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

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200">
            {/* Mobile contact row */}
            <div className="pt-4 flex flex-col gap-3 text-sm text-gray-700">
              <a
                href={`tel:+91${siteConfig.phone}`}
                className="inline-flex items-center gap-2 hover:text-[#1e3a5f] transition"
              >
                <PhoneIcon />
                +91 {siteConfig.phone}
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 hover:text-[#1e3a5f] transition"
              >
                <MailIcon />
                {siteConfig.email}
              </a>

              <a
                href={`https://wa.me/91${siteConfig.phone}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#1e3a5f] transition"
              >
                <WhatsAppIcon />
                WhatsApp Chat
              </a>
            </div>

            <div className="mt-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-[#1e3a5f] transition font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

              <Button
                href="#estimation"
                variant="primary"
                className="w-full"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Free Estimation
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}


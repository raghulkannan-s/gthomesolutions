"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { PhoneCall, Mail, X } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { WhatsAppIcon } from "./icons/contact";

export default function FloatingCallButton() {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);

  const phone = siteConfig.phone;
  const email = siteConfig.email;
  const whatsapp = siteConfig.whatsapp;

  const telLink = `tel:${phone}`;
  const mailLink = `mailto:${email}`;

  useEffect(() => {
    function handleClickOutside(e) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    function handleEsc(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <div
      ref={wrapperRef}
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end justify-end"
    >
      {/* Action buttons */}
      <div
        className={`flex flex-col items-end justify-end gap-3 mb-3 transition-all duration-200 ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        {/* WhatsApp */}
        <Link
          href={whatsapp}
          target="_blank"
          aria-label="WhatsApp"
          className="flex items-center gap-3"
        >
          <span className="text-sm bg-white px-3 py-1 rounded-lg shadow border border-gray-200">
            WhatsApp
          </span>

          <div className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all border border-gray-200">
            <WhatsAppIcon className="w-7 h-7" />
          </div>

        </Link>

        {/* Call */}
        <Link href={telLink} aria-label={`Call ${phone}`} className="flex items-center gap-3">
          <span className="text-sm bg-white px-3 py-1 rounded-lg shadow border border-gray-200">
            Call
          </span>
          <div className="w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
            <PhoneCall className="w-5 h-5" />
          </div>
        </Link>

        {/* Email */}
        <Link href={mailLink} aria-label={`Email ${email}`} className="flex items-center gap-3">
          <span className="text-sm bg-white px-3 py-1 rounded-lg shadow border border-gray-200">
            Email
          </span>
          <div className="w-12 h-12 rounded-full bg-gray-800 text-white shadow-lg flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
            <Mail className="w-5 h-5" />
          </div>
        </Link>
      </div>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close contact menu" : "Open contact menu"}
        className="w-14 h-14 rounded-full bg-green-600 text-white shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center"
      >
        {open ? <X className="w-6 h-6" /> : <PhoneCall className="w-6 h-6" />}
      </button>
    </div>
  );
}

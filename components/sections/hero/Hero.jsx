"use client";

import { useEffect, useState } from "react";
import HeroBackgroundSlider from "./HeroBackgroundSlider";
import HeroContent from "./HeroContent";
import HeroDots from "./HeroDots";
import { heroSlides } from "./HeroSlides";
import { siteConfig } from "@/lib/site";
import { SocialIcons, PhoneIcon } from "@/components/ui/icons/contact";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!heroSlides.length) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const socialColorClass = (iconKey) => {
    switch (iconKey) {
      case "facebook":
        return "text-[#1877F2]";
      case "instagram":
        return "text-[#E1306C]";
      case "whatsapp":
        return "text-[#25D366]";
      default:
        return "text-white/90";
    }
  };

  return (
    <section className="relative min-h-[78vh] lg:min-h-[84vh] pt-20 overflow-hidden">
      <HeroBackgroundSlider slides={heroSlides} activeIndex={activeIndex} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <HeroContent />

        {/* Social icons */}
        <div className="mt-6 flex items-center gap-3">
          <span className="text-sm text-gray-200/80">Follow:</span>
          <div className="flex items-center gap-2">
            {siteConfig.socialLinks?.map((item) => {
              const Icon = SocialIcons?.[item.iconKey];
              if (!Icon || !item?.href) return null;

              return (
                <a
                  key={item.key}
                  href={item.href}
                  target={item.target || "_blank"}
                  rel={item.rel || "noopener noreferrer"}
                  aria-label={item.ariaLabel}
                  className={[
                    "inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition p-2",
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
              className="inline-flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition p-2 text-blue-500"
            >
              <PhoneIcon className="w-5 h-5" />
            </a>
          </div>
        </div>

        <HeroDots
          slidesCount={heroSlides.length}
          activeIndex={activeIndex}
          onDotClick={setActiveIndex}
        />
      </div>
    </section>
  );
}

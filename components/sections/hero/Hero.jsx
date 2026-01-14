"use client";

import { useEffect, useState } from "react";
import HeroBackgroundSlider from "./HeroBackgroundSlider";
import HeroContent from "./HeroContent";
import HeroDots from "./HeroDots";
import { heroSlides } from "./HeroSlides";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!heroSlides.length) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[78vh] lg:min-h-[84vh] pt-20 overflow-hidden">
      <HeroBackgroundSlider slides={heroSlides} activeIndex={activeIndex} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <HeroContent />

        <HeroDots
          slidesCount={heroSlides.length}
          activeIndex={activeIndex}
          onDotClick={setActiveIndex}
        />
      </div>
    </section>
  );
}

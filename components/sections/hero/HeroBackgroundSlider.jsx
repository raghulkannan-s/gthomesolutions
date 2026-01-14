"use client";

export default function HeroBackgroundSlider({ slides, activeIndex }) {
  return (
    <div className="absolute inset-0">
      {slides.map((slide, idx) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === activeIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${slide.src})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: "scale(1.05)",
          }}
          aria-hidden="true"
        />
      ))}

      <div
        className="absolute inset-0 bg-linear-to-b from-black/60 via-black/50 to-black/70"
        aria-hidden="true"
      />
    </div>
  );
}

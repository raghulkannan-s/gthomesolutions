"use client";

export default function HeroDots({ slidesCount, activeIndex, onDotClick }) {
  return (
    <div className="mt-10 flex items-center gap-2">
      {Array.from({ length: slidesCount }).map((_, idx) => (
        <button
          key={idx}
          aria-label={`Go to slide ${idx + 1}`}
          onClick={() => onDotClick(idx)}
          className={`h-2.5 rounded-full transition-all ${
            idx === activeIndex
              ? "w-8 bg-white"
              : "w-2.5 bg-white/40 hover:bg-white/60"
          }`}
        />
      ))}
    </div>
  );
}

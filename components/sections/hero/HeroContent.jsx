import EstimationForm from "@/components/sections/EstimationForm";

export default function HeroContent() {
  return (
    <div className="grid lg:grid-cols-2 gap-10 items-start">
      {/* Left Side */}
      <div className="max-w-xl">

        <h1 className="mt-4 text-4xl sm:text-[44px] font-extrabold leading-tight text-white">
          Premium Painting & Waterproofing for Homes in Chennai
        </h1>

        <p className="mt-4 text-base sm:text-md text-white/85 leading-relaxed">
          Clean finish. On-time work. Skilled team. Get a free estimation for interior/exterior painting,
          texture & stencil designs, terrace waterproofing, epoxy grouting, and renovation work.
        </p>

        <p className="mt-10 text-md text-white/70">
          Established in <span className="font-bold text-white/90">August 2024</span> • Serving homes across Chennai
        </p>
      </div>

      {/* Right Side (Form) */}
      <div className="w-full max-w-md lg:max-w-lg mx-auto flex flex-col justify-center">
        <div className="rounded-2xl bg-white/10 border border-white/15 p-2 shadow-2xl">
          <EstimationForm embedded={true} anchorId="estimation" />
        </div>

        <p className="mt-3 text-xs text-white/70 text-center">
          Quick response • No spam • We call back shortly
        </p>
      </div>
    </div>
  );
}

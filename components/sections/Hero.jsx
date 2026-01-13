import { siteConfig } from "@/lib/site";
import { Button } from "@/components/ui/Button";

const trustBadges = [
  { icon: "⏰", text: "On-Time Delivery" },
  { icon: "✨", text: "Clean Finish" },
  { icon: "🏆", text: "Quality Materials" },
];

export function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 bg-linear-to-br from-[#1e3a5f] via-[#2d5a8a] to-[#1e3a5f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center text-white">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Professional{" "}
            <span className="text-amber-400">Home Services</span>
            <br className="hidden sm:block" /> in Chennai
          </h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8">
            Transform your home with expert craftsmanship. Interior, exterior painting,
            waterproofing, and renovation services you can trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button href={`tel:${siteConfig.phone}`} variant="accent" className="text-lg px-8 py-4">
              📞 Call Now
            </Button>
            <Button
              href={siteConfig.whatsapp}
              variant="secondary"
              className="text-lg px-8 py-4"
            >
              💬 WhatsApp
            </Button>
            <Button
              href="#estimation"
              variant="outline"
              className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-[#1e3a5f]"
            >
              Get Free Estimation
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 md:gap-10">
            {trustBadges.map((badge, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-200">
                <span className="text-2xl">{badge.icon}</span>
                <span className="font-medium">{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

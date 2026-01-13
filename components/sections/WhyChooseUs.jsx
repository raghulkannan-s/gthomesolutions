import { whyChooseUs } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function WhyChooseUs() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose GT Home Solution?"
          subtitle="We deliver excellence in every project with commitment to quality."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {whyChooseUs.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <span className="text-amber-600 text-xl font-bold">✓</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-1">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

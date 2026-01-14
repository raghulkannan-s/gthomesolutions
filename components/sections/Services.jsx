import { paintingServices, civilServices, addonServices } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Painting */}
        <SectionHeading
          title="Painting Services"
          subtitle="Clean finish, smooth coating, and long-lasting results for every room and surface."
        />

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {paintingServices.map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(25%-18px)]"
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* Civil */}
        <SectionHeading
          title="Civil & Renovation Work"
          subtitle="Repairs, upgrades, and renovation work done neatly with proper finishing."
        />

        <div className="flex flex-wrap justify-center gap-6 mb-16">
          {civilServices.map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        {/* Add-on */}
        <SectionHeading
          title="Add-on Services"
          subtitle="Carpentry and electrical support to complete the job without extra coordination."
        />

        <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
          {addonServices.map((service, index) => (
            <div
              key={index}
              className="w-full sm:w-[calc(50%-12px)]"
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

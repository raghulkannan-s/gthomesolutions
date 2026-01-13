import { paintingServices, civilServices, addonServices } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ServiceCard } from "@/components/ui/ServiceCard";

export function Services() {
  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Painting Services"
          subtitle="Premium quality painting solutions for every surface of your home."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-16">
          {paintingServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <SectionHeading
          title="Civil & Renovation Work"
          subtitle="Complete home improvement and repair services."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {civilServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <SectionHeading
          title="Add-on Services"
          subtitle="Additional services to complete your home improvement project."
        />
        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {addonServices.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

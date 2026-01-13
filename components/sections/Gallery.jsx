import { SectionHeading } from "@/components/ui/SectionHeading";

const galleryImages = [
  { src: "/gallery/work-1.jpg", alt: "Interior painting project" },
  { src: "/gallery/work-2.jpg", alt: "Exterior painting project" },
  { src: "/gallery/work-3.jpg", alt: "Texture painting work" },
  { src: "/gallery/work-4.jpg", alt: "Wood polishing project" },
  { src: "/gallery/work-5.jpg", alt: "Waterproofing work" },
  { src: "/gallery/work-6.jpg", alt: "Renovation project" },
];

export function Gallery() {
  return (
    <section id="work" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Our Recent Work"
          subtitle="Take a look at some of our completed projects across Chennai."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square bg-gray-200 rounded-lg overflow-hidden group"
            >
              <div className="absolute inset-0 bg-linear-to-br from-[#1e3a5f]/20 to-[#2d5a8a]/40 flex items-center justify-center">
                <span className="text-white text-lg font-medium opacity-80">
                  Project {index + 1}
                </span>
              </div>
              <div className="absolute inset-0 bg-[#1e3a5f]/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="text-white font-medium">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { siteConfig } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#1e3a5f] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              title="About GT Home Solution"
              subtitle=""
              centered={false}
              light
            />
            <p className="text-gray-200 mb-4 leading-relaxed">
              Founded by{" "}
              <strong className="text-amber-400">{siteConfig.founder}</strong> ({siteConfig.experience} experience) in{" "}
              {siteConfig.established}, GT Home Solution has quickly established itself
              as a trusted name in home improvement services across Chennai.
            </p>
            <p className="text-gray-200 mb-6 leading-relaxed">
              We believe every home deserves the best care. Our team of skilled
              professionals brings years of experience in painting, waterproofing, and
              renovation work. We use only premium quality materials and modern
              techniques to ensure lasting results.
            </p>
            <p className="text-gray-200 leading-relaxed">
              From small touch-ups to complete home makeovers, we handle every project
              with the same dedication to quality and customer satisfaction.
            </p>
          </div>
          <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6">Our Commitment</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-amber-400 text-xl">✓</span>
                <span>Quality workmanship on every project</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 text-xl">✓</span>
                <span>Transparent pricing with no hidden costs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 text-xl">✓</span>
                <span>Timely completion of all projects</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 text-xl">✓</span>
                <span>Clean and organized work process</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-amber-400 text-xl">✓</span>
                <span>After-service support and warranty</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

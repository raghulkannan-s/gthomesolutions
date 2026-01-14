import { siteConfig } from "@/lib/site";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Contact Us"
          subtitle="Get in touch with us for any queries or to schedule a site visit."
        />
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-[#1e3a5f] mb-4">
                Contact Information
              </h3>
              <div className="space-y-4">
                <a
                  href={`tel:${siteConfig.phone}`}
                  className="flex items-center gap-3 text-gray-600 hover:text-[#1e3a5f] transition"
                >
                  <span className="text-2xl">📞</span>
                  <span>{siteConfig.phone}</span>
                </a>
                <a
                  href={siteConfig.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-[#1e3a5f] transition"
                >
                  <span className="text-2xl">💬</span>
                  <span>WhatsApp Us</span>
                </a>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-center gap-3 text-gray-600 hover:text-[#1e3a5f] transition"
                >
                  <span className="text-2xl">✉️</span>
                  <span>{siteConfig.email}</span>
                </a>
                <div className="flex items-start gap-3 text-gray-600">
                  <span className="text-2xl">📍</span>
                  <span>{siteConfig.address.full}</span>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h3 className="text-lg font-semibold text-[#1e3a5f] mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-gray-600">
                <p>Monday - Saturday: 9:00 AM - 7:00 PM</p>
                <p>Sunday: 10:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d971.971130852977!2d80.24203786955356!3d12.979237006050452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d7aafc20657%3A0x5b02d155e785a954!2sChozhamannan%20St%2C%20MGR%20Salai%2C%20Periyar%20Nagar%2C%20Tharamani%2C%20Chennai%2C%20Tamil%20Nadu%20600113!5e0!3m2!1sen!2sin!4v1768390432314!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg"
              title="GT Home Solution Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

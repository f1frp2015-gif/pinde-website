import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { BRAND } from "@/lib/constants";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with PINDE for inquiries, quotes, and technical support. We serve customers worldwide from our base in Chongqing, China.",
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Ready to discuss your project? Get in touch with our team for
            product inquiries, technical support, or quotations.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl font-bold text-primary mb-8">
                Get in Touch
              </h2>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin
                    size={20}
                    className="text-accent mt-1 shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      Head Office & Factory
                    </h3>
                    <p className="text-sm text-gray-500">
                      {BRAND.address}
                      <br />
                      [Full address placeholder]
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone
                    size={20}
                    className="text-accent mt-1 shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Phone</h3>
                    <p className="text-sm text-gray-500">{BRAND.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail
                    size={20}
                    className="text-accent mt-1 shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">Email</h3>
                    <p className="text-sm text-gray-500">{BRAND.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MessageCircle
                    size={20}
                    className="text-accent mt-1 shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      WhatsApp
                    </h3>
                    <p className="text-sm text-gray-500">{BRAND.whatsapp}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Clock
                    size={20}
                    className="text-accent mt-1 shrink-0"
                  />
                  <div>
                    <h3 className="font-semibold text-primary mb-1">
                      Business Hours
                    </h3>
                    <p className="text-sm text-gray-500">
                      Monday - Friday: 9:00 AM - 6:00 PM (CST)
                      <br />
                      Saturday: 9:00 AM - 12:00 PM (CST)
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map */}
              <div className="mt-8 aspect-[4/3] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.5!2d106.05!3d29.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDUxJzAwLjAiTiAxMDbCsDAzJzAwLjAiRQ!5e0!3m2!1sen!2scn!4v1700000000000!5m2!1sen!2scn&q=重庆市铜梁区产业大道68号"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PINDE Factory Location - Tongliang, Chongqing"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-primary mb-8">
                Send Us an Inquiry
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

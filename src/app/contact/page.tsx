import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { BRAND } from "@/lib/constants";
import { Mail, Phone, MapPin, Clock, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Get a Quote for Aluminium Windows & Doors",
  description:
    "Contact PINDÉ for quotes, specs, and OEM enquiries. WhatsApp: +86 138 8333 3993. Email: doris.li@pinde-alu.com. Response in 24h.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact PINDÉ — Free Quote & Technical Support",
    description: "Get a free quote for premium aluminium windows and doors. WhatsApp, email, or enquiry form. Response within 24 hours.",
    url: "/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-20 py-[89px] bg-obsidian">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6 pt-[55px]">
          <div className="flex items-center gap-[13px] mb-[34px]">
            <span className="w-[21px] h-px bg-muted opacity-40" />
            <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
              Contact
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-serif)] font-light text-[clamp(40px,6vw,64px)] leading-[0.95] tracking-[0.04em] text-alabaster mb-[21px]">
            Get in touch<span className="text-red">.</span>
          </h1>
          <p className="text-warm text-[15px] leading-[1.9] max-w-[520px]">
            Ready to discuss your project? Reach out for product inquiries,
            technical support, or quotations.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-[89px] bg-surface">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
          <div className="grid lg:grid-cols-[38.2%_61.8%] gap-[89px]">
            {/* Contact Info */}
            <div>
              <h2 className="font-[family-name:var(--font-serif)] font-light text-[28px] text-alabaster mb-[34px]">
                Reach us<span className="text-red">.</span>
              </h2>

              <div className="space-y-[21px]">
                <div className="flex items-start gap-[13px]">
                  <MapPin
                    size={14}
                    className="text-bronze mt-1 shrink-0"
                  />
                  <div>
                    <h3 className="text-[13px] font-medium text-alabaster mb-1">
                      Head Office & Factory
                    </h3>
                    <p className="text-[13px] text-warm">{BRAND.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-[13px]">
                  <Phone
                    size={14}
                    className="text-bronze mt-1 shrink-0"
                  />
                  <div>
                    <h3 className="text-[13px] font-medium text-alabaster mb-1">
                      Phone
                    </h3>
                    <p className="text-[13px] text-warm">{BRAND.phone}</p>
                  </div>
                </div>

                <div className="flex items-start gap-[13px]">
                  <Mail
                    size={14}
                    className="text-bronze mt-1 shrink-0"
                  />
                  <div>
                    <h3 className="text-[13px] font-medium text-alabaster mb-1">
                      Email
                    </h3>
                    <p className="text-[13px] text-warm">{BRAND.email}</p>
                  </div>
                </div>

                <div className="flex items-start gap-[13px]">
                  <MessageCircle
                    size={14}
                    className="text-bronze mt-1 shrink-0"
                  />
                  <div>
                    <h3 className="text-[13px] font-medium text-alabaster mb-1">
                      WhatsApp
                    </h3>
                    <p className="text-[13px] text-warm">{BRAND.whatsapp}</p>
                  </div>
                </div>

                <div className="flex items-start gap-[13px]">
                  <Clock
                    size={14}
                    className="text-bronze mt-1 shrink-0"
                  />
                  <div>
                    <h3 className="text-[13px] font-medium text-alabaster mb-1">
                      Business Hours
                    </h3>
                    <p className="text-[13px] text-warm">
                      Mon – Fri: 9:00 AM – 6:00 PM (CST)
                      <br />
                      Sat: 9:00 AM – 12:00 PM (CST)
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-[34px] aspect-[4/3] rounded-[2px] overflow-hidden border border-line">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3451.5!2d106.05!3d29.85!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjnCsDUxJzAwLjAiTiAxMDbCsDAzJzAwLjAiRQ!5e0!3m2!1sen!2scn!4v1700000000000!5m2!1sen!2scn&q=重庆市铜梁区产业大道68号"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PINDÉ Factory Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="font-[family-name:var(--font-serif)] font-light text-[28px] text-alabaster mb-[34px]">
                Send an inquiry<span className="text-red">.</span>
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

import Link from "next/link";
import { BRAND } from "@/lib/constants";
import ContactForm from "@/components/ContactForm";
import { breadcrumbJsonLd } from "@/lib/jsonld";

type Props = { locale: string };

const container = "mx-auto max-w-[1200px] px-[55px] max-lg:px-6";

export default function ContactPage({ locale }: Props) {
  const isRu = locale === "ru";
  const homeLabel = isRu ? "Главная" : "Home";
  const contactLabel = isRu ? "Контакты" : "Contact";
  const crumbs = breadcrumbJsonLd([
    { name: homeLabel, url: `https://pindesys.com/${locale}` },
    { name: contactLabel, url: `https://pindesys.com/${locale}/contact` },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }} />
      <nav aria-label={isRu ? "Хлебные крошки" : "Breadcrumb"} className="pt-[104px] py-4 bg-obsidian border-b border-line">
        <div className={`${container} pt-[13px] flex items-center gap-2 text-[11px] tracking-[2px] uppercase text-muted`}>
          <Link href={`/${locale}`} prefetch={false} className="hover:text-alabaster transition-colors">{homeLabel}</Link>
          <span>/</span>
          <span className="text-warm">{contactLabel}</span>
        </div>
      </nav>
      <section className="py-[89px] bg-obsidian">
        <div className={`${container} grid lg:grid-cols-[0.9fr_1.1fr] gap-[55px]`}>
          <div>
            <h1 className="font-[family-name:var(--font-serif)] font-semibold text-[clamp(40px,6vw,64px)] leading-[0.95] text-alabaster mb-[21px]">
              {isRu ? "Свяжитесь с нами" : "Get in touch"}
              <span className="text-red">.</span>
            </h1>
            <p className="text-warm text-[15px] leading-[1.9] mb-[34px]">
              {isRu
                ? "Готовы обсудить ваш проект? Свяжитесь с нами для запросов продукции, технической поддержки или коммерческих предложений."
                : "Ready to discuss your project? Reach out for product inquiries, technical support, or quotations."}
            </p>
            <div className="space-y-[21px] text-warm text-[13px]">
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.08em] text-muted mb-1">
                  {isRu ? "Головной офис и завод" : "Head Office & Factory"}
                </span>
                <span>{isRu ? BRAND.addressRu : BRAND.address}</span>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.08em] text-muted mb-1">
                  {isRu ? "Телефон" : "Phone"}
                </span>
                <a href={`tel:${BRAND.phone}`} className="hover:text-alabaster transition-colors">{BRAND.phone}</a>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.08em] text-muted mb-1">Email</span>
                <a href={`mailto:${BRAND.email}`} className="hover:text-alabaster transition-colors">{BRAND.email}</a>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.08em] text-muted mb-1">WhatsApp</span>
                <a href={`https://wa.me/${BRAND.whatsapp.replace(/[+ ]/g, "")}`} className="hover:text-alabaster transition-colors">{BRAND.whatsapp}</a>
              </div>
              <div>
                <span className="block text-[10px] font-bold uppercase tracking-[0.08em] text-muted mb-1">
                  {isRu ? "Часы работы" : "Business Hours"}
                </span>
                <span>{isRu ? "Пн–Пт: 9:00–18:00 (CST)" : "Mon–Fri: 9:00 AM – 6:00 PM (CST)"}</span>
                <br />
                <span>{isRu ? "Сб: 9:00–12:00 (CST)" : "Sat: 9:00 AM – 12:00 PM (CST)"}</span>
              </div>
            </div>
          </div>
          <div className="bg-surface border border-line rounded-[2px] p-8">
            <h2 className="font-[family-name:var(--font-serif)] text-[24px] font-semibold text-alabaster mb-[21px]">
              {isRu ? "Отправить запрос" : "Send an inquiry"}
              <span className="text-red">.</span>
            </h2>
            <ContactForm locale={isRu ? "ru" : "en"} />
          </div>
        </div>
      </section>
    </>
  );
}

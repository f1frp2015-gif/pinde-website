"use client";

import { useState } from "react";

type ContactLocale = "en" | "ru";

const copy = {
  en: {
    thanks: "Thank you",
    received: "We've received your inquiry. Our team will review the project details and reply by email.",
    name: "Full Name",
    namePlaceholder: "Your name",
    email: "Email Address",
    country: "Country / Region",
    countryPlaceholder: "Select your region",
    product: "Product Interest",
    productPlaceholder: "Select a product",
    company: "Company Name",
    companyPlaceholder: "Your company (optional)",
    message: "Message",
    messagePlaceholder: "Tell us about your project requirements...",
    error: "Failed to send. Please try again or email us directly at inquiry@pindesys.com",
    sending: "Sending...",
    send: "Send inquiry",
  },
  ru: {
    thanks: "Спасибо",
    received: "Мы получили запрос. Команда проверит данные проекта и ответит по электронной почте.",
    name: "Имя и фамилия",
    namePlaceholder: "Как к вам обращаться",
    email: "Электронная почта",
    country: "Страна / регион",
    countryPlaceholder: "Выберите страну",
    product: "Интересующая продукция",
    productPlaceholder: "Выберите направление",
    company: "Компания",
    companyPlaceholder: "Название компании (необязательно)",
    message: "Сообщение",
    messagePlaceholder: "Опишите проект, требуемую систему и объём...",
    error: "Не удалось отправить запрос. Повторите попытку или напишите на inquiry@pindesys.com",
    sending: "Отправка...",
    send: "Отправить запрос",
  },
} as const;

const countries = [
  ["Kazakhstan", "Казахстан"],
  ["Uzbekistan", "Узбекистан"],
  ["Kyrgyzstan", "Кыргызстан"],
  ["Tajikistan", "Таджикистан"],
  ["Turkmenistan", "Туркменистан"],
  ["Russia", "Россия"],
  ["Belarus", "Беларусь"],
  ["Armenia", "Армения"],
  ["Azerbaijan", "Азербайджан"],
  ["Georgia", "Грузия"],
  ["Europe", "Европа"],
  ["Middle East", "Ближний Восток"],
  ["Other", "Другая страна"],
] as const;

const productOptions = [
  ["Casement Windows", "Поворотные окна"],
  ["Sliding Windows & Doors", "Раздвижные окна и двери"],
  ["Push-Out Windows", "Параллельно-выдвижные окна"],
  ["Folding Doors", "Складные двери"],
  ["Swing Doors", "Распашные двери"],
  ["Interior Doors", "Межкомнатные двери"],
  ["Multiple Products", "Несколько систем"],
] as const;

function SendIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m22 2-7 20-4-9-9-4Z" />
      <path d="M22 2 11 13" />
    </svg>
  );
}

export default function ContactForm({ locale }: { locale: ContactLocale }) {
  const text = copy[locale];
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      country: (form.elements.namedItem("country") as HTMLSelectElement).value,
      product: (form.elements.namedItem("product") as HTMLSelectElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
      locale,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-surface border border-line rounded-[2px] p-[34px] text-center">
        <span className="inline-block w-[5px] h-[5px] rounded-full bg-red mb-[13px]" />
        <h3 className="font-[family-name:var(--font-serif)] text-[22px] font-semibold text-alabaster mb-[8px]">
          {text.thanks}
        </h3>
        <p className="text-warm text-[13px]">
          {text.received}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-[21px]">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[21px]">
        <div>
          <label
            htmlFor="name"
            className="block text-[10px] font-medium tracking-[2px] uppercase text-muted mb-[8px]"
          >
            {text.name} *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-[21px] py-[13px] bg-surface border border-line text-alabaster text-[14px] rounded-[1px] focus:ring-1 focus:ring-bronze/30 focus:border-bronze outline-none transition-colors placeholder:text-muted"
            placeholder={text.namePlaceholder}
            autoComplete="name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-[10px] font-medium tracking-[2px] uppercase text-muted mb-[8px]"
          >
            {text.email} *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autoComplete="email"
            className="w-full px-[21px] py-[13px] bg-surface border border-line text-alabaster text-[14px] rounded-[1px] focus:ring-1 focus:ring-bronze/30 focus:border-bronze outline-none transition-colors placeholder:text-muted"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-[21px]">
        <div>
          <label
            htmlFor="country"
            className="block text-[10px] font-medium tracking-[2px] uppercase text-muted mb-[8px]"
          >
            {text.country} *
          </label>
          <select
            id="country"
            name="country"
            required
            className="w-full px-[21px] py-[13px] bg-surface border border-line text-alabaster text-[14px] rounded-[1px] focus:ring-1 focus:ring-bronze/30 focus:border-bronze outline-none transition-colors"
          >
            <option value="">{text.countryPlaceholder}</option>
            {countries.map(([value, ruLabel]) => (
              <option key={value} value={value}>{locale === "ru" ? ruLabel : value}</option>
            ))}
          </select>
        </div>
        <div>
          <label
            htmlFor="product"
            className="block text-[10px] font-medium tracking-[2px] uppercase text-muted mb-[8px]"
          >
            {text.product}
          </label>
          <select
            id="product"
            name="product"
            className="w-full px-[21px] py-[13px] bg-surface border border-line text-alabaster text-[14px] rounded-[1px] focus:ring-1 focus:ring-bronze/30 focus:border-bronze outline-none transition-colors"
          >
            <option value="">{text.productPlaceholder}</option>
            {productOptions.map(([value, ruLabel]) => (
              <option key={value} value={value}>{locale === "ru" ? ruLabel : value}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-[10px] font-medium tracking-[2px] uppercase text-muted mb-[8px]"
        >
          {text.company}
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-[21px] py-[13px] bg-surface border border-line text-alabaster text-[14px] rounded-[1px] focus:ring-1 focus:ring-bronze/30 focus:border-bronze outline-none transition-colors placeholder:text-muted"
          placeholder={text.companyPlaceholder}
          autoComplete="organization"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[10px] font-medium tracking-[2px] uppercase text-muted mb-[8px]"
        >
          {text.message} *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-[21px] py-[13px] bg-surface border border-line text-alabaster text-[14px] rounded-[1px] focus:ring-1 focus:ring-bronze/30 focus:border-bronze outline-none transition-colors resize-vertical placeholder:text-muted"
          placeholder={text.messagePlaceholder}
        />
      </div>

      {status === "error" && (
        <div className="text-red text-[13px]" role="alert">
          <p>{text.error}</p>
          <p className="mt-2 flex flex-wrap gap-x-4 gap-y-1">
            <a className="font-bold underline underline-offset-4" href="mailto:inquiry@pindesys.com">inquiry@pindesys.com</a>
            <a className="font-bold underline underline-offset-4" href="https://wa.me/8613883333993" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          </p>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-[10px] px-[34px] py-4 bg-gold text-navy text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:brightness-90 transition-all disabled:opacity-50"
      >
        <SendIcon />
        {status === "sending" ? text.sending : text.send}
      </button>
    </form>
  );
}

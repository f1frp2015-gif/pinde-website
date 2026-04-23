"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
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
        <h3 className="font-[family-name:var(--font-serif)] text-[22px] font-light text-alabaster mb-[8px]">
          Thank you
        </h3>
        <p className="text-warm text-[13px]">
          We&apos;ve received your inquiry and will get back to you within 24
          hours.
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
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-[21px] py-[13px] bg-surface border border-line text-alabaster text-[14px] rounded-[1px] focus:ring-1 focus:ring-bronze/30 focus:border-bronze outline-none transition-colors placeholder:text-muted"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-[10px] font-medium tracking-[2px] uppercase text-muted mb-[8px]"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
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
            Country / Region *
          </label>
          <select
            id="country"
            name="country"
            required
            className="w-full px-[21px] py-[13px] bg-surface border border-line text-alabaster text-[14px] rounded-[1px] focus:ring-1 focus:ring-bronze/30 focus:border-bronze outline-none transition-colors"
          >
            <option value="">Select your region</option>
            <option value="Australia">Australia</option>
            <option value="New Zealand">New Zealand</option>
            <option value="United States">United States</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Europe">Europe</option>
            <option value="Middle East">Middle East</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="product"
            className="block text-[10px] font-medium tracking-[2px] uppercase text-muted mb-[8px]"
          >
            Product Interest
          </label>
          <select
            id="product"
            name="product"
            className="w-full px-[21px] py-[13px] bg-surface border border-line text-alabaster text-[14px] rounded-[1px] focus:ring-1 focus:ring-bronze/30 focus:border-bronze outline-none transition-colors"
          >
            <option value="">Select a product</option>
            <option value="Casement Windows">Casement Windows</option>
            <option value="Sliding Windows & Doors">Sliding Windows & Doors</option>
            <option value="Push-Out Windows">Push-Out Windows</option>
            <option value="Folding Doors">Folding Doors</option>
            <option value="Swing Doors">Swing Doors</option>
            <option value="Interior Doors">Interior Doors</option>
            <option value="Multiple Products">Multiple Products</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-[10px] font-medium tracking-[2px] uppercase text-muted mb-[8px]"
        >
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-[21px] py-[13px] bg-surface border border-line text-alabaster text-[14px] rounded-[1px] focus:ring-1 focus:ring-bronze/30 focus:border-bronze outline-none transition-colors placeholder:text-muted"
          placeholder="Your company (optional)"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-[10px] font-medium tracking-[2px] uppercase text-muted mb-[8px]"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-[21px] py-[13px] bg-surface border border-line text-alabaster text-[14px] rounded-[1px] focus:ring-1 focus:ring-bronze/30 focus:border-bronze outline-none transition-colors resize-vertical placeholder:text-muted"
          placeholder="Tell us about your project requirements..."
        />
      </div>

      {status === "error" && (
        <p className="text-red text-[13px]">
          Failed to send. Please try again or email us directly at doris.li@pinde-alu.com
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex items-center gap-[10px] px-[34px] py-4 bg-red text-white text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:brightness-90 transition-all disabled:opacity-50"
      >
        <Send size={14} />
        {status === "sending" ? "Sending..." : "Send inquiry"}
      </button>
    </form>
  );
}

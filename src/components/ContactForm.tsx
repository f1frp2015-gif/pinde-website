"use client";

import { useState } from "react";
import { Send } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Integrate with email service or API
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
        <h3 className="text-xl font-semibold text-green-800 mb-2">
          Thank You!
        </h3>
        <p className="text-green-600">
          We&apos;ve received your inquiry and will get back to you within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="country"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Country / Region *
          </label>
          <select
            id="country"
            name="country"
            required
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
          >
            <option value="">Select your region</option>
            <option value="australia">Australia</option>
            <option value="new-zealand">New Zealand</option>
            <option value="usa">United States</option>
            <option value="canada">Canada</option>
            <option value="uk">United Kingdom</option>
            <option value="europe">Europe</option>
            <option value="middle-east">Middle East</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="product"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Product Interest
          </label>
          <select
            id="product"
            name="product"
            className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
          >
            <option value="">Select a product</option>
            <option value="sliding">Sliding Windows & Doors</option>
            <option value="casement">Casement Windows</option>
            <option value="tilt-turn">Tilt & Turn Windows</option>
            <option value="bi-fold">Bi-fold Doors</option>
            <option value="hinged">Hinged Doors</option>
            <option value="curtain-wall">Curtain Wall Systems</option>
            <option value="fixed">Fixed Windows</option>
            <option value="multiple">Multiple Products</option>
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="company"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors"
          placeholder="Your company (optional)"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-2"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-accent/20 focus:border-accent outline-none transition-colors resize-vertical"
          placeholder="Tell us about your project requirements..."
        />
      </div>

      <button
        type="submit"
        className="inline-flex items-center gap-2 px-8 py-3.5 bg-accent text-white font-medium rounded-lg hover:bg-accent-light transition-colors"
      >
        <Send size={18} />
        Send Inquiry
      </button>
    </form>
  );
}

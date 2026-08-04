"use client";

import { useRef, useState } from "react";
import { FileUp, Send, X } from "lucide-react";
import type { LandingContent, LandingLocale } from "@/content/landing";

const maxFileSize = 8 * 1024 * 1024;
const allowedExtensions = ["pdf", "dwg", "dxf", "xls", "xlsx", "csv", "zip"];

type Props = {
  locale: LandingLocale;
  content: LandingContent["rfq"];
};

const fieldClass =
  "w-full border border-[#DCE1E6] bg-white px-4 py-3.5 text-[14px] text-[#0D2440] outline-none transition-colors placeholder:text-[#7A828C] focus:border-[#C7A154] focus:ring-2 focus:ring-[#C7A154]/10";

const labelClass =
  "mb-2 block text-[10px] font-bold uppercase tracking-[0.06em] text-[#7A828C]";

export default function LandingInquiryForm({ locale, content }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [fileError, setFileError] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  function validateFile(file: File) {
    const extension = file.name.split(".").pop()?.toLowerCase() ?? "";
    return file.size <= maxFileSize && allowedExtensions.includes(extension);
  }

  function handleFile(file: File | null) {
    if (!file) {
      setSelectedFile(null);
      setFileError(false);
      return;
    }

    if (!validateFile(file)) {
      setSelectedFile(null);
      setFileError(true);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    setSelectedFile(file);
    setFileError(false);
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);
    formData.set("locale", locale);

    if (selectedFile) {
      formData.set("attachment", selectedFile);
    } else {
      formData.delete("attachment");
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Request failed");

      setStatus("sent");
      form.reset();
      setSelectedFile(null);
    } catch {
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div
        className="flex min-h-[440px] flex-col items-center justify-center border border-[#DCE1E6] bg-[#F6F7F8] p-8 text-center"
        role="status"
      >
        <span className="mb-[21px] h-[8px] w-[8px] rounded-full bg-red" />
        <h3 className="text-[30px] font-extrabold text-[#0D2440]">
          {content.successTitle}
        </h3>
        <p className="mt-3 max-w-[440px] text-[14px] leading-[1.8] text-[#7A828C]">
          {content.successText}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-[21px]" encType="multipart/form-data">
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="absolute left-[-9999px] h-px w-px overflow-hidden"
        aria-hidden="true"
      />

      <div className="grid gap-[21px] sm:grid-cols-2">
        <div>
          <label htmlFor={`${locale}-name`} className={labelClass}>
            {content.fields.name} *
          </label>
          <input
            id={`${locale}-name`}
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder={content.fields.namePlaceholder}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor={`${locale}-company`} className={labelClass}>
            {content.fields.company} *
          </label>
          <input
            id={`${locale}-company`}
            name="company"
            type="text"
            required
            autoComplete="organization"
            placeholder={content.fields.companyPlaceholder}
            className={fieldClass}
          />
        </div>
      </div>

      <div className="grid gap-[21px] sm:grid-cols-2">
        <div>
          <label htmlFor={`${locale}-email`} className={labelClass}>
            {content.fields.email} *
          </label>
          <input
            id={`${locale}-email`}
            name="email"
            type="email"
            required
            autoComplete="email"
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor={`${locale}-country`} className={labelClass}>
            {content.fields.country} *
          </label>
          <select id={`${locale}-country`} name="country" required className={fieldClass}>
            <option value="">{content.fields.countryPlaceholder}</option>
            {content.countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-[21px] sm:grid-cols-2">
        <div>
          <label htmlFor={`${locale}-role`} className={labelClass}>
            {content.fields.role} *
          </label>
          <select id={`${locale}-role`} name="role" required className={fieldClass}>
            <option value="">{content.fields.rolePlaceholder}</option>
            {content.roles.map((role) => (
              <option key={role} value={role}>
                {role}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${locale}-system`} className={labelClass}>
            {content.fields.system} *
          </label>
          <select id={`${locale}-system`} name="product" required className={fieldClass}>
            <option value="">{content.fields.systemPlaceholder}</option>
            {content.systems.map((system) => (
              <option key={system} value={system}>
                {system}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid gap-[21px] sm:grid-cols-2">
        <div>
          <label htmlFor={`${locale}-format`} className={labelClass}>
            {content.fields.format} *
          </label>
          <select id={`${locale}-format`} name="supplyFormat" required className={fieldClass}>
            <option value="">{content.fields.formatPlaceholder}</option>
            {content.formats.map((format) => (
              <option key={format} value={format}>
                {format}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor={`${locale}-volume`} className={labelClass}>
            {content.fields.volume}
          </label>
          <input
            id={`${locale}-volume`}
            name="annualVolume"
            type="text"
            placeholder={content.fields.volumePlaceholder}
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`${locale}-standard`} className={labelClass}>
          {content.fields.standard}
        </label>
        <input
          id={`${locale}-standard`}
          name="targetStandard"
          type="text"
          placeholder={content.fields.standardPlaceholder}
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor={`${locale}-message`} className={labelClass}>
          {content.fields.message} *
        </label>
        <textarea
          id={`${locale}-message`}
          name="message"
          required
          rows={6}
          placeholder={content.fields.messagePlaceholder}
          className={`${fieldClass} resize-y`}
        />
      </div>

      <div>
        <span className={labelClass}>{content.fields.file}</span>
        <label
          htmlFor={`${locale}-attachment`}
          className="flex min-h-[92px] cursor-pointer items-center justify-between gap-5 border border-dashed border-[#B9C0C8] bg-[#F6F7F8] px-5 py-4 transition-colors hover:border-[#C7A154]"
        >
          <span className="flex min-w-0 items-center gap-[13px]">
            <FileUp size={20} className="shrink-0 text-[#C7A154]" />
            <span className="min-w-0">
              <span className="block truncate text-[13px] font-bold text-[#0D2440]">
                {selectedFile ? selectedFile.name : content.fields.file}
              </span>
              <span className="mt-1 block text-[11px] text-[#7A828C]">
                {content.fields.fileHelp}
              </span>
            </span>
          </span>
          {selectedFile && (
            <button
              type="button"
              aria-label={locale === "ru" ? "Удалить вложение" : "Remove attachment"}
              onClick={(event) => {
                event.preventDefault();
                handleFile(null);
                if (fileInputRef.current) fileInputRef.current.value = "";
              }}
              className="shrink-0 p-2 text-[#7A828C] hover:text-[#0D2440]"
            >
              <X size={16} />
            </button>
          )}
        </label>
        <input
          ref={fileInputRef}
          id={`${locale}-attachment`}
          name="attachment"
          type="file"
          accept=".pdf,.dwg,.dxf,.xls,.xlsx,.csv,.zip"
          className="sr-only"
          onChange={(event) => handleFile(event.target.files?.[0] ?? null)}
        />
        {fileError && (
          <p className="mt-[8px] text-[12px] text-red" role="alert">
            {content.fileError}
          </p>
        )}
      </div>

      <label className="flex items-start gap-2.5 text-[11px] leading-[1.6] text-[#7A828C]">
        <input
          name="consent"
          type="checkbox"
          value="yes"
          required
          className="mt-[3px] h-[14px] w-[14px] accent-red"
        />
        <span>{content.fields.consent}</span>
      </label>

      {status === "error" && (
        <p className="text-[13px] leading-[1.6] text-red" role="alert">
          {content.error}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending" || fileError}
        className="inline-flex min-h-12 w-full items-center justify-center gap-2.5 bg-[#C7A154] px-7 py-3.5 text-[12px] font-bold text-[#0D2440] transition-[filter] hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-50 sm:w-auto"
      >
        <Send size={15} />
        {status === "sending" ? content.sending : content.submit}
      </button>
    </form>
  );
}

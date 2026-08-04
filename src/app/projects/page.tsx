import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { capabilityCases } from "@/data/projects";

export const metadata: Metadata = {
  title: "System Capabilities — Cold-Climate & EAEU Window Solutions | PINDÉ",
  description:
    "Verified system configurations for window fabricators in Russia, Kazakhstan, Belarus, and CIS. Thermally broken aluminium, FRP composite, and CKD supply examples with applicable GOST, EN, and NFRC standards.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "PINDÉ System Capabilities — EAEU Window Solutions",
    description:
      "Verified system configurations for window fabricators in Russia, Kazakhstan, Belarus, and CIS markets.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-20 py-[89px] bg-obsidian">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6 pt-[55px]">
          <div className="flex items-center gap-[13px] mb-[34px]">
            <span className="w-[21px] h-px bg-muted opacity-40" />
            <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
              Capability showcase
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-serif)] font-light text-[clamp(40px,6vw,64px)] leading-[0.95] tracking-[0.04em] text-alabaster mb-[21px]">
            System configurations<span className="text-red">.</span>
          </h1>
          <p className="text-warm text-[15px] leading-[1.9] max-w-[620px]">
            Verified system configurations that PINDÉ can supply to window
            fabricators. These represent supply-ready specifications — not
            claimed completed projects. Each configuration is backed by
            applicable standards and test evidence.
          </p>
        </div>
      </section>

      {/* Capability Grid */}
      <section className="py-[89px] bg-surface">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[13px]">
            {capabilityCases.map((c) => (
              <ProjectCard key={c.slug} project={c} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[89px] bg-obsidian">
        <div className="max-w-[800px] mx-auto px-[55px] max-lg:px-6 text-center">
          <h2 className="font-[family-name:var(--font-serif)] font-light text-[28px] leading-[1.15] text-alabaster mb-[21px]">
            Need a configuration for your market<span className="text-red">?</span>
          </h2>
          <p className="text-warm text-[15px] leading-[1.9] mb-[34px]">
            Send your window schedule and target standard. Our engineering team
            will map the system configuration, pilot level, and compliance route
            for your destination country.
          </p>
          <div className="flex flex-col sm:flex-row gap-[21px] justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-[10px] px-[34px] py-4 bg-red text-white text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:brightness-90 transition-all"
            >
              <span className="inline-block w-[5px] h-[5px] rounded-full bg-white" />
              Send technical RFQ
            </Link>
            <Link
              href="/en/systems/aluminium"
              className="inline-flex items-center gap-[8px] px-[34px] py-4 border border-line text-alabaster text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:border-warm transition-all"
            >
              Browse systems <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

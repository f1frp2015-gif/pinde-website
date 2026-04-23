import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  ThermalBreakIcon,
  AirTightnessIcon,
  WaterResistanceIcon,
  SolarControlIcon,
  AcousticIcon,
  StructuralIcon,
  ExtrusionIcon,
  SurfaceTreatmentIcon,
  GlassProcessingIcon,
} from "@/components/TechIcons";

export const metadata: Metadata = {
  title: "Technology — Thermal Break, Multi-Chamber Profiles, Industry 4.0",
  description:
    "PINDÉ engineering: PA66GF25 thermal break, multi-chamber 6063-T5 profiles, EPDM triple sealing. German & Italian CNC, Akzo Nobel coating.",
  alternates: { canonical: "/technology" },
  openGraph: {
    title: "PINDÉ Technology — Advanced Aluminium Engineering",
    description: "PA66GF25 thermal break, multi-chamber profiles, Industry 4.0 manufacturing. German & Italian CNC equipment.",
    url: "/technology",
  },
};

const technologies = [
  {
    title: "Thermal Break",
    Icon: ThermalBreakIcon,
    description:
      "Advanced polyamide thermal break strips create an effective barrier between interior and exterior aluminium, dramatically reducing heat transfer.",
  },
  {
    title: "Air Tightness",
    Icon: AirTightnessIcon,
    description:
      "Precision-engineered sealing systems with multiple gasket layers ensure exceptional air tightness, preventing drafts even in extreme weather.",
  },
  {
    title: "Water Resistance",
    Icon: WaterResistanceIcon,
    description:
      "Advanced drainage systems and weather seals protect against water ingress, tested to withstand intense rainfall and high wind-driven rain pressures.",
  },
  {
    title: "Solar Control",
    Icon: SolarControlIcon,
    description:
      "Compatible with high-performance glass options including low-E coatings, tinted glass, and triple glazing for optimal solar heat gain control.",
  },
  {
    title: "Acoustic Performance",
    Icon: AcousticIcon,
    description:
      "Multi-chamber profiles combined with laminated or acoustic glass options deliver superior sound insulation for peaceful interiors.",
  },
  {
    title: "Structural Integrity",
    Icon: StructuralIcon,
    description:
      "Engineered for high wind loads and structural demands. Tested and certified to meet the strictest international building codes.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-20 py-[89px] bg-obsidian">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6 pt-[55px]">
          <div className="flex items-center gap-[13px] mb-[34px]">
            <span className="w-[21px] h-px bg-muted opacity-40" />
            <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
              Engineering
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-serif)] font-light text-[clamp(40px,6vw,64px)] leading-[0.95] tracking-[0.04em] text-alabaster mb-[21px]">
            Technology<span className="text-red">.</span>
          </h1>
          <p className="text-warm text-[15px] leading-[1.9] max-w-[520px]">
            Advanced engineering solutions that deliver superior performance in
            every climate.
          </p>
        </div>
      </section>

      {/* Technology Grid */}
      <section className="py-[89px] bg-surface">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[13px]">
            {technologies.map((tech) => {
              const Icon = tech.Icon;
              return (
                <div
                  key={tech.title}
                  className="group bg-obsidian p-[34px] border border-line rounded-[2px] transition-all hover:border-warm/30"
                >
                  <div className="mb-[21px] text-alabaster transition-transform group-hover:-translate-y-[2px]">
                    <Icon size={34} />
                  </div>
                  <h3 className="text-[15px] font-medium text-alabaster mb-[8px]">
                    {tech.title}
                  </h3>
                  <p className="text-[13px] text-warm leading-relaxed">
                    {tech.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-[144px] bg-obsidian">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
          <div className="grid lg:grid-cols-[61.8%_38.2%] gap-[89px] items-center">
            <div>
              <div className="flex items-center gap-[13px] mb-[34px]">
                <span className="w-[21px] h-px bg-muted opacity-40" />
                <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
                  System design
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-serif)] font-light text-[36px] leading-[1.15] text-alabaster mb-[34px]">
                Multi-chamber profile<span className="text-red">.</span>
              </h2>
              <div className="space-y-[21px] text-warm text-[15px] leading-[1.9]">
                <p>
                  PINDÉ profiles are manufactured using premium 6063-T5
                  aluminium alloy with wall thickness meeting or exceeding 1.4mm.
                  PA66GF25 polyamide thermal break strips create an effective
                  thermal barrier.
                </p>
                <p>
                  Surface treatments include powder coating (Akzo Nobel),
                  anodising, and wood-grain finishes. All profiles feature EPDM
                  rubber seals and are compatible with premium hardware from
                  SIEGENIA, G-U, Roto, and KIN LONG.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] bg-surface border border-line rounded-[2px] flex items-center justify-center text-alabaster">
              <svg
                width="144"
                height="108"
                viewBox="0 0 144 108"
                fill="none"
                aria-hidden="true"
              >
                {/* Multi-chamber profile cross-section: 4 aluminium chambers
                    split by a PA66GF25 thermal break with a red signature dot */}
                <rect x="14" y="18" width="52" height="72" rx="1" stroke="currentColor" strokeWidth="1" />
                <rect x="78" y="18" width="52" height="72" rx="1" stroke="currentColor" strokeWidth="1" />
                <line x1="14" y1="54" x2="66" y2="54" stroke="currentColor" strokeWidth="1" />
                <line x1="78" y1="54" x2="130" y2="54" stroke="currentColor" strokeWidth="1" />
                <line x1="66" y1="18" x2="78" y2="18" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="66" y1="90" x2="78" y2="90" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <line x1="66" y1="54" x2="78" y2="54" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                <circle cx="72" cy="54" r="2.5" fill="#D42B2B" />
                <text x="72" y="102" textAnchor="middle" fontSize="6" letterSpacing="1.5" fill="currentColor" opacity="0.5" fontFamily="monospace">PA66GF25</text>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-[89px] bg-surface">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
          <div className="flex items-center gap-[13px] mb-[55px]">
            <span className="w-[21px] h-px bg-muted opacity-40" />
            <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
              Manufacturing process
            </span>
          </div>

          <div className="grid md:grid-cols-3 gap-[13px]">
            {[
              {
                num: "01",
                title: "Extrusion",
                Icon: ExtrusionIcon,
                description:
                  "3600-ton extrusion press produces precision aluminium profiles with automated cutting achieving ±0.5mm tolerance.",
              },
              {
                num: "02",
                title: "Surface Treatment",
                Icon: SurfaceTreatmentIcon,
                description:
                  "Fully automated powder coating line using Akzo Nobel premium powders with pre-treatment including degreasing and chromating.",
              },
              {
                num: "03",
                title: "Glass Processing",
                Icon: GlassProcessingIcon,
                description:
                  "CNC glass cutting and auto-feed tempering furnace produce 3C certified tempered glass. Insulated glass with molecular sieve desiccant.",
              },
            ].map((step) => {
              const Icon = step.Icon;
              return (
                <div
                  key={step.title}
                  className="relative bg-obsidian p-[34px] border border-line rounded-[2px]"
                >
                  <div className="absolute top-[21px] right-[21px] font-[family-name:var(--font-mono)] text-[34px] font-light text-line">
                    {step.num}
                  </div>
                  <div className="mb-[21px] text-alabaster">
                    <Icon size={34} />
                  </div>
                  <h3 className="text-[15px] font-medium text-alabaster mb-[8px]">
                    {step.title}
                  </h3>
                  <p className="text-[13px] text-warm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testing */}
      <section className="py-[89px] bg-obsidian">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
          <div className="flex items-center gap-[13px] mb-[55px]">
            <span className="w-[21px] h-px bg-muted opacity-40" />
            <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
              Testing standards
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-[13px]">
            {[
              { label: "Air Permeability", standard: "AS/NZS 4420, EN 12207" },
              { label: "Water Tightness", standard: "AS/NZS 4420, EN 12208" },
              { label: "Wind Resistance", standard: "AS/NZS 4420, EN 12210" },
              {
                label: "Thermal Performance",
                standard: "NFRC, EN ISO 10077",
              },
            ].map((test) => (
              <div
                key={test.label}
                className="bg-surface p-[21px] border border-line rounded-[2px] text-center"
              >
                <h4 className="text-[13px] font-medium text-alabaster mb-[8px]">
                  {test.label}
                </h4>
                <p className="text-[10px] text-muted tracking-[1px]">
                  {test.standard}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-link → Systems */}
      <section className="py-[89px] bg-surface">
        <div className="max-w-[800px] mx-auto px-[55px] max-lg:px-6 text-center">
          <h2 className="font-[family-name:var(--font-serif)] font-light text-[28px] leading-[1.15] text-alabaster mb-[21px]">
            See our technology in action<span className="text-red">.</span>
          </h2>
          <p className="text-warm text-[15px] leading-[1.9] mb-[34px]">
            Every PINDÉ system embeds these technologies. Explore the full range
            to find the right solution for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-[21px] justify-center">
            <Link
              href="/products"
              className="inline-flex items-center gap-[10px] px-[34px] py-4 bg-red text-white text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:brightness-90 transition-all"
            >
              <span className="inline-block w-[5px] h-[5px] rounded-full bg-white" />
              Browse systems
            </Link>
            <Link
              href="/quality"
              className="inline-flex items-center gap-[8px] px-[34px] py-4 border border-line text-alabaster text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:border-warm transition-all"
            >
              Quality assurance <ArrowRight size={12} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

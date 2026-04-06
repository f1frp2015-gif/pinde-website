import type { Metadata } from "next";
import {
  Layers,
  Wind,
  Droplets,
  Sun,
  Volume2,
  ShieldCheck,
  Factory,
  Paintbrush,
  GlassWater,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Discover the advanced engineering and technology behind PINDE aluminum system windows and doors — thermal break, weatherproofing, and acoustic performance.",
};

const technologies = [
  {
    icon: Layers,
    title: "Thermal Break Technology",
    description:
      "Our profiles feature advanced polyamide thermal break strips that create an effective barrier between interior and exterior aluminum, dramatically reducing heat transfer and improving energy efficiency.",
  },
  {
    icon: Wind,
    title: "Air Tightness",
    description:
      "Precision-engineered sealing systems with multiple gasket layers ensure exceptional air tightness, preventing drafts and reducing energy loss even in extreme weather conditions.",
  },
  {
    icon: Droplets,
    title: "Water Resistance",
    description:
      "Advanced drainage systems and weather seals protect against water ingress. Our systems are tested to withstand intense rainfall and high wind-driven rain pressures.",
  },
  {
    icon: Sun,
    title: "Solar Control",
    description:
      "Compatible with a wide range of high-performance glass options including low-E coatings, tinted glass, and triple glazing for optimal solar heat gain control.",
  },
  {
    icon: Volume2,
    title: "Acoustic Performance",
    description:
      "Multi-chamber profiles combined with laminated or acoustic glass options deliver superior sound insulation, creating peaceful interiors even in noisy environments.",
  },
  {
    icon: ShieldCheck,
    title: "Structural Integrity",
    description:
      "Engineered for high wind loads and structural demands. Our systems are tested and certified to meet the strictest international building codes and standards.",
  },
];

export default function TechnologyPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Technology & Innovation
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Advanced engineering solutions that deliver superior performance in
            every climate.
          </p>
        </div>
      </section>

      {/* Technology Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech) => (
              <div
                key={tech.title}
                className="p-8 rounded-lg border border-gray-100 hover:border-accent/20 hover:shadow-md transition-all"
              >
                <tech.icon
                  size={36}
                  className="text-accent mb-5"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {tech.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                System Design
              </p>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Multi-Chamber Profile Design
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  PINDE profiles are manufactured using premium 6063-T5 aluminum
                  alloy with wall thickness meeting or exceeding 1.4mm
                  standards. Our multi-chamber profile design incorporates
                  PA66GF25 polyamide thermal break strips, creating an effective
                  thermal barrier that dramatically reduces heat transfer.
                </p>
                <p>
                  Surface treatments include powder coating (using Akzo Nobel
                  premium powders), anodizing, and wood-grain finishes. All
                  profiles feature EPDM rubber seals for superior
                  weatherproofing, and are compatible with premium hardware from
                  SIEGENIA, G-U, Roto, and KIN LONG.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">[Profile Cross-Section Image]</span>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Manufacturing
            </p>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Advanced Manufacturing Process
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From raw material to finished product, every step is controlled
              in-house with precision equipment and strict quality protocols.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Factory,
                title: "1. Extrusion",
                description:
                  "Our 3600-ton extrusion press produces precision aluminum profiles with automated cutting achieving ±0.5mm tolerance. Every profile is inspected for dimensional accuracy before moving to the next stage.",
              },
              {
                icon: Paintbrush,
                title: "2. Surface Treatment",
                description:
                  "A fully automated powder coating line using Akzo Nobel premium powders ensures consistent, durable finishes. Pre-treatment includes degreasing, chromating, and drying for optimal coating adhesion and corrosion resistance.",
              },
              {
                icon: GlassWater,
                title: "3. Glass Processing",
                description:
                  "CNC glass cutting and auto-feed tempering furnace produce 3C certified tempered glass. Insulated glass units are assembled with molecular sieve desiccant, butyl rubber primary seal, and structural sealant secondary seal.",
              },
            ].map((step) => (
              <div
                key={step.title}
                className="p-8 rounded-lg border border-gray-100 hover:border-accent/20 hover:shadow-md transition-all"
              >
                <step.icon
                  size={36}
                  className="text-accent mb-5"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testing */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              R&D and Testing
            </p>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Rigorous Testing Standards
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Every PINDE system undergoes comprehensive testing to ensure it
              meets or exceeds international performance standards.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Air Permeability", standard: "AS/NZS 4420, EN 12207" },
              { label: "Water Tightness", standard: "AS/NZS 4420, EN 12208" },
              { label: "Wind Resistance", standard: "AS/NZS 4420, EN 12210" },
              { label: "Thermal Performance", standard: "NFRC, EN ISO 10077" },
            ].map((test) => (
              <div
                key={test.label}
                className="bg-light p-6 rounded-lg text-center"
              >
                <h4 className="font-semibold text-primary mb-2">
                  {test.label}
                </h4>
                <p className="text-xs text-gray-500">{test.standard}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

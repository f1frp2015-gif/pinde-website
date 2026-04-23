import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CertificationBanner from "@/components/CertificationBanner";
import {
  InspectionIcon,
  ProcessIcon,
  TestingIcon,
  DocumentIcon,
  PackingIcon,
  ImprovementIcon,
  LabRigIllustration,
} from "@/components/BrandIcons";

export const metadata: Metadata = {
  title: "Quality Assurance — AS2047, NFRC, CE, ISO 9001 Certified",
  description:
    "PINDÉ 6-step quality control from raw material to delivery. Certified AS2047, AS1288, NFRC, CE, ISO 9001, ISO 14001. In-house testing lab.",
  alternates: { canonical: "/quality" },
  openGraph: {
    title: "PINDÉ Quality — International Certifications & Testing",
    description: "6-step QC system. Certified AS2047, NFRC, CE, ISO 9001. In-house testing laboratory.",
    url: "/quality",
  },
};

const qcSteps = [
  {
    title: "Incoming Material Inspection",
    Icon: InspectionIcon,
    description:
      "All raw materials including aluminium billets, hardware, and sealing components are inspected and tested upon arrival.",
  },
  {
    title: "In-Process Quality Control",
    Icon: ProcessIcon,
    description:
      "Real-time quality monitoring at every production stage — extrusion, cutting, machining, surface treatment, and assembly.",
  },
  {
    title: "Finished Product Testing",
    Icon: TestingIcon,
    description:
      "Complete systems undergo air, water, and structural tests before approval for shipment.",
  },
  {
    title: "Documentation & Traceability",
    Icon: DocumentIcon,
    description:
      "Full traceability from raw material to finished product. Every batch documented with test certificates.",
  },
  {
    title: "Packing & Shipping",
    Icon: PackingIcon,
    description:
      "Products carefully packed with protective materials and inspected before loading.",
  },
  {
    title: "Continuous Improvement",
    Icon: ImprovementIcon,
    description:
      "Regular quality reviews, customer feedback analysis, and process optimisation.",
  },
];

export default function QualityPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-20 py-[89px] bg-obsidian">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6 pt-[55px]">
          <div className="flex items-center gap-[13px] mb-[34px]">
            <span className="w-[21px] h-px bg-muted opacity-40" />
            <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
              Quality assurance
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-serif)] font-light text-[clamp(40px,6vw,64px)] leading-[0.95] tracking-[0.04em] text-alabaster mb-[21px]">
            Quality<span className="text-red">.</span>
          </h1>
          <p className="text-warm text-[15px] leading-[1.9] max-w-[520px]">
            Uncompromising quality at every stage — from raw materials to
            delivered product.
          </p>
        </div>
      </section>

      {/* QC Process */}
      <section className="py-[89px] bg-surface">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
          <div className="flex items-center gap-[13px] mb-[55px]">
            <span className="w-[21px] h-px bg-muted opacity-40" />
            <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
              6-step quality control
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[13px]">
            {qcSteps.map((step, index) => {
              const Icon = step.Icon;
              return (
                <div
                  key={step.title}
                  className="group relative bg-obsidian p-[34px] border border-line rounded-[2px] transition-all hover:border-warm/30"
                >
                  <div className="absolute top-[21px] right-[21px] font-[family-name:var(--font-mono)] text-[34px] font-light text-line">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                  <div className="mb-[21px] text-alabaster transition-transform group-hover:-translate-y-[2px]">
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

      {/* Certifications Detail */}
      <section className="py-[89px] bg-obsidian">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
          <div className="flex items-center gap-[13px] mb-[55px]">
            <span className="w-[21px] h-px bg-muted opacity-40" />
            <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
              Certifications
            </span>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-[13px]">
            {[
              {
                name: "AS2047",
                title: "Australian Standard",
                description:
                  "Windows and external glazed doors in buildings. Design, testing, and installation for the Australian market.",
              },
              {
                name: "AS1288",
                title: "Glass in Buildings",
                description:
                  "Selection and installation of glass in buildings. Safety and performance of glazing solutions.",
              },
              {
                name: "NFRC",
                title: "Fenestration Rating",
                description:
                  "Independent rating for energy performance of windows, doors, and skylights in North America.",
              },
              {
                name: "CE",
                title: "European Conformity",
                description:
                  "Conformity with health, safety, and environmental protection standards for the European Economic Area.",
              },
              {
                name: "ISO 9001",
                title: "Quality Management",
                description:
                  "International standard for quality management systems, ensuring consistent quality and continuous improvement.",
              },
              {
                name: "ISO 14001",
                title: "Environmental Management",
                description:
                  "Framework for environmental management systems, demonstrating commitment to sustainability.",
              },
            ].map((cert) => (
              <div
                key={cert.name}
                className="bg-surface p-[34px] border border-line rounded-[2px]"
              >
                <div className="font-[family-name:var(--font-serif)] text-[28px] font-light text-bronze mb-[8px]">
                  {cert.name}
                </div>
                <h4 className="text-[13px] font-medium text-alabaster mb-[8px]">
                  {cert.title}
                </h4>
                <p className="text-[13px] text-warm leading-relaxed">
                  {cert.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CertificationBanner />

      {/* Testing Lab */}
      <section className="py-[144px] bg-surface">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
          <div className="grid lg:grid-cols-[61.8%_38.2%] gap-[89px] items-center">
            <div>
              <div className="flex items-center gap-[13px] mb-[34px]">
                <span className="w-[21px] h-px bg-muted opacity-40" />
                <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
                  Testing facility
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-serif)] font-light text-[36px] leading-[1.15] text-alabaster mb-[34px]">
                In-house laboratory<span className="text-red">.</span>
              </h2>
              <div className="space-y-[21px] text-warm text-[15px] leading-[1.9]">
                <p>
                  Our in-house testing laboratory provides comprehensive
                  performance evaluation — air permeability, water tightness,
                  wind resistance, structural, thermal, and acoustic testing.
                </p>
                <p>
                  Accredited testing partnerships ensure our results meet
                  international standards and third-party verification
                  requirements.
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] bg-obsidian border border-line rounded-[2px] flex items-center justify-center text-alabaster p-[34px]">
              <LabRigIllustration size={240} />
            </div>
          </div>
        </div>
      </section>

      {/* Cross-link CTA */}
      <section className="py-[89px] bg-obsidian">
        <div className="max-w-[800px] mx-auto px-[55px] max-lg:px-6 text-center">
          <h2 className="font-[family-name:var(--font-serif)] font-light text-[28px] leading-[1.15] text-alabaster mb-[21px]">
            Quality you can specify<span className="text-red">.</span>
          </h2>
          <p className="text-warm text-[15px] leading-[1.9] mb-[34px]">
            Request test certificates, technical data sheets, or a project-specific quote from our engineering team.
          </p>
          <div className="flex flex-col sm:flex-row gap-[21px] justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-[10px] px-[34px] py-4 bg-red text-white text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:brightness-90 transition-all"
            >
              <span className="inline-block w-[5px] h-[5px] rounded-full bg-white" />
              Get a quote
            </Link>
            <Link
              href="/products"
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

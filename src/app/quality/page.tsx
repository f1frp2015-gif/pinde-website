import type { Metadata } from "next";
import CertificationBanner from "@/components/CertificationBanner";
import {
  ClipboardCheck,
  Microscope,
  PackageCheck,
  Truck,
  FileCheck,
  RefreshCw,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Quality Assurance",
  description:
    "PINDE's commitment to quality — certified to AS2047, NFRC, CE, ISO 9001, and more. Rigorous testing and quality control at every stage.",
};

const qcSteps = [
  {
    icon: ClipboardCheck,
    title: "Incoming Material Inspection",
    description:
      "All raw materials including aluminum billets, hardware, and sealing components are inspected and tested upon arrival before entering production.",
  },
  {
    icon: Microscope,
    title: "In-Process Quality Control",
    description:
      "Real-time quality monitoring at every production stage — extrusion, cutting, machining, surface treatment, and assembly.",
  },
  {
    icon: PackageCheck,
    title: "Finished Product Testing",
    description:
      "Complete systems undergo performance testing including air, water, and structural tests before approval for shipment.",
  },
  {
    icon: FileCheck,
    title: "Documentation & Traceability",
    description:
      "Full traceability from raw material to finished product. Every batch is documented with test certificates and inspection reports.",
  },
  {
    icon: Truck,
    title: "Packing & Shipping Inspection",
    description:
      "Products are carefully packed with protective materials and inspected before loading to ensure they arrive in perfect condition.",
  },
  {
    icon: RefreshCw,
    title: "Continuous Improvement",
    description:
      "Regular quality reviews, customer feedback analysis, and process optimization ensure our standards continuously improve.",
  },
];

export default function QualityPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Quality Assurance
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Uncompromising quality at every stage — from raw materials to
            delivered product.
          </p>
        </div>
      </section>

      {/* QC Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Quality Process
            </p>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our 6-Step Quality Control System
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Every PINDE product passes through a rigorous multi-stage quality
              control system before reaching our customers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qcSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative p-8 rounded-lg border border-gray-100 hover:border-accent/20 hover:shadow-md transition-all"
              >
                <div className="absolute top-4 right-4 text-4xl font-bold text-gray-100">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <step.icon
                  size={32}
                  className="text-accent mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Detail */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Certifications
            </p>
            <h2 className="text-3xl font-bold text-primary mb-4">
              International Standards & Certifications
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "AS2047",
                title: "Australian Standard",
                description:
                  "Windows and external glazed doors in buildings. Covers design, testing, and installation requirements for the Australian market.",
              },
              {
                name: "AS1288",
                title: "Glass in Buildings",
                description:
                  "Selection and installation of glass in buildings. Ensures safety and performance of glazing solutions.",
              },
              {
                name: "NFRC",
                title: "National Fenestration Rating Council",
                description:
                  "Independent rating system for the energy performance of windows, doors, and skylights in North America.",
              },
              {
                name: "CE Marking",
                title: "European Conformity",
                description:
                  "Indicates conformity with health, safety, and environmental protection standards for the European Economic Area.",
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
                  "Framework for environmental management systems, demonstrating commitment to reducing environmental impact.",
              },
            ].map((cert) => (
              <div
                key={cert.name}
                className="bg-white p-6 rounded-lg border border-gray-100"
              >
                <div className="text-2xl font-bold text-accent mb-2">
                  {cert.name}
                </div>
                <h4 className="font-semibold text-primary mb-2">
                  {cert.title}
                </h4>
                <p className="text-sm text-gray-500">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CertificationBanner />

      {/* Testing Lab */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                Testing Facility
              </p>
              <h2 className="text-3xl font-bold text-primary mb-6">
                In-House Testing Laboratory
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  [Placeholder: Describe the in-house testing lab — equipment,
                  capabilities, what tests are performed (air, water, wind,
                  structural, thermal, acoustic).]
                </p>
                <p>
                  [Placeholder: Mention any third-party testing partnerships or
                  accreditation of the lab facility.]
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">[Testing Lab Image]</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

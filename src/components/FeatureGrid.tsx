import { ThermalBreakIcon } from "./TechIcons";
import {
  SecurityIcon,
  CertifiedIcon,
  GlobalIcon,
  CustomIcon,
  SustainabilityIcon,
} from "./BrandIcons";

const features = [
  {
    Icon: ThermalBreakIcon,
    title: "Thermal Performance",
    description:
      "Advanced thermal break technology delivers superior insulation, reducing energy costs and improving comfort year-round.",
  },
  {
    Icon: SecurityIcon,
    title: "Security",
    description:
      "Multi-point locking systems and reinforced profiles provide peace of mind with industry-leading security ratings.",
  },
  {
    Icon: CertifiedIcon,
    title: "Certified Quality",
    description:
      "Products tested and certified to international standards including AS2047, NFRC, CE, and ISO quality management.",
  },
  {
    Icon: GlobalIcon,
    title: "Global Reach",
    description:
      "Serving architects, builders, and homeowners across Australia, New Zealand, North America, Europe, and the Middle East.",
  },
  {
    Icon: CustomIcon,
    title: "Custom Solutions",
    description:
      "Tailored designs to meet specific project requirements, from bespoke colours to non-standard sizes and configurations.",
  },
  {
    Icon: SustainabilityIcon,
    title: "Sustainability",
    description:
      "Recyclable aluminium profiles and energy-efficient designs contribute to greener buildings and reduced carbon footprints.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-[89px] bg-surface">
      <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
        <div className="flex items-center gap-[13px] mb-[55px]">
          <span className="w-[21px] h-px bg-muted opacity-40" />
          <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
            Why PINDÉ
          </span>
        </div>

        <h2 className="font-[family-name:var(--font-serif)] font-light text-[clamp(32px,4vw,44px)] leading-[1.15] text-alabaster mb-[55px]">
          Precision in every detail<span className="text-red">.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[13px]">
          {features.map((feature) => {
            const Icon = feature.Icon;
            return (
              <div
                key={feature.title}
                className="group bg-obsidian p-[34px] border border-line rounded-[2px] transition-all hover:border-warm/30"
              >
                <div className="mb-[21px] text-alabaster transition-transform group-hover:-translate-y-[2px]">
                  <Icon size={34} />
                </div>
                <h3 className="text-[15px] font-medium text-alabaster mb-[8px]">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-warm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

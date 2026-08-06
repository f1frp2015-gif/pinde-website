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
      "Polyamide thermal barriers reduce direct heat flow through the aluminium frame. Whole-window results still depend on glazing, unit size, fabrication and installation.",
  },
  {
    Icon: SecurityIcon,
    title: "Hardware schedule",
    description:
      "Locking points, hinges, rollers and reinforcement are selected for the opening type and calculated leaf mass. Any resistance class must be supported by the applicable test report.",
  },
  {
    Icon: CertifiedIcon,
    title: "Evidence scope",
    description:
      "Product results are tied to the tested size, glazing, hardware and standard. Factory-management certificates are recorded separately from product conformity evidence.",
  },
  {
    Icon: GlobalIcon,
    title: "Export documentation",
    description:
      "Packing lists, batch references and transport documents are prepared for the agreed rail or road route. Import conformity remains market-specific.",
  },
  {
    Icon: CustomIcon,
    title: "Project configuration",
    description:
      "Colour, dimensions, opening mode, hardware and processing scope are fixed in the released drawings and bill of materials.",
  },
  {
    Icon: SustainabilityIcon,
    title: "Material records",
    description:
      "Alloy or composite grade, finish, gasket material and batch identification remain linked to the production and inspection records.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-[89px] bg-surface">
      <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
        <div className="flex items-center gap-[13px] mb-[55px]">
          <span className="w-[21px] h-px bg-muted opacity-40" />
          <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
            System controls
          </span>
        </div>

        <h2 className="font-[family-name:var(--font-serif)] font-semibold text-[clamp(32px,4vw,44px)] leading-[1.15] text-alabaster mb-[55px]">
          What a released system records<span className="text-red">.</span>
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

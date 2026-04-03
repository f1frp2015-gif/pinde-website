import {
  Shield,
  Thermometer,
  Award,
  Globe,
  Wrench,
  Leaf,
} from "lucide-react";

const features = [
  {
    icon: Thermometer,
    title: "Thermal Performance",
    description:
      "Advanced thermal break technology delivers superior insulation, reducing energy costs and improving comfort year-round.",
  },
  {
    icon: Shield,
    title: "Security",
    description:
      "Multi-point locking systems and reinforced profiles provide peace of mind with industry-leading security ratings.",
  },
  {
    icon: Award,
    title: "Certified Quality",
    description:
      "Products tested and certified to international standards including AS2047, NFRC, CE, and ISO quality management.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Serving architects, builders, and homeowners across Australia, New Zealand, North America, Europe, and the Middle East.",
  },
  {
    icon: Wrench,
    title: "Custom Solutions",
    description:
      "Tailored designs to meet specific project requirements, from bespoke colors to non-standard sizes and configurations.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Recyclable aluminum profiles and energy-efficient designs contribute to greener buildings and reduced carbon footprints.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-20 bg-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary mb-4">
            Why Choose PINDE
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Engineered for performance, designed for beauty. Every PINDE product
            reflects our commitment to excellence.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-8 rounded-lg border border-gray-100 hover:border-accent/20 hover:shadow-md transition-all"
            >
              <feature.icon
                size={32}
                className="text-accent mb-4"
                strokeWidth={1.5}
              />
              <h3 className="text-lg font-semibold text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

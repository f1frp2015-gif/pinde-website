import type { Metadata } from "next";
import Image from "next/image";
import CertificationBanner from "@/components/CertificationBanner";
import { Factory, Target, Eye, Users, Award, Wrench, Shield, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about PINDE — a leading manufacturer of premium aluminum system windows and doors based in Chongqing, China. Over 22+ years of expertise in high-end system windows and doors.",
};

const milestones = [
  {
    year: "2002",
    title: "Foundation",
    description:
      "PINDE Group founded in Chongqing, marking the beginning of our journey in premium aluminum windows and doors. Group R&D Center established in the same year.",
  },
  {
    year: "2003–2008",
    title: "Licenses & Qualifications",
    description:
      "Obtained production licenses, safety production permits, and Grade B qualification for curtain wall construction — building a solid foundation for growth.",
  },
  {
    year: "2009–2014",
    title: "Quality Recognition",
    description:
      'Established Chongqing E-Ge Tempered Glass Co. Passed ISO 9001 & ISO 14001 certifications. Won "Quality Trustworthy" and "Contract-Abiding" industry awards.',
  },
  {
    year: "2015–2018",
    title: "Industry Leadership",
    description:
      'Established Chongqing E-Ge Building Materials Co. Won "Green Building Materials" and "Top 10 Door & Window Brand" awards, solidifying our reputation in the industry.',
  },
  {
    year: "2019–2021",
    title: "Smart Manufacturing",
    description:
      "Invested heavily in smart manufacturing equipment. Built an Industry 4.0 factory, becoming one of the few fully integrated manufacturers of aluminum profiles, glass, and system doors & windows.",
  },
  {
    year: "2022",
    title: "New R&D Headquarters",
    description:
      "Invested in a new R&D headquarters and display center totaling 25,000 m², creating a world-class innovation hub.",
  },
  {
    year: "2023",
    title: "PINDE Brand Launch",
    description:
      "Established Pinde Doors and Windows (Chongqing) Co., Ltd. Positioned as a high-end brand with 1 R&D center, 1 experience center, and a TPKS production center with 500,000 m² capacity across 3 major production lines.",
  },
  {
    year: "2024",
    title: "Technology-Driven Service",
    description:
      "Continued product iteration with a focus on technology-driven customer service, bringing cutting-edge solutions to global markets.",
  },
];

const strengths = [
  {
    icon: Wrench,
    title: "German & Italian CNC Equipment",
    description:
      "Full suite of imported precision CNC equipment from Germany and Italy, ensuring every product meets the highest manufacturing standards.",
  },
  {
    icon: Factory,
    title: "Refined Factory Management",
    description:
      "Advanced Industry 4.0 smart factory with digitized management systems, from raw material intake to finished product delivery.",
  },
  {
    icon: Users,
    title: "1,800+ Field Professionals",
    description:
      "A dedicated workforce of over 1,800 professionals across R&D, manufacturing, quality control, and customer service.",
  },
  {
    icon: Shield,
    title: "Quality Beyond Standards",
    description:
      "Product quality that far exceeds industry standards, backed by 60+ patents and rigorous testing at every stage of production.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About PINDE</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            With 22+ years of expertise in high-end system windows and doors,
            PINDE delivers precision-engineered aluminum systems for the
            world&apos;s most discerning markets.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                Our Story
              </p>
              <h2 className="text-3xl font-bold text-primary mb-6">
                From Chongqing to the World
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Founded in 2002 with a singular focus: the research,
                  development, and manufacturing of premium aluminum system
                  windows and doors. Over 22 years, the group has grown into a
                  powerhouse with 5 subsidiaries and 60+ patents across product
                  categories.
                </p>
                <p>
                  In 2023, PINDE was established to bring this two-decade legacy
                  to global markets. With a total investment exceeding 500
                  million RMB, we built an integrated manufacturing campus
                  spanning over 100,000 m² — one of the few facilities in the
                  industry that controls the entire production chain from
                  aluminum extrusion and powder coating to glass processing and
                  final assembly.
                </p>
                <p>
                  What sets PINDE apart is our commitment to vertical
                  integration. By managing every stage in-house — profile
                  extrusion, spraying, glass tempering, insulated glass
                  production, and system assembly — we maintain uncompromising
                  quality control and deliver products that meet the highest
                  international standards for architects, builders, and
                  homeowners worldwide.
                </p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden">
              <Image
                src="/images/factory-aerial.jpg"
                alt="PINDE Manufacturing Campus - Chongqing, China"
                width={4137}
                height={1228}
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                text: "To deliver world-class aluminum system windows and doors by leveraging our global supply chain and independent R&D capabilities. We are committed to excellence, with quality as our foundation — crafting products with ingenuity and mastering a lifetime's craft.",
              },
              {
                icon: Eye,
                title: "Our Vision",
                text: "To be the preferred global partner for premium aluminum system windows and doors, recognized for our fully integrated manufacturing, Industry 4.0 smart production, and products that consistently exceed international standards.",
              },
              {
                icon: Users,
                title: "Our Values",
                text: "Global Supply Chain with High Quality at the Cornerstone. Independent R&D and Digitized Management. Crafted with Ingenuity, Mastering a Lifetime's Craft. Commitment to Excellence, Quality as Foundation. Quality Service, Customer-Oriented, Worry-Free Experience.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white p-8 rounded-lg border border-gray-100"
              >
                <item.icon
                  size={32}
                  className="text-accent mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="text-xl font-semibold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Base */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/factory-aerial.jpg"
                alt="PINDE Factory Aerial View - 100,000m² Smart Manufacturing Campus in Chongqing"
                width={4137}
                height={1228}
                className="w-full h-auto rounded-lg"
                priority
              />
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                Manufacturing
              </p>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Industry 4.0 Smart Factory in Chongqing
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  Our state-of-the-art manufacturing campus features a fully
                  integrated production chain: from aluminum extrusion with
                  3,600-ton presses and automated cutting (precision within
                  0.5mm), to a fully automated spray line using Akzo Nobel
                  powder coatings, to advanced glass processing with CNC
                  cutting, auto-feed tempering (3C certified), and insulated
                  glass production with molecular sieve drying and butyl rubber
                  sealing.
                </p>
                <p>
                  Equipped with German and Italian imported CNC machinery, our
                  factory operates under refined Industry 4.0 management
                  systems. This allows us to maintain exceptional quality
                  consistency while achieving an annual production capacity of
                  over 1,800,000 m² of finished windows and doors.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { value: "100,000+ m²", label: "Factory Area" },
                  { value: "1,800+", label: "Field Professionals" },
                  { value: "3", label: "Major Production Lines" },
                  { value: "1,800,000+ m²", label: "Annual Capacity" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-primary">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Strengths */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Why PINDE
            </p>
            <h2 className="text-3xl font-bold text-primary mb-4">
              Our Core Strengths
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              With over two decades of expertise and a fully integrated
              manufacturing chain, PINDE stands at the forefront of premium
              aluminum system windows and doors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {strengths.map((item) => (
              <div
                key={item.title}
                className="bg-white p-6 rounded-lg border border-gray-100 text-center"
              >
                <item.icon
                  size={36}
                  className="text-accent mx-auto mb-4"
                  strokeWidth={1.5}
                />
                <h3 className="text-lg font-semibold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development History / Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
              Our Journey
            </p>
            <h2 className="text-3xl font-bold text-primary mb-4">
              22+ Years of Innovation
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              From a single factory in Chongqing to a fully integrated
              manufacturing group with 5 subsidiaries and 60+ patents.
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={milestone.year}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div
                    className={`flex-1 ${
                      index % 2 === 0 ? "md:text-right" : "md:text-left"
                    }`}
                  >
                    <div className="bg-light p-6 rounded-lg inline-block">
                      <span className="text-accent font-bold text-lg">
                        {milestone.year}
                      </span>
                      <h3 className="text-lg font-semibold text-primary mt-1">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-500 text-sm mt-2 leading-relaxed max-w-md">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex items-center justify-center w-4 h-4 bg-accent rounded-full ring-4 ring-white z-10 shrink-0" />

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Group Subsidiaries */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            PINDE Group
          </p>
          <h2 className="text-3xl font-bold text-primary mb-4">
            A Group Built on Integration
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            PINDE Group is a comprehensive enterprise with 5 specialized
            subsidiaries covering every aspect of the door, window, and curtain
            wall industry.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                name: "PINDE Commercial",
                focus: "Commercial Projects",
              },
              {
                name: "PINDE Doors & Windows",
                focus: "High-End Brand",
              },
              {
                name: "E-Ge Glass",
                focus: "Glass Processing",
              },
              {
                name: "Numiger Curtain Wall",
                focus: "Curtain Wall Systems",
              },
              {
                name: "PINDE Standard",
                focus: "Standard Products",
              },
            ].map((sub) => (
              <div
                key={sub.name}
                className="bg-white p-6 rounded-lg border border-gray-100"
              >
                <h4 className="font-semibold text-primary text-sm">
                  {sub.name}
                </h4>
                <p className="text-xs text-gray-500 mt-1">{sub.focus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CertificationBanner />
    </>
  );
}

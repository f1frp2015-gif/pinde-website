import type { Metadata } from "next";
import CertificationBanner from "@/components/CertificationBanner";
import { Factory, Target, Eye, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about PINDE — a leading manufacturer of premium aluminum system windows and doors based in Chongqing, China.",
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">About PINDE</h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Precision-engineered aluminum systems, designed for the world&apos;s
            most discerning markets.
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
                  [Placeholder: Your company story goes here. Talk about when
                  and why PINDE was founded, the vision behind the brand, and
                  what drives the company forward.]
                </p>
                <p>
                  [Placeholder: Describe the journey from a local manufacturer
                  to an international supplier. Highlight key milestones and
                  achievements.]
                </p>
                <p>
                  [Placeholder: Explain what sets PINDE apart from competitors.
                  Mention the focus on quality, innovation, and customer
                  service.]
                </p>
              </div>
            </div>
            <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">[Company Story Image]</span>
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
                text: "[Placeholder: Describe PINDE's mission — e.g., to deliver world-class aluminum window and door systems that combine performance, aesthetics, and value.]",
              },
              {
                icon: Eye,
                title: "Our Vision",
                text: "[Placeholder: Describe PINDE's vision — e.g., to be the preferred choice for premium aluminum systems in global markets.]",
              },
              {
                icon: Users,
                title: "Our Values",
                text: "[Placeholder: List core values — e.g., quality, innovation, integrity, customer focus, sustainability.]",
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
            <div className="aspect-[4/3] bg-gray-100 rounded-lg flex items-center justify-center order-2 lg:order-1">
              <span className="text-gray-400">[Factory Image]</span>
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
                Manufacturing
              </p>
              <h2 className="text-3xl font-bold text-primary mb-6">
                State-of-the-Art Production in Chongqing
              </h2>
              <div className="space-y-4 text-gray-500 leading-relaxed">
                <p>
                  [Placeholder: Describe the manufacturing facility — size,
                  capacity, key equipment (CNC machining centers, powder coating
                  lines, assembly lines, etc.)]
                </p>
                <p>
                  [Placeholder: Mention production capacity, quality control
                  processes, and any advanced technology used in manufacturing.]
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                {[
                  { value: "XX,XXX m²", label: "Factory Area" },
                  { value: "XXX+", label: "Employees" },
                  { value: "XX", label: "Production Lines" },
                  { value: "XX,XXX m²", label: "Annual Capacity" },
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

      {/* Team */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-accent uppercase tracking-wider mb-4">
            Our Team
          </p>
          <h2 className="text-3xl font-bold text-primary mb-4">
            Meet the People Behind PINDE
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto mb-12">
            [Placeholder: Brief intro about the team — experienced engineers,
            designers, and sales professionals dedicated to excellence.]
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i}>
                <div className="aspect-square bg-gray-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">[Photo]</span>
                </div>
                <h4 className="font-semibold text-primary">
                  [Team Member Name]
                </h4>
                <p className="text-sm text-gray-500">[Title / Role]</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CertificationBanner />
    </>
  );
}

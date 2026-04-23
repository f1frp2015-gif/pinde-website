import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CertificationBanner from "@/components/CertificationBanner";
import {
  CNCIcon,
  FactoryIcon,
  TeamIcon,
  PatentIcon,
} from "@/components/BrandIcons";

export const metadata: Metadata = {
  title: "About PINDÉ — 23+ Years of Architectural Aluminium Excellence",
  description:
    "PINDÉ: 100,000 m² smart factory in Chongqing, 1,800+ professionals, 60+ patents. Fully integrated from aluminium extrusion to final assembly.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About PINDÉ — Architectural Aluminium Manufacturer",
    description: "23+ years of expertise. 100,000 m² smart factory. Serving 30+ countries with premium aluminium windows and doors.",
    url: "/about",
  },
};

const milestones = [
  {
    year: "2002",
    title: "Foundation",
    description:
      "PINDÉ Group founded in Chongqing. Group R&D Center established.",
  },
  {
    year: "2003–2008",
    title: "Licences & Qualifications",
    description:
      "Obtained production licences, safety permits, and Grade B curtain wall qualification.",
  },
  {
    year: "2009–2014",
    title: "Quality Recognition",
    description:
      "Established E-Ge Tempered Glass Co. Passed ISO 9001 & ISO 14001.",
  },
  {
    year: "2015–2018",
    title: "Industry Leadership",
    description:
      'Won "Green Building Materials" and "Top 10 Door & Window Brand" awards.',
  },
  {
    year: "2019–2021",
    title: "Smart Manufacturing",
    description:
      "Built an Industry 4.0 factory — fully integrated aluminium, glass, and systems.",
  },
  {
    year: "2022",
    title: "New R&D Headquarters",
    description:
      "Invested in 25,000 m² R&D headquarters and display centre.",
  },
  {
    year: "2023",
    title: "PINDÉ Brand Launch",
    description:
      "Established PINDÉ as a high-end brand with 500,000 m² production capacity.",
  },
  {
    year: "2024",
    title: "Technology-Driven Service",
    description:
      "Continued product iteration with a focus on technology-driven global service.",
  },
];

const strengths = [
  {
    title: "German & Italian CNC",
    Icon: CNCIcon,
    description:
      "Full suite of imported precision CNC equipment ensuring the highest manufacturing standards.",
  },
  {
    title: "Industry 4.0 Factory",
    Icon: FactoryIcon,
    description:
      "Advanced smart factory with digitised management from raw material to finished product.",
  },
  {
    title: "1,800+ Professionals",
    Icon: TeamIcon,
    description:
      "A dedicated workforce across R&D, manufacturing, quality control, and customer service.",
  },
  {
    title: "60+ Patents",
    Icon: PatentIcon,
    description:
      "Quality that exceeds industry standards, backed by rigorous testing at every stage.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-20 py-[89px] bg-obsidian">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6 pt-[55px]">
          <div className="flex items-center gap-[13px] mb-[34px]">
            <span className="w-[21px] h-px bg-muted opacity-40" />
            <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
              Atelier
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-serif)] font-light text-[clamp(40px,6vw,64px)] leading-[0.95] tracking-[0.04em] text-alabaster mb-[21px]">
            About PINDÉ<span className="text-red">.</span>
          </h1>
          <p className="text-warm text-[15px] leading-[1.9] max-w-[520px]">
            With 23+ years of expertise in architectural aluminium, PINDÉ
            delivers precision-engineered systems for the world&apos;s most
            discerning markets.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-[144px] bg-surface">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
          <div className="grid lg:grid-cols-[61.8%_38.2%] gap-[89px] items-center">
            <div>
              <div className="flex items-center gap-[13px] mb-[34px]">
                <span className="w-[21px] h-px bg-muted opacity-40" />
                <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
                  Our story
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-serif)] font-light text-[36px] leading-[1.15] text-alabaster mb-[34px]">
                From Chongqing to the world<span className="text-red">.</span>
              </h2>
              <div className="space-y-[21px] text-warm text-[15px] leading-[1.9]">
                <p>
                  Founded in 2002 with a singular focus: the research,
                  development, and manufacturing of premium aluminium system
                  windows and doors. Over 22 years, the group has grown into a
                  powerhouse with 5 subsidiaries and 60+ patents.
                </p>
                <p>
                  In 2023, PINDÉ was established to bring this two-decade legacy
                  to global markets. With a total investment exceeding 500
                  million RMB, we built an integrated manufacturing campus
                  spanning over 100,000 m².
                </p>
                <p>
                  What sets PINDÉ apart is our commitment to vertical
                  integration. By managing every stage in-house — profile
                  extrusion, spraying, glass tempering, insulated glass
                  production, and system assembly — we maintain uncompromising
                  quality control.
                </p>
              </div>
            </div>
            <div className="rounded-[2px] overflow-hidden">
              <Image
                src="/images/factory-aerial.jpg"
                alt="PINDÉ Manufacturing Campus"
                width={4137}
                height={1228}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-[144px] bg-obsidian">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
          <div className="grid md:grid-cols-3 gap-[13px]">
            {[
              {
                title: "Our Mission",
                text: "To deliver world-class aluminium system windows and doors by leveraging our global supply chain and independent R&D capabilities.",
              },
              {
                title: "Our Vision",
                text: "To be the preferred global partner for premium aluminium systems, recognised for our fully integrated manufacturing and Industry 4.0 smart production.",
              },
              {
                title: "Our Values",
                text: "Global supply chain with quality at the cornerstone. Independent R&D, digitised management. Crafted with ingenuity, mastering a lifetime's craft.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-surface p-[34px] border border-line rounded-[2px]"
              >
                <h3 className="font-[family-name:var(--font-serif)] text-[22px] font-normal text-alabaster mb-[13px]">
                  {item.title}
                </h3>
                <p className="text-warm text-[13px] leading-[1.9]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Base */}
      <section className="py-[144px] bg-surface">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
          <div className="grid lg:grid-cols-2 gap-[89px] items-center">
            <div className="rounded-[2px] overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/factory-aerial.jpg"
                alt="PINDÉ Factory Aerial View"
                width={4137}
                height={1228}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-[13px] mb-[34px]">
                <span className="w-[21px] h-px bg-muted opacity-40" />
                <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
                  Manufacturing
                </span>
              </div>
              <h2 className="font-[family-name:var(--font-serif)] font-light text-[36px] leading-[1.15] text-alabaster mb-[34px]">
                Industry 4.0<span className="text-red">.</span>
              </h2>
              <div className="space-y-[21px] text-warm text-[15px] leading-[1.9]">
                <p>
                  Our state-of-the-art campus features a fully integrated
                  production chain: from aluminium extrusion with 3,600-ton
                  presses, to a fully automated Akzo Nobel powder coating line,
                  to CNC glass cutting and auto-feed tempering.
                </p>
                <p>
                  Equipped with German and Italian imported CNC machinery,
                  achieving an annual production capacity of over 1,800,000 m².
                </p>
              </div>

              <div className="mt-[34px] grid grid-cols-2 gap-[21px]">
                {[
                  { value: "100,000+ m²", label: "Factory area" },
                  { value: "1,800+", label: "Professionals" },
                  { value: "3", label: "Production lines" },
                  { value: "1,800,000+ m²", label: "Annual capacity" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-[family-name:var(--font-serif)] text-[26px] font-light text-bronze">
                      {stat.value}
                    </div>
                    <div className="text-[10px] tracking-[2px] uppercase text-muted mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Strengths */}
      <section className="py-[144px] bg-obsidian">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
          <div className="flex items-center gap-[13px] mb-[55px]">
            <span className="w-[21px] h-px bg-muted opacity-40" />
            <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
              Core strengths
            </span>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-[13px]">
            {strengths.map((item) => {
              const Icon = item.Icon;
              return (
                <div
                  key={item.title}
                  className="group bg-surface p-[34px] border border-line rounded-[2px] transition-all hover:border-warm/30"
                >
                  <div className="mb-[21px] text-alabaster transition-transform group-hover:-translate-y-[2px]">
                    <Icon size={34} />
                  </div>
                  <h3 className="text-[15px] font-medium text-alabaster mb-[8px]">
                    {item.title}
                  </h3>
                  <p className="text-warm text-[13px] leading-[1.8]">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-[144px] bg-surface">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
          <div className="flex items-center gap-[13px] mb-[55px]">
            <span className="w-[21px] h-px bg-muted opacity-40" />
            <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
              Our journey · 23+ years
            </span>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-line -translate-x-1/2" />

            <div className="space-y-[55px]">
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
                    <div className="bg-obsidian p-[34px] border border-line rounded-[2px] inline-block">
                      <span className="font-[family-name:var(--font-mono)] text-bronze text-[14px]">
                        {milestone.year}
                      </span>
                      <h3 className="text-[15px] font-medium text-alabaster mt-[8px]">
                        {milestone.title}
                      </h3>
                      <p className="text-warm text-[13px] mt-[8px] leading-[1.8] max-w-[360px]">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex items-center justify-center w-3 h-3 bg-red rounded-full ring-4 ring-surface z-10 shrink-0" />

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Group Subsidiaries */}
      <section className="py-[89px] bg-obsidian">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6 text-center">
          <div className="flex items-center gap-[13px] justify-center mb-[55px]">
            <span className="w-[21px] h-px bg-muted opacity-40" />
            <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
              PINDÉ Group
            </span>
            <span className="w-[21px] h-px bg-muted opacity-40" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-[13px]">
            {[
              { name: "PINDÉ Commercial", focus: "Commercial Projects" },
              { name: "PINDÉ Doors & Windows", focus: "High-End Brand" },
              { name: "E-Ge Glass", focus: "Glass Processing" },
              { name: "Numiger Curtain Wall", focus: "Curtain Wall Systems" },
              { name: "PINDÉ Standard", focus: "Standard Products" },
            ].map((sub) => (
              <div
                key={sub.name}
                className="bg-surface p-[21px] border border-line rounded-[2px]"
              >
                <h4 className="text-[13px] font-medium text-alabaster">
                  {sub.name}
                </h4>
                <p className="text-[10px] text-muted tracking-[1px] uppercase mt-1">
                  {sub.focus}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CertificationBanner />

      {/* Cross-link CTA */}
      <section className="py-[89px] bg-surface">
        <div className="max-w-[800px] mx-auto px-[55px] max-lg:px-6 text-center">
          <h2 className="font-[family-name:var(--font-serif)] font-light text-[28px] leading-[1.15] text-alabaster mb-[21px]">
            Partner with PINDÉ<span className="text-red">.</span>
          </h2>
          <p className="text-warm text-[15px] leading-[1.9] mb-[34px]">
            Whether you need OEM supply, project-specific engineering, or a distribution partnership — let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-[21px] justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-[10px] px-[34px] py-4 bg-red text-white text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:brightness-90 transition-all"
            >
              <span className="inline-block w-[5px] h-[5px] rounded-full bg-white" />
              Contact us
            </Link>
            <Link
              href="/products"
              className="inline-flex items-center gap-[8px] px-[34px] py-4 border border-line text-alabaster text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:border-warm transition-all"
            >
              View systems
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

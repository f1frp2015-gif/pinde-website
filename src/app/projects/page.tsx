import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Global Projects — Australia, NZ, Canada, UAE, UK, USA",
  description:
    "PINDÉ aluminium systems installed worldwide: luxury residences, commercial towers, heritage renovations across Australia, New Zealand, Canada, UAE, UK, and USA.",
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "PINDÉ Projects — Global Installations",
    description: "Premium aluminium windows and doors installed across 30+ countries. See our showcase.",
    url: "/projects",
  },
};

export default function ProjectsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-20 py-[89px] bg-obsidian">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6 pt-[55px]">
          <div className="flex items-center gap-[13px] mb-[34px]">
            <span className="w-[21px] h-px bg-muted opacity-40" />
            <span className="text-[10px] tracking-[4px] uppercase text-muted font-medium">
              Portfolio
            </span>
          </div>
          <h1 className="font-[family-name:var(--font-serif)] font-light text-[clamp(40px,6vw,64px)] leading-[0.95] tracking-[0.04em] text-alabaster mb-[21px]">
            Project gallery<span className="text-red">.</span>
          </h1>
          <p className="text-warm text-[15px] leading-[1.9] max-w-[520px]">
            From luxury residences to iconic commercial buildings, see how PINDÉ
            systems perform around the world.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-[89px] bg-surface">
        <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[13px]">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-[89px] bg-obsidian">
        <div className="max-w-[800px] mx-auto px-[55px] max-lg:px-6 text-center">
          <h2 className="font-[family-name:var(--font-serif)] font-light text-[28px] leading-[1.15] text-alabaster mb-[21px]">
            Have a project in mind<span className="text-red">?</span>
          </h2>
          <p className="text-warm text-[15px] leading-[1.9] mb-[34px]">
            Let us help you find the perfect system. Our technical team provides
            full support from specification to installation.
          </p>
          <div className="flex flex-col sm:flex-row gap-[21px] justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-[10px] px-[34px] py-4 bg-red text-white text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:brightness-90 transition-all"
            >
              <span className="inline-block w-[5px] h-[5px] rounded-full bg-white" />
              Discuss your project
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

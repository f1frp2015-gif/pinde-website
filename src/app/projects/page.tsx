import type { Metadata } from "next";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore PINDE's showcase of completed projects worldwide — residential, commercial, and architectural applications.",
};

export default function ProjectsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Project Gallery
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            From luxury residences to iconic commercial buildings, see how PINDE
            systems perform around the world.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold text-primary mb-4">
            Have a Project in Mind?
          </h2>
          <p className="text-gray-500 mb-6">
            Let us help you find the perfect system for your next project. Our
            technical team provides full support from specification to
            installation.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3.5 bg-accent text-white font-medium rounded hover:bg-accent-light transition-colors"
          >
            Discuss Your Project
          </a>
        </div>
      </section>
    </>
  );
}

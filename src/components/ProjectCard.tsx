import { MapPin } from "lucide-react";
import type { Project } from "@/data/projects";
import PindeMark from "./PindeMark";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-surface border border-line rounded-[2px] overflow-hidden transition-all duration-400 hover:border-warm/20 hover:-translate-y-0.5">
      {/* Image Placeholder */}
      <div className="aspect-[16/10] bg-obsidian flex items-center justify-center">
        <PindeMark size={34} frame="#E5E2DC" />
      </div>

      <div className="p-[34px]">
        <div className="flex items-center gap-2 text-[10px] tracking-[2px] uppercase text-muted mb-[13px]">
          <MapPin size={10} />
          <span>
            {project.location}, {project.country}
          </span>
        </div>
        <h3 className="font-[family-name:var(--font-serif)] text-[22px] font-normal text-alabaster mb-[8px]">
          {project.title}
        </h3>
        <p className="text-[13px] text-warm mb-[21px]">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.productsUsed.map((p) => (
            <span
              key={p}
              className="text-[10px] px-2 py-1 border border-line text-muted tracking-[1px]"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

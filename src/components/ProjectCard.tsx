import { ShieldCheck } from "lucide-react";
import type { CapabilityCase } from "@/data/projects";
import PindeMark from "./PindeMark";

export default function ProjectCard({ project }: { project: CapabilityCase }) {
  return (
    <div className="group bg-surface border border-line rounded-[2px] overflow-hidden transition-all duration-400 hover:border-warm/20 hover:-translate-y-0.5">
      {/* Image Placeholder */}
      <div className="aspect-[16/10] bg-obsidian flex items-center justify-center">
        <PindeMark size={34} frame="#D9D9D9" />
      </div>

      <div className="p-[34px]">
        <div className="flex items-center gap-2 text-[10px] tracking-[2px] uppercase text-bronze mb-[13px]">
          <ShieldCheck size={10} />
          <span>{project.targetMarket}</span>
        </div>
        <h3 className="font-[family-name:var(--font-serif)] text-[22px] font-normal text-alabaster mb-[8px]">
          {project.title}
        </h3>
        <p className="text-[13px] text-warm mb-[13px]">{project.description}</p>

        {/* Performance Highlights */}
        <ul className="mb-[13px] space-y-[5px]">
          {project.performanceHighlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-start gap-2 text-[11px] text-muted leading-[1.5]">
              <span className="inline-block w-[4px] h-[4px] rounded-full bg-red mt-1.5 shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {/* Applicable Standards */}
        <div className="flex flex-wrap gap-2">
          {project.applicableStandards.map((s) => (
            <span
              key={s}
              className="text-[10px] px-2 py-1 border border-line text-muted tracking-[1px]"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

import { MapPin } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden border border-gray-100 hover:shadow-lg transition-all">
      {/* Image Placeholder */}
      <div className="aspect-[16/10] bg-gray-100 flex items-center justify-center">
        <span className="text-gray-400 text-sm">[Project Image]</span>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-gray-400 mb-2">
          <MapPin size={12} />
          <span>
            {project.location}, {project.country}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-primary mb-2">
          {project.title}
        </h3>
        <p className="text-sm text-gray-500 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.productsUsed.map((p) => (
            <span
              key={p}
              className="text-xs px-2 py-1 bg-gray-50 text-gray-600 rounded"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

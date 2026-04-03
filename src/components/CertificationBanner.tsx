import { CERTIFICATIONS } from "@/lib/constants";
import { ShieldCheck } from "lucide-react";

export default function CertificationBanner() {
  return (
    <section className="py-12 bg-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <div className="flex items-center gap-2 text-accent">
            <ShieldCheck size={24} />
            <span className="text-sm font-semibold uppercase tracking-wider">
              Certified To
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {CERTIFICATIONS.map((cert) => (
              <span
                key={cert}
                className="px-5 py-2 text-sm font-medium text-white border border-gray-600 rounded"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

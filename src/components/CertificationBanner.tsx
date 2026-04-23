import { CERTIFICATIONS } from "@/lib/constants";

export default function CertificationBanner() {
  return (
    <section className="py-[34px] bg-surface border-y border-line">
      <div className="max-w-[1200px] mx-auto px-[55px] max-lg:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
          <div className="flex items-center gap-[8px]">
            <span className="inline-block w-[5px] h-[5px] rounded-full bg-red" />
            <span className="text-[10px] font-medium tracking-[3px] uppercase text-muted">
              Certified to
            </span>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {CERTIFICATIONS.map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 text-[11px] font-medium text-warm border border-line tracking-[1px]"
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

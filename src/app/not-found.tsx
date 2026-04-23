import Link from "next/link";
import PindeMark from "@/components/PindeMark";

export default function NotFound() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-obsidian pt-20">
      <div className="text-center px-6">
        <PindeMark size={55} frame="rgba(10,10,12,0.06)" />
        <div className="mt-[34px]" />
        <h1 className="font-[family-name:var(--font-serif)] font-light text-[64px] leading-[0.95] text-alabaster mb-[13px]">
          404<span className="text-red">.</span>
        </h1>
        <p className="text-warm text-[15px] leading-[1.9] mb-[55px] max-w-[400px] mx-auto">
          This page doesn&apos;t exist. The precision you&apos;re looking for
          might be elsewhere.
        </p>
        <div className="flex flex-col sm:flex-row gap-[21px] justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-[10px] px-[34px] py-4 bg-red text-white text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:brightness-90 transition-all"
          >
            <span className="inline-block w-[5px] h-[5px] rounded-full bg-white" />
            Back to home
          </Link>
          <Link
            href="/products"
            className="inline-flex items-center px-[34px] py-4 border border-line text-alabaster text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:border-warm transition-all"
          >
            Browse systems
          </Link>
        </div>
      </div>
    </section>
  );
}

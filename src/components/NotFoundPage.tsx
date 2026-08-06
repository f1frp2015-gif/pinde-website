"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import PindeMark from "@/components/PindeMark";

export default function NotFoundPage() {
  const isRu = usePathname()?.startsWith("/ru") ?? false;
  const locale = isRu ? "ru" : "en";

  return (
    <main className="min-h-[80vh] flex items-center justify-center bg-obsidian pt-20">
      <div className="text-center px-6">
        <PindeMark size={55} frame="rgba(10,10,12,0.06)" />
        <div className="mt-[34px]" />
        <h1 className="font-[family-name:var(--font-serif)] font-semibold text-[64px] leading-[0.95] text-alabaster mb-[13px]">
          404<span className="text-red">.</span>
        </h1>
        <p className="text-warm text-[15px] leading-[1.9] mb-[55px] max-w-[400px] mx-auto">
          {isRu
            ? "Страница не найдена. Проверьте адрес или вернитесь к списку систем."
            : "This page was not found. Check the address or return to the system catalogue."}
        </p>
        <div className="flex flex-col sm:flex-row gap-[21px] justify-center">
          <Link
            href={`/${locale}`}
            className="inline-flex items-center gap-[10px] px-[34px] py-4 bg-gold text-navy text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:brightness-90 transition-all"
          >
            <span className="inline-block w-[5px] h-[5px] rounded-full bg-white" />
            {isRu ? "На главную" : "Back to home"}
          </Link>
          <Link
            href={`/${locale}/systems/aluminium`}
            className="inline-flex items-center px-[34px] py-4 border border-line text-alabaster text-[11px] font-medium tracking-[3px] uppercase rounded-[1px] hover:border-warm transition-all"
          >
            {isRu ? "Смотреть системы" : "Browse systems"}
          </Link>
        </div>
      </div>
    </main>
  );
}

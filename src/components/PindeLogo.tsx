import PindeMark from "./PindeMark";

type Props = {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  descriptor?: string;
  hideDescriptorOnMobile?: boolean;
  className?: string;
};

const sizes = {
  sm: { mark: 34, word: "text-[17px]", descriptor: "text-[7px]" },
  md: { mark: 42, word: "text-[23px]", descriptor: "text-[8px]" },
  lg: { mark: 54, word: "text-[32px]", descriptor: "text-[10px]" },
} as const;

export default function PindeLogo({
  variant = "dark",
  size = "md",
  descriptor = "WINDOW SYSTEM",
  hideDescriptorOnMobile = false,
  className = "",
}: Props) {
  const palette =
    variant === "light"
      ? { frame: "#FFFFFF", word: "text-white", descriptor: "text-white/68" }
      : { frame: "#0D2440", word: "text-[#0D2440]", descriptor: "text-[#7A828C]" };
  const scale = sizes[size];

  return (
    <span className={`inline-flex items-center gap-3 ${className}`}>
      <PindeMark size={scale.mark} frame={palette.frame} />
      <span className="block leading-none">
        <span
          className={`block font-[family-name:var(--font-brand)] font-bold tracking-[0.28em] ${scale.word} ${palette.word}`}
          aria-label="PINDÉ"
        >
          <span aria-hidden="true">
            PIND<span className="relative inline-block tracking-normal">E<span className="absolute -top-[0.28em] left-[0.34em] h-[3px] w-[10px] -rotate-[32deg] bg-[#D71920]" /></span>
          </span>
        </span>
        <span
          className={`mt-1.5 block font-[family-name:var(--font-brand)] font-semibold tracking-[0.32em] ${scale.descriptor} ${palette.descriptor} ${hideDescriptorOnMobile ? "max-sm:hidden" : ""}`}
        >
          {descriptor}
        </span>
      </span>
    </span>
  );
}

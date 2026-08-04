import PindeMark from "./PindeMark";

type Props = {
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
  descriptor?: string;
  hideDescriptorOnMobile?: boolean;
  className?: string;
};

const sizes = {
  sm: {
    mark: 46,
    gap: "gap-[15px]",
    word: "text-[23px]",
    descriptor: "text-[8px]",
    descriptorOffset: "mt-[7px]",
  },
  md: {
    mark: 54,
    gap: "gap-[18px]",
    word: "text-[28px]",
    descriptor: "text-[9px]",
    descriptorOffset: "mt-[8px]",
  },
  lg: {
    mark: 70,
    gap: "gap-[22px]",
    word: "text-[38px]",
    descriptor: "text-[12px]",
    descriptorOffset: "mt-[10px]",
  },
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
    <span
      className={`inline-flex items-center ${scale.gap} ${className}`}
      role="img"
      aria-label="PINDÉ Window System"
    >
      <PindeMark size={scale.mark} frame={palette.frame} decorative />
      <span className="block leading-none" aria-hidden="true">
        <span
          className={`block font-[family-name:var(--font-brand)] font-bold tracking-[0.36em] ${scale.word} ${palette.word}`}
        >
          PIND
          <span className="relative inline-block tracking-normal">
            E
            <span className="absolute -top-[0.32em] left-[0.28em] h-[0.17em] w-[0.5em] -rotate-[32deg] bg-[#D71920] [clip-path:polygon(18%_0,100%_0,82%_100%,0_100%)]" />
          </span>
        </span>
        <span
          className={`block font-[family-name:var(--font-brand)] font-semibold tracking-[0.38em] ${scale.descriptorOffset} ${scale.descriptor} ${palette.descriptor} ${hideDescriptorOnMobile ? "max-sm:hidden" : ""}`}
        >
          {descriptor}
        </span>
      </span>
    </span>
  );
}

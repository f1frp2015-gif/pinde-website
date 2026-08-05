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
    mark: 42,
    gap: "gap-[13px]",
    word: "text-[22px]",
    descriptor: "text-[7px]",
    descriptorOffset: "mt-[6px]",
  },
  md: {
    mark: 54,
    gap: "gap-[16px]",
    word: "text-[29px]",
    descriptor: "text-[9px]",
    descriptorOffset: "mt-[7px]",
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
  descriptor = "WINDOW SYSTEMS",
  hideDescriptorOnMobile = false,
  className = "",
}: Props) {
  const palette =
    variant === "light"
      ? { frame: "#DAAF37", word: "text-[#DAAF37]", descriptor: "text-[#DAAF37]" }
      : { frame: "#DAAF37", word: "text-[#081D2A]", descriptor: "text-[#DAAF37]" };
  const scale = sizes[size];

  return (
    <span
      className={`inline-flex items-center ${scale.gap} ${className}`}
      role="img"
      aria-label="PINDÉ Window Systems"
    >
      <PindeMark size={scale.mark} frame={palette.frame} decorative />
      <span className="block leading-none" aria-hidden="true">
        <span
          className={`block font-[family-name:var(--font-brand)] font-medium tracking-[0.28em] ${scale.word} ${palette.word}`}
        >
          PIND
          <span className="relative inline-block tracking-normal">
            E
            <span className="absolute -top-[0.32em] left-[0.28em] h-[0.17em] w-[0.5em] -rotate-[32deg] bg-[#DAAF37] [clip-path:polygon(18%_0,100%_0,82%_100%,0_100%)]" />
          </span>
        </span>
        <span
          className={`block font-[family-name:var(--font-brand)] font-medium tracking-[0.32em] ${scale.descriptorOffset} ${scale.descriptor} ${palette.descriptor} ${hideDescriptorOnMobile ? "max-sm:hidden" : ""}`}
        >
          {descriptor}
        </span>
      </span>
    </span>
  );
}

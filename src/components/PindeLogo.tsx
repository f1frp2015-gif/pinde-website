import Image from "next/image";

type Props = {
  size?: "sm" | "md" | "lg";
  eager?: boolean;
  className?: string;
};

const sizes = {
  sm: { width: 141, height: 42 },
  md: { width: 181, height: 54 },
  lg: { width: 235, height: 70 },
} as const;

/** Approved PINDÉ lockup traced from the supplied physical sign reference. */
export default function PindeLogo({
  size = "md",
  eager = false,
  className = "",
}: Props) {
  const dimensions = sizes[size];

  return (
    <Image
      src="/brand/pinde-logo-primary.svg"
      alt="PINDÉ Window Systems"
      width={dimensions.width}
      height={dimensions.height}
      loading={eager ? "eager" : undefined}
      unoptimized
      className={`block shrink-0 ${className}`}
    />
  );
}

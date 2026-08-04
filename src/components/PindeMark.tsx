/**
 * PINDÉ window mark.
 *
 * The open navy frame, gold sash and red corner accent follow the primary
 * construction shown in the PINDÉ brand identity manual.
 */
export default function PindeMark({
  size = 40,
  frame = "#0D2440",
  sash = "#C7A154",
  accent = "#D71920",
  decorative = false,
}: {
  size?: number;
  frame?: string;
  sash?: string;
  accent?: string;
  decorative?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      role={decorative ? undefined : "img"}
      aria-label={decorative ? undefined : "PINDÉ window mark"}
      aria-hidden={decorative ? true : undefined}
      focusable="false"
    >
      <path
        d="M8 8H48M56 17V56H18"
        stroke={frame}
        strokeWidth="5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path
        d="M8 16L31 29V48L8 58V16Z"
        stroke={sash}
        strokeWidth="5"
        strokeLinejoin="miter"
      />
      <rect x="52" y="6" width="9" height="9" fill={accent} />
    </svg>
  );
}

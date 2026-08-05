/** PINDÉ open-frame mark from the current visual identity. */
export default function PindeMark({
  size = 40,
  frame = "#DAAF37",
  accent = "#FF2D2D",
  decorative = false,
}: {
  size?: number;
  frame?: string;
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
      <rect x="9" y="9" width="44" height="44" stroke={frame} strokeWidth="3" />
      <circle cx="53" cy="9" r="7" fill={accent} />
    </svg>
  );
}

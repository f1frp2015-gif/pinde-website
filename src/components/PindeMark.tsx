/**
 * PINDÉ Brand Mark — Square + Red Dot
 * Dot diameter = side / φ³ = side × 0.1459
 * Dot center = top-right vertex of square
 * 75% outside, 25% inside
 */
export default function PindeMark({
  size = 40,
  frame = "#0A0A0C",
  dot = "#D42B2B",
}: {
  size?: number;
  frame?: string;
  dot?: string;
}) {
  const d = size * 0.1459;
  const pad = d * 1.3;
  const sw = Math.max(size / 120, 0.6);

  return (
    <svg
      width={size + pad * 2}
      height={size + pad * 2}
      viewBox={`${-pad} ${-pad} ${size + pad * 2} ${size + pad * 2}`}
      style={{ overflow: "visible", display: "block" }}
      aria-label="PINDÉ mark"
    >
      <rect
        x="0"
        y="0"
        width={size}
        height={size}
        fill="none"
        stroke={frame}
        strokeWidth={sw}
      />
      <circle cx={size} cy={0} r={d / 2} fill={dot} />
    </svg>
  );
}

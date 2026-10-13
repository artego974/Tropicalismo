// Elementos gráficos da identidade tropicalista (puramente decorativos).

export function SunMark({ className }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <g className="fill-urucum stroke-tinta" strokeWidth="2" strokeLinejoin="round">
        {Array.from({ length: 12 }, (_, i) => (
          <path key={i} d="M32 2l5 12H27z" transform={`rotate(${i * 30} 32 32)`} />
        ))}
      </g>
      <circle cx="32" cy="32" r="15" className="fill-sol stroke-tinta" strokeWidth="3" />
      <circle cx="32" cy="32" r="7" className="fill-rosa stroke-tinta" strokeWidth="2" />
    </svg>
  );
}

export function Asterisk({ className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <g className="fill-current">
        {[0, 45, 90, 135].map((deg) => (
          <rect key={deg} x="10" y="1" width="4" height="22" rx="2" transform={`rotate(${deg} 12 12)`} />
        ))}
      </g>
    </svg>
  );
}

// Folha de bananeira "rasgada" em tiras, desenhada uma vez só.
const leafStrips = Array.from({ length: 9 }, (_, i) => {
  const t = (i + 0.5) / 9;
  const w = 44 * Math.sin(Math.PI * (0.1 + 0.85 * t));
  const y0 = 18 + i * 25;
  const y1 = y0 + 20;
  return [
    `M50 ${y0}L${50 + w} ${y0 - 12}L${50 + w * 0.92} ${y1 - 7}L50 ${y1}Z`,
    `M50 ${y0}L${50 - w} ${y0 - 12}L${50 - w * 0.92} ${y1 - 7}L50 ${y1}Z`,
  ];
}).flat();

export function BananaLeaf({ className }) {
  return (
    <svg viewBox="0 0 100 270" className={className} aria-hidden="true">
      <g className="fill-current stroke-tinta" strokeWidth="1.6" strokeLinejoin="round">
        {leafStrips.map((d) => (
          <path key={d} d={d} />
        ))}
      </g>
      <path d="M50 4V262" className="stroke-tinta" strokeWidth="3" strokeLinecap="round" fill="none" />
    </svg>
  );
}

// Calça boca de sino, para o card dos anos 70.
export function FlaredPants({ className }) {
  return (
    <svg viewBox="0 0 80 110" className={className} aria-hidden="true">
      <path
        d="M22 4h36l3 24-6 40 11 38H44L40 54l-4 52H14l11-38-6-40z"
        className="fill-sol stroke-tinta"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path d="M22 14h36" className="stroke-tinta" strokeWidth="3" />
    </svg>
  );
}

const ALogo = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg
    viewBox="0 0 64 64"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-label="Aathithya Logo"
  >
    <defs>
      <linearGradient id="aathithya-gradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
        <stop stopColor="#a855f7"/>
        <stop offset="1" stopColor="#38bdf8"/>
      </linearGradient>
    </defs>
    <circle cx="32" cy="32" r="32" fill="url(#aathithya-gradient)"/>
    <path d="M32 14L16 50H24L32 32L40 50H48L32 14Z" fill="#fff"/>
  </svg>
);

export default ALogo;
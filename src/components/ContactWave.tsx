const ContactWave = () => (
  <svg className="w-full h-24 md:h-32 absolute top-0 left-0 z-0" viewBox="0 0 1440 150" fill="none" preserveAspectRatio="none">
    <defs>
      <linearGradient id="contactWave" x1="0" y1="0" x2="1440" y2="0" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#a855f7" />
        <stop offset="30%" stopColor="#06b6d4" />
        <stop offset="100%" stopColor="#38bdf8" />
      </linearGradient>
    </defs>
    <path
      d="M0,48 C360,120 1080,0 1440,80 L1440,150 L0,150 Z"
      fill="url(#contactWave)"
      fillOpacity="0.5"
    />
  </svg>
);

export default ContactWave;
const AboutAurora = () => (
  <div className="absolute inset-0 -z-10 pointer-events-none">
    <svg width="100%" height="100%" viewBox="0 0 800 400" fill="none" className="w-full h-full">
      <defs>
        <radialGradient id="aboutBg" cx="60%" cy="30%" r="70%" fx="60%" fy="30%">
          <stop offset="0%" stopColor="#e0c3fc" stopOpacity="0.6"/>
          <stop offset="100%" stopColor="#8ec5fc" stopOpacity="0"/>
        </radialGradient>
      </defs>
      <ellipse cx="400" cy="200" rx="380" ry="170" fill="url(#aboutBg)">
        <animate attributeName="rx" values="380;360;380" dur="7s" repeatCount="indefinite"/>
        <animate attributeName="ry" values="170;200;170" dur="8s" repeatCount="indefinite"/>
      </ellipse>
    </svg>
  </div>
);

export default AboutAurora;
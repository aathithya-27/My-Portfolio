import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const AuroraSVG = () => (
  <svg
    className="absolute inset-0 w-full h-full pointer-events-none z-0"
    viewBox="0 0 1440 600"
    fill="none"
    preserveAspectRatio="none"
  >
    <defs>
      <linearGradient id="aurora1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#a855f7" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.3" />
      </linearGradient>
      <linearGradient id="aurora2" x1="1" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f472b6" stopOpacity="0.6" />
        <stop offset="100%" stopColor="#6366f1" stopOpacity="0.2" />
      </linearGradient>
    </defs>
    <g>
      <path
        d="
          M0,300
          Q400,200 800,300
          T1440,300
          L1440,600 L0,600 Z
        "
        fill="url(#aurora1)"
      >
        <animate
          attributeName="d"
          dur="10s"
          repeatCount="indefinite"
          values="
            M0,300 Q400,200 800,300 T1440,300 L1440,600 L0,600 Z;
            M0,320 Q400,250 800,330 T1440,350 L1440,600 L0,600 Z;
            M0,300 Q400,200 800,300 T1440,300 L1440,600 L0,600 Z
          "
        />
      </path>
      <path
        d="
          M0,400
          Q600,500 1440,400
          L1440,600 L0,600 Z
        "
        fill="url(#aurora2)"
      >
        <animate
          attributeName="d"
          dur="13s"
          repeatCount="indefinite"
          values="
            M0,400 Q600,500 1440,400 L1440,600 L0,600 Z;
            M0,420 Q600,480 1440,420 L1440,600 L0,600 Z;
            M0,400 Q600,500 1440,400 L1440,600 L0,600 Z
          "
        />
      </path>
    </g>
  </svg>
);

const particlesOptions = {
  fullScreen: { enable: false },
  background: { color: "transparent" },
  particles: {
    number: { value: 60, density: { enable: true, area: 1200 } },
    color: { value: ["#f3f4f6", "#a5b4fc", "#f0abfc"] },
    opacity: {
      value: 0.6,
      random: true,
      anim: { enable: true, speed: 0.5, opacity_min: 0.3, sync: false }
    },
    size: { value: 2, random: { enable: true, minimumValue: 1 } },
    move: {
      enable: true,
      speed: 0.2,
      direction: "none" as const,
      random: true,
      straight: false,
      outModes: { default: "out" as const }
    },
    shape: { type: "circle" }
  },
  detectRetina: true
};

const Hero = () => {
  const particlesInit = useCallback(async (engine: unknown) => {
    await loadFull(engine as any);
  }, []);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#09090b] to-[#18181b] text-white overflow-hidden">
      {/* Aurora SVG Animated Waves */}
      <AuroraSVG />

      {/* Particle layer */}
      <Particles
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
      />

      {/* Main content */}
      <div className="relative z-10 w-full flex flex-col items-center px-4">
        <div className="flex flex-col md:flex-row items-center justify-center w-full pt-16 md:pt-24">
          <div className="text-4xl sm:text-6xl font-bold text-white md:text-right md:pr-6 leading-tight transition-colors duration-300">
            <span className="block">Hello, I'm</span>
          </div>
          <div className="text-4xl sm:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-300 md:pl-6 leading-tight">
            <span className="block">Aathithya P R</span>
          </div>
        </div>
        <div className="mt-8 text-center text-xl sm:text-2xl font-semibold text-gray-200 transition-colors duration-300">
          Software Developer | UI/UX Enthusiast | OpenCV Explorer
        </div>
        <div className="mt-6 max-w-3xl text-center text-base sm:text-lg text-gray-300 font-normal transition-colors duration-300">
          Building beautiful, responsive web applications with modern technologies.<br />
          Passionate about creating seamless user experiences and clean code.
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 text-lg font-semibold text-white shadow-lg hover:scale-105 transform transition"
          >
            View Project
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-purple-400 text-lg font-semibold text-purple-200 hover:bg-purple-100/10 shadow-lg hover:scale-105 transform transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { useEffect, useRef, useState } from "react";
import Particles from "@tsparticles/react";

// Generate a smooth SVG path for a sine wave
function getSineWavePath({
  width = 1440,
  height = 600,
  amplitude = 40,
  frequency = 2,
  phase = 0,
  yOffset = 300,
  steps = 80,
}: {
  width?: number;
  height?: number;
  amplitude?: number;
  frequency?: number;
  phase?: number;
  yOffset?: number;
  steps?: number;
}) {
  const points = [];
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * width;
    const radians = frequency * ((x / width) * 2 * Math.PI) + phase;
    const y = yOffset + Math.sin(radians) * amplitude;
    points.push([x, y]);
  }
  // Build SVG path: start at left, wave, then bottom and close
  let d = `M0,${height} L${points[0][0]},${points[0][1]}`;
  for (let i = 1; i < points.length; i++) {
    d += ` L${points[i][0]},${points[i][1]}`;
  }
  d += ` L${width},${height} Z`;
  return d;
}

const AuroraSVG = ({ mouseX, width }: { mouseX: number; width: number }) => {
  const svgHeight = 600;
  const phase = ((mouseX / width) * 2 * Math.PI);

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
      viewBox={`0 0 ${width} ${svgHeight}`}
      fill="none"
      preserveAspectRatio="none"
    >
      <defs>
        <linearGradient id="waveGradient1" x1="0" y1="0" x2={width} y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.65" />
          <stop offset="40%" stopColor="#06b6d4" stopOpacity="0.55" />
          <stop offset="80%" stopColor="#38bdf8" stopOpacity="0.65" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0.65" />
        </linearGradient>
        <linearGradient id="waveGradient2" x1="0" y1="0" x2={width} y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f472b6" stopOpacity="0.5" />
          <stop offset="60%" stopColor="#8b5cf6" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.5" />
        </linearGradient>
        <linearGradient id="waveGradient3" x1="0" y1="0" x2={width} y2="0" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#f472b6" stopOpacity="0.2" />
          <stop offset="60%" stopColor="#38bdf8" stopOpacity="0.17" />
          <stop offset="100%" stopColor="#a7f3d0" stopOpacity="0.23" />
        </linearGradient>
      </defs>
      <g>
        {/* Main foreground wave */}
        <path
          d={getSineWavePath({
            width,
            height: svgHeight,
            amplitude: 60,
            frequency: 2,
            phase,
            yOffset: 330,
            steps: 80,
          })}
          fill="url(#waveGradient1)"
          style={{ transition: "d 0.15s" }}
        />
        {/* Secondary wave */}
        <path
          d={getSineWavePath({
            width,
            height: svgHeight,
            amplitude: 45,
            frequency: 2.3,
            phase: phase + Math.PI / 2,
            yOffset: 380,
            steps: 80,
          })}
          fill="url(#waveGradient2)"
          style={{ transition: "d 0.15s" }}
        />
        {/* Soft background wave */}
        <path
          d={getSineWavePath({
            width,
            height: svgHeight,
            amplitude: 27,
            frequency: 1.4,
            phase: phase + Math.PI,
            yOffset: 435,
            steps: 80,
          })}
          fill="url(#waveGradient3)"
          style={{ transition: "d 0.15s" }}
        />
      </g>
    </svg>
  );
};

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
  const [mouseX, setMouseX] = useState(720); // Start at center
  const [svgWidth, setSvgWidth] = useState(1440);
  const sectionRef = useRef<HTMLDivElement>(null);

  // Responsive SVG width
  useEffect(() => {
    const updateWidth = () => {
      if (sectionRef.current) setSvgWidth(sectionRef.current.offsetWidth);
    };
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Unified mouse/touch handler
  useEffect(() => {
    const handlePointerMove = (e: MouseEvent | TouchEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      let x = 0;
      if ("touches" in e) {
        if (e.touches.length === 0) return;
        x = e.touches[0].clientX - rect.left;
      } else {
        x = e.clientX - rect.left;
      }
      setMouseX(Math.max(0, Math.min(x, rect.width)));
    };
    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handlePointerMove);
      section.addEventListener("touchmove", handlePointerMove);
    }
    return () => {
      if (section) {
        section.removeEventListener("mousemove", handlePointerMove);
        section.removeEventListener("touchmove", handlePointerMove);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center min-h-screen h-screen bg-gradient-to-b from-[#09090b] to-[#18181b] text-white overflow-hidden"
      style={{ cursor: "pointer" }}
    >
      {/* Aurora SVG Animated Gradient Waves */}
      <AuroraSVG mouseX={mouseX} width={svgWidth} />

      {/* Particle layer */}
      <Particles
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        id="tsparticles"
        options={particlesOptions}
      />

      {/* Main content */}
      <div className="relative z-10 w-full flex flex-col items-center px-4">
        <div className="flex flex-col md:flex-row items-center justify-center w-full pt-12 sm:pt-16 md:pt-24">
          <div className="flex flex-row items-center text-3xl sm:text-5xl md:text-6xl font-bold leading-tight transition-colors duration-300 gap-x-2">
            <span className="text-white">Hello, I&apos;m</span>
            <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-300">
              Aathithya P R
            </span>
          </div>
        </div>
        <div className="mt-6 sm:mt-8 text-center text-lg sm:text-2xl font-semibold text-gray-200 transition-colors duration-300">
          Software Developer | UI/UX Enthusiast | OpenCV Explorer
        </div>
        <div className="mt-4 sm:mt-6 max-w-3xl text-center text-base sm:text-lg text-gray-300 font-normal transition-colors duration-300">
          Building beautiful, responsive web applications with modern technologies.<br />
          Passionate about creating seamless user experiences and clean code.
        </div>
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-5 py-2 sm:px-8 sm:py-3 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 text-base sm:text-lg font-semibold text-white shadow-lg hover:scale-105 transform transition"
          >
            View Project
          </a>
          <a
            href="#contact"
            className="px-5 py-2 sm:px-8 sm:py-3 rounded-full border border-purple-400 text-base sm:text-lg font-semibold text-purple-200 hover:bg-purple-100/10 shadow-lg hover:scale-105 transform transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
import { useCallback, useEffect, useRef, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

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
  frequency?: number; // number of full wave cycles across the width
  phase?: number;     // horizontal shift, in radians
  yOffset?: number;   // vertical center
  steps?: number;     // number of points to sample
}) {
  const points = [];
  for (let i = 0; i <= steps; i++) {
    const x = (i / steps) * width;
    // The sine function:
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

const AuroraSVG = ({ mouseX }: { mouseX: number }) => {
  // Map mouseX (0 to width) to a phase offset (0 to 2π)
  const width = 1440;
  const phase = ((mouseX / width) * 2 * Math.PI);
  return (
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
          d={getSineWavePath({
            width,
            height: 600,
            amplitude: 60,
            frequency: 2,
            phase,
            yOffset: 300,
            steps: 80,
          })}
          fill="url(#aurora1)"
          style={{ transition: "d 0.15s" }}
        />
        <path
          d={getSineWavePath({
            width,
            height: 600,
            amplitude: 30,
            frequency: 2.5,
            phase: phase + Math.PI / 2, // secondary wave
            yOffset: 400,
            steps: 80,
          })}
          fill="url(#aurora2)"
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
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      setMouseX(Math.max(0, Math.min(x, rect.width)));
    };
    const section = sectionRef.current;
    if (section) {
      section.addEventListener("mousemove", handleMouseMove);
      section.addEventListener("touchmove", e => {
        if (e.touches.length > 0) handleMouseMove(e.touches[0] as any);
      });
    }
    return () => {
      if (section) {
        section.removeEventListener("mousemove", handleMouseMove);
        section.removeEventListener("touchmove", handleMouseMove as any);
      }
    };
  }, []);

  const particlesInit = useCallback(async (engine: unknown) => {
    await loadFull(engine as any);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-[#09090b] to-[#18181b] text-white overflow-hidden"
      style={{ cursor: "pointer" }}
    >
      {/* Aurora SVG Animated Sine Waves */}
      <AuroraSVG mouseX={mouseX} />

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
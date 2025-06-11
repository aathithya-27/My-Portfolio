import { useRef } from "react";
import { useState } from "react";

const Hero = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [gradientPos, setGradientPos] = useState({ x: 50, y: 50 });

  // Update gradient position based on mouse movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = sectionRef.current?.getBoundingClientRect();
    if (!rect) return;
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGradientPos({ x, y });
  };

  return (
    <section
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      className="relative flex flex-col items-center justify-center min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-4 overflow-hidden transition-colors duration-300"
      style={{
        // Dynamic gradient background
        background: `radial-gradient(circle at ${gradientPos.x}% ${gradientPos.y}%, #a855f7 0%, #9333ea 40%, #18181b 100%)`,
        transition: "background 0.2s",
      }}
    >
      {/* Main Row */}
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center justify-center w-full pt-16 md:pt-24">
          {/* Left: Hello, I'm */}
          <div className="text-5xl sm:text-7xl font-bold text-gray-900 dark:text-white md:text-right md:pr-6 leading-tight transition-colors duration-300">
            <span className="block">Hello,I'm</span>
          </div>
          {/* Right: Name */}
          <div className="text-5xl sm:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 dark:from-purple-400 dark:via-fuchsia-500 dark:to-indigo-400 md:pl-6 leading-tight">
            <span className="block">Aathithya P R</span>
          </div>
        </div>

        {/* Subtitle */}
        <div className="mt-8 text-center text-2xl sm:text-3xl font-semibold text-gray-700 dark:text-gray-200 transition-colors duration-300">
          Software Developer | UI/UX Enthusiast | OpenCV Explorer
        </div>

        {/* Description */}
        <div className="mt-6 max-w-3xl text-center text-base sm:text-lg text-gray-600 dark:text-gray-300 font-normal transition-colors duration-300">
          Building beautiful, responsive web applications with modern technologies.<br />
          Passionate about creating seamless user experiences and clean code.
        </div>

        {/* Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-indigo-500 text-lg font-semibold text-white shadow-lg hover:scale-105 transform transition"
          >
            View Project
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-purple-400 text-lg font-semibold text-purple-600 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-purple-600/30 shadow-lg hover:scale-105 transform transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
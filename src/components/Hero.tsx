import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const fullName = "Aathithya P R";

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center pt-20 pb-8 px-4 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="w-full max-w-2xl mx-auto text-center space-y-8">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extrabold mb-4 tracking-tight flex flex-col gap-2 items-center">
          <span className="text-gray-900 dark:text-white">Hello, I'm</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-600 to-indigo-700 block">
            {fullName}
          </span>
        </h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
          Software Developer | UI/UX Enthusiast | OpenCV Explorer
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8">
          Building beautiful, responsive web applications with modern technologies.<br/>
          Passionate about creating seamless user experiences and clean code.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 text-white rounded-full shadow-lg hover:from-purple-600 hover:to-purple-800 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border-2 border-purple-600 text-purple-600 rounded-full shadow-lg hover:bg-purple-600/10 transition"
          >
            Contact Me
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-8 w-8 text-purple-600 dark:text-purple-400" />
      </a>
    </section>
  );
};

export default Hero;
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const fullName = "Aathithya P R";

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center pt-16 relative bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-4 sm:px-6 md:px-6 text-center relative z-10">
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold mb-8 tracking-tight flex justify-center items-center gap-4">
          <span className="text-gray-900 dark:text-white">Hello, I'm</span>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-fuchsia-600 to-indigo-700">
            {fullName}
          </span>
        </h1>
        
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-10 h-14 text-gray-700 dark:text-gray-300">
          Software Developer | UI/UX Enthusiast | OpenCV Explorer
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 px-2 sm:px-0">
          Building beautiful, responsive web applications with modern technologies. 
          Passionate about creating seamless user experiences and clean code.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 px-2 sm:px-0">
          <a
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-purple-500 to-purple-700 hover:from-purple-600 hover:to-purple-800 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-transparent border-2 border-purple-600 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:bg-purple-600/10 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
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

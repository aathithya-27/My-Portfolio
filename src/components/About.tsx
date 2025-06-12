import { User, Calendar, MapPin, Briefcase } from 'lucide-react';
import AboutAurora from "./AboutAurora";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800 relative overflow-hidden">
      <AboutAurora />
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile Image Section */}
          <div className="md:w-1/2 flex items-center justify-center">
            <div className="relative group">
              {/* Aurora border effect */}
              <div className="absolute -inset-4 rounded-xl blur-xl bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600/30 dark:from-purple-600 dark:via-fuchsia-600 dark:to-indigo-700/30 animate-pulse"></div>
              {/* Profile image with stylish ring and hover effect */}
              <div className="relative aspect-square w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto overflow-hidden rounded-xl shadow-2xl ring-4 ring-white/60 dark:ring-gray-900/60 group-hover:ring-8 group-hover:ring-purple-300 transition-all duration-300">
                <img
                  src="/profile-about.png"
                  alt="Aathithya P R"
                  className="w-full h-full object-cover object-center grayscale-0 hover:grayscale-[40%] transition duration-300"
                  loading="lazy"
                />
                {/* Overlay gradient for a modern effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 via-transparent to-purple-300/10 pointer-events-none"></div>
              </div>
            </div>
          </div>
          
          {/* About Content Section */}
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 dark:from-purple-600 dark:via-fuchsia-600 dark:to-indigo-700 mb-6"></div>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm an Electronics and Communication Engineering graduate passionate about real-time applications, with expertise in programming, web development, and project execution. I excel in teamwork, proactive problem-solving, and delivering innovative solutions.
            </p>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              My dedication to learning and adaptability helps me thrive in dynamic environments, and I'm always eager to take on new challenges in technology and development.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <User className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <span className="text-gray-700 dark:text-gray-300">Aathithya P R</span>
              </div>
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <span className="text-gray-700 dark:text-gray-300">ECE Graduate</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <span className="text-gray-700 dark:text-gray-300">Erode, India</span>
              </div>
              <div className="flex items-center gap-3">
                <Briefcase className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                <span className="text-gray-700 dark:text-gray-300">Available for Opportunities</span>
              </div>
            </div>
            
            <a
              href="#contact"
              className="px-6 py-3 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 hover:from-purple-500 hover:to-indigo-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 inline-block"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
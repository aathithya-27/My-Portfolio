import { User, Calendar, MapPin, Briefcase } from 'lucide-react';
import AboutAurora from "./AboutAurora";
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600/20 rounded-xl blur-xl dark:bg-gradient-to-r dark:from-purple-600 dark:via-fuchsia-600 dark:to-indigo-700/20"></div>
              <div className="relative aspect-square w-full max-w-md mx-auto overflow-hidden rounded-xl shadow-2xl">
                <img
                  src="https://images.pexels.com/photos/4064838/pexels-photo-4064838.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <h2 className="text-3xl font-bold mb-2">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 dark:bg-gradient-to-r dark:from-purple-600 dark:via-fuchsia-600 dark:to-indigo-700 mb-6"></div>
            
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              I'm an Electronics and Communication Engineering student passionate about real-time applications, with expertise in programming, web development, and project execution. I excel in teamwork, proactive problem-solving, and delivering innovative solutions.
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
                <span className="text-gray-700 dark:text-gray-300">ECE Student</span>
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
<AboutAurora />

export default About;
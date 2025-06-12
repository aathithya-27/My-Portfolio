import { Heart } from 'lucide-react';

// Reuse the ALogo from your Header
const ALogo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-purple-400"
  >
    <path d="M12 2L2 22H6L12 12L18 22H22L12 2Z" fill="currentColor" />
  </svg>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="flex items-center gap-2 text-2xl font-bold select-none"
          >
            <ALogo />
            <span className="text-purple-300 font-extrabold hidden sm:block">Aathithya</span>
          </a>
          
          <div className="text-gray-400">
            &copy; {currentYear} Portfolio. Made with <Heart className="inline h-4 w-4 text-red-500 fill-red-500" /> by Aathithya Developer
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <a
            href="#home"
            className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 text-transparent bg-clip-text"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 flex items-center justify-center">
              <span className="select-none text-white">A</span>
            </div>
            <span>Aathithya</span>
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

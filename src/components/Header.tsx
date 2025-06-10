import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

const ALogo = () => (
  <svg
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="text-purple-600 dark:text-purple-400"
  >
    <path
      d="M12 2L2 22H6L12 12L18 22H22L12 2Z"
      fill="currentColor"
    />
  </svg>
);

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ESC to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('keydown', handleKeyDown);
    }
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isMenuOpen]);

  // Click outside to close
  useEffect(() => {
    if (!isMenuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md py-2'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Mobile Menu Button */}
        <button
          className="md:hidden bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 z-50 relative p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={28} color="purple" /> : <Menu size={28} color="purple" />}
        </button>

        <a
          href="#home"
          aria-label="Homepage"
          className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 text-transparent bg-clip-text ml-4"
        >
          <ALogo />
          <span> Aathithya</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>

      {/* Mobile Navigation Overlay */}
      {isMenuOpen && (
        <div
          aria-hidden="true"
          className="fixed inset-0 z-40 bg-black/40 transition-opacity animate-fade-in"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Mobile Navigation */}
      <div
        ref={menuRef}
        className={`md:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-400 via-fuchsia-500 to-indigo-600 shadow-lg transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
        style={{ willChange: 'transform' }}
        role="dialog"
        aria-modal="true"
        tabIndex={-1}
      >
        <nav className="flex flex-col items-center space-y-4 py-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-white font-semibold text-lg py-2 w-full text-center transition-colors duration-200 hover:bg-white/10 rounded"
              onClick={() => setIsMenuOpen(false)}
              tabIndex={isMenuOpen ? 0 : -1}
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';

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

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  // Close on ESC
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    if (isMenuOpen) {
      document.addEventListener('keydown', handleKeyDown);
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

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full border-b border-white/10 transition-all duration-300">
        <div className="container mx-auto px-4 md:px-10 h-16 flex items-center justify-between">
          {/* Logo left */}
          <a
            href="#home"
            aria-label="Homepage"
            className="flex items-center gap-2 text-2xl font-bold select-none"
          >
            <ALogo />
            <span className="text-purple-300 font-extrabold hidden sm:block">Aathithya</span>
          </a>

          {/* Desktop Navigation (right) - always visible on md+ */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white dark:text-purple-300 hover:text-purple-400 font-medium text-lg tracking-wide transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button (right) - only visible below md */}
          <button
            className="md:hidden p-2 rounded-lg border-2 border-purple-300 hover:bg-purple-300/10 transition ml-auto"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={32} className="text-purple-300" />
          </button>
        </div>
      </div>

      {/* Mobile Overlay Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center
                        bg-black/70 backdrop-blur-sm transition-all md:bg-transparent md:backdrop-blur-none">
          {/* Centered Card */}
          <div
            ref={menuRef}
            className="w-11/12 max-w-sm mx-auto rounded-xl
              bg-gradient-to-br from-purple-600 via-pink-400 to-blue-300
              shadow-2xl flex flex-col items-center py-10 px-4 gap-6 relative
              md:bg-transparent md:shadow-none md:py-0 md:px-0 md:gap-0"
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-1 border-2 border-white rounded-lg md:hidden"
              onClick={() => setIsMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={32} className="text-white" />
            </button>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-bold text-2xl text-black hover:text-white tracking-wide py-2 text-center w-full transition-colors md:text-white md:hover:text-purple-400 md:font-medium md:text-lg md:py-0"
                onClick={() => setIsMenuOpen(false)}
                tabIndex={isMenuOpen ? 0 : -1}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
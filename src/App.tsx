import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion'; // Add this import
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 transition-colors duration-300">
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Header />
      <AnimatePresence mode="wait">
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Experience />
          <Contact />
        </main>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
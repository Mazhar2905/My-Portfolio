import React, { useState } from 'react';
import { Menu, X, Code2, FileText, Sun, Moon } from 'lucide-react';
import { Link } from 'react-scroll';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: 'home' },
    { label: 'About', href: 'about' },
    { label: 'Skills', href: 'skills' },
    { label: 'Projects', href: 'projects' },
    { label: 'Contact', href: 'contact' },
  ];

  return (
    <nav className="fixed w-full bg-white/90 dark:bg-dark-card/90 backdrop-blur-sm z-50 shadow-sm dark:shadow-gray-800/50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Code2 className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold text-dark dark:text-white">Mazhar.</span>
          </div>

          <div className="flex items-center space-x-4">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  className="text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent font-medium transition-colors duration-300 cursor-pointer"
                >
                  {item.label}
                </Link>
              ))}
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:scale-110 transition-transform duration-300"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <a
                href="/resume/Mazhar_Resume.pdf"
                download="Mazhar_Resume.pdf"
                className="bg-primary text-white px-6 py-2 rounded-lg font-medium hover:bg-secondary transition-all duration-300 flex items-center space-x-2"
                onClick={() => {
          // Track download
                  if (window.gtag) {
                    window.gtag('event', 'download', {
                      event_category: 'Resume',
                      event_label: 'Resume Download - Navbar',
                      value: 1
                    });
                  }
                  console.log('Resume download clicked from navbar');
                }}
              >
                <FileText size={18} />
                <span>Download Resume</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} className="dark:text-white" /> : <Menu size={24} className="dark:text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 dark:bg-dark-card/95 rounded-lg p-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                className="block py-2 text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-accent font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            <div className="flex items-center justify-between pt-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
              
              <a
                href="/Mazhar_Resume.pdf"
                download="Mazhar_Resume_DataAnalyst.pdf"
                className="bg-primary dark:bg-accent text-white px-6 py-2 rounded-lg font-medium hover:bg-secondary dark:hover:bg-primary transition-all duration-300 flex items-center space-x-2"
              >
                <FileText size={18} />
                <span>Resume</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
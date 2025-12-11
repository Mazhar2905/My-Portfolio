import React from 'react';
import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2 mb-4">
              <Code2 className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">Mazhar</span>
            </div>
            <p className="text-gray-400">
              Aspiring Data Analyst & Computer Science Engineer
            </p>
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-4">
              Always open to new opportunities and collaborations
            </p>
            <div className="flex space-x-6 text-gray-400">
              <a href="#home" className="hover:text-white transition-colors">Home</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#projects" className="hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="mb-4 md:mb-0">
              © {currentYear} Mazhar. All rights reserved.
            </p>
            <p className="flex items-center justify-center">
              Made with 
              <Heart className="h-4 w-4 text-red-500 mx-1" />
              using React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
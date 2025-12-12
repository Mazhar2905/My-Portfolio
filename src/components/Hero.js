import React from 'react';
import { ChevronRight, Linkedin, Github, Download } from 'lucide-react';
import Typewriter from 'typewriter-effect';

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-20 md:pt-40 md:pb-28 dark:bg-gradient-to-b dark:from-dark-bg dark:to-gray-900">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 text-primary rounded-full mb-6">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse"></span>
              <span className="font-medium">Final Year Computer Science Student</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-dark dark:text-white mb-6">
              Hi, I'm <span className="text-primary">Mazhar</span>
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6 h-12">
              <Typewriter
                options={{
                  strings: ['Aspiring Data Analyst', 'Python Developer', 'SQL Expert', 'Power BI Specialist', 'Data Storyteller'],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
               }}
              />
            </h2>
            
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8 leading-relaxed">
              Transforming complex data into actionable insights. Currently pursuing my 
              Computer Science degree while mastering Python, SQL, and data visualization 
              tools to solve real-world problems.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a
                href="#projects"
                className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-secondary transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore My Work</span>
                <ChevronRight size={20} />
              </a>
              
              <a
                href="#contact"
                className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Contact Me</span>
              </a>
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="https://www.linkedin.com/in/sayyedmazhar/" 
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-gray-500 hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/Mazhar2905"
                 target="_blank"
                 rel="noopener noreferrer"
                 className="text-gray-500 hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a 
                href="/resume/Mazhar_Resume_DataAnalyst.pdf"
                download="Mazhar_Resume_DataAnalyst.pdf"
                className="flex items-center space-x-2 text-gray-600 hover:text-primary"
                onClick={() => {
              // Track download
                  if (window.gtag) {
                    window.gtag('event', 'download', {
                                    event_category: 'Resume',
                      event_label: 'Resume Download - Hero',
                      value: 1
                    });
                  }
                  console.log('Resume download clicked from hero');
                }}
              >
                <Download size={18} />
                <span>Download CV</span>
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-64 h-64 md:w-80 md:h-80 mx-auto relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full opacity-10 animate-pulse"></div>
              <div className="absolute inset-4 bg-gradient-to-br from-blue-100 to-white rounded-full flex items-center justify-center shadow-2xl">
                <div className="text-center p-8">
                  <div className="text-6xl font-bold text-primary mb-4">DA</div>
                  <div className="text-gray-700 font-medium">Data Analytics</div>
                  <div className="text-sm text-gray-500 mt-2">Python | SQL | Power BI</div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-white dark:bg-dark-card rounded-2xl shadow-lg dark:shadow-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">CS</div>
                  <div className="text-xs text-gray-500">Engineer</div>
                </div>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white dark:bg-dark-card rounded-2xl shadow-lg dark:shadow-gray-800 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">2024</div>
                  <div className="text-xs text-gray-500">Graduating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
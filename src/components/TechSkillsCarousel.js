import React from 'react';
import { 
  SiPython, SiMysql, SiMicrosoftpowerbi, SiMicrosoft,
  SiPandas, SiNumpy, SiJupyter, SiGit, SiGithub,
  SiVisualstudiocode, SiTableau, SiGooglecloud
} from 'react-icons/si';
import { FaChartBar, FaDatabase, FaFileExcel } from 'react-icons/fa';

const TechSkillsCarousel = () => {
  const skills = [
    { name: 'Python', icon: <SiPython />, color: 'text-blue-500', level: 'Advanced' },
    { name: 'SQL', icon: <SiMysql />, color: 'text-blue-600', level: 'Advanced' },
    { name: 'Power BI', icon: <SiMicrosoftpowerbi />, color: 'text-yellow-500', level: 'Intermediate' },
    { name: 'Excel', icon: <FaFileExcel />, color: 'text-green-600', level: 'Advanced' },
    { name: 'Pandas', icon: <SiPandas />, color: 'text-purple-500', level: 'Intermediate' },
    { name: 'NumPy', icon: <SiNumpy />, color: 'text-blue-400', level: 'Intermediate' },
    { name: 'Data Analysis', icon: <FaChartBar />, color: 'text-teal-500', level: 'Advanced' },
    { name: 'Jupyter', icon: <SiJupyter />, color: 'text-orange-500', level: 'Intermediate' },
    { name: 'Git', icon: <SiGit />, color: 'text-red-500', level: 'Intermediate' },
    { name: 'GitHub', icon: <SiGithub />, color: 'text-gray-800', level: 'Advanced' },
    { name: 'VS Code', icon: <SiVisualstudiocode />, color: 'text-blue-400', level: 'Advanced' },
    { name: 'Database', icon: <FaDatabase />, color: 'text-indigo-500', level: 'Intermediate' },
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
            Technical Expertise
          </h2>
          <div className="w-24 h-1 bg-primary dark:bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Tools & technologies I use to transform data into actionable insights
          </p>
        </div>

        {/* Desktop: Enhanced Carousel */}
        <div className="hidden md:block">
          <div className="relative overflow-hidden py-8">
            {/* Gradient overlays */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-dark-bg to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-dark-bg to-transparent z-10"></div>
            
            {/* Infinite Carousel */}
            <div className="flex space-x-8 animate-scroll-left">
              {[...skills, ...skills].map((skill, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-40 h-40 bg-white dark:bg-dark-card rounded-2xl shadow-lg dark:shadow-gray-800/50 hover:shadow-xl dark:hover:shadow-gray-800 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center p-6 group"
                >
                  <div className={`text-5xl ${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <span className="font-bold text-gray-800 dark:text-white text-center mb-2">
                    {skill.name}
                  </span>
                  <span className="text-sm px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Grid Layout */}
        <div className="md:hidden">
          <div className="grid grid-cols-3 gap-4">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-dark-card rounded-xl shadow-md dark:shadow-gray-800/50 hover:shadow-lg dark:hover:shadow-gray-800 transition-all duration-300 p-4 flex flex-col items-center justify-center"
              >
                <div className={`text-3xl ${skill.color} mb-2`}>
                  {skill.icon}
                </div>
                <span className="font-semibold text-gray-800 dark:text-white text-sm text-center">
                  {skill.name}
                </span>
                <span className="text-xs mt-1 px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 p-8 rounded-2xl border border-gray-200 dark:border-gray-700">
          <h3 className="text-2xl font-bold text-dark dark:text-white mb-6 text-center">
            Currently Expanding My Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: 'Advanced DAX', color: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' },
              { name: 'Tableau', color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' },
              { name: 'Machine Learning', color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300' },
              { name: 'Big Data', color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-800 dark:text-orange-300' },
              { name: 'Cloud Analytics', color: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-800 dark:text-cyan-300' },
            ].map((item, index) => (
              <div 
                key={index} 
                className={`flex items-center px-4 py-2 rounded-full shadow-sm ${item.color} transition-transform duration-300 hover:scale-105`}
              >
                <div className="w-2 h-2 bg-current rounded-full mr-2 animate-pulse"></div>
                <span className="font-medium">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scroll-left 50s linear infinite;
          display: flex;
          width: max-content;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-left {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default TechSkillsCarousel;
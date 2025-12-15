import React from 'react';
import { 
  SiPython, 
  SiMysql, 
  SiMicrosoft,  
  SiPandas, 
  SiNumpy, 
  SiJupyter, 
  SiGit, 
  SiGithub,
  SiTableau
} from 'react-icons/si';
import { FaChartBar, FaDatabase, FaFileExcel, FaChartLine, FaCode } from 'react-icons/fa';

const TechSkillsCarousel = () => {
  const skills = [
    { name: 'Python', icon: <SiPython />, color: 'text-blue-500' },
    { name: 'SQL', icon: <SiMysql />, color: 'text-blue-600' },
    { name: 'Power BI', icon: <FaChartLine />, color: 'text-yellow-500' }, 
    { name: 'Excel', icon: <FaFileExcel />, color: 'text-green-600' },
    { name: 'Pandas', icon: <SiPandas />, color: 'text-purple-500' },
    { name: 'NumPy', icon: <SiNumpy />, color: 'text-blue-400' },
    { name: 'Data Analysis', icon: <FaChartBar />, color: 'text-teal-500' },
    { name: 'Jupyter', icon: <SiJupyter />, color: 'text-orange-500' },
    { name: 'Git', icon: <SiGit />, color: 'text-red-500' },
    { name: 'GitHub', icon: <SiGithub />, color: 'text-gray-800' },
    { name: 'VS Code', icon: <FaCode />, color: 'text-blue-400' },
    { name: 'Database', icon: <FaDatabase />, color: 'text-indigo-500' },
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

        {/* Desktop: Clean Carousel */}
        <div className="hidden md:block">
          <div className="relative overflow-hidden py-8">
            {/* Gradient overlays */}
            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white dark:from-dark-bg to-transparent z-10"></div>
            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white dark:from-dark-bg to-transparent z-10"></div>
            
            {/* Infinite Carousel - Clean Design */}
            <div className="flex space-x-6 animate-scroll-left">
              {[...skills, ...skills].map((skill, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-36 h-36 bg-white dark:bg-dark-card rounded-2xl shadow-lg dark:shadow-gray-800/50 hover:shadow-xl dark:hover:shadow-gray-800 transition-all duration-500 hover:-translate-y-2 flex flex-col items-center justify-center p-6 group border border-gray-100 dark:border-gray-800"
                >
                  <div className={`text-6xl ${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {skill.icon}
                  </div>
                  <span className="font-bold text-gray-800 dark:text-white text-center text-lg">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Clean Grid Layout */}
        <div className="md:hidden">
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-dark-card rounded-2xl shadow-md dark:shadow-gray-800/50 hover:shadow-lg dark:hover:shadow-gray-800 transition-all duration-300 p-6 flex flex-col items-center justify-center border border-gray-100 dark:border-gray-800"
              >
                <div className={`text-5xl ${skill.color} mb-3`}>
                  {skill.icon}
                </div>
                <span className="font-semibold text-gray-800 dark:text-white text-sm text-center">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Clean Learning Section */}
        <div className="mt-16 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-dark-card">
          <h3 className="text-2xl font-bold text-dark dark:text-white mb-8 text-center">
            Currently Expanding My Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Advanced DAX',
              'Tableau',
              'Machine Learning', 
              'Big Data',
              'Cloud Analytics',
              'Data Storytelling',
              'Statistical Modeling'
            ].map((skill, index) => (
              <div 
                key={index} 
                className="px-5 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 font-medium transition-all duration-300 hover:bg-primary hover:text-white dark:hover:bg-accent"
              >
                {skill}
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
          animation: scroll-left 40s linear infinite;
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
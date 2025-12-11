import React from 'react';
import { Database, BarChart3, Code, Server, PieChart, FileSpreadsheet } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: 'Programming & Analytics',
      items: [
        { name: 'Python', level: 85, icon: <Code className="h-5 w-5" />, color: 'bg-blue-500' },
        { name: 'SQL', level: 80, icon: <Database className="h-5 w-5" />, color: 'bg-green-500' },
      ]
    },
    {
      category: 'Data Visualization',
      items: [
        { name: 'Power BI', level: 70, icon: <BarChart3 className="h-5 w-5" />, color: 'bg-yellow-500' },
        { name: 'Excel', level: 85, icon: <FileSpreadsheet className="h-5 w-5" />, color: 'bg-green-600' },
      ]
    },
    {
      category: 'Tools & Concepts',
      items: [
        { name: 'Data Cleaning', level: 80, icon: <Server className="h-5 w-5" />, color: 'bg-purple-500' },
        { name: 'Statistical Analysis', level: 75, icon: <PieChart className="h-5 w-5" />, color: 'bg-red-500' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tools and technologies I'm proficient in for data analysis and visualization
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
              <h3 className="text-xl font-bold text-dark mb-8 pb-4 border-b border-gray-100">
                {skillGroup.category}
              </h3>
              
              <div className="space-y-6">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-3">
                        <div className={`w-10 h-10 rounded-lg ${skill.color} flex items-center justify-center text-white`}>
                          {skill.icon}
                        </div>
                        <span className="font-medium text-gray-800">{skill.name}</span>
                      </div>
                      <span className="font-bold text-gray-700">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className={`h-2.5 rounded-full ${skill.color}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-2">Currently Learning</h3>
              <p className="text-blue-100">
                Advanced SQL Window Functions • Power BI DAX • Python Pandas Mastery
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="bg-white/20 px-4 py-2 rounded-lg font-medium">R Programming</span>
              <span className="bg-white/20 px-4 py-2 rounded-lg font-medium">Tableau</span>
              <span className="bg-white/20 px-4 py-2 rounded-lg font-medium">Machine Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
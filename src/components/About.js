import React from 'react';
import { GraduationCap, Target, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A passionate Computer Science student with a keen interest in extracting 
            meaningful insights from data.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <GraduationCap className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-dark mb-4">Education</h3>
            <p className="text-gray-600 mb-4">
              Final year B.Tech in Computer Science Engineering
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Sparkles className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Specializing in Data Analytics and Machine Learning</span>
              </li>
              <li className="flex items-start">
                <Sparkles className="h-5 w-5 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Consistent academic performer with strong fundamentals</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Target className="h-7 w-7 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-dark mb-4">Career Goal</h3>
            <p className="text-gray-600 mb-4">
              To become a proficient Data Analyst who can drive data-informed decisions
            </p>
            <ul className="space-y-2">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                <span className="text-gray-600">Bridge the gap between raw data and business strategy</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                <span className="text-gray-600">Master predictive analytics and data storytelling</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                <span className="text-gray-600">Contribute to data-driven product development</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300">
            <h3 className="text-xl font-bold text-dark mb-6">Current Focus</h3>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">Building Projects</span>
                  <span className="text-primary font-bold">70%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '70%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">Learning Power BI</span>
                  <span className="text-primary font-bold">85%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '85%' }}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-gray-700 font-medium">Advanced SQL</span>
                  <span className="text-primary font-bold">75%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '75%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
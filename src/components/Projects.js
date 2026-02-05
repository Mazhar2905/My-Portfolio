import React from 'react';
import { Calendar, Clock, Zap, Plus, AlertTriangle } from 'lucide-react';
import ElectronicsSalesDashboard from '../components/ElectronicsSalesDashboard';
import IndiaRoadAccidentAnalysis from '../components/IndiaRoadAccidentAnalysis';

const Projects = () => {
  const upcomingProjects = [
    
    {
      id: 2,
      title: "Airline Performance Analysis",
      description: "Analyzing airline operational data to optimize routes, reduce delays, and improve customer satisfaction metrics.",
      technologies: ["Python", "SQL", "Tableau", "Statistical Analysis"],
      duration: "4 weeks",
      status: "Planning",
      progress: 10,
      details: "Focus on flight delay patterns, cancellation causes, baggage handling efficiency, and customer complaint analysis for operational improvements."
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white dark:bg-dark-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark dark:text-white mb-4">
            Projects & Portfolio
          </h2>
          <div className="w-24 h-1 bg-primary dark:bg-accent mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-lg">
            Real-world data analytics projects with measurable business impact
          </p>
        </div>

        {/* Featured Project - Electronics Sales Dashboard */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full mb-4">
              <Zap className="h-4 w-4 mr-2" />
              <span className="font-medium">Featured Project</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-dark dark:text-white">
              Real-World Analytics Showcase
            </h3>
          </div>
          <ElectronicsSalesDashboard />
        </div>

        {/* Featured Project - Road Accident Analysis Dashboard */}
        <div className="mb-20">
          <div className="text-center mb-10">
            <div className="inline-flex items-center px-4 py-2 bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 rounded-full mb-4">
              <AlertTriangle className="h-4 w-4 mr-2" />
              <span className="font-medium">Public Safety Analytics</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-dark dark:text-white">
              Road Safety & Policy Analysis
            </h3>
          </div>
          <IndiaRoadAccidentAnalysis />
        </div>

        {/* Projects in Progress */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            Projects in Development
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Currently building these data analytics projects to expand my portfolio
          </p>
    
          <div className="grid md:grid-cols-2 gap-8">
            {upcomingProjects.map((project) => (
              <div 
                key={project.id} 
                className="bg-gradient-to-br from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                {/* Project Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-2">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        project.status === "In Progress" 
                          ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                          : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                      }`}>
                        {project.status}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400 text-sm">
                        {project.duration}
                      </span>
                    </div>
                  </div>
                  
                  {/* Progress Circle (Optional) */}
                  <div className="relative w-12 h-12">
                    <svg className="w-full h-full" viewBox="0 0 36 36">
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke="#E5E7EB"
                        strokeWidth="3"
                      />
                      <path
                        d="M18 2.0845
                          a 15.9155 15.9155 0 0 1 0 31.831
                          a 15.9155 15.9155 0 0 1 0 -31.831"
                        fill="none"
                        stroke={project.status === "In Progress" ? "#10B981" : "#3B82F6"}
                        strokeWidth="3"
                        strokeDasharray={`${project.progress}, 100`}
                      />
                    </svg>
                    <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">
                      {project.progress}%
                    </span>
                  </div>
                </div>
                
                {/* Project Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="mb-6">
                  <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                    Technologies:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* View Details Button */}
                <button className="w-full py-3 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors font-medium">
                  View Details +
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Call to Action */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900/50 dark:to-dark-card/50 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 text-center">
          <div className="w-20 h-20 bg-white dark:bg-dark-card rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <div className="text-3xl font-bold text-primary dark:text-accent">+</div>
          </div>
          <h3 className="text-2xl font-bold text-dark dark:text-white mb-4">More Projects Coming Soon!</h3>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-8">
            I'm actively working on building my data analytics portfolio. Check back soon to see completed 
            projects with real datasets, detailed case studies, and actionable business insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-primary dark:bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-secondary dark:hover:bg-primary transition-all duration-300"
            >
              Suggest a Project Idea
            </a>
            <a
              href="mailto:sayyedmazhar.2905@gmail.com"
              className="border-2 border-primary dark:border-accent text-primary dark:text-accent px-8 py-3 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300"
            >
              Collaborate with Me
            </a>
          </div>
        </div>

        {/* GitHub Activity Section */}
        <div className="mt-16 bg-white dark:bg-dark-card rounded-2xl p-8 border border-gray-200 dark:border-gray-800">
          <h3 className="text-2xl font-bold text-dark dark:text-white mb-6 text-center">
            Development Activity
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">🚀</div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Regular Code Updates</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Daily commits to portfolio and project repositories
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">📈</div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Skill Development</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Continuously learning and implementing new data tools
              </p>
            </div>
            <div className="text-center p-6 bg-gray-50 dark:bg-gray-800/50 rounded-xl">
              <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">🔄</div>
              <h4 className="font-bold text-gray-900 dark:text-white mb-2">Project Iteration</h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Constantly improving existing projects with new features
              </p>
            </div>
          </div>
          <div className="text-center mt-6">
            <a 
              href="https://github.com/Mazhar2905" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary dark:text-accent hover:underline"
            >
              View my GitHub profile for latest activity →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
import React from 'react';
import { Calendar, Clock, Zap, Plus } from 'lucide-react';
import ElectronicsSalesDashboard from './ElectronicsSalesDashboard';

const Projects = () => {
  const upcomingProjects = [
    {
      title: "Customer Segmentation Model",
      description: "Developing a clustering model to segment customers based on purchasing patterns and demographics.",
      tech: ["Python", "Scikit-learn", "SQL", "Pandas"],
      status: "In Progress",
      timeline: "4 weeks",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "E-commerce Analytics Pipeline",
      description: "Building automated data pipeline for e-commerce transaction analysis and reporting.",
      tech: ["Python", "Airflow", "PostgreSQL", "FastAPI"],
      status: "Planning",
      timeline: "6 weeks",
      color: "from-purple-500 to-pink-500"
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

        {/* Projects in Progress */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-dark dark:text-white mb-4">
              Projects in Development
            </h3>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Currently building these data analytics projects to expand my portfolio
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {upcomingProjects.map((project, index) => (
              <div key={index} className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r rounded-2xl opacity-20 group-hover:opacity-30 transition duration-300"
                     style={{background: `linear-gradient(to right, var(--tw-gradient-stops))`}}>
                </div>
                
                <div className="relative bg-white dark:bg-dark-card p-8 rounded-2xl shadow-sm group-hover:shadow-md dark:group-hover:shadow-gray-800/50 transition-shadow duration-300 border border-gray-100 dark:border-gray-800">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center mb-6`}>
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-dark dark:text-white">{project.title}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status === 'In Progress' ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300' :
                      project.status === 'Planning' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300' :
                      'bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-6">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 px-3 py-1 rounded-lg text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between pt-6 border-t border-gray-100 dark:border-gray-800">
                    <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        {project.timeline}
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {project.status}
                      </div>
                    </div>
                    <button className="text-primary dark:text-accent hover:text-secondary dark:hover:text-primary font-medium flex items-center space-x-2">
                      <span>View Details</span>
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
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
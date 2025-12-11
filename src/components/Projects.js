import React from 'react';
import { Calendar, Clock, Zap, Plus } from 'lucide-react';

const Projects = () => {
  const upcomingProjects = [
    {
      title: "Sales Dashboard Analysis",
      description: "Building an interactive Power BI dashboard to analyze sales trends and customer behavior.",
      tech: ["Power BI", "SQL", "Excel"],
      status: "Planning",
      timeline: "2 weeks",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "E-commerce Data Cleaning Pipeline",
      description: "Creating a Python pipeline for cleaning and preprocessing e-commerce transaction data.",
      tech: ["Python", "Pandas", "NumPy"],
      status: "In Progress",
      timeline: "3 weeks",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Customer Segmentation Model",
      description: "Developing a clustering model to segment customers based on purchasing patterns.",
      tech: ["Python", "Scikit-learn", "SQL"],
      status: "Research",
      timeline: "4 weeks",
      color: "from-green-500 to-emerald-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Projects in Progress</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Currently working on these data analytics projects to build my portfolio
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {upcomingProjects.map((project, index) => (
            <div key={index} className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r rounded-2xl opacity-20 group-hover:opacity-30 transition duration-300"
                   style={{background: `linear-gradient(to right, var(--tw-gradient-stops))`}}>
              </div>
              
              <div className="relative bg-white p-8 rounded-2xl shadow-sm group-hover:shadow-md transition-shadow duration-300 border border-gray-100">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${project.color} flex items-center justify-center mb-6`}>
                  <Zap className="h-6 w-6 text-white" />
                </div>
                
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-dark">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    project.status === 'In Progress' ? 'bg-green-100 text-green-800' :
                    project.status === 'Planning' ? 'bg-blue-100 text-blue-800' :
                    'bg-purple-100 text-purple-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-6">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex items-center justify-between pt-6 border-t border-gray-100">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      {project.timeline}
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      {project.status}
                    </div>
                  </div>
                  <button className="text-primary hover:text-secondary font-medium flex items-center space-x-2">
                    <span>View Details</span>
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to Action */}
        <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-8 rounded-2xl border border-gray-200 text-center">
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-sm">
            <div className="text-3xl font-bold text-primary">?</div>
          </div>
          <h3 className="text-2xl font-bold text-dark mb-4">More Projects Coming Soon!</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            I'm actively working on building my project portfolio. Check back soon to see completed 
            data analytics projects with real datasets and actionable insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-secondary transition-all duration-300"
            >
              Suggest a Project Idea
            </a>
            <a
              href="mailto:mazhar@example.com"
              className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-all duration-300"
            >
              Collaborate with Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
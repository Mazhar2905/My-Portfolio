// In your TechSkillsCarousel.js component
const skills = [
  { name: 'React', icon: '⚛️', category: 'Frontend' },
  { name: 'JavaScript', icon: '🟨', category: 'Language' },
  { name: 'HTML5', icon: '📄', category: 'Frontend' },
  { name: 'CSS3', icon: '🎨', category: 'Frontend' },
  { name: 'Power BI', icon: '📊', category: 'Data Visualization' },
  { name: 'SQL', icon: '🗃️', category: 'Database' },
  { name: 'Python', icon: '🐍', category: 'Language' },
  { name: 'Git', icon: '📦', category: 'Tools' },
  { name: 'Tailwind CSS', icon: '🌀', category: 'Styling' },
  { name: 'Excel', icon: '📈', category: 'Data Analysis' },
];

function TechSkillsGrid() {
  return (
    <div className="py-12">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Technical Skills
      </h2>
      
      {/* Skills Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div 
            key={index}
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="text-3xl mb-3">{skill.icon}</div>
            <h3 className="font-bold text-gray-900 dark:text-white">{skill.name}</h3>
            <span className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              {skill.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
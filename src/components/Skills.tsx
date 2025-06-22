import React from 'react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 90, color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript", level: 85, color: "from-blue-600 to-blue-400" },
        { name: "Next.js", level: 80, color: "from-gray-700 to-gray-500" },
        { name: "Tailwind CSS", level: 88, color: "from-teal-500 to-cyan-500" },
        { name: "Three.js", level: 75, color: "from-purple-500 to-blue-500" }
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85, color: "from-green-600 to-green-400" },
        { name: "Express.js", level: 82, color: "from-gray-600 to-gray-400" },
        { name: "Python", level: 80, color: "from-yellow-500 to-yellow-400" },
        { name: "REST APIs", level: 85, color: "from-blue-500 to-indigo-500" },
        { name: "C++", level: 75, color: "from-blue-700 to-blue-500" }
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", level: 85, color: "from-green-700 to-green-500" },
        { name: "PostgreSQL", level: 80, color: "from-blue-700 to-blue-500" },
        { name: "Mongoose", level: 82, color: "from-green-600 to-green-400" },
        { name: "SQL", level: 78, color: "from-orange-500 to-yellow-500" },
        { name: "Supabase", level: 75, color: "from-emerald-600 to-emerald-400" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-slate-800/50 rounded-2xl p-8 hover:bg-slate-800 transition-colors duration-300">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="group">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div
                        className={`h-2 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-white mb-8">Other Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
                          {[
                "HTML", "JavaScript", "C++", "Redux Toolkit", "Git", "VS Code", "Postman", 
                "Neon", "Webpack", "Vite", "GitHub", "Figma", "Vercel", "AWS", "Docker", "Render"
              ].map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-slate-800 text-gray-300 rounded-full hover:bg-purple-600 hover:text-white transition-colors duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
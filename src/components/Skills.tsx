import React from 'react';
import { 
  Code, 
  Database, 
  Palette, 
  Video, 
  Monitor, 
  Smartphone,
  Cloud,
  GitBranch,
  Cpu,
  Globe
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      skills: ['HTML', 'CSS', 'JavaScript', 'Python', 'PHP', 'TypeScript', 'Java', 'C++', 'C#']
    },
    {
      title: 'Web Development',
      icon: Globe,
      skills: ['React', 'Node.js', 'Express.js', 'Next.js', 'Vue.js', 'Angular', 'Tailwind CSS', 'Bootstrap']
    },
    {
      title: 'Database & Backend',
      icon: Database,
      skills: ['SQL', 'MySQL', 'PostgreSQL', 'MongoDB', 'Firebase', 'REST APIs', 'GraphQL']
    },
    {
      title: 'Design & Multimedia',
      icon: Palette,
      skills: ['Photoshop', 'After Effects', 'Blender', 'Illustrator', 'Figma', 'Premiere Pro']
    },
    {
      title: 'Development Tools',
      icon: GitBranch,
      skills: ['Git', 'GitHub', 'VS Code', 'Docker', 'Linux', 'Terminal', 'Postman']
    },
    {
      title: 'Mobile & Hardware',
      icon: Smartphone,
      skills: ['Arduino', 'React Native', 'Flutter', 'Android Development', 'IoT', 'Raspberry Pi']
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS', 'Google Cloud', 'Azure', 'Netlify', 'Vercel', 'CI/CD', 'DevOps']
    },
    {
      title: 'Software Engineering',
      icon: Cpu,
      skills: ['Data Structures', 'Algorithms', 'OOP', 'System Design', 'Testing', 'Agile']
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Skills & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Expertise</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full" />
          <p className="text-white/80 mt-6 max-w-2xl mx-auto">
            A comprehensive skill set spanning creative design, software development, and emerging technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div 
                key={category.title}
                className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg p-3 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill}
                      className="bg-white/5 rounded-lg px-3 py-2 text-white/90 text-sm hover:bg-white/10 transition-colors duration-200"
                      style={{
                        animationDelay: `${categoryIndex * 100 + skillIndex * 50}ms`
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Continuous Learning</h3>
            <p className="text-white/80 leading-relaxed">
              As an aspiring software engineer, I'm constantly expanding my skill set and staying up-to-date 
              with the latest technologies and industry best practices. I believe in lifelong learning and 
              adapting to the ever-evolving tech landscape.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
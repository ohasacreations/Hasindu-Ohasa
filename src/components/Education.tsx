import React from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const education = [
    {
      year: '2024',
      title: 'CS50 Computer Science',
      subtitle: 'Understanding Technology',
      institution: 'Harvard University',
      location: 'Cambridge, MA (Online)',
      type: 'Certificate',
      description: 'Comprehensive introduction to computer science and programming',
      status: 'Completed'
    },
    {
      year: '2025',
      title: 'Advanced Level Examination (A/L)',
      subtitle: 'Engineering Technology Stream',
      institution: 'Rahula College',
      location: 'Sri Lanka',
      type: 'Secondary Education',
      description: 'Specialized in Engineering Technology with focus on mathematics and applied sciences',
      status: 'In Progress'
    },
    {
      year: '2023',
      title: 'Diploma in Advanced Digital Photography',
      subtitle: 'Professional Photography Certification',
      institution: 'Alison Learning Platform',
      location: 'Online',
      type: 'Diploma',
      description: 'Advanced techniques in digital photography, editing, and visual storytelling',
      status: 'Completed'
    },
    {
      year: '2022-23',
      title: 'Ordinary Level Examination (O/L)',
      subtitle: 'General Education Certificate',
      institution: 'MR/Puhulwella National School',
      location: 'Sri Lanka',
      type: 'Secondary Education',
      description: 'Foundation education with excellent results across multiple subjects',
      status: 'Completed'
    }
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Education & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Learning</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full" />
          <p className="text-white/80 mt-6 max-w-2xl mx-auto">
            A journey of continuous learning and academic excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-400 to-indigo-400 hidden md:block" />
            
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full border-4 border-black hidden md:block" />
                  
                  <div className="md:ml-16">
                    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 group">
                      <div className="flex flex-wrap items-start justify-between mb-4">
                        <div className="flex items-center space-x-3 mb-2">
                          <div className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 rounded-lg p-3">
                            <GraduationCap className="w-6 h-6 text-purple-400" />
                          </div>
                          <div>
                            <h3 className="text-xl font-semibold text-white group-hover:text-purple-400 transition-colors duration-300">
                              {item.title}
                            </h3>
                            {item.subtitle && (
                              <p className="text-white/80 text-sm">{item.subtitle}</p>
                            )}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-4 text-sm">
                          <div className="flex items-center space-x-1 text-white/60">
                            <Calendar className="w-4 h-4" />
                            <span>{item.year}</span>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs ${
                            item.status === 'Completed' 
                              ? 'bg-green-500/20 text-green-400 border border-green-400/30'
                              : 'bg-yellow-500/20 text-yellow-400 border border-yellow-400/30'
                          }`}>
                            {item.status}
                          </span>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 text-white/80">
                          <MapPin className="w-4 h-4 text-indigo-400" />
                          <span className="font-medium">{item.institution}</span>
                          <span className="text-white/60">•</span>
                          <span className="text-white/60">{item.location}</span>
                        </div>

                        <p className="text-white/80 leading-relaxed">
                          {item.description}
                        </p>

                        <div className="flex items-center space-x-2">
                          <Award className="w-4 h-4 text-purple-400" />
                          <span className="text-purple-400 font-medium text-sm">{item.type}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Learning Philosophy */}
        <div className="mt-16 text-center">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-semibold text-white mb-4">Learning Philosophy</h3>
            <p className="text-white/80 leading-relaxed">
              I believe in continuous learning and staying curious about new technologies and methodologies. 
              My educational journey reflects a commitment to both formal education and self-directed learning, 
              always seeking to expand my knowledge and skills in creative and technical fields.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
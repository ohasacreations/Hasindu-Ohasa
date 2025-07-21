import React from 'react';
import { Building, Heart, Code2 } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-purple-900/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-slide-in-left">
            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:scale-105 transition-all duration-500 group">
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-purple-500/20 rounded-lg p-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Heart className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Passion for Creation</h3>
                  <p className="text-white/80 leading-relaxed">
                    I'm a passionate creative and tech enthusiast with a strong interest in photography, 
                    videography, graphic design, and software development. Every project I work on is 
                    driven by purpose and precision.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:scale-105 transition-all duration-500 group animate-slide-in-left delay-200">
              <div className="flex items-start space-x-4 mb-4">
                <div className="bg-indigo-500/20 rounded-lg p-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  <Building className="w-6 h-6 text-indigo-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Droplens Studios Co.</h3>
                  <p className="text-white/80 leading-relaxed">
                    As the founder of Droplens Studios Co., I focus on delivering high-quality visual 
                    content with purpose and precision. We specialize in creating compelling digital 
                    experiences that make an impact.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/15 hover:scale-105 transition-all duration-500 group animate-slide-in-right">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-violet-500/20 rounded-lg p-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                <Code2 className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">Technical Expertise</h3>
              </div>
            </div>
            
            <p className="text-white/80 leading-relaxed mb-6">
              Alongside my creative work, I'm actively involved in web and software development. 
              My current skill set includes HTML, CSS, Python, SQL, PHP, and Arduino, which I use 
              to build dynamic, user-friendly digital solutions.
            </p>

            <p className="text-white/80 leading-relaxed">
              I'm currently pursuing my path to becoming a software engineer, constantly learning 
              new technologies and expanding my skill set to stay at the forefront of innovation.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              {['Web Development', 'Software Engineering', 'Digital Design', 'Content Creation'].map((skill) => (
                <span 
                  key={skill}
                  className="bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-400/30 rounded-full px-4 py-2 text-white/90 text-sm hover:scale-110 hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-indigo-500/30 transition-all duration-300 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

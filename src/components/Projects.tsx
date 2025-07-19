import React from 'react';
import { ExternalLink, Play, Award, Calendar } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Matara | 4K Cinematic Travel Film',
      category: 'Videography',
      image: '/images/matara.jpg',
      description: 'This 4K cinematic travel film explores the coastal charm and vibrant life of Matara, Sri Lanka. Through carefully composed visuals, smooth camera movements, and natural soundscapes, the film captures the essence of the city—from serene beaches and historic landmarks to everyday street moments.',
      tags: ['4K Video', 'Cinematography', 'Travel', 'Sri Lanka'],
      featured: true
    },
    {
      title: 'The Elephant and the Explorer',
      category: 'Digital Art',
      image: '/images/project-1.jpg',
      description: 'This digital artwork shows an explorer meeting an elephant in a calm, natural setting. It highlights the connection between humans and nature, using soft lighting and detailed visuals to create a peaceful and thoughtful mood.',
      tags: ['Photoshop', 'Digital Art', 'Manipulation', 'Nature']
    },
    {
      title: 'Christmas Microworld',
      category: 'Digital Art',
      image: '/images/project-2.jpg',
      description: 'Christmas Microworld is a creative digital artwork that captures the magic of the holiday season in miniature form. This manipulation portrays a tiny Christmas scene using advanced Photoshop techniques.',
      tags: ['Photoshop', 'Manipulation', 'Christmas', 'Miniature']
    },
    {
      title: 'Santa\'s Winter Ride',
      category: 'Game Development',
      image: '/images/santa.png',
      description: 'Recognized as one of the top 10 best projects at the Java Institute for Advanced Technologies web programming workshop. A festive 2D game developed using HTML, CSS, and JavaScript.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Game', 'Award'],
      award: 'Top 10 Best Projects'
    },
    {
      title: 'SL ARMY ATTACK',
      category: 'Game Development',
      image: '/images/game.png',
      description: 'An immersive first-person shooter game inspired by the 2009 Sri Lankan war. Created using FPS Creator at age 14, showcasing early talent in game design and development with realistic environments and engaging gameplay mechanics.',
      tags: ['FPS Creator', 'Game Design', '3D', 'Historical']
    },
    {
      title: 'Sri Lankan Ambulance Mod for GTA V',
      category: 'Game Modding',
      image: '/images/ambulance.jpg',
      description: 'A custom mod bringing a realistic Sri Lankan ambulance into GTA V. Features accurate textures, authentic vehicle details, and lighting patterns that reflect real-life emergency services in Sri Lanka.',
      tags: ['GTA V', 'Modding', '3D Modeling', 'Sri Lanka']
    }
  ];

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-purple-900/20" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-400 mx-auto rounded-full" />
          <p className="text-white/80 mt-6 max-w-2xl mx-auto">
            A showcase of creative projects spanning digital art, game development, and multimedia content
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title}
              className={`bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl overflow-hidden hover:bg-white/15 transition-all duration-300 group ${
                project.featured ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = `https://images.pexels.com/photos/147411/italy-mountains-dawn-daybreak-147411.jpeg?auto=compress&cs=tinysrgb&w=800`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-full px-3 py-1 text-white/90 text-sm">
                    {project.category}
                  </span>
                </div>

                {/* Award Badge */}
                {project.award && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-yellow-500/20 backdrop-blur-lg border border-yellow-400/30 rounded-full px-3 py-1 flex items-center space-x-1">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-100 text-sm">Award</span>
                    </div>
                  </div>
                )}

                {/* Play Button for Videos */}
                {project.category === 'Videography' && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="bg-white/10 border border-white/20 rounded-full px-3 py-1 text-white/80 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Award Info */}
                {project.award && (
                  <div className="bg-yellow-500/10 border border-yellow-400/20 rounded-lg p-3 mb-4">
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-yellow-400" />
                      <span className="text-yellow-100 text-sm font-medium">{project.award}</span>
                    </div>
                  </div>
                )}

                {/* Action Button */}
                <button className="w-full bg-gradient-to-r from-purple-500/20 to-indigo-500/20 border border-purple-400/30 rounded-lg px-4 py-2 text-white/90 hover:bg-gradient-to-r hover:from-purple-500/30 hover:to-indigo-500/30 transition-all duration-300 flex items-center justify-center space-x-2">
                  <span>View Project</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Demo Projects Section */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Additional Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'Portfolio Website Template', tech: 'React + TypeScript' },
              { name: 'E-commerce Dashboard', tech: 'Next.js + Tailwind' },
              { name: 'Mobile App UI Kit', tech: 'React Native' }
            ].map((demo, index) => (
              <div key={demo.name} className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <h4 className="text-white font-medium mb-2">{demo.name}</h4>
                <p className="text-white/60 text-sm mb-3">{demo.tech}</p>
                <span className="text-purple-400 text-sm">Coming Soon</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

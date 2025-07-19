import React from 'react';
import { ArrowDown, Code, Camera, Palette } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-indigo-900/20 to-violet-900/20" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="container mx-auto px-6 text-center relative z-10">
        {/* Profile Image Placeholder */}
        <div className="mb-8">
          <div className="w-48 h-48 mx-auto bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center">
            <img 
              src="/images/profile.jpg" 
              alt="Hasindu Ohasa" 
              className="w-full h-full rounded-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                target.nextElementSibling?.classList.remove('hidden');
              }}
            />
            <div className="hidden text-white/60 text-6xl font-light">HO</div>
          </div>
        </div>

        {/* Main Content */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
          Hasindu <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Ohasa</span>
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 flex items-center space-x-2">
            <Code className="w-5 h-5 text-purple-400" />
            <span className="text-white/90">Developer</span>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 flex items-center space-x-2">
            <Palette className="w-5 h-5 text-indigo-400" />
            <span className="text-white/90">Designer</span>
          </div>
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-6 py-3 flex items-center space-x-2">
            <Camera className="w-5 h-5 text-violet-400" />
            <span className="text-white/90">Creator</span>
          </div>
        </div>

        <p className="text-xl text-white/80 max-w-3xl mx-auto mb-12 leading-relaxed">
          Passionate creative and tech enthusiast specializing in photography, videography, graphic design, 
          and software development. Founder of <span className="text-purple-400 font-semibold">Droplens Studios Co.</span>
        </p>

        <button 
          onClick={scrollToAbout}
          className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-full px-8 py-4 text-white hover:bg-white/20 transition-all duration-300 flex items-center space-x-2 mx-auto"
        >
          <span>Explore My Work</span>
          <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
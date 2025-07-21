import React, { useEffect, useState } from 'react';
import { Code, Palette, Camera } from 'lucide-react';

const LoadingScreen = ({ onLoadingComplete }: { onLoadingComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState(0);

  const loadingTexts = [
    "Initializing creativity...",
    "Loading portfolio...",
    "Preparing experiences...",
    "Almost ready..."
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    const textInterval = setInterval(() => {
      setCurrentText(prev => (prev + 1) % loadingTexts.length);
    }, 800);

    return () => {
      clearInterval(interval);
      clearInterval(textInterval);
    };
  }, [onLoadingComplete]);

  return (
    <div className="fixed inset-0 z-50 bg-gradient-to-br from-black via-purple-950 to-indigo-950 flex items-center justify-center">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-500/10 rounded-full blur-2xl animate-ping" />
      </div>

      {/* Loading Content */}
      <div className="relative z-10 text-center">
        {/* Logo Animation */}
        <div className="mb-8">
          <div className="relative w-32 h-32 mx-auto">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full animate-spin-slow" />
            <div className="absolute inset-2 bg-white/5 backdrop-blur-lg border border-white/10 rounded-full flex items-center justify-center">
              <div className="text-white/80 text-4xl font-bold animate-pulse">HO</div>
            </div>
            
            {/* Floating Icons */}
            <div className="absolute -top-4 -right-4 bg-purple-500/20 backdrop-blur-lg border border-purple-400/30 rounded-full p-3 animate-bounce">
              <Code className="w-6 h-6 text-purple-400" />
            </div>
            <div className="absolute -bottom-4 -left-4 bg-indigo-500/20 backdrop-blur-lg border border-indigo-400/30 rounded-full p-3 animate-bounce delay-300">
              <Palette className="w-6 h-6 text-indigo-400" />
            </div>
            <div className="absolute top-1/2 -left-8 transform -translate-y-1/2 bg-violet-500/20 backdrop-blur-lg border border-violet-400/30 rounded-full p-3 animate-bounce delay-700">
              <Camera className="w-6 h-6 text-violet-400" />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <h1 className="text-3xl font-bold text-white mb-2 animate-fade-in">
          Hasindu <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">Ohasa</span>
        </h1>
        
        <p className="text-white/80 mb-8 animate-fade-in-delay">
          {loadingTexts[currentText]}
        </p>

        {/* Progress Bar */}
        <div className="w-80 mx-auto">
          <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-full h-2 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 text-white/60 text-sm">{progress}%</div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

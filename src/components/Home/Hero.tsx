import React, { useState, useEffect } from 'react';
import { ArrowRight, Bird, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.useRef<HTMLAudioElement>(null);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Create audio visualization bars
  const bars = Array.from({ length: 50 }, (_, i) => (
    <div 
      key={i}
      className="bar" 
      style={{ 
        left: `${i * 8}px`,
        animationDuration: `${Math.floor(Math.random() * 300) + 200}ms`
      }}
    />
  ));

  return (
    <section className="relative overflow-hidden min-h-[90vh] bg-gradient-to-b from-primary-900 via-primary-800 to-secondary-900 flex items-center">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.pexels.com/photos/1834429/pexels-photo-1834429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')] bg-cover bg-center"></div>
      
      {/* Flying birds animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/20"
            initial={{ 
              x: Math.random() < 0.5 ? -100 : window.innerWidth + 100, 
              y: Math.random() * window.innerHeight,
              scale: 0.5 + Math.random() * 0.5
            }}
            animate={{ 
              x: Math.random() < 0.5 ? window.innerWidth + 100 : -100, 
              y: Math.random() * window.innerHeight 
            }}
            transition={{ 
              repeat: Infinity,
              repeatType: "reverse", 
              duration: 15 + Math.random() * 20,
              ease: "linear"
            }}
          >
            <Bird size={30 + Math.random() * 20} />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white leading-tight mb-6">
              Discover the World Through
              <span className="text-secondary-300"> Bird Songs</span>
            </h1>
            <p className="text-lg text-primary-100 mb-8 max-w-xl">
              Explore 10 interactive modes to learn, play, and connect with birds from around the world. From migration patterns to baby calls, bird brain trivia to conservation stories.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/explore" className="bg-secondary-500 hover:bg-secondary-600 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center">
                Start Exploring
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <button 
                onClick={toggleAudio}
                className="border border-primary-300 hover:bg-primary-800/50 text-white font-medium py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
              >
                <Volume2 size={18} className="mr-2" />
                {isPlaying ? 'Pause Bird Sounds' : 'Play Bird Sounds'}
              </button>
            </div>

            {/* Sound waves visualization for audio */}
            <div className={`sound-wave mt-8 ${isPlaying ? 'opacity-100' : 'opacity-50'}`}>
              {bars}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:block"
          >
            <img 
              src="https://images.pexels.com/photos/326900/pexels-photo-326900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Bird singing" 
              className="rounded-xl shadow-2xl w-full object-cover aspect-[4/3]"
            />
          </motion.div>
        </div>
      </div>

      <audio ref={audioRef} loop>
        <source src="https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC143073-American%20Robin%20song%205-5-09.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </section>
  );
};

export default Hero;
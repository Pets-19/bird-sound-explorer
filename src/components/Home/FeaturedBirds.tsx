import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { birds } from '../../data/birds';
import { Volume2, ExternalLink } from 'lucide-react';

const FeaturedBirds: React.FC = () => {
  const [playingId, setPlayingId] = useState<string | null>(null);
  const featuredBirds = birds.slice(0, 4);

  const toggleSound = (birdId: string) => {
    if (playingId === birdId) {
      setPlayingId(null);
      // Stop audio
    } else {
      setPlayingId(birdId);
      // Play audio
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            Featured Birds
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Listen to some of the most fascinating bird calls from around the world.
            Click on any bird to hear its unique sound.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredBirds.map((bird, index) => (
            <motion.div 
              key={bird.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={bird.imageUrl} 
                  alt={bird.name} 
                  className="w-full h-full object-cover transform transition-transform hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                  <h3 className="font-bold text-lg text-white">{bird.name}</h3>
                  <p className="text-sm text-gray-200 italic">{bird.scientificName}</p>
                </div>
              </div>
              <div className="p-5">
                <p className="text-sm text-gray-600 mb-4 line-clamp-3">{bird.description}</p>
                <div className="flex justify-between items-center">
                  <button 
                    onClick={() => toggleSound(bird.id)}
                    className={`flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${
                      playingId === bird.id
                        ? 'bg-primary-500 text-white'
                        : 'bg-primary-50 text-primary-600 hover:bg-primary-100'
                    }`}
                  >
                    <Volume2 size={16} className="mr-1" />
                    {playingId === bird.id ? 'Playing' : 'Listen'}
                  </button>
                  <a 
                    href={`/birds/${bird.id}`}
                    className="text-sm text-gray-500 hover:text-primary-600 transition-colors flex items-center"
                  >
                    Learn more
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="/birds"
            className="inline-flex items-center px-5 py-3 text-sm font-medium text-primary-700 bg-primary-50 rounded-lg hover:bg-primary-100 transition-colors"
          >
            Explore all birds
            <ExternalLink size={14} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedBirds;
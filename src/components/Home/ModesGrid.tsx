import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Map, 
  Smartphone, 
  Moon, 
  Brain, 
  Music, 
  Globe, 
  Archive, 
  Users, 
  Palette, 
  HeartHandshake 
} from 'lucide-react';
import { ModeInfo } from '../../types';

const modesList: ModeInfo[] = [
  {
    id: 'migration',
    title: 'Migration Mode',
    description: 'Visualize bird migration patterns and seasonal calls',
    iconName: 'Map',
    color: 'bg-blue-500',
    enabled: true
  },
  {
    id: 'field-companion',
    title: 'Field Companion',
    description: 'Record and identify bird sounds in the wild',
    iconName: 'Smartphone',
    color: 'bg-green-500',
    enabled: true
  },
  {
    id: 'baby-vs-adult',
    title: 'Baby vs Adult',
    description: 'Compare baby and adult bird calls and test your knowledge',
    iconName: 'Moon',
    color: 'bg-purple-500',
    enabled: true
  },
  {
    id: 'brain-trivia',
    title: 'Bird Brain Trivia',
    description: 'Learn fascinating facts about bird intelligence and memory',
    iconName: 'Brain',
    color: 'bg-yellow-500',
    enabled: true
  },
  {
    id: 'composer',
    title: 'Song Composer',
    description: 'Create custom soundscapes with bird calls',
    iconName: 'Music',
    color: 'bg-red-500',
    enabled: true
  },
  {
    id: 'native-exotic',
    title: 'Native vs Exotic',
    description: 'Discover birds from your location vs distant places',
    iconName: 'Globe',
    color: 'bg-teal-500',
    enabled: true
  },
  {
    id: 'lost-sounds',
    title: 'Lost Sounds',
    description: 'Experience calls from endangered and extinct birds',
    iconName: 'Archive',
    color: 'bg-orange-500',
    enabled: true
  },
  {
    id: 'kids-trail',
    title: 'Kids Learning Trail',
    description: 'A fun journey for children to become Bird Sound Rangers',
    iconName: 'HeartHandshake',
    color: 'bg-pink-500',
    enabled: true
  },
  {
    id: 'artist',
    title: 'Artist Mode',
    description: 'Draw and create while listening to inspirational bird songs',
    iconName: 'Palette',
    color: 'bg-indigo-500',
    enabled: true
  },
  {
    id: 'multiplayer',
    title: 'Sound Match Game',
    description: 'Challenge friends to identify bird calls in real time',
    iconName: 'Users',
    color: 'bg-cyan-500',
    enabled: true
  }
];

const getIcon = (iconName: string, className: string) => {
  switch (iconName) {
    case 'Map': return <Map className={className} />;
    case 'Smartphone': return <Smartphone className={className} />;
    case 'Moon': return <Moon className={className} />;
    case 'Brain': return <Brain className={className} />;
    case 'Music': return <Music className={className} />;
    case 'Globe': return <Globe className={className} />;
    case 'Archive': return <Archive className={className} />;
    case 'HeartHandshake': return <HeartHandshake className={className} />;
    case 'Palette': return <Palette className={className} />;
    case 'Users': return <Users className={className} />;
    default: return <Map className={className} />;
  }
};

const ModesGrid: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">
            10 Interactive Modes to Explore
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover birds through multiple perspectives with our unique
            interactive modes designed for learning, playing, and connecting with nature.
          </p>
        </div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {modesList.map((mode) => (
            <motion.div 
              key={mode.id}
              variants={item}
              className="mode-card bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-xl"
            >
              <Link to={`/explore/${mode.id}`} className="block h-full">
                <div className={`h-2 ${mode.color}`}></div>
                <div className="p-6">
                  <div className={`card-icon inline-flex rounded-full p-3 ${mode.color} bg-opacity-10 text-opacity-80 mb-4`}>
                    {getIcon(mode.iconName, `h-6 w-6 ${mode.color.replace('bg-', 'text-')}`)}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gray-800">{mode.title}</h3>
                  <p className="text-gray-600 text-sm">{mode.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ModesGrid;
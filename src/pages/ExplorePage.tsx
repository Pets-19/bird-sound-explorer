import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
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
  HeartHandshake,
  BookOpen
} from 'lucide-react';
import { ModeInfo } from '../types';

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

const ExplorePage: React.FC = () => {
  return (
    <Layout>
      <div className="py-12 bg-gradient-to-b from-primary-900 to-primary-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Explore Bird Sounds</h1>
            <p className="text-xl text-primary-100 mb-8">Choose from our 10 interactive modes to discover the fascinating world of bird sounds in different ways.</p>
          </div>
        </div>
      </div>

      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {modesList.map((mode, index) => (
              <motion.div
                key={mode.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden h-full"
              >
                <div className={`h-2 ${mode.color}`}></div>
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-start justify-between mb-4">
                    <div className={`inline-flex rounded-full p-3 ${mode.color} bg-opacity-10`}>
                      {getIcon(mode.iconName, `h-6 w-6 ${mode.color.replace('bg-', 'text-')}`)}
                    </div>
                    {!mode.enabled && (
                      <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">Coming Soon</span>
                    )}
                  </div>
                  
                  <h2 className="text-xl font-bold text-gray-800 mb-2">{mode.title}</h2>
                  <p className="text-gray-600 mb-6 flex-grow">{mode.description}</p>
                  
                  <div className="mt-auto">
                    {mode.enabled ? (
                      <Link
                        to={`/explore/${mode.id}`}
                        className={`block w-full text-center py-3 rounded-lg transition-colors ${mode.color.replace('bg-', 'bg-')} text-white hover:bg-opacity-90`}
                      >
                        Start Exploring
                      </Link>
                    ) : (
                      <button 
                        disabled
                        className="block w-full text-center py-3 rounded-lg bg-gray-200 text-gray-500 cursor-not-allowed"
                      >
                        Coming Soon
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bird Encyclopedia Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Bird Encyclopedia</h2>
            <p className="text-gray-600">
              Browse our comprehensive collection of bird species, complete with detailed information,
              high-quality images, and authentic sound recordings.
            </p>
          </div>
          
          <div className="flex justify-center">
            <Link
              to="/birds"
              className="flex items-center bg-primary-500 hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
            >
              <BookOpen className="mr-2" size={20} />
              Explore Bird Encyclopedia
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ExplorePage;
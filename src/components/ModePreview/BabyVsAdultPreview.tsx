import React, { useState } from 'react';
import { Moon, Volume2, VolumeX } from 'lucide-react';
import { Link } from 'react-router-dom';
import { birds } from '../../data/birds';

const BabyVsAdultPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'baby' | 'adult'>('adult');
  const [isPlaying, setIsPlaying] = useState(false);
  
  // Filter birds that have both adult and baby sounds
  const birdsWithBabySounds = birds.filter(bird => bird.babySoundUrl);
  const previewBird = birdsWithBabySounds[0];

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
    // Actual audio play/pause would be implemented here
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl">
      <div className="h-2 bg-purple-500"></div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="inline-flex rounded-full p-3 bg-purple-500 bg-opacity-10 text-opacity-80">
            <Moon className="h-6 w-6 text-purple-500" />
          </div>
          <Link to="/explore/baby-vs-adult" className="text-sm font-medium text-purple-500 hover:text-purple-600">
            View Full Mode
          </Link>
        </div>
        
        <h3 className="font-bold text-xl mb-3 text-gray-800">Baby vs. Adult Calls</h3>
        <p className="text-gray-600 mb-6">
          Compare the distinct sounds of baby birds with their adult counterparts, and test your knowledge with fun quizzes.
        </p>
        
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Featured Bird: {previewBird.name}</h4>
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="flex mb-4">
              <button
                onClick={() => setActiveTab('adult')}
                className={`flex-1 py-2 text-center text-sm rounded-l-md transition-colors ${
                  activeTab === 'adult'
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Adult Call
              </button>
              <button
                onClick={() => setActiveTab('baby')}
                className={`flex-1 py-2 text-center text-sm rounded-r-md transition-colors ${
                  activeTab === 'baby'
                    ? 'bg-purple-500 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                Baby Call
              </button>
            </div>
            
            <div className="flex items-center space-x-4 mb-3">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-purple-100 flex-shrink-0">
                <img
                  src={previewBird.imageUrl}
                  alt={previewBird.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h5 className="font-medium text-gray-800">{activeTab === 'adult' ? 'Adult' : 'Baby'} {previewBird.name}</h5>
                <p className="text-xs text-gray-500 italic">{previewBird.scientificName}</p>
                <p className="text-sm text-gray-600 mt-1">
                  {activeTab === 'adult' 
                    ? 'Mature call pattern with full vocal range.' 
                    : 'Higher pitched, often more rapid begging calls.'}
                </p>
              </div>
            </div>
            
            <div className="bg-purple-50 rounded-md p-3 flex justify-between items-center">
              <div className="flex-1">
                <div className="h-10 flex items-center">
                  {/* Simple audio waveform visualization */}
                  {[...Array(20)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 mx-0.5 bg-purple-400 rounded-full"
                      style={{
                        height: `${Math.random() * 100}%`,
                        opacity: isPlaying ? 1 : 0.5
                      }}
                    ></div>
                  ))}
                </div>
              </div>
              <button 
                onClick={togglePlay}
                className="ml-3 flex items-center justify-center w-10 h-10 rounded-full bg-purple-500 text-white"
              >
                {isPlaying ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </div>
        </div>
        
        <Link 
          to="/explore/baby-vs-adult" 
          className="block w-full bg-purple-500 hover:bg-purple-600 text-white text-center py-2 rounded-lg transition-colors"
        >
          Compare More Bird Calls
        </Link>
      </div>
    </div>
  );
};

export default BabyVsAdultPreview;
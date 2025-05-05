import React from 'react';
import { Archive, Volume2, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { extinctBirds } from '../../data/birds';

const LostSoundsPreview: React.FC = () => {
  const previewBird = extinctBirds[0];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl">
      <div className="h-2 bg-orange-500"></div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="inline-flex rounded-full p-3 bg-orange-500 bg-opacity-10 text-opacity-80">
            <Archive className="h-6 w-6 text-orange-500" />
          </div>
          <Link to="/explore/lost-sounds" className="text-sm font-medium text-orange-500 hover:text-orange-600">
            View Full Mode
          </Link>
        </div>
        
        <h3 className="font-bold text-xl mb-3 text-gray-800">Lost Sounds Archive</h3>
        <p className="text-gray-600 mb-6">
          Discover calls from endangered and extinct birds, and learn about conservation efforts to preserve bird diversity.
        </p>
        
        <div className="mb-6">
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-sm font-medium text-gray-700">Featured Lost Bird:</h4>
            <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">Extinct</span>
          </div>
          
          <div className="bg-gray-100 rounded-lg p-4 border-l-4 border-orange-500">
            <div className="flex items-center mb-3">
              <img 
                src={previewBird.imageUrl} 
                alt={previewBird.name}
                className="w-16 h-16 object-cover rounded-lg mr-4" 
              />
              <div>
                <h5 className="font-bold text-gray-800">{previewBird.name}</h5>
                <p className="text-xs text-gray-500 italic">{previewBird.scientificName}</p>
              </div>
            </div>
            
            <p className="text-sm text-gray-700 mb-4">
              {previewBird.description}
            </p>
            
            <div className="text-xs text-gray-500 mb-3">
              <span className="font-medium">Extinction Date:</span> 1662
            </div>
            
            <div className="flex justify-between items-center">
              {previewBird.soundUrl ? (
                <button className="flex items-center space-x-1 px-3 py-1.5 bg-orange-50 text-orange-600 rounded-md text-xs">
                  <Volume2 size={12} />
                  <span>Play Reconstructed Sound</span>
                </button>
              ) : (
                <span className="text-xs text-gray-500">No sound recording available</span>
              )}
              
              <button className="flex items-center space-x-1 px-3 py-1.5 bg-red-50 text-red-600 rounded-md text-xs">
                <Heart size={12} />
                <span>Conservation Info</span>
              </button>
            </div>
          </div>
        </div>
        
        <Link 
          to="/explore/lost-sounds" 
          className="block w-full bg-orange-500 hover:bg-orange-600 text-white text-center py-2 rounded-lg transition-colors"
        >
          Explore Lost Bird Sounds
        </Link>
      </div>
    </div>
  );
};

export default LostSoundsPreview;
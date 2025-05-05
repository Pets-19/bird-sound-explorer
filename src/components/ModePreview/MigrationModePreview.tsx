import React, { useState } from 'react';
import { Map, Calendar, Volume2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { birds } from '../../data/birds';

const seasons = ['Winter', 'Spring', 'Summer', 'Fall'];

const MigrationModePreview: React.FC = () => {
  const [selectedSeason, setSelectedSeason] = useState('Spring');
  
  const migratoryBirds = birds.filter(bird => bird.isMigratory && bird.migrationPaths);
  const previewBird = migratoryBirds[0];

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl">
      <div className="h-2 bg-blue-500"></div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div className="inline-flex rounded-full p-3 bg-blue-500 bg-opacity-10 text-opacity-80">
            <Map className="h-6 w-6 text-blue-500" />
          </div>
          <Link to="/explore/migration" className="text-sm font-medium text-blue-500 hover:text-blue-600">
            View Full Mode
          </Link>
        </div>
        
        <h3 className="font-bold text-xl mb-3 text-gray-800">Migration Mode</h3>
        <p className="text-gray-600 mb-6">
          Track bird migration paths and listen to seasonal calls as birds travel across the globe.
        </p>
        
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-700 mb-2">Featured Migration: {previewBird.name}</h4>
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="flex flex-wrap justify-between items-center mb-4">
              <p className="text-xs text-gray-500 italic">{previewBird.scientificName}</p>
              <div className="flex space-x-1">
                {seasons.map(season => (
                  <button
                    key={season}
                    onClick={() => setSelectedSeason(season)}
                    className={`px-3 py-1 text-xs rounded-full transition-colors ${
                      selectedSeason === season 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                  >
                    {season}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="relative h-48 mb-3 bg-blue-50 rounded-lg flex items-center justify-center">
              <img
                src="https://images.pexels.com/photos/158471/ibis-bird-red-animals-158471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Bird migration map"
                className="w-full h-full object-cover rounded-lg opacity-30"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-blue-800 text-center font-medium">
                  Migration Map Visualization
                  <span className="block text-sm font-normal mt-1">
                    {selectedSeason} migration pattern for {previewBird.name}
                  </span>
                </p>
              </div>
            </div>
            
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Calendar size={14} className="text-gray-500" />
                <span className="text-xs text-gray-500">Seasonal call for {selectedSeason}</span>
              </div>
              <button className="flex items-center space-x-1 px-2 py-1 bg-blue-50 text-blue-600 rounded-md text-xs">
                <Volume2 size={12} />
                <span>Play Sound</span>
              </button>
            </div>
          </div>
        </div>
        
        <Link 
          to="/explore/migration" 
          className="block w-full bg-blue-500 hover:bg-blue-600 text-white text-center py-2 rounded-lg transition-colors"
        >
          Explore Migration Patterns
        </Link>
      </div>
    </div>
  );
};

export default MigrationModePreview;
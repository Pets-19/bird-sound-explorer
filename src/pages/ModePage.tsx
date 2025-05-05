import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { ModeInfo } from '../types';
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

// Placeholder components for each mode
const MigrationMode = () => (
  <div className="py-12">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-display font-bold text-gray-900 mb-6">Migration Mode</h1>
      <p className="text-gray-600 mb-8">
        Track bird migration patterns and listen to seasonal calls as birds travel across the globe.
      </p>
      <div className="bg-blue-50 p-8 rounded-xl text-center">
        <Map className="h-16 w-16 text-blue-500 mx-auto mb-4" />
        <p className="text-blue-700">Migration Mode content would be displayed here.</p>
        <p className="text-blue-600 mt-4">
          This mode visualizes migratory bird paths across seasons and lets users play seasonal calls.
        </p>
      </div>
    </div>
  </div>
);

const FieldCompanionMode = () => (
  <div className="py-12">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-display font-bold text-gray-900 mb-6">Field Companion Mode</h1>
      <p className="text-gray-600 mb-8">
        Record and identify bird sounds in the wild with our mobile-focused tools.
      </p>
      <div className="bg-green-50 p-8 rounded-xl text-center">
        <Smartphone className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <p className="text-green-700">Field Companion Mode content would be displayed here.</p>
        <p className="text-green-600 mt-4">
          This mobile-first mode helps bird watchers record and identify birds in the wild.
        </p>
      </div>
    </div>
  </div>
);

const BabyVsAdultMode = () => (
  <div className="py-12">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-display font-bold text-gray-900 mb-6">Baby vs Adult Calls</h1>
      <p className="text-gray-600 mb-8">
        Compare baby and adult bird calls and test your knowledge with our interactive quiz.
      </p>
      <div className="bg-purple-50 p-8 rounded-xl text-center">
        <Moon className="h-16 w-16 text-purple-500 mx-auto mb-4" />
        <p className="text-purple-700">Baby vs Adult Mode content would be displayed here.</p>
        <p className="text-purple-600 mt-4">
          This mode lets you compare baby (chick) and adult bird sounds side by side.
        </p>
      </div>
    </div>
  </div>
);

const BirdBrainTriviaMode = () => (
  <div className="py-12">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-display font-bold text-gray-900 mb-6">Bird Brain Trivia</h1>
      <p className="text-gray-600 mb-8">
        Learn fascinating facts about bird intelligence and test your knowledge.
      </p>
      <div className="bg-yellow-50 p-8 rounded-xl text-center">
        <Brain className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
        <p className="text-yellow-700">Bird Brain Trivia Mode content would be displayed here.</p>
        <p className="text-yellow-600 mt-4">
          This mode features cognitive fun facts and memory games about bird intelligence.
        </p>
      </div>
    </div>
  </div>
);

const ComposerMode = () => (
  <div className="py-12">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-display font-bold text-gray-900 mb-6">Bird Song Composer</h1>
      <p className="text-gray-600 mb-8">
        Create your own custom soundscapes by layering bird calls from around the world.
      </p>
      <div className="bg-red-50 p-8 rounded-xl text-center">
        <Music className="h-16 w-16 text-red-500 mx-auto mb-4" />
        <p className="text-red-700">Bird Song Composer Mode content would be displayed here.</p>
        <p className="text-red-600 mt-4">
          This mode allows you to create custom soundscapes by layering bird sounds.
        </p>
      </div>
    </div>
  </div>
);

const NativeExoticMode = () => (
  <div className="py-12">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-display font-bold text-gray-900 mb-6">Native vs Exotic</h1>
      <p className="text-gray-600 mb-8">
        Compare bird calls from your local region with exotic species from around the world.
      </p>
      <div className="bg-teal-50 p-8 rounded-xl text-center">
        <Globe className="h-16 w-16 text-teal-500 mx-auto mb-4" />
        <p className="text-teal-700">Native vs Exotic Mode content would be displayed here.</p>
        <p className="text-teal-600 mt-4">
          This mode detects your location and compares local vs. exotic bird calls.
        </p>
      </div>
    </div>
  </div>
);

const LostSoundsMode = () => (
  <div className="py-12">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-display font-bold text-gray-900 mb-6">Lost Sounds Archive</h1>
      <p className="text-gray-600 mb-8">
        Experience calls from endangered and extinct birds, and learn about conservation efforts.
      </p>
      <div className="bg-orange-50 p-8 rounded-xl text-center">
        <Archive className="h-16 w-16 text-orange-500 mx-auto mb-4" />
        <p className="text-orange-700">Lost Sounds Archive Mode content would be displayed here.</p>
        <p className="text-orange-600 mt-4">
          This mode features endangered or extinct bird calls with emotional backstories.
        </p>
      </div>
    </div>
  </div>
);

const KidsTrailMode = () => (
  <div className="py-12">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-display font-bold text-gray-900 mb-6">Kids Learning Trail</h1>
      <p className="text-gray-600 mb-8">
        A fun, visual journey for children to learn about bird sounds and become Bird Sound Rangers.
      </p>
      <div className="bg-pink-50 p-8 rounded-xl text-center">
        <HeartHandshake className="h-16 w-16 text-pink-500 mx-auto mb-4" />
        <p className="text-pink-700">Kids Learning Trail Mode content would be displayed here.</p>
        <p className="text-pink-600 mt-4">
          This simplified, gamified mode is designed specifically for children.
        </p>
      </div>
    </div>
  </div>
);

const ArtistMode = () => (
  <div className="py-12">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-display font-bold text-gray-900 mb-6">Artist Mode</h1>
      <p className="text-gray-600 mb-8">
        Draw and create while listening to inspirational bird songs from around the world.
      </p>
      <div className="bg-indigo-50 p-8 rounded-xl text-center">
        <Palette className="h-16 w-16 text-indigo-500 mx-auto mb-4" />
        <p className="text-indigo-700">Artist Mode content would be displayed here.</p>
        <p className="text-indigo-600 mt-4">
          This mode includes a canvas where you can draw while listening to bird sounds.
        </p>
      </div>
    </div>
  </div>
);

const MultiplayerMode = () => (
  <div className="py-12">
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-display font-bold text-gray-900 mb-6">Sound Match Game</h1>
      <p className="text-gray-600 mb-8">
        Challenge friends to a multiplayer game of identifying bird calls in real time.
      </p>
      <div className="bg-cyan-50 p-8 rounded-xl text-center">
        <Users className="h-16 w-16 text-cyan-500 mx-auto mb-4" />
        <p className="text-cyan-700">Sound Match Game Mode content would be displayed here.</p>
        <p className="text-cyan-600 mt-4">
          This multiplayer mode lets you guess bird sounds in real time against friends.
        </p>
      </div>
    </div>
  </div>
);

// Map of mode IDs to their respective components
const modeComponents: { [key: string]: React.FC } = {
  'migration': MigrationMode,
  'field-companion': FieldCompanionMode,
  'baby-vs-adult': BabyVsAdultMode,
  'brain-trivia': BirdBrainTriviaMode,
  'composer': ComposerMode,
  'native-exotic': NativeExoticMode,
  'lost-sounds': LostSoundsMode,
  'kids-trail': KidsTrailMode,
  'artist': ArtistMode,
  'multiplayer': MultiplayerMode
};

const ModePage: React.FC = () => {
  const { modeId } = useParams<{ modeId: string }>();
  
  // If modeId doesn't exist or isn't valid, redirect to explore page
  if (!modeId || !modeComponents[modeId]) {
    return <Navigate to="/explore" replace />;
  }
  
  // Render the appropriate component based on the mode ID
  const ModeComponent = modeComponents[modeId];
  
  return (
    <Layout>
      <ModeComponent />
    </Layout>
  );
};

export default ModePage;
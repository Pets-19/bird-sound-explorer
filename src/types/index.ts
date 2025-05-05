export interface Bird {
  id: string;
  name: string;
  scientificName: string;
  description: string;
  imageUrl: string;
  regions: string[];
  soundUrl: string;
  babySoundUrl?: string;
  endangeredStatus?: 'Least Concern' | 'Near Threatened' | 'Vulnerable' | 'Endangered' | 'Critically Endangered' | 'Extinct';
  funFacts: string[];
  migrationPaths?: MigrationPath[];
  isMigratory: boolean;
}

export interface MigrationPath {
  season: 'Spring' | 'Summer' | 'Fall' | 'Winter';
  coordinates: [number, number][]; // [longitude, latitude]
  soundUrl: string;
}

export interface Region {
  id: string;
  name: string;
  bounds: [[number, number], [number, number]]; // [[southwest], [northeast]]
}

export interface UserProgress {
  completedQuizzes: string[];
  discoveredBirds: string[];
  badges: string[];
  score: number;
}

export interface GameScore {
  userId: string;
  username: string;
  score: number;
  date: Date;
}

export interface BirdSoundComposition {
  id: string;
  name: string;
  createdBy: string;
  layers: {
    birdId: string;
    volume: number;
    pan: number;
  }[];
}

export interface UserArtwork {
  id: string;
  title: string;
  createdBy: string;
  imageUrl: string;
  associatedBirdId: string;
  likes: number;
  featured: boolean;
}

export type AppMode = 
  | 'migration'
  | 'field-companion'
  | 'baby-vs-adult'
  | 'brain-trivia'
  | 'composer'
  | 'native-exotic'
  | 'lost-sounds'
  | 'kids-trail'
  | 'artist'
  | 'multiplayer';

export interface ModeInfo {
  id: AppMode;
  title: string;
  description: string;
  iconName: string;
  color: string;
  enabled: boolean;
}
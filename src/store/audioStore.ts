import { create } from 'zustand';

interface AudioState {
  isPlaying: boolean;
  currentSoundId: string | null;
  volume: number;
  isMuted: boolean;
  actions: {
    playSoundById: (id: string) => void;
    stopSound: () => void;
    toggleMute: () => void;
    setVolume: (volume: number) => void;
  };
}

export const useAudioStore = create<AudioState>((set) => ({
  isPlaying: false,
  currentSoundId: null,
  volume: 0.8,
  isMuted: false,
  actions: {
    playSoundById: (id: string) => 
      set((state) => ({ 
        isPlaying: true, 
        currentSoundId: id 
      })),
    stopSound: () => 
      set(() => ({ 
        isPlaying: false, 
        currentSoundId: null 
      })),
    toggleMute: () =>
      set((state) => ({ 
        isMuted: !state.isMuted 
      })),
    setVolume: (volume: number) => 
      set(() => ({ volume })),
  }
}));
import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, SkipBack, SkipForward } from 'lucide-react';

interface AudioPlayerProps {
  src: string;
  title?: string;
  artist?: string;
  autoplay?: boolean;
  showControls?: boolean;
  onEnded?: () => void;
  className?: string;
}

const AudioPlayer: React.FC<AudioPlayerProps> = ({
  src,
  title,
  artist,
  autoplay = false,
  showControls = true,
  onEnded,
  className = ""
}) => {
  const [isPlaying, setIsPlaying] = useState(autoplay);
  const [isMuted, setIsMuted] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [volume, setVolume] = useState(0.8);
  
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    
    const setAudioData = () => {
      setDuration(audio.duration);
    };
    
    const setAudioTime = () => {
      setCurrentTime(audio.currentTime);
    };
    
    const handleEnded = () => {
      setIsPlaying(false);
      if (onEnded) onEnded();
    };
    
    // Events
    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('ended', handleEnded);
    
    // Cleanup
    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [onEnded]);

  // Update audio src
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (autoplay) {
        audioRef.current.play().catch(err => console.log('Autoplay prevented:', err));
      }
    }
  }, [src, autoplay]);
  
  // Play/pause control
  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };
  
  // Mute control
  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };
  
  // Volume control
  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
    }
  };
  
  // Progress bar
  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = parseFloat(e.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };
  
  // Format time
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };
  
  return (
    <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
      <audio ref={audioRef} preload="metadata">
        <source src={src} type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
      
      {(title || artist) && (
        <div className="mb-3">
          {title && <h3 className="font-medium text-gray-900">{title}</h3>}
          {artist && <p className="text-sm text-gray-500">{artist}</p>}
        </div>
      )}
      
      {showControls && (
        <>
          <div className="flex justify-between items-center mb-2">
            <span className="text-xs text-gray-500">{formatTime(currentTime)}</span>
            <span className="text-xs text-gray-500">{formatTime(duration)}</span>
          </div>
          
          <div className="mb-4">
            <input
              type="range"
              min="0"
              max={duration || 0}
              value={currentTime}
              step="0.01"
              onChange={handleProgressChange}
              className="w-full h-2 bg-gray-200 rounded-full appearance-none cursor-pointer"
              style={{
                background: `linear-gradient(to right, #3C996A ${(currentTime / duration) * 100}%, #e5e7eb ${(currentTime / duration) * 100}%)`
              }}
            />
          </div>
          
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <button 
                className="p-2 rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors"
                onClick={() => { if (audioRef.current) audioRef.current.currentTime = 0; }}
              >
                <SkipBack size={18} />
              </button>
              
              <button 
                className="p-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                onClick={togglePlay}
              >
                {isPlaying ? <Pause size={18} /> : <Play size={18} />}
              </button>
              
              <button 
                className="p-2 rounded-full bg-primary-50 text-primary-600 hover:bg-primary-100 transition-colors"
                onClick={() => { if (audioRef.current && duration) audioRef.current.currentTime = duration; }}
              >
                <SkipForward size={18} />
              </button>
            </div>
            
            <div className="flex items-center space-x-2">
              <button
                className="p-2 rounded-full text-gray-500 hover:text-primary-600 transition-colors"
                onClick={toggleMute}
              >
                {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
              
              <input
                type="range"
                min="0"
                max="1"
                step="0.01"
                value={volume}
                onChange={handleVolumeChange}
                className="w-20 h-1 bg-gray-200 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, #3C996A ${volume * 100}%, #e5e7eb ${volume * 100}%)`
                }}
              />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AudioPlayer;
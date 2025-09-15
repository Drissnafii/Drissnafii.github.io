import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAudio } from '../../hooks/useAudio';

interface MusicPlayerProps {
  className?: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ className = "" }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Using a placeholder audio file - replace with actual background music
  const audio = useAudio('/audio/background-music.mp3', {
    volume: 0.3,
    loop: true,
    autoplay: false
  });

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const volume = parseFloat(e.target.value);
    audio.setVolume(volume);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={`fixed bottom-6 right-6 z-50 ${className}`}
    >
      <div className="relative">
        {/* Expanded Controls */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="absolute bottom-16 right-0 bg-white/90 backdrop-blur-md rounded-2xl p-4 shadow-xl border border-gray-200 min-w-[280px]"
            >
              {/* Track Info */}
              <div className="mb-4">
                <h3 className="text-sm font-semibold text-primary">Background Music</h3>
                <p className="text-xs text-secondary">LQVE Experience</p>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-xs text-secondary mb-1">
                  <span>{formatTime(audio.currentTime)}</span>
                  <span>{formatTime(audio.duration)}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <motion.div
                    className="bg-accent h-1 rounded-full"
                    style={{
                      width: `${(audio.currentTime / audio.duration) * 100 || 0}%`
                    }}
                    transition={{ duration: 0.1 }}
                  />
                </div>
              </div>

              {/* Volume Control */}
              <div className="mb-4">
                <label className="text-xs text-secondary mb-2 block">Volume</label>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={audio.volume}
                  onChange={handleVolumeChange}
                  className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-accent"
                />
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={audio.stop}
                  className="p-2 text-secondary hover:text-primary transition-colors"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={audio.toggle}
                  disabled={audio.isLoading}
                  className="p-3 bg-accent text-white rounded-full hover:bg-red-600 transition-colors disabled:opacity-50"
                >
                  {audio.isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : audio.isPlaying ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <rect x="6" y="4" width="4" height="16" />
                      <rect x="14" y="4" width="4" height="16" />
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  )}
                </motion.button>
              </div>

              {/* Error Message */}
              {audio.error && (
                <div className="mt-3 text-xs text-red-500 text-center">
                  {audio.error}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Toggle Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsExpanded(!isExpanded)}
          className="relative w-14 h-14 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-gray-200 flex items-center justify-center group"
        >
          <motion.div
            animate={{
              scale: audio.isPlaying ? [1, 1.2, 1] : 1,
            }}
            transition={{
              duration: 0.8,
              repeat: audio.isPlaying ? Infinity : 0,
              ease: "easeInOut"
            }}
          >
            {audio.isPlaying ? (
              <div className="flex space-x-1">
                <motion.div
                  animate={{ scaleY: [1, 1.5, 1, 0.5, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="w-1 h-4 bg-accent rounded"
                />
                <motion.div
                  animate={{ scaleY: [1, 0.5, 1, 1.5, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: 0.1 }}
                  className="w-1 h-4 bg-accent rounded"
                />
                <motion.div
                  animate={{ scaleY: [1, 1.5, 1, 0.5, 1] }}
                  transition={{ duration: 0.5, repeat: Infinity, delay: 0.2 }}
                  className="w-1 h-4 bg-accent rounded"
                />
              </div>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"
                  fill="currentColor"
                />
              </svg>
            )}
          </motion.div>

          {/* Notification Dot */}
          {audio.isPlaying && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-1 -right-1 w-3 h-3 bg-accent rounded-full"
            />
          )}
        </motion.button>
      </div>
    </motion.div>
  );
};

export default MusicPlayer;
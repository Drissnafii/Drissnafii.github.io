import { useState, useEffect, useRef } from 'react';

interface UseAudioOptions {
  volume?: number;
  loop?: boolean;
  autoplay?: boolean;
}

interface AudioState {
  isPlaying: boolean;
  isLoading: boolean;
  error: string | null;
  duration: number;
  currentTime: number;
  volume: number;
}

export const useAudio = (src: string, options: UseAudioOptions = {}) => {
  const { volume = 0.3, loop = false, autoplay = false } = options;
  
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [state, setState] = useState<AudioState>({
    isPlaying: false,
    isLoading: true,
    error: null,
    duration: 0,
    currentTime: 0,
    volume: volume
  });

  useEffect(() => {
    const audio = new Audio(src);
    audioRef.current = audio;

    audio.volume = volume;
    audio.loop = loop;

    const setAudioData = () => {
      setState(prevState => ({
        ...prevState,
        duration: audio.duration,
        isLoading: false
      }));
    };

    const setAudioTime = () => {
      setState(prevState => ({
        ...prevState,
        currentTime: audio.currentTime
      }));
    };

    const setAudioError = () => {
      setState(prevState => ({
        ...prevState,
        error: 'Failed to load audio',
        isLoading: false
      }));
    };

    const setAudioPlaying = () => {
      setState(prevState => ({
        ...prevState,
        isPlaying: true
      }));
    };

    const setAudioPaused = () => {
      setState(prevState => ({
        ...prevState,
        isPlaying: false
      }));
    };

    audio.addEventListener('loadeddata', setAudioData);
    audio.addEventListener('timeupdate', setAudioTime);
    audio.addEventListener('error', setAudioError);
    audio.addEventListener('play', setAudioPlaying);
    audio.addEventListener('pause', setAudioPaused);
    audio.addEventListener('ended', setAudioPaused);

    // Handle autoplay with user interaction requirement
    if (autoplay) {
      const handleUserInteraction = () => {
        audio.play().catch(() => {
          // Autoplay failed, which is expected
        });
        document.removeEventListener('click', handleUserInteraction);
        document.removeEventListener('keydown', handleUserInteraction);
      };

      document.addEventListener('click', handleUserInteraction);
      document.addEventListener('keydown', handleUserInteraction);
    }

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
      audio.removeEventListener('error', setAudioError);
      audio.removeEventListener('play', setAudioPlaying);
      audio.removeEventListener('pause', setAudioPaused);
      audio.removeEventListener('ended', setAudioPaused);
      audio.pause();
    };
  }, [src, volume, loop, autoplay]);

  const play = async () => {
    if (audioRef.current) {
      try {
        await audioRef.current.play();
      } catch (error) {
        setState(prevState => ({
          ...prevState,
          error: 'Failed to play audio'
        }));
      }
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  const setVolume = (newVolume: number) => {
    const clampedVolume = Math.max(0, Math.min(1, newVolume));
    if (audioRef.current) {
      audioRef.current.volume = clampedVolume;
    }
    setState(prevState => ({
      ...prevState,
      volume: clampedVolume
    }));
  };

  const seek = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime = time;
    }
  };

  return {
    ...state,
    play,
    pause,
    stop,
    setVolume,
    seek,
    toggle: state.isPlaying ? pause : play
  };
};
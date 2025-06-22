"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import {
  X,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Maximize,
  Minimize,
} from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
  videoSrc: string;
  title?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isOpen,
  onClose,
  videoSrc,
  title = "Product Demo",
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout>(null);

  const handleClose = useCallback(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
    }
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (isOpen && videoRef.current) {
      videoRef.current.currentTime = 0;
      setCurrentTime(0);
      setIsPlaying(false);
      setIsLoading(true);
    }
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleClose]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    const updateDuration = () => {
      setDuration(video.duration);
      setIsLoading(false);
    };
    const handleEnded = () => setIsPlaying(false);
    const handleLoadStart = () => setIsLoading(true);
    const handleCanPlay = () => setIsLoading(false);

    video.addEventListener("timeupdate", updateTime);
    video.addEventListener("loadedmetadata", updateDuration);
    video.addEventListener("ended", handleEnded);
    video.addEventListener("loadstart", handleLoadStart);
    video.addEventListener("canplay", handleCanPlay);

    return () => {
      video.removeEventListener("timeupdate", updateTime);
      video.removeEventListener("loadedmetadata", updateDuration);
      video.removeEventListener("ended", handleEnded);
      video.removeEventListener("loadstart", handleLoadStart);
      video.removeEventListener("canplay", handleCanPlay);
    };
  }, [isOpen]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (video) {
      const newTime = (parseFloat(e.target.value) / 100) * duration;
      video.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value) / 100;
    if (videoRef.current) {
      videoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      modalRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm animate-fade-in-up"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          handleClose();
        }
      }}
    >
      <div className="flex items-center justify-center min-h-screen p-0 sm:p-4 lg:p-6">
        <div
          ref={modalRef}
          className="relative w-full h-full sm:h-auto sm:max-w-4xl lg:max-w-6xl bg-blue-marguerite-950 sm:rounded-xl lg:rounded-2xl overflow-hidden shadow-2xl animate-scale-in"
          onMouseMove={handleMouseMove}
        >
          {/* Header */}
          <div
            className={`absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/70 to-transparent p-3 sm:p-4 lg:p-6 transition-opacity duration-300 ${
              showControls ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="text-sm sm:text-lg lg:text-xl font-semibold text-white truncate pr-4">
                {title}
              </h3>
              <button
                onClick={handleClose}
                className="p-2 sm:p-2.5 rounded-full bg-blue-marguerite-800/50 hover:bg-blue-marguerite-700/50 text-white transition-colors flex-shrink-0"
              >
                <X className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>
          </div>

          {/* Video */}
          <div className="relative aspect-video bg-black">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              src={videoSrc}
              onClick={togglePlay}
            />

            {/* Loading spinner */}
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="w-8 h-8 sm:w-12 sm:h-12 border-3 border-blue-marguerite-600 border-t-transparent rounded-full animate-spin"></div>
              </div>
            )}

            {/* Play overlay when paused */}
            {!isPlaying && !isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <button
                  onClick={togglePlay}
                  className="p-3 sm:p-4 lg:p-6 rounded-full bg-blue-marguerite-600 hover:bg-blue-marguerite-700 text-white transition-all duration-300 transform hover:scale-110 shadow-2xl"
                >
                  <Play className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 ml-0.5 sm:ml-1" />
                </button>
              </div>
            )}
          </div>

          {/* Custom Controls */}
          <div
            className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 sm:p-4 lg:p-6 transition-opacity duration-300 ${
              showControls ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Progress Bar */}
            <div className="mb-3 sm:mb-4">
              <input
                type="range"
                min="0"
                max="100"
                value={duration ? (currentTime / duration) * 100 : 0}
                onChange={handleProgressChange}
                className="w-full h-1.5 sm:h-2 bg-blue-marguerite-800 rounded-lg appearance-none cursor-pointer slider"
                style={{
                  background: `linear-gradient(to right, #7c69bf 0%, #7c69bf ${
                    duration ? (currentTime / duration) * 100 : 0
                  }%, #594b88 ${
                    duration ? (currentTime / duration) * 100 : 0
                  }%, #594b88 100%)`,
                }}
              />
              {/* Mobile time display */}
              <div className="sm:hidden flex justify-between items-center mt-2 text-xs text-white/70">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            {/* Control Buttons */}
            <div className="flex items-center justify-between flex-wrap gap-2 sm:gap-0">
              <div className="flex items-center space-x-1 sm:space-x-2 lg:space-x-4">
                {/* Play/Pause */}
                <button
                  onClick={togglePlay}
                  className="p-2 sm:p-2.5 lg:p-3 rounded-full bg-blue-marguerite-600 hover:bg-blue-marguerite-700 text-white transition-colors"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />
                  )}
                </button>

                {/* Volume */}
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <button
                    onClick={toggleMute}
                    className="p-1.5 sm:p-2 rounded-full hover:bg-blue-marguerite-800/50 text-white transition-colors"
                  >
                    {isMuted ? (
                      <VolumeX className="w-4 h-4 sm:w-5 sm:h-5" />
                    ) : (
                      <Volume2 className="w-4 h-4 sm:w-5 sm:h-5" />
                    )}
                  </button>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume * 100}
                    onChange={handleVolumeChange}
                    className="w-12 sm:w-16 lg:w-20 h-1 bg-blue-marguerite-800 rounded-lg appearance-none cursor-pointer slider-small"
                  />
                </div>

                {/* Time - Hidden on very small screens */}
                <div className="hidden sm:block text-white text-xs sm:text-sm font-medium">
                  {formatTime(currentTime)} / {formatTime(duration)}
                </div>
              </div>

              {/* Right Controls */}
              <div className="flex items-center space-x-1 sm:space-x-2">
                <button
                  onClick={toggleFullscreen}
                  className="p-1.5 sm:p-2 rounded-full hover:bg-blue-marguerite-800/50 text-white transition-colors"
                >
                  {isFullscreen ? (
                    <Minimize className="w-4 h-4 sm:w-5 sm:h-5" />
                  ) : (
                    <Maximize className="w-4 h-4 sm:w-5 sm:h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .slider::-webkit-slider-thumb {
          appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #7c69bf;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .slider::-moz-range-thumb {
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #7c69bf;
          cursor: pointer;
          border: 2px solid white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
        }

        .slider-small::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #7c69bf;
          cursor: pointer;
          border: 1px solid white;
        }

        .slider-small::-moz-range-thumb {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background: #7c69bf;
          cursor: pointer;
          border: 1px solid white;
        }

        @media (min-width: 640px) {
          .slider::-webkit-slider-thumb {
            width: 20px;
            height: 20px;
          }

          .slider::-moz-range-thumb {
            width: 20px;
            height: 20px;
          }

          .slider-small::-webkit-slider-thumb {
            width: 14px;
            height: 14px;
          }

          .slider-small::-moz-range-thumb {
            width: 14px;
            height: 14px;
          }
        }
      `}</style>
    </div>
  );
};

export default VideoModal;

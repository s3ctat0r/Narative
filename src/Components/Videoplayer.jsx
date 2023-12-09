import React, { useRef, useState, useEffect } from 'react';
import './Videoplayer.css'; // Import your CSS file for styling

const VideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 768);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
      setIsPlaying(true);
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className={`video-container ${isDesktop ? 'desktop' : ''}`}>
      {isDesktop && (
        <div className="play-pause-btn" onClick={handlePlayPause}>
          <ion-icon name={`play${isPlaying ? '' : '-outline'}`}></ion-icon>
        </div>
      )}
      <video
        ref={videoRef}
        className={`video-player ${isDesktop ? 'hovered' : ''}`}
        onClick={() => !isDesktop && handlePlayPause()} // Play/pause on click for mobile
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;

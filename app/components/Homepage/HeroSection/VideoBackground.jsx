// components/VideoBackground.jsx
'use client'
import { useRef, useEffect, useState } from 'react';

export default function VideoBackground() {
  const videoRef = useRef(null);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Auto-play video on load
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.log('Video autoplay prevented:', error);
      });
    }
  }, []);

  // Simplified brightness analysis function – always returns true (dark video)
  const analyzeBrightness = (videoElement) => {
    // You can extend this logic to analyze pixel data via a canvas.
    return true;
  };

  useEffect(() => {
    // Periodically check video brightness
    const interval = setInterval(() => {
      if (videoRef.current) {
        setIsDark(analyzeBrightness(videoRef.current));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0">
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/static/poster-image.jpg"
        preload="metadata"
      >
        <source 
          media="(min-width: 768px)" 
          src="https://res.cloudinary.com/dv093jd0o/video/upload/v1765447563/Gen-4_Turbo_Generate_for_me_a_realistic_video_of_a_baby_with_jaundice_2432672199_uubd33.mp4" 
          type="video/mp4" 
        />
        <source 
          media="(max-width: 767px)" 
          src="https://res.cloudinary.com/dv093jd0o/video/upload/v1765447563/Gen-4_Turbo_Generate_for_me_a_realistic_video_of_a_baby_with_jaundice_2432672199_uubd33.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
      {/* Overlay to improve text readability */}
      <div className={`absolute inset-0 bg-black ${isDark ? 'bg-opacity-40' : 'bg-opacity-60'}`}></div>
    </div>
  );
}

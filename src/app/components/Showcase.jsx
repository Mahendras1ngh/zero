'use client';
import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react';

const videos = [
  'https://res.cloudinary.com/dd87wq4wp/video/upload/v1731844006/12657735_1920_1080_30fps.mp4',
];

export default function VideoShowcase() {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef(videos.map(() => React.createRef()));

  const playVideo = (index) => {
    videoRefs.current.forEach((ref, i) => {
      if (ref.current) {
        if (i === index) {
          ref.current.currentTime = 0;
          ref.current.play();
          ref.current.classList.remove('opacity-0');
          ref.current.classList.add('opacity-100');
        } else {
          ref.current.pause();
          ref.current.classList.remove('opacity-100');
          ref.current.classList.add('opacity-0');
        }
      }
    });
  };

  useEffect(() => {
    const handleVideoEnd = () => {
      const nextIndex = (currentVideoIndex + 1) % videos.length;
      setCurrentVideoIndex(nextIndex);
      playVideo(nextIndex);
    };

    videoRefs.current.forEach((ref) => {
      if (ref.current) {
        ref.current.addEventListener('ended', handleVideoEnd);
      }
    });

    return () => {
      videoRefs.current.forEach((ref) => {
        if (ref.current) {
          ref.current.removeEventListener('ended', handleVideoEnd);
        }
      });
    };
  }, [currentVideoIndex]);

  const toggleMute = () => {
    const newMutedState = !isMuted;
    setIsMuted(newMutedState);
    videoRefs.current.forEach((ref) => {
      if (ref.current) {
        ref.current.muted = newMutedState;
      }
    });
  };

  const handlePrev = () => {
    const prevIndex = (currentVideoIndex - 1 + videos.length) % videos.length;
    setCurrentVideoIndex(prevIndex);
    playVideo(prevIndex);
  };

  const handleNext = () => {
    const nextIndex = (currentVideoIndex + 1) % videos.length;
    setCurrentVideoIndex(nextIndex);
    playVideo(nextIndex);
  };

  return (
    <section className='relative h-screen w-full bg-gray-900 overflow-hidden'>
      {videos.map((video, index) => (
        <video
          key={index}
          ref={videoRefs.current[index]}
          className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-1000 ${
            index === currentVideoIndex ? 'opacity-100' : 'opacity-0'
          }`}
          autoPlay={index === currentVideoIndex}
          muted={isMuted}
          loop={false}
          playsInline
        >
          <source src={video} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      ))}
      {/* <div className='absolute inset-0 flex items-center justify-between px-4'>
        <button
          onClick={handlePrev}
          className='bg-black bg-opacity-20 text-white rounded-full p-2 hover:bg-opacity-40 transition-colors focus:outline-none'
          aria-label='Previous video'
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={handleNext}
          className='bg-black bg-opacity-20 text-white rounded-full p-2 hover:bg-opacity-40 transition-colors focus:outline-none'
          aria-label='Next video'
        >
          <ChevronRight size={24} />
        </button>
      </div> */}
      <button
        onClick={toggleMute}
        className='absolute bottom-4 right-4 bg-black bg-opacity-20 text-white rounded-full p-2 hover:bg-opacity-40 transition-colors focus:outline-none'
        aria-label={isMuted ? 'Unmute' : 'Mute'}
      >
        {isMuted ? <VolumeX size={24} /> : <Volume2 size={24} />}
      </button>
    </section>
  );
}

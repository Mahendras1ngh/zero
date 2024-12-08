import React from 'react';

export default function DigitalMarketingHero() {
  const videoUrl =
    'https://res.cloudinary.com/dd87wq4wp/video/upload/v1732300724/adroit_cover_for_zerography_webhq_hldpuk.mp4'; // Add video URL here

  return (
    <section className='min-h-screen relative flex items-center overflow-hidden'>
      {/* Video Background */}
      <div className='absolute inset-0'>
        <video
          className='w-full h-full object-cover'
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={videoUrl} type='video/mp4' />
        </video>
      </div>
    </section>
  );
}

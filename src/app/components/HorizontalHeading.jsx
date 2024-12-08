'use client';
import React, { useEffect } from 'react';

export default function HorizontalHeading({ heading }) {
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const headings = document.querySelectorAll('.scroll-text-horizontal');
      headings[0].style.transform = `translateX(${scrolled * 0.5}px)`;
      headings[1].style.transform = `translateX(${scrolled * -0.5}px)`;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className='py-0 bg-black overflow-hidden'>
      <div className='flex flex-col gap-1'>
        <div
          className='scroll-text-horizontal whitespace-nowrap text-[120px] font-black leading-none'
          style={{
            transform: 'translateX(0)',
            transition: 'transform 0.1s ease-out',
          }}
        >
          <span
            className='mr-8'
            style={{
              WebkitTextStroke: '2px #333',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {heading.toUpperCase()}
          </span>
          <span className='mr-8 text-gray-800'>{heading.toUpperCase()}</span>
          <span
            className='mr-8'
            style={{
              WebkitTextStroke: '2px #333',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {heading.toUpperCase()}
          </span>
          <span className='mr-8 text-gray-800'>{heading.toUpperCase()}</span>
          <span
            className='mr-8'
            style={{
              WebkitTextStroke: '2px #333',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {heading.toUpperCase()}
          </span>
        </div>
        <div
          className='scroll-text-horizontal whitespace-nowrap text-[120px] font-black leading-none'
          style={{
            transform: 'translateX(0)',
            transition: 'transform 0.1s ease-out',
          }}
        >
          <span className='mr-8 text-gray-800'>{heading.toUpperCase()}</span>
          <span
            className='mr-8'
            style={{
              WebkitTextStroke: '2px #333',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {heading.toUpperCase()}
          </span>
          <span className='mr-8 text-gray-800'>{heading.toUpperCase()}</span>
          <span
            className='mr-8'
            style={{
              WebkitTextStroke: '2px #333',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {heading.toUpperCase()}
          </span>
          <span className='mr-8 text-gray-800'>{heading.toUpperCase()}</span>
        </div>
      </div>
    </div>
  );
}

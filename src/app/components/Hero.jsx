'use client';
import { useEffect, useState, useCallback } from 'react';

export default function Hero() {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const hero = document.querySelector('.hero');
    const cursor = document.querySelector('.cursor');

    const updateCursorPosition = (e) => {
      const rect = hero.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      setCursorPosition({ x, y });
      if (cursor) {
        cursor.style.left = `${x}px`;
        cursor.style.top = `${y}px`;
      }
    };

    const hideCursor = () => {
      setCursorPosition({ x: -100, y: -100 });
      if (cursor) cursor.style.opacity = '0';
    };

    const showCursor = () => {
      if (cursor) cursor.style.opacity = '1';
    };

    hero.addEventListener('mousemove', updateCursorPosition);
    hero.addEventListener('mouseleave', hideCursor);
    hero.addEventListener('mouseenter', showCursor);

    return () => {
      hero.removeEventListener('mousemove', updateCursorPosition);
      hero.removeEventListener('mouseleave', hideCursor);
      hero.removeEventListener('mouseenter', showCursor);
    };
  }, []);

  return (
    <section className='hero h-screen flex items-center justify-center bg-black relative overflow-hidden'>
      <div className='text-center z-10'>
        <h1 className='text-[5rem] font-bold mb-4 animate-fade-in-down text-gray-400 uppercase relative'>
          <span className='animate-text-draw'>Zerography</span>
        </h1>
        <p className='text-xl mb-8 animate-fade-in-up text-gray-500'>
          Where every frame tells a story
        </p>
      </div>

      {/* Light effect */}
      <div
        className='light-effect absolute inset-0'
        style={{
          background: `radial-gradient(circle 200px at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(255,0,0,0.3), transparent)`,
          mixBlendMode: 'screen',
        }}
      ></div>

      <div className='cursor'></div>
    </section>
  );
}

'use client';
import { useEffect, useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import clapboard from '../../assets/Website_icons/ClapBoard.png';
import digitalmarketing from '../../assets/Website_icons/digitalmarketing.png';
import headphones from '../../assets/Website_icons/headphones.png';
import mic from '../../assets/Website_icons/mic.png';
import photo from '../../assets/Website_icons/photo.png';
import video from '../../assets/Website_icons/video.png';
import videoedit from '../../assets/Website_icons/videoedit.png';
import writing from '../../assets/Website_icons/writing.png';

const icons = [
  { name: 'clapBoard', path: clapboard },
  { name: 'digitalMarketing', path: digitalmarketing },
  { name: 'headphones', path: headphones },
  { name: 'mic', path: mic },
  { name: 'photo', path: photo },
  { name: 'video', path: video },
  { name: 'videoEdit', path: videoedit },
  { name: 'writing', path: writing },
];

const FloatingIcon = ({ icon, initialPosition, isMobile }) => {
  const [position, setPosition] = useState(initialPosition);
  const [velocity, setVelocity] = useState({
    x: (Math.random() - 0.5) * 2,
    y: (Math.random() - 0.5) * 2,
  });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    if (dimensions.width === 0 || dimensions.height === 0) return;

    let animationFrameId;
    let lastTime = performance.now();
    const speed = isMobile ? 0.03 : 0.05; // Slower on mobile
    const padding = isMobile ? 32 : 48; // Smaller padding on mobile

    const animate = (currentTime) => {
      const deltaTime = (currentTime - lastTime) / 16;
      lastTime = currentTime;

      setPosition((prevPos) => {
        let newX = prevPos.x + velocity.x * speed * deltaTime;
        let newY = prevPos.y + velocity.y * speed * deltaTime;

        const pixelX = (newX * dimensions.width) / 100;
        const pixelY = (newY * dimensions.height) / 100;

        if (pixelX <= padding || pixelX >= dimensions.width - padding) {
          setVelocity((prev) => ({ ...prev, x: -prev.x }));
          newX =
            pixelX <= padding
              ? (padding * 100) / dimensions.width
              : ((dimensions.width - padding) * 100) / dimensions.width;
        }

        if (pixelY <= padding || pixelY >= dimensions.height - padding) {
          setVelocity((prev) => ({ ...prev, y: -prev.y }));
          newY =
            pixelY <= padding
              ? (padding * 100) / dimensions.height
              : ((dimensions.height - padding) * 100) / dimensions.height;
        }

        return { x: newX, y: newY };
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [velocity, dimensions, isMobile]);

  const iconSize = isMobile ? 32 : 48;

  return (
    <div
      className={`absolute transition-opacity duration-300 ${
        isMobile
          ? 'w-8 h-8 opacity-15 hover:opacity-50'
          : 'w-12 h-12 opacity-20 hover:opacity-60'
      }`}
      style={{
        left: `${position.x}%`,
        top: `${position.y}%`,
        transform: `rotate(${(position.x + position.y) * 2}deg)`,
        transition: 'transform 0.1s linear',
      }}
    >
      <Image
        src={icon.path}
        alt={icon.name}
        width={iconSize}
        height={iconSize}
        className='w-full h-full object-contain'
      />
    </div>
  );
};

export default function Hero() {
  const [floatingIcons, setFloatingIcons] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const initialized = useRef(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (!initialized.current) {
      const padding = isMobile ? 32 : 48;
      const maxX = ((window.innerWidth - padding) * 100) / window.innerWidth;
      const maxY = ((window.innerHeight - padding) * 100) / window.innerHeight;

      // Show fewer icons on mobile
      const visibleIcons = isMobile ? icons.slice(0, 5) : icons;

      const initialIcons = visibleIcons.map((icon) => ({
        icon,
        position: {
          x: 10 + Math.random() * (maxX - 20),
          y: 10 + Math.random() * (maxY - 20),
        },
      }));

      setFloatingIcons(initialIcons);
      initialized.current = true;
    }
  }, [isMobile]);

  return (
    <section className='hero h-screen flex items-center justify-center bg-black relative overflow-hidden'>
      {/* Gradient Overlays */}
      <div className='absolute inset-0 bg-gradient-to-b from-black via-transparent to-black opacity-50' />
      <div className='absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-50' />

      {/* Main Content */}
      <div className='text-center z-10 px-4'>
        <h1 className='text-[clamp(2.5rem,10vw,5rem)] font-bold mb-4 text-gray-400 uppercase relative'>
          <span className='block animate-fade-in-down transform hover:scale-105 transition-transform duration-300'>
            Zerography
          </span>
        </h1>
        <p className='text-base md:text-xl mb-8 text-gray-500 animate-fade-in-up max-w-md mx-auto'>
          Where every frame tells a story
        </p>
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <FloatingIcon
          key={index}
          icon={item.icon}
          initialPosition={item.position}
          isMobile={isMobile}
        />
      ))}

      {/* Background Pattern - adjusted size for mobile */}
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:20px_20px] md:bg-[length:40px_40px]' />
    </section>
  );
}

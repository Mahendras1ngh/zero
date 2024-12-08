'use client';

import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import logoImage from '../../assets/zerography_logo.png';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const closeTimeoutRef = useRef(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesOpen(false);
    }, 300);
  };

  const services = [
    {
      name: 'Photography',
      path: '/photography',
      subMenu: [],
    },
    {
      name: 'Films & Campaigns',
      path: '/videography',
      subMenu: [],
    },
    {
      name: 'Digital Marketing',
      path: '/digital-marketing',
      subMenu: [],
    },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-black bg-opacity-80 backdrop-blur-sm' : ''
      }`}
    >
      <div className='container mx-auto px-6 py-4 flex justify-between items-center'>
        <Link href='/' className='text-xl font-bold text-white relative z-10'>
          <Image
            src={logoImage}
            alt='Company Logo'
            width={90}
            height={20}
            className='object-contain'
            priority
          />
        </Link>
        <nav className='flex-grow'>
          <ul className='flex justify-center space-x-8'>
            <li>
              <Link
                href='/'
                className={`text-white hover:text-teal-300 transition-colors ${
                  pathname === '/' ? 'text-teal-300' : ''
                }`}
              >
                Home
              </Link>
            </li>
            <li className='relative group'>
              <button
                className={`text-white hover:text-teal-300 transition-colors flex items-center ${
                  services.some((service) => pathname === service.path)
                    ? 'text-teal-300'
                    : ''
                }`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Portfolio <ChevronDown size={20} className='ml-1' />
              </button>
              {servicesOpen && (
                <div
                  className='absolute left-0 mt-2 w-48 bg-black bg-opacity-90 backdrop-blur-sm rounded-md shadow-lg py-1 z-50'
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  {services.map((service, index) => (
                    <div key={index} className='relative group/sub'>
                      <Link
                        href={service.path}
                        className={`block px-4 py-2 text-sm text-white hover:bg-teal-700 flex justify-between items-center ${
                          pathname === service.path ? 'bg-teal-700/50' : ''
                        }`}
                        onClick={() => setServicesOpen(false)}
                      >
                        {service.name}
                        {service.subMenu?.length > 0 && (
                          <ChevronRight size={14} />
                        )}
                      </Link>
                      {service.subMenu?.length > 0 && (
                        <div className='absolute left-full top-0 mt-0 w-48 bg-black bg-opacity-90 backdrop-blur-sm rounded-md shadow-lg py-1 hidden group-hover/sub:block'>
                          {service.subMenu?.map((subItem, subIndex) => (
                            <Link
                              key={subIndex}
                              href={`${service.path}/${subItem
                                .toLowerCase()
                                .replace(/\s+/g, '-')}`}
                              className='block px-4 py-2 text-sm text-white hover:bg-teal-700'
                              onClick={() => setServicesOpen(false)}
                            >
                              {subItem}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </li>
            <li>
              <Link
                href='/our-services'
                className={`text-white hover:text-teal-300 transition-colors ${
                  pathname === '/our-services' ? 'text-teal-300' : ''
                }`}
              >
                Our Services
              </Link>
            </li>
            <li>
              <Link
                href='/about-us'
                className={`text-white hover:text-teal-300 transition-colors ${
                  pathname === '/about-us' ? 'text-teal-300' : ''
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='/#contact'
                className={`text-white hover:text-teal-300 transition-colors ${
                  pathname === '/#contact' ? 'text-teal-300' : ''
                }`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button className='bg-teal-400 text-black px-4 py-2 rounded hover:bg-teal-300 transition-colors'>
          Get a Quote
        </button>
      </div>
    </header>
  );
}

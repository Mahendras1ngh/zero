'use client';
import React from 'react';
import { Twitter, Instagram, Facebook, Linkedin, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className='min-h-screen bg-black relative flex items-center justify-center overflow-hidden'>
      {/* Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black'></div>
      <div className='absolute -left-48 bottom-1/4 w-[500px] h-[500px] bg-red-500/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse'></div>
      <div className='absolute -right-48 bottom-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse'></div>
      <div className='absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-500/20 rounded-full mix-blend-screen filter blur-[120px] animate-pulse'></div>

      <div className='container mx-auto px-4 relative z-10'>
        <div className='text-center space-y-8'>
          {/* Logo */}
          <div className='mb-16'>
            <h2 className='text-6xl font-bold bg-gradient-to-r from-red-400 via-purple-400 to-blue-400 bg-clip-text text-transparent'>
              ZEROGRAPHY
            </h2>
            <p className='text-gray-400 mt-4 text-lg'>
              Capturing Moments, Creating Magic
            </p>
          </div>

          {/* Social Links */}
          <div className='flex justify-center gap-8'>
            {[
              { icon: Twitter, href: '#', color: 'hover:text-blue-400' },
              { icon: Instagram, href: '#', color: 'hover:text-pink-500' },
              { icon: Facebook, href: '#', color: 'hover:text-blue-600' },
              { icon: Linkedin, href: '#', color: 'hover:text-blue-500' },
              { icon: Youtube, href: '#', color: 'hover:text-red-500' },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                className={`text-gray-400 transition-all duration-300 hover:scale-110 ${social.color}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <social.icon className='w-8 h-8' />
              </a>
            ))}
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className='absolute bottom-0 left-0 right-0 border-t border-gray-800 backdrop-blur-sm bg-black/50'>
        <div className='container mx-auto px-4 py-6'>
          <div className='flex justify-between items-center'>
            <p className='text-gray-400 text-sm'>
              © 2024 Zerography Productions. All rights reserved.
            </p>
            <nav>
              <ul className='flex gap-8'>
                {['Contact'].map((item, index) => (
                  <li key={index}>
                    <a
                      href='#'
                      className='text-gray-400 text-sm hover:text-white transition-colors'
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}

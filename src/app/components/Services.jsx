'use client';
import { useEffect } from 'react';
import { Camera, Film, Share2, Edit3 } from 'lucide-react';
import SectionHeading from './SectionHeading';

export default function Services() {
  return (
    <section className='py-10 bg-black min-h-screen relative overflow-hidden'>
      <SectionHeading heading='services' />
      {/* Background grid effect */}
      <div className='absolute inset-0 bg-grid-pattern opacity-5'></div>

      <div className='container mx-auto px-4'>
        {/* Heading Section with creative layout */}
        <div className='mb-20 relative'>
          <div className='absolute -left-4 top-0 w-1 h-20 bg-gradient-to-b from-teal-400 to-transparent'></div>
          <h2 className='text-6xl font-bold text-white mb-6 tracking-tight'>
            Transform
            <span className='block text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500'>
              Your Digital Presence
            </span>
          </h2>
          <p className='text-xl text-gray-400 max-w-2xl ml-auto'>
            We are an award-winning creative powerhouse, crafting immersive
            brand experiences through cutting-edge content, strategic marketing,
            and innovative technology solutions.
          </p>
        </div>

        {/* Services Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {/* Photography Card */}
          <div className='group relative bg-gray-900 p-6 rounded-xl hover:-translate-y-2 transition-all duration-300'>
            <div className='absolute inset-0 bg-gradient-to-br from-teal-400/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity'></div>
            <Camera className='text-teal-400 w-8 h-8 mb-4' />
            <h3 className='text-xl font-semibold text-white mb-3'>
              Photography
            </h3>
            <ul className='space-y-2 text-gray-400'>
              <li className='transform hover:translate-x-2 transition-transform'>
                Product Photography
              </li>
              <li className='transform hover:translate-x-2 transition-transform'>
                Portrait Photography
              </li>
              <li className='transform hover:translate-x-2 transition-transform'>
                Architectural Photography
              </li>
              <li className='transform hover:translate-x-2 transition-transform'>
                Lifestyle Photography
              </li>
            </ul>
          </div>

          {/* Videography Card */}
          <div className='group relative bg-gray-900 p-6 rounded-xl hover:-translate-y-2 transition-all duration-300'>
            <div className='absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity'></div>
            <Film className='text-blue-500 w-8 h-8 mb-4' />
            <h3 className='text-xl font-semibold text-white mb-3'>
              Films & Campaign
            </h3>
            <ul className='space-y-2 text-gray-400'>
              <li className='transform hover:translate-x-2 transition-transform'>
                Brands Work
              </li>
              <li className='transform hover:translate-x-2 transition-transform'>
                Events Work
              </li>
              <li className='transform hover:translate-x-2 transition-transform'>
                Testimonials Works
              </li>
            </ul>
          </div>

          {/* Digital Marketing Card */}
          <div className='group relative bg-gray-900 p-6 rounded-xl hover:-translate-y-2 transition-all duration-300'>
            <div className='absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity'></div>
            <Share2 className='text-purple-500 w-8 h-8 mb-4' />
            <h3 className='text-xl font-semibold text-white mb-3'>
              Digital Marketing
            </h3>
            <p className='text-gray-400'>
              Strategic campaigns that drive engagement and growth across
              digital platforms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

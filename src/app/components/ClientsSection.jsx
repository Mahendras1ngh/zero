'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import adanifoundation from '@/assets/clients/adanifoundation.jpeg';
import arrivae from '@/assets/clients/arrivae.png';
import ashiana from '@/assets/clients/ashiana.png';
import beastlife from '@/assets/clients/beastlife.png';
import freefire from '@/assets/clients/freefire.png';
import ffmotionpictures from '@/assets/clients/ftmotionpictures.png';
import hcltbi from '@/assets/clients/hcl-tbi.jpg';
import historytv18 from '@/assets/clients/history18.png';
import honda from '@/assets/clients/honda.jpg';
import idbi from '@/assets/clients/idbi.jpg';
import hushpuppies from '@/assets/clients/hushpuppies.jpeg';
import imi from '@/assets/clients/imi.png';
import indigo from '@/assets/clients/indigo.png';
import infinix from '@/assets/clients/infinix.jpg';
import itel from '@/assets/clients/itel.jpg';
import jumpinheights from '@/assets/clients/jumpinheights.jpeg';
import makemytrip from '@/assets/clients/makemytrip.png';
import marutisuzuki from '@/assets/clients/marutisuzuki.jpg';
import mns from '@/assets/clients/mns.jpeg';
import mountaindew from '@/assets/clients/mountaindew.jpeg';
import muhfaad from '@/assets/clients/muhfaad.jpeg';
import nandoes from '@/assets/clients/nandos.png';
import nationalgeographic from '@/assets/clients/national-geographic.png';
import peters from '@/assets/clients/peters.png';
import piagio from '@/assets/clients/piagio.png';
import ppvtpp from '@/assets/clients/PPVTPP.jpg';
import rajputana from '@/assets/clients/rajputana.jpg';
import renault from '@/assets/clients/renault.jpg';
import samsung from '@/assets/clients/samsung.png';
import tatamotors from '@/assets/clients/tatamotors.png';
import tseries from '@/assets/clients/tseries.jpg';
import tvf from '@/assets/clients/tvf.png';
import tvs from '@/assets/clients/tvs.png';
import waycool from '@/assets/clients/waycool.jpg';
import whitehill from '@/assets/clients/whitehill.jpeg';
import winzo from '@/assets/clients/winzo.jpeg';

export default function ClientsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const clients = [
    { name: 'Adani Foundation', image: adanifoundation },
    { name: 'Arrivae', image: arrivae },
    { name: 'Ashiana', image: ashiana },
    { name: 'Beast Life', image: beastlife },
    { name: 'Free Fire', image: freefire },
    { name: 'FT Motion Pictures', image: ffmotionpictures },
    { name: 'HCL TBI', image: hcltbi },
    { name: 'History TV18', image: historytv18 },
    { name: 'Honda', image: honda },
    { name: 'IDBI', image: idbi },
    { name: 'Hush Puppies', image: hushpuppies },
    { name: 'IMI', image: imi },
    { name: 'IndiGo', image: indigo },
    { name: 'Infinix', image: infinix },
    { name: 'iTel', image: itel },
    { name: 'Jumpin Heights', image: jumpinheights },
    { name: 'MakeMyTrip', image: makemytrip },
    { name: 'Maruti Suzuki', image: marutisuzuki },
    { name: 'MNS', image: mns },
    { name: 'Mountain Dew', image: mountaindew },
    { name: 'Muhfaad', image: muhfaad },
    { name: "Nando's", image: nandoes },
    { name: 'National Geographic', image: nationalgeographic },
    { name: 'Peters', image: peters },
    { name: 'Piaggio', image: piagio },
    { name: 'PPVTPP', image: ppvtpp },
    { name: 'Rajputana', image: rajputana },
    { name: 'Renault', image: renault },
    { name: 'Samsung', image: samsung },
    { name: 'Tata Motors', image: tatamotors },
    { name: 'T-Series', image: tseries },
    { name: 'TVF', image: tvf },
    { name: 'TVS', image: tvs },
    { name: 'WayCool', image: waycool },
    { name: 'White Hill', image: whitehill },
    { name: 'WinZo', image: winzo },
  ];

  useEffect(() => {
    setIsVisible(true);

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, options);

    const elements = document.querySelectorAll('.client-card');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const renderClientGrid = (clientsList) => (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6'>
      {clientsList.map((client, index) => (
        <div
          key={index}
          className='client-card opacity-0 transform translate-y-4 transition-all duration-500 hover:scale-105'
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className='bg-[#fff] backdrop-blur-sm rounded-lg p-4 flex items-center justify-center group hover:bg-white transition-all duration-300 border border-gray-200/30'>
            <Image
              src={client.image}
              alt={client.name}
              width={120}
              height={60}
              className='w-auto h-12 object-contain group-hover:brightness-110 transition-all duration-300'
              unoptimized
              priority={index < 12}
            />
          </div>
          <p className='text-center text-gray-400 mt-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
            {client.name}
          </p>
        </div>
      ))}
    </div>
  );

  const midPoint = Math.ceil(clients.length / 2);
  const firstHalf = clients.slice(0, midPoint);
  const secondHalf = clients.slice(midPoint);

  return (
    <section className='relative min-h-screen bg-black py-20 px-4 overflow-hidden'>
      {/* Enhanced Background Effects */}
      <div className='absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent animate-pulse'></div>
      <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[length:40px_40px] animate-[float_20s_linear_infinite]'></div>

      {/* Title with Animation */}
      <div
        className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <h2 className='text-6xl font-bold bg-gradient-to-r from-white via-purple-400 to-white bg-clip-text text-transparent animate-gradient'>
          Our Trusted Partners
        </h2>
        <p className='text-gray-400 mt-4 text-lg'>
          Collaborating with industry leaders to create exceptional content
        </p>
      </div>

      <div className='container mx-auto max-w-7xl'>
        {renderClientGrid(firstHalf)}

        {/* Video Section */}
        <div className='max-w-4xl mx-auto my-20'>
          <div className='relative group'>
            <div className='absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-xy'></div>
            <div className='relative rounded-lg overflow-hidden shadow-[0_0_15px_rgba(139,92,246,0.3)]'>
              <div style={{ paddingBottom: '56.25%' }} className='relative'>
                <iframe
                  className='absolute top-0 left-0 w-full h-full rounded-lg'
                  src='https://www.youtube.com/embed/5oH9Nr3bKfw'
                  title='Showreel'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>

        {renderClientGrid(secondHalf)}
      </div>
    </section>
  );
}

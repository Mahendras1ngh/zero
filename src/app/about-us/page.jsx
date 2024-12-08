'use client';
import React from 'react';
import Image from 'next/image';
import kuldeep from '@/assets/team/kuldeep.png';
import mehak from '@/assets/team/mehak-malik.png';
import nitin from '@/assets/team/nitin-pal.png';

const AboutUsPage = () => {
  return (
    <div className='bg-gray-900 text-white py-20'>
      <div className='container mx-auto px-4'>
        <h1 className='text-4xl font-bold mb-8'>
          About ZEROGRAPHY PRODUCTIONS
        </h1>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          <div>
            <p className='mb-6'>
              Welcome to ZEROGRAPHY PRODUCTIONS, where creativity meets
              innovation. We are a full-service production house passionate
              about bringing your vision to life. With expertise spanning brand
              films, corporate videos, music videos, film production,
              photography, digital marketing, and video editing, we deliver
              captivating content that resonates with your audience.
            </p>
            <p className='mb-6'>
              Our team of skilled professionals blends artistry and technical
              precision to craft stories that inspire and engage. Whether you're
              looking to elevate your brand, create stunning visuals, or execute
              a digital marketing campaign, we are here to transform ideas into
              impactful realities.
            </p>
            <p className='mb-6'>
              At ZEROGRAPHY PRODUCTIONS, every project is an art for us. We
              listen, we strategize, and we create — ensuring your unique
              narrative shines through every frame. Let's bring your story to
              the world.
            </p>
            <h2 className='text-2xl font-bold mb-6'>Our Experience</h2>
            <p className='mb-6'>
              With over a decade of experience in the industry, our team at
              ZEROGRAPHY PRODUCTIONS has honed the art of storytelling through
              visual and digital media. Over the past 10 years, we have
              partnered with diverse clients across industries, delivering
              exceptional results in brand films, corporate videos, music
              videos, film production, photography, digital marketing, and video
              editing.
            </p>
            <p>
              Our seasoned team combines industry expertise with a passion for
              creativity, ensuring every project reflects professionalism and
              innovation. From concept to execution, we take pride in producing
              content that not only meets but exceeds our clients' expectations.
            </p>
          </div>
          <div className='flex justify-center items-center'>
            <div className='relative w-full max-w-md'>
              <div className='absolute inset-0 bg-gradient-to-br from-teal-500 to-purple-500 rounded-lg blur-xl opacity-50 animate-pulse'></div>
              <Image
                src='/about-us-image.jpg'
                alt='About Us'
                width={500}
                height={500}
                className='relative z-10 rounded-lg shadow-lg'
              />
            </div>
          </div>
        </div>
        <h2 className='text-2xl font-bold mt-12 mb-8'>Meet Our Team</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          <div className='group relative'>
            <div className='absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative z-10'>
              <Image
                src='/vipin-kumar-pal.jpg'
                alt='Vipin Kumar Pal'
                width={300}
                height={300}
                className='rounded-lg shadow-lg mb-4'
              />
              <h3 className='text-xl font-bold mb-2'>Vipin Kumar Pal</h3>
              <p className='text-gray-400 mb-4'>Director of Photography</p>
              <p>
                Vipin Kumar Pal, our esteemed Director of Photography, brings
                over 12 years of unparalleled experience in the film industry.
                With a keen eye for detail and a passion for visual
                storytelling, Vipin has mastered the art of capturing moments
                that leave lasting impressions.
              </p>
            </div>
          </div>
          <div className='group relative'>
            <div className='absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative z-10'>
              <Image
                src={nitin}
                alt='Nitin Kumar Pal'
                width={300}
                height={300}
                className='rounded-lg shadow-lg mb-4'
              />
              <h3 className='text-xl font-bold mb-2'>Nitin Kumar Pal</h3>
              <p className='text-gray-400 mb-4'>Creative Director</p>
              <p>
                Nitin Kumar Pal, our Creative Director, brings a wealth of
                experience and innovation to every project he leads. With 10
                years in the film industry, Nitin has honed his ability to craft
                compelling narratives and execute visionary concepts that
                captivate audiences.
              </p>
            </div>
          </div>
          <div className='group relative'>
            <div className='absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative z-10'>
              <Image
                src={kuldeep}
                alt='Kuldeep Chauhan'
                width={300}
                height={300}
                className='rounded-lg shadow-lg mb-4'
              />
              <h3 className='text-xl font-bold mb-2'>Kuldeep Chauhan</h3>
              <p className='text-gray-400 mb-4'>Post-Production Head</p>
              <p>
                Kuldeep Chauhan, our Post-Production Head and Founder of
                ZEROGRAPHY PRODUCTIONS, brings a decade of expertise to the
                craft of storytelling through editing. With 10 years of
                experience in the industry, Kuldeep has a proven track record of
                transforming raw footage into polished, impactful narratives
                that resonate with audiences.
              </p>
            </div>
          </div>
          <div className='group relative'>
            <div className='absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative z-10'>
              <Image
                src={mehak}
                alt='Mehak Malik'
                width={300}
                height={300}
                className='rounded-lg shadow-lg mb-4'
              />
              <h3 className='text-xl font-bold mb-2'>Mehak Malik</h3>
              <p className='text-gray-400 mb-4'>Photographer</p>
              <p>
                Mehak Malik, with her exceptional photography skills, crafts
                images that are both aesthetically stunning and deeply
                evocative. Her eye for detail ensures every frame communicates
                the intended message with clarity and style.
              </p>
            </div>
          </div>
          <div className='group relative'>
            <div className='absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative z-10'>
              <Image
                src='/gautam.jpg'
                alt='Gautam'
                width={300}
                height={300}
                className='rounded-lg shadow-lg mb-4'
              />
              <h3 className='text-xl font-bold mb-2'>Gautam</h3>
              <p className='text-gray-400 mb-4'>
                Creative Director for Brand Photography
              </p>
              <p>
                Gautam, our specialist in architectural photography, brings 8
                years of experience capturing the essence of design and
                structure. With a keen eye for detail and a profound
                understanding of composition, he transforms spaces into visually
                compelling narratives.
              </p>
            </div>
          </div>
          <div className='group relative'>
            <div className='absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative z-10'>
              <Image
                src='/saket.jpg'
                alt='Saket'
                width={300}
                height={300}
                className='rounded-lg shadow-lg mb-4'
              />
              <h3 className='text-xl font-bold mb-2'>Saket</h3>
              <p className='text-gray-400 mb-4'>
                Video Editing, Motion Graphics, and Animation Expert
              </p>
              <p>
                Saket excels in crafting seamless edits that enhance
                storytelling and keep audiences engaged. His dedication to
                detail and flair for pacing make him a master of video editing,
                motion graphics, and animation.
              </p>
            </div>
          </div>
          <div className='group relative'>
            <div className='absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative z-10'>
              <Image
                src='/parveen.jpg'
                alt='Parveen'
                width={300}
                height={300}
                className='rounded-lg shadow-lg mb-4'
              />
              <h3 className='text-xl font-bold mb-2'>Parveen</h3>
              <p className='text-gray-400 mb-4'>
                Video Editing, Motion Graphics, and Animation Expert
              </p>
              <p>
                Parveen specializes in motion graphics and animation, creating
                visually dynamic elements that add depth and energy to our
                projects. His innovative approach ensures every animation is not
                only visually stunning but also aligned with the project's
                narrative.
              </p>
            </div>
          </div>
          <div className='group relative'>
            <div className='absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative z-10'>
              <Image
                src='/parth.jpg'
                alt='Parth'
                width={300}
                height={300}
                className='rounded-lg shadow-lg mb-4'
              />
              <h3 className='text-xl font-bold mb-2'>Parth</h3>
              <p className='text-gray-400 mb-4'>Content Writer</p>
              <p>
                Parth, our skilled Content Writer, brings 5 years of experience
                in crafting compelling and impactful narratives. With a talent
                for weaving words into engaging stories, Parth plays a vital
                role in shaping the voice of our brand and projects.
              </p>
            </div>
          </div>
          <div className='group relative'>
            <div className='absolute inset-0 bg-gradient-to-br from-teal-500/20 to-purple-500/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
            <div className='relative z-10'>
              <Image
                src='/atharv-singh.jpg'
                alt='Atharv Singh'
                width={300}
                height={300}
                className='rounded-lg shadow-lg mb-4'
              />
              <h3 className='text-xl font-bold mb-2'>Atharv Singh</h3>
              <p className='text-gray-400 mb-4'>Digital Marketing Partner</p>
              <p>
                Atharv Singh, our dedicated Digital Marketing Partner, brings 5
                years of expertise in driving impactful marketing strategies.
                With a deep understanding of the digital landscape, Atharv
                specializes in crafting campaigns that amplify brand visibility
                and engage target audiences effectively.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsPage;

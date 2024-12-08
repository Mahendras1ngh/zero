'use client';
import React, { useState, useEffect, useRef } from 'react';
import {
  Search,
  DollarSign,
  Share2,
  Mail,
  ChevronRight,
  Target,
  LayoutDashboard,
  TrendingUp,
  Users2,
  LineChart,
  Zap,
  ChevronDown,
} from 'lucide-react';
import HorizontalHeading from '../components/HorizontalHeading';
import DigitalMarketingHero from './DigitalMarketingHero';

export default function DigitalMarketingPage() {
  const [expandedCards, setExpandedCards] = useState({});

  const toggleCard = (serviceIndex, subIndex) => {
    setExpandedCards((prev) => ({
      ...prev,
      [`${serviceIndex}-${subIndex}`]: !prev[`${serviceIndex}-${subIndex}`],
    }));
  };
  // Detect scroll for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const mainServices = [
    {
      icon: Search,
      title: 'Search Engine Optimization (SEO)',
      color: 'from-blue-500',
      description:
        "Boost your website's visibility in search results with our comprehensive SEO services.",
      subServices: [
        {
          title: 'On-Page SEO',
          description:
            'Optimizing individual web pages to rank higher in search engine results',
          features: [
            'Keyword research & optimization',
            'Content optimization',
            'Meta tags optimization',
            'URL structure improvement',
          ],
        },
        {
          title: 'Off-Page SEO',
          description: 'Building authority through external optimization',
          features: [
            'Quality backlink building',
            'Domain authority improvement',
            'Brand mentions management',
            'Social signals optimization',
          ],
        },
        {
          title: 'Technical SEO',
          description: 'Ensuring your website is search-engine friendly',
          features: [
            'Site speed optimization',
            'Mobile responsiveness',
            'URL structure enhancement',
            'Backend optimization',
          ],
        },
        {
          title: 'Local SEO',
          description: 'Improving visibility in local search results',
          features: [
            'Google My Business optimization',
            'Local citations management',
            'Local keyword targeting',
            'Review management',
          ],
        },
      ],
    },
    {
      icon: DollarSign,
      title: 'Pay-Per-Click Advertising (PPC)',
      color: 'from-green-500',
      description:
        'Drive targeted traffic and maximize ROI with strategic PPC campaigns.',
      subServices: [
        {
          title: 'Google Ads',
          description: 'Comprehensive Google Ads management',
          features: [
            'Search campaign management',
            'Display advertising',
            'Retargeting campaigns',
            'ROI optimization',
          ],
        },
        {
          title: 'Social Media Ads',
          description: 'Targeted social media advertising',
          features: [
            'Facebook & Instagram Ads',
            'LinkedIn & Twitter Ads',
            'YouTube advertising',
            'WhatsApp marketing',
          ],
        },
        {
          title: 'Remarketing',
          description: 'Re-engage potential customers',
          features: [
            'Custom audience creation',
            'Cross-platform retargeting',
            'Dynamic remarketing',
            'Conversion tracking',
          ],
        },
      ],
    },
    {
      icon: Share2,
      title: 'Social Media Marketing',
      color: 'from-purple-500',
      description:
        'Build and engage your community across all major social platforms.',
      subServices: [
        {
          title: 'Strategy Development',
          description: 'Custom social media strategies',
          features: [
            'Platform selection',
            'Content calendar creation',
            'Engagement planning',
            'Performance tracking',
          ],
        },
        {
          title: 'Content Creation',
          description: 'Engaging social media content',
          features: [
            'Graphics design',
            'Video content',
            'Copy writing',
            'Brand storytelling',
          ],
        },
      ],
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      color: 'from-pink-500',
      description:
        'Create targeted email campaigns that convert and retain customers.',
      subServices: [
        {
          title: 'Campaign Management',
          description: 'Strategic email campaign execution',
          features: [
            'Campaign creation',
            'List segmentation',
            'Performance tracking',
            'A/B testing',
          ],
        },
        {
          title: 'Automation',
          description: 'Automated email marketing solutions',
          features: [
            'Drip campaigns',
            'Welcome sequences',
            'Follow-up automation',
            'Re-engagement campaigns',
          ],
        },
      ],
    },
    {
      icon: Target,
      title: 'Conversion Rate Optimization (CRO)',
      color: 'from-yellow-500',
      description:
        "Maximize your website's potential to convert visitors into customers.",
      subServices: [
        {
          title: 'A/B Testing',
          description: 'Data-driven optimization',
          features: [
            'Page variant testing',
            'Element testing',
            'User flow optimization',
            'Conversion tracking',
          ],
        },
        {
          title: 'UX Optimization',
          description: 'Enhanced user experience',
          features: [
            'Navigation improvement',
            'Page layout optimization',
            'Content structure',
            'Mobile optimization',
          ],
        },
      ],
    },
    {
      icon: LayoutDashboard,
      title: 'Analytics & Reporting',
      color: 'from-red-500',
      description:
        'Get actionable insights with comprehensive analytics and reporting.',
      subServices: [
        {
          title: 'Performance Analysis',
          description: 'In-depth data analysis',
          features: [
            'Traffic analysis',
            'User behavior tracking',
            'ROI measurement',
            'Competitive analysis',
          ],
        },
        {
          title: 'Custom Reporting',
          description: 'Detailed performance reports',
          features: [
            'Custom dashboards',
            'Regular reporting',
            'Insight generation',
            'Recommendation delivery',
          ],
        },
      ],
    },
  ];

  const whyChooseUs = [
    {
      icon: Target,
      title: 'Tailored Strategies',
      description:
        "We don't believe in one-size-fits-all solutions. Our strategies are tailored to your brand's unique goals and audience.",
    },
    {
      icon: TrendingUp,
      title: 'Results-Driven Approach',
      description:
        "We focus on achieving measurable results, whether it's increasing traffic, improving conversion rates, or growing your customer base.",
    },
    {
      icon: Users2,
      title: 'Expert Team',
      description:
        'Our team of certified digital marketing professionals stays up-to-date with the latest trends, tools, and best practices.',
    },
    {
      icon: Zap,
      title: 'End-to-End Solutions',
      description:
        'From SEO to social media and content marketing, we offer a full suite of services to meet your digital marketing needs.',
    },
    {
      icon: LineChart,
      title: 'Transparent Reporting',
      description:
        'We believe in complete transparency, providing you with regular updates and detailed reports to track campaign success.',
    },
  ];

  return (
    <div className='min-h-screen bg-black'>
      <DigitalMarketingHero />
      <div className='container mx-auto px-4 py-20'>
        <div className='max-w-4xl mx-auto mb-16'>
          <p className='text-xl text-gray-300 leading-relaxed'>
            At ZEROGRAPHY PRODUCTION,{' '}
            <span className='text-teal-400 font-medium'>
              Powered by Adroit Media
            </span>
            , We Elevate Your Business with Digital Marketing. Transform your
            online presence with expert digital marketing services. From SEO to
            social media marketing, PPC, and content creation, we craft
            strategies that drive traffic, boost engagement, and maximize ROI.
            Let's grow together!
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          {mainServices.map((service, serviceIndex) => (
            <div
              key={serviceIndex}
              className='group bg-[#111111] rounded-xl p-8 hover:bg-[#1a1a1a] transition-all duration-300 border border-gray-800'
            >
              <service.icon
                className={`w-12 h-12 mb-6 text-${
                  service.color?.split('-')[1]
                }-400`}
              />
              <h3 className='text-2xl font-bold text-white mb-4'>
                {service.title}
              </h3>
              <p className='text-gray-400 mb-8'>{service.description}</p>

              <div className='space-y-4'>
                {service.subServices.map((sub, subIndex) => (
                  <div key={subIndex} className='border-t border-gray-800 pt-4'>
                    <button
                      onClick={() => toggleCard(serviceIndex, subIndex)}
                      className='flex justify-between items-center w-full text-left'
                    >
                      <h4 className='text-lg font-semibold text-gray-300'>
                        {sub.title}
                      </h4>
                      {expandedCards[`${serviceIndex}-${subIndex}`] ? (
                        <ChevronDown className='text-gray-400' />
                      ) : (
                        <ChevronRight className='text-gray-400' />
                      )}
                    </button>

                    {expandedCards[`${serviceIndex}-${subIndex}`] && (
                      <div className='mt-4 space-y-2 pl-4'>
                        <p className='text-gray-400 text-sm mb-2'>
                          {sub.description}
                        </p>
                        {sub.features.map((feature, idx) => (
                          <p
                            key={idx}
                            className='text-gray-400 flex items-center'
                          >
                            <span className='w-1.5 h-1.5 bg-blue-400 rounded-full mr-2'></span>
                            {feature}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us Section */}
        <div className='py-20 bg-gray-900/30'>
          <div className='container mx-auto px-4'>
            <div className='max-w-4xl mx-auto text-center mb-16'>
              <h2 className='text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text'>
                Why Choose Us
              </h2>
              <p className='text-xl text-gray-400'>
                Partner with us for digital excellence and measurable growth
              </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto'>
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className='group relative bg-[#111111] rounded-xl p-8 hover:bg-[#1a1a1a] transition-all duration-300 border border-gray-800 hover:-translate-y-2'
                >
                  <div className='absolute inset-0 bg-gradient-to-br from-purple-500/20 to-transparent opacity-0 group-hover:opacity-5 rounded-xl transition-opacity duration-500' />

                  <div className='relative'>
                    <div
                      className={`w-16 h-16 mb-6 rounded-lg bg-gradient-to-br ${item.color}/10 to-transparent p-3 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon
                        className={`w-full h-full text-${
                          item.color?.split('-')[1]
                        }-400`}
                      />
                    </div>

                    <h3 className='text-xl font-bold text-white mb-4'>
                      {item.title}
                    </h3>

                    <p className='text-gray-400 leading-relaxed'>
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

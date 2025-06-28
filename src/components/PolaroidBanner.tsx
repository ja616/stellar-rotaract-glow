
import { useState } from 'react';

const PolaroidBanner = () => {
  const topRowPolaroids = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop',
      caption: 'Tree Plantation Drive 2024',
      rotation: 'rotate-2'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=300&h=300&fit=crop',
      caption: 'Tech Workshop Success',
      rotation: '-rotate-1'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=300&fit=crop',
      caption: 'Community Health Camp',
      rotation: 'rotate-1'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=300&fit=crop',
      caption: 'Leadership Summit',
      rotation: '-rotate-2'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=300&fit=crop',
      caption: 'Digital Literacy Program',
      rotation: 'rotate-2'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300&h=300&fit=crop',
      caption: 'Blood Donation Drive',
      rotation: '-rotate-1'
    }
  ];

  const bottomRowPolaroids = [
    {
      id: 7,
      image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=300&fit=crop',
      caption: 'Youth Leadership Program',
      rotation: 'rotate-1'
    },
    {
      id: 8,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=300&fit=crop',
      caption: 'Environmental Awareness',
      rotation: '-rotate-2'
    },
    {
      id: 9,
      image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=300&fit=crop',
      caption: 'Education Outreach',
      rotation: 'rotate-2'
    },
    {
      id: 10,
      image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&h=300&fit=crop',
      caption: 'Community Service',
      rotation: '-rotate-1'
    },
    {
      id: 11,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
      caption: 'Volunteer Training',
      rotation: 'rotate-1'
    },
    {
      id: 12,
      image: 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=300&h=300&fit=crop',
      caption: 'Impact Assessment',
      rotation: '-rotate-2'
    }
  ];

  const PolaroidCard = ({ polaroid }: { polaroid: any }) => (
    <div 
      className={`flex-shrink-0 transform ${polaroid.rotation} hover:rotate-0 hover:scale-110 transition-all duration-500 cursor-pointer group relative`}
    >
      <div className="bg-white p-4 shadow-2xl rounded-lg border border-gray-200 hover:shadow-accent-pink/20 hover:shadow-2xl">
        <img 
          src={polaroid.image}
          alt={polaroid.caption}
          className="w-56 h-56 object-cover rounded mb-4"
        />
        <p className="text-black text-center font-heading text-base font-medium">
          {polaroid.caption}
        </p>
        {/* Tape effect */}
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-yellow-200/70 rotate-12 rounded-sm"></div>
      </div>
    </div>
  );

  return (
    <section className="py-20 bg-deep-base overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-transparent bg-gradient-to-r from-accent-pink to-bright-purple bg-clip-text">
            Moments That Matter
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-heading">
            Every picture tells a story of impact, community, and positive change.
          </p>
        </div>
        
        {/* Dual Layer Scrolling Container */}
        <div className="relative space-y-8">
          {/* Top Row - Moving Right */}
          <div className="relative">
            <div className="flex space-x-8 animate-scroll">
              {/* First set */}
              {topRowPolaroids.map((polaroid) => (
                <PolaroidCard key={polaroid.id} polaroid={polaroid} />
              ))}
              
              {/* Duplicate set for seamless loop */}
              {topRowPolaroids.map((polaroid) => (
                <PolaroidCard key={`duplicate-top-${polaroid.id}`} polaroid={polaroid} />
              ))}
            </div>
          </div>

          {/* Bottom Row - Moving Left */}
          <div className="relative">
            <div className="flex space-x-8 animate-scroll-reverse">
              {/* First set */}
              {bottomRowPolaroids.map((polaroid) => (
                <PolaroidCard key={polaroid.id} polaroid={polaroid} />
              ))}
              
              {/* Duplicate set for seamless loop */}
              {bottomRowPolaroids.map((polaroid) => (
                <PolaroidCard key={`duplicate-bottom-${polaroid.id}`} polaroid={polaroid} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolaroidBanner;

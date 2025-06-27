
import { useState } from 'react';

const PolaroidBanner = () => {
  const polaroids = [
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

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
            Moments That Matter
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-heading">
            Every picture tells a story of impact, community, and positive change.
          </p>
        </div>
        
        {/* Scrolling Polaroid Container */}
        <div className="relative">
          <div className="flex space-x-8 animate-[scroll_30s_linear_infinite] hover:pause">
            {/* First set */}
            {polaroids.map((polaroid) => (
              <div 
                key={polaroid.id}
                className={`flex-shrink-0 transform ${polaroid.rotation} hover:rotate-0 hover:scale-110 transition-all duration-500 cursor-pointer group relative`}
              >
                <div className="bg-white p-4 shadow-2xl rounded-lg border border-gray-200 hover:shadow-accent-pink/20 hover:shadow-2xl">
                  <img 
                    src={polaroid.image}
                    alt={polaroid.caption}
                    className="w-64 h-64 object-cover rounded mb-4"
                  />
                  <p className="text-black text-center font-heading text-lg font-medium">
                    {polaroid.caption}
                  </p>
                  {/* Tape effect */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-yellow-200/70 rotate-12 rounded-sm"></div>
                </div>
              </div>
            ))}
            
            {/* Duplicate set for seamless loop */}
            {polaroids.map((polaroid) => (
              <div 
                key={`duplicate-${polaroid.id}`}
                className={`flex-shrink-0 transform ${polaroid.rotation} hover:rotate-0 hover:scale-110 transition-all duration-500 cursor-pointer group relative`}
              >
                <div className="bg-white p-4 shadow-2xl rounded-lg border border-gray-200 hover:shadow-accent-pink/20 hover:shadow-2xl">
                  <img 
                    src={polaroid.image}
                    alt={polaroid.caption}
                    className="w-64 h-64 object-cover rounded mb-4"
                  />
                  <p className="text-black text-center font-heading text-lg font-medium">
                    {polaroid.caption}
                  </p>
                  {/* Tape effect */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-16 h-6 bg-yellow-200/70 rotate-12 rounded-sm"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default PolaroidBanner;

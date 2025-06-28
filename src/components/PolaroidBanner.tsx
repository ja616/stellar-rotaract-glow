import { useEffect, useRef } from 'react';

const PolaroidBanner = () => {
  const scrollRef1 = useRef<HTMLDivElement>(null);
  const scrollRef2 = useRef<HTMLDivElement>(null);

  const images = [
    'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=250&h=300&fit=crop',
    'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=250&h=300&fit=crop',
    'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=250&h=300&fit=crop',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=250&h=300&fit=crop',
    'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=250&h=300&fit=crop',
    'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=250&h=300&fit=crop',
    'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=250&h=300&fit=crop',
    'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=250&h=300&fit=crop',
    'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=250&h=300&fit=crop',
    'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=250&h=300&fit=crop',
    'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=250&h=300&fit=crop',
    'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=250&h=300&fit=crop',
  ];

  useEffect(() => {
    if (scrollRef1.current) {
      const scrollWidth = scrollRef1.current.scrollWidth;
      const clientWidth = scrollRef1.current.clientWidth;

      if (scrollWidth > clientWidth) {
        scrollRef1.current.scrollLeft = 0;
      }
    }

    if (scrollRef2.current) {
      const scrollWidth = scrollRef2.current.scrollWidth;
      const clientWidth = scrollRef2.current.clientWidth;

      if (scrollWidth > clientWidth) {
        scrollRef2.current.scrollLeft = scrollRef2.current.scrollWidth - scrollRef2.current.clientWidth;
      }
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br from-section-bg via-dark-purple to-section-bg overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-accent-pink to-bright-purple bg-clip-text">
            Moments That Matter
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
            Capturing memories from our impactful journey together
          </p>
        </div>

        <div className="space-y-8">
          {/* First Row - Moving Right */}
          <div className="overflow-hidden">
            <div 
              ref={scrollRef1}
              className="flex space-x-6 animate-scroll-fast"
            >
              {[...images, ...images].map((src, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 transform hover:scale-110 hover:rotate-2 transition-all duration-500 cursor-pointer"
                >
                  <div className="bg-white p-3 rounded-lg shadow-2xl transform rotate-1 hover:rotate-3 transition-transform duration-300">
                    <img
                      src={src}
                      alt={`Moment ${index + 1}`}
                      className="w-48 h-60 object-cover rounded"
                    />
                    <div className="mt-2 text-center">
                      <div className="w-24 h-px bg-gray-400 mx-auto"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second Row - Moving Left */}
          <div className="overflow-hidden">
            <div 
              ref={scrollRef2}
              className="flex space-x-6 animate-scroll-reverse-fast"
            >
              {[...images.slice().reverse(), ...images.slice().reverse()].map((src, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 transform hover:scale-110 hover:-rotate-2 transition-all duration-500 cursor-pointer"
                >
                  <div className="bg-white p-3 rounded-lg shadow-2xl transform -rotate-1 hover:-rotate-3 transition-transform duration-300">
                    <img
                      src={src}
                      alt={`Memory ${index + 1}`}
                      className="w-48 h-60 object-cover rounded"
                    />
                    <div className="mt-2 text-center">
                      <div className="w-24 h-px bg-gray-400 mx-auto"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolaroidBanner;

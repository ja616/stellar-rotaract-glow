
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import StatsSection from '@/components/StatsSection';
import InitiativesSection from '@/components/InitiativesSection';
import UpcomingEvents from '@/components/UpcomingEvents';
import PolaroidBanner from '@/components/PolaroidBanner';

const Index = () => {
  const [currentText, setCurrentText] = useState(0);
  const heroTexts = [
    "Service Above Self",
    "Youth Leading Change",
    "Community First"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-black via-deep-base to-section-bg flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-highlight/20 to-button-active/20 animate-pulse"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-black mb-6 bg-gradient-to-r from-accent-pink to-button-active bg-clip-text text-transparent tracking-tight">
              ROTARACT CLUB
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-semibold tracking-wide">BMS Institute of Technology, Yelahanka</p>
            <div className="h-16 flex items-center justify-center">
              <p className="text-xl md:text-2xl font-bold text-accent-pink animate-fade-in tracking-wider">
                {heroTexts[currentText]}
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link to="/join">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-highlight to-button-active hover:from-button-active hover:to-purple-highlight text-white px-8 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-button-active/50"
              >
                Join Our Community
              </Button>
            </Link>
            <Link to="/projects">
              <Button 
                variant="outline" 
                size="lg"
                className="border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white px-8 py-4 text-lg font-bold transition-all duration-300"
              >
                Explore Projects
              </Button>
            </Link>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-accent-pink/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-10 w-16 h-16 bg-purple-highlight/20 rounded-full animate-bounce delay-1000"></div>
      </section>

      <StatsSection />
      <InitiativesSection />
      <UpcomingEvents />
      <PolaroidBanner />
      
      {/* Call to Action Section */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white tracking-tight">Ready to Make a Difference?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto font-medium leading-relaxed">
            Join hundreds of young leaders making positive impact in our community. Together, we can create lasting change.
          </p>
          <Link to="/join">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-highlight to-button-active hover:from-button-active hover:to-purple-highlight text-white px-12 py-6 text-xl font-bold transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-button-active/50"
            >
              Join Rotaract BMSY
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

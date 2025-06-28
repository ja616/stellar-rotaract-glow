
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Lightbulb, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PolaroidBanner from '@/components/PolaroidBanner';
import StatsSection from '@/components/StatsSection';

const Index = () => {
  const [currentText, setCurrentText] = useState(0);
  const heroTexts = [
    "Service Above Self",
    "Youth Leading Change", 
    "Community First",
    "Building Tomorrow"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % heroTexts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const initiatives = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Environment",
      description: "Sustainable living, tree plantation, and waste management initiatives for a greener tomorrow.",
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Education", 
      description: "Digital literacy, scholarships, and educational resource distribution programs.",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health",
      description: "Health camps, blood donation drives, and mental wellness awareness campaigns.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership",
      description: "Youth development workshops and leadership training for tomorrow's changemakers.",
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-base via-section-bg to-deep-base text-white font-poppins overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-dark-purple/20 via-deep-base to-purple-accent/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-accent-pink/10 rounded-full blur-3xl animate-glow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-bright-purple/10 rounded-full blur-3xl animate-glow delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10 max-w-4xl">
          <div className="space-y-6 animate-fade-in">
            {/* Logo Section */}
            <div className="flex justify-center items-center space-x-8 mb-6 transform hover:scale-105 transition-all duration-700">
              <img 
                src="/lovable-uploads/f993c44b-d4fd-4f34-bca0-651a08316ee6.png" 
                alt="Rotaract Club Logo" 
                className="h-16 md:h-20 w-auto animate-fade-in delay-300"
              />
            </div>
            
            <div className="space-y-6">              
              <div className="h-12 flex items-center justify-center">
                <p className="text-xl md:text-3xl font-bold text-transparent bg-gradient-to-r from-accent-pink via-pink-bright to-bright-purple bg-clip-text animate-glow">
                  {heroTexts[currentText]}
                </p>
              </div>
              
              <p className="text-base md:text-lg text-gray-300 max-w-xl mx-auto font-light leading-relaxed opacity-0 animate-fade-in delay-500">
                Empowering youth to create positive change in our community through service, leadership, and fellowship.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 opacity-0 animate-fade-in delay-700">
              <Link to="/join">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-bright-purple to-pink-bright hover:from-accent-pink hover:to-bright-purple text-white px-6 py-3 text-base font-semibold transition-all duration-500 rounded-full group transform hover:scale-110 hover:shadow-2xl hover:shadow-accent-pink/25"
                >
                  Join Our Community
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white px-6 py-3 text-base font-semibold transition-all duration-500 rounded-full bg-transparent transform hover:scale-110"
                >
                  Explore Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <StatsSection />

      {/* About Us Section */}
      <section className="py-16 bg-gradient-to-r from-section-bg via-dark-purple to-section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-accent-pink to-bright-purple bg-clip-text">
              About Us
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
              Discover who we are and what drives our mission
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-gradient-to-br from-dark-accent/50 to-purple-accent/50 backdrop-blur-sm rounded-3xl p-6 md:p-8 border border-accent-pink/20 hover:border-accent-pink/40 transition-all duration-500 transform hover:scale-105">
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p className="text-base">
                  The Rotaract Club of BMS Institute of Technology, Yelahanka, stands as a beacon of youth empowerment and community service. We embody "Service Above Self" while fostering leadership and positive change.
                </p>
                <p className="text-base">
                  Our journey is marked by countless success stories - from health camps and educational workshops to environmental initiatives and community development programs.
                </p>
                <div className="mt-6 text-center">
                  <Link to="/team">
                    <Button 
                      className="bg-gradient-to-r from-bright-purple to-pink-bright hover:from-accent-pink hover:to-bright-purple text-white px-6 py-2 font-semibold rounded-full transform hover:scale-110 transition-all duration-300"
                    >
                      Meet Our Team
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Moments That Matter (Polaroid Banner) */}
      <PolaroidBanner />

      {/* Initiatives Section */}
      <section className="py-16 bg-gradient-to-br from-deep-base via-section-bg to-deep-base">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-accent-pink to-bright-purple bg-clip-text">
              Our Impact Areas
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto font-light">
              Four key pillars that drive our mission to create lasting positive change
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((initiative, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-dark-accent/50 to-purple-accent/50 backdrop-blur-sm rounded-2xl p-6 text-center group hover:bg-gradient-to-br hover:from-purple-accent/30 hover:to-bright-purple/30 transition-all duration-500 border border-accent-pink/20 hover:border-accent-pink/50 transform hover:scale-105 hover:shadow-2xl hover:shadow-accent-pink/10"
              >
                <div className="text-accent-pink mb-4 flex justify-center group-hover:scale-125 transition-transform duration-500">
                  {initiative.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3 text-white group-hover:text-pink-bright transition-colors duration-300">
                  {initiative.title}
                </h3>
                <p className="text-gray-300 leading-relaxed font-light text-sm">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-br from-deep-base via-dark-purple/20 to-deep-base">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-accent-pink to-bright-purple bg-clip-text">
            Ready to Make an Impact?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-xl mx-auto font-light leading-relaxed">
            Join a community of passionate young leaders committed to creating positive change.
          </p>
          <Link to="/join">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-bright-purple to-pink-bright hover:from-accent-pink hover:to-bright-purple text-white px-8 py-4 text-lg font-semibold transition-all duration-500 rounded-full group transform hover:scale-110 hover:shadow-2xl hover:shadow-accent-pink/25"
            >
              Join Rotaract BMSY
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

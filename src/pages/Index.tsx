
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Lightbulb, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import PolaroidBanner from '@/components/PolaroidBanner';

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

  const stats = [
    { number: "45+", label: "Projects", icon: "📊" },
    { number: "120+", label: "Members", icon: "👥" },
    { number: "8", label: "Years", icon: "🏆" },
    { number: "2500+", label: "Lives Impacted", icon: "❤️" }
  ];

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

  const upcomingEvents = [
    {
      date: "July 15",
      title: "Clean Water Initiative",
      location: "Yelahanka Lake",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop"
    },
    {
      date: "July 22", 
      title: "Digital Literacy Workshop",
      location: "BMS Institute",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop"
    },
    {
      date: "July 28",
      title: "Health & Wellness Camp", 
      location: "Community Center",
      image: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-poppins overflow-x-hidden">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-blue-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-6 text-center relative z-10 max-w-6xl">
          <div className="space-y-8 animate-fade-in">
            {/* Logo Section */}
            <div className="flex justify-center items-center space-x-8 mb-8 transform hover:scale-105 transition-all duration-700">
              <img 
                src="/lovable-uploads/5d412404-e118-4763-a5fb-69304897cc03.png" 
                alt="Rotaract Club Logos" 
                className="h-24 w-auto animate-fade-in delay-300"
              />
            </div>
            
            <div className="space-y-8">              
              <div className="h-16 flex items-center justify-center">
                <p className="text-2xl md:text-4xl font-bold text-transparent bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text animate-pulse">
                  {heroTexts[currentText]}
                </p>
              </div>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed opacity-0 animate-fade-in delay-500">
                Empowering youth to create positive change in our community through service, leadership, and fellowship.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 opacity-0 animate-fade-in delay-700">
              <Link to="/join">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-8 py-4 text-lg font-semibold transition-all duration-500 rounded-full group transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25"
                >
                  Join Our Community
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg font-semibold transition-all duration-500 rounded-full bg-transparent transform hover:scale-110"
                >
                  Explore Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group transform hover:scale-110 transition-all duration-500">
                <div className="mb-4 text-4xl animate-bounce">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Moments That Matter (Previously Polaroid Banner) */}
      <PolaroidBanner />

      {/* Initiatives Section */}
      <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
              Our Impact Areas
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto font-light">
              Four key pillars that drive our mission to create lasting positive change
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {initiatives.map((initiative, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-8 text-center group hover:bg-gradient-to-br hover:from-purple-900/30 hover:to-blue-900/30 transition-all duration-500 border border-gray-700 hover:border-purple-500/50 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10"
              >
                <div className="text-purple-400 mb-6 flex justify-center group-hover:scale-125 transition-transform duration-500">
                  {initiative.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white group-hover:text-purple-300 transition-colors duration-300">
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

      {/* Upcoming Events */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
              Upcoming Events
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Join us in making a difference. Be part of the change you want to see.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingEvents.map((event, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 backdrop-blur-sm rounded-2xl overflow-hidden group hover:bg-gradient-to-br hover:from-purple-900/40 hover:to-blue-900/40 transition-all duration-500 border border-gray-700 hover:border-purple-500/50 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {event.date}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2 text-white group-hover:text-purple-300 transition-colors duration-300">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">📍 {event.location}</p>
                  <Button 
                    size="sm"
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white font-medium rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Register Now
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/projects">
              <Button 
                variant="outline"
                className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white px-8 py-3 font-medium rounded-full bg-transparent transform hover:scale-110 transition-all duration-300"
              >
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Join a community of passionate young leaders committed to creating positive change. 
            Your journey of service and growth starts here.
          </p>
          <Link to="/join">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white px-12 py-6 text-xl font-semibold transition-all duration-500 rounded-full group transform hover:scale-110 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              Join Rotaract BMSY
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

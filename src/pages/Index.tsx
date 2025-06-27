
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Heart, Lightbulb, Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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
      gradient: "from-green-500 to-emerald-600"
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Education",
      description: "Digital literacy, scholarships, and educational resource distribution programs.",
      gradient: "from-blue-500 to-cyan-600"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Health",
      description: "Health camps, blood donation drives, and mental wellness awareness campaigns.",
      gradient: "from-red-500 to-pink-600"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Leadership",
      description: "Youth development workshops and leadership training for tomorrow's changemakers.",
      gradient: "from-purple-500 to-violet-600"
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
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-deep-base to-section-bg">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-highlight/5 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10 max-w-6xl">
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold leading-tight">
                <span className="block text-white">Rotaract Club</span>
                <span className="block bg-gradient-to-r from-accent-pink via-purple-highlight to-button-active bg-clip-text text-transparent">
                  BMS Yelahanka
                </span>
              </h1>
              
              <div className="h-12 flex items-center justify-center">
                <p className="text-xl md:text-2xl font-heading font-medium text-accent-pink transition-all duration-1000">
                  {heroTexts[currentText]}
                </p>
              </div>
              
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
                Empowering youth to create positive change in our community through service, leadership, and fellowship.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <Link to="/join">
                <Button 
                  size="lg"
                  className="bg-gradient-to-r from-accent-pink to-purple-highlight hover:from-purple-highlight hover:to-button-active text-white px-8 py-4 text-lg font-heading font-semibold transition-all duration-300 rounded-full group"
                >
                  Join Our Community
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link to="/projects">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white px-8 py-4 text-lg font-heading font-semibold transition-all duration-300 rounded-full bg-transparent"
                >
                  Explore Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="mb-4 text-4xl">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-serif font-bold text-white mb-2 group-hover:text-accent-pink transition-colors">
                  {stat.number}
                </div>
                <div className="text-gray-400 font-heading font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-20 bg-deep-base">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
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
                className="bg-black/40 backdrop-blur-sm rounded-2xl p-8 text-center group hover:bg-black/60 transition-all duration-300 border border-gray-800 hover:border-accent-pink/30"
              >
                <div className="text-accent-pink mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {initiative.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold mb-4 text-white group-hover:text-accent-pink transition-colors">
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
      <section className="py-20 bg-section-bg">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
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
                className="bg-black/40 backdrop-blur-sm rounded-2xl overflow-hidden group hover:bg-black/60 transition-all duration-300 border border-gray-800 hover:border-accent-pink/30"
              >
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 bg-accent-pink text-white px-3 py-1 rounded-full text-sm font-heading font-medium">
                    {event.date}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-lg font-heading font-semibold mb-2 text-white group-hover:text-accent-pink transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">📍 {event.location}</p>
                  <Button 
                    size="sm"
                    className="w-full bg-gradient-to-r from-purple-highlight to-button-active hover:from-button-active hover:to-purple-highlight text-white font-heading font-medium rounded-full"
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
                className="border-2 border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white px-8 py-3 font-heading font-medium rounded-full bg-transparent"
              >
                View All Events
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-deep-base to-black">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-white">
            Ready to Make an Impact?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Join a community of passionate young leaders committed to creating positive change. 
            Your journey of service and growth starts here.
          </p>
          <Link to="/join">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-accent-pink to-purple-highlight hover:from-purple-highlight hover:to-button-active text-white px-12 py-6 text-xl font-heading font-semibold transition-all duration-300 rounded-full group"
            >
              Join Rotaract BMSY
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

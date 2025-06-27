
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { MapPin, Phone, Mail, Clock, Star } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const reviews = [
    {
      name: "Priya Sharma",
      text: "Amazing experience with Rotaract BMSY! The community service projects are truly impactful.",
      rating: 5
    },
    {
      name: "Arjun Patel", 
      text: "Great leadership opportunities and wonderful team to work with. Highly recommend joining!",
      rating: 5
    },
    {
      name: "Sneha Kumar",
      text: "The workshops and events are well organized. Really helped me grow personally and professionally.",
      rating: 5
    }
  ];

  const instagramPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop',
      caption: 'Tree Plantation Drive 2024'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=300&h=300&fit=crop',
      caption: 'Tech Workshop Success'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=300&fit=crop',
      caption: 'Health Camp Initiative'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=300&fit=crop',
      caption: 'Leadership Development'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=300&fit=crop',
      caption: 'Community Outreach'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300&h=300&fit=crop',
      caption: 'Blood Donation Camp'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white font-poppins">
      <Header />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-purple-900/20 to-black">
          <div className="container mx-auto px-6 text-center">
            <div className="mb-8 flex justify-center animate-fade-in">
              <img 
                src="/lovable-uploads/5d412404-e118-4763-a5fb-69304897cc03.png" 
                alt="Rotaract Club Logos" 
                className="h-20 w-auto"
              />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to make a difference? Connect with us and be part of the change you want to see in the world.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text mb-8">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4 group transform hover:scale-105 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-purple-400 mt-1 group-hover:text-blue-400 transition-colors" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">Address</h3>
                      <p className="text-gray-300">
                        BMS Institute of Technology<br />
                        Yelahanka, Bangalore - 560064
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group transform hover:scale-105 transition-all duration-300">
                    <Mail className="w-6 h-6 text-purple-400 mt-1 group-hover:text-blue-400 transition-colors" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">Email</h3>
                      <p className="text-gray-300">rotaract.bmsy@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group transform hover:scale-105 transition-all duration-300">
                    <Phone className="w-6 h-6 text-purple-400 mt-1 group-hover:text-blue-400 transition-colors" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">Phone</h3>
                      <p className="text-gray-300">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 group transform hover:scale-105 transition-all duration-300">
                    <Clock className="w-6 h-6 text-purple-400 mt-1 group-hover:text-blue-400 transition-colors" />
                    <div>
                      <h3 className="font-semibold text-white mb-1">Meeting Hours</h3>
                      <p className="text-gray-300">Every Friday, 4:00 PM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-8">
                  <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-lg p-4 text-center border border-purple-500/20">
                    <div className="bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded h-48 flex items-center justify-center">
                      <p className="text-gray-400">Interactive Map Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-purple-500/30 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-6">
                      Send us a Message
                    </h2>
                    
                    <form className="space-y-6">
                      <div>
                        <label className="block text-gray-300 mb-2">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-all duration-300"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-300 mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-purple-400 focus:outline-none transition-all duration-300"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-300 mb-2">Message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-purple-400 focus:outline-none resize-none transition-all duration-300"
                          placeholder="Tell us how you'd like to get involved..."
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 text-white py-3 font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
                      >
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text">
              What Our Members Say
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <Card key={index} className="bg-gradient-to-br from-gray-800/40 to-gray-900/40 border-purple-500/30 hover:border-purple-500/60 transition-all duration-500 backdrop-blur-sm transform hover:scale-105">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">"{review.text}"</p>
                    <p className="text-purple-400 font-semibold">- {review.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Grid */}
        <section className="py-20 bg-gradient-to-r from-gray-900 via-black to-gray-900">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text mb-4">
                Follow Us on Instagram
              </h2>
              <p className="text-gray-300 mb-6">
                Stay updated with our latest activities and events
              </p>
              <a 
                href="https://www.instagram.com/rota_bms/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-purple-400 hover:text-blue-400 transition-colors font-semibold"
              >
                @rota_bms
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {instagramPosts.map((post) => (
                <div 
                  key={post.id}
                  className="group cursor-pointer relative overflow-hidden rounded-lg hover:scale-110 transition-all duration-500 border border-purple-500/20 hover:border-purple-400/60"
                >
                  <img 
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-32 md:h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-2">
                    <p className="text-white text-xs text-center font-medium">
                      {post.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;


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
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-deep-base to-section-bg">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-accent-pink to-button-active bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-heading">
              Ready to make a difference? Connect with us and be part of the change you want to see in the world.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <h2 className="text-3xl font-bold text-white mb-8 font-heading">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-accent-pink mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-1 font-heading">Address</h3>
                      <p className="text-gray-300 font-sans">
                        BMS Institute of Technology<br />
                        Yelahanka, Bangalore - 560064
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-accent-pink mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-1 font-heading">Email</h3>
                      <p className="text-gray-300 font-sans">rotaract.bmsy@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-accent-pink mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-1 font-heading">Phone</h3>
                      <p className="text-gray-300 font-sans">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-accent-pink mt-1" />
                    <div>
                      <h3 className="font-semibold text-white mb-1 font-heading">Meeting Hours</h3>
                      <p className="text-gray-300 font-sans">Every Friday, 4:00 PM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="mt-8">
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <div className="bg-gray-700 rounded h-48 flex items-center justify-center">
                      <p className="text-gray-400 font-sans">Interactive Map Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card className="bg-black/50 border-accent-pink/20">
                  <CardContent className="p-8">
                    <h2 className="text-3xl font-bold text-white mb-6 font-heading">
                      Send us a Message
                    </h2>
                    
                    <form className="space-y-6">
                      <div>
                        <label className="block text-gray-300 mb-2 font-heading">Name</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-accent-pink focus:outline-none font-sans"
                          placeholder="Your full name"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-300 mb-2 font-heading">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-accent-pink focus:outline-none font-sans"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-gray-300 mb-2 font-heading">Message</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          rows={5}
                          className="w-full px-4 py-3 bg-black/30 border border-gray-600 rounded-lg text-white focus:border-accent-pink focus:outline-none resize-none font-sans"
                          placeholder="Tell us how you'd like to get involved..."
                        />
                      </div>
                      
                      <Button 
                        type="submit"
                        className="w-full bg-gradient-to-r from-accent-pink to-purple-highlight hover:from-purple-highlight hover:to-button-active text-white py-3 font-semibold font-heading rounded-lg"
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
        <section className="py-20 bg-deep-base">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12 text-white font-heading">
              What Our Members Say
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review, index) => (
                <Card key={index} className="bg-black/40 border-accent-pink/20 hover:border-accent-pink/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic font-sans">"{review.text}"</p>
                    <p className="text-accent-pink font-semibold font-heading">- {review.name}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Grid */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4 font-heading">
                Follow Us on Instagram
              </h2>
              <p className="text-gray-300 mb-6 font-sans">
                Stay updated with our latest activities and events
              </p>
              <a 
                href="https://www.instagram.com/rota_bms/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-accent-pink hover:text-button-active transition-colors font-heading font-semibold"
              >
                @rota_bms
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {instagramPosts.map((post) => (
                <div 
                  key={post.id}
                  className="group cursor-pointer relative overflow-hidden rounded-lg hover:scale-105 transition-transform duration-300"
                >
                  <img 
                    src={post.image}
                    alt={post.caption}
                    className="w-full h-32 md:h-40 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                    <p className="text-white text-xs text-center font-sans">
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

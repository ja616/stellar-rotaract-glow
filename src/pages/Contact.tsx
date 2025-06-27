
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Instagram, Linkedin } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  const instagramPosts = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=300&h=300&fit=crop',
      caption: 'Tree plantation drive success!'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=300&h=300&fit=crop',
      caption: 'Digital literacy workshop'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=300&h=300&fit=crop',
      caption: 'Community health camp'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=300&h=300&fit=crop',
      caption: 'Leadership training session'
    },
    {
      id: 5,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=300&h=300&fit=crop',
      caption: 'Tech for good workshop'
    },
    {
      id: 6,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop',
      caption: 'Community outreach program'
    }
  ];

  const reviews = [
    {
      id: 1,
      name: 'Arun Prasad',
      role: 'Alumni',
      review: 'Rotaract BMSY transformed my perspective on community service. The leadership skills I gained here continue to benefit me professionally.',
      rating: 5
    },
    {
      id: 2,
      name: 'Meera Krishnan',
      role: 'Community Partner',
      review: 'Working with Rotaract BMSY on various projects has been incredible. Their dedication and professionalism are commendable.',
      rating: 5
    },
    {
      id: 3,
      name: 'Rajesh Kumar',
      role: 'Parent',
      review: 'My daughter has grown tremendously since joining Rotaract. The values and skills she has learned are invaluable.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-deep-base to-section-bg">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-pink to-button-active bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Have questions about our club or want to collaborate? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 bg-deep-base">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div>
                <h2 className="text-3xl font-bold mb-8 text-white">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-highlight to-button-active rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                      <p className="text-gray-300">
                        BMS Institute of Technology<br />
                        Yelahanka, Bangalore - 560064<br />
                        Karnataka, India
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-highlight to-button-active rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                      <p className="text-gray-300">+91 99999 99999</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-highlight to-button-active rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                      <p className="text-gray-300">rotaract@bmsinstitute.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-highlight to-button-active rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock size={20} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Office Hours</h3>
                      <p className="text-gray-300">
                        Monday - Friday: 9:00 AM - 5:00 PM<br />
                        Saturday: 9:00 AM - 2:00 PM
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Social Media */}
                <div className="mt-8">
                  <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.instagram.com/rota_bms/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 bg-gradient-to-r from-purple-highlight to-button-active rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Instagram size={20} />
                    </a>
                    <a 
                      href="#" 
                      className="w-12 h-12 bg-gradient-to-r from-purple-highlight to-button-active rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
                    >
                      <Linkedin size={20} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="bg-black/50 border-accent-pink/20">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-bold mb-6 text-white">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="bg-white/10 border-accent-pink/30 text-white placeholder:text-gray-400 focus:border-accent-pink"
                        placeholder="Enter your full name"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="bg-white/10 border-accent-pink/30 text-white placeholder:text-gray-400 focus:border-accent-pink"
                        placeholder="Enter your email address"
                        required
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="bg-white/10 border-accent-pink/30 text-white placeholder:text-gray-400 focus:border-accent-pink resize-none"
                        placeholder="Tell us how we can help you..."
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-gradient-to-r from-purple-highlight to-button-active hover:from-button-active hover:to-purple-highlight text-white font-semibold py-3 transition-all duration-300"
                    >
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Find Us
              </h2>
              <p className="text-xl text-gray-300">
                Visit us at BMS Institute of Technology, Yelahanka
              </p>
            </div>
            
            <div className="bg-black/50 border border-accent-pink/20 rounded-lg overflow-hidden">
              <div className="aspect-video w-full bg-gradient-to-r from-purple-highlight/20 to-button-active/20 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="mx-auto mb-4 text-accent-pink" size={48} />
                  <h3 className="text-xl font-semibold text-white mb-2">Interactive Map</h3>
                  <p className="text-gray-300">
                    Google Maps integration will be embedded here
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-deep-base">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                What People Say
              </h2>
              <p className="text-xl text-gray-300">
                Hear from our community members and partners
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {reviews.map((review) => (
                <Card key={review.id} className="bg-black/50 border-accent-pink/20 hover:border-accent-pink/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="text-yellow-400 text-xl">★</span>
                      ))}
                    </div>
                    <p className="text-gray-300 mb-4 italic">"{review.review}"</p>
                    <div>
                      <p className="text-white font-semibold">{review.name}</p>
                      <p className="text-accent-pink text-sm">{review.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Instagram Grid */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Follow Our Journey
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Check out our latest activities on Instagram
              </p>
              <Button 
                className="bg-gradient-to-r from-purple-highlight to-button-active hover:from-button-active hover:to-purple-highlight text-white font-semibold px-6 py-3"
                onClick={() => window.open('https://www.instagram.com/rota_bms/', '_blank')}
              >
                <Instagram className="mr-2" size={20} />
                Follow @rota_bms
              </Button>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {instagramPosts.map((post) => (
                <div 
                  key={post.id}
                  className="aspect-square relative overflow-hidden rounded-lg group cursor-pointer border-2 border-transparent hover:border-accent-pink transition-all duration-300"
                >
                  <img 
                    src={post.image} 
                    alt={post.caption}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <p className="text-white text-sm font-medium text-center px-2">
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

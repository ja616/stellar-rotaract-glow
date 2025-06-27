
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from 'lucide-react';

const UpcomingEvents = () => {
  const events = [
    {
      id: 1,
      title: 'Clean Water Initiative',
      date: 'July 15, 2024',
      time: '9:00 AM',
      location: 'Yelahanka Lake',
      description: 'Join us for a community clean-up drive and water quality awareness program.',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
      category: 'Environment',
      registrations: 45
    },
    {
      id: 2,
      title: 'Digital Literacy Workshop',
      date: 'July 22, 2024',
      time: '2:00 PM',
      location: 'BMS Institute',
      description: 'Empowering elderly citizens with basic computer and smartphone skills.',
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop',
      category: 'Education',
      registrations: 32
    },
    {
      id: 3,
      title: 'Health & Wellness Camp',
      date: 'July 28, 2024',
      time: '8:00 AM',
      location: 'Community Center',
      description: 'Free health checkups, blood donation drive, and wellness consultations.',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop',
      category: 'Health',
      registrations: 67
    }
  ];

  return (
    <section className="py-20 bg-deep-base">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent-pink to-button-active bg-clip-text text-transparent">
            Upcoming Events
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Be part of the change. Join our upcoming initiatives and make a difference in the community.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card 
              key={event.id}
              className="bg-black/50 border-accent-pink/20 hover:border-accent-pink/50 transition-all duration-300 group hover:transform hover:scale-105 overflow-hidden"
            >
              <div className="relative">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-gradient-to-r from-purple-highlight to-button-active text-white">
                    {event.category}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm px-3 py-2 rounded-full">
                  <span className="text-accent-pink font-semibold text-sm">{event.registrations} registered</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent-pink transition-colors duration-300">
                  {event.title}
                </h3>
                
                <div className="flex items-center text-gray-300 mb-3">
                  <Calendar size={16} className="mr-2 text-accent-pink" />
                  <span className="text-sm">{event.date} • {event.time}</span>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {event.description}
                </p>
                
                <p className="text-gray-400 text-xs mb-4">📍 {event.location}</p>
                
                <Button 
                  className="w-full bg-gradient-to-r from-purple-highlight to-button-active hover:from-button-active hover:to-purple-highlight text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-button-active/50"
                >
                  Register Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            variant="outline"
            className="border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
          >
            View All Events
          </Button>
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;

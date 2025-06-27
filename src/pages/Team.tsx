
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Linkedin, Instagram, Mail } from 'lucide-react';

const Team = () => {
  const coreCouncil = [
    {
      id: 1,
      name: 'Arjun Sharma',
      role: 'President',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&face',
      quote: 'Leading with purpose, serving with passion.',
      department: 'Computer Science'
    },
    {
      id: 2,
      name: 'Priya Nair',
      role: 'Vice President',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b734?w=300&h=300&fit=crop&face',
      quote: 'Empowering youth to create meaningful change.',
      department: 'Electronics'
    },
    {
      id: 3,
      name: 'Rahul Kumar',
      role: 'Secretary',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&face',
      quote: 'Organization is the key to impact.',
      department: 'Mechanical'
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      role: 'Treasurer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&face',
      quote: 'Managing resources for maximum community benefit.',
      department: 'Information Science'
    }
  ];

  const directors = [
    {
      id: 5,
      name: 'Vikram Singh',
      role: 'Community Service Director',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&face',
      department: 'Civil Engineering'
    },
    {
      id: 6,
      name: 'Ananya Gupta',
      role: 'Public Relations Director',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&face',
      department: 'Computer Science'
    },
    {
      id: 7,
      name: 'Karthik Rao',
      role: 'International Service Director',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&face',
      department: 'Electronics'
    },
    {
      id: 8,
      name: 'Divya Krishnan',
      role: 'Club Service Director',
      image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&face',
      department: 'Information Science'
    }
  ];

  const TeamCard = ({ member, isCore = false }) => (
    <Card className="bg-section-bg/80 border-accent-pink/20 hover:border-accent-pink/50 transition-all duration-300 group hover:transform hover:scale-105">
      <CardContent className="p-6 text-center">
        <div className="relative mb-6">
          <img 
            src={member.image} 
            alt={member.name}
            className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-accent-pink/30 group-hover:border-accent-pink transition-colors duration-300"
          />
          {isCore && (
            <Badge className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-purple-highlight to-button-active text-white">
              Core Council
            </Badge>
          )}
        </div>
        
        <h3 className="text-xl font-bold mb-2 text-white group-hover:text-accent-pink transition-colors duration-300">
          {member.name}
        </h3>
        
        <p className="text-accent-pink font-semibold mb-2">{member.role}</p>
        <p className="text-gray-400 text-sm mb-4">{member.department}</p>
        
        {member.quote && (
          <p className="text-gray-300 text-sm italic mb-4 leading-relaxed">
            "{member.quote}"
          </p>
        )}
        
        <div className="flex justify-center space-x-3">
          <button className="w-8 h-8 bg-gradient-to-r from-purple-highlight to-button-active rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <Linkedin size={16} />
          </button>
          <button className="w-8 h-8 bg-gradient-to-r from-purple-highlight to-button-active rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
            <Mail size={16} />
          </button>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      <div className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-deep-base to-section-bg">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-accent-pink to-button-active bg-clip-text text-transparent">
              Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the passionate individuals driving positive change in our community through dedication and service.
            </p>
          </div>
        </section>

        {/* Core Council */}
        <section className="py-20 bg-deep-base">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Core Council
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The leadership team steering our club's vision and mission.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreCouncil.map((member) => (
                <TeamCard key={member.id} member={member} isCore={true} />
              ))}
            </div>
          </div>
        </section>

        {/* Directors */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Directors
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                The dedicated directors leading our various service initiatives.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {directors.map((member) => (
                <TeamCard key={member.id} member={member} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Team;

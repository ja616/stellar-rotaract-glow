
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, MapPin, Users } from 'lucide-react';

const Projects = () => {
  const ongoingProjects = [
    {
      id: 1,
      title: 'Digital Literacy for Seniors',
      date: 'Dec 2024 - Ongoing',
      location: 'Community Centers',
      description: 'Teaching basic computer and smartphone skills to elderly citizens, helping them navigate the digital world.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      participants: 45,
      status: 'Active'
    },
    {
      id: 2,
      title: 'Clean Water Initiative',
      date: 'Nov 2024 - Ongoing',
      location: 'Yelahanka Region',
      description: 'Installing water purification systems and conducting awareness programs about water conservation.',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
      participants: 32,
      status: 'Active'
    },
    {
      id: 3,
      title: 'Skill Development Workshops',
      date: 'Jan 2025 - Ongoing',
      location: 'BMS Institute',
      description: 'Conducting workshops on various skills including coding, entrepreneurship, and communication.',
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop',
      participants: 78,
      status: 'Active'
    }
  ];

  const previousProjects = [
    {
      id: 4,
      title: 'Tree Plantation Drive 2024',
      date: 'Aug 2024',
      location: 'Yelahanka New Town',
      description: 'Successfully planted 500+ saplings across the Yelahanka region with local community participation.',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop',
      participants: 120,
      status: 'Completed'
    },
    {
      id: 5,
      title: 'Blood Donation Camp',
      date: 'June 2024',
      location: 'BMS Institute',
      description: 'Organized a successful blood donation drive collecting 85 units of blood for local hospitals.',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop',
      participants: 150,
      status: 'Completed'
    },
    {
      id: 6,
      title: 'Educational Supply Distribution',
      date: 'April 2024',
      location: 'Rural Schools',
      description: 'Distributed notebooks, pens, and educational materials to underprivileged students.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
      participants: 60,
      status: 'Completed'
    }
  ];

  const ProjectCard = ({ project, isOngoing = false }) => (
    <Card className="bg-black/50 border-accent-pink/20 hover:border-accent-pink/50 transition-all duration-300 group hover:transform hover:scale-105">
      <div className="relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge className={`${isOngoing ? 'bg-green-500' : 'bg-purple-highlight'} text-white`}>
            {project.status}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent-pink transition-colors duration-300">
          {project.title}
        </h3>
        
        <div className="flex items-center text-gray-300 mb-2">
          <Calendar size={16} className="mr-2 text-accent-pink" />
          <span className="text-sm">{project.date}</span>
        </div>
        
        <div className="flex items-center text-gray-300 mb-2">
          <MapPin size={16} className="mr-2 text-accent-pink" />
          <span className="text-sm">{project.location}</span>
        </div>
        
        <div className="flex items-center text-gray-300 mb-4">
          <Users size={16} className="mr-2 text-accent-pink" />
          <span className="text-sm">{project.participants} participants</span>
        </div>
        
        <p className="text-gray-300 text-sm mb-4 leading-relaxed">
          {project.description}
        </p>
        
        <Button 
          className="w-full bg-gradient-to-r from-purple-highlight to-button-active hover:from-button-active hover:to-purple-highlight text-white font-semibold transition-all duration-300"
        >
          View Details
        </Button>
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
              Our Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover the impactful initiatives we've undertaken to serve our community and create lasting positive change.
            </p>
          </div>
        </section>

        {/* Projects Tabs */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-6">
            <Tabs defaultValue="ongoing" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-12 bg-black/50 border border-accent-pink/20">
                <TabsTrigger 
                  value="ongoing" 
                  className="data-[state=active]:bg-accent-pink data-[state=active]:text-white"
                >
                  Ongoing Projects
                </TabsTrigger>
                <TabsTrigger 
                  value="previous"
                  className="data-[state=active]:bg-accent-pink data-[state=active]:text-white"
                >
                  Previous Projects
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="ongoing">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {ongoingProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} isOngoing={true} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="previous">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {previousProjects.map((project) => (
                    <ProjectCard key={project.id} project={project} isOngoing={false} />
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;

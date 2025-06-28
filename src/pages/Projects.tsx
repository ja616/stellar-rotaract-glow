
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Projects = () => {
  const projects2025 = [
    {
      id: 1,
      title: 'PROPEL',
      subtitle: 'Fueling the future with leadership and vision of Propel',
      mainImage: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=200&h=100&fit=crop',
        'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=200&h=100&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=100&fit=crop',
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=200&h=100&fit=crop'
      ]
    },
    {
      id: 2,
      title: 'Career Catalyst',
      subtitle: 'Success unlocked ✓',
      mainImage: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=200&h=100&fit=crop',
        'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=200&h=100&fit=crop',
        'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=200&h=100&fit=crop',
        'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=200&h=100&fit=crop'
      ]
    },
    {
      id: 3,
      title: 'Veerangana',
      subtitle: 'A Stand Against Sexual Harassment',
      mainImage: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=200&h=100&fit=crop',
        'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=200&h=100&fit=crop',
        'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=200&h=100&fit=crop'
      ]
    },
    {
      id: 4,
      title: 'Wanderlust Wonders',
      subtitle: '"Wanderlust Wonders" took us on a virtual journey around the world',
      mainImage: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=400&h=300&fit=crop',
      images: [
        'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=200&h=100&fit=crop',
        'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=200&h=100&fit=crop',
        'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=200&h=100&fit=crop',
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=200&h=100&fit=crop'
      ]
    }
  ];

  const ProjectCard = ({ project }: { project: any }) => (
    <Card className="bg-[#241121] border-accent-pink/20 hover:border-accent-pink/50 transition-all duration-300 group hover:shadow-lg hover:shadow-bright-purple/20 rounded-xl overflow-hidden">
      <div className="relative">
        <img 
          src={project.mainImage} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2 text-[#FF2E88] group-hover:text-pink-bright transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-[#EAEAEA] text-sm mb-4 italic font-medium leading-relaxed">
          {project.subtitle}
        </p>
        
        {/* Horizontal Scroll Strip */}
        <div className="flex space-x-3 overflow-x-auto scrollbar-hide pb-2" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {project.images.map((image: string, index: number) => (
            <img 
              key={index}
              src={image}
              alt={`${project.title} image ${index + 1}`}
              className="flex-shrink-0 w-24 h-16 object-cover rounded-md hover:scale-110 transition-transform duration-300 cursor-pointer"
            />
          ))}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans">
      <Header />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-[#0A0A0A] via-deep-base to-section-bg">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#FF2E88]">
              Projects of the Year 2025-26
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-heading">
              Discover the impactful initiatives we've undertaken to serve our community and create lasting positive change.
            </p>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="py-20 bg-[#0A0A0A]">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects2025.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Projects;

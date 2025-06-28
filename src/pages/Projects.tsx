
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Projects = () => {
  const currentProjects = [
    {
      id: 1,
      title: "Digital Literacy Initiative",
      summary: "Empowering seniors with digital skills for the modern world",
      mainImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=300&h=200&fit=crop"
      ]
    },
    {
      id: 2,
      title: "Clean Water Initiative",
      summary: "Installing water purification systems in rural communities",
      mainImage: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1482881497185-d4a9ddbe4151?w=300&h=200&fit=crop"
      ]
    },
    {
      id: 3,
      title: "Youth Leadership Summit",
      summary: "Building tomorrow's leaders through mentorship and training",
      mainImage: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=200&fit=crop"
      ]
    },
    {
      id: 4,
      title: "Environmental Conservation",
      summary: "Tree plantation and sustainable living awareness campaigns",
      mainImage: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?w=300&h=200&fit=crop"
      ]
    },
    {
      id: 5,
      title: "Health & Wellness Drive",
      summary: "Community health camps and mental wellness awareness",
      mainImage: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1584515933487-779824d29309?w=300&h=200&fit=crop"
      ]
    },
    {
      id: 6,
      title: "Educational Outreach",
      summary: "Scholarship programs and resource distribution to underprivileged",
      mainImage: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      galleryImages: [
        "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1544531586-ffd0d8479129?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=200&fit=crop"
      ]
    }
  ];

  const previousProjects = [
    {
      year: "2023-24",
      projects: [
        {
          id: 7,
          image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
          title: 'Community Service Initiative'
        },
        {
          id: 8,
          image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop',
          title: 'Environment Conservation Drive'
        },
        {
          id: 9,
          image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop',
          title: 'Youth Development Program'
        },
        {
          id: 10,
          image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
          title: 'Skill Building Workshop'
        }
      ]
    },
    {
      year: "2022-23",
      projects: [
        {
          id: 11,
          image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop',
          title: 'Social Impact Project'
        },
        {
          id: 12,
          image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop',
          title: 'Educational Support Program'
        },
        {
          id: 13,
          image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
          title: 'Community Outreach Initiative'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen text-white font-sans" style={{ backgroundColor: '#0A0A0A' }}>
      <Header />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-deep-base via-section-bg to-dark-purple">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-accent-pink to-bright-purple bg-clip-text text-transparent">
              Our Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-heading">
              Discover the impactful initiatives we've undertaken to serve our community and create lasting positive change.
            </p>
          </div>
        </section>

        {/* Projects Tabs */}
        <section className="py-20" style={{ backgroundColor: '#060103' }}>
          <div className="container mx-auto px-6">
            <Tabs defaultValue="current" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-12 bg-black/50 border border-accent-pink/20">
                <TabsTrigger 
                  value="current" 
                  className="data-[state=active]:bg-accent-pink data-[state=active]:text-white font-heading"
                >
                  Projects of the Year 2025-26
                </TabsTrigger>
                <TabsTrigger 
                  value="previous"
                  className="data-[state=active]:bg-accent-pink data-[state=active]:text-white font-heading"
                >
                  Previous Projects
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="current">
                <div className="mb-12 text-center">
                  <h2 className="text-2xl font-bold mb-6" style={{ color: '#FF2E88' }}>
                    Projects of the Year 2025–26
                  </h2>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentProjects.map((project) => (
                    <Card key={project.id} className="border border-accent-pink/20 hover:border-accent-pink/50 transition-all duration-300 group hover:shadow-lg" style={{ backgroundColor: '#241121', borderRadius: '12px' }}>
                      <div className="relative overflow-hidden">
                        <img 
                          src={project.mainImage} 
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-green-500 text-white font-heading">Active</Badge>
                        </div>
                      </div>
                      
                      {/* Image Gallery Strip */}
                      <div className="px-4 py-2">
                        <div className="flex space-x-2 overflow-x-auto scrollbar-hide" style={{ height: '100px' }}>
                          {project.galleryImages.map((img, index) => (
                            <img
                              key={index}
                              src={img}
                              alt={`${project.title} ${index + 1}`}
                              className="flex-shrink-0 w-20 h-16 object-cover rounded cursor-pointer hover:opacity-80 transition-opacity duration-300"
                              style={{ minWidth: '80px' }}
                            />
                          ))}
                        </div>
                      </div>
                      
                      <CardContent className="p-6 pt-4">
                        <h3 className="font-bold mb-3 text-white group-hover:text-accent-pink transition-colors font-heading" style={{ fontSize: '1.3rem', color: '#FF2E88' }}>
                          {project.title}
                        </h3>
                        <p className="text-sm leading-relaxed font-sans font-medium italic" style={{ color: '#EAEAEA' }}>
                          {project.summary}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="previous">
                <div className="space-y-12">
                  {previousProjects.map((yearData) => (
                    <div key={yearData.year}>
                      <h3 className="text-3xl font-bold text-center mb-8 text-accent-pink font-heading">
                        {yearData.year}
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {yearData.projects.map((project) => (
                          <div 
                            key={project.id}
                            className="group cursor-pointer"
                          >
                            <div className="relative overflow-hidden rounded-lg border-2 border-transparent hover:border-accent-pink/50 transition-all duration-300">
                              <img 
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <h4 className="text-white font-heading font-semibold text-center px-4">
                                  {project.title}
                                </h4>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
      </div>

      <Footer />

      <style jsx>{`
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default Projects;

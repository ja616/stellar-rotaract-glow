
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Projects = () => {
  const projectYears = [
    {
      year: "2024",
      projects: [
        {
          id: 1,
          image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
          title: 'Tree Plantation Drive'
        },
        {
          id: 2,
          image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop',
          title: 'Tech Workshop'
        },
        {
          id: 3,
          image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop',
          title: 'Health Camp'
        },
        {
          id: 4,
          image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop',
          title: 'Leadership Summit'
        },
        {
          id: 5,
          image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
          title: 'Digital Literacy'
        },
        {
          id: 6,
          image: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop',
          title: 'Blood Donation'
        }
      ]
    },
    {
      year: "2023", 
      projects: [
        {
          id: 7,
          image: 'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
          title: 'Community Service'
        },
        {
          id: 8,
          image: 'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop',
          title: 'Environment Drive'
        },
        {
          id: 9,
          image: 'https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=400&h=300&fit=crop',
          title: 'Youth Development'
        },
        {
          id: 10,
          image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
          title: 'Skill Building'
        }
      ]
    },
    {
      year: "2022",
      projects: [
        {
          id: 11,
          image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop',
          title: 'Social Impact'
        },
        {
          id: 12,
          image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop',
          title: 'Educational Support'
        },
        {
          id: 13,
          image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
          title: 'Community Outreach'
        }
      ]
    }
  ];

  const ongoingProjects = [
    {
      id: 1,
      title: 'Digital Literacy for Seniors',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      description: 'Teaching basic computer and smartphone skills to elderly citizens.'
    },
    {
      id: 2,
      title: 'Clean Water Initiative',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
      description: 'Installing water purification systems and conducting awareness programs.'
    },
    {
      id: 3,
      title: 'Skill Development Workshops',
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop',
      description: 'Conducting workshops on coding, entrepreneurship, and communication.'
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
              Our Projects
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-heading">
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
                  className="data-[state=active]:bg-accent-pink data-[state=active]:text-white font-heading"
                >
                  Ongoing Projects
                </TabsTrigger>
                <TabsTrigger 
                  value="previous"
                  className="data-[state=active]:bg-accent-pink data-[state=active]:text-white font-heading"
                >
                  Previous Projects
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="ongoing">
                <div className="grid md:grid-cols-3 gap-8">
                  {ongoingProjects.map((project) => (
                    <Card key={project.id} className="bg-black/50 border-accent-pink/20 hover:border-accent-pink/50 transition-all duration-300 group">
                      <div className="relative overflow-hidden">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4">
                          <Badge className="bg-green-500 text-white font-heading">Active</Badge>
                        </div>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent-pink transition-colors font-heading">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm leading-relaxed font-sans">
                          {project.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="previous">
                <div className="space-y-12">
                  {projectYears.map((yearData) => (
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
    </div>
  );
};

export default Projects;

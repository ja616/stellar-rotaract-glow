
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
      images: [
        'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop'
      ],
      description: 'Teaching basic computer and smartphone skills to elderly citizens in our community.'
    },
    {
      id: 2,
      title: 'Clean Water Initiative',
      images: [
        'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop'
      ],
      description: 'Installing water purification systems and conducting awareness programs.'
    },
    {
      id: 3,
      title: 'Skill Development Workshops',
      images: [
        'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop'
      ],
      description: 'Conducting workshops on coding, entrepreneurship, and communication skills.'
    },
    {
      id: 4,
      title: 'Health and Wellness Program',
      images: [
        'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=300&fit=crop'
      ],
      description: 'Regular health checkups and wellness programs for underprivileged communities.'
    },
    {
      id: 5,
      title: 'Environmental Conservation',
      images: [
        'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop',
        'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop'
      ],
      description: 'Tree plantation drives and plastic waste management initiatives.'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-deep-base to-section-bg">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 bg-gradient-to-r from-purple-highlight to-button-active bg-clip-text text-transparent">
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
              <TabsList className="grid w-full grid-cols-2 mb-12 bg-black/50 border border-purple-highlight/20">
                <TabsTrigger 
                  value="ongoing" 
                  className="data-[state=active]:bg-purple-highlight data-[state=active]:text-white font-heading"
                >
                  Projects of the Year 2025-26
                </TabsTrigger>
                <TabsTrigger 
                  value="previous"
                  className="data-[state=active]:bg-purple-highlight data-[state=active]:text-white font-heading"
                >
                  Previous Projects
                </TabsTrigger>
              </TabsList>
              
              <TabsContent value="ongoing">
                <div className="space-y-12">
                  {ongoingProjects.map((project, index) => (
                    <div 
                      key={project.id} 
                      className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                    >
                      {/* Images Section */}
                      <div className="w-full lg:w-1/2">
                        <div className="grid grid-cols-2 gap-4">
                          {project.images.slice(0, 4).map((image, imgIndex) => (
                            <div key={imgIndex} className="relative overflow-hidden rounded-lg group">
                              <img 
                                src={image} 
                                alt={`${project.title} ${imgIndex + 1}`}
                                className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                              />
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="w-full lg:w-1/2 space-y-6">
                        <div className="flex items-center gap-4">
                          <Badge className="bg-green-500 text-white font-heading px-4 py-2">Active</Badge>
                        </div>
                        <h3 className="text-3xl font-bold text-purple-highlight font-heading">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-lg leading-relaxed font-sans">
                          {project.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="previous">
                <div className="space-y-12">
                  {projectYears.map((yearData) => (
                    <div key={yearData.year}>
                      <h3 className="text-3xl font-bold text-center mb-8 text-purple-highlight font-heading">
                        {yearData.year}
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {yearData.projects.map((project) => (
                          <div 
                            key={project.id}
                            className="group cursor-pointer"
                          >
                            <div className="relative overflow-hidden rounded-lg border-2 border-transparent hover:border-purple-highlight/50 transition-all duration-300">
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

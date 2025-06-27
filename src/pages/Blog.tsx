
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Calendar, User, Clock, Mail } from 'lucide-react';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'The Impact of Digital Literacy in Rural Communities',
      excerpt: 'Exploring how our digital literacy programs are transforming lives in rural areas around Yelahanka.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop',
      author: 'Priya Nair',
      date: 'December 15, 2024',
      readTime: '5 min read',
      category: 'Education'
    },
    {
      id: 2,
      title: 'Sustainability Through Community Action',
      excerpt: 'How our environmental initiatives are creating lasting change and inspiring sustainable practices.',
      image: 'https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop',
      author: 'Vikram Singh',
      date: 'December 10, 2024',
      readTime: '7 min read',
      category: 'Environment'
    },
    {
      id: 3,
      title: 'Youth Leadership in the Digital Age',
      excerpt: 'Understanding how young leaders are leveraging technology to solve community challenges.',
      image: 'https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop',
      author: 'Arjun Sharma',
      date: 'December 5, 2024',
      readTime: '6 min read',
      category: 'Leadership'
    },
    {
      id: 4,
      title: 'Health Awareness: A Community Responsibility',
      excerpt: 'Reflecting on our health camps and the importance of community-driven healthcare initiatives.',
      image: 'https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?w=400&h=300&fit=crop',
      author: 'Sneha Reddy',
      date: 'November 28, 2024',
      readTime: '4 min read',
      category: 'Health'
    },
    {
      id: 5,
      title: 'Building Bridges: International Service Projects',
      excerpt: 'Our collaboration with Rotaract clubs worldwide and the impact of global service partnerships.',
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop',
      author: 'Karthik Rao',
      date: 'November 20, 2024',
      readTime: '8 min read',
      category: 'International'
    },
    {
      id: 6,
      title: 'The Power of Youth Volunteerism',
      excerpt: 'Stories from our volunteers and how community service shapes personal and professional growth.',
      image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop',
      author: 'Divya Krishnan',
      date: 'November 15, 2024',
      readTime: '5 min read',
      category: 'Community'
    }
  ];

  const BlogCard = ({ post }) => (
    <Card className="bg-black/50 border-accent-pink/20 hover:border-accent-pink/50 transition-all duration-300 group hover:transform hover:scale-105">
      <div className="relative overflow-hidden">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <Badge className="bg-gradient-to-r from-purple-highlight to-button-active text-white">
            {post.category}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-3 text-white group-hover:text-accent-pink transition-colors duration-300 line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center text-gray-400 text-xs mb-4 space-x-4">
          <div className="flex items-center">
            <User size={14} className="mr-1" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center">
            <Calendar size={14} className="mr-1" />
            <span>{post.date}</span>
          </div>
          <div className="flex items-center">
            <Clock size={14} className="mr-1" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <Button 
          className="w-full bg-gradient-to-r from-purple-highlight to-button-active hover:from-button-active hover:to-purple-highlight text-white font-semibold transition-all duration-300"
        >
          Read More
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
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Stories, insights, and updates from our community service journey and leadership experiences.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 bg-deep-base">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                About Rotaract Club of BMS Yelahanka
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed mb-8">
                Established with the vision of empowering youth to create positive change, our club has been 
                a beacon of service and leadership development for over 8 years. We are a diverse community 
                of students from BMS Institute of Technology, united by our commitment to "Service Above Self."
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Through our various initiatives in education, health, environment, and community development, 
                we strive to address local challenges while developing the next generation of ethical leaders. 
                Our blog shares these experiences and insights with the wider community.
              </p>
            </div>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-section-bg">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Latest Posts
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                Read about our latest projects, community impact stories, and leadership insights.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            
            <div className="text-center mt-12">
              <Button 
                variant="outline"
                className="border-accent-pink text-accent-pink hover:bg-accent-pink hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
              >
                Load More Posts
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20 bg-deep-base">
          <div className="container mx-auto px-6">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Stay Updated
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Subscribe to our newsletter and never miss updates about our latest projects and events.
              </p>
              
              <Card className="bg-black/50 border-accent-pink/20">
                <CardContent className="p-8">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <Input 
                        type="email" 
                        placeholder="Enter your email address"
                        className="bg-white/10 border-accent-pink/30 text-white placeholder:text-gray-400 focus:border-accent-pink"
                      />
                    </div>
                    <Button 
                      className="bg-gradient-to-r from-purple-highlight to-button-active hover:from-button-active hover:to-purple-highlight text-white font-semibold px-8"
                    >
                      <Mail className="mr-2" size={16} />
                      Subscribe
                    </Button>
                  </div>
                  <p className="text-gray-400 text-sm mt-4">
                    We respect your privacy. Unsubscribe at any time.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;


import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Community Clean-Up Drive Success",
      excerpt: "Our recent community clean-up initiative brought together 50+ volunteers to make a real difference in our neighborhood.",
      date: "March 15, 2024",
      author: "Rotaract BMSY",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?w=400&h=300&fit=crop",
      category: "Environment"
    },
    {
      id: 2,
      title: "Digital Literacy Workshop Impact",
      excerpt: "Teaching seniors digital skills has opened new doors for communication and connection in our community.",
      date: "March 10, 2024",
      author: "Tech Team",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      category: "Education"
    },
    {
      id: 3,
      title: "Health Camp Reaches 200+ People",
      excerpt: "Our quarterly health camp provided free medical checkups and health awareness to community members.",
      date: "March 5, 2024",
      author: "Health Team",
      image: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?w=400&h=300&fit=crop",
      category: "Health"
    },
    {
      id: 4,
      title: "Youth Leadership Summit 2024",
      excerpt: "Empowering young minds with leadership skills and networking opportunities for a better tomorrow.",
      date: "February 28, 2024",
      author: "Leadership Team",
      image: "https://images.unsplash.com/photo-1527576539890-dfa815648363?w=400&h=300&fit=crop",
      category: "Leadership"
    },
    {
      id: 5,
      title: "Environmental Awareness Week",
      excerpt: "A week-long campaign promoting sustainable living practices and environmental consciousness.",
      date: "February 20, 2024",
      author: "Environment Team",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?w=400&h=300&fit=crop",
      category: "Environment"
    },
    {
      id: 6,
      title: "Blood Donation Drive Success",
      excerpt: "Our blood donation camp collected 150+ units, potentially saving hundreds of lives in our community.",
      date: "February 15, 2024",
      author: "Service Team",
      image: "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&h=300&fit=crop",
      category: "Health"
    }
  ];

  const categories = ["All", "Environment", "Education", "Health", "Leadership"];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-base via-section-bg to-deep-base text-white font-poppins">
      <Header />
      
      <div className="pt-24">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-deep-base via-dark-purple to-section-bg">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-gradient-to-r from-accent-pink to-bright-purple bg-clip-text">
              Our Blog
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
              Stay updated with our latest activities, impact stories, and community initiatives.
            </p>
          </div>
        </section>

        {/* Blog Posts */}
        <section className="py-20 bg-gradient-to-br from-section-bg via-dark-purple to-section-bg">
          <div className="container mx-auto px-6">
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full border border-accent-pink/30 text-accent-pink hover:bg-accent-pink hover:text-white transition-all duration-300 font-medium"
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Blog Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article 
                  key={post.id}
                  className="bg-gradient-to-br from-dark-accent/50 to-purple-accent/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-accent-pink/20 hover:border-accent-pink/50 transition-all duration-500 group transform hover:scale-105"
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent-pink text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-400 mb-3">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.author}</span>
                    </div>
                    
                    <h2 className="text-xl font-bold mb-3 text-white group-hover:text-accent-pink transition-colors duration-300">
                      {post.title}
                    </h2>
                    
                    <p className="text-gray-300 leading-relaxed text-sm mb-4">
                      {post.excerpt}
                    </p>
                    
                    <button className="text-accent-pink hover:text-pink-bright transition-colors duration-300 font-medium text-sm">
                      Read More →
                    </button>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Blog;

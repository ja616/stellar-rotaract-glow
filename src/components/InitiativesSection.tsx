
import { Card, CardContent } from '@/components/ui/card';

const InitiativesSection = () => {
  const initiatives = [
    {
      icon: '🌱',
      title: 'Environment',
      description: 'Tree plantation drives, waste management, and sustainable living awareness campaigns.',
      color: 'from-green-500 to-emerald-600'
    },
    {
      icon: '📚',
      title: 'Education',
      description: 'Digital literacy programs, scholarship drives, and educational resource distribution.',
      color: 'from-blue-500 to-cyan-600'
    },
    {
      icon: '❤️',
      title: 'Health',
      description: 'Health camps, blood donation drives, and mental health awareness programs.',
      color: 'from-red-500 to-pink-600'
    },
    {
      icon: '👑',
      title: 'Leadership',
      description: 'Youth development workshops, skill-building sessions, and leadership training.',
      color: 'from-purple-500 to-violet-600'
    }
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Our Core Initiatives
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We focus on four key areas that create lasting positive change in our community and develop future leaders.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <Card 
              key={index}
              className="bg-black/50 border-accent-pink/20 hover:border-accent-pink/50 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-xl hover:shadow-purple-highlight/20"
            >
              <CardContent className="p-8 text-center">
                <div className="text-6xl mb-6 group-hover:animate-bounce">
                  {initiative.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-accent-pink transition-colors duration-300">
                  {initiative.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {initiative.description}
                </p>
                <div className={`mt-6 h-1 bg-gradient-to-r ${initiative.color} rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;

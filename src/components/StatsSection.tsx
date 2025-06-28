
import { useState, useEffect, useRef } from 'react';

const StatsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState({
    projects: 0,
    volunteers: 0,
    years: 0,
    impact: 0
  });
  
  const sectionRef = useRef<HTMLElement>(null);
  
  const targetCounts = {
    projects: 45,
    volunteers: 120,
    years: 8,
    impact: 2500
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const stepTime = 50; // Update every 50ms
    const steps = duration / stepTime;

    let currentStep = 0;
    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      if (progress >= 1) {
        setCounts(targetCounts);
        clearInterval(timer);
      } else {
        setCounts({
          projects: Math.floor(targetCounts.projects * progress),
          volunteers: Math.floor(targetCounts.volunteers * progress),
          years: Math.floor(targetCounts.years * progress),
          impact: Math.floor(targetCounts.impact * progress)
        });
      }
    }, stepTime);

    return () => clearInterval(timer);
  }, [isVisible]);

  const stats = [
    {
      number: counts.projects,
      label: 'Projects Completed',
      suffix: '+',
      color: 'from-accent-pink to-purple-highlight'
    },
    {
      number: counts.volunteers,
      label: 'Active Volunteers',
      suffix: '+',
      color: 'from-purple-highlight to-button-active'
    },
    {
      number: counts.years,
      label: 'Years of Service',
      suffix: '',
      color: 'from-button-active to-accent-pink'
    },
    {
      number: counts.impact,
      label: 'Lives Impacted',
      suffix: '+',
      color: 'from-accent-pink to-maroon-accent'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-deep-base">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-accent-pink to-button-active bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Every number represents real change, real people, and real impact in our community.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className={`inline-block p-8 rounded-2xl bg-gradient-to-br ${stat.color} bg-opacity-10 border border-accent-pink/20 group-hover:border-accent-pink/40 transition-all duration-300`}>
                <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-gray-300 font-medium text-lg">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;

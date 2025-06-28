
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

    const duration = 2000;
    const stepTime = 50;
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
    },
    {
      number: counts.volunteers,
      label: 'Active Volunteers',
      suffix: '+',
    },
    {
      number: counts.years,
      label: 'Years of Service',
      suffix: '',
    },
    {
      number: counts.impact,
      label: 'Lives Impacted',
      suffix: '+',
    }
  ];

  return (
    <section ref={sectionRef} className="py-16 bg-deep-base">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-accent-pink to-bright-purple bg-clip-text text-transparent">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-gray-300 max-w-xl mx-auto">
            Every number represents real change, real people, and real impact in our community.
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="text-center group hover:transform hover:scale-105 transition-all duration-300"
            >
              <div className="inline-block p-6 rounded-2xl bg-gradient-to-br from-accent-pink/20 to-bright-purple/20 border border-accent-pink/30 group-hover:border-accent-pink/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-pink/20">
                <div className="text-3xl md:text-4xl font-bold mb-2 text-accent-pink">
                  {stat.number}{stat.suffix}
                </div>
                <div className="text-gray-300 font-medium text-base">
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

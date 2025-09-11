'use client'
import { useState, useEffect } from 'react';

const InteractiveStats = () => {
  const [counters, setCounters] = useState({ posts: 0, readers: 0, categories: 0, authors: 0 });

  const finalStats = {
    posts: 1250,
    readers: 25000,
    categories: 15,
    authors: 45
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalStats).map(key => {
      const finalValue = finalStats[key as keyof typeof finalStats];
      const stepValue = finalValue / steps;

      return setInterval(() => {
        setCounters(prev => ({
          ...prev,
          [key]: Math.min(prev[key as keyof typeof prev] + stepValue, finalValue)
        }));
      }, stepDuration);
    });

    setTimeout(() => {
      intervals.forEach(interval => clearInterval(interval));
      setCounters(finalStats);
    }, duration);

    return () => intervals.forEach(interval => clearInterval(interval));
  }, []);

  const stats = [
    { 
      key: 'posts', 
      label: 'Articles Published', 
      value: Math.floor(counters.posts), 
      icon: '📝', 
      suffix: '+',
      color: 'from-blue-500 to-cyan-500'
    },
    { 
      key: 'readers', 
      label: 'Monthly Readers', 
      value: Math.floor(counters.readers), 
      icon: '👥', 
      suffix: '+',
      color: 'from-purple-500 to-pink-500'
    },
    { 
      key: 'categories', 
      label: 'Categories', 
      value: Math.floor(counters.categories), 
      icon: '🗂️', 
      suffix: '',
      color: 'from-green-500 to-emerald-500'
    },
    { 
      key: 'authors', 
      label: 'Expert Authors', 
      value: Math.floor(counters.authors), 
      icon: '✍️', 
      suffix: '+',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 dark:opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-4">
            Our Growing Community
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.key}
              className="group relative transform hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${stat.color} rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500`}></div>
              
              {/* Card Content */}
              <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-8 text-center border border-gray-200/50 dark:border-gray-700/50 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                {/* Icon */}
                <div className="text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                
                {/* Number */}
                <div className={`text-4xl md:text-5xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                
                {/* Label */}
                <div className="text-gray-600 dark:text-gray-300 text-lg font-medium">
                  {stat.label}
                </div>

                {/* Animated Border */}
                <div className="absolute inset-0 rounded-xl">
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Progress Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full px-6 py-3 border border-gray-200/50 dark:border-gray-700/50">
            <div className="flex space-x-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"
                  style={{ animationDelay: `${i * 200}ms` }}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600 dark:text-gray-300 font-medium">
              Growing every day
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveStats;
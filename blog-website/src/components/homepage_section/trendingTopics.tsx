'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';

const TrendingTopics = () => {
  const [currentTrend, setCurrentTrend] = useState(0);

  const trendingTopics = [
    {
      topic: 'Next.js 15',
      growth: '+234%',
      posts: 45,
      color: 'from-blue-500 to-cyan-500',
      description: 'Latest features and performance improvements',
      hotness: 95
    },
    {
      topic: 'AI Integration',
      growth: '+189%',
      posts: 78,
      color: 'from-purple-500 to-pink-500',
      description: 'ChatGPT APIs and AI-powered applications',
      hotness: 92
    },
    {
      topic: 'React Server Components',
      growth: '+156%',
      posts: 32,
      color: 'from-emerald-500 to-teal-500',
      description: 'Server-side rendering and optimization',
      hotness: 88
    },
    {
      topic: 'TypeScript 5.0',
      growth: '+142%',
      posts: 56,
      color: 'from-orange-500 to-red-500',
      description: 'New type system features and improvements',
      hotness: 85
    },
    {
      topic: 'WebAssembly',
      growth: '+128%',
      posts: 29,
      color: 'from-indigo-500 to-blue-500',
      description: 'High-performance web applications',
      hotness: 82
    },
    {
      topic: 'Edge Computing',
      growth: '+115%',
      posts: 41,
      color: 'from-violet-500 to-purple-500',
      description: 'Distributed computing and CDN strategies',
      hotness: 79
    }
  ];

  const additionalTrends = [
    { name: 'Micro Frontends', count: 23, trend: '+67%' },
    { name: 'GraphQL', count: 34, trend: '+43%' },
    { name: 'Serverless', count: 45, trend: '+38%' },
    { name: 'Web3', count: 28, trend: '+29%' },
    { name: 'Progressive Web Apps', count: 52, trend: '+24%' },
    { name: 'Headless CMS', count: 31, trend: '+21%' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTrend((prev) => (prev + 1) % trendingTopics.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [trendingTopics.length]);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-950 dark:via-purple-950 dark:to-slate-950">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2220%22 height=%2220%22 viewBox=%220 0 20 20%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22%23ffffff%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%223%22 cy=%223%22 r=%223%22/%3E%3C/g%3E%3C/svg%3E')] opacity-50"></div>
      </div>

      {/* Animated Orbs */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-32 h-32 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-xl animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What's Trending Now
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Stay ahead of the curve with the hottest topics in tech
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Trending Topic */}
          <div className="lg:col-span-2">
            <div className="relative group">
              <div className={`absolute -inset-1 bg-gradient-to-r ${trendingTopics[currentTrend].color} rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-500`}></div>
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${trendingTopics[currentTrend].color} animate-pulse`}></div>
                    <span className="text-white/70 font-medium">TRENDING NOW</span>
                  </div>
                  <div className={`px-4 py-2 bg-gradient-to-r ${trendingTopics[currentTrend].color} rounded-full text-white font-bold`}>
                    {trendingTopics[currentTrend].growth}
                  </div>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
                  {trendingTopics[currentTrend].topic}
                </h3>

                <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                  {trendingTopics[currentTrend].description}
                </p>

                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-6">
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {trendingTopics[currentTrend].posts}
                      </div>
                      <div className="text-gray-400 text-sm">Articles</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-white">
                        {trendingTopics[currentTrend].hotness}%
                      </div>
                      <div className="text-gray-400 text-sm">Hot Score</div>
                    </div>
                  </div>

                  {/* Hotness Bar */}
                  <div className="flex-1 max-w-32 ml-8">
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div 
                        className={`h-full bg-gradient-to-r ${trendingTopics[currentTrend].color} rounded-full transition-all duration-1000`}
                        style={{ width: `${trendingTopics[currentTrend].hotness}%` }}
                      ></div>
                    </div>
                  </div>
                </div>

                <Link href={`/trending/${trendingTopics[currentTrend].topic.toLowerCase().replace(/\s+/g, '-')}`}>
                  <button className={`w-full py-4 bg-gradient-to-r ${trendingTopics[currentTrend].color} text-white rounded-xl font-semibold text-lg hover:shadow-2xl transform hover:scale-[1.02] transition-all duration-300`}>
                    Explore {trendingTopics[currentTrend].topic} →
                  </button>
                </Link>
              </div>
            </div>

            {/* Trend Indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {trendingTopics.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTrend(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentTrend 
                      ? 'w-8 bg-gradient-to-r from-pink-400 to-purple-400' 
                      : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Additional Trends */}
          <div className="space-y-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <h4 className="text-2xl font-bold text-white mb-6">More Trending</h4>
              <div className="space-y-4">
                {additionalTrends.map((trend, index) => (
                  <div
                    key={trend.name}
                    className="flex items-center justify-between p-4 bg-white/5 rounded-xl hover:bg-white/10 transition-colors duration-300 cursor-pointer group"
                  >
                    <div>
                      <div className="text-white font-medium group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-pink-400 group-hover:to-purple-400 transition-all duration-300">
                        {trend.name}
                      </div>
                      <div className="text-gray-400 text-sm">{trend.count} posts</div>
                    </div>
                    <div className={`text-emerald-400 font-bold ${trend.trend.startsWith('+') ? 'text-emerald-400' : 'text-red-400'}`}>
                      {trend.trend}
                    </div>
                  </div>
                ))}
              </div>

              <Link href="/trending">
                <button className="w-full mt-6 py-3 border-2 border-white/30 text-white rounded-xl font-medium hover:bg-white/10 hover:border-white/50 transition-all duration-300">
                  View All Trends
                </button>
              </Link>
            </div>

            {/* Trending Stats */}
            <div className="bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-6 border border-pink-500/30">
              <h4 className="text-xl font-bold text-white mb-4">🔥 This Week</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Most Viewed</span>
                  <span className="text-pink-400 font-bold">2.5M views</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">New Articles</span>
                  <span className="text-purple-400 font-bold">124</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-300">Trending Topics</span>
                  <span className="text-cyan-400 font-bold">18</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingTopics;
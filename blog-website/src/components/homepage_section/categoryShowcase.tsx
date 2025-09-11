'use client'
import { useState } from 'react';
import Link from 'next/link';

const CategoryShowcase = () => {
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  const categories = [
    {
      name: 'Web Development',
      icon: '💻',
      count: 250,
      color: 'from-blue-500 to-cyan-500',
      description: 'Modern frameworks, best practices, and cutting-edge techniques',
      tags: ['React', 'Next.js', 'TypeScript', 'Node.js']
    },
    {
      name: 'UI/UX Design',
      icon: '🎨',
      count: 180,
      color: 'from-purple-500 to-pink-500',
      description: 'Design systems, user experience, and visual storytelling',
      tags: ['Figma', 'Design Systems', 'Prototyping', 'User Research']
    },
    {
      name: 'Artificial Intelligence',
      icon: '🤖',
      count: 95,
      color: 'from-emerald-500 to-teal-500',
      description: 'Machine learning, AI tools, and future technologies',
      tags: ['ML', 'ChatGPT', 'Computer Vision', 'NLP']
    },
    {
      name: 'Mobile Development',
      icon: '📱',
      count: 140,
      color: 'from-orange-500 to-red-500',
      description: 'iOS, Android, and cross-platform development',
      tags: ['React Native', 'Flutter', 'Swift', 'Kotlin']
    },
    {
      name: 'DevOps & Cloud',
      icon: '☁️',
      count: 120,
      color: 'from-indigo-500 to-blue-500',
      description: 'Infrastructure, deployment, and scalable architectures',
      tags: ['AWS', 'Docker', 'Kubernetes', 'CI/CD']
    },
    {
      name: 'Data Science',
      icon: '📊',
      count: 85,
      color: 'from-violet-500 to-purple-500',
      description: 'Analytics, visualization, and data-driven insights',
      tags: ['Python', 'R', 'Tableau', 'Big Data']
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23374151' fill-opacity='0.05' fill-rule='evenodd'%3E%3Cpath d='M20 20c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm20-18c-9.941 0-18 8.059-18 18s8.059 18 18 18 18-8.059 18-18-8.059-18-18-18z'/%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent mb-4">
            Explore by Category
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            Dive deep into specialized topics and discover content tailored to your interests
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div
              key={category.name}
              onMouseEnter={() => setHoveredCategory(index)}
              onMouseLeave={() => setHoveredCategory(null)}
              className="group relative transform hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Glow Effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500`}></div>
              
              {/* Card */}
              <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg group-hover:shadow-2xl transition-all duration-500 h-full">
                {/* Icon and Count */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`text-6xl transform group-hover:scale-110 transition-transform duration-300 ${hoveredCategory === index ? 'animate-bounce' : ''}`}>
                    {category.icon}
                  </div>
                  <div className="text-right">
                    <div className={`text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                      {category.count}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">Articles</div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {category.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {category.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {category.tags.map((tag, tagIndex) => (
                    <span
                      key={tag}
                      className={`px-3 py-1 bg-gradient-to-r ${category.color} text-white rounded-full text-xs font-medium transform hover:scale-105 transition-all duration-300 opacity-80 hover:opacity-100`}
                      style={{ animationDelay: `${tagIndex * 50}ms` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA Button */}
                <Link href={`/category/${category.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}>
                  <button className={`w-full py-3 bg-gradient-to-r ${category.color} text-white rounded-lg font-semibold transform hover:scale-[1.02] transition-all duration-300 shadow-lg group-hover:shadow-xl relative overflow-hidden`}>
                    <span className="relative z-10">Explore {category.name}</span>
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                  </button>
                </Link>

                {/* Hover Indicator */}
                <div className={`absolute top-4 right-4 w-3 h-3 rounded-full bg-gradient-to-r ${category.color} transition-all duration-300 ${hoveredCategory === index ? 'scale-150 shadow-lg' : 'scale-100'}`}></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 text-center">
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              Can't find what you're looking for?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
              We're constantly adding new content across various technology domains. 
              Suggest a topic or browse our complete archive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/suggest-topic">
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Suggest a Topic
                </button>
              </Link>
              <Link href="/archive">
                <button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transform hover:scale-105 transition-all duration-300">
                  Browse Archive
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AuthorSpotlight = () => {
  const [featuredAuthor, setFeaturedAuthor] = useState(0);

  const authors = [
    {
      name: 'Sarah Chen',
      title: 'Senior Frontend Architect',
      company: 'Google',
      avatar: '/Images/Home/testimonial1.png',
      bio: 'Sarah is a passionate developer who specializes in React ecosystem and modern web technologies. She has contributed to major open-source projects and leads frontend architecture at Google.',
      articles: 42,
      followers: '15.2K',
      expertise: ['React', 'TypeScript', 'Next.js', 'GraphQL'],
      gradient: 'from-blue-500 to-cyan-500',
      recentArticle: 'Building Scalable React Applications'
    },
    {
      name: 'Marcus Rodriguez',
      title: 'AI/ML Engineer',
      company: 'OpenAI',
      avatar: '/Images/Home/testimonial2.png',
      bio: 'Marcus is at the forefront of AI development, working on large language models and neural networks. His insights bridge the gap between complex AI concepts and practical applications.',
      articles: 38,
      followers: '22.8K',
      expertise: ['Python', 'TensorFlow', 'PyTorch', 'NLP'],
      gradient: 'from-purple-500 to-pink-500',
      recentArticle: 'Understanding Transformer Architecture'
    },
    {
      name: 'Elena Kowalski',
      title: 'DevOps Principal',
      company: 'AWS',
      avatar: '/Images/Home/testimonial3.png',
      bio: 'Elena has revolutionized cloud infrastructure practices with her innovative approaches to containerization and microservices architecture.',
      articles: 35,
      followers: '18.7K',
      expertise: ['Kubernetes', 'Docker', 'AWS', 'Terraform'],
      gradient: 'from-emerald-500 to-teal-500',
      recentArticle: 'Kubernetes Security Best Practices'
    }
  ];

  const communityStats = [
    { label: 'Expert Authors', value: '150+', icon: '✍️' },
    { label: 'Industry Partners', value: '25', icon: '🤝' },
    { label: 'Years Experience', value: '500+', icon: '🎯' },
    { label: 'Articles Published', value: '2.5K+', icon: '📚' }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFeaturedAuthor((prev) => (prev + 1) % authors.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [authors.length]);

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 dark:from-gray-900 dark:via-purple-900 dark:to-pink-900">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-purple-900 to-pink-900 dark:from-white dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent mb-4">
            Author Spotlight
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-3xl mx-auto">
            Meet the brilliant minds behind our most insightful articles
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Featured Author */}
          <div className="relative group">
            <div className={`absolute -inset-1 bg-gradient-to-r ${authors[featuredAuthor].gradient} rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500`}></div>
            <div className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-2xl">
              {/* Author Header */}
              <div className="flex items-start space-x-6 mb-8">
                <div className="relative">
                  <div className={`absolute -inset-1 bg-gradient-to-r ${authors[featuredAuthor].gradient} rounded-full blur opacity-60`}></div>
                  <div className="relative w-24 h-24 rounded-full overflow-hidden border-4 border-white dark:border-gray-700 shadow-lg">
                    <Image
                      src={authors[featuredAuthor].avatar}
                      layout="fill"
                      objectFit="cover"
                      alt={authors[featuredAuthor].name}
                      className="transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className={`absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r ${authors[featuredAuthor].gradient} rounded-full flex items-center justify-center border-2 border-white dark:border-gray-800`}>
                    <span className="text-white text-xs">✓</span>
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white">
                    {authors[featuredAuthor].name}
                  </h3>
                  <p className={`text-lg bg-gradient-to-r ${authors[featuredAuthor].gradient} bg-clip-text text-transparent font-semibold mb-2`}>
                    {authors[featuredAuthor].title}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 font-medium">
                    {authors[featuredAuthor].company}
                  </p>
                </div>
              </div>

              {/* Bio */}
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-8 text-lg">
                {authors[featuredAuthor].bio}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${authors[featuredAuthor].gradient} bg-clip-text text-transparent mb-1`}>
                    {authors[featuredAuthor].articles}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Articles</div>
                </div>
                <div className="text-center">
                  <div className={`text-3xl font-bold bg-gradient-to-r ${authors[featuredAuthor].gradient} bg-clip-text text-transparent mb-1`}>
                    {authors[featuredAuthor].followers}
                  </div>
                  <div className="text-gray-600 dark:text-gray-400 text-sm">Followers</div>
                </div>
              </div>

              {/* Expertise Tags */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 uppercase tracking-wider">
                  Expertise
                </h4>
                <div className="flex flex-wrap gap-2">
                  {authors[featuredAuthor].expertise.map((skill, index) => (
                    <span
                      key={skill}
                      className={`px-3 py-1 bg-gradient-to-r ${authors[featuredAuthor].gradient} text-white rounded-full text-sm font-medium transform hover:scale-105 transition-all duration-300`}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Recent Article */}
              <div className={`p-4 bg-gradient-to-r ${authors[featuredAuthor].gradient} bg-opacity-10 rounded-xl mb-8`}>
                <div className="flex items-center space-x-2 mb-2">
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                    Latest Article
                  </span>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <h5 className="font-bold text-gray-900 dark:text-white">
                  {authors[featuredAuthor].recentArticle}
                </h5>
              </div>

              {/* CTA */}
              <div className="flex space-x-4">
                <Link href={`/author/${authors[featuredAuthor].name.toLowerCase().replace(' ', '-')}`}>
                  <button className={`flex-1 py-3 bg-gradient-to-r ${authors[featuredAuthor].gradient} text-white rounded-xl font-semibold hover:shadow-xl transform hover:scale-[1.02] transition-all duration-300`}>
                    View Profile
                  </button>
                </Link>
                <Link href={`/author/${authors[featuredAuthor].name.toLowerCase().replace(' ', '-')}/articles`}>
                  <button className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300">
                    Articles
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Author Selector & Stats */}
          <div className="space-y-8">
            {/* All Authors */}
            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
              <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Featured Authors</h4>
              <div className="space-y-4">
                {authors.map((author, index) => (
                  <div
                    key={author.name}
                    onClick={() => setFeaturedAuthor(index)}
                    className={`flex items-center space-x-4 p-4 rounded-xl cursor-pointer transition-all duration-300 ${
                      index === featuredAuthor
                        ? 'bg-gradient-to-r from-gray-100 to-purple-50 dark:from-gray-700 dark:to-purple-900 shadow-md'
                        : 'hover:bg-gray-50 dark:hover:bg-gray-700'
                    }`}
                  >
                    <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                      <Image
                        src={author.avatar}
                        layout="fill"
                        objectFit="cover"
                        alt={author.name}
                      />
                      {index === featuredAuthor && (
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h5 className={`font-semibold mb-1 ${index === featuredAuthor ? 'text-transparent bg-gradient-to-r bg-clip-text from-purple-600 to-pink-600' : 'text-gray-900 dark:text-white'}`}>
                        {author.name}
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                        {author.title} at {author.company}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className={`text-lg font-bold ${index === featuredAuthor ? `bg-gradient-to-r ${author.gradient} bg-clip-text text-transparent` : 'text-gray-700 dark:text-gray-300'}`}>
                        {author.articles}
                      </div>
                      <div className="text-xs text-gray-500">articles</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Stats */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-200/50 dark:border-purple-700/50">
              <h4 className="text-xl font-bold mb-6 text-gray-900 dark:text-white">Our Community</h4>
              <div className="grid grid-cols-2 gap-4">
                {communityStats.map((stat, index) => (
                  <div key={stat.label} className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                    <div className="text-2xl mb-2">{stat.icon}</div>
                    <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white shadow-2xl">
            <h3 className="text-3xl font-bold mb-4">Want to Join Our Author Community?</h3>
            <p className="text-xl mb-6 opacity-90">
              Share your expertise with thousands of developers worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/write-for-us">
                <button className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                  Become an Author
                </button>
              </Link>
              <Link href="/authors">
                <button className="px-8 py-4 border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                  View All Authors
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorSpotlight;
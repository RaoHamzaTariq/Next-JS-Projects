'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BlogPostCard } from '@/data/interfaces';
import { urlFor } from '@/sanity/lib/image';

interface FeaturedPostsProps {
  posts: BlogPostCard[];
}

const FeaturedPosts = ({ posts }: FeaturedPostsProps) => {
  const [activePost, setActivePost] = useState(0);

  if (!posts || posts.length === 0) {
    return null;
  }

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 dark:from-slate-900 dark:via-indigo-900 dark:to-purple-900">
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-4 h-4 bg-white/10 rounded-full animate-float-slow"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${6 + Math.random() * 6}s`
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Editor's Choice
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-400 mx-auto rounded-full"></div>
          <p className="text-xl text-gray-300 mt-6 max-w-3xl mx-auto">
            Handpicked stories that showcase the best of technology, design, and innovation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Main Featured Post */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-3xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20">
              {posts[activePost]?.mainImage && (
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <Image
                    src={urlFor(posts[activePost].mainImage).url()}
                    fill
                    alt={posts[activePost].title}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              )}
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                  {posts[activePost]?.publishedAt && (
                    <span className="text-gray-300 text-sm">
                      {new Date(posts[activePost].publishedAt).toLocaleDateString()}
                    </span>
                  )}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                  {posts[activePost]?.title}
                </h3>
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {posts[activePost]?.shortDesc}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold">
                      {posts[activePost]?.author?.name?.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-white font-medium">{posts[activePost]?.author?.name}</p>
                      <p className="text-gray-400 text-sm">Author</p>
                    </div>
                  </div>
                  <Link href={`/blogs/${posts[activePost]?.slug?.current}`}>
                    <button className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-3 rounded-full font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg">
                      Read More →
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Post Selector */}
          <div className="space-y-6">
            {posts.slice(0, 3).map((post, index) => (
              <div
                key={post.title}
                onClick={() => setActivePost(index)}
                className={`group cursor-pointer relative rounded-xl p-6 transition-all duration-300 ${
                  index === activePost 
                    ? 'bg-white/20 backdrop-blur-sm border border-white/30 shadow-lg' 
                    : 'bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20'
                }`}
              >
                <div className="flex items-center space-x-4">
                  {post.mainImage && (
                    <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                      <Image
                        src={urlFor(post.mainImage).url()}
                        fill
                        alt={post.title}
                        sizes="64px"
                        className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h4 className={`font-bold text-lg leading-tight mb-2 transition-colors duration-300 ${
                      index === activePost ? 'text-white' : 'text-gray-300 group-hover:text-white'
                    }`}>
                      {post.title}
                    </h4>
                    <p className={`text-sm line-clamp-2 transition-colors duration-300 ${
                      index === activePost ? 'text-gray-200' : 'text-gray-400 group-hover:text-gray-300'
                    }`}>
                      {post.shortDesc}
                    </p>
                  </div>
                  <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activePost 
                      ? 'bg-gradient-to-r from-pink-400 to-purple-400 shadow-lg' 
                      : 'bg-white/30 group-hover:bg-white/50'
                  }`}></div>
                </div>
                
                {/* Selection Indicator */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-500 to-purple-500 rounded-r transition-all duration-300 ${
                  index === activePost ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </div>
            ))}

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-3 pt-6">
              {posts.slice(0, 3).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActivePost(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activePost 
                      ? 'bg-gradient-to-r from-pink-500 to-purple-500 scale-125' 
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Link href="/blogs">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 rounded-full text-white font-semibold text-lg hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 transform hover:scale-105 transition-all duration-300 shadow-2xl">
              <span className="relative z-10">Explore All Featured Stories</span>
              <div className="absolute inset-0 bg-white/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.3; }
          25% { transform: translateY(-20px) rotate(90deg); opacity: 0.6; }
          50% { transform: translateY(-40px) rotate(180deg); opacity: 0.8; }
          75% { transform: translateY(-20px) rotate(270deg); opacity: 0.6; }
        }
        .animate-float-slow {
          animation: float-slow linear infinite;
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default FeaturedPosts;
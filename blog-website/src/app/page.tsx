'use client'
import BlogVertiCard from "@/components/blogverti-card";
import Image from "next/image";
import Link from "next/link";
import BlogHoriCard from "@/components/bloghori-card";
import { BlogPostCard } from "@/data/interfaces";
import HeroSection from "@/components/homepage_section/herosection";
import FeaturedPosts from "@/components/homepage_section/featuredSection";
import CategoryShowcase from "@/components/homepage_section/categoryShowcase";
import TrendingTopics from "@/components/homepage_section/trendingTopics";
import AuthorSpotlight from "@/components/homepage_section/authorSpotlight";
import InteractiveStats from "@/components/homepage_section/interactiveStats";

export default async function Home() {
  const fetchingData = async () => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${API_URL}/api/fetchingblog`, {
        next: {
          revalidate: 10
        }
      });
      if (!response) {
        throw new Error("Failed to fetch data!")
      }
      const data = await response.json()
      if (!data || !data.data || !Array.isArray(data.data)) {
        throw new Error("Invalid data format");
      }
      return data.data
    } catch (error) {
      console.log(error)
      return [];
    }
  }
  
  const fetchData: BlogPostCard[] = await fetchingData() || []

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-950 dark:via-blue-950 dark:to-indigo-950 transition-all duration-700 font-['Inter']">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-blue-500/5 to-purple-500/5 dark:from-blue-400/5 dark:to-purple-400/5 rotate-12 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-indigo-500/5 to-pink-500/5 dark:from-indigo-400/5 dark:to-pink-400/5 -rotate-12 animate-pulse delay-1000"></div>
      </div>

      <main className="relative z-10">
        {/* Hero Section */}
        <HeroSection />

        {/* Interactive Stats */}
        <InteractiveStats />

        {/* Featured Posts Grid */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent mb-4">
              Featured Stories
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
            <p className="text-lg text-gray-600 dark:text-gray-300 mt-6 max-w-2xl mx-auto">
              Discover our handpicked selection of the most engaging and insightful articles
            </p>
          </div>

          {fetchData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {fetchData.slice(0, 8).map((post: BlogPostCard, index) => (
                <div 
                  key={post.title}
                  className="group transform hover:scale-105 transition-all duration-500 hover:z-10"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-500"></div>
                    <div className="relative">
                      <BlogVertiCard 
                        mainImage={post.mainImage} 
                        slug={post.slug?.current} 
                        shortDesc={post.shortDesc} 
                        title={post.title} 
                        author={post.author} 
                        publishedAt={post.publishedAt}  
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-xl text-gray-500 dark:text-gray-400">No stories found at the moment</p>
            </div>
          )}
        </section>

        {/* Featured Posts Component */}
        <FeaturedPosts posts={fetchData.slice(0, 3)} />

        {/* Category Showcase */}
        <CategoryShowcase />

        {/* Trending Topics */}
        <TrendingTopics />

        {/* Author Spotlight */}
        <AuthorSpotlight />

        {/* Recent Articles with Horizontal Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 dark:from-emerald-400 dark:via-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
              Latest Insights
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-purple-500 mx-auto rounded-full"></div>
          </div>

          {fetchData.length > 0 ? (
            <div className="space-y-8">
              {fetchData.slice(0, 6).map((post: BlogPostCard, index) => (
                <div 
                  key={`${post.title}-horizontal`}
                  className="group opacity-0 animate-fade-in-up"
                  style={{ 
                    animationDelay: `${index * 200}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  <div className="relative">
                    <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-50 transition duration-500"></div>
                    <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl border border-gray-200/50 dark:border-gray-700/50 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                      <BlogHoriCard
                        mainImage={post.mainImage}
                        slug={post.slug?.current}
                        shortDesc={post.shortDesc}
                        title={post.title}
                        author={post.author}
                        publishedAt={post.publishedAt}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <p className="text-xl text-gray-500 dark:text-gray-400">No recent articles available</p>
            </div>
          )}
        </section>

        {/* Call to Action Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 dark:from-blue-500 dark:via-purple-500 dark:to-indigo-500"></div>
            <div className="absolute inset-0 bg-black/20 dark:bg-black/30"></div>
            <div className="relative px-8 py-16 md:px-16 md:py-24 text-center text-white">
              <h2 className="text-4xl md:text-6xl font-bold mb-6">
                Ready to Dive Deeper?
              </h2>
              <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-3xl mx-auto">
                Join thousands of developers and designers who stay ahead of the curve with our insights
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/blog">
                  <button className="px-8 py-4 bg-white text-gray-900 rounded-xl font-semibold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg">
                    Explore All Articles
                  </button>
                </Link>
                <Link href="/categories">
                  <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-semibold text-lg hover:bg-white hover:text-gray-900 transform hover:scale-105 transition-all duration-300">
                    Browse Categories
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </div>
  );
}
import React from "react";

const DarkandLight = () => {
  return (
    <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
      <article className="bg-gray-800 rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4 text-gray-100">
            10 Essential Tips for Modern Web Development
          </h1>
          <div className="flex items-center mb-6">
            <img
              src="https://creatie.ai/ai/api/search-image?query=Professional headshot of a young male developer&width=40&height=40&flag=b3a57627-0476-492d-a474-e39ad5602f00&flag=05b0304d-c407-4e34-97ef-f133bf2a74f4&flag=ac204a32-de90-4d5f-bbed-ffea6367d87b"
              alt="Author"
              className="w-10 h-10 rounded-full"
            />
            <div className="ml-3">
              <p className="font-medium text-gray-100">John Smith</p>
              <p className="text-gray-400">
                Published on Mar 15, 2024 · 5 min read
              </p>
            </div>
          </div>
          <img
            src="https://creatie.ai/ai/api/search-image?query=Modern workspace with multiple screens showing code&width=1200&height=600&flag=943f7fa2-a35f-4dd2-8405-9a5362db5a2f&flag=16a66ace-a9f1-4e7a-91d7-5d5124925691&flag=56f8715e-5226-4a4e-be56-45969736bd34"
            alt="Featured image"
            className="w-full h-[400px] object-cover rounded-lg mb-8"
          />
        </div>
        <div className="prose prose-invert max-w-none">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            In today&#39;s rapidly evolving tech landscape, staying up-to-date
            with modern web development practices is crucial. Here are 10
            essential tips that every developer should know...
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-100">
            1. Embrace Modern JavaScript Features
          </h2>
          <p className="mb-6 text-gray-300">
            Modern JavaScript has introduced numerous features that make code
            more readable and maintainable. Features like async/await,
            destructuring, and arrow functions have revolutionized how we write
            JavaScript...
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-100">
            2. Optimize Performance
          </h2>
          <p className="mb-6 text-gray-300">
            Website performance is crucial for user experience and SEO.
            Implement lazy loading, use appropriate image formats, and minimize
            HTTP requests...
          </p>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h3 className="text-xl font-bold mb-4 text-gray-100">
            Share this article
          </h3>
          <div className="flex space-x-4">
            <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400">
              <i className="fab fa-twitter"></i>
              <span>Twitter</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-400 hover:text-blue-400">
              <i className="fab fa-linkedin"></i>
              <span>LinkedIn</span>
            </button>
            <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-100">
              <i className="far fa-copy"></i>
              <span>Copy link</span>
            </button>
          </div>
        </div>
      </article>
      <section className="mt-12">
        <h2 className="text-2xl font-bold mb-6 text-gray-100">
          Related Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          <article className="bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-700">
            <img
              src="https://creatie.ai/ai/api/search-image?query=Web development tools&width=400&height=250&flag=34fb41ef-7c26-4947-94a6-a59c3e8b0986&flag=8b75e0a1-3bc0-41df-9134-2db3392a53cc&flag=1fc580ed-de63-4bfc-b3b9-7488feab67ad"
              alt="Related article"
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 text-gray-100">
                Getting Started with React Hooks
              </h3>
              <p className="text-gray-400">
                Learn how to use React Hooks to write more concise and reusable
                code...
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
};

export default DarkandLight;

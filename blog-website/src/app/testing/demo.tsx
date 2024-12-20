// <!DOCTYPE html>
// <html lang="en"><head>
//     <meta charset="UTF-8"/>
//     <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
//     <title>Blog Website</title>
//     <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&amp;display=swap" rel="stylesheet"/>
//     <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" rel="stylesheet"/>
//     <link href="https://ai-public.creatie.ai/gen_page/tailwind-custom.css" rel="stylesheet"/>
//     <script src="https://cdn.tailwindcss.com/3.4.5?plugins=forms@0.5.7,typography@0.5.13,aspect-ratio@0.4.2,container-queries@0.1.1"></script>
//     <script src="https://ai-public.creatie.ai/gen_page/tailwind-config.min.js" data-color="#1B9AF5" data-border-radius="medium"></script>
// </head>
// <body className="bg-white text-gray-900 font-[&#39;Inter&#39;]">
//     <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
//         <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex items-center justify-between h-16">
//                 <div className="flex items-center">
//                     <img src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" className="h-8"/>
//                     <nav className="hidden md:flex ml-10 space-x-8">
//                         <a href="#" className="text-custom hover:text-gray-900">Home</a>
//                         <a href="#" className="text-gray-600 hover:text-gray-900">Articles</a>
//                         <a href="#" className="text-gray-600 hover:text-gray-900">Categories</a>
//                         <a href="#" className="text-gray-600 hover:text-gray-900">About</a>
//                     </nav>
//                 </div>
//                 <div className="flex items-center space-x-6">
//                     <div className="relative">
//                         <input type="search" placeholder="Search articles..." className="w-80 bg-gray-50 text-gray-900 pl-10 pr-4 py-2 !rounded-button border border-gray-200 focus:border-custom focus:ring-1 focus:ring-custom"/>
//                         <i className="fas fa-search absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"></i>
//                     </div>
//                     <button className="text-gray-600 hover:text-gray-900">
//                         <i className="fas fa-moon"></i>
//                     </button>
//                     <button className="bg-custom text-white px-4 py-2 !rounded-button hover:bg-custom/90">Subscribe</button>
//                 </div>
//             </div>
//         </div>
//     </header>

//     <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
//         <section className="mb-16"><section className="mb-16"><div className="relative h-[500px] rounded-xl overflow-hidden"><img src="https://creatie.ai/ai/api/search-image?query=Modern workspace with multiple screens showing code and design work, atmospheric lighting&width=1200&height=500&flag=4d81a084-0593-48dd-8397-a456e3af0a22&flag=a566b02f-abb3-4389-bba6-e236786495ff" className="w-full h-full object-cover" alt="Hero banner"/><div className="absolute inset-0 bg-gradient-to-r from-white to-transparent flex items-center"><div className="max-w-2xl mx-8"><h1 className="text-5xl font-bold mb-4 text-gray-900">Discover the Latest in Tech &amp; Design</h1><p className="text-xl text-gray-700 mb-6">Stay updated with cutting-edge development techniques and design trends</p><button className="bg-custom text-white px-6 py-3 rounded-button text-lg hover:bg-custom/90">Start Reading</button></div></div></div></section>
//             <h2 className="text-3xl font-bold mb-8">Trending Posts</h2>
//             <div className="grid md:grid-cols-4 gap-8">
//                 <article className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
//                     <img src="https://creatie.ai/ai/api/search-image?query=A modern workspace with a sleek laptop, coffee cup, and minimal desk accessories on a clean white surface, captured with soft natural lighting and shallow depth of field&width=600&height=400&orientation=landscape&flag=e0270a1f-eeb3-4ad7-8587-a6fd85d55310&flag=65513ec0-de26-4d75-b75c-fa28a618fc7c&flag=2080caf7-2c9d-4e00-b4f5-3af4cfaeffc7" alt="Featured post" className="w-full h-48 object-cover"/>
//                     <div className="p-6">
//                         <h3 className="text-xl font-semibold mb-2">10 Essential Tips for Modern Web Development</h3>
//                         <p className="text-gray-600 mb-4">Discover the latest trends and best practices in web development that will help you create better websites...</p>
//                         <div className="flex items-center">
//                             <img src="https://creatie.ai/ai/api/search-image?query=Professional headshot of a young male developer with a friendly smile, wearing smart casual attire against a neutral background&width=40&height=40&orientation=squarish&flag=a6327a17-1dc8-4c12-9ad5-9da4d8dc9492&flag=8ffee924-10fa-454e-9a39-cbcd35a30486&flag=9b3dfc79-0383-4510-9c4d-258ba603185a" alt="Author" className="w-8 h-8 rounded-full"/>
//                             <div className="ml-3">
//                                 <p className="text-sm font-medium">John Smith</p>
//                                 <p className="text-xs text-gray-500">5 min read · Mar 15, 2024</p>
//                             </div>
//                         </div>
//                     </div>
//                 </article>
//                 <article className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
//                     <img src="https://creatie.ai/ai/api/search-image?query=A collection of UI design elements and wireframes on a designer's screen, with a stylus pen and graphics tablet in view&width=600&height=400&orientation=landscape&flag=382d74d9-6445-4634-975d-6bdfb3926603&flag=7441311b-54f4-430e-b9b6-6b1c6105dd36&flag=0a586d3a-b3a1-4ba4-96e6-39fc16ee43a3" alt="Featured post" className="w-full h-48 object-cover"/>
//                     <div className="p-6">
//                         <h3 className="text-xl font-semibold mb-2">The Future of UI Design in 2024</h3>
//                         <p className="text-gray-600 mb-4">Explore upcoming UI design trends and how they&#39;ll shape the future of digital experiences...</p>
//                         <div className="flex items-center">
//                             <img src="https://creatie.ai/ai/api/search-image?query=Professional headshot of a female designer with creative style, wearing modern glasses against a studio background&width=40&height=40&orientation=squarish&flag=7f96bd59-e9c4-4aae-b3d5-00f5e3823ed0&flag=061c862f-ef3d-43cc-b944-e5575a935a8b&flag=0567c442-8404-4af8-a54f-7a87770684e8" alt="Author" className="w-8 h-8 rounded-full"/>
//                             <div className="ml-3">
//                                 <p className="text-sm font-medium">Emma Wilson</p>
//                                 <p className="text-xs text-gray-500">8 min read · Mar 14, 2024</p>
//                             </div>
//                         </div>
//                     </div>
//                 </article>
//                 <article className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200">
//                     <img src="https://creatie.ai/ai/api/search-image?query=A modern mobile device displaying a progressive web app interface, with clean design elements and vibrant colors&width=600&height=400&orientation=landscape&flag=9d1611fa-fbb0-4f96-8541-73fb76acd77b&flag=0ce4939b-3c84-4434-8d8e-f904739478e7&flag=47f86987-725b-4ec6-b8aa-633be607cdd2" alt="Featured post" className="w-full h-48 object-cover"/>
//                     <div className="p-6">
//                         <h3 className="text-xl font-semibold mb-2">Building Progressive Web Apps</h3>
//                         <p className="text-gray-600 mb-4">Learn how to create fast, reliable, and engaging web applications that work offline...</p>
//                         <div className="flex items-center">
//                             <img src="https://creatie.ai/ai/api/search-image?query=Professional headshot of a tech expert with a confident expression, wearing a dark colored shirt against a simple background&width=40&height=40&orientation=squarish&flag=7cbb48e9-f2af-4349-865b-238faf9d3f9c&flag=46a09f26-8bce-46f2-b454-95d9f22e6b15&flag=b0cab550-f66a-4622-8cda-de0ad218248b" alt="Author" className="w-8 h-8 rounded-full"/>
//                             <div className="ml-3">
//                                 <p className="text-sm font-medium">David Chen</p>
//                                 <p className="text-xs text-gray-500">12 min read · Mar 13, 2024</p>
//                             </div>
//                         </div>
//                     </div>
//                 </article>
//             </div>
//         </section>

//         <div className="flex gap-8">
//             <div className="w-2/3">
//                 <div className="flex items-center justify-between mb-8">
//                     <h2 className="text-2xl font-bold">Latest Articles</h2>
//                     <div className="flex items-center space-x-4">
//                         <button className="text-gray-600 hover:text-gray-900"><i className="fas fa-th-large"></i></button>
//                         <button className="text-gray-600 hover:text-gray-900"><i className="fas fa-list"></i></button>
//                     </div>
//                 </div>

//                 <div className="grid gap-8">
//                     <article className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 flex">
//                         <img src="https://creatie.ai/ai/api/search-image?query=A developer's workspace with multiple monitors showing code, modern development tools and a cup of coffee in soft lighting&width=300&height=200&orientation=landscape&flag=17a698d3-2f65-4f70-bf5a-33e653dca4da&flag=0688ae37-3d84-45fc-b63d-09508c251f1e&flag=39acb638-d0ac-4841-b9c4-ef0fb93fc578" alt="Article" className="w-1/3 object-cover"/>
//                         <div className="p-6 flex-1">
//                             <h3 className="text-xl font-semibold mb-2">Understanding Modern JavaScript Features</h3>
//                             <p className="text-gray-600 mb-4">Dive deep into the latest JavaScript features and how they can improve your code quality...</p>
//                             <div className="flex items-center justify-between">
//                                 <div className="flex items-center">
//                                     <img src="https://creatie.ai/ai/api/search-image?query=Professional headshot of a software engineer with a friendly expression&width=40&height=40&orientation=squarish&flag=52af9468-a9e1-4999-bbd4-db1eab7afbad&flag=be30d3f4-4d29-4186-b199-3382069d930d&flag=1de71d6b-4a4b-422d-86cd-866ad47730dc" alt="Author" className="w-8 h-8 rounded-full"/>
//                                     <div className="ml-3">
//                                         <p className="text-sm font-medium">Michael Brown</p>
//                                         <p className="text-xs text-gray-500">10 min read · Mar 12, 2024</p>
//                                     </div>
//                                 </div>
//                                 <div className="flex items-center space-x-4">
//                                     <button className="text-gray-600 hover:text-gray-900"><i className="far fa-bookmark"></i></button>
//                                     <button className="text-gray-600 hover:text-gray-900"><i className="far fa-share-square"></i></button>
//                                 </div>
//                             </div>
//                         </div>
//                     </article>
//                 </div><section className="bg-white rounded-xl p-8 my-12 shadow-lg border border-gray-200"><h2 className="text-2xl font-bold mb-8 text-center">What Our Readers Say</h2><div className="grid md:grid-cols-3 gap-8"><div className="text-center"><div className="mb-4"><img src="https://creatie.ai/ai/api/search-image?query=Professional headshot smiling person&width=80&height=80&flag=2ebbe05f-7b5c-49eb-bb82-e6324bd99131&flag=92244a72-3820-4688-bce5-df120aefbf7a" className="w-20 h-20 rounded-full mx-auto" alt="Testimonial author"/></div><p className="text-gray-600 italic mb-4">&#34;This blog has become my go-to resource for staying updated with the latest web development trends.&#34;</p><p className="font-semibold">Sarah Johnson</p><p className="text-sm text-gray-500">Frontend Developer</p></div><div className="text-center"><div className="mb-4"><img src="https://creatie.ai/ai/api/search-image?query=Professional headshot confident person&width=80&height=80&flag=d212454b-0af3-4b90-a101-64f6506ea905&flag=8f5bd1b3-d9bf-440d-a802-e649d369df6b" className="w-20 h-20 rounded-full mx-auto" alt="Testimonial author"/></div><p className="text-gray-600 italic mb-4">&#34;The quality of content and practical examples have helped me grow as a developer.&#34;</p><p className="font-semibold">Mark Thompson</p><p className="text-sm text-gray-500">Full Stack Developer</p></div><div className="text-center"><div className="mb-4"><img src="https://creatie.ai/ai/api/search-image?query=Professional headshot creative person&width=80&height=80&flag=6cb881e1-b697-4555-a3f0-61725260a6a3&flag=063b486e-91ff-49db-8f2d-4dee71afcecc" className="w-20 h-20 rounded-full mx-auto" alt="Testimonial author"/></div><p className="text-gray-600 italic mb-4">&#34;Exceptional insights into UI/UX design trends and best practices.&#34;</p><p className="font-semibold">Lisa Chen</p><p className="text-sm text-gray-500">UI/UX Designer</p></div></div></section>
//             </div>

//             <aside className="w-1/3">
//                 <div className="bg-white rounded-lg p-6 sticky top-24 shadow-lg border border-gray-200">
//                     <h3 className="text-xl font-semibold mb-6">Popular Posts</h3>
//                     <div className="space-y-4">
//                         <article className="flex gap-4">
//                             <img src="https://creatie.ai/ai/api/search-image?query=A close-up of modern technology devices arranged neatly on a desk&width=80&height=80&orientation=squarish&flag=3f186733-0f87-4861-bfb3-1210559f5de9&flag=4fccd7fc-98c6-4d92-bdda-b4c5213d4d47&flag=3e51aa29-6636-40c2-a06b-b3b5d4b44504" alt="Popular post" className="w-20 h-20 rounded object-cover"/>
//                             <div>
//                                 <h4 className="font-medium mb-1">Getting Started with TypeScript</h4>
//                                 <p className="text-sm text-gray-500">5 min read · 2.5k views</p>
//                             </div>
//                         </article>
//                     </div>

//                     <div className="mt-8">
//                         <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
//                         <p className="text-gray-600 mb-4">Get the latest articles and resources in your inbox weekly</p>
//                         <form className="space-y-4">
//                             <input type="email" placeholder="Your email address" className="w-full bg-gray-50 text-gray-900 px-4 py-2 !rounded-button border border-gray-200 focus:border-custom focus:ring-1 focus:ring-custom"/>
//                             <button className="w-full bg-custom text-white px-4 py-2 !rounded-button hover:bg-custom/90">Subscribe</button>
//                         </form>
//                     </div>
//                 </div>
//             </aside>
//         </div>
//     </main>

//     <footer className="bg-gray-50 mt-16 border-t border-gray-200">
//         <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//             <div className="grid md:grid-cols-4 gap-8">
//                 <div>
//                     <img src="https://ai-public.creatie.ai/gen_page/logo_placeholder.png" alt="Logo" className="h-8 mb-4"/>
//                     <p className="text-gray-600">A modern blog platform for developers and designers to share their knowledge and experiences.</p>
//                 </div>
//                 <div>
//                     <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
//                     <ul className="space-y-2">
//                         <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
//                         <li><a href="#" className="text-gray-600 hover:text-gray-900">Articles</a></li>
//                         <li><a href="#" className="text-gray-600 hover:text-gray-900">Categories</a></li>
//                         <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
//                     </ul>
//                 </div>
//                 <div>
//                     <h4 className="text-lg font-semibold mb-4">Categories</h4>
//                     <ul className="space-y-2">
//                         <li><a href="#" className="text-gray-600 hover:text-gray-900">Web Development</a></li>
//                         <li><a href="#" className="text-gray-600 hover:text-gray-900">UI Design</a></li>
//                         <li><a href="#" className="text-gray-600 hover:text-gray-900">JavaScript</a></li>
//                         <li><a href="#" className="text-gray-600 hover:text-gray-900">Career</a></li>
//                     </ul>
//                 </div>
//                 <div>
//                     <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
//                     <div className="flex space-x-4">
//                         <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-twitter"></i></a>
//                         <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-github"></i></a>
//                         <a href="#" className="text-gray-600 hover:text-gray-900"><i className="fab fa-linkedin"></i></a>
//                     </div>
//                 </div>
//             </div>
//             <div className="border-t border-gray-200 mt-12 pt-8 text-center text-gray-600">
//                 <p>© 2024 Blog Website. All rights reserved.</p>
//             </div>
//         </div>
//     </footer>

// </body></html>

<div className="bg-gray-900 text-gray-100 font-[&#39;Inter&#39;]">
  <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 flex flex-col gap-8">
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Blog</h1>
      <p className="text-gray-400 text-xl">
        Discover insightful articles about web development, design, and
        technology
      </p>
    </div>
    <aside className="w-64 flex-shrink-0">
      <div className="bg-gray-800 rounded-lg p-6 sticky top-24">
        <h3 className="text-xl font-bold mb-4">Categories</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-custom" />
            <span className="ml-2 text-gray-300">Web Development</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-custom" />
            <span className="ml-2 text-gray-300">JavaScript</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-custom" />
            <span className="ml-2 text-gray-300">React</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-custom" />
            <span className="ml-2 text-gray-300">UI/UX Design</span>
          </label>
        </div>
        <h3 className="text-xl font-bold mt-8 mb-4">Date Range</h3>
        <select className="w-full bg-gray-700 border-gray-600 text-gray-300 rounded-md">
          <option>Last 7 days</option>
          <option>Last 30 days</option>
          <option>Last 3 months</option>
          <option>Last year</option>
        </select>
      </div>
    </aside>
    <div className="flex-1">
      <div className="grid gap-8">
        <article className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750">
          <div className="flex gap-6">
            <img
              src="https://creatie.ai/ai/api/search-image?query=Modern workspace with multiple screens showing code&flag=b9dd63d7-03df-44d6-bf49-d7826c50c738&flag=5b9e1db5-01af-4da7-820f-ebac9bfae69c"
              className="w-48 h-32 object-cover rounded-lg"
              alt="Blog thumbnail"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">
                10 Essential Tips for Modern Web Development
              </h2>
              <p className="text-gray-300 mb-4">
                In today&#39;s rapidly evolving tech landscape, staying
                up-to-date with modern web development practices is crucial.
                Here are 10 essential tips that every developer should know...
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <img
                  src="https://creatie.ai/ai/api/search-image?query=Professional headshot&flag=4eb417cd-ea1b-4183-ab3a-7931403ae201&flag=79cdf5a4-fbad-4543-b631-54f8805a4dd0&flag=39fdbeb8-fb4a-49e9-807c-87ad49da21e5&flag=9c260f91-d3c8-40f1-a0a1-2686489a33cc&flag=49b5d247-50b4-437f-aef1-7ad2e9d10d0d&flag=016735f7-c079-40f7-874a-efb65f987232"
                  className="w-6 h-6 rounded-full mr-2"
                  alt="Author"
                />
                <span>John Smith</span>
                <span className="mx-2">•</span>
                <span>Mar 15, 2024</span>
                <span className="mx-2">•</span>
                <span>5 min read</span>
              </div>
            </div>
          </div>
        </article>
        <article className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750">
          <div className="flex gap-6">
            <img
              src="https://creatie.ai/ai/api/search-image?query=React code on computer screen&flag=67032d37-df06-485e-a77e-f72f9132f897&flag=98b3e68a-d3c3-4d0d-bf72-5f8dedb657e3"
              className="w-48 h-32 object-cover rounded-lg"
              alt="Blog thumbnail"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">
                Getting Started with React Hooks
              </h2>
              <p className="text-gray-300 mb-4">
                Learn how to use React Hooks to write more concise and reusable
                code in your React applications. A comprehensive guide for
                beginners...
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <img
                  src="https://creatie.ai/ai/api/search-image?query=Professional headshot"
                  className="w-6 h-6 rounded-full mr-2"
                  alt="Author"
                />
                <span>Sarah Johnson</span>
                <span className="mx-2">•</span>
                <span>Mar 14, 2024</span>
                <span className="mx-2">•</span>
                <span>8 min read</span>
              </div>
            </div>
          </div>
        </article>
        <article className="bg-gray-800 rounded-lg p-6 hover:bg-gray-750">
          <div className="flex gap-6">
            <img
              src="https://creatie.ai/ai/api/search-image?query=UI design workflow&flag=131fbcf4-14f9-4bff-a76b-6b6ad29f9f03&flag=8d332422-7c37-4cbf-b9d1-7f880b52ada1"
              className="w-48 h-32 object-cover rounded-lg"
              alt="Blog thumbnail"
            />
            <div className="flex-1">
              <h2 className="text-2xl font-bold mb-2">
                Mastering Modern UI Design Principles
              </h2>
              <p className="text-gray-300 mb-4">
                Explore the key principles of modern UI design and learn how to
                create beautiful, user-friendly interfaces that engage and
                delight users...
              </p>
              <div className="flex items-center text-sm text-gray-400">
                <img
                  src="https://creatie.ai/ai/api/search-image?query=Professional headshot"
                  className="w-6 h-6 rounded-full mr-2"
                  alt="Author"
                />
                <span>Mike Chen</span>
                <span className="mx-2">•</span>
                <span>Mar 13, 2024</span>
                <span className="mx-2">•</span>
                <span>6 min read</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  </div>
</div>;

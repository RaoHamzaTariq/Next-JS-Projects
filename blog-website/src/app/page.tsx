import BlogVertiCard from "@/components/blogverti-card";
import Image from "next/image";
import Link from "next/link";
import BlogHoriCard from "@/components/bloghori-card";
import { BlogPostCard } from "@/data/interfaces";

export default async function Home() {

  const fetchingData = async () =>{
    try {
      
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
const response = await fetch(`${API_URL}/api/fetchingblog`);
      if(!response){
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
  const fetchData : BlogPostCard[] = await fetchingData() || []
  
  return (
    <div className=" font-[&#39;Inter&#39;]">
      <main className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        <section className="mb-16">
        <section className="mb-16">
      <div className="relative h-[500px] rounded-xl overflow-hidden">
        <Image
          src="/Images/Home/hero.png"
          layout="fill"
          objectFit="cover"
          alt="Hero banner"
          className="w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-transparent dark:from-gray-900 dark:to-transparent flex items-center">
          <div className="max-w-2xl mx-8 ">
            <h1 className="text-5xl  font-bold mb-4">
              Discover the Latest in Tech &amp; Design
            </h1>
            <p className="text-xl  mb-6">
              Stay updated with cutting-edge development techniques and design trends
            </p>
            <Link href="/blog">
              <button className="bg-custom text-white px-6 py-3 rounded-lg text-lg hover:bg-custom/90 transition-all duration-300">
                Start Reading
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h2 className="text-3xl font-bold mb-8">Trending Posts</h2>
      <div className="grid md:grid-cols-4 gap-8">
        
        {fetchData.length>0?(fetchData.map((post:BlogPostCard) => (
         <BlogVertiCard mainImage={post.mainImage} slug={post.slug?.current} shortDesc={post.shortDesc} key={post.title} title={post.title} author={post.author} publishedAt={post.publishedAt}  />
        ))):(
          <p className="w-screen justify-center items-center my-20">Blogs not found!</p>
        )}
      </div>
    </section>

        </section>
        <div className="flex gap-8">
          <div className="w-2/3">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Latest Articles</h2>
              <div className="flex items-center space-x-4">
                <button className="text-gray-400 hover:text-white">
                  <i className="fas fa-th-large"></i>
                </button>
                <button className="text-gray-400 hover:text-white">
                  <i className="fas fa-list"></i>
                </button>
              </div>
            </div>
            <div className="grid gap-8">
            {fetchData.length>0?(fetchData.map((post:BlogPostCard) => (
         <BlogHoriCard mainImage={post.mainImage} slug={post.slug?.current} shortDesc={post.shortDesc} key={post.title} title={post.title} author={post.author} publishedAt={post.publishedAt}  />
        ))):(
          <p className="w-screen justify-center items-center my-20">Blogs not found!</p>
        )}
  </div>
            <section className="dark:bg-gray-800 rounded-xl p-8 my-12">
              <h2 className="text-2xl font-bold mb-8 text-center">
                What Our Readers Say
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="mb-4">
                  <Image
                      src="/Images/Home/testimonial1.png"
                      className="w-20 h-20 rounded-full mx-auto"
                      alt="Testimonial author"
                      width={80}
                      height={80}
                    />
                  </div>
                  <p className=" italic mb-4">
                    &#34;This blog has become my go-to resource for staying
                    updated with the latest web development trends.&#34;
                  </p>
                  <p className="font-semibold">Sarah Johnson</p>
                  <p className="text-sm ">Frontend Developer</p>
                </div>
                <div className="text-center">
                  <div className="mb-4">
                  <Image
                      src="/Images/Home/testimonial2.png"
                      className="w-20 h-20 rounded-full mx-auto"
                      alt="Testimonial author"
                      width={80}
                      height={80}
                    />
                  </div>
                  <p className="italic mb-4">
                    &#34;The quality of content and practical examples have
                    helped me grow as a developer.&#34;
                  </p>
                  <p className="font-semibold">Mark Thompson</p>
                  <p className="text-sm ">Full Stack Developer</p>
                </div>
                <div className="text-center">
                  <div className="mb-4">
                    <Image
                      src="/Images/Home/testimonial3.png"
                      className="w-20 h-20 rounded-full mx-auto"
                      alt="Testimonial author"
                      width={80}
                      height={80}
                    />
                  </div>
                  <p className=" italic mb-4">
                    &#34;Exceptional insights into UI/UX design trends and best
                    practices.&#34;
                  </p>
                  <p className="font-semibold">Lisa Chen</p>
                  <p className="text-sm ">UI/UX Designer</p>
                </div>
              </div>
            </section>
          </div>
          <aside className="w-full lg:w-1/3">
  <div className="dark:bg-gradient-to-br from-gray-800 to-gray-900 shadow-xl rounded-lg p-6 sticky top-24">
    {/* Popular Posts Section */}
    <section>
      <h3 className="text-2xl font-semibold mb-6 ">Popular Posts</h3>
      <div className="space-y-6">
        <article className="flex gap-4 items-center dark:hover:bg-gray-700 p-4 rounded-lg transition duration-300">
          <Image
            src="/Images/Home/newsletter.jpg"
            alt="Popular post"
            className="w-20 h-20 rounded-lg object-cover shadow-md"
            width={80}
            height={80}
          />
          <div>
            <h4 className="text-lg font-medium mb-1 hover:text-custom transition duration-300">
              Getting Started with TypeScript
            </h4>
            <p className="text-sm">
              5 min read · 2.5k views
            </p>
          </div>
        </article>
        {/* Add more posts as needed */}
      </div>
    </section>

    {/* Newsletter Section */}
    <section className="mt-10">
      <h3 className="text-2xl font-semibold mb-6 ">Newsletter</h3>
      <p className=" mb-4">
        Get the latest articles and resources in your inbox weekly.
      </p>
      <form className="space-y-4">
        <input
          type="email"
          placeholder="Your email address"
          className="w-full dark:bg-gray-700 px-4 py-3 rounded-lg border border-gray-600 focus:ring-2 focus:ring-custom focus:outline-none placeholder-gray-400"
        />
        <button
          type="submit"
          className="w-full bg-custom text-white px-4 py-3 rounded-lg font-medium shadow-lg hover:from-custom-dark hover:to-custom hover:shadow-xl transition duration-300"
        >
          Subscribe
        </button>
      </form>
    </section>
  </div>
</aside>

        </div>
      </main>
    </div>
  );
}

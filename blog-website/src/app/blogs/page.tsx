import BlogHoriCard from '@/components/bloghori-card';
import { BlogPostCard } from '@/data/interfaces';

export default async function Blogs() {
  const fetchingData = async () => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL;
      const response = await fetch(`${API_URL}/api/fetchingblog`, {
        next: {
          revalidate: 10,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data!");
      }

      const data = await response.json();

      if (!data || !data.data || !Array.isArray(data.data)) {
        throw new Error("Invalid data format");
      }

      return data.data;
    } catch (error) {
      console.error(error);
      return []; // Return an empty array on error
    }
  };

  const fetchData: BlogPostCard[] = await fetchingData();

  return (
    <div className="font-['Inter']">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 flex flex-col gap-8">
        <div className="text-center py-12">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Blog</h1>
          <p className="text-xl">
            Discover insightful articles about web development, design, and technology.
          </p>
        </div>
        <div className="flex gap-8">
          <aside className="w-64 flex-shrink-0 hidden sm:block">
            <div className="dark:bg-gray-800 rounded-lg p-6 shadow-lg sticky top-24">
              <h3 className="text-xl font-bold mb-4">Categories</h3>
              <div className="space-y-2 flex flex-col items-start">
                {["Web Development", "JavaScript", "React", "UI/UX Design"].map((category) => (
                  <label key={category} className="flex justify-between items-center">
                    <input type="checkbox" className="form-checkbox text-custom" />
                    <span className="ml-2 dark:text-gray-300">{category}</span>
                  </label>
                ))}
              </div>
              <h3 className="text-xl font-bold mt-8 mb-4">Date Range</h3>
              <select className="w-full dark:bg-gray-700 border-gray-600 dark:text-gray-300 rounded-md">
                <option>Last 7 days</option>
                <option>Last 30 days</option>
                <option>Last 3 months</option>
                <option>Last year</option>
              </select>
            </div>
          </aside>
          <div className="flex-1">
            <div className="grid gap-8">
              {fetchData.length > 0 ? (
                fetchData.map((post: BlogPostCard) => (
                  <BlogHoriCard
                    key={post.slug?.current} // Use a unique identifier for the key
                    slug={post.slug?.current}
                    title={post.title}
                    shortDesc={post.shortDesc}
                    mainImage={post.mainImage}
                    author={post.author}
                    publishedAt={post.publishedAt}
                  />
                ))
              ) : (
                <p className="w-screen justify-center items-center my-20">Blogs not found!</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

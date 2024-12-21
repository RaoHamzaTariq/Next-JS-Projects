
import BlogHoriCard from '@/components/bloghori-card';
import { BlogPostCard } from '@/data/interfaces';


export default async function Blogs() {

  const fetchingData = async () =>{
    try {
      const response = await fetch("http://localhost:3000/api/fetchingblog", {
        cache: "no-store",
      });
      if(!response){
        throw new Error("Failed to fetch data!")
      }
      const data = await response.json()
      return data.data
    } catch (error) {
      console.log(error)

      return null; 
    }
    
  }
  const fetchData = await fetchingData()

  return (
    <div className=" font-[&#39;Inter&#39;]">
  <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 flex flex-col gap-8">
    <div className="text-center py-12">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Blog</h1>
      <p className=" text-xl">
        Discover insightful articles about web development, design, and
        technology
      </p>
    </div>
    <div className='flex gap-8'>
    <aside className="w-64 flex-shrink-0">
      <div className="dark:bg-gray-800 rounded-lg p-6 shadow-lg sticky top-24">
        <h3 className="text-xl font-bold mb-4">Categories</h3>
        <div className="space-y-2">
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-custom" />
            <span className="ml-2 dark:text-gray-300">Web Development</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-custom" />
            <span className="ml-2 dark:text-gray-300">JavaScript</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-custom" />
            <span className="ml-2 dark:text-gray-300">React</span>
          </label>
          <label className="flex items-center">
            <input type="checkbox" className="form-checkbox text-custom" />
            <span className="ml-2 dark:text-gray-300">UI/UX Design</span>
          </label>
        </div>
        <h3 className="text-xl font-bold mt-8 mb-4">Date Range</h3>
        <select className="w-full dark:bg-gray-700 border-gray-600 dark:text-gray-300 rounded-md">
          <option className=''>Last 7 days</option>
          <option className=''>Last 30 days</option>
          <option className=''>Last 3 months</option>
          <option className=''>Last year</option>
        </select>
      </div>
    </aside>
    <div className="flex-1">
      <div className="grid gap-8">
       {fetchData.length>0 ? fetchData.map((post:BlogPostCard)=>(
        <BlogHoriCard  key={post.title} slug={post.slug?.current} title={post.title} shortDesc={post.shortDesc} mainImage={post.mainImage || { asset: { _id: '', url: '' } }} // Default value
        author={post.author} publishedAt={post.publishedAt}/>
       )): <p className='w-screen justify-center items-center my-20'>Blogs not found!</p>}
      </div>
    </div>
    </div>
  </div>
</div>
  );
}




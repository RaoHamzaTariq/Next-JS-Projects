
import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { Linkedin } from "lucide-react";
import { BlogPost } from "@/app/api/fetchingblog/route";
import { PortableTextReactComponents } from "@portabletext/react";


const portableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => (
      <p className="mb-6 text-base leading-relaxed">{children}</p>
    ),
    h1: ({ children }) => (
      <h1 className="text-5xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mb-3">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-medium mb-2">{children}</h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-xl font-normal mb-1">{children}</h4>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-6">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-6">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="mb-2 text-base">{children}</li>
    ),
    number: ({ children }) => (
      <li className="mb-2 text-base">{children}</li>
    ),
  },
};

const BlogDetail = async ({params}:{params:{blogDetail:string}}) => {
  const slug = params.blogDetail;
  const fetchingData = async () =>{
    try {
      const response = await fetch("http://localhost:3000/api/fetchingblog", {
        cache: "no-store",
      });
      if(!response){
        throw new Error("Failed to fetch data!")
      }
      const data = await response.json()
      const filteredData = data.data.filter((project:BlogPost)=>project.slug?.current == slug)
      return filteredData
    } catch (error) {
      console.log(error)

      return null; 
    }
    
  }
  const fetchData : BlogPost[] = await fetchingData()

  return (
    <>
      <div className="font-['Inter']">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          {fetchData.length > 0 &&
            fetchData.map((project) => (
              <article key={project.title} className="rounded-lg dark:bg-[#1f2937] dark:text-gray-300 shadow-lg p-8">
                <div className="mb-8">
                  <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                  <div className="flex items-center mb-6">
                    
                    <Image
                    src={
                      project.author?.image
                        ? urlFor(project.author?.image).url()
                        : "/default-image.png"
                    }
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-10 h-10 rounded-full"
                  />
                    <div className="ml-3">
                      <p className="font-medium ">{project.author?.name}</p>
                      <p className="">Published on {project.publishedAt.slice(0,10)}</p>
                    </div>
                  </div>
                  <Image
                    src={
                      project.mainImage
                        ? urlFor(project.mainImage).url()
                        : "/default-image.png"
                    }
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-[400px] object-cover rounded-lg mb-8"
                  />
                </div>
                <div className="prose prose-invert max-w-none">
                    <p>{project.shortDesc}</p>
                  {project.body && (
                    <PortableText
                      value={project.body}
                      components={portableTextComponents}
                    />
                  )}
                </div>
                <div className="mt-12 pt-8 border-t ">
                  <h3 className="text-xl font-bold mb-4 ">
                    Share this article
                  </h3>
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2  hover:text-blue-400">
                      <i className="fab fa-twitter"></i>
                      <span>Twitter</span>
                    </button>
                    <button className="flex items-center space-x-2  hover:text-blue-400">
                      <Linkedin />
                      <span>LinkedIn</span>
                    </button>
                    <button className="flex items-center space-x-2  hover:text-gray-400">
                      <i className="far fa-copy"></i>
                      <span>Copy link</span>
                    </button>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </div>
    </>
  );
};

export default BlogDetail;

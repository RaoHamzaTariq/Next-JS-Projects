import React from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { Copy, Linkedin, LucideTwitter } from "lucide-react";
import { BlogPost } from "@/app/api/fetchingblog/route";
import { PortableTextReactComponents } from "@portabletext/react";
import CommentForm from "@/components/commentsSection";

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

const BlogDetail = async ({ params }: { params: { blogDetail: string } }) => {
  const slug = params.blogDetail;

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

      const filteredData = data.data.filter(
        (project: BlogPost) => project.slug?.current === slug
      );

      return filteredData;
    } catch (error) {
      console.error(error);
      return []; // Return an empty array on error
    }
  };

  const fetchData: BlogPost[] = await fetchingData();

  return (
    <div className="font-['Inter']">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
        {fetchData.length > 0 ? (
          fetchData.map((project) => (
            <article
              key={project._id} // Use _id for unique key
              className="rounded-lg dark:bg-[#1f2937] dark:text-gray-300 shadow-lg py-8 px-2 sm:p-8"
            >
              <div className="mb-8">
                <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                <div className="flex items-center mb-6">
                  <Image
                    src={
                      project.author?.image
                        ? urlFor(project.author.image).url()
                        : "/default-image.png"
                    }
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="font-medium">{project.author?.name}</p>
                    <p>Published on {project.publishedAt.slice(0, 10)}</p>
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
                {project.body && (
                  <PortableText
                    value={project.body}
                    components={portableTextComponents}
                  />
                )}
              </div>
              <div className="mt-12 pt-8 border-t">
                <h3 className="text-xl font-bold mb-4">Share this article</h3>
                <div className="flex space-x-4">
                  <button className="flex items-center space-x-2 hover:text-blue-400">
                    <LucideTwitter />
                    <span>Twitter</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-blue-400">
                    <Linkedin />
                    <span>LinkedIn</span>
                  </button>
                  <button className="flex items-center space-x-2 hover:text-gray-400">
                    <Copy />
                    <span>Copy link</span>
                  </button>
                </div>
              </div>
            </article>
          ))
        ) : (
          <p>No blog post found.</p> 
        )}
        {fetchData.length > 0 && (
          <CommentForm postId={fetchData[0]._id} /> 
        )}
      </div>
    </div>
  );
};

export default BlogDetail;

'use client'
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { Linkedin } from "lucide-react";
import { BlogPost } from "../api/fetchingblog/route";


const portableTextComponents = {
  block: {
    normal: ({ children }: { children: React.ReactNode }) => (
      <p className="mb-6 text-lg leading-relaxed">{children}</p>
    ),
    h1: ({ children }: { children: React.ReactNode }) => (
      <h1 className="text-4xl font-bold mb-4">{children}</h1>
    ),
    h2: ({ children }: { children: React.ReactNode }) => (
      <h2 className="text-2xl font-semibold mb-3">{children}</h2>
    ),
    h3: ({ children }: { children: React.ReactNode }) => (
      <h3 className="text-xl font-medium mb-2">{children}</h3>
    ),
  },
  list: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <ul className="list-disc list-inside mb-6">{children}</ul>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <ol className="list-decimal list-inside mb-6">{children}</ol>
    ),
  },
  listItem: {
    bullet: ({ children }: { children: React.ReactNode }) => (
      <li className="mb-2">{children}</li>
    ),
    number: ({ children }: { children: React.ReactNode }) => (
      <li className="mb-2">{children}</li>
    ),
  },
};

const Demo = () => {
  const [projects, setProjects] = useState<BlogPost[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/fetchingblog");
        const data = await response.json();
        const filteredData = data.data.filter(
          (project: Project) =>
            project.title ===
            "Exploring the Top 5 Machine Learning Algorithms Every Data Scientist Should Know"
        );
        setProjects(filteredData);
        console.log(data.data);
      } catch (error: any) {
        setError(error);
        console.error("Error fetching projects:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="font-['Inter']">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 pt-24">
          {projects.length > 0 &&
            projects.map((project) => (
              <article className="rounded-lg dark:bg-[#1f2937] dark:text-gray-300 shadow-lg p-8">
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

export default Demo;

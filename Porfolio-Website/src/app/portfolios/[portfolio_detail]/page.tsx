"use client";

import { useParams } from "next/navigation";
import React, { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import Link from "next/link";
import { urlFor } from "@/sanity/lib/image";
import { PortableTextReactComponents } from "@portabletext/react";
import { PortableText } from "@portabletext/react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PortfolioData } from "@/data/interface";
import SanityVideo from "@/components/SanityVideo";
import Loader from "@/components/loader";

const portableTextComponents: Partial<PortableTextReactComponents> = {
  block: {
    normal: ({ children }) => <p className="mb-6 text-base leading-relaxed">{children}</p>,
    h1: ({ children }) => <h1 className="text-5xl font-bold mb-4">{children}</h1>,
    h2: ({ children }) => <h2 className="text-3xl font-semibold mb-3">{children}</h2>,
    h3: ({ children }) => <h3 className="text-2xl font-medium mb-2">{children}</h3>,
    h4: ({ children }) => <h4 className="text-xl font-normal mb-1">{children}</h4>,
  },
  list: {
    bullet: ({ children }) => <ul className="list-disc list-inside mb-6">{children}</ul>,
    number: ({ children }) => <ol className="list-decimal list-inside mb-6">{children}</ol>,
  },
  listItem: {
    bullet: ({ children }) => <li className="mb-2 text-base">{children}</li>,
    number: ({ children }) => <li className="mb-2 text-base">{children}</li>,
  },
};

function ProjectDetailContent() {
  const [projectdetailData, setProjectdetailData] = useState<PortfolioData | undefined>(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const API_URL = process.env.NEXT_PUBLIC_URL;
        const response = await fetch(`${API_URL}/api/project-api?slug=${params.portfolio_detail}`);
        if (!response.ok) {
          throw new Error("Failed to fetch project details");
        }
        const data = await response.json();
        setProjectdetailData(data.data);
      } catch (error) {
        console.error("Error fetching project details:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [params.portfolio_detail]);

  if (isLoading) {
    return (
      <div className="flex justify-center py-32 items-center min-h-screen">
        <Loader />
      </div>
    );
  }

  if (!projectdetailData) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div>Project not found.</div>
      </div>
    );
  }

  const mediaContent = () => {
    if (projectdetailData.demo_video?._type === "file") {
      return (
        <SanityVideo
          videoAsset={projectdetailData.demo_video}
          className="w-full h-auto rounded-lg shadow-md aspect-video"
          controls
        />
      );
    }

    if (projectdetailData.video_url) {
      return (
        <div className="w-full aspect-video rounded-lg shadow-md overflow-hidden">
          <iframe
            src={projectdetailData.video_url}
            title={projectdetailData.title}
            className="w-full h-full"
            allowFullScreen
          />
        </div>
      );
    }

    if (projectdetailData.mainImage) {
      return (
        <div className="relative w-full aspect-video rounded-lg shadow-md overflow-hidden">
          <Image
            src={urlFor(projectdetailData.mainImage).url()}
            alt={projectdetailData.title}
            fill
            className="object-cover"
          />
        </div>
      );
    }

    return null;
  };

  const mediaExists = projectdetailData.demo_video || projectdetailData.video_url || projectdetailData.mainImage;

  return (
    <div className="flex flex-col min-h-screen pt-16">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary">
            Back to Projects
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Top Section: Project Intro and Media */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Left Side: Project Intro */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{projectdetailData.title}</h1>
            <p className="text-muted-foreground mb-6">{projectdetailData.shortDesc}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {projectdetailData.skills?.map((tech) => (
                <Badge key={tech} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
            <div className="flex gap-4">
              {projectdetailData.livedemo && (
                <Button asChild>
                  <Link href={projectdetailData.livedemo} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </Link>
                </Button>
              )}
              {projectdetailData.githubUrl && (
                <Button variant="outline" asChild>
                  <Link href={projectdetailData.githubUrl} target="_blank" rel="noopener noreferrer">
                    View Code
                  </Link>
                </Button>
              )}
            </div>
          </div>

          {/* Right Side: Media (Video/Image/YouTube) */}
          {mediaExists && <div>{mediaContent()}</div>}
        </div>

        {/* Bottom Section: Project Details */}
        <div className="border-t pt-12">
          <h2 className="text-2xl font-semibold mb-6">Project Details</h2>
          <div className="mx-5">
            {projectdetailData.content && (
              <PortableText value={projectdetailData.content} components={portableTextComponents} />
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default function ProjectDetail() {
  return (
    <Suspense fallback={<div className="flex justify-center py-32 items-center min-h-screen"><Loader /></div>}>
      <ProjectDetailContent />
    </Suspense>
  );
}

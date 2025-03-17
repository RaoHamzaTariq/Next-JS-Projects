"use client"; // Add this line at the very top

import { PortfolioData } from '@/data/data';
import { useParams } from 'next/navigation';
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


export default function ProjectDetail() {

  const params = useParams();
  useEffect(() => {
    console.log(params)
  }, [params])
  const projectSlug: string = params.projectDetail as string;
  const projectsData =  Object.values(PortfolioData).flat() 
  const projectdetailData = projectsData.find(e => e.title.replace(/\s+/g,"") === projectSlug);

  if (!projectdetailData) {
    return (
      <>
        <div className='mt-14'>
          <h1>Project not found</h1>
        </div>
      </>
    );
  }


  return (
    <div className="flex flex-col min-h-screen pt-16">
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/Portfolio/All" className="flex items-center text-sm font-medium text-muted-foreground hover:text-primary">
            {/* <ArrowLeft className="mr-2 h-4 w-4" /> */}
            Back to Projects
          </Link>
        </div>
      </header>

      <main className="flex-grow container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h1 className="text-3xl font-bold mb-4">{projectdetailData.title}</h1>
            <p className="text-muted-foreground mb-6">{projectdetailData.desc}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {projectdetailData.stacks.map((tech) => (
                <Badge key={tech} variant="secondary">{tech}</Badge>
              ))}
            </div>
            <div className="flex gap-4 mb-8">
              <Button asChild>
                <Link href={projectdetailData.liveDemo} target="_blank" rel="noopener noreferrer">
                  {/* <Globe className="mr-2 h-4 w-4" />  */}
                  Live Demo
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={projectdetailData.githubUrl} target="_blank" rel="noopener noreferrer">
                  {/* <Github className="mr-2 h-4 w-4" />  */}
                  View Code
                </Link>
              </Button>
            </div>
            <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
            <p className="text-muted-foreground">{projectdetailData.longDesc}</p>
          </div>
          <div>
            <Image
              src={projectdetailData.image}
              alt={projectdetailData.title}
              width={600}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>
      </main>
    </div>
  )
}
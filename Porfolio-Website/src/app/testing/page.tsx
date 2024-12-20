'use client'
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { urlFor } from '@/sanity/lib/image';
import { PortableText } from 'next-sanity';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';

// Interface for Project data
interface Project {
  _id?: string;
  name: string;
  shortDescription?: string;
  image?: {
    _ref?: string;
  };
  stacks?: string[];
  content?: any;
  link?: string;
}

export default function Testing() {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/project-api');
        const data = await response.json();
        const filteredData = data.data.filter((project: Project) => project.name === "Traffic Accidents Dashboard");
        setProjects(filteredData);
        console.log(filteredData);
      } catch (error) {
        setError(error);
        console.error('Error fetching projects:', error);
      }
    };

    fetchData();
  }, []);

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
      {projects && projects.map((project:Project)=>(
        <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
          <p className="text-muted-foreground mb-6">{project.shortDescription}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stacks?.map((tech) => (
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
          </div>
          <div className="flex gap-4 mb-8">
            <Button asChild>
              <Link href={project.link} target="_blank" rel="noopener noreferrer">
                {/* <Globe className="mr-2 h-4 w-4" />  */}
                Live Demo
              </Link>
            </Button>
          </div>
          <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
          <div className='my-3'>
          <PortableText components={{}} value={project.content} />
          </div>
        </div>
        <div>
          <Image
            src={project.image ? urlFor(project.image).url() : '/default-image.png'}
            alt={project.name}
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      ))}
        
      </main>
    </div>
  );
}
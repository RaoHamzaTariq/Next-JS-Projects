"use client"

import Autoplay from "embla-carousel-autoplay"
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel, 
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { FeaturedProjects } from "@/data/interface";
import { Button } from "./ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import Loader from "./loader";
import SanityImage from "./SanityImage";


export function FeatureProjectsCarousal() {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const API_URL = process.env.NEXT_PUBLIC_URL;
                const response = await fetch(`${API_URL}/api/project-api?query=featured_projects`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setProjects(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchData();
    },[]);

    if (isLoading) {
        return (
            <div className="flex justify-center py-32 items-center min-h-screen">
                <Loader />
            </div>
        );
    }
  

  return (
    <section className="px-4 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-b from-background/95 to-background/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-[0.07]" />
      <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/5 rounded-full blur-3xl animate-pulse" />

      <div className="container mx-auto relative">
        <div className="flex justify-center items-center flex-col text-center space-y-8 py-16 md:py-20 lg:py-24">
          <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-colors duration-300 backdrop-blur-sm">
            <span className="text-primary font-medium">Featured Work</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-6xl max-w-4xl animate-gradient-x">
            Featured Projects
          </h2>
          <p className="max-w-[900px] text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl/relaxed dark:text-muted-foreground/90">
          {"Explore our recent projects that bring ideas to life through intelligent AI automation and agents, robust full-stack web development, and insightful data analysis."}
          </p>
        </div>
        
        <div className="relative w-full max-w-[1400px] mx-auto pb-16 md:pb-20 lg:pb-24">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {projects.map((project:FeaturedProjects) => (
                <CarouselItem
                  key={project._id}
                  className="pl-2 md:pl-4 basis-full sm:basis-2/3 md:basis-1/2 lg:basis-1/3 xl:basis-1/4"
                >
                  <Card className="group h-full flex flex-col p-4 sm:p-5 
                    hover:shadow-xl transition-all duration-500 hover:-translate-y-2 
                    backdrop-blur-sm bg-background/60 dark:bg-background/20 
                    border border-primary/10 dark:border-primary/5
                    hover:border-primary/20 dark:hover:border-primary/20
                    hover:bg-primary/5 dark:hover:bg-primary/10">
                    <AspectRatio ratio={16 / 9} className="bg-muted relative overflow-hidden rounded-lg">
                      {/* <Image 
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" 
                        src={project.mainImage} 
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                        alt={project.title}
                        priority
                      /> */}
                      <SanityImage 
                        imageAsset={project.mainImage} 
                        alt={project.title}
                        imgClassName="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                        width={500}
                        height={250}
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </AspectRatio>
                    <div className="flex flex-col gap-4 text-center mt-6 flex-grow">
                      <h4 className="text-lg font-semibold sm:text-xl md:text-2xl tracking-tight bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                        {project.title}
                      </h4>
                      <p className="text-sm text-muted-foreground sm:text-base md:text-lg line-clamp-2 dark:text-muted-foreground/90">
                        {project.shortDesc}
                      </p>
                    </div>
                    <Link href={`portfolios/${project?.slug?.current}` || "#"} className="mt-auto pt-6">
                      <Button className="w-full rounded-full font-medium 
                        hover:scale-105 transition-all duration-300 
                        bg-primary/90 hover:bg-primary 
                        hover:shadow-lg hover:shadow-primary/25
                        dark:bg-primary/80 dark:hover:bg-primary
                        group">
                        View Project
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-2 transition-transform duration-300 group-hover:translate-x-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </Button>
                    </Link>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="hidden sm:flex -left-4 lg:-left-12 
              bg-background/80 hover:bg-background 
              border-primary/50 hover:border-primary 
              text-primary hover:text-primary
              dark:bg-background/20 dark:hover:bg-background/40
              transition-all duration-300 hover:scale-110" />
            <CarouselNext className="hidden sm:flex -right-4 lg:-right-12 
              bg-background/80 hover:bg-background 
              border-primary/50 hover:border-primary 
              text-primary hover:text-primary
              dark:bg-background/20 dark:hover:bg-background/40
              transition-all duration-300 hover:scale-110" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

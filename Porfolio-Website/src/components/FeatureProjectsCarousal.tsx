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
import { PortfolioData } from "@/data/data";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";
import Link from "next/link";

let featureProject = [PortfolioData.DataAnalyst[0], PortfolioData.DataAnalyst[1], PortfolioData.DataScience[1], PortfolioData.DataScience[2], PortfolioData.DataScience[3], PortfolioData.DataScience[4], PortfolioData.DataAnalyst[3]];

export function FeatureProjectsCarousal() {

  return (
    <section className="px-4 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-b from-background/95 to-background/50">
      <div className="overflow-hidden my-20 flex justify-center items-center flex-col text-center space-y-6">
        <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-colors">
          <span className="text-primary">Featured Work</span>
        </div>
        <h2 className="text-3xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent sm:text-4xl md:text-5xl lg:text-6xl">
          Featured Projects
        </h2>
        <p className="max-w-[900px] text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl/relaxed">
          Explore my recent projects that transform insights into impact through innovative data analysis, 
          cutting-edge data science solutions, and dynamic web development.
        </p>
      </div>
      
      <div className="max-w-full flex items-center justify-center min-h-72 overflow-hidden">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent className="ml-1 flex gap-5 sm:gap-6 md:gap-8 lg:gap-10">
            {featureProject.map((project) => (
              <CarouselItem
                key={project.title}
                className="basis-full sm:basis-2/3 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex justify-center items-center"
              >
                <Card className="group w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg p-5 h-auto flex flex-col items-center 
                  hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden backdrop-blur-sm bg-background/60">
                  <AspectRatio ratio={16 / 9} className="bg-muted w-full relative overflow-hidden rounded-lg">
                    <Image 
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" 
                      src={project.image} 
                      height={250} 
                      width={500} 
                      alt={project.title}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </AspectRatio>
                  <div className="flex flex-col gap-3 text-center mt-4">
                    <h4 className="text-lg font-semibold sm:text-xl md:text-2xl tracking-tight">{project.title}</h4>
                    <p className="text-sm text-muted-foreground sm:text-base md:text-lg line-clamp-2">{project.desc}</p>
                  </div>
                  <Link href={project.liveDemo || project.githubUrl || "#"}>
                    <Button className="mt-6 rounded-full font-medium hover:scale-105 transition-transform">
                      View Project
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
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

          <CarouselPrevious className="hidden sm:flex -left-4 bg-background/80 hover:bg-background border-primary/50 hover:border-primary text-primary hover:text-primary" />
          <CarouselNext className="hidden sm:flex -right-4 bg-background/80 hover:bg-background border-primary/50 hover:border-primary text-primary hover:text-primary" />
        </Carousel>
      </div>
    </section>
  );
}

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
    <section className="px-4 md:px-8 lg:px-12 xl:px-16">
      <div className="overflow-hidden my-20 flex justify-center items-center flex-col text-center space-y-3">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-6xl">Feature Projects</h2>
        <p className="max-w-[900px] text-gray-700 dark:text-muted-foreground text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl/relaxed">
          Explore my recent projects that transform insights into impact through innovative data analysis, cutting-edge data science solutions, and dynamic web development.
        </p>
      </div>
      
      <div className="max-w-full flex items-center justify-center min-h-72 overflow-hidden">
        <Carousel
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="ml-1 flex gap-5 sm:gap-6 md:gap-8 lg:gap-10">
            {featureProject.map((project) => (
              <CarouselItem
                key={project.title}
                className="basis-full sm:basis-2/3 md:basis-1/2 lg:basis-1/3 xl:basis-1/4 flex justify-center items-center"
              >
                <Card className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg px-5 py-5 h-auto flex flex-col items-center">
                  <AspectRatio ratio={16 / 9} className="bg-muted w-full">
                    <Image className="h-full w-full rounded-md object-cover" src={project.image} height={250} width={500} alt={project.title} />
                  </AspectRatio>
                  <div className="flex flex-col gap-2 text-center">
                    <h4 className="my-3 text-base sm:text-lg md:text-xl">{project.title}</h4>
                    <p className="text-xs sm:text-sm md:text-base">{project.desc}</p>
                  </div>
                  <Button className="mt-4 w-full sm:w-32">Read More</Button>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="bg-gray-200 rounded-full p-2 cursor-pointer hover:bg-gray-300" />
          <CarouselNext className="bg-gray-200 rounded-full p-2 cursor-pointer hover:bg-gray-300" />
        </Carousel>
      </div>
    </section>
  );
}

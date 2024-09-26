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
import { PortfolioData } from "@/app/data";
import Image from "next/image";
import { AspectRatio } from "./ui/aspect-ratio";
import { Button } from "./ui/button";
import Link from "next/link";
let featureProject = [PortfolioData.DataAnalyst[0],PortfolioData.DataAnalyst[1],PortfolioData.DataScience[1],PortfolioData.DataScience[2],PortfolioData.DataScience[3],PortfolioData.DataScience[4],PortfolioData.DataAnalyst[3]]

export function FeatureProjectsCarousal() {

  return (
    <section>
<div className="overflow-hidden my-20 flex justify-center items-center flex-col text-center space-y-3">
  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Feature Projects</h2>
  <p className="max-w-[900px] text-gray-700 dark:text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Explore my recents projects that transforming insights into impact through innovative data analysis, cutting-edge data science solutions, and dynamic web development.</p>
</div>
    <div className="max-w-1/2 flex items-center justify-center min-h-72 overflow-hidden">
      
      <Carousel className="" 
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
      >
        <CarouselContent className="ml-1 flex gap-10">
          {featureProject.map((project) => (
            <CarouselItem
              key={project.title}
              className="pl-1 md:basis-1/2 lg:basis-1/4 flex justify-center items-center"
            >
              <Card className='min-w-60 px-5 py-5 h-auto flex flex-col items-center'>
<AspectRatio ratio={16 / 6} className="bg-muted">
  <Image className='h-full w-full rounded-md object-cover' src={project.image} height={250} width={500} alt={project.title}/>
  </AspectRatio>
  <div className='flex flex-col gap-2'>
    <h4 className='my-3 '>{project.title}</h4>
    <p className=''>{project.desc}</p>
  </div>
  <Button className="max-w-32 mt-5 ">Read More</Button>
  </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        
      <CarouselPrevious className="bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300" />
        <CarouselNext className="bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300" />
      </Carousel>
    </div>
    </section>
  );
}

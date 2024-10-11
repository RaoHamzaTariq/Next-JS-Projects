"use client"

import { RiNextjsFill } from "react-icons/ri";
import { FaReact,FaPython } from "react-icons/fa";
import { SiMysql, SiPowerbi, SiScikitlearn, SiTypescript, SiTailwindcss,  } from "react-icons/si";
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

// Array of icon components
const StackLogo : undefined[] | any = [RiNextjsFill, FaReact,FaPython,SiPowerbi,SiScikitlearn,,SiMysql,SiTailwindcss,SiTypescript];

export function StackCarousal() {

  return (
    <section className="my-32">
<div className="overflow-hidden my-20 flex flex-col text-center justify-center items-center space-y-3  ">
  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl lg:text-7xl">Stacks and Technologies</h2>
  <p className="max-w-[900px] text-gray-700 dark:text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">Leveraging a powerful combination of tools and technologies to drive data-driven solutions and seamless web experiences.</p>
</div>
    <div className="max-w-1/2 flex items-center justify-center min-h-72 overflow-hidden">
      
      <Carousel className="" 
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
      >
        <CarouselContent className="-ml-1 flex gap-10">
          {StackLogo.map((Icons:any, index: React.Key | null | undefined) => (
            <CarouselItem
              key={index}
              className="pl-1 md:basis-1/2 lg:basis-1/4 flex justify-center items-center"
            >
              <div className="p-1 text-8xl text-primary">
                <Icons />
              </div>
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

"use client"

import { RiNextjsFill } from "react-icons/ri";
import { FaReact, FaPython } from "react-icons/fa";
import { SiMysql, SiPowerbi, SiScikitlearn, SiTypescript, SiTailwindcss } from "react-icons/si";
import Autoplay from "embla-carousel-autoplay"
import * as React from "react";
import {
  Carousel, 
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// Array of icon components with labels and colors
const stackItems = [
  { Icon: RiNextjsFill, label: 'Next.js', color: 'hover:text-[#000000] dark:hover:text-white' },
  { Icon: FaReact, label: 'React', color: 'hover:text-[#61DAFB] dark:hover:text-[#61DAFB]' },
  { Icon: FaPython, label: 'Python', color: 'hover:text-[#3776AB] dark:hover:text-[#FFD43B]' },
  { Icon: SiPowerbi, label: 'Power BI', color: 'hover:text-[#F2C811] dark:hover:text-[#F2C811]' },
  { Icon: SiScikitlearn, label: 'Scikit-learn', color: 'hover:text-[#F7931E] dark:hover:text-[#F7931E]' },
  { Icon: SiMysql, label: 'MySQL', color: 'hover:text-[#4479A1] dark:hover:text-[#4479A1]' },
  { Icon: SiTailwindcss, label: 'Tailwind CSS', color: 'hover:text-[#38B2AC] dark:hover:text-[#38B2AC]' },
  { Icon: SiTypescript, label: 'TypeScript', color: 'hover:text-[#3178C6] dark:hover:text-[#3178C6]' }
];

export function StackCarousal() {
  return (
    <section className="relative py-20 overflow-hidden dark:bg-gradient-to-b dark:from-background dark:to-background/90">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/50 to-background dark:from-background dark:via-background/50 dark:to-background/90" />
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern dark:bg-grid-white/[0.05]" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90 dark:from-background/90 dark:via-transparent dark:to-background/90" />

      <div className="relative container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl/none bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent dark:from-primary dark:to-primary/80">
            Stacks and Technologies
          </h2>
          <p className="max-w-[900px] mx-auto text-muted-foreground dark:text-muted-foreground/90 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Leveraging a powerful combination of tools and technologies to drive data-driven solutions and seamless web experiences.
          </p>
        </div>

        {/* Carousel Section */}
        <div className="max-w-5xl mx-auto">
          <Carousel 
            className="w-full py-10 px-4"
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
          >
            <CarouselContent className="-ml-1">
              {stackItems.map(({ Icon, label, color }, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/2 lg:basis-1/4"
                >
                  <div className="p-1 h-full">
                    <div className="flex flex-col items-center justify-center gap-4 p-6 h-full rounded-xl transition-all duration-300 group 
                      hover:bg-primary/5 dark:hover:bg-primary/10
                      hover:shadow-lg hover:shadow-primary/5 dark:hover:shadow-primary/10
                      border border-transparent hover:border-primary/10 dark:hover:border-primary/20">
                      <div className={`text-7xl text-primary/80 transition-all duration-300 
                        group-hover:scale-110 ${color}
                        dark:text-primary/70 dark:group-hover:text-primary`}>
                        <Icon />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground 
                        group-hover:text-primary transition-colors
                        dark:text-muted-foreground/80 dark:group-hover:text-primary">
                        {label}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4 bg-background/80 hover:bg-background border-primary/10 
              hover:border-primary/20 dark:bg-background/40 dark:hover:bg-background/60" />
            <CarouselNext className="right-4 bg-background/80 hover:bg-background border-primary/10 
              hover:border-primary/20 dark:bg-background/40 dark:hover:bg-background/60" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

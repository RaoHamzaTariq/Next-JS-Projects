"use client"

import { RiNextjsFill } from "react-icons/ri";
import { FaReact, FaPython } from "react-icons/fa";
import { SiMysql, SiPowerbi, SiScikitlearn, SiTypescript, SiTailwindcss,SiLangchain  } from "react-icons/si";
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
  { Icon: SiTypescript, label: 'TypeScript', color: 'hover:text-[#3178C6] dark:hover:text-[#3178C6]' },
  { Icon: SiLangchain, label: 'LangChain', color: 'hover:text-[#00A67D] dark:hover:text-[#00A67D]' },
];

export function StackCarousal() {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Glassmorphic Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,var(--primary)_0%,transparent_60%)] opacity-20 animate-spin-slow" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--primary)_0%,transparent_50%)] opacity-10 animate-pulse" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.08] mix-blend-overlay" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-morph" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-morph animation-delay-2000" />
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Animated Header */}
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 lg:space-y-10 mb-12 sm:mb-16 lg:mb-24">
          <div 
            className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-primary/5 backdrop-blur-xl
            hover:bg-primary/10 transition-all duration-700 animate-float border border-primary/10 hover:border-primary/20"
          >
            <span className="text-primary text-sm sm:text-base font-medium tracking-wide">My Tech Arsenal</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight 
            bg-gradient-to-br from-primary via-primary/90 to-primary/70 
            bg-clip-text text-transparent animate-gradient-xy"
          >
            Technologies I Leverage
          </h2>
          
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground/90 dark:text-muted-foreground/80 
            max-w-2xl mx-auto animate-fade-in-up leading-relaxed px-4"
          >
            Building next-generation digital experiences with modern tools and frameworks
          </p>
        </div>

        {/* Enhanced 3D Carousel */}
        <div className="max-w-7xl mx-auto perspective-1000">
          <Carousel
            className="w-full transform-style-3d"
            plugins={[
              Autoplay({
                delay: 2500,
              }),
            ]}
          >
            <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4">
              {stackItems.map(({ Icon, label, color }, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 sm:pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
                >
                  <div 
                    className="group relative p-4 sm:p-6 lg:p-8 h-full rounded-2xl sm:rounded-3xl 
                    backdrop-blur-2xl bg-background/30 dark:bg-background/10
                    border border-primary/5 dark:border-primary/10
                    hover:border-primary/20 dark:hover:border-primary/30
                    transition-all duration-700 hover:scale-[1.02]
                    hover:shadow-2xl hover:shadow-primary/10
                    animate-float-slow animation-delay-{index}00"
                  >
                    {/* Enhanced glow effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 
                      opacity-0 group-hover:opacity-100 rounded-2xl sm:rounded-3xl transition-opacity duration-700" />
                    
                    <div className="relative flex flex-col items-center gap-4 sm:gap-6 lg:gap-8">
                      <div className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl transform transition-all duration-700
                        ${color} group-hover:scale-110 group-hover:rotate-[360deg]
                        group-hover:drop-shadow-[0_0_12px_var(--primary)]
                        cursor-pointer hover:animate-bounce`}>
                        <Icon />
                      </div>
                      
                      <span className="text-sm sm:text-base lg:text-lg font-medium
                        bg-gradient-to-br from-primary to-primary/80
                        opacity-0 group-hover:opacity-100  
                        bg-clip-text text-transparent
                        transform translate-y-4 group-hover:translate-y-0
                        transition-all duration-700">
                        {label}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious 
              className="hidden sm:flex left-2 sm:left-4 lg:left-6 bg-background/40 backdrop-blur-xl border-primary/10
              hover:bg-primary/10 hover:border-primary/30 
              transition-all duration-500 hover:scale-110" 
            />
            <CarouselNext 
              className="hidden sm:flex right-2 sm:right-4 lg:right-6 bg-background/40 backdrop-blur-xl border-primary/10
              hover:bg-primary/10 hover:border-primary/30
              transition-all duration-500 hover:scale-110" 
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

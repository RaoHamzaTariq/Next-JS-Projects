"use client"

import Autoplay from "embla-carousel-autoplay"
import * as React from "react";
import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
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
        const response = await fetch(
          `${API_URL}/api/project-api?query=featured_projects`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setProjects(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-background/90 to-background/70 px-4">
        <Loader />
      </div>
    );
  }

  return (
    <section className="relative overflow-x-clip bg-gradient-to-b from-background/95 to-background/70 py-20 px-2 md:px-10">
      {/* Modern Animated Blurred Background Elements */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-10 w-[400px] h-[400px] rounded-full bg-primary/15 dark:bg-primary/10 blur-[110px] animate-pulse" />
        <div className="absolute -bottom-44 right-0 w-[500px] h-[400px] rounded-full bg-primary/15 blur-[110px] animate-pulse animation-delay-400" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-5" />
      </div>

      <div className="container relative z-10 mx-auto max-w-7xl">
        {/* Modern Header */}
        <div className="flex flex-col items-center text-center space-y-7 mb-14">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/20 dark:bg-primary/10 shadow-sm ring-1 ring-primary/10 hover:bg-primary/30 transition">
            <span className="text-primary font-semibold tracking-widest uppercase text-xs sm:text-sm">
              ✨ Featured Work
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight animate-gradient-x bg-gradient-to-br from-primary/80 via-primary/90 to-primary/60 bg-clip-text text-transparent">
            Projects That Inspire
          </h2>
          <p className="max-w-2xl text-muted-foreground text-base md:text-lg font-normal dark:text-muted-foreground/80">
            Level up your vision with my latest projects—AI agents, elegant full-stack web, and insightful data analytics. Modern innovation meets stunning design, all in one place.
          </p>
        </div>

        <div className="relative w-full max-w-full mx-auto pb-6">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2500,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
              }),
            ]}
            className="w-full"
          >
            <CarouselContent className="-ml-3 md:-ml-6 [&>*]:transition-all">
              {Array.isArray(projects) &&
                projects.map((project: FeaturedProjects, idx) => (
                  <CarouselItem
                    key={project._id}
                    className="
                      group
                      pl-3 md:pl-6
                      basis-full
                      sm:basis-2/3
                      md:basis-1/2
                      lg:basis-1/3
                      xl:basis-1/4
                      transition-transform
                      duration-500
                      hover:scale-[1.035]
                      hover:z-10
                    "
                  >
                    {/* Project Card */}
                    <Card
                      className="
                        h-full flex flex-col overflow-hidden bg-background/70 dark:bg-background/20
                        border border-primary/10 dark:border-primary/5
                        shadow-[0_2px_32px_0_rgba(60,66,87,0.08)]
                        rounded-3xl
                        hover:shadow-2xl hover:shadow-primary/10 hover:border-primary/30
                        hover:bg-primary/10 dark:hover:bg-primary/10
                        transition-all duration-500
                        relative
                        backdrop-blur-xl
                        z-10
                      "
                    >
                      <div className="relative">
                        <AspectRatio
                          ratio={16 / 9}
                          className="bg-gradient-to-r from-muted/40 to-muted/60 relative overflow-hidden rounded-2xl border border-primary/10"
                        >
                          <SanityImage
                            imageAsset={project.mainImage}
                            alt={project.title}
                            imgClassName="h-full w-full object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
                            width={600}
                            height={338}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          />
                          {/* Dynamic gradient overlay on hover */}
                          <div className="absolute inset-0 pointer-events-none z-10 opacity-0 group-hover:opacity-100 group-hover:bg-gradient-to-t group-hover:from-black/70 group-hover:via-black/20 group-hover:to-transparent transition duration-400 rounded-2xl" />
                          {/* Animated border glow on hover */}
                          <div className="absolute inset-0 rounded-2xl pointer-events-none ring-0 group-hover:ring-4 ring-primary/15 transition duration-700" />
                        </AspectRatio>
                        {/* Artistic corner badge */}
                        <div className="absolute top-4 right-4 bg-primary/90 px-3 py-1 rounded-xl text-xs font-bold text-white/90 shadow-lg shadow-primary/10 uppercase tracking-widest opacity-80">
                          NEW
                        </div>
                      </div>
                      <div className="flex flex-col gap-4  text-center mt-7 px-3 flex-grow">
                        <h4 className="text-xl sm:text-2xl md:text-2.5xl font-bold tracking-tight bg-gradient-to-br from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent mb-2">
                          {project.title}
                        </h4>
                        <p className="text-muted-foreground/90 text-base sm:text-lg line-clamp-2 mx-auto px-2 dark:text-muted-foreground/80">
                          {project.shortDesc}
                        </p>
                      </div>
                      <div className="flex-1 flex items-end px-3 pt-0">
                        <Link
                          href={
                            project?.slug?.current
                              ? `/portfolios/${project?.slug?.current}`
                              : "#"
                          }
                          className="w-full"
                        >
                          <Button
                            className="
                            w-full rounded-full font-semibold tracking-tight text-base gap-2
                            bg-gradient-to-br from-primary via-primary/90 to-primary/70 text-white/90
                            hover:bg-gradient-to-tl hover:from-primary/80 hover:to-primary/90
                            hover:shadow-2xl hover:shadow-primary/20
                            transition-all duration-300 py-3 mt-6
                            flex items-center justify-center
                            group"
                            size="lg"
                          >
                            <span className="drop-shadow">View Project</span>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 ml-2 transition-transform duration-300 group-hover:translate-x-1"
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
                      </div>
                    </Card>
                  </CarouselItem>
                ))}
            </CarouselContent>
            {/* Modern Navigation Buttons */}
            <CarouselPrevious
              className="hidden sm:flex -left-5 md:-left-10 top-1/2 -translate-y-1/2
                  bg-background/90 hover:bg-primary/20
                  border-primary/20 hover:border-primary/40
                  text-primary hover:text-primary-foreground shadow-lg
                  ring-2 ring-primary/10
                  dark:bg-background/30 dark:hover:bg-background/60
                  transition-all duration-300 hover:scale-110
                  rounded-full p-2"
            />
            <CarouselNext
              className="hidden sm:flex -right-5 md:-right-10 top-1/2 -translate-y-1/2
                bg-background/90 hover:bg-primary/20
                border-primary/20 hover:border-primary/40
                text-primary hover:text-primary-foreground shadow-lg
                ring-2 ring-primary/10
                dark:bg-background/30 dark:hover:bg-background/60
                transition-all duration-300 hover:scale-110
                rounded-full p-2"
            />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

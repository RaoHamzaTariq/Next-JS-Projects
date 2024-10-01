'use client';
import { useEffect, useState } from "react";
import { AuroraBackground } from "@/components/ui/aurora-background";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Faqs from "@/components/Faqs";
import React from "react";


type Product = {
  rating: number;
  thumbnail:string;
  id: number;
  title: string;
  description: string;
  images: string[];
  price: number;
  category:string;
  brand:string
};

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductData = async () => {
      try {
        const apiResponse = await fetch("https://dummyjson.com/products");
        if (!apiResponse.ok) {
          throw new Error("Network response was not ok.");
        }
        const data = await apiResponse.json();
        setProducts(data.products || []);
      } catch (error) {
        setError("Failed to fetch products.");
        console.error(error);
      }
    };

    fetchProductData();
  }, []);

  
  

  return (
    <>
      <main className="z-100 ">
        <AuroraBackground>
          <motion.div
            initial={{ opacity: 0.0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className=" w-screen"
          >
            <section className="flex justify-center items-center h-screen">
              <div className="gap-10 flex flex-col">
                <div className="flex flex-wrap justify-center">
                  <h1 className="text-3xl text-center md:text-5xl lg:text-6xl dark:bg-gradient-to-b dark:from-white dark:to-blue-300">
                    Sustainable Shopping for a Greener Future.
                  </h1>
                  <div className="w-3/4 mt-5">
                    <p className="text-center dark:text-white/80">
                      Your one-stop shop for the latest products, exclusive
                      deals, and seamless online shopping.
                    </p>
                  </div>
                </div>
                <div className="flex justify-center items-center gap-10">
                  <Button
                    variant={"outline"}
                    className="w-32 h-10 text-black dark:text-white"
                  >
                    Sign Up
                  </Button>
                  <Button className="w-32 h-10 text-white">Explore Products</Button>
                </div>
              </div>
            </section>
          </motion.div>
        </AuroraBackground>
        <section>
          <div className="mx-20 my-10 flex flex-col items-center">
            <div className="flex flex-col items-center py-10">
              <h1 className="">Featured Products</h1>
              {error && <p className="text-red-500">{error}</p>}
              <p className="dark:text-white/80 ">
                Explore the feature products and purchase it in reasonable
                price.
              </p>
            </div>
            <div className="w-screen mt-10 ">
              <Carousel
                opts={{
                  align: "start",
                }}
                plugins={[
                  Autoplay({
                    delay: 2000,
                  }),
                ]}
                className="w-[85%] relative ml-24"
              >
                <CarouselContent>
                  {products
                    .filter((e:Product) => e.rating > 4)
                    .map((product) => (
                      <CarouselItem key={product.id} className="sm:basis-1 md:basis-1/2 lg:basis-1/3">
                        <Card className="w-full sm:w-72 md:w-80 lg:w-96  max-h-fit">
                          <CardHeader className="pt-0">
                            <CardTitle className="text-base md:text-lg lg:text-xl">
                              {product.title}
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="pb-4 -mt-4">
                              <p>
                                {product.category.charAt(0).toUpperCase() +
                                  product.category.slice(1).toLowerCase()}
                              </p>
                            </div>
                            <div className="w-full h-64 sm:h-48 md:h-56 lg:h-64">
                              <img
                                src={product.thumbnail}
                                alt={product.title}
                                className="rounded-md object-fill w-full h-full "
                              />
                            </div>
                            <div className="flex justify-between items-center mt-4">
                              <p className="text-sm md:text-base lg:text-lg">
                                Rating: {product.rating}
                              </p>
                              <p className="text-sm md:text-base lg:text-lg font-semibold">
                                ${product.price}
                              </p>
                            </div>
                          </CardContent>
                        </Card>
                      </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
              </Carousel>
            </div>
          </div>
        </section>
        <section>
          <Card className="container flex px-5 py-7 mx-10 my-5 w-screen justify-center items-center bg-blue-100 dark:border-none dark:bg-blue-950">
            <div className="flex flex-col">
              <h2 className="border-none">
                Let's explore some amazing products
              </h2>
              <p className="w-10/12 dark:text-white/80">
                Meet your needs by purchasing our products. We're here to assist
                you with exceptional customer service and a seamless shopping
                experience.
              </p>
            </div>
            <div className="">
              <Link href={"/products/all"}>
                {" "}
                <Button className="text-white">Explore Products </Button>{" "}
              </Link>
            </div>
          </Card>
        </section>
        <section>
          <Faqs />
        </section>
      
      </main>
      
    </>
  );
}

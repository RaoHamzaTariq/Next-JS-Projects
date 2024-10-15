'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Faqs from "@/components/Faqs";
import React from "react";
import Sunglasses from "../../public/HandPickedItem/Sunglasses.png"
import Handbags from "../../public/HandPickedItem/Handbags.png"
import Wristwactches from "../../public/HandPickedItem/Wristwatches.png"
import Perfumes from "../../public/HandPickedItem/Perfumes.png"
import { useSession, signIn} from "next-auth/react";

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
  const { data: session } = useSession();
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
  <main className="z-100">
    <section className="relative flex justify-center items-center h-screen overflow-hidden">
  <video
    autoPlay
    loop
    muted
    className="absolute top-20 left-0 w-full h-full object-cover z-0"
  >
    <source src="/Videos/Home.mp4" type="video/mp4" />
    Your browser does not support the video tag.
  </video>
  <div className="absolute top-20 left-0 w-full h-full bg-black opacity-60"></div>

  <div className="relative  gap-10 flex flex-col items-center">
    <h1 className="text-3xl text-center text-white md:text-5xl lg:text-6xl dark:bg-gradient-to-b dark:from-white dark:to-blue-300">
      Sustainable Shopping for a Greener Future.
    </h1>
    <div className="w-3/4 mt-5">
      <p className="text-center text-white dark:text-white/80">
        Your one-stop shop for the latest products, exclusive deals, and seamless online shopping.
      </p>
    </div>
    <div>
      {
        session ? (
          <Button className="w-32 h-10 text-white">Explore Products</Button>
        ) : (
          <div className="flex justify-center items-center gap-5 flex-wrap">
            <Button className="w-32 h-10 text-black dark:text-white" variant={"outline"} onClick={() => signIn()}>Sign Up</Button>
            <Button className="w-32 h-10 text-white">Explore Products</Button>
          </div>
        )
      }
    </div>
  </div>
</section>
      

    <section>
      <div className="mx-4 my-10 flex flex-col items-center">
        <div className="flex flex-col items-center py-10">
          <h1>Featured Products</h1>
          {error && <p className="text-red-500">{error}</p>}
          <p className="dark:text-white/80 text-center">
            Explore the featured products and purchase them at reasonable prices.
          </p>
        </div>
        <div className="w-full mt-10 flex justify-center">
          <Carousel
            opts={{
              align: "start",
            }}
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            className="relative w-[90%] md:w-[85%]"
          >
            <CarouselContent>
              {products.filter((e) => e.rating > 4).map((product) => (
                <CarouselItem key={product.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4 p-2">
                  <Card className="w-full max-w-xs mx-auto">
                    <CardHeader className="pt-0">
                      <CardTitle className="text-base md:text-lg lg:text-xl">
                        {product.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="pb-4 -mt-4">
                        <p>{product.category.charAt(0).toUpperCase() + product.category.slice(1).toLowerCase()}</p>
                      </div>
                      <div className="w-full h-64 sm:h-48 md:h-56 lg:h-64">
                        <Image
                          src={product.thumbnail}
                          alt={product.title}
                          width={500}
                          height={500}
                          className="rounded-md object-cover w-full h-full" 
                        />
                      </div>
                      <div className="flex justify-between items-center mt-4">
                        <p className="text-sm md:text-base lg:text-lg">Rating: {product.rating}</p>
                        <p className="text-sm md:text-base lg:text-lg font-semibold">${product.price}</p>
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
      <Card className="container flex flex-col sm:flex-row px-5 py-7 mx-auto my-5 w-full justify-center items-center bg-blue-100 dark:border-none dark:bg-blue-950">
        <div className="flex flex-col text-center sm:text-left"> 
          <h2>{`Let's explore some amazing products`}</h2>
          <p className="w-full md:w-10/12 dark:text-white/80">
            {`Meet your needs by purchasing our products. We're here to assist you with exceptional customer service and a seamless shopping experience.`}
          </p>
        </div>
        <Link href={"/products/all"}>
          <Button className="text-white">Explore Products</Button> 
        </Link>
      </Card>
    </section>

    <section className="bg-[#1B4B66] dark:bg-blue-950 p-5 sm:p-10 flex flex-col gap-10 mt-10">
      <div>
        <h1 className="text-center text-white">Handpicked Collections</h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:gap-8 md:gap-10">
      <Link href={"/products/womens-bags"}>
      <div className="relative rounded-xl ">
        <Image src={Handbags} alt="" width={500} height={500} className="rounded-xl"/>
        <h1 className="absolute text-black bottom-3 left-5 text-3xl text-bold">Handbags</h1>
      </div>
      </Link>
      <Link href={"/products/sunglasses"}>
      <div className="relative rounded-xl ">
        <Image src={Sunglasses} alt="" width={500} height={500} className="rounded-xl"/>
        <h1 className="absolute text-black bottom-3 left-5 text-3xl text-bold">Sun Glasses</h1>
      </div>
      </Link>
      <Link href={"/products/fragrances"}>
      <div className="relative rounded-xl ">
        <Image src={Perfumes} alt="" width={500} height={500} className="rounded-xl"/>
        <h1 className="absolute text-black bottom-3 left-5 text-3xl text-bold">Perfumes</h1>
      </div>
      </Link>
      <Link href={"/products/mens-watches"}>
      <div className="relative rounded-xl ">
        <Image src={Wristwactches} alt="" width={500} height={500} className="rounded-xl"/>
        <h1 className="absolute text-black bottom-3 left-5 text-3xl text-bold">Wrist Watches</h1>
      </div>
      </Link>
      </div>
    </section>

    <section><Faqs /></section>

  </main>
</>
  );
}

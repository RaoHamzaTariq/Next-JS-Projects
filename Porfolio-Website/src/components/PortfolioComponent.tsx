import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { urlFor } from '@/sanity/lib/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { PortfolioData } from '@/data/interface';

import { Card } from './ui/card';
import { AspectRatio } from './ui/aspect-ratio';
import { SanityImageAsset } from '@/sanity/lib/client';
import SanityImage from './SanityImage';


const PortfolioComponent = (props: { mainImage: SanityImageAsset; title: string;shortDesc:string; slug: string; }) => {

    
    return (
        <Card className="group min-w-96 p-5 h-auto hover:shadow-xl transition-all duration-300 hover:-translate-y-1 backdrop-blur-sm bg-background/60">
            <AspectRatio ratio={16 / 9} className="bg-muted relative overflow-hidden rounded-lg">
            {/* <Image
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
              // src={props.mainImage && (props.mainImage as any).asset ? urlFor(props.mainImage).url() : "/default-image.png"}
 // Ensure URL is always a string
              src={props.mainImage ? urlFor(props.mainImage).url() : " "} // Ensure URL is always a string
              alt={`${props.title} Image`}
              height={250}
              width={500}
            /> */}
             <SanityImage 
            imageAsset={props.mainImage} 
            alt={props.title}
            imgClassName="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            width={500}
            height={250}
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </AspectRatio>
            <div className="flex flex-col gap-3 mt-4">
                <h4 className="text-xl font-semibold tracking-tight">{props.title}</h4>
                <p className="text-muted-foreground line-clamp-2">{props.shortDesc}</p>
            </div>
            <div className="mt-6 flex justify-center w-full">
                <Link href={`/portfolios/${props.slug}`}>
                    <Button className="rounded-full font-medium hover:scale-105 transition-transform">
                        Read More
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
            </div>
        </Card>
    );
};

export default PortfolioComponent;
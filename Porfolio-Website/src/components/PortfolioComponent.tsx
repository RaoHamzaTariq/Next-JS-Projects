import { PortfolioData, PortfolioKeys } from '@/data/data';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { AspectRatio } from './ui/aspect-ratio';

const PortfolioComponent = (props: { title: string; image: string | StaticImageData; desc: string }) => {
  
  const findCategoryByTitle = (title: string): PortfolioKeys | undefined => {
    for (const category in PortfolioData) {
      const hasTitle = PortfolioData[category as PortfolioKeys].some((project) => project.title === title);
      if (hasTitle) {
        return category as PortfolioKeys; // Ensure category is cast to PortfolioKeys
      }
    }
    return undefined; 
  };
  
  const categoryName = findCategoryByTitle(props.title);
  
  return (
    <Card className='min-w-96 px-5 py-5 h-auto'>
      <AspectRatio ratio={16 / 9} className="bg-muted">
        <Image className='h-full w-full rounded-md object-cover' src={props.image} height={250} width={500} alt={props.title}/>
      </AspectRatio>
      <div className='flex flex-col gap-2'>
        <h4 className='mt-3'>{props.title}</h4>
        <p>{props.desc}</p>
      </div>
      <div className='mt-5 inline-flex justify-center w-full'>
        <Link href={`/Portfolio/${categoryName}/ProjectDetail/${(props.title as string).replace(/\s+/g,"")}`}>
          <Button>Read More</Button>
        </Link>
      </div>
    </Card>
  );
};

export default PortfolioComponent;
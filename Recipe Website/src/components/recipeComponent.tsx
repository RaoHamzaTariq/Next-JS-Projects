import React from 'react'
import Link from 'next/link'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from './ui/button'



const RecipeComponent = (props: any) => {
  return (
    <div className=''>
      <Card className='hover:scale-[1.1] transition-all'>
        <CardContent className='rounded-md overflow-hidden shadow-md cursor-pointer  p-5'>
        <div className='w-full aspect-w-16 aspect-h-8 lg:h-80'> <img src={props.image} alt={props.name} className='w-full aspect-w-16 aspect-h-8 lg:h-80' /></div>
        <div className='flex flex-col justify-center gap-5'>
          <h3 className='flex justify-center mt-5'>{props.name}</h3>
          <div className='flex justify-between mx-2'>
            <p>Rating: {props.rating}</p>
            <p>{props.cuisine}</p>
          </div>
          <div className='flex justify-center'>
           <Link href={`/recipe-list/${props.id}`}><Button>Read More</Button></Link>
         </div>
        </div>
        </CardContent>
        
      </Card>
    </div>

  )
}

export default RecipeComponent
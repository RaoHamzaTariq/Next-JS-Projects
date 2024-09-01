"use client";

import { Button } from '@/components/ui/button';
import { ModeToggle } from '@/components/ui/modeToggle';
import Link from 'next/link';
import React from 'react'

const RecipeDetails = async ({params}:{params:{"recipe-details":number}}) => {

const fetchRecipeDetails = async (recipeId:number) => {
  const apiResponse = await fetch(`https://dummyjson.com/recipes/${recipeId}`)
  const data = await apiResponse.json()
  return data
}

const RecipesDetailData = await fetchRecipeDetails(params["recipe-details"])

  return (
    <div className=''>
      <div className='flex gap-10 mt-10 ml-5'>
      <Link className='' href={"/recipe-list"}><Button variant={"link"}>Go to recipe list</Button></Link>
      <ModeToggle/>
      </div>
      
      <div className=''>
        <div className='p-6 mx-auto lg:max-w-7xl md:max-w-4xl sm:max-w-full grid grid-cols-1 lg:grid-cols-2'>
        <div>
          <img className='w-4/5 sm:3/5 rounded-md' src={RecipesDetailData.image} alt={RecipesDetailData.name} />
        </div>
        <div className='flex flex-col gap-5'>
          <div className='mb-3'>
            <h1>{RecipesDetailData.name}</h1>
          </div>
          <div className='flex gap-5'>
            <h4><span className='text-lg font-normal'>Cuisine:  </span> {RecipesDetailData.cuisine}</h4>
            <h4><span className='text-lg font-normal'>Meal Type:</span>   {RecipesDetailData.mealType}</h4>
          </div>
          <div>
            <h3 className='font-bold'>Ingredients</h3>
            <ul className='mt-3 flex flex-col gap-3 list-disc list-inside'>
              {RecipesDetailData.ingredients.map((ingredient:string, index:number) => (
                <li key={index}>{ingredient}</li>
                ))}
            </ul>
          </div>
        </div>
        <div>
          <h3 className='font-bold mt-5'>Instructions</h3>
          <ul className='mt-3 flex flex-col gap-3 list-decimal list-inside'>
              {RecipesDetailData.instructions.map((instructions:string, index:number) => (
                <li key={index}>{instructions}</li>
                ))}
            </ul>
        </div>
        </div>
        
    </div>
    </div>
  )
}

export default RecipeDetails

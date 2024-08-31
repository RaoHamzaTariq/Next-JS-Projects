import { Button } from '@/components/ui/button'
import RecipeComponent from '@/components/recipeComponent'
import Link from 'next/link'
import React from 'react'
import { ModeToggle } from '@/components/ui/modeToggle'
import { DropdownMenu } from '@radix-ui/react-dropdown-menu'
import { DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
const RecipeList = async () => {

const fetchRecipesData = async () => {
    try {
        const apiResponse = await fetch('https://dummyjson.com/recipes')
        const data = await apiResponse.json()
        return data
        
    } catch (error) {
        console.log(error)
    }
}

const recipesData = await fetchRecipesData()
// console.log(recipesData);

  return (
    <>
    <div className='p-4 mx-auto lg:max-w-7xl md:max-w-4xl sm:max-w-full'>
        <div className='flex justify-center my-5'>
            <h1 className='border-none'>Recipe List</h1>
        </div>
        <div className='flex justify-between items-center'>
        <div className='flex mb-10 gap-10'>
        <Link  href={"/"}><Button variant={"link"}>Go Home</Button></Link>
        <ModeToggle/>
        </div>
        <div>

        </div>
        </div>
        </div>
        
        <div className='mx-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
            {recipesData && recipesData.recipes.length > 0 
            ? recipesData.recipes.map((e:any)=>(
                    <RecipeComponent key={e.id} name={e.name} image={e.image} rating={e.rating} cuisine={e.cuisine} id={e.id} />
))
: <p>The data is not found</p>
}
        </div>
    
    </>
  )
}

export default RecipeList

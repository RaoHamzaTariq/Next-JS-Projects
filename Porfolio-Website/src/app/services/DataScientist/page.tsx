"use client";
import { Button } from '@/components/ui/button'
import React from 'react'
import { MdElectricBolt } from "react-icons/md";
import { GoGoal } from "react-icons/go";
import RetroGrid from '@/components/ui/retro-grid';
import { useRouter } from 'next/navigation';



const DataScienceServices = () => {
  const router = useRouter()
  return (
    <main className='py-20 md:py-40'>
  <section className='w-screen flex flex-col items-center justify-center gap-3 '>
    <p className='text-center text-xl md:text-2xl'>Dive into Innovation with BI Structure</p>
    <h1 className='max-w-4xl text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-semibold leading-tight'>
      Empowering Your Business With Data-Driven Solutions
    </h1>
    <div className='flex flex-col md:flex-row gap-4 md:gap-8 mt-5'>
      <Button className='rounded-full p-4 md:p-6 md:pl-2 text-lg md:text-xl'>
        <span className='bg-white p-1 text-xl md:text-2xl text-black rounded-full mr-3'>
          <MdElectricBolt />
        </span> 
        Check Services
      </Button>
      <Button onClick={()=>{router.push("/Portfolio/DataScience")}} className='rounded-full p-4 md:p-6 md:pl-2 text-lg md:text-xl' variant={"secondary"}>
        <span className='bg-white p-1 text-xl md:text-3xl text-black rounded-full mr-3'>
          <GoGoal />
        </span>  
        View Portfolio
      </Button>
    </div>
    <RetroGrid />
  </section>
</main>
  )
}

export default DataScienceServices
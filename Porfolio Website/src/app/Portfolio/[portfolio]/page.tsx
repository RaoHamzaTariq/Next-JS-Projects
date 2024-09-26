"use client"; // Add this line at the very top

type ProjectType = {
  [x: string]: any;
  id: number;
  title: string;
  desc: string;
};

import React from 'react';
import { PortfolioData } from '../../data';
import PortfolioComponent from '@/components/PortfolioComponent';
import { useParams } from 'next/navigation';
import Navbar from '@/components/Navbar';

const Slug = () => {
  const params = useParams();
  const id = params.portfolio as string;

  const getProject = () => {
  if(id == 'All'){
    return Object.values(PortfolioData).flat();
  }else {
    return PortfolioData[id]
  }
}

const projects = getProject()

  // If the project data does not exist, handle it gracefully
  if (!projects) {
    return (
      <div>
    
        <div className='flex w-screen justify-center text-3xl mt-32'>
          Project not found
        </div>
      </div>
    );
  }

  return (
    <>
      <div className='overflow-x-hidden flex flex-col gap-7'>
        <h1 className='w-screen flex justify-center mt-24 scroll-m-20 text-3xl font-bold tracking-tighter sm:text-5xl'>Our Portfolio</h1>
        <div className='mb-14 container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8'>
          {projects.map((project) => (
            <PortfolioComponent key={project.title} image={project.image} title={project.title} desc={project.desc} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Slug;

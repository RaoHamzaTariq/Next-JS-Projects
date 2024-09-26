'use client';

import { PortfolioData, PortfolioKeys } from '../../data';
import PortfolioComponent from '@/components/PortfolioComponent';
import { useParams } from 'next/navigation';

const Slug = () => {
  const params = useParams();
  const id = params.portfolio as PortfolioKeys | "All";

  const getProject = () => {
    if (id === 'All') {
      return Object.values(PortfolioData).flat();
    } else {
      return PortfolioData[id];
    }
  };

  const projects = getProject();

  if (!projects || projects.length === 0) {
    return (
      <div className='flex w-screen justify-center text-3xl mt-32'>
        Project not found
      </div>
    );
  }

  return (
    <>
      <div className='overflow-x-hidden flex flex-col gap-7'>
        <h1 className='w-screen flex justify-center mt-28 scroll-m-20 text-3xl font-bold tracking-tighter sm:text-5xl'>Our Portfolio</h1>
        <div className='my-14 container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8'>
          {projects.map((project) => (
            <PortfolioComponent key={project.id} image={project.image} title={project.title} desc={project.desc} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Slug;
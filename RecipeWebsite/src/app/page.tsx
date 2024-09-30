import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const Home = () => {
  return (
    <>
      <div
        className="flex w-screen h-screen items-center justify-center flex-col gap-5 bg-cover bg-center relative"
        style={{ backgroundImage: "url('/Home bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="relative z-10 flex flex-col justify-center items-center gap-5" >
          <h1 className='text-white text-center'>Welcome to Recipe App</h1>
          <Link href="/recipe-list">
            <Button variant="secondary">Explore Recipes</Button>
          </Link>
        </div>
        <div className=' relative z-11'>
          <h4 className='text-gray-200 mt-4 text-lg'>Developed by <span className='text-xl animate-pulse text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500'>Rao Hamza Tariq</span></h4>
        </div>
      </div>
    </>
  );
};

export default Home;

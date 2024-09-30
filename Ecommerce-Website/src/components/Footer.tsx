import Link from 'next/link';
import React from 'react'
import { FaLinkedinIn,FaXTwitter,FaGoogle ,FaInstagram ,FaYoutube,FaGithub }from "react-icons/fa6";
import { Input } from './ui/input';
import { Button } from './ui/button';
import { ProductCategory } from '@/app/data';


const Footer = async () => {

  async function FetchProductCategories(): Promise<ProductCategory[]> {
    try {
        const apiResponse = await fetch('https://dummyjson.com/products/categories');
        if (!apiResponse.ok) {
            throw new Error('Network response was not ok');
        }
        const data: ProductCategory[] = await apiResponse.json();
        return data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}

const productCategories: ProductCategory[] = await FetchProductCategories();

  return (
    <div>
      <section className='border-t-2 bg-blue-100 dark:bg-blue-950'>
        <div className='w-screen container px-10 md:px-0 md:mx-auto flex flex-col lg:flex-row justify-between py-10 '>
          <div className='flex flex-col gap-4'>
            <h2 className='border-none'>LOGO</h2>
            <h4 className='text-gray-700 dark:text-white/80'>The Best Product Anytime, Anywhere</h4>
            <div className='flex gap-3'>
            <Input  type='text' placeholder='Search' />
            <Button>Subscribe</Button>
            </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-3 sm:gap-5 lg:gap-16 mx-auto md:mx-0 justify-center items-center'>
            <div className='flex flex-col'>
              <h3 className='text-lg pb-2 '>Shop By Category</h3>
                <Link className='dark:text-white/80 text-gray-700 no-underline' href={`/products/all`}>All</Link>
                {productCategories.slice(10,13).map((category:ProductCategory)=>(
                  <Link key={category.name} className='dark:text-white/80 text-gray-700 no-underline' href={`/products/${category.slug}`}>{category.name}</Link>
                ))}
            </div>
            <div className='flex flex-col'>
              <h3  className='text-lg pb-2'>About</h3>
              <Link href={''} className='dark:text-white/80 text-gray-700 no-underline'>Contact Us</Link>
              <Link href={''} className='dark:text-white/80 text-gray-700 no-underline'>About Us</Link>
              <Link href={''} className='dark:text-white/80 text-gray-700 no-underline'>Career</Link>
              <Link href={''} className='dark:text-white/80 text-gray-700 no-underline'>Press</Link>
            </div>
            <div className='flex flex-col'>
              <h3 className='text-lg pb-2'>Policy</h3>
              <Link href={''} className='dark:text-white/80 text-gray-700 no-underline'>Terms of Use</Link>
              <Link href={''} className='dark:text-white/80 text-gray-700 no-underline'>Privacy Policy</Link>
              <Link href={''} className='dark:text-white/80 text-gray-700 no-underline'>Return Policy</Link>
              <Link href={''} className='dark:text-white/80 text-gray-700 no-underline'>Security</Link>
            </div>
          </div>
        </div>
      </section>
      <section className="p-1  border-t-2 ">
        <div className="justify-between items-center container flex flex-col md:flex-row  px-10 md:px-0 md:mx-auto">
          <div className=''>
            <p className="text-center dark:text-white/80">
              Copyright © 2024 BI Structure. Powered by Rao Hamza Tariq.
            </p>
          </div>
          <div>
            <ul className="list-none flex gap-3 lg:gap-5 ">
              <Link href={""}>
                <li>
                  <FaGoogle />
                </li>
              </Link>
              <Link href={""}>
                <li>
                  <FaGithub />
                </li>
              </Link>
              <Link href={""}>
                <li>
                  <FaLinkedinIn />
                </li>
              </Link>
              <Link href={""}>
                <li>
                  <FaYoutube />
                </li>
              </Link>
              <Link href={""}>
                <li>
                  <FaXTwitter />
                </li>
              </Link>
              <Link href={""}>
                <li>
                  <FaInstagram />
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer
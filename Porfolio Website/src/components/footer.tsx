import React from 'react';
import { components } from './Navbar';
import Link from 'next/link';
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { Input } from './ui/input';
import { Button } from './ui/button';


const Footer = () => {
  return (
    <section className='w-screen border border-t-gray-200'>
      <div>
        <div className=' py-20 px-10 justify-between grid gap-10 sm:grid-cols-2'>
      <div className=''> 
<div className='pb-5' >
  <h2>LOGO</h2>
</div>
<div className='flex flex-col gap-2 justify-center '>
  <p className='font-bold'>Get 15% off your first order!</p>
  <p className='text-sm max-w-lg'>Sign up to our mailing list below to get 15% off your first order. Don't worry, we hate spam too.</p>
</div>
<div className='flex lg:min-w-96 gap-10 items-center pt-4 px-2'>
  <Input placeholder='Enter your email'/>
  <Button variant={"default"}>Subscribe</Button>
</div>
      </div>
      <div className='grid  sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-evenly gap-10 px-10 pt-10'> 
        <div>
          <h4>Services</h4>
          <ul className='flex flex-col gap-5 pt-8 text-sm'>
            <Link href={'/services/'}><li>Data Analysis</li></Link>
            <Link href={'/services/'}><li>Data Science</li></Link>
            <Link href={'/services/'}><li>Web Development</li></Link>
          </ul>
        </div>
        <div>
          <h4>All-Access Pass</h4>
          <ul className='flex flex-col gap-5 pt-8 text-sm'>
            <li>Sign Up</li>
            <li>Login In</li>
            <li>Reset Password</li>
          </ul>
        </div>
        <div>
          <h4>Information</h4>
          <ul className='flex flex-col gap-5 pt-8 text-sm'>
            <li>FAQs</li>
            <Link href={"/Contact/"}><li>Contact Us</li></Link>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
      </div>
      <div>
        <div className='flex justify-between px-10 py-3 border border-t-gray-300'>
          <p className='text-sm'>This is my portfolio website created by <span className='text-destructive'>Rao Hamza Tariq</span></p>
          <div className='flex gap-2 text-xl'>
            <FaLinkedin href={"https://www.linkedin.com/in/rao-hamza-tariq/?originalSubdomain=pk"}/>
            <FaXTwitter href='https://twitter.com/rao_hamza_tariq'/>
          </div>
        </div>
      </div>

      </div>
    </section>
  );
}

export default Footer;

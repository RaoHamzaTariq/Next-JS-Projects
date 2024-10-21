import React from 'react'
import Image from 'next/image';
import { MdOutlineShoppingCart } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { CiSearch } from "react-icons/ci";


const iPhoneCyber = () => {
  return (
    <main>
        <nav className='flex items-center justify-between py-4 px-40'>
            <div>
                <Image src={"/Cyber iPhone Store/Logo Vector.png"} alt='Logo' width={65} height={23}/>
            </div>
            <div className='flex items-center w-[372px] h-14 p-4 gap-2 bg-[#F5F5F5]'>
                <CiSearch className='text-[#656565]'/>
                <p className='text-[#989898]'>Search</p>
            </div>
            <div>
                <ul className='flex  gap-12'>
                    <li className='text-base'>Home</li>
                    <li className='text-[#989898] text-base'>About</li>
                    <li className='text-[#989898] text-base'>Contact Us</li>
                    <li className='text-[#989898] text-base'>Blog</li>
                </ul>
            </div>
            <div className='flex gap-6'>
                <CiHeart className='text-2xl'/>
                <MdOutlineShoppingCart className='text-2xl'/>
                <FiUser className='text-2xl'/>
            </div>
        </nav>
        {/* This is th landing page section */}
        <section className="px-40 bg-gradient-to-r from-[#211C24] to-[#211C24]">
            <div className='flex flex-col gap-6'>
                <div className='flex flex-col gap-6'>
                <p className='text-2xl font-semibold opacity-40 text-white'>Pro.Beyond.</p>
                <h1 className='text-8xl text-white font-thin'>iPhone 14 <span className='font-semibold font-sans'>Pro</span></h1>
                </div>
                <p className=' text-[#909090]'>Created to change everything for the better. For everyone</p>
                <button className=' text-white'>Shop Now</button>
            </div>
            <div></div>
        </section>
    </main>
  )
}

export default iPhoneCyber
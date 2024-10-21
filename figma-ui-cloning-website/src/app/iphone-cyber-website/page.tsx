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
                    <li className='text-[#2E2E2E] text-base'>About</li>
                    <li className='text-[#2E2E2E] text-base'>Contact Us</li>
                    <li className='text-[#2E2E2E] text-base'>Blog</li>
                </ul>
            </div>
            <div className='flex gap-6'>
                <CiHeart className='text-2xl'/>
                <MdOutlineShoppingCart className='text-2xl'/>
                <FiUser className='text-2xl'/>
            </div>
        </nav>
    </main>
  )
}

export default iPhoneCyber
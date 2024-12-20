import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import {ModeToggle} from './ui/modetoggle';

const NavBar = () => {
  return (
    <header className="fixed top-0 left-0 right-0  backdrop-blur-sm border-b  z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/">
              <Image
                src="/Images/BI Structure Images/BI Structure white.png"
                alt="Logo"
                width={100}
                height={32}
                className="h-8 hidden dark:!block cursor-pointer"
              />
              <Image
                src="/Images/BI Structure Images/BI Structure.png"
                alt="Logo"
                width={100}
                height={32}
                className="h-8 dark:hidden cursor-pointer"
              />
            </Link>
            {/* Navigation Links */}
            
          </div>
          <ul className="hidden md:flex ml-10 space-x-8 dark:text-gray-300 text-sm text-gray-950 ">
              <li>
                <Link
                  href="/"
                  className="text-sm  transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/blogs"
                  className=" transition"
                >
                  Blogs
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className=" transition"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className=" transition"
                >
                  About
                </Link>
              </li>
            </ul>
          <div className="flex items-center space-x-6">
            {/* Search */}
            <div className="relative hidden lg:block">
              <input
                type="search"
                placeholder="Search blogs..."
                className="w-56 rounded-full dark:bg-gray-800 dark:text-gray-100 bg-white text-gray-950 pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-700 focus:border-blue-500 focus:ring-2 focus:ring-blue-500 transition"
              />
              <CiSearch className="fas fa-search absolute text-xl left-4 top-1/2 transform -translate-y-1/2 text-gray-400"/>
            </div>

            {/* Theme Toggle */}
            <ModeToggle />


            {/* Subscribe Button */}
            <button className="text-white px-4 py-2 rounded-full bg-blue-500 hover:bg-blue-600 shadow-md transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

import React from "react";
import Image from "next/image";
import { GithubIcon, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className=" mt-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Logo and Description */}
          <div>
            <Image
              src="/Images/BI Structure Images/BI Structure white.png"
              alt="Logo"
              width={100}
              height={40}
              className="h-10 hidden dark:!block cursor-pointer"
            />
            <Image
              src="/Images/BI Structure Images/BI Structure.png"
              alt="Logo"
              width={100}
              height={40}
              className="h-10 dark:hidden cursor-pointer"
            />
            <p className=" text-sm mt-4 leading-6">
              Empowering developers and designers to share knowledge and build
              connections through a modern blog platform.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-medium  mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li className="  transition">Home</li>
              <li className=" text-sm  transition">Articles</li>

              <li className="text-sm  transition">Categories</li>

              <li className="text-sm  transition">About</li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-medium mb-6">Categories</h4>
            <ul className="space-y-4">
              <li className="text-sm transition">Web Development</li>

              <li className="text-sm  transition">Data Analytics</li>

              <li className=" text-sm hover:text-gray-200 transition">
                Data Science
              </li>

              <li className=" text-sm hover:text-gray-200 transition">
                Agentic AI
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-medium  mb-6">Follow Us</h4>
            <ul className="flex items-center space-x-6">
              <li className=" transition" aria-label="Twitter">
                <Twitter className="text-xl" />
              </li>
              <li className=" transition" aria-label="GitHub">
                <GithubIcon className="text-xl" />
              </li>
              <li className=" transition" aria-label="LinkedIn">
                <Linkedin className=" text-xl" />
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200  dark:border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Blog Website. Crafted with care and creativity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

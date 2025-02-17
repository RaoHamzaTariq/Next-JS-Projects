import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { Input } from './ui/input';
import { Button } from './ui/button';


const Footer = () => {
  return (
    <footer className="relative w-full border-t border-primary/10 bg-gradient-to-b from-background to-background/95 backdrop-blur-sm dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto">
        <div className="grid gap-16 py-16 md:grid-cols-2">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="transition-transform hover:scale-105">
              <Image
                src="/images/BI Structure/BI Structure.png"
                alt="BI Structure Logo"
                width={120}
                height={120}
                className="dark:hidden"
              />
              <Image
                src="/images/BI Structure/BI Structure white.png"
                alt="BI Structure Logo"
                width={120}
                height={120}
                className="hidden dark:block"
              />
            </div>
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent dark:from-primary/80 dark:to-primary/40">
                Get 15% off your first order!
              </h3>
              <p className="text-muted-foreground max-w-md dark:text-gray-400">
               {" Sign up to our mailing list below to get 15% off your first order. Don't worry, we hate spam too."}
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md">
              <Input 
                placeholder="Enter your email" 
                className="flex-1 rounded-full border-primary/20 focus:border-primary dark:bg-gray-800 dark:border-gray-700 dark:focus:border-primary"
              />
              <Button className="rounded-full hover:scale-105 transition-transform dark:bg-primary/90 dark:hover:bg-primary">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Right Column - Links Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="space-y-4">
              <h4 className="font-bold text-lg bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent dark:from-primary/80 dark:to-primary/40">Services</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary">
                    Data Analysis
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary">
                    Data Science
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary">
                    Web Development
                  </Link>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent dark:from-primary/80 dark:to-primary/40">All-Access Pass</h4>
              <ul className="space-y-3">
                <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer dark:text-gray-400 dark:hover:text-primary">Sign Up</li>
                <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer dark:text-gray-400 dark:hover:text-primary">Login In</li>
                <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer dark:text-gray-400 dark:hover:text-primary">Reset Password</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="font-bold text-lg bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent dark:from-primary/80 dark:to-primary/40">Information</h4>
              <ul className="space-y-3">
                <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer dark:text-gray-400 dark:hover:text-primary">FAQs</li>
                <li>
                  <Link href="/Contact" className="text-muted-foreground hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary">
                    Contact Us
                  </Link>
                </li>
                <li className="text-muted-foreground hover:text-primary transition-colors cursor-pointer dark:text-gray-400 dark:hover:text-primary">Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/10 py-6 px-4 dark:border-gray-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left dark:text-gray-400">
              This is my portfolio website created by{" "}
              <span className="text-primary font-medium dark:text-primary/80">Rao Hamza Tariq</span>
            </p>
            <div className="flex gap-4">
              <Link 
                href="https://www.linkedin.com/in/rao-hamza-tariq" 
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary"
              >
                <FaLinkedin className="w-5 h-5" />
              </Link>
              <Link 
                href="https://twitter.com/rao_hamza_tariq" 
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors dark:text-gray-400 dark:hover:text-primary"
              >
                <FaXTwitter className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

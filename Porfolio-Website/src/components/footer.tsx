import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaXTwitter, FaLinkedin } from "react-icons/fa6";
import { Input } from './ui/input';
import { Button } from './ui/button';

const Footer = () => {
  return (
    <footer className="relative w-full border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="bg-gradient-to-b from-background/95 via-background/98 to-accent/10 backdrop-blur-lg dark:from-background dark:via-background/95 dark:to-accent/5">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 py-12 md:py-16 md:grid-cols-2 lg:gap-16">
            {/* Left Column */}
            <div className="space-y-6 md:space-y-8">
              <div className="flex justify-center md:justify-start">
                <div className="transition-transform hover:scale-105 hover:drop-shadow-lg">
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
              </div>
              <div className="space-y-4 text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent dark:from-primary dark:via-primary/90 dark:to-primary/70">
                  Get 15% off your first order!
                </h3>
                <p className="text-muted-foreground max-w-md mx-auto md:mx-0 dark:text-gray-400">
                  Sign up to our mailing list below to get 15% off your first order. Don&apos;t worry, we hate spam too.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto md:mx-0">
                <Input 
                  placeholder="Enter your email" 
                  className="flex-1 rounded-full border-primary/20 bg-background/50 focus:border-primary focus:bg-background dark:bg-gray-800/50 dark:border-gray-700 dark:focus:border-primary dark:focus:bg-gray-800"
                />
                <Button className="rounded-full bg-primary/90 hover:bg-primary hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-primary/25 dark:bg-primary/80 dark:hover:bg-primary">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Right Column - Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              <div className="space-y-4 text-center md:text-left">
                <h4 className="font-bold text-lg bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent dark:from-primary dark:via-primary/90 dark:to-primary/70">Services</h4>
                <ul className="space-y-3">
                  <li>
                    <Link href="/services/DataAnalyst" className="text-muted-foreground hover:text-primary transition-colors">
                      Data Analysis
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/AgenticAI" className="text-muted-foreground hover:text-primary transition-colors">
                      Agentic AI
                    </Link>
                  </li>
                  <li>
                    <Link href="/services/WebDeveloper" className="text-muted-foreground hover:text-primary transition-colors">
                      Web Development
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="space-y-4 text-center md:text-left">
                <h4 className="font-bold text-lg bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent dark:from-primary dark:via-primary/90 dark:to-primary/70">All-Access Pass</h4>
                <ul className="space-y-3">
                  <li className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer dark:text-gray-400 dark:hover:text-primary">Sign Up</li>
                  <li className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer dark:text-gray-400 dark:hover:text-primary">Login In</li>
                  <li className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer dark:text-gray-400 dark:hover:text-primary">Reset Password</li>
                </ul>
              </div>

              <div className="space-y-4 text-center md:text-left">
                <h4 className="font-bold text-lg bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent dark:from-primary dark:via-primary/90 dark:to-primary/70">Information</h4>
                <ul className="space-y-3">
                  <li className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer dark:text-gray-400 dark:hover:text-primary">FAQs</li>
                  <li>
                    <Link href="/Contact" className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block dark:text-gray-400 dark:hover:text-primary">
                      Contact Us
                    </Link>
                  </li>
                  <li className="text-muted-foreground hover:text-primary transition-all duration-300 hover:translate-x-1 inline-block cursor-pointer dark:text-gray-400 dark:hover:text-primary">Privacy Policy</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative border-t border-primary/20 bg-background/95 backdrop-blur-xl">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 animate-gradient-x"></div>
        
        {/* Subtle animated dots pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.03]"></div>
        
        <div className="container mx-auto px-4 relative">
          <div className="py-6 md:py-8 flex flex-col sm:flex-row justify-between items-center gap-4 md:gap-6">
            {/* Left side with text */}
            <div className="text-center sm:text-left">
              <p className="text-sm text-muted-foreground">
                This is my portfolio website created by{" "}
                <Link 
                  href="https://github.com/raohamzatariq" 
                  target="_blank"
                  className="text-primary hover:text-primary/80 font-medium transition-colors hover:underline decoration-primary/30 hover:decoration-primary/60"
                >
                  Rao Hamza Tariq
                </Link>
              </p>
            </div>

            {/* Right side with social links and copyright */}
            <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6">
              <div className="flex items-center gap-4">
                <Link 
                  href="https://www.linkedin.com/in/rao-hamza-tariq" 
                  target="_blank"
                  className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label="LinkedIn Profile"
                >
                  <FaLinkedin className="w-5 h-5" />
                </Link>
                <Link 
                  href="https://twitter.com/rao_hamza_tariq" 
                  target="_blank"
                  className="p-2 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                  aria-label="Twitter Profile"
                >
                  <FaXTwitter className="w-5 h-5" />
                </Link>
              </div>

              <div className="hidden sm:block h-8 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent"></div>
              
              <p className="text-xs text-muted-foreground font-medium">
                © 2024 All rights reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

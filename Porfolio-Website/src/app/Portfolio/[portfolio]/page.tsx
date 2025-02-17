'use client';

import { PortfolioData, PortfolioKeys } from '../../../data/data';
import PortfolioComponent from '@/components/PortfolioComponent';
import { useParams } from 'next/navigation';
import React from 'react';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

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
    <motion.div
      initial="hidden"
      animate="visible"
      variants={staggerContainer}
      className="overflow-x-hidden flex flex-col gap-12 min-h-screen bg-gradient-to-b from-background to-background/95 backdrop-blur-md"
    >
      {/* Page Title with Animation */}
      <motion.div
        className="relative w-full flex flex-col items-center mt-32 px-4"
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        <motion.span className="text-sm uppercase tracking-widest text-muted-foreground mb-4">
          Explore Our Work
        </motion.span>
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-center bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent"
        >
          Our Portfolio
        </motion.h1>
        <motion.p className="mt-6 text-lg text-muted-foreground max-w-2xl text-center">
          Discover our collection of innovative projects and creative solutions
        </motion.p>
        <div className="mt-8 flex gap-2">
          <div className="w-3 h-3 rounded-full bg-primary/60"/>
          <div className="w-3 h-3 rounded-full bg-primary/80"/>
          <div className="w-3 h-3 rounded-full bg-primary"/>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={staggerContainer}
      >
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={fadeInUp}
              whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.98 }}
              className="relative backdrop-blur-md rounded-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
            >
              <PortfolioComponent
                image={project.image}
                title={project.title}
                desc={project.desc}
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Slug;

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
      className='overflow-x-hidden flex flex-col gap-7'
    >
      {/* Page Title with Animation */}
      <motion.h1
        className='w-screen flex justify-center mt-28 scroll-m-20 text-3xl font-bold tracking-tighter sm:text-5xl'
        variants={fadeInUp}
        transition={{ duration: 0.8 }}
      >
        Our Portfolio
      </motion.h1>

      {/* Projects Grid */}
      <motion.div
        className='my-14 container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8'
        variants={staggerContainer}
      >
        {projects.map((project) => (
          <motion.div
            key={project.id}
            variants={fadeInUp}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.5 }}
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
  );
};

export default Slug;

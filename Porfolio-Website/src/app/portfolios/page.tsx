'use client';

import { PortfolioData, PortfolioKeys } from '../../data/data';
import PortfolioComponent from '@/components/PortfolioComponent';
import { useParams, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { StaticImageData } from 'next/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import Loader from '@/components/loader';
import { SanityImageAsset } from '@/sanity/lib/client';

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

const Portfolios = () => {
    const [projects, setProjects] = useState([]);
    const [isLoading, setIsLoading] = useState(true); // Add loading state
    const searchParams = useSearchParams();

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true); // Set loading to true before fetching
            try {
                const API_URL= process.env.NEXT_PUBLIC_URL
                const response = await fetch(`${API_URL}/api/project-api?category=${searchParams.get('category')}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setProjects(data.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setIsLoading(false); // Set loading to false after fetching
            }
        };
        fetchData();
    }, [searchParams]);

    if (isLoading) {
        return (
            <div className="flex justify-center py-32 items-center min-h-screen">
                {/* <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900"></div> */}
                <Loader/>
            </div>
        );
    }

    if (!projects || projects.length === 0) {
        return (
            <div className='flex w-screen justify-center text-3xl pt-32'>
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
                    <div className="w-3 h-3 rounded-full bg-primary/60" />
                    <div className="w-3 h-3 rounded-full bg-primary/80" />
                    <div className="w-3 h-3 rounded-full bg-primary" />
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
                    {projects.map((project: {
                        slug: { current: string }; id: React.Key | null | undefined; mainImage: SanityImageAsset; title: string; shortDesc: string;
                    }) => (
                        <motion.div
                            key={project.id}
                            variants={fadeInUp}
                            whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                            whileTap={{ scale: 0.98 }}
                            className="relative backdrop-blur-md rounded-xl hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300"
                        >
                            <PortfolioComponent
                                slug={project.slug?.current}
                                mainImage={project?.mainImage}
                                title={project?.title}
                                shortDesc={project?.shortDesc}
                            />
                        </motion.div>
                    ))}
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default Portfolios;
"use client"
import { FeatureProjectsCarousal } from "@/components/FeatureProjectsCarousal";
import { StackCarousal } from "@/components/StackCarousel";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import {FaRobot,FaCode,FaComments,FaCheckSquare } from "react-icons/fa";
import FAQS from "../../public/images/FAQS.svg"
import { RiDashboard2Line } from "react-icons/ri";
import { MdInsights } from "react-icons/md";
import FAQs from "@/components/FAQs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import React from "react";



export default function Home() {
  return (
  <>
    <main className="bg-background dark:bg-background">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-8 px-4 md:px-8 lg:px-16 py-20 
        bg-gradient-to-b from-background/95 to-background/50 
        dark:from-background dark:to-background/90 
        relative overflow-hidden">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10 dark:opacity-[0.07]" />
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 dark:bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 dark:bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full 
          bg-gradient-to-r from-primary/5 via-transparent to-primary/5 
          dark:from-primary/10 dark:via-transparent dark:to-primary/10 
          blur-3xl" />
        
        {/* Content */}
        <div className="flex-1 max-w-2xl space-y-6 text-center md:text-left animate-in slide-in-from-left duration-500 relative z-10">
          <div className="inline-flex items-center justify-center md:justify-start space-x-2">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary/90 font-medium text-sm backdrop-blur-sm
              hover:scale-105 transition-transform cursor-default">
              {`I'm Rao Hamza Tariq`}
            </span>
            <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-500 dark:bg-green-500/20 dark:text-green-400 font-medium text-sm backdrop-blur-sm
              animate-pulse hover:scale-105 transition-transform cursor-default">
              Available for Work
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight 
            bg-gradient-to-r from-primary via-primary/80 to-primary/60 
            text-transparent bg-clip-text
            animate-gradient-x">
            Full Stack Developer, Data Analyst & AI Agent Developer
          </h1>
          <p className="text-lg text-muted-foreground dark:text-muted-foreground/90 max-w-xl
            hover:text-primary transition-colors duration-300">
            {`I am a skilled Data Analyst, Web Developer, and Power BI Developer, specializing in transforming data into insights and building user-friendly web solutions to help you achieve your goals.`}
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link href="/Portfolio/All">
              <Button size="lg" className="rounded-full font-medium 
                hover:scale-105 transition-all duration-300 backdrop-blur-sm
                dark:bg-primary dark:text-primary-foreground
                dark:hover:bg-primary/90
                hover:shadow-lg hover:shadow-primary/25
                group">
                <span className="mr-2 group-hover:rotate-45 transition-transform duration-300">→</span>
                View my Projects
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="rounded-full font-medium 
                hover:scale-105 transition-all duration-300 backdrop-blur-sm
                dark:border-primary/20 dark:hover:bg-primary/10
                dark:text-primary/90
                hover:shadow-lg hover:shadow-primary/25
                relative overflow-hidden
                group">
                <span className="relative z-10">Contact Me</span>
                <div className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"/>
              </Button>
            </Link>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-4 pt-4">
            <Link href="https://github.com/RaoHamzaTariq" target="_blank" 
              className="text-muted-foreground hover:text-primary 
              dark:text-muted-foreground/80 dark:hover:text-primary 
              transition-all duration-300 hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </Link>
            <Link href="https://www.linkedin.com/in/rao-hamza-tariq" target="_blank" 
              className="text-muted-foreground hover:text-primary 
              dark:text-muted-foreground/80 dark:hover:text-primary 
              transition-all duration-300 hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
          </div>
        </div>

        {/* Profile Image with Enhanced Effects */}
        <div className="flex-1 flex justify-center items-center animate-in slide-in-from-right duration-500 relative z-10">
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/60 to-primary/40
              dark:from-primary/80 dark:via-primary/40 dark:to-primary/20 
              rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative group perspective">
              <Image 
                className="relative object-contain w-[300px] md:w-[400px] lg:w-[500px] 
                  transition-all duration-500 rounded-2xl
                  dark:brightness-90
                  group-hover:transform group-hover:rotate-y-12 group-hover:scale-105"
                src="/images/2.png"
                height={500}
                width={500}
                alt="Profile Image"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/30 to-transparent 
                opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl
                backdrop-blur-sm"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of the sections */}
      <section className="my-16">
        <FeatureProjectsCarousal/>
      </section>
      <section className="w-full py-20 md:py-32 bg-[#1a1b1e] text-white">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-8 text-center">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl lg:text-6xl">
              Why Choose Me for Your Projects
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {`I offer a wide range of services, including data science, data analysis, web development, and Power BI dashboard creation. No matter what your project needs, I have the skills to help you succeed.`}
              </p>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <MdInsights className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Insightful Data Analysis</h3>
                </div>
                <p className="text-muted-foreground">
                  {`With my data analysis expertise, I can uncover valuable insights from your data, helping you understand trends, customer behavior, and operational efficiency for informed decision-making.`}
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <FaCode className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Machine Learning Expertise</h3>
                </div>
                <p className="text-muted-foreground">
                {`I specialize in developing machine learning models that predict outcomes and optimize processes, creating tailored solutions for forecasting sales or improving customer experiences.`}
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <FaRobot className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Engaging Data Visualization</h3>
                </div>
                <p className="text-muted-foreground">
                  {`I create clear and interactive visualizations that make complex data easy to understand, using tools like Power BI to help you track key metrics and tell a compelling data story.`}
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <FaCheckSquare className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Custom Web Development</h3>
                </div>
                <p className="text-muted-foreground">
                  {`I build websites that are visually appealing, functional, and user-friendly, whether you need a simple site or a complex web application tailored to your needs.`}
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <FaComments className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Strong Commnunication</h3>
                </div>
                <p className="text-muted-foreground">
                  {`I prioritize open communication throughout our collaboration, ensuring you are always updated on project progress and available to answer any questions.`}
                </p>
              </div>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <RiDashboard2Line className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-bold">Commitment to Quality</h3>
                </div>
                <p className="text-muted-foreground">
                  {`I am dedicated to delivering high-quality results, putting in the effort needed to ensure your project meets the highest standards.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <StackCarousal/>
      </section>
      <section className="relative py-20 sm:py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-background" />

        <div className="relative container mx-auto px-4 space-y-20">
          <div className="flex flex-col gap-5 justify-center text-center items-center animate-fade-in">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl lg:text-6xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Choose Your Services Plan
            </h1>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {`Select the perfect plan tailored to your needs, whether you're looking for expert data analysis, cutting-edge data science solutions, or innovative web development services.`}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 items-stretch container mx-auto">
            <div className="group">
              <Card className="p-6 h-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 backdrop-blur-sm bg-background/95 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-4xl bg-gradient-to-r from-[#FF6B6B] to-[#FF8E53] bg-clip-text text-transparent">
                    Data Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Transforming your data into useful insights using Python, Power BI and SQL.</p>
                  <div className="space-y-2 mt-6">
                    <h4>Starts from</h4>
                    <span className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">$14.99</span>
                  </div>
                  <Button className="w-full mt-6 py-6 text-lg group-hover:bg-primary/90 transition-colors">Get Started</Button>
                  <div className="mt-7">
                    <h4 className="text-primary">Services includes</h4>
                    <ul className="list-none mt-4 space-y-3">
                      {["Data Cleaning", "Data Featuring", "Exploratory Data Analysis", "Data Modeling", "Data Visualization"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 transition-transform hover:translate-x-2">
                          <span className="text-primary">✔</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="relative group">
              <div className="absolute -inset-[2px] bg-gradient-to-r from-primary to-primary/60 rounded-xl animate-pulse" />
              <div className="absolute -top-8 left-1/2 -translate-x-1/2 py-2 px-4 bg-primary text-white rounded-full whitespace-nowrap">
                MOST POPULAR 🔥
              </div>
              <Card className="p-6 h-full relative backdrop-blur-sm bg-background/95">
                <CardHeader>
                  <CardTitle className="text-4xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                    Data Science
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Make your own predictive model using Machine Learning.</p>
                  <div className="space-y-2 mt-6">
                    <h4>Starts from</h4>
                    <span className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">$19.99</span>
                  </div>
                  <Button className="w-full mt-6 py-6 text-lg group-hover:bg-primary/90 transition-colors">Get Started</Button>
                  <div className="mt-7">
                    <h4 className="text-primary">Services includes</h4>
                    <ul className="list-none mt-4 space-y-3">
                      {["Data Cleaning", "Data Modelling", "Machine Learning Model", "Database Integration", "Model Deployment"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 transition-transform hover:translate-x-2">
                          <span className="text-primary">✔</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="group">
              <Card className="p-6 h-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-primary/10 backdrop-blur-sm bg-background/95 border-primary/20">
                <CardHeader>
                  <CardTitle className="text-4xl bg-gradient-to-r from-[#4158D0] to-[#C850C0] bg-clip-text text-transparent">
                    Web Development
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Build your modern website using Next JS, Tailwind CSS and Shadcn UI.</p>
                  <div className="space-y-2 mt-6">
                    <h4>Starts from</h4>
                    <span className="text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">$24.99</span>
                  </div>
                  <Button className="w-full mt-6 py-6 text-lg group-hover:bg-primary/90 transition-colors">Get Started</Button>
                  <div className="mt-7">
                    <h4 className="text-primary">Services includes</h4>
                    <ul className="list-none mt-4 space-y-3">
                      {["Responsive Design", "Fully Functional", "SEO Optimization", "Database Integration", "Multiple Rendering Techniques"].map((item, i) => (
                        <li key={i} className="flex items-center gap-2 transition-transform hover:translate-x-2">
                          <span className="text-primary">✔</span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>


      <section className="grid md:grid-cols-2 sm:grid-cols-1 my-10">
        <FAQs/>
        <div className="mt-24">
          <Image src={FAQS} alt={""} width={500} height={500}/>
        </div>
      </section>

    </main>
  </>
  );
}

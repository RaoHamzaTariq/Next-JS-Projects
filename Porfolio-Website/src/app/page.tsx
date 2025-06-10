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
    <main className="bg-background dark:bg-background min-h-screen w-full">
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
        <div className="flex-1 max-w-2xl mx-auto space-y-6 text-center md:text-left animate-in slide-in-from-left duration-500 relative z-10">
          <div className="inline-flex items-center justify-center md:justify-start space-x-2 flex-wrap gap-2">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary dark:bg-primary/20 dark:text-primary/90 font-medium text-sm backdrop-blur-sm
              hover:scale-105 transition-transform cursor-default">
              {`I'm Rao Hamza Tariq`}
            </span>
            <span className="px-4 py-2 rounded-full bg-green-500/10 text-green-500 dark:bg-green-500/20 dark:text-green-400 font-medium text-sm backdrop-blur-sm
              animate-pulse hover:scale-105 transition-transform cursor-default">
              Available for Work
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight 
            bg-gradient-to-r from-primary via-primary/80 to-primary/60 
            text-transparent bg-clip-text
            animate-gradient-x">
            Full Stack Developer, Data Analyst & AI Agent Developer
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground dark:text-muted-foreground/90 max-w-xl mx-auto md:mx-0
            hover:text-primary transition-colors duration-300">
            {`I am a skilled Data Analyst, Web Developer, and Power BI Developer, specializing in transforming data into insights and building user-friendly web solutions to help you achieve your goals.`}
          </p>
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
            <Link href="/services" className="w-full sm:w-auto">
              <Button size="lg" className="w-full sm:w-auto rounded-full font-medium 
                hover:scale-105 transition-all duration-300 backdrop-blur-sm
                dark:bg-primary dark:text-primary-foreground
                dark:hover:bg-primary/90
                hover:shadow-lg hover:shadow-primary/25
                group">
                <span className="mr-2 group-hover:rotate-45 transition-transform duration-300">→</span>
                View my Services
              </Button>
            </Link>
            <Link href="/contact" className="w-full sm:w-auto">
              <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full font-medium 
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
        <div className="flex-1 flex justify-center items-center animate-in slide-in-from-right duration-500 relative z-10 mt-8 md:mt-0">
          <div className="relative w-full max-w-[500px]">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-primary/60 to-primary/40
              dark:from-primary/80 dark:via-primary/40 dark:to-primary/20 
              rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative group perspective">
              <Image 
                className="relative w-full h-auto object-contain 
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
      <section className="my-16 px-4">
        <FeatureProjectsCarousal/>
      </section>
      <section className="relative w-full py-16 md:py-24 lg:py-32 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[conic-gradient(from_0deg_at_50%_50%,var(--primary)_0%,transparent_60%)] opacity-20 animate-spin-slow" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,var(--primary)_0%,transparent_50%)] opacity-10 animate-pulse" />
          <div className="absolute inset-0 bg-grid-pattern opacity-[0.08] mix-blend-overlay" />
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-morph" />
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-morph animation-delay-2000" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          {/* Modern Animated Header */}
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8 lg:space-y-10 mb-12 sm:mb-16 lg:mb-24">
            <div 
              className="inline-flex items-center justify-center px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-primary/5 backdrop-blur-xl
              hover:bg-primary/10 transition-all duration-700 animate-float border border-primary/10 hover:border-primary/20"
            >
              <span className="text-primary text-sm sm:text-base font-medium tracking-wide">Why Choose Me</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight 
              bg-gradient-to-br from-primary via-primary/90 to-primary/70 
              bg-clip-text text-transparent animate-gradient-xy"
            >
              Services I Provide
            </h2>
            
            <p className="text-base sm:text-lg lg:text-xl text-muted-foreground/90 dark:text-muted-foreground/80 
              max-w-2xl mx-auto animate-fade-in-up leading-relaxed px-4"
            >
              From data analysis to web development, I offer comprehensive solutions tailored to your needs
            </p>
          </div>

          {/* Service Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto">
            {[
              {
                icon: <MdInsights className="h-8 w-8" />,
                title: "Insightful Data Analysis",
                description: "Transform raw data into actionable insights that drive business growth and informed decision-making."
              },
              {
                icon: <FaCode className="h-8 w-8" />,
                title: "Machine Learning Expertise",
                description: "Develop predictive models and optimize processes using cutting-edge machine learning techniques."
              },
              {
                icon: <FaRobot className="h-8 w-8" />,
                title: "Engaging Data Visualization",
                description: "Create interactive and intuitive visualizations that make complex data easily understandable."
              },
              {
                icon: <FaCheckSquare className="h-8 w-8" />,
                title: "Custom Web Development",
                description: "Build modern, responsive websites and web applications tailored to your specific requirements."
              },
              {
                icon: <FaComments className="h-8 w-8" />,
                title: "Strong Communication",
                description: "Maintain transparent communication throughout project development for optimal collaboration."
              },
              {
                icon: <RiDashboard2Line className="h-8 w-8" />,
                title: "Commitment to Quality",
                description: "Deliver excellence in every project with meticulous attention to detail and best practices."
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group relative p-6 sm:p-8 
                  backdrop-blur-xl bg-background/30 dark:bg-background/10
                  border border-primary/5 dark:border-primary/10 rounded-2xl
                  hover:border-primary/20 dark:hover:border-primary/30
                  transition-all duration-700 hover:scale-[1.02]
                  hover:shadow-2xl hover:shadow-primary/10
                  animate-float-slow"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Enhanced glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 
                  opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-700" />
                
                <div className="relative flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 dark:bg-primary/20 
                      group-hover:bg-primary/20 dark:group-hover:bg-primary/30 
                      transition-colors duration-500 text-primary">
                      {service.icon}
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold 
                      bg-gradient-to-br from-primary to-primary/80 
                      bg-clip-text text-transparent">
                      {service.title}
                    </h3>
                  </div>
                  
                  <p className="text-sm sm:text-base text-muted-foreground/90 dark:text-muted-foreground/80
                    leading-relaxed group-hover:text-muted-foreground transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <StackCarousal/>
      </section>

      <section className="relative py-16 sm:py-20 md:py-24 lg:py-32 xl:py-40 overflow-hidden">
        {/* Enhanced animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[linear-gradient(40deg,var(--primary)_0%,transparent_50%)] opacity-[0.1]" />
          <div className="absolute inset-0 bg-[linear-gradient(210deg,var(--primary)_0%,transparent_50%)] opacity-[0.1]" />
          <div className="absolute h-full w-full bg-grid-pattern opacity-[0.15]" />
          <div className="absolute top-0 left-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        </div>

        <div className="container relative mx-auto px-4 sm:px-6">
          {/* Enhanced Header */}
          <div className="max-w-4xl mx-auto text-center mb-12 sm:mb-16 md:mb-20 lg:mb-24">
            <div className="inline-flex items-center justify-center p-2 sm:p-3 rounded-2xl bg-primary/10 mb-6 sm:mb-8 animate-fade-in hover:bg-primary/20 transition-colors duration-300">
              <span className="text-primary font-semibold text-base sm:text-lg">Premium Services</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/90 to-primary/70 bg-clip-text text-transparent animate-gradient-x">
              Choose Your Perfect Plan
            </h2>
            <p className="mt-4 sm:mt-6 md:mt-8 text-muted-foreground text-base sm:text-lg md:text-xl animate-in slide-in-from-bottom duration-700 delay-200 max-w-2xl mx-auto px-4">
              Unlock the full potential of your data and web presence with our comprehensive solutions
            </p>
          </div>

          {/* Enhanced Pricing Cards */}
          <div className="grid gap-8 sm:gap-10 lg:gap-12 max-w-7xl mx-auto sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "Data Analysis",
                description: "Transform raw data into actionable insights that drive business growth",
                price: "$99.99",
                features: [
                  "Advanced Data Cleaning & Processing",
                  "Comprehensive Statistical Analysis",
                  "Interactive Dynamic Dashboards",
                  "Automated Custom Reporting",
                  "Strategic Data Consulting"
                ],
                gradient: "from-blue-500 via-blue-400 to-cyan-400",
                delay: 100,
                slug: "DataAnalyst"
              },
              {
                name: "AI Agents",
                description: "Harness the power of AI and machine learning for predictive insights",
                price: "$149.99",
                popular: true,
                features: [
                  "AI Agent Development",
                  "Multi Agents System",
                  "Real-time Chatbots",
                  "Production Model Deployment",
                  "AI Performance Optimization"
                ],
                gradient: "from-primary via-violet-500 to-violet-400",
                delay: 200,
                slug: "AgenticAI"
              },
              {
                name: "Web Development",
                description: "Build modern, scalable, and high-performance web applications",
                price: "$249.99", 
                features: [
                  "Full-Stack Custom Development",
                  "Responsive & Interactive Design",
                  "Advanced API Integration",
                  "Performance & SEO Optimization",
                  "Secure Cloud Deployment"
                ],
                gradient: "from-pink-500 via-rose-500 to-rose-400",
                delay: 300,
                slug: "WebDeveloper"
              }
            ].map((plan, index) => (
              <div 
                key={index}
                className={`relative transform hover:scale-105 transition-all duration-500 ${plan.popular ? 'lg:-mt-8' : ''}`}
                style={{
                  animationDelay: `${plan.delay}ms`
                }}
              >
                {plan.popular && (
                  <div className="absolute -top-6 sm:-top-8 inset-x-0 flex justify-center">
                    <span className="inline-flex items-center gap-2 py-1.5 sm:py-2 px-3 sm:px-4 rounded-full text-sm font-semibold bg-primary text-white shadow-xl animate-bounce">
                      Most Popular <span className="text-base">✨</span>
                    </span>
                  </div>
                )}

                <div className={`h-full rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 backdrop-blur-sm border-2 transition-all duration-500
                  ${plan.popular 
                    ? 'bg-primary/[0.05] border-primary/40 hover:border-primary/60 hover:bg-primary/[0.08] shadow-xl shadow-primary/20' 
                    : 'bg-background/70 border-border hover:border-primary/30 hover:bg-background/90 hover:shadow-lg'
                  }
                  group animate-in slide-in-from-bottom`}
                >
                  <div className="space-y-6 sm:space-y-8">
                    <h3 className={`text-2xl sm:text-3xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                      {plan.name}
                    </h3>
                    <p className="text-base sm:text-lg text-muted-foreground">{plan.description}</p>
                    
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">{plan.price}</span>
                      <span className="text-base sm:text-lg text-muted-foreground">/project </span>
                    </div>

                  <Link href={`/services/${plan.slug}`}>
                    <Button className={`w-full rounded-xl py-5 sm:py-7 text-base sm:text-lg font-semibold transition-all duration-500
                      ${plan.popular 
                        ? 'bg-primary text-primary-foreground hover:bg-primary/90 shadow-xl shadow-primary/30 hover:shadow-primary/50' 
                        : 'bg-primary/10 text-primary hover:bg-primary/20 hover:shadow-lg'
                      }
                      hover:scale-[1.02]`}>
                      Get Started Now
                    </Button>
                    </Link>
                    
                    <div className="space-y-4 sm:space-y-6 pt-6 sm:pt-8">
                      <p className="text-base sm:text-lg font-medium">{"What's included:"}</p>
                      <ul className="space-y-3 sm:space-y-4">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center gap-3 sm:gap-4 text-muted-foreground group-hover:text-foreground/90 transition-colors">
                            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-primary flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm sm:text-base">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faqs" className="relative overflow-hidden px-4 py-16 md:py-24 lg:py-32">
        {/* Animated background elements */}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.05] mix-blend-overlay" />
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-morph" />
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-morph animation-delay-2000" />
        
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* FAQ Section */}
            <div className="w-full lg:w-3/5 animate-in slide-in-from-left duration-700">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 blur-3xl" />
                <div className="relative backdrop-blur-sm">
                  <FAQs />
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="w-full lg:w-2/5 animate-in slide-in-from-right duration-700">
              <div className="relative group">
                {/* Decorative elements */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition duration-500" />
                <div className="relative">
                  <div className="p-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl backdrop-blur-xl">
                    <Image 
                      src={FAQS} 
                      alt="FAQs illustration" 
                      width={600}
                      height={600}
                      className="w-full h-auto rounded-xl transform transition-transform duration-500 group-hover:scale-[1.02] animate-float"
                      priority
                    />
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/30 rounded-full blur-sm animate-bounce" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/20 rounded-full blur-sm animate-bounce animation-delay-500" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </>
  );
}

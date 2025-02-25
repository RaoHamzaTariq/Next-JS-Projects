"use client"

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { 
  Code, 
  Database, 
  LineChart, 
  Brain, 
  Laptop, 
  BarChart, 
  PieChart,
  TabletSmartphone,
  Globe,
  Gauge,
  Microscope,
  Lightbulb,
  Rocket,
  CheckCircle2,
  ArrowRight,
  Bot
} from "lucide-react";
import Image from "next/image";

export default function Services() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-accent/5" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern dark:bg-grid-white/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />

        <div className="container relative mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent animate-fade-in">
              Expert Solutions for Your Business
            </h1>
            <p className="text-xl text-muted-foreground animate-slide-up animate-delay-200">
              Transform your business with cutting-edge data analysis, machine learning solutions, and modern web development.
            </p>
            <div className="flex justify-center gap-4 animate-slide-up animate-delay-400">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8">Get Started</Button>
              </Link>
              <Link href="#services">
                <Button variant="outline" size="lg" className="rounded-full px-8">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section id="services" className="py-24 relative bg-primary/[0.02] dark:bg-primary/[0.03] border-t border-b border-primary/10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern dark:bg-grid-white/[0.05]" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4">
              Our Core Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive solutions tailored to meet your business needs with cutting-edge technology and data-driven insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Data Analysis */}
            <div className="animate-slide-up animate-delay-200">
              <Card className="p-6 space-y-4 hover:shadow-xl transition-all duration-300 bg-background/50 backdrop-blur-sm border-primary/10">
                <div className="p-3 bg-primary/10 w-fit rounded-lg">
                  <Database className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Data Analysis</h3>
                <p className="text-muted-foreground">Transform raw data into actionable insights with our comprehensive data analysis services.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary/70" />
                    <span>Advanced Data Visualization</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary/70" />
                    <span>Statistical Analysis</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary/70" />
                    <span>Business Intelligence</span>
                  </li>
                </ul>
                <Link href="/services/DataAnalyst">
                  <Button className="w-full mt-4 group">
                    Learn More 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            </div>

            {/* Agentic AI */}
            <div className="animate-slide-up animate-delay-400">
              <Card className="p-6 space-y-4 hover:shadow-xl transition-all duration-300 bg-background/50 backdrop-blur-sm border-primary/10">
                <div className="p-3 bg-primary/10 w-fit rounded-lg">
                  <Bot className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Agentic AI</h3>
                <p className="text-muted-foreground">Build intelligent AI agents and autonomous systems that transform your business operations.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary/70" />
                    <span>Custom AI Agents</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary/70" />
                    <span>RAG Applications</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary/70" />
                    <span>AI Solutions</span>
                  </li>
                </ul>
                <Link href="/services/AgenticAI">
                  <Button className="w-full mt-4 group">
                    Learn More 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            </div>

            {/* Web Development */}
            <div className="animate-slide-up animate-delay-600">
              <Card className="p-6 space-y-4 hover:shadow-xl transition-all duration-300 bg-background/50 backdrop-blur-sm border-primary/10">
                <div className="p-3 bg-primary/10 w-fit rounded-lg">
                  <Code className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold">Web Development</h3>
                <p className="text-muted-foreground">Create modern, responsive web applications with cutting-edge technologies.</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary/70" />
                    <span>Full Stack Development</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary/70" />
                    <span>Responsive Design</span>
                  </li>
                  <li className="flex items-center gap-2 text-muted-foreground">
                    <CheckCircle2 className="w-5 h-5 text-primary/70" />
                    <span>Modern UI/UX</span>
                  </li>
                </ul>
                <Link href="/services/WebDeveloper">
                  <Button className="w-full mt-4 group">
                    Learn More 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-4">
              Why Choose Us
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with business acumen to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Gauge className="w-6 h-6" />,
                title: "Performance Focused",
                description: "Optimize your systems for maximum efficiency and speed."
              },
              {
                icon: <Microscope className="w-6 h-6" />,
                title: "Data-Driven Approach",
                description: "Make informed decisions based on thorough analysis and insights."
              },
              {
                icon: <Globe className="w-6 h-6" />,
                title: "Scalable Solutions",
                description: "Build systems that grow with your business needs."
              },
              {
                icon: <Lightbulb className="w-6 h-6" />,
                title: "Innovative Thinking",
                description: "Stay ahead with cutting-edge technologies and methodologies."
              },
              {
                icon: <Rocket className="w-6 h-6" />,
                title: "Fast Delivery",
                description: "Quick turnaround without compromising on quality."
              },
              {
                icon: <TabletSmartphone className="w-6 h-6" />,
                title: "Cross-Platform",
                description: "Solutions that work seamlessly across all devices."
              }
            ].map((feature, index) => (
              <div
                key={index}
                className={`animate-slide-up animate-delay-${(index + 1) * 100}`}
              >
                <Card className="p-6 hover:shadow-lg transition-all duration-300 group bg-background/50 backdrop-blur-sm border-primary/10">
                  <div className="flex flex-col gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative bg-primary/[0.02] dark:bg-primary/[0.03] border-t border-primary/10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern dark:bg-grid-white/[0.05]" />
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-muted-foreground animate-slide-up animate-delay-200">
              Let&apos;s work together to bring your ideas to life with cutting-edge technology and data-driven solutions.
            </p>
            <div className="flex justify-center gap-6 animate-slide-up animate-delay-400">
              <Link href="/contact" className="w-full sm:w-auto">
                <Button size="lg" className="w-full sm:w-auto rounded-full px-8 py-6 bg-primary hover:bg-primary/90 hover:scale-105 transition-all duration-500 shadow-xl hover:shadow-primary/25">
                  Get Started
                </Button>
              </Link>
              <Link href="/Portfolio/All">
                <Button variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-8 py-6 hover:bg-primary/10 hover:scale-105 transition-all duration-500">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Decorative Element */}
          <div className="hidden md:block relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-full animate-pulse" />
            <div className="relative aspect-square rounded-full border border-primary/20 p-8 animate-spin-slow">
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary/20 animate-spin-reverse" />
              <div className="relative h-full w-full rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent backdrop-blur-3xl overflow-hidden">
                <Image
                  src="/images/Rao Hamza Tariq.png"
                  alt="Decorative service illustration"
                  fill
                  className="object-cover opacity-90 hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
} 
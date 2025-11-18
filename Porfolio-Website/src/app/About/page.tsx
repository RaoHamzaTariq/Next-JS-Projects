"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  BookOpen, 
  Briefcase, 
  GraduationCap, 
  Award,
  Code,
  Database,
  Brain,
  LineChart,
  Lightbulb, 
  Target, 
  Users, 
  Coffee,
  Globe,
  Clock,
  CheckCircle2,
  Trophy
} from "lucide-react"

export default function About() {
  return (
    <main className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="relative py-16 md:py-14 lg:py-14 overflow-hidden bg-background">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-accent/5" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern dark:bg-grid-white/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />
        <div className="pointer-events-none absolute inset-0 -z-10">
          <Image
            src="/images/BI Structure/BI Structure.png"
            alt="Abstract BI structure illustration used as a soft hero background"
            fill
            sizes="100vw"
            className="object-cover opacity-[0.05] sm:opacity-[0.08]"
            priority
          />
        </div>

        <div className="container relative mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center mb-10 lg:mb-0">
              <div className="relative group w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-2xl blur-2xl opacity-25 group-hover:opacity-40 transition duration-500" />
                <Image 
                  src="/images/BI Structure/rao-hamza-tariq.png"
                  alt="Rao Hamza Tariq"
                  width={480}
                  height={480}
                  className="relative w-full h-auto rounded-2xl shadow-2xl transition duration-500 group-hover:scale-[1.01]"
                  sizes="(max-width: 1024px) 80vw, 480px"
                  priority
                />
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-2 sm:gap-3 px-2">
                  <Badge className="flex items-center gap-2 bg-background/90 backdrop-blur border border-primary/20 text-xs sm:text-sm">
                    <Briefcase className="h-4 w-4 text-primary" />
                    <span>Freelance & Product Work</span>
                  </Badge>
                  <Badge variant="outline" className="hidden sm:inline-flex items-center gap-2 bg-background/80 backdrop-blur text-xs sm:text-sm">
                    <Globe className="h-4 w-4 text-primary" />
                    <span>Remote Worldwide</span>
                  </Badge>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
              <div className="space-y-3">
                <Badge className="mx-auto lg:mx-0 w-fit rounded-full px-4 py-1 text-[10px] sm:text-xs tracking-wide uppercase bg-primary/10 text-primary border border-primary/20">
                  AI Agents • Full‑Stack • Data Analytics
                </Badge>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  About Me
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground">
                  Transforming data into insight and ideas into intelligent products.
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base lg:text-lg">
                {`I'm an AI Agents Developer, Full-Stack Developer, and Data Analyst focused on building AI-powered chatbots, custom AI agents, and data-driven web applications. I help founders, teams, and businesses automate workflows, improve customer experiences, and make better decisions with data-backed systems.`}
              </p>

              <div className="grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:gap-3 justify-center lg:justify-start">
                <Badge variant="secondary" className="px-3 sm:px-4 py-2 rounded-full flex items-center gap-2 text-xs sm:text-sm">
                  <Brain className="h-4 w-4" />
                  <span>AI Agents & Automations</span>
                </Badge>
                <Badge variant="secondary" className="px-3 sm:px-4 py-2 rounded-full flex items-center gap-2 text-xs sm:text-sm">
                  <Code className="h-4 w-4" />
                  <span>Next.js & Full‑Stack</span>
                </Badge>
                <Badge variant="secondary" className="px-3 sm:px-4 py-2 rounded-full flex items-center gap-2 text-xs sm:text-sm">
                  <Database className="h-4 w-4" />
                  <span>Analytics & BI</span>
                </Badge>
                <Badge variant="secondary" className="px-3 sm:px-4 py-2 rounded-full flex items-center gap-2 text-xs sm:text-sm">
                  <LineChart className="h-4 w-4" />
                  <span>ML & Predictions</span>
                </Badge>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6">
                <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Link href="/Portfolio/All">
                    <Button size="lg" className="rounded-full px-8 w-full xs:w-auto shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all">
                      View Portfolio
                    </Button>
                  </Link>
                  <Link href="/Contact">
                    <Button variant="outline" size="lg" className="rounded-full px-8 w-full xs:w-auto">
                      Contact Me
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center justify-center lg:justify-start gap-3 text-xs sm:text-sm text-muted-foreground">
                  <Coffee className="h-4 w-4 text-primary" />
                  <span>Open to collaborations and long‑term partnerships.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Snapshot Section */}
      <section className="py-14 md:py-16 relative bg-primary/[0.02] dark:bg-primary/[0.03] border-y border-primary/10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent opacity-60" />
        <div className="container relative mx-auto px-4">
          <div className="grid gap-10 lg:gap-8 lg:grid-cols-[1.5fr,1fr] items-center">
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-2xl sm:text-3xl text-center md:text-left md:text-4xl font-semibold tracking-tight">
                A hybrid profile across{" "}
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  AI, software engineering, and data
                </span>
                .
              </h2>
              <p className="text-muted-foreground leading-relaxed text-sm sm:text-base text-center md:text-left">
                I love designing systems end‑to‑end — from understanding the problem and data, to architecting AI agents,
                to shipping polished interfaces that real users enjoy. Every project is an opportunity to combine
                thoughtful engineering with clear communication and business impact.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 max-w-md w-full lg:ml-auto">
              <Card className="p-4 sm:p-5 border-primary/15 bg-background/80 backdrop-blur">
                <div className="flex items-center gap-3 mb-1">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="text-xs font-medium text-primary/80 uppercase tracking-wide">Experience</span>
                </div>
                <p className="text-xl sm:text-2xl font-semibold">30+ projects</p>
                <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">
                  Delivered across AI agents, dashboards, and full‑stack products.
                </p>
              </Card>
              <Card className="p-4 sm:p-5 border-primary/15 bg-background/80 backdrop-blur">
                <div className="flex items-center gap-3 mb-1">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-xs font-medium text-primary/80 uppercase tracking-wide">Collaboration</span>
                </div>
                <p className="text-xl sm:text-2xl font-semibold">From solo to teams</p>
                <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">
                  Comfortable working independently or embedded inside product teams.
                </p>
              </Card>
              <Card className="p-4 sm:p-5 border-primary/15 bg-background/80 backdrop-blur">
                <div className="flex items-center gap-3 mb-1">
                  <Target className="h-5 w-5 text-primary" />
                  <span className="text-xs font-medium text-primary/80 uppercase tracking-wide">Focus</span>
                </div>
                <p className="text-xl sm:text-2xl font-semibold">Outcome‑driven</p>
                <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">
                  I care deeply about measurable impact, not just shipping features.
                </p>
              </Card>
              <Card className="p-4 sm:p-5 border-primary/15 bg-background/80 backdrop-blur">
                <div className="flex items-center gap-3 mb-1">
                  <Lightbulb className="h-5 w-5 text-primary" />
                  <span className="text-xs font-medium text-primary/80 uppercase tracking-wide">Mindset</span>
                </div>
                <p className="text-xl sm:text-2xl font-semibold">Builder & learner</p>
                <p className="text-[11px] sm:text-xs text-muted-foreground mt-1">
                  Continuously experimenting with the latest tools in AI and web.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 md:py-24 relative overflow-hidden bg-primary/[0.02] dark:bg-primary/[0.03] border-t border-primary/10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern dark:bg-grid-white/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-transparent" />
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/Gallery/core-compentices.jpg"
            alt="Soft abstract background representing data and AI"
            fill
            sizes="100vw"
            className="object-cover opacity-[0.04] sm:opacity-[0.2]"
            priority
          />
        </div>
        <div className="container relative mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Core Competencies
          </h2>
          <p className="max-w-2xl mx-auto text-center text-muted-foreground mb-8 md:mb-10 text-sm sm:text-base">
            A balanced stack across AI, engineering, and analytics allows me to design solutions that are not only
            technically sound but also aligned with your product and business goals.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                icon: <Code className="h-8 w-8" />,
                title: "Web Development",
                description: "Building modern, responsive web applications using Next.js, React, and Tailwind CSS."
              },
              {
                icon: <Brain className="h-8 w-8" />,
                title: "AI Agents and Automation",
                description: "Designing AI agents, workflows, and automations tailored to specific business processes."
              },
              {
                icon: <Database className="h-8 w-8" />,
                title: "Data Analysis",
                description: "Transforming raw data into meaningful insights using Python, SQL, and Power BI."
              },
              
              {
                icon: <LineChart className="h-8 w-8" />,
                title: "Machine Learning",
                description: "Creating predictive models and integrating them into real-world products and dashboards."
              }
            ].map((skill, index) => (
              <Card key={index} className="p-5 md:p-6 hover:shadow-lg transition-shadow group backdrop-blur-sm bg-background/50">
                <div className="flex flex-col gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-semibold">{skill.title}</h3>
                  <p className="text-sm md:text-base text-muted-foreground">{skill.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-24 relative bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent/5" />
        <div className="container relative mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-12 mb-10 md:mb-12">
            <div className="lg:w-1/3 space-y-4">
              <h2 className="text-3xl sm:text-4xl text-center md:text-left md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                How I Work
              </h2>
              <p className="text-sm sm:text-base text-center md:text-left text-muted-foreground">
                Every project follows a clear, collaborative, and transparent process so you always know what&apos;s
                happening and what comes next.
              </p>
            </div>
            <div className="lg:w-2/3 grid gap-5 md:gap-6">
              {[
                {
                  step: "01",
                  title: "Discovery & Problem Framing",
                  description:
                    "We start with a focused conversation to understand your goals, constraints, and existing systems.",
                  icon: <BookOpen className="h-5 w-5 text-primary" />,
                },
                {
                  step: "02",
                  title: "Architecture & Proposal",
                  description:
                    "I design an approach across AI, data, and front‑end, then share a clear plan, milestones, and scope.",
                  icon: <Lightbulb className="h-5 w-5 text-primary" />,
                },
                {
                  step: "03",
                  title: "Build & Iterate",
                  description:
                    "I build in small, reviewable increments with frequent check‑ins, demos, and opportunities to refine.",
                  icon: <Code className="h-5 w-5 text-primary" />,
                },
                {
                  step: "04",
                  title: "Launch, Measure & Improve",
                  description:
                    "Once shipped, we monitor usage, measure impact, and iterate on UX, performance, and automation.",
                  icon: <Target className="h-5 w-5 text-primary" />,
                },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="relative overflow-hidden border-primary/10 bg-background/60 backdrop-blur group"
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary to-primary/60 opacity-60 group-hover:opacity-100" />
                  <div className="relative flex gap-4 p-5 sm:p-6">
                    <div className="hidden sm:flex flex-col items-center gap-3">
                      <div className="h-9 w-9 rounded-full border border-primary/30 flex items-center justify-center text-xs font-semibold bg-primary/5 text-primary">
                        {item.step}
                      </div>
                      <div className="flex-1 w-px bg-border/60" />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex sm:hidden text-[11px] font-semibold text-primary bg-primary/10 px-2 py-1 rounded-full">
                          Step {item.step}
                        </span>
                        {item.icon}
                        <h3 className="font-semibold text-base sm:text-lg">{item.title}</h3>
                      </div>
                      <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 md:py-24 relative bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent/5" />
        <div className="container relative mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            <div className="lg:w-1/3 space-y-4">
              <h2 className="text-3xl sm:text-4xl text-center md:text-left md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Journey So Far
              </h2>
              <p className="text-sm sm:text-base text-center md:text-left text-muted-foreground">
                A timeline of how I built a foundation across computer science, AI, and analytics — and how it all
                connects to the work I do today.
              </p>
            </div>
            <div className="lg:w-2/3">
              <div className="relative">
                <div className="absolute left-4 sm:left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-primary/20 to-transparent" />
                <div className="space-y-6 sm:space-y-8">
                  {[
                    {
                      icon: <GraduationCap className="h-5 w-5" />,
                      year: "2024 - 2028",
                      title: "Bachelor's in Computer Science",
                      subtitle: "Sindh Madressatul Islam University, Karachi",
                      description:
                        "Deepening my understanding of algorithms, software engineering, and the foundations of AI and data.",
                    },
                    {
                      icon: <BookOpen className="h-5 w-5" />,
                      year: "2023 - 2025",
                      title: "Certified Agentic AI Engineer",
                      subtitle: "Governor House, Sindh, Pakistan",
                      description:
                        "Hands‑on training in building AI agents, reasoning systems, and real‑world automation workflows.",
                    },
                    {
                      icon: <BookOpen className="h-5 w-5" />,
                      year: "2022",
                      title: "Data Analytics & Business Intelligence",
                      subtitle: "Digital Skills, Pakistan",
                      description:
                        "Learned how to model, visualize, and communicate data for decision‑making with BI tools and Python.",
                    },
                  ].map((item, index) => (
                    <div key={index} className="relative pl-12 sm:pl-20">
                      <div className="absolute left-0 sm:left-2 top-2 h-9 w-9 sm:h-10 sm:w-10 rounded-full bg-background border border-primary/40 flex items-center justify-center shadow-sm">
                        <span className="sr-only">{item.year}</span>
                        <span className="text-[10px] sm:text-xs font-semibold text-primary text-center leading-tight">
                          {item.year}
                        </span>
                      </div>
                      <Card className="border-primary/15 bg-background/80 backdrop-blur-sm hover:border-primary/40 transition-all">
                        <div className="p-4 sm:p-6 space-y-2">
                          <div className="flex items-center gap-2 text-xs sm:text-sm text-primary">
                            {item.icon}
                            <span className="font-medium">{item.title}</span>
                          </div>
                          <p className="text-[11px] sm:text-xs text-muted-foreground uppercase tracking-wide">
                            {item.subtitle}
                          </p>
                          <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      </Card>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 md:py-24 relative overflow-hidden bg-primary/[0.03] dark:bg-primary/[0.05] border-t border-b border-primary/10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern dark:bg-grid-white/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent" />
        <div className="container relative mx-auto px-4">
          <div className="flex flex-col gap-10 lg:gap-12">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start lg:items-center">
              <div className="lg:w-1/3 space-y-4">
                <h2 className="text-3xl sm:text-4xl text-center md:text-left md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Tools I Love
                </h2>
                <p className="text-sm sm:text-base text-center md:text-left text-muted-foreground">
                  A pragmatic toolbox that lets me move fast while keeping quality high — from prototyping ideas to
                  deploying reliable systems.
                </p>
              </div>
              <div className="lg:w-2/3">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                  {[
                    "Next.js",
                    "React",
                    "TypeScript",
                    "Tailwind CSS",
                    "Node.js",
                    "PostgreSQL / SQL",
                    "Python",
                    "Pandas / NumPy",
                    "Power BI",
                    "OpenAI APIs",
                    "LangChain / LangGraph",
                    "n8n & Automation",
                  ].map((tool) => (
                    <Card
                      key={tool}
                      className="border-primary/10 bg-background/70 backdrop-blur-sm hover:-translate-y-0.5 hover:border-primary/40 transition-all"
                    >
                      <div className="px-3 sm:px-4 py-2.5 sm:py-3 text-xs sm:text-sm font-medium flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        <span>{tool}</span>
                      </div>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Mini project gallery to visually showcase work */}
            <div className="space-y-4">
              <p className="text-xs sm:text-sm uppercase tracking-[0.2em] text-muted-foreground/80 text-center lg:text-left">
                Selected Visuals
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
                <div className="relative rounded-xl overflow-hidden border border-primary/15 bg-background/80 aspect-[4/3] sm:aspect-[5/3]">
                  <Image
                    src="/images/Gallery/nike chatbot pic.PNG"
                    alt="Conversational AI agent interface used for customer support automation"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent px-3 py-2">
                    <p className="text-[11px] sm:text-xs font-medium text-foreground">
                      AI Agent for Support
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-muted-foreground">
                      Chatbot & workflow automation
                    </p>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden border border-primary/15 bg-background/80 aspect-[4/3] sm:aspect-[5/3]">
                  <Image
                    src="/images/Data Analysis/Traffic Dashboard.jpg"
                    alt="Traffic analytics dashboard visualizing KPIs and real-time data"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent px-3 py-2">
                    <p className="text-[11px] sm:text-xs font-medium text-foreground">
                      Traffic Analytics Dashboard
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-muted-foreground">
                      Power BI & data storytelling
                    </p>
                  </div>
                </div>
                <div className="relative rounded-xl overflow-hidden border border-primary/15 bg-background/80 aspect-[4/3] sm:aspect-[5/3]">
                  <Image
                    src="/images/Gallery/cover_pic.png"
                    alt="Clean responsive portfolio website layout built with Next.js"
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-[1.03]"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/90 via-background/40 to-transparent px-3 py-2">
                    <p className="text-[11px] sm:text-xs font-medium text-foreground">
                      Hospital Appointment Booking System
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-muted-foreground">
                      n8n, Automation, and AI Agents
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 md:py-24 relative overflow-hidden bg-primary/[0.03] dark:bg-primary/[0.05] border-t border-b border-primary/10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern dark:bg-grid-white/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/40 to-transparent" />
        <div className="pointer-events-none absolute inset-0">
          <Image
            src="/images/Gallery/bg.jpg"
            alt="Subtle geometric illustration used as a background texture"
            fill
            sizes="100vw"
            className="object-cover opacity-[0.06] sm:opacity-[0.2]"
          />
        </div>
        <div className="container relative mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Work Values
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground">
              These are the principles that guide how I communicate, build, and ship — from the first message to long‑term
              collaboration.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Target className="h-7 w-7 md:h-8 md:w-8" />,
                title: "Goal-Oriented",
                description: "Focused on clear outcomes, KPIs, and ROI so every project ladders up to your bigger objectives."
              },
              {
                icon: <Lightbulb className="h-7 w-7 md:h-8 md:w-8" />,
                title: "Innovation",
                description: "Bringing creative, up-to-date solutions while staying grounded in what is stable and maintainable."
              },
              {
                icon: <Clock className="h-7 w-7 md:h-8 md:w-8" />,
                title: "Timeliness",
                description: "Respecting timelines, communicating early, and shipping in predictable, reviewable increments."
              },
              {
                icon: <Users className="h-7 w-7 md:h-8 md:w-8" />,
                title: "Collaboration",
                description: "Working as a partner — not just a contractor — with open communication and shared context."
              },
              {
                icon: <Trophy className="h-7 w-7 md:h-8 md:w-8" />,
                title: "Excellence",
                description: "Paying attention to details in UX, performance, and reliability, not just getting things to work."
              },
              {
                icon: <CheckCircle2 className="h-7 w-7 md:h-8 md:w-8" />,
                title: "Reliability",
                description: "Being consistent, honest, and dependable — from small updates to mission-critical launches."
              }
            ].map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-background/60 border border-primary/10 hover:border-primary/40"
              >
                <div className="p-5 md:p-7 space-y-4 h-full flex flex-col">
                  <div className="p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors duration-300 shadow-lg shadow-primary/5">
                    {value.icon}
                  </div>
                  <div className="space-y-2 flex-1">
                    <h3 className="text-base sm:text-lg md:text-xl font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                      {value.title}
                    </h3>
                    <p className="text-xs sm:text-sm md:text-base text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 md:py-24 relative bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent/5" />
        <div className="container relative mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-6 md:space-y-8">
            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-muted-foreground text-sm sm:text-lg">
              {"Let's collaborate to bring your ideas to life with cutting-edge technology and data-driven solutions."}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-6">
              <Link href="/Contact">
                <Button size="lg" className="rounded-full px-8 w-full sm:w-auto hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary/25">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/Portfolio/All">
                <Button variant="outline" size="lg" className="rounded-full px-8 w-full sm:w-auto hover:scale-105 transition-transform duration-300">
                  View Projects
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

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
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function About() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-background">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/50 to-accent/5" />
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern dark:bg-grid-white/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-transparent to-background/90" />

        <div className="container relative mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            {/* Image Section */}
            <div className="lg:w-1/2 flex justify-center">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-2xl blur-2xl opacity-25 group-hover:opacity-40 transition duration-500" />
                <Image 
                  src="/images/BI Structure/rao-hamza-tariq.jpg"
                  alt="Rao Hamza Tariq"
                  width={500}
                  height={500}
                  className="relative rounded-2xl shadow-2xl transition duration-500 group-hover:scale-[1.01]"
                  priority
                />
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 space-y-6">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tight lg:text-5xl bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  About Me
                </h1>
                <p className="text-xl text-muted-foreground">
                  Transforming Data into Insights, Code into Solutions
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                I am a passionate Data Analyst and Full Stack Developer with expertise in transforming complex data into actionable insights 
                and building modern web applications. With a strong foundation in both data science and web development, I bring a unique 
                perspective to every project.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="px-4 py-2">Data Analysis</Badge>
                <Badge variant="secondary" className="px-4 py-2">Machine Learning</Badge>
                <Badge variant="secondary" className="px-4 py-2">Web Development</Badge>
                <Badge variant="secondary" className="px-4 py-2">Power BI</Badge>
              </div>
              <div className="flex gap-4">
                <Link href="/Portfolio/All">
                  <Button size="lg">View Portfolio</Button>
                </Link>
                <Link href="/contact">
                  <Button variant="outline" size="lg">Contact Me</Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 relative overflow-hidden bg-primary/[0.02] dark:bg-primary/[0.03] border-t border-b border-primary/10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern dark:bg-grid-white/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-transparent" />
        <div className="container relative mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Core Competencies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Code className="h-8 w-8" />,
                title: "Web Development",
                description: "Building modern, responsive web applications using Next.js, React, and Tailwind CSS."
              },
              {
                icon: <Database className="h-8 w-8" />,
                title: "Data Analysis",
                description: "Transforming raw data into meaningful insights using Python, SQL, and Power BI."
              },
              {
                icon: <Brain className="h-8 w-8" />,
                title: "Machine Learning",
                description: "Developing predictive models and implementing AI solutions for business problems."
              },
              {
                icon: <LineChart className="h-8 w-8" />,
                title: "Data Visualization",
                description: "Creating interactive dashboards and compelling data stories."
              }
            ].map((skill, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow group backdrop-blur-sm bg-background/50">
                <div className="flex flex-col gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors">
                    {skill.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{skill.title}</h3>
                  <p className="text-muted-foreground">{skill.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 relative bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent/5" />
        <div className="container relative mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Journey So Far
          </h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {[
              {
                icon: <GraduationCap className="h-6 w-6" />,
                year: "2024 - 2028",
                title: "Bachelor's in Computer Science",
                subtitle: "Sindh Madressatul Islam University, Karachi"
              },
              {
                icon: <BookOpen className="h-6 w-6" />,
                year: "2023",
                title: "Certified Cloud Applied Generative AI Engineer",
                subtitle: "Governor House, Sindh, Pakistan"
              },
              {
                icon: <BookOpen className="h-6 w-6" />,
                year: "2022",
                title: "Data Analytics and Business Intelligence",
                subtitle: "Digital Skills, Pakistan"
              }
            ].map((item, index) => (
              <div key={index} className="relative pl-12 group">
                <div className="absolute left-0 top-0 p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  {item.icon}
                </div>
                <div className="space-y-2 border-l-2 border-primary/20 pl-8 pb-8">
                  <span className="text-sm text-muted-foreground">{item.year}</span>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.subtitle}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-24 relative overflow-hidden bg-primary/[0.03] dark:bg-primary/[0.05] border-t border-b border-primary/10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern dark:bg-grid-white/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent" />
        <div className="container relative mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: <Globe className="h-6 w-6" />, value: "10+", label: "Countries Reached" },
              { icon: <Users className="h-6 w-6" />, value: "50+", label: "Happy Clients" },
              { icon: <CheckCircle2 className="h-6 w-6" />, value: "100+", label: "Projects Completed" },
              { icon: <Coffee className="h-6 w-6" />, value: "1000+", label: "Cups of Coffee" },
            ].map((stat, index) => (
              <div key={index} className="text-center space-y-2 group">
                <div className="mx-auto w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-primary/5">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Skills Section */}
      <section className="py-24 relative bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent/5" />
        <div className="container relative mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Technical Expertise
          </h2>
          <Tabs defaultValue="development" className="max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-12">
              <TabsTrigger value="development" className="text-base">Development</TabsTrigger>
              <TabsTrigger value="data" className="text-base">Data Science</TabsTrigger>
              <TabsTrigger value="tools" className="text-base">Tools</TabsTrigger>
            </TabsList>
            <TabsContent value="development" className="space-y-6 bg-card/50 p-8 rounded-xl border border-primary/10">
              {[
                { name: "Next.js / React", value: 90 },
                { name: "TypeScript", value: 85 },
                { name: "Tailwind CSS", value: 95 },
                { name: "Node.js", value: 80 },
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className="h-2" />
                </div>
              ))}
            </TabsContent>
            <TabsContent value="data" className="space-y-6 bg-card/50 p-8 rounded-xl border border-primary/10">
              {[
                { name: "Python", value: 95 },
                { name: "SQL", value: 90 },
                { name: "Machine Learning", value: 85 },
                { name: "Power BI", value: 95 },
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className="h-2" />
                </div>
              ))}
            </TabsContent>
            <TabsContent value="tools" className="space-y-6 bg-card/50 p-8 rounded-xl border border-primary/10">
              {[
                { name: "Git & GitHub", value: 90 },
                { name: "VS Code", value: 95 },
                { name: "Jupyter Notebook", value: 90 },
                { name: "Docker", value: 75 },
              ].map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.value}%</span>
                  </div>
                  <Progress value={skill.value} className="h-2" />
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 relative overflow-hidden bg-primary/[0.03] dark:bg-primary/[0.05] border-t border-b border-primary/10">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-pattern dark:bg-grid-white/[0.05]" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-background/20 to-transparent" />
        <div className="container relative mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Work Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Target className="h-8 w-8" />,
                title: "Goal-Oriented",
                description: "Focused on achieving measurable results and exceeding client expectations."
              },
              {
                icon: <Lightbulb className="h-8 w-8" />,
                title: "Innovation",
                description: "Constantly exploring new technologies and creative solutions."
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Timeliness",
                description: "Committed to delivering projects on schedule without compromising quality."
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Collaboration",
                description: "Working closely with clients to ensure their vision is realized."
              },
              {
                icon: <Trophy className="h-8 w-8" />,
                title: "Excellence",
                description: "Striving for the highest quality in every project and deliverable."
              },
              {
                icon: <CheckCircle2 className="h-8 w-8" />,
                title: "Reliability",
                description: "Dependable partner for all your development and data needs."
              }
            ].map((value, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 backdrop-blur-sm bg-background/50 border-primary/10">
                <div className="p-8 space-y-4">
                  <div className="p-3 rounded-xl bg-primary/10 w-fit group-hover:bg-primary/20 transition-colors duration-300 shadow-lg shadow-primary/5">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 relative bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-accent/5" />
        <div className="container relative mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Ready to Start Your Next Project?
            </h2>
            <p className="text-muted-foreground text-lg">
              {"Let's collaborate to bring your ideas to life with cutting-edge technology and data-driven solutions."}
            </p>
            <div className="flex justify-center gap-6">
              <Link href="/contact">
                <Button size="lg" className="rounded-full px-8 hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-primary/25">
                  Get in Touch
                </Button>
              </Link>
              <Link href="/Portfolio/All">
                <Button variant="outline" size="lg" className="rounded-full px-8 hover:scale-105 transition-transform duration-300">
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

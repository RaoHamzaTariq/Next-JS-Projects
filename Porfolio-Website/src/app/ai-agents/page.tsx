'use client'
import React from 'react';
import { Card } from "@/components/ui/card";
import Link from 'next/link';
import Image from 'next/image';
import { Bot, Brain, FileText, Sparkles } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

// Sample AI Agent Data (Replace with your actual data)
const aiAgents = [
  {
    id: 1,
    name: "BI Chat",
    description: "Intelligent chatbot for document analysis and natural conversations",
    image: "/images/AI Agents/bi-chat.png",
    route: "/ai-agents/chatbot",
    icon: <Bot className="h-5 w-5" />,
    tag: "Chatbot"
  },
  {
    id: 2,
    name: "BI Cleaner",
    description: "Advanced data cleaning and preprocessing automation tool",
    image: "/images/AI Agents/bi-cleaner.png",
    route: "/ai-agents/data-cleaner",
    icon: <FileText className="h-5 w-5" />,
    tag: "Data Processing"
  },
  {
    id: 3,
    name: "BI MCQs Generator",
    description: "Automated MCQ generation from any document with intelligent analysis",
    image: "/images/AI Agents/bi-test.png",
    route: "/ai-agents/mcqs_generator",
    icon: <Sparkles className="h-5 w-5" />,
    tag: "Education"
  },
  {
    id: 4,
    name: "Mental Health Assistant",
    description: "AI-powered mental health analysis and personalized recommendations",
    image: "/images/AI Agents/mental-health.png",
    route: "/ai-agents/mental-health-ai-assistant",
    icon: <Brain className="h-5 w-5" />,
    tag: "Healthcare"
  },
];

const AIAgentsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background/95 to-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/60 relative overflow-hidden">
      {/* Animated Background Stars */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/20"
            style={{
              width: Math.random() * 4 + 'px',
              height: Math.random() * 4 + 'px',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animation: `twinkle ${Math.random() * 3 + 2}s linear infinite ${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto p-6 pt-24 sm:pt-32 relative z-10">
        {/* Hero Section */}
        <div className="text-center space-y-6 mb-24">
          <div className="inline-flex items-center justify-center p-4 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300 hover:scale-110">
            <Bot className="h-12 w-12 text-primary animate-pulse" />
          </div>
          <h1 className="text-5xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
            AI Agents Hub
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Discover our suite of intelligent AI agents, crafted to enhance your productivity and transform your workflow
          </p>
          <div className="flex justify-center gap-2">
            <div className="w-2 h-2 rounded-full bg-primary/60 animate-pulse"/>
            <div className="w-2 h-2 rounded-full bg-primary/80 animate-pulse delay-75"/>
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse delay-150"/>
          </div>
        </div>
        
        {/* Agents Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {aiAgents.map((agent, index) => (
            <Link 
              key={agent.id} 
              href={agent.route} 
              className="block group"
              style={{
                animationDelay: `${index * 100}ms`
              }}
            >
              <Card className="overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2 h-full bg-background/60 backdrop-blur-md border border-primary/10">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent z-10" />
                  {agent.image && (
                    <Image
                      src={agent.image}
                      alt={agent.name}
                      width={500}
                      height={300}
                      className="w-full h-52 object-cover transition-all duration-500 group-hover:scale-110 group-hover:rotate-1"
                    />
                  )}
                  <Badge 
                    variant="secondary" 
                    className="absolute top-4 right-4 z-20 backdrop-blur-md bg-background/70 shadow-lg transition-transform duration-300 group-hover:scale-110"
                  >
                    {agent.tag}
                  </Badge>
                </div>
                <div className="p-6 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-primary/10 text-primary group-hover:bg-primary/20 transition-colors duration-300">
                      {agent.icon}
                    </div>
                    <h2 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
                      {agent.name}
                    </h2>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
                    {agent.description}
                  </p>
                  <div className="flex items-center text-primary group-hover:text-primary/80 transition-all duration-300 pt-2">
                    <span className="text-sm font-semibold">Explore Agent</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2 transition-all duration-300 group-hover:translate-x-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default AIAgentsPage;
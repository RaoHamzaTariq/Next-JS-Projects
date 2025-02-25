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
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-5xl font-bold mb-6">
            <span className="text-primary">AI Agents</span> & Tools
          </h1>
          <p className="text-lg text-muted-foreground mb-12">
            Explore our suite of intelligent AI agents designed to enhance your productivity and streamline your workflow
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {aiAgents.map((agent) => (
            <Link 
              key={agent.id}
              href={agent.route}
              className="block group"
            >
              <Card className="h-full hover:border-primary/50 transition-colors duration-300">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={agent.image}
                    alt={agent.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Badge className="bg-primary/90 text-white">
                      {agent.tag}
                    </Badge>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-primary">
                      {agent.icon}
                    </div>
                    <h2 className="font-semibold text-xl">
                      {agent.name}
                    </h2>
                  </div>

                  <p className="text-muted-foreground text-sm mb-4">
                    {agent.description}
                  </p>

                  <div className="flex items-center text-primary text-sm font-medium">
                    Learn more
                    <svg 
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none" 
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AIAgentsPage;
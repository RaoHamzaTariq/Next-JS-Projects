import React from 'react';
import { Card } from "@/components/ui/card";
import Link from 'next/link';
import Image from 'next/image';

// Sample AI Agent Data (Replace with your actual data)
const aiAgents = [
  {
    id: 1,
    name: "BI Chat",
    description: "Chatbot that is for writing, you can also ask the questions by uploading documents",
    image: "/images/AI Agents/bi-chat.png",
    route: "/ai-agents/chatbot",
  },
  {
    id: 2,
    name: "BI Cleaner",
    description: "AI Agent that cleans and preprocesses data autonomously by uploading dataset.",
    image: "/images/AI Agents/bi-cleaner.png",
    route: "/ai-agents/data-cleaner",
  },
  {
    id: 3,
    name: "BI MCQs Generator",
    description: "AI Tool that generates MCQs from your document.",
    image: "/images/AI Agents/bi-test.png",
    route: "/ai-agents/mcqs_generator",
  },
  {
    id: 4,
    name: "Mental Health Assistant",
    description: "AI-powered mental health analysis and personalized recommendations for your well-being.",
    image: "/images/AI Agents/mental-health.png", // Add this image to your public folder
    route: "/ai-agents/mental-health-ai-assistant",
  },
];

const AIAgentsPage = () => {
  return (
    <div className="container mx-auto p-4 pt-20">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          AI Agents
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Explore our collection of powerful AI agents designed to assist you with various tasks.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {aiAgents.map((agent) => (
          <Link key={agent.id} href={agent.route} className="block">
            <Card className="group h-full overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="flex flex-col h-full">
                <div className="relative h-48 overflow-hidden">
                  {agent.image && (
                    <Image
                      src={agent.image}
                      alt={agent.name}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className="p-6 flex-grow space-y-4">
                  <h2 className="text-xl font-semibold">{agent.name}</h2>
                  <p className="text-muted-foreground text-sm line-clamp-3">
                    {agent.description}
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="flex items-center text-primary hover:text-primary/80 transition-colors">
                    <span className="text-sm font-medium">Try it now</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1"
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
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default AIAgentsPage;
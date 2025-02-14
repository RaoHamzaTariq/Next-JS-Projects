import React from 'react';
import { Card } from "@/components/ui/card";
import Link from 'next/link';
import Image from 'next/image';

// Sample AI Agent Data (Replace with your actual data)
const aiAgents = [
  {
    id: 1,
    name: "BI Chat",
    description: "Chatbot that is for writing,you can also ask the questions by uploading documents",
    image: "/images/AI Agents/bi-chat.png", // Path to your image
    route: "/ai-agents/chatbot", // Route for the specific agent
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
 
  // Add more AI agents here...
];

const AIAgentsPage = () => {
  return (
    <div className="container mx-auto p-4 pt-20">
      <h1 className="text-3xl font-bold mb-4">AI Agents</h1>
      <p className="text-gray-600 mb-8">
        Explore our collection of powerful AI agents designed to assist you with various tasks.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {aiAgents.map((agent) => (
          <Link key={agent.id} href={agent.route} className="block">
            <Card className="hover:scale-105 transition-transform duration-200">
              <div className="flex flex-col h-full">
                {agent.image && (
                  <Image
                    src={agent.image}
                    alt={agent.name}
                    width={500}
                    height={300}
                    className="w-full h-48 object-cover rounded-t-lg mb-4"
                  />
                )}
                <div className="p-4 flex-grow">
                  <h2 className="text-xl font-semibold mb-2">{agent.name}</h2>
                  <p className="text-gray-700 line-clamp-3">{agent.description}</p>
                </div>
                <div className="p-4 border-t">
                  <span className="text-blue-500 hover:underline">Go to Agent</span>
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
'use client';
import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import ReactMarkdown from 'react-markdown';
import { Eye, EyeOff, Send } from 'lucide-react';

interface Message {
  role: 'user' | 'bot';
  content: string;
}

const ChatInterface = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);
  const [apiKey, setApiKey] = useState('');
  const [isApiKeyVisible, setIsApiKeyVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim() || !apiKey.trim()) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const API_URL = process.env.NEXT_PUBLIC_URL || '';
      const response = await fetch(`${API_URL}/api/chatbot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: input, apiKey }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const botMessage: Message = { role: 'bot', content: data.response };
      setMessages((prev) => [...prev, botMessage]);
    } catch (error: any) {
      console.error('Error sending message:', error);
      alert(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className='flex justify-center items-center py-20'>
      <Card className='p-4 mx-4 sm:mx-10 w-full shadow-xl rounded-lg '>
        <div className='space-y-4'>
          <div className='relative'>
            <Input
              type={isApiKeyVisible ? 'text' : 'password'}
              placeholder='Enter your API Key'
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className='pr-10 transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-300'
            />
            <button
              type='button'
              onClick={() => setIsApiKeyVisible(!isApiKeyVisible)}
              className='absolute right-3 top-2 text-gray-500 hover:text-gray-700'
            >
              {isApiKeyVisible ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
          <div className='h-96 overflow-y-auto border  rounded-lg p-2  shadow-inner'>
            {messages.map((msg, index) => (
              <div key={index} className={`my-2 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                <span className={`inline-block p-2 rounded-lg ${msg.role === 'user' ? 'bg-blue-500 text-white shadow-md' : 'bg-gray-200 text-gray-800'}`}>
                  {msg.role === 'bot' ? (
                    <ReactMarkdown>{msg.content}</ReactMarkdown>
                  ) : (
                    msg.content
                  )}
                </span>
              </div>
            ))}
            {isLoading && (
              <div className='flex justify-center my-2'>
                <div className='animate-spin h-5 w-5 border-t-2 border-b-2 border-blue-500 rounded-full'></div>
              </div>
            )}
          </div>
          <div className='flex space-x-2'>
            <Input
              type='text'
              placeholder='Type a message...'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              className='transition duration-300 ease-in-out focus:border-blue-500 focus:ring focus:ring-blue-300'
            />
            <Button onClick={handleSend} disabled={isLoading} className={`transition duration-300 ${isLoading ? 'bg-gray-400' : 'bg-blue-500 hover:bg-blue-600'}`}>
              {isLoading ? '...' : <Send size={20} />}
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ChatInterface;

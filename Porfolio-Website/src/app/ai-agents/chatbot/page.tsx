'use client';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Loader2, AlertCircle, Sun, Moon, Upload, Trash, Send, Key, BrainCircuit, EyeOff, Eye } from 'lucide-react';
import { useTheme } from 'next-themes';
import ReactMarkdown from 'react-markdown';

export default function ChatPage() {
  const { theme, setTheme } = useTheme();
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [temperature, setTemperature] = useState(0.7);
  const [apiKey, setApiKey] = useState('');
  const [isApiKeyVisible, setIsApiKeyVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Ensure client-side rendering
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim() || !apiKey.trim()) {
      setError('API key and message are required');
      return;
    }

    const newMessage = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsLoading(true);
    setError(null);

    try {
      const API_URL = process.env.NEXT_PUBLIC_URL || ''; // API URL from environment
      const response = await fetch(`${API_URL}/api/chatbot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage, apiKey }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const aiResponse = {
        role: 'ai',
        content: data.response, // Assuming response is part of the returned data
      };
      
      setMessages(prev => [...prev, aiResponse]);
    } catch (err) {
      setError('Failed to fetch response. Please check your connection.');
    } finally {
      setIsLoading(false);
    }
  };

  const clearChat = () => setMessages([]);

  if (!isClient) {
    return null; // Prevent rendering until the client-side code is ready
  }

  return (
    <div className="flex pt-16 h-screen bg-background flex-col md:flex-row">
      {/* Left Sidebar */}
      <aside
        className={`w-full md:w-80 border-r bg-muted/40 p-4 flex flex-col gap-6 transition-all duration-300 transform md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:flex-none`}
      >
        <div className="flex items-center gap-2">
          <BrainCircuit className="text-primary h-6 w-6" />
          <h1 className="text-xl font-semibold">BI Chat</h1>
        </div>

        <div className="space-y-10">
          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">API Key</label>
            <div className="relative">
              <Input
                type={isApiKeyVisible ? 'text' : 'password'}
                placeholder="Enter your API key"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
                className="pr-10"
              />
              <button
                type="button"
                onClick={() => setIsApiKeyVisible(!isApiKeyVisible)}
                className="absolute right-3 top-2.5 text-muted-foreground"
              >
                {isApiKeyVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium leading-none">Temperature: {temperature}</label>
            <Slider
              value={[temperature]}
              onValueChange={(val: number[]) => setTemperature(val[0])}
              max={1}
              step={0.1}
              className="cursor-pointer"
            />
          </div>

          <Button variant="outline" className="w-full gap-2">
            <Upload className="h-4 w-4" />
            Upload File
          </Button>

          <Button variant="destructive" onClick={clearChat} className="w-full gap-2">
            <Trash className="h-4 w-4" />
            Clear Chat
          </Button>
        </div>

        <div className="mt-auto flex items-center justify-between">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <div className="text-sm text-muted-foreground">v1.0.0</div>
        </div>
      </aside>

      {/* Toggle Sidebar Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-10 bg-primary text-white p-2 rounded-full"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <Trash className="h-5 w-5" /> : <Key className="h-5 w-5" />}
      </button>

      {/* Chat Area */}
      <main className="flex-1 flex flex-col">
        <div className="flex-1 overflow-y-auto p-4 space-y-6">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-3xl p-4 rounded-xl ${
                message.role === 'user'
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted border'
              }`}>
                <ReactMarkdown className="prose dark:prose-invert">
                  {message.content}
                </ReactMarkdown>
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="flex justify-start">
              <div className="max-w-3xl p-4 rounded-xl bg-muted border">
                <Loader2 className="h-6 w-6 animate-spin text-primary" />
              </div>
            </div>
          )}

          {error && (
            <Alert variant="destructive" className="max-w-3xl mx-auto">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <div ref={messagesEndRef} />
        </div>

        <form onSubmit={handleSubmit} className="p-4 border-t">
          <div className="flex gap-2">
            <Input
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1"
            />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Send className="h-4 w-4" />
              )}
            </Button>
          </div>
        </form>
      </main>
    </div>
  );
}

'use client';
import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert';
import { Loader2, AlertCircle, Sun, Moon, Upload, Trash, Send, Key, BrainCircuit, EyeOff, Eye, X, Menu } from 'lucide-react';
import { useTheme } from 'next-themes';
import ReactMarkdown from 'react-markdown';
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from '@/components/ui/card';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { FileText } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";

export default function ChatPage() {
  const { theme, setTheme } = useTheme();
  const [messages, setMessages] = useState<Array<{ role: string; content: string }>>([]);
  const [inputMessage, setInputMessage] = useState('');
  const [temperature, setTemperature] = useState(0.5);
  const [apiKey, setApiKey] = useState('');
  const [isApiKeyVisible, setIsApiKeyVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [file, setFile] = useState<File | null>(null);
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [isDocumentMode, setIsDocumentMode] = useState(false);

  // Move localStorage access to useEffect
  useEffect(() => {
    // Get sessionId from localStorage on component mount
    const storedSessionId = localStorage.getItem('sessionId');
    if (storedSessionId) {
      setSessionId(storedSessionId);
    }
  }, []);

  // Add check for client-side rendering
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

  // Add session initialization effect
  useEffect(() => {
    if (!sessionId) {
      const initializeSession = async () => {
        try {
          const response = await fetch('https://raohamzatariq-chatbot-backend.hf.space/create-session', { method: 'POST' });
          if (!response.ok) throw new Error('Failed to create session');
          const { session_id } = await response.json();
          setSessionId(session_id);
          localStorage.setItem('sessionId', session_id);
        } catch (error) {
          console.error('Session initialization error:', error);
        }
      };
      initializeSession();
    }
  }, [sessionId]);

  // Modify handleSubmit to handle both modes more elegantly
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const newMessage = { role: 'user', content: inputMessage };
    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsLoading(true);
    setError(null);

    try {
      if (isDocumentMode) {
        // Document chat mode
        if (!sessionId) {
          throw new Error('Session not initialized');
        }

        const response = await fetch('https://raohamzatariq-chatbot-backend.hf.space/ask', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            session_id: sessionId, 
            question: inputMessage,
            temperature: temperature || 0.5 // Default temperature if not set
          }),
        });
        
        if (!response.ok) throw new Error('Failed to get answer from document');
        const { answer } = await response.json();
        
        setMessages(prev => [...prev, { role: 'ai', content: answer }]);
      } else {
        // Regular chatbot mode - API key optional for basic chat
        const API_URL = process.env.NEXT_PUBLIC_URL || '';
        const response = await fetch(`${API_URL}/api/chatbot`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            message: inputMessage,
            apiKey: apiKey || null, // Make API key optional
            temperature: temperature || 0.5 // Default temperature if not set
          }),
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setMessages(prev => [...prev, { role: 'ai', content: data.response }]);
      }
    } catch (error) {
      setError(`Error: ${error instanceof Error ? error.message : 'Unknown error occurred'}`);
      console.error('Chat error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Modify handleUpload to better handle document mode transition
  const handleUpload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a file to upload');
      return;
    }
    if (!sessionId) {
      setError('Please wait, session is initializing');
      return;
    }

    setUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('session_id', sessionId);

      const response = await fetch('https://raohamzatariq-chatbot-backend.hf.space/upload', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Upload failed');

      setError(null);
      setIsDocumentMode(true);
      setMessages(prev => [...prev, {
        role: 'system',
        content: 'Document uploaded successfully. You can now ask questions about the document. The API key is not required for document-based chat.'
      }]);
      
      // Clear API key when switching to document mode
      setApiKey('');
    } catch (error) {
      setError('Failed to upload document: ' + error);
      setIsDocumentMode(false);
    } finally {
      setUploading(false);
    }
  };

  // Modify handleDelete to better handle mode switching
  const handleDelete = async () => {
    if (!sessionId) {
      setError('Session not initialized');
      return;
    }

    setDeleting(true);
    try {
      const response = await fetch('https://raohamzatariq-chatbot-backend.hf.space/delete-document', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ session_id: sessionId }),
      });

      if (!response.ok) throw new Error('Failed to delete document');

      setIsDocumentMode(false);
      setMessages(prev => [...prev, {
        role: 'system',
        content: 'Document deleted successfully. Switched to regular chat mode.'
      }]);
    } catch (error) {
      setError('Failed to delete document: ' + error);
    } finally {
      setDeleting(false);
    }
  };

  const clearChat = () => setMessages([]);

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <div className="flex h-screen bg-background">
      {/* Left Sidebar */}
      <aside
        className={`fixed md:relative z-[100] w-full md:w-[300px] h-full border-r bg-card/50 backdrop-blur-xl p-6 flex flex-col gap-6 transition-all duration-300 transform md:translate-x-0 ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } md:translate-x-0 md:flex-none`}
      >
        <div className="flex items-center gap-3">
          <BrainCircuit className="text-primary h-7 w-7" />
          <div>
            <h1 className="text-xl font-semibold">BI Chat</h1>
            <p className="text-xs text-muted-foreground">Powered by BI Structure</p>
          </div>
        </div>

        <Tabs defaultValue="settings" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="settings">Settings</TabsTrigger>
            <TabsTrigger value="files">Files</TabsTrigger>
          </TabsList>
          <TabsContent value="settings" className="space-y-6 mt-4">
            <div className="space-y-4">
              <div className="space-y-2">
                <Label>API Key</Label>
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
                    className="absolute right-3 top-2.5 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {isApiKeyVisible ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <Label>Temperature: {temperature}</Label>
                <Slider
                  value={[temperature]}
                  onValueChange={(val: number[]) => setTemperature(val[0])}
                  max={1}
                  step={0.1}
                  className="cursor-pointer"
                />
              </div>

              <div className="flex items-center justify-between">
                <Label>Dark Mode</Label>
                <Switch
                  checked={theme === 'dark'}
                  onCheckedChange={(checked) => setTheme(checked ? 'dark' : 'light')}
                />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="files" className="mt-4">
            <Card className="border-dashed">
              <CardContent className="pt-6 space-y-4">
                <form onSubmit={handleUpload} className="space-y-4">
                  <Input
                    type="file"
                    onChange={(e) => {
                      if (e.target.files) {
                        setFile(e.target.files[0]);
                      }
                    }}
                    accept=".pdf,.docx,.txt"
                    className="border-2 border-dashed bg-muted/50 hover:bg-muted/80 cursor-pointer"
                  />
                  <div className="flex gap-2">
                    <Button
                      type="submit"
                      disabled={uploading}
                      className="flex-1"
                      variant="secondary"
                    >
                      {uploading ? (
                        <Loader2 className="h-4 w-4 animate-spin mr-2" />
                      ) : (
                        <Upload className="h-4 w-4 mr-2" />
                      )}
                      Upload File
                    </Button>
                    {isDocumentMode && (
                      <Button
                        onClick={handleDelete}
                        disabled={deleting}
                        variant="destructive"
                        size="icon"
                      >
                        {deleting ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Trash className="h-4 w-4" />
                        )}
                      </Button>
                    )}
                  </div>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Button variant="destructive" onClick={clearChat} className="mt-auto w-full gap-2">
          <Trash className="h-4 w-4" />
          Clear Chat
        </Button>

        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>v1.0.0</span>
          {isDocumentMode && <Badge variant="secondary">Document Mode</Badge>}
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col pt-16 h-full">
        {/* Chat Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4 max-w-3xl mx-auto">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground py-16 px-4">
                <div className="relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur opacity-75 animate-pulse" />
                  <FileText className="relative h-16 w-16 mx-auto mb-6 opacity-80 transition-transform hover:scale-110 duration-300" />
                </div>
                <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Welcome to BI Chat</h3>
                <p className="text-sm max-w-md mx-auto leading-relaxed">
                  {"Ready to start an intelligent conversation? Upload a document or ask me anything - I'm here to help!"}
                </p>
                <div className="mt-6 flex items-center justify-center gap-2 text-xs text-muted-foreground/60">
                  <span className="flex items-center"><FileText className="h-3 w-3 mr-1" /> Upload documents</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/60" />
                  <span>Ask questions</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/60" />
                  <span>Get insights</span>
                </div>
              </div>
            )}
            
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <Card className={`max-w-[80%] ${
                  message.role === 'user' ? 'bg-primary text-primary-foreground' : 'bg-muted'
                }`}>
                  <CardContent className="p-3">
                    <ReactMarkdown className="prose dark:prose-invert max-w-none">
                      {message.content}
                    </ReactMarkdown>
                  </CardContent>
                </Card>
              </div>
            ))}

            {isLoading && (
              <div className="flex justify-start">
                <Card className="max-w-[80%] bg-muted">
                  <CardContent className="p-3">
                    <Loader2 className="h-6 w-6 animate-spin text-primary" />
                  </CardContent>
                </Card>
              </div>
            )}

            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
          <form onSubmit={handleSubmit} className="max-w-3xl mx-auto p-4">
            <div className="flex gap-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                placeholder={isDocumentMode ? "Ask about your document..." : "Type your message..."}
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={isLoading}>
                {isLoading ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  <Send className="h-4 w-4" />
                )}
              </Button>
            </div>
          </form>
        </div>
      </main>

      {/* Mobile Sidebar Toggle */}
      <button
        className="md:hidden fixed bottom-4 right-4 z-[101] bg-primary text-primary-foreground p-3 rounded-full shadow-lg"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>
    </div>
  );
}

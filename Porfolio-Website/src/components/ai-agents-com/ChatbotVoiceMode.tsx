'use client';

import { useState, useEffect } from 'react';
import { Loader2, X, Mic, MicOff, Speaker } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

type Message = {
  role: 'user' | 'ai' | 'system';
  content: string;
};


interface VoiceModeProps {
  onClose: () => void;
  onVoiceMessage: (message: Message) => void;
  lastMessages?: Message[];
  apiKey: string;
  temperature: number;
}

export default function VoiceMode({
  onClose,
  onVoiceMessage,
  lastMessages = [],
  apiKey,
  temperature,
}: VoiceModeProps) {
  const { theme } = useTheme();
  const [listening, setListening] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [messages, setMessages] = useState<Message[]>(lastMessages);
  const [waveform, setWaveform] = useState<number[]>(Array(12).fill(4));
  const [animationFrameId, setAnimationFrameId] = useState<number | null>(null);

  useEffect(() => {
    if (lastMessages.length > 0) {
      setMessages(lastMessages);
    }
  }, [lastMessages]);

  useEffect(() => {
    // Clean up animation frame on unmount
    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [animationFrameId]);

  useEffect(() => {
    if (listening) {
      animateWaveform();
    } else if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
      setAnimationFrameId(null);
      setWaveform(Array(12).fill(4));
    }
  }, [listening]);

  const animateWaveform = () => {
    const updateWaveform = () => {
      setWaveform(current => 
        current.map(() => Math.max(2, Math.floor(Math.random() * 20)))
      );
      
      const id = requestAnimationFrame(updateWaveform);
      setAnimationFrameId(id);
    };
    
    updateWaveform();
  };

  const handleBotResponse = async (userMessage: Message) => {
    try {
        const API_URL =process.env.NEXT_PUBLIC_URL
      const response = await fetch(`${API_URL}/api/chatbot`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          messages: [...messages, userMessage],
          apiKey,
          temperature,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
      }

      const data: { response: string } = await response.json();

      const botMessage: Message = { role: 'ai', content: data.response };
      setMessages((prev) => [...prev, userMessage, botMessage]);
      onVoiceMessage(userMessage);
      onVoiceMessage(botMessage);
      speakText(botMessage.content);
    } catch (error) {
      console.error('Chat error:', error);
    } finally {
      setProcessing(false);
    }
  };

  const speakText = (text: string) => {
    if (typeof window === 'undefined' || !window.speechSynthesis) return;

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.pitch = 1;
    utterance.rate = 1;
    utterance.volume = 1;

    window.speechSynthesis.speak(utterance);
  };

  const handleVoiceInput = () => {
const SpeechRecognition = 
  typeof window !== 'undefined' &&
  ((window as any).SpeechRecognition || (window as any).webkitSpeechRecognition);
    if (!SpeechRecognition) {
      alert('Speech Recognition API not supported in this browser.');
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = true;
    recognition.lang = 'en-US';

    recognition.onstart = () => {
      setListening(true);
      setTranscript('');
    };

    recognition.onresult = (event: { resultIndex: number; results: SpeechRecognitionResultList }) => {
      const current = event.resultIndex;
      const transcriptText = event.results[current][0].transcript;
      setTranscript(transcriptText);

      if (event.results[current].isFinal) {
        setListening(false);
        setProcessing(true);

        const userMessage: Message = { role: 'user', content: transcriptText };
        setMessages((prev) => [...prev, userMessage]);
        handleBotResponse(userMessage);
      }
    };

    recognition.onerror = (event: { error: string; }) => {
      console.error('Speech recognition error', event.error);
      setListening(false);
    };

    recognition.onend = () => {
      if (listening) {
        setListening(false);
      }
    };

    recognition.start();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-md">
      <div className={`w-full max-w-md rounded-2xl overflow-hidden shadow-2xl transform transition-all duration-500 ${theme === 'dark' ? 'bg-gray-900/90' : 'bg-white/90'} border border-gray-200 dark:border-gray-800`}>
        {/* Header with glossy effect */}
        <div className={`p-5 flex items-center justify-between ${theme === 'dark' ? 'bg-gray-800/50' : 'bg-gray-50/50'} backdrop-blur-sm border-b border-gray-200 dark:border-gray-700`}>
          <div className="flex items-center space-x-2">
            <div className="h-3 w-3 rounded-full bg-green-500 animate-pulse"></div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">Voice Chat</h2>
          </div>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={onClose}
            className="rounded-full hover:bg-gray-200/30 dark:hover:bg-gray-700/30 transition-colors"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Messages container with smooth scrolling */}
        <div className="h-64 overflow-y-auto py-4 px-4 space-y-4 scrollbar-thin scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-700 scrollbar-track-transparent">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`p-3 rounded-2xl max-w-[80%] shadow-md transform transition-all duration-300 ${
                  message.role === 'user'
                    ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white'
                    : 'bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-100'
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
            </div>
          ))}

          {transcript && listening && (
            <div className="flex justify-end">
              <div className="p-3 rounded-2xl max-w-[80%] bg-gradient-to-br from-blue-400/70 to-purple-500/70 text-white shadow-md animate-pulse">
                <p className="text-sm">{transcript}...</p>
              </div>
            </div>
          )}

          {processing && (
            <div className="flex justify-start">
              <div className="p-3 rounded-2xl max-w-[80%] bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-800 dark:text-gray-100 shadow-md flex items-center space-x-2">
                <Loader2 className="h-4 w-4 animate-spin text-blue-500" />
                <span className="text-sm">Processing...</span>
              </div>
            </div>
          )}
        </div>

        {/* Voice controls section with advanced animations */}
        <div className="p-6 flex flex-col items-center bg-gradient-to-b from-transparent to-gray-50/30 dark:to-gray-900/30">
          {/* Waveform visualization */}
          <div className="mb-6 flex items-end justify-center h-12 gap-1 w-full">
            {listening && waveform.map((height, i) => (
              <div
                key={i}
                className="w-1 rounded-full bg-blue-500 transform transition-all duration-75"
                style={{ height: `${height}px` }}
              ></div>
            ))}
          </div>

          <div className="relative mb-6 group">
            {/* Multiple pulse rings when active */}
            {listening && (
              <>
                <div className="absolute inset-0 rounded-full animate-ping opacity-30 bg-blue-500 duration-1000"></div>
                <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-purple-500 duration-700 delay-100"></div>
                <div className="absolute inset-0 rounded-full animate-ping opacity-10 bg-indigo-500 duration-500 delay-200"></div>
              </>
            )}
            
            {/* Main button with hover effects */}
            <Button
              onClick={handleVoiceInput}
              disabled={processing}
              className={`relative rounded-full p-6 shadow-lg transform transition-all duration-300 hover:scale-105 ${
                listening 
                  ? 'bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700' 
                  : 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
              }`}
            >
              {listening ? 
                <MicOff className="h-8 w-8 animate-pulse" /> : 
                <Mic className="h-8 w-8" />
              }
            </Button>
          </div>

          {/* Status text with animated transition */}
          <div className="h-6">
            <p className={`text-sm text-center transition-all duration-300 transform ${
              listening || processing ? 'opacity-100 translate-y-0' : 'opacity-70'
            } ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {listening
                ? "I'm listening to you..."
                : processing
                ? 'Processing your message...'
                : 'Tap the microphone to speak'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
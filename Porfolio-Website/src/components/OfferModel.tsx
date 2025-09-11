"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { X, Bolt, Bot, Zap } from "lucide-react";

const STORAGE_KEY = "offer_modal_closed_v1";

export default function OfferModal() {
  const [open, setOpen] = useState(false);
  const [dontShowAgain, setDontShowAgain] = useState(false);

  useEffect(() => {
    const closed = typeof window !== "undefined" && localStorage.getItem(STORAGE_KEY);
    if (!closed) {
      const t = setTimeout(() => setOpen(true), 350);
      return () => clearTimeout(t);
    }
  }, []);

  useEffect(() => {
    if (open) {
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = 'unset';
      };
    }
  }, [open]);

  function close(remember = false) {
    setOpen(false);
    if (remember && typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, "1");
    }
  }

  if (!open) return null;

  return (
    <>
      {/* Portal-like overlay */}
      <div
        className="fixed inset-0 z-[9999] flex items-center justify-center p-4 animate-fadeIn"
        aria-modal="true"
        role="dialog"
      >
        {/* Backdrop with proper dim effect */}
        <div
          onClick={() => close()}
          className="absolute inset-0 bg-black/40 dark:bg-black/60 backdrop-blur-sm transition-opacity duration-300"
          aria-hidden="true"
        />

        {/* Modal Container */}
        <div className="relative z-10 w-full max-w-4xl mx-auto animate-modalSlideUp">
          {/* Modal Content */}
          <div
            className="relative rounded-2xl overflow-hidden
                       bg-white dark:bg-gray-900
                       shadow-2xl ring-1 ring-black/5 dark:ring-white/10
                       border border-gray-200 dark:border-gray-700
                       max-h-[90vh] overflow-y-auto"
          >
            {/* Close button */}
            <button
              onClick={() => close(dontShowAgain)}
              aria-label="Close promotional offer"
              className="absolute top-4 right-4 z-20 rounded-full p-2 
                         bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm
                         hover:bg-white dark:hover:bg-gray-800 
                         border border-gray-200 dark:border-gray-700
                         transition-all duration-200 shadow-md"
            >
              <X className="h-5 w-5 text-gray-700 dark:text-gray-200" />
            </button>

            {/* Main Content */}
            <div className="p-6 sm:p-8 lg:p-10">
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-8 items-start lg:items-center">
                {/* Left Visual Section */}
                <div className="flex-shrink-0 w-full lg:w-48 h-48 lg:h-40 flex items-center justify-center
                                rounded-2xl bg-gradient-to-br from-blue-600 to-purple-700 
                                dark:from-blue-500 dark:to-purple-600 shadow-2xl
                                transform hover:scale-105 transition-transform duration-300">
                  <div className="text-center">
                    <div className="flex items-center justify-center mb-3">
                      <Bot className="h-12 w-12 lg:h-10 lg:w-10 text-white mr-2" />
                      <span className="font-black text-white text-4xl lg:text-3xl tracking-tight">
                        AI
                      </span>
                    </div>
                    <div className="text-sm text-white/90 font-medium">
                      Custom AI Solutions
                    </div>
                  </div>
                </div>

                {/* Right Content Section */}
                <div className="flex-1 min-w-0">
                  {/* Header Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-6">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold
                                     bg-gradient-to-r from-yellow-100 to-orange-100 text-orange-800
                                     dark:from-yellow-900/40 dark:to-orange-900/40 dark:text-yellow-300
                                     border border-yellow-200 dark:border-yellow-800/50">
                      <Bolt className="h-4 w-4 animate-pulse" />
                      Book your AI project now
                    </span>
                    <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                      ⏰ Limited spots available
                    </div>
                  </div>

                  {/* Main Headline */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black leading-tight 
                                 text-gray-900 dark:text-white mb-4">
                    {"Let's build your "}
                    <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                      AI Agent
                    </span>{" "}
                    & Automation Workflows
                  </h3>

                  {/* Feature Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 
                                    hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <div className="flex-shrink-0 p-2 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                        <Zap className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white text-sm">
                          Automate your business
                        </div>
                        <div className="text-gray-600 dark:text-gray-300 text-xs mt-1">
                          End-to-end workflows to eliminate repetitive tasks
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 
                                    hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <div className="flex-shrink-0 p-2 rounded-lg bg-purple-100 dark:bg-purple-900/30">
                        <Bolt className="h-5 w-5 text-purple-600 dark:text-purple-400" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white text-sm">
                          AI-powered agents
                        </div>
                        <div className="text-gray-600 dark:text-gray-300 text-xs mt-1">
                          Smart assistants for support, outreach, and scheduling
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 
                                    hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <div className="flex-shrink-0 p-2 rounded-lg bg-green-100 dark:bg-green-900/30">
                        <Bot className="h-5 w-5 text-green-600 dark:text-green-400" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white text-sm">
                          Custom development
                        </div>
                        <div className="text-gray-600 dark:text-gray-300 text-xs mt-1">
                          Tailored solutions for your exact business needs
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50 
                                    hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                      <div className="flex-shrink-0 p-2 rounded-lg bg-orange-100 dark:bg-orange-900/30">
                        <svg className="h-5 w-5 text-orange-600 dark:text-orange-400" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12h14M12 5v14" stroke="currentColor" strokeWidth="2" 
                                strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 dark:text-white text-sm">
                          Seamless integrations
                        </div>
                        <div className="text-gray-600 dark:text-gray-300 text-xs mt-1">
                          Connect with CRMs, chat, email, and existing tools
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mb-4">
                    <Link
                      href="/contact"
                      className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3 
                                 rounded-xl font-bold text-base bg-gradient-to-r from-blue-600 to-purple-600 
                                 text-white hover:from-blue-700 hover:to-purple-700 
                                 shadow-lg hover:shadow-xl transform hover:scale-105 
                                 transition-all duration-200"
                    >
                    Book Free Consultation
                    </Link>

                    <Link
                      href="/portfolios?category=AI Agents"
                      className="flex-1 sm:flex-none inline-flex items-center justify-center px-6 py-3 
                                 rounded-xl font-semibold text-base border-2 border-gray-300 dark:border-gray-600 
                                 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200
                                 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-400 dark:hover:border-gray-500
                                 transition-all duration-200"
                    >
                      View My Work
                    </Link>
                  </div>

                  {/* Bottom Controls */}
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 
                                  border-t border-gray-200 dark:border-gray-700">
                    <div className="text-sm text-gray-500 dark:text-gray-400 italic">
                      Transform your business with intelligent AI automation 
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <label className="inline-flex items-center text-sm text-gray-600 dark:text-gray-400 
                                        cursor-pointer select-none hover:text-gray-800 dark:hover:text-gray-200">
                        <input
                          type="checkbox"
                          checked={dontShowAgain}
                          onChange={(e) => setDontShowAgain(e.target.checked)}
                          className="mr-2 h-4 w-4 rounded border-gray-300 dark:border-gray-600 
                                     text-blue-600 focus:ring-blue-500 dark:focus:ring-blue-400"
                        />
                        {"Don't show again"}
                      </label>

                      <button
                        onClick={() => close(dontShowAgain)}
                        className="text-sm font-medium text-gray-500 dark:text-gray-400 
                                   hover:text-gray-700 dark:hover:text-gray-200 
                                   underline underline-offset-2 transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes modalSlideUp {
          from { 
            opacity: 0; 
            transform: translateY(20px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-modalSlideUp {
          animation: modalSlideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}</style>
    </>
  );
}
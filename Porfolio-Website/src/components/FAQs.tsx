import React from 'react';
import { Card, CardContent } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { faqs } from '@/data/data';

const FAQs = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Enhanced animated background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 -left-48 w-72 sm:w-96 h-72 sm:h-96 bg-primary/30 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-0 -right-48 w-72 sm:w-96 h-72 sm:h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/95 to-background/80 backdrop-blur-sm" />

      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-12">
          {/* Animated header section */}
          <div className="text-center space-y-4 animate-in slide-in-from-bottom duration-700">
            <div className="inline-flex items-center justify-center p-2 sm:p-3 rounded-2xl bg-primary/10 hover:bg-primary/20 transition-colors duration-300 backdrop-blur-sm">
              <span className="text-primary font-medium text-sm sm:text-base">Got Questions?</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent animate-gradient-x">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto px-4">
              Find answers to common questions about our services and solutions
            </p>
          </div>

          {/* Enhanced FAQ accordion */}
          <div className="grid gap-3 sm:gap-4 md:gap-6">
            {faqs.map((ele:{id:number,question:string,answer:string}, index:number) => (
              <div
                key={ele.id}
                className="group animate-in slide-in-from-bottom duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Accordion type="single" collapsible>
                  <AccordionItem
                    value={`item-${index}`}
                    className="border border-primary/10 rounded-xl backdrop-blur-md 
                      bg-background/50 dark:bg-background/20
                      hover:bg-primary/5 dark:hover:bg-primary/10 
                      hover:border-primary/20 dark:hover:border-primary/20
                      transition-all duration-300 hover:shadow-lg hover:shadow-primary/5
                      transform hover:scale-[1.02]"
                  >
                    <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 hover:no-underline">
                      <div className="flex items-center gap-3 sm:gap-4 text-left">
                        <span className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium">
                          {index + 1}
                        </span>
                        <span className="text-base sm:text-lg font-medium bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                          {ele.question}
                        </span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 sm:px-6 pb-3 sm:pb-4 pt-2">
                      <div className="pl-9 sm:pl-12">
                        <p className="text-sm sm:text-base text-muted-foreground dark:text-muted-foreground/90 leading-relaxed">
                          {ele.answer}
                        </p>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQs;

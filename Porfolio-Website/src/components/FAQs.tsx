import React from 'react';
import { Card, CardContent } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { faqs } from '@/data/data';

const FAQs = () => {
  return (
    <div className="relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      
      <div className="flex justify-center items-center min-h-[600px] py-12 px-4">
        <Card className="w-full max-w-[600px] backdrop-blur-sm bg-background/95 border border-primary/20 shadow-2xl hover:shadow-primary/10 transition-shadow duration-300">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent mb-8">
              Frequently Asked Questions
            </h2>
            
            <Accordion className="w-full space-y-4" type="multiple">
              {faqs.map((ele:{id:number,question:string,answer:string}, index:number) => (
                <AccordionItem 
                  value={`item ${index}`} 
                  key={ele.id}
                  className="border border-primary/10 rounded-lg px-4 hover:bg-primary/5 transition-colors duration-200"
                >
                  <AccordionTrigger className="hover:no-underline text-lg font-medium py-4">
                    {ele.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {ele.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default FAQs;

import React from 'react';
import { Card, CardContent } from './ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { faqs } from '@/app/data';

const FAQs = () => {
  return (
    <div>
          <div className="flex justify-center items-center min-h-screen">
      <Card className="shadow-lg w-[550px]">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <Accordion className="w-full mt-4" type="multiple">
            {
             faqs.map((ele:{id:number,question:string,answer:string},index:number)=>(
                <AccordionItem value={`item ${index}`} key={ele.id}>
                <AccordionTrigger  className="hover:underline-none">
                  {ele.question}
                </AccordionTrigger>
                <AccordionContent>{ele.answer}</AccordionContent>
              </AccordionItem>
             ))   
            }
          </Accordion>
        </CardContent>
      </Card>
    </div>

    </div>
  );
}

export default FAQs;

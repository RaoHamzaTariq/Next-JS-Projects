
import { Card, CardContent } from "@/components/ui/card"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import {faqsArray,FAQS_ARRAY} from "@/app/data"
import Image from "next/image"
import FAQS_Image from "../../public/FAQS.svg"

export default function Faqs() {
  return (
    <div className="flex flex-col justify-center lg:flex-row lg:items-center lg:justify-around  container mx-auto">
<div className="flex justify-center items-center min-h-screen">
      <Card className="shadow-xl shadow-gray-900 w-[550px] dark:border-gray-500 border-2">
        <CardContent className="p-6">
          <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
          <Accordion className="w-full mt-4" type="multiple">
           {faqsArray.map((faq:FAQS_ARRAY,index:number)=>(
             <AccordionItem className="border-b-0" value={`item ${faq.id}`} key={index} >
             <AccordionTrigger className="hover:underline-none">
               {faq.ques}
             </AccordionTrigger>
             <AccordionContent className="dark:text-white/80 text-gray-700">
               {faq.ans}
             </AccordionContent>
           </AccordionItem>
           ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
    <div>
      <Image height={500} width={500} src={FAQS_Image} alt={""}/>
    </div>
    </div>
    
  )
}
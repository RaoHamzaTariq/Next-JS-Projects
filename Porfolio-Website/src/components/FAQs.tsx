import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Sparkles, MessageCircle, Mail } from 'lucide-react';
import { faqs } from '@/data/data';

const FAQs: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Layers */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 -left-48 w-72 sm:w-96 h-72 sm:h-96 bg-primary/30 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-0 -right-48 w-72 sm:w-96 h-72 sm:h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/95 to-background/85 backdrop-blur-md" />
      <div className="pointer-events-none absolute inset-0 mix-blend-screen opacity-40">
        <Image
          src="/images/Gallery/bg.jpg"
          alt="Abstract tech inspired texture"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20 lg:py-24 relative z-10">
        <div className="max-w-5xl mx-auto space-y-8 sm:space-y-10">
          {/* Hero + CTA */}
          <div className="space-y-6 text-center lg:text-left mx-auto">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-medium tracking-[0.2em] uppercase">
              <Sparkles className="h-4 w-4" />
              Support Hub (FAQS)
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight bg-gradient-to-r from-primary via-primary/70 to-primary/50 bg-clip-text text-transparent">
                Get clarity in minutes, not days.
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Everything you need to know about my process, deliverables, and collaboration style—plus direct ways to reach me if you prefer a personal touch.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-muted-foreground">
              {[
                'Average response time < 4h',
                'Custom AI, data & product builds',
                'Flexible engagement models'
              ].map((item) => (
                <span key={item} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/15 bg-background/60">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  {item}
                </span>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="w-full sm:w-auto rounded-full px-8 shadow-lg shadow-primary/20">
                <Link href="/Contact">Ask a question</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="w-full sm:w-auto rounded-full px-8">
                <Link href="/Portfolio/All">See recent work</Link>
              </Button>
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-[11px] sm:text-xs uppercase tracking-[0.3em] text-muted-foreground">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/15 bg-background/80">
              <MessageCircle className="h-3.5 w-3.5 text-primary" />
              Direct Email
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/15 bg-background/80">
              <Mail className="h-3.5 w-3.5 text-primary" />
              bistructure9211@gmail.com
            </span>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/15 bg-background/80">
              Availability · 24/7
            </span>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            <Accordion type="single" collapsible className="grid gap-3 sm:gap-4">
              {
                Array.isArray(faqs) && faqs.map(
                  (ele: { id: number; question: string; answer: string }, index: number) => (
                    <AccordionItem
                      key={ele.id}
                      value={`item-${index}`}
                      className="border border-primary/10 rounded-2xl backdrop-blur-md bg-background/60 dark:bg-background/30 hover:bg-primary/5 dark:hover:bg-primary/10 hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-lg hover:shadow-primary/5"
                    >
                      <AccordionTrigger className="px-4 sm:px-6 py-3 sm:py-4 hover:no-underline">
                        <div className="flex items-center gap-3 sm:gap-4 text-left">
                          <span className="flex-shrink-0 w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs sm:text-sm font-semibold">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="text-base sm:text-lg font-semibold text-foreground">
                            {ele.question}
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                        <p className="text-sm sm:text-base text-muted-foreground leading-relaxed border-l-2 border-primary/30 pl-4 sm:pl-6 mt-3">
                          {ele.answer}
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  )
                )
              }
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQs;

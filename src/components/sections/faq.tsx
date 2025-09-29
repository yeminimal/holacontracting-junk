"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const faqData = [
  {
    value: "item-1",
    question: "What areas does Hola Contracting Inc. serve?",
    answer:
      "We are headquartered in Edmonton, Alberta, but proudly serve clients across all of Canada. Whether you need junk removal, demolition, or remodeling, our professional crews are available nationwide.",
  },
  {
    value: "item-2",
    question: "What types of junk do you remove?",
    answer:
      "We remove a wide variety of items, including furniture, appliances, electronics, yard waste, construction debris, and more. If you're unsure, just give us a call!",
  },
  {
    value: "item-3",
    question: "Do you recycle or donate items after removal?",
    answer:
      "Absolutely. We prioritize eco-friendly disposal. We donate usable items to local charities and recycle materials whenever possible to minimize landfill waste.",
  },
  {
    value: "item-4",
    question: "How does pricing work for junk removal or contracting services?",
    answer:
      "Pricing is based on the volume of junk or the scope of the contracting project. We offer free, no-obligation estimates so you know the cost upfront.",
  },
  {
    value: "item-5",
    question: "Besides junk removal, what other services do you offer?",
    answer:
      "We offer a range of contracting services, including post-construction cleaning, demolition, and custom remodeling for residential and commercial properties.",
  },
];

const Faq = () => {
  return (
    <section id="faq" className="bg-background py-20 lg:py-24">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-x-24 gap-y-12">
          <div className="flex flex-col items-start gap-y-6 text-left">
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-[#b89c6a]" />
              <p className="font-body text-sm font-semibold uppercase tracking-widest text-[#b89c6a]">
                Faq
              </p>
            </div>
            <h3 className="font-heading text-5xl font-medium text-foreground !leading-tight">
              Your questions, answered effortlessly with us
            </h3>
            <a
              href="tel:+17805048160"
              className="group mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-body text-base font-medium text-accent-foreground transition-colors hover:bg-amber-500"
            >
              Call us now
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
          </div>

          <div className="w-full">
            <Accordion type="single" collapsible defaultValue="item-1">
              {faqData.map((item) => (
                <AccordionItem key={item.value} value={item.value}>
                  <AccordionTrigger className="py-6 text-left font-body text-xl font-medium text-foreground hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="pt-2 pb-4 text-base leading-relaxed text-muted-foreground">
                      {item.answer}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is Tekhliq Labs?",
    answer:
      "Tekhliq Labs is a leading provider of artificial intelligence solutions, specializing in custom LLM applications and AI agent workflows designed to help organizations maximize the benefits of AI technology.",
  },
  {
    question: "What are LLM applications?",
    answer:
      "LLM (Large Language Model) applications utilize advanced machine learning techniques to understand and generate human-like text. They can be used for a variety of tasks, including content creation, data analysis, customer support, and more.",
  },

  {
    question: "Are solutions customizable?",
    answer:
      "Absolutely! We pride ourselves on offering tailored solutions. Our team works closely with you to understand your specific needs and develop applications that align with your goals.",
  },
  {
    question: "What industries do you serve?",
    answer:
      "Tekhliq Labs works with a diverse range of industries, including finance, healthcare, retail, technology, and more. Our adaptable AI solutions can be applied to various sectors, ensuring that we meet the unique demands of each field.",
  },

  {
    question: "How do I get started?",
    answer:
      "Getting started is easy! Simply contact us to schedule a consultation. We’ll discuss your needs, explore potential solutions, and guide you through the process of implementing AI in your organization.",
  },
];

function Faq() {
  return (
    <div className="m-auto mt-12 w-[95%] max-w-[900px] px-4 sm:w-[90%] lg:mt-16 lg:py-2 xl:px-0">
      <div className="py-10 lg:flex lg:py-16">
        <div>
          <h2
            className={cn(
              "text-3xl font-bold leading-tight text-transparent lg:w-[80%] lg:text-4xl",
              "bg-gradient-to-b from-white to-[rgba(255,255,255,0.31)] bg-clip-text",
            )}
          >
            Frequently Asked Questions
          </h2>

          <p className="mb-8 mt-3 text-sm text-white/80 lg:mb-11">
            Still have questions?
          </p>

          <Link
            href="/contact"
            className="rounded-[24px] border border-white/20 px-[3px] py-2 shadow-sm"
          >
            <span className="rounded-[24px] border border-[rgba(255,255,255,0.15)] bg-[rgba(140,69,255,0.4)] px-[18px] py-[6px] text-sm font-medium text-white shadow-[inset_0px_0px_6px_3px_rgba(255,255,255,0.25)] backdrop-blur-md">
              Contact Us
            </span>
          </Link>
        </div>

        <div className="mt-10 lg:-mt-4 lg:w-[70%]">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((entry, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className={cn("mb-2 border-b border-white/10")}
              >
                <AccordionTrigger
                  className={cn(
                    "py-4 text-left text-base font-light text-white/80 transition-colors hover:text-white hover:no-underline",
                  )}
                >
                  {entry.question}
                </AccordionTrigger>
                <AccordionContent className="border-t border-white/5 pt-4 font-light text-white/80">
                  {entry.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}

export default Faq;

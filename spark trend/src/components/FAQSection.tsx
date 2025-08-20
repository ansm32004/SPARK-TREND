import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

const FAQSection = () => {
  const faqs = [
    {
      question: "What is your pricing?",
         answer: "Pricing depends on your project requirements. Please contact us for more information."
    },
    {
      question: "What is your pricing?",
         answer: "We work with a variety of clients and tailor our services to meet your needs."
    },
    {
      question: "What is your pricing?",
         answer: "Timelines vary by project. We'll provide an estimated schedule after discussing your requirements."
    }
  ];

  const handleScheduleCall = () => {
    // Add your scheduling logic here
    console.log("Schedule call clicked");
  };

  return (
    <section className="py-24 bg-background" id="faq">
      <div className="container mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-block bg-brand-orange rounded-full px-8 py-3 mb-8">
            <span className="text-primary-foreground text-sm font-semibold tracking-wide uppercase">
              FAQ
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-text-primary max-w-4xl mx-auto leading-tight">
            FREQUENTLY ASKED{" "}
            <span className="block mt-2">QUESTIONS</span>
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto mb-12">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-surface rounded-2xl border border-border px-6 data-[state=open]:border-brand-orange/30 transition-all duration-300"
              >
                <AccordionTrigger className="text-text-primary hover:text-brand-orange transition-colors duration-300 py-6 text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-text-secondary pb-6 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            onClick={handleScheduleCall}
            className="bg-brand-orange hover:bg-brand-orange-hover text-primary-foreground px-12 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            Discovery call →
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
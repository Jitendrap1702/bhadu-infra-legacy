import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What areas do you operate in?",
    answer:
      "Bhadu Infra primarily operates in Rajasthan, with our headquarters located near AIIMS Jodhpur in Basni Phase 2. We serve clients across Jodhpur, Barmer, Jaisalmer, Pali, and surrounding districts.",
  },
  {
    question: "What type of projects do you handle?",
    answer:
      "We handle a wide range of infrastructure projects including earthwork & excavation, road construction, commercial buildings, residential complexes, industrial projects, and government infrastructure contracts.",
  },
  {
    question: "Do you work with government agencies?",
    answer:
      "Yes, we are a government-approved contractor and have successfully executed numerous projects for PWD, Indian Railways, RIICO, and other public sector organizations.",
  },
  {
    question: "How can we get a quotation?",
    answer:
      "You can request a quotation by filling out our contact form below, sending an email to bhaduinfra@gmail.com, or calling our office. We typically respond within 24-48 hours with a detailed estimate.",
  },
  {
    question: "What machinery do you provide?",
    answer:
      "Our fleet includes excavators, tippers, poclains, road rollers, RMC millers, motor graders, wheel loaders, and bulldozers. We can provide machinery on hire or as part of complete project execution.",
  },
  {
    question: "What is your typical project timeline?",
    answer:
      "Project timelines vary based on scope and complexity. We are committed to on-time delivery and work closely with clients to establish realistic schedules. Our track record shows consistent adherence to agreed timelines.",
  },
];

const FAQSection = () => {
  return (
    <section className="section-padding bg-muted">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-amber font-semibold text-sm tracking-wider uppercase mb-4">
            FAQ
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Frequently Asked
            <span className="text-amber"> Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our services and capabilities.
          </p>
        </div>

        {/* Accordion */}
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-xl px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground hover:text-amber hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

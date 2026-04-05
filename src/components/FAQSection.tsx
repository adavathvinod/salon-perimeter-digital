import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  {
    q: "Do you work with agencies, brands, or individuals?",
    a: "We work with all — from global brands to independent creators — as long as your project needs high‑impact video storytelling.",
  },
  {
    q: "Is there a minimum project size or budget?",
    a: "We work on projects starting from small campaigns to large‑scale productions. Share your vision and we'll create a proposal that fits.",
  },
  {
    q: "How do I get started with a project?",
    a: "Simply reach out via our contact form or email us. We'll schedule a quick call to understand your vision and start shaping the concept.",
  },
  {
    q: "Do you handle the full production process?",
    a: "Yes — from concept and storyboarding to AI‑generated production, editing, and delivery, we handle it end‑to‑end.",
  },
  {
    q: "How involved will I be in the creative process?",
    a: "As involved as you want to be. We can work closely with you for approvals at every step or handle the full process independently.",
  },
  {
    q: "What's the typical project timeline?",
    a: "We have the quickest turnaround times depending on complexity, feedback cycles, and final deliverable formats. Some projects can be done within 24 hours, while some may take more time.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="section-padding">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-primary mb-4">FAQ</p>
          <h2 className="text-3xl md:text-5xl font-bold">All the Details, Explained</h2>
          <p className="mt-4 text-muted-foreground">
            Find quick answers to the most common questions about our services and process.
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/30"
            >
              <AccordionTrigger className="text-sm md:text-base font-medium text-left hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

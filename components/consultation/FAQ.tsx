import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does consultation take?",
    a: "Most consultations are reviewed within 24–48 hours.",
  },
  {
    q: "Is consultation free?",
    a: "Yes. Your initial consultation is completely free.",
  },
  {
    q: "Can I upload photos?",
    a: "Absolutely. Clear photos help us provide more accurate recommendations.",
  },
  {
    q: "Will I receive a skincare routine?",
    a: "Yes. We provide personalized product recommendations and usage guidance.",
  },
  {
    q: "Can I buy products immediately?",
    a: "Yes. Once you've received your recommendation, you can purchase directly from our shop.",
  },
  {
    q: "Do you consult clients outside Ghana?",
    a: "Yes. We offer online consultations for clients worldwide.",
  },
];

export default function FAQ() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <span className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl font-bold text-green-900">
            Everything You Need To Know
          </h2>
        </div>

        <Accordion type="single" collapsible className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="rounded-2xl border px-6"
            >
              <AccordionTrigger>{faq.q}</AccordionTrigger>

              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

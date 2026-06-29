"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Can I use this product every day?",
    answer:
      "Yes. Most Dovita products are formulated for daily use unless otherwise stated.",
  },
  {
    question: "How long before I see results?",
    answer:
      "Results vary depending on your skin or hair condition, but many customers notice improvements within 4–8 weeks with consistent use.",
  },
  {
    question: "Is it suitable for sensitive skin?",
    answer:
      "Our products are made with carefully selected ingredients, but we always recommend performing a patch test before full use.",
  },
  {
    question: "Can I combine it with other products?",
    answer:
      "Yes. Our team can recommend the best routine during your consultation.",
  },
  {
    question: "Do I need sunscreen?",
    answer:
      "Yes. If you're using brightening or exfoliating products, sunscreen is strongly recommended during the day.",
  },
];

export default function ProductFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center">
          <span className="uppercase tracking-[0.3em] text-yellow-500 font-semibold">
            FAQs
          </span>

          <h2 className="mt-4 text-4xl font-bold text-green-900">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="mt-14 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-2xl bg-white border border-slate-200 shadow-sm overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-semibold text-green-900">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition ${open === index ? "rotate-180" : ""}`}
                />
              </button>

              {open === index && (
                <div className="px-6 pb-6 text-slate-600 leading-7">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

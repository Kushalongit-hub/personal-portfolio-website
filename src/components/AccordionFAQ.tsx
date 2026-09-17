"use client";

import { useState } from "react";

type Item = {
  question: string;
  answer: string;
};

export default function AccordionFAQ({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className="border-2 border-brand-black bg-white shadow-brutal"
          >
            <button
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-bold uppercase tracking-widest"
            >
              <span>[{isOpen ? "-" : "+"}] {item.question}</span>
            </button>
            {isOpen && (
              <div className="border-t-2 border-brand-black px-4 py-3 text-sm leading-relaxed">
                {item.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

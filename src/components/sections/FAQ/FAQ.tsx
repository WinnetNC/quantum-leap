import { useState } from "react";
import type { FAQProps } from "../../../types/ui.types";

const FAQ = ({ title, items }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section">
      <div className="container-custom max-w-3xl">

        <h2 className="section-title text-center">{title}</h2>

        <div className="space-y-4">
          {items.map((item, index) => (
            <div key={index} className="card">

              <button
                className="w-full text-left font-semibold"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                {item.question}
              </button>

              {openIndex === index && (
                <p className="mt-2 text-sm text-[color:var(--color-text-subtle)]">
                  {item.answer}
                </p>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
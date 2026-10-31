import { useState } from "react";

export default function FaqList({ items }) {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="faq-list">
      {items.map((item, index) => {
        const open = openIndex === index;
        return (
          <div className={open ? "faq-item open" : "faq-item"} key={item.q}>
            <button
              className="faq-question"
              type="button"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : index)}
            >
              {item.q}
              <span className="faq-icon" aria-hidden="true">
                +
              </span>
            </button>
            {open && <div className="faq-answer">{item.a}</div>}
          </div>
        );
      })}
    </div>
  );
}

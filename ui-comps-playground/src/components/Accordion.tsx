import { useState } from "react";

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = [
    { title: "Section 1", content: "Content 1" },
    { title: "Section 2", content: "Content 2" },
  ];

  return (
    <div className="flex gap-2 mt-2">
      {items.map((item, i) => (
        <div key={i}>
          <button
            className="border-1 border-amber-700 p-2"
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
          >
            {item.title}
          </button>
          {openIndex === i && <div>{item.content}</div>}
        </div>
      ))}
    </div>
  );
};

export default Accordion;

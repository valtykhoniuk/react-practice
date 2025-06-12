import { useEffect, useRef, useState } from "react";

const Dropdown = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="bg-gray-200 px-4 py-2 rounded"
      >
        Меню
      </button>
      {open && (
        <div className="absolute mt-2 bg-white border shadow p-2 w-40">
          <div>Опція 1</div>
          <div>Опція 2</div>
          <div>Опція 3</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;

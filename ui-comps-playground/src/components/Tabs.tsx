import { useState } from "react";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Tab 1", "Tab 2"];
  const content = ["Content 1", "Content 2"];

  return (
    <>
      <div className="flex gap-2">
        {tabs.map((tab, i) => (
          <button
            className="border p-2"
            key={i}
            onClick={() => setActiveTab(i)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4">{content[activeTab]}</div>
    </>
  );
};

export default Tabs;

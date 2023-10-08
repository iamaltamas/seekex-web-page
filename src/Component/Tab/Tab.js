import React, { useState } from "react";
import "./Tab.css";
const Tab = () => {
  const [currentTab, setCurrentTab] = useState("");
  const tabs = [
    { id: 1, tabName: "S" },
    { id: 2, tabName: "M" },
    { id: 3, tabName: "L" },
    { id: 4, tabName: "XL" },
    { id: 5, tabName: "XXL" },
  ];
  const clickHandle = (e) => {
    setCurrentTab(e.target.id);
    console.log(currentTab);
  };
  return (
    <div>
      {tabs?.map((tab, index) => {
        return (
          <button
            className="tab-btn"
            key={index}
            id={tab?.id}
            disabled={currentTab === tab?.id}
            onClick={clickHandle}
          >
            {tab?.tabName}
          </button>
        );
      })}
    </div>
  );
};

export default Tab;

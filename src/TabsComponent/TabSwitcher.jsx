import React, { useState } from "react";
import "../TabsComponent/style.css";
const TabSwitcher = () => {
  const tabs = [
    { id: "home", label: "Home", content: "Welcome to the Home tab!" },
    { id: "profile", label: "Profile", content: "This is your Profile." },
    {
      id: "settings",
      label: "Settings",
      content: "Adjust your Settings here.",
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <>
      <div className="tab-switcher">
        <h1>Tabs Switcher</h1>
        <div className="tab-buttons">
          {tabs.map((tab) => {
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={activeTab === tab.id ? "active" : ""}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <div className="tab-content" data-testid="tab-content">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </>
  );
};
export default TabSwitcher;

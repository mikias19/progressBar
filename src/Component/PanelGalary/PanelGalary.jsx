import React from "react";
import { useState } from "react";
import { panelData } from "../../Model/panelData";
import "./panelGalary.css";
const PanelGalary = () => {
  const [activePanel, setActivePanel] = useState(0);
  const handlePanelClick = (index) => {
    setActivePanel(index);
  };
  return (
    <div className="container">
      {panelData.map((panel, index) => (
        <div
          key={index}
          className={`panel ${activePanel === index ? "active" : ""}`}
          style={{ backgroundImage: `url("${panel.imageUrl}")` }}
          onClick={() => handlePanelClick(index)}
        >
          <h3>{panel.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default PanelGalary;

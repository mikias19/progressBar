import React from "react";
import { useState } from "react";
import "./bluryloading.css";
const BluryLoading = () => {
  const [percentage, setPercentage] = useState(0);

  return (
    <>
      <section
        className="background"
        style={{
          backgroundImage: `url("${"https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80"}")`,
        }}
      ></section>
      <div className="text">{percentage}%</div>
    </>
  );
};

export default BluryLoading;

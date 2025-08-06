import React, { useState } from "react";
import "../TextBtnToggle/style.css";

function ReadMoreToggle() {
  const text = `React is a popular JavaScript library developed by Facebook for 
  building user interfaces, especially single-page applications. It allows
   developers to create reusable UI components that efficiently update and 
   render as data changes. One of React’s key features is the virtual DOM, 
   which improves performance by minimizing direct manipulation of the actual
    DOM.`;
  const [isExpand, setIsExpand] = useState(false);
  const preview = text.slice(0, 100);

  const handleExpand = () => {
    setIsExpand(!isExpand);
  };
  return (
    <div className="readmore-container">
      <h1 className="title">Read More Toggle</h1>
      <p className="readmore-text">{isExpand ? text : preview}</p>
      <button className="readmore-button" onClick={handleExpand}>
        {isExpand ? "Read Less" : "Read More"}
      </button>
    </div>
  );
}

export default ReadMoreToggle;

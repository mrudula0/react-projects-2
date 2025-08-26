import React, { useEffect, useState } from "react";
import "../ScrollToTop/style.css";
function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="backToTop">
      <h1>Back To Top</h1>
      <div>
        {[...Array(40)].map((_, i) => (
          <p key={i}>This is a paragraph{i + 1}</p>
        ))}
      </div>
      <div className="container">
        {isVisible && (
          <button onClick={scrollToTop} className="backtotop-btn">
            BackToTop
          </button>
        )}
      </div>
    </div>
  );
}

export default ScrollToTop;

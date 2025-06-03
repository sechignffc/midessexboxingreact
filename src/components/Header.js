import React from "react";
import "../style.css";

export default function Header() {
  return (
    <header>
      <div className="mainheading">
        <div className="logo">
          <img
            src="./images/Mid-Essex_Tiger1.jpg"
            alt="Mid Essex Boxing Academy Logo"
          />
        </div>
        <div className="heading">
          <h1>Mid Essex Boxing Academy</h1>
          <span className="subheading">Pride - Passion - Glory</span>
        </div>
        <div className="header-spacer"></div>
      </div>
    </header>
  );
}

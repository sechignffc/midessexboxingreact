// NewsGrid.js
import React from "react";
import { Link } from "react-router-dom";
import newsData from "../news.json";
import "../style.css";

const NewsGrid = () => (
  <div className="news-grid">
    {newsData.map((item, idx) => (
      <div key={idx} className="news-card">
        <img
          src={`/images/${item.image}`}
          alt={item.headline}
          style={{
            width: "100%",
            maxHeight: "250px",
            objectFit: "cover",
            borderRadius: "6px",
          }}
        />
        <div
          className="news-date"
          style={{ fontWeight: "bold", marginTop: "0.75em" }}
        >
          {item.date}
        </div>
        <div
          style={{ fontSize: "1.1em", marginTop: "0.5em", textAlign: "center" }}
        >
          <Link to={`/news/${idx}`}>{item.headline}</Link>
        </div>
      </div>
    ))}
  </div>
);

export default NewsGrid;

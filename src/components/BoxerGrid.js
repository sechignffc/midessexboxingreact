// BoxerGrid.js
import React from "react";
import { Link } from "react-router-dom";
import boxerData from "../boxers.json";
import "../style.css";

const BoxerGrid = () => (
  <div className="boxer-page">
    <h2>Click boxer name to view details:</h2>
    <div className="boxer-grid">
      {boxerData.map((item, idx) => (
        <div key={idx} className="boxer-thumb">
          <img
            src={`/images/${item.images[0]}`}
            alt={item.headline}
            style={{
              width: "100%",
              maxHeight: "250px",
              objectFit: "cover",
              borderRadius: "6px",
            }}
          />
          <div
            className="boxer-name"
            style={{ fontWeight: "bold", marginTop: "0.75em" }}
          >
            <Link to={`/boxers/${idx}`}>{item.name}</Link>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default BoxerGrid;

import React, { useState } from "react";
import imageData from "../images.json";
import "../style.css";

const GalleryGrid = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <>
      <div className="gallery-grid">
        {imageData.map((item, idx) => (
          <div key={idx} className="gallery-card">
            <img
              src={`/images/${item}`}
              alt={"Mid Essex Boxing"}
              style={{
                width: "100%",
                maxHeight: "250px",
                objectFit: "cover",
                borderRadius: "6px",
                cursor: "pointer",
              }}
              onClick={() => setSelectedImg(`/images/${item}`)}
            />
          </div>
        ))}
      </div>
      {selectedImg && (
        <div className="lightbox-overlay" onClick={() => setSelectedImg(null)}>
          <img
            src={selectedImg}
            alt="Full size"
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()} // prevents closing when clicking image itself
          />
          <button
            className="lightbox-close"
            onClick={() => setSelectedImg(null)}
          >
            ×
          </button>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;

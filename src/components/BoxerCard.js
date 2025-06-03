import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import boxerData from "../boxers.json";
import "../style.css";

const navBtnBase = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  width: 38,
  height: 38,
  borderRadius: "50%",
  background:
    "linear-gradient(135deg, rgba(20,20,20,.85) 70%, rgba(218,165,32,0.95) 180%)",
  color: "#fffbe1",
  fontWeight: "bold",
  fontSize: "1.4rem",
  boxShadow: "0 2px 10px rgba(0,0,0,0.16)",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 4,
  outline: "none", // remove default outline
  border: "2px solid rgba(255,215,85,0.5)",
  transition: "transform .18s, box-shadow .15s, border .24s",
};

const navBtnHover = {
  transform: "translateY(-50%) scale(1.11)",
  boxShadow: "0 4px 16px rgba(0,0,0,0.22)",
  border: "2.2px solid gold",
};

const backBtnBase = {
  display: "block",
  margin: "2em auto 1em auto",
  padding: "0.7em 3.5em",
  borderRadius: "32px",
  background: "linear-gradient(90deg, goldenrod 60%, #ffd700 130%)",
  color: "#2f1900",
  fontWeight: 700,
  letterSpacing: "0.03em",
  fontSize: "1.13em",
  border: "none",
  boxShadow: "0 4px 16px rgba(0,0,0,.19)",
  transition: "background .21s, color .18s, box-shadow .17s, transform .2s",
  cursor: "pointer",
  outline: "none",
};

const backBtnHover = {
  background: "linear-gradient(90deg, #ffd700 35%, goldenrod 160%)",
  color: "#452300",
  transform: "scale(1.03) translateY(-2px)",
  boxShadow: "0 8px 24px rgba(0,0,0,.14)",
};

const BoxerCard = () => {
  const { boxerId } = useParams();
  const navigate = useNavigate();
  const item = boxerData[boxerId];

  const [imgIdx, setImgIdx] = useState(0);
  const [prevHover, setPrevHover] = useState(false);
  const [nextHover, setNextHover] = useState(false);
  const [backHover, setBackHover] = useState(false);

  if (!item) return <div>Not found</div>;

  const images = item.images || [item.image];

  const prevImage = () =>
    setImgIdx((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const nextImage = () =>
    setImgIdx((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  return (
    <div className="boxer-card-page">
      <div
        className="boxer-card"
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "1.2em",
          boxShadow: "0 4px 24px rgba(0,0,0,0.07)",
          background: "#fff",
          maxWidth: 600,
          margin: "2em auto",
        }}
      >
        {/* Faint blurry background image aligned to bottom */}
        <div
          style={{
            backgroundImage: `url(/images/${images[imgIdx]})`,
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            opacity: 0.13,
            filter: "blur(2.4px)",
            backgroundSize: "cover",
            backgroundPosition: "center bottom",
            zIndex: 1,
            pointerEvents: "none",
            transition: "background-image 0.4s",
          }}
        />
        {/* Optional: Gradient overlay for legibility at bottom */}
        <div
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            bottom: 0,
            top: 0,
            zIndex: 2,
            background:
              "linear-gradient(to top, rgba(0,0,0,0.13) 28%, rgba(0,0,0,0) 80%)",
            pointerEvents: "none",
          }}
        />
        {/* Foreground content */}
        <div
          style={{ position: "relative", zIndex: 3, paddingBottom: "1.5em" }}
        >
          <div style={{ position: "relative", marginTop: "2em" }}>
            <img
              src={`/images/${images[imgIdx]}`}
              alt={item.name}
              style={{
                width: "70%",
                display: "block",
                margin: "0 auto",
                maxHeight: 500,
                objectFit: "cover",
                borderRadius: 12,
                boxShadow: "0 4px 16px rgba(0,0,0,0.11)",
                background: "#fff",
                transition: "0.5s",
              }}
            />
            {images.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  style={{
                    ...navBtnBase,
                    left: "-0.75rem",
                    ...(prevHover ? navBtnHover : {}),
                  }}
                  aria-label="Previous image"
                  onMouseEnter={() => setPrevHover(true)}
                  onMouseLeave={() => setPrevHover(false)}
                >
                  ‹
                </button>
                <button
                  onClick={nextImage}
                  style={{
                    ...navBtnBase,
                    right: "-0.75rem",
                    ...(nextHover ? navBtnHover : {}),
                  }}
                  aria-label="Next image"
                  onMouseEnter={() => setNextHover(true)}
                  onMouseLeave={() => setNextHover(false)}
                >
                  ›
                </button>
              </>
            )}
          </div>
          <h1>{item.name}</h1>
          <h2>{item.nickname}</h2>
          <div style={{ textAlign: "center" }}>
            <b>Fights: </b>
            {item.fights}
          </div>
          <div style={{ textAlign: "center" }}>
            <b>Year: </b>
            {item.year}
          </div>

          <div
            className="boxer-bio"
            style={{ marginTop: "1.2em", textAlign: "center" }}
            dangerouslySetInnerHTML={{ __html: item.bio }}
          />

          {item.achievements && item.achievements.length > 0 && (
            <div
              style={{
                marginTop: "1.2em",
                textAlign: "center",
                color: "goldenrod",
                fontSize: "1em",
              }}
            >
              <strong>Achievements:</strong>
              <ul
                style={{
                  listStyle: "none",
                  textAlign: "center",
                  margin: "0.5em auto 0 auto",
                  padding: "0px",
                  color: "black",
                  fontSize: "1em",
                  fontWeight: 400,
                }}
              >
                {item.achievements.map((ach, idx) => (
                  <li key={idx}>{ach}</li>
                ))}
              </ul>
            </div>
          )}

          <button
            onClick={() => navigate("/boxers")}
            style={{
              ...backBtnBase,
              ...(backHover ? backBtnHover : {}),
            }}
            onMouseEnter={() => setBackHover(true)}
            onMouseLeave={() => setBackHover(false)}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default BoxerCard;

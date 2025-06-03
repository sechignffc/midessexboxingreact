import "../style.css";
import React from "react";

export default function Honours() {
  const achievements = [
    {
      img: "./images/england_boxing.jpg",
      alt: "England Boxing",
      title: "England Boxing National Championships",
      results: [
        { text: "1 x National Champion", names: "Elin Chapman" },
        {
          text: "2 x National Finalists",
          names: "Elin Chapman, Manny Mohamed",
        },
        { text: "1 x Development Finalist", names: "Manny Mohamed" },
        {
          text: "4 x National Semi-finalists",
          names: "Elin Chapman, Manny Mohamed, Tommy Pemberton, Megan King",
        },
        {
          text: "5 x National Quarter-finalists",
          names: "2 x Manny Mohamed, 3 x Tyler O'Connor",
        },
      ],
    },
    {
      img: "./images/NABGC.png",
      alt: "National Boys and Girls Clubs",
      title: "NABGC National Championships",
      results: [
        { text: "1 x National Champion", names: "Megan King" },
        {
          text: "2 x National Finalists",
          names: "Manny Mohamed, Sophia Sanchez",
        },
        {
          text: "3 x Quarter-finalists",
          names: "Manny Mohamed, 2 x Junior Gullam",
        },
      ],
    },
    {
      img: "./images/eastern-counties.jpg",
      alt: "Eastern Counties Boxing",
      title: "Eastern Counties Championships",
      results: [
        { text: "1 x Eastern Counties Champion", names: "TJ Jarvis-Brown" },
        {
          text: "3 x Eastern Counties Finalists",
          names: "Tamuno Bamson, Stanley Brown, Luca Sechi",
        },
      ],
    },
    {
      img: "./images/box_cups.png",
      alt: "Box Cups",
      title: "Box Cups",
      results: [
        { text: "1 x Box Cup Champion", names: "Megan King" },
        { text: "2 x Box Cup Finalists", names: "Sophia Sanchez, Luca Sechi" },
        { text: "1 x Box Cup Semi-finalist", names: "Sophia Sanchez" },
      ],
    },
  ];

  return (
    <section className="honours">
      <h1>Our Achievements &#127942;</h1>
      <p>
        Since competitions resumed after the COVID-19 pandemic, Mid Essex Boxing
        Academy has made extraordinary strides, punching well above its weight
        for a club of our size. Our dedicated boxers have showcased their skills
        at national competitions and prestigious Box Cups across the country.
        Below, we proudly highlight some of our most significant achievements:
      </p>
      <div className="honours-grid">
        {achievements.map((item, i) => (
          <div className="honours-card" key={i}>
            <img
              src={item.img}
              alt={item.alt}
              style={{ objectFit: "contain", background: "white" }}
            />
            <div className="honours-info">
              <h2>{item.title}</h2>
              <ul>
                {item.results.map((r, j) => (
                  <li key={j}>
                    {r.text}
                    <br />
                    <span className="winname">({r.names})</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

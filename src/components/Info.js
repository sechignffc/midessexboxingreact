import React from "react";
import "../style.css";

export default function Info() {
  return (
    <section className="info">
      <h2>How to Find Us</h2>
      <p>
        <span role="img" aria-label="location">
          📍
        </span>
        The entrance to the club can be tricky to spot!
        <br />
        <a
          className="info-btn"
          href="https://www.instagram.com/p/ChwuXtNr2Pz/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View directions on Instagram
        </a>
      </p>
      <hr />
      <h2>England Boxing Website</h2>
      <p>
        <span role="img" aria-label="web">
          🌐
        </span>
        All the official info and resources can be found here:
        <br />
        <a
          className="info-btn"
          href="https://www.englandboxing.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit England Boxing Website
        </a>
      </p>
      <hr />
      <h2>England Boxing Locker</h2>
      <p>
        <span role="img" aria-label="locker">
          🔒
        </span>
        Members can login to the portal here:
        <br />
        <a
          className="info-btn"
          href="https://englandboxing.sport80.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          England Boxing Locker Login
        </a>
      </p>
    </section>
  );
}

import React from "react";
import "../style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="first">
        <p>&#128205;Address:</p>
        <p className="address-line">
          2a Church Green, Broomfield, Chelmsford, CM1 7BD
        </p>
        <p>
          &#128222; Phone: <span className="phone-number">07762 678289</span>
        </p>
        <p>
          &#9993; Email:{" "}
          <a
            href="mailto:midessexboxingclub@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            midessexboxingclub@gmail.com
          </a>
        </p>
      </div>
      <div className="second">
        <div className="col">
          <p>Find Us:</p>
          <div className="findus">
            <p>
              📍To help find us, watch{" "}
              <a
                href="https://www.instagram.com/p/ChwuXtNr2Pz/"
                target="_blank"
                rel="noopener noreferrer"
              >
                this
              </a>{" "}
              video
            </p>
          </div>
        </div>
      </div>
      <div className="third">
        <p>Social Media:</p>
        <ul>
          <li>
            <img src="./images/facebook.png" alt="Facebook" />{" "}
            <a
              href="https://www.facebook.com/MidEssexBoxingClub?locale=en_GB"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </li>
          <li>
            <img src="./images/instagram.png" alt="Instagram" />{" "}
            <a
              href="https://www.instagram.com/mid.essex.boxing/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </li>
          <li>
            <img src="./images/TikTok.png" alt="TikTok" />{" "}
            <a
              href="https://www.tiktok.com/search?q=mid%20essex%20boxing&t=1747851203244"
              target="_blank"
              rel="noopener noreferrer"
            >
              TikTok
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

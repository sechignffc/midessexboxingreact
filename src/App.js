import React, { useState } from "react";
import "./style.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import NewsGrid from "./components/NewsGrid";
import NewsArticle from "./components/NewsArticle";
import Timetable from "./components/Timetable";
import GalleryGrid from "./components/Gallery";
import BoxerGrid from "./components/BoxerGrid";
import BoxerCard from "./components/BoxerCard";
import EventGrid from "./components/Events";
import Honours from "./components/Honours";
import { Routes, Route, Link } from "react-router-dom";
import Info from "./components/Info";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="App">
      <div className="container">
        <Header />

        {/* Mobile Menu Button */}
        <div
          className="menu"
          tabIndex={0}
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Open main menu"
        >
          {/* You can use a hamburger icon here, e.g. &#9776; */}
          &#9776;
        </div>

        {/* Navigation */}
        <nav className={menuOpen ? "nav nav-mobile-open" : "nav"}>
          <ul className="mainmenu-list">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/news" onClick={() => setMenuOpen(false)}>
                News
              </Link>
            </li>
            <li>
              <Link to="/timetable" onClick={() => setMenuOpen(false)}>
                Timetable
              </Link>
            </li>
            <li>
              <Link to="/gallery" onClick={() => setMenuOpen(false)}>
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/boxers" onClick={() => setMenuOpen(false)}>
                Boxers
              </Link>
            </li>
            <li>
              <Link to="/events" onClick={() => setMenuOpen(false)}>
                Events
              </Link>
            </li>
            <li>
              <Link to="/honours" onClick={() => setMenuOpen(false)}>
                Honours
              </Link>
            </li>
            <li>
              <Link to="/info" onClick={() => setMenuOpen(false)}>
                Info
              </Link>
            </li>
          </ul>
        </nav>

        <div className="main-content">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/timetable" element={<Timetable />} />
            <Route path="/honours" element={<Honours />} />
            <Route path="/news" element={<NewsGrid />} />
            <Route path="/news/:newsId" element={<NewsArticle />} />
            <Route path="/boxers" element={<BoxerGrid />} />
            <Route path="/boxers/:boxerId" element={<BoxerCard />} />
            <Route path="/gallery" element={<GalleryGrid />} />
            <Route path="/events" element={<EventGrid />} />
            <Route path="/info" element={<Info />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default App;

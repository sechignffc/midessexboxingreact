import React from "react";
import eventsData from "../events.json"; // your JSON
import "../style.css"; // use same grid & card styling

const EventGrid = () => (
  <div className="event-grid">
    {eventsData.map((event, idx) => (
      <div key={idx} className="event-card">
        <div className="event-title">{event.event}</div>
        <ul className="event-dates">
          {event.dates.map((date, i) => (
            <li key={i}>{date}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);

export default EventGrid;

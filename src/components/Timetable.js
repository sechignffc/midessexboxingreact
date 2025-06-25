import React from "react";
import "../style.css";

export default function timetable() {
  return (
    <div className="timetable">
      <h2>Class Times</h2>
      <table>
        <thead>
          <tr>
            <th>Day</th>
            <th>Time</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Monday</td>
            <td>17:30 - 18:30</td>
            <td>Beginners</td>
          </tr>
          <tr>
            <td></td>
            <td>18:30 - 19:30</td>
            <td>Juniors</td>
          </tr>
          <tr>
            <td></td>
            <td>19:15 - 20:45</td>
            <td>Seniors</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td colspan="2">Closed</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>17:30 - 18:30</td>
            <td>Beginners</td>
          </tr>
          <tr>
            <td></td>
            <td>18:30 - 19:30</td>
            <td>Juniors</td>
          </tr>
          <tr>
            <td></td>
            <td>19:15 - 20:45</td>
            <td>Seniors</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td colspan="2">Closed</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>19:00</td>
            <td>Carded Boxers Only</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

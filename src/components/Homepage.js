import React from "react";
import "../style.css";

export default function homepage() {
  return (
    <div className="main">
      <article>
        <p>
          Welcome to Mid Essex Boxing Academy, where champions are built one
          round at a time. Whether you're stepping into the ring for fitness,
          confidence, or the thrill of competition, our club is a home for
          everyone ready to challenge themselves and grow. Here, every punch is
          a step toward strength, discipline, and self-belief. Join our
          supportive community and discover what you're truly capable of—because
          at Mid Essex Boxing Academy, your journey matters as much as the
          destination.
        </p>
        <div className="index_logo">
          <img src="./images/Mid-Essex_3D.jpg" alt="Mid Essex Logo" />
        </div>
        <video controls autoPlay loop muted>
          <source src="./training_video.mp4" type="video/mp4" />
        </video>
      </article>
      <article>
        <p>
          At Mid Essex Boxing Academy, our training methods blend time-tested
          boxing fundamentals with the latest advancements in sports science.
          Each session is thoughtfully structured, combining technical drills,
          high-intensity interval training, and tailored conditioning circuits
          to build stamina and strength. We emphasise proper technique,
          footwork, and ring awareness, ensuring every member learns safely and
          effectively—whether they're on their first jab or preparing for
          competition.
        </p>
        <p>
          Our dedicated coaches provide personalised feedback and motivation,
          helping you set goals and take pride in every milestone achieved. With
          a focus on discipline, resilience, and support, our training is
          designed to bring out the very best in every boxer.
        </p>
      </article>
      <article>
        <p>
          The boxers at Mid Essex Boxing Academy have achieved incredible
          milestones, both in and out of the ring. Our members have earned
          regional titles, represented Essex at national championships, and
          brought home trophies from some of the most respected amateur
          competitions in the country. Beyond the medals and accolades, our club
          takes pride in the personal growth of every boxer—many have
          transformed their confidence, discipline, and leadership skills
          through their journey with us.
        </p>
        <p>
          Whether it's stepping up for their first spar, volunteering in the
          community, or supporting fellow teammates, our boxers embody the true
          spirit of dedication and sportsmanship that defines Mid Essex Boxing
          Academy.
        </p>
      </article>
    </div>
  );
}

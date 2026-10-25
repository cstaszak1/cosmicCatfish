import React from "react";
import { useNavigate } from "react-router-dom";
import "./BackStory.css";

export default function BackStory() {
  const navigate = useNavigate();
  return (
    <main
      className="backstory"
      style={{ backgroundImage: "url('/space.jpg') " }}
    >
      <section className="story-scene">
        {/*year*/}
        <p className="story-year pixelify-sans">YEAR 2180</p>

        <h1 className="pixelify-sans"> THE END OF EARTH </h1>

        {/*actual background*/}
        <p className="story-open pixelify-sans">Earth is dying.</p>

        <p className="story-paragraph">
          After many years of overpopulation the relentless resource
          consumptions has pushed humanity to brink of exstinction. Food is
          scarce. Energy is scarce. Water is scarce. The resources that once
          sustained the human race are almost exhuasted.
        </p>

        <p className="story-paragraph">
          The survival of the human race depends on this one mission.
        </p>

        <div className="story-org">
          <p>ASSIGNED TO SAVE HUMANITY</p>

          <h2> COSMIC RECOVERY INIITIATIVE</h2>
        </div>

        <button
          className="story-button pixelify-sans"
          onClick={() => navigate("/report")}
          type="button"
        >
          Next
        </button>
      </section>
    </main>
  );
}

import { useNavigate } from "react-router-dom";
import aliens from "../data/aliens.json";
import { useState } from "react";
import "./datingApp.css";
import AlienVisuals from  "./AlienVisuals"

export default function DatingApp() {
  const alienProfiles = Object.values(aliens.Profiles);
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentAlien = alienProfiles[currentIndex];

  const navigate = useNavigate();

  function handleLike() {
    navigate("/connecting", {
      state: { alien: currentAlien },
    });
  }

  function handlePass() {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % alienProfiles.length);
  }
  return (
    <main className="dating-page">
      <section className="phone-frame">
        <div className="phone-screen">
          <h1>Tinderstellar</h1>
          <h4>Find your cosmic connection</h4>

          <div className="alien-picture">
            <AlienVisuals alien = {currentAlien}/>
          </div>

          <div className="profile-details">
            <div className="profile-header">
              <p>{currentAlien.name}</p>
              <p>
                {currentAlien.age} · {currentAlien.planet}
              </p>
            </div>

            <p>Hobbies: {currentAlien.hobbies}</p>
            <p>Job: {currentAlien.job}</p>
            <p>Bio: {currentAlien.BIO}</p>
            <p>Interested in: {currentAlien.interestedIn}</p>
          </div>

          <div className="dating-actions">
            <button className="like-button" onClick={handleLike}>
              ♥
            </button>
            <button className="pass-button" onClick={handlePass}>
              X
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

import { useNavigate, useLocation } from "react-router-dom";
import "./datingApp.css";
import "./Connecting.css";
import AlienVisuals from "./AlienVisuals";


export default function Connecting() {
  const navigate = useNavigate();
  const location = useLocation();

  const currentAlien = location.state?.alien;


if (!currentAlien) {
    return <p style={{ color: "white" }}>No alien selected. Go back to the dating app.</p>;
  }

  function handleLike() {
    navigate("/chat", {
      state: { alien: currentAlien },
    });
  }

  function handlePass() {
    navigate("/dating", {
      state: { alien: currentAlien },
    });
  }

  return (
    <main className="dating-page">
      <section className="phone-frame">
        <div className="connecting-screen phone-screen">
          <h1>Tinderstellar</h1>
          <h4>Find your cosmic connection</h4>

          <div className="alien-picture">
            <AlienVisuals alien={currentAlien} />
          </div>

          <div className="profile-details">
            <h1>You got a match!</h1>
            <p>Go on date?</p>
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

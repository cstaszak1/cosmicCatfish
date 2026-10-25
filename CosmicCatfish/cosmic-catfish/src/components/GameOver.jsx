import { Link } from "react-router-dom";
import "./GameOver.css";

export default function GameOver() {
  return (
    <main
      className="game-over"
      style={{ backgroundImage: "url('/space.jpg')" }}
    >
      <div className="game-over-content">
        <h1 className="pixelify-sans">Game Over</h1>
        <Link to="/" className="try-again-button pixelify-sans">
          Try Again
        </Link>
      </div>
    </main>
  );
}

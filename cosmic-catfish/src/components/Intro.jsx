import { Link } from "react-router-dom";
import "./Intro.css";

export default function Intro() {
  return (
    <main className="intro" style={{ backgroundImage: "url('/space.jpg')" }}>
      <div className="intro-content">
        <h1 className="pixelify-sans">Cosmic Catfish</h1>
        <Link to="/backstory" className="start-button pixelify-sans">
          Start Mission
        </Link>
      </div>
    </main>
  );
}
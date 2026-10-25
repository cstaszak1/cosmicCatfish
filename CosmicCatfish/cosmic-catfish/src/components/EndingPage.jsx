import { Link } from "react-router-dom";
import "./Outro.css";

export default function Outro() {
  return (
    <main className="outro" style={{ backgroundImage: "url('/space.jpg')" }}>
      <div className="outro-content pixelify-sans">
        <h1>You Won!</h1>
        <Link to="/" className="startover-button pixelify-sans">
          Start Over
        </Link>
      </div>
    </main>
  );
}

import { Link } from "react-router-dom";
import "./Ending.css";

export default function Ending() {
    return (
        <main className="ending" style={{ backgroundImage: "url('/space.jpg')" }}>
            <div className="ending-content">
                <h1 className="pixelify-sans">Game Over</h1>
                <Link to="/" className="start-over-button pixelify-sans">
                    Start Over
                </Link>
            </div>
        </main> 
    );
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import cutsceneData from "../data/cutscene.json";
import Agent from "./Agent";
import Spy from "./Spy";
import "./cutscene.css";

export default function Cutscene() {
  const [cutsceneIndex, setCutsceneIndex] = useState(0);
  const navigate = useNavigate();

  const cutscene = cutsceneData.lines;
  const line = cutscene[cutsceneIndex];
  const last = cutsceneIndex === cutscene.length - 1;

  function nextLine() {
    if (!last) {
      setCutsceneIndex((prev) => prev + 1);
    }
  }

  function startGame() {
    navigate("/report");
  }

  return (
    <main className="cutscene-page">
      <div className="cutscene-box">
        <div className="stage">
          <div className="char char-left">
            <Agent />
          </div>
        </div>

        <div className="dialogue-box">
          <p className="speaker-name">{line.speaker}</p>
          <p className="speech-text">{line.text}</p>

          {last ? (
            <button className="cutscene-btn" onClick={startGame}>
              Start Mission
            </button>
          ) : (
            <button className="cutscene-btn" onClick={nextLine}>
              Next
            </button>
          )}
        </div>
      </div>
    </main>
  );
}

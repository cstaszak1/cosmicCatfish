import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import allDialogue from "../data/ChatDialogue.json";
import "./Chat.css";

const ALIENS = {
  Alien: { name: "Beepboopba", emoji: "👽" },
  Alien2: { name: "Leaploopla", emoji: "🔥" },
  Zorp: { name: "Zorp", emoji: "❤️" },
};

export default function Chat() {
  const { alienID = "Zorp" } = useParams();

  return <ChatWindow key={alienID} alienID={alienID} />;
}

function ChatWindow({ alienID }) {
  const navigate = useNavigate();
  const location = useLocation();

  const dialogue = allDialogue[alienID];
  const alien = ALIENS[alienID] || {
    name: alienID,
    emoji: "👽",
  };

  const [messages, setMessages] = useState([]);
  const [currentID, setCurrentID] = useState("start");
  const [typing, setTyping] = useState(true);
  const bottomRef = useRef(null);

  const node = dialogue?.[currentID];

  // True only when we arrived from the first planet's chat
  const secondPlanet = location.state?.secondPlanet === true;

  useEffect(() => {
    if (!node) return;

    setTyping(true);

    const timer = setTimeout(() => {
      setMessages((prev) => [...prev, { from: "alien", text: node.text }]);
      setTyping(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [currentID, node]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, typing]);

  function choose(choice) {
    setMessages((prev) => [...prev, { from: "user", text: choice.text }]);
    setCurrentID(choice.next);
  }

  function handleNext() {
    if (secondPlanet) {
      // Both planets have now been visited
      navigate("/mission-complete");
    } else {
      // Go to whichever planet hasn't been visited
      const nextAlien = alienID === "Alien2" ? "Alien" : "Alien2";

      navigate(`/chat/${nextAlien}`, {
        state: { secondPlanet: true },
      });
    }
  }

  if (!dialogue) {
    return (
      <h1 style={{ color: "white" }}>No dialogue found for "{alienID}"</h1>
    );
  }

  if (!node) {
    return (
      <h1 style={{ color: "white" }}>Dialogue step not found: "{currentID}"</h1>
    );
  }

  return (
    <main className="chat-page">
      <section className="chat-frame">
        <div className="chat-screen">
          <header className="chat-header">
            <div className="avatar">{alien.emoji}</div>
            <span className="contact-name">{alien.name}</span>
          </header>

          <div className="chat-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`bubble ${msg.from}`}>
                {msg.text}
              </div>
            ))}

            {typing && (
              <div className="bubble alien typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}

            {!typing && node.ending && (
              <div className={`result ${node.ending}`}>
                {node.ending === "good"
                  ? "It's a match!"
                  : "They unmatched you"}
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <div className="chat-options">
            {!typing &&
              node.choices?.map((choice, i) => (
                <button
                  key={i}
                  className="option-button"
                  onClick={() => choose(choice)}
                >
                  {choice.text}
                </button>
              ))}

            {!typing && node.ending === "bad" && (
              <button
                className="option-button"
                onClick={() => navigate("/game-over")}
              >
                Try Again
              </button>
            )}

            {!typing && node.ending === "good" && (
              <button className="option-button" onClick={handleNext}>
                {secondPlanet ? "COMPLETE MISSION" : "NEXT"}
              </button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

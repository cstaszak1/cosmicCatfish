import "./MissionComplete.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MissionComplete() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(0);

  const survivalFacts = [
    {
      name: "Shelter",
      icon: "🏠",
      description:
        "Heated, pressurized habitats protect humans from Mars's freezing temperatures and thin atmosphere.",
    },
    {
      name: "Oxygen",
      icon: "💨",
      description:
        "Special machines can extract oxygen from Mars's carbon dioxide-rich atmosphere, providing breathable air for humans inside their habitats.",
    },
    {
      name: "Water",
      icon: "💧",
      description:
        "Martian ice can be extracted and purified to provide water for drinking and agriculture.",
    },
    {
      name: "Radiation",
      icon: "🛡️",
      description:
        "Underground shelters and thick layers of Martian soil help shield settlers from radiation.",
    },
    {
      name: "Food",
      icon: "🌱",
      description:
        "Controlled indoor greenhouses can grow crops using artificial lighting, water, and nutrients.",
    },
    {
      name: "Energy",
      icon: "⚡",
      description:
        "Solar panels and nuclear power systems can provide electricity for life support.",
    },
  ];

  function handleButton() {
    navigate("/ending");
  }

  return (
    <main
      className="mission-page"
      style={{ backgroundImage: "url('/space.jpg')" }}
    >
      <div className="mission-dashboard">
        <h2>PLANETARY ASSESSMENT</h2>

        <div className="planet-cards">
          <div className="planet-card mars-card">
            <h2>MARS</h2>
            <img src="../mars.jpg" className="planet"></img>
            <h3>CONDITIONAL</h3>
            <p>Habitable with engineered shelters</p>
          </div>

          <div className="planet-card venus-card">
            <h2>VENUS</h2>
            <img src="../venus.jpg" className="planet"></img>
            <h3>REJECTED</h3>
            <p>Extreme heat and atmospheric pressure</p>
          </div>
        </div>

        <section className="survival-section">
          <h2>MARS SURVIVAL PROTOCOL</h2>
          <p>Click a survival system to learn more.</p>

          <div className="survival-icons">
            {survivalFacts.map((fact, index) => (
              <button
                key={fact.name}
                className={
                  selected === index
                    ? "survival-button active"
                    : "survival-button"
                }
                onClick={() => setSelected(index)}
              >
                <span>{fact.icon}</span>
                <p>{fact.name}</p>
              </button>
            ))}
          </div>

          <div className="survival-description">
            <h3>{survivalFacts[selected].name}</h3>
            <p>{survivalFacts[selected].description}</p>
          </div>
        </section>
        <br />

        <p className="mission-agency">COSMIC RECOVERY INITIATIVE</p>

        <h1>MISSION COMPLETE</h1>
        <p>HUMANITY'S FUTURE: UNLOCKED</p>
        <button className="end-button" onClick={handleButton} type="button">
          FINISH
        </button>
      </div>
    </main>
  );
}

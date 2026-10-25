import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import DatingApp from "./components/DatingApp";
import Connecting from "./components/Connecting";
import BackStory from "./components/Backstory";
import MissionReport from "./components/MissionReport";
import MissionComplete from "./components/MissionComplete";
import Outro from "./components/EndingPage";
import Chat from "./components/Chat";
import GameOver from "./components/GameOver";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/dating" element={<DatingApp />} />
        <Route path="/connecting" element={<Connecting />} />
        <Route path="/backstory" element={<BackStory />} />
        <Route path="/report" element={<MissionReport />} />
        <Route path="/chat/:alienID" element={<Chat />} />
        <Route path="/mission-complete" element={<MissionComplete />} />
        <Route path="/ending" element={<Outro />} />
        <Route path="/game-over" element={<GameOver />} />
      </Routes>
    </Router>
  );
}

export default App;

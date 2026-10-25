import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Intro from "./components/Intro";
import DatingApp from "./components/DatingApp";
import Connecting from "./components/Connecting";
//import Chat from "./components/Chat";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/dating" element={<DatingApp />} />
        <Route path="/connecting" element={<Connecting />} />;
      </Routes>
    </Router>
  );
}
///<Route path="/chat" element={<Chat />} />

export default App;

import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import BackStory from "./components/BackStory";
import Ending from "./components/Ending";
import Intro from "./components/Intro";
import Chat from "./components/Chat";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Intro />} />
        <Route path="/backstory" element={<BackStory />} />
        <Route path="/next" element={<h1>Next Page</h1>} />
        <Route path="/ending" element={<Ending />} />
        <Route path="/chat/:alienID" element={<Chat />} />
        
      </Routes>
    </Router>
  );
}

export default App;
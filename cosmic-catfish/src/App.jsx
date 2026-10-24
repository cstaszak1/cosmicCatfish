import {BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import BackStory from "./components/BackStory";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/BackStory" />} />
        <Route path="/backstory" element={<BackStory />} />
        <Route path="/next" element={<h1>Next Page</h1>} />
        
      </Routes>
    </Router>
  );
}

export default App;
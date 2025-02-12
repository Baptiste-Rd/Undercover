import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import CreerPage from "./Creer";
import RejoindrePage from "./Rejoindre";
import GameRoom from "./GameRoom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/creer" element={<CreerPage />} />
        <Route path="/rejoindre" element={<RejoindrePage />} />
        <Route path="/game" element={<GameRoom />} />
      </Routes>
    </Router>
  );
}

export default App;
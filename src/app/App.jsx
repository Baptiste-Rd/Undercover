import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./HomePage";
import CreerPage from "./Creer";
import RejoindrePage from "./Rejoindre";
import GameRoom from "./GameRoom";
import GameMode from "./GameMode";
import Rules from "./Rules";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/creer" element={<CreerPage />} />
        <Route path="/rejoindre" element={<RejoindrePage />} />
        <Route path="/game" element={<GameRoom />} />
        <Route path="/gameMode" element={<GameMode />} />
        <Route path="/rules" element={<Rules />} />
      </Routes>
    </Router>
  );
}

export default App;

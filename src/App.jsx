import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./homepage";
import CreerPage from "./creer";
import RejoindrePage from "./rejoindre";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/creer" element={<CreerPage />} />
        <Route path="/rejoindre" element={<RejoindrePage />} />
      </Routes>
    </Router>
  );
}

export default App;

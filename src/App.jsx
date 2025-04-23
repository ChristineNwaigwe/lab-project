//Special thanks to Jenny Peng '27 for teaching me how to use a router in REACT, this was fun and youre a g//
//Also huge shoutout to my gf for helping immensly, thank you <3//

import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TeamMembers from "./pages/TeamMembers";
import Publications from "./pages/Publications";
import WUSMBanner from "./pages/WUSMBanner";
import "./App.css";
import wustlLogo from './assets/wustl.svg';
function App() {
  return (
    <Router>
      <WUSMBanner />

      <div className="app-container">
        <header className="header">
          <Link to="/">
            <img src={wustlLogo} alt="WUSTL Logo" className="logo" />
          </Link>
          <h1>S Inoue Lab</h1>
          <p>Department of Psychiatry, Washington University in St. Louis</p>

          {/* 🔗 Nav Links */}
          <nav className="nav-links">
            <Link to="/">Home</Link> |{" "}
            <Link to="/publications">Publications</Link> |{" "}
            <Link to="/teammembers">Lab Members</Link> {" "}
          </nav>
        </header>

        <main className="main-content">
          <h2>Welcome</h2>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/teammembers" element={<TeamMembers />} />
          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Inoue Lab | Washington University in St. Louis</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;

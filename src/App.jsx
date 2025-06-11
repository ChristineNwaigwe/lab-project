//Special thanks to Jenny Peng '27 for teaching me how to use a router in REACT, this was fun and youre a g//
//Also huge shoutout to my gf for helping immensly, thank you <3//

import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import TeamMembers from "./pages/TeamMembers";
import Publications from "./pages/Publications";
import Contact from "./pages/Contact";
import WUSMBanner from "./pages/WUSMBanner";
import "./App.css";
import wustlLogo from './assets/wustl.svg';
import LabGallery from "./pages/LabGallery";
function App() {
  return (
    <Router>
      <WUSMBanner />

      <div className="app-container">
        <header className="header">
          <Link to="/">
            <img src={wustlLogo} alt="WUSTL Logo" className="logo" />
          </Link>
          <h1>S. Inoue Lab</h1>
          <p>Department of Psychiatry, Washington University in St. Louis</p>

          {/* 🔗 Nav Links */}
          <nav className="nav-links">
            <Link to="/">Home</Link> |{" "}
            <Link to="/publications">Publications</Link> |{" "}
            <Link to="/teammembers">Lab Members</Link> |{" "}
            <Link to="/contact">Contact Us</Link> |{" "}
            <Link to="/labgallery">Lab News</Link> {" "}

          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/teammembers" element={<TeamMembers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/labgallery" element={<LabGallery />} />

          </Routes>
        </main>

        <footer className="footer">
          <p>&copy; {new Date().getFullYear()} Inoue Lab | Washington University in St. Louis</p>
        </footer>
      </div>
      <div id="wusm-footer">
        <div className="wrapper clearfix">
          <div id="wusm-footer-left">
            <a href="https://medicine.wustl.edu/">
              <img src={wustlLogo} alt="WashU Medicine" className="logo" />
            </a>
          </div>
          <div id="wusm-footer-right">
            <nav>
              <a className="first-child" href="https://emergency.wustl.edu/">Emergency</a>
              <a href="/policies/">Policies</a>
              <a className="last-child" href="/news/">News</a>
            </nav>
            <div id="copyright">
              <a href="https://wustl.edu/about/compliance-policies/intellectual-property-research-policies/copyright-information/">
                © 2025 Washington University in St. Louis
              </a>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
